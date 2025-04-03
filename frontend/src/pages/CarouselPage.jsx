import React, { useState, useEffect } from 'react'; 
import './Carouselpage.css';
import car1 from '../assets/carousel1.jpg'; // Ensure correct file extension
import car2 from '../assets/carousel2.jpg';
import car3 from '../assets/carousel3.jpg';

const images = [car1, car2, car3]; // Store image variables, NOT strings

const CarouselPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 3000; // Auto-transition every 3 seconds

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, intervalTime);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <button className="prev-button" onClick={prevSlide}>❮</button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
        <button className="next-button" onClick={nextSlide}>❯</button>
      </div>
    </div>
  );
};

export default CarouselPage;
