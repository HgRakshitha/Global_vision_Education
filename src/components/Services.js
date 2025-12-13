import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: null,
      title: 'Select Your Program',
      description: 'Explore our range of programs and choose the course that fits your academic interests and career aspirations.'
    },
    {
      icon: null,
      title: 'Complete Your Application',
      description: 'Fill out the online application form with accurate details to initiate your enrollment.'
    },
    {
      icon: null,
      title: 'Application Review',
      description: 'Our admissions team reviews your application to ensure eligibility and confirms your acceptance.'
    },
    {
      icon: null,
      title: 'Make Payment',
      description: 'Pay the program fees securely online or via bank transfer to finalize your enrollment.'
    },
    {
      icon: null,
      title: 'Receive Admission Details',
      description: 'Once your payment is confirmed, you will get your admission confirmation, student ID, and access to the learning portal.'
    },
    {
      icon: null,
      title: 'Begin your Studies',
      description: 'Start your learning journey by accessing course materials, attending online classes, and engaging with instructors.'
    }
  ];

  return (
    <section className="services-section" id="services">
      {/* Upper Section - Cream Background */}
      <div className="services-upper">
        <div className="services-upper-content">
          <div className="services-upper-inner">
            <div className="services-label">Our Services</div>
            <h2 className="services-heading">Complete Support for Your Educational Journey</h2>
            <p className="services-description">
              From choosing the right university to settling into your new home, we're with you every step of the way.
            </p>
          </div>
        </div>
        <div className="services-curve"></div>
      </div>

      {/* Lower Section - Dark Teal Background with Cards */}
      <div className="services-lower">
        <div className="services-container">
          <h2 className="application-process-heading">Application Process</h2>
          <div className="application-process-grid">
            {services.map((service, index) => (
              <div key={index} className="application-process-card">
                <div className="application-process-icon-wrapper">
                  {index === 0 && (
                    <svg className="application-process-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="white"/>
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="application-process-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" fill="white"/>
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="application-process-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="6" y="6" width="6" height="6" rx="1" fill="white"/>
                      <rect x="12" y="12" width="6" height="6" rx="1" fill="white" opacity="0.8"/>
                    </svg>
                  )}
                  {index === 3 && (
                    <svg className="application-process-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" fill="white"/>
                      <path d="M12 6V8M12 16V18M11 10C10.45 10 10 10.45 10 11C10 11.55 10.45 12 11 12H12C12.55 12 13 12.45 13 13C13 13.55 12.55 14 12 14H11C10.45 14 10 14.45 10 15C10 15.55 10.45 16 11 16H13" stroke="#06B795" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  )}
                  {index === 4 && (
                    <svg className="application-process-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="white"/>
                      <path d="M9 15L11 17L15 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  )}
                  {index === 5 && (
                    <svg className="application-process-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17V12L12 17L2 12V17Z" fill="white"/>
                      <rect x="10" y="2" width="4" height="5" rx="0.5" fill="#06B795"/>
                    </svg>
                  )}
                </div>
                <h3 className="application-process-title">{service.title}</h3>
                <p className="application-process-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

