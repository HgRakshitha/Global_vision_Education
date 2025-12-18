import React from "react";
import { Link } from "react-router-dom";
import "./BEdEducation.css";
import Header from "./Header";
import Footer from "./Footer";

/* UPDATED ICONS */
import undergraduateIcon from "../assets/images/course/SVG (4).png";
import aboutOverlay from "../assets/images/course/Overlay (26).png";
import eligibilityOverlay from "../assets/images/course/Overlay (27).png";
import careerOverlay from "../assets/images/course/Overlay (28).png";
import checkIcon from "../assets/images/icons/SVG (3).png";

const BEdEducation = () => {
  return (
    <div className="bed-standard-page">
      <Header />

      {/* Hero Section with Oval */}
      <section className="bed-hero-section">
        <div className="bed-hero-oval"></div>

        {/* Centered Section */}
        <div className="bed-centered-section">
          <div className="bed-top-buttons">
            <Link to="/courses" className="bed-back-link-top">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Programs
            </Link>

            <div className="bed-program-tag-center">Undergraduate Program</div>
          </div>

          <div className="bed-title-section">
            <h1 className="bed-main-title">
              <span className="bed-title-line">
                B.Ed – Bachelor of Education
              </span>
            </h1>
          </div>

          {/* Duration and Level */}
          <div className="bed-meta-tags">
            <div className="bed-meta-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 6V12L16 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              2 Years
            </div>
            <div className="bed-meta-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L15 8H22L17 12L19 18L12 14L5 18L7 12L2 8H9L12 2Z"
                  fill="currentColor"
                />
              </svg>
              Undergraduate
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bed-main-content">
        <div className="bed-bottom-section">
          <div className="bed-bottom-container">
            {/* Left Column */}
            <div className="bed-left-column">
              {/* About This Program */}
              <div className="bed-about-program-card">
                <div className="bed-about-card-header">
                  <img
                    src={aboutOverlay}
                    alt="Program Icon"
                    className="bed-about-icon"
                  />
                  <h3 className="bed-about-card-title">About This Program</h3>
                </div>

                <p className="bed-about-card-description">
                  The Bachelor of Education program prepares students for a
                  professional career in teaching. Students gain expertise in
                  pedagogy, curriculum design, psychology, and classroom
                  management. The program includes practical teaching
                  experience, enabling graduates to effectively foster learning
                  and development in schools.
                </p>
              </div>

              {/* Career Prospects */}
              <div className="bed-info-card career-prospects-card">
                <div className="bed-about-card-header">
                  <img
                    src={careerOverlay}
                    alt="Career Icon"
                    className="bed-about-icon no-bg-icon"
                  />
                  <h3 className="bed-about-card-title">Career Prospects</h3>
                </div>

                {/* GRID CONTAINER */}
                <div className="education-grid">
                  {/* School Teacher */}
                  <div className="higher-education-box">
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>School Teacher</span>
                  </div>

                  {/* Education Counselor */}
                  <div className="higher-education-box">
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Education Counselor</span>
                  </div>

                  {/* Curriculum Developer */}
                  <div className="higher-education-box">
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Curriculum Developer</span>
                  </div>

                  {/* Education Administrator */}
                  <div className="higher-education-box">
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Education Administrator</span>
                  </div>

                  {/* Training Specialist */}
                  <div className="higher-education-box">
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Training Specialist</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="bed-right-column">
              <div className="bed-info-card">
                <div className="bed-about-card-header">
                  <img
                    src={eligibilityOverlay}
                    alt="Eligibility Icon"
                    className="bed-about-icon small-icon"
                  />
                  <h3 className="bed-about-card-title small-title">
                    Eligibility
                  </h3>
                </div>

                <p className="bed-about-card-description">
                  Completion of 12th standard (Higher Secondary) or Bachelor's
                  degree from a recognized education board with a minimum
                  aggregate score. Subject background in education or humanities
                  is preferred.
                </p>

                <div className="bed-card-buttons">
                  <Link to="/contact" className="bed-btn-apply">
                    Apply Now
                  </Link>
                  <button className="bed-btn-info">Get More Info</button>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bed-quick-facts">
                <h4 className="quick-facts-title">Quick Facts</h4>
                <div className="quick-facts-grid">
                  <div className="quick-fact-item">
                    <span className="quick-fact-label">Duration</span>
                    <span className="quick-fact-value">2 Years</span>
                  </div>
                  <div className="quick-fact-item">
                    <span className="quick-fact-label">Level</span>
                    <span className="quick-fact-value">Undergraduate</span>
                  </div>
                  <div className="quick-fact-item">
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

export default BEdEducation;
