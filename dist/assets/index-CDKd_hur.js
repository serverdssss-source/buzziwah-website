import{r as s,j as e}from"./animation-vendor-2OyP_18a.js";import{V as S}from"./VariableProximity-HzNwaBXZ.js";import{s as z}from"./servicesData-CBjG5fGf.js";const g=z["outdoor-marketing"],k=g.campaigns,I=(l,r=1800)=>{const[c,p]=s.useState(0),[x,y]=s.useState(!1),m=s.useRef(null);return s.useEffect(()=>{const a=m.current;if(!a)return;const t=new IntersectionObserver(([i])=>{i.isIntersecting&&(y(!0),t.disconnect())},{threshold:.3});return t.observe(a),()=>t.disconnect()},[]),s.useEffect(()=>{if(!x)return;let a;const t=i=>{a||(a=i);const n=Math.min((i-a)/r,1),o=1-Math.pow(1-n,3);p(Math.floor(l*o)),n<1&&requestAnimationFrame(t)};requestAnimationFrame(t)},[x,l,r]),[m,c]},E=()=>{const l=[{end:850,suffix:"+",label:"Billboard Placements"},{end:12,suffix:"M+",label:"Daily Impressions"},{end:48,suffix:"+",label:"Cities Covered"},{end:94,suffix:"%",label:"Brand Recall Rate"},{end:5,suffix:"x",label:"Audience Multiplier"}];return e.jsxs("div",{style:{background:"#060811",borderTop:"1px solid rgba(173,250,59,0.18)",borderBottom:"1px solid rgba(173,250,59,0.18)",padding:"22px 5%",overflow:"hidden",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(90deg, rgba(124,58,237,0.06) 0%, rgba(173,250,59,0.04) 50%, rgba(124,58,237,0.06) 100%)",pointerEvents:"none"}}),e.jsx("div",{style:{display:"flex",gap:"clamp(24px,4vw,60px)",justifyContent:"center",flexWrap:"wrap",maxWidth:"1100px",margin:"0 auto",position:"relative",zIndex:1},children:l.map((r,c)=>{const[p,x]=I(r.end,1600+c*200);return e.jsxs("div",{ref:p,style:{textAlign:"center",minWidth:"90px"},children:[e.jsxs("div",{style:{fontFamily:"'Bebas Neue',Impact,sans-serif",fontSize:"clamp(26px,3.5vw,44px)",color:"#adfa3b",letterSpacing:"0.03em",lineHeight:1,textShadow:"0 0 20px rgba(173,250,59,0.3)"},children:[x,r.suffix]}),e.jsx("div",{style:{fontSize:"10px",color:"rgba(255,255,255,0.45)",textTransform:"uppercase",letterSpacing:"0.18em",marginTop:"4px",fontWeight:600},children:r.label})]},c)})})]})},C=()=>{const l=[{label:"📍 BILLBOARDS",color:"#adfa3b",textColor:"#060811",x:"3%",y:"15%",rot:"-6deg",delay:"0s",dur:"7s"},{label:"🏙️ PRIME SPOTS",color:"rgba(124,58,237,0.85)",textColor:"#fff",x:"87%",y:"22%",rot:"5deg",delay:"1.2s",dur:"9s"},{label:"👁️ 12M DAILY",color:"rgba(255,255,255,0.07)",textColor:"#adfa3b",x:"5%",y:"70%",rot:"4deg",delay:"0.6s",dur:"8s"},{label:"🗺️ 48 CITIES",color:"rgba(173,250,59,0.12)",textColor:"#adfa3b",x:"85%",y:"75%",rot:"-4deg",delay:"1.8s",dur:"10s"}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:"@keyframes outdoorFloat{0%,100%{transform:translateY(0)rotate(var(--rot));}50%{transform:translateY(-14px)rotate(var(--rot));}}"}),l.map((r,c)=>e.jsx("div",{style:{position:"absolute",left:r.x,top:r.y,background:r.color,color:r.textColor,fontFamily:"'Bebas Neue',Impact,sans-serif",fontSize:"11px",letterSpacing:"0.18em",padding:"5px 12px",borderRadius:"6px",border:`1px solid ${r.textColor==="#060811"?"transparent":"rgba(173,250,59,0.25)"}`,"--rot":r.rot,animation:`outdoorFloat ${r.dur} ease-in-out infinite`,animationDelay:r.delay,pointerEvents:"none",zIndex:1,whiteSpace:"nowrap",backdropFilter:"blur(8px)"},children:r.label},c))]})},A=`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  *,*::before,*::after{box-sizing:border-box}
  /* ── CODED PAGE BANNER STYLES ── */
  .coded-page-banner {
    position: relative;
    width: 100%;
    min-height: 360px;
    background:
      radial-gradient(circle at 25% 20%, rgba(124, 58, 237, 0.5), transparent 45%),
      radial-gradient(circle at 78% 75%, rgba(173, 250, 59, 0.28), transparent 40%),
      radial-gradient(circle at 60% 50%, rgba(109, 40, 217, 0.2), transparent 55%),
      linear-gradient(180deg, #0d0621 0%, #060811 100%);
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
  .buzziwah-section-heading {
    font-family: 'Bebas Neue', 'Impact', 'Arial Black', sans-serif !important;
    font-size: clamp(24px, 3vw, 44px);
    color: #adfa3b;
    -webkit-text-stroke: 2px white;
    text-shadow: 5px 5px 0 rgba(0,0,0,0.5);
    letter-spacing: 0.04em;
    line-height: 0.92;
    margin: 0 0 24px;
  }
  .buzziwah-section-heading-outline {
    font-family: 'Bebas Neue', 'Impact', 'Arial Black', sans-serif !important;
    font-size: clamp(24px, 3vw, 44px);
    color: transparent;
    -webkit-text-stroke: 2.5px #adfa3b;
    letter-spacing: 0.04em;
    line-height: 0.92;
    margin: 0 0 24px;
  }
  @keyframes countUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`,R=`
  @keyframes glassShimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
  @keyframes glowPulse { 0%,100% { box-shadow: 0 0 0 0 rgba(124,58,237,0); } 50% { box-shadow: 0 0 28px 6px rgba(124,58,237,0.22); } }
  @keyframes tabletFloat1 { 0% { transform: translateY(0px) rotate(-6deg) scale(1); } 33% { transform: translateY(-28px) rotate(-3deg) scale(1.02); } 66% { transform: translateY(-14px) rotate(-8deg) scale(0.98); } 100% { transform: translateY(0px) rotate(-6deg) scale(1); } }
  @keyframes tabletFloat2 { 0% { transform: translateY(0px) rotate(10deg) scale(1); } 40% { transform: translateY(-22px) rotate(13deg) scale(1.03); } 80% { transform: translateY(-8px) rotate(7deg) scale(0.97); } 100% { transform: translateY(0px) rotate(10deg) scale(1); } }

  .svc-section { background: linear-gradient(135deg, #06040c 0%, #110825 50%, #06040c 100%); width: 100%; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 80px 5%; font-family: 'DM Sans','Segoe UI',sans-serif; position: relative; overflow: hidden; }
  .svc-dotgrid-panel { position:absolute;top:0;right:0;width:50%;height:100%;background-image:radial-gradient(circle,rgba(180,255,0,0.10) 1px,transparent 1px);background-size:18px 18px;pointer-events:none;z-index:0; }
  .svc-tablet { position:absolute;border-radius:18px;pointer-events:none;z-index:0; }
  .svc-tablet-1 { width:110px;height:155px;top:6%;left:3%;background:rgba(124,58,237,0.12);border:1px solid rgba(124,58,237,0.25);backdrop-filter:blur(6px);animation:tabletFloat1 9s ease-in-out infinite; }
  .svc-tablet-2 { width:80px;height:115px;top:18%;left:28%;background:rgba(200,255,0,0.06);border:1px solid rgba(200,255,0,0.18);backdrop-filter:blur(4px);animation:tabletFloat2 12s ease-in-out infinite;animation-delay:-4s; }
  
  .svc-inner { display:flex;align-items:center;justify-content:center;gap:48px;max-width:1800px;width:100%;margin:0 auto;position:relative;z-index:1; }
  .svc-left { flex:1 1 0;min-width:0;max-width:680px;display:flex;flex-direction:column;gap:48px; }
  .svc-title { font-size:48px;font-weight:700;color:#fff;margin:0;font-family:'Syne','Segoe UI',sans-serif;letter-spacing:-0.5px;line-height:1.15; }
  .svc-grid { display:grid;grid-template-columns:1fr 1fr;gap:24px; }
  .svc-card { background:rgba(255,255,255,0.04);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,0.10);border-radius:20px;padding:33px 30px 36px;display:flex;flex-direction:column;gap:12px;position:relative;overflow:hidden;cursor:default;transition:border-color 0.3s ease,transform 0.3s ease,background 0.3s ease;animation:glowPulse 4s ease-in-out infinite; }
  .svc-card::before { content:'';position:absolute;inset:0;background:linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.07) 50%,transparent 70%);background-size:200% 100%;opacity:0;transition:opacity 0.3s ease;pointer-events:none;border-radius:inherit; }
  .svc-card:hover::before { opacity:1;animation:glassShimmer 1.2s ease forwards; }
  .svc-card:hover { border-color:rgba(124,58,237,0.65);transform:translateY(-6px);background:rgba(124,58,237,0.10);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px); }
  .svc-card:nth-child(1){animation-delay:0s}.svc-card:nth-child(2){animation-delay:1s}.svc-card:nth-child(3){animation-delay:2s}.svc-card:nth-child(4){animation-delay:3s}
  .svc-card-title { font-size:22px;font-weight:700;color:#fff;margin:0;line-height:1.35;font-family:'Syne','Segoe UI',sans-serif; }
  .svc-card-body { font-size: 19px; color: rgba(255,255,255,0.65); line-height: 1.65; margin: 0; }
  .svc-right { flex:1 1 0;min-width:0;max-width:570px;height:680px;display:flex;align-items:center;justify-content:center; }
  
  /* City billboard dynamic illustration columns */
  .outdoor-city-grid {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 32px;
    background: #090615;
    border: 1px solid rgba(255,255,255,0.05);
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0,0,0,0.6);
  }
  .outdoor-laser-beam {
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 2px;
    height: 100%;
    background: linear-gradient(0deg, #adfa3b, transparent);
    animation: laserShoot 6s infinite linear;
    opacity: 0.4;
  }
  .outdoor-laser-beam-2 {
    position: absolute;
    bottom: 0;
    right: 15%;
    width: 2px;
    height: 100%;
    background: linear-gradient(0deg, #7c3aed, transparent);
    animation: laserShoot 8s infinite linear;
    animation-delay: -3s;
    opacity: 0.3;
  }
  @keyframes laserShoot {
    0% { transform: translateY(100%); }
    100% { transform: translateY(-100%); }
  }

  @media(max-width:1200px){ .svc-right{max-width:420px;height:500px;} }
  @media(max-width:1024px){ .svc-inner{gap:36px;}.svc-right{max-width:300px;height:400px;}.svc-title{font-size:36px;}.svc-card-title{font-size:18px;}.svc-card-body{font-size:15px;}.svc-card{padding:24px 20px 26px;} }
  @media(max-width:768px){ 
    .svc-section{padding:60px 24px;min-height:auto;}
    .svc-inner{flex-direction:column;gap:40px; text-align:center;}
    .svc-left{flex:unset;width:100%;gap:32px; align-items:center;}
    .svc-right{flex:unset;width:100%;max-width:100%;height:320px;}
    .svc-title{font-size:30px; text-align:center; width:100%;}
    .svc-dotgrid-panel{width:100%;opacity:0.4;}
    .svc-tablet{display:none;}
    .svc-grid{grid-template-columns:1fr; width:100%;}
    .svc-card{text-align:left;}
  }
  @media(max-width:480px){ .svc-title{font-size:26px;}.svc-card-title{font-size:16px;}.svc-card-body{font-size:14px;} }
`,T=`
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&display=swap');
  .seo-wrap { position: relative; background: #05030a; min-height: auto; display: flex; align-items: center; justify-content: center; padding: 56px 48px 88px; box-sizing: border-box; overflow: hidden; font-family: 'Barlow', sans-serif; }
  .seo-canvas { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; }
  .seo-inner-process { position: relative; z-index: 1; max-width: 1060px; width: 100%; }
  .seo-head { text-align: center; margin-bottom: 44px; opacity: 0; transform: translateY(22px); animation: seoFadeUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.15s forwards; }
  @keyframes seoFadeUp { to { opacity: 1; transform: translateY(0); } }
  .seo-title-v2 { font-family: 'Barlow', sans-serif; font-weight: 700; font-size: clamp(24px, 3.6vw, 42px); color: #ffffff; margin: 0 0 14px; letter-spacing: -0.015em; line-height: 1.15; }
  .seo-subtitle { font-family: 'Barlow', sans-serif; font-weight: 300; font-size: 13.5px; color: #6b7888; letter-spacing: 0.14em; text-transform: uppercase; margin: 0; }
  .seo-rows { display: flex; flex-direction: column; }
  .seo-row { display: grid; grid-template-columns: 64px 260px 1fr; align-items: start; gap: 0 40px; padding: 30px 0; position: relative; opacity: 0; transform: translateX(-20px); transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1); }
  .seo-row::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(160,100,255,0.12) 15%, rgba(160,100,255,0.22) 50%, rgba(160,100,255,0.12) 85%, transparent 100%); transition: opacity 0.3s ease; }
  .seo-row:last-child::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(160,100,255,0.12) 15%, rgba(160,100,255,0.22) 50%, rgba(160,100,255,0.12) 85%, transparent 100%); }
  .seo-row:hover::before { background: linear-gradient(90deg, transparent 0%, rgba(160,100,255,0.45) 20%, rgba(160,100,255,0.7) 50%, rgba(160,100,255,0.45) 80%, transparent 100%); }
  .seo-row.row-visible { opacity: 1; transform: translateX(0); }
  .seo-num { font-family: 'Barlow', sans-serif; font-weight: 300; font-size: 16px; color: #414d5c; letter-spacing: 0.04em; padding-top: 3px; }
  .seo-name { font-family: 'Barlow', sans-serif; font-weight: 700; font-size: clamp(18px, 2vw, 24px); color: #b06aff; line-height: 1.3; letter-spacing: 0.01em; padding-top: 2px; }
  .seo-desc-v2 { font-family: 'Barlow', sans-serif; font-weight: 500; font-size: clamp(16px, 1.4vw, 19px); color: #a8b4c7; line-height: 1.8; letter-spacing: 0.06em; text-transform: uppercase; padding-top: 4px; }
  @media (max-width: 700px) { .seo-wrap { padding: 44px 24px 68px; } .seo-head { margin-bottom: 28px; } .seo-row { grid-template-columns: 44px 1fr; grid-template-rows: auto auto; gap: 6px 14px; padding: 24px 0; } .seo-num { grid-column:1; grid-row:1; } .seo-name { grid-column:2; grid-row:1; } .seo-desc-v2 { grid-column:1/-1; grid-row:2; } }
`,M=[{title:"Hoardings & Billboards",body:"High-impact placements in key high-traffic zones to capture maximum eyeballs and establish local dominance."},{title:"Transit Advertising",body:"End-to-end wrap designs and media placements on local buses, autos, and commercial cabs."},{title:"Outdoor Branding & Installations",body:"Creative physical configurations, interactive installations, and landmarks in commercial blocks."},{title:"Event & On-ground Branding",body:"Eye-catching exhibition setups, premium standees, backdrops, and active corporate triggers."},{title:"Print Creatives for Outdoor Media",body:"Ultra-high resolution large format designs engineered for visibility and high-fidelity colors."},{title:"Location Planning & Media Buying",body:"Data-driven media sourcing, price negotiations, and scheduling to optimize reach per rupee."}],B=[{number:"01.",title:"Geographical Mapping",description:"WE ANALYSE HIGH-TRAFFIC CORRIDORS, LOCAL FOOTFALL DENSITIES, AND AUDIENCE DEMOGRAPHICS TO MAP OUT HIGHLY RELEVANT PHYSICAL TOUCHPOINTS FOR YOUR CAMPAIGN."},{number:"02.",title:"Large-Format Creative Layout",description:"OUR DESIGN ENGINEERS CONSTRUCT HIGH-FIDELITY CREATIVES WITH HIGH COLOR ACCURACY AND MINIMALIST TYPOGRAPHY THAT ARE EASILY COMPREHENSED AT HIGH SPEED."},{number:"03.",title:"Placement & Validation",description:"WE HANDLE EVERYTHING END-TO-END—Sourcing, Printing, Installing, and validating structural placements for maximum real-world durability and impact."}],F=()=>e.jsxs("section",{className:"relative overflow-hidden px-6 py-28 sm:px-10 lg:py-36",style:{background:"#05030a"},children:[e.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08)_0%,transparent_70%)] pointer-events-none"}),e.jsx("div",{className:"absolute right-[-10%] top-10 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(173,250,59,0.04)_0%,transparent_70%)] pointer-events-none animate-pulse"}),e.jsx("div",{className:"absolute inset-0 opacity-[0.015] pointer-events-none",style:{backgroundImage:"linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",backgroundSize:"60px 60px"}}),e.jsxs("div",{className:"relative z-10 mx-auto max-w-[1100px] text-center",children:[e.jsxs("div",{className:"inline-flex items-center gap-2.5 mb-8 px-4 py-1.5 bg-[#adfa3b]/10 border border-[#adfa3b]/20 rounded-full",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-[#adfa3b] animate-ping"}),e.jsx("span",{className:"text-[11px] font-mono font-black tracking-[0.25em] text-[#adfa3b] uppercase",children:"Built for Real-World Visibility"})]}),e.jsxs("h2",{className:"buzziwah-section-heading",children:["The Power of Physical ",e.jsx("span",{className:"text-[#adfa3b] italic",children:"Presence"})]}),e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsxs("p",{className:"font-['Montserrat'] text-[clamp(20px,2.8vw,36px)] font-light text-white/90 leading-[1.4] tracking-wide mb-6",children:['"We plan and execute outdoor campaigns that ',e.jsx("span",{className:"text-[#adfa3b] font-black",children:"increase visibility"}),' and reinforce your brand presence."']}),e.jsx("p",{className:"font-sans text-[clamp(16px,1.8vw,21px)] text-white/50 leading-relaxed max-w-2xl mx-auto font-normal",children:"From idea to placement, everything is handled end-to-end."})]}),e.jsxs("div",{className:"mt-12 flex justify-center items-center gap-4",children:[e.jsx("div",{className:"w-12 h-[1px] bg-white/10"}),e.jsx("span",{className:"text-white/20 text-xs font-mono",children:"✦"}),e.jsx("div",{className:"w-12 h-[1px] bg-white/10"})]})]})]}),O=()=>{const l=[{title:"Unblockable Visual Scale",desc:"Physical billboards cannot be closed, ad-blocked, or skipped. They dominate local sightlines with massive physical authority.",num:"01"},{title:"High Frequency Reach",desc:"Repetitive exposure to daily commuters builds massive long-term brand recall and continuous community validation.",num:"02"},{title:"Hyperlocal Reinforcement",desc:"Coordinate media placements exactly in proximity to key retail hubs, hospitals, restaurants, or active workspaces.",num:"03"}];return e.jsxs("section",{className:"relative overflow-hidden px-6 py-24 sm:px-10 lg:py-28",style:{background:"#070512"},children:[e.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.04)_0%,transparent_70%)] pointer-events-none"}),e.jsxs("div",{className:"relative z-10 mx-auto max-w-[1200px]",children:[e.jsxs("div",{className:"mb-16 text-center",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#adfa3b]/10 border border-[#adfa3b]/20 rounded-full",children:[e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#adfa3b] animate-pulse"}),e.jsx("span",{className:"text-[10px] font-mono font-black tracking-widest text-[#adfa3b] uppercase",children:"THE RESONANCE"})]}),e.jsxs("h2",{className:"buzziwah-section-heading",children:["Why it ",e.jsx("span",{className:"text-[#adfa3b] italic",children:"matters"}),"?"]}),e.jsx("p",{className:"max-w-2xl mx-auto text-[#adfa3b] text-lg sm:text-xl font-bold tracking-tight font-sans",children:'"Because if you’re not showing up in the real world, you’re missing out."'})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-16",children:l.map((r,c)=>e.jsx("div",{className:"rounded-[28px] border border-white/5 bg-gradient-to-b from-white/[0.015] to-white/[0.002] hover:border-white/10 hover:bg-white/[0.02] p-8 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-start mb-6",children:[e.jsx("span",{className:"text-[28px] font-mono font-black text-white/5",children:r.num}),e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#adfa3b]",style:{boxShadow:"0 0 10px #adfa3b"}})]}),e.jsx("h3",{style:{fontFamily:"'Bebas Neue','Impact',sans-serif",fontSize:"clamp(24px,2.8vw,40px)",color:"#adfa3b",WebkitTextStroke:"1.5px white",letterSpacing:"0.04em",lineHeight:.95,margin:"0 0 12px"},className:"group-hover:text-[#adfa3b] transition-colors",children:r.title}),e.jsx("p",{className:"text-white/80 text-lg sm:text-xl leading-relaxed mb-6 font-medium",children:r.desc})]})},c))}),e.jsxs("div",{className:"rounded-[32px] border border-dashed border-[#adfa3b]/20 bg-gradient-to-r from-[#0d1c07]/50 to-[#020502]/50 p-8 sm:p-12 backdrop-blur-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left",children:[e.jsx("div",{className:"absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(173,250,59,0.04)_0%,transparent_70%)] pointer-events-none"}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("span",{className:"text-[10px] font-mono font-black tracking-[0.2em] text-[#adfa3b] uppercase mb-2 block font-bold",children:"STREET DOMINANCE"}),e.jsx("h3",{style:{fontFamily:"'Bebas Neue','Impact',sans-serif",fontSize:"clamp(24px,2.8vw,40px)",color:"#adfa3b",WebkitTextStroke:"1.5px white",letterSpacing:"0.04em",lineHeight:.95,margin:"0 0 12px"},children:"Real-world authority that works 24/7."}),e.jsx("p",{className:"text-white/60 text-sm max-w-lg leading-relaxed",children:"Unlike digital ads that scroll away in milliseconds, physical placements anchor your brand in the geographic memory of your target customers."})]}),e.jsx("div",{className:"flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-10 flex-shrink-0",children:e.jsx("a",{href:"/#projects",className:"rounded-full px-8 py-3.5 font-['Montserrat'] text-xs font-bold uppercase tracking-[0.08em] text-center text-black transition-all duration-200",style:{background:"#adfa3b",display:"inline-block",textDecoration:"none"},onMouseEnter:r=>{r.currentTarget.style.background="#7c3aed",r.currentTarget.style.color="#ffffff"},onMouseLeave:r=>{r.currentTarget.style.background="#adfa3b",r.currentTarget.style.color="#000000"},children:"Know More"})})]})]})]})};function D(){const l=s.useRef(null),r=s.useRef([]),c=s.useRef(null),[p,x]=s.useState(0),[y,m]=s.useState(0);return s.useEffect(()=>{const a=setInterval(()=>{x(t=>(t+1)%k.length)},4e3);return()=>clearInterval(a)},[]),s.useEffect(()=>{const a=k[p].gainedNum,t=Math.floor(a*.85);m(t);let i=t;const n=Math.ceil((a-t)/30),o=setInterval(()=>{i+=n,i>=a?(m(a),clearInterval(o)):m(i)},20);return()=>clearInterval(o)},[p]),s.useEffect(()=>{const a=c.current;if(!a)return;const t=a.getContext("2d");let i,n=0;const o=()=>{a.width=a.offsetWidth,a.height=a.offsetHeight};o(),window.addEventListener("resize",o);const h=[{x:.12,y:.35,r:.42,color:"rgba(80,20,140,0.6)",speed:7e-4},{x:.82,y:.62,r:.36,color:"rgba(50,10,100,0.55)",speed:5e-4}],f=()=>{n+=1;const b=a.width,j=a.height;t.clearRect(0,0,b,j),h.forEach((d,N)=>{const u=(d.x+Math.sin(n*d.speed+N*1.5)*.1)*b,v=(d.y+Math.cos(n*d.speed+N*2.1)*.08)*j,w=t.createRadialGradient(u,v,0,u,v,d.r*b);w.addColorStop(0,d.color),w.addColorStop(1,"transparent"),t.fillStyle=w,t.beginPath(),t.arc(u,v,d.r*b,0,Math.PI*2),t.fill()}),i=requestAnimationFrame(f)};return f(),()=>{cancelAnimationFrame(i),window.removeEventListener("resize",o)}},[]),s.useEffect(()=>{const a=r.current.map((t,i)=>{if(!t)return null;const n=new IntersectionObserver(([o])=>{o.isIntersecting&&(setTimeout(()=>t.classList.add("row-visible"),i*140),n.disconnect())},{threshold:.1});return n.observe(t),n});return()=>a.forEach(t=>t&&t.disconnect())},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:A}),e.jsx("style",{children:R}),e.jsx("style",{children:T}),e.jsx("section",{className:"page-banner-section",ref:l,children:e.jsxs("div",{className:"coded-page-banner",children:[e.jsx("div",{className:"coded-page-banner-grid"}),e.jsx("div",{className:"coded-page-banner-purple-glow"}),e.jsx("div",{className:"coded-page-banner-green-glow"}),e.jsx(C,{}),e.jsx("div",{className:"coded-page-banner-particles",children:Array.from({length:15}).map((a,t)=>{const i=`${Math.random()*100}%`,n=`${Math.random()*100}%`,o=`${Math.random()*3+1.5}px`,h=`${Math.random()*-20}s`,f=`${Math.random()*10+15}s`;return e.jsx("div",{className:"coded-banner-particle",style:{left:i,top:n,width:o,height:o,animationDelay:h,animationDuration:f}},t)})}),e.jsx("div",{className:"flex flex-col md:flex-row items-center justify-center w-full max-w-[1200px] gap-8 px-6 z-10 text-center relative",children:e.jsxs("div",{className:"flex flex-col items-center text-center relative z-10 max-w-[800px]",children:[e.jsx("div",{className:"coded-page-banner-badge",children:g.badge}),e.jsx("h1",{className:"coded-page-banner-title text-center skew-x-[-4deg] mb-4",style:{letterSpacing:"-0.03em"},children:e.jsx(S,{label:`${g.title} ${g.accentTitle}`,fromFontVariationSettings:"'wght' 400, 'opsz' 9",toFontVariationSettings:"'wght' 1000, 'opsz' 40",containerRef:l,radius:100,falloff:"linear"})}),e.jsx("div",{className:"h-[2px] w-24 bg-[#adfa3b] my-4 rounded-full"}),e.jsx("p",{className:"coded-page-banner-subtitle text-center max-w-[650px]",children:g.subtitle})]})})]})}),e.jsx(E,{}),e.jsx(F,{}),e.jsxs("section",{className:"svc-section",children:[e.jsx("div",{className:"svc-dotgrid-panel"}),e.jsx("div",{className:"svc-tablet svc-tablet-1"}),e.jsx("div",{className:"svc-tablet svc-tablet-2"}),e.jsxs("div",{className:"svc-inner",children:[e.jsxs("div",{className:"svc-left",children:[e.jsx("h2",{className:"buzziwah-section-heading",children:"What's Included"}),e.jsx("div",{className:"svc-grid",children:M.map((a,t)=>e.jsxs("div",{className:"svc-card",children:[e.jsx("p",{className:"svc-card-title",children:a.title}),e.jsx("p",{className:"svc-card-body",children:a.body})]},t))})]}),e.jsx("div",{className:"svc-right",children:e.jsxs("div",{className:"outdoor-city-grid",children:[e.jsx("div",{className:"outdoor-laser-beam"}),e.jsx("div",{className:"outdoor-laser-beam-2"}),e.jsx("div",{className:"absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-t from-black/80 via-black/20 to-black/80 z-10",children:e.jsxs("div",{className:"px-6 py-12 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md max-w-sm",children:[e.jsx("span",{className:"text-[10px] font-mono tracking-[0.25em] text-[#adfa3b] font-black uppercase mb-3 block",children:"BUZZIWAH IMPACT"}),e.jsx("h3",{style:{fontFamily:"'Bebas Neue','Impact',sans-serif",fontSize:"clamp(24px,2.8vw,40px)",color:"#adfa3b",WebkitTextStroke:"1.5px white",letterSpacing:"0.04em",lineHeight:.95,margin:"0 0 12px"},children:"MASSIVE REAL-WORLD AUDIENCE REACH"}),e.jsx("div",{className:"w-16 h-[2px] bg-[#adfa3b] mx-auto my-4"}),e.jsx("p",{className:"text-white/60 text-xs leading-relaxed",children:"We secure optimal visual sights, structural coordinates, and locations that capture high-intent buyers in the physical flow of daily life."})]})})]})})]})]}),e.jsx(O,{}),e.jsxs("section",{className:"seo-wrap",children:[e.jsx("canvas",{ref:c,className:"seo-canvas"}),e.jsxs("div",{className:"seo-inner-process",children:[e.jsxs("div",{className:"seo-head",children:[e.jsx("h2",{className:"buzziwah-section-heading",children:"How we launch Outdoor campaigns"}),e.jsx("p",{className:"seo-subtitle",children:"End-to-end management, absolute precision execution."})]}),e.jsx("div",{className:"seo-rows",children:B.map((a,t)=>e.jsxs("div",{className:"seo-row",ref:i=>r.current[t]=i,children:[e.jsx("span",{className:"seo-num",children:a.number}),e.jsx("span",{className:"seo-name",children:a.title}),e.jsx("p",{className:"seo-desc-v2",children:a.description})]},t))})]})]})]})}export{D as default};
