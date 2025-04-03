import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <nav className="nav-container">
        <div className="nav-content">
          {/* Logo */}
          <div className="nav-logo">Time Kids</div>

          {/* Hamburger Button */}
          <div className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>

          {/* Navigation Links */}
          <div className={`nav-lists ${menuOpen ? "open" : ""}`}>
            <ul className="nav-ul">
              <li className="nav-li" ><Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li className="nav-li"><Link className="nav-link" to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
              <li className="nav-li"><Link className="nav-link" to="/service" onClick={() => setMenuOpen(false)}>Services</Link></li>

              {/* Dropdown Menu for "Our Program" */}
              <li className="nav-dropdown">
                <div 
                  className="nav-link dropdown-toggle" 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Pages ▾
                </div>
                {dropdownOpen && (
                  <ul className="dropdown-menu">
                    <li><Link className="nav-link" to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
                    <li><Link className="nav-link" to="/programgallery" onClick={() => setMenuOpen(false)}>Programs</Link></li>
                    <li><Link className="nav-link" to="/teacher" onClick={() => setMenuOpen(false)}>teachers</Link></li>
                  </ul>
                )}
              </li>

              <li className="nav-li"><Link className="nav-link" to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
              <li className="nav-li-login"><Link className="nav-link" to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
            </ul>
          </div>

          {/* Login Button */}
          <button className="nav-btn">
            <Link className="nav-link" to="/login">Login</Link>
          </button>
        </div>
           {/* Background Image */}
           <div className="nav-bottom-background"></div>
      </nav>
    </>
  );
};

export default Nav;