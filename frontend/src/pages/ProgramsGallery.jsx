import React, { useState } from "react";
import "./ProgramsGallery.css";
import program1 from "../assets/carousel1.jpg";


const programImages = [
  {
    title: "Art & Craft",
    images: [
      program1,
      "/assets/art1.jpg",
      "/assets/art2.jpg",
      "/assets/art3.jpg",
    ],
  },
  {
    title: "Music Classes",
    images: [
      program1,
      "/assets/music1.jpg",
      "/assets/music2.jpg",
      "/assets/music3.jpg",
    ],
  },
  {
    title: "Sports Activities",
    images: [
      program1,
      "/assets/sports1.jpg",
      "/assets/sports2.jpg",
      "/assets/sports3.jpg",
    ],
  },
  {
    title: "Science Lab",
    images: [
      program1,
      "/assets/science1.jpg",
      "/assets/science2.jpg",
      "/assets/science3.jpg",
    ],
  },
];

const ProgramsGallery = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openGallery = (program) => {
    setSelectedProgram(program);
    setSelectedImageIndex(0); // Start from the first image
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev < selectedProgram.images.length - 1 ? prev + 1 : 0
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev > 0 ? prev - 1 : selectedProgram.images.length - 1
    );
  };

  return (
    <div className="programs-gallery-container">
      <h2 className="programs-gallery-title">Our Programs</h2>
      <div className="programs-gallery-grid">
        {programImages.map((program, index) => (
          <div
            key={index}
            className="programs-gallery-item"
            onClick={() => openGallery(program)}
          >
            <img
              src={program.images[0]}
              alt={program.title}
              className="programs-gallery-image"
            />
            <div className="programs-gallery-overlay">
              <p className="programs-gallery-text">{program.title}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProgram && (
        <div className="programs-gallery-modal" onClick={() => setSelectedProgram(null)}>
          <div className="programs-gallery-modal-content">
            <span className="programs-gallery-close-button" onClick={() => setSelectedProgram(null)}>
              &times;
            </span>
            <button className="gallery-nav prev" onClick={prevImage}>❮</button>
            <img
              src={selectedProgram.images[selectedImageIndex]}
              alt="Enlarged"
              className="programs-gallery-modal-image"
            />
            <button className="gallery-nav next" onClick={nextImage}>❯</button>
            <p className="modal-caption">{selectedProgram.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgramsGallery;
