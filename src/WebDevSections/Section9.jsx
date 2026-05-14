


const Section9 = () => (
  <section style={{
    background: '#ececec',
    padding: '44px 5% 66px',
    boxSizing: 'border-box',
  }}>
    {/* Section label + decorative divider */}
    <div style={{ textAlign: 'center', marginBottom: 34 }}>
      <p style={{
        fontSize: 34,
        fontWeight: 800,
        color: '#6f34d2',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        marginBottom: 8,
      }}>
        What's Website Maintenance?
      </p>
      {/* Decorative center divider */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'center', gap: 10, marginBottom: 0,
      }}>
        <div style={{ height: 1, width: 260, background: 'rgba(111,52,210,0.5)' }} />
        <span style={{ color: '#6f34d2', fontSize: 18, lineHeight: 1 }}>❈</span>
        <div style={{ height: 1, width: 260, background: 'rgba(111,52,210,0.5)' }} />
      </div>
    </div>

    {/* Two-column header */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1.35fr',
      gap: 30,
      maxWidth: 1420, margin: '0 auto 46px',
      alignItems: 'flex-start',
    }}>
      <div>
        <p style={{
          fontSize: 'clamp(26px, 2.1vw, 38px)',
          fontWeight: 700,
          color: '#111',
          lineHeight: 1.25,
          margin: 0,
        }}>
          A website is not a{' '}
          <span style={{ color: '#5f2cb8' }}>one-time build</span>
        </p>
      </div>
      <div>
        <p style={{
          fontSize: 24,
          color: '#111',
          lineHeight: 1.32,
          margin: 0,
          fontWeight: 700,
        }}>
          It needs to stay{' '}
          <span style={{ color: '#5f2cb8', fontWeight: 700 }}>updated, secure, and functional</span>.
          {' '}Because an outdated website doesn't just look bad, it affects trust, performance, and user experience.
        </p>
      </div>
    </div>

    {/* Grid Content */}
    <div className="section9-grid" style={{
      display: 'grid',
      maxWidth: 1560,
      margin: '0 auto',
      position: 'relative',
      zIndex: 1,
    }}>
      {[
        '/section 9/Copy of Website Ad Landing Page 6.png',
        '/section 9/Copy of Website Ad Landing Page 7.png',
        '/section 9/Copy of Website Ad Landing Page 8.png',
        '/section 9/Copy of Website Ad Landing Page 9.png',
        '/section 9/Copy of Website Ad Landing Page 10.png',
        '/section 9/Copy of Website Ad Landing Page 11.png',
      ].map((src, i) => (
        <div key={i} className="portfolio-item" style={{
          position: 'relative',
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: 'none',
          border: 'none',
          background: 'transparent',
          aspectRatio: '16/9.2',
        }}>
          <img
            src={src}
            alt={`Portfolio ${i + 1}`}
            style={{
              width: '112%',
              height: '112%',
              objectFit: 'contain',
              borderRadius: 12,
              marginLeft: '-6%',
              marginTop: '-6%',
            }}
          />
        </div>
      ))}
    </div>
    <style>{`
      .section9-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 14px 16px;
      }
      @media (max-width: 1200px) {
        .section9-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 18px !important;
        }
      }
      @media (max-width: 1024px) {
        .section9-grid {
          grid-template-columns: 1fr !important;
          gap: 16px !important;
        }
      }
    `}</style>
  </section>
);
/* ════════════════════════════════════════════
   SECTION 10 — Google Reviews
════════════════════════════════════════════ */

