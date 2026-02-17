async function getUserPermission() {
    await navigator.mediaDevices.getUserMedia({ audio: true });
    const micPermission = await navigator.permissions.query({ name: "microphone" });
    if (micPermission.state === "granted") {
        window.close();
    }
}

getUserPermission();
