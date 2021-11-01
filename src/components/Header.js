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
        height: "97%",
        backgroundColor: "#fff",
        duration: 1,
        ease: Power3.easeOut,
      })
      .to(
        hamburgerLines.current[1],
        {
          width: 0,
          backgroundColor: "#000",
          duration: 0.1,
        },
        "-=.5"
      )
      .to(
        hamburgerLines.current[0],
        {
          rotate: 45,
          backgroundColor: "#d5d5d5",
          y: 19,
          duration: 0.3,
          width: 35,
        },
        "-=.5"
      )
      .to(
        hamburgerLines.current[2],
        {
          rotate: -45,
          backgroundColor: "#d7d7d7",
          duration: 0.3,
          width: 35,
        },
        "-=.5"
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
        "-=.8"
      );
  }, []);

  const addToRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  useEffect(() => {
    sidebarOpen ? sidebarTL.current.play() : sidebarTL.current.reverse();
  }, [sidebarOpen]);

  return (
    <nav ref={mobileNav} className={classes.headerContainer}>
      <img className={classes.logo} src="/boom_all_white.svg" />
     
      <Link
        className={classes.navLink}
        ref={(el) => addToRefs(el, navLinks)}
        to="/"
      >
        Gallery
      </Link>
      <Link
        className={classes.navLink}
        ref={(el) => addToRefs(el, navLinks)}
        to="/"
      >
        Events
      </Link>
      <Link
        className={classes.navLink}
        ref={(el) => addToRefs(el, navLinks)}
        to="/"
      >
        About
      </Link>
      <Link
        className={classes.navLink}
        ref={(el) => addToRefs(el, navLinks)}
        to="/"
      >
        F.A.Q
      </Link>
      <Link
        className={classes.navLink}
        ref={(el) => addToRefs(el, navLinks)}
        to="/"
      >
        Book Tickets
        <svg
          style={{ marginLeft: 10 }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <polygon points="11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707" />
        </svg>
      </Link>
      <span
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={classes.hamburger}
      >
        <span ref={(el) => addToRefs(el, hamburgerLines)}></span>
        <span ref={(el) => addToRefs(el, hamburgerLines)}></span>
        <span ref={(el) => addToRefs(el, hamburgerLines)}></span>
      </span>
      
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
    </nav>
  );
};

export default Header;
