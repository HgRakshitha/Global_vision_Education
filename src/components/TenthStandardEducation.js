import React from "react";
import { Link } from "react-router-dom";
import "./TenthStandardEducation.css";
import Header from "./Header";
import Footer from "./Footer";

/* UPDATED ICONS */
import secondaryIcon from "../assets/images/course/SVG (4).png";
import aboutOverlay from "../assets/images/course/Overlay (26).png";
import eligibilityOverlay from "../assets/images/course/Overlay (27).png";
import careerOverlay from "../assets/images/course/Overlay (28).png";
import checkIcon from "../assets/images/icons/SVG (3).png"; // ✅ MISSING IMPORT FIXED

const TenthStandardEducation = () => {
  return (
    <div className="tenth-standard-page">
      <Header />

      {/* Hero Section with Oval */}
      <section className="tenth-hero-section">
        <div className="tenth-hero-oval"></div>

        {/* Centered Section */}
        <div className="tenth-centered-section">
          <div className="tenth-top-buttons">
            <Link to="/courses" className="tenth-back-link-top">
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

            <div className="tenth-program-tag-center">Secondary Program</div>
          </div>

          <div className="tenth-title-section">
            <h1 className="tenth-main-title">
              <span className="tenth-title-line">10th Grade</span>
              <span className="tenth-title-line">
                (Secondary School Certificate)
              </span>
            </h1>
          </div>

          {/* Secondary Button */}
          <div className="tenth-secondary-tag">
            <img
              src={secondaryIcon}
              alt="Secondary Icon"
              className="tenth-secondary-icon"
            />
            Secondary
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="tenth-main-content">
        <div className="tenth-bottom-section">
          <div className="tenth-bottom-container">
            {/* Left Column */}
            <div className="tenth-left-column">
              {/* About This Program */}
              <div className="tenth-about-program-card">
                <div className="tenth-about-card-header">
                  <img
                    src={aboutOverlay}
                    alt="Program Icon"
                    className="tenth-about-icon"
                  />
                  <h3 className="tenth-about-card-title">About This Program</h3>
                </div>

                <p className="tenth-about-card-description">
                  The 10th-grade qualification marks the completion of secondary
                  education and provides students with fundamental knowledge in
                  subjects like languages, mathematics, science, and social
                  studies. It lays the essential foundation for higher education
                  and future career planning.
                </p>
              </div>

              {/* Career Prospects */}
              <div className="tenth-info-card career-prospects-card">
                <div className="tenth-about-card-header">
                  <img
                    src={careerOverlay}
                    alt="Career Icon"
                    className="tenth-about-icon no-bg-icon"
                  />
                  <h3 className="tenth-about-card-title">Career Prospects</h3>
                </div>

                {/* GRID CONTAINER */}
                <div className="education-grid">
                  {/* Higher Secondary */}
                  <div className="higher-education-box">
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Higher Secondary Education</span>
                  </div>

                  {/* Vocational – RIGHT */}
                  <div className="higher-education-box">
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Vocational Training</span>
                  </div>

                  {/* Diploma – BELOW */}
                  <div className="higher-education-box">
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Diploma Programs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="tenth-right-column">
              <div className="tenth-info-card">
                <div className="tenth-about-card-header">
                  <img
                    src={eligibilityOverlay}
                    alt="Eligibility Icon"
                    className="tenth-about-icon small-icon"
                  />
                  <h3 className="tenth-about-card-title small-title">
                    Eligibility
                  </h3>
                </div>

                <p className="tenth-about-card-description">
                  Completion of schooling up to Class 9 and enrollment under a
                  recognized education board.
                </p>

                <div className="tenth-card-buttons">
                  <Link to="/contact" className="tenth-btn-apply">
                    Apply Now
                  </Link>
                  <button className="tenth-btn-info">Get More Info</button>
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

export default TenthStandardEducation;
