import { useState } from 'react';
import Btn from './Btn';


const Section3 = () => {

  const highlights = [
    <>USER-FOCUSED WEBSITE STRUCTURE</>,
    <>SHOWCASES ACTING COURSES &<br />FACULTY</>,
    <>CLEAN VISUAL STORYTELLING</>,
    <>RESPONSIVE DESIGN FOR MOBILE<br />USERS</>,
    <>MINIMALISTIC UI THAT REFLECTS<br />ARTISTIC VALUES</>,
  ];

  const outcomes = [
    <>BOOSTED VISIBILITY AMONG<br />ASPIRING ACTORS</>,
    <>STRONGER DIGITAL BRAND PRESENCE</>,
    <>LASTING IMPRESSION IN PERFORMING<br />ARTS EDUCATION</>,
    <>EASY NAVIGATION & CTA<br />ENGAGEMENT</>,
    <>AT REFLECTS ARTISTIC VALUES</>,
  ];

  return (
    <section className="webdev-section3" style={{
      background: '#ffffff',
      padding: '90px 6% 32px',
      height: '100vh',
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Purple blobs decoration */}
      <div style={{
        position: 'absolute', top: '15%', right: '3%',
        width: 90, height: 90, borderRadius: '50%',
        background: 'rgba(124,58,237,0.22)', filter: 'blur(2px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '12%', left: '2%',
        width: 66, height: 66, borderRadius: '50%',
        background: 'rgba(124,58,237,0.18)', filter: 'blur(2px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '30%', right: '8%',
        width: 45, height: 45, borderRadius: '50%',
        background: 'rgba(124,58,237,0.15)', filter: 'blur(1px)',
        pointerEvents: 'none',
      }} />

      {/* Category label */}
      <p className="section3-category-label" style={{
        textAlign: 'center',
        fontFamily: "'Nunito Sans', sans-serif",
        fontSize: 22, fontWeight: 800,
        letterSpacing: '0.18em', textTransform: 'uppercase',
        color: '#111', marginBottom: 72,
      }}>
        Ecommerce Website
      </p>

      {/* Main row */}
      <div className="section3-main-row" style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 56,
        flexWrap: 'nowrap',
      }}>

        {/* ── LEFT: Video ── */}
        <div className="section3-video-col" style={{
          flex: '0 0 50%',
          maxWidth: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: 'translateY(-52px)',
          background: 'transparent',
        }}>
          <video
            src="/webdev-demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{
              width: '100%',
              maxWidth: 840,
              height: 'auto',
              display: 'block',
              background: 'transparent',
            }}
          />
        </div>

        {/* ── RIGHT: Case study info ── */}
        <div className="section3-content-col" style={{ flex: '0 0 50%', maxWidth: '50%' }}>
          <CaseBadge scale={1.5} />

          <h2 className="section3-headline" style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 500,
            color: '#7c3aed',
            textTransform: 'uppercase',
            lineHeight: 1.2,
            margin: '0 0 21px',
            whiteSpace: 'nowrap',
          }}>
            Kovedaa Skincare Website
          </h2>

          <p className="section3-para" style={{
            color: '#444', lineHeight: 1.6,
            margin: '0 0 48px', maxWidth: 690,
            fontFamily: "'Nunito Sans', sans-serif",
          }}>
            Designed and developed a modern eCommerce<br />
            website for Kovedaa, blending Ayurvedic heritage<br />
            with a clean, conversion-focused user experience.
          </p>

          {/* Two-column highlights */}
          <div className="section3-lists" style={{ display: 'flex', gap: 32, flexWrap: 'nowrap' }}>
            {/* Project Highlights */}
            <div style={{ flex: '1 1 270px' }}>
              <h4 style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: 16, fontWeight: 500,
                color: '#7c3aed', textTransform: 'uppercase',
                letterSpacing: '0.1em', margin: '0 0 18px',
              }}>
                Project Highlights
              </h4>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {highlights.map((item, i) => (
                  <li key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10.5,
                    fontSize: 14, color: '#333', lineHeight: 1.45,
                    marginBottom: 8,
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontWeight: 500,
                  }}>
                    <span style={{ color: '#7c3aed', marginTop: 2, flexShrink: 0 }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome */}
            <div style={{ flex: '1 1 270px' }}>
              <h4 style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: 16, fontWeight: 500,
                color: '#7c3aed', textTransform: 'uppercase',
                letterSpacing: '0.1em', margin: '0 0 18px',
              }}>
                Outcome
              </h4>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {outcomes.map((item, i) => (
                  <li key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10.5,
                    fontSize: 14, color: '#333', lineHeight: 1.45,
                    marginBottom: 8,
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontWeight: 500,
                  }}>
                    <span style={{ color: '#7c3aed', marginTop: 2, flexShrink: 0 }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <KnowMoreBtn scale={1.5} />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        .section3-headline {
          font-size: clamp(24px, 2.5vw, 36px);
        }
        .section3-para {
          font-size: 22.5px;
        }
        @media (min-width: 1025px) {
          .section3-main-row {
            display: flex !important;
            flex-wrap: nowrap !important;
            align-items: flex-start !important;
          }
          .section3-video-col {
            flex: 0 0 50% !important;
            max-width: 50% !important;
          }
          .section3-content-col {
            flex: 0 0 50% !important;
            max-width: 50% !important;
          }
          .section3-lists {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            column-gap: 24px !important;
          }
        }
        @media (max-width: 1024px) {
          .webdev-section3 {
            height: auto !important;
            overflow: visible !important;
            padding: 48px 6% 32px !important;
          }
          .section3-category-label {
            margin-bottom: 24px !important;
          }
          .section3-main-row {
            flex-direction: column !important;
            gap: 24px !important;
            flex-wrap: wrap !important;
          }
          .section3-video-col {
            transform: none !important;
            margin-bottom: 12px !important;
          }
          .section3-video-col, .section3-content-col {
            flex: 1 1 100% !important;
            max-width: 100% !important;
          }
          .section3-content-col {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .section3-lists {
            display: flex !important;
            flex-wrap: wrap !important;
            gap: 24px !important;
            width: 100% !important;
            justify-content: center !important;
            text-align: left !important;
          }
          .section3-headline {
            font-size: 24px !important;
            white-space: normal !important;
            text-align: center !important;
          }
          .section3-para {
            font-size: 18px !important;
            margin-bottom: 24px !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
};

/* ── Combined export removed — WebDevPage above handles all sections ── */

/* ════════════════════════════════════════════
   SHARED COMPONENTS (updated with dark prop)
════════════════════════════════════════════ */

const CaseBadge = ({ dark = false, scale = 1 }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 8 * scale,
    background: '#9333ea',
    borderRadius: 50 * scale,
    padding: `${6 * scale}px ${16 * scale}px ${6 * scale}px ${6 * scale}px`, 
    marginBottom: 18 * scale,
    border: 'none',
    transform: scale !== 1 ? `scale(${scale})` : 'none',
    transformOrigin: 'left center',
  }}>
    <div style={{
      width: 22 * scale, height: 22 * scale, borderRadius: '50%',
      background: '#280c44',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{ width: 7 * scale, height: 7 * scale, borderRadius: '50%', background: '#fff' }} />
    </div>
    <span style={{
      color: '#fff',
      fontSize: 10 * scale, fontWeight: 700,
      letterSpacing: '0.12em', textTransform: 'uppercase',
      fontFamily: "'Nunito Sans', sans-serif",
    }}>
      CASE STUDIES
    </span>
  </div>
);

const KnowMoreBtn = ({ dark = false, scale = 1 }) => {
  const [h, setH] = useState(false);
  return (
    <a
      href="/case-studies"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: 'inline-block',
        textDecoration: 'none',
        position: 'relative', overflow: 'hidden',
        background: h ? '#5b21b6' : '#7c3aed',
        color: '#fff',
        border: 'none',
        borderRadius: 50 * scale,
        padding: `${14 * scale}px ${40 * scale}px`,
        fontSize: 10.5 * scale, fontWeight: 800,
        letterSpacing: '0.12em', textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        transform: h ? `translateY(${-3 * scale}px)` : 'none',
        boxShadow: h ? `0 ${10 * scale}px ${25 * scale}px rgba(124,58,237,0.5)` : `0 ${4 * scale}px ${15 * scale}px rgba(124,58,237,0.3)`,
        fontFamily: "'Nunito Sans', sans-serif",
        marginTop: 32 * scale,
        textAlign: 'center'
      }}
    >
      Know More
    </a>
  );
};

/* ── Laptop shell ── */
const LaptopShell = ({ videoSrc }) => (
  <div style={{ position: 'relative', width: '100%', zIndex: 2 }}>
    <div style={{
      background: '#111',
      borderRadius: '16px 16px 0 0',
      padding: '10px 12px 0',
      border: '3px solid #333',
      boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
    }}>
      <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#444', margin: '0 auto 8px' }} />
      {/* Screen */}
      <div style={{
        background: '#000', borderRadius: '8px 8px 0 0',
        overflow: 'hidden', aspectRatio: '16/10',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {videoSrc ? (
          <video src={videoSrc} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 8,
          }}>
            <div style={{
              width: 50, height: 50, borderRadius: '50%',
              background: 'rgba(200,255,0,0.6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ color: '#000', fontSize: 20, marginLeft: 3 }}>▶</span>
            </div>
          </div>
        )}
      </div>
    </div>
    <div style={{ background: '#111', height: 15, borderRadius: '0 0 6px 6px', border: '3px solid #333', borderTop: 'none' }} />
    <div style={{ background: '#222', height: 8, width: 70, margin: '0 auto' }} />
    <div style={{ background: '#111', height: 8, borderRadius: 5, border: '2.5px solid #333' }} />
  </div>
);

/* ── Tablet shell ── */
const TabletShell = ({ videoSrc }) => (
  <div style={{
    width: '100%', zIndex: 3,
    filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.6))',
  }}>
    <div style={{
      background: '#111', borderRadius: 14,
      padding: '8px 6px', border: '3px solid #333',
    }}>
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#444', margin: '0 auto 6px' }} />
      <div style={{
        background: '#000', borderRadius: 8,
        overflow: 'hidden', aspectRatio: '3/4',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {videoSrc ? (
          <video src={videoSrc} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(160deg, #1a1a2e, #2d1b69)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: 30, height: 30, borderRadius: '50%',
              background: 'rgba(200,255,0,0.6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ color: '#000', fontSize: 14, marginLeft: 2 }}>▶</span>
            </div>
          </div>
        )}
      </div>
      <div style={{ width: 35, height: 4, borderRadius: 2, background: '#444', margin: '6px auto 0' }} />
    </div>
  </div>
);

/* ── Phone shell ── */
const PhoneShell = ({ videoSrc }) => (
  <div style={{
    width: '100%', zIndex: 3,
    filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.6))',
  }}>
    <div style={{
      background: '#111', borderRadius: 22,
      padding: '10px 5px', border: '3px solid #333',
    }}>
      <div style={{ width: 28, height: 8, borderRadius: 4, background: '#333', margin: '0 auto 6px' }} />
      <div style={{
        background: '#000', borderRadius: 12,
        overflow: 'hidden', aspectRatio: '9/16',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {videoSrc ? (
          <video src={videoSrc} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(180deg, #1a1a2e, #4c1d95)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: 24, height: 24, borderRadius: '50%',
              background: 'rgba(200,255,0,0.6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ color: '#000', fontSize: 12, marginLeft: 2 }}>▶</span>
            </div>
          </div>
        )}
      </div>
      <div style={{ width: 28, height: 3, borderRadius: 2, background: '#444', margin: '6px auto 0' }} />
    </div>
  </div>
);

/* ════════════════════════════════════════════
   SECTION 4 — Dark Case Study (PivotCall)
════════════════════════════════════════════ */

export { CaseBadge, KnowMoreBtn };
export default Section3;
