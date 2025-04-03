import './About.css'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { PiShootingStarDuotone } from "react-icons/pi";
import { GiTrophyCup } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function App() {


  return (
    <>
      <header>
        {/* <nav>
            <div class="logo">Happy Kids</div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Programs</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav> */}
    </header>
    
    <section class="about">
    <div className="contact-bg">
        
        <h2>About us</h2>
        <div className="line">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
        <div class="about-container">
            <div class="about-left">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
                {/* <img src="play-school1.jpg" alt="Kids Learning" class="about-img">
                <img src="play-school2.jpg" alt="Kids Playing" class="about-img"> */}
            </div>
            <div class="about-right">
                <h2>Welcome to Happy Kids Play School</h2>
                <p><strong>Expert Educators:</strong> Our teachers are highly experienced and passionate about early childhood education. They ensure a safe and nurturing environment for every child.</p>
                <p><strong>Play-Based Learning:</strong> We focus on a fun and engaging curriculum that helps children develop creativity, social skills, and basic academic foundations.</p>
                <p><strong>Safe & Stimulating Environment:</strong> Our classrooms are designed to encourage exploration and active learning in a secure and loving atmosphere.</p>
                <p><strong>Affordable & Inclusive:</strong> We believe in quality education for all. Our programs are designed to be accessible to every family.</p>
            </div>
        </div>
    </section>

    <section class="mission-vision">
    <div class="card">
        <div class="icon"><TbTargetArrow /></div>
        <h3>Our Mission</h3>
        <p>We provide a nurturing environment that fosters creativity, exploration, and early learning through fun and interactive activities.</p>
    </div>

    <div class="card">
        <div class="icon"><PiShootingStarDuotone /></div>
        <h3>Our Vision</h3>
        <p>To create a world where every child has access to a joyful, engaging, and high-quality early education foundation.</p>
    </div>
  
        <div className="card">
            <div className="icon"><GiTrophyCup /></div>
            <h3>Our Motto</h3>
            <p>“Learn, Play, and Grow” – Encouraging kids to discover their potential through innovative and playful learning experiences.</p>
        </div>
    

</section>


    {/* <section class="programs">
        <h2>Our Programs</h2>
        <div class="program-grid">
            <div class="program-item"><h3>Nursery</h3><p>Engaging activities for early learners.</p></div>
            <div class="program-item"><h3>Pre-K</h3><p>Building foundational skills through play.</p></div>
            <div class="program-item"><h3>Kindergarten</h3><p>Preparing children for primary school.</p></div>
        </div>
    </section> */}
    
    {/* <section class="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@happykids.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Happy Street, Kids City</p>
    </section> */}
    
    <footer>
    <div class="footer-container">
        <div class="footer-section company">
            <h3>Company</h3>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Admissions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
            </ul>
        </div>
        <div class="footer-section contact">
            <h3>Contact</h3>
            <p>Happy Kids Play School</p>
            <p>123 Play Street, Fun City</p>
            <p><FaPhoneAlt /> +91 9876543210</p>
            <p><IoMail /> info@happykids.com</p>
        </div>
        <div class="footer-section opening">
            <h3>Opening Hours</h3>
            <p>Monday - Friday: 08:00 AM - 06:00 PM</p>
            <p>Saturday: 09:00 AM - 01:00 PM</p>
            <p>Sunday: Closed</p>
        </div>
        <div class="footer-section newsletter">
            <h3>Newsletter</h3>
            <p>Follow Us:</p>
            
            <div class="social-icons">
                <a href="#" ><FaFacebookSquare /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaYoutube /></a>
                <a href="#"><FaLinkedin /></a>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2025 Happy Kids Play School. All Rights Reserved.</p>
    </div>
</footer>

    </>
  )
}

export default App