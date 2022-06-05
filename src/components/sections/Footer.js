import React from 'react'
import * as classes from "../../styles/footer.module.css";
import { Link } from 'gatsby';



const Reviews = (props) => {

    return (
        <section id="footer" className={classes.footerSection}>
            <svg width="100%" height="200px" fill="none" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="
          M0 67
          C 273,183
            822,-40
            1920.00,106 
          
          V 359 
          H 0 
          V 67
          Z">
                    <animate
                        repeatCount="indefinite"
                        attributeName="d"
                        dur="15s"
                        attributeType="XML"
                        values="
            M0 77 
            C 473,283
              822,-40
              1920,116 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,-40
              1222,283
              1920,136 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 973,260
              1722,-53
              1920,120 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,283
              822,-40
              1920,116 
            
            V 359 
            H 0 
            V 67 
            Z
            ">
                    </animate>
                </path>
            </svg>
            <div className={classes.sectionContainer}>
                <div className={classes.footerColumn}>
                    <h2>
                        BOOM <br/>BOAT<br/> PARTY
                    </h2><br/>
                    <p>Made to bring you best experiences bla bla bla .....</p>
                </div>
                <div className={classes.footerColumn}>
                   {/*  <h4>Column title</h4> */}
                    <a target="_blank" href="https://www.google.com/maps/place/Pula+Party+%2F+Boom+events/@44.8719698,13.8545113,19.82z/data=!4m19!1m13!4m12!1m4!2m2!1d15.9776768!2d45.8031104!4e1!1m6!1m2!1s0x477cd3c517dcfc53:0xb9fa9325823b5a68!2sboom+events!2m2!1d13.8541024!2d44.8722474!3m4!1s0x477cd3c517dcfc53:0xb9fa9325823b5a68!8m2!3d44.8722474!4d13.8541024">Ulica Alfreda Stiglicha 26
                    <br/>52100 Pula, Croatia</a>
                    <br/>
                    <a target="_blank" href="tel:+123321123321">+385 123 354 5432</a>
                    <a target="_blank" href="tel:+123321321123">+3385 93 123 3214 432</a>
                    <br/>
                    <a target="_blank" href="mailto:info@boomboatparty.com">info@boomboatparty.com</a>
                </div>
                <div className={classes.footerColumn}>
                    <Link to="/about">About</Link>
                    <Link to="/faq">Faq</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/events">Events</Link>
                </div>
                <div className={classes.footerColumn}>

                    <a target="_blank" href="">Instagram</a>
                    <a target="_blank" href="https://www.facebook.com/BOOMeventsPula/">Facebook</a>
                    <a target="_blank" href="https://www.tripadvisor.co.id/Attraction_Review-g295373-d24033050-Reviews-Boom_Events-Pula_Istria.html">Tripadvisor</a>
                </div>
            </div>
        </section>
    )
}

export default Reviews;