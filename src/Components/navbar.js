import React from "react";
import "./navbar.css";
import logo from "..//images/mainlogo.png";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="containerNav">
        <div className="right"> <img src={logo} alt="image"></img></div>
          <div className="left"><ul >
              <li > <a href="https://namratauniversal.com/" className="nav-item nav-link active">Home</a></li>
              <li> <a href="https://namratauniversal.com/internship" className="nav-item nav-link">Internship</a></li>
              <li><a href="https://namratauniversal.com/" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Training And Development</a></li>
              <li> <a href="https://namratauniversal.com/" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Pages</a></li>


              
              <li> <a href="https://namratauniversal.com/about" className="nav-item nav-link">About</a></li>
              <li>  <a href="https://namratauniversal.com/contact" className="nav-item nav-link">Contact</a></li>
              <li> <a href="https://namratauniversal.com/blog" className="nav-item nav-link">Blog</a></li>
              <li> <a href="http://namratauniversal.com/application/views/payment.php" className="nav-item nav-link">PAY</a></li>
            
            </ul>
          </div>
        </div>
    </div>
  );
}

{/* <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto">
                           
                           
                            <div className="nav-item dropdown">
                        
                                <div className="dropdown-menu">
                                    <a href="https://namratauniversal.com/technologies" className="dropdown-item">Technologies</a>
                                    <a href="https://namratauniversal.com/digital-marketing" className="dropdown-item">Digital Marketing</a>
                                    <a href="https://namratauniversal.com/seo" className="dropdown-item">SEO</a>
                                </div>
                            </div>
                            
                            <div className="nav-item dropdown">
                                <a href="https://namratauniversal.com/" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Pages</a>
                                <div className="dropdown-menu">
                                    <a href="https://namratauniversal.com/service" className="dropdown-item">Services</a>
                                    <a href="https://namratauniversal.com/portfolio" className="dropdown-item">Portfolio</a>
                                    <a href="https://namratauniversal.com/pricing" className="dropdown-item">Pricing</a>
                                    <a href="https://namratauniversal.com/team" className="dropdown-item">Team Members</a>
                                    <a href="https://namratauniversal.com/review" className="dropdown-item">Reviews</a>
                                    <a href="https://namratauniversal.com/client" className="dropdown-item">Clients</a>
                                    <a href="https://namratauniversal.com/skill" className="dropdown-item">Skills</a>
                                </div>
                            </div>
                           
                          
                     
                        
                        <!--<div className="nav-item dropdown">-->
                        <!--        <a href="" className="nav-link dropdown-toggle" data-toggle="dropdown">Blog</a>-->
                        <!--        <div className="dropdown-menu">-->
                        <!--         <a href="http://namratauniversal.com/application/views/privacy.php" className="nav-item nav-link">privacy</a>-->
                        <!--             <a href="http://namratauniversal.com/application/views/terms & cond.php" className="nav-item nav-link">terms&cond</a>-->
                        <!--              <a href="http://namratauniversal.com/application/views/refund policy.php" className="nav-item nav-link">refund policy</a>-->
                                    

                        <!--        </div>-->
                        <!--    </div>-->
                            
                            
                        
                           <!--<a href="https://pay.namratauniversal.com/" className="nav-item nav-link">PAY</a>-->
                          
                           
                           
                        </div>
                    </div> */}