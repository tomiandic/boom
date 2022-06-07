import React, { useEffect, useRef } from "react";

import Header from "../components/Header";
import Footer from "../components/sections/Footer";
import Event from "../components/Event";


const event = () => {
    return(
        <>
            <Header whiteBackground={true}/>
            <Event />
            <Footer />
        </>
    )
}

export default event;