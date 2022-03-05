import React, { useEffect, useRef, useState } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "../Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import * as classes from "../../styles/landing.module.css";
import SwiperCore, {
    FreeMode
  } from 'swiper';

SwiperCore.use([FreeMode]);
gsap.registerPlugin(ScrollTrigger);


const Landing = () => {

    const navPrev = useRef();
    const navNext = useRef();
    const landingContainer = useRef();
    const landingVideo = useRef();
    const slidesContainer = useRef();
    const landingTL = useRef(gsap.timeline({ paused: true }));

    const [loaderShowed, setLoaderShowed] = useState(false);
  
    useEffect(() => {
      initTimelines();
      whichSizeVideo();
      checkIfLoaderShowed()
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

    function whichSizeVideo() {
      var windowWidth = window.innerWidth;
      if (windowWidth > 800 ) {
        landingVideo.current.src = "/1.mp4";
      } 
      landingVideo.current.playbackRate = .85;
    }

    function getCookie(cname) {
      let name = cname + "=";
      let ca = document.cookie.split(';');
      for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

    function checkIfLoaderShowed() {
      let isShowed = getCookie("loaderShowed")
      if(isShowed){
        setLoaderShowed(true);
        landingTL.current.play();
      }
    }

    return(

<section ref={landingContainer} className={classes.landing}>

  {
    !loaderShowed&&<Loader landingVideoRef={landingVideo} landingTL={landingTL} />
  }

<div className={classes.backdropGradient}>
  <video
    className={classes.videoBackdrop}
    src="/mobile.mp4"
    ref={landingVideo}
    muted
    playsInline
    loop
    autoPlay
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
      1500: {
        slidesPerView: 2.6,
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
    <SwiperSlide><div className={classes.swiperSlide}><div className={classes.swiperButton}>Show all events    <svg
      style={{ marginLeft: 10 }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <polygon points="11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707" />
    </svg></div></div></SwiperSlide>
    <SwiperSlide></SwiperSlide>
  </Swiper>
</div>
</section>)}

export default Landing;