import React, { useState } from "react";
import * as classes from "../styles/booking.module.css";
import { Button, TextField, Link } from "@mui/material";


const BookingRegistrationStep = (props) => {
    const [signupVisible, setSignupVisible] = useState(false);
    const [verificationVisible, setVerificationVisible] = useState(false);
    const [registrationInfo, setRegistrationInfo] = useState({ gender: "other" });
    const [loginInfo, setLoginInfo] = useState({});


    const registrationInfoHandler = (e) => {
        setRegistrationInfo({ ...registrationInfo, [e.target.name]: e.target.value });
    }

    const loginInfoHandler = (e) => {
        setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
    }

    const switchViews = (showSignup) => {
        setSignupVisible(showSignup);
        showSignup ? setLoginInfo({}) : setRegistrationInfo({});
    }

    const handleRegistration = () => {
        setVerificationVisible(true)
        //handle request and show verif code input
    }

    const handleVerification = () => {
        //handle request and switch to next page
        props.setWizardStep(props.currentStep+1, props.nextStep);
    }

    const handleLogin = () => {
        //handle request and switch to next page
    }

    return (
        <div className={classes.bookingStepHolder}>
            {signupVisible ?
                <div className={classes.signup}>
                    {verificationVisible ? <>
                        <p style={{ marginBottom: 20 }}>To proceed with your order, please enter the verification code that we sent you to <b>{registrationInfo.email}</b></p>
                        <TextField value={registrationInfo.verificationCode} name="verificationCode" onChange={(e) => registrationInfoHandler(e)} style={{ marginBottom: 20 }} fullWidth variant="outlined" label="Verification Code"></TextField>
                        <Button onClick={()=>handleVerification()} fullWidth style={{ marginBottom: 20 }} variant="contained" color="primary">Verify & Continue </Button>
                        <Link onClick={() => switchViews(false)} style={{ fontSize: 12, fontWeight: 500 }}>Click here to resend verification code.</Link>
                    </>
                        :
                        <>
                            <p style={{ marginBottom: 20 }}>Register</p>
                            <TextField value={registrationInfo.fullName} name="fullName" onChange={(e) => registrationInfoHandler(e)} style={{ marginBottom: 20 }} fullWidth variant="outlined" label="Full Name"></TextField>
                            <TextField value={registrationInfo.email} name="email" onChange={(e) => registrationInfoHandler(e)} type="email" style={{ marginBottom: 20 }} fullWidth variant="outlined" label="Email Address"></TextField>
                            <TextField value={registrationInfo.password} name="password" onChange={(e) => registrationInfoHandler(e)} type="password" style={{ marginBottom: 20 }} fullWidth variant="outlined" label="Password"></TextField>
                            <TextField value={registrationInfo.gender} name="gender" onChange={(e) => registrationInfoHandler(e)} style={{ marginBottom: 20 }} variant="outlined" fullWidth select label="Select your gender">
                                <option key="m" value="male">Male</option>
                                <option key="f" value="female">Female</option>
                                <option key="u" value="other">Other</option>
                            </TextField>
                            <Button onClick={()=>handleRegistration()} fullWidth style={{ marginBottom: 20 }} variant="contained" color="primary" type="submit">Create my account</Button>
                            <Link onClick={() => switchViews(false)} style={{ fontSize: 12, fontWeight: 500 }}>Already have an account? Sign In</Link></>}
                </div> :
                <div className={classes.signInContainer}>
                    <p style={{ marginBottom: 20 }}>Sign in or register to proceed</p>
                    <TextField onChange={(e) => loginInfoHandler(e)} type="email" style={{ marginBottom: 20 }} fullWidth variant="outlined" label="Email Address"></TextField>
                    <TextField onChange={(e) => loginInfoHandler(e)} type="password" style={{ marginBottom: 20 }} fullWidth variant="outlined" label="Password"></TextField>
                    <Button color="primary" style={{ marginBottom: 20 }} fullWidth variant="contained">Sign In</Button>
                    <Link style={{ fontSize: 12, fontWeight: 500 }} target="_blank" href="/password-recovery">Forgot password?</Link>
                    <Link onClick={() => switchViews(true)} style={{ fontSize: 12, marginLeft: 20, fontWeight: 500 }}>Dont have an account? Sign Up</Link>
                </div>}
        </div>
    );
};

export default BookingRegistrationStep;
