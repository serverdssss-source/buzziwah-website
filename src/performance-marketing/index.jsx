import React, { useCallback, useEffect, useRef, useState } from 'react';
import VariableProximity from '../components/VariableProximity';
import './PerformanceMarketing.css';
import '../home/Home.css';

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

/* ── Performance Marketing Stats Strip ── */
const PMStatsStrip = () => {
  const stats = [
    { end: 10, suffix: 'x', label: 'Avg ROAS Delivered' },
    { end: 3, suffix: 'M+', label: 'Ad Spend Managed' },
    { end: 420, suffix: '%', label: 'Avg CTR Improvement' },
    { end: 95, suffix: '%', label: 'Client Retention' },
    { end: 180, suffix: '+', label: 'Campaigns Launched' },
  ];
  return (
    <div style={{ background:'#060811', borderTop:'1px solid rgba(173,250,59,0.18)', borderBottom:'1px solid rgba(173,250,59,0.18)', padding:'clamp(20px, 4vw, 32px) 5%', overflow:'hidden', position:'relative' }}>
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg, rgba(124,58,237,0.06) 0%, rgba(173,250,59,0.04) 50%, rgba(124,58,237,0.06) 100%)', pointerEvents:'none' }} />
      <div style={{ display:'flex', gap:'clamp(20px, 3.5vw, 60px)', justifyContent:'center', flexWrap:'wrap', maxWidth:'1200px', margin:'0 auto', position:'relative', zIndex:1 }}>
        {stats.map((s, i) => {
          const [ref, count] = useCountUp(s.end, 1600 + i*200);
          return (
            <div key={i} ref={ref} style={{ textAlign:'center', minWidth:'clamp(100px, 15vw, 160px)', padding: '10px' }}>
              <div style={{ fontFamily:"'Bebas Neue',Impact,sans-serif", fontSize:'clamp(28px, 4vw, 44px)', color:'#adfa3b', letterSpacing:'0.03em', lineHeight:1, textShadow:'0 0 20px rgba(173,250,59,0.3)' }}>
                {count}{s.suffix}
              </div>
              <div style={{ fontSize:'clamp(9px, 0.8vw, 11px)', color:'rgba(255,255,255,0.45)', textTransform:'uppercase', letterSpacing:'0.18em', marginTop:'6px', fontWeight:600 }}>
                {s.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ── Floating PM Badges ── */
const FloatingPMBadges = () => {
  const badges = [
    { label:'📈 10x ROAS', color:'#adfa3b', textColor:'#060811', x:'3%', y:'15%', rot:'-7deg', delay:'0s', dur:'7s' },
    { label:'💰 PAID ADS', color:'rgba(124,58,237,0.85)', textColor:'#fff', x:'87%', y:'22%', rot:'5deg', delay:'1.3s', dur:'9s' },
    { label:'🎯 PRECISION', color:'rgba(255,255,255,0.07)', textColor:'#adfa3b', x:'4%', y:'70%', rot:'4deg', delay:'0.7s', dur:'8s' },
    { label:'🚀 SCALE NOW', color:'rgba(173,250,59,0.12)', textColor:'#adfa3b', x:'84%', y:'74%', rot:'-5deg', delay:'1.9s', dur:'10s' },
  ];
  return (
    <>
      <style>{`
        @keyframes pmFloat{0%,100%{transform:translateY(0)rotate(var(--rot));}50%{transform:translateY(-14px)rotate(var(--rot));}}
        @media (max-width: 768px) {
          .pm-badge-container { display: none !important; }
        }
      `}</style>
      <div className="pm-badge-container">
        {badges.map((b,i)=>(
          <div key={i} style={{ position:'absolute', left:b.x, top:b.y, background:b.color, color:b.textColor, fontFamily:"'Bebas Neue',Impact,sans-serif", fontSize:'11px', letterSpacing:'0.18em', padding:'5px 12px', borderRadius:'6px', border:`1px solid ${b.textColor === '#060811' ? 'transparent' : 'rgba(173,250,59,0.25)'}`, '--rot':b.rot, animation:`pmFloat ${b.dur} ease-in-out infinite`, animationDelay:b.delay, pointerEvents:'none', zIndex:1, whiteSpace:'nowrap', backdropFilter:'blur(8px)' }}>
            {b.label}
          </div>
        ))}
      </div>
    </>
  );
};

const useReveal = (threshold = 0.18) => {
  const ref = useRef(null);
  const [vis, setVis] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVis((prev) => prev + 1 || 1);
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, vis > 0];
};

const useParallax = () => {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setOffset({
      x: ((e.clientX - centerX) / rect.width) * 14,
      y: ((e.clientY - centerY) / rect.height) * 14,
    });
  }, []);

  const reset = useCallback(() => setOffset({ x: 0, y: 0 }), []);
  return [ref, offset, handleMove, reset];
};

const VideoPlayer = ({ videoSrc, poster, accentFrom, accentTo }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;
    video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    return undefined;
  }, [videoSrc]);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
      setPlaying(false);
    } else {
      video.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={toggle}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 11.5',
        borderRadius: 20,
        overflow: 'hidden',
        cursor: 'pointer',
        background: '#0a0a0f',
        boxShadow: hovered
          ? `0 30px 80px -10px ${accentFrom}55, 0 0 0 1px ${accentFrom}22`
          : '0 20px 60px -15px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
        transform: hovered ? 'scale(1.008)' : 'scale(1)',
        transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: -1,
          borderRadius: 21,
          padding: 1,
          background: `linear-gradient(135deg, ${accentFrom}44, transparent 50%, ${accentTo}44)`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <video
        ref={videoRef}
        src={videoSrc}
        poster={poster}
        loop
        muted
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: playing && !hovered ? 'transparent' : 'rgba(0,0,0,0.25)',
          opacity: playing && !hovered ? 0 : 1,
          transition: 'opacity 0.4s ease',
          zIndex: 3,
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 8px 32px ${accentFrom}66`,
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.3s ease',
          }}
        >
          {playing ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

const CaseSection = ({
  dark,
  reversed,
  title,
  subtitle,
  heading,
  points,
  videoSrc,
  poster,
  accentFrom,
  accentTo,
  tag,
  ctaLabel,
  backgroundImage,
}) => {
  const [sectionRef, show] = useReveal();
  const [parallaxRef, offset, onMove, onLeave] = useParallax();

  const anim = (name, delay = 0) =>
    show ? `${name} 0.9s ${delay}ms cubic-bezier(0.22, 1, 0.36, 1) both` : 'none';

  const textBlock = (
    <div
      className="pm-case-study-text"
      style={{
        flex: '1 1 min(100%, 420px)',
        minWidth: 0,
        maxWidth: 580,
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        opacity: show ? 1 : 0,
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ animation: anim('fadeUp', 100), opacity: 0 }}>
        <span
          style={{
            display: 'inline-block',
            padding: '6px 16px',
            borderRadius: 100,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: 1.8,
            textTransform: 'uppercase',
            color: accentFrom,
            border: `1px solid ${accentFrom}33`,
            background: `${accentFrom}0a`,
          }}
        >
          {tag}
        </span>
      </div>

      <h2
        style={{
          fontFamily: "'Bebas Neue','Impact','Arial Black',sans-serif",
          fontSize: 'clamp(24px, 3vw, 44px)',
          fontWeight: 400,
          lineHeight: 0.92,
          margin: 0,
          color: dark ? '#adfa3b' : '#7c3aed',
          WebkitTextStroke: dark ? '2px white' : '1.5px #7c3aed',
          textShadow: dark ? '5px 5px 0 rgba(0,0,0,0.5)' : 'none',
          letterSpacing: '0.04em',
          animation: anim('fadeUp', 200),
          opacity: 0,
        }}
      >
        {title}
      </h2>

      <p
        style={{
          fontSize: 14,
          lineHeight: 1.7,
          margin: 0,
          color: dark ? 'rgba(255,255,255,0.45)' : 'rgba(26,26,46,0.45)',
          animation: anim('fadeUp', 280),
          opacity: 0,
        }}
      >
        {subtitle}
      </p>

      <div
        style={{
          width: 48,
          height: 3,
          borderRadius: 2,
          background: `linear-gradient(90deg, ${accentFrom}, ${accentTo})`,
          animation: anim('scaleX', 350),
          opacity: 0,
          transformOrigin: 'left',
        }}
      />

      <h3
        style={{
          fontFamily: "'Bebas Neue','Impact',sans-serif",
          fontSize: 'clamp(20px,2.8vw,38px)',
          fontWeight: 700,
          lineHeight: 1.2,
          margin: 0,
          color: dark ? '#fff' : '#7c3aed',
          whiteSpace: 'normal',
          overflowWrap: 'break-word',
          wordBreak: 'break-word',
          animation: anim('fadeUp', 400),
          opacity: 0,
        }}
      >
        {heading}
      </h3>

      <ul
        style={{
          margin: 0,
          padding: 0,
          listStyle: 'none',
          display: 'grid',
          gap: 12,
          animation: anim('fadeUp', 480),
          opacity: 0,
        }}
      >
        {points.map((point) => (
          <li
            key={point}
            style={{
              display: 'grid',
              gridTemplateColumns: '28px minmax(0, 1fr)',
              gap: 12,
              alignItems: 'start',
              padding: '14px 16px',
              borderRadius: 18,
              background: dark
                ? 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)'
                : 'linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.48) 100%)',
              border: dark
                ? '1px solid rgba(255,255,255,0.08)'
                : `1px solid ${accentFrom}22`,
              backdropFilter: 'blur(10px)',
            }}
          >
            <span
              style={{
                width: 28,
                height: 28,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 999,
                background: dark ? `${accentFrom}26` : `${accentFrom}18`,
                color: accentFrom,
                fontSize: '0.85rem',
                lineHeight: 1,
                marginTop: 1,
              }}
              aria-hidden="true"
            >
              ✦
            </span>
            <span
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: dark ? 'rgba(255,255,255,0.78)' : 'rgba(26,26,46,0.74)',
              }}
            >
              {point}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="/case-studies"
        className="pm-case-cta"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          width: 'fit-content',
          padding: '14px 22px',
          borderRadius: 999,
          background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})`,
          color: '#fff',
          textDecoration: 'none',
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          boxShadow: `0 14px 34px ${accentFrom}33`,
          animation: anim('fadeUp', 540),
          opacity: 0,
        }}
      >
        {ctaLabel}
      </a>
    </div>
  );

  const videoBlock = (
    <div
      className="pm-case-study-video"
      ref={parallaxRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        flex: '1 1 min(100%, 480px)',
        minWidth: 0,
        maxWidth: 680,
        opacity: show ? 1 : 0,
        animation: anim(reversed ? 'slideLeft' : 'slideRight', 250),
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <VideoPlayer
        videoSrc={videoSrc}
        poster={poster}
        accentFrom={accentFrom}
        accentTo={accentTo}
      />
    </div>
  );

  return (
    <section
      className="pm-case-study"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: 'clamp(48px,8vw,100px) clamp(20px,5vw,48px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: backgroundImage
          ? `url("${backgroundImage}") center/cover no-repeat`
          : dark
            ? '#0c0c14'
            : 'linear-gradient(180deg, #f3eff8 0%, #ece5f3 100%)',
      }}
    >
      {dark && (
        <>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
              backgroundSize: '72px 72px',
              opacity: show ? 1 : 0,
              transition: 'opacity 1.5s ease',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: 500,
              height: 500,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${accentFrom}08 0%, transparent 70%)`,
              top: '20%',
              left: reversed ? '70%' : '-5%',
              filter: 'blur(60px)',
              pointerEvents: 'none',
            }}
          />
        </>
      )}
      {!dark && (
        <div
          style={{
            position: 'absolute',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${accentFrom}0c 0%, transparent 60%)`,
            top: '-10%',
            right: reversed ? 'auto' : '-10%',
            left: reversed ? '-10%' : 'auto',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
      )}

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(24px,4vw,48px)',
          maxWidth: 1340,
          width: '100%',
          position: 'relative',
          zIndex: 1,
          flexDirection: reversed ? 'row-reverse' : 'row',
        }}
      >
        {textBlock}
        {videoBlock}
      </div>
    </section>
  );
};

