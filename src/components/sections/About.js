import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";
import { gsap, Power3, Sine } from "gsap";
import * as classes from "../../styles/about.module.css";

const About = (props) => {
  return <section ref={props.reference} style={{zIndex: 10, background: "red"}}></section>;
};
export default About;
