import React, { useEffect, useRef } from "react";
import { gsap, Power3, Sine } from "gsap";
import * as classes from "../styles/loader.module.css";

const Loader = ({ landingTL, landingVideoRef }) => {
  const circles = useRef();
  const loaderContainer = useRef();
  const strokeLogo = useRef([]);
  const strokeLogoPart = useRef([]);
  var loaderTL = useRef(gsap.timeline());
  useEffect(() => {
  landingVideoRef.current.playbackRate = .9;

    loaderTL.current
      .to(strokeLogo.current, {
        strokeDashoffset: 0,
        strokeWidth: 40,
        duration: 2,
        stagger: 0.2,
        ease: Power3.easeInOut,
        stroke: "#fff",
      })
      .to(
        strokeLogoPart.current,
        {
          opacity: 1,
          duration: 1,
          ease: Power3.easeOut,
          onComplete: () => {
            setTimeout(()=>{console.log("start video"); console.log(landingVideoRef.current); landingVideoRef.current.play()}, 800);
          }
        },
        "-=.8"
      )
      .to(circles.current, {
        duration: 1,
        scale: 1.5,
        ease: Power3.easeInOut,
        onComplete: () => {
          landingTL.current.play();
        },
      })

      .to(
        loaderContainer.current,
        {
          duration: 1.5,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          ease: Power3.easeOut,
          onComplete: () => loaderTL.current.pause(),
        },
        "-=.3"
      );
  }, []);

  const addToRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  }; 

  return (
    <div ref={loaderContainer} className={classes.landingLoader}>
      <svg
        className={classes.loaderLogo}
        x="0px"
        y="0px"
        viewBox="0 0 1080 397"
        enableBackground="new 0 0 1080 397"
      >
        <path
          fill="none"
          stroke="#161616"
          strokeDashoffset="350"
          strokeDasharray="350"
          ref={(el) => addToRefs(el, strokeLogo)}
          strokeWidth="144"
          d="M125.2,132.1H48V56.4h77.3c20.9,0,37.9,16.9,37.9,37.9l0,0
	C163.1,115.1,146.1,132.1,125.2,132.1z"
        />
        <path
          fill="none"
          stroke="#111111"
          strokeDashoffset="360"
          strokeDasharray="360"
          ref={(el) => addToRefs(el, strokeLogo)}
          strokeWidth="144"
          d="M129.5,208.1H48v-75.7h81.6c20.9,0,37.9,16.9,37.9,37.9l0,0
	C167.4,191.1,150.5,208.1,129.5,208.1z"
        />
        <circle
          fill="none"
          stroke="#161616"
          strokeDashoffset="465"
          strokeDasharray="465"
          strokeWidth="148"
          ref={(el) => addToRefs(el, strokeLogo)}
          cx="301.7"
          cy="131.3"
          r="73.7"
        />
        <circle
          fill="none"
          stroke="#161616"
          strokeDashoffset="465"
          strokeDasharray="465"
          strokeWidth="148"
          ref={(el) => addToRefs(el, strokeLogo)}
          cx="513.1"
          cy="130.2"
          r="73.7"
        />
        <line
          fill="none"
          stroke="#111111"
          x1="605.3"
          y1="174.3"
          x2="527.9"
          y2="231.9"
          strokeDashoffset="105"
          strokeDasharray="105"
          strokeWidth="148"
          ref={(el) => addToRefs(el, strokeLogo)}
        />
        <path
          fill="none"
          stroke="#000000"
          d="M579.7,226.5"
          strokeDashoffset="5"
          strokeDasharray="5"
          strokeWidth="148"
          ref={(el) => addToRefs(el, strokeLogo)}
        />
        <path
          fill="none"
          stroke="#161616"
          strokeDashoffset="1160"
          strokeDasharray="1160"
          strokeWidth="148"
          ref={(el) => addToRefs(el, strokeLogo)}
          d="M950.1,216.5h-33c-18.8,0-34-15.6-34-34.9V85.2c0-19.3-15.2-34.9-34-34.9
	h-6c-18.8,0-34,15.6-34,34.9v96.4c0,19.3-15.2,34.9-34,34.9h0c-18.8,0-34-15.6-34-34.9V88.2c0-19.3-15.2-34.9-34-34.9h-7
	c-18.8,0-34,15.6-34,34.9v233.9c0,19.3-15.2,34.9-34,34.9h-5c-18.8,0-34-15.6-34-34.9V246c0-3.6-1.1-7-3.2-9.9l-3.5-4.9"
        />
        <g style={{ opacity: 0 }} ref={(el) => addToRefs(el, strokeLogoPart)}>
          <path
            fill="#fff"
            d="M42.5,322c-3.4,0-6.5-0.8-9.2-2.4c-2.7-1.6-5-3.8-6.6-6.4c-1.6-2.6-2.4-5.7-2.4-9.1c0-2.5,0.6-4.9,1.7-7.2
		c1.1-2.3,2.6-4.1,4.5-5.7c-1.9-1.6-3.3-3.4-4.3-5.6c-1-2.2-1.6-4.4-1.6-6.8c0-3.3,0.8-6.3,2.4-8.9c1.6-2.6,3.8-4.7,6.5-6.2
		s5.7-2.3,9-2.3H68v12.2l-23.4-0.1c-1.1,0-2.1,0.3-3,0.8c-0.9,0.6-1.7,1.2-2.2,2.1c-0.6,0.8-0.8,1.9-0.8,3s0.3,2.1,0.8,3
		c0.6,0.9,1.3,1.6,2.2,2.1c0.9,0.5,2,0.8,3,0.8h20.3v12.1H45.1c-1.2,0-2.4,0.3-3.3,0.8c-0.9,0.6-1.8,1.3-2.4,2.3s-0.8,2-0.8,3.2
		c0,1.1,0.3,2.2,0.8,3.2c0.6,0.9,1.3,1.7,2.4,2.2c0.9,0.6,2.1,0.8,3.3,0.8h22.9v12.2L42.5,322L42.5,322z"
          />
          <path
            fill="#fff"
            d="M119.4,323c-2.8,0-5.4-0.7-7.6-2s-3.9-3.3-4.8-6.1l-18.5-53.6h15.6l14,46.9c0.1,0.4,0.3,0.6,0.5,0.8
		c0.2,0.2,0.5,0.3,0.8,0.3s0.6-0.1,0.8-0.3c0.2-0.2,0.4-0.5,0.5-0.8l14.3-46.9h15.3L132,314.9c-0.9,2.7-2.6,4.7-4.8,6
		C124.8,322.3,122.3,323,119.4,323z"
          />
          <path
            fill="#fff"
            d="M188.9,322c-3.4,0-6.5-0.8-9.2-2.4c-2.7-1.6-5-3.8-6.6-6.4c-1.6-2.6-2.4-5.7-2.4-9.1c0-2.5,0.6-4.9,1.7-7.2
		c1.1-2.3,2.6-4.1,4.5-5.7c-1.9-1.6-3.3-3.4-4.3-5.6c-1-2.2-1.6-4.4-1.6-6.8c0-3.3,0.8-6.3,2.4-8.9s3.8-4.7,6.5-6.2s5.7-2.3,9-2.3
		h25.5v12.2l-23.3-0.1c-1.1,0-2.1,0.3-3,0.8c-0.9,0.6-1.7,1.2-2.2,2.1s-0.8,1.9-0.8,3s0.3,2.1,0.8,3s1.3,1.6,2.2,2.1
		c0.9,0.5,2,0.8,3,0.8h20.3v12.1h-20.1c-1.2,0-2.4,0.3-3.3,0.8c-0.9,0.6-1.8,1.3-2.4,2.3c-0.6,0.9-0.8,2-0.8,3.2
		c0,1.1,0.3,2.2,0.8,3.2c0.6,0.9,1.3,1.7,2.4,2.2c0.9,0.6,2.1,0.8,3.3,0.8h22.9v12.2L188.9,322L188.9,322z"
          />
          <path
            fill="#fff"
            d="M282.9,323c-3.7,0-6.9-0.8-9.8-2.4c-2.9-1.6-5.2-3.8-6.9-6.6c-1.7-2.8-2.5-6-2.5-9.6V278
		c0-0.9-0.2-1.8-0.7-2.5s-1-1.3-1.8-1.8c-0.8-0.5-1.6-0.7-2.5-0.7s-1.8,0.2-2.5,0.7c-0.8,0.5-1.3,1-1.8,1.8
		c-0.5,0.8-0.7,1.6-0.7,2.5v44.1h-14.2v-43c0-3.7,0.8-6.9,2.4-9.6c1.6-2.7,4-5,6.9-6.6c2.9-1.6,6.2-2.4,9.8-2.4c3.7,0,7,0.8,9.9,2.4
		s5.2,3.8,6.9,6.6c1.7,2.8,2.5,5.9,2.5,9.6v26.5c0,0.9,0.2,1.8,0.7,2.5c0.5,0.8,1,1.4,1.8,1.8c0.8,0.5,1.5,0.7,2.4,0.7
		c0.9,0,1.8-0.2,2.5-0.7s1.4-1,1.9-1.8c0.5-0.8,0.7-1.6,0.7-2.5v-44.1h14.1v43c0,3.6-0.8,6.8-2.5,9.6c-1.7,2.8-4,5-6.9,6.6
		C289.8,322.2,286.5,323,282.9,323z"
          />
          <path
            fill="#fff"
            d="M360.5,322c-3.7,0-7-0.8-9.7-2.4c-2.8-1.6-5-3.9-6.6-6.6c-1.6-2.7-2.4-5.8-2.4-9.2v-30.1h-16.5v-12.1h47.4
		v12.1h-16.4v31.4c0,1.3,0.5,2.4,1.4,3.5c0.9,0.9,2.1,1.5,3.4,1.5h4.8v12.1L360.5,322L360.5,322z"
          />
          <path
            fill="#fff"
            d="M396.9,322v-12.1h25.9c1.1,0,2.2-0.3,3.1-0.8s1.7-1.3,2.2-2.3c0.6-0.9,0.8-1.9,0.8-3c0-1.1-0.3-2.2-0.8-3.1
		c-0.6-0.9-1.3-1.7-2.2-2.3c-0.9-0.6-2-0.8-3.1-0.8h-9.3c-3.5,0-6.7-0.8-9.6-2.2s-5.2-3.5-6.9-6.1c-1.7-2.6-2.5-5.8-2.5-9.6
		c0-3.7,0.8-6.9,2.4-9.6c1.6-2.7,3.8-4.8,6.6-6.4c2.7-1.5,5.8-2.3,9.1-2.3h26.7v12.1h-25c-1,0-2,0.3-2.8,0.8c-0.8,0.6-1.5,1.2-2,2.1
		s-0.7,1.8-0.7,2.8c0,1,0.2,2,0.7,2.8s1.1,1.5,2,2.1c0.8,0.6,1.8,0.8,2.8,0.8h9.8c3.9,0,7.3,0.8,10.1,2.2c2.8,1.5,5.1,3.5,6.7,6.1
		c1.6,2.6,2.4,5.7,2.4,9.2c0,4.1-0.8,7.7-2.4,10.6c-1.6,2.9-3.9,5.2-6.6,6.7c-2.7,1.5-5.8,2.3-9.1,2.3L396.9,322L396.9,322z"
          />
        </g>
        <g style={{ opacity: 0 }} ref={(el) => addToRefs(el, strokeLogoPart)}>
          <path
            fill="#FF7101"
            d="M1020.9,238.6l14.1,1l-8.2-10.4l34.7-16.2l-36.4-15.1l7.9-11.8l-13.1,1.9l3.3-38.1l-31.3,24l-6.2-12.7
		l-4.9,12.3l-31.4-21.9l5.1,39.1l-14.1-1l8.2,10.4L914,216.3l36.4,15.1l-7.9,11.8l13.1-1.9l-3.3,38.2l31.3-24l6.2,12.7l4.9-12.3
		l31.4,21.9L1020.9,238.6z M1008.8,249.4L988.2,235l-20,15.3l2.2-25.1l-23.3-9.6l22.8-10.7l-3.3-25l20.7,14.4l20-15.3l-2.2,25.1
		l23.3,9.6l-22.8,10.7L1008.8,249.4z"
          />
          <polygon
            fill="#FFFFFF"
            points="1005.6,224.4 1008.8,249.4 988.2,235 968.2,250.3 970.4,225.2 947.1,215.5 969.9,204.9 
		966.6,179.9 987.3,194.3 1007.3,179 1005.1,204.1 1028.4,213.7 	"
          />
        </g>
      </svg>

      <div className={classes.circle} ref={circles}>
        {" "}
      </div>
    </div>
  );
};

export default Loader;
