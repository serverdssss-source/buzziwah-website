import { useState } from 'react';
import LearnMoreBtn from './LearnMoreBtn';
const Section4 = () => {
  return null; // Hidden section
};

/* ════════════════════════════════════════════
   SECTION 5 — What We Offer (6 service cards)
════════════════════════════════════════════ */

const services = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Custom-coded Websites',
    desc: 'Fully tailored websites built from scratch with clean code, optimized performance, and unique functionality designed specifically for your business needs.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      </svg>
    ),
    title: 'One-page Websites',
    desc: 'Sleek, single-page designs that deliver your complete message in one seamless scroll, perfect for portfolios, events, and focused campaigns.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="7.5 4.21 12 6.81 16.5 4.21" /><polyline points="7.5 19.79 7.5 14.6 3 12" /><polyline points="21 12 16.5 14.6 16.5 19.79" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: 'Landing Pages',
    desc: 'High-converting landing pages designed to capture leads, drive action, and maximize ROI for your marketing campaigns and product launches.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: 'Portfolio Websites',
    desc: 'Stunning visual showcases that highlight your work, skills, and achievements with elegant design and smooth user experience.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    title: 'E-commerce Websites',
    desc: 'Complete online stores with secure payment integration, inventory management, and seamless shopping experiences that drive sales and customer loyalty.',
  },
];

const ServiceCard = ({ icon, title, desc }) => {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className="service-card-responsive"
      style={{
        backgroundColor: '#070a1f',
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent 0,
            transparent 84px,
            rgba(74, 90, 170, 0.12) 85px
          ),
          repeating-linear-gradient(
            90deg,
            transparent 0,
            transparent 84px,
            rgba(74, 90, 170, 0.12) 85px
          )
        `,
        border: `1.5px solid ${h ? '#c8ff00' : 'rgba(200,255,0,0.1)'}`,
        borderRadius: 16,
        display: 'flex', flexDirection: 'column', gap: 14,
        cursor: 'default',
        transition: 'all 0.3s ease',
        transform: h ? 'translateY(-6px)' : 'none',
        boxShadow: h
          ? '0 22px 50px rgba(200,255,0,0.14)'
          : '0 8px 24px rgba(0,0,0,0.22)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{
        width: 1, // hidden but kept structure
        height: 1,
        position: 'absolute', top: 0, left: 0
      }} />

      {/* Icon */}
      <div style={{
        marginBottom: 2,
        transition: 'all 0.3s ease',
      }}>
        {icon}
      </div>

      <h3 style={{
        fontSize: 16, fontWeight: 700,
        color: '#7ed316',
        textTransform: 'uppercase',
        letterSpacing: '0.03em',
        margin: 0,
      }}>
        {title}
      </h3>

      <p style={{
        fontSize: 12, color: 'rgba(255,255,255,0.9)',
        lineHeight: 1.55, margin: '6px 0 14px',
        fontWeight: 500,
      }}>
        {desc}
      </p>

      {/* Learn More */}
      <LearnMoreBtn />
      <style>{`
        .service-card-responsive {
          min-height: 286px;
          padding: 18px 18px 16px;
        }
        @media (max-width: 768px) {
          .service-card-responsive {
            min-height: auto !important;
            padding: 18px 16px !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </div>
  );
};

export { services, ServiceCard };
export default Section4;
