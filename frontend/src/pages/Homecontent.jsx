import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Homecontent.css";
import gif1 from '../assets/actionkid1.gif';
import { FaArrowRight } from "react-icons/fa";
import treekid from '../assets/treekid.jpg';
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { IoBookSharp } from "react-icons/io5";
import { TbActivity } from "react-icons/tb";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

const Homecontent = () => {

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      once: false,      // Ensures animation happens every time it enters the viewport
      mirror: true      // Allows animations to trigger when scrolling up
    });
  }, []);

  return (
    <div className="homecontent-fullback">
      <div className="home-content-new">

        {/* Header with Animation */}
        <header className="home-header" data-aos="fade-down">
          <h1>Welcome to a World of Fun & Learning!</h1>
        </header>

        <div className="homecontent-header">
          <div className="homecontent-left">

            {/* Activities Section */}
            <section className="home-activities" data-aos="fade-right">
              <h2><TbActivity className="homecontent-icon" /> Exciting Activities</h2>
              <p>Music, storytelling, play-based learning & more!</p>
            </section>

            {/* Educators Section */}
            <section className="home-educators" data-aos="fade-right" data-aos-delay="100">
              <h2><MdOutlineConnectWithoutContact className="homecontent-icon"/> Caring Educators</h2>
              <p>Passionate teachers who nurture every child.</p>
            </section>

            {/* Safety Section */}
            <section className="home-safety" data-aos="fade-right" data-aos-delay="200">
              <h2><AiFillSafetyCertificate className="homecontent-icon"/> Safe & Homely Environment</h2>
              <p>CCTV surveillance, child-friendly infrastructure.</p>
            </section>

            {/* Parent-Teacher Section */}
            <section className="home-parent-teacher" data-aos="fade-right" data-aos-delay="300">
              <h2><BsFillTelephoneForwardFill className="homecontent-icon"/> Seamless Parent-Teacher Connection</h2>
              <p>Regular updates & interactive meetings.</p>
            </section>

            {/* Learning Section */}
            <section className="home-learning" data-aos="fade-right" data-aos-delay="400">
              <h2><IoBookSharp className="homecontent-icon"/> Age-Appropriate Learning</h2>
              <p>A blend of Montessori & play-based education.</p>
            </section>

          </div>

          {/* Image Section with Animation */}
          <div className="home-imggif" data-aos="fade-left">
            <img src={treekid} alt="" className="animate-image" />
          </div>

        </div>

        {/* Why Choose Us Section */}
        <section className="home-why-choose">
          <h1 data-aos="fade-up">Why Choose Us?</h1>
          <div className="home-why-choose-head">

            {/* GIF Image with Animation */}
            <div className="home-why-choose1" data-aos="zoom-in">
              <img src={gif1} alt="" />
            </div>

            {/* List with Animation */}
            <div className="home-why-choose2">
              <ul>
                <li data-aos="fade-up"><FaArrowRight />&nbsp;&nbsp; Child-Centered Learning Approach</li>
                <li data-aos="fade-up" data-aos-delay="100"><FaArrowRight />&nbsp;&nbsp; Emotional, Social & Cognitive Development</li>
                <li data-aos="fade-up" data-aos-delay="200"><FaArrowRight />&nbsp;&nbsp; Personalized Attention & Small Class Size</li>
                <li data-aos="fade-up" data-aos-delay="300"><FaArrowRight />&nbsp;&nbsp; Interactive Learning with Hands-On Activities</li>
                <li data-aos="fade-up" data-aos-delay="400"><FaArrowRight />&nbsp;&nbsp; Special Events, Festivals & Birthday Celebrations</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Footer Section with Animation */}
        <footer className="home-footer" data-aos="fade-up">
          <p>A joyful beginning to your child’s learning journey starts here!</p>
          <button className="home-visit-btn" data-aos="zoom-in">Make an Admission</button>
        </footer>

      </div>
    </div>
  );
};

export default Homecontent;
