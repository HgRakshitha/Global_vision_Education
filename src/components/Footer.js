import React from 'react';
import './Footer.css';
import companyLogo from '../assets/images/logo 1.png';
import twitterIcon from '../assets/images/icons/twitter.png';
import facebookIcon from '../assets/images/icons/facebook.png';
import instagramIcon from '../assets/images/icons/instagram-fill.png';
import linkedinIcon from '../assets/images/icons/linkedin.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Call-to-Action Heading */}
        <h2 className="footer-cta-heading">Start your learning journey today.</h2>

        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Column 1 - Company Information */}
          <div className="footer-column footer-company">
            <div className="footer-logo">
              <img 
                src={companyLogo} 
                alt="Global Vision Education Consultants Logo" 
                className="footer-company-logo"
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
            <p className="footer-description">
              Global Vision Education is dedicated to shaping global careers by offering trusted, comprehensive study-abroad guidance. We empower students to dream bigger and achieve more.
            </p>
            <div className="back-to-top-wrapper">
              <span className="back-to-top-text">Back to top</span>
              <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to top">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Column 2 - Company Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#mentors">Mentors</a></li>
              <li><a href="#about">About us</a></li>
            </ul>
          </div>

          {/* Column 3 - Support Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Support</h3>
            <ul className="footer-links">
              <li><a href="#contact">Contact us</a></li>
              <li><a href="#blogs">Blogs</a></li>
            </ul>
          </div>

          {/* Column 4 - Services Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              <li><a href="#visa">Visa Assistance</a></li>
              <li><a href="#pre-departure">Pre-Departure Guidance</a></li>
              <li><a href="#university">University Selection</a></li>
              <li><a href="#scholarship">Scholarship Guidance</a></li>
              <li><a href="#application">Application Support</a></li>
            </ul>
          </div>

        </div>

        {/* Separator Line */}
        <div className="footer-separator"></div>

        {/* Bottom Section - Copyright and Social Media */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © Global Vision Education. All Rights Reserved.
          </div>
          <div className="footer-social">
            <a href="https://x.com/GlobalVisionEdu" target="_blank" rel="noopener noreferrer" className="social-icon social-icon-twitter" aria-label="Twitter">
              <img src={twitterIcon} alt="WhatsApp" />
            </a>
            <a href="https://www.facebook.com/GLOBALVISIONEDUCATIONUAE" target="_blank" rel="noopener noreferrer" className="social-icon social-icon-facebook" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/globaleducation.ae/" target="_blank" rel="noopener noreferrer" className="social-icon social-icon-instagram" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/global-vision-education-107978180/" target="_blank" rel="noopener noreferrer" className="social-icon social-icon-linkedin" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

