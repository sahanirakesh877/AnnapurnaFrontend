import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import aboutImg from "/about.jpg";

const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <section className="container mx-auto py-10 ">
        <div className="flex justify-center items-center pb-8">
          <h2 className=" border-b-2 border-green-400 uppercase text-center text-3xl text-red-700 font-semibold">
            About Us
          </h2>
        </div>
        <div className="sm:flex items-center">
          <div className="sm:w-1/2 p-5">
            <div className="text">
              <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
                Why choose us ?
              </span>
              <h2 className="my-4 font-bold text-3xl sm:text-4xl">
                Annapurna<span className="text-red-600"> Medi Equip</span>
              </h2>
              <p className="text-gray-700  text-justify">
                At <strong>Annapurna Medi Equip,</strong> we are dedicated to
                providing healthcare professionals with high-quality medical
                equipment and supplies. With a focus on precision, reliability,
                and innovation, our products are designed to meet the rigorous
                demands of modern medical practice. From diagnostic tools to
                surgical instruments, we offer a comprehensive range of
                equipment to support the healthcare community in delivering
                exceptional patient care.
              </p>
              <p className="text-gray-700 mt-2 text-justify">
                Our commitment to excellence is reflected in every product we
                offer. We understand the critical role that medical equipment
                plays in patient outcomes, which is why we partner with leading
                manufacturers and adhere to the highest industry standards.
                Whether you're outfitting a new clinic or upgrading your current
                facilities, we are here to provide the tools you need to
                succeed.
              </p>
              <p className="text-gray-700 mt-4 text-justify">
                Join us on our mission to empower healthcare professionals with
                the best equipment and support available. Together, we can make
                a difference in the lives of patients around the world.
              </p>
            </div>
          </div>
          <div className="sm:w-1/2 ">
            <div className="image object-center text-center">
              <img src={aboutImg} alt="About Us Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
