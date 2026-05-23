import React, { useRef, useState, useEffect } from 'react';
import { FaVideo, FaFilm, FaCamera, FaMicrophone, FaPlay, FaEdit, FaPalette, FaLightbulb, FaRocket } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';
import { MdVideoLibrary } from 'react-icons/md';
import '../home/Home.css';

/* ══════════════════════════════════════════════════════
   COUNT-UP HOOK
══════════════════════════════════════════════════════ */
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
    let s; const step = ts => { if (!s) s = ts; const p = Math.min((ts - s) / duration, 1); const e = 1 - Math.pow(1 - p, 3); setCount(Math.floor(end * e)); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }, [inView, end, duration]);
  return [ref, count];
};

/* ══════════════════════════════════════════════════════
   STATS STRIP
══════════════════════════════════════════════════════ */
const VPStatsStrip = () => {
  const stats = [
    { end: 600, suffix: '+', label: 'Videos Produced' },
    { end: 50, suffix: 'M+', label: 'Total Views' },
    { end: 600, suffix: 'sqft', label: 'In-House Studio' },
    { end: 98, suffix: '%', label: 'On-Time Delivery' },
    { end: 6, suffix: 'x', label: 'Avg Engagement Lift' },
  ];
  return (
    <div style={{ background: '#060811', borderTop: '1px solid rgba(173,250,59,0.18)', borderBottom: '1px solid rgba(173,250,59,0.18)', padding: '22px 5%', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(168,85,247,0.06) 0%, rgba(173,250,59,0.04) 50%, rgba(168,85,247,0.06) 100%)', pointerEvents: 'none' }} />
      <div style={{ display: 'flex', gap: 'clamp(24px,4vw,60px)', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {stats.map((s, i) => {
          const [ref, count] = useCountUp(s.end, 1600 + i * 200);
          return (
            <div key={i} ref={ref} style={{ textAlign: 'center', minWidth: '90px' }}>
              <div style={{ fontFamily: "'Bebas Neue',Impact,sans-serif", fontSize: 'clamp(26px,3.5vw,44px)', color: '#adfa3b', letterSpacing: '0.03em', lineHeight: 1, textShadow: '0 0 20px rgba(173,250,59,0.3)' }}>
                {count}{s.suffix}
              </div>
              <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.18em', marginTop: '4px', fontWeight: 600 }}>
                {s.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════
   YOUTUBE API + PLAYER
══════════════════════════════════════════════════════ */
let ytApiPromise = null;
const loadYoutubeApi = () => {
  if (ytApiPromise) return ytApiPromise;
  ytApiPromise = new Promise((resolve) => {
    if (window.YT && window.YT.Player) { resolve(window.YT); return; }
    const existingScript = document.getElementById('youtube-iframe-api');
    if (existingScript) { window.onYouTubeIframeAPIReady = () => resolve(window.YT); return; }
    const tag = document.createElement('script');
    tag.id = 'youtube-iframe-api';
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    const prevReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => { if (prevReady) prevReady(); resolve(window.YT); };
  });
  return ytApiPromise;
};

const CustomYoutubePlayer = ({ videoId, title, height = '100%' }) => {
  const playerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerId = useRef(`yt-player-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    let active = true;
    loadYoutubeApi().then((YT) => {
      if (!active) return;
      playerRef.current = new YT.Player(playerId.current, {
        events: {
          onReady: (event) => { if (!active) return; event.target.mute(); event.target.playVideo(); setIsMuted(true); setIsPlaying(true); },
          onStateChange: (event) => { if (!active) return; setIsPlaying(event.data === 1); }
        }
      });
    });
    return () => { active = false; if (playerRef.current && playerRef.current.destroy) playerRef.current.destroy(); };
  }, [videoId]);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!playerRef.current) return;
    try { if (isMuted) { playerRef.current.unMute(); setIsMuted(false); } else { playerRef.current.mute(); setIsMuted(true); } } catch (err) {}
  };

  const togglePlay = () => {
    if (!playerRef.current) return;
    try { if (isPlaying) { playerRef.current.pauseVideo(); setIsPlaying(false); } else { playerRef.current.playVideo(); setIsPlaying(true); } } catch (err) {}
  };

  return (
    <div style={{ position: 'relative', width: '100%', height, background: '#000', borderRadius: 'inherit', overflow: 'hidden' }}>
      <iframe
        id={playerId.current}
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=0&modestbranding=1&rel=0&showinfo=0&autoplay=1&mute=1&playsinline=1&loop=1&playlist=${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
      />
      <div onClick={togglePlay} style={{ position: 'absolute', inset: 0, cursor: 'pointer', zIndex: 1 }} />
      <button onClick={toggleMute} type="button" style={{ position: 'absolute', bottom: '12px', right: '12px', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.75)', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', zIndex: 2, color: '#fff', padding: 0 }}
        onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#7c3aed'; }}
        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.75)'; }}
      >
        {isMuted ? (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="1" y1="1" x2="23" y2="23" /><path d="M9 9v6a3 3 0 0 0 3 3h1.586l4.707 4.707A1 1 0 0 0 20 22V4a1 1 0 0 0-1.707-.707L13.586 8H12a3 3 0 0 0-3 3z" />
          </svg>
        ) : (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        )}
      </button>
    </div>
  );
};

/* ══════════════════════════════════════════════════════
   FAQ
══════════════════════════════════════════════════════ */
const vpFaqs = [
  { q: 'What video production services does Buzziwah Studio offer?', a: 'We offer end-to-end video production including lyrical videos, ad films, reels, corporate videos, political campaign videos, and celebrity bio videos.' },
  { q: 'How long does it take to produce a video?', a: 'Timelines vary by project. A reel or lyrical video typically takes 3–5 days, while a full ad film can take 1–2 weeks depending on complexity and shoot requirements.' },
  { q: 'Do you handle both shooting and editing?', a: 'Yes. We manage the complete pipeline — concept, scripting, shoot coordination, editing, color grading, and final delivery.' },
  { q: 'What brands have you worked with?', a: 'We have worked with Fitness Factory, Samrat Restaurant, Movi Garage, HearFon, Little Kidz, EK Entertainers, Garuda Motion Pictures, and many more.' },
  { q: 'Can you create videos for social media platforms?', a: 'Absolutely. We produce platform-optimized content for Instagram Reels, YouTube Shorts, Facebook, and LinkedIn — all formatted for maximum reach and engagement.' },
  { q: 'How do I get started with a video project?', a: "Simply reach out via our contact page or click 'Get Started'. We'll schedule a brief call to understand your vision and put together a custom production plan." },
];

const VPFaqCard = ({ item, idx }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-card ${open ? 'open' : ''}`}>
      <button className="faq-question" type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{`${idx + 1}. ${item.q}`}</span>
        <span className="faq-arrow">⌄</span>
      </button>
      <div className="faq-answer">{item.a}</div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════
   1. HERO SECTION — Banner + Showreel
══════════════════════════════════════════════════════ */
const VPHeroSection = () => {
  return (
    <section style={{
      position: 'relative',
      background: 'linear-gradient(160deg, #07030f 0%, #0d0621 50%, #060811 100%)',
      paddingTop: 'calc(76px + 4rem)',
      paddingBottom: '5rem',
      overflow: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        @keyframes vpHeroGlow { 0%,100%{opacity:0.6} 50%{opacity:1} }
        @keyframes vpFloat { 0%,100%{transform:translateY(0)rotate(var(--r,0deg))} 50%{transform:translateY(-12px)rotate(var(--r,0deg))} }
      `}</style>

      {/* BG glows */}
      <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '55%', height: '70%', background: 'radial-gradient(circle, rgba(124,58,237,0.28) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', animation: 'vpHeroGlow 10s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '-5%', right: '-5%', width: '50%', height: '60%', background: 'radial-gradient(circle, rgba(173,250,59,0.18) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none', animation: 'vpHeroGlow 13s ease-in-out infinite 2s' }} />

      {/* Floating badges */}
      {[
        { label: '🎬 AD FILMS', x: '3%', y: '18%', '--r': '-6deg', delay: '0s', bg: '#adfa3b', col: '#060811' },
        { label: '📽️ REELS', x: '87%', y: '20%', '--r': '5deg', delay: '1s', bg: 'rgba(124,58,237,0.85)', col: '#fff' },
        { label: '🎙️ PODCASTS', x: '4%', y: '72%', '--r': '4deg', delay: '0.6s', bg: 'rgba(255,255,255,0.06)', col: '#adfa3b' },
        { label: '📸 SHOOTS', x: '85%', y: '74%', '--r': '-4deg', delay: '1.8s', bg: 'rgba(173,250,59,0.1)', col: '#adfa3b' },
      ].map((b, i) => (
        <div key={i} style={{ position: 'absolute', left: b.x, top: b.y, background: b.bg, color: b.col, fontFamily: "'Bebas Neue',Impact,sans-serif", fontSize: '11px', letterSpacing: '0.18em', padding: '5px 12px', borderRadius: '6px', border: '1px solid rgba(173,250,59,0.2)', '--r': b['--r'], animation: `vpFloat 8s ease-in-out infinite`, animationDelay: b.delay, pointerEvents: 'none', zIndex: 2, whiteSpace: 'nowrap', backdropFilter: 'blur(8px)' }}>
          {b.label}
        </div>
      ))}

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)', position: 'relative', zIndex: 3 }}>
        {/* Label */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#adfa3b', padding: '6px 18px', border: '1px solid rgba(173,250,59,0.2)', borderRadius: '999px', background: 'rgba(173,250,59,0.06)', display: 'inline-block' }}>
            ✦ PRODUCTION SOLUTIONS ✦
          </span>
        </div>

        {/* Main heading */}
        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <h1 style={{ fontFamily: "'Bebas Neue',Impact,sans-serif", fontSize: 'clamp(52px,9vw,110px)', lineHeight: 0.88, margin: 0, letterSpacing: '0.02em' }}>
            <span style={{ color: '#adfa3b', WebkitTextStroke: '2px white', display: 'block' }}>CONTENT IS KING.</span>
            <span style={{ color: 'transparent', WebkitTextStroke: '2px #a855f7', display: 'block' }}>PRODUCTION IS CROWN.</span>
          </h1>
        </div>
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(14px,1.6vw,18px)', maxWidth: '600px', margin: '0 auto 48px', lineHeight: 1.7, letterSpacing: '0.01em' }}>
          Combine creative direction with strong execution so every piece of content looks right, feels right, and works right.
        </p>

        {/* Showreel video */}
        <div style={{ borderRadius: '24px', overflow: 'hidden', aspectRatio: '16/9', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(173,250,59,0.08)', maxWidth: '960px', margin: '0 auto' }}>
          <CustomYoutubePlayer videoId="NgMFaxvs5rE" title="Buzziwah Showreel" height="100%" />
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════
   2. SERVICES SECTION — Making Content Look Right
══════════════════════════════════════════════════════ */
const VPServicesSection = () => {
  const services = [
    { icon: <FaFilm />, text: 'Brand Films & Corporate Videos' },
    { icon: <FaPlay />, text: 'Ad Films & Performance Creatives' },
    { icon: <MdVideoLibrary />, text: 'Reels & Short-form Content' },
    { icon: <FaMicrophone />, text: 'Podcast Production' },
    { icon: <FaCamera />, text: 'Product & Service Shoots' },
    { icon: <FaVideo />, text: 'Social Media Content Shoots' },
    { icon: <FaEdit />, text: 'Scriptwriting & Creative Direction' },
    { icon: <FaLightbulb />, text: 'Shoot Planning & Execution' },
    { icon: <FaEdit />, text: 'Video Editing & Post-Production' },
    { icon: <FaPalette />, text: 'Motion Graphics & Visual Enhancements' },
  ];

  return (
    <section style={{ background: 'linear-gradient(145deg, #06040e 0%, #0d0621 50%, #06040e 100%)', padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,48px)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.25em', color: '#a855f7', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>✦ WHAT WE DO ✦</span>
          <h2 style={{ fontFamily: "'Bebas Neue',Impact,sans-serif", fontSize: 'clamp(32px,5vw,62px)', color: '#fff', WebkitTextStroke: '2px rgba(168,85,247,0.5)', letterSpacing: '0.04em', lineHeight: 0.9, margin: '0 0 14px' }}>
            Making Content <span style={{ color: '#adfa3b', WebkitTextStroke: '2px white' }}>Look Right</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(14px,1.5vw,16px)', maxWidth: '560px', lineHeight: 1.7 }}>
            From high-impact commercials to scroll-stopping short-form media — we handle the entire concept-to-delivery lifecycle.
          </p>
        </div>

        {/* Services grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '14px' }}>
          {services.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 20px', borderRadius: '16px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', transition: 'all 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.border = '1px solid rgba(168,85,247,0.35)'; e.currentTarget.style.background = 'rgba(168,85,247,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.025)'; }}
            >
              <span style={{ color: '#a855f7', fontSize: '16px', flexShrink: 0 }}>{s.icon}</span>
              <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', fontWeight: 600, lineHeight: 1.4 }}>{s.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════
   3. STUDIO SECTION — In-House + Nearby Studio
══════════════════════════════════════════════════════ */
const VPStudioSection = () => {
  return (
    <section style={{ background: 'linear-gradient(145deg, #0a0614 0%, #130824 50%, #0a0614 100%)', padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,48px)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.25em', color: '#adfa3b', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>✦ INFRASTRUCTURE ✦</span>
          <h2 style={{ fontFamily: "'Bebas Neue',Impact,sans-serif", fontSize: 'clamp(32px,5vw,62px)', color: '#adfa3b', WebkitTextStroke: '2px white', letterSpacing: '0.04em', lineHeight: 0.9, margin: 0 }}>
            BUILT TO PRODUCE
          </h2>
        </div>

        {/* Comparison table */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '0', borderRadius: '28px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }}>

          {/* LEFT — Other Studios */}
          <div style={{ background: 'linear-gradient(145deg, #0e0c18, #130f20)', padding: 'clamp(28px,4vw,44px)', borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div>
              <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.28em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>TYPICAL STUDIOS</span>
              <h3 style={{ fontFamily: "'Bebas Neue',Impact,sans-serif", fontSize: 'clamp(22px,2.8vw,34px)', color: 'rgba(255,255,255,0.25)', WebkitTextStroke: '1px rgba(255,255,255,0.12)', letterSpacing: '0.06em', lineHeight: 1, margin: 0 }}>
                OTHERS
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Equipment', val: 'Basic DSLR / entry-level rigs' },
                { label: 'Studio Space', val: 'Single room, limited set options' },
                { label: 'Lighting', val: 'Generic softboxes only' },
                { label: 'Greenroom', val: 'Often unavailable' },
                { label: 'Booking', val: 'Rigid fixed schedules' },
                { label: 'Support', val: 'Crew not included' },
                { label: 'Turnaround', val: 'Slow, 3–5 day buffer' },
                { label: 'Live Broadcast', val: 'Not supported' },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '12px 14px', borderRadius: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                  <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase' }}>{row.label}</span>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '11px', color: 'rgba(239,68,68,0.6)' }}>✕</span>
                    {row.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Nearby Studio */}
          <div style={{ background: 'linear-gradient(145deg, #16092e, #1f0b3a)', padding: 'clamp(28px,4vw,44px)', display: 'flex', flexDirection: 'column', gap: '28px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(173,250,59,0.12), transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-60px', left: '-40px', width: '180px', height: '180px', background: 'radial-gradient(circle, rgba(168,85,247,0.1), transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.28em', color: '#adfa3b', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>✦ CO-WORKING PARTNER</span>
              <h3 style={{ fontFamily: "'Bebas Neue',Impact,sans-serif", fontSize: 'clamp(22px,2.8vw,34px)', color: '#adfa3b', WebkitTextStroke: '1.5px white', letterSpacing: '0.06em', lineHeight: 1, margin: '0 0 6px' }}>
                NEARBY STUDIO
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', lineHeight: 1.6, margin: 0 }}>
                Scale-on-demand production with premium infrastructure.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative', zIndex: 1 }}>
              {[
                { label: 'Equipment', val: 'Premium RED & Arri cinema rigs' },
                { label: 'Studio Space', val: 'Multi-set soundstages, flexible configs' },
                { label: 'Lighting', val: 'Pro-grade light grid, full rig control' },
                { label: 'Greenroom', val: 'Comfortable, dedicated talent rooms' },
                { label: 'Booking', val: 'Flexible slots, on-demand scheduling' },
                { label: 'Support', val: 'Full crew & production team on-site' },
                { label: 'Turnaround', val: 'Fast-track, same-day options available' },
                { label: 'Live Broadcast', val: 'Full live-stream setup supported' },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '12px 14px', borderRadius: '12px', background: 'rgba(173,250,59,0.04)', border: '1px solid rgba(173,250,59,0.12)' }}>
                  <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.18em', color: 'rgba(173,250,59,0.5)', textTransform: 'uppercase' }}>{row.label}</span>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '11px', color: '#adfa3b' }}>✓</span>
                    {row.val}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto' }}>
              <a
                href="https://nearbystudio.in/studios"
                target="_blank"
                rel="noreferrer"
                style={{ display: 'block', width: '100%', padding: '16px', textAlign: 'center', fontFamily: "'Montserrat',sans-serif", fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#000', background: '#adfa3b', borderRadius: '14px', textDecoration: 'none', transition: 'all 0.25s', boxShadow: '0 8px 28px rgba(173,250,59,0.25)' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#a855f7'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(168,85,247,0.35)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#adfa3b'; e.currentTarget.style.color = '#000'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(173,250,59,0.25)'; }}
              >
                Book Studio Space →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════
   4. ALTERNATING SHOWCASE — Production by Buzziwah
══════════════════════════════════════════════════════ */
const productions = [
  {
    tag: 'AD FILMS & PERFORMANCE CREATIVES',
    title: 'HearFon Healthcare',
    desc: 'High-impact ad film crafted for HearFon — blending emotional storytelling with direct response execution to drive leads and brand recall.',
    client: 'HearFon · Feat: Swathi Rajkumar',
    videoId: 'FO7aj_EiAuo',
    accent: '#adfa3b',
  },
  {
    tag: 'BRAND FILMS & FITNESS',
    title: 'Fitness Factory',
    desc: 'Cinematic brand film for Bengaluru\'s leading fitness brand — featuring Yash Shetty, Sudhi & Vardhan. Shot and edited in-house by Buzziwah.',
    client: 'Fitness Factory · Feat: Yash Shetty',
    videoId: 'NgMFaxvs5rE',
    accent: '#a855f7',
  },
  {
    tag: 'CELEBRITY BIO FILMS',
    title: 'Dr. Ramesh Aravind',
    desc: 'A high-production biography film for Dr. Ramesh Aravind — actor, director, and speaker. Premium cinematic treatment for South Indian cinema.',
    client: 'Dr. Ramesh Aravind · Actor · Director',
    videoId: 'sN5mGM2XepE',
    accent: '#adfa3b',
  },
  {
    tag: 'CORPORATE & BRAND FILMS',
    title: 'Life at Pace',
    desc: 'Corporate brand video capturing the fast-paced spirit of industry leaders. Produced for C-suite executives with a focus on authenticity and authority.',
    client: 'Life at Pace · Corporate',
    videoId: 'Y7xG75PWweE',
    accent: '#a855f7',
  },
  {
    tag: 'PROMO & EVENT VIDEOS',
    title: 'Rajyotsava Promo',
    desc: 'Cultural celebration video for Karnataka Rajyotsava featuring Little Kidz — vibrant, emotional, and built for maximum shareability.',
    client: 'Little Kidz · Karnataka Rajyotsava',
    videoId: 'J2XUohFcjuk',
    accent: '#adfa3b',
  },
  {
    tag: 'AUTOMOTIVE & BRAND PROMO',
    title: 'Movi Garage',
    desc: 'Cinematic promo video for Movi Garage — premium automotive branding executed with high-production visuals and dynamic motion work.',
    client: 'Movi Garage · Premium Auto',
    videoId: 'WzCfJau2NeU',
    accent: '#a855f7',
  },
  {
    tag: 'POLITICAL AD FILMS',
    title: 'Campaign Ad Film',
    desc: 'Precisely crafted political ad film featuring Priya Shatamarshan — strategic messaging, strong visuals, and audience-focused storytelling.',
    client: 'Feat: Priya Shatamarshan',
    videoId: 'H3yMzPU5yrM',
    accent: '#adfa3b',
  },
  {
    tag: 'LYRICAL & MUSIC VIDEOS',
    title: 'Lyrical Showcase',
    desc: 'Transforming music into emotion through visuals, motion typography, and story — one lyric at a time. A showcase of our video editing artistry.',
    client: 'Buzziwah Music Division',
    videoId: 'wtNWlT8TJfU',
    accent: '#a855f7',
  },
];

const VPProductionRow = ({ item, index }) => {
  const reversed = index % 2 !== 0;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el); return () => obs.disconnect();
  }, []);

  const textBlock = (
    <div style={{
      flex: '1 1 min(100%, 400px)',
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '18px',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateX(0)' : `translateX(${reversed ? '40px' : '-40px'})`,
      transition: 'opacity 0.7s ease, transform 0.7s ease',
      position: 'relative',
      zIndex: 2,
    }}>
      <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.25em', color: item.accent, textTransform: 'uppercase', padding: '5px 14px', border: `1px solid ${item.accent}30`, background: `${item.accent}10`, borderRadius: '999px', display: 'inline-block', width: 'fit-content' }}>
        {item.tag}
      </span>
      <h2 style={{ fontFamily: "'Bebas Neue',Impact,sans-serif", fontSize: 'clamp(32px,4vw,56px)', color: '#fff', WebkitTextStroke: `2px ${item.accent}`, letterSpacing: '0.04em', lineHeight: 0.9, margin: 0, wordBreak: 'break-word' }}>
        {item.title}
      </h2>
      <div style={{ width: '40px', height: '3px', background: item.accent, borderRadius: '2px' }} />
      <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(13px,1.4vw,15px)', lineHeight: 1.75, margin: 0 }}>
        {item.desc}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: `1px solid ${item.accent}20`, width: 'fit-content' }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.accent, flexShrink: 0, boxShadow: `0 0 8px ${item.accent}` }} />
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{item.client}</span>
      </div>
    </div>
  );

  const videoBlock = (
    <div style={{
      flex: '1 1 min(100%, 520px)',
      minWidth: 0,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateX(0) scale(1)' : `translateX(${reversed ? '-40px' : '40px'}) scale(0.97)`,
      transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
      position: 'relative',
      zIndex: 1,
    }}>
      <div style={{ borderRadius: '20px', overflow: 'hidden', aspectRatio: '16/10', border: `1px solid ${item.accent}20`, boxShadow: `0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)` }}>
        <CustomYoutubePlayer videoId={item.videoId} title={item.title} height="100%" />
      </div>
    </div>
  );

  return (
    <div ref={ref} style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'clamp(28px,5vw,64px)',
      alignItems: 'center',
      flexDirection: reversed ? 'row-reverse' : 'row',
      padding: 'clamp(48px,6vw,80px) 0',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
    }}>
      {textBlock}
      {videoBlock}
    </div>
  );
};

const VPAlternatingShowcase = () => {
  const [ytActiveIdx, setYtActiveIdx] = useState(0);

  const ytVideos = [
    { id: 'S4Gp6JwiJWU', label: 'Organic Video A' },
    { id: 'XT1aAmrhdtk', label: 'Organic Video B' }
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
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a855f7] mb-3">Portfolio Showcase</p>
          <h2 className="font-['Montserrat'] text-[clamp(28px,4vw,52px)] font-black uppercase text-white leading-tight">
            Production by <span className="text-[#adfa3b] italic">Buzziwah</span>
          </h2>
          <p className="mt-4 max-w-xl text-white/50 text-sm sm:text-base leading-relaxed mx-auto">
            A look at the cinematic work, performance-driven creatives, and premium content we've built for our partners.
          </p>
          <div className="h-[2px] w-24 bg-[#a855f7] mx-auto mt-6 rounded-full" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-20 font-sans">
          
          {/* ST-01: Landscape Showcase Videos - Aanya Hospital (Col span 3) */}
          <div className="lg:col-span-3 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-mono text-white/30 tracking-widest font-black uppercase">ST-01 // LANDSCAPE SHOWCASE</span>
              </div>
              <h3 className="font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wider mb-3 group-hover:text-[#adfa3b] transition-colors">
                Aanya Hospital Landscape Showcase
              </h3>
              <p className="text-white/50 text-[11px] leading-relaxed mb-5">
                High-fidelity cinematic landscape showcase capturing the advanced medical infrastructure and premium patient care environment of Aanya Hospital.
              </p>
            </div>
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-black">
              <iframe 
                title="Aanya Hospital Landscape Showcase"
                src="https://www.youtube.com/embed/9DsV_IDSHvM?autoplay=1&mute=1&playlist=9DsV_IDSHvM&loop=1"
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* ST-02: Podcast Shoots - LilBeez (Col span 3) */}
          <div className="lg:col-span-3 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-mono text-white/30 tracking-widest font-black uppercase">ST-02 // PODCAST SHOOTS</span>
              </div>
              <h3 className="font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wider mb-3 group-hover:text-[#adfa3b] transition-colors">
                LilBeez Podcast Shoots
              </h3>
              <p className="text-white/50 text-[11px] leading-relaxed mb-5">
                Expert multi-camera podcast production and post-production creative editing for LilBeez, built to capture attention and organic thought authority.
              </p>
            </div>
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-black">
              <iframe 
                title="LilBeez Podcast Shoots"
                src="https://www.youtube.com/embed/WtMC0Vj6fYo?autoplay=1&mute=1&playlist=WtMC0Vj6fYo&loop=1"
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* ST-03: YouTube Videos (Col span 4) */}
          <div className="lg:col-span-4 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-mono text-white/30 tracking-widest font-black uppercase">ST-03 // YOUTUBE PRODUCTION</span>
                <div className="flex bg-white/5 p-1 rounded-lg border border-white/10">
                  {ytVideos.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setYtActiveIdx(idx)}
                      className={`px-3 py-1 rounded text-[8px] font-mono tracking-widest font-black uppercase transition-all ${
                        ytActiveIdx === idx ? 'bg-[#adfa3b] text-black' : 'text-white/60 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
              <h3 className="font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wider mb-3 group-hover:text-[#adfa3b] transition-colors">
                High-Retention YouTube Content
              </h3>
              <p className="text-white/50 text-[11px] leading-relaxed mb-5">
                Cinematic, search-optimized educational campaigns designed to drive viewer retention and high engagement rates.
              </p>
            </div>
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-black">
              <iframe 
                key={ytActiveIdx}
                title={ytVideos[ytActiveIdx].label}
                src={`https://www.youtube.com/embed/${ytVideos[ytActiveIdx].id}?autoplay=1&mute=1&playlist=${ytVideos[ytActiveIdx].id}&loop=1`}
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* ST-04: Ad Films & Performance Creatives - HearFon, Lilbeez (Col span 2) */}
          <div className="lg:col-span-2 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-mono text-white/30 tracking-widest font-black uppercase">ST-04 // AD COMMERCIALS</span>
              </div>
              <h3 className="font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wider mb-3 group-hover:text-[#adfa3b] transition-colors">
                Performance Ad Films
              </h3>
              <p className="text-white/50 text-[11px] leading-relaxed mb-5">
                High-impact commercial ad films produced for HearFon and Lilbeez, blending emotional triggers with solid performance marketing metrics.
              </p>
            </div>
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-black">
              <iframe 
                title="Performance Ad Films"
                src="https://www.youtube.com/embed/XTkG1AfAcP0?autoplay=1&mute=1&playlist=XTkG1AfAcP0&loop=1"
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* ST-05: AI-powered Content Production (Col span 2) */}
          <div className="lg:col-span-2 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-mono text-white/30 tracking-widest font-black uppercase">ST-05 // AI PRODUCTION</span>
              </div>
              <h3 className="font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wider mb-3 group-hover:text-[#adfa3b] transition-colors">
                AI-Powered Content
              </h3>
              <p className="text-white/50 text-[11px] leading-relaxed mb-5">
                A showcase of our advanced AI-driven visual content generation and marketing asset automation.
              </p>
            </div>
            {/* Phone player mockup */}
            <div className="w-full h-[240px] bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center p-1.5">
              <video 
                src="/SERICES CONTENTS/AI_CONTENT.mp4"
                className="w-full h-full rounded-xl object-contain bg-black"
                controls
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          {/* ST-06: Model & Product Photoshoots (Col span 2) */}
          <div className="lg:col-span-2 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-mono text-white/30 tracking-widest font-black uppercase">ST-06 // PHOTOSHOOTS</span>
              </div>
              <h3 className="font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wider mb-3 group-hover:text-[#adfa3b] transition-colors">
                Model & Product Shoots
              </h3>
              <p className="text-white/50 text-[11px] leading-relaxed mb-5">
                Cinematic model showcases, high-fidelity lifestyle photoshoots, and product campaigns for Kovedaa and Fitness Factory.
              </p>
            </div>
            {/* Phone player mockup */}
            <div className="w-full h-[240px] bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center p-1.5">
              <video 
                src="/SERICES CONTENTS/PHOTOSHOOT_REEL.mp4"
                className="w-full h-full rounded-xl object-contain bg-black"
                controls
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          {/* ST-07: Explainer Videos (Col span 2) */}
          <div className="lg:col-span-2 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-mono text-white/30 tracking-widest font-black uppercase">ST-07 // EXPLAINER VIDEOS</span>
              </div>
              <h3 className="font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wider mb-3 group-hover:text-[#adfa3b] transition-colors">
                Explainer Videos
              </h3>
              <p className="text-white/50 text-[11px] leading-relaxed mb-5">
                Motion graphics-heavy, highly educational explainer videos structured for rapid message comprehension.
              </p>
            </div>
            {/* Phone player mockup */}
            <div className="w-full h-[240px] bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center p-1.5">
              <video 
                src="/SERICES CONTENTS/EXPLAINER_REEL.mp4"
                className="w-full h-full rounded-xl object-contain bg-black"
                controls
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          {/* ST-08: BTS & Green Screen Productions (Col span 6) */}
          <div className="lg:col-span-6 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-mono text-white/30 tracking-widest font-black uppercase">ST-08 // BTS & GREEN SCREEN</span>
              </div>
              <h3 className="font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wider mb-3 group-hover:text-[#adfa3b] transition-colors">
                Social Media Shoots & Green Screen Productions
              </h3>
              <p className="text-white/50 text-[11px] leading-relaxed mb-5">
                A behind-the-scenes look at our multi-camera shoots, professional chroma keying setups, and visual effects workflow.
              </p>
            </div>
            {/* Auto Scrolling Studio Tour */}
            <div className="w-full h-[280px] rounded-2xl overflow-hidden border border-white/15 bg-black relative group shadow-2xl">
              <video 
                src="/clientlogos/nearby-studio-tour.mp4"
                className="w-full h-full object-cover bg-black"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[8px] font-mono tracking-[0.25em] text-[#adfa3b] bg-black/80 border border-[#adfa3b]/30 px-4 py-1.5 rounded-full">
                STUDIO WORKFLOW PORTAL
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════
   5. CASE STUDY CTA
══════════════════════════════════════════════════════ */
const VPCaseCTA = () => {
  return (
    <section style={{ background: '#090518', padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,48px)', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(173,250,59,0.05) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.25em', color: '#adfa3b', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>✦ PROJECT INSIGHTS ✦</span>
        <h2 style={{ fontFamily: "'Bebas Neue',Impact,sans-serif", fontSize: 'clamp(36px,6vw,72px)', color: '#fff', WebkitTextStroke: '2px rgba(173,250,59,0.4)', letterSpacing: '0.04em', lineHeight: 0.9, margin: '0 0 20px' }}>
          LET'S GET YOUR BRAND RIGHT.
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(14px,1.5vw,16px)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 40px' }}>
          Ready to create content that positions your brand, builds trust, and converts audiences into customers?
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/case-studies" style={{ display: 'inline-block', padding: '16px 36px', borderRadius: '999px', fontFamily: "'Montserrat',sans-serif", fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#000', background: '#adfa3b', textDecoration: 'none', transition: 'all 0.25s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#a855f7'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#adfa3b'; e.currentTarget.style.color = '#000'; }}
          >
            Know More →
          </a>
          <a href="/contact" style={{ display: 'inline-block', padding: '16px 36px', borderRadius: '999px', fontFamily: "'Montserrat',sans-serif", fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fff', border: '2px solid rgba(168,85,247,0.6)', textDecoration: 'none', transition: 'all 0.25s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#a855f7'; e.currentTarget.style.borderColor = '#a855f7'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(168,85,247,0.6)'; }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════
   PAGE ASSEMBLY
══════════════════════════════════════════════════════ */
const VideoProductionPage = () => {
  return (
    <div className="vp-page">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');`}</style>

      {/* 1. Hero with showreel */}
      <VPHeroSection />

      {/* 2. Stats strip */}
      <VPStatsStrip />

      {/* 3. Services — Making Content Look Right */}
      <VPServicesSection />

      {/* 4. Studio section */}
      <VPStudioSection />

      {/* 5. Alternating video showcase — Production by Buzziwah */}
      <VPAlternatingShowcase />

      {/* 6. Case study CTA */}
      <VPCaseCTA />

      {/* 7. FAQ */}
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
            {vpFaqs.map((item, idx) => (
              <VPFaqCard key={idx} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoProductionPage;
