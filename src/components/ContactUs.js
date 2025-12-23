import React from 'react';
import './ContactUs.css';
import Header from './Header';
import Footer from './Footer';
import FAQ from './FAQ';
import contactImage from '../assets/images/hero/team.jpg';
import twitterIcon from '../assets/images/hero/twitter (1).png';
import facebookIcon from '../assets/images/icons/facebook.png';
import instagramIcon from '../assets/images/hero/insta.png';
import linkedinIcon from '../assets/images/icons/linkedin.png';
import overlay4 from '../assets/images/icons/Overlay (4).png';
import overlay5 from '../assets/images/icons/Overlay (5).png';
import overlay6 from '../assets/images/icons/Overlay (6).png';
import overlay7 from '../assets/images/icons/Overlay (7).png';
import overlay8Icon from '../assets/images/icons/Overlay (8).png';
import overlay9Icon from '../assets/images/icons/Overlay (9).png';
import overlay10Icon from '../assets/images/icons/Overlay (10).png';

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
                  <a href="https://x.com/GlobalVisionEdu" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src={twitterIcon} alt="Twitter" />
                  </a>
                  <a href="https://www.facebook.com/GLOBALVISIONEDUCATIONUAE" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src={facebookIcon} alt="Facebook" />
                  </a>
                  <a href="https://www.instagram.com/globaleducation.ae/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src={instagramIcon} alt="Instagram" />
                  </a>
                  <a href="https://www.linkedin.com/in/global-vision-education-107978180/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src={linkedinIcon} alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </form>
          </div>

          {/* Right Contact Information Section */}
          <div className="contact-info-right">
            <h3 className="contact-info-heading">Contact Information</h3>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <img src={overlay7} alt="Location" />
                </div>
                <div className="contact-info-content">
                  <div className="contact-info-label">Our Address</div>
                  <div className="contact-info-text">Office No. 205, Ontario Tower, Business Bay, Dubai.</div>
                  <div className="contact-info-text">KM Trading, Al Ferdous Tower - 15th Floor, Room No. 33- Building Al Salam</div>
                </div>
              </div>
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
                <img src={overlay8Icon} alt="Live Chat" />
              </div>
              <div>
                <h3 className="quick-connect-title">Live Chat</h3>
                <p className="quick-connect-subtitle">Chat with our support team</p>
              </div>
            </div>
            <div className="quick-connect-card">
              <div className="quick-connect-icon">
                <img src={overlay9Icon} alt="Visit Campus" />
              </div>
              <div>
                <h3 className="quick-connect-title">Visit Campus</h3>
                <p className="quick-connect-subtitle">Schedule a campus tour</p>
              </div>
            </div>
            <div className="quick-connect-card">
              <div className="quick-connect-icon">
                <img src={overlay10Icon} alt="Virtual Tour" />
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
              <h3 className="map-location-title">Location 1</h3>
              <p className="map-location-address">Ontario Tower - 1604 - Office Building, 17 1701-22 - Business Bay - Dubai - United Arab Emirates</p>
              <div className="map-container">
                <iframe
                  src={`https://www.google.com/maps?q=Ontario+Tower+-+1604+-+Office+Building,+17+1701-22+-+Business+Bay+-+Dubai+-+United+Arab+Emirates&hl=en&z=17&output=embed`}
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '20px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location - Ontario Tower - 1604 - Office Building, 17 1701-22 - Business Bay - Dubai - United Arab Emirates"
                ></iframe>
              </div>
            </div>
            <div className="map-item">
              <h3 className="map-location-title">Location 2</h3>
              <p className="map-location-address">
                KM Trading, Al Ferdous Tower - 15th Floor, Room No. 33<br />
                Building Al Salam
              </p>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps?q=K.M.TRADING+CORPORATE+OFFICE,+Al+Ferdous+Tower,+15th+Floor,+Room+No.+33,+Building+Al+Salam&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '20px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location - K.M. Trading Corporate Office - Al Ferdous Tower - Al Salam"
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

