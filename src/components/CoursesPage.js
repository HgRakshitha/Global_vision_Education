import React from 'react';
import './CoursesPage.css';
import Header from './Header';
import Footer from './Footer';
import heroImage from '../assets/images/hero/image 26.png';
import tickIcon from '../assets/images/icons/SVG (3).png';
import iconGlobe from '../assets/images/icons/bg1.png';
import iconBook from '../assets/images/icons/bg2.png';
import iconBriefcase from '../assets/images/icons/bg3.png';
import overlay11 from '../assets/images/course/Overlay (11).png';
import overlay12 from '../assets/images/course/Overlay (12).png';
import overlay13 from '../assets/images/course/Overlay (13).png';
import overlay14 from '../assets/images/course/Overlay (14).png';
import overlay15 from '../assets/images/course/Overlay (15).png';
import overlay16 from '../assets/images/course/Overlay (16).png';
import overlay17 from '../assets/images/course/Overlay (17).png';
import overlay18 from '../assets/images/course/Overlay (18).png';
import overlay19 from '../assets/images/course/Overlay (19).png';
import overlay20 from '../assets/images/course/Overlay (20).png';
import overlay21 from '../assets/images/course/Overlay (21).png';
import overlay22 from '../assets/images/course/Overlay (22).png';
import overlay23 from '../assets/images/course/Overlay (23).png';
import overlay24 from '../assets/images/course/Overlay (24).png';
import overlay25 from '../assets/images/course/Overlay (25).png';