const reviews = [
  {
    name: 'Venkata Siddharth',
    handle: 'V',
    color: '#7c3aed',
    time: '2 months ago',
    stars: 5,
    text: 'Working with BUZZIWAH was a seamless experience. They delivered a high-quality, professional website exactly on...',
  },
  {
    name: 'Ananya Sharma',
    handle: 'A',
    color: '#ec4899',
    time: '1 month ago',
    stars: 5,
    text: 'Extremely satisfied with the results. BUZZIWAH provided a sleek mobile-responsive design that boosted our site traffic by 40%.',
  },
  {
    name: 'Karthik Nair',
    handle: 'K',
    color: '#10b981',
    time: '3 weeks ago',
    stars: 5,
    text: 'Technical expertise at its best. Their full-stack development team handled our backend complexities with ease.',
  },
  {
    name: 'hasan ahmed',
    handle: 'H',
    color: '#4caf50',
    time: '3 months ago',
    stars: 5,
    text: 'Best web design and app development company with in Bangalore, got home services booking app like urban company...',
  },
  {
    name: 'Sneha Kapoor',
    handle: 'S',
    color: '#f59e0b',
    time: '2 weeks ago',
    stars: 5,
    text: 'Great attention to detail. The UI/UX is intuitive and exactly what our users needed. Highly recommended!',
  },
  {
    name: 'Rahul Mehta',
    handle: 'R',
    color: '#3b82f6',
    time: '4 months ago',
    stars: 5,
    text: 'Fantastic communication throughout the process. They understood our brand vision and delivered beyond expectations.',
  },
  {
    name: 'Reddy Documents',
    handle: 'R',
    color: '#e53935',
    time: '3 months ago',
    stars: 5,
    text: 'Quality work with minimal Price and Time',
  },
  {
    name: 'Priya Das',
    handle: 'P',
    color: '#8b5cf6',
    time: '5 months ago',
    stars: 5,
    text: 'The SEO strategies they implemented have been a game-changer. Our rankings have never been better.',
  },
  {
    name: 'Amit Verma',
    handle: 'A',
    color: '#f43f5e',
    time: '6 months ago',
    stars: 5,
    text: 'Professional, timely, and innovative. BUZZIWAH is definitely our go-to for all digital development needs.',
  },
];

const StarRow = ({ count }) => (
  <div style={{ display: 'flex', gap: 2 }}>
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} style={{ color: '#fbbc04', fontSize: 14 }}>★</span>
    ))}
  </div>
);

const ReviewCard = ({ name, handle, color, time, stars, text }) => (
  <div style={{
    background: '#13131f',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 21,
    padding: '33px 33px 27px',
    position: 'relative',
    flex: '1 1 300px',
    minWidth: 0,
    minHeight: '300px',
    display: 'flex',
    flexDirection: 'column'
  }}>
    {/* Top row */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
        {/* Avatar */}
        <div style={{
          width: 54, height: 54, borderRadius: '50%',
          background: color,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{ color: '#fff', fontWeight: 700, fontSize: 22.5, fontFamily: "'Syne', sans-serif" }}>
            {handle}
          </span>
        </div>
        <div>
          <p style={{ margin: 0, color: '#fff', fontWeight: 700, fontSize: 19.5, fontFamily: "'Syne', sans-serif" }}>
            {name}
          </p>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.4)', fontSize: 16.5, fontFamily: "'DM Sans', sans-serif" }}>
            {time}
          </p>
        </div>
      </div>
      {/* Google G */}
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    </div>

    <StarRow count={stars} />

    <p style={{
      color: 'rgba(255,255,255,0.65)', fontSize: 18.75,
      lineHeight: 1.7, margin: '15px 0 21px',
      fontFamily: "'DM Sans', sans-serif",
      flex: 1
    }}>
      {text}
    </p>

    <span style={{
      color: '#7c3aed', fontSize: 16.5, fontWeight: 600,
      cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
    }}>
      Read more
    </span>

    {/* Quote mark bottom-right */}
    <span style={{
      position: 'absolute', bottom: 21, right: 27,
      color: '#7c3aed', fontSize: 42, lineHeight: 1,
      fontFamily: 'Georgia, serif', opacity: 0.6,
    }}>"</span>
  </div>
);

export { reviews, ReviewCard };
export default Section9;
