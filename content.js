document.addEventListener("selectionchange", () => {
  const selectedText = window.getSelection().toString().trim();
  chrome.runtime.sendMessage({
    type: "updateContextMenu",
    text: selectedText,
  });
});