const FlipCard = ({ num, title, description, metric }) => {
  const ref = useRef(null);
  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -12;
    const rotateY = ((x - rect.width / 2) / rect.width) * 12;
    ref.current.querySelector('.pm-custom-flip-card').style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  const handleLeave = () => {
    ref.current.querySelector('.pm-custom-flip-card').style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  };
  return (
    <div 
      className="pm-flip-container flex-1 max-w-[600px]" 
      ref={ref} 
      onMouseMove={handleMove} 
      onMouseLeave={handleLeave}
      style={{ perspective: 1000, cursor: 'pointer' }}
    >
      <div 
        className="pm-custom-flip-card w-full h-[320px] rounded-[32px] overflow-hidden p-[1px] transition-all duration-300 ease-out"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
        }}
      >
        <div 
          className="w-full h-full p-8 sm:p-10 rounded-[31px] flex flex-col justify-between relative overflow-hidden group"
          style={{
            background: 'rgba(255, 255, 255, 0.015)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.03)'
          }}
        >
          {/* Ambient radial glow on hover */}
          <div 
            className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(173, 250, 59, 0.06) 0%, transparent 70%)'
            }}
          />

          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
              <span className="text-[36px] font-black font-mono leading-none tracking-tight text-white/5">{num}</span>
              <span 
                className="px-3.5 py-1 text-[10px] font-bold font-mono tracking-widest rounded-full border bg-white/[0.02]"
                style={{
                  color: '#adfa3b',
                  borderColor: 'rgba(173, 250, 59, 0.15)'
                }}
              >
                {metric}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-3 font-['Montserrat'] leading-tight">
              {title}
            </h3>
            <p className="text-[14px] text-white/60 leading-relaxed font-normal">
              {description}
            </p>
          </div>

          <div className="relative z-10 flex justify-end mt-4">
            <span className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.01] flex items-center justify-center text-white/30 group-hover:text-[#adfa3b] group-hover:border-[#adfa3b]/20 group-hover:bg-[#adfa3b]/5 transition-all duration-300 text-sm">
              ✦
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    num: '01',
    title: 'Campaign Strategy & Planning',
    desc: "We map out your campaign goals, audience, and funnel strategy to ensure every ad dollar is spent with purpose and precision.",
    img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-32.png',
  },
  {
    num: '02',
    title: 'Paid Ads (Google, Meta, YouTube)',
    desc: 'We create and manage high-performing ad campaigns across Google, Meta, and YouTube to maximize reach and conversions.',
    img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-33.png',
  },
  {
    num: '03',
    title: 'Audience Targeting & Segmentation',
    desc: 'We identify and target the right audience segments based on behavior, demographics, and intent for better campaign performance.',
    img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-34.png',
  },
  {
    num: '04',
    title: 'Ad Creatives & Copy',
    desc: 'We design scroll-stopping visuals and write compelling ad copy that captures attention and drives action.',
    img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-35.png',
  },
  {
    num: '05',
    title: 'Landing Page Optimisation',
    desc: 'We optimize your landing pages for conversions, ensuring seamless user experience from click to conversion.',
    img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-36.png',
  },
  {
    num: '06',
    title: 'A/B Testing & Experimentation',
    desc: 'We continuously test ad variations, creatives, and messaging to identify what works best and scale winning campaigns.',
    img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-37.png',
  },
  {
    num: '07',
    title: 'Conversion Tracking & Analytics',
    desc: 'We implement precise tracking systems to measure every conversion, click, and customer action across all platforms.',
    img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-38.png',
  },
  {
    num: '08',
    title: 'Performance Monitoring & Reporting',
    desc: 'We provide transparent, data-driven reports that show exactly how your campaigns are performing and where to improve.',
    img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-39.png',
  },
];

