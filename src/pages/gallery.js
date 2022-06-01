import React, { useState, useCallback, useEffect, useRef } from 'react';
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../data/gallery";
import Header from "../components/Header"
import * as classes from "../styles/galleryPage.module.css"
import { GatsbyImage } from 'gatsby-plugin-image';
import { Grid } from "@mui/material"
import { gsap, Power3, Sine } from "gsap";

const ImageGallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const galleryContainer = useRef();
    useEffect(() => {
        let DOM = {
            images: galleryContainer.current.querySelectorAll("img"),
        };

        gsap.from(
            DOM.images,
            {
                duration: 1.5,
                y: 15,
                stagger: {
                    each: 0.1,
                    from: "random"
                },
                opacity: 0,
                ease: Power3.easeInOut,
            },
        )
    })

    const openLightbox = useCallback((index) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };


    return (
        <>
            <Header />
            <div ref={galleryContainer} className={classes.gallerySection}>
                <Grid container spacing={"5px"}>
                    {photos.map((picture, index) =>
                        <Grid xs={3} item>
                            <img onClick={() => openLightbox(index)} src={picture.src} />
                        </Grid>
                    )}
                </Grid>
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </>

    )
}

export default ImageGallery;