const CoursesPage = () => {
  const getIcon = (type) => {
    const icons = {
      graduation: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="white"/>
        </svg>
      ),
      book: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H6V4H13V12L15.5 10.5L18 12V4H18V20Z" fill="white"/>
        </svg>
      ),
      briefcase: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2 6.89 2 8V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4ZM20 19H4V8H20V19Z" fill="white"/>
        </svg>
      ),
      code: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z" fill="white"/>
        </svg>
      ),
      building: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 7V3H2V21H22V7H12ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM20 19H12V17H14V15H12V13H14V11H12V9H20V19ZM18 11H16V13H18V11ZM18 15H16V17H18V15Z" fill="white"/>
        </svg>
      ),
      flask: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM7 10H17V12H7V10ZM7 14H15V16H7V14Z" fill="white"/>
        </svg>
      ),
      document: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" fill="white"/>
        </svg>
      ),
      heart: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" fill="white"/>
          <path d="M12 21.35L10.55 20.04C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="white"/>
        </svg>
      )
    };
    return icons[type] || icons.graduation;
  };

  const secondaryPrograms = [
    {
      title: '12th Grade / +2',
      description: 'Academic milestone preparing students for undergraduate studies in Science.',
      duration: '2 Years',
      icon: iconGlobe,
      eligibility: 'Completion of Class 10 or equivalent from a recognized board.'
    },
    {
      title: '10th Grade',
      description: 'Foundation for higher education with essential knowledge in languages,…',
      duration: '2 Years',
      icon: iconBook,
      eligibility: 'Completion of schooling up to Class 9 and enrollment under a recognized education board.'
    }
  ];

  const undergraduatePrograms = [
    {
      title: 'BBA',
      description: 'Core business and management skills for careers in administration and leadership.',
      duration: '3 Years',
      icon: iconBriefcase,
      eligibility: 'Completion of 10+2 or equivalent (any stream) from a recognized board.'
    },
    {
      title: 'BCA',
      description: 'Practical coding and IT skills for building a career in the software and tech industry.',
      duration: '3 Years',
      icon: iconBook,
      eligibility: 'Completion of 10+2 or equivalent; preference is often given to students with Mathematics or Computer Science.'
    },
    {
      title: 'BA',
      description: 'Humanities skills for careers in media, education, and public service.',
      duration: '3 Years',
      icon: iconGlobe,
      eligibility: 'Completion of 10+2 or equivalent (any stream).'
    },
    {
      title: 'BSc',
      description: 'Core science training for roles in labs, healthcare, and technical fields.',
      duration: '3 Years',
      icon: iconBriefcase,
      eligibility: 'Completion of 10+2 or equivalent, typically with a Science background.'
    },
    {
      title: 'BCom',
      description: 'Essential accounting and finance training for diverse business careers.',
      duration: '3 Years',
      icon: iconBook,
      eligibility: 'Completion of 10+2 or equivalent (any stream) from a recognized board.'
    },
    {
      title: 'B.Ed',
      description: 'Core teaching skills for careers in education and classroom leadership.',
      duration: '2 Years',
      icon: iconGlobe,
      eligibility: 'Completion of a Bachelor\'s degree in any discipline with prior relevant qualifications.'
    }
  ];

  const postgraduatePrograms = [
    {
      title: 'MBA',
      description: 'Strategic business skills for careers in finance, marketing, HR, and operations.',
      duration: '2 Years',
      icon: iconBriefcase,
      eligibility: 'Bachelor\'s degree in any stream from a recognized university.'
    },
    {
      title: 'MCA',
      description: 'Advanced software and IT skills for specialized roles in the tech industry.',
      duration: '2 Years',
      icon: iconBook,
      eligibility: 'Bachelor\'s degree in any discipline; some institutions require Mathematics at 12th or undergraduate level.'
    },
    {
      title: 'MA',
      description: 'Specialized humanities skills for roles in education, research, and creative fields.',
      duration: '2 Years',
      icon: iconGlobe,
      eligibility: 'Bachelor\'s degree (preferably in Arts or an equivalent discipline).'
    },
    {
      title: 'MSc',
      description: 'Specialized science skills for professional lab and research roles.',
      duration: '2 Years',
      icon: iconBriefcase,
      eligibility: 'Bachelor\'s degree in science or a related discipline.'
    },
    {
      title: 'M.Com',
      description: 'Commerce specialization for careers in banking, taxation, and finance.',
      duration: '2 Years',
      icon: iconBook,
      eligibility: 'Bachelor\'s degree in commerce or a related field.'
    },
    {
      title: 'MSW',
      description: 'Social work training for roles in community welfare and public service.',
      duration: '2 Years',
      icon: iconGlobe,
      eligibility: 'Bachelor\'s degree in any discipline.'
    },
    {
      title: 'M.Ed',
      description: 'Education expertise for careers in research, policy, and academic management.',
      duration: '2 Years',
      icon: iconBriefcase,
      eligibility: 'Bachelor of Education (B.Ed) degree from a recognized university. Some programs may also accept candidates with a relevant undergraduate degree plus teaching experience.'
    }
  ];

  return (
    <div className="courses-page">
      <Header />
      
      {/* Hero Section */}
      <section className="courses-hero">
        <div className="courses-hero-container">
          {/* Left Content */}
          <div className="courses-hero-content">
            <h1 className="courses-hero-title">
              <span className="title-line">Your Pathway to the</span>
              <span className="title-line">Right Career Starts</span>
              <span className="title-line">Here!</span>
            </h1>
            <div className="courses-hero-buttons">
              <button className="courses-btn-primary">Explore Programs</button>
              <button className="courses-btn-secondary">Get Guidance</button>
            </div>
          </div>

          {/* Right Image */}
          <div className="courses-hero-image-wrapper">
            <img src={heroImage} alt="Student reading" className="courses-hero-image" />
            
            {/* Floating Info Boxes */}
            <div className="floating-info-box floating-box-1">
              <div className="info-icon-box">
                <span className="info-icon-text">9+</span>
              </div>
              <div className="info-text">
                <span>Academic</span>
                <span>Partners</span>
              </div>
            </div>
            <div className="floating-info-box floating-box-2">
              <div className="info-icon-box">
                <img src={tickIcon} alt="Checkmark" className="info-checkmark" />
              </div>
              <div className="info-text">
                <span>Expert</span>
                <span>Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Courses Section - Top */}
      <section className="courses-section-top">
        <div className="courses-section-container">
          <h2 className="courses-section-heading">
            <span className="heading-line">Find the Course That <span className="highlight-teal">Shapes</span></span>
            <span className="heading-line"><span className="highlight-teal">Your Future</span></span>
          </h2>
          <p className="courses-section-description">
            Explore our comprehensive range of undergraduate and postgraduate programs designed to help you succeed.
          </p>
        </div>
      </section>

      {/* Courses Section - Bottom with gradient */}
      <section className="courses-section">
        <div className="courses-section-container">
          {/* Secondary Education */}
          <div className="program-section">
            <div className="secondary-education-container">
              <h3 className="program-section-title">Secondary Education</h3>
              <p className="program-section-subtitle">Build a strong foundation for your academic journey.</p>
              <div className="secondary-education-cards-wrapper">
                {secondaryPrograms.map((program, index) => {
                  const overlays = [overlay11, overlay12];
                  return (
                    <div key={index} className="secondary-education-card">
                      <div className="secondary-card-icon">
                        <img src={overlays[index]} alt={program.title} />
                      </div>
                      <h4 className="secondary-card-title">{program.title}</h4>
                      <p className="secondary-card-description">{program.description}</p>
                      <a href="#" className="secondary-card-read-more">Read More →</a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Undergraduate Programs */}
          <div className="program-section undergraduate-programs-section">
            <h3 className="program-section-title">Undergraduate Programs</h3>
            <p className="program-section-subtitle">Launch your career with industry-relevant bachelor's degrees.</p>
            <div className="undergraduate-cards-grid">
              {undergraduatePrograms.map((program, index) => {
                const overlays = [overlay13, overlay14, overlay15, overlay16, overlay17, overlay18];
                return (
                  <div key={index} className="undergraduate-card">
                    <div className="undergraduate-card-icon">
                      <img src={overlays[index]} alt={program.title} />
                    </div>
                    <h4 className="undergraduate-card-title">{program.title}</h4>
                    <p className="undergraduate-card-description">{program.description}</p>
                    <div className="undergraduate-card-footer">
                      <span className="undergraduate-duration">{program.duration}</span>
                      <a href="#" className="undergraduate-read-more">Read More →</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Postgraduate Programs */}
          <div className="program-section postgraduate-programs-section">
            <h3 className="program-section-title">Postgraduate Programs</h3>
            <p className="program-section-subtitle">Advance your expertise with specialized master's programs.</p>
            <div className="postgraduate-cards-container">
              {/* First Row - 4 cards */}
              <div className="postgraduate-cards-row postgraduate-cards-row-first">
                {postgraduatePrograms.slice(0, 4).map((program, index) => {
                  const overlays = [overlay19, overlay20, overlay21, overlay22, overlay23, overlay24, overlay25];
                  return (
                    <div key={index} className="postgraduate-card">
                      <div className="postgraduate-card-icon">
                        <img src={overlays[index]} alt={program.title} />
                      </div>
                      <h4 className="postgraduate-card-title">{program.title}</h4>
                      <p className="postgraduate-card-description">{program.description}</p>
                      <div className="postgraduate-card-footer">
                        <span className="postgraduate-duration">{program.duration}</span>
                        <a href="#" className="postgraduate-read-more">Read More →</a>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Second Row - 3 cards centered */}
              <div className="postgraduate-cards-row postgraduate-cards-row-second">
                {postgraduatePrograms.slice(4, 7).map((program, index) => {
                  const overlays = [overlay19, overlay20, overlay21, overlay22, overlay23, overlay24, overlay25];
                  return (
                    <div key={index + 4} className="postgraduate-card">
                      <div className="postgraduate-card-icon">
                        <img src={overlays[index + 4]} alt={program.title} />
                      </div>
                      <h4 className="postgraduate-card-title">{program.title}</h4>
                      <p className="postgraduate-card-description">{program.description}</p>
                      <div className="postgraduate-card-footer">
                        <span className="postgraduate-duration">{program.duration}</span>
                        <a href="#" className="postgraduate-read-more">Read More →</a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CoursesPage;
