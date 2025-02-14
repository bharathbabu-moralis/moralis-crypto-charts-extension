document.addEventListener("DOMContentLoaded", function () {
  const addressInput = document.getElementById("address-input");
  const chainSelector = document.getElementById("chain-selector");
  const chainSelect = document.getElementById("chain-select");
  const instructions = document.querySelector(".instructions");
  const chartContainer = document.getElementById(
    "price-chart-widget-container"
  );

  function loadChart(address, chainId) {
    instructions.style.display = "none";
    chartContainer.style.display = "block";
    chartContainer.innerHTML = "";

    window.createMyWidget("price-chart-widget-container", {
      autoSize: true,
      chainId: chainId,
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

  function isValidAddress(text) {
    if (!text) return false;
    // Solana address format
    const isSolana = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(text.trim());
    // EVM address format
    const isEVM = /^0x[a-fA-F0-9]{40}$/.test(text.trim());
    return { isSolana, isEVM };
  }

  function handleAddressInput(address) {
    const { isSolana, isEVM } = isValidAddress(address);

    chainSelector.style.display = "block"; // Always show chain selector

    if (isSolana) {
      chainSelect.value = "solana"; // Pre-select Solana
      loadChart(address, "solana");
    } else if (isEVM) {
      chainSelect.value = ""; // Reset to "Select Chain"
      chartContainer.style.display = "none";
      instructions.style.display = "block";
    } else {
      instructions.style.display = "block";
      chartContainer.style.display = "none";
      chainSelect.value = ""; // Reset to "Select Chain"
    }
  }

  // Show chain selector by default when opening extension
  chainSelector.style.display = "block";
  chartContainer.style.display = "none";

  // Check for stored address when popup opens
  chrome.storage.local.get(["selectedAddress"], function (result) {
    if (result.selectedAddress) {
      addressInput.value = result.selectedAddress;
      handleAddressInput(result.selectedAddress);
      chrome.storage.local.remove("selectedAddress");
    }
  });

  // Handle chain selection
  chainSelect.addEventListener("change", () => {
    const address = addressInput.value.trim();
    if (
      address &&
      (isValidAddress(address).isEVM || isValidAddress(address).isSolana) &&
      chainSelect.value
    ) {
      loadChart(address, chainSelect.value);
    }
  });

  // Handle address input changes
  addressInput.addEventListener("input", () => {
    const address = addressInput.value.trim();
    handleAddressInput(address);
  });
});
