import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";
import { gsap, Power3, Sine } from "gsap";
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import * as classes from "../../styles/blog.module.css";
gsap.registerPlugin(ScrollTrigger);
SwiperCore.use([Navigation])

const Blog = (props) => {
  const aboutContainer = useRef();
  const navPrev = useRef();
  const navNext = useRef();
 

  /*   useEffect(() => {
      let DOM = { 
        title: {
          element: aboutContainer.current.querySelector("h1"),
          chars: aboutContainer.current.querySelectorAll("h1 span span"),
        },
        paragraph: aboutContainer.current.querySelector("p"),
        image: aboutContainer.current.querySelector("#aboutImage"),
      };
      console.log(aboutContainer.current);
      gsap.from(DOM.title.chars, {
        y: 20,
        ease: Power3.easeOut,
        opacity: 0,
        skewX: 40,
        stagger: 0.05,
        scrollTrigger: {
          trigger: aboutContainer.current,
          start: "top bottom", //when the top of the trigger hits bottom of vw
        },
      });
  
      gsap.from(DOM.image, {
        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        scrollTrigger: {
          trigger: aboutContainer.current,
          start: "center bottom", //when the top of the trigger hits bottom of vw
          end: "bottom center",
          scrub: true, //
        },
      });
    }, []); */

  return (
    <section ref={aboutContainer} className={classes.blogSection}>
      <div className={classes.titleHolder}>
        <h2>Latest News</h2>
        <img src="/sea_vertical.jpg" />

      </div>


      <Swiper
        spaceBetween={25}
        slidesPerView={2}
        pagination={{
          prevEl: navNext.current,
          nextEl: navPrev.current
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navPrev.current;
          swiper.params.navigation.nextEl = navNext.current;
        }}
        breakpoints={{
          1000: {
            slidesPerView: 3
          },
          1300: {
            slidesPerView: 4,
          },
        }}
        className={classes.swiperContainer}
      >
       
        <SwiperSlide className={classes.article}>
          <div className={classes.articleOverlay} />
          <img src="/gallery/1.jpg" />
          <div className={classes.articleDetails}>
            <p className={classes.articleDate}>22 July 2022</p>
            <h3>Article title about some event or other info about boom events </h3>
            <p className={classes.articleTooltip}>Click to open article</p>
          </div>
          <div className={classes.postArrow}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <polygon points="11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707" />
            </svg>
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.article}>
          <div className={classes.articleOverlay} />
          <img src="/gallery/2.jpg" />
          <div className={classes.articleDetails}>
            <p className={classes.articleDate}>22 July 2022</p>
            <h3>Article title about some event or other info about boom events </h3>
            <p className={classes.articleTooltip}>Click to open article</p>

          </div>
          <div className={classes.postArrow}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <polygon points="11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707" />
            </svg>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide className={classes.article}>
          <div className={classes.articleOverlay} />
          <img src="/gallery/6.jpg" />
          <div className={classes.articleDetails}>
            <p className={classes.articleDate}>22 July 2022</p>
            <h3>Article title about some event or other info about boom events </h3>
            <p className={classes.articleTooltip}>Click to open article</p>

          </div>
          <div className={classes.postArrow}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <polygon points="11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707" />
            </svg>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide className={classes.article}>
          <div className={classes.articleOverlay} />
          <img src="/gallery/4.jpg" />
          <div className={classes.articleDetails}>
            <p className={classes.articleDate}>22 July 2022</p>
            <h3>Article title about some event or other info about boom events </h3>
            <p className={classes.articleTooltip}>Click to open article</p>

          </div>
          <div className={classes.postArrow}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <polygon points="11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707" />
            </svg>
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.article}>
          <div className={classes.articleOverlay} />
          <img src="/gallery/4.jpg" />
          <div className={classes.articleDetails}>
            <p className={classes.articleDate}>22 July 2022</p>
            <h3>Article title about some event or other info about boom events </h3>
            <p className={classes.articleTooltip}>Click to open article</p>

          </div>
          <div className={classes.postArrow}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <polygon points="11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707" />
            </svg>
          </div>
        </SwiperSlide>
        <SwiperSlide className={classes.article}>
          <div className={classes.articleOverlay} />
          <img src="/gallery/4.jpg" />
          <div className={classes.articleDetails}>
            <p className={classes.articleDate}>22 July 2022</p>
            <h3>Article title about some event or other info about boom events </h3>
            <p className={classes.articleTooltip}>Click to open article</p>

          </div>
          <div className={classes.postArrow}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <polygon points="11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707" />
            </svg>
          </div>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <div className={classes.sliderNavigation}>
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
export default Blog;
