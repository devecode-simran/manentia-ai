import React from 'react';
import '../Styles/Partners.css'; 
import Google from '../Images/Google Logotype.png';
import Canva from '../Images/Canva Logotype.png';
import Amazon from '../Images/Amazon Logotype.png';
import Sketch from '../Images/Sketch Logotype.png';


const Partners = () => {
  const logos = [
    Google,Canva,Amazon,Sketch
  ];

  return (
    <div className="container">
      <div className="text-container">
        <div className="sub-heading-partners">Trusted by</div>
        <div className="heading-partners">Top Companies</div>
      </div>
      <div className="logos-container">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Company Logo ${index + 1}`} className="logo" />
        ))}
      </div>
    </div>
  );
};

export default Partners;