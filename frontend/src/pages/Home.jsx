import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import { GiTeacher } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
// import Testimonial from "./Testimonial";
import { ImBooks } from "react-icons/im";
import { IoIosPartlySunny } from "react-icons/io";
import { MdLibraryMusic } from "react-icons/md";
import monkeytree from "../assets/kids.jpg";
// import Homecontent from "./Homecontent";
import CarouselPage from "../pages/CarouselPage.jsx";
import kidhi from "../assets/actonhii.gif";

// import monkey from "../assets/monkeyclimb.png";
import Footer from "./Footer";

const Home = () => {
  const [numbers, setNumbers] = useState([0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const targetValues = [100, 250, 500];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const counterSection = document.querySelector(".number-counter");
      if (counterSection) {
        const rect = counterSection.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const intervals = targetValues.map((target, index) => {
        return setInterval(() => {
          setNumbers((prev) => {
            const newNumbers = [...prev];
            if (newNumbers[index] < target) {
              newNumbers[index] += 5;
            }
            return newNumbers;
          });
        }, 50);
      });

      setTimeout(() => {
        intervals.forEach(clearInterval);
      }, 5000);
    }
  }, [isVisible]);
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, // This allows animations to repeat on scroll
      mirror: true, // Ensures animation triggers when scrolling up as well
    });
  }, []);

  return (
    <>
      <CarouselPage />
      <div className="playschool-container">
        <header className="playschool-header" data-aos="fade-down">
          <img src={kidhi} alt="" />
          <h1>Happy Kids Play School</h1>
        </header>
        <div className="home-content">
          <div className="home-content-left" data-aos="fade-right">
            <img src={monkeytree} className="playschool-image" alt="" />
          </div>
          <div className="home-content-right" data-aos="fade-left">
            <h2>Time Kids– Where Learning Feels Like Play!</h2>
            <p>A Nurturing Space for Your Little One to Explore, Learn & Grow!</p>
            <ul>
              <li data-aos="fade-up">
                <GiTeacher /> Caring & Experienced Teachers
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <FaBook /> Creative & Play-Based Learning
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <RiTeamFill /> Strong Parent-Teacher Bonding
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <IoHome /> A Second Home for Your Child
              </li>
            </ul>
            <h4 data-aos="zoom-in">🎉 Admissions Open! Schedule a visit and experience the joy of early learning! </h4>
          </div>
        </div>
        <section className="playschool-features">
          <div className="playschool-feature-box" data-aos="flip-left">
            <ImBooks /> Interactive Learning
          </div>
          <div className="playschool-feature-box" data-aos="flip-left" data-aos-delay="100">
            <IoIosPartlySunny /> Art & Creativity
          </div>
          <div className="playschool-feature-box" data-aos="flip-left" data-aos-delay="200">
            <MdLibraryMusic /> Music & Dance
          </div>
        </section>
        <div className="number-counter" data-aos="fade-up">
          <div className="number-counter-background"></div>
          <div className="number-counter-full">
            <div className="number-counter-div" data-aos="zoom-in">
              <h1>{numbers[0]}</h1>
              <h3>Schools</h3>
            </div>
            <div className="number-counter-div" data-aos="zoom-in" data-aos-delay="100">
              <h1>{numbers[1]}</h1>
              <h3>Cities</h3>
            </div>
            <div className="number-counter-div" data-aos="zoom-in" data-aos-delay="200">
              <h1>{numbers[2]}</h1>
              <h3>Students Trained</h3>
            </div>
          </div>
        </div>
      </div>
      {/* <Homecontent />
      <Testimonial />
      */}
      
    </>
  );
};

export default Home;
