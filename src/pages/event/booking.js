import React, {useEffect, useState} from "react";
import * as classes from "../../styles/booking.module.css";
import { StaticImage } from "gatsby-plugin-image";
import BookingStep from "../../components/BookingStep";
import BookingRegistrationStep from "../../components/BookingRegistrationStep";
import BookingPaymentStep from "../../components/BookingPaymentStep";
import BookingSummary from "../../components/BookingSummary";
import StepWizard from "react-step-wizard";
import Header from "../../components/Header";
import Countdown from "react-countdown";

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
  useEffect(()=>{
    let currentStep = localStorage.getItem("wizardStep");
    setStep(currentStep);
    console.log(currentStep);
  }, [])

  const setWizardStep = (step, callback) => {
    console.log("set step", step)
    localStorage.setItem('wizardStep', step);
    callback();
  }

  return (
    <section className={classes.bookingSection}>
      <Header />
      <div>
        <div className={classes.eventHolder}>
          <StaticImage className={classes.bookingEventImage} src="../images/b-top.jpg" />
          <div>
            <h6>Event: Party Boom Boat Party</h6>
            <p>
              <span>Jan 6. </span>
              <span> Pula </span>
              <span> 18:00</span>
            </p>
          </div>
          <div className={classes.countdown}>
            <Countdown renderer={renderer} date={Date.now() + 600000} />
          </div>
        </div>

        {step&&<StepWizard initialStep={step}>
          <BookingStep setWizardStep={setWizardStep} />
          <BookingRegistrationStep setWizardStep={setWizardStep}  />
          <BookingPaymentStep setWizardStep={setWizardStep}  />
        </StepWizard>
        
        }<br/>
        <BookingSummary />

      </div>
    </section>
  );
};

export default Booking;
