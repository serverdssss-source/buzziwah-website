import React, { useState } from 'react';
import {
  FiAward,
  FiCamera,
  FiEdit3,
  FiShare2,
  FiVideo,
  FiCode,
  FiSearch,
  FiTrendingUp,
  FiArrowUpRight,
  FiArrowRight
} from 'react-icons/fi';

const UpscaleGrid = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [poppedStates, setPoppedStates] = useState(Array(8).fill(false));

  const services = [
    {
      id: 1,
      title: 'Branding',
      sub: 'Identity & Voice',
      icon: <FiAward />,
      href: '/branding',
      color: '#adfa3b', // Primary Lime
      image: '/grid/brand.png',
      description: 'Creating cohesive brands, logos, guidelines, custom typography and tone frameworks.'
    },
    {
      id: 2,
      title: 'Photography',
      sub: 'Product & Portfolio',
      icon: <FiCamera />,
      href: '/video-production',
      color: '#8b5cf6', // Primary Violet
      image: '/grid/photograpohy.png',
      description: 'Stunning high-fidelity digital captures, creative model shoots, and studio product photography.'
    },
    {
      id: 3,
      title: 'Content Solutions',
      sub: 'Creative Copywriting',
      icon: <FiEdit3 />,
      href: '/content-solution',
      color: '#8888a8', // Muted Slate
      image: '/grid/content.png',
      description: 'Engaging narratives, SEO articles, and conversion-centered copywriting designed to attract attention.'
    },
    {
      id: 4,
      title: 'Social SMM',
      sub: 'Organic Growth',
      icon: <FiShare2 />,
      href: '/social-media',
      color: '#adfa3b', // Primary Lime
      image: '/grid/social media manegementpng.png',
      description: 'Build organic presence, capture viral short-form video loops, and cultivate highly active communities.'
    },
    {
      id: 5,
      title: 'Video Production',
      sub: 'High-End Cinematic',
      icon: <FiVideo />,
      href: '/video-production',
      color: '#8b5cf6', // Primary Violet
      image: '/grid/video.png',
      description: 'Directing, shooting and editing professional short films, reels, and stunning high-retention social ads.'
    },
    {
      id: 6,
      title: 'Web Dev',
      sub: 'Sleek & Interactive',
      icon: <FiCode />,
      href: '/website-development',
      color: '#adfa3b', // Primary Lime
      image: '/grid/web devlopmnnt.png',
      description: 'Building blazing-fast, pixel-perfect, highly responsive reactive web experiences.'
    },
    {
      id: 7,
      title: 'SEO Solutions',
      sub: 'Search Authority',
      icon: <FiSearch />,
      href: '/seo',
      color: '#8888a8', // Muted Slate
      image: '/grid/seo.png',
      description: 'On-page technical auditing, link acquisition, and keyword optimization to claim organic page-one positions.'
    },
    {
      id: 8,
      title: 'Performance Ads',
      sub: 'ROAS & Scaled Budgets',
      icon: <FiTrendingUp />,
      href: '/performance-marketing',
      color: '#8b5cf6', // Primary Violet
      image: '/grid/performance markting.png',
      description: 'Precision-targeted paid search and social campaigns tailored for consistent return on ad spend.'
    },
  ];

  const handlePop = (index, href, e) => {
    e.stopPropagation();
    const updated = [...poppedStates];
    updated[index] = true;
    setPoppedStates(updated);

    setTimeout(() => {
      window.location.href = href;
    }, 500);
  };

  return (
    <div className="upscale-wrapper">
      <style>{`
        .upscale-wrapper {
          background: #060811;
          color: white;
          padding: 120px 24px;
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', system-ui, sans-serif;
        }

        /* 🌧️ Realistic Rain Droplets Backdrop running down glass windowpane */
        .raindrops-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 2;
        }

        .rain-trail {
          position: absolute;
          top: -180px;
          width: 1.5px;
          height: 140px;
          background: linear-gradient(to bottom, 
            rgba(255, 255, 255, 0) 0%, 
            rgba(139, 92, 246, 0.08) 40%, 
            rgba(173, 250, 59, 0.28) 80%, 
            rgba(255, 255, 255, 0.5) 100%
          );
          border-radius: 999px;
          opacity: 0;
          animation: slideRainDrop linear infinite;
        }

        .droplet {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 10px;
          background: rgba(255, 255, 255, 0.85);
          border-radius: 50% 50% 40% 40% / 60% 60% 40% 40%;
          box-shadow: 
            0 0 12px rgba(173, 250, 59, 0.65),
            0 0 4px rgba(255, 255, 255, 0.8),
            inset 0 1px 2px rgba(255, 255, 255, 1);
          border: 0.5px solid rgba(255, 255, 255, 0.4);
        }

        @keyframes slideRainDrop {
          0% { transform: translateY(0); opacity: 0; }
          4% { opacity: 0.65; }
          15% { transform: translateY(15vh); }
          25% { transform: translateY(15vh); }
          45% { transform: translateY(50vh); }
          52% { transform: translateY(50vh); }
          72% { transform: translateY(90vh); opacity: 0.85; }
          100% { transform: translateY(130vh); opacity: 0; }
        }

        .upscale-header {
          text-align: center;
          margin-bottom: 64px;
          position: relative;
          z-index: 10;
        }

        .upscale-kicker {
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #adfa3b;
          margin-bottom: 12px;
          display: inline-block;
          border-bottom: 1.5px solid rgba(173, 250, 59, 0.3);
          padding-bottom: 4px;
        }

        .upscale-header h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4.5vw, 3.4rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .upscale-header p {
          font-size: clamp(0.95rem, 1.5vw, 1.15rem);
          color: #8888a8;
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* ─── LIQUID ACCORDION LANDSCAPE LAYOUT ─── */
        .accordion-layout {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          gap: 18px;
          height: 560px;
          position: relative;
          z-index: 10;
          perspective: 2000px; /* Enable 3D perspective */
          transform-style: preserve-3d;
        }

        .accordion-panel {
          flex: 0.85; /* Expanded base size for collapsed panels */
          min-width: 80px;
          background: rgba(255, 255, 255, 0.035);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 36px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          transition: all 0.85s cubic-bezier(0.2, 1, 0.22, 1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 36px 24px;

          /* 3D Book Cover styling */
          transform-style: preserve-3d;
          transform-origin: left center;
          transform: rotateY(0deg) translateZ(0);
          backface-visibility: hidden;
        }

        .accordion-panel.active {
          flex: 4.5; /* Large expansion multiplier */
          background: rgba(255, 255, 255, 0.08);
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          border-color: var(--theme-color, #adfa3b);
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.65),
            0 0 25px var(--theme-color-trans, rgba(139, 92, 246, 0.25));
          padding: 36px;

          /* Flat unfold transition like an open book cover */
          transform: rotateY(-3deg) translateZ(15px);
        }

        .accordion-bg-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 10% 90%, var(--theme-color-trans, rgba(139, 92, 246, 0.12)) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.5s;
          pointer-events: none;
        }

        .accordion-panel.active .accordion-bg-glow {
          opacity: 1;
        }

        .accordion-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        /* Icon styling */
        .accordion-icon-box {
          width: 52px;
          height: 52px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: var(--theme-color, #ffffff);
          transition: all 0.4s;
          flex-shrink: 0;
        }

        .accordion-panel.active .accordion-icon-box {
          background: var(--theme-color, #adfa3b);
          border-color: var(--theme-color, #adfa3b);
          color: #000000;
          box-shadow: 0 0 15px var(--theme-color, #adfa3b);
        }

        .accordion-panel:not(.active) .accordion-icon-box {
          margin: 0 auto;
        }

        /* Arrow/Link Button kept "on top" right of header */
        .header-arrow-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          color: #ffffff;
          opacity: 0;
          transform: scale(0.6) rotate(-45deg);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          flex-shrink: 0;
        }

        .accordion-panel.active .header-arrow-btn {
          opacity: 1;
          transform: scale(1) rotate(0deg);
        }

        .accordion-panel:hover .header-arrow-btn {
          color: var(--theme-color, #adfa3b);
          border-color: var(--theme-color, #adfa3b);
          background: var(--theme-color-trans, rgba(139, 92, 246, 0.15));
          box-shadow: 0 0 15px var(--theme-color-trans, rgba(139, 92, 246, 0.25));
        }

        /* Central standalone bubble (Double Size, Translucent Floating) */
        .accordion-bubble-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 230px;
          position: relative;
          opacity: 0;
          transform: scale(0.6);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          width: 100%;
          margin: 16px 0;
        }

        .accordion-panel.active .accordion-bubble-container {
          opacity: 1;
          transform: scale(1);
        }

        .liquid-glass-bubble {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px) saturate(140%);
          -webkit-backdrop-filter: blur(12px) saturate(140%);
          box-shadow: 
            0 15px 35px rgba(0, 0, 0, 0.55), 
            inset 0 0 20px rgba(255, 255, 255, 0.15),
            0 0 1px 1px rgba(255, 255, 255, 0.2) inset;
          position: relative;
          overflow: visible; /* Let burst ring ripple out */
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .liquid-glass-bubble.popped {
          animation: bubble-burst-keyframes 0.5s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
          pointer-events: none;
        }

        @keyframes bubble-burst-keyframes {
          0% {
            transform: scale(1);
            opacity: 1;
            filter: brightness(1);
          }
          30% {
            transform: scale(1.1);
            opacity: 0.9;
            filter: brightness(1.5) blur(1.5px);
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
            filter: brightness(2) blur(4px);
          }
        }

        .bubble-burst-ring {
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          border: 3.5px solid var(--theme-color, #adfa3b);
          opacity: 0;
          pointer-events: none;
          transform: scale(1);
          box-shadow: 0 0 20px var(--theme-color, rgba(173, 250, 59, 0.4));
        }

        .liquid-glass-bubble.popped .bubble-burst-ring {
          animation: ripple-ring-keyframes 0.5s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
        }

        @keyframes ripple-ring-keyframes {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2.6);
            opacity: 0;
          }
        }

        .bubble-shine-layer {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 60%);
          z-index: 10;
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        .bubble-shine-layer::before {
          content: '';
          position: absolute;
          top: 15px;
          left: 30px;
          width: 50px;
          height: 24px;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0));
          border-radius: 50% / 80% 80% 20% 20%;
          transform: rotate(-35deg);
          filter: blur(1.5px);
        }

        .bubble-lens-content {
          position: absolute;
          inset: 6px;
          border-radius: 50%;
          overflow: hidden;
          background: #09090c;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bubble-lens-content img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Fill the bubble! */
          border-radius: 50%;
          opacity: 0.85;
          transform: scale(1.15); /* Zoomed in by default */
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, filter 0.4s ease;
        }

        .accordion-panel:hover .bubble-lens-content img {
          opacity: 1;
          transform: scale(1.25); /* Zoom in more on hover! */
          filter: drop-shadow(0 15px 30px var(--theme-color, rgba(173, 250, 59, 0.4)));
        }


        /* ─── COLLAPSED VERTICAL SPINE TEXT ─── */
        .vertical-spine-text {
          position: absolute;
          top: 62%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(180deg);
          writing-mode: vertical-rl;
          text-orientation: mixed;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          opacity: 1;
          transition: opacity 0.4s cubic-bezier(0.2, 1, 0.22, 1);
          z-index: 5;
        }

        .vertical-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.85);
          white-space: nowrap;
          transition: color 0.3s;
        }

        .accordion-panel:hover .vertical-title {
          color: var(--theme-color, #ffffff);
        }

        .accordion-panel.active .vertical-spine-text {
          opacity: 0;
        }

        /* ─── ACTIVE HORIZONTAL TEXT ─── */
        .accordion-text-container {
          display: block;
          opacity: 0;
          transition: opacity 0.4s ease;
          width: 100%;
        }

        .accordion-panel.active .accordion-text-container {
          opacity: 1;
        }

        .accordion-sub {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #8888a8;
          display: block;
          margin-bottom: 6px;
        }

        .accordion-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          transition: color 0.3s;
          font-size: 1.7rem;
        }

        .accordion-desc {
          font-size: 0.95rem;
          color: #8888a8;
          line-height: 1.6;
          max-width: 520px;
          margin-top: 14px;
          opacity: 0;
          transition: opacity 0.4s ease;
          display: block;
        }

        .accordion-panel.active .accordion-desc {
          opacity: 1;
        }

        /* Collapsed Panel Hides Horizontal Text */
        .accordion-panel:not(.active) .accordion-text-container {
          opacity: 0;
          pointer-events: none;
        }

        /* ─── RESPONSIVE DESIGN ─── */
        @media (max-width: 1100px) {
          .upscale-wrapper {
            padding: 80px 20px;
          }

          .upscale-header {
            margin-bottom: 48px;
          }

          .accordion-layout {
            flex-direction: column;
            height: auto;
            gap: 20px;
            perspective: none;
            transform-style: flat;
          }

          .accordion-panel {
            flex: none !important;
            height: auto;
            min-height: auto;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 16px;
            padding: 24px 20px;
            border-radius: 20px;
            
            /* Reset 3D */
            transform: none !important;
            transform-origin: center center !important;
          }

          .accordion-panel.active {
            height: auto;
            padding: 24px 20px;
          }

          .accordion-header {
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }

          .accordion-icon-box {
            width: 48px;
            height: 48px;
            font-size: 1.3rem;
            margin: 0;
          }

          .header-arrow-btn {
            opacity: 1 !important;
            transform: scale(1) rotate(0deg) !important;
            width: 40px;
            height: 40px;
            font-size: 1.1rem;
          }

          .vertical-spine-text {
            display: none !important;
          }

          .accordion-text-container {
            opacity: 1 !important;
            margin-top: 0;
            width: 100%;
          }

          .accordion-sub {
            font-size: 0.65rem;
            letter-spacing: 1.5px;
            margin-bottom: 4px;
          }

          .accordion-title {
            font-size: 1.4rem;
            margin-bottom: 8px;
          }

          .accordion-desc {
            opacity: 1 !important;
            display: block;
            font-size: 0.9rem;
            line-height: 1.5;
            margin-top: 8px;
          }

          .accordion-panel:not(.active) .accordion-text-container {
            opacity: 1 !important;
            pointer-events: auto;
          }

          .accordion-panel:not(.active) .accordion-desc {
            opacity: 1 !important;
          }

          .accordion-bubble-container {
            display: none;
          }

          .accordion-body-content {
            display: block;
            width: 100%;
            margin-top: 0;
          }

          .accordion-panel.active {
            background: rgba(255, 255, 255, 0.06);
          }
        }

        @media (max-width: 640px) {
          .upscale-wrapper {
            padding: 60px 16px;
          }

          .upscale-header h2 {
            font-size: clamp(1.5rem, 8vw, 2rem);
          }

          .accordion-layout {
            gap: 16px;
          }

          .accordion-panel {
            padding: 20px 16px;
            border-radius: 16px;
          }

          .accordion-icon-box {
            width: 44px;
            height: 44px;
            font-size: 1.2rem;
          }

          .header-arrow-btn {
            width: 36px;
            height: 36px;
            font-size: 1rem;
          }

          .accordion-title {
            font-size: 1.2rem;
          }

          .accordion-desc {
            font-size: 0.85rem;
          }
        }
      `}</style>

      {/* High-fidelity background decorations */}
      <div className="bbbbb-bg-decorations pointer-events-none select-none opacity-80">
          <div className="bbbbb-orb bbbbb-orb-purple" />
          <div className="bbbbb-orb bbbbb-orb-lime" />
          <div className="bbbbb-grid-perspective" />
          
          {/* Animated technical lines and vector curves */}
          <svg className="bbbbb-decor-waves" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Sweeping diagonal orbit halo */}
            <path d="M-200,600 Q720,-100 1640,600" stroke="rgba(168, 85, 247, 0.16)" strokeWidth="1" strokeDasharray="16 12" />
            
            <path d="M-100,200 C300,100 500,400 900,150 C1100,50 1300,300 1600,200" stroke="rgba(168, 85, 247, 0.28)" strokeWidth="1.5" strokeDasharray="8 6" />
            <path d="M-100,280 C320,180 540,480 940,230 C1140,130 1340,380 1640,280" stroke="rgba(173, 250, 59, 0.18)" strokeWidth="1.2" />
            <path d="M-50,450 C380,350 480,100 880,300 C1080,400 1280,150 1580,350" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="1" />
            
            {/* Target concentric circles and telemetry coordinates */}
            <circle cx="180" cy="160" r="90" stroke="rgba(168, 85, 247, 0.14)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="180" cy="160" r="130" stroke="rgba(173, 250, 59, 0.1)" strokeWidth="1" />
            <circle cx="1180" cy="380" r="160" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="1" strokeDasharray="12 6" />
            <circle cx="1180" cy="380" r="220" stroke="rgba(173, 250, 59, 0.08)" strokeWidth="1" />
            
            {/* Precision telemetry crosshairs */}
            <path d="M170,160 L190,160 M180,150 L180,170" stroke="rgba(173, 250, 59, 0.35)" strokeWidth="1.5" />
            <path d="M1170,380 L1190,380 M1180,370 L1180,390" stroke="rgba(168, 85, 247, 0.35)" strokeWidth="1.5" />
            {/* Glowing tech hexagons & concentric network node shapes */}
            <polygon points="1220,130 1260,155 1260,205 1220,230 1180,205 1180,155" stroke="rgba(173, 250, 59, 0.14)" strokeWidth="1" strokeDasharray="4 2" />
            <polygon points="1220,130 1260,155 1260,205 1220,230 1180,205 1180,155" stroke="rgba(173, 250, 59, 0.08)" strokeWidth="4" opacity="0.4" />
            <polygon points="140,480 170,498 170,532 140,550 110,532 110,498" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="1.2" />
          </svg>
  
          {/* Floating brand logo images rotating / pulsing */}
          <img src="/logo.png" className="absolute top-[8%] right-[5%] w-[4vw] min-w-[50px] opacity-15 animate-pulse select-none pointer-events-none" alt="Buzziwah Decorative Logo" />
          <img src="/logo.png" className="absolute bottom-[8%] left-[5%] w-[4vw] min-w-[50px] opacity-15 animate-pulse select-none pointer-events-none" alt="Buzziwah Decorative Logo" />

          {/* Large brand watermarks in outline font */}
          <div className="absolute top-[15%] left-[2%] text-transparent select-none pointer-events-none text-[8vw] md:text-[10vw] font-black tracking-[0.25em] uppercase opacity-20 rotate-[-4deg]" style={{ fontFamily: "'Syne', sans-serif", WebkitTextStroke: '1px rgba(255,255,255,0.25)' }}>
              WE BUZZ
          </div>
          <div className="absolute bottom-[15%] right-[2%] text-transparent select-none pointer-events-none text-[8vw] md:text-[10vw] font-black tracking-[0.25em] uppercase opacity-20 rotate-[4deg]" style={{ fontFamily: "'Syne', sans-serif", WebkitTextStroke: '1px rgba(255,255,255,0.25)' }}>
              BUZZIWAH
          </div>
      </div>


      <header className="upscale-header">
        <h2 className="retro-1" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: '16px', letterSpacing: '-2px' }}>Explore Our Core Suite</h2>
      </header>

      {/* Standalone Accordion Layout Panel Container */}
      <main className="accordion-layout">
        {services.map((s, idx) => (
          <div
            key={s.id}
            className={`accordion-panel ${activeIdx === idx ? 'active' : ''}`}
            style={{ '--theme-color': s.color, '--theme-color-trans': `${s.color}15` }}
            onMouseEnter={() => setActiveIdx(idx)}
            onClick={() => { if (activeIdx === idx) window.location.href = s.href; }}
          >
            <div className="accordion-bg-glow" />

            <div className="accordion-header">
              <div className="accordion-icon-box" style={{ '--theme-color': s.color }}>
                {s.icon}
              </div>

              {/* Arrow/Link Button kept "on top" right of header */}
              <div className="header-arrow-btn" style={{ '--theme-color': s.color }}>
                <FiArrowUpRight />
              </div>
            </div>

            <div className="vertical-spine-text">
              <span className="vertical-title">{s.title}</span>
            </div>

            <div className="accordion-bubble-container">
              <div
                className={`liquid-glass-bubble ${poppedStates[idx] ? 'popped' : ''}`}
                style={{ '--theme-color': s.color }}
                onClick={(e) => handlePop(idx, s.href, e)}
              >
                <div className="bubble-shine-layer" />
                <div className="bubble-lens-content">
                  <img src={encodeURI(s.image)} alt={s.title} />
                </div>
                <div className="bubble-burst-ring" />
              </div>
            </div>

            <div className="accordion-text-container">
              <span className="accordion-sub">{s.sub}</span>
              <h3 className="accordion-title retro-sm">{s.title}</h3>
              <p className="accordion-desc">{s.description}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default UpscaleGrid;
