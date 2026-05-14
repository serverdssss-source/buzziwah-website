import { useRef, useState, useEffect } from 'react';
import VariableProximity from '../components/VariableProximity';
import '../home/Home.css';
import servicesData from '../servicesData.json';

const serviceConfig = servicesData['social-media'];

/* ══════════════════════════════════════════════════════
   🎨 INSTAGRAM ICON SVG
══════════════════════════════════════════════════════ */
const InstaIcon = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <defs>
      <radialGradient id="ig-bg" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#ffd600" />
        <stop offset="20%" stopColor="#ff7a00" />
        <stop offset="45%" stopColor="#ff0069" />
        <stop offset="70%" stopColor="#d300c5" />
        <stop offset="100%" stopColor="#7638fa" />
      </radialGradient>
    </defs>
    <rect width="48" height="48" rx="12" fill="url(#ig-bg)" />
    <rect x="13" y="13" width="22" height="22" rx="6" stroke="white" strokeWidth="2.5" fill="none" />
    <circle cx="24" cy="24" r="5.5" stroke="white" strokeWidth="2.5" fill="none" />
    <circle cx="33.5" cy="14.5" r="1.8" fill="white" />
  </svg>
);

/* ══════════════════════════════════════════════════════
   📘 FACEBOOK ICON SVG
══════════════════════════════════════════════════════ */
const FbIcon = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="12" fill="#1877F2" />
    <path d="M28 10h-4a6 6 0 0 0-6 6v4h-4v6h4v12h6V26h4l1-6h-5v-4a1 1 0 0 1 1-1h4v-5z" fill="white" />
  </svg>
);

/* ══════════════════════════════════════════════════════
   🎵 YOUTUBE ICON
══════════════════════════════════════════════════════ */
const YTIcon = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="10" fill="#FF0000" />
    <path d="M38.5 16.5s-.4-2.5-1.5-3.6c-1.4-1.5-3-1.5-3.7-1.6C29 11 24 11 24 11s-5 0-9.3.3c-.7.1-2.3.1-3.7 1.6-1.1 1.1-1.5 3.6-1.5 3.6S9 19.4 9 22.3v2.7c0 2.9.5 5.8.5 5.8s.4 2.5 1.5 3.6c1.4 1.5 3.3 1.4 4.1 1.6C18 36.3 24 36.3 24 36.3s5 0 9.3-.3c.7-.1 2.3-.1 3.7-1.6 1.1-1.1 1.5-3.6 1.5-3.6S39 28.2 39 25.3v-2.7c0-2.9-.5-5.8-.5-5.8z" fill="white" />
    <path d="M21 28.5v-10l9 5-9 5z" fill="#FF0000" />
  </svg>
);

/* ══════════════════════════════════════════════════════
   🫧 FLOATING SOCIAL ICONS BACKGROUND
══════════════════════════════════════════════════════ */
const FloatingSocialIcons = () => {
  const items = [
    { icon: <InstaIcon size={40} />, x: '8%', y: '15%', delay: '0s', dur: '7s' },
    { icon: <FbIcon size={36} />, x: '88%', y: '12%', delay: '1.5s', dur: '8s' },
    { icon: <YTIcon size={38} />, x: '92%', y: '55%', delay: '2s', dur: '9s' },
    { icon: <InstaIcon size={28} />, x: '75%', y: '80%', delay: '3s', dur: '7.5s' },
    { icon: <FbIcon size={30} />, x: '18%', y: '82%', delay: '1.2s', dur: '8.5s' },
    { icon: <YTIcon size={26} />, x: '50%', y: '8%', delay: '0.4s', dur: '6.5s' },
    { icon: <InstaIcon size={22} />, x: '60%', y: '90%', delay: '2.8s', dur: '7s' },
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 1 }}>
      {items.map((item, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: item.x,
          top: item.y,
          opacity: 0.18,
          animation: `smFloatWobble ${item.dur} ease-in-out infinite`,
          animationDelay: item.delay,
          filter: 'blur(0.5px)',
        }}>
          {item.icon}
        </div>
      ))}
      {/* Like hearts floating up */}
      {[...Array(6)].map((_, i) => (
        <div key={`heart-${i}`} style={{
          position: 'absolute',
          left: `${15 + i * 14}%`,
          bottom: '-20px',
          fontSize: '18px',
          animation: `smHeartFloat ${3 + i * 0.7}s ease-in infinite`,
          animationDelay: `${i * 1.1}s`,
          opacity: 0,
          userSelect: 'none',
        }}>
          {['❤️', '🤍', '💜', '💚', '🧡', '💙'][i]}
        </div>
      ))}
    </div>
  );
};

/* ══════════════════════════════════════════════════════
   🔤 SOCIAL MEDIA ALPHABET ICONS
══════════════════════════════════════════════════════ */
const AlphabetIcon = ({ letter, color, bgGradient }) => (
  <div style={{
    width: '60px',
    height: '60px',
    borderRadius: '16px',
    background: bgGradient,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Bebas Neue', 'Impact', sans-serif",
    fontSize: '36px',
    fontWeight: 900,
    color: color,
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
    animation: 'iconBounce 2s ease-in-out infinite',
  }}>
    {letter}
  </div>
);

const SocialAlphabetRow = () => {
  const containerRef = useRef(null);
  return (
    <div ref={containerRef} style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      position: 'relative',
      zIndex: 3,
      marginBottom: '8px',
      flexWrap: 'wrap',
    }}>
      <AlphabetIcon 
        letter="S" 
        color="#fff" 
        bgGradient="linear-gradient(135deg, #E1306C, #C13584)"
      />
      <AlphabetIcon 
        letter="O" 
        color="#fff" 
        bgGradient="linear-gradient(135deg, #1877F2, #0C63D4)"
      />
      <AlphabetIcon 
        letter="C" 
        color="#fff" 
        bgGradient="linear-gradient(135deg, #FF0000, #CC0000)"
      />
      <AlphabetIcon 
        letter="I" 
        color="#fff" 
        bgGradient="linear-gradient(135deg, #0A66C2, #004182)"
      />
      <AlphabetIcon 
        letter="A" 
        color="#fff" 
        bgGradient="linear-gradient(135deg, #adfa3b, #83cd15)"
      />
      <AlphabetIcon 
        letter="L" 
        color="#fff" 
        bgGradient="linear-gradient(135deg, #7c3aed, #5b21b6)"
      />
    </div>
  );
};

/* ══════════════════════════════════════════════════════
   📊 STATS TICKER
══════════════════════════════════════════════════════ */
const statItems = [
  { num: '60+', label: 'Brands Managed' },
  { num: '200M+', label: 'Views Generated' },
  { num: '40M+', label: 'Single Reel Views' },
  { num: '15+', label: 'Viral Reels' },
  { num: '8K+', label: 'Followers in 25 Days' },
  { num: '5+', label: 'Years Experience' },
  { num: '10+', label: 'Platforms Active' },
  { num: '100%', label: 'Brand Dedicated' },
];

const StatsTicker = () => (
  <div style={{
    background: '#adfa3b',
    overflow: 'hidden',
    padding: '12px 0',
    position: 'relative',
    zIndex: 10,
    borderTop: '1px solid rgba(0,0,0,0.1)',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
  }}>
    <div style={{
      display: 'flex',
      width: 'max-content',
      animation: 'smTicker 22s linear infinite',
    }}>
      {[...statItems, ...statItems].map((s, i) => (
        <div key={i} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '0 32px',
          whiteSpace: 'nowrap',
          fontFamily: "'Bebas Neue', 'Montserrat', sans-serif",
        }}>
          <span style={{ fontSize: '22px', fontWeight: 900, color: '#060811', letterSpacing: '0.02em' }}>{s.num}</span>
          <span style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(0,0,0,0.6)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</span>
          <span style={{ marginLeft: '16px', color: 'rgba(0,0,0,0.3)', fontSize: '20px', fontWeight: 900 }}>✦</span>
        </div>
      ))}
    </div>
  </div>
);

