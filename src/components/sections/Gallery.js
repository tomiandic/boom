import React, { useEffect, useState, useRef } from "react";
import { Link } from "gatsby";
import { gsap, Power3, Sine } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

import * as classes from "../../styles/gallery.module.css";
gsap.registerPlugin(ScrollTrigger);

const GallerySection = (props) => {
  const galleryContainer = useRef();

  useEffect(() => {
    /*  let DOM = {
      title: {
        element: aboutContainer.current.querySelector("h1"),
        chars: aboutContainer.current.querySelectorAll("h1 span span"),
      },
      paragraph: aboutContainer.current.querySelector("p"),
      image: aboutContainer.current.querySelector("img"),
    };
    console.log(DOM.title.chars);
    gsap.from(DOM.title.chars, {
      y: 20,
      ease: Power3.easeOut,
      opacity: 0,
      skewX: 40,
      stagger: 0.05,
      scrollTrigger: {
        trigger: aboutContainer.current,
        start: "center bottom", //when the top of the trigger hits bottom of vw
      },
    });

    gsap.from(DOM.image, {
      scale: 1.5,
      scrollTrigger: {
        trigger: aboutContainer.current,
        start: "top bottom", //when the top of the trigger hits bottom of vw
        scrub: true, //
      },
    }); */
  }, []);

  return (
    <section className={classes.gallerySection}>
      <Gallery>
        <Item
          original="/gallery/1.jpg"
          thumbnail="/gallery/1.jpg"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              className="gallery-image"
              ref={ref}
              onClick={open}
              src="/gallery/1.jpg"
            />
          )}
        </Item>
        <Item
          original="/gallery/2.jpg"
          thumbnail="/gallery/2.jpg"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              className="gallery-image"
              ref={ref}
              onClick={open}
              src="/gallery/2.jpg"
            />
          )}
        </Item>
        <Item
          original="/gallery/3.jpg"
          thumbnail="/gallery/3.jpg"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              className="gallery-image"
              ref={ref}
              onClick={open}
              src="/gallery/3.jpg"
            />
          )}
        </Item>
        <Item
          original="/gallery/4.jpg"
          thumbnail="/gallery/4.jpg"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              className="gallery-image"
              ref={ref}
              onClick={open}
              src="/gallery/4.jpg"
            />
          )}
        </Item>
        <Item
          original="/gallery/5.jpg"
          thumbnail="/gallery/5.jpg"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              className="gallery-image"
              ref={ref}
              onClick={open}
              src="/gallery/5.jpg"
            />
          )}
        </Item>
        <Item
          original="/gallery/6.jpg"
          thumbnail="/gallery/6.jpg"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              className="gallery-image"
              ref={ref}
              onClick={open}
              src="/gallery/6.jpg"
            />
          )}
        </Item>
        <Item
          original="/gallery/7.jpg"
          thumbnail="/gallery/7.jpg"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              className="gallery-image"
              ref={ref}
              onClick={open}
              src="/gallery/7.jpg"
            />
          )}
        </Item>
        <Item
          original="/gallery/8.jpg"
          thumbnail="/gallery/8.jpg"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              className="gallery-image"
              ref={ref}
              onClick={open}
              src="/gallery/8.jpg"
            />
          )}
        </Item>
        <Item
          original="/gallery/9.jpg"
          thumbnail="/gallery/9.jpg"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              className="gallery-image"
              ref={ref}
              onClick={open}
              src="/gallery/9.jpg"
            />
          )}
        </Item>
        <Item
          original="/gallery/10.jpg"
          thumbnail="/gallery/10.jpg"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              className="gallery-image"
              ref={ref}
              onClick={open}
              src="/gallery/10.jpg"
            />
          )}
        </Item>
        <Item
          original="/gallery/11.jpg"
          thumbnail="/gallery/11.jpg"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              className="gallery-image"
              ref={ref}
              onClick={open}
              src="/gallery/11.jpg"
            />
          )}
        </Item>
        <Item
          original="/gallery/12.jpg"
          thumbnail="/gallery/12.jpg"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              className="gallery-image"
              ref={ref}
              onClick={open}
              src="/gallery/12.jpg"
            />
          )}
        </Item>
        <Item
          original="/gallery/13.jpg"
          thumbnail="/gallery/13.jpg"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              className="gallery-image"
              ref={ref}
              onClick={open}
              src="/gallery/13.jpg"
            />
          )}
        </Item>
        <Item
          original="/gallery/14.jpg"
          thumbnail="/gallery/14.jpg"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              className="gallery-image"
              ref={ref}
              onClick={open}
              src="/gallery/14.jpg"
            />
          )}
        </Item>
        <Item
          original="/gallery/15.jpg"
          thumbnail="/gallery/15.jpg"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              className="gallery-image"
              ref={ref}
              onClick={open}
              src="/gallery/15.jpg"
            />
          )}
        </Item>
        <Item
          original="/gallery/16.jpg"
          thumbnail="/gallery/16.jpg"
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              className="gallery-image"
              ref={ref}
              onClick={open}
              src="/gallery/16.jpg"
            />
          )}
        </Item>
      </Gallery>
    </section>
  );
};
export default GallerySection;
