import React from 'react';
import './Hero.css';
import heroImage from '../assets/images/hero/hero-bg.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-container">
        <div className="hero-image-wrapper">
          <img 
            src={heroImage} 
            alt="Global Vision Education - Hero Section" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