/* ══════════════════════════════════════════════════════
   🏠 HERO SECTION
══════════════════════════════════════════════════════ */
const HeroSection = () => {
  const containerRef = useRef(null);
  return (
    <section ref={containerRef} style={{
      position: 'relative',
      background: 'linear-gradient(160deg, #150930 0%, #1e0d45 25%, #0d0820 55%, #060811 100%)',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '140px 20px 60px',
      textAlign: 'center',
    }}>
      {/* Purple/lime orbs */}
      <div style={{ position: 'absolute', top: '-15%', left: '-10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 65%)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(173,250,59,0.15) 0%, transparent 65%)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />
      {/* Grid */}
      <div className="bbbbb-grid-perspective" style={{ zIndex: 0 }} />

      <FloatingSocialIcons />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1000px', width: '100%' }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          borderRadius: '999px',
          background: 'rgba(173,250,59,0.08)',
          border: '1px solid rgba(173,250,59,0.2)',
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '10px',
          fontWeight: 800,
          color: '#adfa3b',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '24px',
        }}>
          <span>✦</span> {serviceConfig.badge} <span>✦</span>
        </div>

        {/* Hero headline with icons */}
        <div style={{
          marginBottom: '24px',
          display: 'inline-flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '20px',
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 'clamp(34px, 6vw, 72px)',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-0.04em',
          lineHeight: 0.98,
          color: '#ffffff',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          <InstaIcon size={60} />
          <span>Social Media Marketing</span>
          <FbIcon size={60} />
        </div>

      {/* Subtitle */}
      <p style={{
        fontFamily: "'Nunito Sans', sans-serif",
        fontSize: 'clamp(14px, 1.8vw, 18px)',
        color: 'rgba(255,255,255,0.65)',
        maxWidth: '580px',
        margin: '20px auto 32px',
        lineHeight: 1.65,
        fontWeight: 500,
      }}>
        {serviceConfig.subtitle}
      </p>

      {/* Platform pills */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'center',
        marginBottom: '36px',
      }}>
        {[
          { label: 'Instagram', color: '#E1306C', bg: 'rgba(225,48,108,0.1)' },
          { label: 'Facebook', color: '#1877F2', bg: 'rgba(24,119,242,0.1)' },
          { label: 'YouTube', color: '#FF0000', bg: 'rgba(255,0,0,0.1)' },
          { label: 'LinkedIn', color: '#0A66C2', bg: 'rgba(10,102,194,0.1)' },
          { label: 'X / Twitter', color: '#aaa', bg: 'rgba(170,170,170,0.1)' },
        ].map(p => (
          <div key={p.label} className="smm-platform-pill" style={{ background: p.bg, color: p.color, borderColor: `${p.color}30` }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: p.color, display: 'inline-block', flexShrink: 0 }} />
            {p.label}
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '28px' }}>
        <a href="/contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '14px 32px', borderRadius: '999px',
          background: '#adfa3b', color: '#060811',
          fontFamily: "'Montserrat', sans-serif", fontSize: '12px', fontWeight: 900,
          textTransform: 'uppercase', letterSpacing: '0.08em',
          textDecoration: 'none', transition: 'all 0.25s ease',
          boxShadow: '0 8px 30px rgba(173,250,59,0.3)',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = '#7c3aed'; e.currentTarget.style.color = 'white'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#adfa3b'; e.currentTarget.style.color = '#060811'; }}
        >
          GET STARTED ✦
        </a>
        <a href="/case-studies" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '13px 28px', borderRadius: '999px',
          background: 'transparent', color: 'white',
          border: '2px solid rgba(255,255,255,0.2)',
          fontFamily: "'Montserrat', sans-serif", fontSize: '12px', fontWeight: 800,
          textTransform: 'uppercase', letterSpacing: '0.08em',
          textDecoration: 'none', transition: 'all 0.25s ease',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#adfa3b'; e.currentTarget.style.color = '#adfa3b'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'white'; }}
        >
          SEE OUR WORK →
        </a>
      </div>
    </div>

    {/* Scroll indicator */}
    <div style={{
      position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
      opacity: 0.4, zIndex: 3, animation: 'scrollBounce 2s ease-in-out infinite',
    }}>
      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '9px', letterSpacing: '0.15em', color: 'white', textTransform: 'uppercase' }}>Scroll</span>
      <div style={{ width: '1px', height: '32px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)' }} />
    </div>
  </section>
  );
};

/* ══════════════════════════════════════════════════════
   ✦ FEATURE CARD (light bg sections)
══════════════════════════════════════════════════════ */


/* ══════════════════════════════════════════════════════
   🃏 FLIP CARD (portfolio images)
══════════════════════════════════════════════════════ */


/* ══════════════════════════════════════════════════════
   📱 PHONE MOCKS
══════════════════════════════════════════════════════ */
const igImages = [
  'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/CRISPY-VADA-12.png',
  'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/CRISPY-VADA-19.png',
  'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/CRISPY-VADA-18.png',
  'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/CRISPY-VADA-17.png',
  'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/CRISPY-VADA-14.png',
  'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/CRISPY-VADA-13.png',
  'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/CRISPY-VADA-15.png',
];

const IgPhone = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => { setCurrent((i) => (i + 1) % igImages.length); }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="mx-auto flex h-[520px] w-[280px] flex-shrink-0 flex-col overflow-hidden rounded-[36px] border-[10px] border-[#333] bg-white shadow-[0_15px_30px_rgba(0,0,0,0.4)] lg:mx-0" style={{ margin: '0 auto' }}>
      <div className="flex h-11 items-center justify-between px-4">
        <div className="h-7 w-7 rounded-full bg-[#333]" />
        <div className="h-1 w-1 rounded-full bg-[#333] shadow-[0_6px_0_#333,0_12px_0_#333]" />
      </div>
      <div className="relative flex-1 overflow-hidden">
        <div className="flex h-full transition-transform duration-300 ease-in-out" style={{ transform: `translateX(${-current * 100}%)` }}>
          {igImages.map((src, i) => (<img key={i} src={src} alt={`slide ${i}`} className="min-w-full object-cover" />))}
        </div>
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
          {igImages.map((_, i) => (
            <span key={i} onClick={() => setCurrent(i)} className={`h-2 w-2 cursor-pointer rounded-full ${i === current ? 'bg-white' : 'bg-white/50'}`} />
          ))}
        </div>
      </div>
      <div className="flex h-11 items-center justify-between px-3">
        <div className="flex gap-4">
          <img src="https://img.icons8.com/fluency/48/like.png" alt="like" className="h-7 w-7" />
          <img src="https://img.icons8.com/ios/50/speech-bubble--v1.png" alt="comment" className="h-7 w-7" />
          <img src="https://img.icons8.com/ios/50/paper-plane.png" alt="share" className="h-7 w-7" />
        </div>
        <img src="https://img.icons8.com/ios-filled/50/bookmark-ribbon.png" alt="save" className="h-7 w-7" />
      </div>
      <div className="flex flex-col gap-1 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-semibold text-[#333]">buzziwah</span>
          <img src="https://img.icons8.com/color/48/verified-badge.png" alt="verified" className="h-[14px] w-[14px]" />
        </div>
        <div className="h-2 w-3/4 rounded bg-gray-200" />
        <div className="h-2 w-1/2 rounded bg-gray-200" />
      </div>
    </div>
  );
};

