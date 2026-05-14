import React, { useRef, useState, useEffect } from 'react';
import VariableProximity from '../components/VariableProximity';
import '../home/Home.css';
import { IMProcess, WhyChooseUs } from './IMComponents';
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

const imVideoIds = ['Ba0Ek_aTd68', 'XBBYtirs4JU', 'S4QYOZeCPfw', 'siKBCPG-YKo'];

const TiltVideo = ({ videoId }) => {
  const cardRef = useRef(null);
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    cardRef.current.style.transform = `perspective(1000px) rotateX(${((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -15}deg) rotateY(${((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 15}deg)`;
  };
  const handleLeave = () => { cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'; };
  return (
    <div onMouseMove={handleMove} onMouseLeave={handleLeave} onTouchEnd={handleLeave} style={{ perspective: '1000px', flex: '1 1 calc(50% - 15px)', maxWidth: '600px' }}>
      <div ref={cardRef} style={{ height: '360px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 15px rgba(0,0,0,0.3)', transition: 'transform 0.6s ease-out', transformStyle: 'preserve-3d' }}>
        <iframe src={`https://www.youtube.com/embed/${videoId}`} title="video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ width: '100%', height: '100%', border: 'none', display: 'block' }} />
      </div>
    </div>
  );
};

const IMVideos = () => (
  <section style={{ background: '#0d0d0d', padding: '60px 40px' }}>
    <h2 style={{ fontFamily:"'Bebas Neue','Impact','Arial Black',sans-serif", fontSize:'clamp(26px,3.5vw,48px)', color:'#adfa3b', WebkitTextStroke:'2px white', textShadow:'5px 5px 0 rgba(0,0,0,0.5)', textAlign:'center', marginBottom:'48px', letterSpacing:'0.05em', lineHeight:0.9 }}>VIDEOS</h2>
    <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
      {imVideoIds.map((id) => <TiltVideo key={id} videoId={id} />)}
    </div>
  </section>
);

const imFaqs = [
  { q: 'What services does Buzziwah Studio offer?', a: 'We offer end-to-end social media management including content strategy, reel creation, carousel design, Instagram stories, special day creatives, and performance analytics.' },
  { q: 'Which platforms do you manage?', a: 'We primarily focus on Instagram, but also manage Facebook, YouTube Shorts, and LinkedIn depending on your brand needs.' },
  { q: 'How long does it take to see results?', a: 'Most clients see measurable engagement growth within 30–60 days. Viral results like our Samrat campaign can happen much faster with the right strategy.' },
  { q: 'Do you work with small businesses?', a: 'Absolutely. We work with everyone from local restaurants and pre-schools to production houses and celebrity pages. Every brand deserves great content.' },
  { q: "What makes Buzziwah different from other agencies?", a: "We combine deep cultural understanding, meme-driven creativity, and data-backed strategy. We don't just post — we craft content that resonates and converts." },
  { q: 'How do I get started with Buzziwah?', a: "Simply click 'Get Started' or reach out via our contact page. We'll schedule a discovery call to understand your brand and build a custom strategy." },
];

