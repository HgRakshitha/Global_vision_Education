import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUsHeader.css';
import companyLogo from '../assets/images/logo 1.png';

const AboutUsHeader = () => {
  return (
    <header className="aboutus-header">
      <div className="aboutus-header-container">
        {/* Logo Section */}
        <div className="aboutus-logo-section">
          <img 
            src={companyLogo} 
            alt="Global Vision Education Consultants Logo" 
            className="aboutus-company-logo"
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = e.target.nextElementSibling;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div className="aboutus-logo-fallback" style={{ display: 'none' }}>
            <div className="aboutus-logo-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#14b8a6"/>
                <path d="M20 10L25 15H22V25H18V15H15L20 10Z" fill="white"/>
                <rect x="18" y="25" width="4" height="5" fill="white"/>
              </svg>
            </div>
            <div className="aboutus-logo-text">
              <div className="aboutus-logo-main">Global Vision</div>
              <div className="aboutus-logo-subtitle">EDUCATION CONSULTANTS</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="aboutus-nav-menu">
          <Link to="/" className="aboutus-nav-link">Home</Link>
          <Link to="/about" className="aboutus-nav-link">About</Link>
          <Link to="/services" className="aboutus-nav-link">Services</Link>
          <Link to="/courses" className="aboutus-nav-link">Course</Link>
          <Link to="/contact" className="aboutus-nav-link">Contact</Link>
        </nav>

        {/* Action Buttons */}
        <div className="aboutus-header-actions">
          <button className="aboutus-btn-consultation">Free Consultation</button>
        </div>
      </div>
    </header>
  );
};

export default AboutUsHeader;

