import React, { useEffect, useRef } from "react";

import Header from "../components/Header";
import Footer from "../components/sections/Footer";
import Events from "../components/Events";


const events = () => {
    return(
        <>
            <Header />
            <Events />
            <Footer />
        </>
    )
}

export default events;