import React from 'react';
import './AcademicPartners.css';

const AcademicPartners = () => {
  const affiliations = ['UGC', 'UPSC', 'DEB', 'AIU', 'STATE', 'NAAC', 'AICTE'];

  return (
    <section className="academic-partners">
      <div className="partners-container">
        <h2 className="partners-headline">Our Affiliations</h2>
        <div className="partners-logos">
          {affiliations.map((affiliation, index) => (
            <div key={index} className="affiliation-item">
              {affiliation}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicPartners;

