import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";
import { gsap, Power3, Sine } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import * as classes from "../../styles/about.module.css";
gsap.registerPlugin(ScrollTrigger);

const About = (props) => {
  const aboutContainer = useRef();

  useEffect(() => {
    console.log(aboutContainer.current.querySelector("h2 > div > span"));
    let DOM = {
      title: {
        element: aboutContainer.current.querySelector("h2"),
        lines: aboutContainer.current.querySelectorAll("h2 > div > span"),
      },
      paragraph: aboutContainer.current.querySelector("p"),
      image: aboutContainer.current.querySelectorAll("#aboutImage img"),
    };
    console.log(aboutContainer.current);
    gsap.from(DOM.title.lines, {
      yPercent: 120,
      ease: Power3.easeOut,
      stagger: 0.15,
      scrollTrigger: {
        trigger: aboutContainer.current,
        start: "top center", //when the top of the trigger hits bottom of vw
      },
    });

    ScrollTrigger.batch(DOM.image, {
      interval: 0.1,
      batchMax: 1,
      start: "top center",
      onEnter: (batch) =>
        gsap.to(batch, {
          duration: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }),
    });
    /*    gsap.from(DOM.image, {
      clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
      scrollTrigger: {
        trigger: aboutContainer.current,
        start: "center bottom", //when the top of the trigger hits bottom of vw
        end: "bottom center",
        scrub: true, //
      },
    }); */
  }, []);

  return (
    <section ref={aboutContainer} className={classes.aboutSection}>
      <div className={classes.sectionContainer}>
        <h2>
          <div className={classes.line}>
            <span>
              {" "}
              Enjoy your <span>summer</span>
            </span>
          </div>
          <div className={classes.line}>
            <span> with Boom</span>
          </div>
        </h2>
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
      <div className={classes.aboutImagesHolder}>
        <div id="aboutImage" className={classes.imageHolder}>
          <img className={classes.desktopImage} src="/about2.jpg" />
          <img className={classes.mobileImage} src="/about.jpg" />
          <div className={classes.aboutPara}>
            <h3 className={classes.largeTitle}>Boat parties</h3>
            <p className={classes.paragraph}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              malesuada id ex nec rutrum. Donec vitae metus sollicitudin,
              pharetra mauris in, venenatis mi. Nulla viverra augue purus, ac
              commodo orci porttitor rutrum. Nam sodales, massa a pharetra
              imperdiet, lorem metus facilisis nibh, id dignissim ligula neque
              eu ante. Aliquam lacinia, enim quis semper euismod, risus ipsum
              ullamcorper quam, quis vulputate mauris lacus pulvinar mauris.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              malesuada id ex nec rutrum. Donec vitae metus sollicitudin,
              pharetra mauris in, venenatis mi. Nulla viverra augue purus, ac
              commodo orci porttitor rutrum. Nam sodales, massa a pharetra
              imperdiet, lorem metus facilisis nibh, id dignissim ligula neque
              eu ante. Aliquam lacinia, enim quis semper euismod, risus ipsum
              ullamcorper quam, quis vulputate mauris lacus pulvinar mauris.
            </p>
          </div>
        </div>
        <div id="aboutImage" className={classes.imageHolder}>
          <img className={classes.desktopImage} src="/about3.jpg" />
          <img className={classes.mobileImage} src="/about.jpg" />
          <p className={classes.largeTitle}>Other events</p>
        </div>
      </div>
    </section>
  );
};
export default About;
