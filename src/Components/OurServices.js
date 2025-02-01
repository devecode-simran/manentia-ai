import React from 'react';
import '../Styles/OurServices.css'; // Import the CSS file
import PaintBrush from '../Images/PaintBrush.png';
import DeviceMobile from '../Images/DeviceMobile.png';
import Global from '../Images/GlobeHemisphereWest.png';
import CreditCard from '../Images/CreditCard.png';
const OurServices = () => {
  const services = [
    {
      logo: PaintBrush, 
      heading: 'Branding and UI/UX',
      description:
        'Lorem ipsum dolor sit amet consectetur. Quam diam augue lectus vivamus metus',
    },
    {
      logo: Global, 
      heading: 'Web Development',
      description:
        'Lorem ipsum dolor sit amet consectetur. Quam diam augue lectus vivamus metus',
    },
    {
      logo: DeviceMobile, 
      heading: 'Mobile Development',
      description:
        'Lorem ipsum dolor sit amet consectetur. Quam diam augue lectus vivamus metus',
    },
    {
      logo: CreditCard, 
      heading: 'Digital Marketing',
      description:
        'Lorem ipsum dolor sit amet consectetur. Quam diam augue lectus vivamus metus',
    },
  ];

  return (
    <div className="our-services-container">
      <div className="our-services-header">
        <div className="sub-heading-services">Our services</div>
        <div className="heading-services">Growth based services</div>
      </div>
      <div className="tiles-container">
        {services.map((service, index) => (
          <div key={index} className="service-tile">
            <img src={service.logo} alt={`${service.heading} Logo`} className="service-logo" />
            <div className="service-heading">{service.heading}</div>
            <div className="service-description">{service.description}</div>
            <div className="view-details">View details</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;