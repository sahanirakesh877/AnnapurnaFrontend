import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoImg from "/Annapurnal1.png";

const Footer = () => {
  return (
    <>
      <div>
        <div className="bg-gradient-to-r from-red-200 to-red-400 ">
          <div className="container  px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto pt-4">
            <div className="py-5">
              <img
                src={logoImg}
                className="h-20 w-auto object-contain"
                alt="Logo"
              />
            </div>
            <div className="p-5">
              <div className="text-sm uppercase text-indigo-600 font-bold">
                Resources
              </div>
              <Link className="my-3 block" to="/about">
                About <span className="text-teal-600 text-xs p-1" />
              </Link>
              <Link className="my-3 block" to="/product">
                Products <span className="text-teal-600 text-xs p-1" />
              </Link>
              <Link className="my-3 block" to="/contact">
                Contact <span className="text-teal-600 text-xs p-1">New</span>
              </Link>
              <Link className="my-3 block" to="/events">
                Events <span className="text-teal-600 text-xs p-1">New</span>
              </Link>
            </div>
            <div className="p-5">
              <div className="text-sm uppercase text-indigo-600 font-bold">
                Support
              </div>
              <a className="my-3 block" to="/#">
                Help Center <span className="text-teal-600 text-xs p-1" />
              </a>
              <a className="my-3 block" href="/#">
                Privacy Policy <span className="text-teal-600 text-xs p-1" />
              </a>
              <a className="my-3 block" href="/#">
                Conditions <span className="text-teal-600 text-xs p-1" />
              </a>
            </div>
            <div className="p-5">
              <div className="text-sm uppercase text-indigo-600 font-bold">
                Contact us
              </div>
              <a className="my-3 block" href="/#">
                Dhobighat, Lalitpur
                <span className="text-teal-600 text-xs p-1" />
              </a>
              <a
                className="my-3 block"
                href="mailto://info@annapurnamediequip.com"
              >
                info@annapurnamediequip.com
                <span className="text-teal-600 text-xs p-1" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-red-200 to-red-400  pt-2">
          <div
            className="flex pb-5 px-3 m-auto pt-5 border-t border-red-600 text-gray-800 text-sm flex-col
max-w-screen-lg items-center"
          >
            <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
              <a
                href="https://www.facebook.com"
                className="w-6 mx-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  className="text-gray-500 hover:text-red-600"
                  size={24}
                />
              </a>
              <a
                href="https://www.instagram.com"
                className="w-6 mx-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="text-gray-500 hover:text-red-600"
                  size={24}
                />
              </a>
              <a
                href="https://www.whatsapp.com"
                className="w-6 mx-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp
                  className="text-gray-500 hover:text-red-600"
                  size={24}
                />
              </a>
              <a
                href="https://www.youtube.com"
                className="w-6 mx-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube
                  className="text-gray-500 hover:text-red-600"
                  size={24}
                />
              </a>
            </div>
            <div className="my-5">
              © Copyright 2024. All Rights Reserved. Design With ❤️❤️ By{" "}
              <span>
                <a
                  href="https://technavata.com/"
                  target="_blank"
                  className="text-red-700 font-semibold"
                >
                  Navata Tech
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
