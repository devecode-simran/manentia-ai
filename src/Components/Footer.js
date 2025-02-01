import React from "react";
import "../Styles/Footer.css";
import Logo from "../Images/Logo.png"; 
import Facebook from "../Images/Facebook.png"; 
import Instagram from "../Images/Instagram.png";
import Twitter from "../Images/Twitter.png";
import LinkedIn from "../Images/Linkedin.png";
import YouTube from "../Images/Youtube.png";
import Message from '../Images/Message.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-box">
        <div className="footer-logo">
          <img src={Logo} alt="Company Logo" />
          <p id="company-name">Navytech</p>
        </div>
        <div className="footer-contact">
          <span>hello@navytech.com</span>
          <span>Phone : +01 23456789</span>
        </div>
        <div className="footer-social-media">
          <img src={Facebook} alt="Facebook" className="social-icon" />
          <img src={Instagram} alt="Instagram" className="social-icon" />
          <img src={Twitter} alt="Twitter" className="social-icon" />
          <img src={LinkedIn} alt="LinkedIn" className="social-icon" />
          <img src={YouTube} alt="YouTube" className="social-icon" />
        </div>
      </div>

      <div className="footer-box">
        <span className="footer-headings">Quick Links</span>
        <ul>
          <li>Services</li>
          <li>Portfolio</li>
          <li>About Us</li>
          <li>Testimonial</li>
        </ul>
      </div>

      <div className="footer-box">
        <span className="footer-headings">Resources</span>
        <ul>
          <li>Support</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>

      <div className="footer-box">
        <span className="footer-headings">Subscribe</span>
        <div className="subscribe-form">
        <div className="subscribe-form">
          <div className="input-area">
            <img src={Message} className="message-icon" alt="message icon" />
            <input
              type="email"
              placeholder="name@domain.com"
              className="email-input"
            />
            <button type="button" className="send-button">Send</button>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
