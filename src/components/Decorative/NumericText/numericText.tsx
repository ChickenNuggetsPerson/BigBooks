'use client'

import { useEffect, useState } from "react";
import "./text.css"



const Counter = ({ val = 0, animDelta = 50 }) => {
    const [numArray, setNumArray] = useState(Array.from([], Number));

    useEffect(() => {
        // Split the value into individual digits
        const newNumArray = Array.from(String(val), Number);

        // Only update the array if the value changes
        if (JSON.stringify(numArray) !== JSON.stringify(newNumArray)) {
            setNumArray(newNumArray);
        }
    }, [val]);

    return (
        <div className="counter flex hstack">
            {numArray.map((num, i) => (
                <NumberDisplay key={i} value={num} animDelay={i * animDelta} />
            ))}
        </div>
    );
};


interface DisplayParms {
    value: number
    animDelay: number
}

const NumberDisplay = ({ value, animDelay }: DisplayParms) => {
    const [displayValue, setDisplayValue] = useState(value);
    const [isNew, setNew] = useState(true)

    const [transitionClass, setClass] = useState("numeric-text fade-in")
    const [width, setWidth] = useState("0px")

    useEffect(() => {
        
        if (isNew) {
            setTimeout(() => {
                setDisplayValue(value)
                setNew(false)
            }, animDelay);

            setTimeout(() => {
                setClass("numeric-text fade-in fade-default")
                setWidth("1rem")
            }, animDelay + 250); 

            setTimeout(() => {
                setClass("numeric-text")
            }, animDelay + 300); 

        } else {

            setClass("numeric-text fade-out")

            setTimeout(() => {
                setDisplayValue(value)
                setClass("numeric-text fade-in")
            }, animDelay + 150)

            setTimeout(() => {
                setClass("numeric-text fade-default")
            }, animDelay + 250)

            setTimeout(() => {
                setClass("numeric-text")
            }, animDelay + 300); 

        }
    }, [value, animDelay]);

    

    return (
        <h1 className={transitionClass} style={{ width: width }}>
            {displayValue}
        </h1>
    );
};

export default Counter;