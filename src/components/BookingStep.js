import React from "react";
import * as classes from "../styles/booking.module.css";
import PeopleCounter from "./PeopleCounter";



const BookingStep = (props) => {
    console.log(props.currentStep)


    return (
        <div className={classes.bookingStepHolder}>
            <div className={classes.ticketType}>
                <div>
                    <p className={classes.ticketTitle}>Boat Party Ticket - Regular</p>
                    <p className={classes.ticketPrice}>$55.00/Person</p>
                </div>
            <PeopleCounter initialValue={1} maxValue={11} />
            </div>
            <div className={classes.ticketType}>
                <div>
                    <p className={classes.ticketTitle}>Boat Party Ticket - Regular</p>
                    <p className={classes.ticketPrice}>$55.00/Person</p>
                </div>
            <PeopleCounter initialValue={1} maxValue={11} />
            </div>
            <div className={classes.ticketType}>
                <div>
                    <p className={classes.ticketTitle}>Boat Party Ticket - Regular</p>
                    <p className={classes.ticketPrice}>$55.00/Person</p>
                </div>
            <PeopleCounter initialValue={1} maxValue={11} />
            </div>
            <div className={classes.ticketType}>
                <div>
                    <p className={classes.ticketTitle}>Boat Party Ticket - Regular</p>
                    <p className={classes.ticketPrice}>$55.00/Person</p>
                </div>
            <PeopleCounter initialValue={1} maxValue={11} />
            </div>

            <button className={classes.mainButtonWizard} onClick={() => props.setWizardStep(props.currentStep+1, props.nextStep)}>Continue</button>
        </div>
    );
};

export default BookingStep;
