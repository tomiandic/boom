import React from "react";
import * as classes from "../../styles/booking.module.css";
import { StaticImage } from "gatsby-plugin-image";
import BookingStep from "../../components/BookingStep";
import StepWizard from "react-step-wizard";


const Booking = () => {
  return (
    <section className={classes.bookingSection}>
    <StepWizard>
        <BookingStep />
        <BookingStep />
        <BookingStep />
        <BookingStep />
    </StepWizard>
    </section>
  );
};

export default Booking;
