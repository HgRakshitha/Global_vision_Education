import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./MEdEducation.css";
import Header from "./Header";
import Footer from "./Footer";

import postgraduateIcon from "../assets/images/course/SVG (4).png";
import aboutOverlay from "../assets/images/course/Overlay (26).png";
import eligibilityOverlay from "../assets/images/course/Overlay (27).png";
import careerOverlay from "../assets/images/course/Overlay (28).png";
import checkIcon from "../assets/images/icons/SVG (3).png";

const MEdEducation = () => {
  const [isVisible, setIsVisible] = useState({});
  const elementsRef = useRef({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.dataset.key]: true,
          }));
        }
      });
    }, observerOptions);

    Object.values(elementsRef.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      Object.values(elementsRef.current).forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="med-standard-page">
      <Header />

      <section className="med-hero-section">
        <div className="med-hero-oval"></div>
        <div className="med-centered-section">
          <div 
            className={`med-top-buttons ${isVisible.topButtons ? 'animate-fade-in' : ''}`}
            ref={(el) => (elementsRef.current.topButtons = el)}
            data-key="topButtons"
          >
            <Link to="/courses" className="med-back-link-top animate-slide-in-left">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Programs
            </Link>
            <div className="med-program-tag-center animate-pulse-subtle">Postgraduate Program</div>
          </div>
          <div 
            className={`med-title-section ${isVisible.title ? 'animate-fade-in-scale' : ''}`}
            ref={(el) => (elementsRef.current.title = el)}
            data-key="title"
          >
            <h1 className="med-main-title">
              <span className="med-title-line">M.Ed - Master of Education</span>
            </h1>
          </div>
          <div 
            className={`med-meta-tags ${isVisible.metaTags ? 'animate-fade-in-up' : ''}`}
            ref={(el) => (elementsRef.current.metaTags = el)}
            data-key="metaTags"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="med-meta-tag animate-float">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              2 Years
            </div>
            <div className="med-meta-tag animate-float" style={{ animationDelay: '0.3s' }}>
              <img src={postgraduateIcon} alt="Postgraduate" className="meta-tag-icon" />
              Postgraduate
            </div>
          </div>
        </div>
      </section>

      <section className="med-main-content">
        <div className="med-bottom-section">
          <div className="med-bottom-container">
            <div 
              className={`med-left-column ${isVisible.leftColumn ? 'animate-slide-in-left' : ''}`}
              ref={(el) => (elementsRef.current.leftColumn = el)}
              data-key="leftColumn"
            >
              <div className="med-about-program-card">
                <div className="med-about-card-header">
                  <img src={aboutOverlay} alt="Program Icon" className="med-about-icon" />
                  <h3 className="med-about-card-title">About This Program</h3>
                </div>
                <p className="med-about-card-description">
                  The Master of Education program provides advanced training in educational theory, pedagogy, curriculum development, and educational leadership. This program prepares educators for leadership roles in schools, educational administration, and curriculum design with a focus on innovative teaching methodologies.
                </p>
              </div>
              <div className="med-info-card career-prospects-card">
                <div className="med-about-card-header">
                  <img src={careerOverlay} alt="Career Icon" className="med-about-icon no-bg-icon animate-bounce-subtle" />
                  <h3 className="med-about-card-title">Career Prospects</h3>
                </div>
                <div className="education-grid">
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Educational Administrator</span>
                  </div>
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Curriculum Developer</span>
                  </div>
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Education Consultant</span>
                  </div>
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Teacher Educator</span>
                  </div>
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>School Principal</span>
                  </div>
                </div>
              </div>
            </div>
            <div 
              className={`med-right-column ${isVisible.rightColumn ? 'animate-slide-in-right' : ''}`}
              ref={(el) => (elementsRef.current.rightColumn = el)}
              data-key="rightColumn"
            >
              <div className="med-info-card">
                <div className="med-about-card-header">
                  <img src={eligibilityOverlay} alt="Eligibility Icon" className="med-about-icon small-icon" />
                  <h3 className="med-about-card-title small-title">Eligibility</h3>
                </div>
                <p className="med-about-card-description">
                  Completion of B.Ed or a Bachelor's degree in Education from a recognized university with a minimum aggregate score. Teaching experience may be preferred for some programs.
                </p>
                <div className="med-card-buttons">
                  <Link to="/contact" className="med-btn-apply animate-pulse-button">Apply Now</Link>
                  <button className="med-btn-info animate-pulse-button" style={{ animationDelay: '0.1s' }}>Get More Info</button>
                </div>
              </div>
              <div className="med-quick-facts">
                <h4 className="quick-facts-title">Quick Facts</h4>
                <div className="quick-facts-grid">
                  <div className="quick-fact-item animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <span className="quick-fact-label">Duration</span>
                    <span className="quick-fact-value">2 Years</span>
                  </div>
                  <div className="quick-fact-item animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <span className="quick-fact-label">Level</span>
                    <span className="quick-fact-value">Postgraduate</span>
                  </div>
                  <div className="quick-fact-item animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <span className="quick-fact-label">Mode</span>
                    <span className="quick-fact-value">Full-time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MEdEducation;


