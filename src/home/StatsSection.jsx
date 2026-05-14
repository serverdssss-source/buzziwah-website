import React, { useState, useEffect, useRef } from 'react';
import './StatsSection.css';

const RunningNumber = ({ num }) => {
  const [current, setCurrent] = useState(0);
  const elementRef = useRef(null);
  const [hasRun, setHasRun] = useState(false);

  // Parse target number and original suffix attributes safely
  const numericPart = parseInt(num.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = num.replace(/[0-9,]/g, '');
  const hasCommas = num.includes(',');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasRun) {
          setHasRun(true);
          const duration = 2000; // 2 seconds animation duration
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function: easeOutCubic
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const val = Math.floor(easeOutCubic * numericPart);

            setCurrent(val);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [numericPart, hasRun]);

  const formatNumber = (val) => {
    if (hasCommas) {
      return val.toLocaleString();
    }
    return val;
  };

  return (
    <span ref={elementRef} className="stats-card-number">
      {formatNumber(current)}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const stats = [
    {
      num: "100+",
      label: "Brands",
      sub: "Collaborated & scaled.",
      color: "#8b5cf6" // vibrant purple
    },
    {
      num: "600,000+",
      label: "Leads",
      sub: "Not by accident.",
      color: "#c8ff00" // bright neon green
    },
    {
      num: "50M+",
      label: "Views",
      sub: "Every year. Consistently.",
      color: "#3b82f6" // deep neon blue
    },
    {
      num: "300%",
      label: "Organic Growth",
      sub: "Because strategy > luck.",
      color: "#f59e0b" // neon amber
    }
  ];

  return (
    <section className="stats-section-premium">
      {/* Background Glowing Aura */}
      <div className="stats-glow-aura aura-left" />
      <div className="stats-glow-aura aura-right" />

      <div className="stats-container">
        
        {/* Header Title */}
        <div className="stats-header">
          <div className="stats-badge">PROOF IN NUMBERS</div>
          <h2 className="stats-heading">Best in the market? We'll let the results answer that.</h2>
        </div>

        {/* 4-Column Cyber Bento Grid */}
        <div className="stats-grid">
          {stats.map((item, index) => (
            <div key={index} className="stats-card">
              <div className="stats-card-border-glow" />
              <div className="stats-card-inner">
                {/* Tech micro indicators */}
                <div className="stats-card-tech-dots">
                  <span></span><span></span><span></span>
                </div>
                
                <div className="stats-card-num-wrapper">
                  <RunningNumber num={item.num} />
                </div>
                
                <h3 className="stats-card-label retro-sm">{item.label}</h3>
                <p className="stats-card-desc">{item.sub}</p>
                
                <div className="stats-card-accent-line" style={{ background: item.color }} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
