import React from 'react';
import './Statistics.css';

const Statistics = () => {
  const stats = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="white"/>
        </svg>
      ),
      text: '7000+ Enrolled Students'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" fill="white"/>
        </svg>
      ),
      text: '4000+ Graduated Students'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17V12L12 17L2 12V17Z" fill="white"/>
        </svg>
      ),
      text: '9+ Academic Partners'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9 16L5 12L6.41 10.59L9 13.17L17.59 4.58L19 6L9 16Z" fill="white"/>
        </svg>
      ),
      text: '90% student satisfaction'
    }
  ];

  return (
    <section className="statistics">
      <div className="statistics-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-icon">
              {stat.icon}
            </div>
            <span className="stat-text">{stat.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;

