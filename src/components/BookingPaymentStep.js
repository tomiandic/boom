import React, { useState } from "react";
import * as classes from "../styles/booking.module.css";
import { Button } from "gatsby-theme-material-ui";
import { StaticImage } from "gatsby-plugin-image";
import { List, ListItemIcon, ListItemText, ListItem, Radio, TextField } from "@mui/material";


const BookingPaymentStep = (props) => {
    const [cardType, setCardType] = useState("visa")


    const handlePay = () => {

    }

    return (
        <div className={classes.bookingStepHolder}>
            <div className={classes.signup}>
                <p style={{ marginBottom: 20 }}>Choose card type</p>
                <List>
                    <ListItem divider>
                        <ListItemIcon>
                            <StaticImage width={40}  src="../../static/icons/computop_creditcard_visa.svg" />
                        </ListItemIcon>
                        <ListItemText primary="Visa">
                        </ListItemText>
                        <Radio onChange={() => setCardType("visa")} checked={cardType==="visa"} />
                    </ListItem>
                    <ListItem divider>
                        <ListItemIcon>
                        <StaticImage  width={40} src="../../static/icons/computop_creditcard_mastercard.svg" />
                            
                        </ListItemIcon>
                        <ListItemText primary="MasterCard">
                            
                        </ListItemText>
                        <Radio onChange={() => setCardType("master")} checked={cardType==="master"} />
                    </ListItem>
                    <ListItem >
                        <ListItemIcon>
                        <StaticImage  width={40} src="../../static/icons/computop_maestro.svg" />
                            
                        </ListItemIcon>
                        <ListItemText primary="Maestro">
                            
                        </ListItemText>
                        <Radio onChange={() => setCardType("maestro")} checked={cardType==="maestro"} />
                    </ListItem>
                </List>

                <Button onClick={() => handlePay()} fullWidth style={{ marginBottom: 20 }} variant="contained" color="primary" type="submit">Proceed to payment</Button>
            </div>
        </div>
    );
};

export default BookingPaymentStep;
