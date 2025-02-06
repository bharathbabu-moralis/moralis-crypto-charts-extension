document.addEventListener("DOMContentLoaded", function () {
  const addressInput = document.getElementById("address-input");
  const loadButton = document.getElementById("load-chart");
  const instructions = document.querySelector(".instructions");
  const chartContainer = document.getElementById(
    "price-chart-widget-container"
  );

  function isSolanaAddress(text) {
    if (!text) return false;
    return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(text.trim());
  }

  function loadChart(address) {
    // Hide instructions and show chart
    instructions.style.display = "none";
    chartContainer.style.display = "block";

    // Clear any existing chart
    chartContainer.innerHTML = "";

    window.createMyWidget("price-chart-widget-container", {
      autoSize: true,
      chainId: "solana",
      tokenAddress: address,
      defaultInterval: "60",
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone ?? "Etc/UTC",
      theme: "moralis",
      locale: "en",
      backgroundColor: "#071321",
      gridColor: "#0d2035",
      textColor: "#68738D",
      candleUpColor: "#4CE666",
      candleDownColor: "#E64C4C",
      hideLeftToolbar: false,
      hideTopToolbar: false,
      hideBottomToolbar: false,
    });
  }

  // Initially hide the chart container
  chartContainer.style.display = "none";

  // Check for stored address when popup opens
  chrome.storage.local.get(["selectedAddress"], function (result) {
    if (result.selectedAddress && isSolanaAddress(result.selectedAddress)) {
      addressInput.value = result.selectedAddress;
      loadChart(result.selectedAddress);
      // Clear the stored address
      chrome.storage.local.remove("selectedAddress");
    }
  });

  // Manual input handling
  loadButton.addEventListener("click", () => {
    const address = addressInput.value.trim();
    if (isSolanaAddress(address)) {
      loadChart(address);
    }
  });

  addressInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const address = addressInput.value.trim();
      if (isSolanaAddress(address)) {
        loadChart(address);
      }
    }
  });
});
