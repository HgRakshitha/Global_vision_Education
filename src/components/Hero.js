import React from "react";
import "./Hero.css";
import heroImage from "../assets/images/hero/hero-bg.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-title-overlay">
        <h1 className="hero-title">
          <span>
            Your Journey to <span className="highlight">World-</span>
          </span>
          <span>
            <span className="highlight">Class</span> Education
          </span>
          <span>Starts Here</span>
        </h1>
      </div>
      <div className="hero-container">
        <div className="hero-image-wrapper">
          <img
            src={heroImage}
            alt="Global Vision Education - Hero Section"
            className="hero-image"
          />
          <div className="hero-trust-badge">
            <span>•</span> Trusted by 7000+ Students Worldwide
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
