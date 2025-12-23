import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import companyLogo from '../assets/images/logo 1.png';

const Header = () => {
  const [courseDropdown, setCourseDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <img 
            src={companyLogo} 
            alt="Global Vision Education Consultants Logo" 
            className="company-logo"
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = e.target.nextElementSibling;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div className="logo-fallback" style={{ display: 'none' }}>
            <div className="logo-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#14b8a6"/>
                <path d="M20 10L25 15H22V25H18V15H15L20 10Z" fill="white"/>
                <rect x="18" y="25" width="4" height="5" fill="white"/>
              </svg>
            </div>
            <div className="logo-text">
              <div className="logo-main">Global Vision</div>
              <div className="logo-subtitle">EDUCATION CONSULTANTS</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          
          {/* Services Dropdown */}
          <div 
            className="nav-dropdown"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <Link 
              to="/services" 
              className="nav-link"
            >
              Services
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '4px', display: 'inline-block' }}>
                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            {servicesDropdown && (
              <div 
                className="dropdown-menu"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
                onClick={(e) => e.stopPropagation()}
              >
                <Link to="/services/distance-education" className="dropdown-item" onClick={() => setServicesDropdown(false)}>Distance education</Link>
                <Link to="/services/certificate-attestation" className="dropdown-item" onClick={() => setServicesDropdown(false)}>Certificate attestation</Link>
                <Link to="/services/credit-transfer" className="dropdown-item" onClick={() => setServicesDropdown(false)}>Credit transfer</Link>
                <Link to="/services/equivalency-certificate" className="dropdown-item" onClick={() => setServicesDropdown(false)}>Equivalency Certificate services</Link>
              </div>
            )}
          </div>

          {/* Course Dropdown */}
          <div 
            className="nav-dropdown"
            onMouseEnter={() => setCourseDropdown(true)}
            onMouseLeave={() => setCourseDropdown(false)}
          >
            <Link 
              to="/courses" 
              className="nav-link"
            >
              Course
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '4px', display: 'inline-block' }}>
                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            {courseDropdown && (
              <div 
                className="dropdown-menu"
                onMouseEnter={() => setCourseDropdown(true)}
                onMouseLeave={() => setCourseDropdown(false)}
                onClick={(e) => e.stopPropagation()}
              >
                <Link to="/courses#bachelors" className="dropdown-item" onClick={() => setCourseDropdown(false)}>
                  Bachelors
                </Link>
                <Link to="/courses#masters" className="dropdown-item" onClick={() => setCourseDropdown(false)}>
                  Masters
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <button className="btn-consultation">Free Consultation</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

