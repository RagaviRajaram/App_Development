import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/Services.css'; // Adjust the path as necessary

// Import images
import wedding from '../Assets/Images/wedding.jpg';
import corporate from '../Assets/Images/corporate.jpg';
import birthday from '../Assets/Images/birthday.jpg';
import anniversary from '../Assets/Images/anniversary.jpg';
import babyshower from '../Assets/Images/babyshower.jpg';
import graduation from '../Assets/Images/graduation.jpg';
import housewarming from '../Assets/Images/housewarming.jpg';

const servicesData = [
  { title: 'Wedding Planning', description: 'Comprehensive wedding planning services including venue selection, catering, and coordination.', imageUrl: wedding },
  { title: 'Corporate Events', description: 'Professional planning for corporate events such as conferences, meetings, and product launches.', imageUrl: corporate },
  { title: 'Birthday Parties', description: 'Creative birthday party planning for all ages, including theme selection and entertainment.', imageUrl: birthday },
  { title: 'Anniversary Celebrations', description: 'Specialized services for memorable anniversary celebrations, from intimate gatherings to large parties.', imageUrl: anniversary },
  { title: 'Baby Showers', description: 'Beautifully planned baby showers with unique themes, decorations, and activities.', imageUrl: babyshower },
  { title: 'Graduation Parties', description: 'Fun and festive graduation parties with custom decorations and entertainment options.', imageUrl: graduation },
  { title: 'House Warming', description: 'Festive holiday party planning, including Christmas, Halloween, and New Year’s Eve celebrations.', imageUrl: housewarming },
];

const Services = () => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate('/availability');
  };

  return (
    <div className="services">
      <div className="card-container">
        {servicesData.map((service, index) => (
          <div className="card" key={index}>
            <img className="card-image" src={service.imageUrl} alt={service.title} />
            <div className="card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="view-button" onClick={handleViewClick}>View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
