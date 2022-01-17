import React, { useEffect, useState, useRef } from "react";
import { gsap, Power3, Sine } from "gsap";
import { StaticImage } from "gatsby-plugin-image"
import * as classes from "../styles/modal.module.css";

const Modal = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (
      <div className={classes.modalBackdrop}>
          <div className={classes.modalContainer}>
            <StaticImage src="../boat.jpg" />
          </div>
      </div>
  );
};

export default Modal;