const ServiceCard = ({ service }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`service-card group ${hovered ? 'beam-active' : ''}`}
      style={{
        background: hovered ? 'rgba(255, 255, 255, 0.025)' : 'rgba(255, 255, 255, 0.012)',
        border: '1px solid rgba(255, 255, 255, 0.04)',
        borderRadius: '24px',
        padding: '40px 32px',
        transition: 'all 0.45s cubic-bezier(.25,.46,.45,.94)',
        cursor: 'pointer',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <svg className="border-svg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <rect className="border-rect" x="0" y="0" rx="24" ry="24" width="100%" height="100%" />
      </svg>

      {/* Dynamic Glowing Icon Box */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center relative mb-6 transition-all duration-300"
        style={{
          background: hovered ? 'rgba(173, 250, 59, 0.12)' : 'rgba(255, 255, 255, 0.03)',
          border: hovered ? '1px solid rgba(173, 250, 59, 0.25)' : '1px solid rgba(255, 255, 255, 0.05)',
          transform: hovered ? 'scale(1.05) rotate(3deg)' : 'scale(1) rotate(0)'
        }}
      >
        <span 
          className="text-lg font-black font-mono transition-colors duration-300"
          style={{
            color: hovered ? '#adfa3b' : 'rgba(255, 255, 255, 0.5)',
          }}
        >
          {service.num}
        </span>
      </div>

      <h3
        style={{
          fontSize: 20,
          fontWeight: 800,
          color: hovered ? '#adfa3b' : '#fff',
          marginBottom: 12,
          lineHeight: 1.3,
          letterSpacing: '-0.3px',
          minHeight: 'auto',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          fontFamily: "'Montserrat', sans-serif",
          transition: 'color 0.3s'
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          fontSize: 14,
          lineHeight: 1.7,
          color: 'rgba(255, 255, 255, 0.6)',
          margin: 0,
          position: 'relative',
          zIndex: 1,
          fontWeight: 400
        }}
      >
        {service.desc}
      </p>

      {/* Mini Arrow Sign */}
      <div className="mt-6 flex justify-end w-full relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-[#adfa3b] font-mono text-xs font-bold tracking-widest flex items-center gap-1">
          ACTIVATE ➔
        </span>
      </div>
    </div>
  );
};

const zigzagSteps = [
  {
    title: 'Strategy Planning',
    desc: 'Define goals, KPIs, audience, and funnel direction. We map out every stage of your customer journey so campaigns launch with clarity and purpose.',
    img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-47.png',
  },
  {
    title: 'Channel Selection',
    desc: 'Select platforms like Google Ads, Meta, YouTube, and more. We match each channel to your audience behaviour and business objectives.',
    img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-46.png',
  },
  {
    title: 'Ad Creative',
    desc: 'Create engaging visuals and ad copy that convert. Every asset is designed to stop the scroll and drive meaningful action.',
    img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-41.png',
  },
  {
    title: 'Campaign Execution',
    desc: 'Launch optimized campaigns with proper targeting and budgets. We set precise parameters to maximise reach and minimise waste.',
    img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-42.png',
  },
  {
    title: 'Tracking & Analytics',
    desc: 'Use pixels, UTM tracking, and tools like GA4, Meta Pixel. Every click and conversion is measured to guide smarter decisions.',
    img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-43.png',
  },
  {
    title: 'Optimization',
    desc: 'Test creatives, refine bids, and enhance audience targeting. Continuous improvement turns good campaigns into great ones.',
    img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-44.png',
  },
  {
    title: 'Scaling',
    desc: "Scale high-performing campaigns for growth and profit. We expand what works and cut what doesn't — driving predictable returns.",
    img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-45.png',
  },
];

const pmHighlight = {
  title: 'Campaigns that pay off',
  intro: 'Creative + data + continuous optimization. Knowing what works, what doesn\'t, and refining every step along the way from targeting the right audience to optimising creatives and tracking real outcomes.',
  points: [
    'We build and manage campaigns that are designed to deliver outcomes, not just impressions, in both Meta and Google Ads.',
    'From targeting the right audience to optimising campaigns in real-time, everything is focused on performance.',
    'Track results, analyse, and get insight into what ad is working best for your target audience.',
  ],
};

const pmFaqs = [
  { q: 'What is Buzziwah?', a: 'Buzziwah is a Bengaluru-based conglomerate specializing in filmmaking, digital marketing, and research. We deliver creative and strategic solutions across three core verticals to help brands and individuals connect meaningfully with their audiences.' },
  { q: 'What services does Buzziwah offer?', a: 'Filmmaking: Short films, documentaries, promotional videos, and corporate films. Digital Marketing: Social media management, performance marketing, content creation, branding, and online reputation management. Research & Reach: Data-driven audience analysis, campaign planning, and customized strategies for better outreach.' },
  { q: 'Who are your clients?', a: 'We cater to small businesses, multinational corporations, startups, personal branding clients, and large-scale brands across industries.' },
  { q: 'What makes Buzziwah unique?', a: 'We combine creativity with strategy to deliver innovative solutions tailored to each project. Our young, dynamic team excels at breaking monotony and crafting imaginative campaigns that resonate deeply with the target audience.' },
  { q: 'Do you specialize in Kannada film promotions?', a: 'Yes. Under Sripada Studios Designs, we focus exclusively on Kannada films, handling logo creation, promotional videos, posters, social media management, event coverage, and more to align with filmmakers’ vision and audience.' },
  { q: 'Can you handle end-to-end digital marketing campaigns?', a: 'Absolutely. From social media marketing and performance ads to website design and content marketing, we provide end-to-end digital marketing solutions customized to your goals.' },
  { q: 'How experienced is your team?', a: 'Our team includes creative writers, editors, filmmakers, and digital marketing professionals with years of experience, all driven by a shared passion for storytelling and impactful campaigns.' },
  { q: 'Do you have examples of your past work?', a: 'Yes. We’ve completed 500+ projects for 100+ clients. Check out our portfolio for case studies and success stories that showcase our expertise.' },
];

const PMFaqCard = ({ faq, idx }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-card ${open ? 'open' : ''}`}>
      <button className="faq-question" type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{`${idx + 1}. ${faq.q}`}</span>
        <span className="faq-arrow">⌄</span>
      </button>
      <div className="faq-answer">{faq.a}</div>
    </div>
  );
};

const SimpleWorkflowCard = ({ step, index }) => {
  return (
    <div
      className="workflow-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '3rem 2rem',
        maxWidth: '500px',
        margin: '0 auto'
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .workflow-card {
            padding: 2rem 1.5rem !important;
          }
          .workflow-card-number {
            width: 70px !important;
            height: 70px !important;
            font-size: 32px !important;
            margin-bottom: 1.25rem !important;
          }
          .workflow-card-label {
            font-size: 10px !important;
            padding: 6px 16px !important;
          }
          .workflow-card-desc {
            font-size: 16px !important;
          }
        }
        @media (max-width: 480px) {
          .workflow-card {
            padding: 1.5rem 1rem !important;
          }
          .workflow-card-number {
            width: 60px !important;
            height: 60px !important;
            font-size: 28px !important;
            margin-bottom: 1rem !important;
          }
          .workflow-card-label {
            font-size: 9px !important;
            padding: 6px 14px !important;
            letter-spacing: 2px !important;
          }
          .workflow-card-desc {
            font-size: 15px !important;
            line-height: 1.6 !important;
          }
        }
      `}</style>

      {/* Step Number */}
      <div
        className="workflow-card-number"
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '36px',
          fontWeight: 900,
          fontFamily: "'Bebas Neue', sans-serif",
          marginBottom: '1.5rem',
          boxShadow: '0 10px 30px rgba(168,85,247,0.3)'
        }}
      >
        {index + 1}
      </div>

      {/* Step Label */}
      <span
        className="workflow-card-label"
        style={{
          display: 'inline-block',
          fontSize: '11px',
          fontWeight: 800,
          color: '#adfa3b',
          background: 'rgba(173,250,59,0.08)',
          border: '1px solid rgba(173,250,59,0.15)',
          borderRadius: '100px',
          padding: '8px 20px',
          marginBottom: '1rem',
          letterSpacing: '3px',
          fontFamily: 'monospace',
          textTransform: 'uppercase'
        }}
      >
        Step {String(index + 1).padStart(2, '0')}
      </span>

      {/* Title */}
      <h3
        style={{
          fontSize: 'clamp(24px, 4vw, 40px)',
          fontWeight: 900,
          color: '#fff',
          margin: '0 0 1rem',
          lineHeight: 1.2,
          letterSpacing: '-1px',
          fontFamily: "'Bebas Neue', sans-serif"
        }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p
        className="workflow-card-desc"
        style={{
          fontSize: '17px',
          lineHeight: 1.7,
          color: 'rgba(255,255,255,0.7)',
          margin: 0,
          fontWeight: 400,
          fontFamily: "'Montserrat', sans-serif"
        }}
      >
        {step.desc}
      </p>
    </div>
  );
};

