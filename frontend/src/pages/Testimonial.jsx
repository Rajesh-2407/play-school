import React from "react";
import { motion } from "framer-motion";
import "../pages/Testimonial.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "This school has been a wonderful experience for my child. The teachers are caring and the activities are engaging!",
    image: "https://static.vecteezy.com/system/resources/thumbnails/024/983/914/small/simple-user-default-icon-free-png.png",
  },
  {
    name: "Michael Lee",
    text: "My daughter has learned so much here. She loves going to school every day!",
    image: "https://static.vecteezy.com/system/resources/thumbnails/024/983/914/small/simple-user-default-icon-free-png.png",
  },
  {
    name: "Emily Davis",
    text: "A fantastic environment for young learners. Highly recommend!",
    image: "https://static.vecteezy.com/system/resources/thumbnails/024/983/914/small/simple-user-default-icon-free-png.png",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">What Parents Say</h2>
      <div className="testimonial-wrapper">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <h4 className="testimonial-name">- {testimonial.name}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
