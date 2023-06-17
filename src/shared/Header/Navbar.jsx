import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import colorLogo from "../../assets/logo/colorlogo.png";
import whiteLogo from "../../assets/logo/whitelogo.png";
import { Icon } from "@iconify/react"; // icon

const Navbar = () => {
  // use state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const [clinicsDropdownOpen, setClinicsDropdownOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [doctorsDropdownOpen, setDoctorsDropdownOpen] = useState(false);

  //navbar color change effect
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // for home
  const toggleHomeDropdown = () => setHomeDropdownOpen(!homeDropdownOpen);
  const homeDropdownClose = () => setHomeDropdownOpen(false);

  //for features
  const toggleFeaturesDropdown = () =>
    setFeaturesDropdownOpen(!featuresDropdownOpen);
  const featuresDropdownClose = () => setFeaturesDropdownOpen(false);

  //for clinics
  const toggleClinicsDropdown = () =>
    setClinicsDropdownOpen(!clinicsDropdownOpen);
  const clinicsDropdownClose = () => setClinicsDropdownOpen(false);

  //for blog
  const toggleBlogDropdown = () => setBlogDropdownOpen(!blogDropdownOpen);
  const blogDropdownClose = () => setBlogDropdownOpen(false);

  //for doctors
  const toggleDoctorDropdown = () =>
    setDoctorsDropdownOpen(!doctorsDropdownOpen);
  const doctorsDropdownClose = () => setDoctorsDropdownOpen(false);

  const menuItems = (
    <>
      {/* Home */}
      <li
        className={`font-normal nav-item text-xl ${
          scrolled
            ? "hover:text-secondary  text-white"
            : "text-secondary hover:text-brand"
        }`}
        onMouseEnter={toggleHomeDropdown}
        onMouseLeave={homeDropdownClose}
        onClick={toggleHomeDropdown}
      >
        <div
          className="flex group cursor-pointer items-center py-6 hover:skew-y-2 duration-300"
          onClick={() => setHomeDropdownOpen(false)}
        >
          <span>Home</span>
          <Icon
            icon="material-symbols:arrow-drop-down-rounded"
            className="group-hover:translate-y-1 duration-300"
            width="25"
          />
        </div>

        {homeDropdownOpen && (
          <ul
            className="dropdown-menu -mt-2 border-b border-brand drop-shadow-xl py-6 absolute lg:top-full bg-white block z-50 duration-300 group-hover:translate-y-1 ease-in-out z"
            onClick={() => setIsMenuOpen(false)}
          >
            <li>
              <Link
                title="Home1"
                to="/"
                className="block px-4 py-2 text-lg text-gray-700 hover:text-white hover:bg-brand hover:skew-y-2 duration-300"
              >
                Home Varient 1
              </Link>
            </li>
            <li>
              <Link
                title="Home2"
                to="/home2"
                className="block px-4 py-2 text-lg text-gray-700 hover:text-white hover:bg-brand hover:skew-y-2 duration-300"
              >
                Home Varient 2
              </Link>
            </li>
          </ul>
        )}
      </li>
      {/* Features */}
      <li
        className={`ont-normal nav-item text-xl ${
          scrolled
            ? "hover:text-secondary  text-white"
            : "text-secondary hover:text-brand"
        }`}
        onMouseEnter={toggleFeaturesDropdown}
        onMouseLeave={featuresDropdownClose}
        onClick={toggleFeaturesDropdown}
      >
        <div
          className="flex group cursor-pointer items-center py-6 hover:skew-y-2 duration-300"
          onClick={() => setFeaturesDropdownOpen(false)}
        >
          <span>Features</span>
          <Icon
            icon="material-symbols:arrow-drop-down-rounded"
            className="group-hover:translate-y-1 duration-300"
            width="25"
          />
        </div>

        {featuresDropdownOpen && (
          <ul
            className="dropdown-menu -mt-2 border-b border-brand drop-shadow-xl py-6 absolute lg:top-full bg-white block z-50 duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(false)}
          >
            <li>
              <Link
                title="about us"
                to="/about"
                className="block px-4 py-2 text-lg text-gray-700 hover:text-white hover:bg-brand hover:skew-y-2 duration-300"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                title="services"
                to="/services"
                className="block px-4 py-2 text-lg text-gray-700 hover:text-white hover:bg-brand hover:skew-y-2 duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                title="service details"
                to="/servicesdetail"
                className="block px-4 py-2 text-lg text-gray-700 hover:text-white hover:bg-brand hover:skew-y-2 duration-300"
              >
                Service details
              </Link>
            </li>

            <li>
              <Link
                title="Book Appointment"
                to="/book"
                className="block px-4 py-2 text-lg text-gray-700 hover:text-white hover:bg-brand hover:skew-y-2 duration-300"
              >
                Online Appoinment
              </Link>
            </li>
            <li>
              <Link
                title="FAQ"
                to="/faq"
                className="block px-4 py-2 text-lg text-gray-700 hover:text-white hover:bg-brand hover:skew-y-2 duration-300"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                title="Error Messages"
                to="/error"
                className="block px-4 py-2 text-lg text-gray-700 hover:text-white hover:bg-brand hover:skew-y-2 duration-300"
              >
                Error 404
              </Link>
            </li>
          </ul>
        )}
      </li>
      {/* Clinics */}
      <li
        className={`font-normal nav-item text-xl ${
          scrolled
            ? "hover:text-secondary  text-white"
            : "text-secondary hover:text-brand"
        }`}
        onMouseEnter={toggleClinicsDropdown}
        onMouseLeave={clinicsDropdownClose}
        onClick={toggleClinicsDropdown}
      >
        <div
          className="flex group cursor-pointer items-center py-6  hover:skew-y-2 duration-300"
          onClick={() => setClinicsDropdownOpen(false)}
        >
          <span>Clinics</span>
          <Icon
            icon="material-symbols:arrow-drop-down-rounded"
            className="group-hover:translate-y-1 duration-300"
            width="25"
          />
        </div>

        {clinicsDropdownOpen && (
          <ul
            className="dropdown-menu -mt-2 border-b border-brand drop-shadow-xl py-6 absolute lg:top-full bg-white block z-50 duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(false)}
          >
            <li>
              <Link
                title="Clinics grid"
                to="/clinicsgrid"
                className="block px-4 py-2 text-lg text-gray-700 hover:text-white hover:bg-brand hover:skew-y-2 duration-300"
              >
                Clinics grid
              </Link>
            </li>
            <li>
              <Link
                title="Clinics list"
                to="/clinicslist"
                className="block px-4 py-2 text-lg text-gray-700 hover:text-white hover:bg-brand hover:skew-y-2 duration-300"
              >
                Clinics list
              </Link>
            </li>
            <li>
              <Link
                title="clinics details"
                to="/clinicsdetails"
                className="block px-4 py-2 text-lg text-gray-700 hover:text-white hover:bg-brand hover:skew-y-2 duration-300"
              >
                Clinics details
              </Link>
            </li>
          </ul>
        )}
      </li>
      {/* Blog */}

      <li
        className={`font-normal nav-item text-xl ${
          scrolled
            ? "hover:text-secondary  text-white"
            : "text-secondary hover:text-brand"
        }`}
        onMouseEnter={toggleBlogDropdown}
        onMouseLeave={blogDropdownClose}
        onClick={toggleBlogDropdown}
      >
        <div
          className="flex group cursor-pointer items-center py-6 hover:skew-y-2 duration-300"
          onClick={() => setBlogDropdownOpen(false)}
        >
          <span>Blog</span>
          <Icon
            icon="material-symbols:arrow-drop-down-rounded"
            className="group-hover:translate-y-1 duration-300"
            width="25"
          />
        </div>

        {blogDropdownOpen && (
          <ul
            className="dropdown-menu -mt-2 border-b border-brand drop-shadow-xl py-6 absolute lg:top-full bg-white block z-50 duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(false)}
          >
            <li>
              <Link
                title="Blog standard"
                to="/blogstandard"
                className="block px-4 py-2 text-lg text-gray-700 hover:text-white hover:bg-brand hover:skew-y-2 duration-300"
              >
                Blog standard Page
              </Link>
            </li>
            <li>
              <Link
                title="Blog grid"
                to="/bloggrid"
                className="block px-4 py-2 text-lg text-gray-700 hover:text-white hover:bg-brand hover:skew-y-2 duration-300"
              >
                Blog grid Page
              </Link>
            </li>
            <li>
              <Link
                title="Blog details"
                to="/blogdetails"
                className="block px-4 py-2 text-lg text-gray-700 hover:text-brand hover:translate-x-1 duration-300"
              >
                Blog details Page
              </Link>
            </li>
          </ul>
        )}
      </li>
      {/* Doctors */}

      <li
        className={`font-normal nav-item text-xl ${
          scrolled
            ? "hover:text-secondary  text-white"
            : "text-secondary hover:text-brand"
        }`}
        onMouseEnter={toggleDoctorDropdown}
        onMouseLeave={doctorsDropdownClose}
        onClick={toggleDoctorDropdown}
      >
        <div
          className="flex group cursor-pointer items-center py-6 hover:skew-y-2 duration-300"
          onClick={() => setDoctorsDropdownOpen(false)}
        >
          <span>Doctors</span>
          <Icon
            icon="material-symbols:arrow-drop-down-rounded"
            className="group-hover:translate-y-1 duration-300"
            width="25"
          />
        </div>

        {doctorsDropdownOpen && (
          <ul
            className="dropdown-menu -mt-2 border-b border-brand drop-shadow-xl py-6 absolute lg:top-full bg-white block z-50 duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(false)}
          >
            <li>
              <Link
                title="Doctors list"
                to="/doctorslist"
                className="block px-4 py-2 text-lg text-gray-700 hover:text-white hover:bg-brand hover:skew-y-2 duration-300"
              >
                Doctors list
              </Link>
            </li>
            <li>
              <Link
                title="Doctors grid"
                to="/doctorsgrid"
                className="block px-4 py-2 text-lg text-gray-700 hover:text-white hover:bg-brand hover:skew-y-2 duration-300"
              >
                Doctors grid
              </Link>
            </li>
            <li>
              <Link
                title="Doctors details"
                to="/doctorsdetails"
                className="block px-4 py-2 text-lg text-gray-700 hover:text-white hover:bg-brand hover:skew-y-2 duration-300"
              >
                Doctors details
              </Link>
            </li>
          </ul>
        )}
      </li>
      {/* Contact */}

      <li
        className={`font-normal nav-item text-xl hover:skew-y-2 duration-300 ${
          scrolled
            ? "hover:text-secondary text-white"
            : "text-secondary hover:text-brand"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <Link title="Contact us" to="/contact">
          Contact us
        </Link>
      </li>

      <li></li>
    </>
  );

  // Return

  return (
    <div className="sticky w-full shadow border-b border-gray-100  top-0 z-50 md:px-32">
      <div
        className={` py-2 mx-auto duration-300 flex justify-between ${
          scrolled ? "bg-brand" : "bg-white"
        }`}
      >
        <div>
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            {scrolled ? (
              <img src={whiteLogo} alt="" className="w-32" />
            ) : (
              <img src={colorLogo} alt="" className="w-32" />
            )}
          </Link>
        </div>
        <div className="flex items-center ">
          <ul className="items-center nav-list hidden space-x-8 lg:flex">
            {menuItems}
          </ul>
          {/* Appointment button */}
          <ul className=" items-center hidden lg:flex">
            <li className="pr-10">
              {scrolled ? (
                <Link
                  to="/appointment"
                  className="flex items-center transform hover:scale-105 duration-500 ease-in-out px-3 py-2  font-medium text-secondary  rounded bg-white  hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  <span className="button text-bold text-brand">
                    Appointment
                  </span>
                  <Icon
                    icon="iconamoon:sign-plus"
                    width="22"
                    className="text-brand"
                  />
                </Link>
              ) : (
                <Link to="/appointment" className="group">
                  <button className="md:text-2xl text-base  flex items-center text-white transform hover:-skew-y-3 duration-500 rounded-full  bg-brand px-3 py-2 font-medium">
                    Appoinment{" "}
                    <Icon
                      icon="typcn:plus"
                      width="25"
                      className="pl-1 pt-1 group-hover:-translate-y-2 duration-300"
                    />
                  </button>
                </Link>
              )}
            </li>
          </ul>
          <div className="lg:hidden pr-5">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className={`p-2  transition duration-200 rounded focus:outline-none focus:shadow-outline ${
                scrolled ? "bg-white" : "bg-brand"
              }`}
              onClick={() => setIsMenuOpen(true)}
            >
              <svg
                className={`w-5 ${scrolled ? "text-secondary" : "text-white"}`}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute left-0 top-0 w-full">
                <div
                  className={`p-5 border shadow-sm ${
                    scrolled ? "bg-brand text-white" : "bg-white text-secondary"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        {scrolled ? (
                          <img src={whiteLogo} alt="" className="w-32" />
                        ) : (
                          <img src={colorLogo} alt="" className="w-32" />
                        )}
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className={`p-2 -mt-2 -mr-2 transition duration-200 rounded focus:bg-gray-200 focus:outline-none focus:shadow-outline ${
                          scrolled ? "hover:bg-white" : "hover:bg-brand"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg
                          className="w-8 text-white h-8 bg-brand rounded-full p-1"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">{menuItems}</ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
