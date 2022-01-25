import React from 'react';
import * as classes from "../styles/events.module.css"
import { StaticImage } from "gatsby-plugin-image"


const Events = () => {

    return (
        <section className={classes.eventsSection}>
            <div className={classes.eventsTitle}>
                <h1>Events</h1>
                <p>Find your event and get shitfaced on our booze cruise</p>
            </div>
            {/*   <svg className={classes.svgWave} viewBox="0 0 25.3 4">
                <path
                    d="M4.85,24c2.24,0,2.24,2,4.47,2s2.24-2,4.48-2,2.24,2,4.48,2,2.24-2,4.47-2,2.24,2,4.48,2,2.24-2,4.47-2,2.24,2,4.48,2,2.25-2,4.49-2,2.24,2,4.48,2"
                    transform="translate(-4.85 -23)"
                    fill="none"
                />
                <path
                    data-animate="path"
                    d="M4.85,24c2.24,0,2.24,2,4.47,2s2.24-2,4.48-2,2.24,2,4.48,2,2.24-2,4.47-2,2.24,2,4.48,2,2.24-2,4.47-2,2.24,2,4.48,2,2.25-2,4.49-2,2.24,2,4.48,2"
                    transform="translate(-4.85 -23)"
                    fill="none"
                    strokeMiterlimit="20"
                    strokeWidth="1.2"
                />
            </svg> */}
            <div className={classes.eventsHolder}>
                <div className={classes.event}>
                    <StaticImage className={classes.eventImage} src="../images/b.jpg"></StaticImage>
                    <div className={classes.eventDetails}>
                        <p className={classes.eventTitle}>Crazy Summer Party Boom Boat starting in Medulin </p>
                        <div className={classes.eventSubDetails}>
                            <img src="/icons/location.svg" /><p>Pula</p>
                            <img src="/icons/calendar.svg" />
                            <p>22.06</p>
                        </div>
                        <div className={classes.priceContainer}>
                            <span>Price from:</span>
                            <p>44 EUR</p>
                        </div>
                    </div>
                    <div className={classes.openSign}>
                        <p>Show info</p>
                        <svg width="24px" height="24px" viewBox="0 0 24 24">
                            <g>
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className={classes.event}>
                    <div className={classes.earlyBird}>Early Bird Offer</div>
                    <StaticImage className={classes.eventImage} src="../images/b.jpg"></StaticImage>
                    <div className={classes.eventDetails}>
                        <p className={classes.eventTitle}>Party Boom Boat</p>
                        <div className={classes.eventSubDetails}>
                            <img src="/icons/location.svg" /><p>Pula</p>
                            <img src="/icons/calendar.svg" />
                            <p>22.06</p></div>
                        <div className={classes.priceContainer}>
                            <span>Price from:</span>
                            <p>44 EUR</p>
                        </div>
                    </div>

                </div>
                <div className={classes.event}>
                    <StaticImage className={classes.eventImage} src="../images/b.jpg"></StaticImage>
                    <div className={classes.eventDetails}>
                        <p className={classes.eventTitle}>Party Boom Boat</p>
                        <div className={classes.eventSubDetails}>
                            <img src="/icons/location.svg" /><p>Pula</p>
                            <img src="/icons/calendar.svg" />
                            <p>22.06</p>
                        </div>
                        <div className={classes.priceContainer}>
                            <span>Price from:</span>
                            <p>44 EUR</p>
                        </div>
                    </div>

                </div>
                <div className={classes.event}>
                    <StaticImage className={classes.eventImage} src="../images/boat.jpg"></StaticImage>
                    <div className={classes.eventDetails}>
                        <div className={classes.eventDeco}></div>
                        <p className={classes.eventTitle}>Party Boom Boat</p>
                        <div className={classes.eventSubDetails}>
                            <img src="/icons/location.svg" /><p>Pula</p>
                            <img src="/icons/calendar.svg" />
                            <p>22.06</p>
                        </div>
                        <div className={classes.priceContainer}>
                            <span>Price from:</span>
                            <p>44 EUR</p>
                        </div>
                    </div>

                </div>
                <div className={classes.event}>
                    <StaticImage className={classes.eventImage} src="../images/ab.jpg"></StaticImage>
                    <div className={classes.eventDetails}>
                        <p className={classes.eventTitle}>Party Boom Boat</p>
                        <div className={classes.eventSubDetails}>
                            <img src="/icons/location.svg" /><p>Pula</p>
                            <img src="/icons/calendar.svg" />
                            <p>22.06</p>
                        </div>
                        <div className={classes.priceContainer}>
                            <span>Price from:</span>
                            <p>44 EUR</p>
                        </div>
                    </div>

                </div>
                <div className={classes.event}>
                    <StaticImage className={classes.eventImage} src="../images/b.jpg"></StaticImage>
                    <div className={classes.eventDetails}>
                        <p className={classes.eventTitle}>Party Boom Boat</p>
                        <div className={classes.eventSubDetails}>
                            <img src="/icons/location.svg" /><p>Pula</p>
                            <img src="/icons/calendar.svg" />
                            <p>22.06</p>
                        </div>
                        <div className={classes.priceContainer}>
                            <span>Price from:</span>
                            <p>44 EUR</p>
                        </div>
                    </div>

                </div>
                <div className={classes.event}>
                    <StaticImage className={classes.eventImage} src="../images/b.jpg"></StaticImage>
                    <div className={classes.eventDetails}>
                        <p className={classes.eventTitle}>Party Boom Boat</p>
                        <div className={classes.eventSubDetails}>
                            <img src="/icons/location.svg" /><p>Pula</p>
                            <img src="/icons/calendar.svg" />
                            <p>22.06</p>
                        </div>
                        <div className={classes.priceContainer}>
                            <span>Price from:</span>
                            <p>44 EUR</p>
                        </div>
                    </div>

                </div>
                <div className={classes.event}>
                    <StaticImage className={classes.eventImage} src="../images/b.jpg"></StaticImage>
                    <div className={classes.eventDetails}>
                        <p className={classes.eventTitle}>Party Boom Boat</p>
                        <div className={classes.eventSubDetails}>
                            <img src="/icons/location.svg" /><p>Pula</p>
                            <img src="/icons/calendar.svg" />
                            <p>22.06</p>
                        </div>
                        <div className={classes.priceContainer}>
                            <span>Price from:</span>
                            <p>44 EUR</p>
                        </div>
                    </div>

                </div>
                <div className={classes.event}>
                    <StaticImage className={classes.eventImage} src="../images/b.jpg"></StaticImage>
                    <div className={classes.eventDetails}>
                        <p className={classes.eventTitle}>Party Boom Boat</p>
                        <div className={classes.eventSubDetails}>
                            <img src="/icons/location.svg" /><p>Pula</p>
                            <img src="/icons/calendar.svg" />
                            <p>22.06</p>
                        </div>
                        <div className={classes.priceContainer}>
                            <span>Price from:</span>
                            <p>44 EUR</p>
                        </div>
                    </div>

                </div>
                <div className={classes.event}>
                    <StaticImage className={classes.eventImage} src="../images/b.jpg"></StaticImage>
                    <div className={classes.eventDetails}>
                        <p className={classes.eventTitle}>Party Boom Boat</p>
                        <div className={classes.eventSubDetails}>
                            <img src="/icons/location.svg" /><p>Pula</p>
                            <img src="/icons/calendar.svg" />
                            <p>22.06</p>
                        </div>
                        <div className={classes.priceContainer}>
                            <span>Price from:</span>
                            <p>44 EUR</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )

}

export default Events;