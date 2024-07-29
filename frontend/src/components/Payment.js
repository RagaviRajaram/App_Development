// Payment.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/Payment.css';
import card from '../Assets/Images/card.jpg';

const Payment = () => {
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    // Simulate payment processing here
    console.log('Payment processed!');
    // Redirect to success page
    navigate('/success');
  };

  return (
    <div className="payment-container">
      <div className="card-image">
        <img src={card} alt="Credit Card" />
      </div>
      <div className="payment-form-container">
        <h2>Payment Information</h2>
        <form className="payment-form" onSubmit={handlePayment}>
          <div className="form-group">
            <label>Amount</label>
            <input 
              type="text" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Card Number</label>
            <input 
              type="text" 
              value={cardNumber} 
              onChange={(e) => setCardNumber(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Cardholder Name</label>
            <input 
              type="text" 
              value={cardHolder} 
              onChange={(e) => setCardHolder(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Expiry Date</label>
            <input 
              type="text" 
              value={expiry} 
              onChange={(e) => setExpiry(e.target.value)} 
              placeholder="MM/YY"
              required 
            />
          </div>
          <div className="form-group">
            <label>CVC</label>
            <input 
              type="text" 
              value={cvc} 
              onChange={(e) => setCvc(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="payment-button">Proceed to Pay</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
