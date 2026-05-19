import React, { useState, useEffect, useRef } from "react";
import VariableProximity from '../components/VariableProximity';
import servicesData from "../servicesData.json";

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

/* ── animated SEO stats strip ── */
const SEOStatsStrip = () => {
  const stats = [
    { end: 1200, suffix: '+', label: 'Keywords in Top 3' },
    { end: 4, suffix: '.2M+', label: 'Monthly Impressions' },
    { end: 145, suffix: 'K+', label: 'Organic Clicks/mo' },
    { end: 97, suffix: '%', label: 'Client Satisfaction' },
    { end: 3, suffix: 'x', label: 'Traffic Increase' },
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

/* ── floating SEO rank badges ── */
const FloatingSEOBadges = () => {
  const badges = [
    { label:'#1 RANK', color:'#adfa3b', textColor:'#060811', x:'4%', y:'18%', rot:'-8deg', delay:'0s', dur:'7s' },
    { label:'↑ SEO', color:'rgba(124,58,237,0.85)', textColor:'#fff', x:'88%', y:'25%', rot:'6deg', delay:'1.5s', dur:'9s' },
    { label:'🔍 ORGANIC', color:'rgba(255,255,255,0.07)', textColor:'#adfa3b', x:'6%', y:'68%', rot:'5deg', delay:'0.8s', dur:'8s' },
    { label:'PAGE 1', color:'rgba(173,250,59,0.12)', textColor:'#adfa3b', x:'84%', y:'72%', rot:'-5deg', delay:'2s', dur:'10s' },
  ];
  return (
    <>
      <style>{`@keyframes seoFloat{0%,100%{transform:translateY(0)rotate(var(--rot));}50%{transform:translateY(-14px)rotate(var(--rot));}}`}</style>
      {badges.map((b,i)=>(
        <div key={i} style={{ position:'absolute', left:b.x, top:b.y, background:b.color, color:b.textColor, fontFamily:"'Bebas Neue',Impact,sans-serif", fontSize:'11px', letterSpacing:'0.18em', padding:'5px 12px', borderRadius:'6px', border:`1px solid ${b.textColor === '#060811' ? 'transparent' : 'rgba(173,250,59,0.25)'}`, '--rot':b.rot, animation:`seoFloat ${b.dur} ease-in-out infinite`, animationDelay:b.delay, pointerEvents:'none', zIndex:1, whiteSpace:'nowrap', backdropFilter:'blur(8px)' }}>
          {b.label}
        </div>
      ))}
    </>
  );
};

const serviceConfig = servicesData['seo'];
const LIVE_CAMPAIGNS = serviceConfig.campaigns;

/* ══════════════════════════════════════════════════════
   SECTION 1 CSS
══════════════════════════════════════════════════════ */
const CSS1 = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
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
  .buzziwah-section-heading {
    font-family: 'Bebas Neue', 'Impact', 'Arial Black', sans-serif !important;
    font-size: clamp(24px, 3vw, 44px);
    color: #adfa3b;
    -webkit-text-stroke: 2px white;
    text-shadow: 5px 5px 0 rgba(0,0,0,0.5);
    letter-spacing: 0.04em;
    line-height: 0.92;
    margin: 0 0 24px;
  }
  .buzziwah-section-heading-outline {
    font-family: 'Bebas Neue', 'Impact', 'Arial Black', sans-serif !important;
    font-size: clamp(24px, 3vw, 44px);
    color: transparent;
    -webkit-text-stroke: 2.5px #adfa3b;
    letter-spacing: 0.04em;
    line-height: 0.92;
    margin: 0 0 24px;
  }
  @keyframes countUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .seo-inner{display:flex;align-items:center;gap:96px;max-width:1600px;width:100%;}
  .seo-img-col{position:relative;flex-shrink:0;width:630px;height:780px;}
  .seo-img-col img{width:100%;height:100%;object-fit:contain;object-position:center;display:block;}
  .seo-content-col{flex:1;display:flex;flex-direction:column;}
  .seo-pill{display:inline-flex;align-items:center;gap:12px;background:#f3e8ff;border:1.5px solid #c084fc;border-radius:999px;padding:9px 24px;width:fit-content;margin-bottom:33px;}
  .seo-pill-dot{width:13px;height:13px;border-radius:50%;background:#6d28d9;flex-shrink:0;}
  .seo-pill-text{font-size:16px;font-weight:700;letter-spacing:1.5px;color:#4b5563;text-transform:uppercase;}
  .seo-headline{font-size:32px;font-weight:800;line-height:1.45;color:#111827;text-transform:uppercase;letter-spacing:.2px;margin:0 0 27px;}
  .seo-purple{color:#7c3aed;}
  .seo-amber{color:#b45309;}
  .seo-body{font-size:22px;line-height:1.8;color:#374151;text-align:justify;margin:0 0 33px;max-width:645px;}
  .seo-why-title{font-size:30px;font-weight:700;color:#111827;margin:0 0 12px;}
  .seo-why-body{font-size:22px;line-height:1.7;color:#374151;margin:0 0 42px;}
  .seo-link-purple{color:#7c3aed;text-decoration:none;font-weight:500;}
  .seo-link-ul{color:#374151;text-decoration:underline;text-decoration-color:#9ca3af;}
  .seo-cta{display:flex;gap:21px;flex-wrap:wrap;}
  .seo-btn{padding:19px 51px;border-radius:999px;font-size:19px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;border:2px solid #7c3aed;transition:background .18s ease,color .18s ease;}
  .seo-btn-primary{background:#7c3aed;color:#fff;}
  .seo-btn-primary:hover{background:#6d28d9;border-color:#6d28d9;}
  .seo-btn-outline{background:transparent;color:#111827;}
  .seo-btn-outline:hover{background:#f3e8ff;}
  @media(max-width:1200px){
    .seo-section{padding:132px 48px 56px !important; min-height: auto;}
    .seo-inner{gap:60px;}
    .seo-img-col{width:400px;height:500px;}
    .seo-headline{font-size:26px;}
    .seo-body{font-size:18px;}
    .seo-why-title{font-size:24px;}
    .seo-why-body{font-size:18px;}
    .seo-btn{font-size:15px;padding:16px 40px;}
  }
  @media(max-width:960px){
    .seo-section{padding:124px 24px 48px !important;}
    .seo-inner{flex-direction:column !important; gap:36px; text-align:center; align-items:center;}
    .seo-content-col{align-items:center; text-align:center;}
    .seo-img-col{width:100%; max-width:440px; height:auto; aspect-ratio:4/5;}
    .seo-headline{font-size:24px; text-align:center;}
    .seo-body{font-size:16px; text-align:center; max-width:100%;}
    .seo-why-title{font-size:20px; text-align:center;}
    .seo-why-body{font-size:16px; text-align:center; max-width:100%;}
    .seo-pill{margin-left:auto; margin-right:auto;}
    .seo-cta{justify-content:center;}
  }
  @media(max-width:640px){
    .seo-section{padding:108px 16px 32px !important;}
    .seo-inner{gap:28px;}
    .seo-img-col{max-width:320px;}
    .seo-headline{font-size:20px;}
    .seo-body, .seo-why-body{font-size:15px;}
    .seo-why-title{font-size:18px;}
    .seo-btn{font-size:14px; padding:12px 28px; width:100%; text-align:center;}
    .seo-cta{flex-direction:column; width:100%; gap:12px;}
  }
`;

const CSS2 = `
  @keyframes glassShimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
  @keyframes glowPulse { 0%,100% { box-shadow: 0 0 0 0 rgba(124,58,237,0); } 50% { box-shadow: 0 0 28px 6px rgba(124,58,237,0.22); } }
  @keyframes tabletFloat1 { 0% { transform: translateY(0px) rotate(-6deg) scale(1); } 33% { transform: translateY(-28px) rotate(-3deg) scale(1.02); } 66% { transform: translateY(-14px) rotate(-8deg) scale(0.98); } 100% { transform: translateY(0px) rotate(-6deg) scale(1); } }
  @keyframes tabletFloat2 { 0% { transform: translateY(0px) rotate(10deg) scale(1); } 40% { transform: translateY(-22px) rotate(13deg) scale(1.03); } 80% { transform: translateY(-8px) rotate(7deg) scale(0.97); } 100% { transform: translateY(0px) rotate(10deg) scale(1); } }
  @keyframes tabletFloat3 { 0% { transform: translateY(0px) rotate(-14deg) scale(1); } 50% { transform: translateY(-35px) rotate(-10deg) scale(1.04); } 100% { transform: translateY(0px) rotate(-14deg) scale(1); } }
  @keyframes tabletFloat4 { 0% { transform: translateY(0px) rotate(4deg) scale(1); } 45% { transform: translateY(-20px) rotate(7deg) scale(1.02); } 100% { transform: translateY(0px) rotate(4deg) scale(1); } }
  @keyframes tabletFloat5 { 0% { transform: translateY(0px) rotate(-20deg) scale(1); } 55% { transform: translateY(-18px) rotate(-16deg) scale(1.03); } 100% { transform: translateY(0px) rotate(-20deg) scale(1); } }

  .svc-section { background: linear-gradient(135deg, #0d0d1a 0%, #150d2e 50%, #0d0d1a 100%); width: 100%; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 80px 5%; font-family: 'DM Sans','Segoe UI',sans-serif; position: relative; overflow: hidden; }
  .svc-dotgrid-panel { position:absolute;top:0;right:0;width:50%;height:100%;background-image:radial-gradient(circle,rgba(180,255,0,0.10) 1px,transparent 1px);background-size:18px 18px;pointer-events:none;z-index:0; }
  .svc-tablet { position:absolute;border-radius:18px;pointer-events:none;z-index:0; }
  .svc-tablet-1 { width:110px;height:155px;top:6%;left:3%;background:rgba(124,58,237,0.12);border:1px solid rgba(124,58,237,0.25);backdrop-filter:blur(6px);animation:tabletFloat1 9s ease-in-out infinite; }
  .svc-tablet-2 { width:80px;height:115px;top:18%;left:28%;background:rgba(200,255,0,0.06);border:1px solid rgba(200,255,0,0.18);backdrop-filter:blur(4px);animation:tabletFloat2 12s ease-in-out infinite;animation-delay:-4s; }
  .svc-tablet-3 { width:130px;height:90px;bottom:12%;left:8%;background:rgba(124,58,237,0.09);border:1px solid rgba(124,58,237,0.20);backdrop-filter:blur(5px);animation:tabletFloat3 10s ease-in-out infinite;animation-delay:-2s; }
  .svc-tablet-4 { width:70px;height:100px;bottom:28%;right:6%;background:rgba(200,255,0,0.07);border:1px solid rgba(200,255,0,0.15);backdrop-filter:blur(4px);animation:tabletFloat4 14s ease-in-out infinite;animation-delay:-7s; }
  .svc-tablet-5 { width:95px;height:135px;top:55%;left:18%;background:rgba(124,58,237,0.08);border:1px solid rgba(124,58,237,0.18);backdrop-filter:blur(4px);animation:tabletFloat5 11s ease-in-out infinite;animation-delay:-5s; }
  .svc-tablet-6 { width:60px;height:85px;top:8%;right:22%;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);backdrop-filter:blur(3px);animation:tabletFloat2 16s ease-in-out infinite;animation-delay:-9s; }
  .svc-inner { display:flex;align-items:center;justify-content:center;gap:48px;max-width:1800px;width:100%;margin:0 auto;position:relative;z-index:1; }
  .svc-left { flex:1 1 0;min-width:0;max-width:680px;display:flex;flex-direction:column;gap:48px; }
  .svc-title { font-size:48px;font-weight:700;color:#fff;margin:0;font-family:'Syne','Segoe UI',sans-serif;letter-spacing:-0.5px;line-height:1.15; }
  .svc-grid { display:grid;grid-template-columns:1fr 1fr;gap:24px; }
  .svc-card { background:rgba(255,255,255,0.04);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,0.10);border-radius:20px;padding:33px 30px 36px;display:flex;flex-direction:column;gap:12px;position:relative;overflow:hidden;cursor:default;transition:border-color 0.3s ease,transform 0.3s ease,background 0.3s ease;animation:glowPulse 4s ease-in-out infinite; }
  .svc-card::before { content:'';position:absolute;inset:0;background:linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.07) 50%,transparent 70%);background-size:200% 100%;opacity:0;transition:opacity 0.3s ease;pointer-events:none;border-radius:inherit; }
  .svc-card:hover::before { opacity:1;animation:glassShimmer 1.2s ease forwards; }
  .svc-card:hover { border-color:rgba(124,58,237,0.65);transform:translateY(-6px);background:rgba(124,58,237,0.10);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px); }
  .svc-card:nth-child(1){animation-delay:0s}.svc-card:nth-child(2){animation-delay:1s}.svc-card:nth-child(3){animation-delay:2s}.svc-card:nth-child(4){animation-delay:3s}
  .svc-card-title { font-size:22px;font-weight:700;color:#fff;margin:0;line-height:1.35;font-family:'Syne','Segoe UI',sans-serif; }
  .svc-card-body { font-size:19px;color:rgba(255,255,255,0.58);line-height:1.65;margin:0; }
  .svc-right { flex:1 1 0;min-width:0;max-width:570px;height:840px;display:flex;align-items:center;justify-content:center; }
  .svc-right img { width:100%;height:100%;object-fit:contain;object-position:center;display:block; }
  @media(max-width:1200px){ .svc-right{max-width:420px;height:630px;} }
  @media(max-width:1024px){ .svc-inner{gap:36px;}.svc-right{max-width:300px;height:480px;}.svc-title{font-size:36px;}.svc-card-title{font-size:18px;}.svc-card-body{font-size:15px;}.svc-card{padding:24px 20px 26px;} }
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

const CSS3 = `
  @keyframes shimmerSweep { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
  .seo-section4 { padding: 80px 5%; background: linear-gradient(135deg, #000000 0%, #0d0020 40%, #150d2e 70%, #0a1a00 100%); font-family: 'DM Sans','Segoe UI',sans-serif; }
  .seo-section-title { text-align: center; font-family: 'Syne','Segoe UI',sans-serif; font-size: 2.2rem; font-weight: 800; color: #83cd15; margin-bottom: 48px; }
  .seo-services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1200px; margin: 0 auto; }
  .seo-services-last-row { display: flex; justify-content: center; gap: 24px; max-width: 1200px; margin: 24px auto 0; }
  .seo-services-last-row .seo-service-container { flex: 0 0 calc(33.333% - 16px); max-width: calc(33.333% - 16px); }
  .seo-service-container { cursor: pointer; }
  .seo-service-card { position: relative; background: #6D28D9; border-radius: 12px; padding: 25px; overflow: hidden; border: 1px solid #333; min-height: 380px; transition: min-height 0.35s ease, border-color 0.3s ease, box-shadow 0.3s ease; }
  .seo-service-container:hover .seo-service-card { min-height: 480px; border-color: #83cd15; box-shadow: 0 0 40px rgba(131,205,21,0.18), 0 20px 50px rgba(0,0,0,0.4); }
  .seo-card-shimmer { position: absolute; inset: 0; background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.07) 50%, transparent 70%); background-size: 200% 100%; pointer-events: none; animation: shimmerSweep 1.8s linear infinite; }
  .seo-icon-container { position: absolute; top: 2px; left: 50%; transform: translateX(-50%); width: 220px; height: 220px; display: flex; align-items: center; justify-content: center; }
  .seo-icon-container img { width: 100%; height: auto; }
  .seo-service-content { margin-top: 230px; text-align: center; }
  .seo-service-title { color: white; font-size: 20px; font-weight: bold; margin-bottom: 12px; line-height: 1.2; transition: color 0.3s ease; }
  .seo-service-container:hover .seo-service-title { color: #83cd15; }
  .seo-service-desc { color: white; font-size: 14px; line-height: 1.6; opacity: 0; max-height: 0; overflow: hidden; transition: all 0.35s ease; }
  .seo-service-container:hover .seo-service-desc { opacity: 1; max-height: 200px; margin-top: 12px; }
  
  @media(max-width:1024px) {
    .seo-services-grid, .seo-services-last-row {
      grid-template-columns: 1fr 1fr !important;
      display: grid !important;
      gap: 24px !important;
      margin: 0 auto !important;
    }
    .seo-services-last-row {
      margin-top: 24px !important;
    }
    .seo-services-last-row .seo-service-container {
      max-width: 100% !important;
      width: 100% !important;
    }
    .seo-service-card {
      min-height: auto !important;
      height: auto !important;
      padding: 24px !important;
    }
    .seo-icon-container {
      position: relative !important;
      top: 0 !important;
      left: 0 !important;
      transform: none !important;
      width: 100px !important;
      height: 100px !important;
      margin: 0 auto 16px !important;
    }
    .seo-service-content {
      margin-top: 0 !important;
    }
    .seo-service-desc {
      opacity: 1 !important;
      max-height: none !important;
      overflow: visible !important;
      margin-top: 12px !important;
    }
    .seo-service-container:hover .seo-service-card {
      min-height: auto !important;
      transform: none !important;
      box-shadow: none !important;
    }
  }
  @media(max-width:600px) {
    .seo-services-grid, .seo-services-last-row {
      grid-template-columns: 1fr !important;
    }
    .seo-section-title {
      font-size: 1.6rem !important;
    }
  }
`;

const CSS4 = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&display=swap');
  .seo-wrap { position: relative; background: #090e14; min-height: auto; display: flex; align-items: center; justify-content: center; padding: 56px 48px 88px; box-sizing: border-box; overflow: hidden; font-family: 'Barlow', sans-serif; }
  .seo-canvas { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; }
  .seo-inner-process { position: relative; z-index: 1; max-width: 1060px; width: 100%; }
  .seo-head { text-align: center; margin-bottom: 44px; opacity: 0; transform: translateY(22px); animation: seoFadeUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.15s forwards; }
  @keyframes seoFadeUp { to { opacity: 1; transform: translateY(0); } }
  .seo-title-v2 { font-family: 'Barlow', sans-serif; font-weight: 700; font-size: clamp(24px, 3.6vw, 42px); color: #ffffff; margin: 0 0 14px; letter-spacing: -0.015em; line-height: 1.15; }
  .seo-subtitle { font-family: 'Barlow', sans-serif; font-weight: 300; font-size: 13.5px; color: #6b7888; letter-spacing: 0.14em; text-transform: uppercase; margin: 0; }
  .seo-rows { display: flex; flex-direction: column; }
  .seo-row { display: grid; grid-template-columns: 64px 260px 1fr; align-items: start; gap: 0 40px; padding: 30px 0; position: relative; opacity: 0; transform: translateX(-20px); transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1); }
  .seo-row::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(160,100,255,0.12) 15%, rgba(160,100,255,0.22) 50%, rgba(160,100,255,0.12) 85%, transparent 100%); transition: opacity 0.3s ease; }
  .seo-row:last-child::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(160,100,255,0.12) 15%, rgba(160,100,255,0.22) 50%, rgba(160,100,255,0.12) 85%, transparent 100%); }
  .seo-row:hover::before { background: linear-gradient(90deg, transparent 0%, rgba(160,100,255,0.45) 20%, rgba(160,100,255,0.7) 50%, rgba(160,100,255,0.45) 80%, transparent 100%); }
  .seo-row.row-visible { opacity: 1; transform: translateX(0); }
  .seo-num { font-family: 'Barlow', sans-serif; font-weight: 300; font-size: 14px; color: #414d5c; letter-spacing: 0.04em; padding-top: 3px; }
  .seo-name { font-family: 'Barlow', sans-serif; font-weight: 700; font-size: clamp(15px, 1.8vw, 21px); color: #b06aff; line-height: 1.3; letter-spacing: 0.01em; padding-top: 2px; }
  .seo-desc-v2 { font-family: 'Barlow', sans-serif; font-weight: 500; font-size: clamp(11px, 1vw, 13px); color: #a8b4c7; line-height: 1.95; letter-spacing: 0.09em; text-transform: uppercase; padding-top: 4px; }
  @media (max-width: 700px) { .seo-wrap { padding: 44px 24px 68px; } .seo-head { margin-bottom: 28px; } .seo-row { grid-template-columns: 44px 1fr; grid-template-rows: auto auto; gap: 6px 14px; padding: 24px 0; } .seo-num { grid-column:1; grid-row:1; } .seo-name { grid-column:2; grid-row:1; } .seo-desc-v2 { grid-column:1/-1; grid-row:2; } }
`;

/* ══════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════ */
const mainServices = [
  { title: "Keyword Research & Strategy", body: "In-depth competitor analysis, precision keyword identification, and high-value target selection." },
  { title: "On-page SEO (content, meta, structure)", body: "Fully custom copywriting, optimized meta title structure, schema markup, and header tags." },
  { title: "Technical SEO (speed, indexing, fixes)", body: "Resolving duplicate content, canonical fixes, optimizing speed metrics, and crawl depth." },
  { title: "Website Optimization", body: "Comprehensive structural upgrades, semantic code refinements, and mobile responsive validation." },
  { title: "Content Optimization", body: "Fine-tuning page copy, strategic link density layout, and semantic content updates." },
  { title: "SEO for Blogs & Pages", body: "Structuring articles for rich snippets, long-tail keyword indexing, and visual link building." },
  { title: "Performance Tracking & Reporting", body: "Deep GSC audits, real-time rank tracking dashboards, and granular weekly insights." },
];

const seoDetailedServices = [
  { img: 'https://demo.sripadastudios.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-27.png', title: 'Search-Ready Websites', desc: 'Deep site health check, technical performance audit, site infrastructure review, and SEO foundations audit to ensure your website is built to rank.' },
  { img: 'https://demo.sripadastudios.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-28.png', title: 'Targeted Keyword Optimization', desc: 'Competitor keyword insights, precision keyword research, hyperlocal keyword targeting, and keyword performance tracking for maximum reach.' },
  { img: 'https://demo.sripadastudios.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-29.png', title: 'On-Page SEO', desc: 'Content built to rank, optimized meta titles and tags, smart site linking, and enhanced search appearance for every page.' },
  { img: 'https://demo.sripadastudios.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-30.png', title: 'Regional SEO Solutions', desc: 'Google Business Profile enhancements, location-based directory linking, online reputation management, and geo-targeted listing management.' },
  { img: 'https://demo.sripadastudios.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-31.png', title: 'Backlink Strategy', desc: 'Power domain links, content-driven outreach, trusted page links, and backlink gap analysis to build your domain authority.' },
];

const howItWorks = [
  { number: "01.", title: "In-Depth Search Audit", description: "WE SPECIALIZE IN CONDUCTING IN-DEPTH EVALUATIONS THAT HELP IDENTIFY CRITICAL SEARCH BOT BLOCKS, ANALYSE SEMANTIC CORRELATIONS, AND DEVELOP HIGH-VALUE TARGET KEYWORD STRATEGIES FOR STABLE GROWTH." },
  { number: "02.", title: "Action-Driven Strategy", description: "ALONG WITH CREATIVE CONTENT STRATEGIES, WE AT BUZZIWAH DELIVER AND EXECUTE COMPREHENSIVE ON-PAGE AND TECHNICAL SOLUTIONS THAT FIX ALL CRITICAL CRAWL ISSUES AND FUEL ORGANIC SEARCH VISIBILITY." },
  { number: "03.", title: "Continuous Enhancement", description: "THROUGH CONTINUOUS REAL-TIME TRACKING, INSIGHTFUL WEEKLY REPORTING, AND ONGOING STRATEGY REFINEMENTS, WE SECURE AND EXPAND YOUR ORGANIC SEARCH ENGINE DOMINANCE." },
];

const WhatIsSEOTodaySection = () => {
  return (
    <section className="relative overflow-hidden px-6 py-28 sm:px-10 lg:py-36" style={{ background: '#05030a' }}>
      {/* Background neon glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute right-[-10%] top-10 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(173,250,59,0.04)_0%,transparent_70%)] pointer-events-none animate-pulse" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 mx-auto max-w-[1100px] text-center">
        {/* Floating Tag */}
        <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-1.5 bg-[#adfa3b]/10 border border-[#adfa3b]/20 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#adfa3b] animate-ping" />
          <span className="text-[11px] font-mono font-black tracking-[0.25em] text-[#adfa3b] uppercase">THE DISCOVERY SHIFT</span>
        </div>

        {/* Big Question Heading */}
        <h2 className="buzziwah-section-heading" style={{ WebkitTextStroke:'2px white', color:'#adfa3b' }}>
          What is SEO <span className="text-[#adfa3b] italic">today</span>?
        </h2>

        {/* Text Body with customized font-styles and quotes */}
        <div className="max-w-4xl mx-auto">
          <p className="font-['Montserrat'] text-[clamp(20px,2.8vw,36px)] font-light text-white/90 leading-[1.4] tracking-wide mb-6">
            "SEO is how your brand gets <span className="text-[#adfa3b] font-black">found</span> without paying for every click."
          </p>
          <p className="font-sans text-[clamp(16px,1.8vw,21px)] text-white/50 leading-relaxed max-w-2xl mx-auto font-normal">
            When someone searches, your brand should show up. That’s what SEO does.
          </p>
        </div>

        {/* Decorative Graphic Lines */}
        <div className="mt-12 flex justify-center items-center gap-4">
          <div className="w-12 h-[1px] bg-white/10" />
          <span className="text-white/20 text-xs font-mono">✦</span>
          <div className="w-12 h-[1px] bg-white/10" />
        </div>
      </div>
    </section>
  );
};

const WhySEOMattersSection = () => {
  const points = [
    {
      title: "Increase Visibility",
      desc: "Climb to the top of Google page 1 to claim your authority and dominate your competitive space.",
      num: "01"
    },
    {
      title: "Bring In Organic Traffic",
      desc: "Funnel highly motivated, high-intent prospective buyers directly to your digital doors without ad fees.",
      num: "02"
    },
    {
      title: "Build Long-Term Credibility",
      desc: "Position your brand as the trusted industry leader—organic search ranking is the ultimate stamp of validation.",
      num: "03"
    }
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:py-28" style={{ background: '#070512' }}>
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute left-[-5%] bottom-10 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(173,250,59,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#adfa3b]/10 border border-[#adfa3b]/20 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#adfa3b] animate-pulse" />
            <span className="text-[10px] font-mono font-black tracking-widest text-[#adfa3b] uppercase">THE IMPACT</span>
          </div>
          <h2 className="buzziwah-section-heading">
            Why it <span className="text-[#adfa3b] italic">matters</span>?
          </h2>
          <p className="max-w-2xl mx-auto text-[#adfa3b] text-lg sm:text-xl font-bold tracking-tight font-sans">
            "Because if you’re not showing up, you’re missing out."
          </p>
        </div>

        {/* Benefits Grid */}
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
                <h3 style={{ fontFamily:"'Bebas Neue','Impact',sans-serif", fontSize:'clamp(24px,2.8vw,40px)', color:'#adfa3b', WebkitTextStroke:'1.5px white', letterSpacing:'0.04em', lineHeight:0.95, margin:'0 0 12px' }} className="group-hover:text-[#adfa3b] transition-colors">
                  {point.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 font-normal">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Compounding Ad Contrast Banner */}
        <div className="rounded-[32px] border border-dashed border-[#adfa3b]/20 bg-gradient-to-r from-[#0d1c07]/50 to-[#020502]/50 p-8 sm:p-12 backdrop-blur-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(173,250,59,0.04)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10">
            <span className="text-[10px] font-mono font-black tracking-[0.2em] text-[#adfa3b] uppercase mb-2 block font-bold">SUSTAINABLE MOMENTUM</span>
            <h3 className="buzziwah-section-heading" style={{ fontSize:'clamp(28px,3.5vw,48px)' }}>
              And unlike ads—it keeps working over time.
            </h3>
            <p className="text-white/60 text-sm max-w-lg leading-relaxed">
              Paid ads stop delivering the second your budget hits zero. Organic search authority delivers compounding dividends forever.
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
export default function SEOPage() {
  const heroContainerRef = useRef(null);
  const rowRefs = useRef([]);
  const canvasRef = useRef(null);

  /* ── animated background orbs ── */
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
      { x: 0.5,  y: 0.08, r: 0.30, color: "rgba(100,30,160,0.38)", speed: 0.0009 },
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

  /* ── staggered row reveal on scroll ── */
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
      <style>{CSS3}</style>
      <style>{CSS4}</style>

      {/* ── SECTION 1 — Hero ── */}
      <section className="page-banner-section" ref={heroContainerRef}>
        <div className="coded-page-banner">
          <div className="coded-page-banner-grid" />
          <div className="coded-page-banner-purple-glow" />
          <div className="coded-page-banner-green-glow" />

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

          {/* Floating SEO rank badges */}
          <FloatingSEOBadges />

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
                  containerRef={heroContainerRef}
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

      {/* ── SEO Stats Strip ── */}
      <SEOStatsStrip />

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            
            {/* Box 1 (Strategic Growth) - Spans 2 Columns */}
            <div className="lg:col-span-2 p-8 sm:p-10 rounded-[32px] bg-white/[0.015] border border-white/5 flex flex-col justify-between items-start min-h-[280px]">
              <div>
                <h2 className="buzziwah-section-heading" style={{ fontSize:'clamp(20px,2.2vw,34px)' }}>
                  Unlocking Organic Authority
                </h2>
                <p className="text-[16px] text-white/75 leading-relaxed max-w-[640px]">
                  We scale organic clicks and establish absolute dominance over Google search results. Driving high-quality customer traffic that keeps growing even when your ad budget stops.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="http://linkedin.com/in/satish-ms-b7842a8b"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-['Montserrat'] text-xs font-bold uppercase tracking-[0.08em] text-white border-2 border-transparent transition-all duration-200 hover:text-[#07030f]"
                  style={{ background: 'linear-gradient(135deg,#7c3aed,#9333ea)', transition: 'background 0.2s, color 0.2s, border-color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#07030f'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(135deg,#7c3aed,#9333ea)'; e.currentTarget.style.color = '#ffffff'; }}
                >
                  Know More
                </a>
              </div>
            </div>

            {/* Box 2 (Interactive Visual) - Spans 1 Column */}
            <div className="rounded-[32px] bg-white/[0.015] border border-white/5 relative overflow-hidden group min-h-[280px] p-0 flex">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0%,transparent_70%)] opacity-30 group-hover:opacity-60 transition-opacity duration-500 z-10 pointer-events-none" />
              <img 
                src="/seo/seo_dashboard.png" 
                alt="SEO Dashboard Statistics"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105" 
              />
            </div>

            {/* Four Symmetrical Key Point Boxes */}
            {[
              { num: '01', text: 'More than 1,200+ target keywords secured in Google top #3 search results for compounding domain value.' },
              { num: '02', text: 'Delivering massive organic reach: averaging over 4.2M+ organic impressions and 145K+ organic clicks monthly.' },
              { num: '03', text: 'Crafted high-authority rank strategies and technical audits for Shield Security, Omni Travel, and Cloud Storage.' },
              { num: '04', text: 'Local Map Pack dominance and semantic core directories that increase direct customer bookings by up to 3x.' }
            ].map((box, i) => (
              <div key={i} className="p-8 rounded-[24px] bg-white/[0.012] border border-white/5 hover:border-[#adfa3b]/20 hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between min-h-[180px]">
                <span className="text-2xl font-black text-white/10 font-mono">{box.num}</span>
                <p className="text-[14px] text-white/70 font-medium leading-relaxed mt-4">{box.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 1.5 — What is SEO Today ── */}
      <WhatIsSEOTodaySection />

      {/* ── SECTION 2 — Services We Offer ── */}
      <section className="svc-section">
        <div className="svc-dotgrid-panel" />
        <div className="svc-tablet svc-tablet-1" /><div className="svc-tablet svc-tablet-2" /><div className="svc-tablet svc-tablet-3" /><div className="svc-tablet svc-tablet-4" /><div className="svc-tablet svc-tablet-5" /><div className="svc-tablet svc-tablet-6" />
        <div className="svc-inner">
          <div className="svc-left">
            <h2 className="buzziwah-section-heading">SEO in Action</h2>
            <div className="svc-grid">
              {mainServices.map((s, i) => (
                <div className="svc-card" key={i}>
                  <p className="svc-card-title">{s.title}</p>
                  <p className="svc-card-body">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="svc-right"><img src="/seo/Buzziwah SEO page.png" alt="Buzziwah SEO Services" /></div>
        </div>
      </section>

      {/* ── SECTION 3 — Detailed Services ── */}
      <section className="seo-section4">
        <h2 className="buzziwah-section-heading" style={{ textAlign:'center', marginBottom:'32px' }}>Our SEO services that drive Success</h2>
        <div className="seo-services-grid">
          {seoDetailedServices.slice(0, 3).map((s, i) => (
            <div className="seo-service-container" key={i}>
              <div className="seo-service-card">
                <div className="seo-card-shimmer" /><div className="seo-icon-container"><img src={s.img} alt={s.title} /></div>
                <div className="seo-service-content"><div className="seo-service-title">{s.title}</div><p className="seo-service-desc">{s.desc}</p></div>
              </div>
            </div>
          ))}
        </div>
        <div className="seo-services-last-row">
          {seoDetailedServices.slice(3).map((s, i) => (
            <div className="seo-service-container" key={i}>
              <div className="seo-service-card">
                <div className="seo-card-shimmer" /><div className="seo-icon-container"><img src={s.img} alt={s.title} /></div>
                <div className="seo-service-content"><div className="seo-service-title">{s.title}</div><p className="seo-service-desc">{s.desc}</p></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 3.5 — Why SEO Matters ── */}
      <WhySEOMattersSection />

      {/* ── SECTION 4 — Process ── */}
      <section className="seo-wrap">
        <canvas ref={canvasRef} className="seo-canvas" />
        <div className="seo-inner-process">
          <div className="seo-head">
            <h2 className="buzziwah-section-heading">How we make SEO work for you</h2>
            <p className="seo-subtitle">We don&apos;t follow trends. We set the standard.</p>
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
