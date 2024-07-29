import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import '../Assets/css/UserDashboard.css';
import EditProfile from './EditProfile';
import MyEvent from './MyEvent';
import Settings from './Settings';
import profilePic from '../Assets/Images/women1.jpg'; // Add your profile picture here

const UserDashboard = () => {
  const recentActivities = [
    { activity: 'Booked a wedding event', date: '2024-07-01' },
    { activity: 'Updated profile picture', date: '2024-06-25' },
    { activity: 'Changed password', date: '2024-06-20' }
  ];

  const upcomingEvents = [
    { event: 'Anniversary Party', date: '2024-08-12' },
    { event: 'Corporate Meeting', date: '2024-09-15' }
  ];

  return (
    <div className="user-dashboard">
      <div className="side-panel">
        <div className="profile-section">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <h2>John Doe</h2>
          <p>johndoe@example.com</p>
        </div>
        <ul>
          <li><Link to="/user-dashboard">Dashboard</Link></li>
          <li><Link to="/edit-profile">Edit Profile</Link></li>
          <li><Link to="/my-events">My Events</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </div>
      <div className="main-content">
        <div className="cards-container">
          <div className="card">Recent Activities</div>
          <div className="card">Upcoming Events</div>
          <div className="card">Notifications</div>
          <div className="card">Messages</div>
        </div>
        <section id="recent-activities">
          <h2>Recent Activities</h2>
          <ul>
            {recentActivities.map((activity, index) => (
              <li key={index}>{activity.activity} - {activity.date}</li>
            ))}
          </ul>
        </section>
        <section id="upcoming-events">
          <h2>Upcoming Events</h2>
          <ul>
            {upcomingEvents.map((event, index) => (
              <li key={index}>{event.event} - {event.date}</li>
            ))}
          </ul>
        </section>
        <section id="notifications">
          <h2>Notifications</h2>
          <ul>
            <li>New message from Alice</li>
            <li>Your booking is confirmed</li>
          </ul>
        </section>
        <section id="messages">
          <h2>Messages</h2>
          <ul>
            <li>Message from Bob: "Looking forward to the event!"</li>
            <li>Message from Charlie: "Can you send me the details?"</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

const UserDashboardRoutes = () => (
  <Routes>
    <Route path="/user-dashboard" element={<UserDashboard />} />
    <Route path="/edit-profile" element={<EditProfile />} />
    <Route path="/my-events" element={<MyEvent />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
);

export { UserDashboard, UserDashboardRoutes };
