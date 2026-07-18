const darkButton = document.getElementsById("darlmode");
darkButton.addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    chrome.storage.local.get("darkMode", (data) => {
        const enabled = !data.darkMode;
        chrome.storage.local.set({
            darkMode: enabled
        });

        chrome.tabs.sendMessage(tab.id, {
            type: "TOGGLE_DARK_MODE"
        });
    });
});