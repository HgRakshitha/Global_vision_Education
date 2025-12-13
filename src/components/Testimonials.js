import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'The visa interview preparation was the toughest. They conducted multiple mock interviews, corrected my answers, and reviewed every detail until everything was perfect. Because of that, I walked into my interview fully confident and I got my visa on my first try. It was the best experience.',
      name: 'Rahul Mishra',
      university: 'University, USA',
      rating: 4,
      avatar: 'RM'
    },
    {
      quote: 'I was overwhelmed with deadlines and requirements, but they took that stress away. They helped me rewrite my SOP from scratch and guided me through every stage of the application portal. Getting my offer letter so quickly felt unreal - and it wouldn\'t have happened without their constant support and follow-ups.',
      name: 'Sana Fatima',
      university: 'University of Oxford, UK',
      rating: 5,
      avatar: 'SF'
    },
    {
      quote: 'My profile wasn\'t very strong and I was scared of rejection. But they assured me there were still great universities I could get into and helped me build a strong profile narrative. They even guided me with scholarship paperwork, which reduced my tuition costs. I\'m now studying in Dublin - something I thought was impossible.',
      name: 'Aditya Verma',
      university: 'University of Dublin, Ireland',
      rating: 5,
      avatar: 'AV'
    },
    {
      quote: 'I had no idea how to begin with applications abroad. The team explained the entire process and helped me shortlist universities that matched my profile instead of pushing random options. They handled documentation, SOP, and even small details I would\'ve missed. Today I\'m studying in Sydney with confidence, and I\'m genuinely thankful.',
      name: 'Ibrahim Khan',
      university: 'UTS, Sydney',
      rating: 5,
      avatar: 'IK'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={index < rating ? "#FFD700" : "none"}
        stroke={index < rating ? "#FFD700" : "#FFD700"}
        strokeWidth="1.5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">What our Students Say</h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">
                  {testimonial.avatar}
                </div>
                <div className="testimonial-info">
                  <div className="testimonial-name-rating">
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <div className="testimonial-university">{testimonial.university}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

