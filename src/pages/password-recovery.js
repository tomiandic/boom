import React, {useState} from "react"
import { Button, TextField } from "@mui/material";
import Header from "../components/Header";

// styles
const pageStyles = {
  color: "#232129",
  paddingTop: "196px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const containerStyles = {
  width: "90%",
  maxWidth: 500
}

const paragraphStyles = {
  marginBottom: 18,
  color: "gray"
}

// markup
const PasswordRecovery = () => {
  const [email, setEmail] = useState("");

  const sendPasswordRecoveryCode = () => {
    //do axios call
  }

  const changeHandler = (e) => {
     setEmail(e.target.value); 
  }

  return (
    <main style={pageStyles}>
      <Header></Header>
      <title>Password recovery</title>
      <div style={containerStyles}>
        <h1 style={headingStyles}>Forgot password</h1>
        <p style={paragraphStyles}>
          Enter your email address below and we will send you recovery instructions
        </p>
        <TextField onChange={(e) => changeHandler(e)} value={email} style={{ marginBottom: 20 }} fullWidth type="email" variant="outlined" label="Email address"></TextField>
        <Button onClick={() => sendPasswordRecoveryCode()} fullWidth variant="contained" color="primary">Change Password</Button>
        <p style={{color: "gray", marginTop: 10, fontSize: 13}}>User with specified email does not exist</p>
      </div>
    </main>
  )
}

export default PasswordRecovery
