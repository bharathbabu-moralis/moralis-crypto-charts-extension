const isNil = (value) => value == null;
const isNotNil = (value) => !isNil(value);

const CHAIN_IDS = {
  solana: "solana",
  "0x1": "ethereum",
  "0x38": "binance",
  "0x2105": "base",
  "0xa4b1": "arbitrum",
  "0x89": "polygon",
  "0xa86a": "avalanche",
  "0xa": "optimism",
  "0xe708": "linea",
  "0xfa": "fantom",
  "0x171": "pulse",
};

const getBackgroundColor = (config) =>
  config?.theme === "dark"
    ? "#131722"
    : config?.theme === "light"
    ? "#FFFFFF"
    : config?.backgroundColor || "#071321";

const getUtmString = (params) => {
  return `?utm_source=${encodeURIComponent(
    params.source
  )}&utm_medium=${encodeURIComponent(params.medium)}`;
};

const getRedirectUrl = (baseUrl, chainId, utmParams, config) => {
  const formatAddress = (address) =>
    chainId !== CHAIN_IDS.solana ? address.toLowerCase() : address;

  if (config.pairAddress) {
    return fetch(
      `${baseUrl}/api/widgets/pair-to-token-address?chainId=${chainId}&pairAddress=${config.pairAddress}`
    )
      .then((res) => res.json())
      .then((data) => {
        const tokenAddress = formatAddress(data.tokenAddress);
        return `${baseUrl}/chain/${
          CHAIN_IDS[chainId]
        }/token/price/${tokenAddress}${getUtmString(utmParams)}`;
      })
      .catch(() => `${baseUrl}${getUtmString(utmParams)}`);
  }

  if (config.tokenAddress) {
    const tokenAddress = formatAddress(config.tokenAddress);
    return Promise.resolve(
      `${baseUrl}/chain/${
        CHAIN_IDS[chainId]
      }/token/price/${tokenAddress}${getUtmString(utmParams)}`
    );
  }

  return Promise.resolve(`${baseUrl}${getUtmString(utmParams)}`);
};

const createPoweredByLink = (baseUrl, chainId, utmParams, config) => {
  const link = document.createElement("a");
  Object.assign(link.style, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    transition: "filter 0.3s ease",
    padding: "12px",
    backgroundColor: getBackgroundColor(config),
  });
  link.target = "_blank";

  const img = document.createElement("img");
  Object.assign(img.style, {
    width: "21.15px",
    height: "16.26px",
  });
  img.src = `${baseUrl}/static/embed/moralisLogo-3JYAQUIJ.svg`;
  img.alt = "Moralis";

  const text = document.createElement("span");
  Object.assign(text.style, {
    marginLeft: "6px",
    fontSize: "12px",
    color: "#68738D",
    fontFamily: "Arial, sans-serif",
    lineHeight: "14.4px",
  });
  text.textContent = "Powered by Moralis";

  link.appendChild(img);
  link.appendChild(text);

  link.addEventListener("mouseenter", () => {
    link.style.filter = "brightness(1.2)";
  });
  link.addEventListener("mouseleave", () => {
    link.style.filter = "brightness(1)";
  });

  getRedirectUrl(baseUrl, chainId, utmParams, config).then((url) => {
    link.href = url;
  });

  return link;
};

window.createMyWidget = function (containerId, config) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const baseUrl = "https://moralis.com";
  container.innerHTML = "";

  const params = Object.fromEntries(
    Object.entries({ ...config, pageUrl: window.location.href })
      .filter(([, value]) => isNotNil(value))
      .map(([key, value]) => [
        key,
        typeof value === "string" ? value : JSON.stringify(value),
      ])
  );

  const height = config.autoSize ? "100%" : config.height || "100%";
  const width = config.autoSize ? "100%" : config.width || "100%";

  const wrapper = document.createElement("div");
  wrapper.style.width = width;
  wrapper.style.height = height;
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";

  const queryString = new URLSearchParams(params).toString();
  const iframe = document.createElement("iframe");
  iframe.id = "my-widget-iframe";
  iframe.src = `${baseUrl}/widgets/embed/price-chart?${queryString}`;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.style.overflow = "hidden";

  wrapper.appendChild(iframe);

  const poweredBy = createPoweredByLink(
    baseUrl,
    config.chainId,
    {
      source: window.location.hostname || "localhost",
      medium: "chart_widget",
    },
    config
  );

  wrapper.appendChild(poweredBy);
  container.appendChild(wrapper);
};
