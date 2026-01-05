import React, { useState, useEffect } from 'react';
import './ConsultationPopup.css';

const ConsultationPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: ''
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can add API call here
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', phone: '', email: '', course: '' });
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="consultation-popup-overlay" onClick={handleOverlayClick}>
      <div className="consultation-popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="consultation-popup-close" onClick={onClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="consultation-popup-content">
          <h2 className="consultation-popup-title">Free Consultation</h2>
          <p className="consultation-popup-subtitle">Fill out the form below and we'll get back to you soon.</p>
          
          <form className="consultation-popup-form" onSubmit={handleSubmit}>
            <div className="consultation-form-group">
              <label htmlFor="name" className="consultation-form-label">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                className="consultation-form-input"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="consultation-form-group">
              <label htmlFor="phone" className="consultation-form-label">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="consultation-form-input"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="consultation-form-group">
              <label htmlFor="email" className="consultation-form-label">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                className="consultation-form-input"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="consultation-form-group">
              <label htmlFor="course" className="consultation-form-label">Course *</label>
              <input
                type="text"
                id="course"
                name="course"
                className="consultation-form-input"
                placeholder="Enter course name"
                value={formData.course}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="consultation-form-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPopup;