import servicesData from '../servicesData.json';

const serviceConfig = servicesData['performance-marketing'];

const PerformanceMarketing = () => {
  const containerRef = useRef(null);
  return (
    <div className="pm-page im-font">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap');

      .pm-page,
      .pm-page * {
        font-family: 'Nunito Sans', sans-serif !important;
      }

      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(36px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes slideRight {
        from { opacity: 0; transform: translateX(60px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes slideLeft {
        from { opacity: 0; transform: translateX(-60px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes scaleX {
        from { opacity: 0; transform: scaleX(0); }
        to { opacity: 1; transform: scaleX(1); }
      }
      @keyframes pmCtaGlow {
        0%, 100% { box-shadow: 0 14px 34px rgba(124, 58, 237, 0.22); }
        50% { box-shadow: 0 20px 42px rgba(124, 58, 237, 0.34); }
      }
      .pm-page .pm-case-cta {
        position: relative;
        overflow: hidden;
        transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
        animation: pmCtaGlow 2.8s ease-in-out infinite;
      }
      .pm-page .pm-case-cta::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.28) 45%, transparent 70%);
        transform: translateX(-140%);
        transition: transform 0.55s ease;
      }
      .pm-page .pm-case-cta:hover {
        transform: translateY(-3px) scale(1.02);
        filter: brightness(1.04);
      }
      .pm-page .pm-case-cta:hover::after {
        transform: translateX(140%);
      }
      @media (max-width: 900px) {
        .pm-page .pm-case-study {
          padding: 72px 20px !important;
          min-height: auto !important;
        }
        .pm-page .pm-case-study > div {
          flex-direction: column !important;
          gap: 32px !important;
        }
        .pm-page .pm-case-study-text,
        .pm-page .pm-case-study-video {
          flex-basis: auto !important;
          width: 100% !important;
          max-width: 100% !important;
        }
        .pm-page .pm-case-study h2 {
          font-size: clamp(28px, 7vw, 38px) !important;
        }
        .pm-page .pm-case-study h2 span {
          white-space: normal !important;
        }
        .pm-page .pm-case-study h3 {
          font-size: 18px !important;
          white-space: normal !important;
        }
        .pm-page .pm-case-study p {
          font-size: 14px !important;
        }
        .pm-page .pm-case-study ul li {
          padding: 12px 14px !important;
          font-size: 14px !important;
          gap: 10px !important;
        }
        .pm-page .pm-case-study ul li span:first-child {
          width: 24px !important;
          height: 24px !important;
          font-size: 0.75rem !important;
        }
        .pm-page .pm-case-cta {
          width: 100% !important;
          justify-content: center !important;
          padding: 13px 20px !important;
          font-size: 12px !important;
        }
      }
      @media (max-width: 640px) {
        .pm-page .pm-case-study {
          padding: 56px 16px !important;
        }
        .pm-page .pm-case-study > div {
          gap: 24px !important;
        }
        .pm-page .pm-case-study h2 {
          font-size: clamp(24px, 8vw, 32px) !important;
          letter-spacing: -0.5px !important;
        }
        .pm-page .pm-case-study h2 span {
          white-space: normal !important;
          display: block !important;
        }
        .pm-page .pm-case-study h3 {
          font-size: 16px !important;
        }
        .pm-page .pm-case-study p {
          font-size: 13px !important;
          line-height: 1.6 !important;
        }
        .pm-page .pm-case-study ul {
          gap: 10px !important;
        }
        .pm-page .pm-case-study ul li {
          padding: 10px 12px !important;
          font-size: 13px !important;
          border-radius: 14px !important;
        }
      }
    `}</style>

      <style>{`
        /* ── CODED PAGE BANNER STYLES ── */
        .coded-page-banner {
          position: relative;
          width: 100%;
          min-height: clamp(400px, 60vh, 600px);
          background:
            radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.35), transparent 45%),
            radial-gradient(circle at 75% 80%, rgba(173, 250, 59, 0.22), transparent 35%),
            linear-gradient(180deg, #180d32 0%, #0d0a1b 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: clamp(80px, 12vw, 140px) 20px clamp(40px, 8vw, 80px);
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
          font-family: 'Montserrat', sans-serif !important;
          font-size: clamp(26px, 8vw, 64px);
          font-weight: 900;
          color: #ffffff !important;
          margin: 0;
          line-height: 1.1;
          letter-spacing: -0.02em;
          position: relative;
          z-index: 2;
          animation: titleFadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .coded-page-banner-title * {
          color: inherit !important;
        }

        .coded-page-banner-subtitle {
          font-size: clamp(14px, 4vw, 18px);
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

        {/* Floating PM badges */}
        <FloatingPMBadges />

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

    {/* ── PM Stats Strip ── */}
    <PMStatsStrip />

    <section className="pm-section2">
      <div className="pm-section2-shell">
        <article className="pm-highlight-card">
          <div className="pm-highlight-visual w-full max-w-[500px] aspect-[4/3] rounded-[32px] bg-white/[0.01] border border-white/5 relative p-6 sm:p-8 overflow-hidden flex flex-col justify-between" style={{ backdropFilter: 'blur(12px)' }}>
            {/* Ambient Radial Mesh Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12)_0%,transparent_70%)] opacity-40 pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }} />

            {/* Top Header of Card */}
            <div className="relative z-10 flex justify-between items-center border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] font-mono font-bold tracking-widest text-white/40 uppercase">LIVE TARGETING PIPELINE</span>
              </div>
              <div className="px-2.5 py-1 text-[9px] font-mono font-bold bg-[#adfa3b]/10 text-[#adfa3b] rounded-full border border-[#adfa3b]/20">
                OPTIMIZED RUNNING
              </div>
            </div>

            {/* SVG Interactive Line Chart */}
            <div className="relative z-10 h-32 flex items-end my-4">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="50%" stopColor="#a78bfa" />
                    <stop offset="100%" stopColor="#adfa3b" />
                  </linearGradient>
                </defs>
                {/* Area under curve */}
                <path 
                  d="M0 120 C 50 100, 100 40, 150 70 C 200 100, 250 10, 300 30 C 350 50, 380 5, 400 15 L 400 120 Z" 
                  fill="url(#chartGlow)" 
                />
                {/* Curve path */}
                <path 
                  d="M0 120 C 50 100, 100 40, 150 70 C 200 100, 250 10, 300 30 C 350 50, 380 5, 400 15" 
                  fill="none" 
                  stroke="url(#lineGrad)" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                />
                {/* Pulsing Nodes */}
                <circle cx="150" cy="70" r="5" fill="#a78bfa" className="animate-ping" />
                <circle cx="150" cy="70" r="4" fill="#a78bfa" />

                <circle cx="250" cy="10" r="6" fill="#adfa3b" className="animate-ping" />
                <circle cx="250" cy="10" r="4.5" fill="#adfa3b" />
              </svg>

              {/* Floating Stat Badge */}
              <div className="absolute top-2 left-[55%] -translate-x-1/2 p-2 px-3 rounded-xl bg-[#07030f]/95 border border-white/10 backdrop-blur-md flex flex-col items-start gap-0.5 pointer-events-none shadow-2xl">
                <span className="text-[8px] font-mono text-white/40 uppercase tracking-widest font-black">Capital Return Score</span>
                <span className="text-[11px] font-black text-[#adfa3b] font-mono flex items-center gap-1">✦ 5.4x Avg ROAS</span>
              </div>
            </div>

            {/* Bottom Row Statistics Grid */}
            <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-white/5 text-left font-mono">
              <div className="flex flex-col">
                <span className="text-[8px] text-white/40 font-black uppercase tracking-wider">COST PER LINK</span>
                <span className="text-xs sm:text-sm font-black text-white">$0.18</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] text-white/40 font-black uppercase tracking-wider">CLICK RATE</span>
                <span className="text-xs sm:text-sm font-black text-[#adfa3b]">+12.4%</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] text-white/40 font-black uppercase tracking-wider">NET PROFIT</span>
                <span className="text-xs sm:text-sm font-black text-white">$48.2K</span>
              </div>
            </div>
          </div>
          <div className="pm-highlight-copy">
            <h3>{pmHighlight.title}</h3>
            <p>{pmHighlight.intro}</p>
            <ul className="growth-list pm-highlight-points">
              {pmHighlight.points.map((point) => (
                <li key={point}>
                  <span className="growth-list-icon" aria-hidden="true">✦</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="pm-highlight-cta-wrap">
              <a
                href="/case-studies"
                className="pm-highlight-cta"
              >
                Know More
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <CaseSection
      dark={true}
      reversed={false}
      tag="Performance Marketing"
      title={
        <>
          <span style={{ color: '#7C3AED' }}>Growth of </span>
          <span style={{ color: '#c8f041' }}>Fitness Factory</span>
        </>
      }
      subtitle="From strategy to execution, we helped Fitness Factory grow."
      heading="How We Scaled Fitness Factory's Growth with Performance Marketing."
      points={[
        "Strategically crafted to engage Bengaluru's health and fitness-conscious audience.",
        'Focused on compelling creative direction and targeted ad placement.',
        'Used real-time performance tracking to drive high-quality leads and membership sign-ups.',
        'Exceeded expectations with measurable results, improved ROI, and scalable growth potential.',
      ]}
      videoSrc="https://sripadastudiosdigital.com/wp-content/uploads/2025/05/gym1-mp4.mp4"
      poster="https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Untitled-design-38.png"
      accentFrom="#8B5CF6"
      accentTo="#A78BFA"
      ctaLabel="Explore More"
    />

    <CaseSection
      dark={false}
      reversed={true}
      tag="Performance Marketing"
      title={
        <>
          <span style={{ color: '#7C3AED' }}>Growth of </span>
          <span style={{ color: '#111111' }}>Lilbeez Pre-school</span>
        </>
      }
      subtitle="From strategy to execution, we helped Lilbeez Pre-school Academic grow."
      heading="How We Scaled Lilbeez's Growth with Performance Marketing."
      points={[
        "Precisely engineered for Bengaluru's target education audience.",
        'Built with a clear focus on creative direction, ad precision, and consistent monitoring.',
        'Delivered strong lead quality and better campaign profitability.',
        'Surpassed expectations with measurable and scalable performance results.',
      ]}
      videoSrc="https://sripadastudiosdigital.com/wp-content/uploads/2025/05/lilbeez1-mp4-2.mp4"
      poster="https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Untitled-design-59.png"
      accentFrom="#7C3AED"
      accentTo="#9F7AEA"
      ctaLabel="Explore More"
    />

    {/* 🌟 PREMIUM BRANDS WE HAVE MARKETED SECTION */}
    <PMBrandsMarketedSection />

    <section className="pm-services">
      <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes traceBorder {
          0% { stroke-dashoffset: 2000; }
          100% { stroke-dashoffset: 0; }
        }
        .pm-services {
          min-height: 100vh;
          background: #0a0a0a;
          padding: 60px 20px 100px;
          position: relative;
          overflow: hidden;
        }
        .pm-services .heading-text {
          animation: fadeDown 0.8s ease both;
          text-align: center;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 800;
          color: #a855f7;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0 0 50px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
        }
        .pm-services-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding: 0;
        }
        .service-card {
          position: relative;
          border-radius: 16px;
          padding: 40px 28px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: default;
          opacity: 0;
          animation: cardIn 0.6s ease both;
          border: 1px solid rgba(0,0,0,0.06);
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }
        .border-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
          overflow: visible;
        }
        .border-rect {
          fill: none;
          stroke: url(#beamGradient);
          stroke-width: 6;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.6));
        }
        .beam-active .border-rect {
          animation: traceBorder 1.2s cubic-bezier(.4,0,.2,1) forwards;
        }
        .service-card:nth-child(1) { animation-delay: 0.1s; }
        .service-card:nth-child(2) { animation-delay: 0.17s; }
        .service-card:nth-child(3) { animation-delay: 0.24s; }
        .service-card:nth-child(4) { animation-delay: 0.31s; }
        .service-card:nth-child(5) { animation-delay: 0.38s; }
        .service-card:nth-child(6) { animation-delay: 0.45s; }
        .service-card:nth-child(7) { animation-delay: 0.52s; }
        .service-card:nth-child(8) { animation-delay: 0.59s; }
        .service-card:nth-child(9) { animation-delay: 0.66s; }
        @media (max-width: 900px) {
          .pm-services-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .pm-services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#e9d5ff" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
      <h2 className="heading-text">Ad Plans that kick off</h2>
      <div className="pm-services-grid">
        {services.map((service) => (
          <ServiceCard key={service.num} service={service} />
        ))}
      </div>
    </section>

    <section className="pm-why">
      <h2 className="pm-section-title font-['Montserrat'] text-[clamp(28px,4vw,48px)] font-black leading-none text-center text-white tracking-tight mb-12">
        Why Choose Us
      </h2>
      <div className="pm-flip-row flex flex-col lg:flex-row gap-6 max-w-[1200px] mx-auto mb-6 px-4">
        <FlipCard 
          num="01" 
          title="Deep-Funnel Strategy" 
          description="We design and map every single touchpoint of your customer journey, stopping capital leaks and driving premium conversion yields." 
          metric="100% Funnel Optimization" 
        />
        <FlipCard 
          num="02" 
          title="Dynamic Creative Scaling" 
          description="Running hundreds of hyper-focused ad variations, hooks, and content blocks concurrently to uncover high-converting campaigns instantly." 
          metric="4.5x CTR Surge" 
        />
      </div>
      <div className="pm-flip-row flex flex-col lg:flex-row gap-6 max-w-[1200px] mx-auto px-4">
        <FlipCard 
          num="03" 
          title="AI Bid Algorithms" 
          description="Deploying automated routing scripts that dynamically shift budget to highest-ROAS ad sets in real-time, maximizing budget efficiency." 
          metric="Max Capital Efficiency" 
        />
        <FlipCard 
          num="04" 
          title="Live Net-Profit Dashboard" 
          description="Complete transparent reporting. Real-time metrics tracking actual net cash flow, customer acquisition cost, and recurring client lifetime value." 
          metric="100% Live Metrics" 
        />
      </div>
    </section>

    <section className="pm-process">
      <style>{`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-badge {
          animation: fadeDown 0.6s ease both;
        }
        .hero-title {
          animation: fadeDown 0.6s 0.1s ease both;
        }
        .hero-sub {
          animation: fadeDown 0.6s 0.2s ease both;
        }
        
        .steps-container {
          position: relative;
        }

        @media (max-width: 768px) {
          .step-row {
            padding: 20px 20px !important;
            justify-content: center !important;
          }
          .step-row > div {
            max-width: 100% !important;
          }
          .steps-container {
            grid-template-columns: 1fr !important;
            gap: 2.5rem 0 !important;
            padding: 2rem 1rem !important;
          }
        }

        @media (max-width: 480px) {
          .steps-container {
            gap: 2rem 0 !important;
            padding: 1.5rem 0.75rem !important;
          }
        }
      `}</style>

      <div
        style={{
          textAlign: 'center',
          padding: '100px 40px 80px',
          position: 'relative'
        }}
        className="workflow-header"
      >
        <style>{`
          @media (max-width: 768px) {
            .workflow-header {
              padding: 60px 24px 50px !important;
            }
          }
          @media (max-width: 480px) {
            .workflow-header {
              padding: 50px 20px 40px !important;
            }
          }
        `}</style>
        {/* Background gradient glow */}
        <div 
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        <span
          style={{
            display: 'inline-block',
            fontSize: 11,
            fontWeight: 800,
            color: '#adfa3b',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            marginBottom: 24,
            background: 'rgba(173,250,59,0.08)',
            padding: '10px 28px',
            borderRadius: 100,
            border: '1px solid rgba(173,250,59,0.15)',
            position: 'relative',
            zIndex: 1
          }}
        >
          Our Workflow
        </span>

        <h1
          style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: 900,
            color: '#fff',
            letterSpacing: '-2px',
            margin: '0 0 24px',
            lineHeight: 1.1,
            fontFamily: "'Bebas Neue', sans-serif",
            position: 'relative',
            zIndex: 1
          }}
        >
          Performance Marketing Process
        </h1>

        <p
          style={{
            fontSize: 18,
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.65)',
            maxWidth: 700,
            margin: '0 auto',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            position: 'relative',
            zIndex: 1
          }}
        >
          A clean, data-led system that takes campaigns from planning to scale without losing clarity,
          speed, or performance.
        </p>
      </div>

      <div 
        className="steps-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem 3rem',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '4rem 2rem'
        }}
      >
        {zigzagSteps.map((step, i) => (
          <SimpleWorkflowCard key={step.title} step={step} index={i} />
        ))}
      </div>
    </section>

    <section className="faq-showcase">
      <div className="faq-inner">
        <div className="faq-header">
          <div className="faq-title-block">
            <h2>Any questions?</h2>
            <h3>We got you.</h3>
          </div>
          <p className="faq-intro">
            Have something on your mind? Whether it's about our services, process, timelines, or
            pricing — we've answered the most common questions to help you move forward with
            clarity and confidence.
          </p>
        </div>
        <div className="faq-grid">
          {pmFaqs.map((faq, idx) => <PMFaqCard key={idx} faq={faq} idx={idx} />)}
        </div>
      </div>
    </section>
  </div>
  );
};

