import React, { useRef, useState, useEffect } from 'react';
import VariableProximity from '../components/VariableProximity';
import '../home/Home.css';
import servicesData from '../servicesData.json';

const serviceConfig = servicesData['influencer'];

/* ── count-up hook ── */
const useCountUp = (end, duration = 1800) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!inView) return;
    let s; const step = ts => { if (!s) s = ts; const p = Math.min((ts-s)/duration,1); const e = 1-Math.pow(1-p,3); setCount(Math.floor(end*e)); if(p<1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }, [inView, end, duration]);
  return [ref, count];
};

/* ── Influencer Stats Strip ── */
const InfluencerStatsStrip = () => {
  const stats = [
    { end: 500, suffix: '+', label: 'Creator Partnerships' },
    { end: 45, suffix: 'M+', label: 'Total Reach' },
    { end: 8, suffix: 'x', label: 'Avg ROI for Brands' },
    { end: 92, suffix: '%', label: 'Campaign Accuracy' },
    { end: 3, suffix: 'x', label: 'Viral Rate' },
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

/* ── Floating Influencer Badges ── */
const FloatingInfluencerBadges = () => {
  const badges = [
    { label:'⭐ VIRAL', color:'#adfa3b', textColor:'#060811', x:'3%', y:'15%', rot:'-7deg', delay:'0s', dur:'7s' },
    { label:'🤝 500+ CREATORS', color:'rgba(124,58,237,0.85)', textColor:'#fff', x:'87%', y:'22%', rot:'5deg', delay:'1.3s', dur:'9s' },
    { label:'📱 REEL KINGS', color:'rgba(255,255,255,0.07)', textColor:'#adfa3b', x:'4%', y:'70%', rot:'4deg', delay:'0.7s', dur:'8s' },
    { label:'🔥 45M REACH', color:'rgba(173,250,59,0.12)', textColor:'#adfa3b', x:'84%', y:'74%', rot:'-5deg', delay:'1.9s', dur:'10s' },
  ];
  return (
    <>
      <style>{`@keyframes infFloat{0%,100%{transform:translateY(0)rotate(var(--rot));}50%{transform:translateY(-14px)rotate(var(--rot));}}`}</style>
      {badges.map((b,i)=>(
        <div key={i} style={{ position:'absolute', left:b.x, top:b.y, background:b.color, color:b.textColor, fontFamily:"'Bebas Neue',Impact,sans-serif", fontSize:'11px', letterSpacing:'0.18em', padding:'5px 12px', borderRadius:'6px', border:`1px solid ${b.textColor === '#060811' ? 'transparent' : 'rgba(173,250,59,0.25)'}`, '--rot':b.rot, animation:`infFloat ${b.dur} ease-in-out infinite`, animationDelay:b.delay, pointerEvents:'none', zIndex:1, whiteSpace:'nowrap', backdropFilter:'blur(8px)' }}>
          {b.label}
        </div>
      ))}
    </>
  );
};

/* ── Credible Collaborations Section ── */
const IMCredibleSection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, []);

  const pillars = [
    { icon: '🎯', label: 'Relevance First', desc: 'We match creators by niche, audience fit, and brand values — not just follower count.' },
    { icon: '🤝', label: 'End-to-End Managed', desc: 'From discovery and outreach to contracts, briefs, content review, and reporting.' },
    { icon: '📈', label: 'ROI Tracked', desc: 'Every collaboration is measured — reach, saves, clicks, and conversions.' },
  ];

  return (
    <section ref={ref} style={{ background: 'linear-gradient(160deg, #060811 0%, #0d0820 50%, #060811 100%)', padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,60px)', overflow: 'hidden', position: 'relative' }}>
      {/* BG orbs */}
      <div style={{ position:'absolute', top:'-10%', left:'-5%', width:'500px', height:'500px', background:'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 65%)', borderRadius:'50%', filter:'blur(80px)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-10%', right:'-5%', width:'400px', height:'400px', background:'radial-gradient(circle, rgba(173,250,59,0.1) 0%, transparent 65%)', borderRadius:'50%', filter:'blur(80px)', pointerEvents:'none' }} />

      <div style={{ maxWidth:'1200px', margin:'0 auto', position:'relative', zIndex:1 }}>
        <div style={{ display:'flex', flexWrap:'wrap', gap:'clamp(40px,6vw,80px)', alignItems:'center' }}>

          {/* Left: copy */}
          <div style={{
            flex:'1 1 min(100%, 500px)', minWidth:0,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-48px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}>
            {/* Label */}
            <span style={{ fontSize:'10px', fontWeight:800, letterSpacing:'0.28em', color:'#adfa3b', textTransform:'uppercase', display:'block', marginBottom:'16px' }}>
              ✦ INFLUENCER MARKETING ✦
            </span>

            {/* Heading */}
            <h2 style={{ fontFamily:"'Bebas Neue','Impact',sans-serif", fontSize:'clamp(40px,6vw,78px)', lineHeight:0.88, margin:'0 0 24px', color:'#fff', WebkitTextStroke:'2px rgba(173,250,59,0.4)', letterSpacing:'0.03em' }}>
              Credible<br />
              <span style={{ color:'#adfa3b', WebkitTextStroke:'2px white' }}>Collaborations</span>
            </h2>

            {/* Divider */}
            <div style={{ width:'48px', height:'3px', background:'linear-gradient(90deg, #adfa3b, transparent)', borderRadius:'2px', marginBottom:'24px' }} />

            {/* Body copy */}
            <p style={{ color:'rgba(255,255,255,0.75)', fontSize:'clamp(15px,1.6vw,18px)', lineHeight:1.85, margin:'0 0 16px', fontWeight:500 }}>
              People trust people more than brands. And the right voice can make your brand feel <span style={{ color:'#adfa3b', fontWeight:700 }}>real, relatable and trusted.</span>
            </p>
            <p style={{ color:'rgba(255,255,255,0.5)', fontSize:'clamp(13px,1.4vw,15px)', lineHeight:1.9, margin:0 }}>
              We connect your brand with the right creators — not just based on reach, but <strong style={{ color:'rgba(255,255,255,0.75)' }}>relevance and alignment.</strong> From identifying influencers to managing collaborations and content, we handle everything end-to-end.
            </p>
          </div>

          {/* Right: pillars */}
          <div style={{
            flex:'1 1 min(100%, 420px)', minWidth:0,
            display:'flex', flexDirection:'column', gap:'16px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(48px)',
            transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
          }}>
            {pillars.map((p, i) => (
              <div key={i} style={{
                display:'flex', alignItems:'flex-start', gap:'18px',
                padding:'22px 24px',
                borderRadius:'20px',
                background:`rgba(255,255,255,0.02)`,
                border:`1px solid ${i === 0 ? 'rgba(173,250,59,0.15)' : 'rgba(255,255,255,0.05)'}`,
                transition:'border-color 0.3s',
              }}>
                <div style={{ fontSize:'28px', lineHeight:1, flexShrink:0, marginTop:'2px' }}>{p.icon}</div>
                <div>
                  <div style={{ fontFamily:"'Bebas Neue','Impact',sans-serif", fontSize:'18px', color:'#adfa3b', letterSpacing:'0.1em', marginBottom:'6px' }}>{p.label}</div>
                  <div style={{ fontSize:'13px', color:'rgba(255,255,255,0.5)', lineHeight:1.7 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const InfluencerPage = () => {
  const containerRef = useRef(null);

  return (
    <div className="im-font">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800;900&display=swap');
        .im-font,
        .im-font * {
          font-family: 'Nunito Sans', sans-serif !important;
        }

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
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
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
      `}</style>
      <section className="page-banner-section" ref={containerRef}>
        <div className="coded-page-banner">
          <div className="coded-page-banner-grid" />
          <div className="coded-page-banner-purple-glow" />
          <div className="coded-page-banner-green-glow" />

          {/* Floating influencer badges */}
          <FloatingInfluencerBadges />

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

      {/* ── Influencer Stats Strip ── */}
      <InfluencerStatsStrip />

      {/* ── Credible Collaborations ── */}
      <IMCredibleSection />

      {/* ── Collaborations We Did ── */}
      <IMCollaborationsSection />

    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   🌟 INTERACTIVE INFLUENCER COLLABORATIONS ROSTER
═══════════════════════════════════════════════════════ */
const IMCollaborationsSection = () => {
  const [activeVaibhavIdx, setActiveVaibhavIdx] = useState(0);
  
  const vaibhavReels = [
    { label: "High-Energy Workout", src: "/SERICES CONTENTS/VAIBHAV_FITNESS_1.mp4", views: "1.2M+" },
    { label: "Form & Science", src: "/SERICES CONTENTS/VAIBHAV_FITNESS_2.mp4", views: "840K+" },
    { label: "Routine Breakdown", src: "/SERICES CONTENTS/VAIBHAV_FITNESS_3.mp4", views: "1.5M+" },
    { label: "Community Challenge", src: "/SERICES CONTENTS/VAIBHAV_FITNESS_4.mp4", views: "920K+" }
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:py-28" style={{ background: '#0a0a0a' }}>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 50% 10%, rgba(167,139,250,0.15) 0%, transparent 60%)'
      }} />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left md:flex justify-between items-end gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#a78bfa]/10 border border-[#a78bfa]/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] animate-pulse" />
              <span className="text-[10px] font-mono font-black tracking-widest text-[#a78bfa] uppercase font-bold">CREATOR NETWORK</span>
            </div>
            <h2 style={{ fontFamily:"'Bebas Neue','Impact',sans-serif", fontSize:'clamp(24px,3vw,44px)', color:'#adfa3b', WebkitTextStroke:'2px white', textShadow:'5px 5px 0 rgba(0,0,0,0.5)', letterSpacing:'0.04em', lineHeight:0.9, margin:'0 0 20px' }}>
              Collaborations <span style={{ color:'#adfa3b', fontStyle:'italic' }}>we did</span>
            </h2>
            <p className="mt-4 text-white/50 text-sm sm:text-base leading-relaxed">
              We scout, contract, and manage top-tier regional and national creators to weave your brand story directly into community culture.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="font-mono text-xs text-white/40 tracking-widest bg-white/[0.02] border border-white/5 px-4 py-2 rounded-xl inline-block">
              ACTIVE ROSTER: 350+ CREATORS
            </div>
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-20 font-sans">
          
          {/* Card 1: Vaibhav Srinivas (col-span-3) */}
          <div className="lg:col-span-3 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 sm:p-8 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden relative min-h-[420px]">
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-between h-full w-full">
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[9px] font-mono text-white/30 tracking-widest font-black uppercase">ST-01 // CO-BRAND REELS</span>
                    <span className="text-[8px] font-mono font-black tracking-widest px-2 py-0.5 rounded-full bg-[#adfa3b]/10 text-[#adfa3b]">FITNESS FACTORY</span>
                  </div>
                  <h3 className="font-['Montserrat'] text-md font-extrabold text-white uppercase tracking-wider mb-2 group-hover:text-[#adfa3b] transition-colors duration-300">
                    Vaibhav Srinivas
                  </h3>
                  <p className="text-[#a78bfa] text-xs font-bold uppercase tracking-widest mb-3">Fitness & Lifestyle Creator</p>
                  <p className="text-white/50 text-[12px] leading-relaxed mb-6">
                    We managed 4 high-octane campaigns featuring Vaibhav, driving extreme profile visits and gym sign-ups. Select a campaign reel to play the organic high-retention video.
                  </p>
                </div>
                
                {/* Reel selector tabs */}
                <div className="space-y-2 mb-6">
                  {vaibhavReels.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveVaibhavIdx(idx)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-[10px] font-mono tracking-wider font-black uppercase transition-all flex justify-between items-center border ${
                        activeVaibhavIdx === idx 
                          ? 'bg-[#adfa3b]/10 text-[#adfa3b] border-[#adfa3b]/30' 
                          : 'bg-white/5 text-white/60 border-transparent hover:text-white hover:bg-white/10'
                      }`}
                      type="button"
                    >
                      <span>{item.label}</span>
                      <span className="text-[8.5px] opacity-60">{item.views} views</span>
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 text-center pt-4 border-t border-white/10">
                  <div>
                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest block mb-1">AGGREGATE REACH</span>
                    <span className="text-white text-md font-mono font-black">4.8M+</span>
                  </div>
                  <div className="border-l border-white/10">
                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest block mb-1">ENGAGEMENT RATE</span>
                    <span className="text-[#a78bfa] text-md font-mono font-black">14.2%</span>
                  </div>
                </div>
              </div>
              
              {/* Phone Reel Player */}
              <div className="relative w-[180px] h-[340px] rounded-[28px] border-[6px] border-[#333] bg-black shadow-[0_15px_30px_rgba(0,0,0,0.5)] overflow-hidden flex-shrink-0">
                <div className="absolute left-1/2 top-0 z-10 h-3 w-16 -translate-x-1/2 rounded-b-[8px] bg-[#333]" />
                <video 
                  key={activeVaibhavIdx}
                  src={vaibhavReels[activeVaibhavIdx].src}
                  className="w-full h-full object-cover" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                />
              </div>
            </div>
          </div>

          {/* Card 2: Bakasura Brahmana for Samrat (col-span-3) */}
          <div className="lg:col-span-3 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 sm:p-8 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden relative min-h-[420px]">
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-between h-full w-full">
              <div className="flex-1 flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[9px] font-mono text-white/30 tracking-widest font-black uppercase">ST-02 // FOOD INFLUENCER</span>
                    <span className="text-[8px] font-mono font-black tracking-widest px-2 py-0.5 rounded-full bg-[#a855f7]/10 text-[#a855f7]">SAMRAT RESTAURANT</span>
                  </div>
                  <h3 className="font-['Montserrat'] text-md font-extrabold text-white uppercase tracking-wider mb-2 group-hover:text-[#a855f7] transition-colors duration-300">
                    Bakasura Brahmana
                  </h3>
                  <p className="text-[#adfa3b] text-xs font-bold uppercase tracking-widest mb-3">Food & Culinary Storyteller</p>
                  <p className="text-white/50 text-[12px] leading-relaxed mb-6">
                    For Samrat Restaurant Sheshadripuram, we deployed food-critic campaigns starring Bakasura Brahmana. The high-production culinary showcase triggered massive dining footfall and viral local authority.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center pt-4 border-t border-white/10">
                  <div>
                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest block mb-1">CAMPAIGN REACH</span>
                    <span className="text-white text-md font-mono font-black">850K+</span>
                  </div>
                  <div className="border-l border-white/10">
                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest block mb-1">ENGAGEMENT RATE</span>
                    <span className="text-[#adfa3b] text-md font-mono font-black">18.9%</span>
                  </div>
                </div>
              </div>
              
              {/* Phone Reel Player with culinary loop */}
              <div className="relative w-[180px] h-[340px] rounded-[28px] border-[6px] border-[#333] bg-black shadow-[0_15px_30px_rgba(0,0,0,0.5)] overflow-hidden flex-shrink-0">
                <div className="absolute left-1/2 top-0 z-10 h-3 w-16 -translate-x-1/2 rounded-b-[8px] bg-[#333]" />
                <video 
                  src="https://demo.sripadastudios.com/wp-content/uploads/2025/05/Samrat-food.mp4.mp4" 
                  className="w-full h-full object-cover" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                />
              </div>
            </div>
          </div>

          {/* Card 3: Nikhil Goal (col-span-2) */}
          <div className="lg:col-span-2 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden relative">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-mono text-white/30 tracking-widest font-black uppercase">ST-03 // TECH & ADVENTURE</span>
                <span className="text-[8px] font-mono font-black tracking-widest px-2 py-0.5 rounded-full bg-[#00f0ff]/10 text-[#00f0ff]">BUZZIWAH COLLABS</span>
              </div>
              <h3 className="font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wider mb-2 group-hover:text-[#00f0ff] transition-colors duration-300">
                Nikhil Goal
              </h3>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-3">Tech & Travel Explorer</p>
              <p className="text-white/50 text-[11px] leading-relaxed mb-5">
                We managed travel-tech lifestyle integrations showcasing next-gen setups. Delivering highly interactive, product-focused reels optimized to build viewer trust and conversions.
              </p>
            </div>
            
            {/* Travel setup mockup */}
            <div className="w-full h-[180px] bg-gradient-to-tr from-[#141517] to-[#1e293b] rounded-2xl border border-white/10 shadow-lg relative overflow-hidden flex flex-col justify-between p-4">
              <div className="absolute top-2 right-2 text-[9px] font-mono text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-0.5 rounded">TRAVEL TECH</div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#00f0ff] to-[#a855f7] flex items-center justify-center text-[10px] font-black text-white">N</div>
                <div>
                  <span className="block text-[10px] font-black text-white uppercase">nikhilgoal</span>
                  <span className="block text-[6.5px] text-white/40 uppercase">Creator network</span>
                </div>
              </div>
              
              <div className="bg-black/40 border border-white/5 p-2 rounded-lg font-mono text-[9px] text-[#00f0ff] mt-2">
                {"{ reach: '480K+', eng: '9.2%', saves: '12K+' }"}
              </div>

              <div className="flex justify-between items-center text-[7.5px] font-mono text-white/30 uppercase tracking-widest mt-2 border-t border-white/5 pt-2">
                <span>480K+ Reach</span>
                <span>Active Collabs</span>
              </div>
            </div>
          </div>

          {/* Card 4: Mahira (col-span-2) */}
          <div className="lg:col-span-2 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden relative">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-mono text-white/30 tracking-widest font-black uppercase">ST-04 // FASHION</span>
                <span className="text-[8px] font-mono font-black tracking-widest px-2 py-0.5 rounded-full bg-[#ff007f]/10 text-[#ff007f]">BUZZIWAH COLLABS</span>
              </div>
              <h3 className="font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wider mb-2 group-hover:text-[#ff007f] transition-colors duration-300">
                Mahira
              </h3>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-3">Fashion & Creative Director</p>
              <p className="text-white/50 text-[11px] leading-relaxed mb-5">
                Targeting aesthetic-driven lifestyle brands, we created highly curated, editorial fashion integrations that gained high-fidelity viewer shares and organic community advocate growth.
              </p>
            </div>
            
            {/* Editorial card mockup */}
            <div className="w-full h-[180px] bg-gradient-to-br from-[#1b1226] via-[#0d0914] to-[#040206] rounded-2xl border border-white/10 shadow-lg relative overflow-hidden flex flex-col p-4 justify-between">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,127,0.1)_0%,transparent_60%)] pointer-events-none" />
              <div className="flex items-center justify-between relative z-10">
                <span className="text-[9px] font-black text-[#ff007f] uppercase tracking-wider">Aesthetic Editorial</span>
                <span className="text-[8.5px] font-mono text-[#ff007f] bg-[#ff007f]/10 px-2 rounded">FASHION</span>
              </div>
              <div className="text-center py-2 relative z-10">
                <h4 className="text-white font-black uppercase text-xs tracking-wider" style={{ fontFamily: "'Montserrat', sans-serif" }}>MAHIRA COLLABS</h4>
                <span className="text-[7.5px] font-mono text-[#ff007f] block mt-1 uppercase">620K+ TOTAL REACH</span>
              </div>
              <div className="flex justify-between items-center text-[7.5px] font-mono text-white/30 uppercase tracking-widest relative z-10 border-t border-white/5 pt-2">
                <span>Engagement: 12.8%</span>
                <span>Advocates</span>
              </div>
            </div>
          </div>

          {/* Card 5: Shwetha Prasad (col-span-2) */}
          <div className="lg:col-span-2 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden relative">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-mono text-white/30 tracking-widest font-black uppercase">ST-05 // CELEBRITY WELLNESS</span>
                <span className="text-[8px] font-mono font-black tracking-widest px-2 py-0.5 rounded-full bg-[#adfa3b]/10 text-[#adfa3b]">FITNESS FACTORY</span>
              </div>
              <h3 className="font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wider mb-2 group-hover:text-[#adfa3b] transition-colors duration-300">
                Shwetha Prasad
              </h3>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-3">Actor & Wellness Influencer</p>
              <p className="text-white/50 text-[11px] leading-relaxed mb-5">
                We managed premium, high-production celebrity wellness integrations with Shwetha to represent clean health values. Built authority, trust, and massive organic reach.
              </p>
            </div>
            
            {/* Shwetha mockup */}
            <div className="w-full h-[180px] bg-gradient-to-tr from-[#121f15] to-[#1c3221] rounded-2xl border border-white/10 shadow-lg relative overflow-hidden flex flex-col p-4 justify-between">
              <div className="absolute top-2 right-2 text-[9px] font-mono text-[#adfa3b] bg-[#adfa3b]/10 px-2 py-0.5 rounded">CELEBRITY</div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#adfa3b] flex items-center justify-center text-[10px] font-black text-black">SP</div>
                <div>
                  <span className="block text-[10px] font-black text-white uppercase">shwethaprasad</span>
                  <span className="block text-[6.5px] text-white/40 uppercase">Regional Actor</span>
                </div>
              </div>
              
              <div className="bg-black/40 border border-white/5 p-2 rounded-lg font-mono text-[9px] text-[#adfa3b] mt-2">
                {"{ reach: '2.4M+', eng: '11.5%', type: 'Celebrity' }"}
              </div>

              <div className="flex justify-between items-center text-[7.5px] font-mono text-white/30 uppercase tracking-widest mt-2 border-t border-white/5 pt-2">
                <span>Wellness Anchor</span>
                <span>Verified creator</span>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Premium Case Studies Redirect CTA Banner */}
        <div className="rounded-[32px] border border-[#a78bfa]/20 bg-gradient-to-r from-[#170e30]/80 to-[#070412]/80 p-8 sm:p-12 backdrop-blur-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="text-center md:text-left relative z-10">
            <span className="text-[10px] font-mono font-black tracking-[0.2em] text-[#adfa3b] uppercase mb-2 block">MEASURABLE IMPACT</span>
            <h3 style={{ fontFamily:"'Bebas Neue','Impact',sans-serif", fontSize:'clamp(18px,2vw,30px)', color:'#adfa3b', WebkitTextStroke:'1.5px white', letterSpacing:'0.04em', lineHeight:0.9, marginBottom:'12px' }}>
              Case Studies & Creator ROI
            </h3>
            <p className="text-white/60 text-sm max-w-lg leading-relaxed">
              See how our targeted influencer collaborations turned social clout into pure brand conversions and business scale.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-10">
            <a 
              href="/case-studies"
              className="rounded-full px-8 py-3.5 font-['Montserrat'] text-xs font-bold uppercase tracking-[0.08em] text-center text-black transition-all duration-200"
              style={{ background: '#adfa3b' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#a78bfa'; e.currentTarget.style.color = '#ffffff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#adfa3b'; e.currentTarget.style.color = '#000000'; }}
            >
              Know More
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InfluencerPage;
