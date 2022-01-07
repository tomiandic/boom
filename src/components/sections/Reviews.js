import React from 'react'
import * as classes from "../../styles/reviews.module.css";



const Reviews = (props) => {

    return (
        <section className={classes.reviewSection}>
            <div className={classes.sectionContainer}>
                <h2>
                    What you said <br /> about us
                </h2>
                <img src="/quotes.svg" />
                <div className={classes.reviewContainer}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                        malesuada id ex nec rutrum. Donec vitae metus sollicitudin, pharetra
                        mauris in, venenatis mi. Nulla viverra augue purus, ac commodo orci
                        porttitor rutrum.
                    </p>
                    <div className={classes.reviewDetails}>
                        <p>Reviewer Name</p> 
                        <p>Review Source</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews;