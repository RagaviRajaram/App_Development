import React from 'react';
import '../Assets/css/About.css'; // Ensure this CSS file is included
import i1 from '../Assets/Images/premium-quality.png';
import i2 from '../Assets/Images/idea.png';
import i3 from '../Assets/Images/budget.png';
import i4 from '../Assets/Images/users.png';
import w1 from '../Assets/Images/women1.jpg';
import w2 from '../Assets/Images/man.jpg';
import w3 from '../Assets/Images/women2.jpg';

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Discover who we are and what drives us.</p>
      </header>
      <section className="about-section mission">
        <div className="section-content">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide exceptional event planning services that create unforgettable experiences for our clients. We strive for excellence in every event we organize, ensuring attention to detail and unparalleled service. We aim to deliver personalized and memorable event experiences, maintaining a client-centric approach in all our interactions. Our mission includes utilizing innovative and creative solutions to meet client needs, ensuring budget-friendly options without compromising quality. Building a strong, professional, and passionate team is at the core of our mission. We are also committed to promoting sustainability and environmentally friendly practices.
          </p>
        </div>
      </section>
      <section className="about-section values">
        <div className="section-content">
          <h2>Our Values</h2>
          <div className="values-container">
            <div className="value-card">
              <img src={i1} alt="Integrity" className="value-image" />
              <div className="value-content">
                <h3>Quality work</h3>
                <blockquote>
                  <p>"We uphold the highest standards of honesty and transparency."</p>
                </blockquote>
              </div>
            </div>
            <div className="value-card">
              <img src={i2} alt="Creativity" className="value-image" />
              <div className="value-content">
                <h3>Creativity</h3>
                <blockquote>
                  <p>"Innovative solutions and creative thinking are at our core."</p>
                </blockquote>
              </div>
            </div>
            <div className="value-card">
              <img src={i3} alt="Commitment" className="value-image" />
              <div className="value-content">
                <h3>Budget Friendly</h3>
                <blockquote>
                  <p>"We are dedicated to delivering exceptional results."</p>
                </blockquote>
              </div>
            </div>
            <div className="value-card">
              <img src={i4} alt="Excellence" className="value-image" />
              <div className="value-content">
                <h3>Professional Team</h3>
                <blockquote>
                  <p>"Striving for the highest quality in everything we do."</p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section team">
        <div className="section-content">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src={w1} alt="Minerva" />
              <h3>Minerva</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src={w2} alt="Kishore" />
              <h3>John Smith</h3>
              <p>Event Coordinator</p>
            </div>
            <div className="team-member">
              <img src={w3} alt="Ragavi Kishore" />
              <h3>Emily Wilson</h3>
              <p>Marketing Director</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <h2>Want to Know More?</h2>
        <p>Contact us to learn more about our services and how we can help you.</p>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </section>
    </div>
  );
};

export default About;
