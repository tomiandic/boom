import React, { useEffect, useState, useRef } from "react";
import { gsap, Power3, Sine } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "swiper";
import { aboutSliderData } from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Link } from "gatsby";

import * as classes from "../../styles/about.module.css";
gsap.registerPlugin(ScrollTrigger);

const About = (props) => {

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

    gsap.to(DOM.slideSwitcher, {
      y: 300,
      scrollTrigger: {
        trigger: DOM.slideSwitcher,
        scrub: true,
        start: "center center", //when the top of the trigger hits bottom of vw
        end: "+=200%"
      },
    });


/*     sliderTL.current = gsap.timeline({ play: true, onReverseComplete: () => setIsReversed(true) })
      .to(DOM.image, {
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
      }, "-=1") */

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
        <Swiper
          spaceBetween={15}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            700: {
              slidesPerView: 1,
            }
          }}>
          {aboutSliderData.map((slide, sliderIndex) =>
          <SwiperSlide>
            <div className={classes.aboutSliderHolder}>
              <div id="aboutImage" className={classes.imageHolder}>
                <img className={classes.desktopImage} src={aboutSliderData[sliderIndex].imageSrc} />
                <div className={classes.imageOverlay}></div>
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
                    {aboutSliderData[sliderIndex].buttonText ?
                      <Link to={aboutSliderData[sliderIndex].href} className={classes.sectionButton}>{aboutSliderData[sliderIndex].buttonText}<span></span></Link>
                      :
                      null
                    }
                  </div>
                </div>
              </div>
            </div></SwiperSlide>)}
        </Swiper>
      </div>
      <div className={classes.scrolltextHolder}>
        <h2 id="scrolltext" className={classes.scrolltext}>AFTErmovie</h2>
      </div>
      <div className={classes.videoHolder}>
        <iframe className={classes.videoIframe} src="https://www.youtube-nocookie.com/embed/0ajlLKc3N1A?controls=0&amp;start=13" title="Boom Events Aftermovie" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      {/*    <div className={classes.scrolltextHolder}>
        <h2 id="scrolltext" className={classes.scrolltext}>Beat of ordinary madness</h2> 
      </div> */}
    </section>
  );
};
export default About;
