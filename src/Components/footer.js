import React from 'react'
import './footer.css';

function footer() {
  return (
    <div className="App">
      <div className="footer">
     
          <div className="about">
            <h3><u>ABOUT US</u></h3>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
              <li>
                <a>Client</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Service</a>
              </li>
              <li>
                <a>Team</a>
              </li>
              <li>
                <a>Skill</a>
              </li>

            </ul>
          </div>
          <div className="useful">
          <h3><u>USEFUL LINKS</u></h3>
          <ul>
              <li>
                <a> Technology</a>
              </li>
              <li>
                <a>Digital Marketing</a>
              </li>
              <li>
                <a>SEO Service</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>Terms & Conditions</a>
              </li>
              <li>
                <a>Refund Policy</a>
              </li>

            </ul>
          </div>
          <div className="contact">
          <h3><u>CONTACT US</u></h3>
          <p>
            Head Office :
          </p>
          <p>3C, A1 Sector 10, Noida Uttar Pradesh, India</p>
          <p>Branch Office :</p>
          <p>A-50, Shalimar Garden Main Near
New Seemapuri Depot Delhi NCR</p>
<p><strong>Phone:</strong>  +918506922777, +918506944777</p>
<p><strong>Landline:</strong> 01203174973</p>
          </div>
          <div className="subscription">
          <h3><u>SUBSCRIPTION</u></h3>
          <p>Join Our Newsletter</p>
          <form>
            <input type='email' name='email' required />
            <input type='submit' name='submit' value="Subscribe" />
          </form>
          <p><strong>Email:-</strong>info@namratauniversal.com</p>
          <p><strong>Email:-</strong>namratauniversal@gmail.com</p>
          
        </div>
      </div>
    </div>
  );
}

export default footer;
  
