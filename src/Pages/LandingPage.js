import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar'; // Import your Navbar component
import Hero from '../Components/HeroSection'; // Import your Navbar component
import Partners from '../Components/Partners';
import OurServices from '../Components/OurServices';
import Portfolio from '../Components/Portfolio';
import AboutUs from '../Components/AboutUs';
import Testimonial from '../Components/Testimonial';
import Blog from '../Components/Articles';
import Footer from '../Components/Footer';
import '../Styles/LandingPage.css'
function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navItems = document.querySelector('.nav-items');

    if (mobileMenuToggle && navItems) {
      mobileMenuToggle.addEventListener('click', handleMobileMenuToggle);
    }

    return () => {
      if (mobileMenuToggle && navItems) {
        mobileMenuToggle.removeEventListener('click', handleMobileMenuToggle);
      }
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className={`nav-items ${isMobileMenuOpen ? 'active' : ''}`}></div> {/* Add the class conditionally */}
      <Hero/>
      <Partners/>
      <OurServices/>
      <Portfolio/>
      <AboutUs/>
      <Testimonial/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;