import React, { useRef } from 'react';
import VariableProximity from '../components/VariableProximity';
import './Services.css';

const services = [
  {
    title: 'Social Media Management',
    text: 'Content, community, and growth strategies to keep your brand active and loved.',
    href: '/social-media',
    image: encodeURI('/shared-purple-grid-bg.png'),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8" />
        <path d="M17.5 6.5h.01" />
      </svg>
    ),
  },
  {
    title: 'Performance Marketing',
    text: 'ROI-first paid campaigns across search, social, and display with transparent reporting.',
    href: '/performance-marketing',
    image: encodeURI('/shared-purple-grid-bg.png'),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9-4-18-3 9H2" />
      </svg>
    ),
  },
  {
    title: 'Branding & Identity',
    text: 'Build memorable brands with naming, visual systems, and clear messaging.',
    href: '/branding',
    image: encodeURI('/shared-purple-grid-bg.png'),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22 9 20.8l-3 .9-.9-3L2 16l1.9-2.8L2 10l3-.9.9-3L9 7l3-1 3 1 2.1-1.9.9 3L22 10l-1.9 3L22 16l-3 .9-.9 3L16 20.8 12 22Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Website Development',
    text: 'Fast, beautiful, conversion-focused websites engineered for growth.',
    href: '/website-development',
    image: encodeURI('/shared-purple-grid-bg.png'),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Video Production',
    text: 'Cinematic storytelling, ads, and product films that stop the scroll.',
    href: '/video-production',
    image: encodeURI('/shared-purple-grid-bg.png'),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
        <path d="m22 7-6 4 6 4V7Z" />
      </svg>
    ),
  },
  {
    title: 'Search Engine Optimization',
    text: 'Technical and on-page optimization to keep your brand discoverable.',
    href: '/seo',
    image: encodeURI('/shared-purple-grid-bg.png'),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <path d="m8 11 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Influencer Marketing',
    text: 'Creator partnerships that build trust and amplify reach.',
    href: '/influencer-marketing',
    image: encodeURI('/shared-purple-grid-bg.png'),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Content Solutions',
    text: 'Strategy, copy, and creative assets tailored to your brand voice.',
    href: '/content-solution',
    image: encodeURI('/shared-purple-grid-bg.png'),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Outdoor Marketing',
    text: 'Command attention and build immense brand trust in high-traffic real-world zones.',
    href: '/outdoor-marketing',
    image: encodeURI('/shared-purple-grid-bg.png'),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="12" rx="2" />
        <line x1="5" y1="15" x2="5" y2="21" />
        <line x1="19" y1="15" x2="19" y2="21" />
        <line x1="2" y1="15" x2="22" y2="15" />
      </svg>
    ),
  },
];

