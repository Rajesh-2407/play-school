import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Service.css';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebookSquare, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import gif1 from '../assets/actionkid1.gif'
import gif2 from '../assets/actonhii.gif'
import { GiTeacher } from "react-icons/gi";
import { IoColorPalette } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { FaAppleAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";

const Service = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second animation duration
    }, []);

    return (
        <>  
            
        <div className="contact-bg">
        
        <h2 data-aos="fade-down">Our Services</h2>
        <div className="line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        </div>
            
            <div className="header">
            <img src={gif1} alt="GIF" />

                <div className="par">
                <h2 data-aos="fade-up">Welcome to Time Kids – A Fun & Engaging Learning Experience!</h2>
                <h3>At Time kids, we provide a nurturing and stimulating environment for young learners to embark on their educational journey. Our play-based learning approach fosters creativity, curiosity, and confidence in children, ensuring a strong foundation for their future.</h3>
                </div>
                <img src={gif2} alt="GIF" />

            </div>
            
            <div className="service-container">
                <div className="service-box" data-aos="flip-left"> 
                    <div className="icon"><GiTeacher /></div>
                    <h2>Parent-Teacher Integration</h2>
                    <p>We ensure a seamless connection between parents and teachers to track the child's progress and development.</p>
                </div>
                <div className="service-box" data-aos="flip-left">
                    <div className="icon"><IoColorPalette /></div>
                    <h2>Kids Engagement & Activities</h2>
                    <p>Interactive activities and fun learning experiences to keep children engaged and entertained.</p>
                </div>
                <div className="service-box" data-aos="flip-left">
                    <div className="icon"><MdOutlineSecurity /></div>
                    <h2>Safety & Well-being</h2>
                    <p>We prioritize the safety and well-being of children with a secure environment and trained staff.</p>
                </div>
                <div className="service-box" data-aos="flip-left">
                    <div className="icon"><FaAppleAlt /></div>
                    <h2>Healthy Meals & Nutrition</h2>
                    <p>Nutritious meals to support the overall growth and health of young learners.</p>
                </div>
                <div className="service-box" data-aos="flip-left">
                    <div className="icon"><FaBook /></div>
                    <h2>Interactive Learning Methods</h2>
                    <p>Innovative learning techniques to make education fun and engaging for kids.</p>
                </div>
                <div className="service-box" data-aos="flip-left">
                    <div className="icon"><FaBook /></div>
                    <h2>Interactive Learning Methods</h2>
                    <p>Innovative learning techniques to make education fun and engaging for kids.</p>
                </div>
            </div>

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
    );
}

export default Service;