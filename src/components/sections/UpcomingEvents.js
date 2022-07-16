import React, { useRef, useEffect, useState } from 'react'
import * as classes from "../../styles/landing.module.css";
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import { Link } from "gatsby";
import { API } from "../../data/constants";
import axios from "axios";
import { format } from 'date-fns';

import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination])


const UpcomingEvents = (props) => {

    const [eventData, setEventData] = useState([]);

    const navPrev = useRef();
    const navNext = useRef();
    const slidesContainer = useRef();
    useEffect(() => {
        axios.get(`${API}/api/event/get`)
            .then(response => setEventData(response.data))
    }, [])
    useEffect(() => {

        gsap.to(slidesContainer.current, {
            y: 130,
            opacity: 1,
            scrollTrigger: {
                trigger: "#up-events",
                start: "center bottom",
                end: "+=500px",
                scrub: true
            },
        });

    }, [])

console.log(eventData)

 function fDateTime(date) {
    return format(new Date(date), 'dd MMM yyyy HH:mm');
  }

    return (
        <section id="up-events" className={classes.upcomingEventsSection}>
            <div className={classes.sectionContainer}>
                <div ref={slidesContainer} className={classes.landingBottomContainer}>
                    <h2>
                        <span className={classes.sliderTitle} data-animate="reveal">
                            Upcoming events:
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
                                </div>
                            </div>
                        </span>
                    </h2>
                    <Swiper
                        spaceBetween={15}
                        slidesPerView={1}
                        className={classes.swiperContainer}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = navPrev.current;
                            swiper.params.navigation.nextEl = navNext.current;
                        }}
                    >
                    {eventData.map(event => 
                    event.isActive&&
                            <SwiperSlide>
                            <Link to={`/event/${event.id}`} className={classes.swiperSlide}>
                                <div className={classes.eventImage}>
                                    <img src="/gallery/22.jpg" />
                                </div>
                                <div className={classes.eventDetails}>
                                    <p className={classes.eventName}>{event.name}</p>
                                    <div className={classes.bottomDetails}>
                                        <div className={classes.eventDetail}>
                                            <p>
                                                { `${event.cityName} - ${event.location}` }
                                            </p>
                                        </div>
                                        <div className={classes.eventDetail}>
                                            <p>
                                                {  fDateTime(event.startDate) }
                                            </p>
                                        </div>
                                    </div>
                                    <div className={classes.slideArrowHolder}>
                                    </div>
                                </div>
                                <div className={classes.eventOpenSign}>Show details   <svg
                                    style={{ marginLeft: 10 }}
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <polygon points="11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707" />
                                </svg></div>
                            </Link>
                            </SwiperSlide>
                    )}
                       
                        <SwiperSlide>
                            <Link to="/events" className={classes.swiperSlide}>
                                <div className={classes.swiperButton}>Show all events    <svg
                                    style={{ marginLeft: 10 }}
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <polygon points="11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707" />
                                </svg></div></Link></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </section>
    )
}

export default UpcomingEvents;