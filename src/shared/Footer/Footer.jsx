import footerBg from "../../assets/mobile/Untitled design (8).png";
import { Icon } from "@iconify/react";
import whiteLogo from "../../assets/logo/whitelogo.png";

const Footer = () => {
  return (
    <div className="relative mt-16">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>

      <img src={footerBg} alt="" className="w-full lg:h-96 bg-cover" />
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className=" max-w-screen-xl mx-auto">
        <div className="absolute top-5 px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6 ">
            {/* Profile Card with social Icons */}
            <div className="md:max-w-md lg:col-span-2">
              <a className="flex justify-center">
                <img src={whiteLogo} alt="logo" className="w-48" />
              </a>
              <div className="mt-4 lg:max-w-sm text-center">
                <p className="text-base text-gray-700">
                  “Good health and good sense are two of lifes greatest
                  blessings.” “I believe that the greatest gift you can give
                  your family and the world is a healthy you.
                </p>
              </div>
              <div className="flex justify-center items-center space-x-4 sm:mt-0 pt-6 ">
                <a
                  href="/"
                  className="duration-300 text-deep-purple-100 hover:text-teal-accent-400 hover:translate-y-2"
                >
                  <Icon icon="bi:facebook" width="25" />
                </a>
                <a
                  href="/"
                  className="duration-300 text-deep-purple-100 hover:text-teal-accent-400 hover:translate-y-2"
                >
                  <Icon icon="mdi:twitter" width="25" />
                </a>
                <a
                  href="/"
                  className="duration-300 text-deep-purple-100 hover:text-teal-accent-400 hover:translate-y-2"
                >
                  <Icon icon="mdi:instagram" width="25" />
                </a>
              </div>
            </div>
            {/* Services Card */}
            <div className="grid grid-cols-2 text-center  gap-5 row-gap-8 lg:col-span-4 sm:text-center  md:grid-cols-4">
              <div>
                <p className="font-bold tracking-wide text-teal-accent-400">
                  Services
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="transition ease-in-out delay-150 hover:translate-x-1 hover:-translate-y-1 hover:scale-110 duration-300">
                    <a href="/" className="text-gray-700 ">
                      Primary care
                    </a>
                  </li>
                  <li className="transition ease-in-out delay-150 hover:translate-x-1 hover:-translate-y-1 hover:scale-110 duration-300">
                    <a
                      href="/"
                      className="transition-colors duration-300 text-gray-700 hover:text-teal-accent-400"
                    >
                      Specialized clinics
                    </a>
                  </li>
                  <li className="transition ease-in-out delay-150 hover:translate-x-1 hover:-translate-y-1 hover:scale-110 duration-300">
                    <a
                      href="/"
                      className="transition-colors duration-300 text-gray-700 hover:text-teal-accent-400"
                    >
                      Mental health
                    </a>
                  </li>
                  <li className="transition ease-in-out delay-150 hover:translate-x-1 hover:-translate-y-1 hover:scale-110 duration-300">
                    <a
                      href="/"
                      className="transition-colors duration-300 text-gray-700 hover:text-teal-accent-400"
                    >
                      Dialysis
                    </a>
                  </li>
                  <li className="transition ease-in-out delay-150 hover:translate-x-1 hover:-translate-y-1 hover:scale-110 duration-300">
                    <a
                      href="/"
                      className="transition-colors duration-300 text-gray-700 hover:text-teal-accent-400"
                    >
                      Addiction services
                    </a>
                  </li>
                </ul>
              </div>
              {/* Low-cost care Card */}
              <div>
                <p className="font-bold tracking-wide text-teal-accent-400">
                  Low-cost care
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="transition ease-in-out delay-150 hover:translate-x-1 hover:-translate-y-1 hover:scale-110 duration-300">
                    <a
                      href="/"
                      className="transition-colors duration-300 text-gray-700 hover:text-teal-accent-400"
                    >
                      Rural health
                    </a>
                  </li>
                  <li className="transition ease-in-out delay-150 hover:translate-x-1 hover:-translate-y-1 hover:scale-110 duration-300">
                    <a
                      href="/"
                      className="transition-colors duration-300 text-gray-700 hover:text-teal-accent-400"
                    >
                      Community health
                    </a>
                  </li>
                  <li className="transition ease-in-out delay-150 hover:translate-x-1 hover:-translate-y-1 hover:scale-110 duration-300">
                    <a
                      href="/"
                      className="transition-colors duration-300 text-gray-700 hover:text-teal-accent-400"
                    >
                      Retail clinics
                    </a>
                  </li>
                  <li className="transition ease-in-out delay-150 hover:translate-x-1 hover:-translate-y-1 hover:scale-110 duration-300">
                    <a
                      href="/"
                      className="transition-colors duration-300 text-gray-700 hover:text-teal-accent-400"
                    >
                      Mobile clinics
                    </a>
                  </li>
                </ul>
              </div>
              {/* Subscribe Card */}
              <div className="col-span-4 md:max-w-md lg:col-span-2">
                <span className="text-base font-bold tracking-wide text-teal-accent-400">
                  Subscribe for updates
                </span>
                <form className="flex flex-col mt-4 md:flex-row">
                  <input
                    placeholder="Email"
                    required
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  />
                  <button
                    type="submit"
                    className="text-xl inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-brand transform hover:scale-105 ease-in-out duration-300"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="mt-4 text-sm text-gray-700">
                  Please subscribe to our website and stay connected with us and
                  get more updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-5 border-t border-deep-purple-accent-200 sm:flex-row ">
        <p className="text-sm text-gray-600 ">
          © Copyright 2023. All rights reserved. Weero Digital
        </p>
      </div>
    </div>
  );
};
export default Footer;
