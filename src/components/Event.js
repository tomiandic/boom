import React from "react";
import * as classes from "../styles/event.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "swiper/css/navigation";


const Event = () => {
  return (
    <section className={classes.eventSection}>
      <div className={classes.eventBanner}>
        <StaticImage
          className={classes.eventImage}
          src="../images/b-top.jpg"
          alt="123321"
        />
      </div>
      <div className={classes.eventHolder}>
        <div className={classes.eventItineraryHolder}>
          <div className={`${classes.itineraryPart} ${classes.eventHeader}`}>
            <h1>Pula Party Boom Boat </h1>

            <div className={classes.headerDetails}>

              <svg version="1.1" x="0px" y="0px"
                viewBox="0 0 512 512" enableBackground="new 0 0 512 512;">
                <g>
                  <g>
                    <path d="M405.961,62.117C365.904,22.06,312.647,0,255.999,0c-56.647,0-109.904,22.06-149.96,62.117
			C23.35,144.804,23.35,279.35,106.04,362.039L256,512l149.962-149.961C488.648,279.352,488.65,144.806,405.961,62.117z
			 M380.254,336.332L255.999,460.585L131.748,336.332c-68.513-68.515-68.513-179.994-0.001-248.508
			c33.19-33.187,77.316-51.467,124.252-51.467c46.937,0,91.064,18.28,124.255,51.468
			C448.767,156.339,448.767,267.818,380.254,336.332z"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M311.7,156.378c-14.878-14.878-34.66-23.072-55.7-23.072s-40.822,8.193-55.7,23.072c-30.713,30.714-30.713,80.687,0,111.4
			c14.876,14.877,34.657,23.072,55.698,23.074c0.002,0,0.005,0,0.007,0c21.036,0,40.817-8.196,55.695-23.074
			C342.414,237.064,342.414,187.092,311.7,156.378z M285.993,242.072c-8.012,8.01-18.66,12.424-29.988,12.424c0,0-0.002,0-0.004,0
			c-11.331-0.002-21.983-4.415-29.993-12.424c-16.537-16.54-16.537-43.448,0.001-59.985c8.01-8.012,18.663-12.424,29.991-12.424
			c11.329,0,21.981,4.411,29.993,12.424C302.53,198.624,302.53,225.532,285.993,242.072z"/>
                  </g>
                </g>
              </svg>
              <p>Pula</p>

              <svg viewBox="-60 -60 652 652" enableBackground="new 0 0 512 512">
                <g>
                  <g>
                    <path d="M480.6,43.5h-66.4V31.4c0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4v12.1H138.6V31.4c0-11.3-9.1-20.4-20.4-20.4    c-11.3,0-20.4,9.1-20.4,20.4v12.1H31.4C20.1,43.5,11,52.7,11,64v416.6c0,11.3,9.1,20.4,20.4,20.4h449.2c11.3,0,20.4-9.1,20.4-20.4    V64C501,52.7,491.9,43.5,480.6,43.5z M460.2,460.2H51.8V84.4h45.9v12.1c0,11.3,9.1,20.4,20.4,20.4c11.3,0,20.4-9.1,20.4-20.4V84.4    h234.8v12.1c0,11.3,9.1,20.4,20.4,20.4s20.4-9.1,20.4-20.4V84.4h45.9V460.2z" />
                    <path d="m135.9,192.1h-21.5c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h21.5c11.3,0 20.4-9.1 20.4-20.4 0-11.2-9.1-20.4-20.4-20.4z" />
                    <path d="m266.8,192.1h-21.5c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h21.5c11.3,0 20.4-9.1 20.4-20.4 0-11.2-9.2-20.4-20.4-20.4z" />
                    <path d="m397.6,192.1h-21.5c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h21.5c11.3,0 20.4-9.1 20.4-20.4 0-11.2-9.1-20.4-20.4-20.4z" />
                    <path d="m135.9,284h-21.5c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h21.5c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4z" />
                    <path d="m266.8,284h-21.5c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h21.5c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.2-20.4-20.4-20.4z" />
                    <path d="m397.6,284h-21.5c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h21.5c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4z" />
                    <path d="m135.9,375.9h-21.5c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h21.5c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4z" />
                    <path d="m266.8,375.9h-21.5c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h21.5c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.2-20.4-20.4-20.4z" />
                    <path d="m397.6,375.9h-21.5c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h21.5c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4z" />
                  </g>
                </g>
              </svg>

              <p>22.06</p>

              <svg x="0px" y="0px" viewBox="0 0 489 489" enableBackground="new 0 0 489 489;">
                <g>
                  <g>
                    <path d="M244.5,0C109.3,0,0,109.3,0,244.5S109.3,489,244.5,489S489,379.8,489,244.5S379.8,0,244.5,0z M265.3,447.4V437
			c0-11.4-9.4-20.8-20.8-20.8s-20.8,9.4-20.8,20.8v10.4c-95.8-9.8-172.3-86.3-182-182H51c11.4,0,20.8-9.4,20.8-20.8
			s-9.4-20.8-20.8-20.8h-9.3c9.8-95.8,86.3-172.3,182-182V51c0,11.4,9.4,20.8,20.8,20.8s20.8-9.4,20.8-20.8v-9.3
			c95.8,9.8,172.3,86.3,182,182H437c-11.4,0-20.8,9.4-20.8,20.8s9.4,20.8,20.8,20.8h10.4C437.6,361.1,361.1,437.6,265.3,447.4z"/>
                    <path d="M244.5,124.9c-11.4,0-20.8,9.4-20.8,20.8v91.5L129,353.8c-7.3,9.4-5.2,21.8,3.1,29.1c11.6,8.5,23.9,2.1,28.1-3.1
			l101-122.8c2.1-3.1,4.2-7.3,4.2-12.5v-98.8C265.3,134.2,256,124.9,244.5,124.9z"/>
                  </g>
                </g>
              </svg>
              <p>16:00-22:00</p>
            </div>
          </div>
          <div className={classes.itineraryNavigation}>
              <a className={classes.active}>Overview</a>
              <a>Route</a>
              <a>Itinerary</a>
              <a>Pricing</a>
            </div>
          <div
            className={`${classes.itineraryPart} ${classes.bookingOverview}`}
          >
            <h6>Overview</h6>

            <div className={classes.overviewGrid}>
              <div className={classes.overviewGridItem}>
                <StaticImage className={classes.overviewGridItemIcon} src="../images/boat.svg"></StaticImage>
                <p>Lorem ipsum dolor amet</p>
              </div>
              <div className={classes.overviewGridItem}>
                <StaticImage className={classes.overviewGridItemIcon} src="../images/ship.svg"></StaticImage>
                <p>Lorem ipsum dolor amet</p>
              </div>
              <div className={classes.overviewGridItem}>
                <StaticImage className={classes.overviewGridItemIcon} src="../images/car.svg"></StaticImage>
                <p>Lorem ipsum dolor amet</p>
              </div>
              <div className={classes.overviewGridItem}>
                <StaticImage className={classes.overviewGridItemIcon} src="../images/moto.svg"></StaticImage>
                <p>Lorem ipsum dolor amet</p>
              </div>
            </div>
            <p className={classes.itineraryParagraph}>
              Vestibulum faucibus nunc massa, tincidunt mollis quam vulputate
              vitae. Nulla sagittis, purus vel tincidunt efficitur, nulla nulla
              commodo ligula, at faucibus erat erat vitae ipsum. Maecenas
              euismod pellentesque odio, at feugiat urna finibus in. Ut vitae
              mollis sapien. Curabitur vestibulum at metus eget gravida. Fusce
              porta quam vel lacus sodales, sit amet accumsan nunc porta. Duis
              dignissim justo in lacus semper tempor. Mauris ut mi rhoncus,
              malesuada lacus a, faucibus eros. Fusce eu vehicula enim, in
              tincidunt ipsum. Maecenas scelerisque augue id laoreet convallis.
              Vivamus dapibus sollicitudin nunc non malesuada. Praesent id orci
              varius, mattis tellus at, pretium lectus.
            </p>
          </div>
          <div className={`${classes.itineraryPart} ${classes.bookingRoute}`}>
            <h6>Route</h6>
            <StaticImage src="../images/route.jpg"></StaticImage>
          </div>
          <div className={`${classes.itineraryPart} ${classes.bookingRoute}`}>
            <h6>Itinerary</h6>
            <VerticalTimeline layout="1-column-left" lineColor="#f1f2f3">
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
              >
                <h4 className="vertical-timeline-element-title">Meetup at the dock</h4>
                <br />
                <img
                  src="/about.jpg"
                />
                <p className={classes.itineraryParagraph}>
                  Vestibulum faucibus nunc massa, tincidunt mollis quam vulputate
                  vitae. Nulla sagittis, purus vel tincidunt efficitur, nulla nulla
                  commodo ligula, at faucibus erat erat vitae ipsum. Maecenas
                  euismod pellentesque odio, at feugiat urna finibus in. Ut vitae
                  mollis sapien. Curabitur vestibulum at metus eget gravida. Fusce
                  porta quam vel lacus sodales, sit amet accumsan nunc porta. Duis
                  dignissim justo in lacus semper tempor. Mauris ut mi rhoncus,
                  malesuada lacus a, faucibus eros.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="16:00 - 18:00"
              >
                <h3 className="vertical-timeline-element-title">Start</h3>
                <p>
                  Vestibulum faucibus nunc massa, tincidunt mollis quam vulputate
                  vitae. Nulla sagittis, purus vel tincidunt efficitur, nulla nulla
                  commodo ligula, at faucibus erat erat vitae ipsum. Maecenas
                  euismod pellentesque odio, at feugiat urna finibus in. Ut vitae
                  mollis sapien. Curabitur vestibulum at metus eget gravida. Fusce
                  porta quam vel lacus sodales, sit amet accumsan nunc porta. Duis
                  dignissim justo in lacus semper tempor. Mauris ut mi rhoncus,
                  malesuada lacus a, faucibus eros.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="16:00 - 18:00"
              >
                <h3 className="vertical-timeline-element-title">Start</h3>
                <p>
                  Vestibulum faucibus nunc massa, tincidunt mollis quam vulputate
                  vitae. Nulla sagittis, purus vel tincidunt efficitur, nulla nulla
                  commodo ligula, at faucibus erat erat vitae ipsum. Maecenas
                  euismod pellentesque odio, at feugiat urna finibus in. Ut vitae
                  mollis sapien. Curabitur vestibulum at metus eget gravida. Fusce
                  porta quam vel lacus sodales, sit amet accumsan nunc porta. Duis
                  dignissim justo in lacus semper tempor. Mauris ut mi rhoncus,
                  malesuada lacus a, faucibus eros.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="16:00 - 18:00"
              >
                <h3 className="vertical-timeline-element-title">Start</h3>
                <p>
                  Vestibulum faucibus nunc massa, tincidunt mollis quam vulputate
                  vitae. Nulla sagittis, purus vel tincidunt efficitur, nulla nulla
                  commodo ligula, at faucibus erat erat vitae ipsum. Maecenas
                  euismod pellentesque odio, at feugiat urna finibus in. Ut vitae
                  mollis sapien. Curabitur vestibulum at metus eget gravida. Fusce
                  porta quam vel lacus sodales, sit amet accumsan nunc porta. Duis
                  dignissim justo in lacus semper tempor. Mauris ut mi rhoncus,
                  malesuada lacus a, faucibus eros.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
          <div className={`${classes.itineraryPart} ${classes.bookingRoute}`}>
            <h6>Inclusions</h6>
            <Swiper
              spaceBetween={15}
              slidesPerView={1}
              navigation={true}
              modules={[Navigation]}
              breakpoints={{
                700: {
                  slidesPerView: 1,
                },
                1000: {
                  slidesPerView: 2,
                },
                1500: {
                  slidesPerView: 3,
                },
              }}
              className={classes.swiperContainer}
            /*     onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = navPrev.current;
                  swiper.params.navigation.nextEl = navNext.current;
                }} */
            >
              <SwiperSlide>
                <div className={classes.inclusionPart}>
                  <div className={classes.inclusionPartHeader}>
                    <StaticImage className={classes.inclusionIcon} src="../images/boat.svg"></StaticImage><br />
                    General
                  </div>
                  <ul>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="18.421" height="14.129" viewBox="0 0 18.421 14.129" class="">
                      <path id="Path_670" data-name="Path 670" d="M4933,3265.246l5.353,5.353,10.947-10.947" transform="translate(-4931.939 -3258.592)" fill="none" stroke="#00bc8f" strokeWidth="3"></path>
                    </svg>  8 hours of party</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="18.421" height="14.129" viewBox="0 0 18.421 14.129" class="">
                      <path id="Path_670" data-name="Path 670" d="M4933,3265.246l5.353,5.353,10.947-10.947" transform="translate(-4931.939 -3258.592)" fill="none" stroke="#00bc8f" strokeWidth="3"></path>
                    </svg>  Welcome drink</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="18.421" height="14.129" viewBox="0 0 18.421 14.129" class="">
                      <path id="Path_670" data-name="Path 670" d="M4933,3265.246l5.353,5.353,10.947-10.947" transform="translate(-4931.939 -3258.592)" fill="none" stroke="#00bc8f" strokeWidth="3"></path>
                    </svg>  Snacks & Drinks</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="18.421" height="14.129" viewBox="0 0 18.421 14.129" class="">
                      <path id="Path_670" data-name="Path 670" d="M4933,3265.246l5.353,5.353,10.947-10.947" transform="translate(-4931.939 -3258.592)" fill="none" stroke="#00bc8f" strokeWidth="3"></path>
                    </svg>  8 hours of party</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="18.421" height="14.129" viewBox="0 0 18.421 14.129" class="">
                      <path id="Path_670" data-name="Path 670" d="M4933,3265.246l5.353,5.353,10.947-10.947" transform="translate(-4931.939 -3258.592)" fill="none" stroke="#00bc8f" strokeWidth="3"></path>
                    </svg>  Welcome drink</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="18.421" height="14.129" viewBox="0 0 18.421 14.129" class="">
                      <path id="Path_670" data-name="Path 670" d="M4933,3265.246l5.353,5.353,10.947-10.947" transform="translate(-4931.939 -3258.592)" fill="none" stroke="#00bc8f" strokeWidth="3"></path>
                    </svg>  Snacks & Drinks</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.inclusionPart}>
                  <div className={classes.inclusionPartHeader}>
                    <StaticImage className={classes.inclusionIcon} src="../images/boat.svg"></StaticImage><br />
                    General
                  </div>
                  <ul>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="18.421" height="14.129" viewBox="0 0 18.421 14.129" class="">
                      <path id="Path_670" data-name="Path 670" d="M4933,3265.246l5.353,5.353,10.947-10.947" transform="translate(-4931.939 -3258.592)" fill="none" stroke="#00bc8f" strokeWidth="3"></path>
                    </svg>  8 hours of party</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="18.421" height="14.129" viewBox="0 0 18.421 14.129" class="">
                      <path id="Path_670" data-name="Path 670" d="M4933,3265.246l5.353,5.353,10.947-10.947" transform="translate(-4931.939 -3258.592)" fill="none" stroke="#00bc8f" strokeWidth="3"></path>
                    </svg>  Welcome drink</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="18.421" height="14.129" viewBox="0 0 18.421 14.129" class="">
                      <path id="Path_670" data-name="Path 670" d="M4933,3265.246l5.353,5.353,10.947-10.947" transform="translate(-4931.939 -3258.592)" fill="none" stroke="#00bc8f" strokeWidth="3"></path>
                    </svg>  Snacks & Drinks</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="18.421" height="14.129" viewBox="0 0 18.421 14.129" class="">
                      <path id="Path_670" data-name="Path 670" d="M4933,3265.246l5.353,5.353,10.947-10.947" transform="translate(-4931.939 -3258.592)" fill="none" stroke="#00bc8f" strokeWidth="3"></path>
                    </svg>  8 hours of party</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="18.421" height="14.129" viewBox="0 0 18.421 14.129" class="">
                      <path id="Path_670" data-name="Path 670" d="M4933,3265.246l5.353,5.353,10.947-10.947" transform="translate(-4931.939 -3258.592)" fill="none" stroke="#00bc8f" strokeWidth="3"></path>
                    </svg>  Welcome drink</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="18.421" height="14.129" viewBox="0 0 18.421 14.129" class="">
                      <path id="Path_670" data-name="Path 670" d="M4933,3265.246l5.353,5.353,10.947-10.947" transform="translate(-4931.939 -3258.592)" fill="none" stroke="#00bc8f" strokeWidth="3"></path>
                    </svg>  Snacks & Drinks</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.inclusionPart}>
                  <div className={classes.inclusionPartHeader}>
                    <StaticImage className={classes.inclusionIcon} src="../images/boat.svg"></StaticImage><br />
                    General
                  </div>
                  <ul>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="18.421" height="14.129" viewBox="0 0 18.421 14.129" class="">
                      <path id="Path_670" data-name="Path 670" d="M4933,3265.246l5.353,5.353,10.947-10.947" transform="translate(-4931.939 -3258.592)" fill="none" stroke="#00bc8f" strokeWidth="3"></path>
                    </svg>  8 hours of party</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="18.421" height="14.129" viewBox="0 0 18.421 14.129" class="">
                      <path id="Path_670" data-name="Path 670" d="M4933,3265.246l5.353,5.353,10.947-10.947" transform="translate(-4931.939 -3258.592)" fill="none" stroke="#00bc8f" strokeWidth="3"></path>
                    </svg>  Welcome drink</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="18.421" height="14.129" viewBox="0 0 18.421 14.129" class="">
                      <path id="Path_670" data-name="Path 670" d="M4933,3265.246l5.353,5.353,10.947-10.947" transform="translate(-4931.939 -3258.592)" fill="none" stroke="#00bc8f" strokeWidth="3"></path>
                    </svg>  Snacks & Drinks</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="18.421" height="14.129" viewBox="0 0 18.421 14.129" class="">
                      <path id="Path_670" data-name="Path 670" d="M4933,3265.246l5.353,5.353,10.947-10.947" transform="translate(-4931.939 -3258.592)" fill="none" stroke="#00bc8f" strokeWidth="3"></path>
                    </svg>  8 hours of party</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="18.421" height="14.129" viewBox="0 0 18.421 14.129" class="">
                      <path id="Path_670" data-name="Path 670" d="M4933,3265.246l5.353,5.353,10.947-10.947" transform="translate(-4931.939 -3258.592)" fill="none" stroke="#00bc8f" strokeWidth="3"></path>
                    </svg>  Welcome drink</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="18.421" height="14.129" viewBox="0 0 18.421 14.129" class="">
                      <path id="Path_670" data-name="Path 670" d="M4933,3265.246l5.353,5.353,10.947-10.947" transform="translate(-4931.939 -3258.592)" fill="none" stroke="#00bc8f" strokeWidth="3"></path>
                    </svg>  Snacks & Drinks</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>

                <div className={classes.inclusionPart}>

                  <div className={classes.inclusionPartHeader}>
                    <StaticImage className={classes.inclusionIcon} src="../images/boat.svg"></StaticImage><br />
                    Not included
                  </div>
                  <ul className={classes.notIncluded}>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13.068" height="13.068" viewBox="0 0 13.068 13.068" class="">
                        <g id="Group_1013" data-name="Group 1013" transform="translate(-326.643 -4005.993)">
                          <path id="Path_685" data-name="Path 685" d="M4938.353,3270.6l10.947-10.947" transform="translate(-4610.65 747.401)" fill="none" stroke="#e61515" strokeWidth="3"></path>
                          <path id="Path_686" data-name="Path 686" d="M4938.353,3270.6l10.947-10.947" transform="translate(3598.303 -931.3) rotate(90)" fill="none" stroke="#e61515" strokeWidth="3"></path>
                        </g>
                      </svg>
                      8 hours of party</li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13.068" height="13.068" viewBox="0 0 13.068 13.068" class="">
                        <g id="Group_1013" data-name="Group 1013" transform="translate(-326.643 -4005.993)">
                          <path id="Path_685" data-name="Path 685" d="M4938.353,3270.6l10.947-10.947" transform="translate(-4610.65 747.401)" fill="none" stroke="#e61515" strokeWidth="3"></path>
                          <path id="Path_686" data-name="Path 686" d="M4938.353,3270.6l10.947-10.947" transform="translate(3598.303 -931.3) rotate(90)" fill="none" stroke="#e61515" strokeWidth="3"></path>
                        </g>
                      </svg>
                      Welcome drink</li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13.068" height="13.068" viewBox="0 0 13.068 13.068" class="">
                        <g id="Group_1013" data-name="Group 1013" transform="translate(-326.643 -4005.993)">
                          <path id="Path_685" data-name="Path 685" d="M4938.353,3270.6l10.947-10.947" transform="translate(-4610.65 747.401)" fill="none" stroke="#e61515" strokeWidth="3"></path>
                          <path id="Path_686" data-name="Path 686" d="M4938.353,3270.6l10.947-10.947" transform="translate(3598.303 -931.3) rotate(90)" fill="none" stroke="#e61515" strokeWidth="3"></path>
                        </g>
                      </svg>
                      Snacks & Drinks</li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13.068" height="13.068" viewBox="0 0 13.068 13.068" class="">
                        <g id="Group_1013" data-name="Group 1013" transform="translate(-326.643 -4005.993)">
                          <path id="Path_685" data-name="Path 685" d="M4938.353,3270.6l10.947-10.947" transform="translate(-4610.65 747.401)" fill="none" stroke="#e61515" strokeWidth="3"></path>
                          <path id="Path_686" data-name="Path 686" d="M4938.353,3270.6l10.947-10.947" transform="translate(3598.303 -931.3) rotate(90)" fill="none" stroke="#e61515" strokeWidth="3"></path>
                        </g>
                      </svg>
                      8 hours of party</li>
                  </ul>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={`${classes.itineraryPart} ${classes.bookingRoute}`}>
            <h6>Tickets</h6>
            <div className={`${classes.ticketCategoryBox} ${classes.ticketCategoryBoxDisabled}`}>
              <h6>Boat Party Ticket - Early Bird</h6>
              <div className={classes.ticketPrice}>
                <span>45.00$</span><br />
                <span className={classes.soldOut}>Sold out</span>
              </div>
            </div>
            <div className={classes.ticketCategoryBox}>
              <h6>Boat Party Ticket - Regular</h6>
              <div className={classes.ticketPrice}>
                <span>55.00$</span>
                <i>+ 5.00$ booking fee</i>
                <Link to="/event/booking" className={classes.bookTicketButton}>Book a Ticket</Link>
              </div>
            </div>
            <div className={classes.ticketCategoryBox}>
              <div className={classes.ticketCategoryDetails}>
                <h6>Boat Party Ticket - VIP</h6>
                <div className={classes.headerDetails}>

                  <svg version="1.1" x="0px" y="0px"
                    viewBox="0 0 512 512" enableBackground="new 0 0 512 512;">
                    <g>
                      <g>
                        <path d="M405.961,62.117C365.904,22.06,312.647,0,255.999,0c-56.647,0-109.904,22.06-149.96,62.117
