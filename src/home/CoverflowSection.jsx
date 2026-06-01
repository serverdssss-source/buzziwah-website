import React, { useEffect, useMemo, useState } from 'react';

const images = [
  '/expirtise.png',
  '/SSD_Performance-Marketing-Webpage-4.png',
  '/SSD_Performance-Marketing-Webpage-5.png',
];

const mod = (n, m) => ((n % m) + m) % m;

const CoverflowSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const items = useMemo(() => images, []);

  const goPrev = () => setActiveIndex((current) => mod(current - 1, items.length));
  const goNext = () => setActiveIndex((current) => mod(current + 1, items.length));

  useEffect(() => {
    const keyHandler = (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', keyHandler);
    return () => window.removeEventListener('keydown', keyHandler);
  }, [items.length]);

  return (
    <section
      className="coverflow-section"
      style={{
        padding: '60px 0',
      }}
    >
      {/* High-fidelity background decorations */}
      <div className="bbbbb-bg-decorations">
        {/* Floating high-fidelity green navbar logo shapes */}
        <img src="/logo.webp" className="bbbbb-bg-logo bbbbb-bg-logo-1" width="300" height="375" style={{ opacity: 0.12, height: 'auto' }} alt="" role="presentation" loading="lazy" />
        <img src="/logo.webp" className="bbbbb-bg-logo bbbbb-bg-logo-2" width="300" height="375" style={{ opacity: 0.12, height: 'auto' }} alt="" role="presentation" loading="lazy" />

        {/* Giant middle 3D watermark brand logo */}
        <img src="/logo.webp" className="bbbbb-bg-logo-3d" width="300" height="375" style={{ opacity: 0.04, height: 'auto' }} alt="" role="presentation" loading="lazy" />

        {/* Floating technical plus particles (+) */}
        <div className="bbbbb-tech-plus bbbbb-tp-1">+</div>
        <div className="bbbbb-tech-plus bbbbb-tp-2">+</div>
        <div className="bbbbb-tech-plus bbbbb-tp-3">+</div>
        <div className="bbbbb-tech-plus bbbbb-tp-4">+</div>
      </div>

      <h2 className="coverflow-heading retro-6">WHY CHOOSE US</h2>

      <div className="oooocoverflow">
        <button className="oooo-arrow oooo-arrow-left" type="button" onClick={goPrev} aria-label="Previous">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <button className="oooo-arrow oooo-arrow-right" type="button" onClick={goNext} aria-label="Next">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>

        {items.map((src, idx) => {
          const pos = mod(idx - activeIndex, items.length);
          let positionClass = 'ooooitem';
          if (idx === activeIndex) positionClass += ' active';
          else if (pos === 1 || pos === -4) positionClass += ' right1';
          else if (pos === items.length - 1 || pos === -1) positionClass += ' left1';
          else if (pos === 2 || pos === items.length - 2) positionClass += ' right2';
          else if (pos === 3 || pos === items.length - 3) positionClass += ' left2';

          return (
            <div
              key={src + idx}
              className={positionClass}
              onClick={() => setActiveIndex(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveIndex(idx); }}
            >
              <img src={src} alt={`Buzziwah service showcase ${idx + 1} — Why Choose Us`} loading="lazy" decoding="async" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CoverflowSection;
