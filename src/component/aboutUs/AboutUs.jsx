import React from 'react';
import './aboutUs.css'; // Assume we have some CSS to make it look like the screenshot
import {ReactComponent as AboutIcon} from './../../aboutUs.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
const AboutUs = () => {
  return (
    <section id='about' className='container py-5 about-wrapper'>
      <div className="about-wrapper font-link">
        <Row>
            <Col md={6}>
                <AboutIcon/>
            </Col>
            <Col md={6} className="d-flex justify-content-center align-items-center">
            <div className='aboutDiv'>
            <h5 className='AboutUsHeading'>——— AboutUs</h5>
                <h2 className='about-heading'>Our Story<font color='#FFA726'>.</font></h2>
                <h5 className='about-text'>
                We are a Consultancy firm offering diverse experience designing,
                developing, and maintaining technologies both scalable and
                compatible across multiple platforms, browsers, and devices.
                </h5>
                <h5 className='about-text'>
                Adept at understanding the requirements of our clientele's design
                and deliver projects according to deadline while maintaining quality
                and code integrity to take a concept and convert into a 'beautifully'
                finished project to accommodate current and future needs.
                </h5>
                <Button className=""  size="lg" style={{background:'#FFA726'}}>
                Learn More</Button>

                </div>
            </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutUs;
