import React, { useState } from "react";
import "../Styles/Testimonial.css"; 
import Quotes from '../Images/Quotes.png';
import Michael from '../Images/Micheal Wong.png'
import Avril from '../Images/Avril Song.png'

const testimonials = [
  {
    id: 1,
    quote: "Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing.",
    clientName: "Micheal Wong",
    clientImage: Michael ,
    rating: 5,
  },
  {
    id: 2,
    quote: "Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing.",
    clientName: "Avril Song",
    clientImage: Avril ,
    rating: 5,
  },
  {
    id: 3,
    quote: "Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing.",
    clientName: "Michael Lee",
    clientImage: "https://via.placeholder.com/100",
    rating: 5,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="testimonial-section">
      <div className="testimonial-subheading">Testimonial</div>
      <div className="testimonial-heading">What Our Clients Say</div>

      <div className="testimonial-container">
        {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial) => (
          <div key={testimonial.id} className="testimonial-box">
            <img
              src={Quotes}
              alt="Quote Icon"
              className="testimonial-quote"
            />
            <p className="testimonial-text">"{testimonial.quote}"</p>
            <div className="testimonial-client">
              <img
                src={testimonial.clientImage}
                alt={testimonial.clientName}
                className="client-image"
              />
              <div className="client-info">
                <p className="client-name">{testimonial.clientName}</p>
                <div className="client-stars">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonial-dots">
        {Array.from({ length: Math.ceil(testimonials.length / 2) }, (_, i) => (
          <span
            key={i}
            className={`dot ${i === Math.floor(currentIndex / 2) ? "active" : ""}`}
            onClick={() => setCurrentIndex(i * 2)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
