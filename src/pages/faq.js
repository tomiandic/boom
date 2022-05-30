import React from 'react'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary
} from '@mui/material'
import * as classes from "../styles/faq.module.css"
import { faqData } from "../data/data"
import Header from "../components/Header"
import Footer from "../components/sections/Footer"
import ArrowDown from "../../static/icons/arrow-down.svg"

const FAQ = () => {
    return (
        <section className={classes.faqSection}>
            <Header />
            
            <div className={classes.faqContainer}>
            <h2>Frequently Asked Questions</h2>
            <br/>
            <br/>
            <br/>
                {faqData.map(faq =>
                    <Accordion>
                        <AccordionSummary expandIcon={<img style={{height: "1.6rem"}} src={ArrowDown}/>}>
                            <p className={classes.faqQuestion}>{faq.question}</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className={classes.faqAnswer}>{faq.answer}</p>
                        </AccordionDetails>
                    </Accordion>
                )}
            </div>
            <Footer />
        </section>
    );
}

export default FAQ