import React from "react";
import * as classes from "../styles/booking.module.css";
import PeopleCounter from "./PeopleCounter";



const BookingStep = (props) => {

    return (
        <div className={classes.bookingStepHolder}>
            {
                props.tickets.map(ticket =>
                    <div className={classes.ticketType}>
                        <div>
                            <p className={classes.ticketTitle}>{ticket.name}</p>
                            <p className={classes.ticketPrice}>{ticket.price}$/person</p>
                        </div>
                        <PeopleCounter id={ticket.id} initialValue={0} maxValue={ticket.available} />
                    </div>
                )
            }

            {
                props.showButton?
                <button
                    className={classes.mainButtonWizard}
                    onClick={() => props.setWizardStep(props.currentStep + 1, props.nextStep)}>
                    Continue
                </button>
                :
                <button
                    disabled
                    style={{background: "lightgray"}}
                    className={classes.mainButtonWizard}
                    onClick={() => props.setWizardStep(props.currentStep + 1, props.nextStep)}>
                    Continue
                </button>

            }
        </div>
    );
};

export default BookingStep;
