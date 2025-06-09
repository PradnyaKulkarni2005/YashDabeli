import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import Slider from './Slider'; // make sure Slider has `export default`

export default function HeroSection() {
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSlider(true);
    }, 2000); // Delay before showing right part

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`hero-container ${showSlider ? 'split' : ''}`}>
      <div className={`hero-left ${showSlider ? 'animate-left' : ''}`}>
        <h1 className="main-title">Welcome to Yash Dabeli & Fastfood</h1>
        <p className="subtitle">Where Taste Meets Speed – And Every Bite Brings a Smile!</p>
      </div>

      {showSlider && (
        <div className="hero-right animate-right">
          <Slider />
        </div>
      )}
    </div>
  );
}
