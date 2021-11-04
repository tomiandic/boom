import React, { useEffect, useRef } from "react";
import { gsap, Power3, Sine } from "gsap";
import * as classes from "../styles/loader.module.css";

const Loader = ({ pageIsLoaded, landingVideoRef }) => {
  const loaderLogo = useRef();
  const circles = useRef([]);
  const loaderTransitionDiv = useRef();
  const loaderContainer = useRef();
  const strokeLogo = useRef([]);

  var loaderTL = useRef(gsap.timeline());
  const hideLoaderTl = gsap.timeline();

  useEffect(() => {
    console.log(strokeLogo.current.map(item => console.log(item.getTotalLength())))
    loaderTL.current
    .to(
      strokeLogo.current,
      {
        strokeDashoffset: 0,
        strokeWidth: 40,
        duration: 2,
        stagger: .3,
        ease: Power3.easeInOut,
        stroke: "#000"
      },
      "-=1"
    )
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
        "-=2.8"
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
        "-=2"
      ); 
  }, []);

  useEffect(() => {
    if (pageIsLoaded) {
      landingVideoRef.current.play();
      hideLoaderTl.to(loaderContainer.current, {
        duration: 1.5,
        "clip-path": "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: Power3.easeOut,
      });
    }
  }, [pageIsLoaded]);

  const addToRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  return (
    <div ref={loaderContainer} className={classes.landingLoader}>
      <svg version="1.1" className={classes.loaderLogo} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 1080 397" style={{ enableBackground: "new 0 0 1080 397;" }}>
        <path strokeDashoffset="350" strokeDasharray="350" ref={(el) => addToRefs(el, strokeLogo)} fill="none" stroke="#000000" strokeWidth="8" strokeMiterlimit="10" d="M174.2,132.1H97V56.4h77.3c20.9,0,37.9,16.9,37.9,37.9v0C212.1,115.1,195.1,132.1,174.2,132.1z" />
        <path strokeDashoffset="358" strokeDasharray="358" ref={(el) => addToRefs(el, strokeLogo)} fill="none" stroke="#000000" strokeWidth="8" strokeMiterlimit="10" d="M178.5,208.1H97v-75.7h81.6c20.9,0,37.9,16.9,37.9,37.9v0C216.4,191.1,199.5,208.1,178.5,208.1z" />
        <circle fill="none" stroke="#000000" strokeDashoffset="465" strokeDasharray="465"  strokeWidth="8" ref={(el) => addToRefs(el, strokeLogo)}  strokeMiterlimit="10" cx="350.7" cy="131.3" r="73.7" />
        <circle fill="none" stroke="#000000" strokeDashoffset="465" strokeDasharray="465"  strokeWidth="8" ref={(el) => addToRefs(el, strokeLogo)}  strokeMiterlimit="10" cx="562.1" cy="130.2" r="73.7" />
        <line fill="none" stroke="#000000" strokeDashoffset="162" strokeDasharray="162"  strokeWidth="8" ref={(el) => addToRefs(el, strokeLogo)} strokeMiterlimit="10" x1="654.3" y1="174.3" x2="576.9" y2="231.9" />
        <path strokeDashoffset="80" strokeDasharray="90" ref={(el) => addToRefs(el, strokeLogo)} fill="none" stroke="#000000" strokeWidth="8" strokeMiterlimit="10" d="M628.7,226.5" />
        <path strokeDashoffset="1159" strokeDasharray="1159" ref={(el) => addToRefs(el, strokeLogo)} fill="none" stroke="#000000" strokeWidth="8" strokeLinejoint="bevel" strokeMiterlimit="10" d="M632,223.4c1.3,2.3,1.3,3.3,1.8,5.1s0.4,4.3,0.4,4.3v4.4c0.2,6.3,0,84.6,0,84.6s0.6,39.7,37.7,39.7
	c37.1,0,39.5-39.6,40-43c0.4-3,0.1-188.2,0-228.6c0-7.1,2.2-14.1,6.4-19.8c5.8-7.7,16.1-16.3,33.5-16.3c8.6,0,16.4,1.8,21.7,4.5
	c11.2,5.6,18.2,17.2,18.2,29.8v95c0,20.1,16.3,36.4,36.4,36.4h0c20.1,0,36.4-16.3,36.4-36.4V92.4c0-21.8,17.6-39.4,39.4-39.4h0
	c21.8,0,39.4,17.6,39.4,39.4v73.7c0,22.8,18.5,41.3,41.3,41.3h23.5"/>
      </svg>
      {/* <img
        preload="true"
        ref={loaderLogo}
        className={classes.loaderLogo}
        src="/boom_final_black.svg"
      /> */}
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
