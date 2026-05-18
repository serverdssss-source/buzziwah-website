import { useRef, useState } from 'react';
import VariableProximity from '../components/VariableProximity';

const DigitalMarketingSection = () => {
  const containerRef = useRef(null);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const marqueeItems = [
    'Branding & Identity',
    'Performance Marketing',
    'Social Media Management',
    'Cinema to Digital',
    'SEO & Content Strategy',
    'Web Design & Development',
    'OTT Campaigns',
  ];

  return (
    <section className="bbbbb-hero-section">
      {/* High-fidelity background decorations */}
      <div className="bbbbb-bg-decorations">
        <div className="bbbbb-orb bbbbb-orb-purple" />
        <div className="bbbbb-orb bbbbb-orb-lime" />
        <div className="bbbbb-grid-perspective" />
        
        {/* Animated technical lines and vector curves */}
        <svg className="bbbbb-decor-waves" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-200,600 Q720,-100 1640,600" stroke="rgba(168, 85, 247, 0.16)" strokeWidth="1" strokeDasharray="16 12" />
          <path d="M-100,200 C300,100 500,400 900,150 C1100,50 1300,300 1600,200" stroke="rgba(168, 85, 247, 0.28)" strokeWidth="1.5" strokeDasharray="8 6" />
          <path d="M-100,280 C320,180 540,480 940,230 C1140,130 1340,380 1640,280" stroke="rgba(173, 250, 59, 0.18)" strokeWidth="1.2" />
          <path d="M-50,450 C380,350 480,100 880,300 C1080,400 1280,150 1580,350" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="1" />
          <circle cx="180" cy="160" r="90" stroke="rgba(168, 85, 247, 0.14)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="180" cy="160" r="130" stroke="rgba(173, 250, 59, 0.1)" strokeWidth="1" />
          <circle cx="1180" cy="380" r="160" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="1" strokeDasharray="12 6" />
          <circle cx="1180" cy="380" r="220" stroke="rgba(173, 250, 59, 0.08)" strokeWidth="1" />
          <path d="M170,160 L190,160 M180,150 L180,170" stroke="rgba(173, 250, 59, 0.35)" strokeWidth="1.5" />
          <path d="M1170,380 L1190,380 M1180,370 L1180,390" stroke="rgba(168, 85, 247, 0.35)" strokeWidth="1.5" />
          <polygon points="1220,130 1260,155 1260,205 1220,230 1180,205 1180,155" stroke="rgba(173, 250, 59, 0.14)" strokeWidth="1" strokeDasharray="4 2" />
          <polygon points="140,480 170,498 170,532 140,550 110,532 110,498" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="1.2" />
        </svg>

        <img src="/logo.png" className="bbbbb-bg-logo bbbbb-bg-logo-1" alt="" role="presentation" />
        <img src="/logo.png" className="bbbbb-bg-logo bbbbb-bg-logo-2" alt="" role="presentation" />
        <img src="/logo.png" className="bbbbb-bg-logo-3d" alt="" role="presentation" />

        <div className="bbbbb-tech-plus bbbbb-tp-1">+</div>
        <div className="bbbbb-tech-plus bbbbb-tp-2">+</div>
        <div className="bbbbb-tech-plus bbbbb-tp-3">+</div>
        <div className="bbbbb-tech-plus bbbbb-tp-4">+</div>
      </div>

      <div className="bbbbb-hero-main">
        <div className="bbbbb-headline-wrap">
          <div className="bbbbb-kicker bbbbb-fiu" style={{ '--fiu-delay': '0.05s' }}>
            <span className="bbbbb-kicker-line" />
            Bengaluru&apos;s Digital Partner
          </div>

          <div ref={containerRef} style={{ position: 'relative' }}>
            <h1
              className="bbbbb-h1 bbbbb-fiu retro-1"
              style={{
                '--fiu-delay': '0.2s',
                margin: 0,
                marginBottom: '32px',
                lineHeight: '0.55',
                textAlign: 'left',
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
                transform: 'skewX(-8deg)',
              }}
            >
              <VariableProximity
                label="We're the"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                mode="sequential"
                autoSpeed={1.2}
                autoIntensity={1}
              />
              <br />
              <span style={{ color: '#adfa3b' }}>
                <VariableProximity
                  label="people"
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  mode="sequential"
                  autoSpeed={1.2}
                  autoIntensity={1}
                />
              </span>
              <br />
              <VariableProximity
                label="who think"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                mode="sequential"
                autoSpeed={1.2}
                autoIntensity={1}
              />
              <br />
              <span style={{ color: '#adfa3b' }}>
                <VariableProximity
                  label="sharp"
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  mode="sequential"
                  autoSpeed={1.2}
                  autoIntensity={1}
                />
              </span>
              <br />
              <span style={{ fontSize: '0.65em' }}>
                <VariableProximity
                  label="and move with swag."
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  mode="sequential"
                  autoSpeed={1.2}
                  autoIntensity={1}
                />
              </span>
            </h1>
          </div>

          <p className="bbbbb-sub bbbbb-fiu" style={{ '--fiu-delay': '0.38s', textAlign: 'justify' }}>
            This isn&apos;t your usual &ldquo;we post and pray&rdquo; agency. Buzziwah powered by Sripada Studios brings cinema-level storytelling into digital that actually converts.
            <br />
            <strong>Because looking good is easy&hellip; getting results isn&apos;t.</strong>
          </p>

          <div className="bbbbb-cta-row bbbbb-fiu" style={{ '--fiu-delay': '0.52s', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a className="bbbbb-cta-primary" href="/contact">
              Start a Project →
            </a>
            <a 
              className="bbbbb-cta-secondary" 
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const projectsSection = document.querySelector('#projects, .shuffle-cards-section');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              See Our Work
              <span className="bbbbb-cta-arrow">→</span>
            </a>
            
            {/* Audio Player Button */}
            <button
              onClick={toggleAudio}
              className="bbbbb-audio-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                background: 'rgba(173, 250, 59, 0.1)',
                border: '1px solid rgba(173, 250, 59, 0.3)',
                borderRadius: '50px',
                color: '#adfa3b',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: "'Syne', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(173, 250, 59, 0.2)';
                e.currentTarget.style.borderColor = '#adfa3b';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(173, 250, 59, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(173, 250, 59, 0.3)';
              }}
            >
              <span style={{ fontSize: '18px' }}>{isPlaying ? '⏸' : '▶'}</span>
              {isPlaying ? 'Pause' : 'Play'} Buzziwah Song
            </button>
            
            <audio ref={audioRef} src="/BuzziWah.mp3" loop />
          </div>
        </div>

        <div className="bbbbb-hero-left">
          <div className="bbbbb-hero-media-wrapper">
            <picture>
              <source srcSet="/image.webp" type="image/webp" />
              <img
                className="bbbbb-hero-person-img"
                src="/image.png"
                alt="Buzziwah Digital Marketing Team"
                width="758"
                height="948"
                loading="eager"
                fetchpriority="high"
              />
            </picture>

            <div className="bbbbb-phone-video-overlay">
              <video
                src="/hero-reel.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', borderRadius: 'inherit' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bbbbb-marquee-wrap">
        <div className="bbbbb-marquee-track">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <span className="bbbbb-m-item" key={`${item}-${idx}`}>
              <span className="bbbbb-m-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingSection;
