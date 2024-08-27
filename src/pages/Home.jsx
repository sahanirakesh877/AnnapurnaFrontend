import React, { useEffect } from "react";
import Newsletter from "../components/Newsletter";
import About from "../pages/About";
import Product from "../pages/CheckProduct";
import Contact from "../pages/Contact";
import Banner from "../components/Banner";
import { useLocation } from "react-router-dom";

const Home = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Banner />
      <About />
      <Product />

      <Contact />
      <Newsletter />
    </>
  );
};

export default Home;
