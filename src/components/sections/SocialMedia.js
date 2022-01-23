import React, { useEffect, useState, useRef } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import "swiper/css";
import "swiper/css/effect-cards";
import SwiperCore, { EffectCards, Navigation } from "swiper";
import * as classes from "../../styles/gallery.module.css";
import Image from 'gatsby-plugin-image';

// install Swiper modules
const SocialMedia = (props) => {

    /* const data = useStaticQuery(graphql`
    {
      allInstaNode {
        nodes {
          id
          caption
          username
          localFile {
            childImageSharp {
              fluid(maxWidth: 250, maxHeight: 250) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const photos = data.allInstaNode.nodes; */
  const photos = [];


    console.log("DATA", data)

    return (
        <section className={classes.socialMediaSection}>
            <div className="instagram">
                <div>
                    <a href={`https://www.instagram.com/${photos[0].username}/`}>
                        Follow me on Instagram
                    </a>
                </div>
                {photos.map((photo) => (
                    <a
                        className="instagram-photo"
                        href={`https://www.instagram.com/p/${photo.id}/`}
                        key={photo.id}
                    >
                        <Image
                            fluid={photo.localFile.childImageSharp.fluid}
                            alt={photo.caption}
                        />
                    </a>
                ))}
            </div>
        </section>
    );
};
export default SocialMedia;
