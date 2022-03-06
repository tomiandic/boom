import React from "react";
import * as classes from "../styles/booking.module.css";
import Stepper from 'stepper-component'


const BookingRegistrationStep = (props) => {
    return (
        <div className={classes.bookingStepHolder}>
                <Stepper steps={4} 
            currentStep={2}/>
            <form>
                <label>
                    Full Name
                <input type="text"></input>
                </label>
                    
                <label>
                    Email
                <input type="text"></input>
                </label>
                <label>
                    Email
                <input type="text"></input>
                </label>
                <label>
                    Gender
                    <select>
                        <option value="m">Male</option>
                        <option value="m">Female</option>
                    </select>
                </label>
             <button type="submit">Create my account</button>
            </form>

            <button className={classes.mainButtonWizard} onClick={props.nextStep}>Continue</button>
        </div>
    );
};

export default BookingRegistrationStep;
