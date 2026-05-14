import { useRef, useState, useEffect } from 'react';

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

const processSteps = [
  {
    num: '01', label: 'Discovery & Vetting', color: '#a78bfa',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>),
    bullets: ['Find influencers aligned with your goals, audience & industry', 'Filter by niche, demographics, content type & aesthetic', 'Analyse engagement quality, past work, values & content style'],
  },
  {
    num: '02', label: 'Campaign Strategy', color: '#a78bfa',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>),
    bullets: ['Strategies built around your brand voice & business goals', 'Market research & trend analysis driven by real numbers', 'Creative campaign concepts that stop the scroll'],
  },
  {
    num: '03', label: 'Content Management', color: '#83cd15',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>),
    bullets: ['End-to-end execution — trending, timely & accurate', 'Content calendar to plan & schedule across all platforms', 'Authentic creator-led storytelling that truly resonates'],
  },
  {
    num: '04', label: 'Performance Tracking', color: '#83cd15',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>),
    bullets: ['Real-time monitoring across all platforms', 'Campaign summaries with clear ROI for every client', 'Deep-dive insights & actionable future recommendations'],
  },
];

export const IMProcess = () => {
  const [active, setActive] = useState(0);
  const [sectionRef, sectionInView] = useInView(0.1);
  const step = processSteps[active];

  return (
    <section ref={sectionRef} className="im-process-section" style={{ background: '#080808', padding: '96px 40px', position: 'relative', overflow: 'hidden', fontFamily: "'Montserrat', sans-serif" }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'linear-gradient(rgba(131,205,21,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(131,205,21,0.8) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '-200px', left: '10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,33,182,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-100px', right: '5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(131,205,21,0.10) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="im-process-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '24px', opacity: sectionInView ? 1 : 0, transform: sectionInView ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px', padding: '5px 14px', borderRadius: '100px', border: '1px solid rgba(131,205,21,0.3)', background: 'rgba(131,205,21,0.06)' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#83cd15', boxShadow: '0 0 8px #83cd15' }} />
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#83cd15' }}>Our Process</span>
            </div>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(38px, 5vw, 64px)', fontWeight: 900, color: '#fff', lineHeight: 1.04, letterSpacing: '-0.03em', margin: 0 }}>
              Influencer<br /><em style={{ color: '#83cd15', fontStyle: 'italic' }}>Marketing</em> Process
            </h2>
          </div>
          <p style={{ maxWidth: '280px', fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontWeight: 400, borderLeft: '2px solid rgba(131,205,21,0.4)', paddingLeft: '16px' }}>
            A strategic, end-to-end framework connecting your brand with the right voices — turning them into measurable, lasting growth.
          </p>
        </div>

        <div className="im-process-buttons" style={{ display: 'flex', gap: '8px', marginBottom: '40px', flexWrap: 'wrap', opacity: sectionInView ? 1 : 0, transform: sectionInView ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s' }}>
          {processSteps.map((s, i) => (
            <button key={s.num} onClick={() => setActive(i)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 20px', borderRadius: '100px', border: 'none', cursor: 'pointer', background: active === i ? s.color : 'rgba(255,255,255,0.05)', color: active === i ? '#000' : 'rgba(255,255,255,0.55)', fontFamily: "'Montserrat', sans-serif", fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em', transition: 'all 0.25s ease', transform: active === i ? 'scale(1.04)' : 'scale(1)' }}>
              <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: active === i ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 800 }}>{s.num}</span>
              {s.label}
            </button>
          ))}
        </div>

        <div className="im-process-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', opacity: sectionInView ? 1 : 0, transform: sectionInView ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}>
          <div className="im-process-card" style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${step.color}30`, borderRadius: '24px', padding: '44px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }} />
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: `${step.color}18`, border: `1px solid ${step.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: step.color, marginBottom: '24px' }}>{step.icon}</div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: step.color, marginBottom: '8px' }}>Step {step.num}</div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '32px', fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: '32px' }}>{step.label}</h3>
            <div style={{ height: '1px', background: `linear-gradient(90deg, ${step.color}50, transparent)`, marginBottom: '28px' }} />
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {step.bullets.map((b, i) => (
                <li key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', fontSize: '15px', color: '#fff', lineHeight: 1.65 }}>
                  <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: `${step.color}20`, border: `1px solid ${step.color}50`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: step.color }}>✓</span>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Journey Progress</div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                {processSteps.map((s, i) => (
                  <div key={i} onClick={() => setActive(i)} style={{ flex: i === active ? 3 : 1, height: '6px', borderRadius: '100px', background: i <= active ? s.color : 'rgba(255,255,255,0.1)', transition: 'all 0.4s ease', cursor: 'pointer', boxShadow: i === active ? `0 0 12px ${s.color}60` : 'none' }} />
                ))}
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
                Step <strong style={{ color: '#fff' }}>{active + 1}</strong> of <strong style={{ color: '#fff' }}>4</strong> — <span style={{ color: step.color }}>{step.label}</span>
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '28px', flex: 1 }}>
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '20px' }}>Pipeline Flow</div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {processSteps.map((s, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => setActive(i)}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: i <= active ? s.color : 'rgba(255,255,255,0.08)', border: i === active ? `2px solid ${s.color}` : '2px solid transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 800, color: i <= active ? '#000' : 'rgba(255,255,255,0.3)', boxShadow: i === active ? `0 0 20px ${s.color}50` : 'none', transition: 'all 0.35s ease', flexShrink: 0 }}>{s.num}</div>
                      {i < processSteps.length - 1 && <div style={{ width: '2px', height: '20px', background: i < active ? 'rgba(131,205,21,0.5)' : 'rgba(255,255,255,0.08)', transition: 'background 0.35s ease' }} />}
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: i === active ? 700 : 400, color: i === active ? '#fff' : 'rgba(255,255,255,0.35)', transition: 'all 0.3s ease', paddingBottom: i < processSteps.length - 1 ? '20px' : '0' }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="im-process-footer" style={{ marginTop: '24px', background: 'linear-gradient(135deg, rgba(91,33,182,0.4) 0%, rgba(131,205,21,0.15) 100%)', border: '1px solid rgba(131,205,21,0.2)', borderRadius: '20px', padding: '28px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', opacity: sectionInView ? 1 : 0, transform: sectionInView ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s' }}>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#83cd15', marginBottom: '6px' }}>End-to-End. Always.</div>
            <div style={{ fontSize: '22px', fontWeight: 800, color: '#fff', fontFamily: "'Montserrat', sans-serif" }}>From first search to final report — we own every step.</div>
          </div>
          <div className="im-process-footer-stats" style={{ display: 'flex', gap: '40px' }}>
            {[['Discovery', '01'], ['Strategy', '02'], ['Content', '03'], ['Tracking', '04']].map(([l, n]) => (
              <div key={n} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '22px', fontWeight: 900, color: '#83cd15', fontFamily: "'Montserrat', sans-serif" }}>{n}</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeSlideIn { 
          from { opacity: 0; transform: translateY(16px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        
        @media (max-width: 1024px) {
          .im-process-section {
            padding: 72px 20px !important;
          }
          
          .im-process-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .im-process-buttons {
            gap: 6px !important;
          }
          
          .im-process-buttons button {
            font-size: 11px !important;
            padding: 8px 14px !important;
          }
          
          .im-process-buttons button span {
            width: 18px !important;
            height: 18px !important;
            font-size: 9px !important;
          }
          
          .im-process-card {
            padding: 32px 24px !important;
          }
          
          .im-process-card h3 {
            font-size: 26px !important;
          }
          
          .im-process-footer {
            flex-direction: column !important;
            text-align: center !important;
            gap: 24px !important;
          }
          
          .im-process-footer-stats {
            justify-content: center !important;
          }
        }
        
        @media (max-width: 640px) {
          .im-process-section {
            padding: 56px 16px !important;
          }
          
          .im-process-header {
            margin-bottom: 40px !important;
          }
          
          .im-process-header h2 {
            font-size: clamp(32px, 9vw, 48px) !important;
          }
          
          .im-process-header p {
            max-width: 100% !important;
            border-left: none !important;
            padding-left: 0 !important;
            text-align: center !important;
          }
          
          .im-process-buttons {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          
          .im-process-buttons button {
            width: 100% !important;
            justify-content: flex-start !important;
          }
          
          .im-process-card {
            padding: 28px 20px !important;
          }
          
          .im-process-card h3 {
            font-size: 22px !important;
            padding-right: 0 !important;
          }
          
          .im-process-card ul li {
            font-size: 14px !important;
          }
          
          .im-process-footer-stats {
            flex-direction: column !important;
            gap: 16px !important;
          }
          
          .im-process-footer-stats > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.07) !important;
            padding: 16px 0 !important;
          }
          
          .im-process-footer-stats > div:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
};

const whyItems = [
  { num: '1', title: 'Strategic, Authentic, Results-Driven', body: 'Hundreds of successful campaigns built on trust-driven storytelling. Our strategy-first approach makes every activation genuinely impactful — not just visible.', tag: 'Brand Strategy', accent: '#a78bfa' },
  { num: '2', title: 'Performance-Driven Campaigns', body: 'We focus on outcomes — traffic, conversions, brand growth. Real-time optimisation and deep insights ensure every rupee delivers maximum ROI.', tag: 'ROI Focused', accent: '#83cd15' },
  { num: '3', title: 'Creative That Converts', body: 'Personal, engaging creator stories crafted with a unique point of view. Every piece is designed to inspire action and deliver undeniable value.', tag: 'Content First', accent: '#a78bfa' },
  { num: '4', title: 'End-to-End Service', body: 'From curating the perfect influencers to overseeing every detail of execution — we blend style and substance for campaigns that truly stand out.', tag: 'Full Service', accent: '#83cd15' },
];

const WhyCard = ({ item, delay }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [visRef, visible] = useInView(0.2);
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTilt({ x: ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -8, y: ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 8 });
  };
  return (
    <div ref={visRef} onMouseMove={handleMove} onMouseEnter={() => setHovered(true)} onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }} style={{ perspective: '1200px', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)', transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s` }}>
      <div style={{ background: hovered ? 'linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))' : 'rgba(255,255,255,0.03)', border: `1px solid ${hovered ? item.accent + '50' : 'rgba(255,255,255,0.08)'}`, borderRadius: '24px', padding: '36px', position: 'relative', overflow: 'hidden', transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovered ? 1.02 : 1})`, transition: 'transform 0.35s ease, border-color 0.3s ease, background 0.3s ease', cursor: 'default', height: '100%', boxSizing: 'border-box' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '120px', borderRadius: '0 24px 0 120px', background: `${item.accent}${hovered ? '20' : '0a'}`, transition: 'background 0.35s ease', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: '2px', background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)`, opacity: hovered ? 1 : 0.4, transition: 'opacity 0.3s ease' }} />
        <div style={{ fontSize: '80px', fontWeight: 900, fontFamily: "'Montserrat', sans-serif", color: `${item.accent}${hovered ? '25' : '15'}`, lineHeight: 1, position: 'absolute', top: '16px', right: '24px', userSelect: 'none' }}>{item.num}</div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '100px', background: `${item.accent}15`, border: `1px solid ${item.accent}30`, marginBottom: '20px' }}>
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: item.accent }} />
          <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: item.accent }}>{item.tag}</span>
        </div>
        <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '15px', fontWeight: 800, color: '#fff', lineHeight: 1.3, marginBottom: '16px', paddingRight: '40px' }}>{item.title}</h3>
        <p style={{ fontSize: '14px', color: '#fff', lineHeight: 1.75, margin: 0, textAlign: 'justify' }}>{item.body}</p>
      </div>
    </div>
  );
};

