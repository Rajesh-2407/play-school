import React from "react";
import "./OurTeachers.css";
import teacher1 from "../assets/teacher.jpg";
import teacher2 from "../assets/teacher.jpg";
import teacher3 from "../assets/teacher.jpg";
import teacher4 from "../assets/teacher.jpg";

const teachers = [
  {
    name: "Mr. John Smith",
    subject: "Mathematics",
    bio: "Expert in algebra, geometry, and calculus with 10+ years of experience.",
    image: teacher1,
  },
  {
    name: "Ms. Sarah Johnson",
    subject: "Science",
    bio: "Passionate about physics, chemistry, and biology, making learning fun!",
    image: teacher2,
  },
  {
    name: "Mrs. Emily Brown",
    subject: "English",
    bio: "Dedicated to improving students' reading and writing skills.",
    image: teacher3,
  },
  {
    name: "Mr. Robert Wilson",
    subject: "History",
    bio: "Brings history to life with engaging storytelling and deep knowledge.",
    image: teacher4,
  },
];

const OurTeachers = () => {
  return (
    <div className="teachers-container">
      <h2 className="teachers-title">Meet Our Teachers</h2>
      <div className="teachers-grid">
        {teachers.map((teacher, index) => (
          <div key={index} className="teacher-card">
            <img src={teacher.image} alt={teacher.name} className="teacher-image" />
            <div className="teacher-info">
              <h3 className="teacher-name">{teacher.name}</h3>
              <p className="teacher-subject">{teacher.subject}</p>
              <p className="teacher-bio">{teacher.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeachers;
