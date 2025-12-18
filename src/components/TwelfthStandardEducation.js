import React from "react";
import { Link } from "react-router-dom";
import "./TwelfthStandardEducation.css";
import Header from "./Header";
import Footer from "./Footer";

/* UPDATED ICONS */
import higherSecondaryIcon from "../assets/images/course/SVG (4).png";
import aboutOverlay from "../assets/images/course/Overlay (26).png";
import eligibilityOverlay from "../assets/images/course/Overlay (27).png";
import careerOverlay from "../assets/images/course/Overlay (28).png";
import checkIcon from "../assets/images/icons/SVG (3).png";

const TwelfthStandardEducation = () => {
  return (
    <div className="twelfth-standard-page">
      <Header />

      {/* Hero Section with Oval */}
      <section className="twelfth-hero-section">
        <div className="twelfth-hero-oval"></div>

        {/* Centered Section */}
        <div className="twelfth-centered-section">
          <div className="twelfth-top-buttons">
            <Link to="/courses" className="twelfth-back-link-top">
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

            <div className="twelfth-program-tag-center">
              Higher Secondary Program
            </div>
          </div>

          <div className="twelfth-title-section">
            <h1 className="twelfth-main-title">
              <span className="twelfth-title-line">12th Grade / +2</span>
              <span className="twelfth-title-line">
                (Higher Secondary / Intermediate)
              </span>
            </h1>
          </div>

          {/* Higher Secondary Button */}
          <div className="twelfth-secondary-tag">
            <img
              src={higherSecondaryIcon}
              alt="Higher Secondary Icon"
              className="twelfth-secondary-icon"
            />
            Higher Secondary
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="twelfth-main-content">
        <div className="twelfth-bottom-section">
          <div className="twelfth-bottom-container">
            {/* Left Column */}
            <div className="twelfth-left-column">
              {/* About This Program */}
              <div className="twelfth-about-program-card">
                <div className="twelfth-about-card-header">
                  <img
                    src={aboutOverlay}
                    alt="Program Icon"
                    className="twelfth-about-icon"
                  />
                  <h3 className="twelfth-about-card-title">
                    About This Program
                  </h3>
                </div>

                <p className="twelfth-about-card-description">
                  The 12th-grade qualification (Higher Secondary/Intermediate)
                  represents the completion of higher secondary education and
                  prepares students for university education and professional
                  careers. Students gain advanced knowledge in specialized
                  subjects including sciences, commerce, or humanities based on
                  their chosen stream.
                </p>
              </div>

              {/* Career Prospects */}
              <div className="twelfth-info-card career-prospects-card">
                <div className="twelfth-about-card-header">
                  <img
                    src={careerOverlay}
                    alt="Career Icon"
                    className="twelfth-about-icon no-bg-icon"
                  />
                  <h3 className="twelfth-about-card-title">Career Prospects</h3>
                </div>

                {/* GRID CONTAINER */}
                <div className="education-grid">
                  {/* Bachelor's Degree */}
                  <div className="higher-education-box">
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Bachelor's Degree Programs</span>
                  </div>

                  {/* Professional Courses */}
                  <div className="higher-education-box">
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Professional Courses</span>
                  </div>

                  {/* Competitive Exams */}
                  <div className="higher-education-box">
                    <img src={checkIcon} alt="icon" className="plain-icon" />
                    <span>Competitive Examinations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="twelfth-right-column">
              <div className="twelfth-info-card">
                <div className="twelfth-about-card-header">
                  <img
                    src={eligibilityOverlay}
                    alt="Eligibility Icon"
                    className="twelfth-about-icon small-icon"
                  />
                  <h3 className="twelfth-about-card-title small-title">
                    Eligibility
                  </h3>
                </div>

                <p className="twelfth-about-card-description">
                  Completion of 10th standard and enrollment under a recognized
                  education board. Must have passed secondary education from an
                  accredited institution.
                </p>

                <div className="twelfth-card-buttons">
                  <Link to="/contact" className="twelfth-btn-apply">
                    Apply Now
                  </Link>
                  <button className="twelfth-btn-info">Get More Info</button>
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

export default TwelfthStandardEducation;
