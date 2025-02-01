import React from "react"; 
import "../Styles/AboutUs.css";
import About1 from '../Images/About1.png';
import About2 from '../Images/About2.png'; 
import About3 from '../Images/About3.png'; 
import Eye from '../Images/Eye.png'; 
import Target from '../Images/Target.png';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-content">
        <div className="subheading-about">About Us</div>
        <div className="heading-about">Why We Are Best</div>

        <div className="about-container">
          <div className="about-images">
            <div className="about-images-left">
            <img src={About1} alt="About 1" className="about-image left-image" />
            <img src={About2} alt="About 2" className="about-image below-left-image" />
            </div>
            <div className="about-images-right">
            <img src={About3} alt="About 3" className="about-image right-image" /> 

            </div>
          </div>

          <div className="about-text">

            <p>
              We are committed to delivering excellence in everything we do. Our expertise, innovation, 
              and dedication to customer satisfaction make us stand out.
            </p>

            <div className="about-details">
              <div className="detail-box-about">
                <img src={Eye} className="about-icon" alt="Eye" />
                <div>
                  <div>Our Vision</div>
                  <p>Lorem ipsum dolor sit amet consectetur. Ut elementum ac eget at. Id et at dui arcu risus.</p>
                </div>
              </div>

              <div className="detail-box-about">
              <img src={Target} className="about-icon" alt="target"/>
              <div>
                  <div>Our Mission</div>
                  <p>Lorem ipsum dolor sit amet consectetur. Ut elementum ac eget at. Id et at dui arcu risus.</p>
                </div>
              </div>
            </div>

            <button className="read-more-about">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
