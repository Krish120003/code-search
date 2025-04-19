```html
<body
  class="flex h-full w-full flex-col items-center justify-between overflow-hidden antialiased"
  style=""
>
  <script>
    ((e, t, r, n, a, i, o, s) => {
      let l = document.documentElement,
        u = ["light", "dark"];
      function c(t) {
        var r;
        (Array.isArray(e) ? e : [e]).forEach((e) => {
          let r = "class" === e,
            n = r && i ? a.map((e) => i[e] || e) : a;
          r
            ? (l.classList.remove(...n), l.classList.add(t))
            : l.setAttribute(e, t);
        }),
          (r = t),
          s && u.includes(r) && (l.style.colorScheme = r);
      }
      if (n) c(n);
      else
        try {
          let e = localStorage.getItem(t) || r,
            n =
              o && "system" === e
                ? window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "dark"
                  : "light"
                : e;
          c(n);
        } catch (e) {}
    })("class", "theme", "system", null, ["light", "dark"], null, true, true);
  </script>
  <div
    class="flex min-h-[64px] w-full shrink-0 flex-wrap items-center justify-between border-b border-grep-2 md:flex-nowrap"
  >
    <div class="pl-4 md:pl-6">
      <div class="flex items-center space-x-2">
        <a
          href="https://vercel.com/?utm_medium=third_party&amp;utm_source=grep&amp;utm_campaign=PGR"
          ><svg
            aria-label="Vercel Logo"
            class="fill-black dark:fill-white"
            viewBox="0 0 75 65"
            height="22"
          >
            <path d="M37.59.25l36.95 64H.64l36.95-64z"></path></svg></a
        ><svg
          fill="none"
          height="24"
          shape-rendering="geometricPrecision"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          width="24"
          class="stroke-grep-4"
          style="width: 22px; height: 22px;"
        >
          <path d="M16.88 3.549L7.12 20.451"></path></svg
        ><a href="/"
          ><svg
            width="108"
            height="22"
            viewBox="0 0 108 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_570_3169)">
              <path
                d="M45.3601 21.866C43.7356 21.866 42.426 21.5179 41.4314 20.8217C40.4534 20.1255 39.8152 19.1972 39.5168 18.0368L43.0476 17.8379C43.1968 18.2357 43.4538 18.5507 43.8184 18.7828C44.1831 19.0148 44.697 19.1309 45.3601 19.1309C47.283 19.1309 48.2444 18.302 48.2444 16.6444V15.1027C47.946 15.7161 47.4902 16.2134 46.8768 16.5946C46.2635 16.9593 45.4927 17.1417 44.5644 17.1417C43.5035 17.1417 42.5586 16.8764 41.7298 16.346C40.9009 15.799 40.2461 15.053 39.7654 14.1081C39.2847 13.1467 39.0443 12.0443 39.0443 10.8011C39.0443 9.45834 39.2764 8.29797 39.7406 7.31994C40.2047 6.32534 40.8429 5.56281 41.6552 5.03235C42.484 4.48532 43.4289 4.2118 44.4898 4.2118C45.3849 4.2118 46.1558 4.41901 46.8023 4.83343C47.4653 5.23127 47.9626 5.80317 48.2942 6.54912L48.3439 4.51018H51.6261V16.2217C51.6261 18.0948 51.0542 19.5039 49.9104 20.4487C48.7832 21.3936 47.2664 21.866 45.3601 21.866ZM45.4098 14.4314C46.2552 14.4314 46.9349 14.1247 47.4487 13.5114C47.9792 12.8814 48.2444 11.9531 48.2444 10.7265C48.261 9.49979 48.0041 8.5632 47.4736 7.91671C46.9432 7.27021 46.2552 6.94697 45.4098 6.94697C44.4981 6.94697 43.7936 7.27021 43.2963 7.91671C42.799 8.5632 42.5503 9.49979 42.5503 10.7265C42.5503 11.9531 42.799 12.8814 43.2963 13.5114C43.8102 14.1247 44.5147 14.4314 45.4098 14.4314ZM53.705 17.8379V15.1525H56.8878V7.19562H53.705V4.51018H59.3743L59.5732 7.09616C59.7887 6.23417 60.1534 5.58767 60.6673 5.15668C61.1812 4.72568 61.894 4.51018 62.8057 4.51018H65.7895V7.27021H63.0543C61.1977 7.27021 60.2694 8.23995 60.2694 10.1794V15.1525H64.3225V17.8379H53.705ZM73.3885 18.1363C72.1287 18.1363 71.0263 17.8545 70.0814 17.2909C69.1366 16.7107 68.3906 15.8984 67.8436 14.8541C67.3131 13.8097 67.0479 12.5831 67.0479 11.174C67.0479 9.79817 67.3131 8.58806 67.8436 7.54373C68.374 6.49939 69.1117 5.68713 70.0566 5.10695C71.0015 4.51018 72.0955 4.2118 73.3388 4.2118C74.5655 4.2118 75.6429 4.5019 76.5712 5.08208C77.5161 5.66227 78.2538 6.48282 78.7842 7.54373C79.3147 8.58806 79.5799 9.82303 79.5799 11.2486V12.094H70.529C70.6119 13.0887 70.9103 13.8512 71.4242 14.3816C71.9546 14.8955 72.6343 15.1525 73.4631 15.1525C74.0764 15.1525 74.5986 15.0116 75.0296 14.7298C75.4606 14.4314 75.759 14.0335 75.9247 13.5362L79.3064 13.76C78.8588 15.1525 78.1295 16.2299 77.1183 16.9925C76.1237 17.755 74.8804 18.1363 73.3885 18.1363ZM70.5787 9.78159H75.9745C75.8916 8.9196 75.6098 8.27311 75.1291 7.84211C74.6483 7.41112 74.0433 7.19562 73.3139 7.19562C72.5514 7.19562 71.9298 7.4194 71.449 7.86698C70.9849 8.29797 70.6948 8.93618 70.5787 9.78159ZM81.1367 21.5677V4.51018H84.394L84.4686 6.69832C84.8333 5.90263 85.3472 5.28929 86.0103 4.8583C86.6899 4.4273 87.5022 4.2118 88.4471 4.2118C89.6074 4.2118 90.5772 4.51847 91.3563 5.13181C92.152 5.74515 92.7404 6.58228 93.1217 7.64319C93.5195 8.68753 93.7185 9.86447 93.7185 11.174C93.7185 12.4836 93.5195 13.6688 93.1217 14.7298C92.7404 15.7741 92.152 16.6029 91.3563 17.2163C90.5772 17.8296 89.6074 18.1363 88.4471 18.1363C86.607 18.1363 85.2975 17.4235 84.5184 15.9979V21.5677H81.1367ZM87.4027 15.1525C88.2979 15.1525 88.9858 14.8292 89.4665 14.1827C89.9638 13.5362 90.2125 12.5333 90.2125 11.174C90.2125 9.81474 89.9638 8.81185 89.4665 8.16536C88.9858 7.51886 88.2979 7.19562 87.4027 7.19562C86.5573 7.19562 85.8611 7.51886 85.3141 8.16536C84.7836 8.81185 84.5184 9.81474 84.5184 11.174C84.5184 12.5333 84.7836 13.5362 85.3141 14.1827C85.8611 14.8292 86.5573 15.1525 87.4027 15.1525Z"
                class="fill-black dark:fill-white"
              ></path>
              <path
                d="M21.0122 2H10.9881C6.01872 2 1.99023 6.02848 1.99023 10.9979V11.0021C1.99023 15.9715 6.01872 20 10.9881 20H21.0122C25.9816 20 30.0101 15.9715 30.0101 11.0021V10.9979C30.0101 6.02848 25.9816 2 21.0122 2Z"
                class="stroke-black dark:stroke-white"
                stroke-width="3.5"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M11.6982 7.35254V14.1574"
                class="stroke-black dark:stroke-white"
                stroke-width="3.5"
                stroke-miterlimit="10"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_570_3169">
                <rect
                  width="108"
                  height="22"
                  class="fill-white dark:fill-black"
                ></rect>
              </clipPath>
            </defs></svg
        ></a>
      </div>
    </div>
    <div
      class="order-1 flex w-full items-center justify-center border-t border-grep-2 px-4 py-3 md:order-none md:border-none md:px-3 md:py-0"
      id="header-contents"
    >
      <div class="relative z-10 w-full flex-grow md:w-auto md:max-w-[625px]">
        <input
          class="flex w-full min-w-0 max-w-[625px] shrink rounded-md border border-grep-4 bg-grep-0 px-3 py-1 text-sm transition-colors focus-visible:border-grep-12 focus-visible:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grep-4 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-grep-7 h-[42px] pr-24 md:h-9 max-md:max-w-none"
          placeholder="Search"
          id="search-input"
          spellcheck="false"
          autocapitalize="off"
          autocomplete="off"
          autocorrect="off"
          type="text"
        />
        <div
          class="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1"
        >
          <button
            type="button"
            aria-pressed="false"
            data-state="off"
            class="border border-transparent inline-flex items-center justify-center gap-2 rounded-md text-sm text-grep-9 font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-grep-11 data-[state=on]:border-grep-6 data-[state=on]:text-foreground [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-transparent h-6 px-1 min-w-6"
            aria-label="Match case"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
            >
              <path
                d="M11.6667 11C12.7713 11 13.6667 10.1046 13.6667 9C13.6667 7.89543 12.7713 7 11.6667 7C10.5621 7 9.66669 7.89543 9.66669 9C9.66669 10.1046 10.5621 11 11.6667 11Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M13.6667 7V11"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="square"
                stroke-linejoin="round"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.26242 10.0789L2.63419 11.8414L2.57767 12H0.985229L1.22126 11.3378L4.22128 2.92102L5.63421 2.92102L8.63419 11.3378L8.87023 12H7.27779L7.22126 11.8414L6.59305 10.0789H6.5777H3.2777H3.26242ZM3.79707 8.57885H6.0584L4.92774 5.40668L3.79707 8.57885Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <div
            role="group"
            dir="ltr"
            class="flex items-center justify-center gap-1"
            tabindex="0"
            style="outline: none;"
          >
            <button
              type="button"
              data-state="off"
              role="radio"
              aria-checked="false"
              class="border border-transparent inline-flex items-center justify-center gap-2 rounded-md text-sm text-grep-9 font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-grep-11 data-[state=on]:border-grep-6 data-[state=on]:text-foreground [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-transparent h-6 px-1 min-w-6"
              aria-label="Match whole words"
              tabindex="-1"
              data-radix-collection-item=""
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
              >
                <path
                  d="M4.66669 10C5.77126 10 6.66669 9.10457 6.66669 8C6.66669 6.89543 5.77126 6 4.66669 6C3.56212 6 2.66669 6.89543 2.66669 8C2.66669 9.10457 3.56212 10 4.66669 10Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M6.66669 6V10"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M11.3333 10C12.4379 10 13.3333 9.10457 13.3333 8C13.3333 6.89543 12.4379 6 11.3333 6C10.2287 6 9.33331 6.89543 9.33331 8C9.33331 9.10457 10.2287 10 11.3333 10Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9.33331 4.66675V10.0001"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M1 11V13H15V11"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                ></path>
              </svg></button
            ><button
              type="button"
              data-state="off"
              role="radio"
              aria-checked="false"
              class="border border-transparent inline-flex items-center justify-center gap-2 rounded-md text-sm text-grep-9 font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-grep-11 data-[state=on]:border-grep-6 data-[state=on]:text-foreground [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-transparent h-6 px-1 min-w-6"
              aria-label="Use regular expression"
              tabindex="-1"
              data-radix-collection-item=""
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
              >
                <path
                  d="M10.8867 2V8.66667"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8 3.66675L13.7733 7.00008"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8 7.00008L13.7733 3.66675"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                ></path>
                <rect
                  x="2"
                  y="9"
                  width="4"
                  height="4"
                  fill="currentColor"
                ></rect>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex min-h-[64px] select-none items-center justify-end gap-3 pr-4 md:pr-6"
    >
      <button
        class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs sm:h-9 sm:px-4 py-2 sm:text-sm shadow-none [@media(max-width:374px)]:hidden"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="radix-:r0:"
        data-state="closed"
      >
        Feedback
      </button>
    </div>
  </div>
  <div class="h-[calc(100dvh-130px)] w-full md:h-[calc(100dvh-65px)]">
    <div class="group flex h-full w-full">
      <div
        class="hidden overflow-y-auto md:flex md:w-[24%] md:min-w-[200px] lg:max-w-[320px]"
      >
        <div class="flex w-full flex-col divide-y divide-dashed px-3">
          <div class="w-full select-none py-2" data-orientation="vertical">
            <div data-state="open" data-orientation="vertical" class="">
              <h3 data-orientation="vertical" data-state="open" class="flex">
                <button
                  type="button"
                  aria-controls="radix-:r1o:"
                  aria-expanded="true"
                  data-state="open"
                  data-orientation="vertical"
                  id="radix-:r1n:"
                  class="flex flex-1 items-center justify-start gap-2 py-4 text-left text-sm transition-all [&amp;>svg]:-rotate-90 [&amp;[data-state=open]>svg]:rotate-0 w-full pl-3"
                  data-radix-collection-item=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                  <div class="flex w-full items-center justify-between">
                    <h2 class="text-sm">Repository</h2>
                    <div></div>
                  </div>
                </button>
              </h3>
              <div
                data-state="open"
                id="radix-:r1o:"
                role="region"
                aria-labelledby="radix-:r1n:"
                data-orientation="vertical"
                class="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 422px; --radix-collapsible-content-width: 296px;"
              >
                <div class="pb-4 pt-0">
                  <div class="w-full p-[2px]">
                    <div class="relative">
                      <input
                        class="flex h-9 min-w-0 shrink rounded-md border border-grep-4 bg-grep-0 px-3 py-1 transition-colors focus-visible:border-grep-12 focus-visible:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grep-4 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-grep-7 pr-7 max-md:pl-8 w-full max-w-none text-sm hover:border-grep-5 hover:bg-grep-1 max-md:h-10 max-md:border-grep-1 max-md:bg-grep-1 md:bg-background md:hover:bg-background"
                        spellcheck="false"
                        autocapitalize="off"
                        autocomplete="off"
                        autocorrect="off"
                        placeholder="Filter repositories..."
                        type="text"
                        value=""
                      /><svg
                        height="16"
                        stroke-linejoin="round"
                        viewBox="0 0 16 16"
                        width="16"
                        class="absolute left-2 top-3 text-grep-9 md:hidden"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.5 6.5C1.5 3.73858 3.73858 1.5 6.5 1.5C9.26142 1.5 11.5 3.73858 11.5 6.5C11.5 9.26142 9.26142 11.5 6.5 11.5C3.73858 11.5 1.5 9.26142 1.5 6.5ZM6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C8.02469 13 9.42677 12.475 10.5353 11.596L13.9697 15.0303L14.5 15.5607L15.5607 14.5L15.0303 13.9697L11.596 10.5353C12.475 9.42677 13 8.02469 13 6.5C13 2.91015 10.0899 0 6.5 0Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="py-[2px]"></div>
                  <div class="px-[2px]">
                    <ul
                      class="flex w-full flex-col items-center justify-center gap-[6px]"
                    >
                      <li class="w-full">
                        <button
                          class="group/facet flex h-10 w-full items-center justify-between rounded-md bg-grep-0 px-2 py-2 hover:bg-muted"
                        >
                          <div
                            class="flex min-w-0 items-center justify-start gap-2"
                          >
                            <img
                              alt="62057399 avatar"
                              width="16"
                              height="16"
                              class="rounded-sm"
                              src="https://avatars.githubusercontent.com/u/62057399?s=60&amp;v=4"
                            /><span class="truncate text-[14px] md:text-[13px]"
                              >trickest/cve</span
                            >
                          </div>
                          <span
                            class="rounded-full bg-muted px-2 py-0.5 text-xxs tabular-nums text-muted-foreground group-hover/facet:bg-grep-2"
                            >100k</span
                          >
                        </button>
                      </li>
                      <li class="w-full">
                        <button
                          class="group/facet flex h-10 w-full items-center justify-between rounded-md bg-grep-0 px-2 py-2 hover:bg-muted"
                        >
                          <div
                            class="flex min-w-0 items-center justify-start gap-2"
                          >
                            <img
                              alt="6154722 avatar"
                              width="16"
                              height="16"
                              class="rounded-sm"
                              src="https://avatars.githubusercontent.com/u/6154722?s=60&amp;v=4"
                            /><span class="truncate text-[14px] md:text-[13px]"
                              >microsoft/winget-pkgs</span
                            >
                          </div>
                          <span
                            class="rounded-full bg-muted px-2 py-0.5 text-xxs tabular-nums text-muted-foreground group-hover/facet:bg-grep-2"
                            >80k</span
                          >
                        </button>
                      </li>
                      <li class="w-full">
                        <button
                          class="group/facet flex h-10 w-full items-center justify-between rounded-md bg-grep-0 px-2 py-2 hover:bg-muted"
                        >
                          <div
                            class="flex min-w-0 items-center justify-start gap-2"
                          >
                            <img
                              alt="487568 avatar"
                              width="16"
                              height="16"
                              class="rounded-sm"
                              src="https://avatars.githubusercontent.com/u/487568?s=60&amp;v=4"
                            /><span class="truncate text-[14px] md:text-[13px]"
                              >NixOS/nixpkgs</span
                            >
                          </div>
                          <span
                            class="rounded-full bg-muted px-2 py-0.5 text-xxs tabular-nums text-muted-foreground group-hover/facet:bg-grep-2"
                            >20k</span
                          >
                        </button>
                      </li>
                      <li class="w-full">
                        <button
                          class="group/facet flex h-10 w-full items-center justify-between rounded-md bg-grep-0 px-2 py-2 hover:bg-muted"
                        >
                          <div
                            class="flex min-w-0 items-center justify-start gap-2"
                          >
                            <img
                              alt="26231823 avatar"
                              width="16"
                              height="16"
                              class="rounded-sm"
                              src="https://avatars.githubusercontent.com/u/26231823?s=60&amp;v=4"
                            /><span class="truncate text-[14px] md:text-[13px]"
                              >digitalinnovationone/dio-lab-open-source</span
                            >
                          </div>
                          <span
                            class="rounded-full bg-muted px-2 py-0.5 text-xxs tabular-nums text-muted-foreground group-hover/facet:bg-grep-2"
                            >20k</span
                          >
                        </button>
                      </li>
                      <li class="w-full">
                        <button
                          class="group/facet flex h-10 w-full items-center justify-between rounded-md bg-grep-0 px-2 py-2 hover:bg-muted"
                        >
                          <div
                            class="flex min-w-0 items-center justify-start gap-2"
                          >
                            <img
                              alt="22147470 avatar"
                              width="16"
                              height="16"
                              class="rounded-sm"
                              src="https://avatars.githubusercontent.com/u/22147470?s=60&amp;v=4"
                            /><span class="truncate text-[14px] md:text-[13px]"
                              >CheyneyComputerScience/CREMA-D</span
                            >
                          </div>
                          <span
                            class="rounded-full bg-muted px-2 py-0.5 text-xxs tabular-nums text-muted-foreground group-hover/facet:bg-grep-2"
                            >20k</span
                          >
                        </button>
                      </li>
                      <li class="w-full">
                        <button
                          class="group/facet flex h-10 w-full items-center justify-between rounded-md bg-grep-0 px-2 py-2 hover:bg-muted"
                        >
                          <div
                            class="flex min-w-0 items-center justify-start gap-2"
                          >
                            <img
                              alt="761456 avatar"
                              width="16"
                              height="16"
                              class="rounded-sm"
                              src="https://avatars.githubusercontent.com/u/761456?s=60&amp;v=4"
                            /><span class="truncate text-[14px] md:text-[13px]"
                              >hashicorp/terraform-provider-azurerm</span
                            >
                          </div>
                          <span
                            class="rounded-full bg-muted px-2 py-0.5 text-xxs tabular-nums text-muted-foreground group-hover/facet:bg-grep-2"
                            >20k</span
                          >
                        </button>
                      </li>
                      <li class="w-full">
                        <button
                          class="group/facet flex h-10 w-full items-center justify-between rounded-md bg-grep-0 px-2 py-2 hover:bg-muted"
                        >
                          <div
                            class="flex min-w-0 items-center justify-start gap-2"
                          >
                            <img
                              alt="9919 avatar"
                              width="16"
                              height="16"
                              class="rounded-sm"
                              src="https://avatars.githubusercontent.com/u/9919?s=60&amp;v=4"
                            /><span class="truncate text-[14px] md:text-[13px]"
                              >github/dmca</span
                            >
                          </div>
                          <span
                            class="rounded-full bg-muted px-2 py-0.5 text-xxs tabular-nums text-muted-foreground group-hover/facet:bg-grep-2"
                            >10k</span
                          >
                        </button>
                      </li>
                      <li class="w-full">
                        <button
                          class="group/facet flex h-10 w-full items-center justify-between rounded-md bg-grep-0 px-2 py-2 hover:bg-muted"
                        >
                          <div
                            class="flex min-w-0 items-center justify-start gap-2"
                          >
                            <img
                              alt="2363625 avatar"
                              width="16"
                              height="16"
                              class="rounded-sm"
                              src="https://avatars.githubusercontent.com/u/2363625?s=60&amp;v=4"
                            /><span class="truncate text-[14px] md:text-[13px]"
                              >ACRA/acra</span
                            >
                          </div>
                          <span
                            class="rounded-full bg-muted px-2 py-0.5 text-xxs tabular-nums text-muted-foreground group-hover/facet:bg-grep-2"
                            >10k</span
                          >
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full select-none py-2" data-orientation="vertical">
            <div data-state="open" data-orientation="vertical" class="">
              <h3 data-orientation="vertical" data-state="open" class="flex">
                <button
                  type="button"
                  aria-controls="radix-:r1q:"
                  aria-expanded="true"
                  data-state="open"
                  data-orientation="vertical"
                  id="radix-:r1p:"
                  class="flex flex-1 items-center justify-start gap-2 py-4 text-left text-sm transition-all [&amp;>svg]:-rotate-90 [&amp;[data-state=open]>svg]:rotate-0 w-full pl-3"
                  data-radix-collection-item=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                  <div class="flex w-full items-center justify-between">
                    <h2 class="text-sm">Path</h2>
                    <div></div>
                  </div>
                </button>
              </h3>
              <div
                data-state="open"
                id="radix-:r1q:"
                role="region"
                aria-labelledby="radix-:r1p:"
                data-orientation="vertical"
                class="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 422px; --radix-collapsible-content-width: 296px;"
              >
                <div class="pb-4 pt-0">
                  <div class="w-full p-[2px]">
                    <div class="relative">
                      <input
                        class="flex h-9 min-w-0 shrink rounded-md border border-grep-4 bg-grep-0 px-3 py-1 transition-colors focus-visible:border-grep-12 focus-visible:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grep-4 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-grep-7 pr-7 max-md:pl-8 w-full max-w-none text-sm hover:border-grep-5 hover:bg-grep-1 max-md:h-10 max-md:border-grep-1 max-md:bg-grep-1 md:bg-background md:hover:bg-background"
                        spellcheck="false"
                        autocapitalize="off"
                        autocomplete="off"
                        autocorrect="off"
                        placeholder="Filter paths..."
                        type="text"
                        value=""
                      /><svg
                        height="16"
                        stroke-linejoin="round"
                        viewBox="0 0 16 16"
                        width="16"
                        class="absolute left-2 top-3 text-grep-9 md:hidden"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.5 6.5C1.5 3.73858 3.73858 1.5 6.5 1.5C9.26142 1.5 11.5 3.73858 11.5 6.5C11.5 9.26142 9.26142 11.5 6.5 11.5C3.73858 11.5 1.5 9.26142 1.5 6.5ZM6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C8.02469 13 9.42677 12.475 10.5353 11.596L13.9697 15.0303L14.5 15.5607L15.5607 14.5L15.0303 13.9697L11.596 10.5353C12.475 9.42677 13 8.02469 13 6.5C13 2.91015 10.0899 0 6.5 0Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="py-[2px]"></div>
                  <div class="px-[2px]">
                    <ul
                      class="flex w-full flex-col items-center justify-center gap-[6px]"
                    >
                      <li class="w-full">
                        <button
                          class="group/facet flex h-10 w-full items-center justify-between rounded-md bg-grep-0 px-2 py-2 hover:bg-muted"
                        >
                          <span class="truncate text-[14px] md:text-[13px]"
                            >src/</span
                          ><span
                            class="rounded-full bg-muted px-2 py-0.5 text-xxs tabular-nums text-muted-foreground group-hover/facet:bg-grep-2"
                            >900k</span
                          >
                        </button>
                      </li>
                      <li class="w-full">
                        <button
                          class="group/facet flex h-10 w-full items-center justify-between rounded-md bg-grep-0 px-2 py-2 hover:bg-muted"
                        >
                          <span class="truncate text-[14px] md:text-[13px]"
                            >docs/</span
                          ><span
                            class="rounded-full bg-muted px-2 py-0.5 text-xxs tabular-nums text-muted-foreground group-hover/facet:bg-grep-2"
                            >600k</span
                          >
                        </button>
                      </li>
                      <li class="w-full">
                        <button
                          class="group/facet flex h-10 w-full items-center justify-between rounded-md bg-grep-0 px-2 py-2 hover:bg-muted"
                        >
                          <span class="truncate text-[14px] md:text-[13px]"
                            >.github/</span
                          ><span
                            class="rounded-full bg-muted px-2 py-0.5 text-xxs tabular-nums text-muted-foreground group-hover/facet:bg-grep-2"
                            >600k</span
                          >
                        </button>
                      </li>
                      <li class="w-full">
                        <button
                          class="group/facet flex h-10 w-full items-center justify-between rounded-md bg-grep-0 px-2 py-2 hover:bg-muted"
                        >
                          <span class="truncate text-[14px] md:text-[13px]"
                            >vendor/</span
                          ><span
                            class="rounded-full bg-muted px-2 py-0.5 text-xxs tabular-nums text-muted-foreground group-hover/facet:bg-grep-2"
                            >300k</span
                          >
                        </button>
                      </li>
                      <li class="w-full">
                        <button
                          class="group/facet flex h-10 w-full items-center justify-between rounded-md bg-grep-0 px-2 py-2 hover:bg-muted"
                        >
                          <span class="truncate text-[14px] md:text-[13px]"
                            >pkg/</span
                          ><span
                            class="rounded-full bg-muted px-2 py-0.5 text-xxs tabular-nums text-muted-foreground group-hover/facet:bg-grep-2"
                            >300k</span
                          >
                        </button>
                      </li>
                      <li class="w-full">
                        <button
                          class="group/facet flex h-10 w-full items-center justify-between rounded-md bg-grep-0 px-2 py-2 hover:bg-muted"
                        >
                          <span class="truncate text-[14px] md:text-[13px]"
                            >packages/</span
                          ><span
                            class="rounded-full bg-muted px-2 py-0.5 text-xxs tabular-nums text-muted-foreground group-hover/facet:bg-grep-2"
                            >200k</span
                          >
                        </button>
                      </li>
                      <li class="w-full">
                        <button
                          class="group/facet flex h-10 w-full items-center justify-between rounded-md bg-grep-0 px-2 py-2 hover:bg-muted"
                        >
                          <span class="truncate text-[14px] md:text-[13px]"
                            >internal/</span
                          ><span
                            class="rounded-full bg-muted px-2 py-0.5 text-xxs tabular-nums text-muted-foreground group-hover/facet:bg-grep-2"
                            >200k</span
                          >
                        </button>
                      </li>
                      <li class="w-full">
                        <button
                          class="group/facet flex h-10 w-full items-center justify-between rounded-md bg-grep-0 px-2 py-2 hover:bg-muted"
                        >
                          <span class="truncate text-[14px] md:text-[13px]"
                            >tests/</span
                          ><span
                            class="rounded-full bg-muted px-2 py-0.5 text-xxs tabular-nums text-muted-foreground group-hover/facet:bg-grep-2"
                            >100k</span
                          >
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full select-none py-2" data-orientation="vertical">
            <div data-state="open" data-orientation="vertical" class="">
              <h3 data-orientation="vertical" data-state="open" class="flex">
                <button
                  type="button"
                  aria-controls="radix-:r1s:"
                  aria-expanded="true"
                  data-state="open"
                  data-orientation="vertical"
                  id="radix-:r1r:"
                  class="flex flex-1 items-center justify-start gap-2 py-4 text-left text-sm transition-all [&amp;>svg]:-rotate-90 [&amp;[data-state=open]>svg]:rotate-0 w-full pl-3"
                  data-radix-collection-item=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                  <div class="flex w-full items-center justify-between">
                    <h2 class="text-sm">Language</h2>
                    <div></div>
                  </div>
                </button>
              </h3>
              <div
                data-state="open"
                id="radix-:r1s:"
                role="region"
                aria-labelledby="radix-:r1r:"
                data-orientation="vertical"
                class="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 422px; --radix-collapsible-content-width: 296px;"
              >
                <div class="pb-4 pt-0">
                  <div class="w-full p-[2px]">
                    <div class="relative">
                      <input
                        class="flex h-9 min-w-0 shrink rounded-md border border-grep-4 bg-grep-0 px-3 py-1 transition-colors focus-visible:border-grep-12 focus-visible:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-grep-4 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-grep-7 pr-7 max-md:pl-8 w-full max-w-none text-sm hover:border-grep-5 hover:bg-grep-1 max-md:h-10 max-md:border-grep-1 max-md:bg-grep-1 md:bg-background md:hover:bg-background"
                        spellcheck="false"
                        autocapitalize="off"
                        autocomplete="off"
                        autocorrect="off"
                        placeholder="Filter languages..."
                        type="text"
                        value=""
                      /><svg
                        height="16"
                        stroke-linejoin="round"
                        viewBox="0 0 16 16"
                        width="16"
                        class="absolute left-2 top-3 text-grep-9 md:hidden"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.5 6.5C1.5 3.73858 3.73858 1.5 6.5 1.5C9.26142 1.5 11.5 3.73858 11.5 6.5C11.5 9.26142 9.26142 11.5 6.5 11.5C3.73858 11.5 1.5 9.26142 1.5 6.5ZM6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C8.02469 13 9.42677 12.475 10.5353 11.596L13.9697 15.0303L14.5 15.5607L15.5607 14.5L15.0303 13.9697L11.596 10.5353C12.475 9.42677 13 8.02469 13 6.5C13 2.91015 10.0899 0 6.5 0Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="py-[2px]"></div>
                  <div class="px-[2px]">
                    <ul
                      class="flex w-full flex-col items-center justify-center gap-[6px]"
                    >
                      <li class="w-full">
                        <label
                          class="group/facet flex h-10 w-full cursor-pointer items-center justify-between rounded-md bg-grep-0 px-2 py-2 hover:bg-muted"
                          ><div
                            class="flex min-w-0 items-center justify-start gap-2"
                          >
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked="false"
                              data-state="unchecked"
                              value="on"
                              class="peer h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground border-grep-9 shadow-none data-[state=checked]:border-foreground"
                            ></button
                            ><span class="truncate text-[14px] md:text-[13px]"
                              >Markdown</span
                            >
                          </div>
                          <span
                            class="rounded-full bg-muted px-2 py-0.5 text-xxs tabular-nums text-muted-foreground group-hover/facet:bg-grep-2"
                            >2M</span
                          ></label
                        >
                      </li>
                      <li class="w-full">
                        <label
                          class="group/facet flex h-10 w-full cursor-pointer items-center justify-between rounded-md bg-grep-0 px-2 py-2 hover:bg-muted"
                          ><div
                            class="flex min-w-0 items-center justify-start gap-2"
                          >
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked="false"
                              data-state="unchecked"
                              value="on"
                              class="peer h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground border-grep-9 shadow-none data-[state=checked]:border-foreground"
                            ></button
                            ><span class="truncate text-[14px] md:text-[13px]"
                              >Go</span
                            >
                          </div>
                          <span
                            class="rounded-full bg-muted px-2 py-0.5 text-xxs tabular-nums text-muted-foreground group-hover/facet:bg-grep-2"
                            >2M</span
                          ></label
                        >
                      </li>
                      <li class="w-full">
                        <label
                          class="group/facet flex h-10 w-full cursor-pointer items-center justify-between rounded-md bg-grep-0 px-2 py-2 hover:bg-muted"
                          ><div
                            class="flex min-w-0 items-center justify-start gap-2"
                          >
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked="false"
                              data-state="unchecked"
                              value="on"
                              class="peer h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground border-grep-9 shadow-none data-[state=checked]:border-foreground"
                            ></button
                            ><span class="truncate text-[14px] md:text-[13px]"
                              >YAML</span
                            >
                          </div>
                          <span
                            class="rounded-full bg-muted px-2 py-0.5 text-xxs tabular-nums text-muted-foreground group-hover/facet:bg-grep-2"
                            >1M</span
                          ></label
                        >
                      </li>
                      <li class="w-full">
                        <label
                          class="group/facet flex h-10 w-full cursor-pointer items-center justify-between rounded-md bg-grep-0 px-2 py-2 hover:bg-muted"
                          ><div
                            class="flex min-w-0 items-center justify-start gap-2"
                          >
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked="false"
                              data-state="unchecked"
                              value="on"
                              class="peer h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground border-grep-9 shadow-none data-[state=checked]:border-foreground"
                            ></button
                            ><span class="truncate text-[14px] md:text-[13px]"
                              >JSON</span
                            >
                          </div>
                          <span
                            class="rounded-full bg-muted px-2 py-0.5 text-xxs tabular-nums text-muted-foreground group-hover/facet:bg-grep-2"
                            >700k</span
                          ></label
                        >
                      </li>
                      <li class="w-full">
                        <label
                          class="group/facet flex h-10 w-full cursor-pointer items-center justify-between rounded-md bg-grep-0 px-2 py-2 hover:bg-muted"
                          ><div
                            class="flex min-w-0 items-center justify-start gap-2"
                          >
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked="false"
                              data-state="unchecked"
                              value="on"
                              class="peer h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground border-grep-9 shadow-none data-[state=checked]:border-foreground"
                            ></button
                            ><span class="truncate text-[14px] md:text-[13px]"
                              >Python</span
                            >
                          </div>
                          <span
                            class="rounded-full bg-muted px-2 py-0.5 text-xxs tabular-nums text-muted-foreground group-hover/facet:bg-grep-2"
                            >600k</span
                          ></label
                        >
                      </li>
                      <li class="w-full">
                        <label
                          class="group/facet flex h-10 w-full cursor-pointer items-center justify-between rounded-md bg-grep-0 px-2 py-2 hover:bg-muted"
                          ><div
                            class="flex min-w-0 items-center justify-start gap-2"
                          >
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked="false"
                              data-state="unchecked"
                              value="on"
                              class="peer h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground border-grep-9 shadow-none data-[state=checked]:border-foreground"
                            ></button
                            ><span class="truncate text-[14px] md:text-[13px]"
                              >JavaScript</span
                            >
                          </div>
                          <span
                            class="rounded-full bg-muted px-2 py-0.5 text-xxs tabular-nums text-muted-foreground group-hover/facet:bg-grep-2"
                            >500k</span
                          ></label
                        >
                      </li>
                      <li class="w-full">
                        <label
                          class="group/facet flex h-10 w-full cursor-pointer items-center justify-between rounded-md bg-grep-0 px-2 py-2 hover:bg-muted"
                          ><div
                            class="flex min-w-0 items-center justify-start gap-2"
                          >
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked="false"
                              data-state="unchecked"
                              value="on"
                              class="peer h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground border-grep-9 shadow-none data-[state=checked]:border-foreground"
                            ></button
                            ><span class="truncate text-[14px] md:text-[13px]"
                              >Java</span
                            >
                          </div>
                          <span
                            class="rounded-full bg-muted px-2 py-0.5 text-xxs tabular-nums text-muted-foreground group-hover/facet:bg-grep-2"
                            >400k</span
                          ></label
                        >
                      </li>
                      <li class="w-full">
                        <label
                          class="group/facet flex h-10 w-full cursor-pointer items-center justify-between rounded-md bg-grep-0 px-2 py-2 hover:bg-muted"
                          ><div
                            class="flex min-w-0 items-center justify-start gap-2"
                          >
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked="false"
                              data-state="unchecked"
                              value="on"
                              class="peer h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground border-grep-9 shadow-none data-[state=checked]:border-foreground"
                            ></button
                            ><span class="truncate text-[14px] md:text-[13px]"
                              >HTML</span
                            >
                          </div>
                          <span
                            class="rounded-full bg-muted px-2 py-0.5 text-xxs tabular-nums text-muted-foreground group-hover/facet:bg-grep-2"
                            >400k</span
                          ></label
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full flex-1 flex-col border-grep-2 md:border-l">
        <div
          class="flex min-h-[48px] w-full flex-row items-center justify-between border-b border-grep-2 px-4 text-[13px]/[13px] md:pr-0 [@media(max-height:480px)]:hidden"
        >
          <div class="flex flex-row items-center gap-1">
            <span class="font-medium text-grep-9"
              >13,288,000 results found</span
            >
          </div>
          <div class="hidden md:flex">
            <button
              type="button"
              role="combobox"
              aria-controls="radix-:r1t:"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              class="flex items-center whitespace-nowrap rounded-md border border-input bg-transparent px-4 py-2 ring-offset-background placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 h-7 w-32 select-none justify-end gap-1 border-none text-[13px] shadow-none"
            >
              <span style="pointer-events: none;">Compact</span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-down h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>
          <div class="flex gap-3 md:hidden">
            <button
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8 rounded-md px-3 text-xs sm:h-9 sm:w-9 sm:px-4 py-2 sm:text-sm shadow-none"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:r1u:"
              data-state="closed"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1 2H1.75H14.25H15V3.5H14.25H1.75H1V2ZM5 12H5.75H10.25H11V13.5H10.25H5.75H5V12ZM3.75 7H3V8.5H3.75H12.25H13V7H12.25H3.75Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          class="flex max-h-full w-full flex-1 flex-col items-center space-y-4 overflow-y-auto px-4 py-4"
        >
          <div
            class="flex w-full min-w-32 shrink-0 flex-col overflow-hidden text-wrap rounded-md border border-grep-2"
          >
            <div
              class="flex min-h-10 w-full items-center justify-between border-b bg-grep-0 px-4"
            >
              <div class="flex flex-col py-1 sm:flex-row sm:gap-2">
                <div class="flex shrink-0 flex-row items-center gap-2">
                  <img
                    alt="6128107 avatar"
                    width="16"
                    height="16"
                    class="rounded-sm"
                    src="https://avatars.githubusercontent.com/u/6128107?s=60&amp;v=4"
                  /><a href="https://github.com/vuejs/vue"
                    ><span class="text-sm font-medium hover:underline"
                      >vuejs/vue</span
                    ></a
                  >
                </div>
                <a
                  href="https://github.com/vuejs/vue/blob/main/test/e2e/commits.mock.ts"
                  ><span class="text-sm text-grep-9 hover:underline"
                    >test<wbr />/e2e<wbr />/commits.mock.ts</span
                  ></a
                >
              </div>
              <div class="hidden text-nowrap text-xs text-grep-9 md:block">
                100+ matches
              </div>
            </div>
            <div>
              <table class="highlight-table">
                <tbody>
                  <tr data-line="20">
                    <td><div class="lineno">20</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">          </span><span class="nx">sha</span><span class="o">:</span><span class="w"> </span><span class="s1">'7846816b875eb664ddf718fad04a720efeac72d0'</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="21">
                    <td><div class="lineno">21</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">          </span><span class="nx">url</span><span class="o">:</span><span class="w"> </span><span class="s1">'https://api.<mark>github</mark>.com/repos/vuejs/vue/git/trees/7846816b875eb664ddf718fad04a720efeac72d0'</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="22">
                    <td><div class="lineno">22</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">        </span><span class="p">},</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="23">
                    <td><div class="lineno">23</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">        </span><span class="nx">url</span><span class="o">:</span><span class="w"> </span><span class="s1">'https://api.<mark>github</mark>.com/repos/vuejs/vue/git/commits/0948d999f2fddf9f90991956493f976273c5da1f'</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="24">
                    <td><div class="lineno">24</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">        </span><span class="nx">comment_count</span><span class="o">:</span><span class="w"> </span><span class="kt">0</span><span class="p">,</span></pre>
                        <div class="jump"></div>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="32">
                    <td><div class="lineno">32</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">      </span><span class="nx">url</span><span class="o">:</span><span class="w"> </span><span class="s1">'https://api.<mark>github</mark>.com/repos/vuejs/vue/commits/0948d999f2fddf9f90991956493f976273c5da1f'</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="33">
                    <td><div class="lineno">33</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">      </span><span class="nx">html_url</span><span class="o">:</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="34">
                    <td><div class="lineno">34</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">        </span><span class="s1">'https://<mark>github</mark>.com/vuejs/vue/commit/0948d999f2fddf9f90991956493f976273c5da1f'</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="35">
                    <td><div class="lineno">35</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">      </span><span class="nx">comments_url</span><span class="o">:</span></pre>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="flex w-full min-w-32 shrink-0 flex-col overflow-hidden text-wrap rounded-md border border-grep-2"
          >
            <div
              class="flex min-h-10 w-full items-center justify-between border-b bg-grep-0 px-4"
            >
              <div class="flex flex-col py-1 sm:flex-row sm:gap-2">
                <div class="flex shrink-0 flex-row items-center gap-2">
                  <img
                    alt="130738209 avatar"
                    width="16"
                    height="16"
                    class="rounded-sm"
                    src="https://avatars.githubusercontent.com/u/130738209?s=60&amp;v=4"
                  /><a href="https://github.com/Significant-Gravitas/AutoGPT"
                    ><span class="text-sm font-medium hover:underline"
                      >Significant-Gravitas/AutoGPT</span
                    ></a
                  >
                </div>
                <a
                  href="https://github.com/Significant-Gravitas/AutoGPT/blob/master/autogpt_platform/backend/backend/blocks/github/repo.py"
                  ><span class="text-sm text-grep-9 hover:underline"
                    >autogpt_platform<wbr />/backend<wbr />/backend<wbr />/blocks<wbr />/github<wbr />/repo.py</span
                  ></a
                >
              </div>
              <div class="hidden text-nowrap text-xs text-grep-9 md:block">
                100+ matches
              </div>
            </div>
            <div>
              <table class="highlight-table">
                <tbody>
                  <tr data-line="11">
                    <td><div class="lineno">11</div></td>
                    <td>
                      <div class="highlight">
                        <pre>    <span class="n">TEST_CREDENTIALS_INPUT</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="12">
                    <td><div class="lineno">12</div></td>
                    <td>
                      <div class="highlight">
                        <pre>    <span class="n"><mark>Github</mark>Credentials</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="13">
                    <td><div class="lineno">13</div></td>
                    <td>
                      <div class="highlight">
                        <pre>    <span class="n"><mark>Github</mark>CredentialsField</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="14">
                    <td><div class="lineno">14</div></td>
                    <td>
                      <div class="highlight">
                        <pre>    <span class="n"><mark>Github</mark>CredentialsInput</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="15">
                    <td><div class="lineno">15</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="p">)</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="16">
                    <td><div class="lineno">16</div></td>
                    <td>
                      <div class="highlight"><pre></pre></div>
                    </td>
                  </tr>
                  <tr data-line="17">
                    <td><div class="lineno">17</div></td>
                    <td>
                      <div class="highlight"><pre></pre></div>
                    </td>
                  </tr>
                  <tr data-line="18">
                    <td><div class="lineno">18</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="k">class</span> <span class="nc"><mark>Github</mark>ListTagsBlock</span><span class="p">(</span><span class="n">Block</span><span class="p">):</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="19">
                    <td><div class="lineno">19</div></td>
                    <td>
                      <div class="highlight">
                        <pre>    <span class="k">class</span> <span class="nc">Input</span><span class="p">(</span><span class="n">BlockSchema</span><span class="p">):</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="20">
                    <td><div class="lineno">20</div></td>
                    <td>
                      <div class="highlight">
                        <pre>        <span class="n">credentials</span><span class="p">:</span> <span class="n"><mark>Github</mark>CredentialsInput</span> <span class="o">=</span> <span class="n"><mark>Github</mark>CredentialsField</span><span class="p">(</span><span class="s2">"repo"</span><span class="p">)</span></pre>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="flex w-full min-w-32 shrink-0 flex-col overflow-hidden text-wrap rounded-md border border-grep-2"
          >
            <div
              class="flex min-h-10 w-full items-center justify-between border-b bg-grep-0 px-4"
            >
              <div class="flex flex-col py-1 sm:flex-row sm:gap-2">
                <div class="flex shrink-0 flex-row items-center gap-2">
                  <img
                    alt="130738209 avatar"
                    width="16"
                    height="16"
                    class="rounded-sm"
                    src="https://avatars.githubusercontent.com/u/130738209?s=60&amp;v=4"
                  /><a href="https://github.com/Significant-Gravitas/AutoGPT"
                    ><span class="text-sm font-medium hover:underline"
                      >Significant-Gravitas/AutoGPT</span
                    ></a
                  >
                </div>
                <a
                  href="https://github.com/Significant-Gravitas/AutoGPT/blob/master/autogpt_platform/backend/backend/blocks/github/issues.py"
                  ><span class="text-sm text-grep-9 hover:underline"
                    >autogpt_platform<wbr />/backend<wbr />/backend<wbr />/blocks<wbr />/github<wbr />/issues.py</span
                  ></a
                >
              </div>
              <div class="hidden text-nowrap text-xs text-grep-9 md:block">
                100+ matches
              </div>
            </div>
            <div>
              <table class="highlight-table">
                <tbody>
                  <tr data-line="13">
                    <td><div class="lineno">13</div></td>
                    <td>
                      <div class="highlight">
                        <pre>    <span class="n"><mark>Github</mark>Credentials</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="14">
                    <td><div class="lineno">14</div></td>
                    <td>
                      <div class="highlight">
                        <pre>    <span class="n"><mark>Github</mark>CredentialsField</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="15">
                    <td><div class="lineno">15</div></td>
                    <td>
                      <div class="highlight">
                        <pre>    <span class="n"><mark>Github</mark>CredentialsInput</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="16">
                    <td><div class="lineno">16</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="p">)</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="17">
                    <td><div class="lineno">17</div></td>
                    <td>
                      <div class="highlight"><pre></pre></div>
                    </td>
                  </tr>
                  <tr data-line="18">
                    <td><div class="lineno">18</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="n">logger</span> <span class="o">=</span> <span class="n">logging</span><span class="o">.</span><span class="n">getLogger</span><span class="p">(</span><span class="vm">__name__</span><span class="p">)</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="19">
                    <td><div class="lineno">19</div></td>
                    <td>
                      <div class="highlight"><pre></pre></div>
                    </td>
                  </tr>
                  <tr data-line="20">
                    <td><div class="lineno">20</div></td>
                    <td>
                      <div class="highlight"><pre></pre></div>
                    </td>
                  </tr>
                  <tr data-line="21">
                    <td><div class="lineno">21</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="k">def</span> <span class="nf">is_<mark>github</mark>_url</span><span class="p">(</span><span class="n">url</span><span class="p">:</span> <span class="nb">str</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="nb">bool</span><span class="p">:</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="22">
                    <td><div class="lineno">22</div></td>
                    <td>
                      <div class="highlight">
                        <pre>    <span class="k">return</span> <span class="n">urlparse</span><span class="p">(</span><span class="n">url</span><span class="p">)</span><span class="o">.</span><span class="n">netloc</span> <span class="o">==</span> <span class="s2">"<mark>github</mark>.com"</span></pre>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="flex w-full min-w-32 shrink-0 flex-col overflow-hidden text-wrap rounded-md border border-grep-2"
          >
            <div
              class="flex min-h-10 w-full items-center justify-between border-b bg-grep-0 px-4"
            >
              <div class="flex flex-col py-1 sm:flex-row sm:gap-2">
                <div class="flex shrink-0 flex-row items-center gap-2">
                  <img
                    alt="14101776 avatar"
                    width="16"
                    height="16"
                    class="rounded-sm"
                    src="https://avatars.githubusercontent.com/u/14101776?s=60&amp;v=4"
                  /><a href="https://github.com/flutter/flutter"
                    ><span class="text-sm font-medium hover:underline"
                      >flutter/flutter</span
                    ></a
                  >
                </div>
                <a
                  href="https://github.com/flutter/flutter/blob/master/packages/flutter/lib/src/material/colors.dart"
                  ><span class="text-sm text-grep-9 hover:underline"
                    >packages<wbr />/flutter<wbr />/lib<wbr />/src<wbr />/material<wbr />/colors.dart</span
                  ></a
                >
              </div>
              <div class="hidden text-nowrap text-xs text-grep-9 md:block">
                100+ matches
              </div>
            </div>
            <div>
              <table class="highlight-table">
                <tbody>
                  <tr data-line="212">
                    <td><div class="lineno">212</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="c1">/// ![](https://flutter.<mark>github</mark>.io/assets-for-api-docs/assets/material/Colors.pink.png)</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="213">
                    <td><div class="lineno">213</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="c1">/// ![](https://flutter.<mark>github</mark>.io/assets-for-api-docs/assets/material/Colors.pinkAccent.png)</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="214">
                    <td><div class="lineno">214</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="c1">///</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="215">
                    <td><div class="lineno">215</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="c1">/// ![](https://flutter.<mark>github</mark>.io/assets-for-api-docs/assets/material/Colors.red.png)</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="216">
                    <td><div class="lineno">216</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="c1">/// ![](https://flutter.<mark>github</mark>.io/assets-for-api-docs/assets/material/Colors.redAccent.png)</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="217">
                    <td><div class="lineno">217</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="c1">///</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="218">
                    <td><div class="lineno">218</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="c1">/// ![](https://flutter.<mark>github</mark>.io/assets-for-api-docs/assets/material/Colors.deepOrange.png)</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="219">
                    <td><div class="lineno">219</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="c1">/// ![](https://flutter.<mark>github</mark>.io/assets-for-api-docs/assets/material/Colors.deepOrangeAccent.png)</span></pre>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="flex w-full min-w-32 shrink-0 flex-col overflow-hidden text-wrap rounded-md border border-grep-2"
          >
            <div
              class="flex min-h-10 w-full items-center justify-between border-b bg-grep-0 px-4"
            >
              <div class="flex flex-col py-1 sm:flex-row sm:gap-2">
                <div class="flex shrink-0 flex-row items-center gap-2">
                  <img
                    alt="6154722 avatar"
                    width="16"
                    height="16"
                    class="rounded-sm"
                    src="https://avatars.githubusercontent.com/u/6154722?s=60&amp;v=4"
                  /><a href="https://github.com/microsoft/vscode"
                    ><span class="text-sm font-medium hover:underline"
                      >microsoft/vscode</span
                    ></a
                  >
                </div>
                <a
                  href="https://github.com/microsoft/vscode/blob/main/src/vs/platform/extensions/common/extensionsApiProposals.ts"
                  ><span class="text-sm text-grep-9 hover:underline"
                    >src<wbr />/vs<wbr />/platform<wbr />/extensions<wbr />/common<wbr />/extensionsApiProposals.ts</span
                  ></a
                >
              </div>
              <div class="hidden text-nowrap text-xs text-grep-9 md:block">
                100+ matches
              </div>
            </div>
            <div>
              <table class="highlight-table">
                <tbody>
                  <tr data-line="9">
                    <td><div class="lineno">9</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">	</span><span class="nx">activeComment</span><span class="o">:</span><span class="w"> </span><span class="p">{</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="10">
                    <td><div class="lineno">10</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">		</span><span class="nx">proposal</span><span class="o">:</span><span class="w"> </span><span class="s1">'https://raw.<mark>github</mark>usercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.activeComment.d.ts'</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="11">
                    <td><div class="lineno">11</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">	</span><span class="p">},</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="12">
                    <td><div class="lineno">12</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">	</span><span class="nx">aiRelatedInformation</span><span class="o">:</span><span class="w"> </span><span class="p">{</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="13">
                    <td><div class="lineno">13</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">		</span><span class="nx">proposal</span><span class="o">:</span><span class="w"> </span><span class="s1">'https://raw.<mark>github</mark>usercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.aiRelatedInformation.d.ts'</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="14">
                    <td><div class="lineno">14</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">	</span><span class="p">},</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="15">
                    <td><div class="lineno">15</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">	</span><span class="nx">aiTextSearchProvider</span><span class="o">:</span><span class="w"> </span><span class="p">{</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="16">
                    <td><div class="lineno">16</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">		</span><span class="nx">proposal</span><span class="o">:</span><span class="w"> </span><span class="s1">'https://raw.<mark>github</mark>usercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.aiTextSearchProvider.d.ts'</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="17">
                    <td><div class="lineno">17</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">		</span><span class="nx">version</span><span class="o">:</span><span class="w"> </span><span class="kt">2</span></pre>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="flex w-full min-w-32 shrink-0 flex-col overflow-hidden text-wrap rounded-md border border-grep-2"
          >
            <div
              class="flex min-h-10 w-full items-center justify-between border-b bg-grep-0 px-4"
            >
              <div class="flex flex-col py-1 sm:flex-row sm:gap-2">
                <div class="flex shrink-0 flex-row items-center gap-2">
                  <img
                    alt="15658638 avatar"
                    width="16"
                    height="16"
                    class="rounded-sm"
                    src="https://avatars.githubusercontent.com/u/15658638?s=60&amp;v=4"
                  /><a href="https://github.com/tensorflow/tensorflow"
                    ><span class="text-sm font-medium hover:underline"
                      >tensorflow/tensorflow</span
                    ></a
                  >
                </div>
                <a
                  href="https://github.com/tensorflow/tensorflow/blob/master/tensorflow/workspace2.bzl"
                  ><span class="text-sm text-grep-9 hover:underline"
                    >tensorflow<wbr />/workspace2.bzl</span
                  ></a
                >
              </div>
              <div class="hidden text-nowrap text-xs text-grep-9 md:block">
                76 matches
              </div>
            </div>
            <div>
              <table class="highlight-table">
                <tbody>
                  <tr data-line="164">
                    <td><div class="lineno">164</div></td>
                    <td>
                      <div class="highlight">
                        <pre>        <span class="n">strip_prefix</span> <span class="o">=</span> <span class="s2">"XNNPACK-ece21c589be842fbeaee297b0d668194d6f3a35b"</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="165">
                    <td><div class="lineno">165</div></td>
                    <td>
                      <div class="highlight">
                        <pre>        <span class="n">urls</span> <span class="o">=</span> <span class="n">tf_mirror_urls</span><span class="p">(</span><span class="s2">"https://<mark>github</mark>.com/google/XNNPACK/archive/ece21c589be842fbeaee297b0d668194d6f3a35b.zip"</span><span class="p">),</span></pre>
                        <div class="jump"></div>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="173">
                    <td><div class="lineno">173</div></td>
                    <td>
                      <div class="highlight">
                        <pre>        <span class="n">strip_prefix</span> <span class="o">=</span> <span class="s2">"kleidiai-1.4.0"</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="174">
                    <td><div class="lineno">174</div></td>
                    <td>
                      <div class="highlight">
                        <pre>        <span class="n">urls</span> <span class="o">=</span> <span class="n">tf_mirror_urls</span><span class="p">(</span><span class="s2">"https://<mark>github</mark>.com/ARM-software/kleidiai/archive/refs/tags/v1.4.0.zip"</span><span class="p">),</span></pre>
                        <div class="jump"></div>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="180">
                    <td><div class="lineno">180</div></td>
                    <td>
                      <div class="highlight">
                        <pre>        <span class="n">strip_prefix</span> <span class="o">=</span> <span class="s2">"FXdiv-63058eff77e11aa15bf531df5dd34395ec3017c8"</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="181">
                    <td><div class="lineno">181</div></td>
                    <td>
                      <div class="highlight">
                        <pre>        <span class="n">urls</span> <span class="o">=</span> <span class="n">tf_mirror_urls</span><span class="p">(</span><span class="s2">"https://<mark>github</mark>.com/Maratyszcza/FXdiv/archive/63058eff77e11aa15bf531df5dd34395ec3017c8.zip"</span><span class="p">),</span></pre>
                        <div class="jump"></div>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="189">
                    <td><div class="lineno">189</div></td>
                    <td>
                      <div class="highlight">
                        <pre>        <span class="n">urls</span> <span class="o">=</span> <span class="n">tf_mirror_urls</span><span class="p">(</span><span class="s2">"https://<mark>github</mark>.com/google/pthreadpool/archive/b92447772365661680f486e39a91dfe6675adafc.zip"</span><span class="p">),</span></pre>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="flex w-full min-w-32 shrink-0 flex-col overflow-hidden text-wrap rounded-md border border-grep-2"
          >
            <div
              class="flex min-h-10 w-full items-center justify-between border-b bg-grep-0 px-4"
            >
              <div class="flex flex-col py-1 sm:flex-row sm:gap-2">
                <div class="flex shrink-0 flex-row items-center gap-2">
                  <img
                    alt="6154722 avatar"
                    width="16"
                    height="16"
                    class="rounded-sm"
                    src="https://avatars.githubusercontent.com/u/6154722?s=60&amp;v=4"
                  /><a href="https://github.com/microsoft/vscode"
                    ><span class="text-sm font-medium hover:underline"
                      >microsoft/vscode</span
                    ></a
                  >
                </div>
                <a
                  href="https://github.com/microsoft/vscode/blob/main/src/vs/workbench/contrib/tags/electron-sandbox/workspaceTagsService.ts"
                  ><span class="text-sm text-grep-9 hover:underline"
                    >src<wbr />/vs<wbr />/workbench<wbr />/contrib<wbr />/tags<wbr />/electron-sandbox<wbr />/workspaceTagsService.ts</span
                  ></a
                >
              </div>
              <div class="hidden text-nowrap text-xs text-grep-9 md:block">
                100+ matches
              </div>
            </div>
            <div>
              <table class="highlight-table">
                <tbody>
                  <tr data-line="406">
                    <td><div class="lineno">406</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="kd">const</span><span class="w"> </span><span class="nx">GoModulesToLookFor</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="p">[</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="407">
                    <td><div class="lineno">407</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">	</span><span class="s1">'<mark>github</mark>.com/Azure/azure-sdk-for-go/sdk/storage/azblob'</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="408">
                    <td><div class="lineno">408</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">	</span><span class="s1">'<mark>github</mark>.com/Azure/azure-sdk-for-go/sdk/storage/azfile'</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="409">
                    <td><div class="lineno">409</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">	</span><span class="s1">'<mark>github</mark>.com/Azure/azure-sdk-for-go/sdk/storage/azqueue'</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="410">
                    <td><div class="lineno">410</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">	</span><span class="s1">'<mark>github</mark>.com/Azure/azure-sdk-for-go/sdk/storage/azdatalake'</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="411">
                    <td><div class="lineno">411</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">	</span><span class="s1">'<mark>github</mark>.com/Azure/azure-sdk-for-go/sdk/tracing/azotel'</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="412">
                    <td><div class="lineno">412</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">	</span><span class="s1">'<mark>github</mark>.com/Azure/azure-sdk-for-go/sdk/security/keyvault/azadmin'</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="413">
                    <td><div class="lineno">413</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">	</span><span class="s1">'<mark>github</mark>.com/Azure/azure-sdk-for-go/sdk/security/keyvault/azcertificates'</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="414">
                    <td><div class="lineno">414</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">	</span><span class="s1">'<mark>github</mark>.com/Azure/azure-sdk-for-go/sdk/security/keyvault/azkeys'</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="415">
                    <td><div class="lineno">415</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">	</span><span class="s1">'<mark>github</mark>.com/Azure/azure-sdk-for-go/sdk/security/keyvault/azsecrets'</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="flex w-full min-w-32 shrink-0 flex-col overflow-hidden text-wrap rounded-md border border-grep-2"
          >
            <div
              class="flex min-h-10 w-full items-center justify-between border-b bg-grep-0 px-4"
            >
              <div class="flex flex-col py-1 sm:flex-row sm:gap-2">
                <div class="flex shrink-0 flex-row items-center gap-2">
                  <img
                    alt="1562726 avatar"
                    width="16"
                    height="16"
                    class="rounded-sm"
                    src="https://avatars.githubusercontent.com/u/1562726?s=60&amp;v=4"
                  /><a href="https://github.com/d3/d3"
                    ><span class="text-sm font-medium hover:underline"
                      >d3/d3</span
                    ></a
                  >
                </div>
                <a href="https://github.com/d3/d3/blob/main/prebuild.sh"
                  ><span class="text-sm text-grep-9 hover:underline"
                    >prebuild.sh</span
                  ></a
                >
              </div>
              <div class="hidden text-nowrap text-xs text-grep-9 md:block">
                100+ matches
              </div>
            </div>
            <div>
              <table class="highlight-table">
                <tbody>
                  <tr data-line="3">
                    <td><div class="lineno">3</div></td>
                    <td>
                      <div class="highlight">
                        <pre>cp<span class="w"> </span>-v<span class="w"> </span>./build/d3.<mark>github</mark>.com/colorbrewer.v1.css<span class="w"> </span>docs/public/colorbrewer.v1.css</pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="4">
                    <td><div class="lineno">4</div></td>
                    <td>
                      <div class="highlight">
                        <pre>cp<span class="w"> </span>-v<span class="w"> </span>./build/d3.<mark>github</mark>.com/colorbrewer.v1.js<span class="w"> </span>docs/public/colorbrewer.v1.js</pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="5">
                    <td><div class="lineno">5</div></td>
                    <td>
                      <div class="highlight">
                        <pre>cp<span class="w"> </span>-v<span class="w"> </span>./build/d3.<mark>github</mark>.com/colorbrewer.v1.min.js<span class="w"> </span>docs/public/colorbrewer.v1.min.js</pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="6">
                    <td><div class="lineno">6</div></td>
                    <td>
                      <div class="highlight">
                        <pre>cp<span class="w"> </span>-v<span class="w"> </span>./build/d3.<mark>github</mark>.com/d3-array.v0.6.js<span class="w"> </span>docs/public/d3-array.v0.6.js</pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="7">
                    <td><div class="lineno">7</div></td>
                    <td>
                      <div class="highlight">
                        <pre>cp<span class="w"> </span>-v<span class="w"> </span>./build/d3.<mark>github</mark>.com/d3-array.v0.6.min.js<span class="w"> </span>docs/public/d3-array.v0.6.min.js</pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="8">
                    <td><div class="lineno">8</div></td>
                    <td>
                      <div class="highlight">
                        <pre>cp<span class="w"> </span>-v<span class="w"> </span>./build/d3.<mark>github</mark>.com/d3-array.v0.7.js<span class="w"> </span>docs/public/d3-array.v0.7.js</pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="9">
                    <td><div class="lineno">9</div></td>
                    <td>
                      <div class="highlight">
                        <pre>cp<span class="w"> </span>-v<span class="w"> </span>./build/d3.<mark>github</mark>.com/d3-array.v0.7.min.js<span class="w"> </span>docs/public/d3-array.v0.7.min.js</pre>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="flex w-full min-w-32 shrink-0 flex-col overflow-hidden text-wrap rounded-md border border-grep-2"
          >
            <div
              class="flex min-h-10 w-full items-center justify-between border-b bg-grep-0 px-4"
            >
              <div class="flex flex-col py-1 sm:flex-row sm:gap-2">
                <div class="flex shrink-0 flex-row items-center gap-2">
                  <img
                    alt="130738209 avatar"
                    width="16"
                    height="16"
                    class="rounded-sm"
                    src="https://avatars.githubusercontent.com/u/130738209?s=60&amp;v=4"
                  /><a href="https://github.com/Significant-Gravitas/AutoGPT"
                    ><span class="text-sm font-medium hover:underline"
                      >Significant-Gravitas/AutoGPT</span
                    ></a
                  >
                </div>
                <a
                  href="https://github.com/Significant-Gravitas/AutoGPT/blob/master/autogpt_platform/backend/backend/blocks/github/pull_requests.py"
                  ><span class="text-sm text-grep-9 hover:underline"
                    >autogpt_platform<wbr />/backend<wbr />/backend<wbr />/blocks<wbr />/github<wbr />/pull_requests.py</span
                  ></a
                >
              </div>
              <div class="hidden text-nowrap text-xs text-grep-9 md:block">
                78 matches
              </div>
            </div>
            <div>
              <table class="highlight-table">
                <tbody>
                  <tr data-line="11">
                    <td><div class="lineno">11</div></td>
                    <td>
                      <div class="highlight">
                        <pre>    <span class="n">TEST_CREDENTIALS_INPUT</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="12">
                    <td><div class="lineno">12</div></td>
                    <td>
                      <div class="highlight">
                        <pre>    <span class="n"><mark>Github</mark>Credentials</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="13">
                    <td><div class="lineno">13</div></td>
                    <td>
                      <div class="highlight">
                        <pre>    <span class="n"><mark>Github</mark>CredentialsField</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="14">
                    <td><div class="lineno">14</div></td>
                    <td>
                      <div class="highlight">
                        <pre>    <span class="n"><mark>Github</mark>CredentialsInput</span><span class="p">,</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="15">
                    <td><div class="lineno">15</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="p">)</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="16">
                    <td><div class="lineno">16</div></td>
                    <td>
                      <div class="highlight"><pre></pre></div>
                    </td>
                  </tr>
                  <tr data-line="17">
                    <td><div class="lineno">17</div></td>
                    <td>
                      <div class="highlight"><pre></pre></div>
                    </td>
                  </tr>
                  <tr data-line="18">
                    <td><div class="lineno">18</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="k">class</span> <span class="nc"><mark>Github</mark>ListPullRequestsBlock</span><span class="p">(</span><span class="n">Block</span><span class="p">):</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="19">
                    <td><div class="lineno">19</div></td>
                    <td>
                      <div class="highlight">
                        <pre>    <span class="k">class</span> <span class="nc">Input</span><span class="p">(</span><span class="n">BlockSchema</span><span class="p">):</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="20">
                    <td><div class="lineno">20</div></td>
                    <td>
                      <div class="highlight">
                        <pre>        <span class="n">credentials</span><span class="p">:</span> <span class="n"><mark>Github</mark>CredentialsInput</span> <span class="o">=</span> <span class="n"><mark>Github</mark>CredentialsField</span><span class="p">(</span><span class="s2">"repo"</span><span class="p">)</span></pre>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="flex w-full min-w-32 shrink-0 flex-col overflow-hidden text-wrap rounded-md border border-grep-2"
          >
            <div
              class="flex min-h-10 w-full items-center justify-between border-b bg-grep-0 px-4"
            >
              <div class="flex flex-col py-1 sm:flex-row sm:gap-2">
                <div class="flex shrink-0 flex-row items-center gap-2">
                  <img
                    alt="14101776 avatar"
                    width="16"
                    height="16"
                    class="rounded-sm"
                    src="https://avatars.githubusercontent.com/u/14101776?s=60&amp;v=4"
                  /><a href="https://github.com/flutter/flutter"
                    ><span class="text-sm font-medium hover:underline"
                      >flutter/flutter</span
                    ></a
                  >
                </div>
                <a
                  href="https://github.com/flutter/flutter/blob/master/packages/flutter/lib/src/animation/curves.dart"
                  ><span class="text-sm text-grep-9 hover:underline"
                    >packages<wbr />/flutter<wbr />/lib<wbr />/src<wbr />/animation<wbr />/curves.dart</span
                  ></a
                >
              </div>
              <div class="hidden text-nowrap text-xs text-grep-9 md:block">
                100+ matches
              </div>
            </div>
            <div>
              <table class="highlight-table">
                <tbody>
                  <tr data-line="103">
                    <td><div class="lineno">103</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">  </span><span class="c1">/// {@animation 464 192 https://flutter.<mark>github</mark>.io/assets-for-api-docs/assets/animation/curve_bounce_in.mp4}</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="104">
                    <td><div class="lineno">104</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="w">  </span><span class="c1">/// {@animation 464 192 https://flutter.<mark>github</mark>.io/assets-for-api-docs/assets/animation/curve_flipped.mp4}</span></pre>
                        <div class="jump"></div>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="129">
                    <td><div class="lineno">129</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="c1">/// {@animation 464 192 https://flutter.<mark>github</mark>.io/assets-for-api-docs/assets/animation/curve_sawtooth.mp4}</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="130">
                    <td><div class="lineno">130</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="kd">class</span><span class="w"> </span><span class="nc">SawTooth</span><span class="w"> </span><span class="kd">extends</span><span class="w"> </span><span class="n">Curve</span><span class="w"> </span><span class="p">{</span></pre>
                        <div class="jump"></div>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="157">
                    <td><div class="lineno">157</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="c1">/// {@animation 464 192 https://flutter.<mark>github</mark>.io/assets-for-api-docs/assets/animation/curve_interval.mp4}</span></pre>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="158">
                    <td><div class="lineno">158</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="kd">class</span><span class="w"> </span><span class="nc">Interval</span><span class="w"> </span><span class="kd">extends</span><span class="w"> </span><span class="n">Curve</span><span class="w"> </span><span class="p">{</span></pre>
                        <div class="jump"></div>
                      </div>
                    </td>
                  </tr>
                  <tr data-line="212">
                    <td><div class="lineno">212</div></td>
                    <td>
                      <div class="highlight">
                        <pre><span class="c1">/// {@animation 464 192 https://flutter.<mark>github</mark>.io/assets-for-api-docs/assets/animation/curve_split.mp4}</span></pre>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <form
            action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            class="w-full"
          >
            <button
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full shadow-none"
              type="submit"
            >
              Load More Results</button
            ><input type="hidden" value="2" name="page" /><input
              type="hidden"
              value="q=github"
              name="searchParams"
            />
          </form>
          <div class="min-h-3"></div>
        </div>
      </div>
    </div>
  </div>
  <section
    aria-label="Notifications alt+T"
    tabindex="-1"
    aria-live="polite"
    aria-relevant="additions text"
    aria-atomic="false"
  ></section>
  <!--$--><!--/$-->
  <script>
    (() => {
      const searchInput = document.getElementById("search-input");
      if (!searchInput) return;
      const url = new URL(window.location.href);
      const q = url.searchParams.get("q");
      if (url.pathname === "/search" && q) {
        searchInput.value = q;
      }
    })();
  </script>
  <script
    src="/_next/static/chunks/webpack-2bddf970e8a1d0d3.js"
    async=""
  ></script>
  <script>
    (self.__next_f = self.__next_f || []).push([0]);
  </script>
  <script>
    self.__next_f.push([
      1,
      '1:"$Sreact.fragment"\n4:I[7113,["899","static/chunks/899-e6e6559fb896294e.js","315","static/chunks/315-56bcefbdbac63f3a.js","493","static/chunks/493-f9f3ec180822cd5a.js","548","static/chunks/548-0c4c8a91c0fc1ca6.js","103","static/chunks/103-a36d0c33c3536b9d.js","177","static/chunks/app/layout-2dc49dba9ae14762.js"],"ThemeProvider"]\n5:I[889,["899","static/chunks/899-e6e6559fb896294e.js","315","static/chunks/315-56bcefbdbac63f3a.js","493","static/chunks/493-f9f3ec180822cd5a.js","548","static/chunks/548-0c4c8a91c0fc1ca6.js","103","static/chunks/103-a36d0c33c3536b9d.js","177","static/chunks/app/layout-2dc49dba9ae14762.js"],"FlagsProvider"]\n7:I[9297,["899","static/chunks/899-e6e6559fb896294e.js","315","static/chunks/315-56bcefbdbac63f3a.js","493","static/chunks/493-f9f3ec180822cd5a.js","548","static/chunks/548-0c4c8a91c0fc1ca6.js","103","static/chunks/103-a36d0c33c3536b9d.js","177","static/chunks/app/layout-2dc49dba9ae14762.js"],"UserProvider"]\n8:I[7579,["899","static/chunks/899-e6e6559fb896294e.js","315","static/chunks/315-56bcefbdbac63f3a.js","493","static/chunks/493-f9f3ec180822cd5a.js","548","static/chunks/548-0c4c8a91c0fc1ca6.js","103","static/chunks/103-a36d0c33c3536b9d.js","177","static/chunks/app/layout-2dc49dba9ae14762.js"],"QueryProvider"]\n9:I[2088,["899","static/chunks/899-e6e6559fb896294e.js","315","static/chunks/315-56bcefbdbac63f3a.js","493","static/chunks/493-f9f3ec180822cd5a.js","548","static/chunks/548-0c4c8a91c0fc1ca6.js","103","static/chunks/103-a36d0c33c3536b9d.js","177","static/chunks/app/layout-2dc49dba9ae14762.js"],"MobileFocusFocusProvider"]\na:I[8419,["899","static/chunks/899-e6e6559fb896294e.js","315","static/chunks/315-56bcefbdbac63f3a.js","493","static/chunks/493-f9f3ec180822cd5a.js","548","static/chunks/548-0c4c8a91c0fc1ca6.js","103","static/chunks/103-a36d0c33c3536b9d.js","177","static/chunks/app/layout-2dc49dba9ae14762.js"],"IsQueryProvider"]\nb:"$Sreact.suspense"\nc:I[4318,["899","static/chunks/899-e6e6559fb896294e.js","315","static/chunks/315-56bcefbdbac63f3a.js","493","static/chunks/493-f9',
    ]);
  </script>
  <script>
    self.__next_f.push([
      1,
      'f3ec180822cd5a.js","548","static/chunks/548-0c4c8a91c0fc1ca6.js","103","static/chunks/103-a36d0c33c3536b9d.js","177","static/chunks/app/layout-2dc49dba9ae14762.js"],"HeaderSkeleton"]\nd:I[4318,["899","static/chunks/899-e6e6559fb896294e.js","315","static/chunks/315-56bcefbdbac63f3a.js","493","static/chunks/493-f9f3ec180822cd5a.js","548","static/chunks/548-0c4c8a91c0fc1ca6.js","103","static/chunks/103-a36d0c33c3536b9d.js","177","static/chunks/app/layout-2dc49dba9ae14762.js"],"Header"]\ne:I[5244,[],""]\nf:I[3866,[],""]\n10:I[6795,["899","static/chunks/899-e6e6559fb896294e.js","315","static/chunks/315-56bcefbdbac63f3a.js","493","static/chunks/493-f9f3ec180822cd5a.js","548","static/chunks/548-0c4c8a91c0fc1ca6.js","103","static/chunks/103-a36d0c33c3536b9d.js","177","static/chunks/app/layout-2dc49dba9ae14762.js"],"Toaster"]\n11:I[9297,["899","static/chunks/899-e6e6559fb896294e.js","315","static/chunks/315-56bcefbdbac63f3a.js","493","static/chunks/493-f9f3ec180822cd5a.js","548","static/chunks/548-0c4c8a91c0fc1ca6.js","103","static/chunks/103-a36d0c33c3536b9d.js","177","static/chunks/app/layout-2dc49dba9ae14762.js"],"SetUser"]\n13:I[5967,["899","static/chunks/899-e6e6559fb896294e.js","315","static/chunks/315-56bcefbdbac63f3a.js","493","static/chunks/493-f9f3ec180822cd5a.js","548","static/chunks/548-0c4c8a91c0fc1ca6.js","103","static/chunks/103-a36d0c33c3536b9d.js","177","static/chunks/app/layout-2dc49dba9ae14762.js"],"Analytics"]\n14:I[2820,["899","static/chunks/899-e6e6559fb896294e.js","315","static/chunks/315-56bcefbdbac63f3a.js","493","static/chunks/493-f9f3ec180822cd5a.js","548","static/chunks/548-0c4c8a91c0fc1ca6.js","103","static/chunks/103-a36d0c33c3536b9d.js","177","static/chunks/app/layout-2dc49dba9ae14762.js"],"SpeedInsights"]\n15:I[4762,["899","static/chunks/899-e6e6559fb896294e.js","743","static/chunks/743-e377360a290625b1.js","315","static/chunks/315-56bcefbdbac63f3a.js","888","static/chunks/888-cda6aeb9fd78a14f.js","548","static/chunks/548-0c4c8a91c0fc1ca6.js","77","static/chunks/77-c6b9f6ec4effeca1.js","103","stati',
    ]);
  </script>
  <script>
    self.__next_f.push([
      1,
      'c/chunks/103-a36d0c33c3536b9d.js","974","static/chunks/app/page-ad45149916177840.js"],"PrefetchSearchLayout"]\n16:I[4762,["899","static/chunks/899-e6e6559fb896294e.js","743","static/chunks/743-e377360a290625b1.js","315","static/chunks/315-56bcefbdbac63f3a.js","888","static/chunks/888-cda6aeb9fd78a14f.js","548","static/chunks/548-0c4c8a91c0fc1ca6.js","77","static/chunks/77-c6b9f6ec4effeca1.js","103","static/chunks/103-a36d0c33c3536b9d.js","974","static/chunks/app/page-ad45149916177840.js"],"Content"]\n17:I[6213,[],"OutletBoundary"]\n1a:I[6213,[],"ViewportBoundary"]\n1c:I[6213,[],"MetadataBoundary"]\n1e:I[4835,[],""]\n:HL["/_next/static/media/569ce4b8f30dc480-s.p.woff2","font",{"crossOrigin":"","type":"font/woff2"}]\n:HL["/_next/static/media/93f479601ee12b01.p.woff2","font",{"crossOrigin":"","type":"font/woff2"}]\n2:Tc562,',
    ]);
  </script>
  <script>
    self.__next_f.push([
      1,
      '@font-face{font-family:Geist;font-style:normal;font-weight:100 900;font-display:swap;src:url(/_next/static/media/ba015fad6dcf6784-s.woff2) format("woff2");unicode-range:u+0100-02ba,u+02bd-02c5,u+02c7-02cc,u+02ce-02d7,u+02dd-02ff,u+0304,u+0308,u+0329,u+1d00-1dbf,u+1e00-1e9f,u+1ef2-1eff,u+2020,u+20a0-20ab,u+20ad-20c0,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-family:Geist;font-style:normal;font-weight:100 900;font-display:swap;src:url(/_next/static/media/569ce4b8f30dc480-s.p.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0304,u+0308,u+0329,u+2000-206f,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-family:Geist Fallback;src:local("Arial");ascent-override:95.94%;descent-override:28.16%;line-gap-override:0.00%;size-adjust:104.76%}.__className_4d318d{font-family:Geist,Geist Fallback;font-style:normal}.__variable_4d318d{--font-geist-sans:"Geist","Geist Fallback"}@font-face{font-family:Geist Mono;font-style:normal;font-weight:100 900;font-display:swap;src:url(/_next/static/media/747892c23ea88013.woff2) format("woff2");unicode-range:u+0100-02ba,u+02bd-02c5,u+02c7-02cc,u+02ce-02d7,u+02dd-02ff,u+0304,u+0308,u+0329,u+1d00-1dbf,u+1e00-1e9f,u+1ef2-1eff,u+2020,u+20a0-20ab,u+20ad-20c0,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-family:Geist Mono;font-style:normal;font-weight:100 900;font-display:swap;src:url(/_next/static/media/93f479601ee12b01.p.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+0304,u+0308,u+0329,u+2000-206f,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}.__className_d373f5{font-family:Geist Mono,Consolas,Monaco,monospace;font-style:normal}.__variable_d373f5{--font-geist-mono:"Geist Mono",Consolas,Monaco,monospace}.highlight{color:#262626}.dark .highlight{color:#f0f0f0}.highlight .c,.highlight .c1,.highlight .ch,.highlight .cm,.highlight .cs{color:slategray}.highlight .bp,.highlight .k,.highlight .kc,.highlight .kd,.highlight .kn,.highlight .kp,.highlight .kr,.highlight .kt,.highlight .nb,.highlight .nt,.highlight .ow{color:#9e1068}.dark .highlight .bp,.dark .highlight .k,.dark .highlight .kc,.dark .highlight .kd,.dark .highlight .kn,.dark .highlight .kp,.dark .highlight .kr,.dark .highlight .kt,.dark .highlight .nb,.dark .highlight .nt,.dark .highlight .ow{color:#e958b1}.highlight .cp,.highlight .nd{color:#614700}.dark .highlight .cp,.dark .highlight .nd{color:#dead27}.highlight .cpf,.highlight .dl,.highlight .s,.highlight .s1,.highlight .s2,.highlight .sa,.highlight .sb,.highlight .sd,.highlight .se,.highlight .sh,.highlight .sr,.highlight .ss,.highlight .sx{color:#003a8c}.dark .highlight .cpf,.dark .highlight .dl,.dark .highlight .s,.dark .highlight .s1,.dark .highlight .s2,.dark .highlight .sa,.dark .highlight .sb,.dark .highlight .sd,.dark .highlight .se,.dark .highlight .sh,.dark .highlight .sr,.dark .highlight .ss,.dark .highlight .sx{color:#1d69d3}.highlight .il,.highlight .m,.highlight .mb,.highlight .mf,.highlight .mh,.highlight .mi,.highlight .mo,.highlight .sc{color:#1d39c4}.dark .highlight .il,.dark .highlight .m,.dark .highlight .mb,.dark .highlight .mf,.dark .highlight .mh,.dark .highlight .mi,.dark .highlight .mo,.dark .highlight .sc{color:#3c77c8}.highlight{padding-left:15px}.highlight-table td{padding:0;vertical-align:top}.highlight-table td:first-child{padding-left:6px}.highlight-table td:last-child{padding-right:6px}.highlight-table tr:first-child td{padding-top:6px}.highlight-table tr:last-child td{padding-bottom:6px}.highlight-table td:nth-child(2){width:100%}.highlight-table pre{margin:0;font-size:12px;overflow:visible}.highlight pre{white-space:pre-wrap;overflow-wrap:break-word;word-break:break-word}.highlight-table{cursor:pointer}.lineno{width:38px;font-size:12px;font-feature-settings:"tnum";font-variant-numeric:tabular-nums;line-height:15px;padding:2px 0 1px;text-align:right;-webkit-user-select:none;-moz-user-select:none;user-select:none}.lineno,.lineno a{color:#8f8f8f}.lineno a:hover{text-decoration:none}.jump{height:18px;margin:6px -6px 6px -59px;background-color:var(--grep-0);border-top:1px solid var(--grep-2);border-bottom:1px solid var(--grep-2)}mark{background-color:#cde7ff;padding:0}.dark mark{color:#f0f0f0;background-color:#0d3868;padding:0}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246/0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246/0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }\n/*\n! tailwindcss v3.4.15 | MIT License | https://tailwindcss.com\n*/*,:after,:before{box-sizing:border-box;border:0 solid #e5e7eb}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:var(--font-geist-sans);font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:var(--font-geist-mono);font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}:root{--background:#fff;--foreground:#171717;--card:0 0% 100%;--card-foreground:240 10% 3.9%;--popover:0 0% 100%;--popover-foreground:240 10% 3.9%;--primary:240 5.9% 10%;--primary-foreground:0 0% 98%;--secondary:240 4.8% 95.9%;--secondary-foreground:240 5.9% 10%;--muted:#f2f2f2;--muted-foreground:240 3.8% 46.1%;--accent:240 4.8% 95.9%;--accent-foreground:240 5.9% 10%;--destructive:0 84.2% 60.2%;--destructive-foreground:0 0% 98%;--border:240 5.9% 90%;--input:240 5.9% 90%;--ring:240 10% 3.9%;--chart-1:12 76% 61%;--chart-2:173 58% 39%;--chart-3:197 37% 24%;--chart-4:43 74% 66%;--chart-5:27 87% 67%;--radius:0.5rem;--grep-0:#fafafa;--grep-1:#f2f2f2;--grep-2:#ebebeb;--grep-3:#e6e6e6;--grep-4:#ebebeb;--grep-5:#c9c9c9;--grep-6:#a8a8a8;--grep-7:#8f8f8f;--grep-9:#666;--grep-11:#d6d6d6;--grep-12:#9b9b9b}.dark{--background:#000;--foreground:#ededed;--card:240 10% 3.9%;--card-foreground:0 0% 98%;--popover:240 10% 3.9%;--popover-foreground:0 0% 98%;--primary:0 0% 98%;--primary-foreground:240 5.9% 10%;--secondary:240 3.7% 15.9%;--secondary-foreground:0 0% 98%;--muted:#1a1a1a;--muted-foreground:240 5% 64.9%;--accent:240 3.7% 15.9%;--accent-foreground:0 0% 98%;--destructive:0 62.8% 30.6%;--destructive-foreground:0 0% 98%;--border:240 3.7% 15.9%;--input:240 3.7% 15.9%;--ring:240 4.9% 83.9%;--chart-1:220 70% 50%;--chart-2:160 60% 45%;--chart-3:30 80% 55%;--chart-4:280 65% 60%;--chart-5:340 75% 55%;--grep-0:#0a0a0a;--grep-1:#1a1a1a;--grep-2:#1f1f1f;--grep-3:#292929;--grep-4:#2e2e2e;--grep-5:#454545;--grep-6:#878787;--grep-7:#8f8f8f;--grep-9:#a1a1a1;--grep-11:#333;--grep-12:#777}*{border-color:hsl(var(--border))}body{background-color:var(--background);color:var(--foreground)}html{-moz-tab-size:8;-o-tab-size:8;tab-size:8}html,input{font-variant-ligatures:none}.prose{color:var(--tw-prose-body);max-width:65ch}.prose :where(p):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em}.prose :where([class~=lead]):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-lead);font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em}.prose :where(a):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-links);text-decoration:underline;font-weight:500}.prose :where(strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-bold);font-weight:600}.prose :where(a strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(blockquote strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(thead th strong):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(ol):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:decimal;margin-top:1.25em;margin-bottom:1.25em;padding-inline-start:1.625em}.prose :where(ol[type=A]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-alpha}.prose :where(ol[type=a]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-alpha}.prose :where(ol[type=A s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-alpha}.prose :where(ol[type=a s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-alpha}.prose :where(ol[type=I]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-roman}.prose :where(ol[type=i]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-roman}.prose :where(ol[type=I s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:upper-roman}.prose :where(ol[type=i s]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:lower-roman}.prose :where(ol[type="1"]):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:decimal}.prose :where(ul):not(:where([class~=not-prose],[class~=not-prose] *)){list-style-type:disc;margin-top:1.25em;margin-bottom:1.25em;padding-inline-start:1.625em}.prose :where(ol\u003eli):not(:where([class~=not-prose],[class~=not-prose] *))::marker{font-weight:400;color:var(--tw-prose-counters)}.prose :where(ul\u003eli):not(:where([class~=not-prose],[class~=not-prose] *))::marker{color:var(--tw-prose-bullets)}.prose :where(dt):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);font-weight:600;margin-top:1.25em}.prose :where(hr):not(:where([class~=not-prose],[class~=not-prose] *)){border-color:var(--tw-prose-hr);border-top-width:1px;margin-top:3em;margin-bottom:3em}.prose :where(blockquote):not(:where([class~=not-prose],[class~=not-prose] *)){font-weight:500;font-style:italic;color:var(--tw-prose-quotes);border-inline-start-width:.25rem;border-inline-start-color:var(--tw-prose-quote-borders);quotes:"\\201C""\\201D""\\2018""\\2019";margin-top:1.6em;margin-bottom:1.6em;padding-inline-start:1em}.prose :where(blockquote p:first-of-type):not(:where([class~=not-prose],[class~=not-prose] *)):before{content:open-quote}.prose :where(blockquote p:last-of-type):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:close-quote}.prose :where(h1):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:.8888889em;line-height:1.1111111}.prose :where(h1 strong):not(:where([class~=not-prose],[class~=not-prose] *)){font-weight:900;color:inherit}.prose :where(h2):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333}.prose :where(h2 strong):not(:where([class~=not-prose],[class~=not-prose] *)){font-weight:800;color:inherit}.prose :where(h3):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);font-weight:600;font-size:1.25em;margin-top:1.6em;margin-bottom:.6em;line-height:1.6}.prose :where(h3 strong):not(:where([class~=not-prose],[class~=not-prose] *)){font-weight:700;color:inherit}.prose :where(h4):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);font-weight:600;margin-top:1.5em;margin-bottom:.5em;line-height:1.5}.prose :where(h4 strong):not(:where([class~=not-prose],[class~=not-prose] *)){font-weight:700;color:inherit}.prose :where(img):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em}.prose :where(picture):not(:where([class~=not-prose],[class~=not-prose] *)){display:block;margin-top:2em;margin-bottom:2em}.prose :where(video):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em}.prose :where(kbd):not(:where([class~=not-prose],[class~=not-prose] *)){font-weight:500;font-family:inherit;color:var(--tw-prose-kbd);box-shadow:0 0 0 1px rgb(var(--tw-prose-kbd-shadows)/10%),0 3px 0 rgb(var(--tw-prose-kbd-shadows)/10%);font-size:.875em;border-radius:.3125rem;padding-top:.1875em;padding-inline-end:.375em;padding-bottom:.1875em;padding-inline-start:.375em}.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-code);font-weight:600;font-size:.875em}.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):before{content:"`"}.prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:"`"}.prose :where(a code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(h1 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(h2 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-size:.875em}.prose :where(h3 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit;font-size:.9em}.prose :where(h4 code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(blockquote code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(thead th code):not(:where([class~=not-prose],[class~=not-prose] *)){color:inherit}.prose :where(pre):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-pre-code);background-color:var(--tw-prose-pre-bg);overflow-x:auto;font-weight:400;font-size:.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:.375rem;padding-top:.8571429em;padding-inline-end:1.1428571em;padding-bottom:.8571429em;padding-inline-start:1.1428571em}.prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)){background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:inherit;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit}.prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)):before{content:none}.prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)):after{content:none}.prose :where(table):not(:where([class~=not-prose],[class~=not-prose] *)){width:100%;table-layout:auto;margin-top:2em;margin-bottom:2em;font-size:.875em;line-height:1.7142857}.prose :where(thead):not(:where([class~=not-prose],[class~=not-prose] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-th-borders)}.prose :where(thead th):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-headings);font-weight:600;vertical-align:bottom;padding-inline-end:.5714286em;padding-bottom:.5714286em;padding-inline-start:.5714286em}.prose :where(tbody tr):not(:where([class~=not-prose],[class~=not-prose] *)){border-bottom-width:1px;border-bottom-color:var(--tw-prose-td-borders)}.prose :where(tbody tr:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){border-bottom-width:0}.prose :where(tbody td):not(:where([class~=not-prose],[class~=not-prose] *)){vertical-align:baseline}.prose :where(tfoot):not(:where([class~=not-prose],[class~=not-prose] *)){border-top-width:1px;border-top-color:var(--tw-prose-th-borders)}.prose :where(tfoot td):not(:where([class~=not-prose],[class~=not-prose] *)){vertical-align:top}.prose :where(th,td):not(:where([class~=not-prose],[class~=not-prose] *)){text-align:start}.prose :where(figure\u003e*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0;margin-bottom:0}.prose :where(figcaption):not(:where([class~=not-prose],[class~=not-prose] *)){color:var(--tw-prose-captions);font-size:.875em;line-height:1.4285714;margin-top:.8571429em}.prose{--tw-prose-body:#374151;--tw-prose-headings:#111827;--tw-prose-lead:#4b5563;--tw-prose-links:#111827;--tw-prose-bold:#111827;--tw-prose-counters:#6b7280;--tw-prose-bullets:#d1d5db;--tw-prose-hr:#e5e7eb;--tw-prose-quotes:#111827;--tw-prose-quote-borders:#e5e7eb;--tw-prose-captions:#6b7280;--tw-prose-kbd:#111827;--tw-prose-kbd-shadows:17 24 39;--tw-prose-code:#111827;--tw-prose-pre-code:#e5e7eb;--tw-prose-pre-bg:#1f2937;--tw-prose-th-borders:#d1d5db;--tw-prose-td-borders:#e5e7eb;--tw-prose-invert-body:#d1d5db;--tw-prose-invert-headings:#fff;--tw-prose-invert-lead:#9ca3af;--tw-prose-invert-links:#fff;--tw-prose-invert-bold:#fff;--tw-prose-invert-counters:#9ca3af;--tw-prose-invert-bullets:#4b5563;--tw-prose-invert-hr:#374151;--tw-prose-invert-quotes:#f3f4f6;--tw-prose-invert-quote-borders:#374151;--tw-prose-invert-captions:#9ca3af;--tw-prose-invert-kbd:#fff;--tw-prose-invert-kbd-shadows:255 255 255;--tw-prose-invert-code:#fff;--tw-prose-invert-pre-code:#d1d5db;--tw-prose-invert-pre-bg:rgb(0 0 0/50%);--tw-prose-invert-th-borders:#4b5563;--tw-prose-invert-td-borders:#374151;font-size:1rem;line-height:1.75}.prose :where(picture\u003eimg):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0;margin-bottom:0}.prose :where(li):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.5em;margin-bottom:.5em}.prose :where(ol\u003eli):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:.375em}.prose :where(ul\u003eli):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:.375em}.prose :where(.prose\u003eul\u003eli p):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.75em;margin-bottom:.75em}.prose :where(.prose\u003eul\u003eli\u003ep:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em}.prose :where(.prose\u003eul\u003eli\u003ep:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:1.25em}.prose :where(.prose\u003eol\u003eli\u003ep:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em}.prose :where(.prose\u003eol\u003eli\u003ep:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:1.25em}.prose :where(ul ul,ul ol,ol ul,ol ol):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.75em;margin-bottom:.75em}.prose :where(dl):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:1.25em;margin-bottom:1.25em}.prose :where(dd):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:.5em;padding-inline-start:1.625em}.prose :where(hr+*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose :where(h2+*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose :where(h3+*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose :where(h4+*):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose :where(thead th:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:0}.prose :where(thead th:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:0}.prose :where(tbody td,tfoot td):not(:where([class~=not-prose],[class~=not-prose] *)){padding-top:.5714286em;padding-inline-end:.5714286em;padding-bottom:.5714286em;padding-inline-start:.5714286em}.prose :where(tbody td:first-child,tfoot td:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-start:0}.prose :where(tbody td:last-child,tfoot td:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){padding-inline-end:0}.prose :where(figure):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:2em;margin-bottom:2em}.prose :where(.prose\u003e:first-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-top:0}.prose :where(.prose\u003e:last-child):not(:where([class~=not-prose],[class~=not-prose] *)){margin-bottom:0}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.visible{visibility:visible}.invisible{visibility:hidden}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.inset-x-0{left:0;right:0}.bottom-0{bottom:0}.left-2{left:.5rem}.left-\\[50\\%\\]{left:50%}.right-0{right:0}.right-2{right:.5rem}.right-4{right:1rem}.top-1\\/2{top:50%}.top-3{top:.75rem}.top-4{top:1rem}.top-\\[40\\%\\]{top:40%}.top-\\[50\\%\\]{top:50%}.top-\\[64px\\]{top:64px}.top-\\[8px\\]{top:8px}.z-10{z-index:10}.z-50{z-index:50}.order-1{order:1}.m-1{margin:.25rem}.m-2{margin:.5rem}.-mx-1{margin-left:-.25rem;margin-right:-.25rem}.mx-\\[-1px\\]{margin-left:-1px;margin-right:-1px}.mx-\\[2px\\]{margin-left:2px;margin-right:2px}.mx-\\[6px\\]{margin-left:6px;margin-right:6px}.mx-auto{margin-left:auto;margin-right:auto}.my-0{margin-top:0;margin-bottom:0}.my-1{margin-top:.25rem;margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-\\[42px\\]{margin-bottom:42px}.ml-1\\.5{margin-left:.375rem}.ml-\\[6px\\]{margin-left:6px}.ml-auto{margin-left:auto}.mr-2{margin-right:.5rem}.mr-3{margin-right:.75rem}.mr-\\[4px\\]{margin-right:4px}.mt-2{margin-top:.5rem}.mt-24{margin-top:6rem}.mt-4{margin-top:1rem}.mt-\\[20px\\]{margin-top:20px}.mt-auto{margin-top:auto}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.hidden{display:none}.aspect-square{aspect-ratio:1/1}.h-10{height:2.5rem}.h-2{height:.5rem}.h-3\\.5{height:.875rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-9{height:2.25rem}.h-\\[18px\\]{height:18px}.h-\\[20px\\]{height:20px}.h-\\[2px\\]{height:2px}.h-\\[42px\\]{height:42px}.h-\\[60px\\]{height:60px}.h-\\[calc\\(100dvh-130px\\)\\]{height:calc(100dvh - 130px)}.h-\\[calc\\(100dvh-250px\\)\\]{height:calc(100dvh - 250px)}.h-\\[calc\\(100dvh-64px\\)\\]{height:calc(100dvh - 64px)}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-auto{height:auto}.h-full{height:100%}.h-px{height:1px}.max-h-96{max-height:24rem}.max-h-\\[60vh\\]{max-height:60vh}.max-h-\\[calc\\(100dvh-250px\\)\\]{max-height:calc(100dvh - 250px)}.max-h-full{max-height:100%}.min-h-10{min-height:2.5rem}.min-h-3{min-height:.75rem}.min-h-32{min-height:8rem}.min-h-8{min-height:2rem}.min-h-96{min-height:24rem}.min-h-\\[18px\\]{min-height:18px}.min-h-\\[48px\\]{min-height:48px}.min-h-\\[60px\\]{min-height:60px}.min-h-\\[64px\\]{min-height:64px}.min-h-svh{min-height:100svh}.w-10{width:2.5rem}.w-3\\.5{width:.875rem}.w-32{width:8rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-7{width:1.75rem}.w-8{width:2rem}.w-9{width:2.25rem}.w-\\[100px\\]{width:100px}.w-\\[18px\\]{width:18px}.w-\\[5px\\]{width:5px}.w-\\[625px\\]{width:625px}.w-\\[96px\\]{width:96px}.w-full{width:100%}.min-w-0{min-width:0}.min-w-10{min-width:2.5rem}.min-w-32{min-width:8rem}.min-w-6{min-width:1.5rem}.min-w-9{min-width:2.25rem}.min-w-\\[18px\\]{min-width:18px}.min-w-\\[256px\\]{min-width:256px}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.max-w-\\[1200px\\]{max-width:1200px}.max-w-\\[625px\\]{max-width:625px}.max-w-lg{max-width:32rem}.max-w-none{max-width:none}.flex-1{flex:1 1 0%}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.flex-grow,.grow{flex-grow:1}.-translate-y-1\\/2{--tw-translate-y:-50%}.-translate-y-1\\/2,.translate-x-\\[-50\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%}.transform,.translate-y-\\[-50\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.resize{resize:both}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-1\\.5{gap:.375rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.gap-\\[6px\\]{gap:6px}.space-x-2\u003e:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-1\\.5\u003e:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(.375rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.375rem * var(--tw-space-y-reverse))}.space-y-2\u003e:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-4\u003e:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.divide-y\u003e:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.divide-dashed\u003e:not([hidden])~:not([hidden]){border-style:dashed}.self-center{align-self:center}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis}.truncate,.whitespace-nowrap{white-space:nowrap}.text-wrap{text-wrap:wrap}.text-nowrap{text-wrap:nowrap}.rounded-full{border-radius:9999px}.rounded-md{border-radius:calc(var(--radius) - 2px)}.rounded-sm{border-radius:calc(var(--radius) - 4px)}.rounded-xl{border-radius:.75rem}.rounded-t-\\[10px\\]{border-top-left-radius:10px;border-top-right-radius:10px}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-none{border-style:none}.border-foreground{border-color:var(--foreground)}.border-grep-2{border-color:var(--grep-2)}.border-grep-3{border-color:var(--grep-3)}.border-grep-4{border-color:var(--grep-4)}.border-grep-9{border-color:var(--grep-9)}.border-input{border-color:hsl(var(--input))}.border-primary{border-color:hsl(var(--primary))}.border-transparent{border-color:transparent}.bg-\\[\\#99ceff\\]{--tw-bg-opacity:1;background-color:rgb(153 206 255/var(--tw-bg-opacity,1))}.bg-background{background-color:var(--background)}.bg-black\\/45{background-color:rgb(0 0 0/.45)}.bg-black\\/80{background-color:rgb(0 0 0/.8)}.bg-destructive{background-color:hsl(var(--destructive))}.bg-grep-0{background-color:var(--grep-0)}.bg-grep-1{background-color:var(--grep-1)}.bg-grep-2{background-color:var(--grep-2)}.bg-muted{background-color:var(--muted)}.bg-popover{background-color:hsl(var(--popover))}.bg-primary{background-color:hsl(var(--primary))}.bg-primary\\/10{background-color:hsl(var(--primary)/.1)}.bg-secondary{background-color:hsl(var(--secondary))}.bg-transparent{background-color:transparent}.fill-black{fill:#000}.fill-green-200{fill:#bbf7d0}.fill-red-200{fill:#fecaca}.fill-white{fill:#fff}.fill-yellow-200{fill:#fef08a}.stroke-black{stroke:#000}.stroke-grep-4{stroke:var(--grep-4)}.p-0{padding:0}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-\\[2px\\]{padding:2px}.px-1{padding-left:.25rem;padding-right:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-8{padding-left:2rem;padding-right:2rem}.px-\\[18px\\]{padding-left:18px;padding-right:18px}.px-\\[2px\\]{padding-left:2px;padding-right:2px}.px-\\[8px\\]{padding-left:8px;padding-right:8px}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-10{padding-top:2.5rem;padding-bottom:2.5rem}.py-16{padding-top:4rem;padding-bottom:4rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-32{padding-top:8rem;padding-bottom:8rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.py-\\[2px\\]{padding-top:2px;padding-bottom:2px}.pb-0{padding-bottom:0}.pb-4{padding-bottom:1rem}.pl-2{padding-left:.5rem}.pl-3{padding-left:.75rem}.pl-4{padding-left:1rem}.pl-8{padding-left:2rem}.pl-\\[115px\\]{padding-left:115px}.pl-\\[130px\\]{padding-left:130px}.pr-2{padding-right:.5rem}.pr-24{padding-right:6rem}.pr-4{padding-right:1rem}.pr-7{padding-right:1.75rem}.pr-8{padding-right:2rem}.pt-0{padding-top:0}.pt-8{padding-top:2rem}.pt-\\[6px\\]{padding-top:6px}.text-left{text-align:left}.text-center{text-align:center}.align-middle{vertical-align:middle}.align-text-bottom{vertical-align:text-bottom}.text-5xl{font-size:3rem;line-height:1}.text-\\[0\\.8rem\\]{font-size:.8rem}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\/\\[13px\\]{font-size:13px;line-height:13px}.text-\\[14px\\]{font-size:14px}.text-\\[15px\\]{font-size:15px}.text-\\[15px\\]\\/\\[32px\\]{font-size:15px;line-height:32px}.text-\\[2rem\\]\\/\\[2\\.5rem\\]{font-size:2rem;line-height:2.5rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-xxs{font-size:11px;line-height:14px}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)}.leading-none{line-height:1}.tracking-normal{letter-spacing:0}.tracking-tight{letter-spacing:-.025em}.tracking-widest{letter-spacing:.1em}.text-\\[\\#0067d6\\]{--tw-text-opacity:1;color:rgb(0 103 214/var(--tw-text-opacity,1))}.text-current{color:currentColor}.text-destructive{color:hsl(var(--destructive))}.text-destructive-foreground{color:hsl(var(--destructive-foreground))}.text-foreground{color:var(--foreground)}.text-grep-9{color:var(--grep-9)}.text-muted-foreground{color:hsl(var(--muted-foreground))}.text-popover-foreground{color:hsl(var(--popover-foreground))}.text-primary{color:hsl(var(--primary))}.text-primary-foreground{color:hsl(var(--primary-foreground))}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity,1))}.text-secondary-foreground{color:hsl(var(--secondary-foreground))}.underline-offset-4{text-underline-offset:4px}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0/0.1),0 1px 2px -1px rgb(0 0 0/0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-lg{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0/0.1),0 4px 6px -4px rgb(0 0 0/0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.shadow-md{--tw-shadow:0 4px 6px -1px rgb(0 0 0/0.1),0 2px 4px -2px rgb(0 0 0/0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.shadow-md,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}.shadow-sm{--tw-shadow:0 1px 2px 0 rgb(0 0 0/0.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.ring-offset-background{--tw-ring-offset-color:var(--background)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}@keyframes enter{0%{opacity:var(--tw-enter-opacity,1);transform:translate3d(var(--tw-enter-translate-x,0),var(--tw-enter-translate-y,0),0) scale3d(var(--tw-enter-scale,1),var(--tw-enter-scale,1),var(--tw-enter-scale,1)) rotate(var(--tw-enter-rotate,0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity,1);transform:translate3d(var(--tw-exit-translate-x,0),var(--tw-exit-translate-y,0),0) scale3d(var(--tw-exit-scale,1),var(--tw-exit-scale,1),var(--tw-exit-scale,1)) rotate(var(--tw-exit-rotate,0))}}.animate-in{animation-name:enter;animation-duration:.15s;--tw-enter-opacity:initial;--tw-enter-scale:initial;--tw-enter-rotate:initial;--tw-enter-translate-x:initial;--tw-enter-translate-y:initial}.fade-in-0{--tw-enter-opacity:0}.zoom-in-95{--tw-enter-scale:.95}.duration-200{animation-duration:.2s}@media (width \u003c= 768px){input[type=color],input[type=date],input[type=datetime-local],input[type=datetime],input[type=email],input[type=month],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],input[type=week],select:focus,textarea{font-size:16px}}::-moz-selection{background:black;color:white}::selection{background:black;color:white}.dark ::-moz-selection{background:var(--foreground);color:var(--background)}.dark ::selection{background:var(--foreground);color:var(--background)}.dark\\:prose-invert:is(.dark *){--tw-prose-body:var(--tw-prose-invert-body);--tw-prose-headings:var(--tw-prose-invert-headings);--tw-prose-lead:var(--tw-prose-invert-lead);--tw-prose-links:var(--tw-prose-invert-links);--tw-prose-bold:var(--tw-prose-invert-bold);--tw-prose-counters:var(--tw-prose-invert-counters);--tw-prose-bullets:var(--tw-prose-invert-bullets);--tw-prose-hr:var(--tw-prose-invert-hr);--tw-prose-quotes:var(--tw-prose-invert-quotes);--tw-prose-quote-borders:var(--tw-prose-invert-quote-borders);--tw-prose-captions:var(--tw-prose-invert-captions);--tw-prose-kbd:var(--tw-prose-invert-kbd);--tw-prose-kbd-shadows:var(--tw-prose-invert-kbd-shadows);--tw-prose-code:var(--tw-prose-invert-code);--tw-prose-pre-code:var(--tw-prose-invert-pre-code);--tw-prose-pre-bg:var(--tw-prose-invert-pre-bg);--tw-prose-th-borders:var(--tw-prose-invert-th-borders);--tw-prose-td-borders:var(--tw-prose-invert-td-borders)}.placeholder\\:text-grep-7::-moz-placeholder{color:var(--grep-7)}.placeholder\\:text-grep-7::placeholder{color:var(--grep-7)}.placeholder\\:text-muted-foreground::-moz-placeholder{color:hsl(var(--muted-foreground))}.placeholder\\:text-muted-foreground::placeholder{color:hsl(var(--muted-foreground))}@media (hover:hover) and (pointer:fine){.hover\\:border-grep-5:hover{border-color:var(--grep-5)}.hover\\:bg-accent:hover{background-color:hsl(var(--accent))}.hover\\:bg-destructive\\/90:hover{background-color:hsl(var(--destructive)/.9)}.hover\\:bg-grep-1:hover{background-color:var(--grep-1)}.hover\\:bg-grep-11:hover{background-color:var(--grep-11)}.hover\\:bg-grep-2:hover{background-color:var(--grep-2)}.hover\\:bg-muted:hover{background-color:var(--muted)}.hover\\:bg-primary\\/90:hover{background-color:hsl(var(--primary)/.9)}.hover\\:bg-secondary\\/80:hover{background-color:hsl(var(--secondary)/.8)}.hover\\:text-accent-foreground:hover{color:hsl(var(--accent-foreground))}.hover\\:text-foreground:hover{color:var(--foreground)}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:opacity-100:hover{opacity:1}}.focus\\:bg-accent:focus{background-color:hsl(var(--accent))}.focus\\:bg-grep-2:focus{background-color:var(--grep-2)}.focus\\:text-accent-foreground:focus{color:hsl(var(--accent-foreground))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-ring:focus{--tw-ring-color:hsl(var(--ring))}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px}.focus-visible\\:border-grep-12:focus-visible{border-color:var(--grep-12)}.focus-visible\\:bg-background:focus-visible{background-color:var(--background)}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-1:focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus-visible\\:ring-grep-4:focus-visible{--tw-ring-color:var(--grep-4)}.focus-visible\\:ring-ring:focus-visible{--tw-ring-color:hsl(var(--ring))}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}@media (hover:hover) and (pointer:fine){.group\\/facet:hover .group-hover\\/facet\\:bg-grep-2{background-color:var(--grep-2)}.group\\/item:hover .group-hover\\/item\\:text-foreground{color:var(--foreground)}}.group.toaster .group-\\[\\.toaster\\]\\:border-border{border-color:hsl(var(--border))}.group.toast .group-\\[\\.toast\\]\\:bg-muted{background-color:var(--muted)}.group.toast .group-\\[\\.toast\\]\\:bg-primary{background-color:hsl(var(--primary))}.group.toaster .group-\\[\\.toaster\\]\\:bg-background{background-color:var(--background)}.group.toast .group-\\[\\.toast\\]\\:text-muted-foreground{color:hsl(var(--muted-foreground))}.group.toast .group-\\[\\.toast\\]\\:text-primary-foreground{color:hsl(var(--primary-foreground))}.group.toaster .group-\\[\\.toaster\\]\\:text-foreground{color:var(--foreground)}.group.toaster .group-\\[\\.toaster\\]\\:shadow-lg{--tw-shadow:0 10px 15px -3px rgb(0 0 0/0.1),0 4px 6px -4px rgb(0 0 0/0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.peer:disabled~.peer-disabled\\:cursor-not-allowed{cursor:not-allowed}.peer:disabled~.peer-disabled\\:opacity-70{opacity:.7}.data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:0.25rem}.data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom],.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:-0.25rem}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:0.25rem}.data-\\[side\\=right\\]\\:translate-x-1[data-side=right],.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:-0.25rem}@keyframes accordion-up{0%{height:var(--radix-accordion-content-height)}to{height:0}}.data-\\[state\\=closed\\]\\:animate-accordion-up[data-state=closed]{animation:accordion-up .2s ease-out}@keyframes accordion-down{0%{height:0}to{height:var(--radix-accordion-content-height)}}.data-\\[state\\=open\\]\\:animate-accordion-down[data-state=open]{animation:accordion-down .2s ease-out}.data-\\[state\\=checked\\]\\:border-foreground[data-state=checked]{border-color:var(--foreground)}.data-\\[state\\=on\\]\\:border-grep-6[data-state=on]{border-color:var(--grep-6)}.data-\\[state\\=checked\\]\\:bg-primary[data-state=checked]{background-color:hsl(var(--primary))}.data-\\[state\\=on\\]\\:bg-grep-11[data-state=on]{background-color:var(--grep-11)}.data-\\[state\\=open\\]\\:bg-accent[data-state=open]{background-color:hsl(var(--accent))}.data-\\[state\\=checked\\]\\:text-primary-foreground[data-state=checked]{color:hsl(var(--primary-foreground))}.data-\\[state\\=on\\]\\:text-foreground[data-state=on]{color:var(--foreground)}.data-\\[state\\=open\\]\\:text-muted-foreground[data-state=open]{color:hsl(var(--muted-foreground))}.data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation-name:enter;animation-duration:.15s;--tw-enter-opacity:initial;--tw-enter-scale:initial;--tw-enter-rotate:initial;--tw-enter-translate-x:initial;--tw-enter-translate-y:initial}.data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation-name:exit;animation-duration:.15s;--tw-exit-opacity:initial;--tw-exit-scale:initial;--tw-exit-rotate:initial;--tw-exit-translate-x:initial;--tw-exit-translate-y:initial}.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--tw-exit-opacity:0}.data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--tw-enter-opacity:0}.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale:.95}.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale:.95}.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y:-0.5rem}.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x:0.5rem}.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x:-0.5rem}.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y:0.5rem}.data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state=closed]{--tw-exit-translate-x:-50%}.data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state=closed]{--tw-exit-translate-y:-48%}.data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state=open]{--tw-enter-translate-x:-50%}.data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state=open]{--tw-enter-translate-y:-48%}.dark\\:border:is(.dark *){border-width:1px}.dark\\:border-grep-4:is(.dark *){border-color:var(--grep-4)}.dark\\:bg-grep-0:is(.dark *){background-color:var(--grep-0)}.dark\\:fill-amber-500\\/70:is(.dark *){fill:rgb(245 158 11/.7)}.dark\\:fill-black:is(.dark *){fill:#000}.dark\\:fill-green-500\\/60:is(.dark *){fill:rgb(34 197 94/.6)}.dark\\:fill-red-400\\/80:is(.dark *){fill:rgb(248 113 113/.8)}.dark\\:fill-white:is(.dark *){fill:#fff}.dark\\:stroke-white:is(.dark *){stroke:#fff}@media not all and (min-width:768px){.max-md\\:top-\\[10px\\]{top:10px}.max-md\\:h-10{height:2.5rem}.max-md\\:max-w-none{max-width:none}.max-md\\:border-grep-1{border-color:var(--grep-1)}.max-md\\:bg-grep-1{background-color:var(--grep-1)}.max-md\\:pl-8{padding-left:2rem}}@media not all and (min-width:640px){.max-sm\\:bottom-0{bottom:0}.max-sm\\:hidden{display:none}.max-sm\\:h-8{height:2rem}.max-sm\\:w-36{width:9rem}.max-sm\\:w-full{width:100%}}@media (min-width:640px){.sm\\:inline-block{display:inline-block}.sm\\:hidden{display:none}.sm\\:h-8{height:2rem}.sm\\:h-9{height:2.25rem}.sm\\:min-h-10{min-height:2.5rem}.sm\\:w-8{width:2rem}.sm\\:w-9{width:2.25rem}.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:justify-end{justify-content:flex-end}.sm\\:justify-between{justify-content:space-between}.sm\\:gap-2{gap:.5rem}.sm\\:space-x-2\u003e:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.sm\\:rounded-lg{border-radius:var(--radius)}.sm\\:px-12{padding-left:3rem;padding-right:3rem}.sm\\:px-4{padding-left:1rem;padding-right:1rem}.sm\\:py-8{padding-top:2rem;padding-bottom:2rem}.sm\\:text-left{text-align:left}.sm\\:text-5xl{font-size:3rem;line-height:1}.sm\\:text-base{font-size:1rem;line-height:1.5rem}.sm\\:text-sm{font-size:.875rem;line-height:1.25rem}}@media (min-width:768px){.md\\:order-none{order:0}.md\\:block{display:block}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:h-9{height:2.25rem}.md\\:h-\\[calc\\(100dvh-65px\\)\\]{height:calc(100dvh - 65px)}.md\\:w-\\[24\\%\\]{width:24%}.md\\:w-auto{width:auto}.md\\:min-w-\\[200px\\]{min-width:200px}.md\\:max-w-\\[625px\\]{max-width:625px}.md\\:flex-nowrap{flex-wrap:nowrap}.md\\:border-l{border-left-width:1px}.md\\:border-none{border-style:none}.md\\:bg-background{background-color:var(--background)}.md\\:px-3{padding-left:.75rem;padding-right:.75rem}.md\\:py-0{padding-top:0;padding-bottom:0}.md\\:pl-6{padding-left:1.5rem}.md\\:pr-0{padding-right:0}.md\\:pr-6{padding-right:1.5rem}.md\\:text-\\[13px\\]{font-size:13px}.md\\:text-sm{font-size:.875rem;line-height:1.25rem}@media (hover:hover) and (pointer:fine){.md\\:hover\\:bg-background:hover{background-color:var(--background)}}}@media (min-width:1024px){.lg\\:w-full{width:100%}.lg\\:max-w-\\[320px\\]{max-width:320px}}.\\[\\\u0026\\\u003espan\\]\\:line-clamp-1\u003espan{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.\\[\\\u0026\\\u003esvg\\]\\:size-4\u003esvg{width:1rem;height:1rem}.\\[\\\u0026\\\u003esvg\\]\\:shrink-0\u003esvg{flex-shrink:0}.\\[\\\u0026\\\u003esvg\\]\\:-rotate-90\u003esvg{--tw-rotate:-90deg}.\\[\\\u0026\\\u003esvg\\]\\:-rotate-90\u003esvg,.\\[\\\u0026\\[data-state\\=open\\]\\\u003esvg\\]\\:rotate-0[data-state=open]\u003esvg{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.\\[\\\u0026\\[data-state\\=open\\]\\\u003esvg\\]\\:rotate-0[data-state=open]\u003esvg{--tw-rotate:0deg}.\\[\\\u0026_svg\\]\\:pointer-events-none svg{pointer-events:none}.\\[\\\u0026_svg\\]\\:size-4 svg{width:1rem;height:1rem}.\\[\\\u0026_svg\\]\\:shrink-0 svg{flex-shrink:0}@media(max-height:480px){.\\[\\@media\\(max-height\\:480px\\)\\]\\:hidden{display:none}}@media(max-width:374px){.\\[\\@media\\(max-width\\:374px\\)\\]\\:hidden{display:none}}',
    ]);
  </script>
  <script>
    self.__next_f.push([
      1,
      "3:T62d,.spinner_spinner__u40CI,.spinner_wrapper__mW_yl{height:var(--spinner-size,20px);width:var(--spinner-size,20px)}.spinner_spinner__u40CI{position:relative;top:50%;left:50%}.spinner_bar__C_d_b{animation:spinner_spin__PxiRh 1.2s linear infinite;background:var(--spinner-color,var(--grep-7));border-radius:var(--geist-radius);height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.spinner_bar__C_d_b:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.spinner_bar__C_d_b:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.spinner_bar__C_d_b:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.spinner_bar__C_d_b:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.spinner_bar__C_d_b:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.spinner_bar__C_d_b:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.spinner_bar__C_d_b:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.spinner_bar__C_d_b:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.spinner_bar__C_d_b:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.spinner_bar__C_d_b:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.spinner_bar__C_d_b:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.spinner_bar__C_d_b:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes spinner_spin__PxiRh{0%{opacity:1}to{opacity:.15}}",
    ]);
  </script>
  <script>
    self.__next_f.push([
      1,
      '0:{"P":null,"b":"3Rulndpk6A6xrkERvTXHA","p":"","c":["",""],"i":false,"f":[[["",{"children":["__PAGE__",{}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","style","0",{"nonce":"$undefined","precedence":"next","href":"/_next/static/css/8f1028d627965ac8.css","children":"$2"}],["$","style","1",{"nonce":"$undefined","precedence":"next","href":"/_next/static/css/5c3bfdc6d8243556.css","children":"$3"}]],["$","html",null,{"lang":"en","className":"__variable_4d318d __variable_d373f5 h-full w-full","suppressHydrationWarning":true,"children":[["$","body",null,{"className":"flex h-full w-full flex-col items-center justify-between overflow-hidden antialiased","children":[["$","$L4",null,{"attribute":"class","defaultTheme":"system","enableSystem":true,"disableTransitionOnChange":true,"children":[["$","$L5",null,{"promise":"$@6","children":["$","$L7",null,{"children":[["$","$L8",null,{"children":["$","$L9",null,{"children":["$","$La",null,{"children":[["$","$b",null,{"fallback":["$","$Lc",null,{}],"children":["$","$Ld",null,{}]}],["$","$Le",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$Lf",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\\"Segoe UI\\",Roboto,Helvetica,Arial,sans-serif,\\"Apple Color Emoji\\",\\"Segoe UI Emoji\\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],"$undefined",[]],"forbidden":"$undefined","unauthorized":"$undefined"}],["$","$L10",null,{}]]}]}]}],["$","$b",null,{"fallback":null,"children":["$","$L11",null,{"userPromise":"$@12"}]}]]}]}],["$","script",null,{"children":"\\n(() =\u003e {\\n  const searchInput = document.getElementById(\\"search-input\\")\\n  if (!searchInput) return;\\n  const url = new URL(window.location.href);\\n  const q = url.searchParams.get(\\"q\\");\\n  if (url.pathname === \\"/search\\" \u0026\u0026 q) {\\n    searchInput.value = q;\\n  }\\n})();\\n"}]]}],false]}],["$","$L13",null,{}],["$","$L14",null,{}]]}]]}],{"children":["__PAGE__",["$","$1","c",{"children":[[["$","$L15",null,{}],["$","$L16",null,{}]],"$undefined",null,["$","$L17",null,{"children":["$L18","$L19",null]}]]}],{},null,false]},null,false],["$","$1","h",{"children":[null,["$","$1","vt_xz0Loep34fzV40P65g",{"children":[["$","$L1a",null,{"children":"$L1b"}],["$","meta",null,{"name":"next-size-adjust","content":""}]]}],["$","$L1c",null,{"children":"$L1d"}]]}],false]],"m":"$undefined","G":["$1e","$undefined"],"s":true,"S":false}\n',
    ]);
  </script>
  <script>
    self.__next_f.push([
      1,
      '12:"$undefined"\n6:{"si":false}\n1b:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]\n18:null\n19:null\n1d:[["$","title","0",{"children":"Code Search | Grep by Vercel"}],["$","meta","1",{"name":"description","content":"Search for code, files, and paths across half a million public GitHub repositories."}],["$","meta","2",{"property":"og:title","content":"Code Search | Grep by Vercel"}],["$","meta","3",{"property":"og:description","content":"Search for code, files, and paths across half a million public GitHub repositories."}],["$","meta","4",{"property":"og:image:type","content":"image/png"}],["$","meta","5",{"property":"og:image:width","content":"1200"}],["$","meta","6",{"property":"og:image:height","content":"628"}],["$","meta","7",{"property":"og:image","content":"https://grep.app/opengraph-image.png?7418db2edff03759"}],["$","meta","8",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","9",{"name":"twitter:title","content":"Code Search | Grep by Vercel"}],["$","meta","10",{"name":"twitter:description","content":"Search for code, files, and paths across half a million public GitHub repositories."}],["$","meta","11",{"name":"twitter:image:type","content":"image/png"}],["$","meta","12",{"name":"twitter:image:width","content":"1200"}],["$","meta","13",{"name":"twitter:image:height","content":"628"}],["$","meta","14",{"name":"twitter:image","content":"https://grep.app/opengraph-image.png?7418db2edff03759"}],["$","link","15",{"rel":"icon","href":"/icon.png?27d38f126102b607","type":"image/png","sizes":"32x32"}],["$","link","16",{"rel":"apple-touch-icon","href":"/apple-icon.png?3fbc994ac97c8903","type":"image/png","sizes":"192x192"}]]\n',
    ]);
  </script>
  <next-route-announcer style="position: absolute;"></next-route-announcer>
</body>
```
