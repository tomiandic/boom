import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";
import { gsap, Power3, Sine } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import * as classes from "../../styles/about.module.css";
gsap.registerPlugin(ScrollTrigger);

const About = (props) => {
  const aboutContainer = useRef();

  useEffect(() => {
    gsap.from(aboutContainer.current.querySelector("h1"), {
      y: 200,
      duration: 1.5,
      ease: Power3.easeOut,
      opacity: 0,
      skewX: 40,
      scrollTrigger: {
        trigger: aboutContainer.current,
        start: "center bottom", //when the top of the trigger hits bottom of vw
      },
    });

    gsap.from(aboutContainer.current.querySelector("p"), {
      y: 200,
      duration: 1.5,
      ease: Power3.easeOut,
      opacity: 0,
      scrollTrigger: {
        trigger: aboutContainer.current,
        start: "center bottom", //when the top of the trigger hits bottom of vw
      },
    });

    gsap.from(aboutContainer.current.querySelector("img"), {
      opacity: 0,
      scrollTrigger: {
        trigger: aboutContainer.current,
        start: "center center", //when the top of the trigger hits bottom of vw
        end: "+=400",
        scrub: true, //
      },
    });
  }, []);

  return (
    <section className={classes.aboutSection} ref={props.reference}>
      <div ref={aboutContainer} className={classes.sectionContainer}>
        <h1>
          Enjoy your <span>summer</span> with us
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          malesuada id ex nec rutrum. Donec vitae metus sollicitudin, pharetra
          mauris in, venenatis mi. Nulla viverra augue purus, ac commodo orci
          porttitor rutrum. Nam sodales, massa a pharetra imperdiet, lorem metus
          facilisis nibh, id dignissim ligula neque eu ante. Aliquam lacinia,
          enim quis semper euismod, risus ipsum ullamcorper quam, quis vulputate
          mauris lacus pulvinar mauris. Aenean sem nisi, ultricies quis quam
          consequat, dignissim faucibus mauris. Etiam ac nibh lectus. Vivamus
          vehicula suscipit enim, eu varius leo tristique quis. Quisque enim
          quam, hendrerit vehicula leo non, dapibus auctor nibh. Pellentesque at
          lobortis sapien. Pellentesque a tempor nunc. Donec quam nisl,
          porttitor et urna.
        </p>
        <img src="/about2.jpg" />
      </div>
    </section>
  );
};
export default About;
