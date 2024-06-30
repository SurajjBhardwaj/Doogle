export default function footer() {
  return (
    <>
      {/* Footer Section: With People Dark */}
      <div className="dark">
        <footer
          id="page-footer"
          className="bg-white dark:bg-gray-900 dark:text-gray-100"
        >
          <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-6 md:gap-6 lg:gap-10">
              <div className="space-y-6 sm:col-span-3 md:col-span-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-400/75">
                  Products
                </h4>
                <nav className="flex flex-col items-start gap-3 text-sm">
                  <a
                    href="#"
                    className="font-medium text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                  >
                    Solutions
                  </a>
                  <a
                    href="#"
                    className="font-medium text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="font-medium text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                  >
                    Pricing Plans
                  </a>
                  <a
                    href="#"
                    className="font-medium text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                  >
                    Documentation
                  </a>
                  <a
                    href="#"
                    className="font-medium text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                  >
                    Analytics
                  </a>
                  <a
                    href="#"
                    className="font-medium text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                  >
                    Support Center
                  </a>
                </nav>
              </div>
              <div className="space-y-6 sm:col-span-3 md:col-span-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-400/75">
                  Legal
                </h4>
                <nav className="flex flex-col items-start gap-3 text-sm">
                  <a
                    href="#"
                    className="font-medium text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                  >
                    Team
                  </a>
                  <a
                    href="#"
                    className="font-medium text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    className="font-medium text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="font-medium text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                  >
                    Cookies
                  </a>
                  <a
                    href="#"
                    className="font-medium text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                  >
                    Usage License
                  </a>
                  <a
                    href="#"
                    className="font-medium text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                  >
                    Refunds
                  </a>
                </nav>
              </div>
              <div className="space-y-6 sm:col-span-6 md:col-span-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-400/75">
                  About us
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      className="block size-14 flex-none overflow-hidden rounded-full border-2 border-gray-50 transition duration-150 ease-out hover:scale-110 hover:border-white hover:shadow-md active:scale-100 active:border-gray-50 active:shadow-sm dark:border-gray-900 dark:shadow-gray-950"
                    >
                      <img
                        src="https://cdn.tailkit.com/media/placeholders/avatar-mEZ3PoFGs_k-160x160.jpg"
                        alt="Avatar Photo"
                      />
                    </a>
                    <a
                      href="#"
                      className="block size-14 flex-none overflow-hidden rounded-full border-2 border-gray-50 transition duration-150 ease-out hover:scale-110 hover:border-white hover:shadow-md active:scale-100 active:border-gray-50 active:shadow-sm dark:border-gray-900 dark:shadow-gray-950"
                    >
                      <img
                        src="https://cdn.tailkit.com/media/placeholders/avatar-sibVwORYqs0-160x160.jpg"
                        alt="Avatar Photo"
                      />
                    </a>
                    <a
                      href="#"
                      className="block size-14 flex-none overflow-hidden rounded-full border-2 border-gray-50 transition duration-150 ease-out hover:scale-110 hover:border-white hover:shadow-md active:scale-100 active:border-gray-50 active:shadow-sm dark:border-gray-900 dark:shadow-gray-950"
                    >
                      <img
                        src="https://cdn.tailkit.com/media/placeholders/avatar-DLKR_x3T_7s-160x160.jpg"
                        alt="Avatar Photo"
                      />
                    </a>
                  </div>
                  <p className="text-sm/relaxed text-gray-600 dark:text-gray-400">
                  Founded by a team of dedicated developers, Doogle emerged
              from the simple idea that connecting with fellow developers can
              enhance the learning experience and accelerate professional
              growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-6 rounded-lg bg-gray-50 p-4 text-center text-sm dark:bg-gray-800/50 md:flex-row-reverse md:justify-between md:gap-0 md:text-left">
              <nav className="flex justify-center gap-3">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-800 dark:hover:text-white"
                >
                  <svg
                    className="bi bi-twitter-x inline-block size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#1877f2]">
                  <svg
                    className="icon-facebook inline-block size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#405de6]">
                  <svg
                    className="icon-instagram inline-block size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#333] dark:hover:text-gray-50"
                >
                  <svg
                    className="icon-github inline-block size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#ea4c89]">
                  <svg
                    className="icon-dribbble inline-block size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073a42.153 42.153 0 00-.767-1.68c2.31-1 4.165-2.358 5.548-4.082a9.863 9.863 0 012.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68a46.287 46.287 0 00-3.488-5.438A9.894 9.894 0 0112 2.087c2.275 0 4.368.779 6.043 2.072zM7.527 3.166a44.59 44.59 0 013.537 5.381c-2.43.715-5.331 1.082-8.684 1.105a9.931 9.931 0 015.147-6.486zM2.087 12l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48A9.865 9.865 0 012.087 12zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027a39.137 39.137 0 012.043 7.46c-3.349 1.291-6.953.666-9.641-1.433zm11.586.43a41.098 41.098 0 00-1.92-6.897c1.876-.265 3.94-.196 6.199.196a9.923 9.923 0 01-4.279 6.701z" />
                  </svg>
                </a>
              </nav>
              <div className="text-gray-500 dark:text-gray-400/80">
                <span className="font-medium">At Doogle, our mission is to empower developers by fostering a
                supportive and collaborative environment.</span> ©
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* END Footer Section: With People Dark */}
    </>
  );
}
