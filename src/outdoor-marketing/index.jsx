import React, { useState, useEffect, useRef } from "react";
import VariableProximity from '../components/VariableProximity';
import servicesData from "../servicesData.json";

const serviceConfig = servicesData['outdoor-marketing'];
const LIVE_CAMPAIGNS = serviceConfig.campaigns;

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

/* ── Outdoor Image Carousel ── */
const OutdoorImageCarousel = () => {
  const items = [
    {
      img: "/outdoor/outdoor1.png",
      stat: "850+",
      label: "Billboard Placements"
    },
    {
      img: "/outdoor/outdoor2.png",
      stat: "12M+",
      label: "Daily Impressions"
    },
    {
      img: "/outdoor/outdoor3.png",
      stat: "48+",
      label: "Cities Covered"
    },
    {
      img: "/outdoor/outdoor1.png",
      stat: "94%",
      label: "Brand Recall Rate"
    },
    {
      img: "/outdoor/outdoor2.png",
      stat: "5x",
      label: "Audience Multiplier"
    }
  ];

  // We duplicate items to create a seamless infinite loop track
  const carouselItems = [...items, ...items, ...items];

  return (
    <div className="outdoor-marquee-container">
      <div className="outdoor-marquee-track">
        {carouselItems.map((item, idx) => (
          <div key={idx} className="outdoor-marquee-item">
            <img 
              src={item.img} 
              alt={item.label} 
              className="outdoor-marquee-img" 
            />
            <div className="outdoor-marquee-overlay">
              <div className="outdoor-marquee-stat">{item.stat}</div>
              <div className="outdoor-marquee-label">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Floating Outdoor Location Badges ── */
const FloatingOutdoorBadges = () => {
  const badges = [
    { label:'📍 BILLBOARDS', color:'#adfa3b', textColor:'#060811', x:'3%', y:'15%', rot:'-6deg', delay:'0s', dur:'7s' },
    { label:'🏙️ PRIME SPOTS', color:'rgba(124,58,237,0.85)', textColor:'#fff', x:'87%', y:'22%', rot:'5deg', delay:'1.2s', dur:'9s' },
    { label:'👁️ 12M DAILY', color:'rgba(255,255,255,0.07)', textColor:'#adfa3b', x:'5%', y:'70%', rot:'4deg', delay:'0.6s', dur:'8s' },
    { label:'🗺️ 48 CITIES', color:'rgba(173,250,59,0.12)', textColor:'#adfa3b', x:'85%', y:'75%', rot:'-4deg', delay:'1.8s', dur:'10s' },
  ];
  return (
    <>
      <style>{`@keyframes outdoorFloat{0%,100%{transform:translateY(0)rotate(var(--rot));}50%{transform:translateY(-14px)rotate(var(--rot));}}`}</style>
      {badges.map((b,i)=>(
        <div key={i} style={{ position:'absolute', left:b.x, top:b.y, background:b.color, color:b.textColor, fontFamily:"'Montserrat',sans-serif", fontSize:'10px', fontWeight:800, letterSpacing:'0.18em', padding:'6px 14px', borderRadius:'6px', border:`1px solid ${b.textColor === '#060811' ? 'transparent' : 'rgba(173,250,59,0.25)'}`, '--rot':b.rot, animation:`outdoorFloat ${b.dur} ease-in-out infinite`, animationDelay:b.delay, pointerEvents:'none', zIndex:1, whiteSpace:'nowrap', backdropFilter:'blur(8px)' }}>
          {b.label}
        </div>
      ))}
    </>
  );
};

/* ══════════════════════════════════════════════════════
   SECTION 1 CSS
══════════════════════════════════════════════════════ */
const CSS1 = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700;800;900&family=Montserrat:wght@400;500;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box}
  /* ── CODED PAGE BANNER STYLES ── */
  .coded-page-banner {
    position: relative;
    width: 100%;
    min-height: 360px;
    background:
      radial-gradient(circle at 25% 20%, rgba(124, 58, 237, 0.5), transparent 45%),
      radial-gradient(circle at 78% 75%, rgba(173, 250, 59, 0.28), transparent 40%),
      radial-gradient(circle at 60% 50%, rgba(109, 40, 217, 0.2), transparent 55%),
      linear-gradient(180deg, #0d0621 0%, #060811 100%);
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
    font-family: 'Nunito Sans', 'Montserrat', sans-serif !important;
    font-size: clamp(38px, 5.5vw, 68px);
    font-weight: 800;
    text-shadow: 0 0 30px rgba(168, 85, 247, 0.25);
    margin: 0;
    line-height: 1.1;
    letter-spacing: -0.02em;
    position: relative;
    z-index: 2;
    animation: titleFadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .coded-page-banner-title .char {
    background: linear-gradient(135deg, #ffffff 30%, #c084fc 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
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
  .buzziwah-section-heading {
    font-family: 'Nunito Sans', 'Montserrat', sans-serif !important;
    font-size: clamp(30px, 4.5vw, 54px);
    font-weight: 800;
    background: linear-gradient(135deg, #ffffff 40%, #c084fc 100%) rotate(0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 0px !important;
    text-shadow: 0 0 30px rgba(168, 85, 247, 0.2);
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin: 0 0 24px;
  }
  .buzziwah-section-heading span {
    color: #adfa3b !important;
    -webkit-text-fill-color: #adfa3b !important;
    background: none !important;
  }
  .buzziwah-section-heading-outline {
    font-family: 'Syne', 'Montserrat', sans-serif !important;
    font-size: clamp(30px, 4.5vw, 54px);
    font-weight: 800;
    background: linear-gradient(135deg, #ffffff 40%, #c084fc 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 0px !important;
    text-shadow: 0 0 30px rgba(168, 85, 247, 0.2);
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin: 0 0 24px;
  }
  .buzziwah-section-heading-outline span {
    color: #adfa3b !important;
    -webkit-text-fill-color: #adfa3b !important;
    background: none !important;
  }
  @keyframes countUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* ── OUTDOOR MARQUEE CAROUSEL ── */
  .outdoor-marquee-container {
    width: 100%;
    overflow: hidden;
    background: #060811;
    border-top: 1px solid rgba(173, 250, 59, 0.18);
    border-bottom: 1px solid rgba(173, 250, 59, 0.18);
    padding: 40px 0;
    position: relative;
  }
  .outdoor-marquee-container::before,
  .outdoor-marquee-container::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 150px;
    z-index: 2;
    pointer-events: none;
  }
  .outdoor-marquee-container::before {
    left: 0;
    background: linear-gradient(90deg, #060811 0%, transparent 100%);
  }
  .outdoor-marquee-container::after {
    right: 0;
    background: linear-gradient(270deg, #060811 0%, transparent 100%);
  }
  .outdoor-marquee-track {
    display: flex;
    width: max-content;
    animation: marqueeRTL 25s linear infinite;
  }
  @keyframes marqueeRTL {
    0% { transform: translateX(0); }
    100% { transform: translateX(-33.333%); }
  }
  .outdoor-marquee-item {
    position: relative;
    width: 320px;
    height: 420px;
    margin: 0 15px;
    border-radius: 24px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
    flex-shrink: 0;
    transition: border-color 0.3s, box-shadow 0.3s;
  }
  .outdoor-marquee-item:hover {
    border-color: rgba(173, 250, 59, 0.3);
    box-shadow: 0 15px 35px rgba(173, 250, 59, 0.15);
  }
  .outdoor-marquee-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .outdoor-marquee-item:hover .outdoor-marquee-img {
    transform: scale(1.08);
  }
  .outdoor-marquee-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 40%, rgba(6, 8, 17, 0.9) 100%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 24px;
    z-index: 1;
  }
  .outdoor-marquee-stat {
    font-family: 'Nunito Sans', 'Montserrat', sans-serif !important;
    font-size: clamp(28px, 2.5vw, 38px);
    font-weight: 850;
    color: #adfa3b;
    margin: 0 0 4px;
    text-shadow: 0 0 15px rgba(173, 250, 59, 0.4);
    letter-spacing: -0.02em;
    line-height: 1;
  }
  .outdoor-marquee-label {
    font-family: 'Montserrat', sans-serif !important;
    font-size: 10px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.65);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    line-height: 1.2;
  }
`;



const CSS2 = `
  @keyframes glassShimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
  @keyframes glowPulse { 0%,100% { box-shadow: 0 0 0 0 rgba(124,58,237,0); } 50% { box-shadow: 0 0 28px 6px rgba(124,58,237,0.22); } }
  @keyframes tabletFloat1 { 0% { transform: translateY(0px) rotate(-6deg) scale(1); } 33% { transform: translateY(-28px) rotate(-3deg) scale(1.02); } 66% { transform: translateY(-14px) rotate(-8deg) scale(0.98); } 100% { transform: translateY(0px) rotate(-6deg) scale(1); } }
  @keyframes tabletFloat2 { 0% { transform: translateY(0px) rotate(10deg) scale(1); } 40% { transform: translateY(-22px) rotate(13deg) scale(1.03); } 80% { transform: translateY(-8px) rotate(7deg) scale(0.97); } 100% { transform: translateY(0px) rotate(10deg) scale(1); } }

  .svc-section { background: linear-gradient(135deg, #06040c 0%, #110825 50%, #06040c 100%); width: 100%; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 80px 5%; font-family: 'Nunito Sans','Segoe UI',sans-serif; position: relative; overflow: hidden; }
  .svc-dotgrid-panel { position:absolute;top:0;right:0;width:50%;height:100%;background-image:radial-gradient(circle,rgba(180,255,0,0.10) 1px,transparent 1px);background-size:18px 18px;pointer-events:none;z-index:0; }
  .svc-tablet { position:absolute;border-radius:18px;pointer-events:none;z-index:0; }
  .svc-tablet-1 { width:110px;height:155px;top:6%;left:3%;background:rgba(124,58,237,0.12);border:1px solid rgba(124,58,237,0.25);backdrop-filter:blur(6px);animation:tabletFloat1 9s ease-in-out infinite; }
  .svc-tablet-2 { width:80px;height:115px;top:18%;left:28%;background:rgba(200,255,0,0.06);border:1px solid rgba(200,255,0,0.18);backdrop-filter:blur(4px);animation:tabletFloat2 12s ease-in-out infinite;animation-delay:-4s; }
  
  .svc-inner { display:flex;align-items:center;justify-content:center;gap:48px;max-width:1800px;width:100%;margin:0 auto;position:relative;z-index:1; }
  .svc-left { flex:1 1 0;min-width:0;max-width:680px;display:flex;flex-direction:column;gap:48px; }
  .svc-title { font-size:48px;font-weight:700;color:#fff;margin:0;font-family:'Nunito Sans','Segoe UI',sans-serif;letter-spacing:-0.5px;line-height:1.15; }
  .svc-grid { display:grid;grid-template-columns:1fr 1fr;gap:24px; }
  .svc-card { background:rgba(255,255,255,0.04);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,0.10);border-radius:20px;padding:33px 30px 36px;display:flex;flex-direction:column;gap:12px;position:relative;overflow:hidden;cursor:default;transition:border-color 0.3s ease,transform 0.3s ease,background 0.3s ease;animation:glowPulse 4s ease-in-out infinite; }
  .svc-card::before { content:'';position:absolute;inset:0;background:linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.07) 50%,transparent 70%);background-size:200% 100%;opacity:0;transition:opacity 0.3s ease;pointer-events:none;border-radius:inherit; }
  .svc-card:hover::before { opacity:1;animation:glassShimmer 1.2s ease forwards; }
  .svc-card:hover { border-color:rgba(124,58,237,0.65);transform:translateY(-6px);background:rgba(124,58,237,0.10);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px); }
  .svc-card:nth-child(1){animation-delay:0s}.svc-card:nth-child(2){animation-delay:1s}.svc-card:nth-child(3){animation-delay:2s}.svc-card:nth-child(4){animation-delay:3s}
  .svc-card-title { font-size:22px;font-weight:700;color:#fff;margin:0;line-height:1.35;font-family:'Nunito Sans','Segoe UI',sans-serif; }
  .svc-card-body { font-size: 19px; color: rgba(255,255,255,0.65); line-height: 1.65; margin: 0; }
  .svc-right { flex:1 1 0;min-width:0;max-width:570px;height:680px;display:flex;align-items:center;justify-content:center; }
  
  /* City billboard dynamic illustration columns */
  .outdoor-city-grid {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 32px;
    background: #090615;
    border: 1px solid rgba(255,255,255,0.05);
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0,0,0,0.6);
  }
  .outdoor-laser-beam {
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 2px;
    height: 100%;
    background: linear-gradient(0deg, #adfa3b, transparent);
    animation: laserShoot 6s infinite linear;
    opacity: 0.4;
  }
  .outdoor-laser-beam-2 {
    position: absolute;
    bottom: 0;
    right: 15%;
    width: 2px;
    height: 100%;
    background: linear-gradient(0deg, #7c3aed, transparent);
    animation: laserShoot 8s infinite linear;
    animation-delay: -3s;
    opacity: 0.3;
  }
  @keyframes laserShoot {
    0% { transform: translateY(100%); }
    100% { transform: translateY(-100%); }
  }

  @media(max-width:1200px){ .svc-right{max-width:420px;height:500px;} }
  @media(max-width:1024px){ .svc-inner{gap:36px;}.svc-right{max-width:300px;height:400px;}.svc-title{font-size:36px;}.svc-card-title{font-size:18px;}.svc-card-body{font-size:15px;}.svc-card{padding:24px 20px 26px;} }
  @media(max-width:768px){ 
    .svc-section{padding:60px 24px;min-height:auto;}
    .svc-inner{flex-direction:column;gap:40px; text-align:center;}
    .svc-left{flex:unset;width:100%;gap:32px; align-items:center;}
    .svc-right{flex:unset;width:100%;max-width:100%;height:320px;}
    .svc-title{font-size:30px; text-align:center; width:100%;}
    .svc-dotgrid-panel{width:100%;opacity:0.4;}
    .svc-tablet{display:none;}
    .svc-grid{grid-template-columns:1fr; width:100%;}
    .svc-card{text-align:left;}
  }
  @media(max-width:480px){ .svc-title{font-size:26px;}.svc-card-title{font-size:16px;}.svc-card-body{font-size:14px;} }
`;

const CSS4 = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700;800;900&family=Montserrat:wght@400;500;700;800;900&display=swap');
  .seo-wrap { position: relative; background: #05030a; min-height: auto; display: flex; align-items: center; justify-content: center; padding: 56px 48px 88px; box-sizing: border-box; overflow: hidden; font-family: 'Nunito Sans', sans-serif; }
  .seo-canvas { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; }
  .seo-inner-process { position: relative; z-index: 1; max-width: 1060px; width: 100%; }
  .seo-head { text-align: center; margin-bottom: 44px; opacity: 0; transform: translateY(22px); animation: seoFadeUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.15s forwards; }
  @keyframes seoFadeUp { to { opacity: 1; transform: translateY(0); } }
  .seo-title-v2 { font-family: 'Nunito Sans', sans-serif; font-weight: 700; font-size: clamp(24px, 3.6vw, 42px); color: #ffffff; margin: 0 0 14px; letter-spacing: -0.015em; line-height: 1.15; }
  .seo-subtitle { font-family: 'Nunito Sans', sans-serif; font-weight: 300; font-size: 13.5px; color: #6b7888; letter-spacing: 0.14em; text-transform: uppercase; margin: 0; }
  .seo-rows { display: flex; flex-direction: column; }
  .seo-row { display: grid; grid-template-columns: 64px 260px 1fr; align-items: start; gap: 0 40px; padding: 30px 0; position: relative; opacity: 0; transform: translateX(-20px); transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1); }
  .seo-row::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(160,100,255,0.12) 15%, rgba(160,100,255,0.22) 50%, rgba(160,100,255,0.12) 85%, transparent 100%); transition: opacity 0.3s ease; }
  .seo-row:last-child::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(160,100,255,0.12) 15%, rgba(160,100,255,0.22) 50%, rgba(160,100,255,0.12) 85%, transparent 100%); }
  .seo-row:hover::before { background: linear-gradient(90deg, transparent 0%, rgba(160,100,255,0.45) 20%, rgba(160,100,255,0.7) 50%, rgba(160,100,255,0.45) 80%, transparent 100%); }
  .seo-row.row-visible { opacity: 1; transform: translateX(0); }
  .seo-num { font-family: 'Nunito Sans', sans-serif; font-weight: 300; font-size: 14px; color: #414d5c; letter-spacing: 0.04em; padding-top: 3px; }
  .seo-name { font-family: 'Nunito Sans', sans-serif; font-weight: 700; font-size: clamp(15px, 1.8vw, 21px); color: #b06aff; line-height: 1.3; letter-spacing: 0.01em; padding-top: 2px; }
  .seo-desc-v2 { font-family: 'Nunito Sans', sans-serif; font-weight: 500; font-size: clamp(14px, 1.2vw, 16px); color: #a8b4c7; line-height: 1.8; letter-spacing: 0.06em; text-transform: uppercase; padding-top: 4px; }
  @media (max-width: 700px) { .seo-wrap { padding: 44px 24px 68px; } .seo-head { margin-bottom: 28px; } .seo-row { grid-template-columns: 44px 1fr; grid-template-rows: auto auto; gap: 6px 14px; padding: 24px 0; } .seo-num { grid-column:1; grid-row:1; } .seo-name { grid-column:2; grid-row:1; } .seo-desc-v2 { grid-column:1/-1; grid-row:2; } }
`;

/* ══════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════ */
const mainServices = [
  { title: "Hoardings & Billboards", body: "High-impact placements in key high-traffic zones to capture maximum eyeballs and establish local dominance." },
  { title: "Transit Advertising", body: "End-to-end wrap designs and media placements on local buses, autos, and commercial cabs." },
  { title: "Outdoor Branding & Installations", body: "Creative physical configurations, interactive installations, and landmarks in commercial blocks." },
  { title: "Event & On-ground Branding", body: "Eye-catching exhibition setups, premium standees, backdrops, and active corporate triggers." },
  { title: "Print Creatives for Outdoor Media", body: "Ultra-high resolution large format designs engineered for visibility and high-fidelity colors." },
  { title: "Location Planning & Media Buying", body: "Data-driven media sourcing, price negotiations, and scheduling to optimize reach per rupee." }
];

const howItWorks = [
  { number: "01.", title: "Geographical Mapping", description: "WE ANALYSE HIGH-TRAFFIC CORRIDORS, LOCAL FOOTFALL DENSITIES, AND AUDIENCE DEMOGRAPHICS TO MAP OUT HIGHLY RELEVANT PHYSICAL TOUCHPOINTS FOR YOUR CAMPAIGN." },
  { number: "02.", title: "Large-Format Creative Layout", description: "OUR DESIGN ENGINEERS CONSTRUCT HIGH-FIDELITY CREATIVES WITH HIGH COLOR ACCURACY AND MINIMALIST TYPOGRAPHY THAT ARE EASILY COMPREHENSED AT HIGH SPEED." },
  { number: "03.", title: "Placement & Validation", description: "WE HANDLE EVERYTHING END-TO-END—Sourcing, Printing, Installing, and validating structural placements for maximum real-world durability and impact." }
];

/* ══════════════════════════════════════════════════════
   SUB-SECTIONS
══════════════════════════════════════════════════════ */
const WhatIsOutdoorTodaySection = () => {
  return (
    <section className="relative overflow-hidden px-6 py-28 sm:px-10 lg:py-36" style={{ background: '#05030a' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute right-[-10%] top-10 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(173,250,59,0.04)_0%,transparent_70%)] pointer-events-none animate-pulse" />

      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 mx-auto max-w-[1100px] text-center">
        <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-1.5 bg-[#adfa3b]/10 border border-[#adfa3b]/20 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#adfa3b] animate-ping" />
          <span className="text-[11px] font-mono font-black tracking-[0.25em] text-[#adfa3b] uppercase">Built for Real-World Visibility</span>
        </div>

        <h2 className="buzziwah-section-heading">
          The Power of Physical <span className="text-[#adfa3b] italic">Presence</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <p className="font-['Montserrat'] text-[clamp(20px,2.8vw,36px)] font-light text-white/90 leading-[1.4] tracking-wide mb-6">
            "We plan and execute outdoor campaigns that <span className="text-[#adfa3b] font-black">increase visibility</span> and reinforce your brand presence."
          </p>
          <p className="font-sans text-[clamp(16px,1.8vw,21px)] text-white/50 leading-relaxed max-w-2xl mx-auto font-normal">
            From idea to placement, everything is handled end-to-end.
          </p>
        </div>

        <div className="mt-12 flex justify-center items-center gap-4">
          <div className="w-12 h-[1px] bg-white/10" />
          <span className="text-white/20 text-xs font-mono">✦</span>
          <div className="w-12 h-[1px] bg-white/10" />
        </div>
      </div>
    </section>
  );
};

const WhyOutdoorMattersSection = () => {
  const points = [
    {
      title: "Unblockable Visual Scale",
      desc: "Physical billboards cannot be closed, ad-blocked, or skipped. They dominate local sightlines with massive physical authority.",
      num: "01"
    },
    {
      title: "High Frequency Reach",
      desc: "Repetitive exposure to daily commuters builds massive long-term brand recall and continuous community validation.",
      num: "02"
    },
    {
      title: "Hyperlocal Reinforcement",
      desc: "Coordinate media placements exactly in proximity to key retail hubs, hospitals, restaurants, or active workspaces.",
      num: "03"
    }
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:py-28" style={{ background: '#070512' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#adfa3b]/10 border border-[#adfa3b]/20 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#adfa3b] animate-pulse" />
            <span className="text-[10px] font-mono font-black tracking-widest text-[#adfa3b] uppercase">THE RESONANCE</span>
          </div>
          <h2 className="buzziwah-section-heading">
            Why it <span className="text-[#adfa3b] italic">matters</span>?
          </h2>
          <p className="max-w-2xl mx-auto text-[#adfa3b] text-lg sm:text-xl font-bold tracking-tight font-sans">
            "Because if you’re not showing up in the real world, you’re missing out."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {points.map((point, idx) => (
            <div 
              key={idx}
              className="rounded-[28px] border border-white/5 bg-gradient-to-b from-white/[0.015] to-white/[0.002] hover:border-white/10 hover:bg-white/[0.02] p-8 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[28px] font-mono font-black text-white/5">{point.num}</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#adfa3b]" style={{ boxShadow: `0 0 10px #adfa3b` }} />
                </div>
                <h3 style={{ fontFamily:"'Nunito Sans', 'Montserrat', sans-serif", fontSize:'clamp(22px,2.5vw,34px)', fontWeight:800, background: 'linear-gradient(135deg, #ffffff 40%, #c084fc 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: '#ffffff', margin:'0 0 12px' }} className="transition-colors">
                  {point.title}
                </h3>
                <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[32px] border border-dashed border-[#adfa3b]/20 bg-gradient-to-r from-[#0d1c07]/50 to-[#020502]/50 p-8 sm:p-12 backdrop-blur-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(173,250,59,0.04)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10">
            <span className="text-[10px] font-mono font-black tracking-[0.2em] text-[#adfa3b] uppercase mb-2 block font-bold">STREET DOMINANCE</span>
            <h3 style={{ fontFamily:"'Nunito Sans', 'Montserrat', sans-serif", fontSize:'clamp(22px,2.5vw,34px)', fontWeight:800, background: 'linear-gradient(135deg, #ffffff 40%, #c084fc 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: '#ffffff', margin:'0 0 12px' }}>
              Real-world authority that works 24/7.
            </h3>
            <p className="text-white/60 text-sm max-w-lg leading-relaxed">
              Unlike digital ads that scroll away in milliseconds, physical placements anchor your brand in the geographic memory of your target customers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-10 flex-shrink-0">
            <a 
              href="/case-studies"
              className="rounded-full px-8 py-3.5 font-['Montserrat'] text-xs font-bold uppercase tracking-[0.08em] text-center text-black transition-all duration-200"
              style={{ background: '#adfa3b', display: 'inline-block', textDecoration: 'none' }}
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

/* ══════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════ */
export default function OutdoorMarketingPage() {
  const heroContainerRef = useRef(null);
  const rowRefs = useRef([]);
  const canvasRef = useRef(null);

  const [currentCampaignIdx, setCurrentCampaignIdx] = useState(0);
  const [animatedFollowers, setAnimatedFollowers] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCampaignIdx((prev) => (prev + 1) % LIVE_CAMPAIGNS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const target = LIVE_CAMPAIGNS[currentCampaignIdx].gainedNum;
    const start = Math.floor(target * 0.85);
    setAnimatedFollowers(start);
    
    let current = start;
    const step = Math.ceil((target - start) / 30);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setAnimatedFollowers(target);
        clearInterval(interval);
      } else {
        setAnimatedFollowers(current);
      }
    }, 20);
    
    return () => clearInterval(interval);
  }, [currentCampaignIdx]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const orbs = [
      { x: 0.12, y: 0.35, r: 0.42, color: "rgba(80,20,140,0.6)",  speed: 0.0007 },
      { x: 0.82, y: 0.62, r: 0.36, color: "rgba(50,10,100,0.55)", speed: 0.0005 },
    ];

    const draw = () => {
      t += 1;
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      orbs.forEach((o, i) => {
        const ox = (o.x + Math.sin(t * o.speed + i * 1.5) * 0.1) * W;
        const oy = (o.y + Math.cos(t * o.speed + i * 2.1) * 0.08) * H;
        const gr = ctx.createRadialGradient(ox, oy, 0, ox, oy, o.r * W);
        gr.addColorStop(0, o.color);
        gr.addColorStop(1, "transparent");
        ctx.fillStyle = gr;
        ctx.beginPath();
        ctx.arc(ox, oy, o.r * W, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const obs = rowRefs.current.map((el, i) => {
      if (!el) return null;
      const o = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add("row-visible"), i * 140);
            o.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      o.observe(el);
      return o;
    });
    return () => obs.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <>
      <style>{CSS1}</style>
      <style>{CSS2}</style>
      <style>{CSS4}</style>

      {/* Hero Banner */}
      <section className="page-banner-section" ref={heroContainerRef}>
        <div className="coded-page-banner">
          <div className="coded-page-banner-grid" />
          <div className="coded-page-banner-purple-glow" />
          <div className="coded-page-banner-green-glow" />

          {/* Floating outdoor badges */}
          <FloatingOutdoorBadges />

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

          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1200px] gap-8 px-6 z-10 text-center relative">
            <div className="flex flex-col items-center text-center relative z-10 max-w-[800px]">
              <div className="coded-page-banner-badge">{serviceConfig.badge}</div>
              <h1 className="coded-page-banner-title text-center skew-x-[-4deg] mb-4" style={{ letterSpacing: '-0.03em' }}>
                <VariableProximity
                  label={`${serviceConfig.title} ${serviceConfig.accentTitle}`}
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={heroContainerRef}
                  radius={100}
                  falloff="linear"
                />
              </h1>
              <div className="h-[2px] w-24 bg-[#adfa3b] my-4 rounded-full" />
              <p className="coded-page-banner-subtitle text-center max-w-[650px]">
                {serviceConfig.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Outdoor Image Carousel ── */}
      <OutdoorImageCarousel />

      {/* Built for Real-World Visibility */}
      <WhatIsOutdoorTodaySection />

      {/* What's Included */}
      <section className="svc-section">
        <div className="svc-dotgrid-panel" />
        <div className="svc-tablet svc-tablet-1" /><div className="svc-tablet svc-tablet-2" />
        <div className="svc-inner">
          <div className="svc-left">
            <h2 className="buzziwah-section-heading">What's Included</h2>
            <div className="svc-grid">
              {mainServices.map((s, i) => (
                <div className="svc-card" key={i}>
                  <p className="svc-card-title">{s.title}</p>
                  <p className="svc-card-body">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Symmetrical City Billboard illustration column */}
          <div className="svc-right">
            <div className="outdoor-city-grid">
              <div className="outdoor-laser-beam" />
              <div className="outdoor-laser-beam-2" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-t from-black/80 via-black/20 to-black/80 z-10">
                <div className="px-6 py-12 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md max-w-sm">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#adfa3b] font-black uppercase mb-3 block">BUZZIWAH IMPACT</span>
                  <h3 style={{ fontFamily:"'Nunito Sans', 'Montserrat', sans-serif", fontSize:'clamp(22px,2.5vw,34px)', fontWeight:800, background: 'linear-gradient(135deg, #ffffff 40%, #c084fc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', margin:'0 0 12px' }}>
                    MASSIVE REAL-WORLD AUDIENCE REACH
                  </h3>
                  <div className="w-16 h-[2px] bg-[#adfa3b] mx-auto my-4" />
                  <p className="text-white/60 text-xs leading-relaxed">
                    We secure optimal visual sights, structural coordinates, and locations that capture high-intent buyers in the physical flow of daily life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Outdoor Matters */}
      <WhyOutdoorMattersSection />

      {/* Process */}
      <section className="seo-wrap">
        <canvas ref={canvasRef} className="seo-canvas" />
        <div className="seo-inner-process">
          <div className="seo-head">
            <h2 className="buzziwah-section-heading">How we launch Outdoor campaigns</h2>
            <p className="seo-subtitle">End-to-end management, absolute precision execution.</p>
          </div>
          <div className="seo-rows">
            {howItWorks.map((s, i) => (
              <div key={i} className="seo-row" ref={(el) => (rowRefs.current[i] = el)}>
                <span className="seo-num">{s.number}</span>
                <span className="seo-name">{s.title}</span>
                <p className="seo-desc-v2">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
