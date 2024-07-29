import React from 'react';
import '../Assets/css/MyEvent.css';

const MyEvent = () => {
  const events = [
    { event: 'Wedding', date: '2024-08-12', status: 'Confirmed' },
    { event: 'Corporate Meeting', date: '2024-09-15', status: 'Pending' }
  ];

  return (
    <div className="my-events">
      <h2>My Events</h2>
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.event}</td>
              <td>{event.date}</td>
              <td>{event.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyEvent;
