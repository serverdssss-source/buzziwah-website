import React, { useRef, useState, useEffect } from 'react';
import VariableProximity from '../components/VariableProximity';

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

/* ── Video Production Stats Strip ── */
const VPStatsStrip = () => {
  const stats = [
    { end: 600, suffix: '+', label: 'Videos Produced' },
    { end: 50, suffix: 'M+', label: 'Total Views' },
    { end: 4, suffix: 'K', label: 'In-House Studio' },
    { end: 98, suffix: '%', label: 'On-Time Delivery' },
    { end: 6, suffix: 'x', label: 'Avg Engagement Lift' },
  ];
  return (
    <div style={{ background:'#060811', borderTop:'1px solid rgba(173,250,59,0.18)', borderBottom:'1px solid rgba(173,250,59,0.18)', padding:'22px 5%', overflow:'hidden', position:'relative' }}>
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg, rgba(168,85,247,0.06) 0%, rgba(173,250,59,0.04) 50%, rgba(168,85,247,0.06) 100%)', pointerEvents:'none' }} />
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
import { FaVideo, FaFilm, FaCamera, FaMicrophone, FaPlay, FaEdit, FaPalette, FaLightbulb, FaRocket, FaCheckCircle } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';
import { MdVideoLibrary } from 'react-icons/md';
import '../home/Home.css';

const handleCursorMove = (e) => {
  const target = e.currentTarget.closest('.vp-cursor-wrap');
  if (!target) return;
  const rect = target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  target.style.setProperty('--cx', `${x}px`);
  target.style.setProperty('--cy', `${y}px`);
};

const handleCursorEnter = (e) => {
  const target = e.currentTarget.closest('.vp-cursor-wrap');
  if (target) target.classList.add('is-hover');
};

const handleCursorLeave = (e) => {
  const target = e.currentTarget.closest('.vp-cursor-wrap');
  if (target) target.classList.remove('is-hover');
};


// Global loader for YT API to prevent multiple script loads
let ytApiPromise = null;
const loadYoutubeApi = () => {
  if (ytApiPromise) return ytApiPromise;
  ytApiPromise = new Promise((resolve) => {
    if (window.YT && window.YT.Player) {
      resolve(window.YT);
      return;
    }
    const existingScript = document.getElementById('youtube-iframe-api');
    if (existingScript) {
      window.onYouTubeIframeAPIReady = () => resolve(window.YT);
      return;
    }
    const tag = document.createElement('script');
    tag.id = 'youtube-iframe-api';
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    const prevReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (prevReady) prevReady();
      resolve(window.YT);
    };
  });
  return ytApiPromise;
};

// Premium Custom Youtube Player Component
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
          onReady: (event) => {
            if (!active) return;
            event.target.mute();
            event.target.playVideo();
            setIsMuted(true);
            setIsPlaying(true);
          },
          onStateChange: (event) => {
            if (!active) return;
            // YT.PlayerState.PLAYING is 1
            if (event.data === 1) {
              setIsPlaying(true);
            } else {
              setIsPlaying(false);
            }
          }
        }
      });
    });

    return () => {
      active = false;
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!playerRef.current) return;
    try {
      if (isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    } catch (err) {
      console.error("YT Player error toggling mute:", err);
    }
  };

  const togglePlay = () => {
    if (!playerRef.current) return;
    try {
      if (isPlaying) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error("YT Player error toggling play:", err);
    }
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
      {/* Click overlay for play/pause toggling */}
      <div 
        onClick={togglePlay}
        style={{
          position: 'absolute',
          inset: 0,
          cursor: 'pointer',
          zIndex: 1,
        }}
      />
      {/* Mute/Unmute floating toggle button */}
      <button
        onClick={toggleMute}
        type="button"
        style={{
          position: 'absolute',
          bottom: '12px',
          right: '12px',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          zIndex: 2,
          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          color: '#fff',
          padding: 0,
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.backgroundColor = '#7c3aed';
          e.currentTarget.style.borderColor = '#7c3aed';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
        }}
      >
        {isMuted ? (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="1" y1="1" x2="23" y2="23"></line>
            <path d="M9 9v6a3 3 0 0 0 3 3h1.586l4.707 4.707A1 1 0 0 0 20 22V4a1 1 0 0 0-1.707-.707L13.586 8H12a3 3 0 0 0-3 3z"></path>
          </svg>
        ) : (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        )}
      </button>
    </div>
  );
};

