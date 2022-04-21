import React, { useState } from "react";
import * as classes from "../styles/booking.module.css";
import { Button, TextField, Link } from "@material-ui/core";


const BookingPaymentStep = (props) => {
    const [cardholderInfo, setCardholderInfo] = useState({});


    const cardholderInfoHandler = (e) => {
        setCardholderInfo({ ...cardholderInfo, [e.target.name]: e.target.value });
    }

    const handlePay = () => {

    }

    return (
        <div className={classes.bookingStepHolder}>
            <div className={classes.signup}>
                <p style={{ marginBottom: 20 }}>Payment details</p>
                <TextField value={cardholderInfo.fullName} name="fullName" onChange={(e) => cardholderInfoHandler(e)} style={{ marginBottom: 20 }} fullWidth variant="outlined" label="Card Owner"></TextField>
                <TextField value={cardholderInfo.cardNum} name="cardNum" onChange={(e) => cardholderInfoHandler(e)} type="number" style={{ marginBottom: 20 }} fullWidth variant="outlined" label="Card Number"></TextField>
                <TextField value={cardholderInfo.expDate} name="expDate" onChange={(e) => cardholderInfoHandler(e)} type="date" style={{ marginBottom: 20 }} fullWidth variant="outlined" label="Expiration Date"></TextField>
                <TextField value={cardholderInfo.secCode} name="secCode" onChange={(e) => cardholderInfoHandler(e)} type="number" style={{ marginBottom: 20 }} fullWidth variant="outlined" label="Card Security code"></TextField>

                <Button onClick={() => handlePay()} fullWidth style={{ marginBottom: 20 }} variant="contained" color="primary" type="submit">Pay & Proceed to tickets</Button>
            </div>
        </div>
    );
};

export default BookingPaymentStep;
