import React from "react";
import * as classes from "../../styles/booking.module.css";
import { StaticImage } from "gatsby-plugin-image";
import BookingStep from "../../components/BookingStep";
import StepWizard from "react-step-wizard";
import Header from "../../components/Header";
import Countdown from "react-countdown";

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return "Ticket booking expired";
  } else {
    // Render a countdown
    return (
      <span>
        {minutes}:{seconds}
      </span>
    );
  }
};

const Booking = () => {
  return (
    <section className={classes.bookingSection}>
      <Header/>
      <div>
        <div className={classes.eventHolder}>
          <StaticImage className={classes.bookingEventImage} src="../images/b-top.jpg" />
          <div>
            <h6>Event: Party Boom Boat Party</h6>
            <p><span>Jan 6. </span> <span> Pula </span><span> 18:00</span></p>
          </div>
          <div className={classes.countdown}>
          <Countdown renderer={renderer} date={Date.now() + 600000}  />
          </div>
        </div>
        <StepWizard>
            <BookingStep />
            <BookingStep />
            <BookingStep />
            <BookingStep />
        </StepWizard>
      </div>
    </section>
  );
};

export default Booking;
