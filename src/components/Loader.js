import React, { useEffect, useRef } from "react";
import { gsap, Power3, Sine } from "gsap";
import * as classes from "../styles/loader.module.css";

const Loader = ({ pageIsLoaded, landingVideoRef }) => {
  const loaderBottomPicture = useRef(null);
  const loaderLogo = useRef([]);
  const circles = useRef([]);
  const loaderTransitionDiv = useRef();
  const loaderContainer = useRef();
  var loaderTL = useRef(gsap.timeline());
  const hideLoaderTl = gsap.timeline();

  useEffect(() => {
    loaderTL.current
      .to(loaderLogo.current[1], {
        ease: Power3.easeInOut,
        delay: 0.5,
        opacity: 1,
        y: -10,
        duration: 1,
      })
      .from(
        loaderBottomPicture.current,
        {
          ease: Power3.easeInOut,
          opacity: 0,
          scale: 2,
          rotate: 10,
          bottom: -300,
          duration: 3,
        },
        "-=.5"
      )
      .to(circles.current, {
        scale: 1.5,
        stagger: 0.1,
        ease: Power3.easeOut,
      })

      .to(
        circles.current,
        {
          stagger: 0.2,
          scale: 1.6,
          yoyo: true,
          repeat: -1,
          ease: Power3.easeOut,
        },
        "-=.3"
      );
    /*  .to(
        loaderLogo.current[1],
        {
          delay: 1,
          ease: Sine.easeInOut,
          opacity: 1,
          duration: 1,
          repeat: -1,
          yoyo: true,
        },
        "-=2.5"
      )
      .to(loaderLogo.current[1], {
        ease: Sine.easeInOut,
        opacity: 0,
        duration: 1,
        repeat: -1,
        yoyo: true,
      }); */
  }, []);

  useEffect(() => {
    if (pageIsLoaded) {
      loaderTL.current.pause();
      landingVideoRef.current.play();
      hideLoaderTl
        .to(loaderTransitionDiv.current, {
          ease: Power3.easeInOut,
          height: "100%",
          duration: 0.9,
        })
        .to(loaderTransitionDiv.current, {
          ease: Power3.easeInOut,
          height: "0%",
          duration: 0.9,
          bottom: "unset",
          top: 0,
        })
        .to(
          loaderContainer.current,
          {
            ease: Power3.easeInOut,
            height: "0%",
            duration: 0.7,
            bottom: "unset",
            top: 0,
          },
          "-=1"
        );
    }
  }, [pageIsLoaded]);

  const addToRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  return (
    <div ref={loaderContainer} className={classes.landingLoader}>
      <img
        preload="true"
        ref={(el) => addToRefs(el, loaderLogo)}
        className={classes.loaderLogo}
        src="/boom_gray.svg"
      />
      <img
        preload="true"
        ref={(el) => addToRefs(el, loaderLogo)}
        className={classes.loaderLogo}
        style={{ transform: "translateY(-10px)" }}
        src="/boom_final_black.svg"
      />
      <img
        preload="true"
        ref={loaderBottomPicture}
        className={classes.loadingPic}
        src="/loading-pic.png"
      />
      <div ref={loaderTransitionDiv} className={classes.loaderTransition}></div>
      {Array.from(Array(5).keys()).map((el) => (
        <div className={classes.circle} ref={(el) => addToRefs(el, circles)}>
          {" "}
        </div>
      ))}
    </div>
  );
};

export default Loader;
