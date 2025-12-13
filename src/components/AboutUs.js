import React from 'react';
import './AboutUs.css';
import Header from './Header';
import Footer from './Footer';
import aboutUsImage from '../assets/images/hero/About Us Image.png';
import heroImg from '../assets/images/hero/img.png';
import graduatesImage from '../assets/images/welcome/Group 24.png';
import icon1 from '../assets/images/icons/bg3.png';
import icon2 from '../assets/images/icons/bg2.png';
import icon3 from '../assets/images/icons/bg1.png';
import tickIcon from '../assets/images/icons/SVG (3).png';
import overlayIcon1 from '../assets/images/icons/Overlay.png';
import overlayIcon2 from '../assets/images/icons/Overlay (1).png';
import overlayIcon3 from '../assets/images/icons/Overlay (2).png';
import overlayIcon4 from '../assets/images/icons/Overlay (3).png';

const AboutUs = () => {
  return (
    <div className="aboutus-page">
      <Header />
      
      {/* Hero Section */}
      <section className="aboutus-hero">
        <img src={aboutUsImage} alt="About Us" className="aboutus-hero-bg" />
        <div className="aboutus-hero-overlay"></div>
        <div className="aboutus-hero-content">
          <h1 className="aboutus-hero-title">About US</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="aboutus-content">
        <div className="aboutus-container">
          {/* Left Column */}
          <div className="aboutus-left-column">
            <div className="aboutus-label">
              <span className="aboutus-label-bullet">•</span> ABOUT US
            </div>
            <h2 className="aboutus-heading">
              <span className="aboutus-heading-line">Introduction To</span>
              <span className="aboutus-heading-line aboutus-heading-highlight">Global Vision</span>
              <span className="aboutus-heading-line aboutus-heading-highlight">Education</span>
            </h2>
          </div>

          {/* Right Column */}
          <div className="aboutus-right-column">
            <p className="aboutus-description">
              GVE was founded to solve a major challenge in the UAE - professionals wanted to study further but struggled with rigid classroom schedules, long commutes and work commitments. We created a flexible, accessible pathway that helps individuals upgrade their qualifications without disrupting their daily life. From the beginning, our focus has been simple: genuine guidance, an easy admission process and continuous support for working learners. Today, GVE stays true to this mission, helping professionals grow with honest advice, structured processes and an approach that understands the realities of modern life.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="aboutus-features">
          <div className="aboutus-feature-card">
            <div className="aboutus-feature-icon">
              <img src={icon1} alt="Expert Guidance" />
            </div>
            <p className="aboutus-feature-text">Expert Guidance With Proven Experience</p>
          </div>

          <div className="aboutus-feature-card">
            <div className="aboutus-feature-icon">
              <img src={icon2} alt="Admission Support" />
            </div>
            <p className="aboutus-feature-text">End-to-End Admission Support</p>
          </div>

          <div className="aboutus-feature-card">
            <div className="aboutus-feature-icon">
              <img src={icon3} alt="Student-First Approach" />
            </div>
            <p className="aboutus-feature-text">Transparent, Student-First Approach</p>
          </div>
        </div>

        {/* Image Below Cards */}
        <div className="aboutus-image-container">
          <img src={heroImg} alt="Hero image" className="aboutus-image" />
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="aboutus-vision-mission">
        <div className="vision-mission-container">
          {/* Purpose Tag */}
          <div className="purpose-tag">OUR PURPOSE</div>
          
          {/* Main Heading */}
          <h2 className="vision-mission-heading">Vision & Mission</h2>

          {/* Vision & Mission Cards */}
          <div className="vision-mission-cards">
            <div className="vision-mission-card">
              <div className="vm-card-header">
                <div className="vm-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
                    <circle cx="12" cy="12" r="3" fill="white"/>
                    <circle cx="12" cy="12" r="1.5" fill="#06B795"/>
                  </svg>
                </div>
                <h3 className="vm-card-title">Our Vision</h3>
              </div>
              <p className="vm-card-description">
                Our vision is to create a world where distance education is accessible, engaging, and transformative, enabling every learner to pursue personal growth and achieve professional excellence. We strive to remove barriers to learning, offering flexible and innovative educational opportunities that inspire curiosity, develop critical skills, and empower individuals to succeed academically and professionally. Through high-quality programs, personalized support, and practical learning experiences, we aim to equip learners with the knowledge and confidence to advance their careers, contribute meaningfully to society, and realize their full potential.
              </p>
            </div>

            <div className="vision-mission-card">
              <div className="vm-card-header">
                <div className="vm-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
                  </svg>
                </div>
                <h3 className="vm-card-title">Our Mission</h3>
              </div>
              <p className="vm-card-description">
                Our mission is to deliver trusted, flexible, and recognized distance learning opportunities complemented by comprehensive academic support, guiding students and professionals to achieve success in their careers and lifelong learning journeys. We are committed to providing practical, high-quality programs that adapt to individual needs, offering personalized guidance, seamless access to resources, and structured pathways that empower learners to enhance their skills, advance professionally, and realize their full potential.
              </p>
            </div>
          </div>

          {/* Core Values Heading */}
          <h2 className="core-values-heading">Our Core Values</h2>

          {/* Core Values Cards */}
          <div className="core-values-grid">
            <div className="core-value-card">
              <div className="cv-icon">
                <img src={tickIcon} alt="Checkmark" />
              </div>
              <p className="cv-text">Student-first approach in everything we do</p>
            </div>

            <div className="core-value-card">
              <div className="cv-icon">
                <img src={tickIcon} alt="Checkmark" />
              </div>
              <p className="cv-text">Transparency and honesty in our guidance</p>
            </div>

            <div className="core-value-card">
              <div className="cv-icon">
                <img src={tickIcon} alt="Checkmark" />
              </div>
              <p className="cv-text">Continuous Innovation in education solutions</p>
            </div>

            <div className="core-value-card">
              <div className="cv-icon">
                <img src={tickIcon} alt="Checkmark" />
              </div>
              <p className="cv-text">Building lasting relationships with students and institutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="aboutus-why-choose">
        <div className="why-choose-container">
          <div className="why-us-label">WHY US</div>
          <h2 className="why-choose-heading">Why Choose Global Vision Education?</h2>
          <p className="why-choose-description">
            We combine expertise, dedication, and a global network to deliver exceptional results for our students.
          </p>

          {/* Feature Cards */}
          <div className="why-choose-cards">
            <div className="why-choose-card">
              <div className="why-card-icon">
                <img src={overlayIcon1} alt="Flexible Study Options" className="why-card-icon-img" />
              </div>
              <h3 className="why-card-title">Flexible Study Options</h3>
              <p className="why-card-text">Learn without compromising your career or personal commitments.</p>
            </div>

            <div className="why-choose-card">
              <div className="why-card-icon">
                <img src={overlayIcon2} alt="Transparent Process" className="why-card-icon-img" />
              </div>
              <h3 className="why-card-title">Transparent Process</h3>
              <p className="why-card-text">Easy process with clear guidance at every step.</p>
            </div>

            <div className="why-choose-card">
              <div className="why-card-icon">
                <img src={overlayIcon3} alt="Personalized Assistance" className="why-card-icon-img" />
              </div>
              <h3 className="why-card-title">Personalised Assistance</h3>
              <p className="why-card-text">Dedicated help throughout your studies.</p>
            </div>

            <div className="why-choose-card">
              <div className="why-card-icon">
                <img src={overlayIcon4} alt="Professional Excellence" className="why-card-icon-img" />
              </div>
              <h3 className="why-card-title">Professional Excellence</h3>
              <p className="why-card-text">Committed to quality and consistent student satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="aboutus-cta">
        <div className="cta-container">
          <h2 className="cta-heading">Ready to Start Your Journey?</h2>
          <p className="cta-description">
            Book a free consultation with our expert counselors and take the first step towards your dream education.
          </p>
          <button className="cta-button">
            Explore Our Services
            <span className="cta-arrow">→</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;

