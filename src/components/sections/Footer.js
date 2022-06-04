import React from 'react'
import * as classes from "../../styles/footer.module.css";



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
                    <a>Alfreda Stiglicha 26</a>
                    <a>52100 Pula, Croatia</a>
                    <br/>
                    <a>+385 123 354 5432</a>
                    <a>+3385 93 123 3214 432</a>
                    <br/>
                    <a>info@boomboatparty.com</a>
                </div>
                <div className={classes.footerColumn}>
                    <a>About</a>
                    <a>Faq</a>
                    <a>Gallery</a>
                    <a>Events</a>
                </div>
                <div className={classes.footerColumn}>

                    <a>Instagram</a>
                    <a>Facebook</a>
                    <a>LinkedIn</a>
                    <a>Tripadvisor</a>
                </div>
            </div>
        </section>
    )
}

export default Reviews;