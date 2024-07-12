{/* <div>
  <script
    defer
    src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
  />
  <div className="bg-gray-100">
    <div>
      <div
        className="relative overflow-hidden bg-sky-700 pb-32"
        x-data="{ open: false }"
      >
        <nav>
          className="bg-transparent relative z-10 border-b border-teal-500 border-opacity-25 lg:border-none lg:bg-transparent"
          x-state:off="Menu closed"
          x-state:on="Menu open"

          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-sky-800">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">
                  <img
                    alt="House in Umbria"
                    className="block h-8 w-auto"
                    src=""
                  />
                </div>
                <div className="hidden lg:ml-6 lg:block lg:space-x-4">
                  <div className="flex">
                    <a
                      className="bg-black bg-opacity-25 rounded-md py-2 px-3 text-sm font-medium text-white"
                      href="#"
                      x-state-description="Current: &quot;bg-black bg-opacity-25&quot;, Default: &quot;hover:bg-sky-800&quot;"
                      x-state:off="Default"
                      x-state:on="Current"
                    >
                      Dashboard
                    </a>
                    <a
                      className="hover:bg-sky-800 rounded-md py-2 px-3 text-sm font-medium text-white"
                      href="#"
                      x-state-description="undefined: &quot;bg-black bg-opacity-25&quot;, undefined: &quot;hover:bg-sky-800&quot;"
                    >
                      Jobs
                    </a>
                    <a
                      className="hover:bg-sky-800 rounded-md py-2 px-3 text-sm font-medium text-white"
                      href="#"
                      x-state-description="undefined: &quot;bg-black bg-opacity-25&quot;, undefined: &quot;hover:bg-sky-800&quot;"
                    >
                      Applicants
                    </a>
                    <a
                      className="hover:bg-sky-800 rounded-md py-2 px-3 text-sm font-medium text-white"
                      href="#"
                      x-state-description="undefined: &quot;bg-black bg-opacity-25&quot;, undefined: &quot;hover:bg-sky-800&quot;"
                    >
                      Company
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label
                    className="sr-only"
                    htmlFor="search"
                  >
                    Search
                  </label>
                  <div className="relative text-sky-100 focus-within:text-gray-400">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        x-description="Heroicon name: mini/magnifying-glass"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      className="block w-full rounded-md border border-transparent bg-sky-700 bg-opacity-50 py-2 pl-10 pr-3 leading-5 placeholder-sky-100 focus:border-white focus:bg-white focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-white sm:text-sm"
                      id="search"
                      name="search"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden">
                <button
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  className="inline-flex items-center justify-center rounded-md p-2 text-sky-200 hover:bg-sky-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  type="button"
                  x-bind:aria-expanded="open.toString()"
                >
                  <span className="sr-only">
                    Open main menu
                  </span>
                  <svg
                    // :class="{ 'hidden': open, 'block': !(open) }"
                    aria-hidden="true"
                    className="block h-6 w-6 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    x-description="Icon when menu is closed.Heroicon name: outline/bars-3"
                    x-state:off="Menu closed"
                    x-state:on="Menu open"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    // :class="{ 'block': open, 'hidden': !(open) }"
                    aria-hidden="true"
                    className="hidden h-6 w-6 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    x-description="Icon when menu is open.Heroicon name: outline/x-mark"
                    x-state:off="Menu closed"
                    x-state:on="Menu open"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18L18 6M6 6l12 12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="hidden lg:ml-4 lg:block">
                <div className="flex items-center">
                  <button
                    className="flex-shrink-0 rounded-full p-1 text-sky-200 hover:bg-sky-800 hover:text-white focus:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-900"
                    type="button"
                  >
                    <span className="sr-only">
                      View notifications
                    </span>
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      x-description="Heroicon name: outline/bell"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    // @click.away="onClickAway($event)"
                    // @keydown.escape.stop="open = false; focusButton()"
                    className="relative ml-4 flex-shrink-0"
                    x-data="Components.menu({ open: false })"
                    x-init="init()"
                  >
                    <div>
                      <button
                        // @click="onButtonClick()
                        // @keydown.arrow-down.prevent="onArrowDown()
                        // @keydown.arrow-up.prevent="onArrowUp()
                        // @keydown.enter.prevent="onButtonEnter()
                        // @keyup.space.prevent="onButtonEnter()
                        aria-expanded="false"
                        aria-haspopup="true"
                        className="flex rounded-full text-sm text-white focus:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-900"
                        id="user-menu-button"
                        type="button"
                        x-bind:aria-expanded="open.toString()"
                        x-ref="button"
                      >
                        <span className="sr-only">
                          Open user menu
                        </span>
                        <img
                          alt=""
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
                        />
                      </button>
                    </div>
                    <div
                    //   @keydown.arrow-down.prevent="onArrowDown()"
                    //   @keydown.arrow-up.prevent="onArrowUp()"
                    //   @keydown.enter.prevent="open = false; focusButton()"
                    //   @keydown.tab="open = false"
                    //   @keyup.space.prevent="open = false; focusButton()"
                      aria-labelledby="user-menu-button"
                      aria-orientation="vertical"
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                    //   tabIndex="-1"
                      x-bind:aria-activedescendant="activeDescendant"
                      x-description="Dropdown menu, show/hide based on menu state."
                      x-ref="menu-items"
                      x-show="open"
                      x-transition:enter="transition ease-out duration-100"
                      x-transition:enter-end="transform opacity-100 scale-100"
                      x-transition:enter-start="transform opacity-0 scale-95"
                      x-transition:leave="transition ease-in duration-75"
                      x-transition:leave-end="transform opacity-0 scale-95"
                      x-transition:leave-start="transform opacity-100 scale-100"
                    >
                      <a
                        // :class="{ 'bg-gray-100': activeIndex === 0 }"
                        // @click="open = false; focusButton()"
                        // @mouseenter="onMouseEnter($event)"
                        // @mouseleave="onMouseLeave($event)"
                        // @mousemove="onMouseMove($event, 0)"
                        className="block py-2 px-4 text-sm text-gray-700"
                        href="#"
                        id="user-menu-item-0"
                        role="menuitem"
                        // tabIndex="-1"
                        x-state:off="Not Active"
                        x-state:on="Active"
                      >
                        Your Profile
                      </a>
                      <a
                        // :class="{ 'bg-gray-100': activeIndex === 1 }"
                        // @click="open = false; focusButton()"
                        // @mouseenter="onMouseEnter($event)"
                        // @mouseleave="onMouseLeave($event)"
                        // @mousemove="onMouseMove($event, 1)"
                        className="block py-2 px-4 text-sm text-gray-700"
                        href="#"
                        id="user-menu-item-1"
                        role="menuitem"
                        // tabIndex="-1"
                      >
                        Settings
                      </a>
                      <a
                        // :class="{ 'bg-gray-100': activeIndex === 2 }"
                        // @click="open = false; focusButton()"
                        // @mouseenter="onMouseEnter($event)"
                        // @mouseleave="onMouseLeave($event)"
                        // @mousemove="onMouseMove($event, 2)"
                        className="block py-2 px-4 text-sm text-gray-700"
                        href="#"
                        id="user-menu-item-2"
                        role="menuitem"
                        // tabIndex="-1"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-sky-900 lg:hidden"
            id="mobile-menu"
            x-description="Mobile menu, show/hide based on menu state."
            x-show="open"
          >
            <div className="space-y-1 px-2 pt-2 pb-3">
              <a
                className="bg-black bg-opacity-25 block rounded-md py-2 px-3 text-base font-medium text-white"
                href="#"
                x-state-description="Current: &quot;bg-black bg-opacity-25&quot;, Default: &quot;hover:bg-sky-800&quot;"
                x-state:off="Default"
                x-state:on="Current"
              >
                Dashboard
              </a>
              <a
                className="hover:bg-sky-800 block rounded-md py-2 px-3 text-base font-medium text-white"
                href="#"
                x-state-description="undefined: &quot;bg-black bg-opacity-25&quot;, undefined: &quot;hover:bg-sky-800&quot;"
              >
                Jobs
              </a>
              <a
                className="hover:bg-sky-800 block rounded-md py-2 px-3 text-base font-medium text-white"
                href="#"
                x-state-description="undefined: &quot;bg-black bg-opacity-25&quot;, undefined: &quot;hover:bg-sky-800&quot;"
              >
                Applicants
              </a>
              <a
                className="hover:bg-sky-800 block rounded-md py-2 px-3 text-base font-medium text-white"
                href="#"
                x-state-description="undefined: &quot;bg-black bg-opacity-25&quot;, undefined: &quot;hover:bg-sky-800&quot;"
              >
                Company
              </a>
            </div>
            <div className="border-t border-sky-800 pt-4 pb-3">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    alt=""
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">
                    Conchita Gonzales
                  </div>
                  <div className="text-sm font-medium text-sky-200">
                    conchita@example.net
                  </div>
                </div>
                <button
                  className="ml-auto flex-shrink-0 rounded-full p-1 text-sky-200 hover:bg-sky-800 hover:text-white focus:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-900"
                  type="button"
                >
                  <span className="sr-only">
                    View notifications
                  </span>
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    x-description="Heroicon name: outline/bell"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-3 px-2">
                <a
                  className="block rounded-md py-2 px-3 text-base font-medium text-sky-200 hover:bg-sky-800 hover:text-white"
                  href="#"
                >
                  Your                Profile
                </a>
                <a
                  className="block rounded-md py-2 px-3 text-base font-medium text-sky-200 hover:bg-sky-800 hover:text-white"
                  href="#"
                >
                  Settings
                </a>
                <a
                  className="block rounded-md py-2 px-3 text-base font-medium text-sky-200 hover:bg-sky-800 hover:text-white"
                  href="#"
                >
                  Sign                out
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div
        //   :class="{ 'bottom-0': open, 'inset-y-0': !(open) }"
          aria-hidden="true"
          className="inset-y-0 absolute inset-x-0 left-1/2 w-full -translate-x-1/2 transform overflow-hidden lg:inset-y-0"
          x-state:off="Menu closed"
          x-state:on="Menu open"
        >
          <div className="absolute inset-0 flex">
            <div
              className="h-full w-1/2"
              style={{
                backgroundColor: '#0a527b'
              }}
            />
            <div
              className="h-full w-1/2"
              style={{
                backgroundColor: '#065d8c'
              }}
            />
          </div>
          <div className="relative flex justify-center">
            <svg
              className="flex-shrink-0"
              height="308"
              viewBox="0 0 1750 308"
              width="1750"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M284.161 308H1465.84L875.001 182.413 284.161 308z"
                fill="#0369a1"
              />
              <path
                d="M1465.84 308L16.816 0H1750v308h-284.16z"
                fill="#065d8c"
              />
              <path
                d="M1733.19 0L284.161 308H0V0h1733.19z"
                fill="#0a527b"
              />
              <path
                d="M875.001 182.413L1733.19 0H16.816l858.185 182.413z"
                fill="#0a4f76"
              />
            </svg>
          </div>
        </div>
        <header className="relative py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Settings
            </h1>
          </div>
        </header>
      </div>
      <main className="relative -mt-32">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
              <aside className="py-6 lg:col-span-3">
                <nav className="space-y-1">
                  <a
                    aria-current="page"
                    className="bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700 group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
                    href="#"
                    x-state-description="Current: &quot;bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700&quot;, Default: &quot;border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900&quot;"
                    x-state:off="Default"
                    x-state:on="Current"
                  >
                    <svg
                      aria-hidden="true"
                      className="text-teal-500 group-hover:text-teal-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      x-description="Heroicon name: outline/user-circle"
                      x-state-description="Current: &quot;text-teal-500 group-hover:text-teal-500&quot;, Default: &quot;text-gray-400 group-hover:text-gray-500&quot;"
                      x-state:off="Default"
                      x-state:on="Current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                      </path>
                    </svg>
                    <span className="truncate">
                      Profile
                    </span>
                  </a>
                  <a
                    className="border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
                    href="#"
                    x-state-description="undefined: &quot;bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700&quot;, undefined: &quot;border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900&quot;"
                  >
                    <svg
                      aria-hidden="true"
                      className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      x-description="Heroicon name: outline/cog"
                      x-state-description="undefined: &quot;text-teal-500 group-hover:text-teal-500&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-500&quot;"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                      </path>
                    </svg>
                    <span className="truncate">
                      Account
                    </span>
                  </a>
                  <a
                    className="border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
                    href="#"
                    x-state-description="undefined: &quot;bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700&quot;, undefined: &quot;border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900&quot;"
                  >
                    <svg
                      aria-hidden="true"
                      className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      x-description="Heroicon name: outline/key"
                      x-state-description="undefined: &quot;text-teal-500 group-hover:text-teal-500&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-500&quot;"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                      </path>
                    </svg>
                    <span className="truncate">
                      Password
                    </span>
                  </a>
                  <a
                    className="border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
                    href="#"
                    x-state-description="undefined: &quot;bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700&quot;, undefined: &quot;border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900&quot;"
                  >
                    <svg
                      aria-hidden="true"
                      className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      x-description="Heroicon name: outline/bell"
                      x-state-description="undefined: &quot;text-teal-500 group-hover:text-teal-500&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-500&quot;"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                      </path>
                    </svg>
                    <span className="truncate">
                      Notifications
                    </span>
                  </a>
                  <a
                    className="border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
                    href="#"
                    x-state-description="undefined: &quot;bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700&quot;, undefined: &quot;border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900&quot;"
                  >
                    <svg
                      aria-hidden="true"
                      className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      x-description="Heroicon name: outline/credit-card"
                      x-state-description="undefined: &quot;text-teal-500 group-hover:text-teal-500&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-500&quot;"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                      </path>
                    </svg>
                    <span className="truncate">
                      Billing
                    </span>
                  </a>
                  <a
                    className="border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
                    href="#"
                    x-state-description="undefined: &quot;bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700&quot;, undefined: &quot;border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900&quot;"
                  >
                    <svg
                      aria-hidden="true"
                      className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      x-description="Heroicon name: outline/squares-plus"
                      x-state-description="undefined: &quot;text-teal-500 group-hover:text-teal-500&quot;, undefined: &quot;text-gray-400 group-hover:text-gray-500&quot;"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                      </path>
                    </svg>
                    <span className="truncate">
                      Integrations
                    </span>
                  </a>
                </nav>
              </aside>
              <form
                action="#"
                className="divide-y divide-gray-200 lg:col-span-9"
                method="POST"
              >
                <div className="py-6 px-4 sm:p-6 lg:pb-8">
                  <div>
                    <h2 className="text-lg font-medium leading-6 text-gray-900">
                      Profile
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      This information will be displayed publicly so be careful what                    you share.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-col lg:flex-row">
                    <div className="flex-grow space-y-6">
                      <div>
                        <label
                          className="block text-sm font-medium text-gray-700"
                          htmlFor="username"
                        >
                          Username
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                            workcation.com/
                          </span>
                          <input
                            autoComplete="username"
                            className="block w-full min-w-0 flex-grow rounded-none rounded-r-md border-gray-300 focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                            defaultValue="deblewis"
                            id="username"
                            name="username"
                            type="text"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium text-gray-700"
                          htmlFor="about"
                        >
                          About
                        </label>
                        <div className="mt-1">
                          <textarea
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                            id="about"
                            name="about"
                            // rows="3"
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Brief description for your profile. URLs are hyperlinked.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-shrink-0 lg:flex-grow-0">
                      <p
                        aria-hidden="true"
                        className="text-sm font-medium text-gray-700"
                      >
                        Photo
                      </p>
                      <div className="mt-1 lg:hidden">
                        <div className="flex items-center">
                          <div
                            aria-hidden="true"
                            className="inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full"
                          >
                            <img
                              alt=""
                              className="h-full w-full rounded-full"
                              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
                            />
                          </div>
                          <div className="ml-5 rounded-md shadow-sm">
                            <div className="group relative flex items-center justify-center rounded-md border border-gray-300 py-2 px-3 focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:bg-gray-50">
                              <label
                                className="pointer-events-none relative text-sm font-medium leading-4 text-gray-700"
                                htmlFor="mobile-user-photo"
                              >
                                <span>
                                  Change
                                </span>
                                <span className="sr-only">
                                  {' '}user photo
                                </span>
                              </label>
                              <input
                                className="absolute h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                                id="mobile-user-photo"
                                name="user-photo"
                                type="file"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative hidden overflow-hidden rounded-full lg:block">
                        <img
                          alt=""
                          className="relative h-40 w-40 rounded-full"
                          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
                        />
                        <label
                          className="absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100"
                          htmlFor="desktop-user-photo"
                        >
                          <span>
                            Change
                          </span>
                          <span className="sr-only">
                            {' '}user photo
                          </span>
                          <input
                            className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                            id="desktop-user-photo"
                            name="user-photo"
                            type="file"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-12 gap-6">
                    <div className="col-span-12 sm:col-span-6">
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="first-name"
                      >
                        First name
                      </label>
                      <input
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                        id="first-name"
                        name="first-name"
                        type="text"
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="last-name"
                      >
                        Last name
                      </label>
                      <input
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                        id="last-name"
                        name="last-name"
                        type="text"
                      />
                    </div>
                    <div className="col-span-12">
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="url"
                      >
                        URL
                      </label>
                      <input
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                        id="url"
                        name="url"
                        type="text"
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                      <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="company"
                      >
                        Company
                      </label>
                      <input
                        autoComplete="organization"
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                        id="company"
                        name="company"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="divide-y divide-gray-200 pt-6">
                  <div className="px-4 sm:px-6">
                    <div>
                      <h2 className="text-lg font-medium leading-6 text-gray-900">
                        Privacy
                      </h2>
                      <p className="mt-1 text-sm text-gray-500">
                        Ornare eu a volutpat eget vulputate. Fringilla commodo amet.
                      </p>
                    </div>
                    <ul
                      className="mt-2 divide-y divide-gray-200"
                      role="list"
                    >
                      <li
                        className="flex items-center justify-between py-4"
                        x-data="{ on: true }"
                      >
                        <div className="flex flex-col">
                          <p
                            className="text-sm font-medium text-gray-900"
                            id="privacy-option-1-label"
                          >
                            Available to hire
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            id="privacy-option-1-description"
                          >
                            Nulla amet tempus sit                          accumsan. Aliquet turpis sed sit lacinia.
                          </p>
                        </div>
                        <button
                        //   :aria-checked="on.toString()"
                        //   :class="{ 'bg-teal-500': on, 'bg-gray-200': !(on) }"
                        //   @click="on = !on"
                          aria-checked="true"
                          aria-describedby="privacy-option-1-description"
                          aria-labelledby="privacy-option-1-label"
                          className="bg-gray-200 relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                          role="switch"
                          type="button"
                          x-ref="switch"
                          x-state:off="Not Enabled"
                          x-state:on="Enabled"
                        >
                          <span
                            // :class="{ 'translate-x-5': on, 'translate-x-0': !(on) }"
                            aria-hidden="true"
                            className="translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                            x-state:off="Not Enabled"
                            x-state:on="Enabled"
                          />
                        </button>
                      </li>
                      <li
                        className="flex items-center justify-between py-4"
                        x-data="{ on: false }"
                      >
                        <div className="flex flex-col">
                          <p
                            className="text-sm font-medium text-gray-900"
                            id="privacy-option-2-label"
                          >
                            Make account private
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            id="privacy-option-2-description"
                          >
                            Pharetra morbi dui mi mattis                          tellus sollicitudin cursus pharetra.
                          </p>
                        </div>
                        <button
                        //   :aria-checked="on.toString()"
                        //   :class="{ 'bg-teal-500': on, 'bg-gray-200': !(on) }"
                        //   @click="on = !on"
                          aria-checked="false"
                          aria-describedby="privacy-option-2-description"
                          aria-labelledby="privacy-option-2-label"
                          className="bg-gray-200 relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                          role="switch"
                          type="button"
                          x-ref="switch"
                          x-state:off="Not Enabled"
                          x-state:on="Enabled"
                        >
                          <span
                            // :class="{ 'translate-x-5': on, 'translate-x-0': !(on) }"
                            aria-hidden="true"
                            className="translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                            x-state:off="Not Enabled"
                            x-state:on="Enabled"
                          />
                        </button>
                      </li>
                      <li
                        className="flex items-center justify-between py-4"
                        x-data="{ on: true }"
                      >
                        <div className="flex flex-col">
                          <p
                            className="text-sm font-medium text-gray-900"
                            id="privacy-option-3-label"
                          >
                            Allow commenting
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            id="privacy-option-3-description"
                          >
                            Integer amet, nunc hendrerit                          adipiscing nam. Elementum ame
                          </p>
                        </div>
                        <button
                        //   :aria-checked="on.toString()"
                        //   :class="{ 'bg-teal-500': on, 'bg-gray-200': !(on) }"
                        //   @click="on = !on"
                          aria-checked="true"
                          aria-describedby="privacy-option-3-description"
                          aria-labelledby="privacy-option-3-label"
                          className="bg-gray-200 relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                          role="switch"
                          type="button"
                          x-ref="switch"
                          x-state:off="Not Enabled"
                          x-state:on="Enabled"
                        >
                          <span
                            // :class="{ 'translate-x-5': on, 'translate-x-0': !(on) }"
                            aria-hidden="true"
                            className="translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                            x-state:off="Not Enabled"
                            x-state:on="Enabled"
                          />
                        </button>
                      </li>
                      <li
                        className="flex items-center justify-between py-4"
                        x-data="{ on: true }"
                      >
                        <div className="flex flex-col">
                          <p
                            className="text-sm font-medium text-gray-900"
                            id="privacy-option-4-label"
                          >
                            Allow mentions
                          </p>
                          <p
                            className="text-sm text-gray-500"
                            id="privacy-option-4-description"
                          >
                            Adipiscing est venenatis enim                          molestie commodo eu gravid
                          </p>
                        </div>
                        <button
                        //   :aria-checked="on.toString()"
                        //   :class="{ 'bg-teal-500': on, 'bg-gray-200': !(on) }"
                        //   @click="on = !on"
                          aria-checked="true"
                          aria-describedby="privacy-option-4-description"
                          aria-labelledby="privacy-option-4-label"
                          className="bg-gray-200 relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                          role="switch"
                          type="button"
                          x-ref="switch"
                          x-state:off="Not Enabled"
                          x-state:on="Enabled"
                        >
                          <span
                            // :class="{ 'translate-x-5': on, 'translate-x-0': !(on) }"
                            aria-hidden="true"
                            className="translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                            x-state:off="Not Enabled"
                            x-state:on="Enabled"
                          />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4 flex justify-end py-4 px-4 sm:px-6">
                    <button
                      className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                      type="button"
                    >
                      Cancel
                    </button>
                    <button
                      className="ml-5 inline-flex justify-center rounded-md border border-transparent bg-sky-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</div> */}