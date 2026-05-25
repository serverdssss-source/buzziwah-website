import React, { useState, useRef, useEffect } from 'react';
import VariableProximity from '../components/VariableProximity';
import servicesData from '../servicesData.json';

const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = React.useState(0);
  const [inView, setInView] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  React.useEffect(() => {
    if (!inView) return;
    let start; const step = (ts) => { if (!start) start = ts; const p = Math.min((ts-start)/duration,1); const e = 1-Math.pow(1-p,3); setCount(Math.floor(end*e)); if(p<1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }, [inView, end, duration]);
  return [ref, count];
};

const serviceConfig = servicesData['content-solution'];

/* ── Content Stats Strip ── */
const ContentStatsStrip = () => {
  const stats = [
    { end: 2400, suffix: '+', label: 'Content Pieces Delivered' },
    { end: 18, suffix: 'M+', label: 'Total Content Views' },
    { end: 320, suffix: '%', label: 'Avg Engagement Lift' },
    { end: 96, suffix: '%', label: 'Client Satisfaction' },
    { end: 4, suffix: 'x', label: 'Conversion Boost' },
  ];
  return (
    <div style={{ background:'#060811', borderTop:'1px solid rgba(173,250,59,0.18)', borderBottom:'1px solid rgba(173,250,59,0.18)', padding:'22px 5%', overflow:'hidden', position:'relative' }}>
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg, rgba(124,58,237,0.06) 0%, rgba(173,250,59,0.04) 50%, rgba(124,58,237,0.06) 100%)', pointerEvents:'none' }} />
      <div style={{ display:'flex', gap:'clamp(24px,4vw,60px)', justifyContent:'center', flexWrap:'wrap', maxWidth:'1100px', margin:'0 auto', position:'relative', zIndex:1 }}>
        {stats.map((s, i) => {
          const [ref, count] = useCountUp(s.end, 1600 + i*200);
          return (
            <div key={i} ref={ref} style={{ textAlign:'center', minWidth:'90px' }}>
              <div style={{ fontFamily:"'Bebas Neue',Impact,sans-serif", fontSize:'clamp(26px,3.5vw,44px)', color:'#adfa3b', letterSpacing:'0.03em', lineHeight:1, textShadow:'0 0 20px rgba(173,250,59,0.3)' }}>
                {count}{s.suffix}
              </div>
              <div style={{ fontSize:'10px', color:'rgba(255,255,255,0.45)', textTransform:'uppercase', letterSpacing:'0.18em', marginTop:'4px', fontWeight:600 }}>
                {s.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ── Floating Content Badges ── */
const FloatingContentBadges = () => {
  const badges = [
    { label:'✍️ VIRAL COPY', color:'#adfa3b', textColor:'#060811', x:'3%', y:'15%', rot:'-7deg', delay:'0s', dur:'7s' },
    { label:'📝 CONTENT', color:'rgba(124,58,237,0.85)', textColor:'#fff', x:'88%', y:'22%', rot:'5deg', delay:'1.3s', dur:'9s' },
    { label:'🚀 CONVERTS', color:'rgba(255,255,255,0.07)', textColor:'#adfa3b', x:'4%', y:'70%', rot:'4deg', delay:'0.7s', dur:'8s' },
    { label:'📈 2400+ POSTS', color:'rgba(173,250,59,0.12)', textColor:'#adfa3b', x:'84%', y:'74%', rot:'-5deg', delay:'1.9s', dur:'10s' },
  ];
  return (
    <>
      <style>{`@keyframes contentFloat{0%,100%{transform:translateY(0)rotate(var(--rot));}50%{transform:translateY(-14px)rotate(var(--rot));}}`}</style>
      {badges.map((b,i)=>(
        <div key={i} style={{ position:'absolute', left:b.x, top:b.y, background:b.color, color:b.textColor, fontFamily:"'Bebas Neue',Impact,sans-serif", fontSize:'11px', letterSpacing:'0.18em', padding:'5px 12px', borderRadius:'6px', border:`1px solid ${b.textColor === '#060811' ? 'transparent' : 'rgba(173,250,59,0.25)'}`, '--rot':b.rot, animation:`contentFloat ${b.dur} ease-in-out infinite`, animationDelay:b.delay, pointerEvents:'none', zIndex:1, whiteSpace:'nowrap', backdropFilter:'blur(8px)' }}>
          {b.label}
        </div>
      ))}
    </>
  );
};


/* ════════════════════════════════════════════
   SECTION 10 — Reviews & Carousel Logic
════════════════════════════════════════════ */

const reviews = [
  { name: 'Venkata Siddharth', handle: 'V', color: '#7c3aed', time: '2 months ago', stars: 5, text: 'Working with Buzziwah was a seamless experience. They delivered a high-quality, professional website exactly on...' },
  { name: 'Ananya Sharma', handle: 'A', color: '#ec4899', time: '1 month ago', stars: 5, text: 'Extremely satisfied with the results. Buzziwah provided a sleek mobile-responsive design that boosted our site traffic by 40%.' },
  { name: 'Karthik Nair', handle: 'K', color: '#10b981', time: '3 weeks ago', stars: 5, text: 'Technical expertise at its best. Their full-stack development team handled our backend complexities with ease.' },
  { name: 'hasan ahmed', handle: 'H', color: '#4caf50', time: '3 months ago', stars: 5, text: 'Best web design and app development company with in Bangalore, got home services booking app like urban company...' },
  { name: 'Sneha Kapoor', handle: 'S', color: '#f59e0b', time: '2 weeks ago', stars: 5, text: 'Great attention to detail. The UI/UX is intuitive and exactly what our users needed. Highly recommended!' },
  { name: 'Rahul Mehta', handle: 'R', color: '#3b82f6', time: '4 months ago', stars: 5, text: 'Fantastic communication throughout the process. They understood our brand vision and delivered beyond expectations.' },
  { name: 'Reddy Documents', handle: 'R', color: '#e53935', time: '3 months ago', stars: 5, text: 'Quality work with minimal Price and Time' },
  { name: 'Priya Das', handle: 'P', color: '#8b5cf6', time: '5 months ago', stars: 5, text: 'The SEO strategies they implemented have been a game-changer. Our rankings have never been better.' },
  { name: 'Amit Verma', handle: 'A', color: '#f43f5e', time: '6 months ago', stars: 5, text: 'Professional, timely, and innovative. Buzziwah is definitely our go-to for all digital development needs.' },
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
    background: '#13131f', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 21,
    padding: '33px 33px 27px', position: 'relative', flex: '1 1 300px', minWidth: 0,
    minHeight: '300px', display: 'flex', flexDirection: 'column'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
        <div style={{ width: 54, height: 54, borderRadius: '50%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ color: '#fff', fontWeight: 700, fontSize: 22.5, fontFamily: "'Syne', sans-serif" }}>{handle}</span>
        </div>
        <div>
          <p style={{ margin: 0, color: '#fff', fontWeight: 700, fontSize: 19.5, fontFamily: "'Syne', sans-serif" }}>{name}</p>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.4)', fontSize: 16.5, fontFamily: "'DM Sans', sans-serif" }}>{time}</p>
        </div>
      </div>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    </div>
    <StarRow count={stars} />
    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 18.75, lineHeight: 1.7, margin: '15px 0 21px', fontFamily: "'DM Sans', sans-serif", flex: 1 }}>{text}</p>
    <span style={{ color: '#7c3aed', fontSize: 16.5, fontWeight: 600, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Read more</span>
    <span style={{ position: 'absolute', bottom: 21, right: 27, color: '#7c3aed', fontSize: 42, lineHeight: 1, fontFamily: 'Georgia, serif', opacity: 0.6 }}>"</span>
  </div>
);

const Section10 = () => {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerPage = isMobile ? 1 : 3;
  const pageCount = Math.ceil(reviews.length / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => { setActive((prev) => (prev + 1) % pageCount); }, 5000);
    return () => clearInterval(timer);
  }, [pageCount]);

  return (
    <section className="section10-container" style={{ background: '#0d0d1a', padding: '28px 6% 88px', boxSizing: 'border-box', position: 'relative', overflow: 'hidden', minHeight: '620px', display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'absolute', top: '15%', left: '1%', width: 120, height: 120, borderRadius: '50%', background: 'rgba(124,58,237,0.25)', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '2%', width: 90, height: 90, borderRadius: '50%', background: 'rgba(124,58,237,0.2)', filter: 'blur(30px)', pointerEvents: 'none' }} />
      <div className="section10-inner" style={{ display: 'flex', alignItems: 'center', gap: 78, width: '100%', maxWidth: 1800, margin: '0 auto' }}>
        <div className="section10-logo-col" style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
          <img src="/logo.webp" alt="Buzziwah Logo" className="section10-logo" width="150" height="188" style={{ width: 150, height: 'auto' }} />
          <p className="section10-label" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, fontFamily: "'Syne', sans-serif", letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'center', fontWeight: 700 }}>Our Reviews</p>
        </div>
        <div className="section10-carousel-col" style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: 40, overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: 15, justifyContent: 'flex-end', marginBottom: 6 }}>
            {Array.from({ length: pageCount }).map((_, i) => (
              <button key={i} onClick={() => setActive(i)} aria-label={`View review slide ${i + 1}`} style={{ width: active === i ? 42 : 12, height: 12, borderRadius: 6, background: active === i ? '#c8ff00' : 'rgba(255,255,255,0.2)', border: 'none', cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }} />
            ))}
          </div>
          <div style={{ display: 'flex', transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)', transform: `translateX(-${active * 100}%)` }}>
            {Array.from({ length: pageCount }).map((_, pageIndex) => (
              <div key={pageIndex} style={{ minWidth: '100%', display: 'flex', gap: 24, padding: '10px 0' }}>
                {reviews.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((r, i) => (
                  <div key={i} style={{ flex: 1, minWidth: 0 }}><ReviewCard {...r} /></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .section10-container { padding: 20px 6% 60px !important; height: auto !important; display: block !important; }
          .section10-inner { flex-direction: column !important; gap: 40px !important; }
          .section10-logo-col { width: 100% !important; margin-bottom: 20px !important; }
          .section10-logo { width: 100px !important; }
          .section10-label { font-size: 13px !important; }
          .section10-carousel-col { width: 100% !important; flex: 1 1 100% !important; }
        }
      `}</style>
    </section>
  );
};

/* ═══════════════════════════════════════════════════
   SHARED BUTTON
═══════════════════════════════════════════════════ */
const PillBtn = ({ children, filled = false, onClick }) => {
  const [h, setH] = useState(false);
  return (
    <button
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      onClick={onClick}
      style={{
        position: 'relative', overflow: 'hidden',
        background: filled ? (h ? '#5b21b6' : '#7c3aed') : 'transparent',
        color: filled ? '#fff' : (h ? '#fff' : '#7c3aed'),
        border: '2px solid #7c3aed',
        borderRadius: 50,
        padding: '14px 28px',
        fontSize: 11, fontWeight: 700,
        letterSpacing: '0.12em', textTransform: 'uppercase',
        cursor: 'pointer', zIndex: 0,
        transition: 'all 0.3s ease',
        transform: h ? 'translateY(-2px)' : 'none',
        boxShadow: h ? '0 8px 24px rgba(124,58,237,0.4)' : 'none',
        fontFamily: "'Syne', sans-serif",
        whiteSpace: 'nowrap',
      }}
    >
      {!filled && (
        <span style={{
          position: 'absolute', inset: 0, background: '#7c3aed', borderRadius: 50,
          transform: h ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left center',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
          zIndex: -1,
        }} />
      )}
      {children}
    </button>
  );
};

/* ═══════════════════════════════════════════════════
   SECTION 8 — Why Content Marketing
═══════════════════════════════════════════════════ */
const Section1 = () => {
  const containerRef = useRef(null);
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

        /* ── CODED PAGE BANNER STYLES ── */
        .coded-page-banner {
          position: relative;
          width: 100%;
          min-height: 360px;
          background:
            radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.35), transparent 45%),
            radial-gradient(circle at 75% 80%, rgba(173, 250, 59, 0.22), transparent 35%),
            linear-gradient(180deg, #180d32 0%, #0d0a1b 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 120px 20px 60px;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .coded-page-banner-grid {
          position: absolute;
          bottom: -20%;
          left: 0;
          width: 100%;
          height: 150%;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.024) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.024) 1px, transparent 1px);
          background-size: 80px 80px;
          transform: perspective(1000px) rotateX(75deg);
          transform-origin: bottom center;
          pointer-events: none;
          opacity: 0.85;
          animation: gridDrift 40s linear infinite;
        }

        @keyframes gridDrift {
          from { background-position: 0 0; }
          to { background-position: 0 -160px; }
        }

        .coded-page-banner-purple-glow {
          position: absolute;
          top: -10%;
          right: -10%;
          width: 60%;
          height: 80%;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
          animation: purpleGlowBreath 12s infinite ease-in-out alternate;
        }

        .coded-page-banner-green-glow {
          position: absolute;
          bottom: -10%;
          left: -10%;
          width: 50%;
          height: 70%;
          background: radial-gradient(circle, rgba(173, 250, 59, 0.22) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
          animation: greenGlowBreath 15s infinite ease-in-out alternate;
        }

        @keyframes purpleGlowBreath {
          0% { transform: scale(1) translate(0, 0); opacity: 0.8; }
          100% { transform: scale(1.15) translate(-20px, 10px); opacity: 1; }
        }

        @keyframes greenGlowBreath {
          0% { transform: scale(1) translate(0, 0); opacity: 0.7; }
          100% { transform: scale(1.2) translate(15px, -15px); opacity: 1; }
        }

        /* Particles container & particle animations */
        .coded-page-banner-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .coded-banner-particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 50%;
          pointer-events: none;
          filter: blur(1.5px);
          animation: floatParticle infinite linear;
        }

        @keyframes floatParticle {
          0% {
            transform: translateY(120vh) translateX(0);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% {
            transform: translateY(-20vh) translateX(20px);
            opacity: 0;
          }
        }

        .coded-page-banner-badge {
          font-family: 'Montserrat', sans-serif !important;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          color: #adfa3b;
          letter-spacing: 0.25em;
          padding: 6px 16px;
          border-radius: 999px;
          background: rgba(173, 250, 59, 0.06);
          border: 1px solid rgba(173, 250, 59, 0.16);
          backdrop-filter: blur(10px);
          margin-bottom: 16px;
          position: relative;
          z-index: 2;
          display: inline-block;
          animation: badgePulse 4s infinite ease-in-out;
        }

        @keyframes badgePulse {
          0%, 100% {
            box-shadow: 0 0 10px rgba(173, 250, 59, 0.05);
            border-color: rgba(173, 250, 59, 0.16);
          }
          50% {
            box-shadow: 0 0 20px rgba(173, 250, 59, 0.2);
            border-color: rgba(173, 250, 59, 0.35);
          }
        }

        .coded-page-banner-title {
          font-family: 'Bebas Neue', 'Impact', 'Arial Black', sans-serif !important;
          font-size: clamp(34px, 4.5vw, 58px);
          font-weight: 400;
          color: #adfa3b;
          -webkit-text-stroke: 2.5px white;
          text-shadow: 6px 6px 0 rgba(0,0,0,0.55), 0 0 40px rgba(173,250,59,0.15);
          -webkit-text-fill-color: unset;
          background: none;
          margin: 0;
          line-height: 0.92;
          letter-spacing: 0.04em;
          position: relative;
          z-index: 2;
          animation: titleFadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .coded-page-banner-subtitle {
          font-size: clamp(14px, 1.8vw, 18px);
          font-weight: 500;
          color: rgba(255, 255, 255, 0.65);
          margin-top: 14px;
          max-width: 600px;
          line-height: 1.6;
          position: relative;
          z-index: 2;
          animation: titleFadeInUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes titleFadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .cm-banner { gap: 3rem; transition: gap 0.3s ease; }
        .cm-banner-item { display: flex; alignItems: center; gap: 3rem; }
        @media (max-width: 768px) {
          .cm-banner { gap: 1.5rem !important; padding: 1.75rem 1.5rem !important; }
          .cm-banner-item { gap: 1.5rem !important; }
          .cm-banner-divider { height: 40px !important; }
        }
      `}</style>

      <section className="page-banner-section" ref={containerRef}>
        <div className="coded-page-banner">
          <div className="coded-page-banner-grid" />
          <div className="coded-page-banner-purple-glow" />
          <div className="coded-page-banner-green-glow" />

          {/* Floating content badges */}
          <FloatingContentBadges />

          {/* Floating Particle Layer */}
          <div className="coded-page-banner-particles">
            {Array.from({ length: 15 }).map((_, i) => {
              const left = `${Math.random() * 100}%`;
              const top = `${Math.random() * 100}%`;
              const size = `${Math.random() * 3 + 1.5}px`;
              const delay = `${Math.random() * -20}s`;
              const duration = `${Math.random() * 10 + 15}s`;
              return (
                <div
                  key={i}
                  className="coded-banner-particle"
                  style={{
                    left,
                    top,
                    width: size,
                    height: size,
                    animationDelay: delay,
                    animationDuration: duration,
                  }}
                />
              );
            })}
          </div>

          <div className="flex flex-col items-center justify-center w-full max-w-[900px] gap-6 px-6 z-10 text-center relative">
            {/* Background Diagonal Laser Lines (Layout 5 Specific Aesthetic) */}
            <div className="absolute left-[-100px] top-[-50px] w-[500px] h-[1px] bg-[#adfa3b]/20 rotate-[-12deg] pointer-events-none" />
            <div className="absolute right-[-100px] bottom-[-50px] w-[500px] h-[1px] bg-purple-500/10 rotate-[-12deg] pointer-events-none" />

            {/* Centered Column: Ultra-Modern Slanted Title & Subtitle */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="coded-page-banner-badge">{serviceConfig.badge}</div>
              <h1 className="coded-page-banner-title text-center skew-x-[-4deg] mb-4" style={{ letterSpacing: '-0.03em' }}>
                <VariableProximity
                  label={`${serviceConfig.title} ${serviceConfig.accentTitle}`}
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  radius={100}
                  falloff="linear"
                />
              </h1>
              <div className="h-[2px] w-24 bg-[#adfa3b] my-4 rounded-full" />
              <p className="coded-page-banner-subtitle text-center max-w-[650px] mx-auto">
                {serviceConfig.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content Stats Strip ── */}
      <ContentStatsStrip />

      {/* 🔮 ULTRA-CLEAN BENTO BOX STRUCTURE */}
      <section
        className="relative z-[1] px-5 pb-24 pt-16 sm:px-10 overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, #070312 0%, #120524 50%, #070312 100%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.03)'
        }}
      >
        {/* Cosmic Space Grid Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-40" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(173, 250, 59, 0.05) 0%, transparent 50%), linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px)',
          backgroundSize: '100%, 40px 40px, 40px 40px'
        }} />

        <div className="relative z-[1] mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start w-full">
            
            {/* Left Column - Content & Terminal */}
            <div className="w-full lg:w-5/12 flex flex-col gap-8 lg:sticky lg:top-32">
              <div>
                <h2 style={{ fontFamily:"'Bebas Neue','Impact',sans-serif", fontSize:'clamp(32px,4vw,56px)', color:'#adfa3b', WebkitTextStroke:'2px white', textShadow:'5px 5px 0 rgba(0,0,0,0.5)', letterSpacing:'0.04em', lineHeight:0.92, marginBottom:'20px' }}>
                  Writing Words<br/>That Convert
                </h2>
                <p className="text-[16px] text-white/75 leading-relaxed max-w-lg">
                  Words are the ultimate sales asset. We design viral storytelling frameworks, high-engagement newsletters, and persuasive marketing copy that builds deep loyalty and converts traffic.
                </p>
              </div>
              
              <div>
                <a
                  href="/case-studies"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-['Montserrat'] text-xs font-bold uppercase tracking-[0.08em] text-white border-2 border-transparent transition-all duration-200 hover:text-[#07030f]"
                  style={{ background: 'linear-gradient(135deg,#7c3aed,#9333ea)', transition: 'background 0.2s, color 0.2s, border-color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#07030f'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(135deg,#7c3aed,#9333ea)'; e.currentTarget.style.color = '#ffffff'; }}
                >
                  Know More
                </a>
              </div>

              {/* Box 2 (Animated Typography Visual) */}
              <div className="rounded-[32px] bg-[#090614] border border-white/10 flex flex-col justify-center relative overflow-hidden group min-h-[220px] shadow-[inset_0_0_40px_rgba(139,92,246,0.05)] p-6 sm:p-8 mt-4 lg:mt-8">
                <style>{`
                  @keyframes typingEffect {
                    0%, 15% { width: 0; }
                    35%, 85% { width: 100%; }
                    95%, 100% { width: 0; }
                  }
                  @keyframes cursorBlink {
                    50% { border-color: transparent; }
                  }
                  @keyframes fadeInSequence1 {
                    0%, 35% { opacity: 0; transform: translateY(5px); }
                    40%, 85% { opacity: 1; transform: translateY(0); }
                    95%, 100% { opacity: 0; transform: translateY(-5px); }
                  }
                  @keyframes fadeInSequence2 {
                    0%, 45% { opacity: 0; transform: translateY(5px); }
                    50%, 85% { opacity: 1; transform: translateY(0); }
                    95%, 100% { opacity: 0; transform: translateY(-5px); }
                  }
                  @keyframes fadeInSequence3 {
                    0%, 55% { opacity: 0; transform: translateY(5px); }
                    60%, 85% { opacity: 1; transform: translateY(0); }
                    95%, 100% { opacity: 0; transform: translateY(-5px); }
                  }
                `}</style>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(173,250,59,0.08)_0%,transparent_60%)] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.08)_0%,transparent_60%)] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 w-full font-mono">
                  <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    <span className="ml-2 text-[10px] text-white/30 uppercase tracking-widest">campaign_copy.md</span>
                  </div>
                  
                  <div className="text-[#adfa3b] text-[13px] sm:text-sm font-bold whitespace-nowrap overflow-hidden border-r-2 border-[#adfa3b]" style={{ animation: 'typingEffect 6s steps(30, end) infinite, cursorBlink .75s step-end infinite', width: '0' }}>
                    $ generate_viral_hook()
                  </div>
                  
                  <div className="mt-5 space-y-3 text-[11px] sm:text-xs text-white/60 font-medium">
                    <div className="flex gap-3 opacity-0" style={{ animation: 'fadeInSequence1 6s infinite' }}>
                      <span className="text-[#a855f7] opacity-70 shrink-0">&gt;</span>
                      <span>Analyzing audience intent...</span>
                    </div>
                    <div className="flex gap-3 opacity-0" style={{ animation: 'fadeInSequence2 6s infinite' }}>
                      <span className="text-[#a855f7] opacity-70 shrink-0">&gt;</span>
                      <span className="text-white">Drafting persuasive copy...</span>
                    </div>
                    <div className="flex gap-3 opacity-0" style={{ animation: 'fadeInSequence3 6s infinite' }}>
                      <span className="text-[#a855f7] opacity-70 shrink-0">&gt;</span>
                      <span className="text-[#adfa3b] bg-[#adfa3b]/10 px-2 py-0.5 rounded">Conversion rate optimized [98%]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Feature Cards in a Grid */}
            <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 lg:pt-0">
               {[
                 { num: '01', title: 'Content Scale', text: 'Over 65K+ active subscribers scaled across custom brand blogs, editorial substacks, and premium newsletters.', color: '#adfa3b' },
                 { num: '02', title: 'Engagement', text: 'Securing an elite 48% average newsletter open rate and a 4x increase in high-intent commercial clicks.', color: '#a855f7' },
                 { num: '03', title: 'Lead Flows', text: 'Engineered compelling messaging frameworks and automated lead flows for Hybrid Energy, Delta Coffee, and Swift Academy.', color: '#adfa3b' },
                 { num: '04', title: 'Psychology', text: 'Utilizing deep psychological triggers to drive high conversion rates across landing pages, blogs, and marketing assets.', color: '#a855f7' }
               ].map((box, i) => (
                 <div key={i} className="p-8 rounded-[28px] bg-white/[0.015] border border-white/5 hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between min-h-[220px] group overflow-hidden relative">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/[0.03] to-transparent rounded-bl-[40px] pointer-events-none group-hover:from-white/[0.06] transition-colors duration-300" />
                   <div>
                     <div className="flex items-center justify-between mb-6">
                       <span className="text-3xl font-black text-white/10 font-mono group-hover:text-white/20 transition-colors duration-300">{box.num}</span>
                       <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: box.color, boxShadow: `0 0 10px ${box.color}` }} />
                     </div>
                     <h3 className="text-white font-['Montserrat'] font-bold uppercase tracking-wider text-xs mb-3 group-hover:text-[#adfa3b] transition-colors duration-300">{box.title}</h3>
                     <p className="text-[13px] text-white/60 font-medium leading-relaxed">{box.text}</p>
                   </div>
                 </div>
               ))}
            </div>

          </div>
        </div>
      </section>

      {/* Services Banner 2 */}
      <section className="cm-banner" style={{
        backgroundColor: '#0F0F14',
        padding: '2rem 2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        flexWrap: 'wrap',
      }}>
        <div style={{ position:'absolute', bottom:-50, right:'10%', width:200, height:200, background:'radial-gradient(circle, rgba(76,29,149,0.3) 0%, transparent 70%)', borderRadius:'50%', pointerEvents:'none' }} />
        {['WE STRATEGIZE', 'WE REACH', 'WE ENGAGE', 'WE SCALE'].map((item, i, arr) => (
          <div key={item} className="cm-banner-item">
            <div>
              <h2 style={{ fontFamily:"'Bebas Neue','Impact',sans-serif", fontSize:'clamp(32px,3.5vw,56px)', color:'#7c3aed', letterSpacing:'0.04em', lineHeight:0.92, margin:0 }}>{item}</h2>
            </div>
            {i < arr.length - 1 && <div className="cm-banner-divider" style={{ width: 2, height: 60, backgroundColor: 'rgba(139,92,246,0.4)' }} />}
          </div>
        ))}
      </section>
    </>
  );
};
const Section2 = () => null;

const Section2Cards = () => {
  const bulletPoints = [
    "Content Strategy & Brand Messaging",
    "Website Content (structure, copy, landing pages)",
    "Social Media Content (reels, carousels, statics)",
    "Video Content (ads, brand films, explainers)",
    "Performance Ad Creatives",
    "Copywriting for Campaigns & Promotions",
    "SEO & Search-driven Content",
    "Platform-specific Content (Instagram, YouTube, Google, etc.)"
  ];
  const cards = [
    { title: "CONTENT STRATEGY", intro: "Strategic brand messaging that defines what to say, how to say it, and where to say it.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg> },
    { title: "WEBSITE CONTENT", intro: "Complete website copy including structure, landing pages, and conversion-focused messaging.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
    { title: "SOCIAL MEDIA CONTENT", intro: "Engaging reels, carousels, and static posts designed to stop the scroll and drive action.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
    { title: "VIDEO CONTENT", intro: "Compelling video scripts for ads, brand films, and explainer videos that tell your story.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg> },
    { title: "PERFORMANCE ADS", intro: "High-converting ad creatives and copy optimized for campaigns and promotions.", icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
  ];
  return (
    <section style={{ position: 'relative', width: '100%', minHeight: '100vh', background: '#0d0914', overflow: 'hidden', padding: '80px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 800, height: 600, background: 'rgba(88,28,135,0.2)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />
      <div style={{ textAlign: 'center', zIndex: 10, marginBottom: 64 }}>
        <h2 style={{ fontFamily:"'Bebas Neue','Impact',sans-serif", fontSize:'clamp(22px,2.8vw,40px)', color:'#adfa3b', WebkitTextStroke:'2px white', textShadow:'5px 5px 0 rgba(0,0,0,0.5)', letterSpacing:'0.04em', lineHeight:0.92, marginBottom:'20px' }}>What's in a Brand Kit?</h2>
        <p style={{ color: '#d1d5db', fontSize: 14, maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>Everything your brand needs to communicate clearly, consistently, and effectively across all platforms.</p>
      </div>
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 16, maxWidth: 1400 }}>
        {cards.map((card, index) => {
          const isCenter = index === 2;
          return (
            <div key={index} style={{ background: '#fff', borderRadius: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 25px 50px rgba(0,0,0,0.25)', width: isCenter ? 300 : 260, minHeight: isCenter ? 500 : 440, padding: '32px 24px', transform: isCenter ? 'scale(1.05)' : 'none', zIndex: isCenter ? 20 : 10, transition: 'all 0.3s ease' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', color: '#6e32c9', fontWeight: 700, marginBottom: 16, fontSize: isCenter ? 16 : 13, fontFamily: "'Syne', sans-serif", gap: 8 }}>
                  {card.icon}
                  <h3 style={{ margin: 0 }}>{card.title}</h3>
                </div>
                <p style={{ fontSize: 10, color: '#000', fontWeight: 600, textTransform: 'uppercase', lineHeight: 1.4, marginBottom: 16 }}>{card.intro}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {bulletPoints.map((point, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, fontSize: 9, color: '#1f2937', lineHeight: 1.3 }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#000', flexShrink: 0, marginTop: 3 }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <button style={{ background: '#84cc16', color: '#fff', fontSize: 11, fontWeight: 700, padding: '8px 24px', borderRadius: 50, border: 'none', cursor: 'pointer', width: 'fit-content' }}>LEARN MORE</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const services = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>,
    title: "ADVERTISING CONTENT",
    intro: "We create scroll-stopping content that turns your audience into customers.",
    bullets: ["Content creation: From planning to execution, we create scroll-stopping content that turns your audience into customers.", "Copywriting and captions: Our copies don't just attract — they keep people hooked with purpose-driven messaging."],
    size: "outer",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
    title: "BLOG CONTENT",
    intro: "From long-form depth to short-form punch, we excel at crafting content that delivers results.",
    bullets: ["Content creation: From planning to execution, we create scroll-stopping content that turns your audience into customers.", "Copywriting and captions: Our brainstorming copies don't just attract an audience — they keep them hooked.", "Strategy and planning: We build, plan, and grow using data and insight."],
    size: "mid",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
    title: "SOCIAL MEDIA CONTENT",
    intro: "We create scroll-stopping content that turns your audience into customers.",
    bullets: ["Content creation: From planning to execution, we create scroll-stopping content that turns your audience into customers.", "Copywriting and captions: Our brainstorming copies don't just attract an audience — they keep them hooked with purpose-driven messaging.", "Strategy and planning: With growth in mind, we don't just post and pray — we build, plan, and grow using data and insight."],
    featured: true,
    size: "center",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    title: "WEBSITE CONTENT",
    intro: "We give life to your imagination through words.",
    bullets: ["Content creation: From planning to execution, we create scroll-stopping content that turns your audience into customers.", "Copywriting and captions: Our brainstorming copies don't just attract an audience — they keep them hooked.", "Strategy and planning: We build, plan, and grow using data and insight."],
    size: "mid",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>,
    title: "ADVERTISING CONTENT",
    intro: "We create scroll-stopping content that turns your audience into customers.",
    bullets: ["Content creation: From planning to execution, we create scroll-stopping content that turns your audience into customers.", "Copywriting and captions: Our copies don't just attract — they keep people hooked with purpose-driven messaging."],
    size: "outer",
  },
];

const cmStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@400;500;600&display=swap');
  .cm-root { background:#0d0b1a; min-height:auto; width:100%; font-family:'Barlow',sans-serif; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:96px 20px 58px; position:relative; overflow:hidden; }
  .cm-bg-lines { position:absolute; inset:0; pointer-events:none; overflow:hidden; }
  .cm-bg-lines svg { position:absolute; top:0; left:0; width:100%; height:100%; }
  .cm-header { text-align:center; margin-bottom:80px; position:relative; z-index:2; }
  .cm-header h1 { font-family:'Barlow Condensed',sans-serif; font-weight:800; font-size:clamp(28px,4vw,48px); color:#ffffff; letter-spacing:0.02em; text-transform:uppercase; margin-bottom:16px; }
  .cm-header p { font-size:clamp(14px,1.5vw,18px); color:#c0b8d8; line-height:1.5; max-width:520px; margin:0 auto; }
  .cm-cards-row { display:flex; align-items:flex-end; gap:12px; position:relative; z-index:2; max-width:1400px; width:100%; justify-content:center; }
  .cm-card { background:#ffffff; border-radius:16px; display:flex; flex-direction:column; gap:10px; cursor:default; transition:transform 0.2s ease,box-shadow 0.2s ease; }
  .cm-card.size-outer { flex:0 0 200px; width:200px; padding:14px 14px 12px; transform:scale(0.88); opacity:0.75; }
  .cm-card.size-mid { flex:0 0 245px; width:245px; padding:18px 18px 14px; transform:scale(0.94); opacity:0.88; }
  .cm-card.size-center { flex:0 0 290px; width:290px; padding:26px 22px 22px; box-shadow:0 12px 50px rgba(0,0,0,0.45); transform:scale(1); opacity:1; z-index:3; }
  .cm-card:hover { transform:scale(1.02) translateY(-4px) !important; box-shadow:0 20px 60px rgba(0,0,0,0.4); opacity:1 !important; }
  .cm-card-title-row { display:flex; align-items:center; gap:8px; }
  .cm-card-icon { color:#7c5cbf; flex-shrink:0; }
  .cm-card.size-center .cm-card-icon { color:#7cd4fd; }
  .cm-card-title { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:13px; color:#1a0a3b; letter-spacing:0.04em; text-transform:uppercase; line-height:1.2; }
  .cm-card.size-center .cm-card-title { font-size:16px; }
  .cm-card.size-mid .cm-card-title { font-size:14px; }
  .cm-divider { height:1px; background:#e8e0f0; width:100%; flex-shrink:0; }
  .cm-card-intro { font-family:'Barlow',sans-serif; font-size:11px; font-weight:600; color:#3a2a5e; letter-spacing:0.01em; text-transform:none; line-height:1.5; }
  .cm-bullets { list-style:disc; padding-left:14px; display:flex; flex-direction:column; gap:6px; }
  .cm-bullets li { font-family:'Barlow',sans-serif; font-size:10px; font-weight:500; color:#3a2a5e; letter-spacing:0.01em; text-transform:none; line-height:1.45; }
  .cm-btn { margin-top:8px; align-self:flex-start; background:#7ac143; color:#0d0b1a; font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:11px; letter-spacing:0.08em; text-transform:uppercase; border:none; border-radius:6px; padding:8px 18px; cursor:pointer; transition:background 0.15s ease,transform 0.1s ease; white-space:nowrap; }
  .cm-btn:hover { background:#8fd44f; transform:scale(1.03); }
  .cm-card.size-center .cm-btn { padding:10px 24px; font-size:12px; }
  @media (max-width:900px) { .cm-cards-row { flex-direction:column; align-items:center; } .cm-card { width:100% !important; max-width:400px !important; flex:unset !important; transform:scale(1) !important; opacity:1 !important; } }
`;

const Section3Cards = () => (
  <>
    <style>{cmStyles}</style>
    <div className="cm-root">
      <div className="cm-bg-lines">
        <svg viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <line x1="320" y1="0" x2="600" y2="800" stroke="#6b3fa0" strokeWidth="1" strokeOpacity="0.35"/>
          <line x1="380" y1="0" x2="660" y2="800" stroke="#6b3fa0" strokeWidth="0.5" strokeOpacity="0.15"/>
          <line x1="900" y1="0" x2="1200" y2="800" stroke="#6b3fa0" strokeWidth="1" strokeOpacity="0.2"/>
        </svg>
      </div>
      <div className="cm-header">
        <h1>What's in a Brand Kit?</h1>
        <p>Everything your brand needs to communicate clearly, consistently, and effectively across all platforms.</p>
      </div>
      <div className="cm-cards-row">
        {services.map((s, i) => (
          <div key={i} className={`cm-card size-${s.size}`}>
            <div className="cm-card-title-row">
              <span className="cm-card-icon">{s.icon}</span>
              <span className="cm-card-title">{s.title}</span>
            </div>
            <div className="cm-divider" />
            <p className="cm-card-intro">{s.intro}</p>
            <ul className="cm-bullets">
              {s.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
            <button className="cm-btn">LEARN MORE</button>
          </div>
        ))}
      </div>
    </div>
  </>
);
const cardsData = [
  {
    number: "1",
    title: "Strategy first. Always.",
    points: [
      "Every piece of content starts with a goal.",
      "Audience understanding drives the writing.",
      "Consistency across platforms ensured.",
    ],
  },
  {
    number: "2",
    title: "Content that lasts.",
    points: [
      "Every piece of content starts with a goal.",
      "Audience understanding drives the writing.",
      "Consistency across platforms ensured.",
    ],
  },
  {
    number: "3",
    title: "Unmistakably yours.",
    points: [
      "Every piece of content starts with a goal.",
      "Audience understanding drives the writing.",
      "Consistency across platforms ensured.",
    ],
  },
  {
    number: "4",
    title: "One team, every format.",
    points: [
      "Every piece of content starts with a goal.",
      "Audience understanding drives the writing.",
      "Consistency across platforms ensured.",
    ],
  },
];

function useInView(threshold = 0.08) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function Card({ card, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "1 1 0",
        minWidth: 0,
        background: hovered ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.05)",
        border: `1px solid ${hovered ? "rgba(202,255,90,0.4)" : "rgba(255,255,255,0.08)"}`,
        borderRadius: "16px",
        padding: "28px 22px 26px",
        cursor: "default",
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered ? "translateY(-9px)" : "translateY(0px)"
          : "translateY(44px)",
        transition: [
          `opacity 0.65s ease ${0.12 + index * 0.11}s`,
          `transform ${hovered ? "0.28s cubic-bezier(0.34,1.2,0.64,1)" : `0.65s cubic-bezier(0.22,1,0.36,1) ${0.12 + index * 0.11}s`}`,
          "border 0.28s ease",
          "background 0.28s ease",
          "box-shadow 0.28s ease",
        ].join(", "),
        boxShadow: hovered
          ? "0 14px 44px rgba(0,0,0,0.45)"
          : "0 2px 14px rgba(0,0,0,0.18)",
      }}
    >
      <h3
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: "1.05rem",
          color: "#ffffff",
          margin: "0 0 15px",
          lineHeight: 1.35,
          letterSpacing: "-0.01em",
        }}
      >
        {card.title}
      </h3>
      <ul style={{ margin: 0, padding: "0 0 0 15px" }}>
        {card.points.map((pt, i) => (
          <li
            key={i}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 400,
              fontSize: "0.845rem",
              color: "rgba(255,255,255,0.56)",
              lineHeight: 1.65,
              marginBottom: i < card.points.length - 1 ? "6px" : 0,
            }}
          >
            {pt}
          </li>
        ))}
      </ul>
    </div>
  );
}

const WhyChooseUs = () => {
  const [sectionRef, inView] = useInView(0.08);
  const [lineWidth, setLineWidth] = useState(0);
  const [dotsVisible, setDotsVisible] = useState([false, false, false, false]);

  useEffect(() => {
    if (!inView) return;

    let startTime = null;
    const duration = 1100;
    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const t = Math.min((ts - startTime) / duration, 1);
      const eased = t < 0.5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2;
      setLineWidth(eased * 100);
      if (t < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    cardsData.forEach((_, i) => {
      setTimeout(() => {
        setDotsVisible((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, i * 190 + 60);
    });
  }, [inView]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        @keyframes floatA {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(22px,-16px) scale(1.04); }
        }
        @keyframes floatB {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-18px,13px) scale(0.97); }
        }
        @keyframes headReveal {
          from { opacity:0; transform: translateY(24px); }
          to   { opacity:1; transform: translateY(0); }
        }
        @keyframes subReveal {
          from { opacity:0; transform: translateY(16px); }
          to   { opacity:0.62; transform: translateY(0); }
        }
        @keyframes dotPop {
          0%   { transform: scale(0); }
          65%  { transform: scale(1.22); }
          100% { transform: scale(1); }
        }
        @keyframes dotPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(202,255,90,0.5); }
          50%      { box-shadow: 0 0 0 9px rgba(202,255,90,0); }
        }

        @media (max-width: 768px) {
          .wcu-timeline { display: none !important; }
          .wcu-cards { flex-direction: column !important; }
          .wcu-container { padding: 0 10px !important; }
          .wcu-section { padding: 28px 24px 36px !important; min-height: auto !important; }
        }
      `}</style>

      <section
        className="wcu-section"
        style={{
          minHeight: "auto",
          width: "100%",
          background:
            "radial-gradient(ellipse 88% 52% at 50% -4%, #2e0d52 0%, #100920 58%, #0b0817 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "28px 48px 42px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient orbs */}
        <div style={{
          position: "absolute", top: "-9%", left: "-5%",
          width: "540px", height: "540px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(85,25,148,0.3) 0%, transparent 68%)",
          animation: "floatA 15s ease-in-out infinite",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-14%", right: "-7%",
          width: "480px", height: "480px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(50,12,108,0.26) 0%, transparent 70%)",
          animation: "floatB 19s ease-in-out infinite",
          pointerEvents: "none",
        }} />

        {/* Header text */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "780px",
            marginBottom: "24px",
            position: "relative",
            zIndex: 1,
            padding: '0 20px'
          }}
        >
          <h1
            style={{ fontFamily:"'Bebas Neue','Impact',sans-serif", fontSize:'clamp(44px,6vw,90px)', color:'#adfa3b', WebkitTextStroke:'2px white', textShadow:'5px 5px 0 rgba(0,0,0,0.5)', letterSpacing:'0.04em', lineHeight:0.9, margin:'0 0 24px', animation: "headReveal 0.75s cubic-bezier(0.22,1,0.36,1) 0.05s both" }}
          >
            Why Choose Us
          </h1>
          <p
            style={{
              marginTop: "16px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(0.88rem, 1.4vw, 0.98rem)",
              color: "rgba(255,255,255,0.62)",
              lineHeight: 1.78,
              animation: "subReveal 0.75s cubic-bezier(0.22,1,0.36,1) 0.22s both",
            }}
          >
            We leverage our profound expertise in web design and e-commerce,
            providing tailored services that prioritize your success.
            <br />
            Our innovative solutions challenge the norm, supported by a proven
            track record of excellence and strategic execution.
          </p>
        </div>

        {/* Timeline + Cards container */}
        <div
          ref={sectionRef}
          className="wcu-container"
          style={{
            width: "100%",
            maxWidth: "1180px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Timeline row */}
          <div
            className="wcu-timeline"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "26px",
              position: "relative",
            }}
          >
            {/* Base track */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: "22px",
              right: "22px",
              height: "1px",
              background: "rgba(255,255,255,0.1)",
              transform: "translateY(-50%)",
            }} />
            {/* Animated fill line */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: "22px",
              right: "22px",
              height: "1px",
              transform: "translateY(-50%)",
              overflow: "hidden",
              pointerEvents: "none",
            }}>
              <div style={{
                height: "100%",
                width: `${lineWidth}%`,
                background: "#caff5a",
              }} />
            </div>

            {/* Number dots */}
            {cardsData.map((_, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "linear-gradient(145deg, #d6ff68, #9fd428)",
                  color: "#1b2c00",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  flexShrink: 0,
                  animation: dotsVisible[i]
                    ? `dotPop 0.44s cubic-bezier(0.34,1.56,0.64,1) both, dotPulse 2.8s ease-in-out ${i * 0.28}s infinite`
                    : "none",
                  transform: dotsVisible[i] ? undefined : "scale(0)",
                }}
              >
                {i + 1}
              </div>
            ))}
          </div>

          {/* Cards */}
          <div className="wcu-cards" style={{ display: "flex", gap: "16px", alignItems: "stretch" }}>
            {cardsData.map((card, i) => (
              <Card key={i} card={card} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

/* ── Combined export ── */
const ContentMarketingPage = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap');

      .content-solution-page,
      .content-solution-page * {
        font-family: 'Nunito Sans', sans-serif !important;
      }
    `}</style>
    <div className="content-solution-page">
    <Section1 />
    
    {/* 🔮 PREMIUM CONTENT STORYTELLING, BLUEPRINTS & CASE CAMPAIGNS */}
    <WeTellStoriesSection />
    <ContentBucketsSection />
    <NarratedStoriesSection />

    <Section10 />
    </div>
  </>
);

/* ═══════════════════════════════════════════════════════
   🎭 WE TELL STORIES: CORE CONCEPTS SPLIT SECTION
═══════════════════════════════════════════════════════ */
const WeTellStoriesSection = () => {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:py-28" style={{ background: 'linear-gradient(180deg, #0d091e 0%, #070412 100%)' }}>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(173,250,59,0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(139,92,246,0.15) 0%, transparent 40%)'
      }} />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Card: We Tell Your Brand's Story */}
          <div className="rounded-[32px] border border-white/5 bg-gradient-to-br from-[#130d2a]/75 to-[#080411]/75 p-8 sm:p-10 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#adfa3b]/5 rounded-full blur-3xl pointer-events-none transition-all duration-500 group-hover:bg-[#adfa3b]/10" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-mono font-bold px-3 py-1 bg-[#adfa3b]/10 text-[#adfa3b] rounded-full uppercase tracking-widest">Storytelling Framework</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#adfa3b]" />
              </div>
              
              <h2 className="font-['Montserrat'] text-[clamp(28px,3.5vw,42px)] font-black uppercase text-white leading-tight mb-6">
                We tell your <span className="text-[#adfa3b]">brand’s story</span>
              </h2>
              
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                Content is not just what is written. It’s how a brand speaks, shows up, and stays relevant.
              </p>
              
              <div className="space-y-4 mt-6">
                {[
                  { q: "What to say?", a: "Defining your core narrative and value proposition." },
                  { q: "How to say?", a: "Crafting the unique voice, tone, and visual messaging." },
                  { q: "Where to say?", a: "Deploying across high-impact platforms strategically." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:border-white/10 transition-all duration-300">
                    <span className="font-mono text-sm text-[#adfa3b] font-black">{item.q}</span>
                    <p className="text-white/60 text-xs sm:text-sm font-medium">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-white/5 pt-6 mt-8 flex items-center justify-between text-[11px] font-mono text-white/40">
              <span>Delivery Architecture</span>
              <span>[BUZZIWAH V-02]</span>
            </div>
          </div>

          {/* Right Card: Buzziwah Approach */}
          <div className="rounded-[32px] border border-[#a855f7]/20 bg-gradient-to-br from-[#0e111a]/60 to-[#070910]/60 p-8 sm:p-10 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group shadow-[0_20px_45px_rgba(0,0,0,0.4)]">
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#a855f7]/5 rounded-full blur-3xl pointer-events-none transition-all duration-500 group-hover:bg-[#a855f7]/10" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-mono font-bold px-3 py-1 bg-[#a855f7]/15 text-[#a855f7] rounded-full uppercase tracking-widest">Cohesion System</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-ping" />
              </div>
              
              <h2 className="font-['Montserrat'] text-[clamp(28px,3.5vw,42px)] font-black uppercase text-white leading-tight mb-6">
                The Buzziwah <span className="text-[#a855f7]">Approach</span>
              </h2>
              
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 font-semibold italic">
                "We don’t treat content as isolated pieces."
              </p>
              
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                We build it as an interconnected system where premium production, beautiful design, persuasive copy, and clear distribution strategy work together perfectly to build real authority.
              </p>
            </div>

            <div className="border-t border-white/5 pt-6 mt-8 flex items-center justify-between text-[11px] font-mono text-white/40">
              <span>Synergistic Engine</span>
              <span className="text-[#a855f7] font-bold">INTEGRATED_CONTENT</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════
   ⚡ CONTENT BUCKETS SYSTEM SECTION
═══════════════════════════════════════════════════════ */
const ContentBucketsSection = () => {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:py-24" style={{ background: '#060410' }}>
      {/* Structural drafting grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]" style={{
        backgroundImage: 'linear-gradient(rgba(173,250,59,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-[#adfa3b]/5 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        
        {/* Title block */}
        <div className="mb-14 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#adfa3b] mb-3">Narrative Buckets</p>
          <h2 className="font-['Montserrat'] text-[clamp(28px,4vw,52px)] font-black uppercase text-white leading-tight">
            What's in a <span className="text-[#a855f7] italic">Content Bucket?</span>
          </h2>
          <p className="mt-4 max-w-2xl text-white/50 text-sm sm:text-base leading-relaxed mx-auto">
            A content bucket is not just a list of items. It’s the visual taxonomy and modular framework behind how your brand messaging is structured and scaled.
          </p>
          <div className="h-[2px] w-24 bg-[#adfa3b] mx-auto mt-6 rounded-full" />
        </div>

        {/* Content Buckets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { num: "CB-01", title: "Content Strategy", details: "Core positioning, content pillars, calendar structures, and brand narrative blueprints.", icon: "🎯" },
            { num: "CB-02", title: "Website Content", details: "High-conversion landing pages, structured layout copy, and micro-copy systems.", icon: "🖥️" },
            { num: "CB-03", title: "Social Media Content", details: "Highly shareable reels, multi-slide carousels, and high-impact static creatives.", icon: "📱" },
            { num: "CB-04", title: "Video Content", details: "Dynamic performance ads, high-production brand films, and visual explainers.", icon: "🎥" },
            { num: "CB-05", title: "Performance Ad Copy", details: "Direct-response copy, hook variations, and conversion-focused creative assets.", icon: "📈" },
            { num: "CB-06", title: "Campaign Copywriting", details: "Promotional strategies, product launch text, and narrative copywriting frameworks.", icon: "✍️" },
            { num: "CB-07", title: "SEO & Search Content", details: "Search-driven content strategy, key-phrase-optimized articles, and informational resources.", icon: "🔍" },
            { num: "CB-08", title: "Platform-Specific Layouts", details: "Tailored content for Instagram, YouTube, Google, and emerging digital channels.", icon: "🛡️" }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="rounded-3xl border border-white/5 bg-gradient-to-b from-[#13112a]/40 to-[#080718]/40 p-6 flex flex-col justify-between hover:border-[#a855f7]/30 hover:scale-[1.02] transition-all duration-300 group min-h-[220px]"
            >
              <div>
                <div className="flex justify-between items-center mb-5">
                  <span className="font-mono text-[10px] tracking-widest text-[#adfa3b] font-black">{item.num}</span>
                  <span className="text-xl">{item.icon}</span>
                </div>
                <h3 className="font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wider mb-2 group-hover:text-[#a855f7] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-white/50 text-[11px] leading-relaxed">
                  {item.details}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/[0.03] text-[9px] font-mono text-white/30 tracking-widest">
                VERIFIED BUCKET
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════
   🌟 NARRATED BRAND STORIES GRID & CTA BANNER
═══════════════════════════════════════════════════════ */
const NarratedStoriesSection = () => {
  const [carouselIdx, setCarouselIdx] = useState(0);

  const tentCinemaImages = [
    "/SERICES CONTENTS/TENT CINEMIA CAPMGAIN ARTICALE/insta_DXWr1E_FNzZ_1.jpg",
    "/SERICES CONTENTS/TENT CINEMIA CAPMGAIN ARTICALE/insta_DXWr1E_FNzZ_2.jpg",
    "/SERICES CONTENTS/TENT CINEMIA CAPMGAIN ARTICALE/insta_DXWr1E_FNzZ_3.jpg",
    "/SERICES CONTENTS/TENT CINEMIA CAPMGAIN ARTICALE/insta_DXWr1E_FNzZ_4.jpg",
    "/SERICES CONTENTS/TENT CINEMIA CAPMGAIN ARTICALE/insta_DXWr1E_FNzZ_5.jpg",
    "/SERICES CONTENTS/TENT CINEMIA CAPMGAIN ARTICALE/insta_DXWr1E_FNzZ_6.jpg"
  ];



  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:py-28" style={{ background: '#070312' }}>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(173,250,59,0.1) 0%, transparent 50%)'
      }} />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a855f7] mb-3">Narrative Archive</p>
          <h2 className="font-['Montserrat'] text-[clamp(28px,4vw,52px)] font-black uppercase text-white leading-tight">
            Brand Stories We Have <span className="text-[#adfa3b] italic">Narrated</span>
          </h2>
          <p className="mt-4 max-w-xl text-white/50 text-sm sm:text-base leading-relaxed mx-auto">
            A high-fidelity live display of our showreels, responsive website designs, copywriting campaigns, strategy maps, and PR assets.
          </p>
          <div className="h-[2px] w-24 bg-[#a855f7] mx-auto mt-6 rounded-full" />
        </div>

        {/* 🔮 STUNNING DIRECT BENTO SHOWCASE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-20 font-sans">
          
          {/* ST-01: Deepthi Prashanth Showreel (Col span 3) */}
          <div className="lg:col-span-3 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-mono text-white/30 tracking-widest font-black uppercase">ST-01 // BANNER SHOWREEL</span>
              </div>
              <h3 className="font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wider mb-3 group-hover:text-[#adfa3b] transition-colors">
                Deepthi Prashanth Showreel
              </h3>
              <p className="text-white/50 text-[11px] leading-relaxed mb-5">
                A premium, high-production showreel showcasing a curated compilation of storytelling and cinematographic visuals designed to elevate digital presence.
              </p>
            </div>
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-black">
              <iframe 
                title="Deepthi Prashanth Showreel"
                src="https://www.youtube.com/embed/eeeSFNzyk7s?autoplay=1&mute=1&playlist=eeeSFNzyk7s&loop=1"
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* ST-02: WMN Women’s Day Video (Col span 3) */}
          <div className="lg:col-span-3 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-mono text-white/30 tracking-widest font-black uppercase">ST-02 // BRAND FILM</span>
              </div>
              <h3 className="font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wider mb-3 group-hover:text-[#adfa3b] transition-colors">
                WMN Women’s Day Video
              </h3>
              <p className="text-white/50 text-[11px] leading-relaxed mb-5">
                An emotional, high-impact brand film created for International Women's Day, focusing on female leadership, resilience, and empowerment.
              </p>
            </div>
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-black flex items-center justify-center p-2">
              <video 
                src="/SERICES CONTENTS/WMN .mp4"
                className="w-full h-full rounded-xl object-contain bg-black"
                controls
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          {/* ST-03: BodhiAble YouTube Video (Col span 2) */}
          <div className="lg:col-span-2 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-mono text-white/30 tracking-widest font-black uppercase">ST-03 // SOCIAL CONTENT</span>
              </div>
              <h3 className="font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wider mb-3 group-hover:text-[#adfa3b] transition-colors">
                BodhiAble YouTube Video
              </h3>
              <p className="text-white/50 text-[11px] leading-relaxed mb-5">
                A search-optimized, high-production informational YouTube video engineered to capture intent.
              </p>
            </div>
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-black">
              <iframe 
                title="BodhiAble YouTube Video"
                src="https://www.youtube.com/embed/Jg7Doera2LE?autoplay=1&mute=1&playlist=Jg7Doera2LE&loop=1"
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* ST-04: Samrat Restaurant Web Content (Col span 4) */}
          <div className="lg:col-span-4 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-mono text-white/30 tracking-widest font-black uppercase">ST-04 // COPYWRITING & WEB</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <h3 className="font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wider group-hover:text-[#adfa3b] transition-colors">
                  Samrat Restaurant Web Content
                </h3>
                <a 
                  href="https://samratrestaurantsheshadripuram.com/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[9px] font-mono tracking-widest text-[#adfa3b] hover:underline"
                >
                  VISIT LIVE SITE ↗
                </a>
              </div>
              <p className="text-white/50 text-[11px] leading-relaxed mb-5">
                A complete brand copy refresh and web structure redesign for Samrat Restaurant, emphasizing heritage, premium dining experiences, and modern visual hierarchy.
              </p>
            </div>
            {/* Auto scrolling portal for Samrat Restaurant */}
            <div className="w-full h-[280px] rounded-2xl overflow-hidden border border-white/15 bg-black relative group shadow-2xl">
              <iframe 
                title="Samrat Restaurant Web Content"
                src="https://samratrestaurantsheshadripuram.com/"
                className="bento-scroller-iframe"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[8px] font-mono tracking-[0.25em] text-[#adfa3b] bg-black/80 border border-[#adfa3b]/30 px-3 py-1.5 rounded-full">
                AUTO-SCROLL SHOWCASE
              </div>
            </div>
          </div>

          {/* ST-05: Tent Cinema Campaign Posts (Col span 4) */}
          <div className="lg:col-span-4 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-mono text-white/30 tracking-widest font-black uppercase">ST-05 // PR & CAMPAIGN POSTS</span>
              </div>
              <h3 className="font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wider mb-3 group-hover:text-[#adfa3b] transition-colors">
                Tent Cinema Campaign Posts
              </h3>
              <p className="text-white/50 text-[11px] leading-relaxed mb-5">
                A highly creative, multi-slide storytelling campaign for Tent Cinema, showcasing course highlights, pupil journeys, and artistic craft copy.
              </p>
            </div>
            {/* Sliding Instagram Mockup Carousel - Taller Portrait Aspect */}
            <div className="w-full max-w-[320px] mx-auto bg-black/60 rounded-3xl border border-white/10 overflow-hidden flex flex-col shadow-2xl">
              {/* Instagram Post Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 p-[1.5px] flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center font-bold text-[9px] text-[#adfa3b] font-mono">
                      TC
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-white/90 tracking-wide font-sans">tentcinema_nagathihalli</span>
                    <span className="text-[8px] text-white/40 tracking-wider">Bengaluru, India</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <span className="w-1 h-1 rounded-full bg-white/40"></span>
                  <span className="w-1 h-1 rounded-full bg-white/40"></span>
                  <span className="w-1 h-1 rounded-full bg-white/40"></span>
                </div>
              </div>

              {/* Instagram Post Image Viewport (Portrait Aspect 4:5) */}
              <div className="w-full aspect-[4/5] bg-[#0c0a15] relative overflow-hidden select-none flex items-center justify-center">
                <img 
                  src={tentCinemaImages[carouselIdx]} 
                  alt={`Tent Cinema Slide ${carouselIdx + 1}`}
                  className="w-full h-full object-contain transition-all duration-300"
                />

                {/* Overlaid Navigation Arrows */}
                <button 
                  onClick={() => setCarouselIdx((prev) => (prev === 0 ? tentCinemaImages.length - 1 : prev - 1))}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/70 border border-white/15 flex items-center justify-center text-white text-xs hover:bg-black/90 hover:scale-105 transition-all z-10 font-bold"
                >
                  ‹
                </button>
                <button 
                  onClick={() => setCarouselIdx((prev) => (prev === tentCinemaImages.length - 1 ? 0 : prev + 1))}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/70 border border-white/15 flex items-center justify-center text-white text-xs hover:bg-black/90 hover:scale-105 transition-all z-10 font-bold"
                >
                  ›
                </button>

                {/* Slide Count Indicator */}
                <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded-full text-[8px] font-mono tracking-widest text-[#adfa3b] font-black">
                  {carouselIdx + 1} / {tentCinemaImages.length}
                </div>
              </div>

              {/* Instagram Post Action & Dots Bar */}
              <div className="px-4 py-3 flex items-center justify-between border-t border-white/5 bg-white/[0.01]">
                <div className="flex items-center gap-3">
                  {/* Heart Icon SVG */}
                  <svg className="w-4 h-4 text-red-500 fill-current cursor-pointer hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  {/* Comment Icon SVG */}
                  <svg className="w-4 h-4 text-white/70 hover:text-white cursor-pointer hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  {/* Share Icon SVG */}
                  <svg className="w-4 h-4 text-white/70 hover:text-white cursor-pointer hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 10.742l4.636-2.318M8.684 13.258l4.636 2.318M21 12a3 3 0 11-6 0 3 3 0 016 0zm-12-6a3 3 0 11-6 0 3 3 0 016 0zm0 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                
                {/* Page Indicator Dots */}
                <div className="flex gap-1">
                  {tentCinemaImages.map((_, bulletI) => (
                    <button 
                      key={bulletI}
                      onClick={() => setCarouselIdx(bulletI)}
                      className={`h-1 rounded-full transition-all duration-300 ${carouselIdx === bulletI ? 'w-4 bg-[#adfa3b]' : 'w-1 bg-white/20'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ST-06: Fitness Factory Script (Col span 2) */}
          <div className="lg:col-span-2 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-mono text-white/30 tracking-widest font-black uppercase">ST-06 // INFLUENCER COLLAB</span>
              </div>
              <h3 className="font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wider mb-3 group-hover:text-[#adfa3b] transition-colors">
                Fitness Factory Script
              </h3>
              <p className="text-white/50 text-[11px] leading-relaxed mb-5">
                An engaging, high-energy influencer collaboration reel script and execution.
              </p>
            </div>
            {/* Vertical phone player */}
            <div className="w-full h-[280px] bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center p-2">
              <video 
                src="/SERICES CONTENTS/FITNESS.mp4"
                className="w-full h-full rounded-xl object-contain bg-black"
                controls
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          {/* ST-07: Blogs for LilBeez (Col span 6) */}
          <div className="lg:col-span-6 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-mono text-white/30 tracking-widest font-black uppercase">ST-07 // SEO ARTICLES</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <h3 className="font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wider group-hover:text-[#adfa3b] transition-colors">
                  Blogs for LilBeez
                </h3>
                <a 
                  href="https://lilbeez.com/blog/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[9px] font-mono tracking-widest text-[#adfa3b] hover:underline"
                >
                  BLOG ↗
                </a>
              </div>
              <p className="text-white/50 text-[11px] leading-relaxed mb-5">
                High-value blogs written for LilBeez, optimized for target search-intent queries.
              </p>
            </div>
            {/* Auto scrolling portal */}
            <div className="w-full h-[280px] rounded-2xl overflow-hidden border border-white/15 bg-black relative group shadow-2xl">
              <style>{`
                .bento-scroller-iframe {
                  width: 100%;
                  height: 350%;
                  border: none;
                  animation: bentoAutoScroll 22s linear infinite;
                  pointer-events: none;
                }
                @keyframes bentoAutoScroll {
                  0% { transform: translateY(0); }
                  50% { transform: translateY(-70%); }
                  100% { transform: translateY(0); }
                }
              `}</style>
              <iframe 
                title="LilBeez Blog content"
                src="https://lilbeez.com/blog/"
                className="bento-scroller-iframe"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[8px] font-mono tracking-[0.25em] text-[#adfa3b] bg-black/80 border border-[#adfa3b]/30 px-3 py-1.5 rounded-full">
                AUTO-SCROLL SHOWCASE
              </div>
            </div>
          </div>



        </div>

        {/* Let's get your brand right Banner */}
        <div className="rounded-[32px] border border-white/5 bg-gradient-to-r from-[#110d29]/75 to-[#080411]/75 p-8 sm:p-12 backdrop-blur-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(173,250,59,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="text-center md:text-left">
            <h3 className="font-['Montserrat'] text-[24px] sm:text-[32px] font-black text-white uppercase tracking-wide mb-3">
              Let’s get your brand right.
            </h3>
            <p className="text-white/60 text-sm max-w-lg leading-relaxed">
              Ready to craft a coherent system that positions your business, scaling your trust, and maximizing your market choice metrics?
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="/case-studies"
              className="rounded-full px-8 py-3.5 font-['Montserrat'] text-xs font-bold uppercase tracking-[0.08em] text-center text-white border-2 border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-200"
            >
              Know More
            </a>
            <a 
              href="/contact"
              className="rounded-full px-8 py-3.5 font-['Montserrat'] text-xs font-bold uppercase tracking-[0.08em] text-center text-black transition-all duration-200"
              style={{ background: '#adfa3b' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#a855f7'; e.currentTarget.style.color = '#ffffff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#adfa3b'; e.currentTarget.style.color = '#000000'; }}
            >
              Get In Touch
            </a>
          </div>
        </div>

      </div>

      <style>{`
        .custom-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.02);
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 99px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(173,250,59,0.3);
        }
      `}</style>

    </section>
  );
};

export default ContentMarketingPage;
