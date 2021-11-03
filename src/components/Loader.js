import React, { useEffect, useRef } from "react";
import { gsap, Power3, Sine } from "gsap";
import * as classes from "../styles/loader.module.css";

const Loader = ({ pageIsLoaded, landingVideoRef }) => {
  const loaderLogo = useRef();
  const circles = useRef([]);
  const loaderTransitionDiv = useRef();
  const loaderContainer = useRef();
  var loaderTL = useRef(gsap.timeline());
  const hideLoaderTl = gsap.timeline();

  useEffect(() => {
    loaderTL.current
      .to(loaderLogo.current, {
        ease: Power3.easeInOut,
        delay: 0.5,
        opacity: 1,
        skewX: 0,
        translateY: 0,
        scaleY: 1,
        duration: 1.3,
      })
      .to(
        circles.current,
        {
          scale: 1.5,
          stagger: 0.15,
          ease: Power3.easeInOut,
        },
        "-=.5"
      )
      .to(
        circles.current,
        {
          stagger: 0.2,
          scale: 1.6,
          yoyo: true,
          repeat: -1,
          borderColor: "#ff7b00",
          ease: Power3.easeOut,
        },
        "-=.3"
      );
  }, []);

  useEffect(() => {
    if (pageIsLoaded) {
      landingVideoRef.current.play();
      hideLoaderTl
      .to(loaderContainer.current, {
        duration: 1,
        "clip-path": "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        ease: Power3.easeOut,
      })
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
        ref={loaderLogo}
        className={classes.loaderLogo}
        src="/boom_final_black.svg"
      />
      {/*   <img
        preload="true"
        ref={loaderBottomPicture}
        className={classes.loadingPic}
        src="/loading-pic.png"
      /> */}
      <div ref={loaderTransitionDiv} className={classes.loaderTransition}></div>
      {Array.from(Array(4).keys()).map((el) => (
        <div className={classes.circle} ref={(el) => addToRefs(el, circles)}>
          {" "}
        </div>
      ))}
    </div>
  );
};

export default Loader;
