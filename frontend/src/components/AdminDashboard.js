import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/css/AdminDashboard.css';
import profilePic from '../Assets/Images/man.jpg'; // Replace with your profile picture path

const AdminDashboard = () => {
  const recentOrders = [
    { event: 'Wedding', price: '$1200', payment: 'Paid', status: 'Confirmed' },
    { event: 'Birthday Party', price: '$500', payment: 'Pending', status: 'Pending' },
    { event: 'Corporate Event', price: '$2000', payment: 'Paid', status: 'Confirmed' },
    { event: 'Anniversary', price: '$750', payment: 'Paid', status: 'Confirmed' }
  ];

  const recentCustomers = [
    { name: 'Alice Johnson' },
    { name: 'Bob Smith' },
    { name: 'Charlie Davis' },
    { name: 'Diana Moore' }
  ];

  // Sample data for counts
  const cardData = {
    dailyViews: 245,
    bookings: 37,
    enquiries: 12,
    earnings: '$5,400'
  };

  return (
    <div className="admin-dashboard">
      <div className="side-panel">
        <div className="profile-section">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <h3 className="profile-name">John Smith</h3>
          <p className="profile-role">Administrator</p>
        </div>
        <ul>
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/edit-themes">Edit Themes</Link></li>
          <li><Link to="/create-theme">Create Theme</Link></li>
          <li><Link to="/user-info">User Info</Link></li>
        </ul>
      </div>
      <div className="main-content">
        <div className="cards-container">
          <div className="card">
            <h3>Daily Views</h3>
            <p className="card-count">{cardData.dailyViews}</p>
          </div>
          <div className="card">
            <h3>Bookings</h3>
            <p className="card-count">{cardData.bookings}</p>
          </div>
          <div className="card">
            <h3>Enquiries</h3>
            <p className="card-count">{cardData.enquiries}</p>
          </div>
          <div className="card">
            <h3>Earnings</h3>
            <p className="card-count">{cardData.earnings}</p>
          </div>
        </div>
        <section id="recent-orders">
          <h2>Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Price</th>
                <th>Payment</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index}>
                  <td>{order.event}</td>
                  <td>{order.price}</td>
                  <td>{order.payment}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section id="recent-customers">
          <h2>Recent Customers</h2>
          <ul>
            {recentCustomers.map((customer, index) => (
              <li key={index}>{customer.name}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
