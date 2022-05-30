import React from 'react'
import {
    Grid,
    CardContent,
    Card,
    MenuList,
    MenuItem,
    ListItemText,
    ListItemIcon,
    Stack
} from '@mui/material'
import * as classes from "../styles/faq.module.css"
import { accountData } from "../data/data"
import Header from "../components/Header"
import Footer from "../components/sections/Footer"

const Account = () => {
    return (
        <section className={classes.faqSection}>
            <Header />

            <div className={classes.faqContainer}>
                <h2>Hello, {accountData.name} {accountData.surname}</h2>
                <br />
                <br />
                <Grid spacing={5} container>
                    <Grid item xs={2}>
                        <Card elevation={0}>
                            <MenuList>
                                <MenuItem>
                                    <ListItemIcon></ListItemIcon>
                                    <ListItemText>Order History</ListItemText>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon></ListItemIcon>
                                    <ListItemText>Profile Settings</ListItemText>
                                </MenuItem>  <MenuItem>
                                    <ListItemIcon></ListItemIcon>
                                    <ListItemText>Help</ListItemText>
                                </MenuItem>
                            </MenuList>
                        </Card>
                    </Grid>
                    <Grid item xs={10}><h4>Order History:</h4>
                    <br/>
                    <Stack spacing={1}>
                        {accountData.past_orders.map(item =>
                            <Card>
                                <CardContent>
                                <h5>{item.title} - {item.date}</h5>
                                </CardContent><br />
                            </Card>
                        )}
                        </Stack>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </section>
    );
}

export default Account