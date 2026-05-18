import{j as e,r as c,R as g}from"./animation-vendor-2OyP_18a.js";import{V as y}from"./VariableProximity-HzNwaBXZ.js";import{s as w}from"./servicesData-CBjG5fGf.js";const v=(a,t=2e3)=>{const[i,s]=g.useState(0),[o,l]=g.useState(!1),r=g.useRef(null);return g.useEffect(()=>{const n=r.current;if(!n)return;const d=new IntersectionObserver(([p])=>{p.isIntersecting&&(l(!0),d.disconnect())},{threshold:.3});return d.observe(n),()=>d.disconnect()},[]),g.useEffect(()=>{if(!o)return;let n;const d=p=>{n||(n=p);const x=Math.min((p-n)/t,1),m=1-Math.pow(1-x,3);s(Math.floor(a*m)),x<1&&requestAnimationFrame(d)};requestAnimationFrame(d)},[o,a,t]),[r,i]},h=w["content-solution"],j=()=>{const a=[{end:2400,suffix:"+",label:"Content Pieces Delivered"},{end:18,suffix:"M+",label:"Total Content Views"},{end:320,suffix:"%",label:"Avg Engagement Lift"},{end:96,suffix:"%",label:"Client Satisfaction"},{end:4,suffix:"x",label:"Conversion Boost"}];return e.jsxs("div",{style:{background:"#060811",borderTop:"1px solid rgba(173,250,59,0.18)",borderBottom:"1px solid rgba(173,250,59,0.18)",padding:"22px 5%",overflow:"hidden",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(90deg, rgba(124,58,237,0.06) 0%, rgba(173,250,59,0.04) 50%, rgba(124,58,237,0.06) 100%)",pointerEvents:"none"}}),e.jsx("div",{style:{display:"flex",gap:"clamp(24px,4vw,60px)",justifyContent:"center",flexWrap:"wrap",maxWidth:"1100px",margin:"0 auto",position:"relative",zIndex:1},children:a.map((t,i)=>{const[s,o]=v(t.end,1600+i*200);return e.jsxs("div",{ref:s,style:{textAlign:"center",minWidth:"90px"},children:[e.jsxs("div",{style:{fontFamily:"'Bebas Neue',Impact,sans-serif",fontSize:"clamp(26px,3.5vw,44px)",color:"#adfa3b",letterSpacing:"0.03em",lineHeight:1,textShadow:"0 0 20px rgba(173,250,59,0.3)"},children:[o,t.suffix]}),e.jsx("div",{style:{fontSize:"10px",color:"rgba(255,255,255,0.45)",textTransform:"uppercase",letterSpacing:"0.18em",marginTop:"4px",fontWeight:600},children:t.label})]},i)})})]})},k=()=>{const a=[{label:"✍️ VIRAL COPY",color:"#adfa3b",textColor:"#060811",x:"3%",y:"15%",rot:"-7deg",delay:"0s",dur:"7s"},{label:"📝 CONTENT",color:"rgba(124,58,237,0.85)",textColor:"#fff",x:"88%",y:"22%",rot:"5deg",delay:"1.3s",dur:"9s"},{label:"🚀 CONVERTS",color:"rgba(255,255,255,0.07)",textColor:"#adfa3b",x:"4%",y:"70%",rot:"4deg",delay:"0.7s",dur:"8s"},{label:"📈 2400+ POSTS",color:"rgba(173,250,59,0.12)",textColor:"#adfa3b",x:"84%",y:"74%",rot:"-5deg",delay:"1.9s",dur:"10s"}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:"@keyframes contentFloat{0%,100%{transform:translateY(0)rotate(var(--rot));}50%{transform:translateY(-14px)rotate(var(--rot));}}"}),a.map((t,i)=>e.jsx("div",{style:{position:"absolute",left:t.x,top:t.y,background:t.color,color:t.textColor,fontFamily:"'Bebas Neue',Impact,sans-serif",fontSize:"11px",letterSpacing:"0.18em",padding:"5px 12px",borderRadius:"6px",border:`1px solid ${t.textColor==="#060811"?"transparent":"rgba(173,250,59,0.25)"}`,"--rot":t.rot,animation:`contentFloat ${t.dur} ease-in-out infinite`,animationDelay:t.delay,pointerEvents:"none",zIndex:1,whiteSpace:"nowrap",backdropFilter:"blur(8px)"},children:t.label},i))]})},b=[{name:"Venkata Siddharth",handle:"V",color:"#7c3aed",time:"2 months ago",stars:5,text:"Working with Buzziwah was a seamless experience. They delivered a high-quality, professional website exactly on..."},{name:"Ananya Sharma",handle:"A",color:"#ec4899",time:"1 month ago",stars:5,text:"Extremely satisfied with the results. Buzziwah provided a sleek mobile-responsive design that boosted our site traffic by 40%."},{name:"Karthik Nair",handle:"K",color:"#10b981",time:"3 weeks ago",stars:5,text:"Technical expertise at its best. Their full-stack development team handled our backend complexities with ease."},{name:"hasan ahmed",handle:"H",color:"#4caf50",time:"3 months ago",stars:5,text:"Best web design and app development company with in Bangalore, got home services booking app like urban company..."},{name:"Sneha Kapoor",handle:"S",color:"#f59e0b",time:"2 weeks ago",stars:5,text:"Great attention to detail. The UI/UX is intuitive and exactly what our users needed. Highly recommended!"},{name:"Rahul Mehta",handle:"R",color:"#3b82f6",time:"4 months ago",stars:5,text:"Fantastic communication throughout the process. They understood our brand vision and delivered beyond expectations."},{name:"Reddy Documents",handle:"R",color:"#e53935",time:"3 months ago",stars:5,text:"Quality work with minimal Price and Time"},{name:"Priya Das",handle:"P",color:"#8b5cf6",time:"5 months ago",stars:5,text:"The SEO strategies they implemented have been a game-changer. Our rankings have never been better."},{name:"Amit Verma",handle:"A",color:"#f43f5e",time:"6 months ago",stars:5,text:"Professional, timely, and innovative. Buzziwah is definitely our go-to for all digital development needs."}],N=({count:a})=>e.jsx("div",{style:{display:"flex",gap:2},children:Array.from({length:a}).map((t,i)=>e.jsx("span",{style:{color:"#fbbc04",fontSize:14},children:"★"},i))}),S=({name:a,handle:t,color:i,time:s,stars:o,text:l})=>e.jsxs("div",{style:{background:"#13131f",border:"1px solid rgba(255,255,255,0.08)",borderRadius:21,padding:"33px 33px 27px",position:"relative",flex:"1 1 300px",minWidth:0,minHeight:"300px",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:15},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:15},children:[e.jsx("div",{style:{width:54,height:54,borderRadius:"50%",background:i,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:e.jsx("span",{style:{color:"#fff",fontWeight:700,fontSize:22.5,fontFamily:"'Syne', sans-serif"},children:t})}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:0,color:"#fff",fontWeight:700,fontSize:19.5,fontFamily:"'Syne', sans-serif"},children:a}),e.jsx("p",{style:{margin:0,color:"rgba(255,255,255,0.4)",fontSize:16.5,fontFamily:"'DM Sans', sans-serif"},children:s})]})]}),e.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),e.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),e.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z",fill:"#FBBC05"}),e.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]})]}),e.jsx(N,{count:o}),e.jsx("p",{style:{color:"rgba(255,255,255,0.65)",fontSize:18.75,lineHeight:1.7,margin:"15px 0 21px",fontFamily:"'DM Sans', sans-serif",flex:1},children:l}),e.jsx("span",{style:{color:"#7c3aed",fontSize:16.5,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans', sans-serif"},children:"Read more"}),e.jsx("span",{style:{position:"absolute",bottom:21,right:27,color:"#7c3aed",fontSize:42,lineHeight:1,fontFamily:"Georgia, serif",opacity:.6},children:'"'})]}),C=()=>{const[a,t]=c.useState(0),[i,s]=c.useState(!1);c.useEffect(()=>{const r=()=>s(window.innerWidth<1024);return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]);const o=i?1:3,l=Math.ceil(b.length/o);return c.useEffect(()=>{const r=setInterval(()=>{t(n=>(n+1)%l)},5e3);return()=>clearInterval(r)},[l]),e.jsxs("section",{className:"section10-container",style:{background:"#0d0d1a",padding:"28px 6% 88px",boxSizing:"border-box",position:"relative",overflow:"hidden",minHeight:"620px",display:"flex",alignItems:"center"},children:[e.jsx("div",{style:{position:"absolute",top:"15%",left:"1%",width:120,height:120,borderRadius:"50%",background:"rgba(124,58,237,0.25)",filter:"blur(40px)",pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",bottom:"10%",right:"2%",width:90,height:90,borderRadius:"50%",background:"rgba(124,58,237,0.2)",filter:"blur(30px)",pointerEvents:"none"}}),e.jsxs("div",{className:"section10-inner",style:{display:"flex",alignItems:"center",gap:78,width:"100%",maxWidth:1800,margin:"0 auto"},children:[e.jsxs("div",{className:"section10-logo-col",style:{flex:"0 0 auto",display:"flex",flexDirection:"column",alignItems:"center",gap:24},children:[e.jsx("img",{src:"/logo.png",alt:"Buzziwah Logo",className:"section10-logo",style:{width:150}}),e.jsx("p",{className:"section10-label",style:{color:"rgba(255,255,255,0.5)",fontSize:15,fontFamily:"'Syne', sans-serif",letterSpacing:"0.15em",textTransform:"uppercase",textAlign:"center",fontWeight:700},children:"Our Reviews"})]}),e.jsxs("div",{className:"section10-carousel-col",style:{flex:"1 1 500px",display:"flex",flexDirection:"column",gap:40,overflow:"hidden"},children:[e.jsx("div",{style:{display:"flex",gap:15,justifyContent:"flex-end",marginBottom:6},children:Array.from({length:l}).map((r,n)=>e.jsx("button",{onClick:()=>t(n),style:{width:a===n?42:12,height:12,borderRadius:6,background:a===n?"#c8ff00":"rgba(255,255,255,0.2)",border:"none",cursor:"pointer",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"}},n))}),e.jsx("div",{style:{display:"flex",transition:"transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",transform:`translateX(-${a*100}%)`},children:Array.from({length:l}).map((r,n)=>e.jsx("div",{style:{minWidth:"100%",display:"flex",gap:24,padding:"10px 0"},children:b.slice(n*o,(n+1)*o).map((d,p)=>e.jsx("div",{style:{flex:1,minWidth:0},children:e.jsx(S,{...d})},p))},n))})]})]}),e.jsx("style",{children:`
        @media (max-width: 1024px) {
          .section10-container { padding: 20px 6% 60px !important; height: auto !important; display: block !important; }
          .section10-inner { flex-direction: column !important; gap: 40px !important; }
          .section10-logo-col { width: 100% !important; margin-bottom: 20px !important; }
          .section10-logo { width: 100px !important; }
          .section10-label { font-size: 13px !important; }
          .section10-carousel-col { width: 100% !important; flex: 1 1 100% !important; }
        }
      `})]})},z=()=>{const a=c.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

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

        .cm-banner { gap: 3rem; transition: gap 0.3s ease; }
        .cm-banner-item { display: flex; alignItems: center; gap: 3rem; }
        @media (max-width: 768px) {
          .cm-banner { gap: 1.5rem !important; padding: 1.75rem 1.5rem !important; }
          .cm-banner-item { gap: 1.5rem !important; }
          .cm-banner-divider { height: 40px !important; }
        }
      `}),e.jsx("section",{className:"page-banner-section",ref:a,children:e.jsxs("div",{className:"coded-page-banner",children:[e.jsx("div",{className:"coded-page-banner-grid"}),e.jsx("div",{className:"coded-page-banner-purple-glow"}),e.jsx("div",{className:"coded-page-banner-green-glow"}),e.jsx(k,{}),e.jsx("div",{className:"coded-page-banner-particles",children:Array.from({length:15}).map((t,i)=>{const s=`${Math.random()*100}%`,o=`${Math.random()*100}%`,l=`${Math.random()*3+1.5}px`,r=`${Math.random()*-20}s`,n=`${Math.random()*10+15}s`;return e.jsx("div",{className:"coded-banner-particle",style:{left:s,top:o,width:l,height:l,animationDelay:r,animationDuration:n}},i)})}),e.jsxs("div",{className:"flex flex-col items-center justify-center w-full max-w-[900px] gap-6 px-6 z-10 text-center relative",children:[e.jsx("div",{className:"absolute left-[-100px] top-[-50px] w-[500px] h-[1px] bg-[#adfa3b]/20 rotate-[-12deg] pointer-events-none"}),e.jsx("div",{className:"absolute right-[-100px] bottom-[-50px] w-[500px] h-[1px] bg-purple-500/10 rotate-[-12deg] pointer-events-none"}),e.jsxs("div",{className:"flex flex-col items-center text-center relative z-10",children:[e.jsx("div",{className:"coded-page-banner-badge",children:h.badge}),e.jsx("h1",{className:"coded-page-banner-title text-center skew-x-[-4deg] mb-4",style:{letterSpacing:"-0.03em"},children:e.jsx(y,{label:`${h.title} ${h.accentTitle}`,fromFontVariationSettings:"'wght' 400, 'opsz' 9",toFontVariationSettings:"'wght' 1000, 'opsz' 40",containerRef:a,radius:100,falloff:"linear"})}),e.jsx("div",{className:"h-[2px] w-24 bg-[#adfa3b] my-4 rounded-full"}),e.jsx("p",{className:"coded-page-banner-subtitle text-center max-w-[650px] mx-auto",children:h.subtitle})]})]})]})}),e.jsx(j,{}),e.jsxs("section",{className:"relative z-[1] px-5 pb-24 pt-16 sm:px-10 overflow-hidden",style:{background:"linear-gradient(145deg, #070312 0%, #120524 50%, #070312 100%)",borderBottom:"1px solid rgba(255, 255, 255, 0.03)"},children:[e.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-40",style:{backgroundImage:"radial-gradient(circle at 50% 50%, rgba(173, 250, 59, 0.05) 0%, transparent 50%), linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px)",backgroundSize:"100%, 40px 40px, 40px 40px"}}),e.jsx("div",{className:"relative z-[1] mx-auto max-w-[1200px]",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full",children:[e.jsxs("div",{className:"lg:col-span-2 p-8 sm:p-10 rounded-[32px] bg-white/[0.015] border border-white/5 flex flex-col justify-between items-start min-h-[280px]",children:[e.jsxs("div",{children:[e.jsx("h2",{style:{fontFamily:"'Bebas Neue','Impact',sans-serif",fontSize:"clamp(22px,2.8vw,40px)",color:"#adfa3b",WebkitTextStroke:"2px white",textShadow:"5px 5px 0 rgba(0,0,0,0.5)",letterSpacing:"0.04em",lineHeight:.92,marginBottom:"20px"},children:"Writing Words That Convert"}),e.jsx("p",{className:"text-[16px] text-white/75 leading-relaxed max-w-[640px]",children:"Words are the ultimate sales asset. We design viral storytelling frameworks, high-engagement newsletters, and persuasive marketing copy that builds deep loyalty and converts traffic."})]}),e.jsx("div",{className:"mt-8",children:e.jsx("a",{href:"http://linkedin.com/in/satish-ms-b7842a8b",target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 rounded-full px-7 py-3 font-['Montserrat'] text-xs font-bold uppercase tracking-[0.08em] text-white border-2 border-transparent transition-all duration-200 hover:text-[#07030f]",style:{background:"linear-gradient(135deg,#7c3aed,#9333ea)",transition:"background 0.2s, color 0.2s, border-color 0.2s"},onMouseEnter:t=>{t.currentTarget.style.background="#ffffff",t.currentTarget.style.color="#07030f"},onMouseLeave:t=>{t.currentTarget.style.background="linear-gradient(135deg,#7c3aed,#9333ea)",t.currentTarget.style.color="#ffffff"},children:"Know More"})})]}),e.jsxs("div",{className:"p-8 rounded-[32px] bg-white/[0.015] border border-white/5 flex justify-center items-center relative overflow-hidden group min-h-[280px]",children:[e.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0%,transparent_70%)] opacity-30 group-hover:opacity-60 transition-opacity duration-500"}),e.jsx("img",{src:"/SSD_Performance-Marketing-Webpage-12.png",alt:"Content Copywriting Visual",className:"w-[85%] sm:w-[75%] md:w-[70%] lg:w-[80%] max-w-[340px] h-auto object-contain relative z-10 transition-all duration-500 group-hover:scale-105"})]}),[{num:"01",text:"Over 65K+ active subscribers scaled across custom brand blogs, editorial substacks, and premium newsletters."},{num:"02",text:"Securing an elite 48% average newsletter open rate and a 4x increase in high-intent commercial clicks."},{num:"03",text:"Engineered compelling messaging frameworks and automated lead flows for Hybrid Energy, Delta Coffee, and Swift Academy."},{num:"04",text:"Utilizing deep psychological triggers to drive high conversion rates across landing pages, blogs, and marketing assets."}].map((t,i)=>e.jsxs("div",{className:"p-8 rounded-[24px] bg-white/[0.012] border border-white/5 hover:border-[#adfa3b]/20 hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between min-h-[180px]",children:[e.jsx("span",{className:"text-2xl font-black text-white/10 font-mono",children:t.num}),e.jsx("p",{className:"text-[14px] text-white/70 font-medium leading-relaxed mt-4",children:t.text})]},i))]})})]}),e.jsxs("section",{className:"cm-banner",style:{backgroundColor:"#0F0F14",padding:"2rem 2rem",display:"flex",justifyContent:"center",alignItems:"center",position:"relative",overflow:"hidden",flexWrap:"wrap"},children:[e.jsx("div",{style:{position:"absolute",bottom:-50,right:"10%",width:200,height:200,background:"radial-gradient(circle, rgba(76,29,149,0.3) 0%, transparent 70%)",borderRadius:"50%",pointerEvents:"none"}}),["WE STRATEGIZE","WE REACH","WE ENGAGE","WE SCALE"].map((t,i,s)=>e.jsxs("div",{className:"cm-banner-item",children:[e.jsx("div",{children:e.jsx("h2",{style:{fontFamily:"'Bebas Neue','Impact',sans-serif",fontSize:"clamp(32px,3.5vw,56px)",color:"#7c3aed",letterSpacing:"0.04em",lineHeight:.92,margin:0},children:t})}),i<s.length-1&&e.jsx("div",{className:"cm-banner-divider",style:{width:2,height:60,backgroundColor:"rgba(139,92,246,0.4)"}})]},t))]})]})},B=[{icon:e.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),e.jsx("path",{d:"M9 9h6M9 12h6M9 15h4"})]}),title:"ADVERTISING CONTENT",intro:"We create scroll-stopping content that turns your audience into customers.",bullets:["Content creation: From planning to execution, we create scroll-stopping content that turns your audience into customers.","Copywriting and captions: Our copies don't just attract — they keep people hooked with purpose-driven messaging."],size:"outer"},{icon:e.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 20h9"}),e.jsx("path",{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"})]}),title:"BLOG CONTENT",intro:"From long-form depth to short-form punch, we excel at crafting content that delivers results.",bullets:["Content creation: From planning to execution, we create scroll-stopping content that turns your audience into customers.","Copywriting and captions: Our brainstorming copies don't just attract an audience — they keep them hooked.","Strategy and planning: We build, plan, and grow using data and insight."],size:"mid"},{icon:e.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),e.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),e.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]}),title:"SOCIAL MEDIA CONTENT",intro:"We create scroll-stopping content that turns your audience into customers.",bullets:["Content creation: From planning to execution, we create scroll-stopping content that turns your audience into customers.","Copywriting and captions: Our brainstorming copies don't just attract an audience — they keep them hooked with purpose-driven messaging.","Strategy and planning: With growth in mind, we don't just post and pray — we build, plan, and grow using data and insight."],featured:!0,size:"center"},{icon:e.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"16 18 22 12 16 6"}),e.jsx("polyline",{points:"8 6 2 12 8 18"})]}),title:"WEBSITE CONTENT",intro:"We give life to your imagination through words.",bullets:["Content creation: From planning to execution, we create scroll-stopping content that turns your audience into customers.","Copywriting and captions: Our brainstorming copies don't just attract an audience — they keep them hooked.","Strategy and planning: We build, plan, and grow using data and insight."],size:"mid"},{icon:e.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),e.jsx("path",{d:"M9 9h6M9 12h6M9 15h4"})]}),title:"ADVERTISING CONTENT",intro:"We create scroll-stopping content that turns your audience into customers.",bullets:["Content creation: From planning to execution, we create scroll-stopping content that turns your audience into customers.","Copywriting and captions: Our copies don't just attract — they keep people hooked with purpose-driven messaging."],size:"outer"}],E=`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@400;500;600&display=swap');
  .cm-root { background:#0d0b1a; min-height:auto; width:100%; font-family:'Barlow',sans-serif; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:96px 20px 58px; position:relative; overflow:hidden; }
  .cm-bg-lines { position:absolute; inset:0; pointer-events:none; overflow:hidden; }
  .cm-bg-lines svg { position:absolute; top:0; left:0; width:100%; height:100%; }
  .cm-header { text-align:center; margin-bottom:80px; position:relative; z-index:2; }
  .cm-header h1 { font-family:'Barlow Condensed',sans-serif; font-weight:800; font-size:clamp(28px,4vw,48px); color:#ffffff; letter-spacing:0.02em; text-transform:uppercase; margin-bottom:16px; }
  .cm-header p { font-size:clamp(14px,1.5vw,18px); color:#c0b8d8; line-height:1.5; max-width:520px; margin:0 auto; }
  .cm-cards-row { display:flex; align-items:flex-end; gap:12px; position:relative; z-index:2; max-width:1400px; width:100%; justify-content:center; }
  .cm-card { background:#ffffff; border-radius:16px; display:flex; flex-direction:column; gap:10px; cursor:default; transition:transform 0.2s ease,box-shadow 0.2s ease; }
  .cm-card.size-outer { flex:0 0 200px; width:200px; padding:14px 14px 12px; transform:scale(0.88); opacity:0.75; }
  .cm-card.size-mid { flex:0 0 245px; width:245px; padding:18px 18px 14px; transform:scale(0.94); opacity:0.88; }
  .cm-card.size-center { flex:0 0 290px; width:290px; padding:26px 22px 22px; box-shadow:0 12px 50px rgba(0,0,0,0.45); transform:scale(1); opacity:1; z-index:3; }
  .cm-card:hover { transform:scale(1.02) translateY(-4px) !important; box-shadow:0 20px 60px rgba(0,0,0,0.4); opacity:1 !important; }
  .cm-card-title-row { display:flex; align-items:center; gap:8px; }
  .cm-card-icon { color:#7c5cbf; flex-shrink:0; }
  .cm-card.size-center .cm-card-icon { color:#7cd4fd; }
  .cm-card-title { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:13px; color:#1a0a3b; letter-spacing:0.04em; text-transform:uppercase; line-height:1.2; }
  .cm-card.size-center .cm-card-title { font-size:16px; }
  .cm-card.size-mid .cm-card-title { font-size:14px; }
  .cm-divider { height:1px; background:#e8e0f0; width:100%; flex-shrink:0; }
  .cm-card-intro { font-family:'Barlow',sans-serif; font-size:11px; font-weight:600; color:#3a2a5e; letter-spacing:0.01em; text-transform:none; line-height:1.5; }
  .cm-bullets { list-style:disc; padding-left:14px; display:flex; flex-direction:column; gap:6px; }
  .cm-bullets li { font-family:'Barlow',sans-serif; font-size:10px; font-weight:500; color:#3a2a5e; letter-spacing:0.01em; text-transform:none; line-height:1.45; }
  .cm-btn { margin-top:8px; align-self:flex-start; background:#7ac143; color:#0d0b1a; font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:11px; letter-spacing:0.08em; text-transform:uppercase; border:none; border-radius:6px; padding:8px 18px; cursor:pointer; transition:background 0.15s ease,transform 0.1s ease; white-space:nowrap; }
  .cm-btn:hover { background:#8fd44f; transform:scale(1.03); }
  .cm-card.size-center .cm-btn { padding:10px 24px; font-size:12px; }
  @media (max-width:900px) { .cm-cards-row { flex-direction:column; align-items:center; } .cm-card { width:100% !important; max-width:400px !important; flex:unset !important; transform:scale(1) !important; opacity:1 !important; } }
`,W=()=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:E}),e.jsxs("div",{className:"cm-root",children:[e.jsx("div",{className:"cm-bg-lines",children:e.jsxs("svg",{viewBox:"0 0 1440 800",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("line",{x1:"320",y1:"0",x2:"600",y2:"800",stroke:"#6b3fa0",strokeWidth:"1",strokeOpacity:"0.35"}),e.jsx("line",{x1:"380",y1:"0",x2:"660",y2:"800",stroke:"#6b3fa0",strokeWidth:"0.5",strokeOpacity:"0.15"}),e.jsx("line",{x1:"900",y1:"0",x2:"1200",y2:"800",stroke:"#6b3fa0",strokeWidth:"1",strokeOpacity:"0.2"})]})}),e.jsxs("div",{className:"cm-header",children:[e.jsx("h1",{children:"What's in a Brand Kit?"}),e.jsx("p",{children:"Everything your brand needs to communicate clearly, consistently, and effectively across all platforms."})]}),e.jsx("div",{className:"cm-cards-row",children:B.map((a,t)=>e.jsxs("div",{className:`cm-card size-${a.size}`,children:[e.jsxs("div",{className:"cm-card-title-row",children:[e.jsx("span",{className:"cm-card-icon",children:a.icon}),e.jsx("span",{className:"cm-card-title",children:a.title})]}),e.jsx("div",{className:"cm-divider"}),e.jsx("p",{className:"cm-card-intro",children:a.intro}),e.jsx("ul",{className:"cm-bullets",children:a.bullets.map((i,s)=>e.jsx("li",{children:i},s))}),e.jsx("button",{className:"cm-btn",children:"LEARN MORE"})]},t))})]})]}),f=[{number:"1",title:"Strategy first. Always.",points:["Every piece of content starts with a goal.","Audience understanding drives the writing.","Consistency across platforms ensured."]},{number:"2",title:"Content that lasts.",points:["Every piece of content starts with a goal.","Audience understanding drives the writing.","Consistency across platforms ensured."]},{number:"3",title:"Unmistakably yours.",points:["Every piece of content starts with a goal.","Audience understanding drives the writing.","Consistency across platforms ensured."]},{number:"4",title:"One team, every format.",points:["Every piece of content starts with a goal.","Audience understanding drives the writing.","Consistency across platforms ensured."]}];function T(a=.08){const t=c.useRef(null),[i,s]=c.useState(!1);return c.useEffect(()=>{const o=t.current;if(!o)return;const l=new IntersectionObserver(([r])=>{r.isIntersecting&&s(!0)},{threshold:a});return l.observe(o),()=>l.disconnect()},[a]),[t,i]}function M({card:a,index:t,inView:i}){const[s,o]=c.useState(!1);return e.jsxs("div",{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{flex:"1 1 0",minWidth:0,background:s?"rgba(255,255,255,0.09)":"rgba(255,255,255,0.05)",border:`1px solid ${s?"rgba(202,255,90,0.4)":"rgba(255,255,255,0.08)"}`,borderRadius:"16px",padding:"28px 22px 26px",cursor:"default",opacity:i?1:0,transform:i?s?"translateY(-9px)":"translateY(0px)":"translateY(44px)",transition:[`opacity 0.65s ease ${.12+t*.11}s`,`transform ${s?"0.28s cubic-bezier(0.34,1.2,0.64,1)":`0.65s cubic-bezier(0.22,1,0.36,1) ${.12+t*.11}s`}`,"border 0.28s ease","background 0.28s ease","box-shadow 0.28s ease"].join(", "),boxShadow:s?"0 14px 44px rgba(0,0,0,0.45)":"0 2px 14px rgba(0,0,0,0.18)"},children:[e.jsx("h3",{style:{fontFamily:"'Space Grotesk', sans-serif",fontWeight:600,fontSize:"1.05rem",color:"#ffffff",margin:"0 0 15px",lineHeight:1.35,letterSpacing:"-0.01em"},children:a.title}),e.jsx("ul",{style:{margin:0,padding:"0 0 0 15px"},children:a.points.map((l,r)=>e.jsx("li",{style:{fontFamily:"'Space Grotesk', sans-serif",fontWeight:400,fontSize:"0.845rem",color:"rgba(255,255,255,0.56)",lineHeight:1.65,marginBottom:r<a.points.length-1?"6px":0},children:l},r))})]})}const I=()=>{const[a,t]=T(.08),[i,s]=c.useState(0),[o,l]=c.useState([!1,!1,!1,!1]);return c.useEffect(()=>{if(!t)return;let r=null;const n=1100,d=p=>{r||(r=p);const x=Math.min((p-r)/n,1),m=x<.5?4*x**3:1-Math.pow(-2*x+2,3)/2;s(m*100),x<1&&requestAnimationFrame(d)};requestAnimationFrame(d),f.forEach((p,x)=>{setTimeout(()=>{l(m=>{const u=[...m];return u[x]=!0,u})},x*190+60)})},[t]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        @keyframes floatA {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(22px,-16px) scale(1.04); }
        }
        @keyframes floatB {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-18px,13px) scale(0.97); }
        }
        @keyframes headReveal {
          from { opacity:0; transform: translateY(24px); }
          to   { opacity:1; transform: translateY(0); }
        }
        @keyframes subReveal {
          from { opacity:0; transform: translateY(16px); }
          to   { opacity:0.62; transform: translateY(0); }
        }
        @keyframes dotPop {
          0%   { transform: scale(0); }
          65%  { transform: scale(1.22); }
          100% { transform: scale(1); }
        }
        @keyframes dotPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(202,255,90,0.5); }
          50%      { box-shadow: 0 0 0 9px rgba(202,255,90,0); }
        }

        @media (max-width: 768px) {
          .wcu-timeline { display: none !important; }
          .wcu-cards { flex-direction: column !important; }
          .wcu-container { padding: 0 10px !important; }
          .wcu-section { padding: 28px 24px 36px !important; min-height: auto !important; }
        }
      `}),e.jsxs("section",{className:"wcu-section",style:{minHeight:"auto",width:"100%",background:"radial-gradient(ellipse 88% 52% at 50% -4%, #2e0d52 0%, #100920 58%, #0b0817 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"28px 48px 42px",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"-9%",left:"-5%",width:"540px",height:"540px",borderRadius:"50%",background:"radial-gradient(circle, rgba(85,25,148,0.3) 0%, transparent 68%)",animation:"floatA 15s ease-in-out infinite",pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",bottom:"-14%",right:"-7%",width:"480px",height:"480px",borderRadius:"50%",background:"radial-gradient(circle, rgba(50,12,108,0.26) 0%, transparent 70%)",animation:"floatB 19s ease-in-out infinite",pointerEvents:"none"}}),e.jsxs("div",{style:{textAlign:"center",maxWidth:"780px",marginBottom:"24px",position:"relative",zIndex:1,padding:"0 20px"},children:[e.jsx("h1",{style:{fontFamily:"'Bebas Neue','Impact',sans-serif",fontSize:"clamp(44px,6vw,90px)",color:"#adfa3b",WebkitTextStroke:"2px white",textShadow:"5px 5px 0 rgba(0,0,0,0.5)",letterSpacing:"0.04em",lineHeight:.9,margin:"0 0 24px",animation:"headReveal 0.75s cubic-bezier(0.22,1,0.36,1) 0.05s both"},children:"Why Choose Us"}),e.jsxs("p",{style:{marginTop:"16px",fontFamily:"'Space Grotesk', sans-serif",fontWeight:400,fontSize:"clamp(0.88rem, 1.4vw, 0.98rem)",color:"rgba(255,255,255,0.62)",lineHeight:1.78,animation:"subReveal 0.75s cubic-bezier(0.22,1,0.36,1) 0.22s both"},children:["We leverage our profound expertise in web design and e-commerce, providing tailored services that prioritize your success.",e.jsx("br",{}),"Our innovative solutions challenge the norm, supported by a proven track record of excellence and strategic execution."]})]}),e.jsxs("div",{ref:a,className:"wcu-container",style:{width:"100%",maxWidth:"1180px",position:"relative",zIndex:1},children:[e.jsxs("div",{className:"wcu-timeline",style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"26px",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:"22px",right:"22px",height:"1px",background:"rgba(255,255,255,0.1)",transform:"translateY(-50%)"}}),e.jsx("div",{style:{position:"absolute",top:"50%",left:"22px",right:"22px",height:"1px",transform:"translateY(-50%)",overflow:"hidden",pointerEvents:"none"},children:e.jsx("div",{style:{height:"100%",width:`${i}%`,background:"#caff5a"}})}),f.map((r,n)=>e.jsx("div",{style:{position:"relative",zIndex:2,width:"44px",height:"44px",borderRadius:"50%",background:"linear-gradient(145deg, #d6ff68, #9fd428)",color:"#1b2c00",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Space Grotesk', sans-serif",fontWeight:700,fontSize:"0.95rem",flexShrink:0,animation:o[n]?`dotPop 0.44s cubic-bezier(0.34,1.56,0.64,1) both, dotPulse 2.8s ease-in-out ${n*.28}s infinite`:"none",transform:o[n]?void 0:"scale(0)"},children:n+1},n))]}),e.jsx("div",{className:"wcu-cards",style:{display:"flex",gap:"16px",alignItems:"stretch"},children:f.map((r,n)=>e.jsx(M,{card:r,index:n,inView:t},n))})]})]})]})},P=()=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
      @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap');

      .content-solution-page,
      .content-solution-page * {
        font-family: 'Nunito Sans', sans-serif !important;
      }
    `}),e.jsxs("div",{className:"content-solution-page",children:[e.jsx(z,{}),e.jsx(A,{}),e.jsx(F,{}),e.jsx(R,{}),e.jsx(W,{}),e.jsx(I,{}),e.jsx(C,{})]})]}),A=()=>e.jsxs("section",{className:"relative overflow-hidden px-6 py-20 sm:px-10 lg:py-28",style:{background:"linear-gradient(180deg, #0d091e 0%, #070412 100%)"},children:[e.jsx("div",{className:"absolute inset-0 opacity-[0.03] pointer-events-none",style:{backgroundImage:"radial-gradient(circle at 20% 30%, rgba(173,250,59,0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(139,92,246,0.15) 0%, transparent 40%)"}}),e.jsx("div",{className:"absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"}),e.jsx("div",{className:"relative z-10 mx-auto max-w-[1200px]",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch",children:[e.jsxs("div",{className:"rounded-[32px] border border-white/5 bg-gradient-to-br from-[#130d2a]/75 to-[#080411]/75 p-8 sm:p-10 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group",children:[e.jsx("div",{className:"absolute -right-20 -top-20 w-64 h-64 bg-[#adfa3b]/5 rounded-full blur-3xl pointer-events-none transition-all duration-500 group-hover:bg-[#adfa3b]/10"}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-[11px] font-mono font-bold px-3 py-1 bg-[#adfa3b]/10 text-[#adfa3b] rounded-full uppercase tracking-widest",children:"Storytelling Framework"}),e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#adfa3b]"})]}),e.jsxs("h2",{className:"font-['Montserrat'] text-[clamp(28px,3.5vw,42px)] font-black uppercase text-white leading-tight mb-6",children:["We tell your ",e.jsx("span",{className:"text-[#adfa3b]",children:"brand’s story"})]}),e.jsx("p",{className:"text-white/80 text-sm sm:text-base leading-relaxed mb-6 font-medium",children:"Content is not just what is written. It’s how a brand speaks, shows up, and stays relevant."}),e.jsx("div",{className:"space-y-4 mt-6",children:[{q:"What to say?",a:"Defining your core narrative and value proposition."},{q:"How to say?",a:"Crafting the unique voice, tone, and visual messaging."},{q:"Where to say?",a:"Deploying across high-impact platforms strategically."}].map((a,t)=>e.jsxs("div",{className:"flex gap-4 p-4 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:border-white/10 transition-all duration-300",children:[e.jsx("span",{className:"font-mono text-sm text-[#adfa3b] font-black",children:a.q}),e.jsx("p",{className:"text-white/60 text-xs sm:text-sm font-medium",children:a.a})]},t))})]}),e.jsxs("div",{className:"border-t border-white/5 pt-6 mt-8 flex items-center justify-between text-[11px] font-mono text-white/40",children:[e.jsx("span",{children:"Delivery Architecture"}),e.jsx("span",{children:"[BUZZIWAH V-02]"})]})]}),e.jsxs("div",{className:"rounded-[32px] border border-[#a855f7]/20 bg-gradient-to-br from-[#0e111a]/60 to-[#070910]/60 p-8 sm:p-10 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group shadow-[0_20px_45px_rgba(0,0,0,0.4)]",children:[e.jsx("div",{className:"absolute -left-20 -bottom-20 w-64 h-64 bg-[#a855f7]/5 rounded-full blur-3xl pointer-events-none transition-all duration-500 group-hover:bg-[#a855f7]/10"}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("span",{className:"text-[11px] font-mono font-bold px-3 py-1 bg-[#a855f7]/15 text-[#a855f7] rounded-full uppercase tracking-widest",children:"Cohesion System"}),e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-ping"})]}),e.jsxs("h2",{className:"font-['Montserrat'] text-[clamp(28px,3.5vw,42px)] font-black uppercase text-white leading-tight mb-6",children:["The Buzziwah ",e.jsx("span",{className:"text-[#a855f7]",children:"Approach"})]}),e.jsx("p",{className:"text-white/80 text-sm sm:text-base leading-relaxed mb-6 font-semibold italic",children:'"We don’t treat content as isolated pieces."'}),e.jsx("p",{className:"text-white/60 text-xs sm:text-sm leading-relaxed mb-6",children:"We build it as an interconnected system where premium production, beautiful design, persuasive copy, and clear distribution strategy work together perfectly to build real authority."})]}),e.jsxs("div",{className:"border-t border-white/5 pt-6 mt-8 flex items-center justify-between text-[11px] font-mono text-white/40",children:[e.jsx("span",{children:"Synergistic Engine"}),e.jsx("span",{className:"text-[#a855f7] font-bold",children:"INTEGRATED_CONTENT"})]})]})]})})]}),F=()=>e.jsxs("section",{className:"relative overflow-hidden px-6 py-20 sm:px-10 lg:py-24",style:{background:"#060410"},children:[e.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.035]",style:{backgroundImage:"linear-gradient(rgba(173,250,59,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.1) 1px, transparent 1px)",backgroundSize:"40px 40px"}}),e.jsx("div",{className:"absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-[#adfa3b]/5 to-transparent blur-3xl rounded-full pointer-events-none"}),e.jsxs("div",{className:"relative z-10 mx-auto max-w-[1200px]",children:[e.jsxs("div",{className:"mb-14 text-center",children:[e.jsx("p",{className:"text-[11px] font-bold uppercase tracking-[0.25em] text-[#adfa3b] mb-3",children:"Narrative Buckets"}),e.jsxs("h2",{className:"font-['Montserrat'] text-[clamp(28px,4vw,52px)] font-black uppercase text-white leading-tight",children:["What's in a ",e.jsx("span",{className:"text-[#a855f7] italic",children:"Content Bucket?"})]}),e.jsx("p",{className:"mt-4 max-w-2xl text-white/50 text-sm sm:text-base leading-relaxed mx-auto",children:"A content bucket is not just a list of items. It’s the visual taxonomy and modular framework behind how your brand messaging is structured and scaled."}),e.jsx("div",{className:"h-[2px] w-24 bg-[#adfa3b] mx-auto mt-6 rounded-full"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[{num:"CB-01",title:"Content Strategy",details:"Core positioning, content pillars, calendar structures, and brand narrative blueprints.",icon:"🎯"},{num:"CB-02",title:"Website Content",details:"High-conversion landing pages, structured layout copy, and micro-copy systems.",icon:"🖥️"},{num:"CB-03",title:"Social Media Content",details:"Highly shareable reels, multi-slide carousels, and high-impact static creatives.",icon:"📱"},{num:"CB-04",title:"Video Content",details:"Dynamic performance ads, high-production brand films, and visual explainers.",icon:"🎥"},{num:"CB-05",title:"Performance Ad Copy",details:"Direct-response copy, hook variations, and conversion-focused creative assets.",icon:"📈"},{num:"CB-06",title:"Campaign Copywriting",details:"Promotional strategies, product launch text, and narrative copywriting frameworks.",icon:"✍️"},{num:"CB-07",title:"SEO & Search Content",details:"Search-driven content strategy, key-phrase-optimized articles, and informational resources.",icon:"🔍"},{num:"CB-08",title:"Platform-Specific Layouts",details:"Tailored content for Instagram, YouTube, Google, and emerging digital channels.",icon:"🛡️"}].map((a,t)=>e.jsxs("div",{className:"rounded-3xl border border-white/5 bg-gradient-to-b from-[#13112a]/40 to-[#080718]/40 p-6 flex flex-col justify-between hover:border-[#a855f7]/30 hover:scale-[1.02] transition-all duration-300 group min-h-[220px]",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-5",children:[e.jsx("span",{className:"font-mono text-[10px] tracking-widest text-[#adfa3b] font-black",children:a.num}),e.jsx("span",{className:"text-xl",children:a.icon})]}),e.jsx("h3",{className:"font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wider mb-2 group-hover:text-[#a855f7] transition-colors duration-200",children:a.title}),e.jsx("p",{className:"text-white/50 text-[11px] leading-relaxed",children:a.details})]}),e.jsx("div",{className:"mt-5 pt-3 border-t border-white/[0.03] text-[9px] font-mono text-white/30 tracking-widest",children:"VERIFIED BUCKET"})]},t))})]})]}),R=()=>e.jsxs("section",{className:"relative overflow-hidden px-6 py-20 sm:px-10 lg:py-28",style:{background:"#070312"},children:[e.jsx("div",{className:"absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"}),e.jsx("div",{className:"absolute inset-0 opacity-[0.03] pointer-events-none",style:{backgroundImage:"radial-gradient(circle at 50% 50%, rgba(173,250,59,0.1) 0%, transparent 50%)"}}),e.jsxs("div",{className:"relative z-10 mx-auto max-w-[1200px]",children:[e.jsxs("div",{className:"mb-14 text-center",children:[e.jsx("p",{className:"text-[11px] font-bold uppercase tracking-[0.25em] text-[#a855f7] mb-3",children:"Narrative Archive"}),e.jsxs("h2",{className:"font-['Montserrat'] text-[clamp(28px,4vw,52px)] font-black uppercase text-white leading-tight",children:["Brand Stories We Have ",e.jsx("span",{className:"text-[#adfa3b] italic",children:"Narrated"})]}),e.jsx("p",{className:"mt-4 max-w-xl text-white/50 text-sm sm:text-base leading-relaxed mx-auto",children:"A curated showcase of showreels, high-production campaign videos, custom web copy, and platform-specific storytelling campaigns."}),e.jsx("div",{className:"h-[2px] w-24 bg-[#a855f7] mx-auto mt-6 rounded-full"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16",children:[{name:"Deepthi Prashanth Showreel",cat:"Banner Showreel",icon:"🎬"},{name:"WMN Women’s Day Video",cat:"Brand Film",icon:"👩"},{name:"BodhiAble YouTube Video",cat:"Social Content",icon:"🎥"},{name:"Samrat Restaurant Web Content",cat:"Copywriting",icon:"✍️"},{name:"Aanya Hospital Content Calendar",cat:"Strategy",icon:"🗓️"},{name:"Fitness Factory Script",cat:"Influencer Collab",icon:"💪"},{name:"Blogs for LilBeez",cat:"SEO Articles",icon:"📝"},{name:"Tent Cinema Campaign Article",cat:"PR Copy",icon:"📰"}].map((a,t)=>e.jsxs("div",{className:"rounded-2xl border border-white/5 bg-white/[0.01] p-5 hover:bg-gradient-to-b hover:from-[#110e2b]/50 hover:to-[#070312]/50 hover:border-[#adfa3b]/30 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition-all duration-300 flex flex-col justify-between min-h-[120px] group",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("span",{className:"text-[9px] font-mono text-white/30 tracking-widest block mb-2 font-black uppercase",children:["ST-0",t+1]}),e.jsx("span",{className:"text-sm opacity-60 group-hover:scale-110 transition-transform duration-200",children:a.icon})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-['Montserrat'] text-xs sm:text-sm font-extrabold text-white uppercase tracking-wide group-hover:text-[#adfa3b] transition-colors duration-200",children:a.name}),e.jsx("span",{className:"text-[8px] font-mono font-black uppercase tracking-widest text-[#a855f7] bg-[#a855f7]/10 px-2 py-0.5 rounded-md inline-block mt-3",children:a.cat})]})]},t))}),e.jsxs("div",{className:"rounded-[32px] border border-white/5 bg-gradient-to-r from-[#110d29]/75 to-[#080411]/75 p-8 sm:p-12 backdrop-blur-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8",children:[e.jsx("div",{className:"absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(173,250,59,0.06)_0%,transparent_70%)] pointer-events-none"}),e.jsxs("div",{className:"text-center md:text-left",children:[e.jsx("h3",{className:"font-['Montserrat'] text-[24px] sm:text-[32px] font-black text-white uppercase tracking-wide mb-3",children:"Let’s get your brand right."}),e.jsx("p",{className:"text-white/60 text-sm max-w-lg leading-relaxed",children:"Ready to craft a coherent system that positions your business, scaling your trust, and maximizing your market choice metrics?"})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 w-full sm:w-auto",children:[e.jsx("a",{href:"/#projects",className:"rounded-full px-8 py-3.5 font-['Montserrat'] text-xs font-bold uppercase tracking-[0.08em] text-center text-white border-2 border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-200",children:"Know More"}),e.jsx("a",{href:"/contact",className:"rounded-full px-8 py-3.5 font-['Montserrat'] text-xs font-bold uppercase tracking-[0.08em] text-center text-black transition-all duration-200",style:{background:"#adfa3b"},onMouseEnter:a=>{a.currentTarget.style.background="#a855f7",a.currentTarget.style.color="#ffffff"},onMouseLeave:a=>{a.currentTarget.style.background="#adfa3b",a.currentTarget.style.color="#000000"},children:"Get In Touch"})]})]})]})]});PageEnding;export{P as default};
