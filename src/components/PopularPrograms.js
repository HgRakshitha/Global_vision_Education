import React from 'react';
import { Link } from 'react-router-dom';
import './PopularPrograms.css';
import managementImg from '../assets/images/programs/manage.png';
import accountingImg from '../assets/images/programs/account.png';
import artsMediaImg from '../assets/images/programs/arts.png';
import engineeringImg from '../assets/images/programs/eng.png';

const PopularPrograms = () => {
  const programs = [
    {
      image: managementImg,
      name: 'BBA'
    },
    {
      image: accountingImg,
      name: 'B.Com'
    },
    {
      image: artsMediaImg,
      name: 'B.Ed'
    },
    {
      image: accountingImg,
      name: 'M.Com'
    },
    {
      image: managementImg,
      name: 'MBA'
    },
    {
      image: engineeringImg,
      name: 'M.Sc'
    }
  ];

  return (
    <section className="popular-programs">
      <h2 className="programs-heading">Popular Programs</h2>
      <div className="programs-container">
        <div className="programs-grid">
          {programs.map((program, index) => (
            <Link key={index} to="/courses" className="program-image-wrapper">
              {program.image ? (
                <img 
                  src={program.image} 
                  alt={program.name}
                  className="program-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              ) : (
                <div className="program-image-placeholder">
                  <span>{program.name}</span>
                </div>
              )}
              <div className="program-name">
                <span className="program-name-text">{program.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPrograms;

