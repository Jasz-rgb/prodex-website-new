import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Added this import
import './Navbar.css';
import logoImage from '../assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Change <a> to <Link> and href to "to" */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <img src={logoImage} alt="ProDex Logo" className="brand-logo-img" />
          <div className="brand-text-wrapper">
            <span className="brand-cyan">P</span>
            <span className="brand-white">ro</span>
            <span className="brand-cyan">D</span>
            <span className="brand-white">ex</span>
          </div>
        </Link>
      </div>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        {/* Use <Link> for the pages we defined in App.js */}
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        
        {/* For these, if they are still sections on the Home page, 
            keep them as href anchors for now, OR convert them to Routes later */}
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
        <a href="#team" onClick={closeMenu}>Team</a>
        <a href="#faq" onClick={closeMenu}>FAQ</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

      <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className="nav-bottom-line"></div>
      <div className="nav-corner-circle left"></div>
      <div className="nav-corner-circle right"></div>
    </nav>
  );
};

export default Navbar;