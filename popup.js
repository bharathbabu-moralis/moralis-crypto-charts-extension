document.addEventListener("DOMContentLoaded", function () {
  const addressInput = document.getElementById("address-input");
  const chainSelector = document.getElementById("chain-selector");
  const chainSelect = document.getElementById("chain-select");
  const instructions = document.querySelector(".instructions");
  const chartContainer = document.getElementById(
    "price-chart-widget-container"
  );

  function showInitialInstructions() {
    instructions.innerHTML = `
        <h2>Get Started!</h2>
        <p>
                Start by pasting a token address above or by simply selecting it, right
          click and view chart!
        </p>
        <h3>Supported Chains</h3>
       <div class="chains-container">
          <a
            href="https://moralis.com/top/trending/tokens/solana?utm_source=chrome_extension&utm_medium=price_chart_widget"
            target="_blank"
            class="chain-link"
          >
            <svg
              width="120"
              height="120"
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="ChainLogo_logo__hCA83 undefined ignore-global-styles"
              style="background: rgb(120, 112, 198)"
            >
              <path
                d="M51.6468 97.7366C52.1536 97.23 52.8505 96.9346 53.5897 96.9346H120.62C121.845 96.9346 122.457 98.412 121.591 99.2774L108.35 112.511C107.843 113.018 107.146 113.313 106.407 113.313H39.3769C38.152 113.313 37.5395 111.836 38.4054 110.971L51.6468 97.7366Z"
                fill="white"
              ></path>
              <path
                d="M51.6467 48.3259C52.1747 47.8193 52.8716 47.5238 53.5896 47.5238H120.62C121.845 47.5238 122.457 49.0013 121.591 49.8666L108.35 63.1005C107.843 63.6071 107.146 63.9026 106.407 63.9026H39.3768C38.152 63.9026 37.5395 62.4251 38.4054 61.5598L51.6467 48.3259Z"
                fill="white"
              ></path>
              <path
                d="M108.35 72.873C107.843 72.3664 107.146 72.0709 106.407 72.0709H39.3769C38.152 72.0709 37.5395 73.5484 38.4054 74.4138L51.6468 87.6477C52.1536 88.1542 52.8505 88.4497 53.5897 88.4497H120.62C121.845 88.4497 122.457 86.9722 121.591 86.1069L108.35 72.873Z"
                fill="white"
              ></path>
            </svg>
          </a>
          <a
            href="https://moralis.com/top/trending/tokens/ethereum?utm_source=chrome_extension&utm_medium=price_chart_widget"
            target="_blank"
            class="chain-link"
          >
            <svg
              fill="currentColor"
              height="120"
              viewBox="0 -13 120 190"
              width="120"
              xmlns="http://www.w3.org/2000/svg"
              class="ChainLogo_logo__hCA83 undefined ignore-global-styles"
              style="background: rgb(1, 80, 173)"
            >
              <g clip-path="url(#clip0_30_8567)">
                <g clip-path="url(#clip1_30_8567)">
                  <path
                    d="M59.4844 14.2109L59.5026 63.2303L100.185 81.7291L59.4844 14.2109Z"
                    fill-opacity="0.65"
                  ></path>
                  <path
                    d="M59.4802 14.2256L18.7969 81.7291L59.4802 63.2371V14.2256Z"
                  ></path>
                  <path
                    d="M59.4778 113.48L58.9766 114.091V145.311L59.4778 146.774L100.185 89.4443L59.4778 113.48Z"
                    fill-opacity="0.65"
                  ></path>
                  <path
                    d="M59.4802 146.774V113.48L18.7969 89.4443L59.4802 146.774Z"
                  ></path>
                  <path
                    d="M59.4922 105.772L100.174 81.7244L59.4922 63.2324V105.772Z"
                    fill-opacity="0.45"
                  ></path>
                  <path
                    d="M18.7969 81.7244L59.4802 105.772V63.2324L18.7969 81.7244Z"
                    fill-opacity="0.65"
                  ></path>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_30_8567">
                  <rect height="160" width="120"></rect>
                </clipPath>
                <clipPath id="clip1_30_8567">
                  <rect
                    height="132.549"
                    transform="translate(-6.77539 14.2256)"
                    width="132.549"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            href="https://moralis.com/top/trending/tokens/ronin?utm_source=chrome_extension&utm_medium=price_chart_widget"
            target="_blank"
            class="chain-link"
          >
            <svg
              fill="none"
              height="120"
              viewBox="-13 -28 83 140"
              width="120"
              xmlns="http://www.w3.org/2000/svg"
              class="ChainLogo_logo__hCA83 undefined ignore-global-styles"
              style="background: rgb(0, 77, 229)"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M55.2857 0C59.5447 0 63 3.60285 63 7.94264V33.572C62.9196 38.7306 57.847 42.9044 52.7845 42.9863C57.847 43.0682 62.9196 47.2464 63 52.4051V68.536C63 70.8287 62.0357 72.9577 60.4286 74.4316L40.9821 91.7089V56.1717C40.9821 51.8319 37.5268 48.3109 33.2679 48.3109H21.9375V91.7089L2.57143 74.2678C0.883926 72.7939 0 70.665 0 68.3722V7.86075C0 3.52096 3.45536 0 7.71429 0H55.2857ZM40.9821 10.9723H21.9375V35.1278H33.2679C37.5268 35.1278 40.9821 31.6068 40.9821 27.267V10.9723Z"
                fill="white"
              ></path>
            </svg>
          </a>
          <a
            href="https://moralis.com/top/trending/tokens/binance?utm_source=chrome_extension&utm_medium=price_chart_widget"
            target="_blank"
            class="chain-link"
          >
            <svg
              fill="currentColor"
              height="120"
              viewBox="0 0 120 160"
              width="120"
              xmlns="http://www.w3.org/2000/svg"
              class="ChainLogo_logo__hCA83 undefined ignore-global-styles"
              style="background: rgb(235, 187, 0)"
            >
              <path
                d="M29.168 99.3141C32.9018 95.5573 36.6357 91.7041 40.3695 87.9473C40.4652 88.0436 40.561 88.1399 40.6567 88.2363C46.9755 94.594 53.1986 100.855 59.5174 107.213C59.8046 107.502 59.7089 107.502 60.0919 107.213C66.4107 100.855 72.6337 94.594 78.9526 88.2363C79.0483 88.1399 79.0483 88.0436 79.144 87.9473C82.9736 91.8004 86.7075 95.5573 90.4413 99.3141C90.4413 99.3141 90.3456 99.4104 90.2498 99.5068C80.1972 109.621 70.1445 119.736 60.0919 129.85C59.9004 130.043 59.9004 130.043 59.6132 129.85C49.5605 119.736 39.5078 109.621 29.4552 99.5068C29.2637 99.4104 29.168 99.4104 29.168 99.3141Z"
              ></path>
              <path
                d="M40.3695 71.9567C36.6357 68.1998 32.9018 64.443 29.168 60.6862C29.168 60.5898 29.2637 60.5898 29.3594 60.4935C39.4121 50.379 49.4648 40.2644 59.5174 30.1499C59.7089 29.9572 59.8046 29.9572 59.9961 30.1499C70.0488 40.2644 80.1014 50.379 90.1541 60.4935C90.2498 60.5898 90.2498 60.5898 90.3456 60.6862C86.6117 64.443 82.8779 68.1998 79.144 71.9567C79.144 71.9567 79.0483 71.8603 78.9526 71.764C72.6337 65.4063 66.4107 59.1449 60.0919 52.7872C59.8046 52.4982 59.9004 52.4982 59.5174 52.7872C53.1986 59.0486 46.8798 65.4063 40.6567 71.6677C40.561 71.764 40.4652 71.8603 40.3695 71.9567Z"
              ></path>
              <path
                d="M59.7074 91.4152C55.9736 87.6584 52.144 83.8052 48.4102 80.0484C52.144 76.2915 55.9736 72.4384 59.8032 68.5852C63.537 72.342 67.3666 76.1952 71.1004 79.952C67.3666 83.8052 63.537 87.562 59.7074 91.4152Z"
              ></path>
              <path
                d="M32.4231 79.9521C32.4231 80.0484 32.3274 80.0484 32.3274 80.0484C32.3274 80.1447 32.2316 80.1447 32.2316 80.1447C28.6892 83.7089 25.0511 87.3694 21.5088 90.9336C21.2216 91.2226 21.2216 91.2226 20.9343 90.9336C17.392 87.3694 13.7539 83.7089 10.2115 80.1447C9.92429 79.8557 9.92429 79.8557 10.2115 79.6631C13.7539 76.0989 17.392 72.4384 20.9343 68.8742C21.1258 68.6816 21.1258 68.6816 21.413 68.8742C24.9554 72.4384 28.5935 76.0989 32.1359 79.6631C32.2316 79.7594 32.3274 79.8557 32.4231 79.9521Z"
              ></path>
              <path
                d="M109.59 79.952C109.59 80.0483 109.494 80.0483 109.494 80.0483C109.494 80.1446 109.398 80.1446 109.398 80.1446C105.856 83.7088 102.218 87.3693 98.6752 90.9335C98.388 91.2225 98.388 91.2225 98.1965 90.9335C94.6542 87.3693 91.0161 83.7088 87.4737 80.1446C87.2822 79.952 87.2822 79.952 87.4737 79.663C91.1118 76.0025 94.6542 72.4383 98.2923 68.7778C98.4837 68.5851 98.5795 68.5851 98.771 68.7778C102.409 72.4383 105.951 76.0025 109.59 79.663C109.398 79.8556 109.494 79.8556 109.59 79.952Z"
              ></path>
            </svg>
          </a>
          <a
            href="https://moralis.com/top/trending/tokens/base?utm_source=chrome_extension&utm_medium=price_chart_widget"
            target="_blank"
            class="chain-link"
          >
            <svg
              height="120"
              viewBox="0 0 160 160"
              width="120"
              class="ChainLogo_logo__hCA83 undefined ignore-global-styles"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style="background: rgb(0, 82, 255)"
            >
              <g clip-path="url(#a)">
                <mask
                  id="b"
                  maskUnits="userSpaceOnUse"
                  x="38"
                  y="38"
                  width="84"
                  height="84"
                >
                  <path d="M122 38H38v84h84V38Z" fill="#fff"></path>
                </mask>
                <g mask="url(#b)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M79.917 122C103.16 122 122 103.196 122 80s-18.841-42-42.083-42C58.2 38 40.323 54.42 38.073 75.5h55.37v8.25H38C39.9 105.189 57.942 122 79.917 122Z"
                    fill="#fff"
                  ></path>
                </g>
              </g>
              <defs>
                <clipPath id="a">
                  <path
                    fill="#fff"
                    transform="translate(38 38)"
                    d="M0 0h84v84H0z"
                  ></path>
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            href="https://moralis.com/top/trending/tokens/arbitrum?utm_source=chrome_extension&utm_medium=price_chart_widget"
            target="_blank"
            class="chain-link"
          >
            <svg
              fill="currentColor"
              height="120"
              viewBox="0,0,120,160"
              width="120"
              xmlns="http://www.w3.org/2000/svg"
              class="ChainLogo_logo__hCA83 undefined ignore-global-styles"
              style="background: rgb(15, 127, 255)"
            >
              <path
                d="M59.5161 25.7751C60.7211 25.7751 61.9261 26.0527 62.9457 26.5152L103.822 49.9189C105.954 51.3065 107.252 53.5266 107.437 56.0242V102.924C107.344 105.144 106.325 107.179 104.656 108.474L62.4822 132.896C61.648 133.173 60.7211 133.358 59.8869 133.358C58.8673 133.358 57.6623 133.173 57.0135 132.803C56.8281 132.711 56.55 132.526 55.9939 132.248C55.6231 132.063 55.1597 131.786 54.6962 131.508L39.1243 122.535L26.055 115.042L21.6986 112.545L11.8734 107.087V104.682V56.1167C11.9661 53.8041 13.1711 51.6765 15.1175 50.3814C15.4883 50.1039 15.8591 49.9189 16.2298 49.7339L16.3225 49.6414L16.4152 49.5489C29.6699 41.871 54.7889 27.3477 56.1793 26.6077C57.1989 26.0527 58.3112 25.7751 59.5161 25.7751ZM59.5161 23C57.8477 23 56.272 23.37 54.7889 24.1101C54.4182 24.2951 14.9322 47.1437 14.9322 47.1437C14.376 47.4213 13.8199 47.6988 13.3564 48.0688C10.7611 49.9189 9.18538 52.879 9 56.0242V104.682V104.682C9 107.143 10.3121 109.419 12.4428 110.652L20.0301 115.042L24.3866 117.54L37.4559 125.033L53.0278 134.006C53.584 134.283 54.0474 134.561 54.4182 134.746C54.9743 135.116 55.4378 135.301 55.5305 135.393C56.6427 135.948 58.2185 136.226 59.7015 136.226C60.9992 136.226 62.2968 135.948 63.5018 135.486L106.139 110.88C108.549 109.029 110.032 106.162 110.125 103.017V56.0242C110.032 52.6015 108.086 49.4564 105.212 47.6063L64.2433 24.1101C62.853 23.37 61.1846 23 59.5161 23Z"
              ></path>
              <path
                d="M61.7402 96.3563L77.4049 120.87L91.8645 112.545L71.38 80.168L61.7402 96.3563Z"
                opacity="0.7"
              ></path>
              <path
                d="M105.027 102.647V95.9863L82.596 61.0195L74.2539 75.1728L95.9434 110.14L103.822 105.607C104.564 104.959 105.027 104.034 105.12 103.109L105.027 102.647Z"
                opacity="0.7"
              ></path>
              <path
                d="M20.494 113.007L56.087 56.1168L50.8037 55.9318C45.4277 55.8393 39.6809 57.2269 37.0856 61.5746L16.1376 93.9512L10.5762 102.462V108.012"
              ></path>
              <path
                d="M37.5487 125.033L41.0709 119.02L78.2396 56.1167L63.5946 56.2092L25.4062 117.54"
              ></path>
            </svg>
          </a>
          <a
            href="https://moralis.com/top/trending/tokens/polygon?utm_source=chrome_extension&utm_medium=price_chart_widget"
            target="_blank"
            class="chain-link"
          >
            <svg
              fill="currentColor"
              height="120"
              viewBox="0 0 120 160"
              width="120"
              xmlns="http://www.w3.org/2000/svg"
              class="ChainLogo_logo__hCA83 undefined ignore-global-styles"
              style="background: rgb(155, 34, 255)"
            >
              <path
                d="M87.3956 62.2618C86.3447 61.7043 85.1717 61.4126 83.9803 61.4126C82.7889 61.4126 81.6158 61.7043 80.565 62.2618L65.1693 71.3015L54.4126 77.2366L39.0169 86.2829C37.9661 86.8405 36.793 87.1321 35.6016 87.1321C34.4102 87.1321 33.2372 86.8405 32.1863 86.2829L19.9505 79.2128C18.9439 78.6365 18.102 77.8148 17.5043 76.8253C16.9067 75.8358 16.5732 74.7113 16.5352 73.5581V59.4378C16.5131 58.272 16.8216 57.1236 17.4255 56.1236C18.0294 55.1237 18.9044 54.3126 19.9505 53.7831L32.1863 47C33.2372 46.4425 34.4102 46.1508 35.6016 46.1508C36.793 46.1508 37.9661 46.4425 39.0169 47L51.2527 53.7831C52.2593 54.3593 53.1012 55.1811 53.6989 56.1706C54.2965 57.1601 54.6301 58.2846 54.668 59.4378V68.4775L65.1693 62.2619V53.5026C65.1965 52.3424 64.896 51.1978 64.3019 50.1985C63.7078 49.1991 62.8439 48.3848 61.8078 47.8479L39.2993 34.8492C38.2484 34.2917 37.0754 34 35.884 34C34.6926 34 33.5195 34.2917 32.4687 34.8492L9.70463 47.8479C8.56833 48.2854 7.59961 49.0671 6.9359 50.0821C6.27218 51.0971 5.94718 52.2939 6.007 53.5027V79.7803C5.98992 80.9416 6.30083 82.0844 6.90447 83.0792C7.50812 84.0739 8.38035 84.8808 9.42227 85.4084L32.1863 98.4337C33.2372 98.9913 34.4102 99.283 35.6016 99.283C36.793 99.283 37.9661 98.9913 39.0169 98.4337L54.4126 89.6745L64.9408 83.4589L80.2826 74.7264C81.3335 74.1689 82.5065 73.8772 83.6979 73.8772C84.8893 73.8772 86.0623 74.1689 87.1132 74.7264L99.349 81.5095C100.356 82.0858 101.198 82.9075 101.795 83.897C102.393 84.8865 102.726 86.011 102.764 87.1642V101.011C102.786 102.177 102.478 103.325 101.874 104.325C101.27 105.325 100.395 106.136 99.349 106.666L87.1132 113.729C86.0624 114.287 84.8893 114.578 83.6979 114.578C82.5065 114.578 81.3335 114.287 80.2826 113.729L68.0468 106.946C67.0402 106.37 66.1983 105.548 65.6007 104.558C65.003 103.569 64.6695 102.444 64.6315 101.291V92.2181L54.4126 98.1466V107.186C54.3904 108.352 54.6989 109.5 55.3028 110.5C55.9068 111.5 56.7817 112.311 57.8278 112.841L80.5919 125.84C81.6427 126.397 82.8158 126.689 84.0072 126.689C85.1986 126.689 86.3716 126.397 87.4224 125.84L110.186 112.841C111.187 112.262 112.023 111.44 112.616 110.452C113.209 109.464 113.539 108.342 113.575 107.193V80.9086C113.597 79.7428 113.289 78.5943 112.685 77.5944C112.081 76.5944 111.206 75.7834 110.16 75.2538L87.3956 62.2618Z"
              ></path>
            </svg>
          </a>
          <a
            href="https://moralis.com/top/trending/tokens/optimism?utm_source=chrome_extension&utm_medium=price_chart_widget"
            target="_blank"
            class="chain-link"
          >
            <svg
              fill="currentColor"
              height="120"
              viewBox="0 0 120 160"
              width="120"
              xmlns="http://www.w3.org/2000/svg"
              class="ChainLogo_logo__hCA83 undefined ignore-global-styles"
              style="background: rgb(255, 105, 105)"
            >
              <g clip-path="url(#clip0_20117_43883)">
                <path
                  d="M28.0186 108.043C21.8857 108.043 16.8642 106.59 12.954 103.684C9.08492 100.736 7.15039 96.5017 7.15039 91.0634C7.15039 89.901 7.27387 88.531 7.52083 86.8705C8.17939 83.1342 9.12608 78.6507 10.3609 73.3785C13.8595 59.0977 22.9147 51.9573 37.4854 51.9573C41.4368 51.9573 45.0177 52.6215 48.1459 53.9915C51.274 55.2784 53.7437 57.2711 55.5547 59.9279C57.3657 62.5433 58.2713 65.6569 58.2713 69.2686C58.2713 70.3479 58.1478 71.7179 57.9008 73.3785C57.1188 77.9865 56.2133 82.5115 55.1019 86.8705C53.2909 93.9694 50.2039 99.3247 45.7586 102.853C41.3545 106.341 35.4274 108.043 28.0186 108.043V108.043ZM29.1299 96.8338C32.0111 96.8338 34.4396 95.962 36.4564 94.26C38.5144 92.5579 39.9962 89.9425 40.8605 86.3723C42.0542 81.4737 42.9597 77.2392 43.5771 73.586C43.7829 72.5067 43.9064 71.3858 43.9064 70.2234C43.9064 65.4908 41.4779 63.1245 36.5799 63.1245C33.6987 63.1245 31.2291 63.9963 29.1711 65.6984C27.1542 67.4005 25.7136 70.0158 24.8492 73.586C23.9026 77.0732 22.997 81.3076 22.0504 86.3723C21.8446 87.4102 21.7211 88.4895 21.7211 89.6519C21.6799 94.4675 24.1907 96.8338 29.1299 96.8338Z"
                ></path>
                <path
                  d="M61.8528 107.295C61.2765 107.295 60.8649 107.129 60.5356 106.756C60.2887 106.341 60.2064 105.884 60.2887 105.344L70.9492 54.6972C71.0315 54.1161 71.3196 53.6594 71.8135 53.2858C72.2663 52.9121 72.7602 52.7461 73.2953 52.7461H93.8342C99.5555 52.7461 104.124 53.95 107.582 56.3163C111.08 58.7241 112.85 62.1698 112.85 66.6948C112.85 67.9817 112.686 69.3517 112.397 70.7631C111.121 76.7411 108.528 81.1416 104.577 84.0061C100.708 86.8705 95.3983 88.282 88.648 88.282H78.2345L74.6947 105.344C74.5713 105.925 74.3243 106.382 73.8304 106.756C73.3776 107.129 72.8837 107.295 72.3486 107.295H61.8528ZM89.1831 77.5299C91.3646 77.5299 93.2168 76.9487 94.822 75.7448C96.4684 74.5409 97.5386 72.8388 98.0737 70.5971C98.2383 69.7253 98.3206 68.9365 98.3206 68.2723C98.3206 66.7778 97.8679 65.6154 97.0035 64.8266C96.1392 63.9964 94.6162 63.5812 92.5171 63.5812H83.256L80.3337 77.5299H89.1831V77.5299Z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_20117_43883">
                  <rect
                    height="56.0853"
                    transform="translate(7.15039 51.9573)"
                    width="105.699"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            href="https://moralis.com/top/trending/tokens/linea?utm_source=chrome_extension&utm_medium=price_chart_widget"
            target="_blank"
            class="chain-link"
          >
            <svg
              fill="none"
              height="120"
              viewBox="0 0 200 200"
              width="120"
              xmlns="http://www.w3.org/2000/svg"
              class="ChainLogo_logo__hCA83 undefined ignore-global-styles"
              style="background: #121212"
            >
              <rect fill="#121212" height="207.623" width="199.4"></rect>
              <g clip-path="url(#clip0_2303_643)">
                <path
                  d="M132.369 155.99H49.7001V68.8854H68.6148V139.109H132.369V155.981V155.99Z"
                  fill="white"
                ></path>
                <path
                  d="M132.369 85.7575C141.687 85.7575 149.241 78.2036 149.241 68.8855C149.241 59.5673 141.687 52.0134 132.369 52.0134C123.05 52.0134 115.497 59.5673 115.497 68.8855C115.497 78.2036 123.05 85.7575 132.369 85.7575Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_2303_643">
                  <rect
                    fill="white"
                    height="103.977"
                    transform="translate(49.7001 52.0134)"
                    width="99.5407"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            href="https://moralis.com/top/trending/tokens/fantom?utm_source=chrome_extension&utm_medium=price_chart_widget"
            target="_blank"
            class="chain-link"
          >
            <svg
              fill="currentColor"
              height="120"
              viewBox="0 0 120 160"
              width="120"
              xmlns="http://www.w3.org/2000/svg"
              class="ChainLogo_logo__hCA83 undefined ignore-global-styles"
              style="background: rgb(15, 127, 255)"
            >
              <path
                clip-rule="evenodd"
                d="M57.6979 23.323C58.8848 22.6814 60.3152 22.6814 61.5021 23.323L91.5531 39.5668C93.4918 40.6147 94.7 42.6412 94.7 44.845V115.155C94.7 117.359 93.4918 119.385 91.5531 120.433L62.4531 136.163C60.6728 137.125 58.5272 137.125 56.7469 136.163L27.6469 120.433C25.7082 119.385 24.5 117.359 24.5 115.155V44.845C24.5 42.6412 25.7082 40.6147 27.6469 39.5668L57.6979 23.323ZM27.5 44.678V77.3833L56.5423 60.3766L27.5 44.678ZM58.1 62.9409L28.9684 79.9999L58.1 97.059V62.9409ZM61.1 97.059L90.2316 79.9999L61.1 62.9409V97.059ZM59.6 58.6192L90.0455 42.1621L59.6 25.7051L29.1545 42.1621L59.6 58.6192ZM91.7 44.678L62.6577 60.3766L91.7 77.3833V44.678ZM91.7 82.6166L62.6319 99.6384C60.7594 100.735 58.4406 100.735 56.5681 99.6384L27.5 82.6166V114.559C27.5 116.028 28.3054 117.379 29.5979 118.077L57.6979 133.267C58.8848 133.908 60.3152 133.908 61.5021 133.267L89.6021 118.077C90.8945 117.379 91.7 116.028 91.7 114.559V82.6166Z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="https://moralis.com/top/trending/tokens/pulse?utm_source=chrome_extension&utm_medium=price_chart_widget"
            target="_blank"
            class="chain-link"
          >
            <svg
              fill="currentColor"
              height="120"
              viewBox="0 0 120 160"
              width="120"
              xmlns="http://www.w3.org/2000/svg"
              class="ChainLogo_logo__hCA83 undefined ignore-global-styles"
              style="
                background: linear-gradient(
                    211.94deg,
                    rgb(0, 234, 255) 14.03%,
                    rgb(0, 128, 255) 32.21%,
                    rgb(128, 0, 255) 50.38%,
                    rgb(230, 25, 230) 68.56%,
                    rgb(255, 0, 0) 86.74%
                  ),
                  rgb(255, 255, 255);
              "
            >
              <g clip-path="url(#clip0_23998_19722)">
                <path
                  d="M35.2142 132.78C31.6538 132.78 28.3371 130.864 26.5545 127.781L2.21472 85.1115C0.475139 82.0625 0.475139 78.275 2.21472 75.226L26.5521 32.5609C28.3347 29.476 31.6538 27.5596 35.2142 27.5596H84.4171C87.9775 27.5596 91.2942 29.476 93.0768 32.5585L117.589 75.1973C119.352 78.2631 119.352 82.0744 117.589 85.1402L93.0768 127.779C91.2942 130.864 87.9775 132.78 84.4171 132.78H35.2142ZM11.0632 83.501C9.85167 83.501 8.86718 84.4854 8.86718 85.6969C8.86718 86.0721 8.95321 86.4305 9.1157 86.7364L31.25 125.072C32.0648 126.484 33.5845 127.361 35.2166 127.361H84.4195C86.0515 127.361 87.5713 126.484 88.3861 125.072L110.53 86.7197C110.68 86.4329 110.769 86.0721 110.769 85.6969C110.769 84.4854 109.784 83.501 108.573 83.501H82.8089C81.5759 83.501 80.4481 82.8749 79.7957 81.8307L79.7527 81.759L76.6965 76.5665L67.6497 111.54C67.2985 112.902 66.173 113.929 64.7823 114.156L64.7034 114.168C64.5338 114.192 64.3689 114.204 64.2064 114.204C62.4573 114.204 60.9853 112.95 60.7034 111.222L60.6914 111.143L54.4237 65.7061L47.4367 92.715C47.2097 93.5967 46.6577 94.3494 45.8859 94.8345L45.807 94.8823C45.2526 95.2097 44.6314 95.3793 44.0005 95.3793C42.7651 95.3793 41.6373 94.7533 40.9849 93.7067L40.9419 93.6374L34.9776 83.5057H11.0632V83.501ZM55.346 46.1382C55.6447 46.1382 55.9458 46.1764 56.2373 46.2529C57.5994 46.6042 58.6269 47.7296 58.8539 49.1179L58.8658 49.1968L65.1336 94.6362L72.1206 67.6273C72.5268 66.0597 73.939 64.9653 75.5567 64.9653C75.8267 64.9653 76.0991 64.9964 76.3644 65.0585L76.4408 65.0776C77.3297 65.307 78.0824 65.859 78.5651 66.6308L78.6129 66.7073L84.5772 76.8389H108.563C109.775 76.8389 110.759 75.8544 110.759 74.643C110.759 74.2726 110.676 73.9165 110.516 73.6107L88.3789 35.2682C87.5641 33.856 86.0444 32.979 84.4123 32.979H35.2094C33.5774 32.979 32.0576 33.856 31.2428 35.2682L9.10375 73.6226C8.94604 73.9261 8.86718 74.2702 8.86718 74.643C8.86718 75.8544 9.85167 76.8389 11.0632 76.8389H36.7483C37.9813 76.8389 39.1091 77.465 39.7615 78.5116L39.8045 78.5833L42.8607 83.7758L51.9075 48.8025C52.3137 47.235 53.7259 46.1406 55.3436 46.1406L55.346 46.1382Z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_23998_19722">
                  <rect
                    height="105.221"
                    transform="translate(0.910034 27.5596)"
                    width="118"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>

    `;
  }

  function showChainSelectionPrompt() {
    instructions.innerHTML = `
      <h2>Almost there!</h2>
      <p>Token address captured. Please select the chain from the dropdown above to view the chart.</p>
      <div class="loading-indicator">
        <div class="pulse"></div>
      </div>
    `;
  }

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

    chainSelector.style.display = "block";

    if (isSolana) {
      chainSelect.value = "solana";
      loadChart(address, "solana");
    } else if (isEVM) {
      chainSelect.value = "";
      chartContainer.style.display = "none";
      showChainSelectionPrompt();
    } else {
      showInitialInstructions();
      chartContainer.style.display = "none";
    }
  }

  // Initially show the instructions
  showInitialInstructions();
  chartContainer.style.display = "none";

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
