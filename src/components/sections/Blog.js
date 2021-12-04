import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";
import { gsap, Power3, Sine } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import * as classes from "../../styles/blog.module.css";
gsap.registerPlugin(ScrollTrigger);

const Blog = (props) => {
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
    <section ref={aboutContainer} className={classes.blogSection}>
      <div className="sectionContent">
        <h1>{/* <SplitText copy="Latest news" /> */}</h1>
        <div className={classes.articlesHolder}>
          <div className={classes.article}>
            <div className={classes.articleOverlay} />
            <img src="/gallery/1.jpg" />
            <div className={classes.articleDetails}>
              <h3>Article title</h3>
              <p className={classes.articleDate}>22 July 2022</p>
              <p className={classes.articleSnippet}>
                {" "}
                Lorem ipsum dolor sit amet, con et nonum vulputate velit sed
                diam nonum nib tempor incididunt ut labore et dolore magna
                aliqu...
              </p>
            </div>
          </div>
          <div className={classes.article}>
            <div className={classes.articleOverlay} />
            <img src="/gallery/2.jpg" />
            <div className={classes.articleDetails}>
              <h3>Article title</h3>
              <p className={classes.articleDate}>22 July 2022</p>
              <p className={classes.articleSnippet}>
                {" "}
                Lorem ipsum dolor sit amet, con et nonum vulputate velit sed
                diam nonum nib tempor incididunt ut labore et dolore magna
                aliqu...
              </p>
            </div>
          </div>{" "}
          <div className={classes.article}>
            <div className={classes.articleOverlay} />
            <img src="/gallery/6.jpg" />
            <div className={classes.articleDetails}>
              <h3>Article title</h3>
              <p className={classes.articleDate}>22 July 2022</p>
              <p className={classes.articleSnippet}>
                {" "}
                Lorem ipsum dolor sit amet, con et nonum vulputate velit sed
                diam nonum nib tempor incididunt ut labore et dolore magna
                aliqu...
              </p>
            </div>
          </div>{" "}
          <div className={classes.article}>
            <div className={classes.articleOverlay} />
            <img src="/gallery/4.jpg" />
            <div className={classes.articleDetails}>
              <h3>Article title</h3>
              <p className={classes.articleDate}>22 July 2022</p>
              <p className={classes.articleSnippet}>
                {" "}
                Lorem ipsum dolor sit amet, con et nonum vulputate velit sed
                diam nonum nib tempor incididunt ut labore et dolore magna
                aliqu...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
