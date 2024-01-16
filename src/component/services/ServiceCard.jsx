import React from "react";
import './servicesCard.css';

import appDevIcon from './Icons/app-development.png';
import webDevIcon from './Icons/coding.png';
import DesktopDevIcon from './Icons/pc.png';

// import appDevIcon from './../../Icons/app-development.png'

const ServiceCard = ({ title, description, icon }) =>{ 
    
const services = [
    {
      title: 'App Development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
      icon: appDevIcon 
    },
    {
        title: 'Web Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
        icon: webDevIcon 
      }, 
      {
          title: 'Desktop Development',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
          icon: DesktopDevIcon 
        },{
            title: 'App Development',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
            icon: appDevIcon 
          },
          {
              title: 'Web Development',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
              icon: webDevIcon 
            }, 
            {
                title: 'Desktop Development',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
                icon: DesktopDevIcon 
              },  ];

return(
    <>
    {services.map(service => (
    <div className="service-card">
      <div className="icon">
        <img height={'75px'} width={'75px'} src={service.icon} alt="icon"/>
    </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
        ))}
        </>

  );
};

export default ServiceCard;