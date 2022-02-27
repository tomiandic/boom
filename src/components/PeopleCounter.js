import React, {useState, useEffect} from "react";
import * as classes from "../styles/booking.module.css";



const PeopleCounter = (props) => {
 
    const [countNumber, setCountNumber] = useState(0);

    useEffect(()=>props.initialValue&&setCountNumber(props.initialValue), [])

    const increaseCount = () => {
        setCountNumber(countNumber+1, () => props.countIncreased(countNumber));
    }

    const decreaseCount = () => {
        let newCount = countNumber === 0 ? 0 : countNumber-1;
        setCountNumber(newCount, () => props.countDecreased(newCount));
    }


    return (
        <div className={classes.counterHolder}>
             <img
                className={classes.counterIcon}
                src="../icons/minus.svg"
                alt="increase ticket number by one"
                onClick={()=>decreaseCount()}
            />
            <p className={classes.countNumber}>{countNumber}</p>
             <img
                onClick={()=>increaseCount()}
                className={classes.counterIcon}
                src="../icons/plus.svg"
                alt="decrease ticket number by one"
            />
        </div>
    );
};

export default PeopleCounter;
