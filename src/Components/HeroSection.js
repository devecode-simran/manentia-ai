// Hero.jsx
import React from 'react';
import '../Styles/HeroSection.css';
import { FaPhone } from 'react-icons/fa'; // Or your chosen phone icon
import HeroImage from '../Images/Hero.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p>#1 Worldwide Digital Solution Agency</p>
        <p id='hero-para'>
          Revolutionize your global digital strategy with the #1 Worldwide Digital
          Solution Agency, pioneering innovative solutions for unparalleled
          success.
        </p>
        <button className="book-a-call">
          <FaPhone className="phone-icon" />
          Book a Call
        </button>
        <div className="stats-container">
          <div className="stat-box">
            <span className="stat-number">75K+</span>
            <span className="stat-text">Project Completed</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">20+</span>
            <span className="stat-text">Years of Experience</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">400+</span>
            <span className="stat-text">Clients Worldwide</span>
          </div>
        </div>
      </div>
      <img
        src={HeroImage} // Replace with your image path
        alt="Hero"
        className="hero-image"
      />
    </section>
  );
};

export default Hero;
