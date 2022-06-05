import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";
import { gsap, Power3, Sine } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as classes from "../styles/header.module.css";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mobileNav = useRef();
  const nav = useRef();
  const hamburgerLines = useRef([]);
  const navLinks = useRef([]);
  const navLinksDesktop = useRef([]);
  const socialMedia = useRef([]);
  const sidebarTL = useRef(gsap.timeline({ paused: true }));
  const navbarTL = useRef(gsap.timeline({ 
    paused: true, 
    duration: 1, 
    scrollTrigger:{
    trigger: "#about",
    toggleActions: "play complete reverse reset"
  } }));

  
  
  const blackLogo = useRef();

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
          width: 40,
          background:"#25373f"
        },
        "-=.8"
      )
      .to(
        hamburgerLines.current[1],
        {
          rotate: -45,
          duration: 0.6,
          width: 40,
          background:"#25373f"
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
        "-=.6"
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

navbarTL.current
    .to(nav.current, {
      background: "#ffffffb3",
      boxShadow: "0 0 30px -20px #97a6c7",
      ease: Power3.easeOut
    })

    .to([navLinksDesktop.current, hamburgerLines.current[2]], {
      color: "#25373f",
      ease: Power3.easeOut,
    },"-=.5")

    .to(blackLogo.current, {
      opacity: 1,
      ease: Power3.easeOut
    },"-=.5")

    .to([hamburgerLines.current[0],hamburgerLines.current[1]], {
      background: "#25373f",
      ease: Power3.easeOut
    },"-=.5")


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
    <nav className={classes.headerContainer} ref={nav}>
        <Link to="/">
        <img className={classes.logo} src="/boom_all_white.svg" />
        <img style={{opacity: 0}} ref={blackLogo} className={classes.logo} src="/boom_final_black.svg" />
      </Link>
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
            className={`${classes.navLink} ${classes.active}`}
            ref={(el) => addToRefs(el, navLinks)}
            onClick={() => setSidebarOpen(false)}
            to="/gallery"
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
      <div className={classes.navLinksDesktop}>
        <Link
          className={classes.navLinkDesktop}
          ref={(el) => addToRefs(el, navLinksDesktop)}
          onClick={() => setSidebarOpen(false)}
          to="/#about"
        >
          About
        </Link>
        <Link
          className={`${classes.navLinkDesktop} ${classes.active}`}
          ref={(el) => addToRefs(el, navLinksDesktop)}
          onClick={() => setSidebarOpen(false)}
          to="/gallery"
        >
          Gallery
        </Link>
        <Link
          className={classes.navLinkDesktop}
          ref={(el) => addToRefs(el, navLinksDesktop)}
          onClick={() => setSidebarOpen(false)}
          to="/#reviews"
        >
          Reviews
        </Link>
        <Link
          className={classes.navLinkDesktop}
          ref={(el) => addToRefs(el, navLinksDesktop)}
          onClick={() => setSidebarOpen(false)}
          to="/faq"
        >
          F.A.Q
        </Link>
        <Link to="/events" className={classes.button}>
          BUY TICKETS
        </Link>
      {/*   <Link to="/account">
      <IconButton>
        <svg x="0px" y="0px"
          viewBox="0 0 285.5 285.5" style={{ height: 19, width: 18, enableBackground: "new 0 0 285.5 285.5;" }} xmlSpace="preserve">
          <g id="XMLID_791_">
            <path id="XMLID_792_" d="M142.75,125.5c34.601,0,62.751-28.149,62.751-62.75S177.351,0,142.75,0S79.999,28.149,79.999,62.75
		S108.149,125.5,142.75,125.5z M142.75,30c18.059,0,32.751,14.691,32.751,32.75S160.809,95.5,142.75,95.5
		s-32.751-14.691-32.751-32.75S124.691,30,142.75,30z"/>
            <path id="XMLID_795_" d="M142.75,155.5c-63.411,0-115,51.589-115,115c0,8.284,6.716,15,15,15h200c8.284,0,15-6.716,15-15
		C257.75,207.089,206.161,155.5,142.75,155.5z M59.075,255.5c7.106-39.739,41.923-70,83.675-70s76.569,30.261,83.675,70H59.075z"/>
          </g>
        </svg>
        </IconButton> 
        </Link> */}
        
      </div>
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
