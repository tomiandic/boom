import React, { useEffect, useRef, useState } from "react";
import * as classes from "../styles/landing.module.css";
import Loader from "../components/Loader";
import { gsap, Power3, Sine } from "gsap";

import Header from "../components/Header";

//TODO: loader component needs to stop animations when unmounted which does not work

import "../styles/global.css";
// markup

const IndexPage = () => {
  const [pageIsLoaded, setPageIsLoaded] = useState(false);

  const socialMedia = useRef([]);
  const landingVideo = useRef();
  const landingTitle = useRef([]);
  const landingButton = useRef();
  const landingSvg = useRef();
  const landingTL = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    initTimelines();
    setTimeout(() => {
      setPageIsLoaded(true);
      landingTL.current.play();
    }, 10000);
  }, []);

  const addToRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  function initTimelines() {
    landingTL.current
      .from(landingTitle.current, {
        duration: 1,
        delay: 1.5,
        y: 65,
        rotate: 8,
        skewX: -50,
        stagger: 0.2,
        ease: Power3.easeOut,
      })
      .to(
        landingSvg.current,
        {
          strokeDashoffset: 0,
          duration: 4,
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
        "-=3.8"
      )
      .to(
        socialMedia.current,
        {
          x: 0,
          ease: Power3.easeOut,
          stagger: 0.1,
        },
        "-=.8"
      );
  }

  return (
    <section className={classes.landing}>
      <Header />
      <Loader landingVideoRef={landingVideo} pageIsLoaded={pageIsLoaded} />

      <div className={classes.backdropGradient} />
      <video
        className={classes.videoBackdrop}
        src="/1.mp4"
        ref={landingVideo}
        muted
        playsInline
        loop
        autoPlay
      />
      <div className={classes.landingContent} data-animation="landing-loader">
        <h1>
          <div className={classes.line}>
            <span ref={(el) => addToRefs(el, landingTitle)}>2022 Tickets</span>
          </div>
          <div className={classes.line}>
            <span ref={(el) => addToRefs(el, landingTitle)}>
              {" "}
              Now Available!
            </span>
          </div>
        </h1>
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
        <div className={classes.socialMediaContainer}>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.instagram.com/instaboom.pula/?hl=hr"
            ref={(el) => addToRefs(el, socialMedia)}
          >
            <img src="icons/instagram-white.svg" />
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.facebook.com/BOOMeventsPula/"
            ref={(el) => addToRefs(el, socialMedia)}
          >
            <img src="icons/facebook-white.svg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndexPage;
