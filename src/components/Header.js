import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";
import { gsap, Power3, Sine } from "gsap";
import * as classes from "../styles/header.module.css";

const Header = ({ pageIsLoaded }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mobileNav = useRef();
  const hamburgerLines = useRef([]);
  const navLinks = useRef([]);
  const socialMedia = useRef([]);
  const sidebarTL = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    sidebarTL.current
      .to(mobileNav.current, {
        height: "100vh",
        backgroundColor: "#fff",
        duration: 1,
        ease: Power3.easeOut,
      })
      .to(
        hamburgerLines.current[0],
        {
          rotate: 45,
          y: 10,
          duration: 0.6,
          width: 45,
        },
        "-=.8"
      )
      .to(
        hamburgerLines.current[1],
        {
          rotate: -45,
          duration: 0.6,
          width: 45,
        }, "-=.8"
      )
      .to(
        hamburgerLines.current[2],
        {
          opacity: 0,
          duration: 0.1,
        }, "-=.8"
      )
      .to(
        navLinks.current,
        {
          duration: 1,
          opacity: 1,
          stagger: 0.1,
          skewX: 0,
          scaleY: 1,
          y: 10,
          ease: Power3.easeOut,
        },
        "-=.4"
      )
      .to(
        socialMedia.current,
        {
          y: 0,
          ease: Power3.easeOut,
          stagger: 0.1,
        },
        "-=1.2"
      );
  }, []);

  const addToRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  useEffect(() => {
    sidebarOpen ? sidebarTL.current.timeScale(.8).play() : sidebarTL.current.timeScale(2).reverse();
  }, [sidebarOpen]);



  return (
    <nav className={classes.headerContainer}>
      <Link to="/"><img className={classes.logo} src="/boom_all_white.svg" /></Link>
      <div className={classes.menuInner} ref={mobileNav}>
        <div className={classes.navLinks}>
          <Link
            className={classes.navLink}
            ref={(el) => addToRefs(el, navLinks)}
            onClick={() => setSidebarOpen(false)}
            to="/#about"
          >
            About
          </Link>
          <Link
            className={classes.navLink}
            ref={(el) => addToRefs(el, navLinks)}
            onClick={() => setSidebarOpen(false)}
            to="/#blog"
          >
            Blog
          </Link>
          <Link
            className={`${classes.navLink} ${classes.active}`}
            ref={(el) => addToRefs(el, navLinks)}
            onClick={() => setSidebarOpen(false)}
            to="/#gallery"
          >
            Gallery
          </Link>
          <Link
            className={classes.navLink}
            ref={(el) => addToRefs(el, navLinks)}
            onClick={() => setSidebarOpen(false)}
            to="/faq"
          >
            F.A.Q
          </Link>
          <Link
            className={classes.navLink}
            ref={(el) => addToRefs(el, navLinks)}
            onClick={() => setSidebarOpen(false)}
            to="/events"
          >
            Events
            <svg
              style={{ marginLeft: 10 }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <polygon points="11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707" />
            </svg>
          </Link>
        </div>
        <div className={classes.socialMediaContainer}>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.instagram.com/instaboom.pula/?hl=hr"
            ref={(el) => addToRefs(el, socialMedia)}
          >
            <img src="icons/instagram.svg" />
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.facebook.com/BOOMeventsPula/"
            ref={(el) => addToRefs(el, socialMedia)}
          >
            <img src="icons/facebook.svg" />
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://api.whatsapp.com/send?phone=385957766909"
            ref={(el) => addToRefs(el, socialMedia)}
          >
            <img src="icons/whatsapp.svg" />
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="tel:+385957766909"
            ref={(el) => addToRefs(el, socialMedia)}
          >
            <img src="icons/phone.svg" />
          </a>
        </div>
      </div>
      <Link to="/events" className={classes.button}>
        CHECK EVENTS
      </Link>
      <div className={classes.hamburgerHolder}
        onClick={() => setSidebarOpen(!sidebarOpen)}>
        <span
          className={classes.hamburger}
        >
          <span ref={(el) => addToRefs(el, hamburgerLines)}></span>
          <span ref={(el) => addToRefs(el, hamburgerLines)}></span>
          <p ref={(el) => addToRefs(el, hamburgerLines)}>MENU</p>
        </span>
      </div>
    </nav>
  );
};

export default Header;
