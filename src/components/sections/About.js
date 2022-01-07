import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";
import { gsap, Power3, Sine } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutSliderData } from "../../data/data";
import { TimelineLite } from "gsap/all";

import * as classes from "../../styles/about.module.css";
gsap.registerPlugin(ScrollTrigger);

const About = (props) => {

  const [sliderIndex, setSliderIndex] = useState(0);
  const [isReversed, setIsReversed] = useState(false);
  const [nextIndex, setNextIndex] = useState(1);

  const sliderTL = useRef(null);

  const switchSlide = () => {
    sliderTL.current.reverse();
  }

  const setNewSlide = () => {
    console.log("set next", nextIndex)
    setSliderIndex(nextIndex)
  }

  useEffect(()=> {
    if(isReversed){
      setSliderIndex(nextIndex);
      setIsReversed(false);
    }
  }, [isReversed])

  useEffect(() => {
    if(!sliderTL.current)return;
    sliderTL.current.play(); 
    let totalSlides = aboutSliderData.length;
    let nIdx = sliderIndex + 1 > totalSlides - 1 ? 0 : sliderIndex + 1;
    console.log("set next index", nIdx);
    setNextIndex(nIdx);
    /* nextIndex.current = nIdx; */
  }, [sliderIndex])

  const aboutContainer = useRef();
  useEffect(() => {
    let DOM = {
      title: {
        element: aboutContainer.current.querySelector("h2"),
        lines: aboutContainer.current.querySelectorAll("h2 > div > span"),
      },
      slideParagraph: aboutContainer.current.querySelector("#sliderPar"),
      image: aboutContainer.current.querySelectorAll("#aboutImage img"),
      slideTitle: aboutContainer.current.querySelector("h3"),
      slideHandle: aboutContainer.current.querySelector("#slideHandleTitle")
    };
    /* gsap.from(DOM.title.lines, {
      yPercent: 120,
      ease: Power3.easeOut,
      stagger: 0.15,
      scrollTrigger: {
        trigger: aboutContainer.current,
        start: "top center", //when the top of the trigger hits bottom of vw
      },
    }); */

 /*    ScrollTrigger.batch(DOM.image, {
      interval: 0.1,
      batchMax: 1,
      start: "top center",
      onEnter: (batch) =>
        gsap.to(batch, {
          duration: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }),
    }); */
    /*    gsap.from(DOM.image, {
      clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
      scrollTrigger: {
        trigger: aboutContainer.current,
        start: "center bottom", //when the top of the trigger hits bottom of vw
        end: "bottom center",
        scrub: true, //
      },
    }); */

    sliderTL.current = gsap.timeline({play: true, onReverseComplete: () => setIsReversed(true)})
      .to(DOM.image,{
        duration: .7,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: Power3.easeIn
      })
      .from(DOM.slideTitle, {
        duration: 1,
        opacity: 0,
      }, "-=.7")
      .from(DOM.slideParagraph, {
        duration: 1,
        opacity: 0,
      }, "-=1")
      .from(DOM.slideHandle, {
        duration: .5,
        opacity: 0,
      }, "-=1")

  }, []);
  console.log(nextIndex)
  return (
    <section ref={aboutContainer} className={classes.aboutSection}>
      <div className={classes.aboutTopHolder}>
        <div className={classes.sectionContainer}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            malesuada id ex nec rutrum. Donec vitae metus sollicitudin, pharetra
            mauris in, venenatis mi. Nulla viverra augue purus, ac commodo orci
            porttitor rutrum. Nam sodales, massa a pharetra imperdiet, lorem metus
            facilisis nibh, id dignissim ligula neque eu ante. Aliquam lacinia,
            enim quis semper euismod, risus ipsum ullamcorper quam, quis vulputate
            mauris lacus pulvinar mauris.
          </p>
          <h2>
            Enjoy your <span>summer</span> <br />with Boom
          </h2>
        </div>
        <img className={classes.seaDeco} src="/sea.png"></img>

      </div>
      <div className={classes.contentHolder}>
        <div className={classes.aboutSliderHolder}>
          <div id="aboutImage" className={classes.imageHolder}>
            <img className={classes.desktopImage} src={aboutSliderData[sliderIndex].imageSrc} />
          </div>
          <div className={classes.aboutPara}>
            <h5 className={classes.largeTitleNum}>{aboutSliderData[sliderIndex].number}</h5>
            <h3 className={classes.largeTitle}>{aboutSliderData[sliderIndex].title}</h3>
            <div id="sliderPar" className={classes.paraHolder}>
              <div className={classes.paraDeco}></div>
              <div style={{ marginLeft: 10 }}>
                <p className={classes.paragraph}>
                  {aboutSliderData[sliderIndex].text}
                </p>
                <button className={classes.sectionButton}>{aboutSliderData[sliderIndex].buttonText}<span></span></button>
              </div>
            </div>
          </div>
          {/*   <div id="aboutImage" className={classes.imageHolder}>
          <img className={classes.desktopImage} src="/about3.jpg" />
          <img className={classes.mobileImage} src="/about.jpg" />
          <p className={classes.largeTitle}>Other events</p>
        </div> */}
          <div onClick={() => switchSlide()} className={classes.sliderSwitcher}>
            <p className={classes.switchNum}>{aboutSliderData[nextIndex].number}</p>
            <p id="slideHandleTitle" className={classes.switchTitle}>{aboutSliderData[nextIndex].title}</p>
            <div className={classes.switchArrow}>
              <svg width="20" height="20" viewBox="0 0 24 24">
                <polygon points="11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <h2>Beat of ordinary madness</h2>
    </section>
  );
};
export default About;