const VPSection2 = () => {
  const features = [
    { title: 'Visual Identity', desc: "We design each lyrical video to reflect the song's tone and mood." },
    { title: 'Sync With Story', desc: 'Every beat connects to a visual moment that builds the narrative.' },
    { title: 'Dynamic Typography', desc: "Lyrics are animated to flow seamlessly with the music's emotion." },
    { title: 'Color & Rhythm', desc: 'Vibrant palettes and pace-matched animation create harmony.' },
  ];

  return (
    <section
      className="vp-why-bg vp-section2"
      style={{ padding: '80px 40px', marginTop: '-200px', paddingTop: '210px', position: 'relative', zIndex: 1 }}
    >
      <div className="vp-section2-inner" style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div className="vp-section2-video" style={{ flex: '1 1 400px', maxWidth: '560px' }}>
          <div
            className="vp-video-frame vp-cursor-wrap"
            style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}
          >
            <div
              className="vp-cursor-overlay"
              onMouseMove={handleCursorMove}
              onMouseEnter={handleCursorEnter}
              onMouseLeave={handleCursorLeave}
            />
            <CustomYoutubePlayer videoId="wtNWlT8TJfU" title="Lyrical Video Showcase" />
          </div>
        </div>

        <div className="vp-section2-content" style={{ flex: '1 1 340px' }}>
          <h2 style={{ fontFamily:"'Bebas Neue','Impact','Arial Black',sans-serif", fontSize:'clamp(24px,3vw,44px)', color:'#adfa3b', WebkitTextStroke:'2px white', textShadow:'5px 5px 0 rgba(0,0,0,0.5)', letterSpacing:'0.04em', lineHeight:0.9, marginBottom:'16px' }}>
            Lyrical Videos
          </h2>
          <p style={{ fontSize: '15px', color: '#333', lineHeight: 1.7, marginBottom: '28px' }}>
            Transforming music into emotion through visuals, motion, and story — one lyric at a time.
          </p>
          <div className="vp-section2-features" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {features.map((f) => (
              <div key={f.title} className="vp-lyrical-card">
                <div className="vp-lyrical-card-top">
                  <span className="vp-lyrical-dot" />
                  <h3>{f.title}</h3>
                </div>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const VPSection3 = () => {
  return (
    <section className="vp-section3" style={{ background: '#1a1a1a', padding: '80px 40px' }}>
      <div className="vp-section3-inner" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="vp-section3-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontFamily:"'Bebas Neue','Impact','Arial Black',sans-serif", fontSize:'clamp(24px,3vw,44px)', color:'#adfa3b', WebkitTextStroke:'2px white', textShadow:'5px 5px 0 rgba(0,0,0,0.5)', letterSpacing:'0.04em', lineHeight:0.9, marginBottom:'20px' }}>
            DR. Ramesh Aravind
          </h2>
          <p style={{ fontSize: '15px', color: '#fff', lineHeight: 1.8, maxWidth: '760px', margin: '0 auto 16px' }}>
            Here is a bio video of the Actor, Director, Writer, Producer, TV Show Host, and an acknowledged Mr. Nice of the South Indian movie industry — Mr. Ramesh Aravind.
          </p>
          <p style={{ fontSize: '15px', color: '#fff', lineHeight: 1.8, maxWidth: '760px', margin: '0 auto 32px' }}>
            As a multi-talented celebrity, Ramesh Aravind motivates people through his speeches at various events. We were fortunate to edit and present the speeches in inspiring video formats.
          </p>
          <div className="vp-section3-tags" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['Book Promo', 'Brand Bangaluru', 'Best Motivational Speech'].map((label) => (
              <button key={label} style={{ padding: '12px 28px', border: 'none', borderRadius: '30px', background: '#83cd15', color: '#000', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer' }}>{label}</button>
            ))}
          </div>
        </div>

        <div className="vp-section3-video" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="vp-video-frame vp-video-frame-lg vp-cursor-wrap" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
            <div
              className="vp-cursor-overlay"
              onMouseMove={handleCursorMove}
              onMouseEnter={handleCursorEnter}
              onMouseLeave={handleCursorLeave}
            />
            <CustomYoutubePlayer videoId="sN5mGM2XepE" title="Ramesh Aravind Bio Video" />
          </div>
        </div>
      </div>
    </section>
  );
};

const adTabs = [
  { label: 'Fitness Factory', videoId: 'NgMFaxvs5rE', title: 'Fitness Factory Villain Challenge | Ad Film', sub: 'Feat: Yash Shetty, Sudhi & Vardhan' },
  { label: 'Movi Garage', videoId: 'WzCfJau2NeU', title: 'Movi Garage | Ad Promo', sub: 'A cinematic promo for premium automotive service branding.' },
  { label: 'Rajyotsava', videoId: 'J2XUohFcjuk', title: 'Kannada Rajyotsava Promo', sub: "Featuring: Little Kidz | Celebrating Karnataka's culture and pride." },
  { label: 'Political Ad', videoId: 'H3yMzPU5yrM', title: 'Political Ad Film', sub: 'Featuring: Priya Shatamarshan | Campaign ad with a clear message.' },
  { label: 'Life at Pace', videoId: 'Y7xG75PWweE', title: 'Life At Pace | Corporate Ad', sub: 'Featuring: Heads of Companies | Culture, people, and momentum.' },
  { label: 'HearFon', videoId: 'FO7aj_EiAuo', title: 'HearFon | Health Care Ad Film', sub: 'Featuring: Swathi Rajkumar | A hearing care campaign that connects.' },
];

const VPSection4 = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="vp-why-bg vp-section4" style={{ padding: '60px 20px' }}>
      <div className="vp-section4-inner" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily:"'Bebas Neue','Impact','Arial Black',sans-serif", fontSize:'clamp(22px,2.8vw,40px)', color:'#adfa3b', WebkitTextStroke:'2px white', textShadow:'5px 5px 0 rgba(0,0,0,0.5)', letterSpacing:'0.04em', lineHeight:0.9, marginBottom:'10px' }}>
          Ad Films by Buzziwah Studios
        </h2>
        <p style={{ fontSize: '15px', color: '#555', maxWidth: '700px', margin: '0 auto 32px', lineHeight: 1.7 }}>
          Explore our curated collection of high-impact ad films, crafted for diverse brands, voices, and causes.
        </p>

        <div className="vp-ad-tabs" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '28px' }}>
          {adTabs.map((t, i) => (
            <button key={i} onClick={() => setActive(i)} style={{ padding: '10px 22px', border: 'none', borderRadius: '25px', background: active === i ? '#5b21b6' : '#83cd15', color: active === i ? '#fff' : '#000', fontSize: '14px', fontWeight: 700, cursor: 'pointer', transition: 'background 0.3s' }}>{t.label}</button>
          ))}
        </div>

        <div style={{ animation: 'vpFadeIn 0.4s ease-in-out' }}>
          <style>{`@keyframes vpFadeIn { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }`}</style>
          <div
            className="vp-ad-iframe vp-cursor-wrap"
            style={{ maxWidth: '800px', borderRadius: '10px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', margin: '0 auto', overflow: 'hidden' }}
          >
            <div
              className="vp-cursor-overlay"
              onMouseMove={handleCursorMove}
              onMouseEnter={handleCursorEnter}
              onMouseLeave={handleCursorLeave}
            />
            <CustomYoutubePlayer key={active} videoId={adTabs[active].videoId} title={adTabs[active].title} />
          </div>
          <div style={{ marginTop: '16px', fontSize: '15px', color: '#333' }}>
            <strong>{adTabs[active].title}</strong><br />
            <span style={{ color: '#555' }}>{adTabs[active].sub}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const vpFaqs = [
  { q: 'What video production services does Buzziwah Studio offer?', a: 'We offer end-to-end video production including lyrical videos, ad films, reels, corporate videos, political campaign videos, and celebrity bio videos.' },
  { q: 'How long does it take to produce a video?', a: 'Timelines vary by project. A reel or lyrical video typically takes 3–5 days, while a full ad film can take 1–2 weeks depending on complexity and shoot requirements.' },
  { q: 'Do you handle both shooting and editing?', a: 'Yes. We manage the complete pipeline — concept, scripting, shoot coordination, editing, color grading, and final delivery.' },
  { q: 'What brands have you worked with?', a: 'We have worked with Fitness Factory, Samrat Restaurant, Movi Garage, HearFon, Little Kidz, EK Entertainers, Garuda Motion Pictures, and many more.' },
  { q: 'Can you create videos for social media platforms?', a: 'Absolutely. We produce platform-optimized content for Instagram Reels, YouTube Shorts, Facebook, and LinkedIn — all formatted for maximum reach and engagement.' },
  { q: 'How do I get started with a video project?', a: "Simply reach out via our contact page or click 'Get Started'. We'll schedule a brief call to understand your vision and put together a custom production plan." },
];

const timelineEntries = [
  { title: 'Ad Film', desc: 'A bold and creative way to showcase your brand through storytelling.', videoId: 'mrad_zt0nto' },
  { title: 'Testimonial', desc: 'Powerful client testimonials that build trust and authenticity.', videoId: 'ZvCIVVI3Ors' },
  { title: 'Brand Story', desc: 'Present your journey and values in a cinematic and engaging way.', videoId: 'NVo8qSk5alY' },
  { title: 'Promo Video', desc: 'Short and impactful promotional videos to drive engagement.', videoId: 'vDBrU7yeuKA' },
];

const VPSection6 = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const rowRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const start = viewport * 0.2;
      const end = viewport * 0.8;
      const travel = rect.height - (end - start);
      const progress = Math.min(Math.max((start - rect.top) / Math.max(travel, 1), 0), 1);
      line.style.transform = `scaleY(${progress})`;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    const items = rowRefs.current.filter(Boolean);
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
          else entry.target.classList.remove('is-visible');
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="vp-timeline-section vp-hero-bg" style={{ padding: '60px 20px' }}>
      <div className="hz-orb hz-orb-1" />
      <div className="hz-orb hz-orb-2" />
      <div className="hz-orb hz-orb-3" />
      <div className="hz-mesh" />
      <div className="vp-hero-content">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontFamily:"'Bebas Neue','Impact','Arial Black',sans-serif", fontSize:'clamp(22px,2.8vw,40px)', color:'#adfa3b', WebkitTextStroke:'2px white', textShadow:'5px 5px 0 rgba(0,0,0,0.5)', letterSpacing:'0.04em', lineHeight:0.9, marginBottom:'10px' }}>
            The Video Plan
          </h2>
          <p style={{ fontSize: '15px', color: '#555', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
            Showcase yourself in a video format and get 80% viewer's attention. It could be an ad or testimonial.
          </p>
        </div>

        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
          <div className="vp-timeline-line">
            <div ref={lineRef} className="vp-timeline-progress" />
          </div>
          {timelineEntries.map((entry, i) => {
            const isEven = i % 2 === 0;
            return (
            <div
              key={i}
              ref={(el) => { rowRefs.current[i] = el; }}
              className={`vp-timeline-row ${isEven ? 'is-even' : 'is-odd'}`}
            >
              <div className={`vp-timeline-media vp-cursor-wrap ${isEven ? 'from-left' : 'from-right'}`}>
                <div
                  className="vp-cursor-overlay"
                  onMouseMove={handleCursorMove}
                  onMouseEnter={handleCursorEnter}
                  onMouseLeave={handleCursorLeave}
                />
                <CustomYoutubePlayer videoId={entry.videoId} title={entry.title} height="250px" />
              </div>
              <div className={`vp-timeline-text ${isEven ? 'from-right' : 'from-left'}`}>
                <h3 style={{ fontFamily:"'Bebas Neue','Impact',sans-serif", fontSize:'clamp(16px,1.8vw,26px)', color:'#a855f7', WebkitTextStroke:'1px rgba(255,255,255,0.4)', letterSpacing:'0.04em', lineHeight:0.95, marginBottom:'10px' }}>{entry.title}</h3>
                <p style={{ fontSize: '15px', color: '#555', margin: 0, lineHeight: 1.7 }}>{entry.desc}</p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const VPFaqCard = ({ item, idx }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-card ${open ? 'open' : ''}`}>
      <button
        className="faq-question"
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{`${idx + 1}. ${item.q}`}</span>
        <span className="faq-arrow">⌄</span>
      </button>
      <div className="faq-answer">{item.a}</div>
    </div>
  );
};

import servicesData from '../servicesData.json';

const serviceConfig = servicesData['video-production'];

const VideoProductionPage = () => {
  const containerRef = useRef(null);
  return (
    <div className="vp-page">
      <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  .vp-section2 { background: linear-gradient(145deg, #06040e 0%, #0d0621 50%, #06040e 100%) !important; }
  .vp-section3 { background: linear-gradient(145deg, #0a0614 0%, #130824 50%, #0a0614 100%) !important; }
  .vp-timeline-section { background: linear-gradient(145deg, #060811 0%, #0a0418 50%, #060811 100%) !important; }
`}</style>
      <style>{`
        @keyframes smFloatWobble {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) translateX(5px) rotate(5deg);
          }
          50% {
            transform: translateY(-5px) translateX(-5px) rotate(-5deg);
          }
          75% {
            transform: translateY(-15px) translateX(3px) rotate(3deg);
          }
        }
      `}</style>

      {/* 🔮 PRODUCTION SOLUTIONS - FIRST CONTENT SECTION */}
      <ProductionSolutionsSection />

      {/* ── VP Stats Strip ── */}
      <VPStatsStrip />

      {/* Video Showcase Sections with actual media */}
      <VPSection2 />
      <VPSection3 />
      <VPSection4 />
      <VPSection6 />

      {/* 🔮 PRODUCTION PHILOSOPHY & IN-HOUSE INFRASTRUCTURE */}
      <ProductionPhilosophySection />
      <InHouseStudioSection />

      {/* 🎬 CURATED PRODUCTION LOG & CASE STUDIES REDIRECT */}
      <ProductionShowcaseSection />

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

/* ═══════════════════════════════════════════════════════
   🎬 PRODUCTION SOLUTIONS: FIRST CONTENT SECTION
═══════════════════════════════════════════════════════ */
const ProductionSolutionsSection = () => {
  const containerRef = useRef(null);
  
  return (
    <section ref={containerRef} className="relative overflow-hidden px-6 py-20 sm:px-10 lg:py-28" style={{ 
      background: 'linear-gradient(180deg, #070312 0%, #0d091e 100%)',
      paddingTop: 'calc(76px + 3rem)' // Navbar height + extra spacing
    }}>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(173,250,59,0.15) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(139,92,246,0.15) 0%, transparent 40%)'
      }} />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Floating production icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-[15%] left-[8%] text-4xl animate-[smFloatWobble_7s_ease-in-out_infinite] text-[#a855f7]">
          <FaVideo />
        </div>
        <div className="absolute top-[60%] right-[12%] text-3xl animate-[smFloatWobble_8s_ease-in-out_infinite_1.5s] text-[#adfa3b]">
          <IoSparkles />
        </div>
        <div className="absolute bottom-[20%] left-[15%] text-2xl animate-[smFloatWobble_6s_ease-in-out_infinite_2s] text-[#a855f7]">
          <FaFilm />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Section Header with Icon */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <FaVideo className="text-3xl text-[#a855f7]" />
            <span className="text-[11px] font-mono font-bold px-4 py-2 bg-[#a855f7]/10 text-[#a855f7] rounded-full uppercase tracking-[0.2em] border border-[#a855f7]/20">
              ✦ PRODUCTION SOLUTIONS ✦
            </span>
            <IoSparkles className="text-3xl text-[#adfa3b]" />
          </div>
          <h2 className="font-['Bebas_Neue','Impact',sans-serif] text-[clamp(48px,8vw,96px)] font-black uppercase leading-[0.9] mb-4 text-white">
            <span className="text-[#adfa3b]">Content</span> is <span className="text-[#a855f7]">king</span>.<br />
            <span className="text-white">Production is</span> <span className="text-[#adfa3b]">crown</span>.
          </h2>
          <p className="text-white/60 text-base max-w-2xl mx-auto leading-relaxed">
            Combine creative direction with strong execution so every piece of content looks right, feels right, and works right.
          </p>
        </div>

        {/* Split Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Card: Making Content Look Right */}
          <div className="rounded-[32px] border border-[#a855f7]/20 bg-gradient-to-br from-[#120e24]/75 to-[#080411]/75 p-8 sm:p-10 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group hover:border-[#a855f7]/40 transition-all duration-500">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#a855f7]/5 rounded-full blur-3xl pointer-events-none transition-all duration-500 group-hover:bg-[#a855f7]/10" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaCamera className="text-2xl text-[#a855f7]" />
                <span className="text-[11px] font-mono font-bold px-3 py-1 bg-[#a855f7]/10 text-[#a855f7] rounded-full uppercase tracking-widest">Making Content Look Right</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-pulse" />
              </div>
              
              <div className="space-y-3 mb-6">
                {[
                  { icon: <FaFilm />, text: "Brand Films & Corporate Videos" },
                  { icon: <FaPlay />, text: "Ad Films & Performance Creatives" },
                  { icon: <MdVideoLibrary />, text: "Reels & Short-form Content" },
                  { icon: <FaMicrophone />, text: "Podcast Production" },
                  { icon: <FaCamera />, text: "Product & Service Shoots" },
                  { icon: <FaVideo />, text: "Social Media Content Shoots" },
                  { icon: <FaEdit />, text: "Scriptwriting & Creative Direction" },
                  { icon: <FaLightbulb />, text: "Shoot Planning & Execution" },
                  { icon: <FaEdit />, text: "Video Editing & Post-Production" },
                  { icon: <FaPalette />, text: "Motion Graphics & Visual Enhancements" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#a855f7]/20 transition-all duration-200">
                    <span className="text-[#a855f7] text-sm">{item.icon}</span>
                    <span className="text-white/70 text-xs font-semibold">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-white/5 pt-6 mt-6 flex items-center justify-between text-[11px] font-mono text-white/40">
              <span>Production Pipeline</span>
              <span>[BUZZIWAH V-01]</span>
            </div>
          </div>

          {/* Right Card: In-House Studio */}
          <div className="rounded-[32px] border border-[#adfa3b]/20 bg-gradient-to-br from-[#12161f]/60 to-[#0c0f16]/60 p-8 sm:p-10 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group shadow-[0_20px_45px_rgba(0,0,0,0.4)] hover:border-[#adfa3b]/40 transition-all duration-500">
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#adfa3b]/5 rounded-full blur-3xl pointer-events-none transition-all duration-500 group-hover:bg-[#adfa3b]/10" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaRocket className="text-2xl text-[#adfa3b]" />
                <span className="text-[11px] font-mono font-bold px-3 py-1 bg-[#adfa3b]/15 text-[#adfa3b] rounded-full uppercase tracking-widest">In-House Studio Built</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#adfa3b] animate-ping" />
              </div>
              
              <h3 className="font-['Montserrat'] text-[clamp(24px,3vw,36px)] font-black uppercase text-white leading-tight mb-4">
                <span className="text-[#adfa3b]">Nearby Studio</span>
              </h3>
              
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 font-semibold">
                With our in-house studio and production team, backed by strong executional expertise, we turn ideas into real marketing output.
              </p>
              
              <div className="p-5 rounded-2xl bg-[#adfa3b]/5 border border-[#adfa3b]/10 mb-6">
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  Operating from a 600 sq. ft. studio floor by Sripada Studios, we are equipped to handle a wide range of content needs—
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "Model Photoshoots",
                  "Creative Product Shoots",
                  "Podcast Setups",
                  "Green Screen Productions",
                  "Social Media Content Shoots"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#adfa3b]/20 transition-all duration-200">
                    <FaCheckCircle className="text-[#adfa3b] text-sm flex-shrink-0" />
                    <span className="text-white/70 text-xs font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <a 
                  href="https://nearbystudio.in"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block w-full rounded-2xl py-4 text-center font-['Montserrat'] text-xs font-bold uppercase tracking-[0.1em] text-black transition-all duration-200"
                  style={{ background: '#adfa3b' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#a855f7'; e.currentTarget.style.color = '#ffffff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#adfa3b'; e.currentTarget.style.color = '#000000'; }}
                >
                  Book Studio Space →
                </a>
              </div>
            </div>

            <div className="border-t border-white/5 pt-6 mt-6 flex items-center justify-between text-[11px] font-mono text-white/40">
              <span>Studio Infrastructure</span>
              <span className="text-[#adfa3b] font-bold">PRODUCTION_READY</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════
   🎭 PRODUCTION PHILOSOPHY: BRAND FILM & CREATIVE DELIVERABLES
═══════════════════════════════════════════════════════ */
const ProductionPhilosophySection = () => {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:py-28" style={{ background: 'linear-gradient(180deg, #070312 0%, #0d0a21 100%)' }}>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(173,250,59,0.18) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(139,92,246,0.18) 0%, transparent 50%)'
      }} />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Philosophy Block */}
          <div className="rounded-[32px] border border-white/5 bg-gradient-to-br from-[#120c29]/70 to-[#070412]/70 p-8 sm:p-12 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group shadow-xl">
            <div className="absolute -right-20 -top-20 w-72 h-72 bg-[#adfa3b]/5 rounded-full blur-3xl pointer-events-none transition-all duration-500 group-hover:bg-[#adfa3b]/10" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-mono font-bold px-3 py-1 bg-[#adfa3b]/10 text-[#adfa3b] rounded-full uppercase tracking-widest">Brand Narrative</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#adfa3b] animate-ping" />
              </div>
              
              <h2 className="font-['Montserrat'] text-[clamp(28px,3.8vw,46px)] font-black uppercase text-white leading-none mb-6">
                Content is <span className="text-[#adfa3b]">king</span>.<br />Production is <span className="text-[#a855f7]">crown</span>.
              </h2>
              
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                We combine visionary creative direction with flawless technical execution so every single piece of content looks right, feels right, and works right.
              </p>
              
              <div className="space-y-4 mt-8">
                {[
                  { title: "Looks Right", desc: "Cinematic depth, calibrated lighting, and brand-aligned visual standards." },
                  { title: "Feels Right", desc: "Coherent brand messaging, natural tone, and deep emotional resonance." },
                  { title: "Works Right", desc: "Scroll-stopping hooks, high audience retention, and high conversion yields." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white/[0.01] border border-white/[0.02] hover:border-white/10 transition-all duration-300">
                    <span className="font-mono text-xs text-[#adfa3b] font-black uppercase tracking-wider">[{item.title}]</span>
                    <p className="text-white/60 text-xs sm:text-sm font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-white/5 pt-6 mt-8 flex items-center justify-between text-[11px] font-mono text-white/40">
              <span>Aesthetic Engine</span>
              <span>[BUZZIWAH V-02]</span>
            </div>
          </div>

          {/* Right Deliverables Block */}
          <div className="rounded-[32px] border border-white/5 bg-gradient-to-br from-[#0c0f1e]/60 to-[#070911]/60 p-8 sm:p-10 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-[#a855f7]/5 rounded-full blur-3xl pointer-events-none transition-all duration-500 group-hover:bg-[#a855f7]/10" />
            
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-mono font-bold px-3 py-1 bg-[#a855f7]/15 text-[#a855f7] rounded-full uppercase tracking-widest">Capabilities</span>
                <span className="font-mono text-[10px] text-white/40">10 STANDARD MODULES</span>
              </div>
              
              <h3 className="font-['Montserrat'] text-2xl font-black text-white uppercase tracking-wide mb-6">
                Making Content <span className="text-[#adfa3b]">Look Right</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Brand Films & Corporate Videos",
                  "Ad Films & Performance Creatives",
                  "Reels & Short-form Content",
                  "Podcast Production",
                  "Product & Service Shoots",
                  "Social Media Content Shoots",
                  "Scriptwriting & Creative Direction",
                  "Shoot Planning & Execution",
                  "Video Editing & Post-Production",
                  "Motion Graphics & Visual Enhancements"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.015] border border-white/[0.03] hover:border-[#a855f7]/20 transition-all duration-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
                    <span className="text-white/70 text-xs font-bold uppercase tracking-wider">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/5 pt-6 mt-8 flex items-center justify-between text-[11px] font-mono text-white/40">
              <span>Production Pipeline</span>
              <span className="text-[#a855f7] font-bold">EXECUTION_READY</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════
   ⚡ PHYSICAL INFRASTRUCTURE: IN-HOUSE STUDIO & PARTNER
═══════════════════════════════════════════════════════ */
const InHouseStudioSection = () => {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:py-24" style={{ background: '#070412' }}>
      {/* Structural blueprint lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(173,250,59,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#a855f7]/5 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        
        {/* Layout Split: Left details & studio specs, Right Nearby Studio promo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Studio Description (Spans 7 Columns) */}
          <div className="lg:col-span-7 rounded-[32px] border border-white/5 bg-[#120f26]/30 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#adfa3b] mb-3">Physical Infrastructure</p>
              <h2 className="font-['Montserrat'] text-[clamp(28px,3vw,42px)] font-black uppercase text-white leading-tight mb-4">
                In-House <span className="text-[#a855f7] italic">Studio Built</span>
              </h2>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6">
                With our in-house studio and production team, backed by strong executional expertise, we turn abstract ideas into real, premium marketing output.
              </p>
              
              <div className="p-5 rounded-2xl bg-[#adfa3b]/5 border border-[#adfa3b]/10 mb-8">
                <p className="text-[#adfa3b] text-xs font-mono font-black tracking-wider uppercase mb-1">
                  Floor Specifications
                </p>
                <p className="text-white/80 text-sm font-semibold">
                  Operating from a high-spec 600 sq. ft. professional studio floor by Buzziwah Studios. Fully equipped to handle a wide range of content formats.
                </p>
              </div>

              {/* Setups list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { t: "Model Photoshoots", icon: "📸" },
                  { t: "Creative Product Shoots", icon: "💄" },
                  { t: "Podcast Setups", icon: "🎙️" },
                  { t: "Green Screen Productions", icon: "🟢" },
                  { t: "Social Media Content Shoots", icon: "🤳" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.01] border border-white/[0.03]">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-white/70 text-xs font-bold uppercase tracking-wider">{item.t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-[9px] font-mono text-white/30 tracking-widest">
              BUZZIWAH AUDIOVISUAL DIVISION
            </div>
          </div>

          {/* Nearby Studio Promo (Spans 5 Columns) */}
          <div className="lg:col-span-5 rounded-[32px] border border-[#a855f7]/30 bg-gradient-to-b from-[#180f33]/60 to-[#070412]/60 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12)_0%,transparent_70%)] pointer-events-none" />
            
            <div>
              <div className="flex justify-between items-start mb-8">
                <span className="text-[10px] font-mono font-black tracking-widest text-[#a855f7] uppercase">Co-Working Partner</span>
                {/* Simulated Premium Logo for Nearby Studio */}
                <div className="flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10">
                  <span className="text-[10px] font-extrabold tracking-tight text-white font-['Montserrat']">NEARBY</span>
                  <span className="text-[10px] font-black text-[#adfa3b] font-mono">STUDIO</span>
                </div>
              </div>

              <h3 className="font-['Montserrat'] text-2xl font-black text-white uppercase tracking-wide mb-4">
                Nearby Studio
              </h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                Through our trusted collaboration with Nearby Studio, we extend our operational capabilities to offer scale-on-demand production slots, specialized equipment lockers, and premium live-broadcast setups.
              </p>

              <div className="space-y-3">
                {[
                  "Premium RED & Arri Camera Rigs",
                  "Dedicated Multi-Set Soundstages",
                  "Pro-Grade Light Grid & Amps",
                  "Comfortable Talent Greenrooms"
                ].map((pt, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-[#adfa3b] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-white/50 text-[11px] font-bold uppercase tracking-wider">{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="https://nearbystudio.in"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-block rounded-2xl py-4 text-center font-['Montserrat'] text-xs font-bold uppercase tracking-[0.1em] text-black transition-all duration-200"
                style={{ background: '#adfa3b' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#a855f7'; e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#adfa3b'; e.currentTarget.style.color = '#000000'; }}
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

/* ═══════════════════════════════════════════════════════
   🎬 CURATED PRODUCTION LOG & CASE STUDIES REDIRECT
═══════════════════════════════════════════════════════ */
const ProductionShowcaseSection = () => {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:py-28" style={{ background: '#090518' }}>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(173,250,59,0.15) 0%, transparent 60%)'
      }} />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a855f7] mb-3">✦ PORTFOLIO SHOWCASE ✦</p>
          <h2 className="font-['Bebas_Neue','Impact',sans-serif] text-[clamp(48px,8vw,96px)] font-black uppercase leading-[0.9] mb-4 text-white">
            Production by <span className="text-[#adfa3b]">Buzziwah</span>
          </h2>
          <p className="mt-4 max-w-xl text-white/50 text-sm sm:text-base leading-relaxed mx-auto">
            A look at the professional content, cinematic narratives, and performance-driven videos we've created for our partners.
          </p>
          <div className="h-[2px] w-24 bg-[#a855f7] mx-auto mt-6 rounded-full" />
        </div>

        {/* Reorganized Deliverables portfolio grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
          {[
            { name: "Landscape Showcase Videos", partner: "Aanya Hospital", cat: "Cinematic Showcase", type: "video" },
            { name: "Reels & Short-form Content", partner: "HearFon", cat: "High-Engagement Short", type: "reel" },
            { name: "Podcast Shoots", partner: "LilBeez", cat: "Sound Production", type: "podcast" },
            { name: "AI-powered Content Production", partner: "Buzziwah Lab", cat: "Creative AI", type: "ai" },
            { name: "Photoshoots (Model / Product / Lifestyle)", partner: "Fitness Factory, Kovedaa", cat: "Studio Production", type: "photo" },
            { name: "YouTube Videos", partner: "Buzziwah Narratives", cat: "Long-form Editing", type: "youtube" },
            { name: "Explainer Videos", partner: "WMN", cat: "Motion Design", type: "explainer" },
            { name: "Ad Films & Performance Creatives", partner: "HearFon, Lilbeez", cat: "Direct Response Ads", type: "ad" },
            { name: "Social Media Content Shoots", partner: "BTS of multiple shoots", cat: "Raw BTS content", type: "social" },
            { name: "Green Screen Productions", partner: "Chroma Solutions", cat: "VFX Production", type: "greenscreen" }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="rounded-[32px] border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-8 hover:bg-white/[0.06] hover:border-[#adfa3b]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 flex flex-col justify-between min-h-[220px] group cursor-pointer relative overflow-hidden"
            >
              {/* Subtle hover glow */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#adfa3b]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-[11px] font-mono text-[#adfa3b] tracking-[0.3em] font-black uppercase bg-[#adfa3b]/10 px-3 py-1 rounded-full border border-[#adfa3b]/20">
                  PROD-{String(idx + 1).padStart(2, '0')}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#adfa3b] group-hover:animate-pulse transition-colors" />
              </div>

              <div>
                <h4 className="font-['Bebas_Neue','Impact',sans-serif] text-[clamp(28px,3.5vw,48px)] font-black text-white uppercase tracking-wider leading-[0.9] group-hover:text-[#adfa3b] transition-colors duration-300 mb-6">
                  {item.name}
                </h4>
                
                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/5">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1">Partner</span>
                    <span className="text-sm font-bold text-white/70 uppercase tracking-wide">
                      {item.partner}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1">Format</span>
                    <span className="text-[11px] font-mono font-black uppercase tracking-widest text-[#a855f7] bg-[#a855f7]/5 border border-[#a855f7]/20 px-3 py-1 rounded-lg">
                      {item.cat}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Call to Action banner */}
        <div className="rounded-[32px] border border-white/5 bg-gradient-to-r from-[#140f35]/80 to-[#080412]/80 p-8 sm:p-12 backdrop-blur-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(173,250,59,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="text-center md:text-left">
            <span className="text-[10px] font-mono font-black tracking-[0.2em] text-[#adfa3b] uppercase mb-2 block">PROJECT INSIGHTS</span>
            <h3 className="font-['Montserrat'] text-[24px] sm:text-[32px] font-black text-white uppercase tracking-wide mb-3">
              Let's get your brand right.
            </h3>
            <p className="text-white/60 text-sm max-w-lg leading-relaxed">
              Ready to craft a coherent system that positions your business, scaling your trust, and maximizing your market choice metrics?
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="/case-studies"
              className="rounded-full px-8 py-3.5 font-['Montserrat'] text-xs font-bold uppercase tracking-[0.08em] text-center text-black transition-all duration-200"
              style={{ background: '#adfa3b' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#a855f7'; e.currentTarget.style.color = '#ffffff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#adfa3b'; e.currentTarget.style.color = '#000000'; }}
            >
              Know More
            </a>
            <a 
              href="/contact"
              className="rounded-full px-8 py-3.5 font-['Montserrat'] text-xs font-bold uppercase tracking-[0.08em] text-center text-white border-2 border-[#a855f7] transition-all duration-200 hover:bg-[#a855f7]"
            >
              Get In Touch
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoProductionPage;