/* ═══════════════════════════════════════════════════════
   🌟 BRANDS WE HAVE MARKETED CATALOG & SUCCESS GRID
═══════════════════════════════════════════════════════ */
const PMBrandsMarketedSection = () => {
  const brands = [
    { name: "Tent Cinema", category: "Film School & Academy", outcome: "3.2x Lead Volume", stat: "+180% Registrations", description: "Scaled local awareness and drove direct enrollments via hyper-local Meta ad campaigns.", color: "#adfa3b" },
    { name: "WMN", category: "Womens Wellness Brand", outcome: "4.5x ROAS Scale", stat: "1.2M+ Reach", description: "Created high-impact social ad creatives paired with target-lookalike audience funnels.", color: "#7c3aed" },
    { name: "Svatantra", category: "Art & Culture Platform", outcome: "15x Ticket Sales", stat: "+400% Attendance", description: "Engineered buzz and retargeting ads that sold out cultural events across cities.", color: "#adfa3b" },
    { name: "The Copper Edge", category: "E-Commerce Kitchenware", outcome: "5.1x Ad Spend Return", stat: "+210% Direct Sales", description: "Built conversion-optimized sales landing pages paired with dynamic catalog ad retargeting.", color: "#7c3aed" }
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:py-28" style={{ background: '#0a0a0f' }}>
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(173,250,59,0.1) 0%, transparent 70%)'
      }} />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left md:flex justify-between items-end gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#7c3aed]/10 border border-[#7c3aed]/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] animate-pulse" />
              <span className="text-[10px] font-mono font-black tracking-widest text-[#7c3aed] uppercase font-bold">SUCCESS STORIES</span>
            </div>
            <h2 className="font-['Montserrat'] text-[clamp(28px,4vw,52px)] font-black uppercase text-white leading-tight">
              Brands we have <span className="text-[#adfa3b] italic">marketed</span>
            </h2>
            <p className="mt-4 text-white/50 text-sm sm:text-base leading-relaxed">
              We turn ad spends into pure customer acquisition. Here is how we scaled metrics for brands that demand real business growth.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="font-mono text-xs text-white/40 tracking-widest bg-white/[0.02] border border-white/5 px-4 py-2 rounded-xl inline-block">
              TOTAL MANAGED SPEND: ₹2.5Cr+
            </div>
          </div>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {brands.map((brand, idx) => (
            <div 
              key={idx}
              className="rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.015] to-white/[0.002] hover:border-white/10 hover:bg-white/[0.02] p-8 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Top Row: Mini visual tag & accent marker */}
              <div className="flex justify-between items-start mb-6">
                <span className="text-[32px] font-mono font-black text-white/5">{String(idx + 1).padStart(2, '0')}</span>
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: brand.color, boxShadow: `0 0 10px ${brand.color}` }} />
              </div>

              {/* Brand Info */}
              <div>
                <h3 className="font-['Montserrat'] text-2xl font-black text-white uppercase tracking-tight mb-1 group-hover:text-[#adfa3b] transition-colors">
                  {brand.name}
                </h3>
                <span className="text-[10px] font-mono font-bold tracking-wider text-white/40 uppercase block mb-4">
                  {brand.category}
                </span>
                <p className="text-white/60 text-sm leading-relaxed mb-6 font-normal">
                  {brand.description}
                </p>
              </div>

              {/* Core Achievement Metric Box */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 mt-auto">
                <div className="text-[10px] font-mono text-[#adfa3b] font-bold uppercase tracking-widest mb-1">
                  {brand.outcome}
                </div>
                <div className="text-white text-lg font-black font-mono">
                  {brand.stat}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic High-Impact Case Studies Redirect CTA Banner */}
        <div className="rounded-[32px] border border-[#adfa3b]/20 bg-gradient-to-r from-[#0d1c07]/80 to-[#020502]/80 p-8 sm:p-12 backdrop-blur-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(173,250,59,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="text-center md:text-left relative z-10">
            <span className="text-[10px] font-mono font-black tracking-[0.2em] text-[#adfa3b] uppercase mb-2 block font-bold">DATA-BACKED RESULTS</span>
            <h3 className="font-['Montserrat'] text-[24px] sm:text-[32px] font-black text-white uppercase tracking-wide mb-3">
              Ready to see full campaign breakdowns?
            </h3>
            <p className="text-white/60 text-sm max-w-lg leading-relaxed">
              Explore our full catalog of audits, performance metrics, and strategic methodologies.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-10">
            <a 
              href="/case-studies"
              className="rounded-full px-8 py-3.5 font-['Montserrat'] text-xs font-bold uppercase tracking-[0.08em] text-center text-black transition-all duration-200"
              style={{ background: '#adfa3b' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#7c3aed'; e.currentTarget.style.color = '#ffffff'; }}
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

export default PerformanceMarketing;
