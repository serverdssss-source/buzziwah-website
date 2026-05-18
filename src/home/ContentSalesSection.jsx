import React from 'react';

const ContentSalesSection = ({ image = '/BEGIDN THE BUZZ.png' }) => {
  return (
    <section className="content-sales-section">
      {/* High-fidelity background decorations - green geometric shapes */}
      <div className="sales-bg-decorations">
        {/* Floating Green Triangle Left */}
        <div className="sales-shape sales-triangle sales-t1">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15 L85 75 H15 Z" stroke="#adfa3b" strokeWidth="2.5" fill="rgba(173, 250, 59, 0.04)" />
          </svg>
        </div>
        {/* Floating Green Triangle Right */}
        <div className="sales-shape sales-triangle sales-t2">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15 L85 75 H15 Z" stroke="#adfa3b" strokeWidth="2" fill="none" strokeDasharray="6 4" />
          </svg>
        </div>
        {/* Floating Technical Cross / Plus Symbols */}
        <div className="sales-shape sales-plus sales-p1">+</div>
        <div className="sales-shape sales-plus sales-p2">+</div>

        {/* Floating Glowing Circles and Squares */}
        <div className="sales-shape sales-circle sales-c1">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="35" stroke="#adfa3b" strokeWidth="2" fill="none" strokeDasharray="4 4" />
          </svg>
        </div>
        <div className="sales-shape sales-circle sales-c2">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="20" stroke="#8b5cf6" strokeWidth="3" fill="none" />
          </svg>
        </div>
        <div className="sales-shape sales-square sales-sq1">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="25" width="50" height="50" stroke="#adfa3b" strokeWidth="2" fill="rgba(139, 92, 246, 0.05)" transform="rotate(45 50 50)" />
          </svg>
        </div>
      </div>

      <div className="content-sales-inner">
        <div className="content-sales-text">
          <h2 className="bbbbb-fiu retro-1" style={{ '--fiu-delay': '0.05s' }}>
            Behind the <span>Buzz</span>
          </h2>
          <p className="bbbbb-fiu" style={{ '--fiu-delay': '0.18s' }}>
            Buzziwah is the evolved, Gen Z–driven digital marketing arm of Sripada Studios.
            Backed by a strong talent pool and in-house studio capabilities, we combine creative storytelling with technical precision to build brands that grow.
          </p>
          <a className="content-sales-btn bbbbb-fiu" style={{ '--fiu-delay': '0.3s' }} href="/about">
            Know More
          </a>
        </div>

        <a href="/content-solution" className="content-sales-image">
          <picture>
            <source srcSet="/BEGIDN THE BUZZ.webp" type="image/webp" />
            <img src={image} alt="Content Solutions Portfolio" width="760" height="428" loading="lazy" />
          </picture>
        </a>
      </div>
    </section>
  );
};

export default ContentSalesSection;
