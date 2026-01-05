import React from "react";
import "./Hero.css";
import heroImage from "../assets/images/hero/hero-bg.png";
import heroVideo from "../assets/images/hero/hero2.mp4";

const Hero = () => {
  return (
    <section className="hero">
      {/* Full background video */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        poster={heroImage}
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="hero-title-overlay">
        <h1 className="hero-title">
          <span>
            Achieve Your Dreams with <span className="highlight">Flexible</span>
          </span>
          <span>
            <span className="highlight">Online</span> & Distance Learning
          </span>
          <span>Programs</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
