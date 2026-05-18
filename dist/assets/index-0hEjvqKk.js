import{r as d,j as e}from"./animation-vendor-2OyP_18a.js";import{V as y}from"./VariableProximity-HzNwaBXZ.js";import{s as k}from"./servicesData-CBjG5fGf.js";const N=(s,i=1800)=>{const[o,t]=d.useState(0),[a,l]=d.useState(!1),n=d.useRef(null);return d.useEffect(()=>{const r=n.current;if(!r)return;const c=new IntersectionObserver(([p])=>{p.isIntersecting&&(l(!0),c.disconnect())},{threshold:.3});return c.observe(r),()=>c.disconnect()},[]),d.useEffect(()=>{if(!a)return;let r;const c=p=>{r||(r=p);const x=Math.min((p-r)/i,1),m=1-Math.pow(1-x,3);t(Math.floor(s*m)),x<1&&requestAnimationFrame(c)};requestAnimationFrame(c)},[a,s,i]),[n,o]},j=()=>{const s=[{end:1200,suffix:"+",label:"Keywords in Top 3"},{end:4,suffix:".2M+",label:"Monthly Impressions"},{end:145,suffix:"K+",label:"Organic Clicks/mo"},{end:97,suffix:"%",label:"Client Satisfaction"},{end:3,suffix:"x",label:"Traffic Increase"}];return e.jsxs("div",{style:{background:"#060811",borderTop:"1px solid rgba(173,250,59,0.18)",borderBottom:"1px solid rgba(173,250,59,0.18)",padding:"22px 5%",overflow:"hidden",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(90deg, rgba(124,58,237,0.06) 0%, rgba(173,250,59,0.04) 50%, rgba(124,58,237,0.06) 100%)",pointerEvents:"none"}}),e.jsx("div",{style:{display:"flex",gap:"clamp(24px,4vw,60px)",justifyContent:"center",flexWrap:"wrap",maxWidth:"1100px",margin:"0 auto",position:"relative",zIndex:1},children:s.map((i,o)=>{const[t,a]=N(i.end,1600+o*200);return e.jsxs("div",{ref:t,style:{textAlign:"center",minWidth:"90px"},children:[e.jsxs("div",{style:{fontFamily:"'Bebas Neue',Impact,sans-serif",fontSize:"clamp(26px,3.5vw,44px)",color:"#adfa3b",letterSpacing:"0.03em",lineHeight:1,textShadow:"0 0 20px rgba(173,250,59,0.3)"},children:[a,i.suffix]}),e.jsx("div",{style:{fontSize:"10px",color:"rgba(255,255,255,0.45)",textTransform:"uppercase",letterSpacing:"0.18em",marginTop:"4px",fontWeight:600},children:i.label})]},o)})})]})},S=()=>{const s=[{label:"#1 RANK",color:"#adfa3b",textColor:"#060811",x:"4%",y:"18%",rot:"-8deg",delay:"0s",dur:"7s"},{label:"↑ SEO",color:"rgba(124,58,237,0.85)",textColor:"#fff",x:"88%",y:"25%",rot:"6deg",delay:"1.5s",dur:"9s"},{label:"🔍 ORGANIC",color:"rgba(255,255,255,0.07)",textColor:"#adfa3b",x:"6%",y:"68%",rot:"5deg",delay:"0.8s",dur:"8s"},{label:"PAGE 1",color:"rgba(173,250,59,0.12)",textColor:"#adfa3b",x:"84%",y:"72%",rot:"-5deg",delay:"2s",dur:"10s"}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:"@keyframes seoFloat{0%,100%{transform:translateY(0)rotate(var(--rot));}50%{transform:translateY(-14px)rotate(var(--rot));}}"}),s.map((i,o)=>e.jsx("div",{style:{position:"absolute",left:i.x,top:i.y,background:i.color,color:i.textColor,fontFamily:"'Bebas Neue',Impact,sans-serif",fontSize:"11px",letterSpacing:"0.18em",padding:"5px 12px",borderRadius:"6px",border:`1px solid ${i.textColor==="#060811"?"transparent":"rgba(173,250,59,0.25)"}`,"--rot":i.rot,animation:`seoFloat ${i.dur} ease-in-out infinite`,animationDelay:i.delay,pointerEvents:"none",zIndex:1,whiteSpace:"nowrap",backdropFilter:"blur(8px)"},children:i.label},o))]})},h=k.seo,z=`
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
  .seo-inner{display:flex;align-items:center;gap:96px;max-width:1600px;width:100%;}
  .seo-img-col{position:relative;flex-shrink:0;width:630px;height:780px;}
  .seo-img-col img{width:100%;height:100%;object-fit:contain;object-position:center;display:block;}
  .seo-content-col{flex:1;display:flex;flex-direction:column;}
  .seo-pill{display:inline-flex;align-items:center;gap:12px;background:#f3e8ff;border:1.5px solid #c084fc;border-radius:999px;padding:9px 24px;width:fit-content;margin-bottom:33px;}
  .seo-pill-dot{width:13px;height:13px;border-radius:50%;background:#6d28d9;flex-shrink:0;}
  .seo-pill-text{font-size:16px;font-weight:700;letter-spacing:1.5px;color:#4b5563;text-transform:uppercase;}
  .seo-headline{font-size:32px;font-weight:800;line-height:1.45;color:#111827;text-transform:uppercase;letter-spacing:.2px;margin:0 0 27px;}
  .seo-purple{color:#7c3aed;}
  .seo-amber{color:#b45309;}
  .seo-body{font-size:22px;line-height:1.8;color:#374151;text-align:justify;margin:0 0 33px;max-width:645px;}
  .seo-why-title{font-size:30px;font-weight:700;color:#111827;margin:0 0 12px;}
  .seo-why-body{font-size:22px;line-height:1.7;color:#374151;margin:0 0 42px;}
  .seo-link-purple{color:#7c3aed;text-decoration:none;font-weight:500;}
  .seo-link-ul{color:#374151;text-decoration:underline;text-decoration-color:#9ca3af;}
  .seo-cta{display:flex;gap:21px;flex-wrap:wrap;}
  .seo-btn{padding:19px 51px;border-radius:999px;font-size:19px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;cursor:pointer;border:2px solid #7c3aed;transition:background .18s ease,color .18s ease;}
  .seo-btn-primary{background:#7c3aed;color:#fff;}
  .seo-btn-primary:hover{background:#6d28d9;border-color:#6d28d9;}
  .seo-btn-outline{background:transparent;color:#111827;}
  .seo-btn-outline:hover{background:#f3e8ff;}
  @media(max-width:1200px){
    .seo-section{padding:132px 48px 56px !important; min-height: auto;}
    .seo-inner{gap:60px;}
    .seo-img-col{width:400px;height:500px;}
    .seo-headline{font-size:26px;}
    .seo-body{font-size:18px;}
    .seo-why-title{font-size:24px;}
    .seo-why-body{font-size:18px;}
    .seo-btn{font-size:15px;padding:16px 40px;}
  }
  @media(max-width:960px){
    .seo-section{padding:124px 24px 48px !important;}
    .seo-inner{flex-direction:column !important; gap:36px; text-align:center; align-items:center;}
    .seo-content-col{align-items:center; text-align:center;}
    .seo-img-col{width:100%; max-width:440px; height:auto; aspect-ratio:4/5;}
    .seo-headline{font-size:24px; text-align:center;}
    .seo-body{font-size:16px; text-align:center; max-width:100%;}
    .seo-why-title{font-size:20px; text-align:center;}
    .seo-why-body{font-size:16px; text-align:center; max-width:100%;}
    .seo-pill{margin-left:auto; margin-right:auto;}
    .seo-cta{justify-content:center;}
  }
  @media(max-width:640px){
    .seo-section{padding:108px 16px 32px !important;}
    .seo-inner{gap:28px;}
    .seo-img-col{max-width:320px;}
    .seo-headline{font-size:20px;}
    .seo-body, .seo-why-body{font-size:15px;}
    .seo-why-title{font-size:18px;}
    .seo-btn{font-size:14px; padding:12px 28px; width:100%; text-align:center;}
    .seo-cta{flex-direction:column; width:100%; gap:12px;}
  }
`,E=`
  @keyframes glassShimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
  @keyframes glowPulse { 0%,100% { box-shadow: 0 0 0 0 rgba(124,58,237,0); } 50% { box-shadow: 0 0 28px 6px rgba(124,58,237,0.22); } }
  @keyframes tabletFloat1 { 0% { transform: translateY(0px) rotate(-6deg) scale(1); } 33% { transform: translateY(-28px) rotate(-3deg) scale(1.02); } 66% { transform: translateY(-14px) rotate(-8deg) scale(0.98); } 100% { transform: translateY(0px) rotate(-6deg) scale(1); } }
  @keyframes tabletFloat2 { 0% { transform: translateY(0px) rotate(10deg) scale(1); } 40% { transform: translateY(-22px) rotate(13deg) scale(1.03); } 80% { transform: translateY(-8px) rotate(7deg) scale(0.97); } 100% { transform: translateY(0px) rotate(10deg) scale(1); } }
  @keyframes tabletFloat3 { 0% { transform: translateY(0px) rotate(-14deg) scale(1); } 50% { transform: translateY(-35px) rotate(-10deg) scale(1.04); } 100% { transform: translateY(0px) rotate(-14deg) scale(1); } }
  @keyframes tabletFloat4 { 0% { transform: translateY(0px) rotate(4deg) scale(1); } 45% { transform: translateY(-20px) rotate(7deg) scale(1.02); } 100% { transform: translateY(0px) rotate(4deg) scale(1); } }
  @keyframes tabletFloat5 { 0% { transform: translateY(0px) rotate(-20deg) scale(1); } 55% { transform: translateY(-18px) rotate(-16deg) scale(1.03); } 100% { transform: translateY(0px) rotate(-20deg) scale(1); } }

  .svc-section { background: linear-gradient(135deg, #0d0d1a 0%, #150d2e 50%, #0d0d1a 100%); width: 100%; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 80px 5%; font-family: 'DM Sans','Segoe UI',sans-serif; position: relative; overflow: hidden; }
  .svc-dotgrid-panel { position:absolute;top:0;right:0;width:50%;height:100%;background-image:radial-gradient(circle,rgba(180,255,0,0.10) 1px,transparent 1px);background-size:18px 18px;pointer-events:none;z-index:0; }
  .svc-tablet { position:absolute;border-radius:18px;pointer-events:none;z-index:0; }
  .svc-tablet-1 { width:110px;height:155px;top:6%;left:3%;background:rgba(124,58,237,0.12);border:1px solid rgba(124,58,237,0.25);backdrop-filter:blur(6px);animation:tabletFloat1 9s ease-in-out infinite; }
  .svc-tablet-2 { width:80px;height:115px;top:18%;left:28%;background:rgba(200,255,0,0.06);border:1px solid rgba(200,255,0,0.18);backdrop-filter:blur(4px);animation:tabletFloat2 12s ease-in-out infinite;animation-delay:-4s; }
  .svc-tablet-3 { width:130px;height:90px;bottom:12%;left:8%;background:rgba(124,58,237,0.09);border:1px solid rgba(124,58,237,0.20);backdrop-filter:blur(5px);animation:tabletFloat3 10s ease-in-out infinite;animation-delay:-2s; }
  .svc-tablet-4 { width:70px;height:100px;bottom:28%;right:6%;background:rgba(200,255,0,0.07);border:1px solid rgba(200,255,0,0.15);backdrop-filter:blur(4px);animation:tabletFloat4 14s ease-in-out infinite;animation-delay:-7s; }
  .svc-tablet-5 { width:95px;height:135px;top:55%;left:18%;background:rgba(124,58,237,0.08);border:1px solid rgba(124,58,237,0.18);backdrop-filter:blur(4px);animation:tabletFloat5 11s ease-in-out infinite;animation-delay:-5s; }
  .svc-tablet-6 { width:60px;height:85px;top:8%;right:22%;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);backdrop-filter:blur(3px);animation:tabletFloat2 16s ease-in-out infinite;animation-delay:-9s; }
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
  .svc-card-body { font-size:19px;color:rgba(255,255,255,0.58);line-height:1.65;margin:0; }
  .svc-right { flex:1 1 0;min-width:0;max-width:570px;height:840px;display:flex;align-items:center;justify-content:center; }
  .svc-right img { width:100%;height:100%;object-fit:contain;object-position:center;display:block; }
  @media(max-width:1200px){ .svc-right{max-width:420px;height:630px;} }
  @media(max-width:1024px){ .svc-inner{gap:36px;}.svc-right{max-width:300px;height:480px;}.svc-title{font-size:36px;}.svc-card-title{font-size:18px;}.svc-card-body{font-size:15px;}.svc-card{padding:24px 20px 26px;} }
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
`,I=`
  @keyframes shimmerSweep { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
  .seo-section4 { padding: 80px 5%; background: linear-gradient(135deg, #000000 0%, #0d0020 40%, #150d2e 70%, #0a1a00 100%); font-family: 'DM Sans','Segoe UI',sans-serif; }
  .seo-section-title { text-align: center; font-family: 'Syne','Segoe UI',sans-serif; font-size: 2.2rem; font-weight: 800; color: #83cd15; margin-bottom: 48px; }
  .seo-services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 1200px; margin: 0 auto; }
  .seo-services-last-row { display: flex; justify-content: center; gap: 24px; max-width: 1200px; margin: 24px auto 0; }
  .seo-services-last-row .seo-service-container { flex: 0 0 calc(33.333% - 16px); max-width: calc(33.333% - 16px); }
  .seo-service-container { cursor: pointer; }
  .seo-service-card { position: relative; background: #6D28D9; border-radius: 12px; padding: 25px; overflow: hidden; border: 1px solid #333; min-height: 380px; transition: min-height 0.35s ease, border-color 0.3s ease, box-shadow 0.3s ease; }
  .seo-service-container:hover .seo-service-card { min-height: 480px; border-color: #83cd15; box-shadow: 0 0 40px rgba(131,205,21,0.18), 0 20px 50px rgba(0,0,0,0.4); }
  .seo-card-shimmer { position: absolute; inset: 0; background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.07) 50%, transparent 70%); background-size: 200% 100%; pointer-events: none; animation: shimmerSweep 1.8s linear infinite; }
  .seo-icon-container { position: absolute; top: 2px; left: 50%; transform: translateX(-50%); width: 220px; height: 220px; display: flex; align-items: center; justify-content: center; }
  .seo-icon-container img { width: 100%; height: auto; }
  .seo-service-content { margin-top: 230px; text-align: center; }
  .seo-service-title { color: white; font-size: 20px; font-weight: bold; margin-bottom: 12px; line-height: 1.2; transition: color 0.3s ease; }
  .seo-service-container:hover .seo-service-title { color: #83cd15; }
  .seo-service-desc { color: white; font-size: 14px; line-height: 1.6; opacity: 0; max-height: 0; overflow: hidden; transition: all 0.35s ease; }
  .seo-service-container:hover .seo-service-desc { opacity: 1; max-height: 200px; margin-top: 12px; }
  
  @media(max-width:1024px) {
    .seo-services-grid, .seo-services-last-row {
      grid-template-columns: 1fr 1fr !important;
      display: grid !important;
      gap: 24px !important;
      margin: 0 auto !important;
    }
    .seo-services-last-row {
      margin-top: 24px !important;
    }
    .seo-services-last-row .seo-service-container {
      max-width: 100% !important;
      width: 100% !important;
    }
    .seo-service-card {
      min-height: auto !important;
      height: auto !important;
      padding: 24px !important;
    }
    .seo-icon-container {
      position: relative !important;
      top: 0 !important;
      left: 0 !important;
      transform: none !important;
      width: 100px !important;
      height: 100px !important;
      margin: 0 auto 16px !important;
    }
    .seo-service-content {
      margin-top: 0 !important;
    }
    .seo-service-desc {
      opacity: 1 !important;
      max-height: none !important;
      overflow: visible !important;
      margin-top: 12px !important;
    }
    .seo-service-container:hover .seo-service-card {
      min-height: auto !important;
      transform: none !important;
      box-shadow: none !important;
    }
  }
  @media(max-width:600px) {
    .seo-services-grid, .seo-services-last-row {
      grid-template-columns: 1fr !important;
    }
    .seo-section-title {
      font-size: 1.6rem !important;
    }
  }
`,T=`
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&display=swap');
  .seo-wrap { position: relative; background: #090e14; min-height: auto; display: flex; align-items: center; justify-content: center; padding: 56px 48px 88px; box-sizing: border-box; overflow: hidden; font-family: 'Barlow', sans-serif; }
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
  .seo-num { font-family: 'Barlow', sans-serif; font-weight: 300; font-size: 14px; color: #414d5c; letter-spacing: 0.04em; padding-top: 3px; }
  .seo-name { font-family: 'Barlow', sans-serif; font-weight: 700; font-size: clamp(15px, 1.8vw, 21px); color: #b06aff; line-height: 1.3; letter-spacing: 0.01em; padding-top: 2px; }
  .seo-desc-v2 { font-family: 'Barlow', sans-serif; font-weight: 500; font-size: clamp(11px, 1vw, 13px); color: #a8b4c7; line-height: 1.95; letter-spacing: 0.09em; text-transform: uppercase; padding-top: 4px; }
  @media (max-width: 700px) { .seo-wrap { padding: 44px 24px 68px; } .seo-head { margin-bottom: 28px; } .seo-row { grid-template-columns: 44px 1fr; grid-template-rows: auto auto; gap: 6px 14px; padding: 24px 0; } .seo-num { grid-column:1; grid-row:1; } .seo-name { grid-column:2; grid-row:1; } .seo-desc-v2 { grid-column:1/-1; grid-row:2; } }
`,O=[{title:"Keyword Research & Strategy",body:"In-depth competitor analysis, precision keyword identification, and high-value target selection."},{title:"On-page SEO (content, meta, structure)",body:"Fully custom copywriting, optimized meta title structure, schema markup, and header tags."},{title:"Technical SEO (speed, indexing, fixes)",body:"Resolving duplicate content, canonical fixes, optimizing speed metrics, and crawl depth."},{title:"Website Optimization",body:"Comprehensive structural upgrades, semantic code refinements, and mobile responsive validation."},{title:"Content Optimization",body:"Fine-tuning page copy, strategic link density layout, and semantic content updates."},{title:"SEO for Blogs & Pages",body:"Structuring articles for rich snippets, long-tail keyword indexing, and visual link building."},{title:"Performance Tracking & Reporting",body:"Deep GSC audits, real-time rank tracking dashboards, and granular weekly insights."}],w=[{img:"https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-27.png",title:"Search-Ready Websites",desc:"Deep site health check, technical performance audit, site infrastructure review, and SEO foundations audit to ensure your website is built to rank."},{img:"https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-28.png",title:"Targeted Keyword Optimization",desc:"Competitor keyword insights, precision keyword research, hyperlocal keyword targeting, and keyword performance tracking for maximum reach."},{img:"https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-29.png",title:"On-Page SEO",desc:"Content built to rank, optimized meta titles and tags, smart site linking, and enhanced search appearance for every page."},{img:"https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-30.png",title:"Regional SEO Solutions",desc:"Google Business Profile enhancements, location-based directory linking, online reputation management, and geo-targeted listing management."},{img:"https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-31.png",title:"Backlink Strategy",desc:"Power domain links, content-driven outreach, trusted page links, and backlink gap analysis to build your domain authority."}],A=[{number:"01.",title:"In-Depth Search Audit",description:"WE SPECIALIZE IN CONDUCTING IN-DEPTH EVALUATIONS THAT HELP IDENTIFY CRITICAL SEARCH BOT BLOCKS, ANALYSE SEMANTIC CORRELATIONS, AND DEVELOP HIGH-VALUE TARGET KEYWORD STRATEGIES FOR STABLE GROWTH."},{number:"02.",title:"Action-Driven Strategy",description:"ALONG WITH CREATIVE CONTENT STRATEGIES, WE AT BUZZIWAH DELIVER AND EXECUTE COMPREHENSIVE ON-PAGE AND TECHNICAL SOLUTIONS THAT FIX ALL CRITICAL CRAWL ISSUES AND FUEL ORGANIC SEARCH VISIBILITY."},{number:"03.",title:"Continuous Enhancement",description:"THROUGH CONTINUOUS REAL-TIME TRACKING, INSIGHTFUL WEEKLY REPORTING, AND ONGOING STRATEGY REFINEMENTS, WE SECURE AND EXPAND YOUR ORGANIC SEARCH ENGINE DOMINANCE."}],C=()=>e.jsxs("section",{className:"relative overflow-hidden px-6 py-28 sm:px-10 lg:py-36",style:{background:"#05030a"},children:[e.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08)_0%,transparent_70%)] pointer-events-none"}),e.jsx("div",{className:"absolute right-[-10%] top-10 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(173,250,59,0.04)_0%,transparent_70%)] pointer-events-none animate-pulse"}),e.jsx("div",{className:"absolute inset-0 opacity-[0.015] pointer-events-none",style:{backgroundImage:"linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",backgroundSize:"60px 60px"}}),e.jsxs("div",{className:"relative z-10 mx-auto max-w-[1100px] text-center",children:[e.jsxs("div",{className:"inline-flex items-center gap-2.5 mb-8 px-4 py-1.5 bg-[#adfa3b]/10 border border-[#adfa3b]/20 rounded-full",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-[#adfa3b] animate-ping"}),e.jsx("span",{className:"text-[11px] font-mono font-black tracking-[0.25em] text-[#adfa3b] uppercase",children:"THE DISCOVERY SHIFT"})]}),e.jsxs("h2",{className:"buzziwah-section-heading",style:{WebkitTextStroke:"2px white",color:"#adfa3b"},children:["What is SEO ",e.jsx("span",{className:"text-[#adfa3b] italic",children:"today"}),"?"]}),e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsxs("p",{className:"font-['Montserrat'] text-[clamp(20px,2.8vw,36px)] font-light text-white/90 leading-[1.4] tracking-wide mb-6",children:['"SEO is how your brand gets ',e.jsx("span",{className:"text-[#adfa3b] font-black",children:"found"}),' without paying for every click."']}),e.jsx("p",{className:"font-sans text-[clamp(16px,1.8vw,21px)] text-white/50 leading-relaxed max-w-2xl mx-auto font-normal",children:"When someone searches, your brand should show up. That’s what SEO does."})]}),e.jsxs("div",{className:"mt-12 flex justify-center items-center gap-4",children:[e.jsx("div",{className:"w-12 h-[1px] bg-white/10"}),e.jsx("span",{className:"text-white/20 text-xs font-mono",children:"✦"}),e.jsx("div",{className:"w-12 h-[1px] bg-white/10"})]})]})]}),R=()=>{const s=[{title:"Increase Visibility",desc:"Climb to the top of Google page 1 to claim your authority and dominate your competitive space.",num:"01"},{title:"Bring In Organic Traffic",desc:"Funnel highly motivated, high-intent prospective buyers directly to your digital doors without ad fees.",num:"02"},{title:"Build Long-Term Credibility",desc:"Position your brand as the trusted industry leader—organic search ranking is the ultimate stamp of validation.",num:"03"}];return e.jsxs("section",{className:"relative overflow-hidden px-6 py-24 sm:px-10 lg:py-28",style:{background:"#070512"},children:[e.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.04)_0%,transparent_70%)] pointer-events-none"}),e.jsx("div",{className:"absolute left-[-5%] bottom-10 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(173,250,59,0.03)_0%,transparent_70%)] pointer-events-none"}),e.jsxs("div",{className:"relative z-10 mx-auto max-w-[1200px]",children:[e.jsxs("div",{className:"mb-16 text-center",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#adfa3b]/10 border border-[#adfa3b]/20 rounded-full",children:[e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#adfa3b] animate-pulse"}),e.jsx("span",{className:"text-[10px] font-mono font-black tracking-widest text-[#adfa3b] uppercase",children:"THE IMPACT"})]}),e.jsxs("h2",{className:"buzziwah-section-heading",children:["Why it ",e.jsx("span",{className:"text-[#adfa3b] italic",children:"matters"}),"?"]}),e.jsx("p",{className:"max-w-2xl mx-auto text-[#adfa3b] text-lg sm:text-xl font-bold tracking-tight font-sans",children:'"Because if you’re not showing up, you’re missing out."'})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-16",children:s.map((i,o)=>e.jsx("div",{className:"rounded-[28px] border border-white/5 bg-gradient-to-b from-white/[0.015] to-white/[0.002] hover:border-white/10 hover:bg-white/[0.02] p-8 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-start mb-6",children:[e.jsx("span",{className:"text-[28px] font-mono font-black text-white/5",children:i.num}),e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#adfa3b]",style:{boxShadow:"0 0 10px #adfa3b"}})]}),e.jsx("h3",{style:{fontFamily:"'Bebas Neue','Impact',sans-serif",fontSize:"clamp(24px,2.8vw,40px)",color:"#adfa3b",WebkitTextStroke:"1.5px white",letterSpacing:"0.04em",lineHeight:.95,margin:"0 0 12px"},className:"group-hover:text-[#adfa3b] transition-colors",children:i.title}),e.jsx("p",{className:"text-white/60 text-sm leading-relaxed mb-6 font-normal",children:i.desc})]})},o))}),e.jsxs("div",{className:"rounded-[32px] border border-dashed border-[#adfa3b]/20 bg-gradient-to-r from-[#0d1c07]/50 to-[#020502]/50 p-8 sm:p-12 backdrop-blur-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left",children:[e.jsx("div",{className:"absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(173,250,59,0.04)_0%,transparent_70%)] pointer-events-none"}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("span",{className:"text-[10px] font-mono font-black tracking-[0.2em] text-[#adfa3b] uppercase mb-2 block font-bold",children:"SUSTAINABLE MOMENTUM"}),e.jsx("h3",{className:"buzziwah-section-heading",style:{fontSize:"clamp(28px,3.5vw,48px)"},children:"And unlike ads—it keeps working over time."}),e.jsx("p",{className:"text-white/60 text-sm max-w-lg leading-relaxed",children:"Paid ads stop delivering the second your budget hits zero. Organic search authority delivers compounding dividends forever."})]}),e.jsx("div",{className:"flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-10 flex-shrink-0",children:e.jsx("a",{href:"/#projects",className:"rounded-full px-8 py-3.5 font-['Montserrat'] text-xs font-bold uppercase tracking-[0.08em] text-center text-black transition-all duration-200",style:{background:"#adfa3b",display:"inline-block",textDecoration:"none"},onMouseEnter:i=>{i.currentTarget.style.background="#7c3aed",i.currentTarget.style.color="#ffffff"},onMouseLeave:i=>{i.currentTarget.style.background="#adfa3b",i.currentTarget.style.color="#000000"},children:"Know More"})})]})]})]})};function B(){const s=d.useRef(null),i=d.useRef([]),o=d.useRef(null);return d.useEffect(()=>{const t=o.current;if(!t)return;const a=t.getContext("2d");let l,n=0;const r=()=>{t.width=t.offsetWidth,t.height=t.offsetHeight};r(),window.addEventListener("resize",r);const c=[{x:.12,y:.35,r:.42,color:"rgba(80,20,140,0.6)",speed:7e-4},{x:.82,y:.62,r:.36,color:"rgba(50,10,100,0.55)",speed:5e-4},{x:.5,y:.08,r:.3,color:"rgba(100,30,160,0.38)",speed:9e-4}],p=()=>{n+=1;const x=t.width,m=t.height;a.clearRect(0,0,x,m),c.forEach((g,v)=>{const f=(g.x+Math.sin(n*g.speed+v*1.5)*.1)*x,b=(g.y+Math.cos(n*g.speed+v*2.1)*.08)*m,u=a.createRadialGradient(f,b,0,f,b,g.r*x);u.addColorStop(0,g.color),u.addColorStop(1,"transparent"),a.fillStyle=u,a.beginPath(),a.arc(f,b,g.r*x,0,Math.PI*2),a.fill()}),l=requestAnimationFrame(p)};return p(),()=>{cancelAnimationFrame(l),window.removeEventListener("resize",r)}},[]),d.useEffect(()=>{const t=i.current.map((a,l)=>{if(!a)return null;const n=new IntersectionObserver(([r])=>{r.isIntersecting&&(setTimeout(()=>a.classList.add("row-visible"),l*140),n.disconnect())},{threshold:.1});return n.observe(a),n});return()=>t.forEach(a=>a&&a.disconnect())},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:z}),e.jsx("style",{children:E}),e.jsx("style",{children:I}),e.jsx("style",{children:T}),e.jsx("section",{className:"page-banner-section",ref:s,children:e.jsxs("div",{className:"coded-page-banner",children:[e.jsx("div",{className:"coded-page-banner-grid"}),e.jsx("div",{className:"coded-page-banner-purple-glow"}),e.jsx("div",{className:"coded-page-banner-green-glow"}),e.jsx("div",{className:"coded-page-banner-particles",children:Array.from({length:15}).map((t,a)=>{const l=`${Math.random()*100}%`,n=`${Math.random()*100}%`,r=`${Math.random()*3+1.5}px`,c=`${Math.random()*-20}s`,p=`${Math.random()*10+15}s`;return e.jsx("div",{className:"coded-banner-particle",style:{left:l,top:n,width:r,height:r,animationDelay:c,animationDuration:p}},a)})}),e.jsx(S,{}),e.jsxs("div",{className:"flex flex-col items-center justify-center w-full max-w-[900px] gap-6 px-6 z-10 text-center relative",children:[e.jsx("div",{className:"absolute left-[-100px] top-[-50px] w-[500px] h-[1px] bg-[#adfa3b]/20 rotate-[-12deg] pointer-events-none"}),e.jsx("div",{className:"absolute right-[-100px] bottom-[-50px] w-[500px] h-[1px] bg-purple-500/10 rotate-[-12deg] pointer-events-none"}),e.jsxs("div",{className:"flex flex-col items-center text-center relative z-10",children:[e.jsx("div",{className:"coded-page-banner-badge",children:h.badge}),e.jsx("h1",{className:"coded-page-banner-title text-center skew-x-[-4deg] mb-4",style:{letterSpacing:"-0.03em"},children:e.jsx(y,{label:`${h.title} ${h.accentTitle}`,fromFontVariationSettings:"'wght' 400, 'opsz' 9",toFontVariationSettings:"'wght' 1000, 'opsz' 40",containerRef:s,radius:100,falloff:"linear"})}),e.jsx("div",{className:"h-[2px] w-24 bg-[#adfa3b] my-4 rounded-full"}),e.jsx("p",{className:"coded-page-banner-subtitle text-center max-w-[650px] mx-auto",children:h.subtitle})]})]})]})}),e.jsx(j,{}),e.jsxs("section",{className:"relative z-[1] px-5 pb-24 pt-16 sm:px-10 overflow-hidden",style:{background:"linear-gradient(145deg, #070312 0%, #120524 50%, #070312 100%)",borderBottom:"1px solid rgba(255, 255, 255, 0.03)"},children:[e.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-40",style:{backgroundImage:"radial-gradient(circle at 50% 50%, rgba(173, 250, 59, 0.05) 0%, transparent 50%), linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px)",backgroundSize:"100%, 40px 40px, 40px 40px"}}),e.jsx("div",{className:"relative z-[1] mx-auto max-w-[1200px]",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full",children:[e.jsxs("div",{className:"lg:col-span-2 p-8 sm:p-10 rounded-[32px] bg-white/[0.015] border border-white/5 flex flex-col justify-between items-start min-h-[280px]",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"buzziwah-section-heading",style:{fontSize:"clamp(20px,2.2vw,34px)"},children:"Unlocking Organic Authority"}),e.jsx("p",{className:"text-[16px] text-white/75 leading-relaxed max-w-[640px]",children:"We scale organic clicks and establish absolute dominance over Google search results. Driving high-quality customer traffic that keeps growing even when your ad budget stops."})]}),e.jsx("div",{className:"mt-8",children:e.jsx("a",{href:"http://linkedin.com/in/satish-ms-b7842a8b",target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 rounded-full px-7 py-3 font-['Montserrat'] text-xs font-bold uppercase tracking-[0.08em] text-white border-2 border-transparent transition-all duration-200 hover:text-[#07030f]",style:{background:"linear-gradient(135deg,#7c3aed,#9333ea)",transition:"background 0.2s, color 0.2s, border-color 0.2s"},onMouseEnter:t=>{t.currentTarget.style.background="#ffffff",t.currentTarget.style.color="#07030f"},onMouseLeave:t=>{t.currentTarget.style.background="linear-gradient(135deg,#7c3aed,#9333ea)",t.currentTarget.style.color="#ffffff"},children:"Know More"})})]}),e.jsxs("div",{className:"rounded-[32px] bg-white/[0.015] border border-white/5 relative overflow-hidden group min-h-[280px] p-0 flex",children:[e.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0%,transparent_70%)] opacity-30 group-hover:opacity-60 transition-opacity duration-500 z-10 pointer-events-none"}),e.jsx("img",{src:"/seo/seo_dashboard.png",alt:"SEO Dashboard Statistics",className:"absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105"})]}),[{num:"01",text:"More than 1,200+ target keywords secured in Google top #3 search results for compounding domain value."},{num:"02",text:"Delivering massive organic reach: averaging over 4.2M+ organic impressions and 145K+ organic clicks monthly."},{num:"03",text:"Crafted high-authority rank strategies and technical audits for Shield Security, Omni Travel, and Cloud Storage."},{num:"04",text:"Local Map Pack dominance and semantic core directories that increase direct customer bookings by up to 3x."}].map((t,a)=>e.jsxs("div",{className:"p-8 rounded-[24px] bg-white/[0.012] border border-white/5 hover:border-[#adfa3b]/20 hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between min-h-[180px]",children:[e.jsx("span",{className:"text-2xl font-black text-white/10 font-mono",children:t.num}),e.jsx("p",{className:"text-[14px] text-white/70 font-medium leading-relaxed mt-4",children:t.text})]},a))]})})]}),e.jsx(C,{}),e.jsxs("section",{className:"svc-section",children:[e.jsx("div",{className:"svc-dotgrid-panel"}),e.jsx("div",{className:"svc-tablet svc-tablet-1"}),e.jsx("div",{className:"svc-tablet svc-tablet-2"}),e.jsx("div",{className:"svc-tablet svc-tablet-3"}),e.jsx("div",{className:"svc-tablet svc-tablet-4"}),e.jsx("div",{className:"svc-tablet svc-tablet-5"}),e.jsx("div",{className:"svc-tablet svc-tablet-6"}),e.jsxs("div",{className:"svc-inner",children:[e.jsxs("div",{className:"svc-left",children:[e.jsx("h2",{className:"buzziwah-section-heading",children:"SEO in Action"}),e.jsx("div",{className:"svc-grid",children:O.map((t,a)=>e.jsxs("div",{className:"svc-card",children:[e.jsx("p",{className:"svc-card-title",children:t.title}),e.jsx("p",{className:"svc-card-body",children:t.body})]},a))})]}),e.jsx("div",{className:"svc-right",children:e.jsx("img",{src:"/seo/Buzziwah SEO page.png",alt:"Buzziwah SEO Services"})})]})]}),e.jsxs("section",{className:"seo-section4",children:[e.jsx("h2",{className:"buzziwah-section-heading",style:{textAlign:"center",marginBottom:"32px"},children:"Our SEO services that drive Success"}),e.jsx("div",{className:"seo-services-grid",children:w.slice(0,3).map((t,a)=>e.jsx("div",{className:"seo-service-container",children:e.jsxs("div",{className:"seo-service-card",children:[e.jsx("div",{className:"seo-card-shimmer"}),e.jsx("div",{className:"seo-icon-container",children:e.jsx("img",{src:t.img,alt:t.title})}),e.jsxs("div",{className:"seo-service-content",children:[e.jsx("div",{className:"seo-service-title",children:t.title}),e.jsx("p",{className:"seo-service-desc",children:t.desc})]})]})},a))}),e.jsx("div",{className:"seo-services-last-row",children:w.slice(3).map((t,a)=>e.jsx("div",{className:"seo-service-container",children:e.jsxs("div",{className:"seo-service-card",children:[e.jsx("div",{className:"seo-card-shimmer"}),e.jsx("div",{className:"seo-icon-container",children:e.jsx("img",{src:t.img,alt:t.title})}),e.jsxs("div",{className:"seo-service-content",children:[e.jsx("div",{className:"seo-service-title",children:t.title}),e.jsx("p",{className:"seo-service-desc",children:t.desc})]})]})},a))})]}),e.jsx(R,{}),e.jsxs("section",{className:"seo-wrap",children:[e.jsx("canvas",{ref:o,className:"seo-canvas"}),e.jsxs("div",{className:"seo-inner-process",children:[e.jsxs("div",{className:"seo-head",children:[e.jsx("h2",{className:"buzziwah-section-heading",children:"How we make SEO work for you"}),e.jsx("p",{className:"seo-subtitle",children:"We don't follow trends. We set the standard."})]}),e.jsx("div",{className:"seo-rows",children:A.map((t,a)=>e.jsxs("div",{className:"seo-row",ref:l=>i.current[a]=l,children:[e.jsx("span",{className:"seo-num",children:t.number}),e.jsx("span",{className:"seo-name",children:t.title}),e.jsx("p",{className:"seo-desc-v2",children:t.description})]},a))})]})]})]})}export{B as default};
