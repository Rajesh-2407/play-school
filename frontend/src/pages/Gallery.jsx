import React, { useState } from "react";
import "./Gallery.css";
import carousel1 from "../assets/carousel1.jpg";

const images = [carousel1,carousel1,carousel1,carousel1,carousel1,carousel1,carousel1,carousel1,carousel1,carousel1];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            className="gallery-image"
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>
      
      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <span className="close-button" onClick={() => setSelectedImage(null)}>&times;</span>
            <img src={selectedImage} alt="Enlarged" className="gallery-modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
