import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/Home.css';
import CarouselComponent from '../components/CarouselComponent';

// Import images
import image2 from '../Assets/Images/image2.jpg';
import image1 from '../Assets/Images/image1.jpg';
import cateringImage from '../Assets/Images/catering.jpg';
import galleryImage1 from '../Assets/Images/hairdo.jpg';
import galleryImage2 from '../Assets/Images/makeup.jpg';
import galleryImage3 from '../Assets/Images/mehandi.jpg';
import galleryImage4 from '../Assets/Images/photography.jpg';
import galleryImage5 from '../Assets/Images/hall.jpg';
import galleryImage6 from '../Assets/Images/garland.jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleFeedbackClick = () => {
    navigate('/contact');
  };

  return (
    <div className="home">
      <div className="hero-content">
        <section className="carousel-section">
          <CarouselComponent />
        </section>
        <a href="/services" className="cta-button">Explore Services</a>
      </div>

      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features-container">
          <div className="feature card">
            <img src={image2} alt="Event Planning" />
            <i className="fas fa-calendar-alt"></i>
            <h3>Event Planning</h3>
            <p>We offer comprehensive event planning services to make your event memorable.</p>
          </div>
          <div className="feature card">
            <img src={image1} alt="Entertainment" />
            <i className="fas fa-music"></i>
            <h3>Entertainment</h3>
            <p>From live bands to DJs, we provide top-notch entertainment options.</p>
          </div>
          <div className="feature card">
            <img src={cateringImage} alt="Catering" />
            <i className="fas fa-utensils"></i>
            <h3>Catering</h3>
            <p>Our catering services ensure that your guests enjoy delicious meals.</p>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <h2>Gallery</h2>
        <div className="gallery-container">
          <div className="gallery-item card">
            <img src={galleryImage1} alt="Gallery Image 1" />
          </div>
          <div className="gallery-item card">
            <img src={galleryImage2} alt="Gallery Image 2" />
          </div>
          <div className="gallery-item card">
            <img src={galleryImage3} alt="Gallery Image 3" />
          </div>
          <div className="gallery-item card">
            <img src={galleryImage4} alt="Gallery Image 4" />
          </div>
          <div className="gallery-item card">
            <img src={galleryImage5} alt="Gallery Image 5" />
          </div>
          <div className="gallery-item card">
            <img src={galleryImage6} alt="Gallery Image 6" />
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>Testimonials</h2>
        <div className="testimonials-container">
          <div className="testimonial card">
            <p>"Event Organizer made our wedding day perfect. Highly recommend!"</p>
            <h4>- John & Jane</h4>
          </div>
          <div className="testimonial card">
            <p>"The corporate event was a huge success, thanks to the professional team at Event Organizer."</p>
            <h4>- ACME Corp</h4>
          </div>
          <div className="testimonial card">
            <p>"Our birthday party was unforgettable thanks to the amazing planning and entertainment."</p>
            <h4>- Emily R.</h4>
          </div>
        </div>
      </section>

      <section className="feedback-section">
        <h2>We'd Love Your Feedback</h2>
        <div className="feedback-container">
          <div className="feedback-card">
            <div className="feedback-content">
              <p>"The service was exceptional! The attention to detail was remarkable."</p>
              <h4>- Alex P.</h4>
            </div>
            <div className="feedback-rating">
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
            </div>
          </div>
          <div className="feedback-card">
            <div className="feedback-content">
              <p>"An unforgettable experience from start to finish. Highly recommended!"</p>
              <h4>- Lisa R.</h4>
            </div>
            <div className="feedback-rating">
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">☆</span>
            </div>
          </div>
          <div className="feedback-card">
            <div className="feedback-content">
              <p>"The event was flawlessly organized. Everything exceeded our expectations."</p>
              <h4>- Jamie K.</h4>
            </div>
            <div className="feedback-rating">
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
            </div>
          </div>
        </div>
        <div className="feedback-action">
          <button className="give-feedback-button" onClick={handleFeedbackClick}>Give Your Feedback</button>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to plan your next event?</h2>
        <p>Contact us today to get started with the best event organizing services.</p>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </section>
    </div>
  );
};

export default Home;
