// src/components/CarouselComponent.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Assets/Images/img1.jpg';
import img2 from '../Assets/Images/img2.jpg';
import img3 from '../Assets/Images/img3.jpg';
import img4 from '../Assets/Images/img4.jpg';

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        stopOnHover={false} // Add this line to prevent pausing on hover
      >
        <div>
          <img src={img1} alt="Event Image 1" />
        </div>
        <div>
          <img src={img2} alt="Event Image 2" />
        </div>
        <div>
          <img src={img3} alt="Event Image 3" />
        </div>
        <div>
          <img src={img4} alt="Event Image 4" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
