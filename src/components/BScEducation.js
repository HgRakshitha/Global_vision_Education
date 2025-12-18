import React from "react";
import { Link } from "react-router-dom";
import "./BScEducation.css";
import Header from "./Header";
import Footer from "./Footer";

/* UPDATED ICONS */
import undergraduateIcon from "../assets/images/course/SVG (5).png";
import aboutOverlay from "../assets/images/course/Overlay (26).png";
import eligibilityOverlay from "../assets/images/course/Overlay (27).png";
import careerOverlay from "../assets/images/course/Overlay (28).png";
import checkIcon from "../assets/images/icons/SVG (3).png";

const BScEducation = () => {
  return (
    <div className="bsc-standard-page">
      <Header />

      {/* Hero Section with Oval */}
      <section className="bsc-hero-section">
        <div className="bsc-hero-oval"></div>

        {/* Centered Section */}
        <div className="bsc-centered-section">
          <div className="bsc-top-buttons">
            <Link to="/courses" className="bsc-back-link-top">
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

            <div className="bsc-program-tag-center">Undergraduate Program</div>
          </div>

          <div className="bsc-title-section">
            <h1 className="bsc-main-title">
              <span className="bsc-title-line">BSc – Bachelor of Science</span>
            </h1>
          </div>

          {/* Duration and Level */}
          <div className="bsc-meta-tags">
            <div className="bsc-meta-tag">
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
              3 Years
            </div>
            <div className="bsc-meta-tag">
              <img
                src={undergraduateIcon}
                alt="Undergraduate"
                className="meta-tag-icon"
              />
              Undergraduate
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bsc-main-content">
        <div className="bsc-bottom-section">
          <div className="bsc-bottom-container">
            {/* Left Column */}
            <div className="bsc-left-column">
              {/* About This Program */}
              <div className="bsc-about-program-card">
                <div className="bsc-about-card-header">
                  <img
                    src={aboutOverlay}
                    alt="Program Icon"
                    className="bsc-about-icon"
                  />
                  <h3 className="bsc-about-card-title">About This Program</h3>
                </div>

                <p className="bsc-about-card-description">
                  The Bachelor of Science program provides core science training
                  in disciplines such as Physics, Chemistry, Biology, and
                  Mathematics. Students gain theoretical knowledge and practical
                  experience through laboratory work and research. Graduates are
                  well-prepared for roles in scientific research, healthcare,
                  and technical industries.
                </p>
              </div>

              {/* Career Prospects */}
              <div className="bsc-info-card career-prospects-card">
                <div className="bsc-about-card-header">
                  <img
                    src={careerOverlay}
                    alt="Career Icon"
                    className="bsc-about-icon no-bg-icon"
                  />
                  <h3 className="bsc-about-card-title">Career Prospects</h3>
                </div>

                {/* GRID CONTAINER */}
                <div className="education-grid">
                  {/* Research Scientist */}
                  <div className="higher-education-box">
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Research Scientist</span>
                  </div>

                  {/* Lab Technician */}
                  <div className="higher-education-box">
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Lab Technician</span>
                  </div>

                  {/* Quality Analyst */}
                  <div className="higher-education-box">
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Quality Analyst</span>
                  </div>

                  {/* Data Analyst */}
                  <div className="higher-education-box">
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Data Analyst</span>
                  </div>

                  {/* Healthcare Professional */}
                  <div className="higher-education-box">
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Healthcare Professional</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="bsc-right-column">
              <div className="bsc-info-card">
                <div className="bsc-about-card-header">
                  <img
                    src={eligibilityOverlay}
                    alt="Eligibility Icon"
                    className="bsc-about-icon small-icon"
                  />
                  <h3 className="bsc-about-card-title small-title">
                    Eligibility
                  </h3>
                </div>

                <p className="bsc-about-card-description">
                  Completion of 12th standard (Higher Secondary) from a
                  recognized education board with a minimum aggregate score,
                  preferably with Physics, Chemistry, and Biology/Mathematics.
                </p>

                <div className="bsc-card-buttons">
                  <Link to="/contact" className="bsc-btn-apply">
                    Apply Now
                  </Link>
                  <button className="bsc-btn-info">Get More Info</button>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bsc-quick-facts">
                <h4 className="quick-facts-title">Quick Facts</h4>
                <div className="quick-facts-grid">
                  <div className="quick-fact-item">
                    <span className="quick-fact-label">Duration</span>
                    <span className="quick-fact-value">3 Years</span>
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

export default BScEducation;
