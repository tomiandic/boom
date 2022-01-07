import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import * as classes from "../styles/landing.module.css";
import Loader from "../components/Loader";
import { gsap, Power3, Sine } from "gsap";
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

gsap.registerPlugin(ScrollTrigger);

const IndexPage = () => {
  const socialMedia = useRef([]);
  const landingVideo = useRef();
  const landingTitle = useRef([]);
  const landingButton = useRef();
  const aboutSection = useRef();
  const landingSvg = useRef();
  const landingTL = useRef(gsap.timeline({ paused: true }));
  const landingSlides = useRef();

  useEffect(() => {
    initTimelines();
  }, []);

  const addToRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  function initTimelines() {
    landingTL.current
      .from(landingVideo.current, {
        duration: 1.5,
        scale: 3,
        skewX: 30,
      })
      .from(
        landingTitle.current,
        {
          duration: 1,
          y: 65,
          rotate: 8,
          skewX: -50,
          stagger: 0.2,
          ease: Power3.easeOut,
        },
        "-=1"
      )
      .to(
        landingSvg.current,
        {
          strokeDashoffset: 0,
          duration: 3,
          ease: Power3.easeOut,
        },
        "-=1"
      )
      .from(
        landingButton.current,
        {
          duration: 1.5,
          ease: Power3.easeInOut,
          opacity: 0,
          width: 0,
          padding: "20px 0",
        },
        "-=4"
      )
      .to(
        socialMedia.current,
        {
          x: 0,
          duration: 1.2,
          ease: Power3.easeOut,
          stagger: 0.2,
          opacity: 1,
        },
        "-=3"
      )
      .from(
        landingSlides.current.querySelectorAll(".swiper-slide"),
        {
          ease: Power3.easeOut,
          opacity: 0,
          duration: 1,
          x: 50,
          stagger: 0.2,
        },
        "-=3"
      );

    /*     gsap.to(aboutSection.current, {
      y: -1000,
      scrollTrigger: {
        trigger: aboutSection.current,
        scrub: true,
      },
    }); */
  }

  return (
    <>
      <section className={classes.landing}>
        <Header />
        <Loader landingVideoRef={landingVideo} landingTL={landingTL} />

        <div className={classes.backdropGradient} />
        <video
          className={classes.videoBackdrop}
          src="/1.mp4"
          ref={landingVideo}
          muted
          playsInline
          loop
        />
        <div className={classes.landingContent} data-animation="landing-loader">
          <h1>
            <div className={classes.line}>
              <span ref={(el) => addToRefs(el, landingTitle)}>
                2022 Tickets
              </span>
            </div>
            <div className={classes.line}>
              <span ref={(el) => addToRefs(el, landingTitle)}>
                {" "}
                Now Available!
              </span>
            </div>
          </h1>
          <br />
          <p className={classes.landingParagraph}>
            <div className={classes.line}>
              <span ref={(el) => addToRefs(el, landingTitle)}>
                Order your boat party ticket on time
              </span>
            </div>
            <div className={classes.line}>
              <span ref={(el) => addToRefs(el, landingTitle)}>
                to get the early bird prices,
              </span>
            </div>
            <div className={classes.line}>
              <span ref={(el) => addToRefs(el, landingTitle)}>
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
              ref={landingSvg}
              d="M4.85,24c2.24,0,2.24,2,4.47,2s2.24-2,4.48-2,2.24,2,4.48,2,2.24-2,4.47-2,2.24,2,4.48,2,2.24-2,4.47-2,2.24,2,4.48,2,2.25-2,4.49-2,2.24,2,4.48,2"
              transform="translate(-4.85 -23)"
              fill="none"
              stroke="#00e8fc"
              strokeMiterlimit="20"
              strokeWidth="2"
            />
          </svg>
          <button ref={landingButton} className={classes.button}>
            ORDER TICKETS{" "}
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

        <div ref={landingSlides} className={classes.landingBottomContainer}>
          <div className={classes.line}>
            <span ref={(el) => addToRefs(el, landingTitle)}>
              Upcoming events:
            </span>
          </div>
          <Swiper
            spaceBetween={15}
            slidesPerView={3}
            className={classes.swiperContainer}
          >
            <SwiperSlide className={classes.swiperSlide}>
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
            </SwiperSlide>
            <SwiperSlide className={classes.swiperSlide}>
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
            </SwiperSlide>
            <SwiperSlide className={classes.swiperSlide}>
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
            </SwiperSlide>
            <SwiperSlide className={classes.swiperSlide}>
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
            </SwiperSlide>
            <SwiperSlide className={classes.swiperSlide}>
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
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>

          </Swiper>
        </div>
      </section>
      <About reference={aboutSection} />
      <Blog />
      <Gallery /> 
      <Reviews />
      <Footer />
    </>
  );
};

export default IndexPage;
