import React from "react";
import * as classes from "../styles/event.module.css";
import { StaticImage } from "gatsby-plugin-image";
import {
  Timeline,
  Events,
  ImageEvent,
  themes,
  createTheme,
} from "@merc/react-timeline";

const customTheme = createTheme(themes.default, {
  card: {
    maxWidth: "100%",
    flexFlow: "column-reverse",
    padding: "1.5rem",
    boxShadow: "0 10px 25px -8px hsl(0deg 0% 0% / 10%)",
    borderRadius: "6px"
  },
  date: {
    backgroundColor: "#25373f",
    fontSize: "10px",
    padding: "5px 12px",
    borderRadius: "15px"
 
  },
  imageAtom: {
    maxHeight: "300px",
    borderRadius: "8px",
  },
  marker: {
    borderColor: "gray",
  },
  timelineTrack: {
    backgroundColor: "lightgray",
  },
  event: {
    margin: "3rem 0",
  },
});

const Event = () => {
  return (
    <section>
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
              <svg x="0px" y="0px" viewBox="0 0 330 330">
                <g id="XMLID_809_">
                  <path
                    id="XMLID_810_"
                    d="M156.791,327.556c2.493,1.63,5.35,2.444,8.207,2.444c2.857,0,5.715-0.815,8.207-2.444
		c0.634-0.414,15.731-10.345,35.004-28.298c22.655-21.105,41.251-43.957,55.271-67.923c19.623-33.544,29.572-68.286,29.572-103.264
		C293.053,57.452,235.607,0,164.998,0C94.391,0,36.947,57.452,36.947,128.071c0,49.877,20.813,100.251,60.191,145.677
		C126.438,307.546,155.565,326.754,156.791,327.556z M165,98.053c16.542,0,30,13.458,30,30s-13.458,30-30,30s-30-13.458-30-30
		S148.458,98.053,165,98.053z"
                  />
                </g>
              </svg>
              <p>Pula</p>

              <svg
                version="1.1"
                x="0px"
                y="0px"
                width="400.066px"
                height="351.066px"
                viewBox="0 0 351.066 351.066"
              >
                <g>
                  <g>
                    <path
                      d="M346.244,55.026H313.2V29.771c0-13.785-11.215-25-25-25s-25,11.215-25,25v25.256H87.866V29.771c0-13.785-11.215-25-25-25
			c-13.785,0-25,11.215-25,25v25.256H4.822C2.163,55.026,0,57.189,0,59.849v281.625c0,2.658,2.164,4.822,4.822,4.822h341.422
			c2.659,0,4.822-2.164,4.822-4.822V59.849C351.066,57.189,348.903,55.026,346.244,55.026z M278.2,32.771c0-5.523,4.477-10,10-10
			c5.522,0,10,4.477,10,10v25.256c0,5.523-4.478,10-10,10c-5.523,0-10-4.477-10-10V32.771z M52.866,32.771c0-5.523,4.477-10,10-10
			c5.523,0,10,4.477,10,10v25.256c0,5.523-4.477,10-10,10c-5.523,0-10-4.477-10-10V32.771z M106.14,270.098
			c0,6.615-5.362,11.978-11.977,11.978h-37.26c-6.615,0-11.977-5.36-11.977-11.978v-37.261c0-6.615,5.362-11.979,11.977-11.979
			h37.261c6.614,0,11.977,5.362,11.977,11.979L106.14,270.098L106.14,270.098z M106.14,170.098c0,6.614-5.362,11.978-11.977,11.978
			h-37.26c-6.615,0-11.977-5.36-11.977-11.978v-37.261c0-6.615,5.362-11.978,11.977-11.978h37.261
			c6.614,0,11.977,5.362,11.977,11.978L106.14,170.098L106.14,170.098z M206.141,270.098c0,6.615-5.361,11.978-11.978,11.978h-37.26
			c-6.615,0-11.977-5.36-11.977-11.978v-37.261c0-6.615,5.362-11.979,11.977-11.979h37.261c6.614,0,11.977,5.362,11.977,11.979
			V270.098L206.141,270.098z M206.141,170.098c0,6.614-5.361,11.978-11.978,11.978h-37.26c-6.615,0-11.977-5.36-11.977-11.978
			v-37.261c0-6.615,5.362-11.978,11.977-11.978h37.261c6.614,0,11.977,5.362,11.977,11.978V170.098L206.141,170.098z
			 M306.141,270.098c0,6.615-5.361,11.978-11.978,11.978h-37.26c-6.615,0-11.979-5.36-11.979-11.978v-37.261
			c0-6.615,5.362-11.979,11.979-11.979h37.261c6.614,0,11.978,5.362,11.978,11.979L306.141,270.098L306.141,270.098z
			 M306.141,170.098c0,6.614-5.361,11.978-11.978,11.978h-37.26c-6.615,0-11.979-5.36-11.979-11.978v-37.261
			c0-6.615,5.362-11.978,11.979-11.978h37.261c6.614,0,11.978,5.362,11.978,11.978L306.141,170.098L306.141,170.098z"
                    />
                  </g>
                </g>
              </svg>

              <p>22.06</p>

              <svg x="0px" y="0px" viewBox="0 0 466.008 466.008">
                <g>
                  <g>
                    <path
                      d="M233.004,0C104.224,0,0,104.212,0,233.004c0,128.781,104.212,233.004,233.004,233.004
			c128.782,0,233.004-104.212,233.004-233.004C466.008,104.222,361.796,0,233.004,0z M244.484,242.659l-63.512,75.511
			c-5.333,6.34-14.797,7.156-21.135,1.824c-6.34-5.333-7.157-14.795-1.824-21.135l59.991-71.325V58.028c0-8.284,6.716-15,15-15
			s15,6.716,15,15v174.976h0C248.004,236.536,246.757,239.956,244.484,242.659z"
                    />
                  </g>
                </g>
              </svg>
              <p>16:00-22:00</p>
            </div>
            <div className={classes.itineraryNavigation}>
              <a className={classes.active}>Overview</a>
              <a>Route</a>
              <a>Itinerary</a>
              <a>Pricing</a>
              <a>Other Info</a>
            </div>
          </div>
          <div
            className={`${classes.itineraryPart} ${classes.bookingOverview}`}
          >
            <h6>Overview</h6>

            <div className={classes.overviewGrid}>
              <div className={classes.overviewGridItem}>
                <StaticImage src="../images/boat.svg"></StaticImage>
                <p>Lorem ipsum dolor amet</p>
              </div>
              <div className={classes.overviewGridItem}>
                <StaticImage src="../images/ship.svg"></StaticImage>
                <p>Lorem ipsum dolor amet</p>
              </div>
              <div className={classes.overviewGridItem}>
                <StaticImage src="../images/car.svg"></StaticImage>
                <p>Lorem ipsum dolor amet</p>
              </div>
              <div className={classes.overviewGridItem}>
                <StaticImage src="../images/moto.svg"></StaticImage>
                <p>Lorem ipsum dolor amet</p>
              </div>
            </div>
            <p>
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
            <Timeline
              opts={{ layout: "inline-evts-inline-date" }}
              theme={customTheme}
            >
              <Events>
                <ImageEvent
                  date="16:00"
                  text=" Vestibulum faucibus nunc massa, tincidunt mollis quam vulputate
                  vitae. Nulla sagittis, purus vel tincidunt efficitur, nulla nulla
                  commodo ligula, at faucibus erat erat vitae ipsum. Maecenas
                  euismod pellentesque odio, at feugiat urna finibus in. Ut vitae
                  mollis sapien. Curabitur vestibulum at metus eget gravida. Fusce
                  porta quam vel lacus sodales, sit amet accumsan nunc porta. Duis
                  dignissim justo in lacus semper tempor. Mauris ut mi rhoncus,
                  malesuada lacus a, faucibus eros. Fusce eu vehicula enim, in
                  tincidunt ipsum. Maecenas scelerisque augue id laoreet convallis.
                  Vivamus dapibus sollicitudin nunc non malesuada. Praesent id orci
                  varius, mattis tellus at, pretium lectus. "
                  src="/about.jpg"
                ></ImageEvent>
                <ImageEvent
                  date="16:00"
                  text=" Vestibulum faucibus nunc massa, tincidunt mollis quam vulputate
                  vitae. Nulla sagittis, purus vel tincidunt efficitur, nulla nulla
                  commodo ligula, at faucibus erat erat vitae ipsum. Maecenas
                  euismod pellentesque odio, at feugiat urna finibus in. Ut vitae
                  mollis sapien. Curabitur vestibulum at metus eget gravida. Fusce
                  porta quam vel lacus sodales, sit amet accumsan nunc porta. Duis
                  dignissim justo in lacus semper tempor. Mauris ut mi rhoncus,
                  malesuada lacus a, faucibus eros. Fusce eu vehicula enim, in
                  tincidunt ipsum. Maecenas scelerisque augue id laoreet convallis.
                  Vivamus dapibus sollicitudin nunc non malesuada. Praesent id orci
                  varius, mattis tellus at, pretium lectus. "
                  src="/loading-pic.jpg"
                ></ImageEvent>
              </Events>
            </Timeline>
          </div>
          <div className={`${classes.itineraryPart} ${classes.bookingRoute}`}>

            </div>
        </div>
        <div className={classes.bookingDetails}>
          <div className={classes.bookingDetail}>
            Price<p className={classes.bookingPrice}>45.00$</p>
          </div>
          <div className={classes.bookingDetail}>
            Date<p className={classes.bookingDetailInfo}>22.06.2022</p>
          </div>
          <div className={classes.bookingDetail}>
            Time<p className={classes.bookingDetailInfo}>17:00-22:00</p>
          </div>
          <div className={classes.bookingDetail}>
            Category<p className={classes.bookingDetailInfo}>VIP</p>
          </div>
          <button className={classes.bookingButton}>Book Now</button>
        </div>
      </div>
    </section>
  );
};

export default Event;
