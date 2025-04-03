import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav.jsx";
// import CarouselPage from "./components/CarouselPage";
import HomePage from "./pages/HomePage.jsx";
// import OurProgram from "./Component/OurProgram.jsx";
import Gallery from "./pages/Gallery";
import ProgramsGallery from "./pages/ProgramsGallery";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import About from "./pages/About"
import OurTeachers from "./pages/OurTeachers";
import { Users } from "./pages/User.jsx";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/programgallery" element={<ProgramsGallery/>} />
        <Route path="/teacher" element={<OurTeachers/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element ={<Contact/>}/>
        <Route path="/login" element={<Login/>}/> 
        <Route path="/register" element={<Register/>}/>
        <Route path="/user" element={<Users/>}/>
      </Routes>
    </Router>
  );
};

export default App;
