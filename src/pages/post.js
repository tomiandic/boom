import React, { useEffect, useRef } from "react";

import Header from "../components/Header";
import Footer from "../components/sections/Footer";
import BlogPost from "../components/BlogPost";


const post = () => {
    return(
        <>
            <Header />
            <BlogPost />
            <Footer />
        </>
    )
}

export default post;