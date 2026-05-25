import React, { useState, useEffect } from 'react';
import './VisibleOnlineSection.css';

const VisibleOnlineSection = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return true;
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const media = window.matchMedia('(max-width: 768px)');
    setIsMobile(media.matches);
    const listener = (e) => setIsMobile(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  return (
    <section className="von-hero">
      <div className="von-orb von-orb-1" />
      <div className="von-orb von-orb-2" />
      <div className="von-orb von-orb-3" />
      <div className="von-mesh" />

      <div className="von-inner">
        {/* LEFT */}
        <div className="von-left">
          <div className="von-badge">
            <span className="von-badge-dot" />
            We&rsquo;re Hiring
          </div>

          <h2 className="von-h1">
            <span className="von-h1-main">Join Our Team</span>
            <span className="von-grad">Build Something That Matters</span>
          </h2>

          <p className="von-desc">
            Work with a team that values creativity, execution, and real impact. No corporate fluff—just talented people building great work together.
          </p>

          <div className="von-features">
            <div className="von-feature">
              <span className="von-fi">✦</span>
              <span>Your ideas drive projects, not just fill meetings.</span>
            </div>
            <div className="von-feature">
              <span className="von-fi">✦</span>
              <span>Ownership and initiative are expected and rewarded.</span>
            </div>
            <div className="von-feature">
              <span className="von-fi">✦</span>
              <span>Fast-paced environment where quality matters.</span>
            </div>
          </div>

          <div className="von-btns">
            <a href="/contact" className="von-cta-primary">
              View Open Positions
              <span className="von-arr">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </a>
            <a href="/contact" className="von-cta-ghost">
              Learn More
              <svg className="von-ga" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>

        {/* RIGHT (The modern Tenor GIF Container) */}
        <div className="von-right">
          <div className="von-gif-container-wrapper">
            <div className="von-gif-frame">
              <div className="von-gif-header">
                <div className="von-gif-dots">
                  <span className="von-gif-dot-r" />
                  <span className="von-gif-dot-y" />
                  <span className="von-gif-dot-g" />
                </div>
                <span className="von-gif-title">BUZZIWAH_WORKSPACE.exe</span>
              </div>
              <div className="von-gif-body">
                {(!isMounted || isMobile) ? (
                  <img 
                    src="/BEGIDN THE BUZZ.webp" 
                    alt="Buzziwah Team Workspace"
                    style={{ width: '100%', height: 'auto', border: 'none', borderRadius: '12px', display: 'block', objectFit: 'cover' }}
                  />
                ) : (
                  <video 
                    src="/home page join .mp4" 
                    style={{ width: '100%', height: 'auto', border: 'none', borderRadius: '12px', display: 'block', objectFit: 'cover' }} 
                    ref={(el) => {
                      if (!el) return;
                      const io = new IntersectionObserver(([entry]) => {
                        if (entry.isIntersecting) { el.play().catch(() => {}); }
                        else { el.pause(); }
                      }, { threshold: 0.15 });
                      io.observe(el);
                    }}
                    loop
                    muted
                    playsInline
                    preload="none"
                  />
                )}
              </div>
            </div>
            <div className="von-gif-badge">
              <span>✦ WORK WITH US</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisibleOnlineSection;
