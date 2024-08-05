import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/Availability.css';
import { useCart } from './CartContext';

// Import images
import a1 from '../Assets/Images/a1.jpg';
import a2 from '../Assets/Images/a2.jpg';
import a3 from '../Assets/Images/a3.jpg';
import a4 from '../Assets/Images/a4.jpg';
import a5 from '../Assets/Images/a5.jpg';
import a6 from '../Assets/Images/a6.jpg';
import a7 from '../Assets/Images/a7.jpg';
import a8 from '../Assets/Images/a8.jpg';
import a9 from '../Assets/Images/a9.jpg';
import a10 from '../Assets/Images/a10.jpg';
import a11 from '../Assets/Images/a11.jpg';
import a12 from '../Assets/Images/a12.jpg';

// Dummy data for organizers
const organizersData = [
  { id: 1, name: 'Event Masters', rating: '★★★★★', address: '123 Event St, Cityville', contact: '123-456-7890', specialty: 'Weddings', imageUrl: a1 },
  { id: 2, name: 'Party Planners', rating: '★★★★☆', address: '456 Celebration Ave, Townsburg', contact: '987-654-3210', specialty: 'Corporate Events', imageUrl: a2 },
  { id: 3, name: 'Gala Events', rating: '★★★★☆', address: '789 Festive Blvd, Metropolis', contact: '456-789-1234', specialty: 'Birthday Parties', imageUrl: a3 },
  { id: 4, name: 'Elegant Affairs', rating: '★★★★★', address: '321 Gala Rd, Citytown', contact: '789-123-4567', specialty: 'Anniversary Celebrations', imageUrl: a4 },
  { id: 5, name: 'Memorable Moments', rating: '★★★★☆', address: '654 Memory Ln, Villagecity', contact: '321-654-9870', specialty: 'Baby Showers', imageUrl: a5 },
  { id: 6, name: 'Celebration Experts', rating: '★★★☆☆', address: '987 Joy St, Urbantown', contact: '654-321-0987', specialty: 'Graduation Parties', imageUrl: a6 },
  { id: 7, name: 'Perfect Parties', rating: '★★★★☆', address: '123 Fun Ave, Cityplace', contact: '123-789-4560', specialty: 'House Warming', imageUrl: a7 },
  { id: 8, name: 'Event Perfection', rating: '★★★★★', address: '456 Bliss Rd, Happyville', contact: '987-123-6540', specialty: 'Weddings', imageUrl: a8 },
  { id: 9, name: 'Grand Gatherings', rating: '★★★☆☆', address: '789 Celebrate Ln, Festiville', contact: '456-321-7890', specialty: 'Corporate Events', imageUrl: a9 },
  { id: 10, name: 'Joyful Journeys', rating: '★★★★★', address: '101 Happy Blvd, Cheerstown', contact: '123-456-7891', specialty: 'Birthday Parties', imageUrl: a10 },
  { id: 11, name: 'Blissful Events', rating: '★★★★☆', address: '202 Fun Ln, Joycity', contact: '987-654-3211', specialty: 'Anniversary Celebrations', imageUrl: a11 },
  { id: 12, name: 'Ultimate Celebrations', rating: '★★★☆☆', address: '303 Party Ave, Eventown', contact: '456-789-1235', specialty: 'Baby Showers', imageUrl: a12 },
];

const Availability = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleBookClick = () => {
    navigate('/booking');
  };

  const handleAddToCart = (organizer) => {
    addToCart(organizer);
  };

  return (
    <div className="availability">
      <h2>Available Organizers</h2>
      <div className="organizer-container">
        {organizersData.map((organizer) => (
          <div key={organizer.id} className="organizer-card">
            <img src={organizer.imageUrl} alt={organizer.name} className="organizer-image" />
            <div className="organizer-content">
              <h3>{organizer.name}</h3>
              <p>Rating: {organizer.rating}</p>
              <p>Address: {organizer.address}</p>
              <p>Contact: {organizer.contact}</p>
              <p>Specialty: {organizer.specialty}</p>
              <button className="book-button" onClick={handleBookClick}>Book Event</button>
              <button className="add-to-cart-button" onClick={() => handleAddToCart(organizer)}>Add to Events</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Availability;
