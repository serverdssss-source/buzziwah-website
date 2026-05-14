


import { services, ServiceCard } from './Section4';

const Section5 = () => (
  <section style={{
    backgroundColor: '#e8f1dc',
    backgroundImage: `
      radial-gradient(circle at -8% 38%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 22%, transparent 44%),
      linear-gradient(180deg, rgba(12,15,44,0.95) 0px, rgba(12,15,44,0.95) 16px, transparent 16px)
    `,
    padding: '72px 6% 88px',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Subtle blob */}
    <div style={{
      position: 'absolute', top: '8%', right: '4%',
      width: 90, height: 90, borderRadius: '50%',
      background: 'rgba(124,58,237,0.15)', filter: 'blur(3px)',
      pointerEvents: 'none',
    }} />
    <div style={{
      position: 'absolute', bottom: '10%', left: '3%',
      width: 66, height: 66, borderRadius: '50%',
      background: 'rgba(124,58,237,0.12)', filter: 'blur(3px)',
      pointerEvents: 'none',
    }} />

    {/* Header */}
    <div style={{ textAlign: 'center', marginBottom: 52, position: 'relative', zIndex: 1 }}>
      <p style={{
        fontSize: 35, fontWeight: 800, color: '#7c4dff',
        letterSpacing: '0.06em', textTransform: 'uppercase',
        marginBottom: 18,
      }}>
        Types of Websites We Do
      </p>
      <p className="section5-subtitle" style={{
        fontSize: 'clamp(22px, 2.8vw, 34px)',
        color: '#161616', lineHeight: 1.42,
        maxWidth: 930, margin: '0 auto',
        fontWeight: 500
      }}>
        From custom-coded solutions to high-converting landing pages, we create websites tailored to your unique business goals and audience needs.
      </p>
    </div>

    {/* 3×2 Grid */}
    <div className="section5-grid" style={{
      display: 'grid',
      maxWidth: 1420,
      margin: '0 auto',
    }}>
      {services.map((s, i) => (
        <ServiceCard key={i} {...s} />
      ))}
    </div>

    <style>{`
      .section5-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
      }
      @media (max-width: 1024px) {
        .section5-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 20px !important;
        }
      }
      @media (max-width: 768px) {
        .section5-grid {
          grid-template-columns: repeat(1, 1fr) !important;
          gap: 20px !important;
        }
        .section5-subtitle {
          color: #2a2a2a !important;
          font-weight: 600 !important;
        }
      }
    `}</style>
  </section>
);

/* ════════════════════════════════════════════
   SECTION 6 — Impactful Solutions Carousel
 ════════════════════════════════════════════ */

export default Section5;
