import React from "react";
import * as classes from "../styles/booking.module.css";
import { List, ListItem, ListItemText } from "@material-ui/core";


const BookingSummary = () => {
    return(
        <div className={classes.bookingStepHolder}>
        <h4>Booking Summary</h4>
       <List>
           <ListItem>
               <ListItemText>
                   2x - Party boom boat ticket - VIP
               </ListItemText>
                    100$
           </ListItem>
           <ListItem divider>
               <ListItemText>
                   4x - Party boom boat ticket - Regulat
               </ListItemText>
               80$
           </ListItem>
            <ListItem  style={{justifyContent: "flex-end", fontWeight: "600"}}>
                Total Amount: 520$
            </ListItem> 
       </List>

       </div>
    )
}

export default BookingSummary;