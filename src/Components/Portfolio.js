import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import PortfolioImage1 from '../Images/Portfolio.png'
import PortfolioImage2 from '../Images/Portfolio2.png'
import PortfolioImage3 from '../Images/Portfolio3.png'
import PortfolioImage4 from '../Images/Portfolio4.png'
import PortfolioImage5 from '../Images/Portfolio5.png'
import PortfolioImage6 from '../Images/Portfolio6.png'
import RightArrow from '../Images/rightArrow.png'

import '../Styles/Portfolio.css'
const images = [
    PortfolioImage1,PortfolioImage2,PortfolioImage3,PortfolioImage4,PortfolioImage5,PortfolioImage6
];

const Portfolio = () => {
    return (
      <section className="portfolio">
        <div className="subheading-portfolio">Portfolio</div>
        <div className="heading-portfolio">Our Previous Works</div>
        <div className="portfolio-grid">
          {images.map((src, index) => (
            <div className="portfolio-item" key={index}>
              <img src={src} alt={`Work ${index + 1}`} className="portfolio-image" />
            </div>
          ))}
        </div>
        <div className="view-more-container"> 
          <button className="view-more-button">
            View More
                <img src={RightArrow} alt="Arrow" className="arrow-icon" />
          </button>
        </div>
      </section>
    );
  };
  
  export default Portfolio;