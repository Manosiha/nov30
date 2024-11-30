import React from 'react';
import './Navbar.css'; // Create a CSS file to style the navbar

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="contact-info">
          <span>
            <a href="mailto:info@iykons.com">info@iykons.com</a>
          </span>
          <span>
            <a href="tel:+442035982904">+44 20 3598 2904</a>
          </span>
        </div>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="logo">
          <img src="/path/to/logo.png" alt="IYKONS Logo" />
        </div>
        <nav className="nav-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT US</a>
          <div className="dropdown">
            <button className="dropbtn">SERVICES</button>
            <div className="dropdown-content">
              <a href="#service1">Accounting & Finance</a>
              <a href="#service2">Business & Personal Finance</a>
              <a href="#service3">Digital Marketing & Branding</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">PRODUCT</button>
            <div className="dropdown-content">
              <a href="#product1">Product 1</a>
              <a href="#product2">Product 2</a>
            </div>
          </div>
          <a href="#blog">BLOG</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
