import React from 'react';
import './Navbar.css';
import Mailicon from "../../assets/mail.svg"
import Phoneicon from "../../assets/smart-phone.svg"
import Facebookicon from "../../assets/facebook.svg"
import Instagramicon from "../../assets/instagram.svg"
import Linkedinicon from "../../assets/linkedin.svg"
import Tiktokicon from "../../assets/tiktok.svg"
import Twittericon from "../../assets/twitter.svg"
import Downicon from "../../assets/down-arrow.svg"
import Logo from "../../assets/Logo.png"

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="contact-info">
          <span>
            <a href="info@iykons.com">info@iykons.com</a>
          </span>
          <span>
            <a href="+442035982904">+44 20 3598 2904</a>
          </span>
        </div>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={Twittericon} alt='png' />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={Facebookicon} alt='png' />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={Instagramicon} alt='png' />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={Linkedinicon} alt='png' />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={Tiktokicon} alt='png' />
          </a>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="logo">
          <img src={Logo} alt='Logo_IMG' height={40} />
        </div>
        <nav className="nav-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT US</a>
          <div className="dropdown">
            <button className="dropbtn">SERVICES<img src={Downicon} alt='png'height={15} /></button>
            <div className="dropdown-content">
              <a href="#service1">Accounting & Finance</a>
              <a href="#service2">Digital Marketing & Branding</a>
              <a href="#service3">Business & Personal Finance</a>
              <a href="#service4">Technology & Innovation</a>
              <a href="#service5">Business & Personal Finance</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">PRODUCT<img src={Downicon} alt='png'height={15} /></button>
            <div className="dropdown-content">
              <a href="#product1">IYCONNECT</a>
              <a href="#product2">IYKONS Fintech</a>
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