C23.35,144.804,23.35,279.35,106.04,362.039L256,512l149.962-149.961C488.648,279.352,488.65,144.806,405.961,62.117z
M380.254,336.332L255.999,460.585L131.748,336.332c-68.513-68.515-68.513-179.994-0.001-248.508
c33.19-33.187,77.316-51.467,124.252-51.467c46.937,0,91.064,18.28,124.255,51.468
C448.767,156.339,448.767,267.818,380.254,336.332z"/>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M311.7,156.378c-14.878-14.878-34.66-23.072-55.7-23.072s-40.822,8.193-55.7,23.072c-30.713,30.714-30.713,80.687,0,111.4
c14.876,14.877,34.657,23.072,55.698,23.074c0.002,0,0.005,0,0.007,0c21.036,0,40.817-8.196,55.695-23.074
C342.414,237.064,342.414,187.092,311.7,156.378z M285.993,242.072c-8.012,8.01-18.66,12.424-29.988,12.424c0,0-0.002,0-0.004,0
c-11.331-0.002-21.983-4.415-29.993-12.424c-16.537-16.54-16.537-43.448,0.001-59.985c8.01-8.012,18.663-12.424,29.991-12.424
c11.329,0,21.981,4.411,29.993,12.424C302.53,198.624,302.53,225.532,285.993,242.072z"/>
                      </g>
                    </g>
                  </svg>
                  <p>Pula</p>

                  <svg viewBox="-60 -60 650 650" enableBackground="new 0 0 512 512">
                    <g>
                      <g>
                        <path d="M480.6,43.5h-66.4V31.4c0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4v12.1H138.6V31.4c0-11.3-9.1-20.4-20.4-20.4    c-11.3,0-20.4,9.1-20.4,20.4v12.1H31.4C20.1,43.5,11,52.7,11,64v416.6c0,11.3,9.1,20.4,20.4,20.4h449.2c11.3,0,20.4-9.1,20.4-20.4    V64C501,52.7,491.9,43.5,480.6,43.5z M460.2,460.2H51.8V84.4h45.9v12.1c0,11.3,9.1,20.4,20.4,20.4c11.3,0,20.4-9.1,20.4-20.4V84.4    h234.8v12.1c0,11.3,9.1,20.4,20.4,20.4s20.4-9.1,20.4-20.4V84.4h45.9V460.2z" />
                        <path d="m135.9,192.1h-21.5c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h21.5c11.3,0 20.4-9.1 20.4-20.4 0-11.2-9.1-20.4-20.4-20.4z" />
                        <path d="m266.8,192.1h-21.5c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h21.5c11.3,0 20.4-9.1 20.4-20.4 0-11.2-9.2-20.4-20.4-20.4z" />
                        <path d="m397.6,192.1h-21.5c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h21.5c11.3,0 20.4-9.1 20.4-20.4 0-11.2-9.1-20.4-20.4-20.4z" />
                        <path d="m135.9,284h-21.5c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h21.5c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4z" />
                        <path d="m266.8,284h-21.5c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h21.5c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.2-20.4-20.4-20.4z" />
                        <path d="m397.6,284h-21.5c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h21.5c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4z" />
                        <path d="m135.9,375.9h-21.5c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h21.5c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4z" />
                        <path d="m266.8,375.9h-21.5c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h21.5c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.2-20.4-20.4-20.4z" />
                        <path d="m397.6,375.9h-21.5c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h21.5c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4z" />
                      </g>
                    </g>
                  </svg>

                  <p>22.06</p>

                  <svg x="0px" y="0px" viewBox="0 0 489 489" enableBackground="new 0 0 489 489;">
                    <g>
                      <g>
                        <path d="M244.5,0C109.3,0,0,109.3,0,244.5S109.3,489,244.5,489S489,379.8,489,244.5S379.8,0,244.5,0z M265.3,447.4V437
