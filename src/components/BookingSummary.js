import React, { useContext } from "react";
import * as classes from "../styles/booking.module.css";
import { List, ListItem, ListItemText, Divider } from "@material-ui/core";
import { BookingContext } from "../pages/event/booking";


const BookingSummary = ({ tickets}) => {
    const { selectedTickets } = useContext(BookingContext);
    console.log(selectedTickets[23])
    return (
        <div className={classes.bookingStepHolder}>
            <h4>Booking Summary</h4>
            <List>
                {
                    tickets.map(ticket =>
                        selectedTickets[ticket.id] ? <ListItem>
                            <ListItemText>
                                {ticket.name}  - x{selectedTickets[ticket.id]}
                            </ListItemText>
                            {ticket.price * selectedTickets[ticket.id]}$
                        </ListItem> : null)
                }
                <Divider light />
                <ListItem style={{ justifyContent: "flex-end", fontWeight: "600", marginTop: "10px" }}>
                    Total Amount: 
                    { tickets.reduce( (prevValue, currentValue) => selectedTickets[currentValue.id] ? prevValue + selectedTickets[currentValue.id] * currentValue.price:prevValue, 0)}$
                </ListItem>
            </List>

        </div>
    )
}

export default BookingSummary;