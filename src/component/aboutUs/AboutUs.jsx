import React from 'react';
import './AboutUs.css'; // Assume we have some CSS to make it look like the screenshot

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <h2>Our Story.</h2>
        <p>
          We are a Consultancy firm offering diverse experience designing,
          developing, and maintaining technologies both scalable and
          compatible across multiple platforms, browsers, and devices.
        </p>
        <p>
          Adept at understanding the requirements of our clientele's design
          and deliver projects according to deadline while maintaining quality
          and code integrity to take a concept and convert into a 'beautifully'
          finished project to accommodate current and future needs.
        </p>
        <button onClick={() => { /* Implement navigation logic */ }}>
          Learn More
        </button>
      </div>
      <div className="about-us-technologies">
        {/* Icons and labels for the technologies */}
        <div className="technology">
          <img src="path-to-bootstrap-icon.png" alt="Bootstrap" />
          <span>Bootstrap</span>
        </div>
        {/* Repeat for other technologies */}
      </div>
    </div>
  );
};

export default AboutUs;
