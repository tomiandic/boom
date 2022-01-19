import React, { useEffect, useState, useRef } from "react";
import { gsap, Power3, Sine } from "gsap";
import { StaticImage } from "gatsby-plugin-image"
import * as classes from "../styles/modal.module.css";

const Modal = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (
      <div className={classes.modalBackdrop}>
    
          <div className={classes.modalContainer}>
            <StaticImage className={classes.modalImage} src="../images/dj.jpg" />
            <div className={classes.modalDetails}>
            <h2>Get the news first</h2>
            <p>Sign up to our newsletter and be first to get the info about our events and special prices </p>
            <input type="text" placeholder="Enter email address"></input>
            <button>Subscribe Now</button>
            <img className={classes.closeButton} src="/icons/close.svg" />
          </div>
          </div>
         
      </div>
  );
};

export default Modal;
