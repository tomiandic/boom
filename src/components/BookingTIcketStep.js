import React from "react";
import * as classes from "../styles/booking.module.css";
import PeopleCounter from "./PeopleCounter";
import Stepper from 'stepper-component'



const BookingTicketStep = (props) => {
    return (
        <div className={classes.bookingStepHolder}>
               <Stepper steps={4} 
            currentStep={1}/>
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
            
            <div className={classes.ticketType}>
              Total ticket price: <span className={classes.ticketTotal}>500.00$</span>
            </div>
            <button className={classes.mainButtonWizard} onClick={props.nextStep}>Continue</button>
        </div>
    );
};

export default BookingTicketStep;
