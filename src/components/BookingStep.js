import React from "react";
import * as classes from "../styles/booking.module.css";
import PeopleCounter from "../components/PeopleCounter";



const BookingStep = (props) => {
    return (
        <div className={classes.bookingStepHolder}>
            <div className={classes.ticketType}>
                <div>
                    <p className={classes.ticketTitle}>Boat Party Ticket - Regular</p>
                    <p className={classes.ticketPrice}>$55.00/Person</p>
                </div>
            <PeopleCounter initialValue={1} />
            </div>
            <div className={classes.ticketType}>
                <div>
                    <p className={classes.ticketTitle}>Boat Party Ticket - Regular</p>
                    <p className={classes.ticketPrice}>$55.00/Person</p>
                </div>
            <PeopleCounter initialValue={1} />
            </div>
            <div className={classes.ticketType}>
                <div>
                    <p className={classes.ticketTitle}>Boat Party Ticket - Regular</p>
                    <p className={classes.ticketPrice}>$55.00/Person</p>
                </div>
            <PeopleCounter initialValue={1} />
            </div>
            <div className={classes.ticketType}>
                <div>
                    <p className={classes.ticketTitle}>Boat Party Ticket - Regular</p>
                    <p className={classes.ticketPrice}>$55.00/Person</p>
                </div>
            <PeopleCounter initialValue={1} />
            </div>
            
           
            <button className={classes.mainButtonWizard} onClick={props.nextStep}>Next Step</button>
        </div>
    );
};

export default BookingStep;
