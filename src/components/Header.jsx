import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white border-b">
      <div className="container flex flex-wrap items-center justify-between mx-auto p-2">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/Annapurnal1.png"
            className="h-20 w-auto object-contain"
            alt="Logo"
          />
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-dark dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-4 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 dark:text-red md:dark:text-red-500"
                aria-current="page"
                onClick={closeMenu} // Close menu when clicked
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-dark md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-dark md:dark:hover:bg-transparent"
                onClick={closeMenu} // Close menu when clicked
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-dark md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-dark md:dark:hover:bg-transparent"
                onClick={closeMenu} // Close menu when clicked
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-dark md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-dark md:dark:hover:bg-transparent"
                onClick={closeMenu} // Close menu when clicked
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-dark md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-dark md:dark:hover:bg-transparent"
                onClick={closeMenu} // Close menu when clicked
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
