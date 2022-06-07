import React, { useEffect, useState, createContext } from "react";
import * as classes from "../../styles/booking.module.css";
import { StaticImage } from "gatsby-plugin-image";
import BookingStep from "../../components/BookingStep";
import BookingRegistrationStep from "../../components/BookingRegistrationStep";
import BookingPaymentStep from "../../components/BookingPaymentStep";
import BookingSummary from "../../components/BookingSummary";
import StepWizard from "react-step-wizard";
import Header from "../../components/Header";
import Countdown from "react-countdown";
import { eventData } from "../../data/data";

export const BookingContext = createContext(null);


const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    alert("Ticket booking expired, you will be redirected to event page.")
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
  const [step, setStep] = useState();
  const [selectedTickets, setSelectedTickets] = useState({});

  useEffect(() => {
    let currentStep = localStorage.getItem("wizardStep");
    setStep(currentStep);
  }, [])

  const setWizardStep = (step, callback) => {
    localStorage.setItem('wizardStep', step);
    callback();
  }

  let count = Object.entries(selectedTickets).reduce((prevVal, curVal) => prevVal+curVal[1], 0)

  return (
    <BookingContext.Provider value={{ selectedTickets, setSelectedTickets }}>
      <section className={classes.bookingSection}>
        <Header whiteBackground={true} />
        <div className={classes.bookingContainer}>
          <div className={classes.eventHolder}>
            <StaticImage className={classes.bookingEventImage} src="../images/b-top.jpg" />
            <div>
              <h6>{eventData.title}</h6>
              <p>
                <span>{eventData.date} </span>
                <span>{eventData.location} </span>
                <span> {eventData.time}</span>
              </p>
            </div>
            <div className={classes.countdown}>
              <Countdown renderer={renderer} date={Date.now() + 600000} />
            </div>
          </div>
          {
            step && <StepWizard initialStep={step}>
              <BookingStep showButton={count>0} tickets={eventData.tickets} setWizardStep={setWizardStep} />
              <BookingRegistrationStep setWizardStep={setWizardStep} />
              <BookingPaymentStep setWizardStep={setWizardStep} />
            </StepWizard>
          }<br />
          {
          count ? <BookingSummary tickets={eventData.tickets} /> : null}

        </div>
      </section>
    </BookingContext.Provider>
  );
};

export default Booking;
