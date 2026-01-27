import React from 'react';
import './ContactUs.css';
import Header from './Header';
import Footer from './Footer';
import FAQ from './FAQ';
import contactImage from '../assets/images/hero/contact.png';
import twitterIcon from '../assets/images/hero/twitr.svg';
import facebookIcon from '../assets/images/hero/facebk.svg';
import instagramIcon from '../assets/images/hero/insta.svg';
import linkedinIcon from '../assets/images/hero/linked.svg';
import overlay4 from '../assets/images/icons/Overlay (4).png';
import overlay5 from '../assets/images/icons/Overlay (5).png';
import overlay6 from '../assets/images/icons/Overlay (6).png';
import overlay7 from '../assets/images/icons/map-pin.png';
import messageSquareIcon from '../assets/images/icons/message-square.svg';
import campusIcon from '../assets/images/icons/campus.svg';
import virtualIcon from '../assets/images/icons/virtual.svg';

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <Header />

      {/* Contact Banner Section */}
      <section className="contact-banner" style={{ backgroundImage: `url(${contactImage})` }}>
        <div className="contact-banner-overlay"></div>
        <div className="contact-banner-content">
          <h1 className="contact-banner-title">CONTACT US</h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-main-container">
          {/* Left Form Section */}
          <div className="contact-form-left">
            <h2 className="contact-form-heading">Send Us a Message</h2>
            <p className="contact-form-subtitle">Fill out the form below and we'll respond within 24 hours.</p>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input type="text" className="form-input" placeholder="Enter your full name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input type="email" className="form-input" placeholder="Enter your email address" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-input" placeholder="Enter your phone number" />
                </div>
                <div className="form-group">
                  <label className="form-label">Subject *</label>
                  <input type="text" className="form-input" placeholder="How can we help?" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Your Message *</label>
                <textarea className="form-textarea" rows="6" placeholder="Tell us more about your inquiry..."></textarea>
              </div>
              <div className="form-actions">
                <button type="submit" className="contact-submit-btn">
                  Send Message
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '8px' }}>
                    <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="white"/>
                  </svg>
                </button>
                <div className="social-icons">
                  <a
                    href="https://x.com/globalvision_34"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon social-icon-twitter"
                  >
                    <img src={twitterIcon} alt="Twitter" />
                  </a>
                  <a href="https://www.facebook.com/GLOBALVISIONEDUCATIONUAE" target="_blank" rel="noopener noreferrer" className="social-icon social-icon-facebook">
                    <img src={facebookIcon} alt="Facebook" />
                  </a>
                  <a href="https://www.instagram.com/globaleducation.ae/" target="_blank" rel="noopener noreferrer" className="social-icon social-icon-instagram">
                    <img src={instagramIcon} alt="Instagram" />
                  </a>
                  <a href="https://www.linkedin.com/in/global-vision-education-107978180/" target="_blank" rel="noopener noreferrer" className="social-icon social-icon-linkedin">
                    <img src={linkedinIcon} alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </form>
          </div>

          {/* Right Contact Information Section */}
          <div className="contact-info-right">
            <h3 className="contact-info-heading">Contact Information</h3>
            
            {/* Separate Address Section */}
            <div className="address-section">
              <div className="address-section-header">
                <div className="address-icon-wrapper">
                  <img src={overlay7} alt="Location" />
                </div>
                <h4 className="address-section-title">Our Address</h4>
              </div>
              <div className="address-content">
                <div className="address-item">
                  <div className="address-item-title">Dubai Office</div>
                  <div className="address-text">Office No. 205, Ontario Tower, Business Bay, Dubai.</div>
                </div>
                <div className="address-item">
                  <div className="address-item-title">Abu Dhabi Office</div>
                  <div className="address-text">KM Trading, Al Ferdous Tower - 15th Floor, Room No. 27- Building Al Salam</div>
                </div>
              </div>
            </div>

            {/* Other Contact Information */}
            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <img src={overlay4} alt="Phone" />
                </div>
                <div className="contact-info-content">
                  <div className="contact-info-label">Phone Number</div>
                  <div className="contact-info-text">+971 50 619 1844</div>
                  <div className="contact-info-text">+971 4 579 3444</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <img src={overlay5} alt="Email" />
                </div>
                <div className="contact-info-content">
                  <div className="contact-info-label">Email Address</div>
                  <div className="contact-info-text">info@globalvisionedu.com</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <img src={overlay6} alt="Clock" />
                </div>
                <div className="contact-info-content">
                  <div className="contact-info-label">Working Hours</div>
                  <div className="contact-info-text">Mon - Sat: 9:00 AM - 8:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Connect Section */}
      <section className="quick-connect-section">
        <div className="quick-connect-container">
          <h2 className="quick-connect-heading">Quick Connect</h2>
          <div className="quick-connect-cards">
            <div className="quick-connect-card">
              <div className="quick-connect-icon">
                <img src={messageSquareIcon} alt="Live Chat" />
              </div>
              <div>
                <h3 className="quick-connect-title">Live Chat</h3>
                <p className="quick-connect-subtitle">Chat with our support team</p>
              </div>
            </div>
            <div className="quick-connect-card">
              <div className="quick-connect-icon">
                <img src={campusIcon} alt="Visit Campus" />
              </div>
              <div>
                <h3 className="quick-connect-title">Visit Campus</h3>
                <p className="quick-connect-subtitle">Schedule a campus tour</p>
              </div>
            </div>
            <div className="quick-connect-card">
              <div className="quick-connect-icon">
                <img src={virtualIcon} alt="Virtual Tour" />
              </div>
              <div>
                <h3 className="quick-connect-title">Virtual Tour</h3>
                <p className="quick-connect-subtitle">Explore our facilities online</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Location Section */}
      <section className="our-location-section">
        <div className="our-location-container">
          <button className="find-us-button">FIND US</button>
          <h2 className="our-location-heading">Our Locations</h2>
          <p className="our-location-description">
            Visit our campuses or connect with us online. We're always happy to meet prospective students.
          </p>
          <div className="maps-container">
            <div className="map-item">
              <div className="map-location-header">
                <h3 className="map-location-title">Dubai Office</h3>
                <p className="map-location-address">Office No. 205, Ontario Tower, Business Bay, Dubai.</p>
              </div>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps?q=25.1861344,55.2620304&hl=en&z=17&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '20px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GLOBAL VISION EDUCATION - Dubai"
                ></iframe>
              </div>
            </div>
            <div className="map-item">
              <div className="map-location-header">
                <h3 className="map-location-title">Abu Dhabi Office</h3>
                <p className="map-location-address">KM Trading, Al Ferdous Tower - 15th Floor, Room No. 27- Building Al Salam</p>
              </div>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps?q=24.4973968,54.3716999&hl=en&z=16&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '20px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GLOBAL VISION EDUCATION - ABU DHABI"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq-section">
        <FAQ />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;

