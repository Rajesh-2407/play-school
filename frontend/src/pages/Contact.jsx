import React from "react";

import './Contact.css'
import kiddance from '../assets/actionkid1.gif'
import Footer from '../pages/Footer.jsx'

const Contact = () => {
  return (
    <>
    <section className="contact-section">
      <div className="contact-bg">
        
        <h2>Contact Us</h2>
        <div className="line">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="contact-body">
        <div className="contact-info">
          <div className="cont-details">
       
            {/* <span><FaMobileAlt /></span> */}
            <span>Phone No.</span>
            <span className="text">+91 9900776655</span>
          </div>
          <div className="cont-details">
       
            {/* <FaEnvelopeOpen /> */}
            <span>E-mail</span>
            <span className="text">timekids@gmail.com</span>
          </div>
          <div className="cont-details">
          
            {/* <span><FaMapMarkerAlt /></span> */}
            <span>Address</span>

            <span className="text">10/103E Palayamkotaii, <br />Tirunelveli,Tamil nadu.</span>
          </div>
          <div className="cont-details">
        
            {/* <span><FaClock /></span> */}
            <span>Opening Hours</span>
       
            <span className="text">Monday - Friday <br/>(9:00 AM to 5:00 PM)</span>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div>
              <input type="text" className="form-control" placeholder="First Name" />
              <input type="text" className="form-control" placeholder="Last Name" />
            </div>
            <div>
              <input type="email" className="form-control" placeholder="E-mail" />
              <input type="text" className="form-control" placeholder="Phone" />
            </div>
            <textarea rows="5" placeholder="Message" className="form-control"></textarea>
            <input type="submit" className="send-btn" value="Send Message" />
          </form>
          <div>
            <img className="contact-img" src={kiddance} alt="Contact" />
          </div>
        </div>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.67272468509!2d77.86432787406004!3d8.335280299464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b047fb120adba71%3A0x3faeb78eab622124!2sThisAI%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1743611630007!5m2!1sen!2sin"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
          title="Google Maps"
        ></iframe>
        
      </div>
    </section>
      <Footer/>
    </>
  );
};

export default Contact;