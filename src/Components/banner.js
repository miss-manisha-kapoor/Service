import React from 'react'
import banner1 from "../images/it-service-banner.png";
import "../App.css"
export default function banner() {
   
  return (
  
      <div className="it-banner" >
<img src={banner1} height="auto" width="100%" />

{/* <div className="service mt-2"> */}
            <div className="banner-container">
                <div className="section-header aos-init aos-animate" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                  <h2 >Complete IT Solutions Services</h2>
                    <p>Nationwide Service, Local Expertise Offer The Latest Software And Solutions To Our Customers!</p>
                </div>
         
                </div>

                  
</div>
   
  )
}
