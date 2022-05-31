import React, { useEffect, useRef } from "react";
import About from "../components/sections/About";
import Gallery from "../components/sections/Gallery";
/* import Blog from "../components/sections/Blog"; */
import Reviews from "../components/sections/Reviews";
import Header from "../components/Header";
import Footer from "../components/sections/Footer";
/* import SocialMedia from "../components/sections/SocialMedia"; */
import Landing from "../components/sections/Landing";


import "swiper/css";
import "../styles/global.css";


const IndexPage = () => {

  return (
    <>
      <Header />
      <Landing/>
      <About />
     {/*  <Blog /> */}
      <Reviews />
      <Gallery />
      {/* <SocialMedia /> */}
      <Footer />
    </>
  );
};

export default IndexPage;
