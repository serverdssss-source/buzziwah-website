import{r as o,j as e}from"./animation-vendor-CdhPfQVW.js";import{V as m}from"./VariableProximity-DeLlx-a1.js";/* empty css             */import{s as h}from"./servicesData-CBjG5fGf.js";const p=h.influencer,g=(r,t=1800)=>{const[n,s]=o.useState(0),[a,i]=o.useState(!1),d=o.useRef(null);return o.useEffect(()=>{const l=d.current;if(!l)return;const c=new IntersectionObserver(([x])=>{x.isIntersecting&&(i(!0),c.disconnect())},{threshold:.3});return c.observe(l),()=>c.disconnect()},[]),o.useEffect(()=>{if(!a)return;let l;const c=x=>{l||(l=x);const f=Math.min((x-l)/t,1),b=1-Math.pow(1-f,3);s(Math.floor(r*b)),f<1&&requestAnimationFrame(c)};requestAnimationFrame(c)},[a,r,t]),[d,n]},u=()=>{const r=[{end:500,suffix:"+",label:"Creator Partnerships"},{end:45,suffix:"M+",label:"Total Reach"},{end:8,suffix:"x",label:"Avg ROI for Brands"},{end:92,suffix:"%",label:"Campaign Accuracy"},{end:3,suffix:"x",label:"Viral Rate"}];return e.jsxs("div",{style:{background:"#060811",borderTop:"1px solid rgba(173,250,59,0.18)",borderBottom:"1px solid rgba(173,250,59,0.18)",padding:"22px 5%",overflow:"hidden",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(90deg, rgba(124,58,237,0.06) 0%, rgba(173,250,59,0.04) 50%, rgba(124,58,237,0.06) 100%)",pointerEvents:"none"}}),e.jsx("div",{style:{display:"flex",gap:"clamp(24px,4vw,60px)",justifyContent:"center",flexWrap:"wrap",maxWidth:"1100px",margin:"0 auto",position:"relative",zIndex:1},children:r.map((t,n)=>{const[s,a]=g(t.end,1600+n*200);return e.jsxs("div",{ref:s,style:{textAlign:"center",minWidth:"90px"},children:[e.jsxs("div",{style:{fontFamily:"'Bebas Neue',Impact,sans-serif",fontSize:"clamp(26px,3.5vw,44px)",color:"#adfa3b",letterSpacing:"0.03em",lineHeight:1,textShadow:"0 0 20px rgba(173,250,59,0.3)"},children:[a,t.suffix]}),e.jsx("div",{style:{fontSize:"10px",color:"rgba(255,255,255,0.45)",textTransform:"uppercase",letterSpacing:"0.18em",marginTop:"4px",fontWeight:600},children:t.label})]},n)})})]})},w=()=>{const r=[{label:"⭐ VIRAL",color:"#adfa3b",textColor:"#060811",x:"3%",y:"15%",rot:"-7deg",delay:"0s",dur:"7s"},{label:"🤝 500+ CREATORS",color:"rgba(124,58,237,0.85)",textColor:"#fff",x:"87%",y:"22%",rot:"5deg",delay:"1.3s",dur:"9s"},{label:"📱 REEL KINGS",color:"rgba(255,255,255,0.07)",textColor:"#adfa3b",x:"4%",y:"70%",rot:"4deg",delay:"0.7s",dur:"8s"},{label:"🔥 45M REACH",color:"rgba(173,250,59,0.12)",textColor:"#adfa3b",x:"84%",y:"74%",rot:"-5deg",delay:"1.9s",dur:"10s"}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:"@keyframes infFloat{0%,100%{transform:translateY(0)rotate(var(--rot));}50%{transform:translateY(-14px)rotate(var(--rot));}}"}),r.map((t,n)=>e.jsx("div",{style:{position:"absolute",left:t.x,top:t.y,background:t.color,color:t.textColor,fontFamily:"'Bebas Neue',Impact,sans-serif",fontSize:"11px",letterSpacing:"0.18em",padding:"5px 12px",borderRadius:"6px",border:`1px solid ${t.textColor==="#060811"?"transparent":"rgba(173,250,59,0.25)"}`,"--rot":t.rot,animation:`infFloat ${t.dur} ease-in-out infinite`,animationDelay:t.delay,pointerEvents:"none",zIndex:1,whiteSpace:"nowrap",backdropFilter:"blur(8px)"},children:t.label},n))]})},v=()=>{const r=o.useRef(null),[t,n]=o.useState(!1);o.useEffect(()=>{const a=r.current;if(!a)return;const i=new IntersectionObserver(([d])=>{d.isIntersecting&&(n(!0),i.disconnect())},{threshold:.1});return i.observe(a),()=>i.disconnect()},[]);const s=[{icon:"🎯",label:"Relevance First",desc:"We match creators by niche, audience fit, and brand values — not just follower count."},{icon:"🤝",label:"End-to-End Managed",desc:"From discovery and outreach to contracts, briefs, content review, and reporting."},{icon:"📈",label:"ROI Tracked",desc:"Every collaboration is measured — reach, saves, clicks, and conversions."}];return e.jsxs("section",{ref:r,style:{background:"linear-gradient(160deg, #060811 0%, #0d0820 50%, #060811 100%)",padding:"clamp(60px,8vw,100px) clamp(20px,5vw,60px)",overflow:"hidden",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",top:"-10%",left:"-5%",width:"500px",height:"500px",background:"radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 65%)",borderRadius:"50%",filter:"blur(80px)",pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",bottom:"-10%",right:"-5%",width:"400px",height:"400px",background:"radial-gradient(circle, rgba(173,250,59,0.1) 0%, transparent 65%)",borderRadius:"50%",filter:"blur(80px)",pointerEvents:"none"}}),e.jsx("div",{style:{maxWidth:"1200px",margin:"0 auto",position:"relative",zIndex:1},children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"clamp(40px,6vw,80px)",alignItems:"center"},children:[e.jsxs("div",{style:{flex:"1 1 min(100%, 500px)",minWidth:0,opacity:t?1:0,transform:t?"translateX(0)":"translateX(-48px)",transition:"opacity 0.7s ease, transform 0.7s ease"},children:[e.jsx("span",{style:{fontSize:"10px",fontWeight:800,letterSpacing:"0.28em",color:"#adfa3b",textTransform:"uppercase",display:"block",marginBottom:"16px"},children:"✦ INFLUENCER MARKETING ✦"}),e.jsxs("h2",{style:{fontFamily:"'Bebas Neue','Impact',sans-serif",fontSize:"clamp(40px,6vw,78px)",lineHeight:.88,margin:"0 0 24px",color:"#fff",WebkitTextStroke:"2px rgba(173,250,59,0.4)",letterSpacing:"0.03em"},children:["Credible",e.jsx("br",{}),e.jsx("span",{style:{color:"#adfa3b",WebkitTextStroke:"2px white"},children:"Collaborations"})]}),e.jsx("div",{style:{width:"48px",height:"3px",background:"linear-gradient(90deg, #adfa3b, transparent)",borderRadius:"2px",marginBottom:"24px"}}),e.jsxs("p",{style:{color:"rgba(255,255,255,0.75)",fontSize:"clamp(15px,1.6vw,18px)",lineHeight:1.85,margin:"0 0 16px",fontWeight:500},children:["People trust people more than brands. And the right voice can make your brand feel ",e.jsx("span",{style:{color:"#adfa3b",fontWeight:700},children:"real, relatable and trusted."})]}),e.jsxs("p",{style:{color:"rgba(255,255,255,0.5)",fontSize:"clamp(13px,1.4vw,15px)",lineHeight:1.9,margin:0},children:["We connect your brand with the right creators — not just based on reach, but ",e.jsx("strong",{style:{color:"rgba(255,255,255,0.75)"},children:"relevance and alignment."})," From identifying influencers to managing collaborations and content, we handle everything end-to-end."]})]}),e.jsx("div",{style:{flex:"1 1 min(100%, 420px)",minWidth:0,display:"flex",flexDirection:"column",gap:"16px",opacity:t?1:0,transform:t?"translateX(0)":"translateX(48px)",transition:"opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s"},children:s.map((a,i)=>e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"18px",padding:"22px 24px",borderRadius:"20px",background:"rgba(255,255,255,0.02)",border:`1px solid ${i===0?"rgba(173,250,59,0.15)":"rgba(255,255,255,0.05)"}`,transition:"border-color 0.3s"},children:[e.jsx("div",{style:{fontSize:"28px",lineHeight:1,flexShrink:0,marginTop:"2px"},children:a.icon}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"'Bebas Neue','Impact',sans-serif",fontSize:"18px",color:"#adfa3b",letterSpacing:"0.1em",marginBottom:"6px"},children:a.label}),e.jsx("div",{style:{fontSize:"13px",color:"rgba(255,255,255,0.5)",lineHeight:1.7},children:a.desc})]})]},i))})]})})]})},E=()=>{const r=o.useRef(null);return e.jsxs("div",{className:"im-font",children:[e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800;900&display=swap');
        .im-font,
        .im-font * {
          font-family: 'Nunito Sans', sans-serif !important;
        }

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
          font-family: 'Bebas Neue', 'Impact', 'Arial Black', sans-serif !important;
          font-size: clamp(34px, 4.5vw, 58px);
          font-weight: 400;
          color: #adfa3b;
          -webkit-text-stroke: 2.5px white;
          text-shadow: 6px 6px 0 rgba(0,0,0,0.55), 0 0 40px rgba(173,250,59,0.15);
          -webkit-text-fill-color: unset;
          background: none;
          margin: 0;
          line-height: 0.92;
          letter-spacing: 0.04em;
          position: relative;
          z-index: 2;
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

        @keyframes titleFadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}),e.jsx("section",{className:"page-banner-section",ref:r,children:e.jsxs("div",{className:"coded-page-banner",children:[e.jsx("div",{className:"coded-page-banner-grid"}),e.jsx("div",{className:"coded-page-banner-purple-glow"}),e.jsx("div",{className:"coded-page-banner-green-glow"}),e.jsx(w,{}),e.jsx("div",{className:"coded-page-banner-particles",children:Array.from({length:15}).map((t,n)=>{const s=`${Math.random()*100}%`,a=`${Math.random()*100}%`,i=`${Math.random()*3+1.5}px`,d=`${Math.random()*-20}s`,l=`${Math.random()*10+15}s`;return e.jsx("div",{className:"coded-banner-particle",style:{left:s,top:a,width:i,height:i,animationDelay:d,animationDuration:l}},n)})}),e.jsxs("div",{className:"flex flex-col items-center justify-center w-full max-w-[900px] gap-6 px-6 z-10 text-center relative",children:[e.jsx("div",{className:"absolute left-[-100px] top-[-50px] w-[500px] h-[1px] bg-[#adfa3b]/20 rotate-[-12deg] pointer-events-none"}),e.jsx("div",{className:"absolute right-[-100px] bottom-[-50px] w-[500px] h-[1px] bg-purple-500/10 rotate-[-12deg] pointer-events-none"}),e.jsxs("div",{className:"flex flex-col items-center text-center relative z-10",children:[e.jsx("div",{className:"coded-page-banner-badge",children:p.badge}),e.jsx("h1",{className:"coded-page-banner-title text-center skew-x-[-4deg] mb-4",style:{letterSpacing:"-0.03em"},children:e.jsx(m,{label:`${p.title} ${p.accentTitle}`,fromFontVariationSettings:"'wght' 400, 'opsz' 9",toFontVariationSettings:"'wght' 1000, 'opsz' 40",containerRef:r,radius:100,falloff:"linear"})}),e.jsx("div",{className:"h-[2px] w-24 bg-[#adfa3b] my-4 rounded-full"}),e.jsx("p",{className:"coded-page-banner-subtitle text-center max-w-[650px] mx-auto",children:p.subtitle})]})]})]})}),e.jsx(u,{}),e.jsx(v,{}),e.jsx(j,{})]})},j=()=>{const[r,t]=o.useState(0),n=[{label:"High-Energy Workout",src:"/SERICES CONTENTS/VAIBHAV_FITNESS_1.mp4",views:"1.2M+"},{label:"Form & Science",src:"/SERICES CONTENTS/VAIBHAV_FITNESS_2.mp4",views:"840K+"},{label:"Routine Breakdown",src:"/SERICES CONTENTS/VAIBHAV_FITNESS_3.mp4",views:"1.5M+"},{label:"Community Challenge",src:"/SERICES CONTENTS/VAIBHAV_FITNESS_4.mp4",views:"920K+"}];return e.jsxs("section",{className:"relative overflow-hidden px-6 py-24 sm:px-10 lg:py-28",style:{background:"#0a0a0a"},children:[e.jsx("div",{className:"absolute inset-0 opacity-[0.03] pointer-events-none",style:{backgroundImage:"radial-gradient(circle at 50% 10%, rgba(167,139,250,0.15) 0%, transparent 60%)"}}),e.jsx("div",{className:"absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"}),e.jsxs("div",{className:"relative z-10 mx-auto max-w-[1200px]",children:[e.jsxs("div",{className:"mb-16 text-center md:text-left md:flex justify-between items-end gap-8",children:[e.jsxs("div",{className:"max-w-2xl",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#a78bfa]/10 border border-[#a78bfa]/20 rounded-full",children:[e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#a78bfa] animate-pulse"}),e.jsx("span",{className:"text-[10px] font-mono font-black tracking-widest text-[#a78bfa] uppercase font-bold",children:"CREATOR NETWORK"})]}),e.jsxs("h2",{style:{fontFamily:"'Bebas Neue','Impact',sans-serif",fontSize:"clamp(24px,3vw,44px)",color:"#adfa3b",WebkitTextStroke:"2px white",textShadow:"5px 5px 0 rgba(0,0,0,0.5)",letterSpacing:"0.04em",lineHeight:.9,margin:"0 0 20px"},children:["Collaborations ",e.jsx("span",{style:{color:"#adfa3b",fontStyle:"italic"},children:"we did"})]}),e.jsx("p",{className:"mt-4 text-white/50 text-sm sm:text-base leading-relaxed",children:"We scout, contract, and manage top-tier regional and national creators to weave your brand story directly into community culture."})]}),e.jsx("div",{className:"mt-6 md:mt-0",children:e.jsx("div",{className:"font-mono text-xs text-white/40 tracking-widest bg-white/[0.02] border border-white/5 px-4 py-2 rounded-xl inline-block",children:"ACTIVE ROSTER: 350+ CREATORS"})})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-6 gap-8 mb-20 font-sans",children:[e.jsx("div",{className:"lg:col-span-3 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 sm:p-8 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden relative min-h-[420px]",children:e.jsxs("div",{className:"flex flex-col sm:flex-row gap-6 items-center justify-between h-full w-full",children:[e.jsxs("div",{className:"flex-1 flex flex-col justify-between h-full",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("span",{className:"text-[9px] font-mono text-white/30 tracking-widest font-black uppercase",children:"ST-01 // CO-BRAND REELS"}),e.jsx("span",{className:"text-[8px] font-mono font-black tracking-widest px-2 py-0.5 rounded-full bg-[#adfa3b]/10 text-[#adfa3b]",children:"FITNESS FACTORY"})]}),e.jsx("h3",{className:"font-['Montserrat'] text-md font-extrabold text-white uppercase tracking-wider mb-2 group-hover:text-[#adfa3b] transition-colors duration-300",children:"Vaibhav Srinivas"}),e.jsx("p",{className:"text-[#a78bfa] text-xs font-bold uppercase tracking-widest mb-3",children:"Fitness & Lifestyle Creator"}),e.jsx("p",{className:"text-white/50 text-[12px] leading-relaxed mb-6",children:"We managed 4 high-octane campaigns featuring Vaibhav, driving extreme profile visits and gym sign-ups. Select a campaign reel to play the organic high-retention video."})]}),e.jsx("div",{className:"space-y-2 mb-6",children:n.map((s,a)=>e.jsxs("button",{onClick:()=>t(a),className:`w-full text-left px-3 py-2 rounded-xl text-[10px] font-mono tracking-wider font-black uppercase transition-all flex justify-between items-center border ${r===a?"bg-[#adfa3b]/10 text-[#adfa3b] border-[#adfa3b]/30":"bg-white/5 text-white/60 border-transparent hover:text-white hover:bg-white/10"}`,type:"button",children:[e.jsx("span",{children:s.label}),e.jsxs("span",{className:"text-[8.5px] opacity-60",children:[s.views," views"]})]},a))}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-center pt-4 border-t border-white/10",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-[9px] font-mono text-white/30 uppercase tracking-widest block mb-1",children:"AGGREGATE REACH"}),e.jsx("span",{className:"text-white text-md font-mono font-black",children:"4.8M+"})]}),e.jsxs("div",{className:"border-l border-white/10",children:[e.jsx("span",{className:"text-[9px] font-mono text-white/30 uppercase tracking-widest block mb-1",children:"ENGAGEMENT RATE"}),e.jsx("span",{className:"text-[#a78bfa] text-md font-mono font-black",children:"14.2%"})]})]})]}),e.jsxs("div",{className:"relative w-[180px] h-[340px] rounded-[28px] border-[6px] border-[#333] bg-black shadow-[0_15px_30px_rgba(0,0,0,0.5)] overflow-hidden flex-shrink-0",children:[e.jsx("div",{className:"absolute left-1/2 top-0 z-10 h-3 w-16 -translate-x-1/2 rounded-b-[8px] bg-[#333]"}),e.jsx("video",{src:n[r].src,className:"w-full h-full object-cover",autoPlay:!0,loop:!0,muted:!0,playsInline:!0},r)]})]})}),e.jsx("div",{className:"lg:col-span-3 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 sm:p-8 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden relative min-h-[420px]",children:e.jsxs("div",{className:"flex flex-col sm:flex-row gap-6 items-center justify-between h-full w-full",children:[e.jsxs("div",{className:"flex-1 flex flex-col justify-between h-full",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("span",{className:"text-[9px] font-mono text-white/30 tracking-widest font-black uppercase",children:"ST-02 // FOOD INFLUENCER"}),e.jsx("span",{className:"text-[8px] font-mono font-black tracking-widest px-2 py-0.5 rounded-full bg-[#a855f7]/10 text-[#a855f7]",children:"SAMRAT RESTAURANT"})]}),e.jsx("h3",{className:"font-['Montserrat'] text-md font-extrabold text-white uppercase tracking-wider mb-2 group-hover:text-[#a855f7] transition-colors duration-300",children:"Bakasura Brahmana"}),e.jsx("p",{className:"text-[#adfa3b] text-xs font-bold uppercase tracking-widest mb-3",children:"Food & Culinary Storyteller"}),e.jsx("p",{className:"text-white/50 text-[12px] leading-relaxed mb-6",children:"For Samrat Restaurant Sheshadripuram, we deployed food-critic campaigns starring Bakasura Brahmana. The high-production culinary showcase triggered massive dining footfall and viral local authority."})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-center pt-4 border-t border-white/10",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-[9px] font-mono text-white/30 uppercase tracking-widest block mb-1",children:"CAMPAIGN REACH"}),e.jsx("span",{className:"text-white text-md font-mono font-black",children:"850K+"})]}),e.jsxs("div",{className:"border-l border-white/10",children:[e.jsx("span",{className:"text-[9px] font-mono text-white/30 uppercase tracking-widest block mb-1",children:"ENGAGEMENT RATE"}),e.jsx("span",{className:"text-[#adfa3b] text-md font-mono font-black",children:"18.9%"})]})]})]}),e.jsxs("div",{className:"relative w-[180px] h-[340px] rounded-[28px] border-[6px] border-[#333] bg-black shadow-[0_15px_30px_rgba(0,0,0,0.5)] overflow-hidden flex-shrink-0",children:[e.jsx("div",{className:"absolute left-1/2 top-0 z-10 h-3 w-16 -translate-x-1/2 rounded-b-[8px] bg-[#333]"}),e.jsx("video",{src:"https://demo.sripadastudios.com/wp-content/uploads/2025/05/Samrat-food.mp4.mp4",className:"w-full h-full object-cover",autoPlay:!0,loop:!0,muted:!0,playsInline:!0})]})]})}),e.jsxs("div",{className:"lg:col-span-2 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden relative",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("span",{className:"text-[9px] font-mono text-white/30 tracking-widest font-black uppercase",children:"ST-03 // TECH & ADVENTURE"}),e.jsx("span",{className:"text-[8px] font-mono font-black tracking-widest px-2 py-0.5 rounded-full bg-[#00f0ff]/10 text-[#00f0ff]",children:"BUZZIWAH COLLABS"})]}),e.jsx("h3",{className:"font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wider mb-2 group-hover:text-[#00f0ff] transition-colors duration-300",children:"Nikhil Goal"}),e.jsx("p",{className:"text-white/40 text-[10px] font-bold uppercase tracking-widest mb-3",children:"Tech & Travel Explorer"}),e.jsx("p",{className:"text-white/50 text-[11px] leading-relaxed mb-5",children:"We managed travel-tech lifestyle integrations showcasing next-gen setups. Delivering highly interactive, product-focused reels optimized to build viewer trust and conversions."})]}),e.jsxs("div",{className:"w-full h-[180px] bg-gradient-to-tr from-[#141517] to-[#1e293b] rounded-2xl border border-white/10 shadow-lg relative overflow-hidden flex flex-col justify-between p-4",children:[e.jsx("div",{className:"absolute top-2 right-2 text-[9px] font-mono text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-0.5 rounded",children:"TRAVEL TECH"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-gradient-to-tr from-[#00f0ff] to-[#a855f7] flex items-center justify-center text-[10px] font-black text-white",children:"N"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-[10px] font-black text-white uppercase",children:"nikhilgoal"}),e.jsx("span",{className:"block text-[6.5px] text-white/40 uppercase",children:"Creator network"})]})]}),e.jsx("div",{className:"bg-black/40 border border-white/5 p-2 rounded-lg font-mono text-[9px] text-[#00f0ff] mt-2",children:"{ reach: '480K+', eng: '9.2%', saves: '12K+' }"}),e.jsxs("div",{className:"flex justify-between items-center text-[7.5px] font-mono text-white/30 uppercase tracking-widest mt-2 border-t border-white/5 pt-2",children:[e.jsx("span",{children:"480K+ Reach"}),e.jsx("span",{children:"Active Collabs"})]})]})]}),e.jsxs("div",{className:"lg:col-span-2 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden relative",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("span",{className:"text-[9px] font-mono text-white/30 tracking-widest font-black uppercase",children:"ST-04 // FASHION"}),e.jsx("span",{className:"text-[8px] font-mono font-black tracking-widest px-2 py-0.5 rounded-full bg-[#ff007f]/10 text-[#ff007f]",children:"BUZZIWAH COLLABS"})]}),e.jsx("h3",{className:"font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wider mb-2 group-hover:text-[#ff007f] transition-colors duration-300",children:"Mahira"}),e.jsx("p",{className:"text-white/40 text-[10px] font-bold uppercase tracking-widest mb-3",children:"Fashion & Creative Director"}),e.jsx("p",{className:"text-white/50 text-[11px] leading-relaxed mb-5",children:"Targeting aesthetic-driven lifestyle brands, we created highly curated, editorial fashion integrations that gained high-fidelity viewer shares and organic community advocate growth."})]}),e.jsxs("div",{className:"w-full h-[180px] bg-gradient-to-br from-[#1b1226] via-[#0d0914] to-[#040206] rounded-2xl border border-white/10 shadow-lg relative overflow-hidden flex flex-col p-4 justify-between",children:[e.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,127,0.1)_0%,transparent_60%)] pointer-events-none"}),e.jsxs("div",{className:"flex items-center justify-between relative z-10",children:[e.jsx("span",{className:"text-[9px] font-black text-[#ff007f] uppercase tracking-wider",children:"Aesthetic Editorial"}),e.jsx("span",{className:"text-[8.5px] font-mono text-[#ff007f] bg-[#ff007f]/10 px-2 rounded",children:"FASHION"})]}),e.jsxs("div",{className:"text-center py-2 relative z-10",children:[e.jsx("h4",{className:"text-white font-black uppercase text-xs tracking-wider",style:{fontFamily:"'Montserrat', sans-serif"},children:"MAHIRA COLLABS"}),e.jsx("span",{className:"text-[7.5px] font-mono text-[#ff007f] block mt-1 uppercase",children:"620K+ TOTAL REACH"})]}),e.jsxs("div",{className:"flex justify-between items-center text-[7.5px] font-mono text-white/30 uppercase tracking-widest relative z-10 border-t border-white/5 pt-2",children:[e.jsx("span",{children:"Engagement: 12.8%"}),e.jsx("span",{children:"Advocates"})]})]})]}),e.jsxs("div",{className:"lg:col-span-2 rounded-[32px] border border-white/10 bg-white/[0.01] p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)] group overflow-hidden relative",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("span",{className:"text-[9px] font-mono text-white/30 tracking-widest font-black uppercase",children:"ST-05 // CELEBRITY WELLNESS"}),e.jsx("span",{className:"text-[8px] font-mono font-black tracking-widest px-2 py-0.5 rounded-full bg-[#adfa3b]/10 text-[#adfa3b]",children:"FITNESS FACTORY"})]}),e.jsx("h3",{className:"font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wider mb-2 group-hover:text-[#adfa3b] transition-colors duration-300",children:"Shwetha Prasad"}),e.jsx("p",{className:"text-white/40 text-[10px] font-bold uppercase tracking-widest mb-3",children:"Actor & Wellness Influencer"}),e.jsx("p",{className:"text-white/50 text-[11px] leading-relaxed mb-5",children:"We managed premium, high-production celebrity wellness integrations with Shwetha to represent clean health values. Built authority, trust, and massive organic reach."})]}),e.jsxs("div",{className:"w-full h-[180px] bg-gradient-to-tr from-[#121f15] to-[#1c3221] rounded-2xl border border-white/10 shadow-lg relative overflow-hidden flex flex-col p-4 justify-between",children:[e.jsx("div",{className:"absolute top-2 right-2 text-[9px] font-mono text-[#adfa3b] bg-[#adfa3b]/10 px-2 py-0.5 rounded",children:"CELEBRITY"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-[#adfa3b] flex items-center justify-center text-[10px] font-black text-black",children:"SP"}),e.jsxs("div",{children:[e.jsx("span",{className:"block text-[10px] font-black text-white uppercase",children:"shwethaprasad"}),e.jsx("span",{className:"block text-[6.5px] text-white/40 uppercase",children:"Regional Actor"})]})]}),e.jsx("div",{className:"bg-black/40 border border-white/5 p-2 rounded-lg font-mono text-[9px] text-[#adfa3b] mt-2",children:"{ reach: '2.4M+', eng: '11.5%', type: 'Celebrity' }"}),e.jsxs("div",{className:"flex justify-between items-center text-[7.5px] font-mono text-white/30 uppercase tracking-widest mt-2 border-t border-white/5 pt-2",children:[e.jsx("span",{children:"Wellness Anchor"}),e.jsx("span",{children:"Verified creator"})]})]})]})]}),e.jsxs("div",{className:"rounded-[32px] border border-[#a78bfa]/20 bg-gradient-to-r from-[#170e30]/80 to-[#070412]/80 p-8 sm:p-12 backdrop-blur-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8",children:[e.jsx("div",{className:"absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.06)_0%,transparent_70%)] pointer-events-none"}),e.jsxs("div",{className:"text-center md:text-left relative z-10",children:[e.jsx("span",{className:"text-[10px] font-mono font-black tracking-[0.2em] text-[#adfa3b] uppercase mb-2 block",children:"MEASURABLE IMPACT"}),e.jsx("h3",{style:{fontFamily:"'Bebas Neue','Impact',sans-serif",fontSize:"clamp(18px,2vw,30px)",color:"#adfa3b",WebkitTextStroke:"1.5px white",letterSpacing:"0.04em",lineHeight:.9,marginBottom:"12px"},children:"Case Studies & Creator ROI"}),e.jsx("p",{className:"text-white/60 text-sm max-w-lg leading-relaxed",children:"See how our targeted influencer collaborations turned social clout into pure brand conversions and business scale."})]}),e.jsx("div",{className:"flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-10",children:e.jsx("a",{href:"/case-studies",className:"rounded-full px-8 py-3.5 font-['Montserrat'] text-xs font-bold uppercase tracking-[0.08em] text-center text-black transition-all duration-200",style:{background:"#adfa3b"},onMouseEnter:s=>{s.currentTarget.style.background="#a78bfa",s.currentTarget.style.color="#ffffff"},onMouseLeave:s=>{s.currentTarget.style.background="#adfa3b",s.currentTarget.style.color="#000000"},children:"Know More"})})]})]})]})};export{E as default};
