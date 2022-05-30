import React, { useEffect, useState, useRef } from "react";
import { gsap, Power3, Sine } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutSliderData } from "../../data/data";

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
    setNextIndex(nIdx);
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
      slideHandle: aboutContainer.current.querySelector("#slideHandleTitle"),
      scrolltext: aboutContainer.current.querySelector("#scrolltext"),
      slideSwitcher: aboutContainer.current.querySelector("#switcher")
    };

    gsap.to(DOM.scrolltext, {
      xPercent: -90,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: DOM.scrolltext,
        scrub: 1,
        start: "top bottom", //when the top of the trigger hits bottom of vw
        end: "+=140%"
      },
    }); 

/*     gsap.to(DOM.scrolltext, {
      xPercent: -110,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: DOM.scrolltext,
        scrub: 1,
        start: "top bottom", //when the top of the trigger hits bottom of vw
        end: "+=200%"
      },
    });  */

    gsap.to(DOM.slideSwitcher, {
      y: 300,
      scrollTrigger: {
        trigger: DOM.slideSwitcher,
        scrub: true,
        start: "center center", //when the top of the trigger hits bottom of vw
        end: "+=200%"
      },
    }); 

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
 
  return (
    <section id="about" ref={aboutContainer} className={classes.aboutSection}>
      <div className={classes.aboutTopHolder}>
        <div className={classes.sectionContainer}>
          <p>
          Be amused by magnificent views of Brijuni islands and the Istrian archipelago while taking pleasure in our wide range of 
          bar bevarages and food. Gin, summer cocktails, shooters and everything you please.
          Visit the astonishing vacation destinations and cross off the list of places you’ve always wanted to visit while partying 
          like crazy for 6 hours.
          </p>
            <h2>
              Let us <br /><span>entertain </span> you.
            </h2>

        </div>

      </div>
      <div id="#about" className={classes.contentHolder}>
        <div className={classes.aboutSliderHolder}>
          <div id="aboutImage" className={classes.imageHolder}>
            <img className={classes.desktopImage} src={aboutSliderData[sliderIndex].imageSrc} />
          </div>
          <div className={classes.aboutPara}>
            <h5 className={classes.largeTitleNum}>{aboutSliderData[sliderIndex].number}</h5>
            <h3 className={classes.largeTitle}>{aboutSliderData[sliderIndex].title}</h3>
            <div id="sliderPar" className={classes.paraHolder}>
              <div className={classes.paraDeco}></div>
              <div>
                <p className={classes.paragraph}>
                  {aboutSliderData[sliderIndex].text}
                </p>
            {aboutSliderData[sliderIndex].buttonText?
                <button className={classes.sectionButton}>{aboutSliderData[sliderIndex].buttonText}<span></span></button>
                :
                null
            }
              </div>
            </div>
          </div>
          <div id="switcher" onClick={() => switchSlide()} className={classes.sliderSwitcher}>
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
       <div className={classes.scrolltextHolder}>
        <h2 id="scrolltext" className={classes.scrolltext}>AFTErmovie</h2> 
      </div> 
      <div className={classes.videoHolder}>
        <iframe className={classes.videoIframe} src="https://www.youtube-nocookie.com/embed/0ajlLKc3N1A?controls=0&amp;start=13" title="Boom Events Aftermovie" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className={classes.grayBackdrop}></div>
   {/*    <div className={classes.scrolltextHolder}>
        <h2 id="scrolltext" className={classes.scrolltext}>Beat of ordinary madness</h2> 
      </div> */}
    </section>
  );
};
export default About;
