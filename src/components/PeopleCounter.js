import React, { useState, useEffect } from "react";
import * as classes from "../styles/booking.module.css";



const PeopleCounter = (props) => {

    const [countNumber, setCountNumber] = useState(0);

    useEffect(() => props.initialValue && setCountNumber(props.initialValue), [])

    const increaseCount = () => {
        let newCount = countNumber === props.maxValue ? props.maxValue : countNumber + 1;
        setCountNumber(newCount, () => props.countIncreased(newCount));
    }

    const decreaseCount = () => {
        let newCount = countNumber === 0 ? 0 : countNumber - 1;
        setCountNumber(newCount, () => props.countDecreased(newCount));
    }

    let button1Classes = countNumber === 0 ? `${classes.counterIcon} ${classes.disabled}`: classes.counterIcon;
    let button2Classes = countNumber === props.maxValue ? `${classes.counterIcon} ${classes.disabled}`: classes.counterIcon;


    return (
        <div className={classes.counterHolder}>
            <img
                className={button1Classes}
                src="../icons/minus.svg"
                alt="increase ticket number by one"
                onClick={() => decreaseCount()}
            />
            <p className={classes.countNumber}>{countNumber}</p>
            <img
                onClick={() => increaseCount()}
                className={button2Classes}
                src="../icons/plus.svg"
                alt="decrease ticket number by one"
            />
        </div>
    );
};

export default PeopleCounter;
