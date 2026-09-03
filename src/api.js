// Idle timer reset on API call
let idleTimer;

function apiCall() {
    resetIdleTimer();
    // Logic for API call
    // ...
}

function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(autoSignOut, timeoutValue);
}
