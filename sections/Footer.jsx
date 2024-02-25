export default function Footer() {
  return (
    <section className="w-screen py-12   bg-black ">
        <footer className="mx-auto max-w-screen-2xl px-8 md:px-16 py-2 flex flex-col justify-evenly md:flex-row text-white gap-5 bg-gradient-to-bt from-gray-900 to-black">
          <div aria-label="About  w-1/2">
            <h className="text-2xl">About</h>
            <p className="text-white/70 font-light w-3/5">
              Founded by a team of dedicated developers, Doogle emerged
              from the simple idea that connecting with fellow developers can
              enhance the learning experience and accelerate professional
              growth.
            </p>
            <h1 className="mt-6 text-2xl">Vision</h1>
            <p className="text-white/70 font-light w-3/5">
              At Doogle, our mission is to empower developers by fostering a
              supportive and collaborative environment.
            </p>
          </div>
          <div
            aria-label="Socials"
            className="w-1/2 flex flex-col justify-center items-center gap-4"
          >
            <h1>Connect with us</h1>
            <div id="links" className="flex flex-row justify-evenly w-full">
            <span className="absolute -inset-1.5" />
                  <span className="sr-only">Linkedin</span>
              <a>
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
                  class="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <span className="absolute -inset-1.5" />
                  <span className="sr-only">Instagram</span>
              <a>
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
                  class="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <span className="absolute -inset-1.5" />
                  <span className="sr-only">Twitter</span>
              <a>
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
                  class="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
    </section>
  );
}
