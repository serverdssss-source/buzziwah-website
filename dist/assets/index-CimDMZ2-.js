import{r as o,j as e,g as d}from"./animation-vendor-2OyP_18a.js";import{V as m}from"./VariableProximity-HzNwaBXZ.js";import{s as g}from"./servicesData-CBjG5fGf.js";import{S as h}from"./ScrollTrigger-D1XJUMov.js";import{a as f,S as u}from"./Section10-BoTqWA1Q.js";const c=g["website-development"],b=()=>{const a=o.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
          10% { opacity: 1; }
          90% { opacity: 1; }
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
          font-family: 'Montserrat', sans-serif !important;
          font-size: clamp(32px, 5.5vw, 64px);
          font-weight: 900;
          color: #ffffff !important;
          margin: 0;
          line-height: 1.1;
          letter-spacing: -0.02em;
          position: relative;
          z-index: 2;
          animation: titleFadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .coded-page-banner-title * {
          color: inherit !important;
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
      `}),e.jsx("section",{className:"page-banner-section",ref:a,children:e.jsxs("div",{className:"coded-page-banner",children:[e.jsx("div",{className:"coded-page-banner-grid"}),e.jsx("div",{className:"coded-page-banner-purple-glow"}),e.jsx("div",{className:"coded-page-banner-green-glow"}),e.jsx("div",{className:"coded-page-banner-particles",children:Array.from({length:15}).map((t,n)=>{const i=`${Math.random()*100}%`,r=`${Math.random()*100}%`,s=`${Math.random()*3+1.5}px`,l=`${Math.random()*-20}s`,p=`${Math.random()*10+15}s`;return e.jsx("div",{className:"coded-banner-particle",style:{left:i,top:r,width:s,height:s,animationDelay:l,animationDuration:p}},n)})}),e.jsxs("div",{className:"flex flex-col items-center justify-center w-full max-w-[900px] gap-6 px-6 z-10 text-center relative",children:[e.jsx("div",{className:"absolute left-[-100px] top-[-50px] w-[500px] h-[1px] bg-[#adfa3b]/20 rotate-[-12deg] pointer-events-none"}),e.jsx("div",{className:"absolute right-[-100px] bottom-[-50px] w-[500px] h-[1px] bg-purple-500/10 rotate-[-12deg] pointer-events-none"}),e.jsxs("div",{className:"flex flex-col items-center text-center relative z-10",children:[e.jsx("div",{className:"coded-page-banner-badge",children:c.badge}),e.jsx("h1",{className:"coded-page-banner-title text-center skew-x-[-4deg] mb-4",style:{letterSpacing:"-0.03em"},children:e.jsx(m,{label:`${c.title} ${c.accentTitle}`,fromFontVariationSettings:"'wght' 400, 'opsz' 9",toFontVariationSettings:"'wght' 1000, 'opsz' 40",containerRef:a,radius:100,falloff:"linear"})}),e.jsx("div",{className:"h-[2px] w-24 bg-[#adfa3b] my-4 rounded-full"}),e.jsx("p",{className:"coded-page-banner-subtitle text-center max-w-[650px] mx-auto",children:c.subtitle})]})]})]})})]})};function y(){return null}const w=()=>{const a=["WE DESIGN","WE DEVELOP","WE PRMOTE","WE GROW"];return e.jsxs("section",{style:{background:"linear-gradient(135deg, #070312 0%, #150930 50%, #070312 100%)",padding:"0",overflow:"hidden",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:"5%",width:80,height:80,borderRadius:"50%",background:"rgba(124,58,237,0.55)",filter:"blur(22px)",transform:"translateY(-50%)",pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",top:"50%",right:"6%",width:60,height:60,borderRadius:"50%",background:"rgba(124,58,237,0.45)",filter:"blur(18px)",transform:"translateY(-50%)",pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",top:"10%",left:"30%",width:40,height:40,borderRadius:"50%",background:"rgba(124,58,237,0.3)",filter:"blur(14px)",pointerEvents:"none"}}),e.jsx("div",{className:"marquee-row",style:{display:"flex",width:"100%"},children:a.map((t,n)=>e.jsxs("div",{className:"marquee-item",style:{flex:1,minWidth:0,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:[e.jsx("span",{style:{fontFamily:"'Syne', sans-serif",fontSize:"clamp(18px, 2.5vw, 38px)",fontWeight:800,color:"#c8ff00",letterSpacing:"0.06em",textTransform:"uppercase",whiteSpace:"nowrap",textAlign:"center"},children:t}),n<a.length-1&&e.jsx("div",{className:"marquee-divider",style:{position:"absolute",right:0,width:2,height:32,background:"#5b21b6"}})]},n))}),e.jsx("style",{children:`
        .marquee-item {
          padding: 52px 8px;
        }
        @media (max-width: 768px) {
          .marquee-row {
            flex-wrap: wrap !important;
          }
          .marquee-item {
            flex: 1 1 50% !important;
            padding: 30px 4px !important;
          }
          .marquee-divider {
            display: none !important;
          }
        }
      `})]})},v=()=>e.jsxs("section",{className:"relative overflow-hidden px-6 py-28 sm:px-10 lg:py-36",style:{background:"#05030a"},children:[e.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08)_0%,transparent_70%)] pointer-events-none"}),e.jsx("div",{className:"absolute right-[-10%] top-10 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(173,250,59,0.04)_0%,transparent_70%)] pointer-events-none animate-pulse"}),e.jsx("div",{className:"absolute inset-0 opacity-[0.015] pointer-events-none",style:{backgroundImage:"linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",backgroundSize:"60px 60px"}}),e.jsxs("div",{className:"relative z-10 mx-auto max-w-[1100px] text-center",children:[e.jsxs("div",{className:"inline-flex items-center gap-2.5 mb-8 px-4 py-1.5 bg-[#adfa3b]/10 border border-[#adfa3b]/20 rounded-full",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-[#adfa3b] animate-ping"}),e.jsx("span",{className:"text-[11px] font-mono font-black tracking-[0.25em] text-[#adfa3b] uppercase",children:"THE DIGITAL SHIFT"})]}),e.jsxs("h2",{className:"font-['Montserrat'] text-[clamp(28px,4.5vw,56px)] font-black text-white uppercase tracking-tight leading-[1.1] mb-8",children:["What is a website ",e.jsx("span",{className:"text-[#adfa3b] italic",children:"today"}),"?"]}),e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsxs("p",{className:"font-['Montserrat'] text-[clamp(20px,2.8vw,36px)] font-light text-white/90 leading-[1.4] tracking-wide mb-6",children:['"A website is your ',e.jsx("span",{className:"text-[#adfa3b] font-black",children:"digital validation"}),', a space where trust begins, and credibility is built."']}),e.jsx("p",{className:"font-sans text-[clamp(16px,1.8vw,21px)] text-white/50 leading-relaxed max-w-2xl mx-auto font-normal",children:"A dynamic, well-crafted website says more about your brand than any introduction ever could."})]}),e.jsxs("div",{className:"mt-12 flex justify-center items-center gap-4",children:[e.jsx("div",{className:"w-12 h-[1px] bg-white/10"}),e.jsx("span",{className:"text-white/20 text-xs font-mono",children:"✦"}),e.jsx("div",{className:"w-12 h-[1px] bg-white/10"})]})]})]}),j=()=>{const a=[e.jsx(e.Fragment,{children:"USER-FOCUSED WEBSITE STRUCTURE"}),e.jsxs(e.Fragment,{children:["SHOWCASES ACTING COURSES &",e.jsx("br",{}),"FACULTY"]}),e.jsx(e.Fragment,{children:"CLEAN VISUAL STORYTELLING"}),e.jsxs(e.Fragment,{children:["RESPONSIVE DESIGN FOR MOBILE",e.jsx("br",{}),"USERS"]}),e.jsxs(e.Fragment,{children:["MINIMALISTIC UI THAT REFLECTS",e.jsx("br",{}),"ARTISTIC VALUES"]})],t=[e.jsxs(e.Fragment,{children:["BOOSTED VISIBILITY AMONG",e.jsx("br",{}),"ASPIRING ACTORS"]}),e.jsx(e.Fragment,{children:"STRONGER DIGITAL BRAND PRESENCE"}),e.jsxs(e.Fragment,{children:["LASTING IMPRESSION IN PERFORMING",e.jsx("br",{}),"ARTS EDUCATION"]}),e.jsxs(e.Fragment,{children:["EASY NAVIGATION & CTA",e.jsx("br",{}),"ENGAGEMENT"]}),e.jsx(e.Fragment,{children:"AT REFLECTS ARTISTIC VALUES"})];return e.jsxs("section",{className:"webdev-section3",style:{background:"#ffffff",padding:"90px 6% 32px",height:"100vh",boxSizing:"border-box",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"15%",right:"3%",width:90,height:90,borderRadius:"50%",background:"rgba(124,58,237,0.22)",filter:"blur(2px)",pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",bottom:"12%",left:"2%",width:66,height:66,borderRadius:"50%",background:"rgba(124,58,237,0.18)",filter:"blur(2px)",pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",bottom:"30%",right:"8%",width:45,height:45,borderRadius:"50%",background:"rgba(124,58,237,0.15)",filter:"blur(1px)",pointerEvents:"none"}}),e.jsx("p",{className:"section3-category-label",style:{textAlign:"center",fontFamily:"'Nunito Sans', sans-serif",fontSize:22,fontWeight:800,letterSpacing:"0.18em",textTransform:"uppercase",color:"#111",marginBottom:72},children:"Ecommerce Website"}),e.jsxs("div",{className:"section3-main-row",style:{display:"flex",alignItems:"flex-start",gap:56,flexWrap:"nowrap"},children:[e.jsx("div",{className:"section3-video-col",style:{flex:"0 0 50%",maxWidth:"50%",display:"flex",justifyContent:"center",alignItems:"center",transform:"translateY(-52px)",background:"transparent"},children:e.jsx("video",{src:"/webdev-demo.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto",style:{width:"100%",maxWidth:840,height:"auto",display:"block",background:"transparent"}})}),e.jsxs("div",{className:"section3-content-col",style:{flex:"0 0 50%",maxWidth:"50%"},children:[e.jsx(S,{scale:1.5}),e.jsx("h2",{className:"section3-headline",style:{fontFamily:"'Nunito Sans', sans-serif",fontWeight:500,color:"#7c3aed",textTransform:"uppercase",lineHeight:1.2,margin:"0 0 21px",whiteSpace:"nowrap"},children:"Kovedaa Skincare Website"}),e.jsxs("p",{className:"section3-para",style:{color:"#444",lineHeight:1.6,margin:"0 0 48px",maxWidth:690,fontFamily:"'Nunito Sans', sans-serif"},children:["Designed and developed a modern eCommerce",e.jsx("br",{}),"website for Kovedaa, blending Ayurvedic heritage",e.jsx("br",{}),"with a clean, conversion-focused user experience."]}),e.jsxs("div",{className:"section3-lists",style:{display:"flex",gap:32,flexWrap:"nowrap"},children:[e.jsxs("div",{style:{flex:"1 1 270px"},children:[e.jsx("h4",{style:{fontFamily:"'Nunito Sans', sans-serif",fontSize:16,fontWeight:500,color:"#7c3aed",textTransform:"uppercase",letterSpacing:"0.1em",margin:"0 0 18px"},children:"Project Highlights"}),e.jsx("ul",{style:{margin:0,padding:0,listStyle:"none"},children:a.map((n,i)=>e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:10.5,fontSize:14,color:"#333",lineHeight:1.45,marginBottom:8,fontFamily:"'Nunito Sans', sans-serif",fontWeight:500},children:[e.jsx("span",{style:{color:"#7c3aed",marginTop:2,flexShrink:0},children:"•"}),n]},i))})]}),e.jsxs("div",{style:{flex:"1 1 270px"},children:[e.jsx("h4",{style:{fontFamily:"'Nunito Sans', sans-serif",fontSize:16,fontWeight:500,color:"#7c3aed",textTransform:"uppercase",letterSpacing:"0.1em",margin:"0 0 18px"},children:"Outcome"}),e.jsx("ul",{style:{margin:0,padding:0,listStyle:"none"},children:t.map((n,i)=>e.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:10.5,fontSize:14,color:"#333",lineHeight:1.45,marginBottom:8,fontFamily:"'Nunito Sans', sans-serif",fontWeight:500},children:[e.jsx("span",{style:{color:"#7c3aed",marginTop:2,flexShrink:0},children:"•"}),n]},i))})]})]}),e.jsx(N,{scale:1.5})]})]}),e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap');
        .section3-headline {
          font-size: clamp(24px, 2.5vw, 36px);
        }
        .section3-para {
          font-size: 22.5px;
        }
        @media (min-width: 1025px) {
          .section3-main-row {
            display: flex !important;
            flex-wrap: nowrap !important;
            align-items: flex-start !important;
          }
          .section3-video-col {
            flex: 0 0 50% !important;
            max-width: 50% !important;
          }
          .section3-content-col {
            flex: 0 0 50% !important;
            max-width: 50% !important;
          }
          .section3-lists {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            column-gap: 24px !important;
          }
        }
        @media (max-width: 1024px) {
          .webdev-section3 {
            height: auto !important;
            overflow: visible !important;
            padding: 48px 6% 32px !important;
          }
          .section3-category-label {
            margin-bottom: 24px !important;
          }
          .section3-main-row {
            flex-direction: column !important;
            gap: 24px !important;
            flex-wrap: wrap !important;
          }
          .section3-video-col {
            transform: none !important;
            margin-bottom: 12px !important;
          }
          .section3-video-col, .section3-content-col {
            flex: 1 1 100% !important;
            max-width: 100% !important;
          }
          .section3-content-col {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .section3-lists {
            display: flex !important;
            flex-wrap: wrap !important;
            gap: 24px !important;
            width: 100% !important;
            justify-content: center !important;
            text-align: left !important;
          }
          .section3-headline {
            font-size: 24px !important;
            white-space: normal !important;
            text-align: center !important;
          }
          .section3-para {
            font-size: 18px !important;
            margin-bottom: 24px !important;
            text-align: center !important;
          }
        }
      `})]})},S=({dark:a=!1,scale:t=1})=>e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8*t,background:"#9333ea",borderRadius:50*t,padding:`${6*t}px ${16*t}px ${6*t}px ${6*t}px`,marginBottom:18*t,border:"none",transform:t!==1?`scale(${t})`:"none",transformOrigin:"left center"},children:[e.jsx("div",{style:{width:22*t,height:22*t,borderRadius:"50%",background:"#280c44",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:7*t,height:7*t,borderRadius:"50%",background:"#fff"}})}),e.jsx("span",{style:{color:"#fff",fontSize:10*t,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"'Nunito Sans', sans-serif"},children:"CASE STUDIES"})]}),N=({dark:a=!1,scale:t=1})=>{const[n,i]=o.useState(!1);return e.jsx("a",{href:"/case-study/kovedaa",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),style:{display:"inline-block",textDecoration:"none",position:"relative",overflow:"hidden",background:n?"#5b21b6":"#7c3aed",color:"#fff",border:"none",borderRadius:50*t,padding:`${14*t}px ${40*t}px`,fontSize:10.5*t,fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",cursor:"pointer",transition:"all 0.3s ease",transform:n?`translateY(${-3*t}px)`:"none",boxShadow:n?`0 ${10*t}px ${25*t}px rgba(124,58,237,0.5)`:`0 ${4*t}px ${15*t}px rgba(124,58,237,0.3)`,fontFamily:"'Nunito Sans', sans-serif",marginTop:32*t,textAlign:"center"},children:"Know More"})},k=()=>{const[a,t]=o.useState(!1);return e.jsx("button",{onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),style:{alignSelf:"flex-start",background:a?"#7c3aed":"#c8ff00",color:a?"#fff":"#0d0d1a",border:"none",borderRadius:50,padding:"7px 18px",fontSize:9,fontWeight:800,letterSpacing:"0.04em",textTransform:"uppercase",cursor:"pointer",transition:"all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",fontFamily:"'Nunito Sans', sans-serif",marginTop:"auto",boxShadow:a?"0 10px 25px rgba(124, 58, 237, 0.4)":"none",transform:a?"translateY(-2px)":"none"},children:"LEARN MORE"})},E=()=>null,I=[{icon:e.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"#c8ff00",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"16 18 22 12 16 6"}),e.jsx("polyline",{points:"8 6 2 12 8 18"})]}),title:"Custom-coded Websites",desc:"Fully tailored websites built from scratch with clean code, optimized performance, and unique functionality designed specifically for your business needs."},{icon:e.jsx("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"#c8ff00",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"})}),title:"One-page Websites",desc:"Sleek, single-page designs that deliver your complete message in one seamless scroll, perfect for portfolios, events, and focused campaigns."},{icon:e.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"#c8ff00",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),e.jsx("polyline",{points:"7.5 4.21 12 6.81 16.5 4.21"}),e.jsx("polyline",{points:"7.5 19.79 7.5 14.6 3 12"}),e.jsx("polyline",{points:"21 12 16.5 14.6 16.5 19.79"}),e.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),e.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),title:"Landing Pages",desc:"High-converting landing pages designed to capture leads, drive action, and maximize ROI for your marketing campaigns and product launches."},{icon:e.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"#c8ff00",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),e.jsx("path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"})]}),title:"Portfolio Websites",desc:"Stunning visual showcases that highlight your work, skills, and achievements with elegant design and smooth user experience."},{icon:e.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"#c8ff00",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"9",cy:"21",r:"1"}),e.jsx("circle",{cx:"20",cy:"21",r:"1"}),e.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),title:"E-commerce Websites",desc:"Complete online stores with secure payment integration, inventory management, and seamless shopping experiences that drive sales and customer loyalty."}],T=({icon:a,title:t,desc:n})=>{const[i,r]=o.useState(!1);return e.jsxs("div",{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),className:"service-card-responsive",style:{backgroundColor:"#070a1f",backgroundImage:`
          repeating-linear-gradient(
            0deg,
            transparent 0,
            transparent 84px,
            rgba(74, 90, 170, 0.12) 85px
          ),
          repeating-linear-gradient(
            90deg,
            transparent 0,
            transparent 84px,
            rgba(74, 90, 170, 0.12) 85px
          )
        `,border:`1.5px solid ${i?"#c8ff00":"rgba(200,255,0,0.1)"}`,borderRadius:16,display:"flex",flexDirection:"column",gap:14,cursor:"default",transition:"all 0.3s ease",transform:i?"translateY(-6px)":"none",boxShadow:i?"0 22px 50px rgba(200,255,0,0.14)":"0 8px 24px rgba(0,0,0,0.22)",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{width:1,height:1,position:"absolute",top:0,left:0}}),e.jsx("div",{style:{marginBottom:2,transition:"all 0.3s ease"},children:a}),e.jsx("h3",{style:{fontSize:16,fontWeight:700,color:"#7ed316",textTransform:"uppercase",letterSpacing:"0.03em",margin:0},children:t}),e.jsx("p",{style:{fontSize:12,color:"rgba(255,255,255,0.9)",lineHeight:1.55,margin:"6px 0 14px",fontWeight:500},children:n}),e.jsx(k,{}),e.jsx("style",{children:`
        .service-card-responsive {
          min-height: 286px;
          padding: 18px 18px 16px;
        }
        @media (max-width: 768px) {
          .service-card-responsive {
            min-height: auto !important;
            padding: 18px 16px !important;
            gap: 12px !important;
          }
        }
      `})]})},z=()=>{const a=[{name:"Kovedaa",domain:"Wellness & Ayurvedic Skincare",outcome:"Seamless Ecommerce Integration",stat:"+240% Order Volume",description:"A gorgeous, high-conversion online store blending holistic Ayurvedic heritage with advanced modern shopping UX.",color:"#adfa3b",caseStudyUrl:"/case-study/kovedaa"},{name:"Aanya Hospital",domain:"Healthcare & Patient Services",outcome:"Integrated Patient Booking",stat:"Instant Appointments",description:"Clean, ultra-secure hospital portal engineered for swift emergency contacts, appointments, and medical service listings.",color:"#7c3aed",caseStudyUrl:"/case-study/aanya-hospital"},{name:"WMN",domain:"Womens Healthcare & Diagnostics",outcome:"Interactive Symptom Assessment",stat:"1.5M+ Digital Queries",description:"A premium, compassionate digital medical space customized for specialized women's health consulting and virtual check-ins.",color:"#adfa3b",caseStudyUrl:"/case-study/wmn-healthcare"},{name:"New Samrat Restaurant",domain:"Gastronomy & Online Ordering",outcome:"Dynamic Visual Food Menu",stat:"3.5x More Deliveries",description:"Slick, responsive digital showcase featuring high-res imagery, table booking workflows, and instant delivery ordering integration.",color:"#7c3aed"},{name:"Crime Stoppers",domain:"Public Safety & Incident Alerts",outcome:"Encrypted Secure Anonymity",stat:"Zero-Trace Security",description:"A vital, state-grade emergency and secure anonymous reporting platform built to strict cybersecurity guidelines.",color:"#adfa3b"},{name:"SVNI",domain:"Educational Institute Portal",outcome:"LMS & Student Enrolment",stat:"12,000+ Active Students",description:"Academic powerhouse website organizing course directories, student portals, online registration systems, and curriculum archives.",color:"#7c3aed"},{name:"Action Cut Entertainments",domain:"Film, Media & Production Studio",outcome:"Fluid Immersive Video Showreel",stat:"Cinema-Grade Media Hub",description:"A dark-themed portfolio featuring smooth embedded video structures, custom showreels, and dynamic production showcases.",color:"#adfa3b"}];return e.jsxs("section",{className:"relative overflow-hidden px-6 py-24 sm:px-10 lg:py-28",style:{background:"#05030d"},children:[e.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(173,250,59,0.03)_0%,transparent_70%)] pointer-events-none"}),e.jsxs("div",{className:"relative z-10 mx-auto max-w-[1200px]",children:[e.jsxs("div",{className:"mb-16 text-center md:text-left md:flex justify-between items-end gap-8",children:[e.jsxs("div",{className:"max-w-2xl",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#7c3aed]/10 border border-[#7c3aed]/20 rounded-full",children:[e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#7c3aed] animate-pulse"}),e.jsx("span",{className:"text-[10px] font-mono font-black tracking-widest text-[#7c3aed] uppercase font-bold",children:"DIGITAL PORTFOLIO"})]}),e.jsxs("h2",{className:"font-['Montserrat'] text-[clamp(28px,4.5vw,52px)] font-black uppercase text-white leading-tight",children:["Websites that we have ",e.jsx("span",{className:"text-[#adfa3b] italic",children:"deployed"})]}),e.jsx("p",{className:"mt-4 text-white/50 text-sm sm:text-base leading-relaxed",children:"Crafted to perfection. From responsive layouts to lightning-fast interaction times, we build websites that transform traffic into pure brand trust."})]}),e.jsx("div",{className:"mt-6 md:mt-0",children:e.jsx("span",{className:"font-mono text-xs text-white/40 tracking-widest bg-white/[0.02] border border-white/5 px-4 py-2 rounded-xl inline-block",children:"TOTAL DEPLOYMENTS: 85+ SITES"})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16",children:[a.map((t,n)=>{const i=e.jsxs("div",{className:"rounded-[28px] border border-white/5 bg-gradient-to-b from-white/[0.015] to-white/[0.002] hover:border-white/10 hover:bg-white/[0.02] p-8 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between h-full",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-start mb-6",children:[e.jsx("span",{className:"text-[28px] font-mono font-black text-white/5",children:String(n+1).padStart(2,"0")}),e.jsx("span",{className:"w-2.5 h-2.5 rounded-full",style:{background:t.color,boxShadow:`0 0 10px ${t.color}`}})]}),e.jsx("h3",{className:"font-['Montserrat'] text-2xl font-black text-white uppercase tracking-tight mb-1 group-hover:text-[#adfa3b] transition-colors",children:t.name}),e.jsx("span",{className:"text-[10px] font-mono font-bold tracking-wider text-[#adfa3b] uppercase block mb-4",children:t.domain}),e.jsx("p",{className:"text-white/60 text-sm leading-relaxed mb-6 font-normal",children:t.description})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.015] border border-white/5 mt-auto flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-[10px] font-mono text-white/40 font-bold uppercase tracking-widest mb-1",children:t.outcome}),e.jsx("div",{className:"text-white text-[15px] font-black font-mono",children:t.stat})]}),t.caseStudyUrl&&e.jsx("div",{className:"text-[#adfa3b] text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity",children:"View Case Study →"})]})]});return t.caseStudyUrl?e.jsx("a",{href:t.caseStudyUrl,className:"block no-underline",children:i},n):e.jsx("div",{children:i},n)}),e.jsxs("div",{className:"rounded-[28px] border border-dashed border-[#adfa3b]/20 bg-gradient-to-b from-[#120f03]/30 to-[#030502]/10 p-8 flex flex-col justify-between items-center text-center relative overflow-hidden group",children:[e.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(173,250,59,0.04)_0%,transparent_70%)] opacity-30 group-hover:opacity-60 transition-opacity duration-500"}),e.jsxs("div",{className:"my-auto relative z-10",children:[e.jsx("span",{className:"text-[32px] block mb-4",children:"✨"}),e.jsx("h3",{className:"font-['Montserrat'] text-xl font-black text-white uppercase tracking-tight mb-2",children:"YOUR BRAND HERE"}),e.jsx("p",{className:"text-white/50 text-xs leading-relaxed max-w-[200px] mx-auto mb-6",children:"Let’s co-author the perfect digital home for your unique brand story."}),e.jsx("a",{href:"/contact",className:"inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 font-['Montserrat'] text-[10px] font-black uppercase tracking-[0.1em] text-[#05030d] bg-[#adfa3b] hover:bg-white transition-all duration-300",children:"Launch Now"})]})]})]}),e.jsxs("div",{className:"rounded-[32px] border border-[#adfa3b]/20 bg-gradient-to-r from-[#0d1c07]/80 to-[#020502]/80 p-8 sm:p-12 backdrop-blur-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8",children:[e.jsx("div",{className:"absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(173,250,59,0.06)_0%,transparent_70%)] pointer-events-none"}),e.jsxs("div",{className:"text-center md:text-left relative z-10",children:[e.jsx("span",{className:"text-[10px] font-mono font-black tracking-[0.2em] text-[#adfa3b] uppercase mb-2 block font-bold",children:"CASE REVIEWS"}),e.jsx("h3",{className:"font-['Montserrat'] text-[24px] sm:text-[32px] font-black text-white uppercase tracking-wide mb-3",children:"Explore complete deployed site audits?"}),e.jsx("p",{className:"text-white/60 text-sm max-w-lg leading-relaxed",children:"Check out all the custom architectures, performance results, and design structures we implemented."})]}),e.jsx("div",{className:"flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-10",children:e.jsx("a",{href:"/#projects",className:"rounded-full px-8 py-3.5 font-['Montserrat'] text-xs font-bold uppercase tracking-[0.08em] text-center text-black transition-all duration-200",style:{background:"#adfa3b"},onMouseEnter:t=>{t.currentTarget.style.background="#7c3aed",t.currentTarget.style.color="#ffffff"},onMouseLeave:t=>{t.currentTarget.style.background="#adfa3b",t.currentTarget.style.color="#000000"},children:"Know More"})})]})]})]})},W=()=>e.jsxs("section",{style:{backgroundColor:"#e8f1dc",backgroundImage:`
      radial-gradient(circle at -8% 38%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 22%, transparent 44%),
      linear-gradient(180deg, rgba(12,15,44,0.95) 0px, rgba(12,15,44,0.95) 16px, transparent 16px)
    `,padding:"72px 6% 88px",boxSizing:"border-box",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"8%",right:"4%",width:90,height:90,borderRadius:"50%",background:"rgba(124,58,237,0.15)",filter:"blur(3px)",pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",bottom:"10%",left:"3%",width:66,height:66,borderRadius:"50%",background:"rgba(124,58,237,0.12)",filter:"blur(3px)",pointerEvents:"none"}}),e.jsxs("div",{style:{textAlign:"center",marginBottom:52,position:"relative",zIndex:1},children:[e.jsx("p",{style:{fontSize:35,fontWeight:800,color:"#7c4dff",letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:18},children:"Types of Websites We Do"}),e.jsx("p",{className:"section5-subtitle",style:{fontSize:"clamp(22px, 2.8vw, 34px)",color:"#161616",lineHeight:1.42,maxWidth:930,margin:"0 auto",fontWeight:500},children:"From custom-coded solutions to high-converting landing pages, we create websites tailored to your unique business goals and audience needs."})]}),e.jsx("div",{className:"section5-grid",style:{display:"grid",maxWidth:1420,margin:"0 auto"},children:I.map((a,t)=>e.jsx(T,{...a},t))}),e.jsx("style",{children:`
      .section5-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
      }
      @media (max-width: 1024px) {
        .section5-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 20px !important;
        }
      }
      @media (max-width: 768px) {
        .section5-grid {
          grid-template-columns: repeat(1, 1fr) !important;
          gap: 20px !important;
        }
        .section5-subtitle {
          color: #2a2a2a !important;
          font-weight: 600 !important;
        }
      }
    `})]}),A=()=>{const a=["/corsal/image.png","/corsal/2.png","/corsal/3.png","/corsal/4.png","/corsal/5.png","/corsal/6.png","/corsal/7.png"];return e.jsxs("section",{style:{background:"#0d0d1a",padding:"80px 0",overflow:"hidden",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",top:"20%",left:"5%",width:200,height:200,borderRadius:"50%",background:"rgba(124,58,237,0.15)",filter:"blur(60px)",pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",bottom:"20%",right:"5%",width:180,height:180,borderRadius:"50%",background:"rgba(124,58,237,0.1)",filter:"blur(50px)",pointerEvents:"none"}}),e.jsx("h2",{className:"section6-headline",style:{fontFamily:"'Syne', sans-serif",fontWeight:800,color:"#c8ff00",textAlign:"center",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:60,position:"relative",zIndex:1},children:"A GLIMPSE INTO OUR IMPACTFUL SOLUTIONS"}),e.jsx("div",{style:{display:"flex",width:"max-content",gap:30,animation:"carouselScroll 35s linear infinite",padding:"0 20px"},children:[...a,...a,...a].map((t,n)=>e.jsx("div",{className:"carousel-card",style:{flexShrink:0,aspectRatio:"9/16",borderRadius:12,overflow:"hidden",boxShadow:"0 10px 40px rgba(0,0,0,0.6)",border:"2px solid rgba(255,255,255,0.05)",background:"#1a1a2e",transition:"transform 0.4s ease",cursor:"pointer"},children:e.jsx("img",{src:t,alt:`Solution ${n}`,style:{width:"100%",height:"100%",objectFit:"cover"},onError:i=>{i.target.style.display="none",i.target.parentElement.style.background="#1a1a2e"}})},n))}),e.jsx("style",{children:`
        @keyframes carouselScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .section6-headline {
          font-size: clamp(20px, 3vw, 28px);
        }
        .carousel-card {
          width: 320px;
        }
        @media (max-width: 768px) {
          .section6-headline {
            font-size: 20px !important;
            padding: 0 5%;
          }
          .carousel-card {
            width: 240px !important;
          }
        }
      `})]})},R=()=>{const a=[{title:"Idea to Website",desc:""},{title:"Design",desc:"structure, layout, user experience"},{title:"Development",desc:"building, functionality, responsiveness"},{title:"Testing",desc:"performance, bugs, usability"},{title:"Deployment",desc:"going live"}];return e.jsxs("section",{style:{background:"#dfead2",padding:"58px 1.8% 86px",textAlign:"center",position:"relative",overflow:"hidden"},children:[e.jsx("h2",{style:{fontSize:34,fontWeight:800,color:"#6c2ecf",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:4},children:"PROCESS TIMELINE"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:44},children:[e.jsx("div",{style:{height:1,width:300,background:"rgba(108,46,207,0.45)"}}),e.jsx("div",{style:{color:"#6c2ecf",fontSize:18,lineHeight:1},children:"✤"}),e.jsx("div",{style:{height:1,width:300,background:"rgba(108,46,207,0.45)"}})]}),e.jsx("div",{className:"timeline-row",style:{display:"flex",flexWrap:"nowrap",justifyContent:"center",gap:0,maxWidth:1440,margin:"0 auto"},children:a.map((t,n)=>{let i="";return n===0?i="polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%)":n===a.length-1?i="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 8% 50%)":i="polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%, 8% 50%)",e.jsx("div",{className:"timeline-step",style:{clipPath:i},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx("span",{style:{fontSize:36,fontWeight:700,letterSpacing:"0.03em"},children:t.title}),t.desc&&e.jsx("span",{style:{fontSize:14,fontWeight:500,opacity:.9,letterSpacing:"0.01em"},children:t.desc})]})},n)})}),e.jsx("style",{children:`
        .timeline-step {
          background: #6428c4;
          color: #fff;
          padding: 0 42px;
          height: 92px;
          width: 320px;
          text-align: center;
          margin: 0 -7px 0 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 1200px) {
          .timeline-row {
            flex-wrap: wrap !important;
            gap: 12px !important;
          }
          .timeline-step {
            width: 280px !important;
            height: 78px !important;
            margin: 0 !important;
          }
          .timeline-step span:first-child {
            font-size: 28px !important;
          }
          .timeline-step span:last-child {
            font-size: 12px !important;
          }
        }
        @media (max-width: 768px) {
          .timeline-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 10px !important;
          }
          .timeline-step {
            width: min(92vw, 360px) !important;
            height: auto !important;
            min-height: 66px !important;
            padding: 12px 20px !important;
            clip-path: none !important;
            border-radius: 10px !important;
          }
          .timeline-step span:first-child {
            font-size: 22px !important;
          }
          .timeline-step span:last-child {
            font-size: 11px !important;
          }
        }
      `})]})};d.registerPlugin(h);const M=()=>{const a=o.useRef(null),t=o.useRef(null),n=o.useRef([]),i=[{title:"Website Planning & Structure",desc:"Strategic planning and information architecture that creates intuitive user journeys and clear navigation paths."},{title:"UI/UX Design",desc:"Beautiful, user-centered interfaces that blend aesthetics with functionality for seamless experiences."},{title:"Responsive Website Development",desc:"Fully responsive websites that adapt perfectly to all devices, from mobile to desktop."},{title:"Landing Pages for Campaigns",desc:"High-converting landing pages designed specifically for your marketing campaigns and lead generation."},{title:"Content & Messaging",desc:"Compelling copy and strategic messaging that resonates with your audience and drives action."},{title:"SEO-ready Setup",desc:"Built-in SEO optimization from the ground up to ensure your website ranks well and gets discovered."},{title:"Speed & Performance Optimisation",desc:"Lightning-fast load times and optimized performance for better user experience and conversions."},{title:"Ongoing Support",desc:"Continuous maintenance, updates, and support to keep your website running smoothly and securely."}];return o.useEffect(()=>{const r=d.context(()=>{var x;const s=(x=t.current)==null?void 0:x.querySelectorAll(".wc8-anim-head"),l=n.current.filter(Boolean);d.set(s,{opacity:0,y:28}),d.set(l,{opacity:0,y:36,scale:.97}),d.timeline({scrollTrigger:{trigger:a.current,start:"top 72%",toggleActions:"play none none reverse"}}).to(s,{opacity:1,y:0,duration:.75,stagger:.1,ease:"power3.out"}).to(l,{opacity:1,y:0,scale:1,duration:.7,stagger:.09,ease:"power3.out"},"-=0.3")},a);return()=>r.revert()},[]),e.jsxs("section",{ref:a,className:"wc8-section",style:{backgroundColor:"#05081f",backgroundImage:`
          radial-gradient(circle at 14% 22%, rgba(110, 54, 170, 0.45), transparent 34%),
          radial-gradient(circle at 16% 38%, rgba(49, 120, 184, 0.25), transparent 30%),
          repeating-linear-gradient(
            0deg,
            transparent 0,
            transparent 148px,
            rgba(64, 80, 145, 0.2) 150px,
            rgba(64, 80, 145, 0.2) 151px
          ),
          repeating-linear-gradient(
            90deg,
            transparent 0,
            transparent 148px,
            rgba(64, 80, 145, 0.2) 150px,
            rgba(64, 80, 145, 0.2) 151px
          )
        `,padding:"84px 6% 96px",position:"relative",overflow:"hidden"},children:[e.jsxs("div",{style:{maxWidth:1220,margin:"0 auto",position:"relative",zIndex:1},children:[e.jsxs("div",{ref:t,className:"wc8-header",style:{textAlign:"center",maxWidth:860,margin:"0 auto 56px"},children:[e.jsx("p",{className:"wc8-anim-head",style:{margin:"0 0 14px",fontSize:15,fontWeight:700,letterSpacing:"0.18em",textTransform:"uppercase",color:"rgba(255,255,255,0.82)"},children:"Web Development"}),e.jsx("h2",{className:"wc8-anim-head",style:{margin:"0 0 18px",fontSize:"clamp(32px, 5vw, 64px)",fontWeight:800,lineHeight:1.02,color:"#ffffff"},children:"Narrate your brand story through the website"}),e.jsx("p",{className:"wc8-anim-head",style:{margin:0,fontSize:"clamp(16px, 1.8vw, 22px)",lineHeight:1.7,color:"rgba(255,255,255,0.78)"},children:"From strategic planning to ongoing support, we deliver comprehensive web solutions that bring your brand story to life and drive meaningful results."})]}),e.jsx("div",{className:"wc8-grid",children:i.map((r,s)=>e.jsxs("article",{ref:l=>{n.current[s]=l},className:"wc8-card",children:[e.jsx("div",{className:"wc8-card-number",children:String(s+1).padStart(2,"0")}),e.jsx("h3",{children:r.title}),e.jsx("p",{children:r.desc})]},r.title))})]}),e.jsx("style",{children:`
        .wc8-section,
        .wc8-section * {
          font-family: 'Nunito Sans', sans-serif !important;
        }
        .wc8-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }
        .wc8-card {
          position: relative;
          border-radius: 24px;
          padding: 28px 28px 26px;
          background:
            radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(135deg, rgba(120, 72, 180, 0.82), rgba(101, 67, 164, 0.82));
          background-size: 10px 10px, 100% 100%;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 18px 48px rgba(0, 0, 0, 0.28);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .wc8-card:hover {
          transform: translateY(-6px);
          border-color: rgba(202,255,90,0.28);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.34);
        }
        .wc8-card-number {
          margin-bottom: 16px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(202,255,90,0.96);
        }
        .wc8-card h3 {
          margin: 0 0 10px;
          font-size: clamp(24px, 2.6vw, 36px);
          line-height: 1.1;
          font-weight: 800;
          color: #ffffff;
        }
        .wc8-card p {
          margin: 0;
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255,255,255,0.84);
          max-width: 34ch;
        }
        @media (max-width: 900px) {
          .wc8-grid {
            grid-template-columns: 1fr;
          }
          .wc8-header {
            margin-bottom: 34px !important;
          }
          .wc8-card {
            padding: 24px 20px 22px;
          }
          .wc8-card h3 {
            font-size: 26px;
          }
          .wc8-card p {
            font-size: 15px;
          }
        }
      `})]})},B=()=>e.jsxs("div",{className:"webdev-page-font",children:[e.jsx("style",{children:`
      @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800;900&display=swap');
      .webdev-page-font,
      .webdev-page-font * {
        font-family: 'Nunito Sans', sans-serif !important;
      }
    `}),e.jsx(b,{}),e.jsx(y,{}),e.jsx(w,{}),e.jsx(v,{}),e.jsx(j,{}),e.jsx(E,{}),e.jsx(z,{}),e.jsx(W,{}),e.jsx(A,{}),e.jsx(R,{}),e.jsx(M,{}),e.jsx(f,{}),e.jsx(u,{})]});export{B as default};
