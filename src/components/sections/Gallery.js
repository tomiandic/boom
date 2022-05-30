import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";
import { gsap, Power3, Sine } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import SwiperCore, { EffectCards } from "swiper";
import * as classes from "../../styles/gallery.module.css";
gsap.registerPlugin(ScrollTrigger);

// install Swiper modules
SwiperCore.use([EffectCards]);
const GallerySection = (props) => {
  const navNext = useRef();
  const navPrev = useRef();
  const galleryContainer = useRef();

  useEffect(() => {
    let DOM = {
      title: {
        element: galleryContainer.current.querySelector("h1"),
        chars: galleryContainer.current.querySelectorAll("h1 span span"),
      },
      quote: galleryContainer.current.querySelector("#quoteHolder"),
      image: galleryContainer.current.querySelector("#backdropImage"),
      imageOverlay: galleryContainer.current.querySelector("#imageOverlay"),
    };


    gsap.to(DOM.image, {
      clipPath: "polygon(0 18%, 100% 20%, 100% 80%, 0 80%)",
      scrollTrigger: {
        trigger: DOM.image,
        start: "bottom bottom", //when the top of the trigger hits bottom of vw
        scrub: true,
        pin: true,
        end: "+=500",
      },
    });
    gsap.from(DOM.quote, {
      opacity: 0,
      scrollTrigger: {
        trigger: DOM.quote,
        start: "bottom bottom", //when the top of the trigger hits bottom of vw
        scrub: true,
      },
    });
    gsap.from(DOM.imageOverlay, {
      opacity: 0,
      scrollTrigger: {
        trigger: DOM.imageOverlay,
        start: "center bottom", //when the top of the trigger hits bottom of vw
        scrub: true,
      },
    });
    /* 
    gsap.from(DOM.image, {
      scale: 1.5,
      scrollTrigger: {
        trigger: aboutContainer.current,
        start: "top bottom", //when the top of the trigger hits bottom of vw
        scrub: true, //
      },
    }); */
  }, []);

  return (
    <section id="gallery" ref={galleryContainer} className={classes.gallerySection}>
      <div id="backdropImage" className={classes.quoteHolder}>
        <img src="./gallery/30.jpg"></img>

        <div id="imageOverlay" className={classes.imageOverlay}></div>

        <div style={{ zIndex: 10 }} id="quoteHolder">
          {/*  <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
          <path d="M12.96 4.46l-1.42-1.42-3.54 3.55-3.54-3.55-1.42 1.42 3.55 3.54-3.55 3.54 1.42 1.42 3.54-3.55 3.54 3.55 1.42-1.42-3.55-3.54 3.55-3.54z"></path>
        </svg> */}
          <h2 className={classes.galleryQuote}>
             embrace the Beat of ordinary madness
          </h2>
          <div className={classes.buttonHolder}>
            <Link to="/events" className={classes.sectionButton}>Check Events</Link>
          </div>
        </div>
      </div>
      <h2 className={classes.galleryTitle}>Gallery</h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navPrev.current;
          swiper.params.navigation.nextEl = navNext.current;
        }}
        className={classes.swiperContainer}
      >
        <SwiperSlide>
          <img src="./gallery/20.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./gallery/21.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./gallery/22.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./gallery/23.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./gallery/24.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./gallery/25.jpg"></img>
        </SwiperSlide>
        <div className={classes.navContainer}>
          <div ref={navPrev}>
            <svg viewBox="0 0 90.91 21.41">
              <line
                y1="10.79"
                x2="89"
                y2="10.79"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <polyline
                points="79.5 0.71 89.5 10.71 79.5 20.71"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div ref={navNext}>
            <svg viewBox="0 0 90.91 21.41">
              <line
                y1="10.79"
                x2="89"
                y2="10.79"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <polyline
                points="79.5 0.71 89.5 10.71 79.5 20.71"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </Swiper>
    </section>
  );
};
export default GallerySection;
