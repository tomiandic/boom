import React from "react";
import * as classes from "../styles/booking.module.css";
import PeopleCounter from "../components/PeopleCounter";



const BookingStep = (props) => {
    return (
        <div className={classes.bookingStepHolder}>
            <PeopleCounter initialValue={22} />
            <PeopleCounter initialValue={2} />
            <button onClick={props.nextStep}>Next Step</button>
        </div>
    );
};

export default BookingStep;
