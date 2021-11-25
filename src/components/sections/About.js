import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";
import { gsap, Power3, Sine } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SplitText from "../../utils/SplitText";

import * as classes from "../../styles/about.module.css";
gsap.registerPlugin(ScrollTrigger);

const About = (props) => {
  const aboutContainer = useRef();

  useEffect(() => {
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
  }, []);

  return (
    <section ref={aboutContainer} className={classes.aboutSection}>
      <div className={classes.sectionContainer}>
        <h1>
          <SplitText copy="Enjoy your summer with Boom" />
        </h1>
        {/*  Enjoy your <span>summer</span> with us */}
        {/*  </h1> */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          malesuada id ex nec rutrum. Donec vitae metus sollicitudin, pharetra
          mauris in, venenatis mi. Nulla viverra augue purus, ac commodo orci
          porttitor rutrum. Nam sodales, massa a pharetra imperdiet, lorem metus
          facilisis nibh, id dignissim ligula neque eu ante. Aliquam lacinia,
          enim quis semper euismod, risus ipsum ullamcorper quam, quis vulputate
          mauris lacus pulvinar mauris.
        </p>
      </div>
      <div id="aboutImage" className={classes.imageHolder}>
        <img className={classes.desktopImage} src="/about2.jpg" />
        <img className={classes.mobileImage} src="/about.jpg" />
      </div>
      <div className={classes.aboutBackdrop}></div>
    </section>
  );
};
export default About;