c0-11.4-9.4-20.8-20.8-20.8s-20.8,9.4-20.8,20.8v10.4c-95.8-9.8-172.3-86.3-182-182H51c11.4,0,20.8-9.4,20.8-20.8
s-9.4-20.8-20.8-20.8h-9.3c9.8-95.8,86.3-172.3,182-182V51c0,11.4,9.4,20.8,20.8,20.8s20.8-9.4,20.8-20.8v-9.3
c95.8,9.8,172.3,86.3,182,182H437c-11.4,0-20.8,9.4-20.8,20.8s9.4,20.8,20.8,20.8h10.4C437.6,361.1,361.1,437.6,265.3,447.4z"/>
                        <path d="M244.5,124.9c-11.4,0-20.8,9.4-20.8,20.8v91.5L129,353.8c-7.3,9.4-5.2,21.8,3.1,29.1c11.6,8.5,23.9,2.1,28.1-3.1
l101-122.8c2.1-3.1,4.2-7.3,4.2-12.5v-98.8C265.3,134.2,256,124.9,244.5,124.9z"/>
                      </g>
                    </g>
                  </svg>
                  <p>16:00-22:00</p>
                </div></div>
              <div className={classes.ticketPrice}>
                <span>65.00$</span>
                <i>+ 5.00$ booking fee</i>
                <Link to="/event/booking" className={classes.bookTicketButton}>Book a Ticket</Link>
              </div>
            </div>
          </div>
          <br />
        </div>
        <div className={classes.bookingDetails}>
          <div className={classes.bookingDetail}>
            <p className={classes.bookingPrice}>From 45.00$</p>
          </div>
          <div className={classes.bookingDetail}>
            <p className={classes.bookingDetailInfo}>Sat, Mar 5</p>
            <p className={classes.bookingDetailInfoTime}>17:00-22:00</p>
          </div>
          <div className={classes.bookingDetail}>
            <p className={classes.bookingDetailInfo}>Ticket Category</p>
            <select className={classes.ticketCategory}>
              <option>VIP</option>
              <option>Early Bird</option>
              <option default>Regular</option>
            </select>
          </div>
          <button className={classes.bookingButton}>Book Now</button>
        </div>
      </div>
    </section>
  );
};

export default Event;
