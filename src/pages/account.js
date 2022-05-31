import React, { useState } from 'react'
import {
    Grid,
    CardContent,
    Card,
    MenuList,
    MenuItem,
    ListItemText,
    ListItemIcon,
    Stack,
    Button,
    CardActions,
    TextField
} from '@mui/material'
import * as classes from "../styles/account.module.css"
import { accountData } from "../data/data"
import Header from "../components/Header"
import Footer from "../components/sections/Footer"
import { StaticImage } from 'gatsby-plugin-image'

const Account = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section className={classes.accountSection}>
            <Header />

            <div className={classes.accountContainer}>
                <h2>Hello, {accountData.name} {accountData.surname}</h2>
                <br />
                <br />
                <Grid spacing={5} container>
                    <Grid item xs={3}>
                        <Card disableGutters elevation={0}>
                            <MenuList>
                                <MenuItem selected={tabIndex === 0} onClick={() => setTabIndex(0)} divider>
                                    <ListItemIcon><StaticImage height={18} src="../../static/icons/history.svg" /></ListItemIcon>
                                    <ListItemText>Order History</ListItemText>
                                </MenuItem>
                                <MenuItem selected={tabIndex === 1} divider onClick={() => setTabIndex(1)} >
                                    <ListItemIcon><StaticImage height={18} src="../../static/icons/settings.svg" /></ListItemIcon>
                                    <ListItemText>Profile Settings</ListItemText>
                                </MenuItem>
                                <MenuItem selected={tabIndex === 2} onClick={() => setTabIndex(2)} >
                                    <ListItemIcon><StaticImage width={18} src="../../static/icons/help.svg" /></ListItemIcon>
                                    <ListItemText>Help</ListItemText>
                                </MenuItem>
                            </MenuList>
                        </Card>
                    </Grid>
                    <Grid item xs={9}>
                        {tabIndex === 0 ? <>
                            <h4>Order History:</h4>
                            <br />
                            <Stack spacing={1}>
                                {accountData.past_orders.map(item =>
                                    <Card>
                                        <CardContent>
                                            <h5>{item.title} - {item.date}</h5>
                                            {item.tickets.map(ticket =>
                                                <p style={{ fontSize: "12px" }}>{ticket.title} - X{ticket.number}</p>
                                            )}
                                        </CardContent>
                                        <CardActions>
                                            <Button startIcon={<StaticImage width={15} src="../../static/icons/ticket.svg" />} size="small">Download Ticket/s</Button>
                                            <Button startIcon={<StaticImage width={15} src="../../static/icons/receipt.svg" />} size="small">Download Receipt</Button>
                                        </CardActions>
                                    </Card>
                                )}
                            </Stack>
                        </> : tabIndex === 1 ? <>
                            <h4>Profile Settings:</h4>
                            <br />


                            <Card>
                                <CardContent>
                                <Stack spacing={2}>
                                    <TextField value={accountData.name} label="Full Name"></TextField>
                                    <TextField value={accountData.email} label="Email"></TextField>
                                    <TextField value={accountData.gender} select label="Gender">
                                        <MenuItem value="M">Male</MenuItem>
                                        <MenuItem value="F">Female</MenuItem>
                                        <MenuItem value="O">Other</MenuItem>
                                    </TextField>
                                </Stack>
                                <br/>
                                <Button variant="contained">Save Changes</Button>
                                </CardContent>
                            </Card>


                        </> : tabIndex === 2 ? <>
                            <h4>How can we help you?:</h4>
                            <br />
                            <Stack direction={"row"} spacing={1}>

                                    <Card>
                                        <CardContent>
                                        Open FAQs
                                        </CardContent>
                                    </Card>
                                    <Card>
                                     
                                    </Card>

                            </Stack></> : null}
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </section>
    );
}

export default Account