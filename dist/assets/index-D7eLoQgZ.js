var T=Object.defineProperty;var A=(t,s,i)=>s in t?T(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i;var M=(t,s,i)=>A(t,typeof s!="symbol"?s+"":s,i);import{r as l,j as e,g as z,L as P,R as w,u as L,a as N,b as R,m as B}from"./animation-vendor-CdhPfQVW.js";/* empty css             */import{F as D,a as O,b as q,c as $,d as H,e as V,f as Z,g as G,h as U,i as _}from"./index-C6rLB7PO.js";import{V as S}from"./VariableProximity-DeLlx-a1.js";import{S as Y}from"./Section10-s5PS123i.js";import{S as K}from"./ScrollTrigger-D1XJUMov.js";import"./iconBase-Bo5QDCiS.js";const J=()=>{const[t,s]=l.useState(0),[i,r]=l.useState(Array(8).fill(!1)),o=[{id:1,title:"Branding",sub:"Identity & Voice",icon:e.jsx(O,{}),href:"/branding",color:"#adfa3b",image:"/grid/brand.webp",description:"Creating cohesive brands, logos, guidelines, custom typography and tone frameworks."},{id:2,title:"Photography",sub:"Product & Portfolio",icon:e.jsx(q,{}),href:"/video-production",color:"#8b5cf6",image:"/grid/photograpohy.webp",description:"Stunning high-fidelity digital captures, creative model shoots, and studio product photography."},{id:3,title:"Content Solutions",sub:"Creative Copywriting",icon:e.jsx($,{}),href:"/content-solution",color:"#8888a8",image:"/grid/content.webp",description:"Engaging narratives, SEO articles, and conversion-centered copywriting designed to attract attention."},{id:4,title:"Social SMM",sub:"Organic Growth",icon:e.jsx(H,{}),href:"/social-media",color:"#adfa3b",image:"/grid/social media manegementpng.webp",description:"Build organic presence, capture viral short-form video loops, and cultivate highly active communities."},{id:5,title:"Video Production",sub:"High-End Cinematic",icon:e.jsx(V,{}),href:"/video-production",color:"#8b5cf6",image:"/grid/video.webp",description:"Directing, shooting and editing professional short films, reels, and stunning high-retention social ads."},{id:6,title:"Web Dev",sub:"Sleek & Interactive",icon:e.jsx(Z,{}),href:"/website-development",color:"#adfa3b",image:"/grid/web devlopmnnt.webp",description:"Building blazing-fast, pixel-perfect, highly responsive reactive web experiences."},{id:7,title:"SEO Solutions",sub:"Search Authority",icon:e.jsx(G,{}),href:"/seo",color:"#8888a8",image:"/grid/seo.webp",description:"On-page technical auditing, link acquisition, and keyword optimization to claim organic page-one positions."},{id:8,title:"Performance Ads",sub:"ROAS & Scaled Budgets",icon:e.jsx(U,{}),href:"/performance-marketing",color:"#8b5cf6",image:"/grid/performance markting.webp",description:"Precision-targeted paid search and social campaigns tailored for consistent return on ad spend."}],n=(a,c,h)=>{h.stopPropagation();const d=[...i];d[a]=!0,r(d),setTimeout(()=>{window.location.href=c},500)};return e.jsxs("div",{className:"upscale-wrapper",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"bbbbb-bg-decorations pointer-events-none select-none opacity-80",children:[e.jsx("div",{className:"bbbbb-orb bbbbb-orb-purple"}),e.jsx("div",{className:"bbbbb-orb bbbbb-orb-lime"}),e.jsx("div",{className:"bbbbb-grid-perspective"}),e.jsxs("svg",{className:"bbbbb-decor-waves",viewBox:"0 0 1440 800",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M-200,600 Q720,-100 1640,600",stroke:"rgba(168, 85, 247, 0.16)",strokeWidth:"1",strokeDasharray:"16 12"}),e.jsx("path",{d:"M-100,200 C300,100 500,400 900,150 C1100,50 1300,300 1600,200",stroke:"rgba(168, 85, 247, 0.28)",strokeWidth:"1.5",strokeDasharray:"8 6"}),e.jsx("path",{d:"M-100,280 C320,180 540,480 940,230 C1140,130 1340,380 1640,280",stroke:"rgba(173, 250, 59, 0.18)",strokeWidth:"1.2"}),e.jsx("path",{d:"M-50,450 C380,350 480,100 880,300 C1080,400 1280,150 1580,350",stroke:"rgba(168, 85, 247, 0.15)",strokeWidth:"1"}),e.jsx("circle",{cx:"180",cy:"160",r:"90",stroke:"rgba(168, 85, 247, 0.14)",strokeWidth:"1",strokeDasharray:"4 4"}),e.jsx("circle",{cx:"180",cy:"160",r:"130",stroke:"rgba(173, 250, 59, 0.1)",strokeWidth:"1"}),e.jsx("circle",{cx:"1180",cy:"380",r:"160",stroke:"rgba(168, 85, 247, 0.15)",strokeWidth:"1",strokeDasharray:"12 6"}),e.jsx("circle",{cx:"1180",cy:"380",r:"220",stroke:"rgba(173, 250, 59, 0.08)",strokeWidth:"1"}),e.jsx("path",{d:"M170,160 L190,160 M180,150 L180,170",stroke:"rgba(173, 250, 59, 0.35)",strokeWidth:"1.5"}),e.jsx("path",{d:"M1170,380 L1190,380 M1180,370 L1180,390",stroke:"rgba(168, 85, 247, 0.35)",strokeWidth:"1.5"}),e.jsx("polygon",{points:"1220,130 1260,155 1260,205 1220,230 1180,205 1180,155",stroke:"rgba(173, 250, 59, 0.14)",strokeWidth:"1",strokeDasharray:"4 2"}),e.jsx("polygon",{points:"1220,130 1260,155 1260,205 1220,230 1180,205 1180,155",stroke:"rgba(173, 250, 59, 0.08)",strokeWidth:"4",opacity:"0.4"}),e.jsx("polygon",{points:"140,480 170,498 170,532 140,550 110,532 110,498",stroke:"rgba(168, 85, 247, 0.15)",strokeWidth:"1.2"})]}),e.jsx("img",{src:"/logo.webp",width:"300",height:"375",className:"absolute top-[8%] right-[5%] w-[4vw] min-w-[50px] opacity-15 animate-pulse select-none pointer-events-none",style:{height:"auto"},alt:"Buzziwah Decorative Logo"}),e.jsx("img",{src:"/logo.webp",width:"300",height:"375",className:"absolute bottom-[8%] left-[5%] w-[4vw] min-w-[50px] opacity-15 animate-pulse select-none pointer-events-none",style:{height:"auto"},alt:"Buzziwah Decorative Logo"}),e.jsx("div",{className:"absolute top-[15%] left-[2%] text-transparent select-none pointer-events-none text-[8vw] md:text-[10vw] font-black tracking-[0.25em] uppercase opacity-20 rotate-[-4deg]",style:{fontFamily:"'Syne', sans-serif",WebkitTextStroke:"1px rgba(255,255,255,0.25)"},children:"WE BUZZ"}),e.jsx("div",{className:"absolute bottom-[15%] right-[2%] text-transparent select-none pointer-events-none text-[8vw] md:text-[10vw] font-black tracking-[0.25em] uppercase opacity-20 rotate-[4deg]",style:{fontFamily:"'Syne', sans-serif",WebkitTextStroke:"1px rgba(255,255,255,0.25)"},children:"BUZZIWAH"})]}),e.jsx("header",{className:"upscale-header",children:e.jsx("h2",{className:"retro-1",style:{fontSize:"clamp(1.8rem, 3.5vw, 2.6rem)",marginBottom:"16px",letterSpacing:"-2px"},children:"Explore Our Core Suite"})}),e.jsx("main",{className:"accordion-layout",children:o.map((a,c)=>e.jsxs("div",{className:`accordion-panel ${t===c?"active":""}`,style:{"--theme-color":a.color,"--theme-color-trans":`${a.color}15`},onMouseEnter:()=>s(c),onClick:()=>{t===c&&(window.location.href=a.href)},children:[e.jsx("div",{className:"accordion-bg-glow"}),e.jsxs("div",{className:"accordion-header",children:[e.jsx("div",{className:"accordion-icon-box",style:{"--theme-color":a.color},children:a.icon}),e.jsx("div",{className:"header-arrow-btn",style:{"--theme-color":a.color},children:e.jsx(D,{})})]}),e.jsx("div",{className:"vertical-spine-text",children:e.jsx("span",{className:"vertical-title",children:a.title})}),e.jsx("div",{className:"accordion-bubble-container",children:e.jsxs("div",{className:`liquid-glass-bubble ${i[c]?"popped":""}`,style:{"--theme-color":a.color},onClick:h=>n(c,a.href,h),children:[e.jsx("div",{className:"bubble-shine-layer"}),e.jsx("div",{className:"bubble-lens-content",children:e.jsx("img",{src:encodeURI(a.image),alt:a.title})}),e.jsx("div",{className:"bubble-burst-ring"})]})}),e.jsxs("div",{className:"accordion-text-container",children:[e.jsx("span",{className:"accordion-sub",children:a.sub}),e.jsx("h3",{className:"accordion-title retro-sm",children:a.title}),e.jsx("p",{className:"accordion-desc",children:a.description})]})]},a.id))})]})},Q=({image:t="/BEGIDN THE BUZZ.png"})=>e.jsxs("section",{className:"content-sales-section",children:[e.jsxs("div",{className:"sales-bg-decorations",children:[e.jsx("div",{className:"sales-shape sales-triangle sales-t1",children:e.jsx("svg",{viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M50 15 L85 75 H15 Z",stroke:"#adfa3b",strokeWidth:"2.5",fill:"rgba(173, 250, 59, 0.04)"})})}),e.jsx("div",{className:"sales-shape sales-triangle sales-t2",children:e.jsx("svg",{viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M50 15 L85 75 H15 Z",stroke:"#adfa3b",strokeWidth:"2",fill:"none",strokeDasharray:"6 4"})})}),e.jsx("div",{className:"sales-shape sales-plus sales-p1",children:"+"}),e.jsx("div",{className:"sales-shape sales-plus sales-p2",children:"+"}),e.jsx("div",{className:"sales-shape sales-circle sales-c1",children:e.jsx("svg",{viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{cx:"50",cy:"50",r:"35",stroke:"#adfa3b",strokeWidth:"2",fill:"none",strokeDasharray:"4 4"})})}),e.jsx("div",{className:"sales-shape sales-circle sales-c2",children:e.jsx("svg",{viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{cx:"50",cy:"50",r:"20",stroke:"#8b5cf6",strokeWidth:"3",fill:"none"})})}),e.jsx("div",{className:"sales-shape sales-square sales-sq1",children:e.jsx("svg",{viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("rect",{x:"25",y:"25",width:"50",height:"50",stroke:"#adfa3b",strokeWidth:"2",fill:"rgba(139, 92, 246, 0.05)",transform:"rotate(45 50 50)"})})})]}),e.jsxs("div",{className:"content-sales-inner",children:[e.jsxs("div",{className:"content-sales-text",children:[e.jsxs("h2",{className:"bbbbb-fiu retro-1",style:{"--fiu-delay":"0.05s"},children:["Behind the ",e.jsx("span",{children:"Buzz"})]}),e.jsx("p",{className:"bbbbb-fiu",style:{"--fiu-delay":"0.18s"},children:"Buzziwah is the evolved, Gen Z–driven digital marketing arm of Sripada Studios. Backed by a strong talent pool and in-house studio capabilities, we combine creative storytelling with technical precision to build brands that grow."}),e.jsx("a",{className:"content-sales-btn bbbbb-fiu",style:{"--fiu-delay":"0.3s"},href:"/about",children:"Know More"})]}),e.jsx("a",{href:"/content-solution",className:"content-sales-image",children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:"/BEGIDN THE BUZZ.webp",type:"image/webp"}),e.jsx("img",{src:t,alt:"Content Solutions Portfolio",width:"760",height:"428",loading:"lazy"})]})})]})]}),X=()=>{const t=l.useRef(null),s=l.useRef(null),[i,r]=l.useState(!1),[o,n]=l.useState(()=>typeof window<"u"?window.innerWidth<768:!0),[a,c]=l.useState(!1),[h,d]=l.useState(!1),[p,m]=l.useState(!1);l.useEffect(()=>{c(!0);const b=window.matchMedia("(max-width: 768px)");n(b.matches);const x=y=>n(y.matches);b.addEventListener("change",x);const v=setTimeout(()=>{d(!0)},1500);return()=>{b.removeEventListener("change",x),clearTimeout(v)}},[]);const u=()=>{s.current&&(i?s.current.pause():s.current.play(),r(!i))},g=["Branding & Identity","Performance Marketing","Social Media Management","Cinema to Digital","SEO & Content Strategy","Web Design & Development","OTT Campaigns"];return e.jsxs("section",{className:"bbbbb-hero-section",children:[e.jsxs("div",{className:"bbbbb-bg-decorations",children:[e.jsx("div",{className:"bbbbb-orb bbbbb-orb-purple"}),e.jsx("div",{className:"bbbbb-orb bbbbb-orb-lime"}),e.jsx("div",{className:"bbbbb-grid-perspective"}),e.jsxs("svg",{className:"bbbbb-decor-waves",viewBox:"0 0 1440 800",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M-200,600 Q720,-100 1640,600",stroke:"rgba(168, 85, 247, 0.16)",strokeWidth:"1",strokeDasharray:"16 12"}),e.jsx("path",{d:"M-100,200 C300,100 500,400 900,150 C1100,50 1300,300 1600,200",stroke:"rgba(168, 85, 247, 0.28)",strokeWidth:"1.5",strokeDasharray:"8 6"}),e.jsx("path",{d:"M-100,280 C320,180 540,480 940,230 C1140,130 1340,380 1640,280",stroke:"rgba(173, 250, 59, 0.18)",strokeWidth:"1.2"}),e.jsx("path",{d:"M-50,450 C380,350 480,100 880,300 C1080,400 1280,150 1580,350",stroke:"rgba(168, 85, 247, 0.15)",strokeWidth:"1"}),e.jsx("circle",{cx:"180",cy:"160",r:"90",stroke:"rgba(168, 85, 247, 0.14)",strokeWidth:"1",strokeDasharray:"4 4"}),e.jsx("circle",{cx:"180",cy:"160",r:"130",stroke:"rgba(173, 250, 59, 0.1)",strokeWidth:"1"}),e.jsx("circle",{cx:"1180",cy:"380",r:"160",stroke:"rgba(168, 85, 247, 0.15)",strokeWidth:"1",strokeDasharray:"12 6"}),e.jsx("circle",{cx:"1180",cy:"380",r:"220",stroke:"rgba(173, 250, 59, 0.08)",strokeWidth:"1"}),e.jsx("path",{d:"M170,160 L190,160 M180,150 L180,170",stroke:"rgba(173, 250, 59, 0.35)",strokeWidth:"1.5"}),e.jsx("path",{d:"M1170,380 L1190,380 M1180,370 L1180,390",stroke:"rgba(168, 85, 247, 0.35)",strokeWidth:"1.5"}),e.jsx("polygon",{points:"1220,130 1260,155 1260,205 1220,230 1180,205 1180,155",stroke:"rgba(173, 250, 59, 0.14)",strokeWidth:"1",strokeDasharray:"4 2"}),e.jsx("polygon",{points:"140,480 170,498 170,532 140,550 110,532 110,498",stroke:"rgba(168, 85, 247, 0.15)",strokeWidth:"1.2"})]}),e.jsx("img",{src:"/logo.webp",className:"bbbbb-bg-logo bbbbb-bg-logo-1",width:"300",height:"375",style:{height:"auto"},alt:"",role:"presentation"}),e.jsx("img",{src:"/logo.webp",className:"bbbbb-bg-logo bbbbb-bg-logo-2",width:"300",height:"375",style:{height:"auto"},alt:"",role:"presentation"}),e.jsx("img",{src:"/logo.webp",className:"bbbbb-bg-logo-3d",width:"300",height:"375",style:{height:"auto"},alt:"",role:"presentation"}),e.jsx("div",{className:"bbbbb-tech-plus bbbbb-tp-1",children:"+"}),e.jsx("div",{className:"bbbbb-tech-plus bbbbb-tp-2",children:"+"}),e.jsx("div",{className:"bbbbb-tech-plus bbbbb-tp-3",children:"+"}),e.jsx("div",{className:"bbbbb-tech-plus bbbbb-tp-4",children:"+"})]}),e.jsxs("div",{className:"bbbbb-hero-main",children:[e.jsxs("div",{className:"bbbbb-headline-wrap",children:[e.jsxs("div",{className:"bbbbb-kicker bbbbb-fiu",style:{"--fiu-delay":"0.05s"},children:[e.jsx("span",{className:"bbbbb-kicker-line"}),"Bengaluru's Digital Partner"]}),e.jsx("div",{ref:t,style:{position:"relative"},children:e.jsx("h1",{className:"bbbbb-h1 bbbbb-fiu retro-1",style:{"--fiu-delay":"0.2s",margin:0,marginBottom:"32px",lineHeight:o?"1.15":"0.55",textAlign:"left",textTransform:"uppercase",letterSpacing:"0.03em",transform:"skewX(-8deg)"},children:o?e.jsxs(e.Fragment,{children:["We're the",e.jsx("br",{}),e.jsx("span",{style:{color:"#adfa3b"},children:"people"}),e.jsx("br",{}),"who think",e.jsx("br",{}),e.jsx("span",{style:{color:"#adfa3b"},children:"sharp"}),e.jsx("br",{}),e.jsx("span",{style:{fontSize:"0.65em"},children:"and move with swag."})]}):e.jsxs(e.Fragment,{children:[e.jsx(S,{label:"We're the",fromFontVariationSettings:"'wght' 400, 'opsz' 9",toFontVariationSettings:"'wght' 1000, 'opsz' 40",containerRef:t,mode:"sequential",autoSpeed:1.2,autoIntensity:1}),e.jsx("br",{}),e.jsx("span",{style:{color:"#adfa3b"},children:e.jsx(S,{label:"people",fromFontVariationSettings:"'wght' 400, 'opsz' 9",toFontVariationSettings:"'wght' 1000, 'opsz' 40",containerRef:t,mode:"sequential",autoSpeed:1.2,autoIntensity:1})}),e.jsx("br",{}),e.jsx(S,{label:"who think",fromFontVariationSettings:"'wght' 400, 'opsz' 9",toFontVariationSettings:"'wght' 1000, 'opsz' 40",containerRef:t,mode:"sequential",autoSpeed:1.2,autoIntensity:1}),e.jsx("br",{}),e.jsx("span",{style:{color:"#adfa3b"},children:e.jsx(S,{label:"sharp",fromFontVariationSettings:"'wght' 400, 'opsz' 9",toFontVariationSettings:"'wght' 1000, 'opsz' 40",containerRef:t,mode:"sequential",autoSpeed:1.2,autoIntensity:1})}),e.jsx("br",{}),e.jsx("span",{style:{fontSize:"0.65em"},children:e.jsx(S,{label:"and move with swag.",fromFontVariationSettings:"'wght' 400, 'opsz' 9",toFontVariationSettings:"'wght' 1000, 'opsz' 40",containerRef:t,mode:"sequential",autoSpeed:1.2,autoIntensity:1})})]})})}),e.jsxs("p",{className:"bbbbb-sub bbbbb-fiu",style:{"--fiu-delay":"0.38s",textAlign:"justify"},children:["This isn't your usual “we post and pray” agency. Buzziwah powered by Sripada Studios brings cinema-level storytelling into digital that actually converts.",e.jsx("br",{}),e.jsx("strong",{children:"Because looking good is easy… getting results isn't."})]}),e.jsxs("div",{className:"bbbbb-cta-row bbbbb-fiu",style:{"--fiu-delay":"0.52s",display:"flex",alignItems:"center",gap:"16px",flexWrap:"wrap"},children:[e.jsx("a",{className:"bbbbb-cta-primary",href:"/contact",children:"Start a Project →"}),e.jsxs("a",{className:"bbbbb-cta-secondary",href:"#projects",onClick:b=>{b.preventDefault();const x=document.querySelector("#projects, .shuffle-cards-section");x&&x.scrollIntoView({behavior:"smooth",block:"start"})},children:["See Our Work",e.jsx("span",{className:"bbbbb-cta-arrow",children:"→"})]}),e.jsxs("button",{onClick:u,className:"bbbbb-audio-btn",style:{display:"flex",alignItems:"center",gap:"8px",padding:"12px 20px",background:"rgba(173, 250, 59, 0.1)",border:"1px solid rgba(173, 250, 59, 0.3)",borderRadius:"50px",color:"#adfa3b",fontSize:"13px",fontWeight:"700",cursor:"pointer",transition:"all 0.3s ease",fontFamily:"'Syne', sans-serif"},onMouseEnter:b=>{b.currentTarget.style.background="rgba(173, 250, 59, 0.2)",b.currentTarget.style.borderColor="#adfa3b"},onMouseLeave:b=>{b.currentTarget.style.background="rgba(173, 250, 59, 0.1)",b.currentTarget.style.borderColor="rgba(173, 250, 59, 0.3)"},children:[e.jsx("span",{style:{fontSize:"18px"},children:i?"⏸":"▶"}),i?"Pause":"Play"," Buzziwah Song"]}),e.jsx("audio",{ref:s,src:"/BuzziWah.mp3",loop:!0,preload:"none"})]})]}),e.jsx("div",{className:"bbbbb-hero-left",children:e.jsxs("div",{className:"bbbbb-hero-media-wrapper",children:[e.jsxs("picture",{children:[e.jsx("source",{srcSet:"/image.webp",type:"image/webp"}),e.jsx("img",{className:"bbbbb-hero-person-img",src:"/image.png",alt:"Buzziwah Digital Marketing Team",width:"758",height:"948",loading:"eager",fetchpriority:"high"})]}),a&&e.jsxs("div",{className:"bbbbb-phone-video-overlay",style:{background:"#07030f"},children:[!p&&e.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, #07030f 100%)",zIndex:2},children:e.jsx("div",{className:"animate-pulse",style:{width:"28px",height:"28px",borderRadius:"50%",backgroundColor:"#adfa3b",boxShadow:"0 0 20px rgba(173, 250, 59, 0.6)",opacity:.6}})}),h&&e.jsx("video",{src:"/hero-reel.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto",onLoadedData:()=>m(!0),style:{width:"100%",height:"100%",objectFit:"cover",pointerEvents:"none",borderRadius:"inherit",opacity:p?1:0,transition:"opacity 0.8s ease"}})]})]})})]}),e.jsx("div",{className:"bbbbb-marquee-wrap",children:e.jsx("div",{className:"bbbbb-marquee-track",children:g.concat(g).map((b,x)=>e.jsxs("span",{className:"bbbbb-m-item",children:[e.jsx("span",{className:"bbbbb-m-dot"}),b]},`${b}-${x}`))})})]})},ee=["ACE.png","Abhani.png","Aikyam.png","Angola Academy.png","Bodhiable.png","CCC.png","Copper Edege Eco Resort.png","Fitness Factory.png","G Academy.png","G Cinemas.png","G9.png","HearFon.png","Kalpavriksha.png","Lilbeez.png","Little Kidz.png","Neferrtiti weddings.png","Nirguna Acting School.png","Ramesh Arvind.png","Samrat.png","Skill Incarnate.png","Sri Chakra.png","Suraj Productions.png","Total Kannada.png","Wisden Clinics.png"],te=()=>{const t=Array.from(new Set(ee)),s=90,i=16;return e.jsxs("section",{className:"clientele-section",children:[e.jsxs("div",{className:"clientele-inner",children:[e.jsx("h2",{className:"clientele-title retro-7",children:"OUR CLIENTS"}),e.jsx("p",{className:"clientele-subtitle",children:"A few of the brands we have elevated lately."})]}),e.jsx("div",{className:"clientele-marquee",children:[...Array(1)].map((o,n)=>{const a=n*5%t.length,c=t.slice(a).concat(t.slice(0,a)),h=c.concat(c),d=s+n*i;return e.jsx("div",{className:`clientele-row ${n%2===0?"forward":"reverse"}`,style:{"--duration":`${d}s`},children:e.jsx("div",{className:"clientele-track",children:h.map((p,m)=>e.jsx("div",{className:"clientele-card",children:e.jsx("img",{className:"clientele-logo",src:encodeURI(`/CLIENTS/${p}`),alt:"Client logo",loading:"lazy"})},`${p}-${m}`))})},`clientele-row-${n}`)})})]})},se=()=>{const[t,s]=l.useState(()=>typeof window<"u"?window.innerWidth<768:!0),[i,r]=l.useState(!1);return l.useEffect(()=>{r(!0);const o=window.matchMedia("(max-width: 768px)");s(o.matches);const n=a=>s(a.matches);return o.addEventListener("change",n),()=>o.removeEventListener("change",n)},[]),e.jsxs("section",{className:"von-hero",children:[e.jsx("div",{className:"von-orb von-orb-1"}),e.jsx("div",{className:"von-orb von-orb-2"}),e.jsx("div",{className:"von-orb von-orb-3"}),e.jsx("div",{className:"von-mesh"}),e.jsxs("div",{className:"von-inner",children:[e.jsxs("div",{className:"von-left",children:[e.jsxs("div",{className:"von-badge",children:[e.jsx("span",{className:"von-badge-dot"}),"We’re Hiring"]}),e.jsxs("h2",{className:"von-h1",children:[e.jsx("span",{className:"von-h1-main",children:"Join Our Team"}),e.jsx("span",{className:"von-grad",children:"Build Something That Matters"})]}),e.jsx("p",{className:"von-desc",children:"Work with a team that values creativity, execution, and real impact. No corporate fluff—just talented people building great work together."}),e.jsxs("div",{className:"von-features",children:[e.jsxs("div",{className:"von-feature",children:[e.jsx("span",{className:"von-fi",children:"✦"}),e.jsx("span",{children:"Your ideas drive projects, not just fill meetings."})]}),e.jsxs("div",{className:"von-feature",children:[e.jsx("span",{className:"von-fi",children:"✦"}),e.jsx("span",{children:"Ownership and initiative are expected and rewarded."})]}),e.jsxs("div",{className:"von-feature",children:[e.jsx("span",{className:"von-fi",children:"✦"}),e.jsx("span",{children:"Fast-paced environment where quality matters."})]})]}),e.jsxs("div",{className:"von-btns",children:[e.jsxs("a",{href:"/contact",className:"von-cta-primary",children:["View Open Positions",e.jsx("span",{className:"von-arr",children:e.jsx("svg",{width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M5 12h14M12 5l7 7-7 7",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),e.jsxs("a",{href:"/contact",className:"von-cta-ghost",children:["Learn More",e.jsx("svg",{className:"von-ga",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M5 12h14M12 5l7 7-7 7",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),e.jsx("div",{className:"von-right",children:e.jsxs("div",{className:"von-gif-container-wrapper",children:[e.jsxs("div",{className:"von-gif-frame",children:[e.jsxs("div",{className:"von-gif-header",children:[e.jsxs("div",{className:"von-gif-dots",children:[e.jsx("span",{className:"von-gif-dot-r"}),e.jsx("span",{className:"von-gif-dot-y"}),e.jsx("span",{className:"von-gif-dot-g"})]}),e.jsx("span",{className:"von-gif-title",children:"BUZZIWAH_WORKSPACE.exe"})]}),e.jsx("div",{className:"von-gif-body",children:!i||t?e.jsx("img",{src:"/BEGIDN THE BUZZ.webp",alt:"Buzziwah Team Workspace",style:{width:"100%",height:"auto",border:"none",borderRadius:"12px",display:"block",objectFit:"cover"}}):e.jsx("video",{src:"/home page join .mp4",style:{width:"100%",height:"auto",border:"none",borderRadius:"12px",display:"block",objectFit:"cover"},ref:o=>{if(!o)return;new IntersectionObserver(([a])=>{a.isIntersecting?o.play().catch(()=>{}):o.pause()},{threshold:.15}).observe(o)},loop:!0,muted:!0,playsInline:!0,preload:"none"})})]}),e.jsx("div",{className:"von-gif-badge",children:e.jsx("span",{children:"✦ WORK WITH US"})})]})})]})]})};z.registerPlugin(K);const ae=()=>{const t=l.useRef(null),s=l.useRef(null),i=l.useRef(null);return l.useEffect(()=>{if(window.innerWidth<768)return;let r=z.context(()=>{z.fromTo(s.current,{scale:.7,opacity:.4,y:100},{scale:1,opacity:1,y:0,ease:"power2.out",scrollTrigger:{trigger:s.current,start:"top 95%",end:"center 60%",scrub:1}})},t);return()=>r.revert()},[]),l.useEffect(()=>{if(window.innerWidth<768)return;const r=i.current;if(!r)return;const o=r.getContext("2d");let n;const a=()=>{r.width=r.parentElement.offsetWidth,r.height=r.parentElement.offsetHeight};a(),window.addEventListener("resize",a);class c{constructor(){this.reset(!0)}reset(u=!1){this.x=Math.random()*r.width,this.y=u?Math.random()*r.height:r.height+Math.random()*120,this.vx=(Math.random()-.5)*.35,this.vy=-Math.random()*.4-.15,this.baseRadius=Math.random()*140+90,this.radius=this.baseRadius,this.alpha=0,this.maxAlpha=Math.random()*.11+.03,this.fadeInSpeed=Math.random()*.004+.002,this.fadeOutSpeed=Math.random()*.003+.001,this.isFadingIn=!0;const g=Math.random()>.5;this.color=g?"139, 92, 246":"173, 250, 59"}update(){this.x+=this.vx,this.y+=this.vy,this.radius+=.12,this.isFadingIn?(this.alpha+=this.fadeInSpeed,this.alpha>=this.maxAlpha&&(this.alpha=this.maxAlpha,this.isFadingIn=!1)):(this.alpha-=this.fadeOutSpeed,this.alpha<=0&&this.reset(!1)),(this.x<-this.radius||this.x>r.width+this.radius||this.y<-this.radius)&&this.reset(!1)}draw(){o.save();const u=o.createRadialGradient(this.x,this.y,0,this.x,this.y,this.radius);u.addColorStop(0,`rgba(${this.color}, ${this.alpha})`),u.addColorStop(.5,`rgba(${this.color}, ${this.alpha*.35})`),u.addColorStop(1,`rgba(${this.color}, 0)`),o.fillStyle=u,o.beginPath(),o.arc(this.x,this.y,this.radius,0,Math.PI*2),o.fill(),o.restore()}}const d=Array.from({length:10},()=>new c),p=()=>{o.clearRect(0,0,r.width,r.height),d.forEach(m=>{m.update(),m.draw()}),n=requestAnimationFrame(p)};return p(),()=>{window.removeEventListener("resize",a),cancelAnimationFrame(n)}},[]),e.jsxs("section",{ref:t,className:"relative w-full py-24 sm:py-32 bg-[#050508] flex flex-col items-center justify-center text-center px-4 sm:px-8 overflow-hidden z-10",children:[e.jsx("style",{children:`
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
      `}),e.jsx("canvas",{ref:i,className:"absolute inset-0 w-full h-full pointer-events-none z-0"}),e.jsx("div",{className:"ambient-aurora-glow-1 absolute top-1/4 left-1/4 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-purple-700/20 blur-[130px] rounded-full pointer-events-none z-0",style:{willChange:"transform"}}),e.jsx("div",{className:"ambient-aurora-glow-2 absolute bottom-1/4 right-1/4 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-[#adfa3b]/12 blur-[130px] rounded-full pointer-events-none z-0",style:{willChange:"transform"}}),e.jsxs("div",{className:"relative z-10 max-w-3xl mx-auto mb-10 sm:mb-16",children:[e.jsx("span",{className:"inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-white/20 bg-white/5 text-[9px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-white/70 mb-4 sm:mb-5",children:"In-House Production"}),e.jsx("h2",{className:"text-2xl sm:text-[2.4rem] md:text-[2.8rem] leading-tight font-black text-white uppercase font-['Geom'] mb-4 sm:mb-6 retro-4",children:"Why we win at content"}),e.jsxs("div",{className:"text-sm sm:text-xl text-white/70 leading-relaxed max-w-xl mx-auto px-4",children:[e.jsxs("p",{className:"font-semibold text-white text-base sm:text-xl mb-2 sm:mb-3",children:["Because it’s not outsourced. ",e.jsx("span",{className:"text-[#adfa3b]",children:"It’s built in-house."})]}),e.jsx("p",{className:"text-xs sm:text-base text-white/60 font-bold",children:"With our own studio and production team, we create everything—from podcasts and reels to ads that actually perform."})]})]}),e.jsxs("div",{ref:s,className:"relative z-10 w-full max-w-6xl mx-auto rounded-[2rem] overflow-hidden shadow-[0_20px_100px_rgba(0,0,0,0.8)] border border-white/10 group group-hover:border-white/20 transition-colors duration-500 bg-[#07030f] origin-center",children:[e.jsx("video",{className:"w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105",src:"/clientlogos/nearby-studio-tour.mp4",ref:r=>{if(!r)return;new IntersectionObserver(([n])=>{n.isIntersecting?r.play().catch(()=>{}):r.pause()},{threshold:.25}).observe(r)},loop:!0,muted:!0,playsInline:!0,preload:"none"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"}),e.jsxs("div",{className:"absolute bottom-0 left-0 w-full p-4 sm:p-12 flex flex-row items-center justify-between gap-4 z-20",children:[e.jsx("img",{src:"/clientlogos/Nearby studio_white.webp",alt:"Nearby Studio Logo",width:"224",height:"64",className:"w-24 sm:w-56 object-contain",style:{height:"auto"}}),e.jsxs("a",{href:"https://nearbystudio.in/",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center px-4 sm:px-8 py-2.5 sm:py-4 bg-white text-black font-bold uppercase tracking-[0.1em] text-[9px] sm:text-sm rounded-full hover:bg-zinc-200 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] whitespace-nowrap",children:["Know More ",e.jsx("span",{className:"hidden sm:inline",children:" about Studio"})]})]})]})]})},re=({num:t})=>{const[s,i]=l.useState(0),r=l.useRef(null),[o,n]=l.useState(!1),a=parseInt(t.replace(/[^0-9]/g,""),10)||0,c=t.replace(/[0-9,]/g,""),h=t.includes(",");l.useEffect(()=>{const p=new IntersectionObserver(u=>{const[g]=u;if(g.isIntersecting&&!o){n(!0);const b=2e3,x=performance.now(),v=y=>{const f=y-x,C=Math.min(f/b,1),W=1-Math.pow(1-C,3),F=Math.floor(W*a);i(F),C<1&&requestAnimationFrame(v)};requestAnimationFrame(v)}},{threshold:.1}),m=r.current;return m&&p.observe(m),()=>{m&&p.unobserve(m)}},[a,o]);const d=p=>h?p.toLocaleString():p;return e.jsxs("span",{ref:r,className:"stats-card-number",children:[d(s),c]})},ie=()=>{const t=[{num:"100+",label:"Brands",sub:"Collaborated & scaled.",color:"#8b5cf6"},{num:"600,000+",label:"Leads",sub:"Not by accident.",color:"#c8ff00"},{num:"50M+",label:"Views",sub:"Every year. Consistently.",color:"#3b82f6"},{num:"300%",label:"Organic Growth",sub:"Because strategy > luck.",color:"#f59e0b"}];return e.jsxs("section",{className:"stats-section-premium",children:[e.jsx("div",{className:"stats-glow-aura aura-left"}),e.jsx("div",{className:"stats-glow-aura aura-right"}),e.jsxs("div",{className:"stats-container",children:[e.jsxs("div",{className:"stats-header",children:[e.jsx("div",{className:"stats-badge",children:"PROOF IN NUMBERS"}),e.jsx("h2",{className:"stats-heading",children:"Best in the market? We'll let the results answer that."})]}),e.jsx("div",{className:"stats-grid",children:t.map((s,i)=>e.jsxs("div",{className:"stats-card",children:[e.jsx("div",{className:"stats-card-border-glow"}),e.jsxs("div",{className:"stats-card-inner",children:[e.jsxs("div",{className:"stats-card-tech-dots",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsx("div",{className:"stats-card-num-wrapper",children:e.jsx(re,{num:s.num})}),e.jsx("h3",{className:"stats-card-label retro-sm",children:s.label}),e.jsx("p",{className:"stats-card-desc",children:s.sub}),e.jsx("div",{className:"stats-card-accent-line",style:{background:s.color}})]})]},i))})]})]})};var oe=class{constructor(t){M(this,"listeners",[]);this.state=t}set(t){this.state=t;for(const s of this.listeners)s(this.state)}subscribe(t){return this.listeners=[...this.listeners,t],()=>{this.listeners=this.listeners.filter(s=>s!==t)}}get(){return this.state}};const ne=l.createContext(null),E=new oe(null),le=l.forwardRef(({children:t,root:s=!1,options:i={},autoRaf:r=!0,className:o="",...n},a)=>{const c=l.useRef(null),h=l.useRef(null),[d,p]=l.useState(void 0);l.useImperativeHandle(a,()=>({wrapper:c.current,content:h.current,lenis:d}),[d]),l.useEffect(()=>{const b=new P({...i,...c.current&&h.current&&{wrapper:c.current,content:h.current},autoRaf:(i==null?void 0:i.autoRaf)??r});return p(b),()=>{b.destroy(),p(void 0)}},[r,JSON.stringify({...i,wrapper:null,content:null})]);const m=l.useRef([]),u=l.useCallback((b,x)=>{m.current.push({callback:b,priority:x}),m.current.sort((v,y)=>v.priority-y.priority)},[]),g=l.useCallback(b=>{m.current=m.current.filter(x=>x.callback!==b)},[]);return l.useEffect(()=>{if(s&&d)return E.set({lenis:d,addCallback:u,removeCallback:g}),()=>E.set(null)},[s,d,u,g]),l.useEffect(()=>{if(!d)return;const b=x=>{for(const{callback:v}of m.current)v(x)};return d.on("scroll",b),()=>{d.off("scroll",b)}},[d]),t?e.jsx(ne.Provider,{value:{lenis:d,addCallback:u,removeCallback:g},children:s&&s!=="asChild"?t:e.jsx("div",{ref:c,className:`${o} ${(d==null?void 0:d.className)??""}`.trim(),...n,children:e.jsx("div",{ref:h,children:t})})}):null}),j=[{id:1,title:"Aanya Hospital",tag:"Branding · Digital",url:"/case-study/aanya-hospital",img:"/best works/branding_case.webp",video:"/PROJECTS HOME PAGE /aanya.mp4"},{id:2,title:"Ramesh Aravind",tag:"Branding · Social",url:"/case-study/ramesh-arvind",img:"/CLIENTS/Ramesh Arvind.png",video:"/PROJECTS HOME PAGE /ramesh arvind.mp4"},{id:3,title:"HearFon",tag:"Video · Production",url:"/case-study/hearfon",img:"/best works/hearfon_case.webp",video:"/PROJECTS HOME PAGE /hearphon.mp4"},{id:4,title:"WMN",tag:"Web · Marketing",url:"/case-study/wmn-healthcare",img:"/best works/wmn_case.webp",video:"/PROJECTS HOME PAGE /wmn.mp4"},{id:5,title:"Tent Cinema",tag:"Social · Leads",url:"/case-study/tent-cinema",img:"/best works/tentcinema_case.webp",video:"/PROJECTS HOME PAGE /tent cenima.mp4"},{id:6,title:"Kovedaa",tag:"Branding · Web",url:"/case-study/kovedaa",img:"/best works/kovedaa_case.webp",video:"/PROJECTS HOME PAGE /kovedaa.mp4"},{id:7,title:"Sindoor Collection",tag:"Branding · Website · Product Shoot",url:"/case-study/sindoor-collection",img:"/best works/srichakra_case.webp",video:""}];function ce(){const[t,s]=w.useState(()=>typeof window<"u"?window.innerWidth<768:!0),[i,r]=w.useState(!1);w.useEffect(()=>{r(!0);const n=()=>{s(window.innerWidth<768)};return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const o=t?1200:2600;return e.jsxs("div",{id:"projects",className:"bg-[#060811] relative z-10 w-full overflow-hidden border-t border-b border-white/5",children:[e.jsx("div",{className:"absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#adfa3b]/12 blur-[150px] pointer-events-none"}),e.jsxs("div",{className:"bbbbb-bg-decorations pointer-events-none select-none opacity-95",children:[e.jsx("div",{className:"bbbbb-orb bbbbb-orb-purple"}),e.jsx("div",{className:"bbbbb-orb bbbbb-orb-lime"}),e.jsx("div",{className:"bbbbb-grid-perspective"}),e.jsxs("svg",{className:"bbbbb-decor-waves",viewBox:"0 0 1440 800",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M-200,600 Q720,-100 1640,600",stroke:"rgba(168, 85, 247, 0.45)",strokeWidth:"1.5",strokeDasharray:"16 12"}),e.jsx("path",{d:"M-100,200 C300,100 500,400 900,150 C1100,50 1300,300 1600,200",stroke:"rgba(168, 85, 247, 0.65)",strokeWidth:"2",strokeDasharray:"8 6"}),e.jsx("path",{d:"M-100,280 C320,180 540,480 940,230 C1140,130 1340,380 1640,280",stroke:"rgba(173, 250, 59, 0.55)",strokeWidth:"1.8"}),e.jsx("path",{d:"M-50,450 C380,350 480,100 880,300 C1080,400 1280,150 1580,350",stroke:"rgba(168, 85, 247, 0.45)",strokeWidth:"1.5"}),e.jsx("circle",{cx:"180",cy:"160",r:"90",stroke:"rgba(168, 85, 247, 0.45)",strokeWidth:"1.5",strokeDasharray:"4 4"}),e.jsx("circle",{cx:"180",cy:"160",r:"130",stroke:"rgba(173, 250, 59, 0.4)",strokeWidth:"1.5"}),e.jsx("circle",{cx:"1180",cy:"380",r:"160",stroke:"rgba(168, 85, 247, 0.45)",strokeWidth:"1.5",strokeDasharray:"12 6"}),e.jsx("circle",{cx:"1180",cy:"380",r:"220",stroke:"rgba(173, 250, 59, 0.35)",strokeWidth:"1.5"}),e.jsx("path",{d:"M170,160 L190,160 M180,150 L180,170",stroke:"rgba(173, 250, 59, 0.85)",strokeWidth:"2"}),e.jsx("path",{d:"M1170,380 L1190,380 M1180,370 L1180,390",stroke:"rgba(168, 85, 247, 0.85)",strokeWidth:"2"}),e.jsx("polygon",{points:"1220,130 1260,155 1260,205 1220,230 1180,205 1180,155",stroke:"rgba(173, 250, 59, 0.45)",strokeWidth:"1.5",strokeDasharray:"4 2"}),e.jsx("polygon",{points:"1220,130 1260,155 1260,205 1220,230 1180,205 1180,155",stroke:"rgba(173, 250, 59, 0.35)",strokeWidth:"4",opacity:"0.6"}),e.jsx("polygon",{points:"140,480 170,498 170,532 140,550 110,532 110,498",stroke:"rgba(168, 85, 247, 0.45)",strokeWidth:"1.8"})]}),e.jsx("div",{className:"bbbbb-tech-plus bbbbb-tp-1 font-black text-[#adfa3b] text-base",children:"+"}),e.jsx("div",{className:"bbbbb-tech-plus bbbbb-tp-2 font-black text-[#C084FC] text-base",children:"+"}),e.jsx("div",{className:"bbbbb-tech-plus bbbbb-tp-3 font-black text-[#adfa3b] text-base",children:"+"}),e.jsx("div",{className:"bbbbb-tech-plus bbbbb-tp-4 font-black text-[#C084FC] text-base",children:"+"}),e.jsx("div",{className:"absolute top-[12%] left-[2%] text-transparent select-none pointer-events-none text-[8vw] md:text-[10vw] font-black tracking-[0.25em] uppercase opacity-40 rotate-[-5deg]",style:{fontFamily:"'Syne', sans-serif",WebkitTextStroke:"1px rgba(255,255,255,0.45)"},children:"WE BUZZ"}),e.jsx("div",{className:"absolute top-[52%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white/[0.06] select-none pointer-events-none text-[12vw] font-black tracking-[0.3em] uppercase",style:{fontFamily:"'Syne', sans-serif"},children:"WE BUZZ"}),e.jsx("div",{className:"absolute bottom-[10%] right-[3%] text-transparent select-none pointer-events-none text-[8vw] md:text-[10vw] font-black tracking-[0.25em] uppercase opacity-40 rotate-[4deg]",style:{fontFamily:"'Syne', sans-serif",WebkitTextStroke:"1px rgba(255,255,255,0.45)"},children:"BUZZIWAH"})]}),e.jsxs("div",{className:"w-full text-center pt-28 pb-4 bg-transparent relative z-30",children:[e.jsx("span",{className:"inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.35em] text-white/50 mb-4",style:{fontFamily:"'Syne', sans-serif"},children:"OUR PORTFOLIO"}),e.jsx("h2",{className:"text-2xl sm:text-3xl md:text-7xl font-black text-white uppercase tracking-tight retro-10",style:{fontFamily:"'Syne', sans-serif"},children:"Look what we did."})]}),t?e.jsx(I,{sectionHeight:o}):e.jsx(le,{root:!0,options:{lerp:.08},children:e.jsx(I,{sectionHeight:o})})]})}const I=({sectionHeight:t})=>e.jsxs("div",{style:{height:`calc(${t}px + 100vh)`},className:"relative w-full",children:[e.jsx(de,{sectionHeight:t}),e.jsx(he,{}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-[#060811]"})]}),de=({sectionHeight:t})=>{const{scrollY:s}=L(),i=N(s,[0,800],[25,0]),r=N(s,[0,800],[75,100]),o=R`polygon(${i}% ${i}%, ${r}% ${i}%, ${r}% ${r}%, ${i}% ${r}%)`,n=N(s,[0,t+300],["170%","100%"]),a=N(s,[t,t+500],[1,0]);return e.jsxs(B.div,{className:"sticky top-0 h-screen w-full",style:{clipPath:o,backgroundSize:n,opacity:a,backgroundImage:"url('/CLIENTS/Ramesh Arvind.webp')",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:[e.jsx("div",{className:"absolute inset-0 bg-black/40 mix-blend-multiply"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:e.jsx("h2",{className:"text-3xl sm:text-4xl md:text-8xl font-black text-white text-center drop-shadow-2xl retro-10",style:{fontFamily:"'Syne', sans-serif"},children:"Look what we did."})})]})};j.map((t,s)=>({card:t,src:t.img,side:s%2===0?"left":"right",start:s%2===0?0:150,end:s%2===0?-300:-450}));const he=()=>e.jsxs("div",{className:"relative z-20 mt-[-100vh] pt-[25vh] pb-[10vh]",style:{maxWidth:"1400px",margin:"0 auto",marginTop:"-100vh",padding:"25vh 24px 10vh"},children:[e.jsxs("div",{className:"flex gap-6 md:gap-10 mb-10 md:mb-16 items-start justify-between",children:[e.jsx(k,{card:j[0],start:0,end:-250,style:{width:"38%",maxWidth:"380px",marginTop:"0"}}),e.jsx(k,{card:j[1],start:120,end:-380,style:{width:"50%",maxWidth:"480px",marginTop:"80px"}})]}),e.jsxs("div",{className:"flex gap-6 md:gap-10 mb-10 md:mb-16 items-start justify-between",children:[e.jsx(k,{card:j[2],start:80,end:-320,style:{width:"45%",maxWidth:"420px",marginTop:"40px"}}),e.jsx(k,{card:j[3],start:0,end:-280,style:{width:"38%",maxWidth:"360px",marginTop:"0"}})]}),e.jsxs("div",{className:"flex gap-6 md:gap-10 mb-10 md:mb-16 items-start justify-between",children:[e.jsx(k,{card:j[4],start:60,end:-350,style:{width:"42%",maxWidth:"380px",marginTop:"0"}}),e.jsx(k,{card:j[5],start:100,end:-300,style:{width:"45%",maxWidth:"420px",marginTop:"60px"}})]}),e.jsx("div",{className:"flex gap-6 md:gap-10 mb-10 md:mb-16 items-start justify-center",children:e.jsx(k,{card:j[6],start:80,end:-350,style:{width:"45%",maxWidth:"420px"}})})]}),k=({card:t,start:s,end:i,style:r={}})=>{const o=l.useRef(null),[n,a]=w.useState(()=>typeof window<"u"?window.innerWidth<768:!0),[c,h]=w.useState(!1);w.useEffect(()=>{h(!0);const f=()=>{a(window.innerWidth<768)};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]);const d=n?Math.round(s*.4):s,p=n?Math.round(i*.4):i,{scrollYProgress:m}=L(n?{}:{target:o,offset:[`${d}px end`,`end ${p*-1}px`]}),u=N(m,[.75,1],[1,0]),g=N(m,[.75,1],[1,.85]),b=N(m,[0,1],[d,p]),x=R`translateY(${b}px) scale(${g})`,v=!c||n?"none":x,y=!c||n?1:u;return e.jsxs(B.a,{ref:o,href:t.url,target:t.url.startsWith("/")?"_self":"_blank",rel:"noopener noreferrer",className:"relative block group cursor-pointer shrink-0 overflow-hidden rounded-3xl mx-auto w-full",style:{transform:v,opacity:y,maxWidth:"380px",...r},children:[c&&t.video&&!n?e.jsx("video",{preload:"none",loop:!0,muted:!0,playsInline:!0,ref:f=>{if(!f)return;new IntersectionObserver(([W])=>{W.isIntersecting?(f.src=t.video,f.load(),f.play().catch(()=>{})):f.pause()},{threshold:.15,rootMargin:"100px"}).observe(f)},className:"w-full h-auto block transition-transform duration-700 group-hover:scale-105"}):e.jsx("img",{src:t.img,alt:t.title,className:"w-full h-auto block transition-transform duration-700 group-hover:scale-105"}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"}),e.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-4 md:p-5 flex items-end justify-between gap-3 pointer-events-none",children:[e.jsx("div",{className:"min-w-0",children:e.jsx("h3",{className:"text-white text-[10px] md:text-xl font-black drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] uppercase tracking-wider retro-sm",style:{fontFamily:"'Syne', sans-serif"},children:t.tag.replace(" · "," & ")})}),e.jsxs("div",{className:"inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold uppercase rounded-full group-hover:bg-[#C084FC] group-hover:border-[#C084FC] transition-all duration-300 shrink-0 pointer-events-auto shadow-md p-1.5 md:px-4 md:py-2",children:[e.jsx("span",{className:"hidden md:inline text-[10px] tracking-wider mr-1.5",children:"Know More"}),e.jsx(_,{className:"text-[10px] md:text-xs"})]})]})]})},we=()=>{const[t,s]=w.useState(0),[i,r]=w.useState(0),[o,n]=w.useState(()=>typeof window<"u"?window.innerWidth<768:!0);return w.useEffect(()=>{const a=window.matchMedia("(max-width: 768px)");n(a.matches);const c=h=>n(h.matches);if(a.addEventListener("change",c),a.matches)return document.querySelectorAll(".scroll-reveal").forEach(h=>h.classList.add("is-visible")),()=>a.removeEventListener("change",c);{const h=new IntersectionObserver(d=>{d.forEach(p=>{p.isIntersecting&&p.target.classList.add("is-visible")})},{threshold:.12,rootMargin:"0px 0px -50px 0px"});return document.querySelectorAll(".scroll-reveal").forEach(d=>h.observe(d)),()=>{h.disconnect(),a.removeEventListener("change",c)}}},[]),e.jsxs("div",{className:"bg-black",children:[e.jsx("div",{className:"scroll-reveal reveal-fade-in",children:e.jsx(X,{})}),e.jsx("div",{className:"scroll-reveal reveal-slide-up",children:e.jsx(J,{})}),e.jsx("div",{className:"scroll-reveal reveal-zoom-in",children:e.jsx(ae,{})}),e.jsx("div",{className:"scroll-reveal reveal-slide-right",children:e.jsx(Q,{})}),e.jsx(ce,{}),e.jsx("section",{className:"growth-section",children:e.jsxs("div",{className:"growth-inner",children:[e.jsxs("div",{className:"growth-content",children:[e.jsxs("div",{className:"growth-kicker",children:[e.jsx("span",{className:"growth-kicker-dot","aria-hidden":"true"}),e.jsx("span",{children:"Driven by Passion. Quality. Dedication."})]}),e.jsxs("h2",{className:"growth-title retro-9",children:["Grow with",e.jsx("span",{className:"growth-title-accent",children:"Buzziwah"})]}),e.jsx("p",{className:"growth-lead",children:"Because “trying” isn’t a growth strategy."}),e.jsx("div",{className:"growth-cta",children:e.jsxs("a",{href:"/contact",className:"growth-button",children:["Start a Project ",e.jsx("span",{children:"→"})]})})]}),e.jsxs("div",{className:"growth-cards-grid",children:[e.jsxs("div",{className:"growth-card growth-card-1",children:[e.jsx("div",{className:"growth-card-icon-box",children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}),e.jsxs("div",{className:"growth-card-content",children:[e.jsx("span",{className:"growth-card-num",children:"01"}),e.jsx("h3",{className:"growth-card-title retro-sm",children:"Brand Visibility"}),e.jsx("p",{className:"growth-card-desc",children:"Build a presence that stays visible across every digital platform your audience uses."})]})]}),e.jsxs("div",{className:"growth-card growth-card-2",children:[e.jsx("div",{className:"growth-card-icon-box",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})}),e.jsxs("div",{className:"growth-card-content",children:[e.jsx("span",{className:"growth-card-num",children:"02"}),e.jsx("h3",{className:"growth-card-title retro-sm",children:"Customer Trust"}),e.jsx("p",{className:"growth-card-desc",children:"Create authentic connections that turn first-time visitors into loyal customers."})]})]}),e.jsxs("div",{className:"growth-card growth-card-3",children:[e.jsx("div",{className:"growth-card-icon-box",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})})}),e.jsxs("div",{className:"growth-card-content",children:[e.jsx("span",{className:"growth-card-num",children:"03"}),e.jsx("h3",{className:"growth-card-title retro-sm",children:"Smart Growth"}),e.jsx("p",{className:"growth-card-desc",children:"Marketing strategies that deliver measurable results and real business growth."})]})]}),e.jsxs("div",{className:"growth-card growth-card-4",children:[e.jsx("div",{className:"growth-card-icon-box",children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("circle",{cx:"12",cy:"12",r:"6"}),e.jsx("circle",{cx:"12",cy:"12",r:"2"})]})}),e.jsxs("div",{className:"growth-card-content",children:[e.jsx("span",{className:"growth-card-num",children:"04"}),e.jsx("h3",{className:"growth-card-title font-bold retro-sm",children:"Target Precision"}),e.jsx("p",{className:"growth-card-desc",children:"Reach the right people at the right time with data-driven targeting."})]})]}),e.jsxs("div",{className:"growth-card growth-card-5",children:[e.jsx("div",{className:"growth-card-icon-box",children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),e.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),e.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"14"})]})}),e.jsxs("div",{className:"growth-card-content",children:[e.jsx("span",{className:"growth-card-num",children:"05"}),e.jsx("h3",{className:"growth-card-title retro-sm",children:"Data Insights"}),e.jsx("p",{className:"growth-card-desc",children:"Make informed decisions backed by analytics, metrics, and proven performance data."})]})]})]})]})}),e.jsx("div",{className:"scroll-reveal reveal-fade-in",children:e.jsx(se,{})}),e.jsx("section",{className:"faq-showcase",id:"faq",children:e.jsxs("div",{className:"faq-inner",children:[e.jsxs("div",{className:"faq-header",children:[e.jsx("div",{className:"faq-title-block",children:e.jsx("h2",{className:"retro-1",children:"Any questions?"})}),e.jsx("p",{className:"faq-intro",children:"Have something on your mind? Whether it’s about our services, process, timelines, or pricing — we’ve answered the most common questions to help you move forward with clarity and confidence."})]}),(()=>{const a=[{question:"What is Buzziwah?",answer:"Buzziwah is a Bengaluru-based conglomerate specializing in filmmaking, digital marketing, and research. We deliver creative and strategic solutions across three core verticals to help brands and individuals connect meaningfully with their audiences."},{question:"What services does Buzziwah offer?",answer:"Filmmaking: Short films, documentaries, promotional videos, and corporate films. Digital Marketing: Social media management, performance marketing, content creation, branding, and online reputation management. Research & Reach: Data-driven audience analysis, campaign planning, and customized strategies for better outreach."},{question:"Who are your clients?",answer:"We cater to small businesses, multinational corporations, startups, personal branding clients, and large-scale brands across industries."},{question:"What makes Buzziwah unique?",answer:"We combine creativity with strategy to deliver innovative solutions tailored to each project. Our young, dynamic team excels at breaking monotony and crafting imaginative campaigns that resonate deeply with the target audience."},{question:"Do you specialize in Kannada film promotions?",answer:"Yes. Under Sripada Studios Designs, we focus exclusively on Kannada films, handling logo creation, promotional videos, posters, social media management, event coverage, and more to align with filmmakers’ vision and audience."},{question:"Can you handle end-to-end digital marketing campaigns?",answer:"Absolutely. From social media marketing and performance ads to website design and content marketing, we provide end-to-end digital marketing solutions customized to your goals."},{question:"How experienced is your team?",answer:"Our team includes creative writers, editors, filmmakers, and digital marketing professionals with years of experience, all driven by a shared passion for storytelling and impactful campaigns."},{question:"Do you have examples of your past work?",answer:"Yes. We’ve completed 500+ projects for 100+ clients. Check out our portfolio for case studies and success stories that showcase our expertise."}];return e.jsx("div",{className:"faq-grid",children:a.map((c,h)=>e.jsxs("div",{className:`faq-card ${t===h?"open":""}`,children:[e.jsxs("button",{className:"faq-question",type:"button",onClick:()=>s(t===h?-1:h),"aria-expanded":t===h,children:[e.jsx("span",{children:`${h+1}. ${c.question}`}),e.jsx("span",{className:"faq-arrow",children:"⌄"})]}),e.jsx("div",{className:"faq-answer",children:c.answer})]},c.question))})})()]})}),e.jsx(te,{}),e.jsxs("section",{className:"home-bottom-megablock relative overflow-hidden",children:[e.jsxs("div",{className:"bbbbb-bg-decorations pointer-events-none select-none",children:[e.jsx("div",{className:"bbbbb-orb bbbbb-orb-purple",style:{top:"10%",left:"5%"}}),e.jsx("div",{className:"bbbbb-orb bbbbb-orb-lime",style:{bottom:"15%",right:"5%"}}),e.jsx("div",{className:"bbbbb-grid-perspective",style:{opacity:.4}}),e.jsxs("svg",{className:"bbbbb-decor-waves opacity-10",viewBox:"0 0 1440 800",fill:"none",children:[e.jsx("path",{d:"M-200,400 Q720,-100 1640,400",stroke:"rgba(168, 85, 247, 0.3)",strokeWidth:"1",strokeDasharray:"10 10"}),e.jsx("circle",{cx:"1200",cy:"200",r:"150",stroke:"rgba(173, 250, 59, 0.2)",strokeWidth:"1"})]}),e.jsx("div",{className:"bbbbb-tech-plus",style:{top:"20%",left:"10%",color:"#adfa3b"},children:"+"}),e.jsx("div",{className:"bbbbb-tech-plus",style:{bottom:"30%",right:"15%",color:"#8b5cf6"},children:"+"})]}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("div",{className:"scroll-reveal reveal-slide-up",children:e.jsx(ie,{})}),e.jsx("div",{className:"scroll-reveal reveal-slide-up",children:e.jsx(Y,{})})]})]})]})};export{we as default};
