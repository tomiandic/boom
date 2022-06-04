import React, { useState, useCallback, useEffect, useRef } from 'react';
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../data/gallery";
import Header from "../components/Header"
import * as classes from "../styles/galleryPage.module.css"
import { GatsbyImage } from 'gatsby-plugin-image';
import { Grid, LinearProgress } from "@mui/material"

const ImageGallery = () => {
    const [isLoadingImages, setIsLoadingImages] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [picturesNumber, setPicturesNumber] = useState(12);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const galleryContainer = useRef();
    const numOfPictures = useRef(12);


    useEffect(() => {
        
        window.onscroll = function(ev) {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    console.log("in")
                    if (numOfPictures.current < photos.length) {
                       setIsLoadingImages(true);
                   } 
               } 
             }; 

    }, [])


    const openLightbox = useCallback((index) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    useEffect(() => {
        if (isLoadingImages) {
            numOfPictures.current = picturesNumber + 12;
            setTimeout(() => setPicturesNumber(picturesNumber + 12), 1000)
        }
    }, [isLoadingImages])

    useEffect(() => {
        setIsLoadingImages(false)
    }, [picturesNumber])


    return (
        <>
            <Header />
            <div ref={galleryContainer} className={classes.gallerySection}>
                <Grid container>
                    {photos.slice(0, picturesNumber).map((picture, index) =>
                        <Grid xs={6} sm={4} md={3} sx={{ overflow: "hidden" }} item className={classes.gritItem}>
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
            {isLoadingImages && <LinearProgress sx={{ height: 8 }} thickness={20} variant="indeterminate" />}
        </>

    )
}

export default ImageGallery;