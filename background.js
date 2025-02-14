function isSolanaAddress(text) {
  if (!text) return false;
  return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(text.trim());
}

function isValidAddress(text) {
  if (!text) return false;
  // Solana address format
  const isSolana = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(text.trim());
  // EVM address format
  const isEVM = /^0x[a-fA-F0-9]{40}$/.test(text.trim());
  return { isSolana, isEVM };
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "viewCryptoChart",
    title: "View Chart",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "viewCryptoChart") {
    const selectedText = info.selectionText;
    const { isSolana, isEVM } = isValidAddress(selectedText);

    if (isSolana || isEVM) {
      chrome.storage.local.set({ selectedAddress: selectedText.trim() }, () => {
        chrome.action.openPopup();
      });
    }
  }
});
