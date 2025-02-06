function isSolanaAddress(text) {
  if (!text) return false;
  return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(text.trim());
}

// Create context menu item when extension is installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "viewSolanaChart",
    title: "View Chart",
    contexts: ["selection"],
  });
});

// Handle context menu click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "viewSolanaChart") {
    const selectedText = info.selectionText;
    if (isSolanaAddress(selectedText)) {
      // Store the address temporarily
      chrome.storage.local.set({ selectedAddress: selectedText.trim() }, () => {
        // Open the popup
        chrome.action.openPopup();
      });
    }
  }
});
