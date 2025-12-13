import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import companyLogo from '../assets/images/logo 1.png';

const Header = () => {
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
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/courses" className="nav-link">Course</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <button className="btn-signin">Sign In</button>
          <button className="btn-consultation">Free Consultation</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

