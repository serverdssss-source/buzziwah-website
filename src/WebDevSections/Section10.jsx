import { useState, useEffect } from 'react';
import { reviews, ReviewCard } from './Section9';

const Section10 = () => {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Screen size check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerPage = isMobile ? 1 : 3;
  const pageCount = Math.ceil(reviews.length / itemsPerPage);

  // Auto-advance logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % pageCount);
    }, 5000);
    return () => clearInterval(timer);
  }, [pageCount]);

  return (
    <section className="section10-container" style={{
      background: 'transparent',
      padding: '80px 6% 100px',
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '500px',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Background Glows (Scaled) */}
      <div style={{ position: 'absolute', top: '15%', left: '1%', width: 120, height: 120, borderRadius: '50%', background: 'rgba(124,58,237,0.25)', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '2%', width: 90, height: 90, borderRadius: '50%', background: 'rgba(124,58,237,0.2)', filter: 'blur(30px)', pointerEvents: 'none' }} />

      <div className="section10-inner" style={{
        display: 'flex',
        alignItems: 'center',
        gap: 78,
        width: '100%',
        maxWidth: 1800,
        margin: '0 auto'
      }}>

        {/* LEFT — Logo (Scaled 1.5x) */}
        <div className="section10-logo-col" style={{
          flex: '0 0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
        }}>
          <img src="/logo.png" alt="Buzziwah Logo" className="section10-logo" style={{ width: 150 }} />
          <p className="section10-label" style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: 15,
            fontFamily: "'Syne', sans-serif",
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            textAlign: 'center',
            fontWeight: 700
          }}>
            Our Reviews
          </p>
        </div>

        {/* RIGHT — Review carousel */}
        <div className="section10-carousel-col" style={{
          flex: '1 1 500px',
          display: 'flex',
          flexDirection: 'column',
          gap: 40,
          overflow: 'hidden'
        }}>

          {/* Pagination Dots (Scaled) */}
          <div style={{ display: 'flex', gap: 15, justifyContent: 'flex-end', marginBottom: 6 }}>
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: active === i ? 42 : 12,
                  height: 12,
                  borderRadius: 6,
                  background: active === i ? '#c8ff00' : 'rgba(255,255,255,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
            ))}
          </div>

          {/* Carousel Window */}
          <div style={{
            display: 'flex',
            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: `translateX(-${active * 100}%)`,
          }}>
            {Array.from({ length: pageCount }).map((_, pageIndex) => (
              <div key={pageIndex} style={{
                minWidth: '100%',
                display: 'flex',
                gap: 24,
                padding: '10px 0'
              }}>
                {reviews.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((r, i) => (
                  <div key={i} style={{ flex: 1, minWidth: 0 }}>
                    <ReviewCard {...r} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;900&family=DM+Sans:wght@400;600&display=swap');
        @media (max-width: 1024px) {
          .section10-container {
            padding: 60px 6% 80px !important;
            height: auto !important;
            display: block !important;
          }
          .section10-inner {
            flex-direction: column !important;
            gap: 40px !important;
          }
          .section10-logo-col {
            width: 100% !important;
            margin-bottom: 20px !important;
          }
          .section10-logo {
            width: 100px !important;
          }
          .section10-label {
            font-size: 13px !important;
          }
          .section10-carousel-col {
            width: 100% !important;
            flex: 1 1 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Section10;
