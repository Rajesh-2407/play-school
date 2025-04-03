import React from 'react'
import  './footer.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebookSquare, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer data-aos="fade-up">
                      <div className="footer-container">
                          <div className="footer-section company">
                              <h3>Company</h3>
                              <ul>
                                  <li><a href="#">About Us</a></li>
                                  <li><a href="#">Contact Us</a></li>
                                  <li><a href="#">Admissions</a></li>
                                  <li><a href="#">Privacy Policy</a></li>
                                  <li><a href="#">Terms & Conditions</a></li>
                              </ul>
                          </div>
                          <div className="footer-section contact">
                              <h3>Contact</h3>
                              <p>Happy Kids Play School</p>
                              <p>123 Play Street, Fun City</p>
                              <p><FaPhoneAlt /> +91 9876543210</p>
                              <p><IoMail /> info@happykids.com</p>
                          </div>
                          <div className="footer-section opening">
                              <h3>Opening Hours</h3>
                              <p>Monday - Friday: 08:00 AM - 06:00 PM</p>
                              <p>Saturday: 09:00 AM - 01:00 PM</p>
                              <p>Sunday: Closed</p>
                          </div>
                          <div className="footer-section newsletter">
                              <h3>Newsletter</h3>
                              <p>Follow Us:</p>
                              <div className="social-icons">
                                  <a href="#"><FaFacebookSquare /></a>
                                  <a href="#"><FaInstagram /></a>
                                  <a href="#"><FaYoutube /></a>
                                  <a href="#"><FaLinkedin /></a>
                              </div>
                          </div>
                      </div>
                      <div className="footer-bottom">
                          <p>&copy; 2025 Happy Kids Play School. All Rights Reserved.</p>
                      </div>
                  </footer>
    
    </>
  )
}

export default Footer