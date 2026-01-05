import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import heroVideo from "../assets/images/hero/hero2.mp4";

const Hero = () => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Ensure video plays immediately when component mounts
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleCanPlay = () => {
        setVideoLoaded(true);
        video.play().catch(() => {
          // Autoplay may be blocked, but video will still load
        });
      };

      video.addEventListener('canplay', handleCanPlay);
      
      // Force load
      video.load();

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);

  return (
    <section className="hero">
      {/* Full background video - loads first */}
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Title overlay - appears after video loads */}
      <div className={`hero-title-overlay ${videoLoaded ? 'visible' : ''}`}>
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
