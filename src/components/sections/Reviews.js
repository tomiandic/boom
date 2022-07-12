import React, { useRef } from 'react'
import * as classes from "../../styles/reviews.module.css";
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";
import { reviewData } from "../../data/data";
import { Modal } from "../Modal";
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination])


const Reviews = (props) => {
    const navPrev = useRef();
    const navNext = useRef();

    return (
        <section id="reviews" className={classes.reviewSection}>
            <div className={classes.sectionContainer}>
                <div> 
                <h2>
                    What you said <br /> about us
                </h2>
                <div className={classes.sliderNavigation}>
          <div ref={navPrev}>
            <svg rotate="90" width="20" height="20" viewBox="0 0 24 24">
              <polygon points="11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707" />
            </svg>
          </div>
          <div ref={navNext}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <polygon points="11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707" />
            </svg>
          </div>  </div>
        </div>
                <img src="/quotes.svg" />
                <Swiper 
                  slidesPerView={1}
                  pagination={{ clickable: false}}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navPrev.current;
                    swiper.params.navigation.nextEl = navNext.current;
                  }}
                  breakpoints={{
                    1300: {
                      slidesPerView: 2
                    }
                  }}
                  spaceBetween={30}
                  className={classes.swiperContainer}
                  >
                    {reviewData.map(review => 
                  <SwiperSlide>
                    <div className={classes.reviewContainer}>
                    <img src="./gallery/1.jpg"></img>

                        <p>
                           {review.review}
                        </p>
                        <div className={classes.reviewDetails}>
                            <p>{review.name}</p> 
                            <p>&#8226;</p>
                            <p>{review.source}</p>
                        </div>
                    </div>
                  </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </section>
    )
}

export default Reviews;