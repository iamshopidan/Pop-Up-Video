// ============================================
// Action Click — must get stream ID here (user gesture context required)
// ============================================

chrome.runtime.onInstalled.addListener(() => {
    // Don't use openPanelOnActionClick — we need action.onClicked to fire
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: false });
});

chrome.action.onClicked.addListener(async (tab) => {
    // Open the side panel
    await chrome.sidePanel.open({ windowId: tab.windowId });

    // Get stream ID while we have user gesture context
    try {
        const streamId = await chrome.tabCapture.getMediaStreamId({ targetTabId: tab.id });
        await chrome.storage.session.set({ cachedStreamId: streamId, captureTabId: tab.id });
        console.log('[BG] Initial stream ID cached for tab', tab.id);
    } catch (error) {
        console.warn('Could not get stream ID:', error.message);
        await chrome.storage.session.remove(['cachedStreamId', 'captureTabId']);
    }
});

// ============================================
// Offscreen Document Management
// ============================================

let offscreenCreating = null;
let offscreenReady = false;
let offscreenReadyResolvers = [];

async function ensureOffscreenDocument() {
    const existingContexts = await chrome.runtime.getContexts({
        contextTypes: ['OFFSCREEN_DOCUMENT'],
        documentUrls: [chrome.runtime.getURL('offscreen.html')]
    });

    if (existingContexts.length > 0) {
        offscreenReady = true;
        return;
    }

    if (offscreenCreating) {
        await offscreenCreating;
    } else {
        offscreenReady = false;
        offscreenCreating = chrome.offscreen.createDocument({
            url: 'offscreen.html',
            reasons: ['USER_MEDIA', 'AUDIO_PLAYBACK'],
            justification: 'Tab audio capture, playback, and Whisper transcription'
        });
        await offscreenCreating;
        offscreenCreating = null;
    }

    if (!offscreenReady) {
        await new Promise((resolve) => {
            offscreenReadyResolvers.push(resolve);
        });
    }
}

// ============================================
// Tab Capture
// ============================================

async function startTabCapture() {
    console.log('[BG] startTabCapture called');

    // Always get a fresh stream ID — the cached one from extension open may have expired.
    // Use the stored captureTabId (the tab the user clicked the extension icon on)
    // instead of querying the active tab, which may have changed (e.g. chrome://newtab).
    try {
        const { captureTabId } = await chrome.storage.session.get('captureTabId');
        console.log('[BG] Stored captureTabId:', captureTabId);
        if (captureTabId) {
            console.log('[BG] Refreshing stream ID for stored tab', captureTabId);
            const streamId = await chrome.tabCapture.getMediaStreamId({ targetTabId: captureTabId });
            await chrome.storage.session.set({ cachedStreamId: streamId });
            console.log('[BG] Fresh stream ID obtained');
        } else {
            console.warn('[BG] No captureTabId stored — cannot refresh stream ID');
        }
    } catch (err) {
        console.warn('[BG] Could not refresh stream ID:', err.message);
        // Fall through to use cached ID if available
    }

    const { cachedStreamId } = await chrome.storage.session.get('cachedStreamId');
    console.log('[BG] cachedStreamId:', cachedStreamId ? 'present' : 'MISSING');

    if (!cachedStreamId) {
        chrome.runtime.sendMessage({
            type: 'tab-capture-error',
            error: 'No tab audio available. Close and reopen the extension on a regular webpage.'
        });
        return;
    }

    try {
        console.log('[BG] Ensuring offscreen document...');
        await ensureOffscreenDocument();
        console.log('[BG] Offscreen ready, sending start-tab-capture to offscreen');

        chrome.runtime.sendMessage({
            target: 'offscreen',
            type: 'start-tab-capture',
            streamId: cachedStreamId
        });
    } catch (error) {
        console.error('[BG] Tab capture error:', error);
        chrome.runtime.sendMessage({ type: 'tab-capture-error', error: error.message });
    }
}

function stopTabCapture() {
    chrome.runtime.sendMessage({
        target: 'offscreen',
        type: 'stop-tab-capture'
    });
}

function destroyTabCapture() {
    console.log('[BG] destroyTabCapture called');
    chrome.storage.session.remove('cachedStreamId');
    // Close the entire offscreen document — guarantees all streams stop
    try {
        chrome.offscreen.closeDocument();
    } catch (e) {
        // Document might not exist
    }
    offscreenReady = false;
}

// ============================================
// Side Panel Lifecycle
// ============================================

let destroyTimer = null;

chrome.runtime.onConnect.addListener((port) => {
    if (port.name === 'sidepanel') {
        console.log('[BG] Sidepanel connected');
        // Panel (re)connected — cancel any pending cleanup
        if (destroyTimer) {
            console.log('[BG] Cancelling pending destroy timer');
            clearTimeout(destroyTimer);
            destroyTimer = null;
        }

        port.onDisconnect.addListener(() => {
            console.log('[BG] Sidepanel port disconnected, starting 3s destroy timer');
            // Port disconnects BOTH when the panel closes AND when
            // the service worker goes idle. Delay cleanup so the
            // sidepanel can reconnect if it's just a SW restart.
            // If no reconnection within 3s, the panel is truly closed.
            destroyTimer = setTimeout(() => {
                console.log('[BG] Destroy timer fired — panel did not reconnect');
                destroyTabCapture();
                destroyTimer = null;
            }, 3000);
        });
    }
});

// ============================================
// Message Routing
// ============================================

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'start-tab-capture') {
        // Return true to keep service worker alive during async startTabCapture
        startTabCapture().then(() => sendResponse({ ok: true })).catch(err => {
            console.error('startTabCapture failed:', err);
            sendResponse({ ok: false, error: err.message });
        });
        return true;
    } else if (message.type === 'stop-tab-capture') {
        stopTabCapture();
    } else if (message.type === 'destroy-tab-capture') {
        destroyTabCapture();
    } else if (message.type === 'offscreen-ready') {
        offscreenReady = true;
        offscreenReadyResolvers.forEach(resolve => resolve());
        offscreenReadyResolvers = [];
    }
});
