import React, { useState } from "react";
import "../Styles/Navbar.css";
import Logo from "../Images/Logo.png";
import IconSearch from "../Images/Icon Search.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo - Always on Left */}
        <div className="logo-nav">
          <img src={Logo} alt="Logo" width="60" height="34.5" />
        </div>

        {/* Desktop Menu */}
        <ul className={`nav-items ${isMobileMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/customers">Testimonial</Link>
          </li>
          <li>
            <button className="search-icon">
              <img src={IconSearch} alt="Search" />
            </button>
          </li>
        </ul>

        {/* Talk to Us Button - Always on Right */}
        <button className="talk-to-us" onClick={() => navigate("/contact")}>
          Talk to Us
        </button>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-toggle" onClick={handleMobileMenuToggle}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
