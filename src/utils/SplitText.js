import React, { useRef } from "react";
import * as classes from "../styles/splittext.module.css";
import { gsap, Power3, Sine } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SplitText = (props) => {
  const splitWords = useRef([]);

  const addToRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  /*  gsap.from(
    splitWords.current,
    {
      duration: 1,
      y: 65,
      rotate: 8,
      skewX: -50,
      stagger: 0.2,
      ease: Power3.easeOut,
    },
    "-=1"
  ); */

  /*   gsap.to(aboutSection.current, {
    y: -1000,
    scrollTrigger: {
      trigger: aboutSection.current,
      scrub: true,
    },
  });
 */
  return (
    <>
      {props.copy.split(" ").map((char, index) => (
        <div className={classes.line}>
          <span
            ref={(el) => addToRefs(el, splitWords)}
            style={{
              transform: "skewX(0) translateY(0)",
            }}
            aria-hidden="true"
            key={index}
          >
            {char}
          </span>
        </div>
      ))}
    </>
  );
};

export default SplitText;
