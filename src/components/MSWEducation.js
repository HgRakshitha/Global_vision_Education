import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./MSWEducation.css";
import Header from "./Header";
import Footer from "./Footer";

import postgraduateIcon from "../assets/images/course/SVG (4).png";
import aboutOverlay from "../assets/images/course/Overlay (26).png";
import eligibilityOverlay from "../assets/images/course/Overlay (27).png";
import careerOverlay from "../assets/images/course/Overlay (28).png";
import checkIcon from "../assets/images/icons/SVG (3).png";

const MSWEducation = () => {
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
    <div className="msw-standard-page">
      <Header />

      <section className="msw-hero-section">
        <div className="msw-hero-oval"></div>
        <div className="msw-centered-section">
          <div 
            className={`msw-top-buttons ${isVisible.topButtons ? 'animate-fade-in' : ''}`}
            ref={(el) => (elementsRef.current.topButtons = el)}
            data-key="topButtons"
          >
            <Link to="/courses" className="msw-back-link-top animate-slide-in-left">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Programs
            </Link>
            <div className="msw-program-tag-center animate-pulse-subtle">Postgraduate Program</div>
          </div>
          <div 
            className={`msw-title-section ${isVisible.title ? 'animate-fade-in-scale' : ''}`}
            ref={(el) => (elementsRef.current.title = el)}
            data-key="title"
          >
            <h1 className="msw-main-title">
              <span className="msw-title-line">MSW - Master of</span>
              <span className="msw-title-line">Social Work</span>
            </h1>
          </div>
          <div 
            className={`msw-meta-tags ${isVisible.metaTags ? 'animate-fade-in-up' : ''}`}
            ref={(el) => (elementsRef.current.metaTags = el)}
            data-key="metaTags"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="msw-meta-tag animate-float">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              2 Years
            </div>
            <div className="msw-meta-tag animate-float" style={{ animationDelay: '0.3s' }}>
              <img src={postgraduateIcon} alt="Postgraduate" className="meta-tag-icon" />
              Postgraduate
            </div>
          </div>
        </div>
      </section>

      <section className="msw-main-content">
        <div className="msw-bottom-section">
          <div className="msw-bottom-container">
            <div 
              className={`msw-left-column ${isVisible.leftColumn ? 'animate-slide-in-left' : ''}`}
              ref={(el) => (elementsRef.current.leftColumn = el)}
              data-key="leftColumn"
            >
              <div className="msw-about-program-card">
                <div className="msw-about-card-header">
                  <img src={aboutOverlay} alt="Program Icon" className="msw-about-icon" />
                  <h3 className="msw-about-card-title">About This Program</h3>
                </div>
                <p className="msw-about-card-description">
                  The Master of Social Work program prepares students to address social issues, support vulnerable populations, and contribute to community development. This program combines theoretical knowledge with practical fieldwork to develop skills in counseling, advocacy, and social policy.
                </p>
              </div>
              <div className="msw-info-card career-prospects-card">
                <div className="msw-about-card-header">
                  <img src={careerOverlay} alt="Career Icon" className="msw-about-icon no-bg-icon animate-bounce-subtle" />
                  <h3 className="msw-about-card-title">Career Prospects</h3>
                </div>
                <div className="education-grid">
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Social Worker</span>
                  </div>
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Community Organizer</span>
                  </div>
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Counselor</span>
                  </div>
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Program Coordinator</span>
                  </div>
                  <div className="higher-education-box animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Policy Advocate</span>
                  </div>
                </div>
              </div>
            </div>
            <div 
              className={`msw-right-column ${isVisible.rightColumn ? 'animate-slide-in-right' : ''}`}
              ref={(el) => (elementsRef.current.rightColumn = el)}
              data-key="rightColumn"
            >
              <div className="msw-info-card">
                <div className="msw-about-card-header">
                  <img src={eligibilityOverlay} alt="Eligibility Icon" className="msw-about-icon small-icon" />
                  <h3 className="msw-about-card-title small-title">Eligibility</h3>
                </div>
                <p className="msw-about-card-description">
                  Completion of a Bachelor's degree from a recognized university with a minimum aggregate score. Background in social sciences is preferred but not mandatory.
                </p>
                <div className="msw-card-buttons">
                  <Link to="/contact" className="msw-btn-apply animate-pulse-button">Apply Now</Link>
                  <button className="msw-btn-info animate-pulse-button" style={{ animationDelay: '0.1s' }}>Get More Info</button>
                </div>
              </div>
              <div className="msw-quick-facts">
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

export default MSWEducation;


