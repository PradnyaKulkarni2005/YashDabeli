import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import Slider from './Slider';
import WhyChooseUs from '../pages/WhyChooseUs';
import Contact from '../pages/Contact';
import BlurText from './BlurText';

export default function HeroSection() {
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSlider(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <>
      <div className={`hero-container ${showSlider ? 'split' : ''}`}>
        <div className={`hero-left ${showSlider ? 'animate-left' : ''}`}>
          <BlurText
            text="Welcome to Yash Dabeli & Fastfood"
            delay={100}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="main-title"
          />

          <BlurText
            text="Where Taste Meets Speed – And Every Bite Brings a Smile!"
            delay={300}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="subtitle"
          />
        </div>

        {showSlider && (
          <div className="hero-right animate-right">
            <Slider />
          </div>
        )}
      </div>
      <div className='choose'>
      <WhyChooseUs />
      </div>

      <div className="footer">
        <Contact variant="hero" />
      </div>
    </>
  );
}
