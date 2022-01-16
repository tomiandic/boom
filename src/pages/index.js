import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import * as classes from "../styles/landing.module.css";
import Loader from "../components/Loader";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "../components/sections/About";
import Gallery from "../components/sections/Gallery";
import Blog from "../components/sections/Blog";
import Reviews from "../components/sections/Reviews";
import Header from "../components/Header";
import Footer from "../components/sections/Footer";


//TODO: loader component needs to stop animations when unmounted which does not work
import "swiper/css";
import "../styles/global.css";
// markup
// import Swiper core and required modules
import SwiperCore, {
  FreeMode
} from 'swiper';

// install Swiper modules
SwiperCore.use([FreeMode]);
gsap.registerPlugin(ScrollTrigger);

const IndexPage = () => {

  const navPrev = useRef();
  const navNext = useRef();

  const landingContainer = useRef();
  const landingVideo = useRef();
  const slidesContainer = useRef();
  const landingTL = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    initTimelines();
  }, []);

  function initTimelines() {

    let DOM = {
      title: landingContainer.current.querySelectorAll("[data-animate='reveal']"),
      button: landingContainer.current.querySelector("button"),
      svg: landingContainer.current.querySelector("[data-animate='path']"),
      slides: landingContainer.current.querySelectorAll(".swiper-slide")
    };


    gsap.to(slidesContainer.current, {
      y: 100,
      scrollTrigger: {
        trigger: landingContainer.current,
        start: "top top",
        end: "+=100%",
        scrub: true
      },
    });


    landingTL.current
      .from(landingVideo.current, {
        duration: 1.5,
        scale: 3,
        skewX: 30,
      })
      .from(
        DOM.title,
        {
          duration: 1,
          y: 95,
          rotate: 8,
          skewX: -50,
          stagger: 0.2,
          ease: Power3.easeOut,
        },
        "-=1"
      )
      .to(
        DOM.svg,
        {
          strokeDashoffset: 0,
          duration: 3,
          ease: Power3.easeOut,
        },
        "-=1"
      )
      .from(
        DOM.button,
        {
          duration: 1.5,
          ease: Power3.easeInOut,
          opacity: 0,
          width: 0,
          padding: "20px 0",
        },
        "-=4"
      )
      .from(
        DOM.slides,
        {
          ease: Power3.easeOut,
          opacity: 0,
          duration: 1,
          x: 50,
          stagger: 0.2,
        },
        "-=3"
      );

  }

  return (
    <>
      <section ref={landingContainer} className={classes.landing}>
        <Header />
        <Loader landingVideoRef={landingVideo} landingTL={landingTL} />
        <div className={classes.backdropGradient}>
          <video
            className={classes.videoBackdrop}
            src="/1.mp4"
            ref={landingVideo}
            muted
            playsInline
            loop
          />
        </div>

        <div className={classes.landingContent}>
          <h1>
            <div className={classes.line}>
              <span data-animate="reveal">
                Party Boat Tickets
              </span>
            </div>
            <div className={classes.line}>
              <span data-animate="reveal">
                Now Available!
              </span>
            </div>
          </h1>
          <br />
          <p className={classes.landingParagraph}>
            <div className={classes.line}>
              <span data-animate="reveal">
                Order your boat party ticket on time
              </span>
            </div>
            <div className={classes.line}>
              <span data-animate="reveal">
                to get the early bird prices,
              </span>
            </div>
            <div className={classes.line}>
              <span data-animate="reveal">
                and much more.
              </span>
            </div>
          </p>
          <svg className={classes.svgWave} viewBox="0 0 25.3 4">
            <path
              d="M4.85,24c2.24,0,2.24,2,4.47,2s2.24-2,4.48-2,2.24,2,4.48,2,2.24-2,4.47-2,2.24,2,4.48,2,2.24-2,4.47-2,2.24,2,4.48,2,2.25-2,4.49-2,2.24,2,4.48,2"
              transform="translate(-4.85 -23)"
              fill="none"
            />
            <path
              data-animate="path"
              d="M4.85,24c2.24,0,2.24,2,4.47,2s2.24-2,4.48-2,2.24,2,4.48,2,2.24-2,4.47-2,2.24,2,4.48,2,2.24-2,4.47-2,2.24,2,4.48,2,2.25-2,4.49-2,2.24,2,4.48,2"
              transform="translate(-4.85 -23)"
              fill="none"
              stroke="#00e8fc"
              strokeMiterlimit="20"
              strokeWidth="2"
            />
          </svg>
          <button className={classes.button}>
            CHECK TICKETS{" "}
            <svg
              style={{ marginLeft: 10 }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <polygon points="11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707" />
            </svg>
          </button>
        </div>

        <div ref={slidesContainer} className={classes.landingBottomContainer}>
          <div className={classes.line}>
            <span className={classes.sliderTitle} data-animate="reveal">
              Upcoming events:
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
            </span>
          </div>
          <Swiper
            spaceBetween={15}
            slidesPerView={1.5}
            breakpoints={{
              700: {
                slidesPerView: 2.2,
              },
              1400: {
                slidesPerView: 3.2,
              },
            }}
            className={classes.swiperContainer}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navPrev.current;
              swiper.params.navigation.nextEl = navNext.current;
            }}
            freeMode={true}
          >
            <SwiperSlide>
              <div className={classes.swiperSlide}>
              <div className={classes.eventDate}>
                <p>
                  24<span>September</span>
                </p>
              </div>
              <div className={classes.eventDetails}>
                <p className={classes.eventName}>Giant Party Boom Boat in Pula</p>
                <div className={classes.bottomDetails}>
                  <div className={classes.dash}></div>
                  <div className={classes.eventDetail}>
                    <p>
                      Pula
                    </p>
                  </div>
                  <div className={classes.eventDetail}>
                    <p>
                      16:00 - 22:00
                    </p>
                  </div>
                </div>
                <div className={classes.slideArrowHolder}>
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.swiperSlide}>
              <div className={classes.eventDate}>
                <p>
                  24<span>Jully</span>
                </p>
              </div>
              <div className={classes.eventDetails}>
                <p className={classes.eventName}>Giant Party Boom Boat</p>
                <div className={classes.bottomDetails}>
                  <div className={classes.dash}></div>

                  <div className={classes.eventDetail}>
                    <p>
                      Pula
                    </p>
                  </div>
                  <div className={classes.eventDetail}>
                    <p>
                      16:00 - 22:00
                    </p>
                  </div>
                </div>
                <div className={classes.slideArrowHolder}>
                </div>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.swiperSlide}>
              <div className={classes.eventDate}>
                <p>
                  24<span>Jully</span>
                </p>
              </div>
              <div className={classes.eventDetails}>
                <p className={classes.eventName}>Giant Party Boom Boat in Pula</p>
                <div className={classes.bottomDetails}>
                  <div className={classes.dash}></div>

                  <div className={classes.eventDetail}>
                    <p>
                      Pula
                    </p>
                  </div>
                  <div className={classes.eventDetail}>
                    <p>
                      16:00 - 22:00
                    </p>
                  </div>
                </div>
                <div className={classes.slideArrowHolder}>
                </div>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.swiperSlide}>
              <div className={classes.eventDate}>
                <p>
                  24<span>Jully</span>
                </p>
              </div>
              <div className={classes.eventDetails}>
                <p className={classes.eventName}>Giant Party Boom Boat in Pula</p>
                <div className={classes.bottomDetails}>
                  <div className={classes.dash}></div>

                  <div className={classes.eventDetail}>
                    <p>
                      Pula
                    </p>
                  </div>
                  <div className={classes.eventDetail}>
                    <p>
                      16:00 - 22:00
                    </p>
                  </div>
                </div>
                <div className={classes.slideArrowHolder}>
                </div>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.swiperSlide}>
              <div className={classes.eventDate}>
                <p>
                  24<span>Jully</span>
                </p>
              </div>
              <div className={classes.eventDetails}>
                <p className={classes.eventName}>Giant Party Boom Boat in Pula</p>
                <div className={classes.bottomDetails}>
                  <div className={classes.dash}></div>

                  <div className={classes.eventDetail}>
                    <p>
                      Pula
                    </p>
                  </div>
                  <div className={classes.eventDetail}>
                    <p>
                      16:00 - 22:00
                    </p>
                  </div>
                </div>
                <div className={classes.slideArrowHolder}>
                </div>
              </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <About />
      <Blog />
      <Gallery />
      <Reviews />
      <Footer />
    </>
  );
};

export default IndexPage;