export const WhyChooseUs = () => {
  const [headerRef, headerInView] = useInView(0.15);
  return (
    <section style={{ background: '#0a0a0a', padding: '96px 40px', position: 'relative', overflow: 'hidden', fontFamily: "'Montserrat', sans-serif" }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.025, backgroundImage: 'repeating-linear-gradient(-45deg, #83cd15 0, #83cd15 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '900px', height: '500px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(91,33,182,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 16px', borderRadius: '100px', border: '1px solid rgba(167,139,250,0.3)', background: 'rgba(167,139,250,0.06)', marginBottom: '20px', opacity: headerInView ? 1 : 0, transform: headerInView ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a78bfa', boxShadow: '0 0 8px #a78bfa' }} />
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#a78bfa' }}>Why Us</span>
          </div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, color: '#fff', lineHeight: 1.08, letterSpacing: '-0.02em', margin: '0 0 16px', opacity: headerInView ? 1 : 0, transform: headerInView ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s' }}>
            Why <em style={{ color: '#83cd15', fontStyle: 'italic' }}>Choose</em> Us
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7, opacity: headerInView ? 1 : 0, transform: headerInView ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s' }}>
            Four pillars that separate great influence from fleeting noise.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '60px' }}>
          {whyItems.map((item, i) => <WhyCard key={item.num} item={item} delay={i * 0.1 + 0.2} />)}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '48px' }}>
          {[{ val: '500+', label: 'Campaigns Delivered' }, { val: '98%', label: 'Client Retention Rate' }, { val: '10×', label: 'Average ROI' }, { val: '3.2M+', label: 'Organic Impressions' }].map((s, i) => (
            <div key={i} style={{ flex: '1 1 160px', textAlign: 'center', padding: '20px 24px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
              <div style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 900, fontFamily: "'Montserrat', sans-serif", color: i % 2 === 0 ? '#83cd15' : '#a78bfa', lineHeight: 1.1, marginBottom: '6px' }}>{s.val}</div>
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
