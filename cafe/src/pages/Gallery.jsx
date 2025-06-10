import React from 'react';
import CircularGallery from '../Components/CircularGallery.jsx';
import './Gallery.css';

export default function Gallery() {
  return (
    <div className="gallery-container">
      <h2 className="gallery-heading">Experience the Flavor at Yash Dabeli</h2>
      <p className="gallery-subtext">
        Relive the joy, taste the vibe — let our gallery take you inside the heart of our cafe.
      </p>

      <div className="circular-gallery-wrapper">
        <CircularGallery bend={3} textColor="#9b2226" borderRadius={0.05} />
      </div>

      <h3 className="video-heading">🍔 Moments That Matter</h3>
      <div className="video-section">
        <div className="video-wrapper fade-in">
          <iframe
            src="https://res.cloudinary.com/deu26betq/video/upload/v1749554377/Video1_rfmocg.mp4"
            title="Inside Yash Dabeli"
            frameBorder="0"
            allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-wrapper fade-in">
          <iframe
            src="https://res.cloudinary.com/deu26betq/video/upload/v1749554305/video2_rhbslk.mp4"
            title="Yash Dabeli Promo"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
