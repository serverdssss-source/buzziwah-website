import{r as l,j as e}from"./animation-vendor-2OyP_18a.js";import{V as u}from"./VariableProximity-HzNwaBXZ.js";import b from"./PageEnding-Cn6f3uKC.js";/* empty css             */import{s as y}from"./servicesData-CBjG5fGf.js";import"./index-1a7gx43L.js";import"./iconBase-CdZbRleB.js";const h=(t=.15)=>{const r=l.useRef(null),[o,s]=l.useState(!1);return l.useEffect(()=>{const a=new IntersectionObserver(([i])=>{i.isIntersecting&&s(!0)},{threshold:t});return r.current&&a.observe(r.current),()=>a.disconnect()},[t]),[r,o]},g=[{num:"01",label:"Discovery & Vetting",color:"#a78bfa",icon:e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),bullets:["Find influencers aligned with your goals, audience & industry","Filter by niche, demographics, content type & aesthetic","Analyse engagement quality, past work, values & content style"]},{num:"02",label:"Campaign Strategy",color:"#a78bfa",icon:e.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})}),bullets:["Strategies built around your brand voice & business goals","Market research & trend analysis driven by real numbers","Creative campaign concepts that stop the scroll"]},{num:"03",label:"Content Management",color:"#83cd15",icon:e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"}),e.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"})]}),bullets:["End-to-end execution — trending, timely & accurate","Content calendar to plan & schedule across all platforms","Authentic creator-led storytelling that truly resonates"]},{num:"04",label:"Performance Tracking",color:"#83cd15",icon:e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),e.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),e.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"14"})]}),bullets:["Real-time monitoring across all platforms","Campaign summaries with clear ROI for every client","Deep-dive insights & actionable future recommendations"]}],v=()=>{const[t,r]=l.useState(0),[o,s]=h(.1),a=g[t];return e.jsxs("section",{ref:o,className:"im-process-section",style:{background:"#080808",padding:"96px 40px",position:"relative",overflow:"hidden",fontFamily:"'Montserrat', sans-serif"},children:[e.jsx("div",{style:{position:"absolute",inset:0,opacity:.04,backgroundImage:"linear-gradient(rgba(131,205,21,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(131,205,21,0.8) 1px, transparent 1px)",backgroundSize:"60px 60px",pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",top:"-200px",left:"10%",width:"600px",height:"600px",borderRadius:"50%",background:"radial-gradient(circle, rgba(91,33,182,0.18) 0%, transparent 70%)",pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",bottom:"-100px",right:"5%",width:"400px",height:"400px",borderRadius:"50%",background:"radial-gradient(circle, rgba(131,205,21,0.10) 0%, transparent 70%)",pointerEvents:"none"}}),e.jsxs("div",{style:{maxWidth:"1300px",margin:"0 auto",position:"relative",zIndex:1},children:[e.jsxs("div",{className:"im-process-header",style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"64px",flexWrap:"wrap",gap:"24px",opacity:s?1:0,transform:s?"translateY(0)":"translateY(30px)",transition:"opacity 0.7s ease, transform 0.7s ease"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",marginBottom:"16px",padding:"5px 14px",borderRadius:"100px",border:"1px solid rgba(131,205,21,0.3)",background:"rgba(131,205,21,0.06)"},children:[e.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#83cd15",boxShadow:"0 0 8px #83cd15"}}),e.jsx("span",{style:{fontSize:"11px",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"#83cd15"},children:"Our Process"})]}),e.jsxs("h2",{style:{fontFamily:"'Montserrat', sans-serif",fontSize:"clamp(38px, 5vw, 64px)",fontWeight:900,color:"#fff",lineHeight:1.04,letterSpacing:"-0.03em",margin:0},children:["Influencer",e.jsx("br",{}),e.jsx("em",{style:{color:"#83cd15",fontStyle:"italic"},children:"Marketing"})," Process"]})]}),e.jsx("p",{style:{maxWidth:"280px",fontSize:"15px",color:"rgba(255,255,255,0.55)",lineHeight:1.8,fontWeight:400,borderLeft:"2px solid rgba(131,205,21,0.4)",paddingLeft:"16px"},children:"A strategic, end-to-end framework connecting your brand with the right voices — turning them into measurable, lasting growth."})]}),e.jsx("div",{className:"im-process-buttons",style:{display:"flex",gap:"8px",marginBottom:"40px",flexWrap:"wrap",opacity:s?1:0,transform:s?"translateY(0)":"translateY(20px)",transition:"opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s"},children:g.map((i,n)=>e.jsxs("button",{onClick:()=>r(n),style:{display:"flex",alignItems:"center",gap:"10px",padding:"10px 20px",borderRadius:"100px",border:"none",cursor:"pointer",background:t===n?i.color:"rgba(255,255,255,0.05)",color:t===n?"#000":"rgba(255,255,255,0.55)",fontFamily:"'Montserrat', sans-serif",fontSize:"13px",fontWeight:700,letterSpacing:"0.05em",transition:"all 0.25s ease",transform:t===n?"scale(1.04)":"scale(1)"},children:[e.jsx("span",{style:{width:"22px",height:"22px",borderRadius:"50%",background:t===n?"rgba(0,0,0,0.2)":"rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",fontWeight:800},children:i.num}),i.label]},i.num))}),e.jsxs("div",{className:"im-process-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px",opacity:s?1:0,transform:s?"translateY(0)":"translateY(30px)",transition:"opacity 0.5s ease, transform 0.5s ease"},children:[e.jsxs("div",{className:"im-process-card",style:{background:"rgba(255,255,255,0.03)",border:`1px solid ${a.color}30`,borderRadius:"24px",padding:"44px",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"3px",background:`linear-gradient(90deg, transparent, ${a.color}, transparent)`}}),e.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"16px",background:`${a.color}18`,border:`1px solid ${a.color}40`,display:"flex",alignItems:"center",justifyContent:"center",color:a.color,marginBottom:"24px"},children:a.icon}),e.jsxs("div",{style:{fontSize:"11px",fontWeight:700,letterSpacing:"0.18em",textTransform:"uppercase",color:a.color,marginBottom:"8px"},children:["Step ",a.num]}),e.jsx("h3",{style:{fontFamily:"'Montserrat', sans-serif",fontSize:"32px",fontWeight:800,color:"#fff",lineHeight:1.2,marginBottom:"32px"},children:a.label}),e.jsx("div",{style:{height:"1px",background:`linear-gradient(90deg, ${a.color}50, transparent)`,marginBottom:"28px"}}),e.jsx("ul",{style:{listStyle:"none",margin:0,padding:0,display:"flex",flexDirection:"column",gap:"16px"},children:a.bullets.map((i,n)=>e.jsxs("li",{style:{display:"flex",gap:"14px",alignItems:"flex-start",fontSize:"15px",color:"#fff",lineHeight:1.65},children:[e.jsx("span",{style:{width:"20px",height:"20px",borderRadius:"6px",background:`${a.color}20`,border:`1px solid ${a.color}50`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:"2px"},children:e.jsx("span",{style:{fontSize:"10px",fontWeight:800,color:a.color},children:"✓"})}),i]},n))})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"20px",padding:"28px",display:"flex",flexDirection:"column",gap:"14px"},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,0.4)"},children:"Journey Progress"}),e.jsx("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:g.map((i,n)=>e.jsx("div",{onClick:()=>r(n),style:{flex:n===t?3:1,height:"6px",borderRadius:"100px",background:n<=t?i.color:"rgba(255,255,255,0.1)",transition:"all 0.4s ease",cursor:"pointer",boxShadow:n===t?`0 0 12px ${i.color}60`:"none"}},n))}),e.jsxs("div",{style:{fontSize:"14px",color:"rgba(255,255,255,0.5)"},children:["Step ",e.jsx("strong",{style:{color:"#fff"},children:t+1})," of ",e.jsx("strong",{style:{color:"#fff"},children:"4"})," — ",e.jsx("span",{style:{color:a.color},children:a.label})]})]}),e.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"20px",padding:"28px",flex:1},children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,0.4)",marginBottom:"20px"},children:"Pipeline Flow"}),e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:g.map((i,n)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",cursor:"pointer"},onClick:()=>r(n),children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"50%",background:n<=t?i.color:"rgba(255,255,255,0.08)",border:n===t?`2px solid ${i.color}`:"2px solid transparent",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",fontWeight:800,color:n<=t?"#000":"rgba(255,255,255,0.3)",boxShadow:n===t?`0 0 20px ${i.color}50`:"none",transition:"all 0.35s ease",flexShrink:0},children:i.num}),n<g.length-1&&e.jsx("div",{style:{width:"2px",height:"20px",background:n<t?"rgba(131,205,21,0.5)":"rgba(255,255,255,0.08)",transition:"background 0.35s ease"}})]}),e.jsx("span",{style:{fontSize:"14px",fontWeight:n===t?700:400,color:n===t?"#fff":"rgba(255,255,255,0.35)",transition:"all 0.3s ease",paddingBottom:n<g.length-1?"20px":"0"},children:i.label})]},n))})]})]})]}),e.jsxs("div",{className:"im-process-footer",style:{marginTop:"24px",background:"linear-gradient(135deg, rgba(91,33,182,0.4) 0%, rgba(131,205,21,0.15) 100%)",border:"1px solid rgba(131,205,21,0.2)",borderRadius:"20px",padding:"28px 36px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"20px",opacity:s?1:0,transform:s?"translateY(0)":"translateY(20px)",transition:"opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"12px",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"#83cd15",marginBottom:"6px"},children:"End-to-End. Always."}),e.jsx("div",{style:{fontSize:"22px",fontWeight:800,color:"#fff",fontFamily:"'Montserrat', sans-serif"},children:"From first search to final report — we own every step."})]}),e.jsx("div",{className:"im-process-footer-stats",style:{display:"flex",gap:"40px"},children:[["Discovery","01"],["Strategy","02"],["Content","03"],["Tracking","04"]].map(([i,n])=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"22px",fontWeight:900,color:"#83cd15",fontFamily:"'Montserrat', sans-serif"},children:n}),e.jsx("div",{style:{fontSize:"11px",color:"rgba(255,255,255,0.5)",letterSpacing:"0.08em",textTransform:"uppercase",fontWeight:600},children:i})]},n))})]})]}),e.jsx("style",{children:`
        @keyframes fadeSlideIn { 
          from { opacity: 0; transform: translateY(16px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        
        @media (max-width: 1024px) {
          .im-process-section {
            padding: 72px 20px !important;
          }
          
          .im-process-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .im-process-buttons {
            gap: 6px !important;
          }
          
          .im-process-buttons button {
            font-size: 11px !important;
            padding: 8px 14px !important;
          }
          
          .im-process-buttons button span {
            width: 18px !important;
            height: 18px !important;
            font-size: 9px !important;
          }
          
          .im-process-card {
            padding: 32px 24px !important;
          }
          
          .im-process-card h3 {
            font-size: 26px !important;
          }
          
          .im-process-footer {
            flex-direction: column !important;
            text-align: center !important;
            gap: 24px !important;
          }
          
          .im-process-footer-stats {
            justify-content: center !important;
          }
        }
        
        @media (max-width: 640px) {
          .im-process-section {
            padding: 56px 16px !important;
          }
          
          .im-process-header {
            margin-bottom: 40px !important;
          }
          
          .im-process-header h2 {
            font-size: clamp(32px, 9vw, 48px) !important;
          }
          
          .im-process-header p {
            max-width: 100% !important;
            border-left: none !important;
            padding-left: 0 !important;
            text-align: center !important;
          }
          
          .im-process-buttons {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          
          .im-process-buttons button {
            width: 100% !important;
            justify-content: flex-start !important;
          }
          
          .im-process-card {
            padding: 28px 20px !important;
          }
          
          .im-process-card h3 {
            font-size: 22px !important;
            padding-right: 0 !important;
          }
          
          .im-process-card ul li {
            font-size: 14px !important;
          }
          
          .im-process-footer-stats {
            flex-direction: column !important;
            gap: 16px !important;
          }
          
          .im-process-footer-stats > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.07) !important;
            padding: 16px 0 !important;
          }
          
          .im-process-footer-stats > div:last-child {
            border-bottom: none !important;
          }
        }
      `})]})},j=[{num:"1",title:"Strategic, Authentic, Results-Driven",body:"Hundreds of successful campaigns built on trust-driven storytelling. Our strategy-first approach makes every activation genuinely impactful — not just visible.",tag:"Brand Strategy",accent:"#a78bfa"},{num:"2",title:"Performance-Driven Campaigns",body:"We focus on outcomes — traffic, conversions, brand growth. Real-time optimisation and deep insights ensure every rupee delivers maximum ROI.",tag:"ROI Focused",accent:"#83cd15"},{num:"3",title:"Creative That Converts",body:"Personal, engaging creator stories crafted with a unique point of view. Every piece is designed to inspire action and deliver undeniable value.",tag:"Content First",accent:"#a78bfa"},{num:"4",title:"End-to-End Service",body:"From curating the perfect influencers to overseeing every detail of execution — we blend style and substance for campaigns that truly stand out.",tag:"Full Service",accent:"#83cd15"}],w=({item:t,delay:r})=>{const[o,s]=l.useState({x:0,y:0}),[a,i]=l.useState(!1),[n,p]=h(.2),x=d=>{const c=d.currentTarget.getBoundingClientRect();s({x:(d.clientY-c.top-c.height/2)/(c.height/2)*-8,y:(d.clientX-c.left-c.width/2)/(c.width/2)*8})};return e.jsx("div",{ref:n,onMouseMove:x,onMouseEnter:()=>i(!0),onMouseLeave:()=>{s({x:0,y:0}),i(!1)},style:{perspective:"1200px",opacity:p?1:0,transform:p?"translateY(0)":"translateY(40px)",transition:`opacity 0.6s ease ${r}s, transform 0.6s ease ${r}s`},children:e.jsxs("div",{style:{background:a?"linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))":"rgba(255,255,255,0.03)",border:`1px solid ${a?t.accent+"50":"rgba(255,255,255,0.08)"}`,borderRadius:"24px",padding:"36px",position:"relative",overflow:"hidden",transform:`perspective(1200px) rotateX(${o.x}deg) rotateY(${o.y}deg) scale(${a?1.02:1})`,transition:"transform 0.35s ease, border-color 0.3s ease, background 0.3s ease",cursor:"default",height:"100%",boxSizing:"border-box"},children:[e.jsx("div",{style:{position:"absolute",top:0,right:0,width:"120px",height:"120px",borderRadius:"0 24px 0 120px",background:`${t.accent}${a?"20":"0a"}`,transition:"background 0.35s ease",pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",top:0,left:"20%",right:"20%",height:"2px",background:`linear-gradient(90deg, transparent, ${t.accent}, transparent)`,opacity:a?1:.4,transition:"opacity 0.3s ease"}}),e.jsx("div",{style:{fontSize:"80px",fontWeight:900,fontFamily:"'Montserrat', sans-serif",color:`${t.accent}${a?"25":"15"}`,lineHeight:1,position:"absolute",top:"16px",right:"24px",userSelect:"none"},children:t.num}),e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"4px 12px",borderRadius:"100px",background:`${t.accent}15`,border:`1px solid ${t.accent}30`,marginBottom:"20px"},children:[e.jsx("div",{style:{width:"5px",height:"5px",borderRadius:"50%",background:t.accent}}),e.jsx("span",{style:{fontSize:"10px",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:t.accent},children:t.tag})]}),e.jsx("h3",{style:{fontFamily:"'Montserrat', sans-serif",fontSize:"15px",fontWeight:800,color:"#fff",lineHeight:1.3,marginBottom:"16px",paddingRight:"40px"},children:t.title}),e.jsx("p",{style:{fontSize:"14px",color:"#fff",lineHeight:1.75,margin:0,textAlign:"justify"},children:t.body})]})})},S=()=>{const[t,r]=h(.15);return e.jsxs("section",{style:{background:"#0a0a0a",padding:"96px 40px",position:"relative",overflow:"hidden",fontFamily:"'Montserrat', sans-serif"},children:[e.jsx("div",{style:{position:"absolute",inset:0,opacity:.025,backgroundImage:"repeating-linear-gradient(-45deg, #83cd15 0, #83cd15 1px, transparent 0, transparent 50%)",backgroundSize:"20px 20px",pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"900px",height:"500px",borderRadius:"50%",background:"radial-gradient(ellipse, rgba(91,33,182,0.12) 0%, transparent 70%)",pointerEvents:"none"}}),e.jsxs("div",{style:{maxWidth:"1300px",margin:"0 auto",position:"relative",zIndex:1},children:[e.jsxs("div",{ref:t,style:{textAlign:"center",marginBottom:"72px"},children:[e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"5px 16px",borderRadius:"100px",border:"1px solid rgba(167,139,250,0.3)",background:"rgba(167,139,250,0.06)",marginBottom:"20px",opacity:r?1:0,transform:r?"translateY(0)":"translateY(16px)",transition:"opacity 0.6s ease, transform 0.6s ease"},children:[e.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#a78bfa",boxShadow:"0 0 8px #a78bfa"}}),e.jsx("span",{style:{fontSize:"11px",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"#a78bfa"},children:"Why Us"})]}),e.jsxs("h2",{style:{fontFamily:"'Montserrat', sans-serif",fontSize:"clamp(36px, 5vw, 60px)",fontWeight:900,color:"#fff",lineHeight:1.08,letterSpacing:"-0.02em",margin:"0 0 16px",opacity:r?1:0,transform:r?"translateY(0)":"translateY(20px)",transition:"opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s"},children:["Why ",e.jsx("em",{style:{color:"#83cd15",fontStyle:"italic"},children:"Choose"})," Us"]}),e.jsx("p",{style:{fontSize:"16px",color:"rgba(255,255,255,0.45)",maxWidth:"480px",margin:"0 auto",lineHeight:1.7,opacity:r?1:0,transform:r?"translateY(0)":"translateY(16px)",transition:"opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s"},children:"Four pillars that separate great influence from fleeting noise."})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"20px",marginBottom:"60px"},children:j.map((o,s)=>e.jsx(w,{item:o,delay:s*.1+.2},o.num))}),e.jsx("div",{style:{display:"flex",justifyContent:"center",flexWrap:"wrap",borderTop:"1px solid rgba(255,255,255,0.07)",paddingTop:"48px"},children:[{val:"500+",label:"Campaigns Delivered"},{val:"98%",label:"Client Retention Rate"},{val:"10×",label:"Average ROI"},{val:"3.2M+",label:"Organic Impressions"}].map((o,s)=>e.jsxs("div",{style:{flex:"1 1 160px",textAlign:"center",padding:"20px 24px",borderRight:s<3?"1px solid rgba(255,255,255,0.07)":"none"},children:[e.jsx("div",{style:{fontSize:"clamp(28px, 4vw, 40px)",fontWeight:900,fontFamily:"'Montserrat', sans-serif",color:s%2===0?"#83cd15":"#a78bfa",lineHeight:1.1,marginBottom:"6px"},children:o.val}),e.jsx("div",{style:{fontSize:"12px",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"rgba(255,255,255,0.35)"},children:o.label})]},s))})]})]})},m=y.influencer,k=(t,r=1800)=>{const[o,s]=l.useState(0),[a,i]=l.useState(!1),n=l.useRef(null);return l.useEffect(()=>{const p=n.current;if(!p)return;const x=new IntersectionObserver(([d])=>{d.isIntersecting&&(i(!0),x.disconnect())},{threshold:.3});return x.observe(p),()=>x.disconnect()},[]),l.useEffect(()=>{if(!a)return;let p;const x=d=>{p||(p=d);const c=Math.min((d-p)/r,1),f=1-Math.pow(1-c,3);s(Math.floor(t*f)),c<1&&requestAnimationFrame(x)};requestAnimationFrame(x)},[a,t,r]),[n,o]},z=()=>{const t=[{end:500,suffix:"+",label:"Creator Partnerships"},{end:45,suffix:"M+",label:"Total Reach"},{end:8,suffix:"x",label:"Avg ROI for Brands"},{end:92,suffix:"%",label:"Campaign Accuracy"},{end:3,suffix:"x",label:"Viral Rate"}];return e.jsxs("div",{style:{background:"#060811",borderTop:"1px solid rgba(173,250,59,0.18)",borderBottom:"1px solid rgba(173,250,59,0.18)",padding:"22px 5%",overflow:"hidden",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(90deg, rgba(124,58,237,0.06) 0%, rgba(173,250,59,0.04) 50%, rgba(124,58,237,0.06) 100%)",pointerEvents:"none"}}),e.jsx("div",{style:{display:"flex",gap:"clamp(24px,4vw,60px)",justifyContent:"center",flexWrap:"wrap",maxWidth:"1100px",margin:"0 auto",position:"relative",zIndex:1},children:t.map((r,o)=>{const[s,a]=k(r.end,1600+o*200);return e.jsxs("div",{ref:s,style:{textAlign:"center",minWidth:"90px"},children:[e.jsxs("div",{style:{fontFamily:"'Bebas Neue',Impact,sans-serif",fontSize:"clamp(26px,3.5vw,44px)",color:"#adfa3b",letterSpacing:"0.03em",lineHeight:1,textShadow:"0 0 20px rgba(173,250,59,0.3)"},children:[a,r.suffix]}),e.jsx("div",{style:{fontSize:"10px",color:"rgba(255,255,255,0.45)",textTransform:"uppercase",letterSpacing:"0.18em",marginTop:"4px",fontWeight:600},children:r.label})]},o)})})]})},I=()=>{const t=[{label:"⭐ VIRAL",color:"#adfa3b",textColor:"#060811",x:"3%",y:"15%",rot:"-7deg",delay:"0s",dur:"7s"},{label:"🤝 500+ CREATORS",color:"rgba(124,58,237,0.85)",textColor:"#fff",x:"87%",y:"22%",rot:"5deg",delay:"1.3s",dur:"9s"},{label:"📱 REEL KINGS",color:"rgba(255,255,255,0.07)",textColor:"#adfa3b",x:"4%",y:"70%",rot:"4deg",delay:"0.7s",dur:"8s"},{label:"🔥 45M REACH",color:"rgba(173,250,59,0.12)",textColor:"#adfa3b",x:"84%",y:"74%",rot:"-5deg",delay:"1.9s",dur:"10s"}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:"@keyframes infFloat{0%,100%{transform:translateY(0)rotate(var(--rot));}50%{transform:translateY(-14px)rotate(var(--rot));}}"}),t.map((r,o)=>e.jsx("div",{style:{position:"absolute",left:r.x,top:r.y,background:r.color,color:r.textColor,fontFamily:"'Bebas Neue',Impact,sans-serif",fontSize:"11px",letterSpacing:"0.18em",padding:"5px 12px",borderRadius:"6px",border:`1px solid ${r.textColor==="#060811"?"transparent":"rgba(173,250,59,0.25)"}`,"--rot":r.rot,animation:`infFloat ${r.dur} ease-in-out infinite`,animationDelay:r.delay,pointerEvents:"none",zIndex:1,whiteSpace:"nowrap",backdropFilter:"blur(8px)"},children:r.label},o))]})},W=["Ba0Ek_aTd68","XBBYtirs4JU","S4QYOZeCPfw","siKBCPG-YKo"],R=({videoId:t})=>{const r=l.useRef(null),o=a=>{const i=a.currentTarget.getBoundingClientRect();r.current.style.transform=`perspective(1000px) rotateX(${(a.clientY-i.top-i.height/2)/(i.height/2)*-15}deg) rotateY(${(a.clientX-i.left-i.width/2)/(i.width/2)*15}deg)`},s=()=>{r.current.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg)"};return e.jsx("div",{onMouseMove:o,onMouseLeave:s,onTouchEnd:s,style:{perspective:"1000px",flex:"1 1 calc(50% - 15px)",maxWidth:"600px"},children:e.jsx("div",{ref:r,style:{height:"360px",borderRadius:"12px",overflow:"hidden",boxShadow:"0 8px 15px rgba(0,0,0,0.3)",transition:"transform 0.6s ease-out",transformStyle:"preserve-3d"},children:e.jsx("iframe",{src:`https://www.youtube.com/embed/${t}`,title:"video",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{width:"100%",height:"100%",border:"none",display:"block"}})})})},C=()=>e.jsxs("section",{style:{background:"#0d0d0d",padding:"60px 40px"},children:[e.jsx("h2",{style:{fontFamily:"'Bebas Neue','Impact','Arial Black',sans-serif",fontSize:"clamp(26px,3.5vw,48px)",color:"#adfa3b",WebkitTextStroke:"2px white",textShadow:"5px 5px 0 rgba(0,0,0,0.5)",textAlign:"center",marginBottom:"48px",letterSpacing:"0.05em",lineHeight:.9},children:"VIDEOS"}),e.jsx("div",{style:{maxWidth:"1300px",margin:"0 auto",display:"flex",flexWrap:"wrap",gap:"30px",justifyContent:"center"},children:W.map(t=>e.jsx(R,{videoId:t},t))})]}),B=[{q:"What services does Buzziwah Studio offer?",a:"We offer end-to-end social media management including content strategy, reel creation, carousel design, Instagram stories, special day creatives, and performance analytics."},{q:"Which platforms do you manage?",a:"We primarily focus on Instagram, but also manage Facebook, YouTube Shorts, and LinkedIn depending on your brand needs."},{q:"How long does it take to see results?",a:"Most clients see measurable engagement growth within 30–60 days. Viral results like our Samrat campaign can happen much faster with the right strategy."},{q:"Do you work with small businesses?",a:"Absolutely. We work with everyone from local restaurants and pre-schools to production houses and celebrity pages. Every brand deserves great content."},{q:"What makes Buzziwah different from other agencies?",a:"We combine deep cultural understanding, meme-driven creativity, and data-backed strategy. We don't just post — we craft content that resonates and converts."},{q:"How do I get started with Buzziwah?",a:"Simply click 'Get Started' or reach out via our contact page. We'll schedule a discovery call to understand your brand and build a custom strategy."}],N=({f:t,i:r})=>{const[o,s]=l.useState(!1);return e.jsxs("div",{className:`faq-card ${o?"open":""}`,children:[e.jsxs("button",{className:"faq-question",type:"button",onClick:()=>s(!o),"aria-expanded":o,children:[e.jsx("span",{children:`${r+1}. ${t.q}`}),e.jsx("span",{className:"faq-arrow",children:"⌄"})]}),e.jsx("div",{className:"faq-answer",children:t.a})]})},F=()=>e.jsx("section",{className:"faq-showcase",children:e.jsxs("div",{className:"faq-inner",children:[e.jsxs("div",{className:"faq-header",children:[e.jsxs("div",{className:"faq-title-block",children:[e.jsx("h2",{style:{fontFamily:"'Bebas Neue','Impact',sans-serif",fontSize:"clamp(24px,3vw,44px)",color:"#adfa3b",WebkitTextStroke:"2px white",textShadow:"5px 5px 0 rgba(0,0,0,0.5)",lineHeight:.9,margin:"0 0 8px"},children:"Any questions?"}),e.jsx("h3",{style:{fontFamily:"'Bebas Neue','Impact',sans-serif",fontSize:"clamp(32px,4vw,64px)",color:"transparent",WebkitTextStroke:"2px #a855f7",letterSpacing:"0.04em",lineHeight:.9,margin:"0 0 32px"},children:"We got you."})]}),e.jsx("p",{className:"faq-intro",children:"Have something on your mind? Whether it's about our services, process, timelines, or pricing — we've answered the most common questions to help you move forward with clarity and confidence."})]}),e.jsx("div",{className:"faq-grid",children:B.map((t,r)=>e.jsx(N,{f:t,i:r},r))})]})}),D=()=>{const t=l.useRef(null),[r,o]=l.useState(!1),[s,a]=l.useState(!1);return e.jsxs("div",{className:"im-font",children:[e.jsx("style",{children:`
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
      `}),e.jsx("section",{className:"page-banner-section",ref:t,children:e.jsxs("div",{className:"coded-page-banner",children:[e.jsx("div",{className:"coded-page-banner-grid"}),e.jsx("div",{className:"coded-page-banner-purple-glow"}),e.jsx("div",{className:"coded-page-banner-green-glow"}),e.jsx(I,{}),e.jsx("div",{className:"coded-page-banner-particles",children:Array.from({length:15}).map((i,n)=>{const p=`${Math.random()*100}%`,x=`${Math.random()*100}%`,d=`${Math.random()*3+1.5}px`,c=`${Math.random()*-20}s`,f=`${Math.random()*10+15}s`;return e.jsx("div",{className:"coded-banner-particle",style:{left:p,top:x,width:d,height:d,animationDelay:c,animationDuration:f}},n)})}),e.jsxs("div",{className:"flex flex-col items-center justify-center w-full max-w-[900px] gap-6 px-6 z-10 text-center relative",children:[e.jsx("div",{className:"absolute left-[-100px] top-[-50px] w-[500px] h-[1px] bg-[#adfa3b]/20 rotate-[-12deg] pointer-events-none"}),e.jsx("div",{className:"absolute right-[-100px] bottom-[-50px] w-[500px] h-[1px] bg-purple-500/10 rotate-[-12deg] pointer-events-none"}),e.jsxs("div",{className:"flex flex-col items-center text-center relative z-10",children:[e.jsx("div",{className:"coded-page-banner-badge",children:m.badge}),e.jsx("h1",{className:"coded-page-banner-title text-center skew-x-[-4deg] mb-4",style:{letterSpacing:"-0.03em"},children:e.jsx(u,{label:`${m.title} ${m.accentTitle}`,fromFontVariationSettings:"'wght' 400, 'opsz' 9",toFontVariationSettings:"'wght' 1000, 'opsz' 40",containerRef:t,radius:100,falloff:"linear"})}),e.jsx("div",{className:"h-[2px] w-24 bg-[#adfa3b] my-4 rounded-full"}),e.jsx("p",{className:"coded-page-banner-subtitle text-center max-w-[650px] mx-auto",children:m.subtitle})]})]})]})}),e.jsx(z,{}),e.jsx(v,{}),e.jsx(S,{}),e.jsx(C,{}),e.jsx(F,{}),e.jsx(b,{})]})};export{D as default};
