import React from 'react';
import * as classes from "../styles/newsletter.module.css"


const Newsletter = () => {
    return (
        <div className={classes.subscribe}>
            <h3>Sign up to our newsletter!</h3>
            <div className={classes.subscribeContainer}>
                <input placeholder='Your email address' type="text"></input>
                <button>Subscribe</button>
            </div>
        </div>
    )
}
export default Newsletter