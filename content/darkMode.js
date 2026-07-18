const DARK_CLASS = "focusflow-dark";

chrome.storage.local.get("darkMode", (data) => {
    if (data.darkMode) {
        document.documentElement.classList.add(DARK_CLASS);
    }
});

chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "TOGGLE_DARK_MODE") {
        document.documentElement.classList.toggle(DARK_CLASS);
    }
});