const sssImages = [
  'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Bodhiable_Story-1-1.png',
  'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/01-2.png',
  'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Fitness-Factory-1.png',
  'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Story_01-1.png',
  'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/End-Card-2.png',
  'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/story-1.png',
  'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/WMN_Story-1.png',
  'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/FRY_S-STORIES.png',
];

const StoryPhone = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => { setCurrent((i) => (i + 1) % sssImages.length); }, 1500);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="mx-auto relative h-[480px] w-[260px] flex-shrink-0 overflow-hidden rounded-[36px] border-[10px] border-[#333] bg-white shadow-[0_15px_30px_rgba(0,0,0,0.4)] lg:mx-0" style={{ margin: '0 auto' }}>
      <div className="absolute left-2 right-2 top-2 z-20 flex gap-1">
        {sssImages.map((_, i) => (
          <div key={i} className="flex-1 overflow-hidden rounded bg-white/40">
            <div className="h-[3px] bg-white" style={{ width: i < current ? '100%' : i === current ? '100%' : '0%', transition: i === current ? 'width 1.5s linear' : 'none' }} />
          </div>
        ))}
      </div>
      <div className="flex h-full transition-transform duration-400 ease-in-out" style={{ transform: `translateX(${-current * 100}%)` }}>
        {sssImages.map((src, i) => (<img key={i} src={src} alt={`story ${i}`} className="min-w-full object-cover" />))}
      </div>
    </div>
  );
};

const reelVideos = [
  'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/ﬁtness-fitnessmotivation-bangaloregyms-southbangalore-isrolayout.mp4',
  'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/In-Frame-@diyapalakkal.official.mp4',
  'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Samrat-food.mp4.mp4',
  'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/prasanth.mp4.mp4',
  'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Deepthi.mp4.mp4',
  'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Copper-Edge.mp4.mp4',
];