const IMFAQCard = ({ f, i }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-card ${open ? 'open' : ''}`}>
      <button className="faq-question" type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{`${i + 1}. ${f.q}`}</span>
        <span className="faq-arrow">&#8964;</span>
      </button>
      <div className="faq-answer">{f.a}</div>
    </div>
  );
};

const IMFAQ = () => (
  <section className="faq-showcase">
    <div className="faq-inner">
      <div className="faq-header">
        <div className="faq-title-block">
          <h2 style={{ fontFamily:"'Bebas Neue','Impact',sans-serif", fontSize:'clamp(24px,3vw,44px)', color:'#adfa3b', WebkitTextStroke:'2px white', textShadow:'5px 5px 0 rgba(0,0,0,0.5)', lineHeight:0.9, margin:'0 0 8px' }}>Any questions?</h2>
          <h3 style={{ fontFamily:"'Bebas Neue','Impact',sans-serif", fontSize:'clamp(32px,4vw,64px)', color:'transparent', WebkitTextStroke:'2px #a855f7', letterSpacing:'0.04em', lineHeight:0.9, margin:'0 0 32px' }}>We got you.</h3>
        </div>
        <p className="faq-intro">Have something on your mind? Whether it's about our services, process, timelines, or pricing — we've answered the most common questions to help you move forward with clarity and confidence.</p>
      </div>
      <div className="faq-grid">
        {imFaqs.map((f, i) => <IMFAQCard key={i} f={f} i={i} />)}
      </div>
    </div>
  </section>
);

const InfluencerPage = () => {
  const containerRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleLocalSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData(e.target);
    const data = Object.fromEntries(formDataObj.entries());
    
    if (data.name && data.email && data.message) {
      setIsSubmitting(true);
      data.access_key = import.meta.env.VITE_WEB3FORMS_KEY;
      data.subject = "New Lead from Influencer Page";
      data.from_name = "Buzziwah Website (Influencer)";

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        if (result.success) {
          setSubmitted(true);
          e.target.reset();
        } else {
          alert(result.message || "Something went wrong");
        }
      } catch (err) {
        alert("Error connecting to the server");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      alert("Please fill in all required fields *");
    }
  };

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

  

    <IMProcess />
    <WhyChooseUs />
    <IMVideos />

    {/* 🌟 PREMIUM INTERACTIVE INFLUENCER COLLABORATIONS */}
    <IMCollaborationsSection />

    <IMFAQ />

    <section className="contact-form-section" id="contact">
      <div className="contact-form-header">
        <h2>Contact Us</h2>
        <p>Tell us about your project and we will get back to you quickly.</p>
      </div>
      <div className="contact-form-inner">
        <div className="contact-form-image">
          <img src="/shared-contact-section-illustration.png" alt="Contact" />
        </div>
        <div className="relative">
          {submitted ? (
            <div className="bg-[#adfa3b]/10 border border-[#adfa3b] p-8 rounded-2xl text-center">
              <h3 className="text-[#adfa3b] text-xl font-bold mb-2">Success!</h3>
              <p className="text-white/70">Your message has been sent. We will get back to you soon.</p>
              <button onClick={() => setSubmitted(false)} className="mt-4 text-[#adfa3b] underline">Send another message</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleLocalSubmit}>
              <div className="form-row two">
                <label className="form-field"><span>Name *</span><input name="name" type="text" placeholder="Full Name" required /></label>
                <label className="form-field"><span>Email *</span><input name="email" type="email" placeholder="Email" required /></label>
              </div>
              <div className="form-row two">
                <label className="form-field"><span>Phone</span><input name="phone" type="tel" placeholder="Phone" /></label>
                <label className="form-field">
                  <span>Select Service *</span>
                  <select name="service" required>
                    <option value="">Select your Services</option>
                    <option>Branding</option>
                    <option>Digital Marketing</option>
                    <option>Performance Marketing</option>
                    <option>Film Promotion</option>
                    <option>Web Design</option>
                  </select>
                </label>
              </div>
              <div className="form-row">
                <label className="form-field"><span>Message *</span><textarea name="message" rows="5" placeholder="Comment or Message" required /></label>
              </div>
              <div className="form-actions">
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>

    <footer className="site-footer">
      <div className="footer-cta">
        <img className="footer-logo" src="/Buzziwah_FInal_Logo_White.png" alt="Buzziwah" />
        <div className="footer-cta-text">Ready To Get Started</div>
        <button className="footer-cta-button" type="button">Get Started →</button>
      </div>
      <div className="footer-divider" />
      <div className="footer-grid">
        <div className="footer-col">
          <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <input className="footer-input" type="text" placeholder="Name" />
          <input className="footer-input" type="email" placeholder="Email Address" />
          <button className="footer-subscribe" type="button">Subscribe</button>
        </div>
        <div className="footer-col">
          <h4>SERVICES</h4>
          <ul><li>Performance Marketing</li><li>Social Media Management</li><li>Website Development</li><li>Branding and Re-branding</li></ul>
        </div>
        <div className="footer-col">
          <h4>ABOUT</h4>
          <ul><li>Our Story</li><li>Benefits</li><li>Team</li><li>Careers</li></ul>
        </div>
        <div className="footer-col">
          <h4>NAVIGATION</h4>
          <ul><li>Content Solution</li><li>Video Production</li><li>Search Engine Optimization</li><li>Influencer Marketing</li></ul>
        </div>
        <div className="footer-col">
          <h4>HELP</h4>
          <ul><li>FAQs</li><li>Contact Us</li></ul>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-bottom">
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social facebook" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social instagram" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social youtube" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
            </svg>
          </a>
        </div>
        <div className="footer-copy">2026 Buzziwah.com | All Rights Reserved</div>
      </div>
    </footer>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   🌟 INTERACTIVE INFLUENCER COLLABORATIONS ROSTER
═══════════════════════════════════════════════════════ */
const IMCollaborationsSection = () => {
  const collabs = [
    { name: "Vaibhav Srinivas", brand: "Fitness Factory", role: "Fitness & Lifestyle Creator", reach: "1.2M+", engagement: "14.2%", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300", tag: "FITNESS" },
    { name: "Bakasura Brahmana", brand: "Samrat Restaurant", role: "Food & Culinary Storyteller", reach: "850K+", engagement: "18.9%", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300", tag: "FOOD & TRAVEL" },
    { name: "Shwetha Prasad", brand: "Fitness Factory", role: "Actor & Wellness Influencer", reach: "2.4M+", engagement: "11.5%", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300", tag: "WELLNESS" },
    { name: "Nikhil Goal", brand: "Buzziwah Collabs", role: "Tech & Travel Explorer", reach: "480K+", engagement: "9.2%", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300", tag: "TECH" },
    { name: "Mahira", brand: "Buzziwah Collabs", role: "Fashion & Creative Director", reach: "620K+", engagement: "12.8%", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=300", tag: "FASHION" }
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

        {/* Collaborations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {collabs.map((collab, idx) => (
            <div 
              key={idx}
              className="rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.01] to-white/[0.002] hover:border-[#a78bfa]/30 hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Image Header with dynamic hover zoom */}
              <div className="relative h-48 overflow-hidden rounded-t-[22px]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent z-10" />
                <img 
                  src={collab.img} 
                  alt={collab.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <span className="absolute top-3 left-3 z-20 text-[8px] font-mono font-black uppercase tracking-widest text-black bg-[#adfa3b] px-2.5 py-1 rounded-full">
                  {collab.tag}
                </span>
              </div>

              {/* Influencer Profile Details */}
              <div className="p-5 flex-1 flex flex-col justify-between relative z-10 -mt-4 bg-[#0a0a0a] rounded-b-3xl">
                <div>
                  <h3 className="font-['Montserrat'] text-sm font-black text-white uppercase tracking-wide group-hover:text-[#a78bfa] transition-colors duration-200">
                    {collab.name}
                  </h3>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mt-1">
                    {collab.role}
                  </p>
                  
                  <div className="p-2.5 rounded-xl bg-white/[0.01] border border-white/[0.03] mt-4 flex items-center justify-between text-[11px]">
                    <span className="text-white/40 font-medium">For Brand</span>
                    <span className="text-[#adfa3b] font-extrabold uppercase">{collab.brand}</span>
                  </div>
                </div>

                {/* Micro Stats */}
                <div className="mt-5 pt-4 border-t border-white/5 grid grid-cols-2 gap-2 text-center">
                  <div>
                    <span className="text-[10px] font-mono text-white/30 uppercase block">REACH</span>
                    <span className="text-white text-xs font-mono font-black">{collab.reach}</span>
                  </div>
                  <div className="border-l border-white/5">
                    <span className="text-[10px] font-mono text-white/30 uppercase block">ENG. RATE</span>
                    <span className="text-[#a78bfa] text-xs font-mono font-black">{collab.engagement}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
