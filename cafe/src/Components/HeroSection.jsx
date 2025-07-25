import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import Slider from './Slider';
import WhyChooseUs from '../pages/WhyChooseUs';
import Contact from '../pages/Contact';
import BlurText from './BlurText';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const [showSlider, setShowSlider] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const sliderTimer = setTimeout(() => {
      setShowSlider(true);
    }, 2000);

    // Trigger animation done after slider comes in
    const doneTimer = setTimeout(() => {
      setAnimationDone(true);
    }, 3000); // Slightly longer than slider delay

    return () => {
      clearTimeout(sliderTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <>
      <div className={`hero-container ${showSlider ? 'split' : ''}`}>
        <div className={`hero-left ${showSlider ? 'animate-left' : ''}`}>
          <BlurText
            text="Welcome to Yash Dabeli & Fastfood"
            delay={100}
            animateBy="words"
            direction="top"
            className="main-title"
          />

          <BlurText
            text="Where Taste Meets Speed – And Every Bite Brings a Smile!"
            delay={300}
            animateBy="words"
            direction="top"
            className="subtitle"
          />

          {/* Order Button appears only after animation is done */}
          {animationDone && (
            <div className="cta-buttons">
              <button className="order-btn" onClick={() => navigate('/place-order')}>
                🍽️ Order Now
              </button>
            </div>
          )}
        </div>

        {showSlider && (
          <div className="hero-right animate-right">
            <Slider />
          </div>
        )}
      </div>

      <div className="choose">
        <WhyChooseUs />
      </div>

      {/* Review Button appears only after animation is done */}
      {animationDone && (
        <div className="review-cta">
          <h3>⭐ Loved by Customers</h3>
          <p>See what our happy foodies say about us!</p>
          <button className="review-btn" onClick={() => navigate('/reviews')}>
            🗣️ Read Reviews
          </button>
        </div>
      )}

      <div className="footer">
        <Contact variant="hero" />
      </div>
    </>
  );
}