const ReelPhone = () => {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef([]);
  useEffect(() => {
    const timer = setInterval(() => {
      if (videoRefs.current[current]) videoRefs.current[current].pause();
      setCurrent((i) => {
        const next = (i + 1) % reelVideos.length;
        setTimeout(() => { if (videoRefs.current[next]) videoRefs.current[next].play(); }, 50);
        return next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);
  return (
    <div className="mx-auto relative h-[480px] w-[260px] flex-shrink-0 overflow-hidden rounded-[36px] border-[10px] border-[#333] bg-black shadow-[0_15px_30px_rgba(0,0,0,0.4)] lg:mx-0" style={{ margin: '0 auto' }}>
      <div className="absolute left-1/2 top-0 z-10 h-[18px] w-[100px] -translate-x-1/2 rounded-b-[12px] bg-[#333]" />
      <div className="absolute bottom-2 left-1/2 z-10 h-1 w-20 -translate-x-1/2 rounded bg-[#333]" />
      <div className="absolute left-2 right-2 top-6 z-20 flex gap-1">
        {reelVideos.map((_, i) => (
          <div key={i} className="flex-1 overflow-hidden rounded bg-white/40">
            <div className="h-[3px] bg-white" style={{ width: i < current ? '100%' : '0%', transition: i === current ? 'width 5s linear' : 'none' }} />
          </div>
        ))}
      </div>
      <div className="flex h-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(${-current * 100}%)` }}>
        {reelVideos.map((src, i) => (
          <video key={i} ref={(el) => (videoRefs.current[i] = el)} src={src} autoPlay muted loop playsInline className="min-w-full object-cover" />
        ))}
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════
   📸 SECTION 4 — Portfolio grid
══════════════════════════════════════════════════════ */


/* ══════════════════════════════════════════════════════
   📷 SECTION 5 — Instagram Carousel Strategy
══════════════════════════════════════════════════════ */
const strategyCards = [
  { heading: 'Narrative-First Approach', text: 'We take a narrative-first approach, shaping your brand story from idea to execution—crafting slides that connect deeply and drive engagement.' },
  { heading: 'SEO-Driven Asset Structuring', text: 'We ensure every asset is SEO-optimized—embedding keywords like "Instagram poster design" and "visual marketing strategy" into file names, alt-text, and metadata.' },
  { heading: 'Consistent Brand Identity', text: "We apply your brand's logo, colors, and fonts consistently across campaigns, building stronger brand recognition and trust." },
  { heading: 'Flexible Carousel Frameworks', text: "Our modular slide templates adapt to Instagram's aspect ratios—ideal for storytelling, product showcases, or campaign summaries." },
  { heading: 'Performance Optimization', text: 'We optimize image quality, resolution, and captions to ensure quick loading, high clarity, and more engagement—without compromising visual appeal.' },
];

/* Instagram story ring around phone */
const StoryRingPhone = ({ children }) => (
  <div style={{ position: 'relative', display: 'inline-block' }}>
    {/* Animated gradient ring */}
    <div style={{
      position: 'absolute',
      inset: '-8px',
      borderRadius: '44px',
      background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888, #7638fa, #f09433)',
      backgroundSize: '300% 300%',
      animation: 'igRingRotate 3s linear infinite',
      zIndex: 0,
    }} />
    <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
  </div>
);

const Section5 = () => (
  <section className="relative overflow-hidden px-5 py-16 sm:px-10 bg-[#060811]">
    <style>{`
      @keyframes igRingRotate {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      @keyframes likePopS5 {
        0% { transform: scale(0) rotate(-15deg); opacity: 0; }
        50% { transform: scale(1.3) rotate(5deg); opacity: 1; }
        100% { transform: scale(1) rotate(0deg); opacity: 1; }
      }
    `}</style>
    {/* BG decorations */}
    <div className="bbbbb-bg-decorations pointer-events-none select-none">
      <div className="bbbbb-orb bbbbb-orb-purple" style={{ top: '10%', right: '5%' }} />
      <div className="bbbbb-orb bbbbb-orb-lime" style={{ bottom: '10%', left: '5%' }} />
      <div className="bbbbb-grid-perspective" />
      {/* Floating mini Instagram icons */}
      {[{ top: '12%', left: '3%', size: 28, delay: '0s' }, { top: '70%', right: '4%', size: 22, delay: '1.4s' }, { top: '40%', left: '48%', size: 18, delay: '0.7s' }].map((p, i) => (
        <div key={i} style={{ position: 'absolute', top: p.top, left: p.left, right: p.right, opacity: 0.12, animation: `smFloatWobble 6s ease-in-out infinite`, animationDelay: p.delay, pointerEvents: 'none' }}>
          <InstaIcon size={p.size} />
        </div>
      ))}
    </div>

    <div className="relative z-10 mx-auto max-w-[1240px]">
      {/* Section label */}
      <div className="text-center mb-12">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <InstaIcon size={28} />
          <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '10px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Instagram</span>
        </div>
        <div>
          <h2 style={{
            fontFamily: "'Bebas Neue','Impact','Arial Black',sans-serif",
            fontSize: 'clamp(56px,10vw,120px)',
            color: 'transparent',
            WebkitTextStroke: '3px white',
            textShadow: '6px 6px 0 rgba(124,58,237,0.5)',
            textTransform: 'uppercase',
            letterSpacing: '0.03em',
            lineHeight: 0.9,
            display: 'block',
          }}>YOUR</h2>
          <h2 style={{
            fontFamily: "'Bebas Neue','Impact','Arial Black',sans-serif",
            fontSize: 'clamp(56px,10vw,120px)',
            color: '#adfa3b',
            WebkitTextStroke: '2px white',
            textShadow: '6px 6px 0 rgba(0,0,0,0.5)',
            textTransform: 'uppercase',
            letterSpacing: '0.03em',
            lineHeight: 0.9,
            display: 'block',
          }}>POST</h2>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px', marginTop: '12px', fontFamily: "'Nunito Sans',sans-serif" }}>
          Creating a brand and establishing is quite a job.&nbsp;
          <strong style={{ color: '#adfa3b' }}>WE STAND IN FOR YOU.</strong>
        </p>
      </div>

      <div className="grid grid-cols-1 items-center justify-items-center gap-12 lg:grid-cols-2 lg:gap-16 lg:justify-items-start lg:items-start">
        {/* Phone with ring */}
        <div className="flex flex-col items-center gap-6 w-full">
          {/* Floating like reactions */}
          <div style={{ position: 'relative', width: '280px', margin: '0 auto' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', fontSize: '28px', animation: 'likePopS5 0.6s ease forwards', animationDelay: '1s', opacity: 0, zIndex: 10 }}>❤️</div>
            <div style={{ position: 'absolute', top: '40px', right: '-30px', fontSize: '20px', animation: 'likePopS5 0.6s ease forwards', animationDelay: '1.8s', opacity: 0, zIndex: 10 }}>💜</div>
            <div style={{ position: 'absolute', bottom: '40px', left: '-25px', fontSize: '24px', animation: 'likePopS5 0.6s ease forwards', animationDelay: '2.4s', opacity: 0, zIndex: 10 }}>🔥</div>
            <StoryRingPhone>
              <IgPhone />
            </StoryRingPhone>
          </div>
        </div>

        {/* Strategy cards */}
        <div className="flex flex-col gap-3 items-center lg:items-start w-full">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <InstaIcon size={20} />
            <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '14px', fontWeight: 800, color: '#E1306C', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>
              Instagram Carousel Strategy By Buzziwah
            </h3>
          </div>
          {strategyCards.map((c, i) => (
            <div key={i}
              className="rounded-2xl w-full transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderLeft: `4px solid ${['#f09433', '#e6683c', '#dc2743', '#cc2366', '#bc1888'][i % 5]}`,
                padding: '14px 18px',
                backdropFilter: 'blur(10px)',
              }}>
              <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '13px', fontWeight: 700, color: '#E1306C', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{c.heading}</p>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(255,255,255,0.65)' }}>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════
   📖 SECTION 6 — Instagram Stories
══════════════════════════════════════════════════════ */
const storiesCards = [
  { heading: 'Engaging & On-Brand Stories', text: 'At Buzziwah, we create engaging, on-brand Stories that connect instantly with your audience. From product launches to behind-the-scenes, our Stories boost interaction and amplify your digital presence.' },
  { heading: 'Goal-Driven Concept Development', text: 'We begin with your objectives and craft creative strategies that align with your brand. Every concept is built to drive engagement, boost performance, and achieve measurable results.' },
  { heading: 'Consistent Brand Integration', text: 'By highlighting your brand in all the creatives, we ensure it echoes across all the platforms on social media.' },
  { heading: 'Mobile-Optimized Design', text: 'We create mobile-first experiences that prioritize speed, usability, and seamless navigation. From UI to content flow, every element is tailored for smaller screens without compromising impact.' },
  { heading: 'Performance Focus', text: "We don't just create, we optimize for outcomes. Every campaign, design, and strategy is built to drive clicks, higher conversions and better ROI." },
];

const Section6 = () => (
  <section className="relative overflow-hidden px-5 py-16 bg-[#060811]">
    <style>{`
      @keyframes storyRingS6 {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes storyViewerDot {
        0%, 100% { opacity: 0.4; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
      }
    `}</style>
    <div className="bbbbb-bg-decorations pointer-events-none select-none opacity-90">
      <div className="bbbbb-orb bbbbb-orb-purple" style={{ top: '15%', left: '10%' }} />
      <div className="bbbbb-orb bbbbb-orb-lime" style={{ bottom: '15%', right: '10%' }} />
      <div className="bbbbb-grid-perspective" />
    </div>

    <div className="relative z-[1] mx-auto max-w-[1100px]">
      {/* Section header */}
      <div className="text-center mb-14">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <InstaIcon size={28} />
          <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '10px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Instagram Stories</span>
        </div>
        <div>
          <span style={{
            fontFamily: "'Bebas Neue','Impact','Arial Black',sans-serif",
            fontSize: 'clamp(64px,11vw,130px)',
            color: 'transparent',
            WebkitTextStroke: '3px #adfa3b',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            lineHeight: 0.85,
            display: 'block',
            textShadow: '8px 8px 0 rgba(124,58,237,0.4)',
          }}>STORY</span>
        </div>
        {/* Story viewer dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '12px' }}>
          {[0, 1, 2, 3, 4, 5].map(i => (
            <div key={i} style={{
              width: i === 0 ? '24px' : '8px',
              height: '8px',
              borderRadius: '999px',
              background: i === 0 ? '#adfa3b' : 'rgba(255,255,255,0.2)',
              animation: `storyViewerDot 1.5s ease-in-out infinite`,
              animationDelay: `${i * 0.15}s`,
              transition: 'all 0.3s',
            }} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 items-center justify-items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Strategy cards */}
        <div className="flex flex-col gap-3 items-center lg:items-start w-full">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '13px', fontWeight: 800, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>
              Instagram Stories by Buzziwah
            </h3>
          </div>
          {storiesCards.map((c, i) => (
            <div key={i}
              className="rounded-2xl w-full transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderLeft: `4px solid ${['#f09433', '#dc2743', '#cc2366', '#7638fa', '#00c2ff'][i % 5]}`,
                padding: '14px 18px',
              }}>
              <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '13px', fontWeight: 700, color: '#adfa3b', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{c.heading}</p>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(255,255,255,0.6)' }}>{c.text}</p>
            </div>
          ))}
        </div>

        {/* Story phone with animated ring */}
        <div className="flex flex-col items-center gap-4 w-full">
          <div style={{ position: 'relative', display: 'inline-block' }}>
            {/* Rotating story ring */}
            <div style={{
              position: 'absolute',
              inset: '-10px',
              borderRadius: '46px',
              border: '3px solid transparent',
              background: 'linear-gradient(#060811,#060811) padding-box, conic-gradient(#adfa3b 0deg, #7c3aed 120deg, transparent 200deg, #adfa3b 360deg) border-box',
              animation: 'storyRingS6 4s linear infinite',
            }} />
            {/* Second ring */}
            <div style={{
              position: 'absolute',
              inset: '-18px',
              borderRadius: '52px',
              border: '2px solid rgba(173,250,59,0.12)',
              borderStyle: 'dashed',
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <StoryPhone />
            </div>
          </div>
          {/* "15 viewers" mock */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '6px 14px', borderRadius: '999px',
            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
            fontFamily: "'Montserrat',sans-serif", fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.6)',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#adfa3b', display: 'inline-block', animation: 'storyViewerDot 1s infinite' }} />
            15K viewers
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════
   🎬 SECTION 7 — Instagram Reels
══════════════════════════════════════════════════════ */
const reelsCards = [
  { heading: 'Engaging Reels That Convert', text: 'At Buzziwah, we craft scroll-stopping Reels that boost brand visibility and engagement. From product highlights to behind-the-scenes clips, our content blends creativity with strategy to tell your brand story and grow your community.' },
  { heading: 'Content Strategy & Hook Planning', text: 'We begin with your goals—be it reach, sales, or traffic—and build tailored storyboards and scripts using trending hooks and audience insights to maximize impact and engagement.' },
  { heading: 'Brand-Integrated Visuals', text: 'Each Reel is tailored to reflect your visual identity—logo, colors, fonts, and tone—ensuring consistency across your digital presence.' },
  { heading: 'Narrative-Driven Creativity', text: "We blend storytelling with structure, delivering Reels that take your audience on a clear, compelling journey—whether it's 15 seconds or a full 60." },
  { heading: 'Performance Ready Assets', text: 'We optimize for mobile with crisp visuals, subtitles, and fast-loading exports—plus smart captions to boost reach and engagement.' },
];

const Section7 = () => (
  <section className="relative overflow-hidden px-5 py-16 sm:px-10 bg-[#060811]">
    <style>{`
      @keyframes reelScrollBar {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(0%); }
      }
      @keyframes reelViewCount {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
      }
    `}</style>

    {/* BG */}
    <div className="bbbbb-bg-decorations pointer-events-none select-none">
      <div className="bbbbb-orb bbbbb-orb-purple" style={{ bottom: '20%', left: '5%' }} />
      <div className="bbbbb-orb" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(105,201,208,0.1), transparent 70%)', top: '10%', right: '5%', position: 'absolute' }} />
      <div className="bbbbb-grid-perspective" />
      {/* Floating Instagram */}
      {[
        { top: '75%', right: '3%', comp: <InstaIcon size={24} />, delay: '1.2s' },
        { top: '45%', left: '46%', comp: <InstaIcon size={20} />, delay: '0.8s' },
      ].map((p, i) => (
        <div key={i} style={{ position: 'absolute', top: p.top, left: p.left, right: p.right, opacity: 0.12, animation: 'smFloatWobble 6s ease-in-out infinite', animationDelay: p.delay, pointerEvents: 'none' }}>
          {p.comp}
        </div>
      ))}
    </div>

    <div className="relative z-10 mx-auto max-w-[1240px]">
      {/* Section heading */}
      <div className="text-center mb-14">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <InstaIcon size={26} />
          <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '10px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Short Form Video</span>
        </div>
        {/* REEL text with double-shadow offset style from image */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <span style={{
            fontFamily: "'Bebas Neue','Impact','Arial Black',sans-serif",
            fontSize: 'clamp(72px,12vw,140px)',
            color: '#7c3aed',
            WebkitTextStroke: '3px #7c3aed',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            lineHeight: 0.85,
            display: 'block',
            position: 'absolute',
            top: '6px', left: '6px',
            opacity: 0.35,
            userSelect: 'none',
          }}>REEL</span>
          <span style={{
            fontFamily: "'Bebas Neue','Impact','Arial Black',sans-serif",
            fontSize: 'clamp(72px,12vw,140px)',
            color: '#adfa3b',
            WebkitTextStroke: '3px white',
            textShadow: '8px 8px 0 rgba(0,0,0,0.5)',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            lineHeight: 0.85,
            display: 'block',
            position: 'relative',
          }}>REEL</span>
        </div>
        {/* Reel progress bar mock */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3px', marginTop: '12px', maxWidth: '200px', margin: '12px auto 0' }}>
          {[100, 60, 30, 10].map((w, i) => (
            <div key={i} style={{ flex: 1, height: '3px', borderRadius: '2px', background: i === 0 ? '#adfa3b' : 'rgba(255,255,255,0.15)' }} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 items-center justify-items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Reel phone with floating stats */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          {/* Floating engagement stats */}
          <div style={{ position: 'absolute', right: '-70px', top: '20%', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { icon: '❤️', val: '40M', color: '#ff4466' },
              { icon: '💬', val: '12K', color: '#adfa3b' },
              { icon: '↗️', val: '8K', color: '#69C9D0' },
            ].map((s, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '4px',
                padding: '5px 10px', borderRadius: '999px',
                background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.1)',
                fontFamily: "'Montserrat',sans-serif", fontSize: '11px', fontWeight: 800,
                color: 'white', whiteSpace: 'nowrap',
                animation: `reelViewCount 2s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
              }}>
                <span>{s.icon}</span>
                <span style={{ color: s.color }}>{s.val}</span>
              </div>
            ))}
          </div>
          {/* Left scroll indicator */}
          <div style={{
            position: 'absolute', left: '-50px', top: '50%', transform: 'translateY(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
            opacity: 0.5,
          }}>
            <div style={{ width: '2px', height: '60px', background: 'rgba(255,255,255,0.2)', borderRadius: '1px', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '30%', background: '#adfa3b', borderRadius: '1px', animation: 'reelScrollBar 2s ease-in-out infinite' }} />
            </div>
            <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.3)', fontFamily: "'Montserrat',sans-serif", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', writingMode: 'vertical-rl' }}>SCROLL</span>
          </div>
          <ReelPhone />
        </div>

        {/* Strategy cards */}
        <div className="flex flex-col gap-3 items-start w-full">
          <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '13px', fontWeight: 800, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
            Instagram Reels By Buzziwah
          </h3>
          {reelsCards.map((c, i) => (
            <div key={i}
              className="rounded-2xl w-full transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderLeft: `4px solid ${['#adfa3b', '#7c3aed', '#69C9D0', '#E1306C', '#FF0000'][i % 5]}`,
                padding: '14px 18px',
              }}>
              <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '13px', fontWeight: 700, color: '#adfa3b', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{c.heading}</p>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(255,255,255,0.6)' }}>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════
   🎞️ SECTION 8 — Production House
══════════════════════════════════════════════════════ */
const carouselImages = [
  { src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/ISITA_1-1.jpg', alt: 'Carousel 1' },
  { src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/01-2-scaled.jpg', alt: 'Carousel 2' },
  { src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/5-days-2.jpg', alt: 'Carousel 3' },
  { src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/24-04-2025-1.png', alt: 'Carousel 4' },
  { src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/45-TEASER-POSTERS-1.jpg', alt: 'Carousel 5' },
  { src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Dear-Moments-Womens-Day-1.png', alt: 'Carousel 6' },
  { src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/SOMETI_1-1.jpg', alt: 'Carousel 7' },
  { src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-19-at-1.05.43-PM-1-1.jpeg', alt: 'Carousel 8' },
  { src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-19-at-1.05.43-PM-2.jpeg', alt: 'Carousel 9' },
  { src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-19-at-1.05.43-PM-1.jpeg', alt: 'Carousel 10' },
  { src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Ui-Posters-4-Days-to-Go-1.png', alt: 'Carousel 11' },
  { src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/G9-CME-POSTS.png', alt: 'Carousel 12' },
  { src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Song_01.png', alt: 'Carousel 13' },
  { src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Song_02.png', alt: 'Carousel 14' },
  { src: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Song_03.png', alt: 'Carousel 15' },
];

const Section8 = () => (
  <section className="relative overflow-hidden py-16 bg-[#060811]">
    <div className="bbbbb-bg-decorations pointer-events-none select-none opacity-90">
      <div className="bbbbb-orb bbbbb-orb-purple" style={{ bottom: '15%', left: '10%' }} />
      <div className="bbbbb-orb bbbbb-orb-lime" style={{ top: '15%', right: '10%' }} />
      <div className="bbbbb-grid-perspective" />
    </div>
    <div className="relative z-[1] mb-12 px-10 text-center">
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
        <YTIcon size={28} />
        <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '10px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Film & Entertainment</span>
      </div>
      {/* Film-strip style heading */}
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <h2 style={{
          fontFamily: "'Bebas Neue', 'Montserrat', sans-serif",
          fontSize: 'clamp(28px, 4.5vw, 58px)',
          color: 'transparent',
          WebkitTextStroke: '2.5px #adfa3b',
          textShadow: '5px 5px 0 rgba(0,0,0,0.5), -2px -2px 0 rgba(124,58,237,0.3)',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          lineHeight: 1,
          margin: 0,
        }}>
          PRODUCTION HOUSE
        </h2>
        <h2 style={{
          fontFamily: "'Bebas Neue', 'Montserrat', sans-serif",
          fontSize: 'clamp(28px, 4.5vw, 58px)',
          color: '#adfa3b',
          WebkitTextStroke: '1px white',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          lineHeight: 1,
          margin: '2px 0 0',
        }}>
          MANAGEMENT
        </h2>
      </div>
    </div>
    <div className="relative z-[1] mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-5 sm:px-10 lg:grid-cols-2">
      <div>
        <p className="mb-4 text-[15px] leading-[1.85] text-white/90 text-justify">
          At BUZZIWAH, we specialize in <strong>social media management for film production houses</strong>, delivering consistent and impactful digital presence year-round. From managing high-engagement campaigns during peak <strong>film release seasons</strong> to keeping audiences captivated with <strong>behind-the-scenes trivia</strong>, <strong>interactive challenges</strong>, <strong>special day celebrations</strong>, and curated <strong>social media campaigns</strong>, we ensure every production house remains relevant and connected.
        </p>
        <p className="mb-7 text-[15px] leading-[1.85] text-white/90 text-justify">
          Trusted by <strong>Suraj Production</strong>, <strong>G9 CME</strong>, <strong>Garuda Motion Pictures</strong>, <strong>EK Entertainers</strong>, and <strong>EK Pictures</strong>, BUZZIWAH continues to be a leading partner in <strong>digital marketing for the film industry</strong>.
        </p>
        <a href="#"
          className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-['Montserrat'] text-xs font-bold uppercase tracking-[0.08em] text-black shadow-lg transition-transform duration-300 hover:scale-105"
          style={{ background: '#c8f03d' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#4a1a98'; e.currentTarget.style.color = '#ffffff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#c8f03d'; e.currentTarget.style.color = '#000000'; }}>
          EXPLORE MORE →
        </a>
      </div>
      <div className="relative overflow-hidden rounded-xl border border-white/5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[15%]" style={{ background: 'linear-gradient(to right, #060811, transparent)' }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-[15%]" style={{ background: 'linear-gradient(to left, #060811, transparent)' }} />
        <div className="flex w-max" style={{ animation: 'aaaa-scroll 45s linear infinite' }}>
          {[...carouselImages, ...carouselImages].map((img, i) => (
            <div key={i} className="h-[420px] w-[280px] flex-shrink-0">
              <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════
   🚀 SECTION 9 — Viral Content
══════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════════════════
   🎯 POSITIONING SECTION
══════════════════════════════════════════════════════ */
const PositioningSection = () => (
  <section className="positioning-section relative overflow-hidden px-6 py-20 sm:px-10 lg:py-28 bg-[#060811]">
    <div className="bbbbb-bg-decorations pointer-events-none select-none opacity-90">
      <div className="bbbbb-orb bbbbb-orb-purple" style={{ top: '20%', left: '5%' }} />
      <div className="bbbbb-orb bbbbb-orb-lime" style={{ bottom: '15%', right: '5%' }} />
      <div className="bbbbb-grid-perspective" />
      <div className="bbbbb-tech-plus bbbbb-tp-2 font-black text-[#C084FC] text-base" style={{ top: '25%', right: '12%' }}>+</div>
      <div className="bbbbb-tech-plus bbbbb-tp-3 font-black text-[#adfa3b] text-base" style={{ bottom: '25%', left: '15%' }}>+</div>
    </div>
    <div className="relative z-10 mx-auto max-w-[1200px]">
      <div className="mb-14 text-center lg:text-left">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#adfa3b] mb-3">Positioning Strategy</p>
        <h2 style={{
          fontFamily: "'Bebas Neue', 'Montserrat', sans-serif",
          fontSize: 'clamp(32px, 5vw, 64px)',
          textTransform: 'uppercase',
          letterSpacing: '0.02em',
          lineHeight: 0.95,
          color: 'white',
        }}>
          Being Present{' '}
          <span style={{ color: '#a855f7', fontStyle: 'italic' }}>Vs.</span>{' '}
          <span style={{ color: 'transparent', WebkitTextStroke: '2px #adfa3b' }}>Being Positioned</span>
        </h2>
        <p className="mt-4 max-w-2xl text-white/60 text-sm sm:text-base leading-relaxed">
          Social media management is a continuous process of telling your audience who you are and positioning your brand in their minds.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr] gap-8 items-stretch">
        <div className="flex flex-col gap-6 justify-between rounded-[32px] border border-white/5 bg-white/[0.01] p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
          <h3 className="font-['Montserrat'] text-xs font-black uppercase tracking-wider text-white/40 mb-2">The Positioning Shift</h3>
          <div className="space-y-4 flex-1 flex flex-col justify-center">
            <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-5 relative opacity-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <h4 className="font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wider">Being Present</h4>
              </div>
              <p className="text-white/50 text-xs leading-relaxed">Simple posting, static noise, basic layouts, and waiting for the algorithm. Just another account on the list.</p>
            </div>
            <div className="flex justify-center text-white/20 animate-pulse py-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></svg>
            </div>
            <div className="rounded-2xl border border-[#adfa3b]/20 bg-gradient-to-br from-[#12161f]/60 to-[#0c0f16]/60 p-5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#adfa3b] animate-pulse shadow-[0_0_8px_#adfa3b]" />
                  <h4 className="font-['Montserrat'] text-sm font-extrabold text-[#adfa3b] uppercase tracking-wider">Being Positioned</h4>
                </div>
                <span className="text-[9px] font-mono font-black px-2 py-0.5 bg-[#adfa3b]/10 text-[#adfa3b] rounded">BUZZIWAH STYLE</span>
              </div>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">Strategic narrative crafting, high-impact visuals, scroll-stopping hooks, cultural relevance, and hyper-retention editing.</p>
            </div>
          </div>
        </div>
        <div className="rounded-[32px] border border-white/5 bg-gradient-to-b from-[#0e0a24]/70 to-[#060411]/70 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-white/[0.04] pb-4">
              <div>
                <span className="font-mono text-[9px] text-[#a855f7] tracking-widest uppercase block mb-1">Brand Perception</span>
                <h3 className="font-['Montserrat'] text-xl font-black text-white uppercase tracking-wide">
                  How you look is <span className="text-[#adfa3b]">how you&apos;re seen</span>
                </h3>
              </div>
              <span className="text-[10px] font-bold opacity-30 font-mono text-white">08 Core Vectors</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Content Planning & Calendar", desc: "Structured blueprints mapping every post and execution cycle." },
                { title: "Reels, Carousels & Creatives", desc: "High-retention scroll stoppers custom tailored for each platform." },
                { title: "Captions & Copywriting", desc: "Hook-driven text optimized for conversation and conversions." },
                { title: "Posting & Scheduling", desc: "Precision posting aligned with your peak audience activity cycles." },
                { title: "Community Management", desc: "Automated & active comment and DM nurturing to scale trust." },
                { title: "Trend-Based Content", desc: "Agile piggybacking on active memes, audios, and subcultures." },
                { title: "Performance & Insights", desc: "Data-backed reports explaining engagement metrics and growth." },
                { title: "Platform Management", desc: "Complete channel oversight on Instagram, YouTube, and beyond." },
              ].map((item, idx) => (
                <div key={idx} className="rounded-xl border border-white/5 bg-white/[0.015] p-4 hover:bg-white/[0.035] hover:border-white/10 transition-all duration-200">
                  <h4 className="text-white font-extrabold text-sm uppercase tracking-wide mb-1 hover:text-[#adfa3b] transition-colors duration-200">{item.title}</h4>
                  <p className="text-white/50 text-[11px] leading-normal font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════
   🏆 POPULAR SOCIALS SECTION
══════════════════════════════════════════════════════ */
const PopularSocialsSection = () => (
  <section className="popular-socials-section relative overflow-hidden px-6 py-20 sm:px-10 lg:py-28 bg-[#060811]">
    <div className="bbbbb-bg-decorations pointer-events-none select-none opacity-90">
      <div className="bbbbb-orb bbbbb-orb-purple" style={{ bottom: '10%', left: '10%' }} />
      <div className="bbbbb-orb bbbbb-orb-lime" style={{ top: '10%', right: '10%' }} />
      <div className="bbbbb-grid-perspective" />
      <div className="bbbbb-tech-plus bbbbb-tp-1 font-black text-[#adfa3b] text-base" style={{ top: '30%', left: '15%' }}>+</div>
      <div className="bbbbb-tech-plus bbbbb-tp-4 font-black text-[#C084FC] text-base" style={{ bottom: '30%', right: '15%' }}>+</div>
    </div>
    <div className="relative z-10 mx-auto max-w-[1200px]">
      <div className="mb-14 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a855f7] mb-3">Case Studies</p>
        <h2 style={{
          fontFamily: "'Bebas Neue', 'Montserrat', sans-serif",
          fontSize: 'clamp(32px, 5vw, 64px)',
          textTransform: 'uppercase',
          letterSpacing: '0.02em',
          lineHeight: 0.95,
          color: 'white',
        }}>
          Socials That We{' '}
          <span style={{ color: '#adfa3b', fontStyle: 'italic', WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Made Popular</span>
        </h2>
        <div className="h-[2px] w-24 bg-[#a855f7] mx-auto my-4 rounded-full" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
        {[
          { label: "Viral Reels", brand: "WMN", tag: "VIRAL", color: "#adfa3b", desc: "Leading motion campaigns with exponential reach spikes." },
          { label: "Infotainment Reels", brand: "Fitness Factory", tag: "EDUCATION", color: "#a855f7", desc: "Scientific yet simplified fitness guides building high authority." },
          { label: "Announcement Poster", brand: "Little Kidz", tag: "CAMPAIGN", color: "#00f0ff", desc: "Sleek and highly functional visuals with premium branding." },
          { label: "AI-Powered Reel", brand: "Buzziwah Labs", tag: "AI / FUTURE", color: "#ff007f", desc: "Next-gen content powered by customized neural rendering." },
          { label: "Trendy Posts", brand: "Durandhar", tag: "CULTURE", color: "#adfa3b", desc: "Agile meme marketing triggering massive user engagements." },
          { label: "High-Concept Carousels", brand: "Tent Cinema", tag: "STORYTELLING", color: "#a855f7", desc: "Cinematic, multi-slide story grids that convert visitors to fans." },
          { label: "Special Wishes", brand: "Celeb Pages", tag: "MOMENTS", color: "#00f0ff", desc: "Highly customizable event-focused aesthetic cards." },
        ].map((item, idx) => (
          <div key={idx}
            className="rounded-[24px] border border-white/5 bg-gradient-to-b from-[#11132a]/60 to-[#070918]/60 p-5 hover:scale-[1.02] hover:border-white/10 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col justify-between group min-h-[190px]">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-[9px] tracking-wider opacity-40 group-hover:opacity-100 transition-opacity duration-300 font-bold" style={{ color: item.color }}>0{idx + 1}</span>
                <span className="text-[8px] font-mono font-black tracking-widest px-2 py-0.5 rounded-full" style={{ backgroundColor: `${item.color}15`, color: item.color }}>{item.tag}</span>
              </div>
              <h3 className="font-['Montserrat'] text-md font-bold text-white uppercase tracking-wide group-hover:text-[#adfa3b] transition-colors duration-300">{item.label}</h3>
              <p className="text-[11px] font-mono text-[#a855f7] mb-3 font-semibold uppercase tracking-widest">Brand: {item.brand}</p>
              <p className="text-white/60 text-xs leading-relaxed font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
        <div className="rounded-[24px] border border-[#a855f7]/30 bg-gradient-to-br from-[#120a26]/70 to-[#070312]/70 p-6 flex flex-col justify-between min-h-[190px] relative overflow-hidden group shadow-[0_12px_24px_rgba(0,0,0,0.3)]">
          <div>
            <span className="text-[#a855f7] text-2xl">📁</span>
            <h3 className="font-['Montserrat'] text-md font-black text-white uppercase tracking-wide mt-3 mb-2">Our Case Studies</h3>
            <p className="text-white/60 text-xs leading-relaxed font-medium">Take a deep dive into our detailed execution strategies and campaign analytics.</p>
          </div>
          <a href="/case-studies" className="inline-flex items-center gap-2 text-xs font-black uppercase text-[#adfa3b] hover:text-[#a855f7] tracking-wider mt-4 transition-colors duration-200">Know More →</a>
        </div>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════
   ❓ FAQ
══════════════════════════════════════════════════════ */
const faqs = [
  { q: 'What services does Buzziwah Studio offer?', a: 'We offer end-to-end social media management including content strategy, reel creation, carousel design, Instagram stories, special day creatives, and performance analytics.' },
  { q: 'Which platforms do you manage?', a: 'We primarily focus on Instagram, but also manage Facebook, YouTube Shorts, and LinkedIn depending on your brand needs.' },
  { q: 'How long does it take to see results?', a: 'Most clients see measurable engagement growth within 30–60 days. Viral results like our Samrat campaign can happen much faster with the right strategy.' },
  { q: 'Do you work with small businesses?', a: 'Absolutely. We work with everyone from local restaurants and pre-schools to production houses and celebrity pages. Every brand deserves great content.' },
  { q: 'What makes Buzziwah different from other agencies?', a: "We combine deep cultural understanding, meme-driven creativity, and data-backed strategy. We don't just post — we craft content that resonates and converts." },
  { q: 'How do I get started with Buzziwah?', a: "Simply click \"Get Started\" or reach out via our contact page. We'll schedule a discovery call to understand your brand and build a custom strategy." },
];

const SMFaqCard = ({ f, i }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-card ${open ? 'open' : ''}`}>
      <button className="faq-question" type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{`${i + 1}. ${f.q}`}</span>
        <span className="faq-arrow">⌄</span>
      </button>
      <div className="faq-answer">{f.a}</div>
    </div>
  );
};

const SMFaq = () => (
  <section className="faq-showcase" style={{ background: 'transparent' }}>
    <div className="faq-inner relative overflow-hidden">
      <div className="bbbbb-bg-decorations pointer-events-none select-none opacity-80" style={{ zIndex: 0 }}>
        <div className="bbbbb-orb bbbbb-orb-purple" style={{ bottom: '10%', right: '10%' }} />
        <div className="bbbbb-orb bbbbb-orb-lime" style={{ top: '10%', left: '10%' }} />
        <div className="bbbbb-grid-perspective" />
      </div>
      <div className="relative z-10">
        <div className="faq-header">
          <div className="faq-title-block">
            <h2>Any questions?</h2>
            <h3>We got you.</h3>
          </div>
          <p className="faq-intro">Have something on your mind? Whether it&apos;s about our services, process, timelines, or pricing — we&apos;ve answered the most common questions to help you move forward with clarity and confidence.</p>
        </div>
        <div className="faq-grid">
          {faqs.map((f, i) => <SMFaqCard key={i} f={f} i={i} />)}
        </div>
      </div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════
   🌐 MAIN PAGE
══════════════════════════════════════════════════════ */
const SocialMediaPage = () => {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('.scroll-reveal').forEach(el => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
    }, { threshold: 0.05, rootMargin: '0px 0px -5% 0px' });
    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="social-media-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@700;800;900&family=Nunito+Sans:wght@400;600;700;800;900&display=swap');

        .social-media-page {
          background-color: #060811 !important;
          color: #ffffff;
          position: relative;
          z-index: 10;
          width: 100%;
          overflow: hidden;
        }
        .social-media-page, .social-media-page * {
          font-family: 'Nunito Sans', sans-serif !important;
        }

        /* ── BUZZIWAH SPLIT ── */
        @keyframes buzzSplitLeft {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          50% { transform: translateX(-14px) rotate(-2deg); }
        }
        @keyframes wahSplitRight {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          50% { transform: translateX(14px) rotate(2deg); }
        }
        @keyframes iconBounce {
          0%, 100% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.12) translateY(-8px); }
        }
        @keyframes crackGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; box-shadow: 0 0 20px #adfa3b; }
        }

        /* ── FLOATING ICONS ── */
        @keyframes smFloatWobble {
          0%, 100% { transform: translateY(0) rotate(-4deg) scale(1); }
          50% { transform: translateY(-18px) rotate(4deg) scale(1.08); }
        }
        @keyframes smHeartFloat {
          0% { transform: translateY(0) scale(0.8); opacity: 0; }
          10% { opacity: 1; }
          80% { opacity: 0.8; }
          100% { transform: translateY(-120px) scale(1.2); opacity: 0; }
        }

        /* ── TICKER ── */
        @keyframes smTicker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* ── SCROLL BOUNCE ── */
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        /* ── PLATFORM PILL ── */
        .smm-platform-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px 6px 8px;
          border-radius: 999px;
          font-family: 'Montserrat', sans-serif !important;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          border: 1.5px solid;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          cursor: default;
          white-space: nowrap;
        }
        .smm-platform-pill:hover {
          transform: translateY(-3px) scale(1.04);
        }

        /* ── BENTO DECORATIONS ── */
        .bbbbb-bg-decorations { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
        .bbbbb-orb { position: absolute; border-radius: 50%; filter: blur(90px); pointer-events: none; }
        .bbbbb-orb-purple { width: 500px; height: 500px; background: radial-gradient(circle, rgba(139,92,246,0.18), transparent 70%); }
        .bbbbb-orb-lime { width: 400px; height: 400px; background: radial-gradient(circle, rgba(173,250,59,0.14), transparent 70%); }
        .bbbbb-grid-perspective { position: absolute; bottom: -20%; left: 0; width: 100%; height: 150%; background-image: linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px); background-size: 80px 80px; transform: perspective(1000px) rotateX(75deg); transform-origin: bottom center; opacity: 0.7; pointer-events: none; animation: gridDrift 40s linear infinite; }
        @keyframes gridDrift { from { background-position: 0 0; } to { background-position: 0 -160px; } }
        .bbbbb-tech-plus { position: absolute; font-size: 14px; opacity: 0.35; animation: smFloatWobble 6s ease-in-out infinite; }
        .bbbbb-tp-1 { animation-delay: 0s; }
        .bbbbb-tp-2 { animation-delay: 1.5s; }
        .bbbbb-tp-3 { animation-delay: 3s; }
        .bbbbb-tp-4 { animation-delay: 4.5s; }
        @keyframes aaaa-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        /* ── SCROLL REVEAL ── */
        .scroll-reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
        .scroll-reveal.is-visible { opacity: 1; transform: translateY(0); }
        .reveal-zoom-in { transform: scale(0.96) translateY(20px); }
        .reveal-zoom-in.is-visible { transform: scale(1) translateY(0); }
        .smm-fade { opacity: 0; transform: translate(var(--fx, 0), var(--fy, 0)) scale(0.96); transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0s), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) var(--delay, 0s); }
        .smm-fade.is-visible { opacity: 1; transform: translate(0, 0) scale(1); }

        /* ── FAQ ── */
        .faq-showcase { padding: 80px 20px; }
        .faq-inner { max-width: 1100px; margin: 0 auto; padding: 60px 40px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 40px; }
        .faq-header { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 16px; margin-bottom: 48px; }
        .faq-title-block h2 { font-family: 'Bebas Neue', 'Montserrat', sans-serif !important; font-size: clamp(40px, 6vw, 72px); color: white; line-height: 1; margin: 0; letter-spacing: 0.02em; }
        .faq-title-block h3 { font-family: 'Bebas Neue', 'Montserrat', sans-serif !important; font-size: clamp(36px, 5vw, 64px); color: #adfa3b; line-height: 1; margin: 0; -webkit-text-stroke: 1px rgba(255,255,255,0.2); }
        .faq-intro { max-width: 560px; color: rgba(255,255,255,0.55); font-size: 15px; line-height: 1.7; }
        .faq-grid { display: flex; flex-direction: column; gap: 12px; }
        .faq-card { border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; overflow: hidden; background: rgba(255,255,255,0.015); transition: border-color 0.2s; }
        .faq-card.open { border-color: rgba(173,250,59,0.2); }
        .faq-question { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 18px 24px; background: none; border: none; cursor: pointer; color: white; font-size: 15px; font-weight: 600; text-align: left; font-family: 'Nunito Sans', sans-serif; }
        .faq-arrow { font-size: 20px; color: #adfa3b; transition: transform 0.3s; flex-shrink: 0; }
        .faq-card.open .faq-arrow { transform: rotate(180deg); }
        .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), padding 0.3s; padding: 0 24px; color: rgba(255,255,255,0.65); font-size: 14px; line-height: 1.7; }
        .faq-card.open .faq-answer { max-height: 200px; padding: 0 24px 18px; }
      `}</style>

      {/* ── HERO ── */}
      <HeroSection />

      {/* ── STATS TICKER ── */}
      <StatsTicker />

      <PositioningSection />

      {/* ── PLATFORM DIVIDER STRIP ── */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '28px 0',
        background: 'linear-gradient(90deg, #060811, #1a0d3d, #060811)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}>
        <div style={{ display: 'flex', width: 'max-content', animation: 'smTicker 18s linear infinite' }}>
          {[...Array(4)].flatMap(() => [
            { icon: <InstaIcon size={32} />, label: 'INSTAGRAM' },
            { icon: <FbIcon size={32} />, label: 'FACEBOOK' },
            { icon: <YTIcon size={32} />, label: 'YOUTUBE' },
            { icon: <span style={{ fontSize: '32px' }}>🔗</span>, label: 'LINKEDIN' },
          ]).map((p, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '0 28px', whiteSpace: 'nowrap',
              opacity: 0.5,
            }}>
              {p.icon}
              <span style={{ fontFamily: "'Bebas Neue','Montserrat',sans-serif", fontSize: '18px', color: 'white', letterSpacing: '0.15em' }}>{p.label}</span>
              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '20px', marginLeft: '12px' }}>✦</span>
            </div>
          ))}
        </div>
      </div>

      <PopularSocialsSection />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <SMFaq />
    </div>
  );
};
export default SocialMediaPage;
