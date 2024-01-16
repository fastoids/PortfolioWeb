import React from 'react';
import './services.css';
import Row from 'react-bootstrap/Row';
import ServiceCard from './ServiceCard';
const AboutUs = () => {
    
  return (
    <section id='services' className='services-wrapper'>
      <div className="container py-5  font-link">
        <Row>
           <div className='servicesDiv'>
            <h5 className='servicesHeading'>——— Our Services</h5>
                <h2 className='services-heading'>We do Everything<font color='#FFA726'>.</font></h2>
                <h5 className='services-text'>
                Our services are designed to propel your business into the digital
                 future. From cutting-edge software development to cloud computing
                  solutions, cybersecurity, and harnessing the power of artificial intelligence, 
                  we offer a suite of services to elevate your tech capabilities. 
                  Stay ahead in the ever-evolving digital landscape with our expertise 
                  and commitment to excellence. Your success is our priority.
                </h5>
                </div>
        </Row>
        
  <div className="services-container">
  
      <ServiceCard
      />
  </div>
      </div>
    </section>
  );
};

export default AboutUs;