const Services = () => {
  const containerRef = useRef(null);
  return (
    <div className="services-page">
      <style>{`
        /* ── CODED PAGE BANNER STYLES ── */
        .coded-page-banner {
          position: relative;
          z-index: 0;
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
          font-family: 'Arial Black', sans-serif !important;
          font-size: clamp(32px, 5.5vw, 64px);
          font-weight: 900;
          color: #ffffff;
          margin: 0;
          line-height: 0.98;
          letter-spacing: -0.05em;
          position: relative;
          z-index: 2;
          text-align: center;
          text-transform: uppercase;
          text-shadow:
            2px 2px 0 #8b5cf6,
            4px 4px 0 #8b5cf6,
            6px 6px 0 #8b5cf6,
            8px 8px 0 #6d28d9,
            10px 10px 0 #5b21b6;
          -webkit-text-stroke: 2px #5b21b6;
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

        .services-intro {
          position: relative;
          z-index: 10;
          padding: 32px 24px 30px;
          width: min(1100px, 92vw);
          margin: 0 auto;
          display: grid;
          gap: 28px;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          background: rgba(8, 8, 18, 0.92);
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.22);
          border-radius: 28px;
          backdrop-filter: blur(16px);
        }

        @keyframes titleFadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <section className="services-hero" ref={containerRef}>
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

          <div className="coded-page-banner-badge">OVERVIEW // BUZZIWAH</div>
          <h1 className="coded-page-banner-title">
            <span style={{ display: 'block' }}>
              <VariableProximity
                label="We're the"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
                mode="random"
                autoSpeed={3.1}
                autoStagger={0.14}
              />
            </span>
            <span style={{ display: 'block', color: '#adfa3b', textShadow: '2px 2px 0 #adfa3b, 4px 4px 0 #adfa3b, 6px 6px 0 #adfa3b, 8px 8px 0 #83cd15, 10px 10px 0 #76b813' }}>
              <VariableProximity
                label="people"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
                mode="random"
                autoSpeed={3.1}
                autoStagger={0.14}
              />
            </span>
            <span style={{ display: 'block' }}>
              <VariableProximity
                label="who think"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
                mode="random"
                autoSpeed={3.1}
                autoStagger={0.14}
              />
            </span>
            <span style={{ display: 'block', color: '#adfa3b', textShadow: '2px 2px 0 #adfa3b, 4px 4px 0 #adfa3b, 6px 6px 0 #adfa3b, 8px 8px 0 #83cd15, 10px 10px 0 #76b813' }}>
              <VariableProximity
                label="sharp"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
                mode="random"
                autoSpeed={3.1}
                autoStagger={0.14}
              />
            </span>
            <span style={{ display: 'block', fontSize: 'clamp(1.4rem, 3.2vw, 2.8rem)', marginTop: '0.2em' }}>
              <VariableProximity
                label="and move with swag."
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
                mode="random"
                autoSpeed={3.1}
                autoStagger={0.14}
              />
            </span>
          </h1>
          <p className="coded-page-banner-subtitle">
            A comprehensive ecosystem of brand architecture, social strategy, viral production, and performance execution.
          </p>
        </div>
      </section>

    <section className="services-intro">
      <h2>Everything you need to grow online</h2>
      <p>
        We design integrated service stacks that connect your brand story with measurable outcomes.
        Choose a single service or combine them into a tailored growth plan.
      </p>
      <p>
        Each engagement starts with discovery, then moves into creative development, execution, and optimization.
        That means you get strategy, production, and performance in one place.
      </p>
    </section>

    <section className="services-grid" id="services-grid">
      {services.map((service, index) => (
        <a className="service-card" href={service.href} key={service.title}>
          <div className="service-card-media">
            <img src={service.image} alt="" />
            <div className="service-card-overlay" />
            <div className="service-card-media-top">
              <div className="service-card-icon" aria-hidden="true">{service.icon}</div>
              <span className="service-card-tag">{String(index + 1).padStart(2, '0')}</span>
            </div>
          </div>
          <div className="service-card-body">
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-text">{service.text}</p>
            <span className="service-card-cta">
              View service <span className="service-card-arrow">→</span>
            </span>
          </div>
        </a>
      ))}
    </section>

    <section className="contact-form-section" id="contact">
      <div className="contact-form-header">
        <h2>Contact Us</h2>
        <p>Tell us about your project and we will get back to you quickly.</p>
      </div>
      <div className="contact-form-inner">
        <div className="contact-form-image">
          <img src="/shared-contact-section-illustration.png" alt="Contact" />
        </div>

        <div>
          <form className="contact-form">
            <div className="form-row two">
              <label className="form-field">
                <span>Name *</span>
                <input type="text" placeholder="First" required />
              </label>
              <label className="form-field">
                <span>&nbsp;</span>
                <input type="text" placeholder="Last" required />
              </label>
            </div>

            <div className="form-row two">
              <label className="form-field">
                <span>Email *</span>
                <input type="email" placeholder="Email" required />
              </label>
              <label className="form-field">
                <span>Numbers</span>
                <input type="tel" placeholder="Phone" />
              </label>
            </div>

            <div className="form-row">
              <label className="form-field">
                <span>Select your Services *</span>
                <select required>
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
              <label className="form-field">
                <span>Message *</span>
                <textarea rows="5" placeholder="Comment or Message" required />
              </label>
            </div>

            <div className="form-actions">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <footer className="site-footer">
      <div className="footer-cta">
        <img
          className="footer-logo"
          src="/logo.png"
          alt="Buzziwah"
        />
        <div className="footer-cta-text">Ready To Get Started</div>
        <button className="footer-cta-button" type="button">
          Get Started {'->'}
        </button>
      </div>

      <div className="footer-divider" />

      <div className="footer-grid">
        <div className="footer-col">
          <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <input className="footer-input" type="text" placeholder="Name" />
          <input className="footer-input" type="email" placeholder="Email Address" />
          <button className="footer-subscribe" type="button">
            Subscribe
          </button>
        </div>

        <div className="footer-col">
          <h4>SERVICES</h4>
          <ul>
            <li>Performance Marketing</li>
            <li>Social Media Management</li>
            <li>Website Development</li>
            <li>Branding and Re-branding</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>ABOUT</h4>
          <ul>
            <li>Our Story</li>
            <li>Benefits</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>NAVIGATION</h4>
          <ul>
            <li>Content Solution</li>
            <li>Video Production</li>
            <li>Search Engine Optimization</li>
            <li>Influencer Marketing</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>HELP</h4>
          <ul>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
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

export default Services;
