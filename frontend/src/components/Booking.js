import React, { useState } from 'react';
import '../Assets/css/Booking.css';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const [eventName, setEventName] = useState('');
  const [organizerName, setOrganizerName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [venue, setVenue] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking API integration here
    console.log('Booking submitted!');
    navigate('/payment'); // Navigate to the payment page
  };

  return (
    <div className="booking-container">
      <h2>Book Your Event</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Event Name</label>
          <input 
            type="text" 
            value={eventName} 
            onChange={(e) => setEventName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Organizer Name</label>
          <input 
            type="text" 
            value={organizerName} 
            onChange={(e) => setOrganizerName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input 
            type="time" 
            value={time} 
            onChange={(e) => setTime(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Venue</label>
          <input 
            type="text" 
            value={venue} 
            onChange={(e) => setVenue(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Additional Information</label>
          <textarea 
            value={additionalInfo} 
            onChange={(e) => setAdditionalInfo(e.target.value)} 
          ></textarea>
        </div>
        <button type="submit" className="booking-button">Submit Booking</button>
      </form>
    </div>
  );
};

export default Booking;
