import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";
import { gsap, Power3, Sine } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards"
import SwiperCore, {
  EffectCards, Navigation
} from 'swiper';
import * as classes from "../../styles/gallery.module.css";
gsap.registerPlugin(ScrollTrigger);


// install Swiper modules
SwiperCore.use([EffectCards, Navigation]);
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
      clipPath: "polygon(0 15%, 100% 20%, 100% 80%, 0 80%)",
      scrollTrigger: {
        trigger: DOM.image,
        start: "bottom bottom", //when the top of the trigger hits bottom of vw
        scrub: true,
        pin: true
      },
    });
    gsap.from(DOM.quote, {
      opacity: 0,
      scrollTrigger: {
        trigger: DOM.quote,
        start: "bottom bottom", //when the top of the trigger hits bottom of vw
        scrub: true
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
    <section ref={galleryContainer} className={classes.gallerySection}>
      <div id="backdropImage" className={classes.quoteHolder}>
        <img src="./gallery/30.jpg"></img>
       
        <div id="imageOverlay" className={classes.imageOverlay}></div>

        <div style={{zIndex: 10}} id="quoteHolder">
       {/*  <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
          <path d="M12.96 4.46l-1.42-1.42-3.54 3.55-3.54-3.55-1.42 1.42 3.55 3.54-3.55 3.54 1.42 1.42 3.54-3.55 3.54 3.55 1.42-1.42-3.55-3.54 3.55-3.54z"></path>
        </svg> */}
          <h2 className={classes.galleryQuote}>Some quote related to boom events before gallery section </h2>
          <div className={classes.buttonHolder}>
            <button className={classes.sectionButton}>Check Events</button>
          </div>
        </div>
      </div>
      <Swiper effect={'cards'} grabCursor={true}
         navigation={{
          prevEl: navPrev.current,
          nextEl: navNext.current
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navPrev.current;
          swiper.params.navigation.nextEl = navNext.current;
        }}
      className={classes.swiperContainer}>
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
            <svg rotate="90" width="20" height="20" viewBox="0 0 24 24">
              <polygon points="11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707" />
            </svg>
          </div>
          <div ref={navNext}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <polygon points="11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707" />
            </svg>
          </div>
      </div>
      </Swiper>
  
    </section>
  );
};
export default GallerySection;
