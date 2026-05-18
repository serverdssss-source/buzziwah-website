var O=Object.defineProperty;var B=(t,s,o)=>s in t?O(t,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[s]=o;var z=(t,s,o)=>B(t,typeof s!="symbol"?s+"":s,o);import{r as d,j as e,g as S,L,R as u,u as W,a as y,b as M,m as R}from"./animation-vendor-2OyP_18a.js";/* empty css             */import{F as T,a as D,b as F,c as q,d as $,e as H,f as G,g as V,h as Z,i as U}from"./index-1a7gx43L.js";import{V as k}from"./VariableProximity-HzNwaBXZ.js";import{S as _}from"./Section10-BoTqWA1Q.js";import{S as J}from"./ScrollTrigger-D1XJUMov.js";import"./iconBase-CdZbRleB.js";const Y=()=>{const[t,s]=d.useState(0),[o,r]=d.useState(Array(8).fill(!1)),l=[{id:1,title:"Branding",sub:"Identity & Voice",icon:e.jsx(D,{}),href:"/branding",color:"#adfa3b",image:"/grid/brand.png",description:"Creating cohesive brands, logos, guidelines, custom typography and tone frameworks."},{id:2,title:"Photography",sub:"Product & Portfolio",icon:e.jsx(F,{}),href:"/video-production",color:"#8b5cf6",image:"/grid/photograpohy.png",description:"Stunning high-fidelity digital captures, creative model shoots, and studio product photography."},{id:3,title:"Content Solutions",sub:"Creative Copywriting",icon:e.jsx(q,{}),href:"/content-solution",color:"#8888a8",image:"/grid/content.png",description:"Engaging narratives, SEO articles, and conversion-centered copywriting designed to attract attention."},{id:4,title:"Social SMM",sub:"Organic Growth",icon:e.jsx($,{}),href:"/social-media",color:"#adfa3b",image:"/grid/social media manegementpng.png",description:"Build organic presence, capture viral short-form video loops, and cultivate highly active communities."},{id:5,title:"Video Production",sub:"High-End Cinematic",icon:e.jsx(H,{}),href:"/video-production",color:"#8b5cf6",image:"/grid/video.png",description:"Directing, shooting and editing professional short films, reels, and stunning high-retention social ads."},{id:6,title:"Web Dev",sub:"Sleek & Interactive",icon:e.jsx(G,{}),href:"/website-development",color:"#adfa3b",image:"/grid/web devlopmnnt.png",description:"Building blazing-fast, pixel-perfect, highly responsive reactive web experiences."},{id:7,title:"SEO Solutions",sub:"Search Authority",icon:e.jsx(V,{}),href:"/seo",color:"#8888a8",image:"/grid/seo.png",description:"On-page technical auditing, link acquisition, and keyword optimization to claim organic page-one positions."},{id:8,title:"Performance Ads",sub:"ROAS & Scaled Budgets",icon:e.jsx(Z,{}),href:"/performance-marketing",color:"#8b5cf6",image:"/grid/performance markting.png",description:"Precision-targeted paid search and social campaigns tailored for consistent return on ad spend."}],i=(a,n,p)=>{p.stopPropagation();const c=[...o];c[a]=!0,r(c),setTimeout(()=>{window.location.href=n},500)};return e.jsxs("div",{className:"upscale-wrapper",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"bbbbb-bg-decorations pointer-events-none select-none opacity-80",children:[e.jsx("div",{className:"bbbbb-orb bbbbb-orb-purple"}),e.jsx("div",{className:"bbbbb-orb bbbbb-orb-lime"}),e.jsx("div",{className:"bbbbb-grid-perspective"}),e.jsxs("svg",{className:"bbbbb-decor-waves",viewBox:"0 0 1440 800",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M-200,600 Q720,-100 1640,600",stroke:"rgba(168, 85, 247, 0.16)",strokeWidth:"1",strokeDasharray:"16 12"}),e.jsx("path",{d:"M-100,200 C300,100 500,400 900,150 C1100,50 1300,300 1600,200",stroke:"rgba(168, 85, 247, 0.28)",strokeWidth:"1.5",strokeDasharray:"8 6"}),e.jsx("path",{d:"M-100,280 C320,180 540,480 940,230 C1140,130 1340,380 1640,280",stroke:"rgba(173, 250, 59, 0.18)",strokeWidth:"1.2"}),e.jsx("path",{d:"M-50,450 C380,350 480,100 880,300 C1080,400 1280,150 1580,350",stroke:"rgba(168, 85, 247, 0.15)",strokeWidth:"1"}),e.jsx("circle",{cx:"180",cy:"160",r:"90",stroke:"rgba(168, 85, 247, 0.14)",strokeWidth:"1",strokeDasharray:"4 4"}),e.jsx("circle",{cx:"180",cy:"160",r:"130",stroke:"rgba(173, 250, 59, 0.1)",strokeWidth:"1"}),e.jsx("circle",{cx:"1180",cy:"380",r:"160",stroke:"rgba(168, 85, 247, 0.15)",strokeWidth:"1",strokeDasharray:"12 6"}),e.jsx("circle",{cx:"1180",cy:"380",r:"220",stroke:"rgba(173, 250, 59, 0.08)",strokeWidth:"1"}),e.jsx("path",{d:"M170,160 L190,160 M180,150 L180,170",stroke:"rgba(173, 250, 59, 0.35)",strokeWidth:"1.5"}),e.jsx("path",{d:"M1170,380 L1190,380 M1180,370 L1180,390",stroke:"rgba(168, 85, 247, 0.35)",strokeWidth:"1.5"}),e.jsx("polygon",{points:"1220,130 1260,155 1260,205 1220,230 1180,205 1180,155",stroke:"rgba(173, 250, 59, 0.14)",strokeWidth:"1",strokeDasharray:"4 2"}),e.jsx("polygon",{points:"1220,130 1260,155 1260,205 1220,230 1180,205 1180,155",stroke:"rgba(173, 250, 59, 0.08)",strokeWidth:"4",opacity:"0.4"}),e.jsx("polygon",{points:"140,480 170,498 170,532 140,550 110,532 110,498",stroke:"rgba(168, 85, 247, 0.15)",strokeWidth:"1.2"})]}),e.jsx("img",{src:"/logo.png",className:"absolute top-[8%] right-[5%] w-[4vw] min-w-[50px] opacity-15 animate-pulse select-none pointer-events-none",alt:"Buzziwah Decorative Logo"}),e.jsx("img",{src:"/logo.png",className:"absolute bottom-[8%] left-[5%] w-[4vw] min-w-[50px] opacity-15 animate-pulse select-none pointer-events-none",alt:"Buzziwah Decorative Logo"}),e.jsx("div",{className:"absolute top-[15%] left-[2%] text-transparent select-none pointer-events-none text-[8vw] md:text-[10vw] font-black tracking-[0.25em] uppercase opacity-20 rotate-[-4deg]",style:{fontFamily:"'Syne', sans-serif",WebkitTextStroke:"1px rgba(255,255,255,0.25)"},children:"WE BUZZ"}),e.jsx("div",{className:"absolute bottom-[15%] right-[2%] text-transparent select-none pointer-events-none text-[8vw] md:text-[10vw] font-black tracking-[0.25em] uppercase opacity-20 rotate-[4deg]",style:{fontFamily:"'Syne', sans-serif",WebkitTextStroke:"1px rgba(255,255,255,0.25)"},children:"BUZZIWAH"})]}),e.jsx("div",{className:"raindrops-container",children:[...Array(14)].map((a,n)=>e.jsx("div",{className:"rain-trail",style:{left:`${3+n*7.4%94}%`,animationDelay:`${n*1.5}s`,animationDuration:`${5.2+n*2.1%6}s`},children:e.jsx("div",{className:"droplet"})},n))}),e.jsx("header",{className:"upscale-header",children:e.jsx("h2",{className:"retro-1",style:{fontSize:"clamp(1.8rem, 3.5vw, 2.6rem)",marginBottom:"16px",letterSpacing:"-2px"},children:"Explore Our Core Suite"})}),e.jsx("main",{className:"accordion-layout",children:l.map((a,n)=>e.jsxs("div",{className:`accordion-panel ${t===n?"active":""}`,style:{"--theme-color":a.color,"--theme-color-trans":`${a.color}15`},onMouseEnter:()=>s(n),onClick:()=>{t===n&&(window.location.href=a.href)},children:[e.jsx("div",{className:"accordion-bg-glow"}),e.jsxs("div",{className:"accordion-header",children:[e.jsx("div",{className:"accordion-icon-box",style:{"--theme-color":a.color},children:a.icon}),e.jsx("div",{className:"header-arrow-btn",style:{"--theme-color":a.color},children:e.jsx(T,{})})]}),e.jsx("div",{className:"vertical-spine-text",children:e.jsx("span",{className:"vertical-title",children:a.title})}),e.jsx("div",{className:"accordion-bubble-container",children:e.jsxs("div",{className:`liquid-glass-bubble ${o[n]?"popped":""}`,style:{"--theme-color":a.color},onClick:p=>i(n,a.href,p),children:[e.jsx("div",{className:"bubble-shine-layer"}),e.jsx("div",{className:"bubble-lens-content",children:e.jsx("img",{src:encodeURI(a.image),alt:a.title})}),e.jsx("div",{className:"bubble-burst-ring"})]})}),e.jsxs("div",{className:"accordion-text-container",children:[e.jsx("span",{className:"accordion-sub",children:a.sub}),e.jsx("h3",{className:"accordion-title retro-sm",children:a.title}),e.jsx("p",{className:"accordion-desc",children:a.description})]})]},a.id))})]})},K=({image:t="/BEGIDN THE BUZZ.png"})=>e.jsxs("section",{className:"content-sales-section",children:[e.jsxs("div",{className:"sales-bg-decorations",children:[e.jsx("div",{className:"sales-shape sales-triangle sales-t1",children:e.jsx("svg",{viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M50 15 L85 75 H15 Z",stroke:"#adfa3b",strokeWidth:"2.5",fill:"rgba(173, 250, 59, 0.04)"})})}),e.jsx("div",{className:"sales-shape sales-triangle sales-t2",children:e.jsx("svg",{viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M50 15 L85 75 H15 Z",stroke:"#adfa3b",strokeWidth:"2",fill:"none",strokeDasharray:"6 4"})})}),e.jsx("div",{className:"sales-shape sales-plus sales-p1",children:"+"}),e.jsx("div",{className:"sales-shape sales-plus sales-p2",children:"+"}),e.jsx("div",{className:"sales-shape sales-circle sales-c1",children:e.jsx("svg",{viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{cx:"50",cy:"50",r:"35",stroke:"#adfa3b",strokeWidth:"2",fill:"none",strokeDasharray:"4 4"})})}),e.jsx("div",{className:"sales-shape sales-circle sales-c2",children:e.jsx("svg",{viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{cx:"50",cy:"50",r:"20",stroke:"#8b5cf6",strokeWidth:"3",fill:"none"})})}),e.jsx("div",{className:"sales-shape sales-square sales-sq1",children:e.jsx("svg",{viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("rect",{x:"25",y:"25",width:"50",height:"50",stroke:"#adfa3b",strokeWidth:"2",fill:"rgba(139, 92, 246, 0.05)",transform:"rotate(45 50 50)"})})})]}),e.jsxs("div",{className:"content-sales-inner",children:[e.jsxs("div",{className:"content-sales-text",children:[e.jsxs("h2",{className:"bbbbb-fiu retro-1",style:{"--fiu-delay":"0.05s"},children:["Behind the ",e.jsx("span",{children:"Buzz"})]}),e.jsx("p",{className:"bbbbb-fiu",style:{"--fiu-delay":"0.18s"},children:"Buzziwah is the evolved, Gen Z–driven digital marketing arm of Sripada Studios. Backed by a strong talent pool and in-house studio capabilities, we combine creative storytelling with technical precision to build brands that grow."}),e.jsx("a",{className:"content-sales-btn bbbbb-fiu",style:{"--fiu-delay":"0.3s"},href:"/about",children:"Know More"})]}),e.jsx("a",{href:"/content-solution",className:"content-sales-image",children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:"/BEGIDN THE BUZZ.webp",type:"image/webp"}),e.jsx("img",{src:t,alt:"Content Solutions Portfolio",width:"760",height:"428",loading:"lazy"})]})})]})]}),Q=()=>{const t=d.useRef(null),s=d.useRef(null),[o,r]=d.useState(!1),l=()=>{s.current&&(o?s.current.pause():s.current.play(),r(!o))},i=["Branding & Identity","Performance Marketing","Social Media Management","Cinema to Digital","SEO & Content Strategy","Web Design & Development","OTT Campaigns"];return e.jsxs("section",{className:"bbbbb-hero-section",children:[e.jsxs("div",{className:"bbbbb-bg-decorations",children:[e.jsx("div",{className:"bbbbb-orb bbbbb-orb-purple"}),e.jsx("div",{className:"bbbbb-orb bbbbb-orb-lime"}),e.jsx("div",{className:"bbbbb-grid-perspective"}),e.jsxs("svg",{className:"bbbbb-decor-waves",viewBox:"0 0 1440 800",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M-200,600 Q720,-100 1640,600",stroke:"rgba(168, 85, 247, 0.16)",strokeWidth:"1",strokeDasharray:"16 12"}),e.jsx("path",{d:"M-100,200 C300,100 500,400 900,150 C1100,50 1300,300 1600,200",stroke:"rgba(168, 85, 247, 0.28)",strokeWidth:"1.5",strokeDasharray:"8 6"}),e.jsx("path",{d:"M-100,280 C320,180 540,480 940,230 C1140,130 1340,380 1640,280",stroke:"rgba(173, 250, 59, 0.18)",strokeWidth:"1.2"}),e.jsx("path",{d:"M-50,450 C380,350 480,100 880,300 C1080,400 1280,150 1580,350",stroke:"rgba(168, 85, 247, 0.15)",strokeWidth:"1"}),e.jsx("circle",{cx:"180",cy:"160",r:"90",stroke:"rgba(168, 85, 247, 0.14)",strokeWidth:"1",strokeDasharray:"4 4"}),e.jsx("circle",{cx:"180",cy:"160",r:"130",stroke:"rgba(173, 250, 59, 0.1)",strokeWidth:"1"}),e.jsx("circle",{cx:"1180",cy:"380",r:"160",stroke:"rgba(168, 85, 247, 0.15)",strokeWidth:"1",strokeDasharray:"12 6"}),e.jsx("circle",{cx:"1180",cy:"380",r:"220",stroke:"rgba(173, 250, 59, 0.08)",strokeWidth:"1"}),e.jsx("path",{d:"M170,160 L190,160 M180,150 L180,170",stroke:"rgba(173, 250, 59, 0.35)",strokeWidth:"1.5"}),e.jsx("path",{d:"M1170,380 L1190,380 M1180,370 L1180,390",stroke:"rgba(168, 85, 247, 0.35)",strokeWidth:"1.5"}),e.jsx("polygon",{points:"1220,130 1260,155 1260,205 1220,230 1180,205 1180,155",stroke:"rgba(173, 250, 59, 0.14)",strokeWidth:"1",strokeDasharray:"4 2"}),e.jsx("polygon",{points:"140,480 170,498 170,532 140,550 110,532 110,498",stroke:"rgba(168, 85, 247, 0.15)",strokeWidth:"1.2"})]}),e.jsx("img",{src:"/logo.png",className:"bbbbb-bg-logo bbbbb-bg-logo-1",alt:"",role:"presentation"}),e.jsx("img",{src:"/logo.png",className:"bbbbb-bg-logo bbbbb-bg-logo-2",alt:"",role:"presentation"}),e.jsx("img",{src:"/logo.png",className:"bbbbb-bg-logo-3d",alt:"",role:"presentation"}),e.jsx("div",{className:"bbbbb-tech-plus bbbbb-tp-1",children:"+"}),e.jsx("div",{className:"bbbbb-tech-plus bbbbb-tp-2",children:"+"}),e.jsx("div",{className:"bbbbb-tech-plus bbbbb-tp-3",children:"+"}),e.jsx("div",{className:"bbbbb-tech-plus bbbbb-tp-4",children:"+"})]}),e.jsxs("div",{className:"bbbbb-hero-main",children:[e.jsxs("div",{className:"bbbbb-headline-wrap",children:[e.jsxs("div",{className:"bbbbb-kicker bbbbb-fiu",style:{"--fiu-delay":"0.05s"},children:[e.jsx("span",{className:"bbbbb-kicker-line"}),"Bengaluru's Digital Partner"]}),e.jsx("div",{ref:t,style:{position:"relative"},children:e.jsxs("h1",{className:"bbbbb-h1 bbbbb-fiu retro-1",style:{"--fiu-delay":"0.2s",margin:0,marginBottom:"32px",lineHeight:"0.55",textAlign:"left",textTransform:"uppercase",letterSpacing:"0.03em",transform:"skewX(-8deg)"},children:[e.jsx(k,{label:"We're the",fromFontVariationSettings:"'wght' 400, 'opsz' 9",toFontVariationSettings:"'wght' 1000, 'opsz' 40",containerRef:t,mode:"sequential",autoSpeed:1.2,autoIntensity:1}),e.jsx("br",{}),e.jsx("span",{style:{color:"#adfa3b"},children:e.jsx(k,{label:"people",fromFontVariationSettings:"'wght' 400, 'opsz' 9",toFontVariationSettings:"'wght' 1000, 'opsz' 40",containerRef:t,mode:"sequential",autoSpeed:1.2,autoIntensity:1})}),e.jsx("br",{}),e.jsx(k,{label:"who think",fromFontVariationSettings:"'wght' 400, 'opsz' 9",toFontVariationSettings:"'wght' 1000, 'opsz' 40",containerRef:t,mode:"sequential",autoSpeed:1.2,autoIntensity:1}),e.jsx("br",{}),e.jsx("span",{style:{color:"#adfa3b"},children:e.jsx(k,{label:"sharp",fromFontVariationSettings:"'wght' 400, 'opsz' 9",toFontVariationSettings:"'wght' 1000, 'opsz' 40",containerRef:t,mode:"sequential",autoSpeed:1.2,autoIntensity:1})}),e.jsx("br",{}),e.jsx("span",{style:{fontSize:"0.65em"},children:e.jsx(k,{label:"and move with swag.",fromFontVariationSettings:"'wght' 400, 'opsz' 9",toFontVariationSettings:"'wght' 1000, 'opsz' 40",containerRef:t,mode:"sequential",autoSpeed:1.2,autoIntensity:1})})]})}),e.jsxs("p",{className:"bbbbb-sub bbbbb-fiu",style:{"--fiu-delay":"0.38s",textAlign:"justify"},children:["This isn't your usual “we post and pray” agency. Buzziwah powered by Sripada Studios brings cinema-level storytelling into digital that actually converts.",e.jsx("br",{}),e.jsx("strong",{children:"Because looking good is easy… getting results isn't."})]}),e.jsxs("div",{className:"bbbbb-cta-row bbbbb-fiu",style:{"--fiu-delay":"0.52s",display:"flex",alignItems:"center",gap:"16px",flexWrap:"wrap"},children:[e.jsx("a",{className:"bbbbb-cta-primary",href:"/contact",children:"Start a Project →"}),e.jsxs("a",{className:"bbbbb-cta-secondary",href:"#projects",onClick:a=>{a.preventDefault();const n=document.querySelector("#projects, .shuffle-cards-section");n&&n.scrollIntoView({behavior:"smooth",block:"start"})},children:["See Our Work",e.jsx("span",{className:"bbbbb-cta-arrow",children:"→"})]}),e.jsxs("button",{onClick:l,className:"bbbbb-audio-btn",style:{display:"flex",alignItems:"center",gap:"8px",padding:"12px 20px",background:"rgba(173, 250, 59, 0.1)",border:"1px solid rgba(173, 250, 59, 0.3)",borderRadius:"50px",color:"#adfa3b",fontSize:"13px",fontWeight:"700",cursor:"pointer",transition:"all 0.3s ease",fontFamily:"'Syne', sans-serif"},onMouseEnter:a=>{a.currentTarget.style.background="rgba(173, 250, 59, 0.2)",a.currentTarget.style.borderColor="#adfa3b"},onMouseLeave:a=>{a.currentTarget.style.background="rgba(173, 250, 59, 0.1)",a.currentTarget.style.borderColor="rgba(173, 250, 59, 0.3)"},children:[e.jsx("span",{style:{fontSize:"18px"},children:o?"⏸":"▶"}),o?"Pause":"Play"," Buzziwah Song"]}),e.jsx("audio",{ref:s,src:"/BuzziWah.mp3",loop:!0})]})]}),e.jsx("div",{className:"bbbbb-hero-left",children:e.jsxs("div",{className:"bbbbb-hero-media-wrapper",children:[e.jsxs("picture",{children:[e.jsx("source",{srcSet:"/image.webp",type:"image/webp"}),e.jsx("img",{className:"bbbbb-hero-person-img",src:"/image.png",alt:"Buzziwah Digital Marketing Team",width:"758",height:"948",loading:"eager",fetchpriority:"high"})]}),e.jsx("div",{className:"bbbbb-phone-video-overlay",children:e.jsx("video",{src:"/hero-reel.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto",style:{width:"100%",height:"100%",objectFit:"cover",pointerEvents:"none",borderRadius:"inherit"}})})]})})]}),e.jsx("div",{className:"bbbbb-marquee-wrap",children:e.jsx("div",{className:"bbbbb-marquee-track",children:i.concat(i).map((a,n)=>e.jsxs("span",{className:"bbbbb-m-item",children:[e.jsx("span",{className:"bbbbb-m-dot"}),a]},`${a}-${n}`))})})]})},X=["ACE.png","Abhani.png","Aikyam.png","Angola Academy.png","Bodhiable.png","CCC.png","Copper Edege Eco Resort.png","Fitness Factory.png","G Academy.png","G Cinemas.png","G9.png","HearFon.png","Kalpavriksha.png","Lilbeez.png","Little Kidz.png","Neferrtiti weddings.png","Nirguna Acting School.png","Ramesh Arvind.png","Samrat.png","Skill Incarnate.png","Sri Chakra.png","Suraj Productions.png","Total Kannada.png","Wisden Clinics.png"],ee=()=>{const t=Array.from(new Set(X)),s=90,o=16;return e.jsxs("section",{className:"clientele-section",children:[e.jsxs("div",{className:"clientele-inner",children:[e.jsx("h2",{className:"clientele-title retro-1",children:"OUR CLIENTS"}),e.jsx("p",{className:"clientele-subtitle",children:"A few of the brands we have elevated lately."})]}),e.jsx("div",{className:"clientele-marquee",children:[...Array(1)].map((l,i)=>{const a=i*5%t.length,n=t.slice(a).concat(t.slice(0,a)),p=n.concat(n),c=s+i*o;return e.jsx("div",{className:`clientele-row ${i%2===0?"forward":"reverse"}`,style:{"--duration":`${c}s`},children:e.jsx("div",{className:"clientele-track",children:p.map((h,m)=>e.jsx("div",{className:"clientele-card",children:e.jsx("img",{className:"clientele-logo",src:encodeURI(`/CLIENTS/${h}`),alt:"Client logo",loading:"lazy"})},`${h}-${m}`))})},`clientele-row-${i}`)})})]})},te=()=>e.jsxs("section",{className:"von-hero",children:[e.jsx("div",{className:"von-orb von-orb-1"}),e.jsx("div",{className:"von-orb von-orb-2"}),e.jsx("div",{className:"von-orb von-orb-3"}),e.jsx("div",{className:"von-mesh"}),e.jsxs("div",{className:"von-inner",children:[e.jsxs("div",{className:"von-left",children:[e.jsxs("div",{className:"von-badge",children:[e.jsx("span",{className:"von-badge-dot"}),"We’re Hiring"]}),e.jsxs("h2",{className:"von-h1",children:[e.jsx("span",{className:"von-h1-main",children:"Join Our Team"}),e.jsx("span",{className:"von-grad",children:"Build Something That Matters"})]}),e.jsx("p",{className:"von-desc",children:"Work with a team that values creativity, execution, and real impact. No corporate fluff—just talented people building great work together."}),e.jsxs("div",{className:"von-features",children:[e.jsxs("div",{className:"von-feature",children:[e.jsx("span",{className:"von-fi",children:"✦"}),e.jsx("span",{children:"Your ideas drive projects, not just fill meetings."})]}),e.jsxs("div",{className:"von-feature",children:[e.jsx("span",{className:"von-fi",children:"✦"}),e.jsx("span",{children:"Ownership and initiative are expected and rewarded."})]}),e.jsxs("div",{className:"von-feature",children:[e.jsx("span",{className:"von-fi",children:"✦"}),e.jsx("span",{children:"Fast-paced environment where quality matters."})]})]}),e.jsxs("div",{className:"von-btns",children:[e.jsxs("a",{href:"/contact",className:"von-cta-primary",children:["View Open Positions",e.jsx("span",{className:"von-arr",children:e.jsx("svg",{width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M5 12h14M12 5l7 7-7 7",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),e.jsxs("a",{href:"/contact",className:"von-cta-ghost",children:["Learn More",e.jsx("svg",{className:"von-ga",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M5 12h14M12 5l7 7-7 7",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),e.jsx("div",{className:"von-right",children:e.jsxs("div",{className:"von-gif-container-wrapper",children:[e.jsxs("div",{className:"von-gif-frame",children:[e.jsxs("div",{className:"von-gif-header",children:[e.jsxs("div",{className:"von-gif-dots",children:[e.jsx("span",{className:"von-gif-dot-r"}),e.jsx("span",{className:"von-gif-dot-y"}),e.jsx("span",{className:"von-gif-dot-g"})]}),e.jsx("span",{className:"von-gif-title",children:"BUZZIWAH_WORKSPACE.exe"})]}),e.jsxs("div",{className:"von-gif-body",children:[e.jsx("iframe",{src:"https://tenor.com/embed/10369691214082701500",width:"100%",height:"460",style:{border:"none",borderRadius:"12px",display:"block"},allowFullScreen:!0,title:"Job Application GIF",scrolling:"no"}),e.jsx("div",{className:"von-gif-blocker"})]})]}),e.jsx("div",{className:"von-gif-badge",children:e.jsx("span",{children:"✦ WORK WITH US"})})]})})]})]});S.registerPlugin(J);const se=()=>{const t=d.useRef(null),s=d.useRef(null),o=d.useRef(null);return d.useEffect(()=>{let r=S.context(()=>{S.fromTo(s.current,{scale:.7,opacity:.4,y:100},{scale:1,opacity:1,y:0,ease:"power2.out",scrollTrigger:{trigger:s.current,start:"top 95%",end:"center 60%",scrub:1}})},t);return()=>r.revert()},[]),d.useEffect(()=>{const r=o.current;if(!r)return;const l=r.getContext("2d");let i;const a=()=>{r.width=r.parentElement.offsetWidth,r.height=r.parentElement.offsetHeight};a(),window.addEventListener("resize",a);class n{constructor(){this.reset(!0)}reset(x=!1){this.x=Math.random()*r.width,this.y=x?Math.random()*r.height:r.height+Math.random()*120,this.vx=(Math.random()-.5)*.35,this.vy=-Math.random()*.4-.15,this.baseRadius=Math.random()*140+90,this.radius=this.baseRadius,this.alpha=0,this.maxAlpha=Math.random()*.11+.03,this.fadeInSpeed=Math.random()*.004+.002,this.fadeOutSpeed=Math.random()*.003+.001,this.isFadingIn=!0;const g=Math.random()>.5;this.color=g?"139, 92, 246":"173, 250, 59"}update(){this.x+=this.vx,this.y+=this.vy,this.radius+=.12,this.isFadingIn?(this.alpha+=this.fadeInSpeed,this.alpha>=this.maxAlpha&&(this.alpha=this.maxAlpha,this.isFadingIn=!1)):(this.alpha-=this.fadeOutSpeed,this.alpha<=0&&this.reset(!1)),(this.x<-this.radius||this.x>r.width+this.radius||this.y<-this.radius)&&this.reset(!1)}draw(){l.save();const x=l.createRadialGradient(this.x,this.y,0,this.x,this.y,this.radius);x.addColorStop(0,`rgba(${this.color}, ${this.alpha})`),x.addColorStop(.5,`rgba(${this.color}, ${this.alpha*.35})`),x.addColorStop(1,`rgba(${this.color}, 0)`),l.fillStyle=x,l.beginPath(),l.arc(this.x,this.y,this.radius,0,Math.PI*2),l.fill(),l.restore()}}const c=Array.from({length:10},()=>new n),h=()=>{l.clearRect(0,0,r.width,r.height),c.forEach(m=>{m.update(),m.draw()}),i=requestAnimationFrame(h)};return h(),()=>{window.removeEventListener("resize",a),cancelAnimationFrame(i)}},[]),e.jsxs("section",{ref:t,className:"relative w-full py-24 sm:py-32 bg-[#050508] flex flex-col items-center justify-center text-center px-4 sm:px-8 overflow-hidden z-10",children:[e.jsx("style",{children:`
        @keyframes pulseGlowSlow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translate(40px, -30px) scale(1.15);
            opacity: 1;
          }
        }

        @keyframes pulseGlowReverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translate(-40px, 30px) scale(1.1);
            opacity: 1;
          }
        }

        .ambient-aurora-glow-1 {
          animation: pulseGlowSlow 20s infinite ease-in-out;
        }

        .ambient-aurora-glow-2 {
          animation: pulseGlowReverse 24s infinite ease-in-out;
        }
      `}),e.jsx("canvas",{ref:o,className:"absolute inset-0 w-full h-full pointer-events-none z-0"}),e.jsx("div",{className:"ambient-aurora-glow-1 absolute top-1/4 left-1/4 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-purple-700/20 blur-[130px] rounded-full pointer-events-none z-0",style:{willChange:"transform"}}),e.jsx("div",{className:"ambient-aurora-glow-2 absolute bottom-1/4 right-1/4 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-[#adfa3b]/12 blur-[130px] rounded-full pointer-events-none z-0",style:{willChange:"transform"}}),e.jsxs("div",{className:"relative z-10 max-w-3xl mx-auto mb-10 sm:mb-16",children:[e.jsx("span",{className:"inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-white/20 bg-white/5 text-[9px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-white/70 mb-4 sm:mb-5",children:"In-House Production"}),e.jsx("h2",{className:"text-2xl sm:text-[2.4rem] md:text-[2.8rem] leading-tight font-black text-white uppercase font-['Geom'] mb-4 sm:mb-6 retro-4",children:"Why we win at content"}),e.jsxs("div",{className:"text-sm sm:text-xl text-white/70 leading-relaxed max-w-xl mx-auto px-4",children:[e.jsxs("p",{className:"font-semibold text-white text-base sm:text-xl mb-2 sm:mb-3",children:["Because it’s not outsourced. ",e.jsx("span",{className:"text-[#adfa3b]",children:"It’s built in-house."})]}),e.jsx("p",{className:"text-xs sm:text-base text-white/60 font-bold",children:"With our own studio and production team, we create everything—from podcasts and reels to ads that actually perform."})]})]}),e.jsxs("div",{ref:s,className:"relative z-10 w-full max-w-6xl mx-auto rounded-[2rem] overflow-hidden shadow-[0_20px_100px_rgba(0,0,0,0.8)] border border-white/10 group group-hover:border-white/20 transition-colors duration-500 bg-[#07030f] origin-center",children:[e.jsx("video",{className:"w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105",src:"/clientlogos/nearby-studio-tour.mp4",ref:r=>{if(!r)return;new IntersectionObserver(([i])=>{i.isIntersecting?r.play().catch(()=>{}):r.pause()},{threshold:.25}).observe(r)},loop:!0,muted:!0,playsInline:!0,preload:"none"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"}),e.jsxs("div",{className:"absolute bottom-0 left-0 w-full p-4 sm:p-12 flex flex-row items-center justify-between gap-4 z-20",children:[e.jsx("img",{src:"/clientlogos/Nearby studio_white.webp",alt:"Nearby Studio Logo",className:"w-24 sm:w-56 object-contain"}),e.jsxs("a",{href:"https://nearbystudio.in/",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center px-4 sm:px-8 py-2.5 sm:py-4 bg-white text-black font-bold uppercase tracking-[0.1em] text-[9px] sm:text-sm rounded-full hover:bg-zinc-200 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] whitespace-nowrap",children:["Know More ",e.jsx("span",{className:"hidden sm:inline",children:" about Studio"})]})]})]})]})},ae=({num:t})=>{const[s,o]=d.useState(0),r=d.useRef(null),[l,i]=d.useState(!1),a=parseInt(t.replace(/[^0-9]/g,""),10)||0,n=t.replace(/[0-9,]/g,""),p=t.includes(",");d.useEffect(()=>{const h=new IntersectionObserver(x=>{const[g]=x;if(g.isIntersecting&&!l){i(!0);const b=2e3,f=performance.now(),v=N=>{const I=N-f,C=Math.min(I/b,1),P=1-Math.pow(1-C,3),A=Math.floor(P*a);o(A),C<1&&requestAnimationFrame(v)};requestAnimationFrame(v)}},{threshold:.1}),m=r.current;return m&&h.observe(m),()=>{m&&h.unobserve(m)}},[a,l]);const c=h=>p?h.toLocaleString():h;return e.jsxs("span",{ref:r,className:"stats-card-number",children:[c(s),n]})},re=()=>{const t=[{num:"100+",label:"Brands",sub:"Collaborated & scaled.",color:"#8b5cf6"},{num:"600,000+",label:"Leads",sub:"Not by accident.",color:"#c8ff00"},{num:"50M+",label:"Views",sub:"Every year. Consistently.",color:"#3b82f6"},{num:"300%",label:"Organic Growth",sub:"Because strategy > luck.",color:"#f59e0b"}];return e.jsxs("section",{className:"stats-section-premium",children:[e.jsx("div",{className:"stats-glow-aura aura-left"}),e.jsx("div",{className:"stats-glow-aura aura-right"}),e.jsxs("div",{className:"stats-container",children:[e.jsxs("div",{className:"stats-header",children:[e.jsx("div",{className:"stats-badge",children:"PROOF IN NUMBERS"}),e.jsx("h2",{className:"stats-heading",children:"Best in the market? We'll let the results answer that."})]}),e.jsx("div",{className:"stats-grid",children:t.map((s,o)=>e.jsxs("div",{className:"stats-card",children:[e.jsx("div",{className:"stats-card-border-glow"}),e.jsxs("div",{className:"stats-card-inner",children:[e.jsxs("div",{className:"stats-card-tech-dots",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsx("div",{className:"stats-card-num-wrapper",children:e.jsx(ae,{num:s.num})}),e.jsx("h3",{className:"stats-card-label retro-sm",children:s.label}),e.jsx("p",{className:"stats-card-desc",children:s.sub}),e.jsx("div",{className:"stats-card-accent-line",style:{background:s.color}})]})]},o))})]})]})};var ie=class{constructor(t){z(this,"listeners",[]);this.state=t}set(t){this.state=t;for(const s of this.listeners)s(this.state)}subscribe(t){return this.listeners=[...this.listeners,t],()=>{this.listeners=this.listeners.filter(s=>s!==t)}}get(){return this.state}};const oe=d.createContext(null),E=new ie(null),ne=d.forwardRef(({children:t,root:s=!1,options:o={},autoRaf:r=!0,className:l="",...i},a)=>{const n=d.useRef(null),p=d.useRef(null),[c,h]=d.useState(void 0);d.useImperativeHandle(a,()=>({wrapper:n.current,content:p.current,lenis:c}),[c]),d.useEffect(()=>{const b=new L({...o,...n.current&&p.current&&{wrapper:n.current,content:p.current},autoRaf:(o==null?void 0:o.autoRaf)??r});return h(b),()=>{b.destroy(),h(void 0)}},[r,JSON.stringify({...o,wrapper:null,content:null})]);const m=d.useRef([]),x=d.useCallback((b,f)=>{m.current.push({callback:b,priority:f}),m.current.sort((v,N)=>v.priority-N.priority)},[]),g=d.useCallback(b=>{m.current=m.current.filter(f=>f.callback!==b)},[]);return d.useEffect(()=>{if(s&&c)return E.set({lenis:c,addCallback:x,removeCallback:g}),()=>E.set(null)},[s,c,x,g]),d.useEffect(()=>{if(!c)return;const b=f=>{for(const{callback:v}of m.current)v(f)};return c.on("scroll",b),()=>{c.off("scroll",b)}},[c]),t?e.jsx(oe.Provider,{value:{lenis:c,addCallback:x,removeCallback:g},children:s&&s!=="asChild"?t:e.jsx("div",{ref:n,className:`${l} ${(c==null?void 0:c.className)??""}`.trim(),...i,children:e.jsx("div",{ref:p,children:t})})}):null}),j=[{id:1,title:"Aanya Hospital",tag:"Branding · Digital",url:"/case-study/aanya-hospital",img:"/PROJECTS HOME PAGE /AH-CC-02.png",video:"/PROJECTS HOME PAGE /aanya.mp4"},{id:2,title:"Ramesh Aravind",tag:"Branding · Social",url:"/case-study/ramesh-arvind",img:"/PROJECTS HOME PAGE /RAMESH ARVIND.png",video:"/PROJECTS HOME PAGE /ramesh arvind.mp4"},{id:3,title:"HearFon",tag:"Video · Production",url:"/case-study/hearfon",img:"/PROJECTS HOME PAGE /HEARPHON.png",video:"/PROJECTS HOME PAGE /hearphon.mp4"},{id:4,title:"WMN",tag:"Web · Marketing",url:"/case-study/wmn-healthcare",img:"/PROJECTS HOME PAGE /WMN Doctors.png",video:"/PROJECTS HOME PAGE /wmn.mp4"},{id:5,title:"Tent Cinema",tag:"Social · Leads",url:"/case-study/tent-cinema",img:"/PROJECTS HOME PAGE /TENT .webp",video:"/PROJECTS HOME PAGE /tent cenima.mp4"},{id:6,title:"Kovedaa",tag:"Branding · Web",url:"/case-study/kovedaa",img:"/PROJECTS HOME PAGE /Kovedaa.png",video:"/PROJECTS HOME PAGE /kovedaa.mp4"},{id:7,title:"Sindoor Collection",tag:"Branding · Website · Product Shoot",url:"/case-study/sindoor-collection",img:"/best works/srichakra_case.webp",video:""}],le=()=>{const[t,s]=u.useState([]),[o,r]=u.useState([]),l=u.useRef(null);return u.useEffect(()=>{const i=setInterval(()=>{const a=Math.random().toString(36).substring(2,9),n=Math.random()*100,p=.3+Math.random()*.7,c=1.8+Math.random()*2.2;s(h=>[...h,{id:a,left:n,scale:p,speed:c}]),setTimeout(()=>{s(x=>x.filter(g=>g.id!==a));const h=Math.random().toString(36).substring(2,9),m=30+Math.random()*50;r(x=>[...x,{id:h,x:n,y:90+Math.random()*8,size:m}]),setTimeout(()=>{r(x=>x.filter(g=>g.id!==h))},1200)},c*1e3)},400);return()=>clearInterval(i)},[]),e.jsxs("div",{ref:l,className:"water-droplet-container",children:[t.map(i=>e.jsx("div",{className:"water-drop",style:{left:`${i.left}%`,animationDuration:`${i.speed}s`,transform:`scale(${i.scale})`}},i.id)),o.map(i=>e.jsx("div",{className:"water-ripple",style:{left:`${i.x}%`,top:`${i.y}%`,width:`${i.size}px`,height:`${i.size}px`}},i.id))]})};function ce(){const[t,s]=u.useState(!1);u.useEffect(()=>{const r=()=>{s(window.innerWidth<768)};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]);const o=t?1200:2600;return e.jsxs("div",{id:"projects",className:"bg-[#060811] relative z-10 w-full overflow-hidden border-t border-b border-white/5",children:[e.jsx(le,{}),e.jsx("div",{className:"absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#adfa3b]/12 blur-[150px] pointer-events-none"}),e.jsxs("div",{className:"bbbbb-bg-decorations pointer-events-none select-none opacity-95",children:[e.jsx("div",{className:"bbbbb-orb bbbbb-orb-purple"}),e.jsx("div",{className:"bbbbb-orb bbbbb-orb-lime"}),e.jsx("div",{className:"bbbbb-grid-perspective"}),e.jsxs("svg",{className:"bbbbb-decor-waves animate-pulse",style:{animationDuration:"8s"},viewBox:"0 0 1440 800",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M-200,600 Q720,-100 1640,600",stroke:"rgba(168, 85, 247, 0.45)",strokeWidth:"1.5",strokeDasharray:"16 12"}),e.jsx("path",{d:"M-100,200 C300,100 500,400 900,150 C1100,50 1300,300 1600,200",stroke:"rgba(168, 85, 247, 0.65)",strokeWidth:"2",strokeDasharray:"8 6"}),e.jsx("path",{d:"M-100,280 C320,180 540,480 940,230 C1140,130 1340,380 1640,280",stroke:"rgba(173, 250, 59, 0.55)",strokeWidth:"1.8"}),e.jsx("path",{d:"M-50,450 C380,350 480,100 880,300 C1080,400 1280,150 1580,350",stroke:"rgba(168, 85, 247, 0.45)",strokeWidth:"1.5"}),e.jsx("circle",{cx:"180",cy:"160",r:"90",stroke:"rgba(168, 85, 247, 0.45)",strokeWidth:"1.5",strokeDasharray:"4 4"}),e.jsx("circle",{cx:"180",cy:"160",r:"130",stroke:"rgba(173, 250, 59, 0.4)",strokeWidth:"1.5"}),e.jsx("circle",{cx:"1180",cy:"380",r:"160",stroke:"rgba(168, 85, 247, 0.45)",strokeWidth:"1.5",strokeDasharray:"12 6"}),e.jsx("circle",{cx:"1180",cy:"380",r:"220",stroke:"rgba(173, 250, 59, 0.35)",strokeWidth:"1.5"}),e.jsx("path",{d:"M170,160 L190,160 M180,150 L180,170",stroke:"rgba(173, 250, 59, 0.85)",strokeWidth:"2"}),e.jsx("path",{d:"M1170,380 L1190,380 M1180,370 L1180,390",stroke:"rgba(168, 85, 247, 0.85)",strokeWidth:"2"}),e.jsx("polygon",{points:"1220,130 1260,155 1260,205 1220,230 1180,205 1180,155",stroke:"rgba(173, 250, 59, 0.45)",strokeWidth:"1.5",strokeDasharray:"4 2"}),e.jsx("polygon",{points:"1220,130 1260,155 1260,205 1220,230 1180,205 1180,155",stroke:"rgba(173, 250, 59, 0.35)",strokeWidth:"4",opacity:"0.6"}),e.jsx("polygon",{points:"140,480 170,498 170,532 140,550 110,532 110,498",stroke:"rgba(168, 85, 247, 0.45)",strokeWidth:"1.8"})]}),e.jsx("div",{className:"bbbbb-tech-plus bbbbb-tp-1 font-black text-[#adfa3b] text-base",children:"+"}),e.jsx("div",{className:"bbbbb-tech-plus bbbbb-tp-2 font-black text-[#C084FC] text-base",children:"+"}),e.jsx("div",{className:"bbbbb-tech-plus bbbbb-tp-3 font-black text-[#adfa3b] text-base",children:"+"}),e.jsx("div",{className:"bbbbb-tech-plus bbbbb-tp-4 font-black text-[#C084FC] text-base",children:"+"}),e.jsx("div",{className:"absolute top-[12%] left-[2%] text-transparent select-none pointer-events-none text-[8vw] md:text-[10vw] font-black tracking-[0.25em] uppercase opacity-40 rotate-[-5deg]",style:{fontFamily:"'Syne', sans-serif",WebkitTextStroke:"1px rgba(255,255,255,0.45)"},children:"WE BUZZ"}),e.jsx("div",{className:"absolute top-[52%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white/[0.06] select-none pointer-events-none text-[12vw] font-black tracking-[0.3em] uppercase",style:{fontFamily:"'Syne', sans-serif"},children:"WE BUZZ"}),e.jsx("div",{className:"absolute bottom-[10%] right-[3%] text-transparent select-none pointer-events-none text-[8vw] md:text-[10vw] font-black tracking-[0.25em] uppercase opacity-40 rotate-[4deg]",style:{fontFamily:"'Syne', sans-serif",WebkitTextStroke:"1px rgba(255,255,255,0.45)"},children:"BUZZIWAH"})]}),e.jsxs("div",{className:"w-full text-center pt-28 pb-4 bg-transparent relative z-30",children:[e.jsx("span",{className:"inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.35em] text-white/50 mb-4",style:{fontFamily:"'Syne', sans-serif"},children:"OUR PORTFOLIO"}),e.jsx("h2",{className:"text-4xl md:text-7xl font-black text-white uppercase tracking-tight retro-10",style:{fontFamily:"'Syne', sans-serif"},children:"Look what we did."})]}),e.jsx(ne,{root:!0,options:{lerp:.05},children:e.jsx(de,{sectionHeight:o})})]})}const de=({sectionHeight:t})=>e.jsxs("div",{style:{height:`calc(${t}px + 100vh)`},className:"relative w-full",children:[e.jsx(be,{sectionHeight:t}),e.jsx(pe,{}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-[#060811]"})]}),be=({sectionHeight:t})=>{const{scrollY:s}=W(),o=y(s,[0,800],[25,0]),r=y(s,[0,800],[75,100]),l=M`polygon(${o}% ${o}%, ${r}% ${o}%, ${r}% ${r}%, ${o}% ${r}%)`,i=y(s,[0,t+300],["170%","100%"]),a=y(s,[t,t+500],[1,0]);return e.jsxs(R.div,{className:"sticky top-0 h-screen w-full",style:{clipPath:l,backgroundSize:i,opacity:a,backgroundImage:"url('/PROJECTS HOME PAGE /RAMESH ARVIND.png')",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:[e.jsx("div",{className:"absolute inset-0 bg-black/40 mix-blend-multiply"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:e.jsx("h2",{className:"text-5xl md:text-8xl font-black text-white text-center drop-shadow-2xl retro-10",style:{fontFamily:"'Syne', sans-serif"},children:"Look what we did."})})]})};j.map((t,s)=>({card:t,src:t.img,side:s%2===0?"left":"right",start:s%2===0?0:150,end:s%2===0?-300:-450}));const pe=()=>e.jsxs("div",{className:"relative z-20 mt-[-100vh] pt-[25vh] pb-[10vh]",style:{maxWidth:"1400px",margin:"0 auto",marginTop:"-100vh",padding:"25vh 24px 10vh"},children:[e.jsxs("div",{className:"flex gap-6 md:gap-10 mb-10 md:mb-16 items-start justify-between",children:[e.jsx(w,{card:j[0],start:0,end:-250,style:{width:"38%",maxWidth:"380px",marginTop:"0"}}),e.jsx(w,{card:j[1],start:120,end:-380,style:{width:"50%",maxWidth:"480px",marginTop:"80px"}})]}),e.jsxs("div",{className:"flex gap-6 md:gap-10 mb-10 md:mb-16 items-start justify-between",children:[e.jsx(w,{card:j[2],start:80,end:-320,style:{width:"45%",maxWidth:"420px",marginTop:"40px"}}),e.jsx(w,{card:j[3],start:0,end:-280,style:{width:"38%",maxWidth:"360px",marginTop:"0"}})]}),e.jsxs("div",{className:"flex gap-6 md:gap-10 mb-10 md:mb-16 items-start justify-between",children:[e.jsx(w,{card:j[4],start:60,end:-350,style:{width:"42%",maxWidth:"380px",marginTop:"0"}}),e.jsx(w,{card:j[5],start:100,end:-300,style:{width:"45%",maxWidth:"420px",marginTop:"60px"}})]}),e.jsx("div",{className:"flex gap-6 md:gap-10 mb-10 md:mb-16 items-start justify-center",children:e.jsx(w,{card:j[6],start:80,end:-350,style:{width:"45%",maxWidth:"420px"}})})]}),w=({card:t,start:s,end:o,style:r={}})=>{const l=d.useRef(null),[i,a]=u.useState(!1);u.useEffect(()=>{const b=()=>{a(window.innerWidth<768)};return b(),window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[]);const n=i?Math.round(s*.4):s,p=i?Math.round(o*.4):o,{scrollYProgress:c}=W({target:l,offset:[`${n}px end`,`end ${p*-1}px`]}),h=y(c,[.75,1],[1,0]),m=y(c,[.75,1],[1,.85]),x=y(c,[0,1],[n,p]),g=M`translateY(${x}px) scale(${m})`;return e.jsxs(R.a,{ref:l,href:t.url,target:t.url.startsWith("/")?"_self":"_blank",rel:"noopener noreferrer",className:"relative block group cursor-pointer shrink-0 overflow-hidden rounded-3xl mx-auto w-full",style:{transform:g,opacity:h,maxWidth:"380px",...r},children:[t.video?e.jsx("video",{preload:"none",loop:!0,muted:!0,playsInline:!0,ref:b=>{if(!b)return;new IntersectionObserver(([v])=>{v.isIntersecting?(b.src=t.video,b.load(),b.play().catch(()=>{})):b.pause()},{threshold:.15,rootMargin:"100px"}).observe(b)},className:"w-full h-auto block transition-transform duration-700 group-hover:scale-105"}):e.jsx("img",{src:t.img,alt:t.title,className:"w-full h-auto block transition-transform duration-700 group-hover:scale-105"}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"}),e.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-3 pointer-events-none",children:[e.jsx("div",{className:"min-w-0",children:e.jsx("h3",{className:"text-white text-base md:text-xl font-black drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] uppercase tracking-wider retro-sm",style:{fontFamily:"'Syne', sans-serif"},children:t.tag.replace(" · "," & ")})}),e.jsxs("div",{className:"inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold uppercase tracking-wider text-[9px] md:text-[10px] rounded-full group-hover:bg-[#C084FC] group-hover:border-[#C084FC] transition-all duration-300 shrink-0 whitespace-nowrap pointer-events-auto shadow-md",children:["Know More ",e.jsx(U,{className:"text-xs"})]})]})]})},we=()=>{const[t,s]=u.useState(0),[o,r]=u.useState(0);return u.useEffect(()=>{const l={threshold:.12,rootMargin:"0px 0px -50px 0px"},i=new IntersectionObserver(n=>{n.forEach(p=>{p.isIntersecting&&p.target.classList.add("is-visible")})},l);return document.querySelectorAll(".scroll-reveal").forEach(n=>i.observe(n)),()=>i.disconnect()},[]),e.jsxs("div",{className:"bg-black",children:[e.jsx("div",{className:"scroll-reveal reveal-fade-in",children:e.jsx(Q,{})}),e.jsx("div",{className:"scroll-reveal reveal-slide-up",children:e.jsx(Y,{})}),e.jsx("div",{className:"scroll-reveal reveal-zoom-in",children:e.jsx(se,{})}),e.jsx("div",{className:"scroll-reveal reveal-slide-right",children:e.jsx(K,{})}),e.jsx(ce,{}),e.jsx("section",{className:"growth-section",children:e.jsxs("div",{className:"growth-inner",children:[e.jsxs("div",{className:"growth-content",children:[e.jsxs("div",{className:"growth-kicker",children:[e.jsx("span",{className:"growth-kicker-dot","aria-hidden":"true"}),e.jsx("span",{children:"Driven by Passion. Quality. Dedication."})]}),e.jsxs("h2",{className:"growth-title retro-9",children:["Grow with",e.jsx("span",{className:"growth-title-accent",children:"Buzziwah"})]}),e.jsx("p",{className:"growth-lead",children:"Because “trying” isn’t a growth strategy."}),e.jsx("div",{className:"growth-cta",children:e.jsxs("a",{href:"/contact",className:"growth-button",children:["Start a Project ",e.jsx("span",{children:"→"})]})})]}),e.jsxs("div",{className:"growth-cards-grid",children:[e.jsxs("div",{className:"growth-card growth-card-1",children:[e.jsx("div",{className:"growth-card-icon-box",children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}),e.jsxs("div",{className:"growth-card-content",children:[e.jsx("span",{className:"growth-card-num",children:"01"}),e.jsx("h3",{className:"growth-card-title retro-sm",children:"Brand Visibility"}),e.jsx("p",{className:"growth-card-desc",children:"Build a presence that stays visible across every digital platform your audience uses."})]})]}),e.jsxs("div",{className:"growth-card growth-card-2",children:[e.jsx("div",{className:"growth-card-icon-box",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})}),e.jsxs("div",{className:"growth-card-content",children:[e.jsx("span",{className:"growth-card-num",children:"02"}),e.jsx("h3",{className:"growth-card-title retro-sm",children:"Customer Trust"}),e.jsx("p",{className:"growth-card-desc",children:"Create authentic connections that turn first-time visitors into loyal customers."})]})]}),e.jsxs("div",{className:"growth-card growth-card-3",children:[e.jsx("div",{className:"growth-card-icon-box",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})})}),e.jsxs("div",{className:"growth-card-content",children:[e.jsx("span",{className:"growth-card-num",children:"03"}),e.jsx("h3",{className:"growth-card-title retro-sm",children:"Smart Growth"}),e.jsx("p",{className:"growth-card-desc",children:"Marketing strategies that deliver measurable results and real business growth."})]})]}),e.jsxs("div",{className:"growth-card growth-card-4",children:[e.jsx("div",{className:"growth-card-icon-box",children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("circle",{cx:"12",cy:"12",r:"6"}),e.jsx("circle",{cx:"12",cy:"12",r:"2"})]})}),e.jsxs("div",{className:"growth-card-content",children:[e.jsx("span",{className:"growth-card-num",children:"04"}),e.jsx("h3",{className:"growth-card-title font-bold retro-sm",children:"Target Precision"}),e.jsx("p",{className:"growth-card-desc",children:"Reach the right people at the right time with data-driven targeting."})]})]}),e.jsxs("div",{className:"growth-card growth-card-5",children:[e.jsx("div",{className:"growth-card-icon-box",children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),e.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),e.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"14"})]})}),e.jsxs("div",{className:"growth-card-content",children:[e.jsx("span",{className:"growth-card-num",children:"05"}),e.jsx("h3",{className:"growth-card-title retro-sm",children:"Data Insights"}),e.jsx("p",{className:"growth-card-desc",children:"Make informed decisions backed by analytics, metrics, and proven performance data."})]})]})]})]})}),e.jsx("div",{className:"scroll-reveal reveal-fade-in",children:e.jsx(te,{})}),e.jsx("section",{className:"faq-showcase",id:"faq",children:e.jsxs("div",{className:"faq-inner",children:[e.jsxs("div",{className:"faq-header",children:[e.jsx("div",{className:"faq-title-block",children:e.jsx("h2",{className:"retro-1",children:"Any questions?"})}),e.jsx("p",{className:"faq-intro",children:"Have something on your mind? Whether it’s about our services, process, timelines, or pricing — we’ve answered the most common questions to help you move forward with clarity and confidence."})]}),(()=>{const l=[{question:"What is Buzziwah?",answer:"Buzziwah is a Bengaluru-based conglomerate specializing in filmmaking, digital marketing, and research. We deliver creative and strategic solutions across three core verticals to help brands and individuals connect meaningfully with their audiences."},{question:"What services does Buzziwah offer?",answer:"Filmmaking: Short films, documentaries, promotional videos, and corporate films. Digital Marketing: Social media management, performance marketing, content creation, branding, and online reputation management. Research & Reach: Data-driven audience analysis, campaign planning, and customized strategies for better outreach."},{question:"Who are your clients?",answer:"We cater to small businesses, multinational corporations, startups, personal branding clients, and large-scale brands across industries."},{question:"What makes Buzziwah unique?",answer:"We combine creativity with strategy to deliver innovative solutions tailored to each project. Our young, dynamic team excels at breaking monotony and crafting imaginative campaigns that resonate deeply with the target audience."},{question:"Do you specialize in Kannada film promotions?",answer:"Yes. Under Sripada Studios Designs, we focus exclusively on Kannada films, handling logo creation, promotional videos, posters, social media management, event coverage, and more to align with filmmakers’ vision and audience."},{question:"Can you handle end-to-end digital marketing campaigns?",answer:"Absolutely. From social media marketing and performance ads to website design and content marketing, we provide end-to-end digital marketing solutions customized to your goals."},{question:"How experienced is your team?",answer:"Our team includes creative writers, editors, filmmakers, and digital marketing professionals with years of experience, all driven by a shared passion for storytelling and impactful campaigns."},{question:"Do you have examples of your past work?",answer:"Yes. We’ve completed 500+ projects for 100+ clients. Check out our portfolio for case studies and success stories that showcase our expertise."}];return e.jsx("div",{className:"faq-grid",children:l.map((i,a)=>e.jsxs("div",{className:`faq-card ${t===a?"open":""}`,children:[e.jsxs("button",{className:"faq-question",type:"button",onClick:()=>s(t===a?-1:a),"aria-expanded":t===a,children:[e.jsx("span",{children:`${a+1}. ${i.question}`}),e.jsx("span",{className:"faq-arrow",children:"⌄"})]}),e.jsx("div",{className:"faq-answer",children:i.answer})]},i.question))})})()]})}),e.jsx(ee,{}),e.jsxs("section",{className:"home-bottom-megablock relative overflow-hidden",children:[e.jsxs("div",{className:"bbbbb-bg-decorations pointer-events-none select-none",children:[e.jsx("div",{className:"bbbbb-orb bbbbb-orb-purple",style:{top:"10%",left:"5%"}}),e.jsx("div",{className:"bbbbb-orb bbbbb-orb-lime",style:{bottom:"15%",right:"5%"}}),e.jsx("div",{className:"bbbbb-grid-perspective",style:{opacity:.4}}),e.jsxs("svg",{className:"bbbbb-decor-waves opacity-10",viewBox:"0 0 1440 800",fill:"none",children:[e.jsx("path",{d:"M-200,400 Q720,-100 1640,400",stroke:"rgba(168, 85, 247, 0.3)",strokeWidth:"1",strokeDasharray:"10 10"}),e.jsx("circle",{cx:"1200",cy:"200",r:"150",stroke:"rgba(173, 250, 59, 0.2)",strokeWidth:"1"})]}),e.jsx("div",{className:"bbbbb-tech-plus",style:{top:"20%",left:"10%",color:"#adfa3b"},children:"+"}),e.jsx("div",{className:"bbbbb-tech-plus",style:{bottom:"30%",right:"15%",color:"#8b5cf6"},children:"+"})]}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("div",{className:"scroll-reveal reveal-slide-up",children:e.jsx(re,{})}),e.jsx("div",{className:"scroll-reveal reveal-slide-up",children:e.jsx(_,{})})]})]})]})};export{we as default};
