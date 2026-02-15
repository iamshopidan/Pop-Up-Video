/**
 * Offscreen document for tab audio capture and Whisper transcription.
 * Receives a stream ID from background.js, captures tab audio via MediaRecorder,
 * and sends 5-second chunks to the Whisper API for transcription.
 *
 * The media stream and AudioContext persist across pause/resume cycles.
 * Only the MediaRecorder is stopped/restarted.
 */

const WHISPER_URL = 'https://popup-video.quick.shopify.io/api/ai/audio/transcriptions';
const CHUNK_DURATION_MS = 5000;

let mediaStream = null;
let mediaRecorder = null;
let rotationInterval = null;
let isCapturing = false;
let audioContext = null;
let analyser = null;
let hasAudioActivity = false;
let silenceCheckInterval = null;

// Common Whisper hallucinations on silence
const HALLUCINATIONS = new Set([
    'you', 'you.', 'the', 'the.', 'a', 'i',
    'bye', 'bye.', 'bye bye', 'bye bye.',
    'thank you', 'thank you.', 'thanks', 'thanks.',
    'thank you for watching', 'thank you for watching.',
    'thanks for watching', 'thanks for watching.',
    'the end', 'the end.', 'so',
    'subtitles by the amara.org community',
    'subscribe', 'subscribe.',
]);

async function startCapture(streamId) {
    try {
        console.log('[Offscreen] startCapture called, streamId:', streamId ? 'present' : 'MISSING');
        // Reuse existing stream if still active (resume after pause)
        if (!mediaStream || !mediaStream.active) {
            console.log('[Offscreen] Creating new media stream...');
            mediaStream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    mandatory: {
                        chromeMediaSource: 'tab',
                        chromeMediaSourceId: streamId
                    }
                }
            });
            console.log('[Offscreen] Media stream created successfully');

            // Pipe captured audio back to speakers so the user can still hear it
            audioContext = new AudioContext();
            const source = audioContext.createMediaStreamSource(mediaStream);
            source.connect(audioContext.destination);

            // Monitor audio levels to detect silence
            analyser = audioContext.createAnalyser();
            analyser.fftSize = 2048;
            source.connect(analyser);
        }

        isCapturing = true;
        hasAudioActivity = false;
        createAndStartRecorder();

        // Monitor audio levels — mark chunk as having activity if RMS exceeds threshold
        const dataArray = new Uint8Array(analyser.fftSize);
        silenceCheckInterval = setInterval(() => {
            analyser.getByteTimeDomainData(dataArray);
            let sum = 0;
            for (let i = 0; i < dataArray.length; i++) {
                const sample = (dataArray[i] - 128) / 128;
                sum += sample * sample;
            }
            const rms = Math.sqrt(sum / dataArray.length);
            if (rms > 0.01) {
                hasAudioActivity = true;
            }
        }, 250);

        // Every 5 seconds, stop the recorder (produces a complete file),
        // ondataavailable sends it to Whisper, onstop restarts the recorder.
        rotationInterval = setInterval(() => {
            if (mediaRecorder && mediaRecorder.state === 'recording') {
                mediaRecorder.stop();
            }
        }, CHUNK_DURATION_MS);

        chrome.runtime.sendMessage({ type: 'tab-capture-started' });
    } catch (error) {
        console.error('Failed to start tab capture:', error);
        chrome.runtime.sendMessage({ type: 'tab-capture-error', error: error.message });
    }
}

function createAndStartRecorder() {
    mediaRecorder = new MediaRecorder(mediaStream, {
        mimeType: 'audio/webm;codecs=opus'
    });

    mediaRecorder.ondataavailable = async (event) => {
        if (event.data.size > 0 && hasAudioActivity) {
            await transcribeChunk(event.data);
        }
        // Reset for next chunk
        hasAudioActivity = false;
    };

    mediaRecorder.onstop = () => {
        // Restart recording if we're still capturing (rotation cycle)
        // Don't restart if pauseCapture() was called
        if (isCapturing && mediaStream?.active) {
            createAndStartRecorder();
        }
    };

    mediaRecorder.onerror = (event) => {
        console.error('MediaRecorder error:', event.error);
    };

    mediaRecorder.start();
}

function destroyCapture() {
    // Full cleanup — kill everything including the stream
    isCapturing = false;
    clearInterval(rotationInterval);
    rotationInterval = null;
    clearInterval(silenceCheckInterval);
    silenceCheckInterval = null;

    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
    }
    mediaRecorder = null;

    if (audioContext) {
        audioContext.close();
        audioContext = null;
    }
    analyser = null;

    if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
        mediaStream = null;
    }
}

function pauseCapture() {
    // Stop the recorder but keep the stream and AudioContext alive
    isCapturing = false;
    clearInterval(rotationInterval);
    rotationInterval = null;
    clearInterval(silenceCheckInterval);
    silenceCheckInterval = null;

    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
    }
    mediaRecorder = null;
    chrome.runtime.sendMessage({ type: 'tab-capture-stopped' });
}

async function transcribeChunk(audioBlob) {
    try {
        const formData = new FormData();
        formData.append('file', audioBlob, 'audio.webm');
        formData.append('model', 'whisper-1');
        formData.append('language', 'en');

        const response = await fetch(WHISPER_URL, {
            method: 'POST',
            body: formData,
            credentials: 'include'
        });

        if (!response.ok) {
            const body = await response.text().catch(() => '');
            console.warn(`Whisper API returned ${response.status}: ${body}`);
            chrome.runtime.sendMessage({
                type: 'tab-capture-error',
                error: `Whisper API ${response.status}. Are you logged into Quick?`
            });
            return;
        }

        const result = await response.json();
        const text = result.text?.trim();

        if (text && !HALLUCINATIONS.has(text.toLowerCase())) {
            chrome.runtime.sendMessage({ type: 'tab-transcript', text });
        }
    } catch (error) {
        // Non-fatal: skip this chunk and keep recording
        console.warn('Whisper transcription failed for chunk:', error);
    }
}

// Listen for commands from background.js
chrome.runtime.onMessage.addListener((message) => {
    if (message.target !== 'offscreen') return;

    switch (message.type) {
        case 'start-tab-capture':
            startCapture(message.streamId);
            break;
        case 'stop-tab-capture':
            pauseCapture();
            break;
        case 'destroy-tab-capture':
            destroyCapture();
            break;
    }
});

// Signal to background that the offscreen document is ready
chrome.runtime.sendMessage({ type: 'offscreen-ready' });
