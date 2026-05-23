import{r as o,j as e}from"./animation-vendor-CdhPfQVW.js";import{V as A}from"./VariableProximity-DeLlx-a1.js";/* empty css             */import{s as R}from"./servicesData-CBjG5fGf.js";const I=(a,t=1800)=>{const[i,d]=o.useState(0),[s,l]=o.useState(!1),c=o.useRef(null);return o.useEffect(()=>{const r=c.current;if(!r)return;const n=new IntersectionObserver(([p])=>{p.isIntersecting&&(l(!0),n.disconnect())},{threshold:.3});return n.observe(r),()=>n.disconnect()},[]),o.useEffect(()=>{if(!s)return;let r;const n=p=>{r||(r=p);const m=Math.min((p-r)/t,1),x=1-Math.pow(1-m,3);d(Math.floor(a*x)),m<1&&requestAnimationFrame(n)};requestAnimationFrame(n)},[s,a,t]),[c,i]},D=()=>{const a=[{end:10,suffix:"x",label:"Avg ROAS Delivered"},{end:3,suffix:"M+",label:"Ad Spend Managed"},{end:420,suffix:"%",label:"Avg CTR Improvement"},{end:95,suffix:"%",label:"Client Retention"},{end:180,suffix:"+",label:"Campaigns Launched"}];return e.jsxs("div",{style:{background:"#060811",borderTop:"1px solid rgba(173,250,59,0.18)",borderBottom:"1px solid rgba(173,250,59,0.18)",padding:"clamp(20px, 4vw, 32px) 5%",overflow:"hidden",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(90deg, rgba(124,58,237,0.06) 0%, rgba(173,250,59,0.04) 50%, rgba(124,58,237,0.06) 100%)",pointerEvents:"none"}}),e.jsx("div",{style:{display:"flex",gap:"clamp(20px, 3.5vw, 60px)",justifyContent:"center",flexWrap:"wrap",maxWidth:"1200px",margin:"0 auto",position:"relative",zIndex:1},children:a.map((t,i)=>{const[d,s]=I(t.end,1600+i*200);return e.jsxs("div",{ref:d,style:{textAlign:"center",minWidth:"clamp(100px, 15vw, 160px)",padding:"10px"},children:[e.jsxs("div",{style:{fontFamily:"'Bebas Neue',Impact,sans-serif",fontSize:"clamp(28px, 4vw, 44px)",color:"#adfa3b",letterSpacing:"0.03em",lineHeight:1,textShadow:"0 0 20px rgba(173,250,59,0.3)"},children:[s,t.suffix]}),e.jsx("div",{style:{fontSize:"clamp(9px, 0.8vw, 11px)",color:"rgba(255,255,255,0.45)",textTransform:"uppercase",letterSpacing:"0.18em",marginTop:"6px",fontWeight:600},children:t.label})]},i)})})]})},P=()=>{const a=[{label:"📈 10x ROAS",color:"#adfa3b",textColor:"#060811",x:"3%",y:"15%",rot:"-7deg",delay:"0s",dur:"7s"},{label:"💰 PAID ADS",color:"rgba(124,58,237,0.85)",textColor:"#fff",x:"87%",y:"22%",rot:"5deg",delay:"1.3s",dur:"9s"},{label:"🎯 PRECISION",color:"rgba(255,255,255,0.07)",textColor:"#adfa3b",x:"4%",y:"70%",rot:"4deg",delay:"0.7s",dur:"8s"},{label:"🚀 SCALE NOW",color:"rgba(173,250,59,0.12)",textColor:"#adfa3b",x:"84%",y:"74%",rot:"-5deg",delay:"1.9s",dur:"10s"}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @keyframes pmFloat{0%,100%{transform:translateY(0)rotate(var(--rot));}50%{transform:translateY(-14px)rotate(var(--rot));}}
        @media (max-width: 768px) {
          .pm-badge-container { display: none !important; }
        }
      `}),e.jsx("div",{className:"pm-badge-container",children:a.map((t,i)=>e.jsx("div",{style:{position:"absolute",left:t.x,top:t.y,background:t.color,color:t.textColor,fontFamily:"'Bebas Neue',Impact,sans-serif",fontSize:"11px",letterSpacing:"0.18em",padding:"5px 12px",borderRadius:"6px",border:`1px solid ${t.textColor==="#060811"?"transparent":"rgba(173,250,59,0.25)"}`,"--rot":t.rot,animation:`pmFloat ${t.dur} ease-in-out infinite`,animationDelay:t.delay,pointerEvents:"none",zIndex:1,whiteSpace:"nowrap",backdropFilter:"blur(8px)"},children:t.label},i))})]})},E=(a=.18)=>{const t=o.useRef(null),[i,d]=o.useState(0);return o.useEffect(()=>{const s=t.current;if(!s)return;const l=new IntersectionObserver(([c])=>{c.isIntersecting&&d(r=>r+1||1)},{threshold:a});return l.observe(s),()=>l.disconnect()},[a]),[t,i>0]},B=()=>{const a=o.useRef(null),[t,i]=o.useState({x:0,y:0}),d=o.useCallback(l=>{const c=a.current;if(!c)return;const r=c.getBoundingClientRect(),n=r.left+r.width/2,p=r.top+r.height/2;i({x:(l.clientX-n)/r.width*14,y:(l.clientY-p)/r.height*14})},[]),s=o.useCallback(()=>i({x:0,y:0}),[]);return[a,t,d,s]},T=({videoSrc:a,poster:t,accentFrom:i,accentTo:d})=>{const s=o.useRef(null),[l,c]=o.useState(!0),[r,n]=o.useState(!1);o.useEffect(()=>{const m=s.current;m&&m.play().then(()=>c(!0)).catch(()=>c(!1))},[a]);const p=()=>{const m=s.current;m&&(l?(m.pause(),c(!1)):m.play().then(()=>c(!0)).catch(()=>{}))};return e.jsxs("div",{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onClick:p,style:{position:"relative",width:"100%",aspectRatio:"16 / 11.5",borderRadius:20,overflow:"hidden",cursor:"pointer",background:"#0a0a0f",boxShadow:r?`0 30px 80px -10px ${i}55, 0 0 0 1px ${i}22`:"0 20px 60px -15px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",transform:r?"scale(1.008)":"scale(1)",transition:"all 0.5s cubic-bezier(0.22, 1, 0.36, 1)"},children:[e.jsx("div",{style:{position:"absolute",inset:-1,borderRadius:21,padding:1,background:`linear-gradient(135deg, ${i}44, transparent 50%, ${d}44)`,WebkitMask:"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",WebkitMaskComposite:"xor",maskComposite:"exclude",zIndex:2,pointerEvents:"none"}}),e.jsx("video",{ref:s,src:a,poster:t,loop:!0,muted:!0,playsInline:!0,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),e.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:l&&!r?"transparent":"rgba(0,0,0,0.25)",opacity:l&&!r?0:1,transition:"opacity 0.4s ease",zIndex:3},children:e.jsx("div",{style:{width:72,height:72,borderRadius:"50%",background:`linear-gradient(135deg, ${i}, ${d})`,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 8px 32px ${i}66`,transform:r?"scale(1.1)":"scale(1)",transition:"transform 0.3s ease"},children:l?e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"white",children:[e.jsx("rect",{x:"6",y:"5",width:"4",height:"14",rx:"1"}),e.jsx("rect",{x:"14",y:"5",width:"4",height:"14",rx:"1"})]}):e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"white",children:e.jsx("path",{d:"M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14z"})})})})]})},j=({dark:a,reversed:t,title:i,subtitle:d,heading:s,points:l,videoSrc:c,poster:r,accentFrom:n,accentTo:p,tag:m,ctaLabel:x,backgroundImage:f})=>{const[k,h]=E(),[N,v,S,z]=B(),g=(u,W=0)=>h?`${u} 0.9s ${W}ms cubic-bezier(0.22, 1, 0.36, 1) both`:"none",C=e.jsxs("div",{className:"pm-case-study-text",style:{flex:"1 1 min(100%, 420px)",minWidth:0,maxWidth:580,display:"flex",flexDirection:"column",gap:18,opacity:h?1:0,position:"relative",zIndex:2},children:[e.jsx("div",{style:{animation:g("fadeUp",100),opacity:0},children:e.jsx("span",{style:{display:"inline-block",padding:"6px 16px",borderRadius:100,fontSize:11,fontWeight:600,letterSpacing:1.8,textTransform:"uppercase",color:n,border:`1px solid ${n}33`,background:`${n}0a`},children:m})}),e.jsx("h2",{style:{fontFamily:"'Bebas Neue','Impact','Arial Black',sans-serif",fontSize:"clamp(24px, 3vw, 44px)",fontWeight:400,lineHeight:.92,margin:0,color:a?"#adfa3b":"#7c3aed",WebkitTextStroke:a?"2px white":"1.5px #7c3aed",textShadow:a?"5px 5px 0 rgba(0,0,0,0.5)":"none",letterSpacing:"0.04em",animation:g("fadeUp",200),opacity:0},children:i}),e.jsx("p",{style:{fontSize:14,lineHeight:1.7,margin:0,color:a?"rgba(255,255,255,0.45)":"rgba(26,26,46,0.45)",animation:g("fadeUp",280),opacity:0},children:d}),e.jsx("div",{style:{width:48,height:3,borderRadius:2,background:`linear-gradient(90deg, ${n}, ${p})`,animation:g("scaleX",350),opacity:0,transformOrigin:"left"}}),e.jsx("h3",{style:{fontFamily:"'Bebas Neue','Impact',sans-serif",fontSize:"clamp(20px,2.8vw,38px)",fontWeight:700,lineHeight:1.2,margin:0,color:a?"#fff":"#7c3aed",whiteSpace:"normal",overflowWrap:"break-word",wordBreak:"break-word",animation:g("fadeUp",400),opacity:0},children:s}),e.jsx("ul",{style:{margin:0,padding:0,listStyle:"none",display:"grid",gap:12,animation:g("fadeUp",480),opacity:0},children:l.map(u=>e.jsxs("li",{style:{display:"grid",gridTemplateColumns:"28px minmax(0, 1fr)",gap:12,alignItems:"start",padding:"14px 16px",borderRadius:18,background:a?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)":"linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.48) 100%)",border:a?"1px solid rgba(255,255,255,0.08)":`1px solid ${n}22`,backdropFilter:"blur(10px)"},children:[e.jsx("span",{style:{width:28,height:28,display:"inline-flex",alignItems:"center",justifyContent:"center",borderRadius:999,background:a?`${n}26`:`${n}18`,color:n,fontSize:"0.85rem",lineHeight:1,marginTop:1},"aria-hidden":"true",children:"✦"}),e.jsx("span",{style:{fontSize:15,lineHeight:1.8,color:a?"rgba(255,255,255,0.78)":"rgba(26,26,46,0.74)"},children:u})]},u))}),e.jsx("a",{href:"/case-studies",className:"pm-case-cta",style:{display:"inline-flex",alignItems:"center",gap:10,width:"fit-content",padding:"14px 22px",borderRadius:999,background:`linear-gradient(135deg, ${n}, ${p})`,color:"#fff",textDecoration:"none",fontSize:13,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",boxShadow:`0 14px 34px ${n}33`,animation:g("fadeUp",540),opacity:0},children:x})]}),M=e.jsx("div",{className:"pm-case-study-video",ref:N,onMouseMove:S,onMouseLeave:z,style:{flex:"1 1 min(100%, 480px)",minWidth:0,maxWidth:680,opacity:h?1:0,animation:g(t?"slideLeft":"slideRight",250),transform:`translate(${v.x}px, ${v.y}px)`,transition:"transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",position:"relative",zIndex:1},children:e.jsx(T,{videoSrc:c,poster:r,accentFrom:n,accentTo:p})});return e.jsxs("section",{className:"pm-case-study",ref:k,style:{position:"relative",padding:"clamp(48px,8vw,100px) clamp(20px,5vw,48px)",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",background:f?`url("${f}") center/cover no-repeat`:a?"#0c0c14":"linear-gradient(180deg, #f3eff8 0%, #ece5f3 100%)"},children:[a&&e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",backgroundSize:"72px 72px",opacity:h?1:0,transition:"opacity 1.5s ease"}}),e.jsx("div",{style:{position:"absolute",width:500,height:500,borderRadius:"50%",background:`radial-gradient(circle, ${n}08 0%, transparent 70%)`,top:"20%",left:t?"70%":"-5%",filter:"blur(60px)",pointerEvents:"none"}})]}),!a&&e.jsx("div",{style:{position:"absolute",width:600,height:600,borderRadius:"50%",background:`radial-gradient(circle, ${n}0c 0%, transparent 60%)`,top:"-10%",right:t?"auto":"-10%",left:t?"-10%":"auto",filter:"blur(80px)",pointerEvents:"none"}}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",gap:"clamp(24px,4vw,48px)",maxWidth:1340,width:"100%",position:"relative",zIndex:1,flexDirection:t?"row-reverse":"row"},children:[C,M]})]})},b=({num:a,title:t,description:i,metric:d})=>{const s=o.useRef(null),l=r=>{const n=s.current.getBoundingClientRect(),p=r.clientX-n.left,x=(r.clientY-n.top-n.height/2)/n.height*-12,f=(p-n.width/2)/n.width*12;s.current.querySelector(".pm-custom-flip-card").style.transform=`perspective(1000px) rotateX(${x}deg) rotateY(${f}deg)`},c=()=>{s.current.querySelector(".pm-custom-flip-card").style.transform="perspective(1000px) rotateX(0) rotateY(0)"};return e.jsx("div",{className:"pm-flip-container flex-1 max-w-[600px]",ref:s,onMouseMove:l,onMouseLeave:c,style:{perspective:1e3,cursor:"pointer"},children:e.jsx("div",{className:"pm-custom-flip-card w-full h-[320px] rounded-[32px] overflow-hidden p-[1px] transition-all duration-300 ease-out",style:{background:"linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)",boxShadow:"0 8px 32px rgba(0,0,0,0.2)"},children:e.jsxs("div",{className:"w-full h-full p-8 sm:p-10 rounded-[31px] flex flex-col justify-between relative overflow-hidden group",style:{background:"rgba(255, 255, 255, 0.015)",backdropFilter:"blur(12px)",border:"1px solid rgba(255, 255, 255, 0.03)"},children:[e.jsx("div",{className:"absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",style:{background:"radial-gradient(circle at center, rgba(173, 250, 59, 0.06) 0%, transparent 70%)"}}),e.jsxs("div",{className:"relative z-10",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsx("span",{className:"text-[36px] font-black font-mono leading-none tracking-tight text-white/5",children:a}),e.jsx("span",{className:"px-3.5 py-1 text-[10px] font-bold font-mono tracking-widest rounded-full border bg-white/[0.02]",style:{color:"#adfa3b",borderColor:"rgba(173, 250, 59, 0.15)"},children:d})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-black text-white tracking-tight mb-3 font-['Montserrat'] leading-tight",children:t}),e.jsx("p",{className:"text-[14px] text-white/60 leading-relaxed font-normal",children:i})]}),e.jsx("div",{className:"relative z-10 flex justify-end mt-4",children:e.jsx("span",{className:"w-9 h-9 rounded-full border border-white/10 bg-white/[0.01] flex items-center justify-center text-white/30 group-hover:text-[#adfa3b] group-hover:border-[#adfa3b]/20 group-hover:bg-[#adfa3b]/5 transition-all duration-300 text-sm",children:"✦"})})]})})})},$=[{num:"01",title:"Campaign Strategy & Planning",desc:"We map out your campaign goals, audience, and funnel strategy to ensure every ad dollar is spent with purpose and precision.",img:"https://demo.sripadastudios.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-32.png"},{num:"02",title:"Paid Ads (Google, Meta, YouTube)",desc:"We create and manage high-performing ad campaigns across Google, Meta, and YouTube to maximize reach and conversions.",img:"https://demo.sripadastudios.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-33.png"},{num:"03",title:"Audience Targeting & Segmentation",desc:"We identify and target the right audience segments based on behavior, demographics, and intent for better campaign performance.",img:"https://demo.sripadastudios.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-34.png"},{num:"04",title:"Ad Creatives & Copy",desc:"We design scroll-stopping visuals and write compelling ad copy that captures attention and drives action.",img:"https://demo.sripadastudios.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-35.png"},{num:"05",title:"Landing Page Optimisation",desc:"We optimize your landing pages for conversions, ensuring seamless user experience from click to conversion.",img:"https://demo.sripadastudios.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-36.png"},{num:"06",title:"A/B Testing & Experimentation",desc:"We continuously test ad variations, creatives, and messaging to identify what works best and scale winning campaigns.",img:"https://demo.sripadastudios.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-37.png"},{num:"07",title:"Conversion Tracking & Analytics",desc:"We implement precise tracking systems to measure every conversion, click, and customer action across all platforms.",img:"https://demo.sripadastudios.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-38.png"},{num:"08",title:"Performance Monitoring & Reporting",desc:"We provide transparent, data-driven reports that show exactly how your campaigns are performing and where to improve.",img:"https://demo.sripadastudios.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-39.png"}],F=({service:a})=>{const[t,i]=o.useState(!1);return e.jsxs("div",{onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),className:`service-card group ${t?"beam-active":""}`,style:{background:t?"rgba(255, 255, 255, 0.025)":"rgba(255, 255, 255, 0.012)",border:"1px solid rgba(255, 255, 255, 0.04)",borderRadius:"24px",padding:"40px 32px",transition:"all 0.45s cubic-bezier(.25,.46,.45,.94)",cursor:"pointer",textAlign:"left",display:"flex",flexDirection:"column",alignItems:"flex-start",position:"relative",overflow:"hidden"},children:[e.jsx("svg",{className:"border-svg",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",children:e.jsx("rect",{className:"border-rect",x:"0",y:"0",rx:"24",ry:"24",width:"100%",height:"100%"})}),e.jsx("div",{className:"w-14 h-14 rounded-2xl flex items-center justify-center relative mb-6 transition-all duration-300",style:{background:t?"rgba(173, 250, 59, 0.12)":"rgba(255, 255, 255, 0.03)",border:t?"1px solid rgba(173, 250, 59, 0.25)":"1px solid rgba(255, 255, 255, 0.05)",transform:t?"scale(1.05) rotate(3deg)":"scale(1) rotate(0)"},children:e.jsx("span",{className:"text-lg font-black font-mono transition-colors duration-300",style:{color:t?"#adfa3b":"rgba(255, 255, 255, 0.5)"},children:a.num})}),e.jsx("h3",{style:{fontSize:20,fontWeight:800,color:t?"#adfa3b":"#fff",marginBottom:12,lineHeight:1.3,letterSpacing:"-0.3px",minHeight:"auto",display:"flex",alignItems:"center",position:"relative",zIndex:1,fontFamily:"'Montserrat', sans-serif",transition:"color 0.3s"},children:a.title}),e.jsx("p",{style:{fontSize:14,lineHeight:1.7,color:"rgba(255, 255, 255, 0.6)",margin:0,position:"relative",zIndex:1,fontWeight:400},children:a.desc}),e.jsx("div",{className:"mt-6 flex justify-end w-full relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:e.jsx("span",{className:"text-[#adfa3b] font-mono text-xs font-bold tracking-widest flex items-center gap-1",children:"ACTIVATE ➔"})})]})},q=[{title:"Strategy Planning",desc:"Define goals, KPIs, audience, and funnel direction. We map out every stage of your customer journey so campaigns launch with clarity and purpose.",img:"https://demo.sripadastudios.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-47.png"},{title:"Channel Selection",desc:"Select platforms like Google Ads, Meta, YouTube, and more. We match each channel to your audience behaviour and business objectives.",img:"https://demo.sripadastudios.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-46.png"},{title:"Ad Creative",desc:"Create engaging visuals and ad copy that convert. Every asset is designed to stop the scroll and drive meaningful action.",img:"https://demo.sripadastudios.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-41.png"},{title:"Campaign Execution",desc:"Launch optimized campaigns with proper targeting and budgets. We set precise parameters to maximise reach and minimise waste.",img:"https://demo.sripadastudios.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-42.png"},{title:"Tracking & Analytics",desc:"Use pixels, UTM tracking, and tools like GA4, Meta Pixel. Every click and conversion is measured to guide smarter decisions.",img:"https://demo.sripadastudios.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-43.png"},{title:"Optimization",desc:"Test creatives, refine bids, and enhance audience targeting. Continuous improvement turns good campaigns into great ones.",img:"https://demo.sripadastudios.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-44.png"},{title:"Scaling",desc:"Scale high-performing campaigns for growth and profit. We expand what works and cut what doesn't — driving predictable returns.",img:"https://demo.sripadastudios.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-45.png"}],w={title:"Campaigns that pay off",intro:"Creative + data + continuous optimization. Knowing what works, what doesn't, and refining every step along the way from targeting the right audience to optimising creatives and tracking real outcomes.",points:["We build and manage campaigns that are designed to deliver outcomes, not just impressions, in both Meta and Google Ads.","From targeting the right audience to optimising campaigns in real-time, everything is focused on performance.","Track results, analyse, and get insight into what ad is working best for your target audience."]},L=[{q:"What is Buzziwah?",a:"Buzziwah is a Bengaluru-based conglomerate specializing in filmmaking, digital marketing, and research. We deliver creative and strategic solutions across three core verticals to help brands and individuals connect meaningfully with their audiences."},{q:"What services does Buzziwah offer?",a:"Filmmaking: Short films, documentaries, promotional videos, and corporate films. Digital Marketing: Social media management, performance marketing, content creation, branding, and online reputation management. Research & Reach: Data-driven audience analysis, campaign planning, and customized strategies for better outreach."},{q:"Who are your clients?",a:"We cater to small businesses, multinational corporations, startups, personal branding clients, and large-scale brands across industries."},{q:"What makes Buzziwah unique?",a:"We combine creativity with strategy to deliver innovative solutions tailored to each project. Our young, dynamic team excels at breaking monotony and crafting imaginative campaigns that resonate deeply with the target audience."},{q:"Do you specialize in Kannada film promotions?",a:"Yes. Under Sripada Studios Designs, we focus exclusively on Kannada films, handling logo creation, promotional videos, posters, social media management, event coverage, and more to align with filmmakers’ vision and audience."},{q:"Can you handle end-to-end digital marketing campaigns?",a:"Absolutely. From social media marketing and performance ads to website design and content marketing, we provide end-to-end digital marketing solutions customized to your goals."},{q:"How experienced is your team?",a:"Our team includes creative writers, editors, filmmakers, and digital marketing professionals with years of experience, all driven by a shared passion for storytelling and impactful campaigns."},{q:"Do you have examples of your past work?",a:"Yes. We’ve completed 500+ projects for 100+ clients. Check out our portfolio for case studies and success stories that showcase our expertise."}],G=({faq:a,idx:t})=>{const[i,d]=o.useState(!1);return e.jsxs("div",{className:`faq-card ${i?"open":""}`,children:[e.jsxs("button",{className:"faq-question",type:"button",onClick:()=>d(!i),"aria-expanded":i,children:[e.jsx("span",{children:`${t+1}. ${a.q}`}),e.jsx("span",{className:"faq-arrow",children:"⌄"})]}),e.jsx("div",{className:"faq-answer",children:a.a})]})},Y=({step:a,index:t})=>e.jsxs("div",{className:"workflow-card",style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",padding:"3rem 2rem",maxWidth:"500px",margin:"0 auto"},children:[e.jsx("style",{children:`
        @media (max-width: 768px) {
          .workflow-card {
            padding: 2rem 1.5rem !important;
          }
          .workflow-card-number {
            width: 70px !important;
            height: 70px !important;
            font-size: 32px !important;
            margin-bottom: 1.25rem !important;
          }
          .workflow-card-label {
            font-size: 10px !important;
            padding: 6px 16px !important;
          }
          .workflow-card-desc {
            font-size: 16px !important;
          }
        }
        @media (max-width: 480px) {
          .workflow-card {
            padding: 1.5rem 1rem !important;
          }
          .workflow-card-number {
            width: 60px !important;
            height: 60px !important;
            font-size: 28px !important;
            margin-bottom: 1rem !important;
          }
          .workflow-card-label {
            font-size: 9px !important;
            padding: 6px 14px !important;
            letter-spacing: 2px !important;
          }
          .workflow-card-desc {
            font-size: 15px !important;
            line-height: 1.6 !important;
          }
        }
      `}),e.jsx("div",{className:"workflow-card-number",style:{width:"80px",height:"80px",borderRadius:"50%",background:"linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"36px",fontWeight:900,fontFamily:"'Bebas Neue', sans-serif",marginBottom:"1.5rem",boxShadow:"0 10px 30px rgba(168,85,247,0.3)"},children:t+1}),e.jsxs("span",{className:"workflow-card-label",style:{display:"inline-block",fontSize:"11px",fontWeight:800,color:"#adfa3b",background:"rgba(173,250,59,0.08)",border:"1px solid rgba(173,250,59,0.15)",borderRadius:"100px",padding:"8px 20px",marginBottom:"1rem",letterSpacing:"3px",fontFamily:"monospace",textTransform:"uppercase"},children:["Step ",String(t+1).padStart(2,"0")]}),e.jsx("h3",{style:{fontSize:"clamp(24px, 4vw, 40px)",fontWeight:900,color:"#fff",margin:"0 0 1rem",lineHeight:1.2,letterSpacing:"-1px",fontFamily:"'Bebas Neue', sans-serif"},children:a.title}),e.jsx("p",{className:"workflow-card-desc",style:{fontSize:"17px",lineHeight:1.7,color:"rgba(255,255,255,0.7)",margin:0,fontWeight:400,fontFamily:"'Montserrat', sans-serif"},children:a.desc})]}),y=R["performance-marketing"],K=()=>{const a=o.useRef(null);return e.jsxs("div",{className:"pm-page im-font",children:[e.jsx("style",{children:`
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap');

      .pm-page,
      .pm-page * {
        font-family: 'Nunito Sans', sans-serif !important;
      }

      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(36px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes slideRight {
        from { opacity: 0; transform: translateX(60px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes slideLeft {
        from { opacity: 0; transform: translateX(-60px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes scaleX {
        from { opacity: 0; transform: scaleX(0); }
        to { opacity: 1; transform: scaleX(1); }
      }
      @keyframes pmCtaGlow {
        0%, 100% { box-shadow: 0 14px 34px rgba(124, 58, 237, 0.22); }
        50% { box-shadow: 0 20px 42px rgba(124, 58, 237, 0.34); }
      }
      .pm-page .pm-case-cta {
        position: relative;
        overflow: hidden;
        transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
        animation: pmCtaGlow 2.8s ease-in-out infinite;
      }
      .pm-page .pm-case-cta::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.28) 45%, transparent 70%);
        transform: translateX(-140%);
        transition: transform 0.55s ease;
      }
      .pm-page .pm-case-cta:hover {
        transform: translateY(-3px) scale(1.02);
        filter: brightness(1.04);
      }
      .pm-page .pm-case-cta:hover::after {
        transform: translateX(140%);
      }
      @media (max-width: 900px) {
        .pm-page .pm-case-study {
          padding: 72px 20px !important;
          min-height: auto !important;
        }
        .pm-page .pm-case-study > div {
          flex-direction: column !important;
          gap: 32px !important;
        }
        .pm-page .pm-case-study-text,
        .pm-page .pm-case-study-video {
          flex-basis: auto !important;
          width: 100% !important;
          max-width: 100% !important;
        }
        .pm-page .pm-case-study h2 {
          font-size: clamp(28px, 7vw, 38px) !important;
        }
        .pm-page .pm-case-study h2 span {
          white-space: normal !important;
        }
        .pm-page .pm-case-study h3 {
          font-size: 18px !important;
          white-space: normal !important;
        }
        .pm-page .pm-case-study p {
          font-size: 14px !important;
        }
        .pm-page .pm-case-study ul li {
          padding: 12px 14px !important;
          font-size: 14px !important;
          gap: 10px !important;
        }
        .pm-page .pm-case-study ul li span:first-child {
          width: 24px !important;
          height: 24px !important;
          font-size: 0.75rem !important;
        }
        .pm-page .pm-case-cta {
          width: 100% !important;
          justify-content: center !important;
          padding: 13px 20px !important;
          font-size: 12px !important;
        }
      }
      @media (max-width: 640px) {
        .pm-page .pm-case-study {
          padding: 56px 16px !important;
        }
        .pm-page .pm-case-study > div {
          gap: 24px !important;
        }
        .pm-page .pm-case-study h2 {
          font-size: clamp(24px, 8vw, 32px) !important;
          letter-spacing: -0.5px !important;
        }
        .pm-page .pm-case-study h2 span {
          white-space: normal !important;
          display: block !important;
        }
        .pm-page .pm-case-study h3 {
          font-size: 16px !important;
        }
        .pm-page .pm-case-study p {
          font-size: 13px !important;
          line-height: 1.6 !important;
        }
        .pm-page .pm-case-study ul {
          gap: 10px !important;
        }
        .pm-page .pm-case-study ul li {
          padding: 10px 12px !important;
          font-size: 13px !important;
          border-radius: 14px !important;
        }
      }
    `}),e.jsx("style",{children:`
        /* ── CODED PAGE BANNER STYLES ── */
        .coded-page-banner {
          position: relative;
          width: 100%;
          min-height: clamp(400px, 60vh, 600px);
          background:
            radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.35), transparent 45%),
            radial-gradient(circle at 75% 80%, rgba(173, 250, 59, 0.22), transparent 35%),
            linear-gradient(180deg, #180d32 0%, #0d0a1b 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: clamp(80px, 12vw, 140px) 20px clamp(40px, 8vw, 80px);
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
          font-family: 'Montserrat', sans-serif !important;
          font-size: clamp(26px, 8vw, 64px);
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
          font-size: clamp(14px, 4vw, 18px);
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
      `}),e.jsx("section",{className:"page-banner-section",ref:a,children:e.jsxs("div",{className:"coded-page-banner",children:[e.jsx("div",{className:"coded-page-banner-grid"}),e.jsx("div",{className:"coded-page-banner-purple-glow"}),e.jsx("div",{className:"coded-page-banner-green-glow"}),e.jsx(P,{}),e.jsx("div",{className:"coded-page-banner-particles",children:Array.from({length:15}).map((t,i)=>{const d=`${Math.random()*100}%`,s=`${Math.random()*100}%`,l=`${Math.random()*3+1.5}px`,c=`${Math.random()*-20}s`,r=`${Math.random()*10+15}s`;return e.jsx("div",{className:"coded-banner-particle",style:{left:d,top:s,width:l,height:l,animationDelay:c,animationDuration:r}},i)})}),e.jsxs("div",{className:"flex flex-col items-center justify-center w-full max-w-[900px] gap-6 px-6 z-10 text-center relative",children:[e.jsx("div",{className:"absolute left-[-100px] top-[-50px] w-[500px] h-[1px] bg-[#adfa3b]/20 rotate-[-12deg] pointer-events-none"}),e.jsx("div",{className:"absolute right-[-100px] bottom-[-50px] w-[500px] h-[1px] bg-purple-500/10 rotate-[-12deg] pointer-events-none"}),e.jsxs("div",{className:"flex flex-col items-center text-center relative z-10",children:[e.jsx("div",{className:"coded-page-banner-badge",children:y.badge}),e.jsx("h1",{className:"coded-page-banner-title text-center skew-x-[-4deg] mb-4",style:{letterSpacing:"-0.03em"},children:e.jsx(A,{label:`${y.title} ${y.accentTitle}`,fromFontVariationSettings:"'wght' 400, 'opsz' 9",toFontVariationSettings:"'wght' 1000, 'opsz' 40",containerRef:a,radius:100,falloff:"linear"})}),e.jsx("div",{className:"h-[2px] w-24 bg-[#adfa3b] my-4 rounded-full"}),e.jsx("p",{className:"coded-page-banner-subtitle text-center max-w-[650px] mx-auto",children:y.subtitle})]})]})]})}),e.jsx(D,{}),e.jsx("section",{className:"pm-section2",children:e.jsx("div",{className:"pm-section2-shell",children:e.jsxs("article",{className:"pm-highlight-card",children:[e.jsxs("div",{className:"pm-highlight-visual w-full max-w-[500px] aspect-[4/3] rounded-[32px] bg-white/[0.01] border border-white/5 relative p-6 sm:p-8 overflow-hidden flex flex-col justify-between",style:{backdropFilter:"blur(12px)"},children:[e.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12)_0%,transparent_70%)] opacity-40 pointer-events-none"}),e.jsx("div",{className:"absolute inset-0 opacity-[0.03]",style:{backgroundImage:"linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",backgroundSize:"24px 24px"}}),e.jsxs("div",{className:"relative z-10 flex justify-between items-center border-b border-white/5 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"}),e.jsx("span",{className:"text-[10px] font-mono font-bold tracking-widest text-white/40 uppercase",children:"LIVE TARGETING PIPELINE"})]}),e.jsx("div",{className:"px-2.5 py-1 text-[9px] font-mono font-bold bg-[#adfa3b]/10 text-[#adfa3b] rounded-full border border-[#adfa3b]/20",children:"OPTIMIZED RUNNING"})]}),e.jsxs("div",{className:"relative z-10 h-32 flex items-end my-4",children:[e.jsxs("svg",{className:"w-full h-full overflow-visible",viewBox:"0 0 400 120",preserveAspectRatio:"none",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"chartGlow",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#7c3aed",stopOpacity:"0.4"}),e.jsx("stop",{offset:"100%",stopColor:"#7c3aed",stopOpacity:"0"})]}),e.jsxs("linearGradient",{id:"lineGrad",x1:"0",y1:"0",x2:"1",y2:"0",children:[e.jsx("stop",{offset:"0%",stopColor:"#7c3aed"}),e.jsx("stop",{offset:"50%",stopColor:"#a78bfa"}),e.jsx("stop",{offset:"100%",stopColor:"#adfa3b"})]})]}),e.jsx("path",{d:"M0 120 C 50 100, 100 40, 150 70 C 200 100, 250 10, 300 30 C 350 50, 380 5, 400 15 L 400 120 Z",fill:"url(#chartGlow)"}),e.jsx("path",{d:"M0 120 C 50 100, 100 40, 150 70 C 200 100, 250 10, 300 30 C 350 50, 380 5, 400 15",fill:"none",stroke:"url(#lineGrad)",strokeWidth:"4",strokeLinecap:"round"}),e.jsx("circle",{cx:"150",cy:"70",r:"5",fill:"#a78bfa",className:"animate-ping"}),e.jsx("circle",{cx:"150",cy:"70",r:"4",fill:"#a78bfa"}),e.jsx("circle",{cx:"250",cy:"10",r:"6",fill:"#adfa3b",className:"animate-ping"}),e.jsx("circle",{cx:"250",cy:"10",r:"4.5",fill:"#adfa3b"})]}),e.jsxs("div",{className:"absolute top-2 left-[55%] -translate-x-1/2 p-2 px-3 rounded-xl bg-[#07030f]/95 border border-white/10 backdrop-blur-md flex flex-col items-start gap-0.5 pointer-events-none shadow-2xl",children:[e.jsx("span",{className:"text-[8px] font-mono text-white/40 uppercase tracking-widest font-black",children:"Capital Return Score"}),e.jsx("span",{className:"text-[11px] font-black text-[#adfa3b] font-mono flex items-center gap-1",children:"✦ 5.4x Avg ROAS"})]})]}),e.jsxs("div",{className:"relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-white/5 text-left font-mono",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-[8px] text-white/40 font-black uppercase tracking-wider",children:"COST PER LINK"}),e.jsx("span",{className:"text-xs sm:text-sm font-black text-white",children:"$0.18"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-[8px] text-white/40 font-black uppercase tracking-wider",children:"CLICK RATE"}),e.jsx("span",{className:"text-xs sm:text-sm font-black text-[#adfa3b]",children:"+12.4%"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-[8px] text-white/40 font-black uppercase tracking-wider",children:"NET PROFIT"}),e.jsx("span",{className:"text-xs sm:text-sm font-black text-white",children:"$48.2K"})]})]})]}),e.jsxs("div",{className:"pm-highlight-copy",children:[e.jsx("h3",{children:w.title}),e.jsx("p",{children:w.intro}),e.jsx("ul",{className:"growth-list pm-highlight-points",children:w.points.map(t=>e.jsxs("li",{children:[e.jsx("span",{className:"growth-list-icon","aria-hidden":"true",children:"✦"}),e.jsx("span",{children:t})]},t))}),e.jsx("div",{className:"pm-highlight-cta-wrap",children:e.jsx("a",{href:"/case-studies",className:"pm-highlight-cta",children:"Know More"})})]})]})})}),e.jsx(j,{dark:!0,reversed:!1,tag:"Performance Marketing",title:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{color:"#7C3AED"},children:"Growth of "}),e.jsx("span",{style:{color:"#c8f041"},children:"Fitness Factory"})]}),subtitle:"From strategy to execution, we helped Fitness Factory grow.",heading:"How We Scaled Fitness Factory's Growth with Performance Marketing.",points:["Strategically crafted to engage Bengaluru's health and fitness-conscious audience.","Focused on compelling creative direction and targeted ad placement.","Used real-time performance tracking to drive high-quality leads and membership sign-ups.","Exceeded expectations with measurable results, improved ROI, and scalable growth potential."],videoSrc:"https://demo.sripadastudios.com/wp-content/uploads/2025/05/gym1-mp4.mp4",poster:"https://demo.sripadastudios.com/wp-content/uploads/2025/05/Untitled-design-38.png",accentFrom:"#8B5CF6",accentTo:"#A78BFA",ctaLabel:"Explore More"}),e.jsx(j,{dark:!1,reversed:!0,tag:"Performance Marketing",title:e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{color:"#7C3AED"},children:"Growth of "}),e.jsx("span",{style:{color:"#111111"},children:"Lilbeez Pre-school"})]}),subtitle:"From strategy to execution, we helped Lilbeez Pre-school Academic grow.",heading:"How We Scaled Lilbeez's Growth with Performance Marketing.",points:["Precisely engineered for Bengaluru's target education audience.","Built with a clear focus on creative direction, ad precision, and consistent monitoring.","Delivered strong lead quality and better campaign profitability.","Surpassed expectations with measurable and scalable performance results."],videoSrc:"https://demo.sripadastudios.com/wp-content/uploads/2025/05/lilbeez1-mp4-2.mp4",poster:"https://demo.sripadastudios.com/wp-content/uploads/2025/05/Untitled-design-59.png",accentFrom:"#7C3AED",accentTo:"#9F7AEA",ctaLabel:"Explore More"}),e.jsx(O,{}),e.jsxs("section",{className:"pm-services",children:[e.jsx("style",{children:`
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes traceBorder {
          0% { stroke-dashoffset: 2000; }
          100% { stroke-dashoffset: 0; }
        }
        .pm-services {
          min-height: 100vh;
          background: #0a0a0a;
          padding: 60px 20px 100px;
          position: relative;
          overflow: hidden;
        }
        .pm-services .heading-text {
          animation: fadeDown 0.8s ease both;
          text-align: center;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 800;
          color: #a855f7;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0 0 50px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
        }
        .pm-services-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding: 0;
        }
        .service-card {
          position: relative;
          border-radius: 16px;
          padding: 40px 28px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: default;
          opacity: 0;
          animation: cardIn 0.6s ease both;
          border: 1px solid rgba(0,0,0,0.06);
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }
        .border-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
          overflow: visible;
        }
        .border-rect {
          fill: none;
          stroke: url(#beamGradient);
          stroke-width: 6;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.6));
        }
        .beam-active .border-rect {
          animation: traceBorder 1.2s cubic-bezier(.4,0,.2,1) forwards;
        }
        .service-card:nth-child(1) { animation-delay: 0.1s; }
        .service-card:nth-child(2) { animation-delay: 0.17s; }
        .service-card:nth-child(3) { animation-delay: 0.24s; }
        .service-card:nth-child(4) { animation-delay: 0.31s; }
        .service-card:nth-child(5) { animation-delay: 0.38s; }
        .service-card:nth-child(6) { animation-delay: 0.45s; }
        .service-card:nth-child(7) { animation-delay: 0.52s; }
        .service-card:nth-child(8) { animation-delay: 0.59s; }
        .service-card:nth-child(9) { animation-delay: 0.66s; }
        @media (max-width: 900px) {
          .pm-services-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .pm-services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}),e.jsx("svg",{style:{position:"absolute",width:0,height:0},children:e.jsx("defs",{children:e.jsxs("linearGradient",{id:"beamGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#a855f7"}),e.jsx("stop",{offset:"50%",stopColor:"#e9d5ff"}),e.jsx("stop",{offset:"100%",stopColor:"#a855f7"})]})})}),e.jsx("h2",{className:"heading-text",children:"Ad Plans that kick off"}),e.jsx("div",{className:"pm-services-grid",children:$.map(t=>e.jsx(F,{service:t},t.num))})]}),e.jsxs("section",{className:"pm-why",children:[e.jsx("h2",{className:"pm-section-title font-['Montserrat'] text-[clamp(28px,4vw,48px)] font-black leading-none text-center text-white tracking-tight mb-12",children:"Why Choose Us"}),e.jsxs("div",{className:"pm-flip-row flex flex-col lg:flex-row gap-6 max-w-[1200px] mx-auto mb-6 px-4",children:[e.jsx(b,{num:"01",title:"Deep-Funnel Strategy",description:"We design and map every single touchpoint of your customer journey, stopping capital leaks and driving premium conversion yields.",metric:"100% Funnel Optimization"}),e.jsx(b,{num:"02",title:"Dynamic Creative Scaling",description:"Running hundreds of hyper-focused ad variations, hooks, and content blocks concurrently to uncover high-converting campaigns instantly.",metric:"4.5x CTR Surge"})]}),e.jsxs("div",{className:"pm-flip-row flex flex-col lg:flex-row gap-6 max-w-[1200px] mx-auto px-4",children:[e.jsx(b,{num:"03",title:"AI Bid Algorithms",description:"Deploying automated routing scripts that dynamically shift budget to highest-ROAS ad sets in real-time, maximizing budget efficiency.",metric:"Max Capital Efficiency"}),e.jsx(b,{num:"04",title:"Live Net-Profit Dashboard",description:"Complete transparent reporting. Real-time metrics tracking actual net cash flow, customer acquisition cost, and recurring client lifetime value.",metric:"100% Live Metrics"})]})]}),e.jsxs("section",{className:"pm-process",children:[e.jsx("style",{children:`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-badge {
          animation: fadeDown 0.6s ease both;
        }
        .hero-title {
          animation: fadeDown 0.6s 0.1s ease both;
        }
        .hero-sub {
          animation: fadeDown 0.6s 0.2s ease both;
        }
        
        .steps-container {
          position: relative;
        }

        @media (max-width: 768px) {
          .step-row {
            padding: 20px 20px !important;
            justify-content: center !important;
          }
          .step-row > div {
            max-width: 100% !important;
          }
          .steps-container {
            grid-template-columns: 1fr !important;
            gap: 2.5rem 0 !important;
            padding: 2rem 1rem !important;
          }
        }

        @media (max-width: 480px) {
          .steps-container {
            gap: 2rem 0 !important;
            padding: 1.5rem 0.75rem !important;
          }
        }
      `}),e.jsxs("div",{style:{textAlign:"center",padding:"100px 40px 80px",position:"relative"},className:"workflow-header",children:[e.jsx("style",{children:`
          @media (max-width: 768px) {
            .workflow-header {
              padding: 60px 24px 50px !important;
            }
          }
          @media (max-width: 480px) {
            .workflow-header {
              padding: 50px 20px 40px !important;
            }
          }
        `}),e.jsx("div",{style:{position:"absolute",top:"20%",left:"50%",transform:"translateX(-50%)",width:"600px",height:"400px",background:"radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",filter:"blur(80px)",pointerEvents:"none",zIndex:0}}),e.jsx("span",{style:{display:"inline-block",fontSize:11,fontWeight:800,color:"#adfa3b",textTransform:"uppercase",letterSpacing:"3px",marginBottom:24,background:"rgba(173,250,59,0.08)",padding:"10px 28px",borderRadius:100,border:"1px solid rgba(173,250,59,0.15)",position:"relative",zIndex:1},children:"Our Workflow"}),e.jsx("h1",{style:{fontSize:"clamp(36px, 6vw, 64px)",fontWeight:900,color:"#fff",letterSpacing:"-2px",margin:"0 0 24px",lineHeight:1.1,fontFamily:"'Bebas Neue', sans-serif",position:"relative",zIndex:1},children:"Performance Marketing Process"}),e.jsx("p",{style:{fontSize:18,lineHeight:1.7,color:"rgba(255,255,255,0.65)",maxWidth:700,margin:"0 auto",fontFamily:"'Montserrat', sans-serif",fontWeight:400,position:"relative",zIndex:1},children:"A clean, data-led system that takes campaigns from planning to scale without losing clarity, speed, or performance."})]}),e.jsx("div",{className:"steps-container",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"4rem 3rem",maxWidth:"1400px",margin:"0 auto",padding:"4rem 2rem"},children:q.map((t,i)=>e.jsx(Y,{step:t,index:i},t.title))})]}),e.jsx("section",{className:"faq-showcase",children:e.jsxs("div",{className:"faq-inner",children:[e.jsxs("div",{className:"faq-header",children:[e.jsxs("div",{className:"faq-title-block",children:[e.jsx("h2",{children:"Any questions?"}),e.jsx("h3",{children:"We got you."})]}),e.jsx("p",{className:"faq-intro",children:"Have something on your mind? Whether it's about our services, process, timelines, or pricing — we've answered the most common questions to help you move forward with clarity and confidence."})]}),e.jsx("div",{className:"faq-grid",children:L.map((t,i)=>e.jsx(G,{faq:t,idx:i},i))})]})})]})},O=()=>{const a=[{name:"Tent Cinema",category:"Film School & Academy",outcome:"3.2x Lead Volume",stat:"+180% Registrations",description:"Scaled local awareness and drove direct enrollments via hyper-local Meta ad campaigns.",color:"#adfa3b"},{name:"WMN",category:"Womens Wellness Brand",outcome:"4.5x ROAS Scale",stat:"1.2M+ Reach",description:"Created high-impact social ad creatives paired with target-lookalike audience funnels.",color:"#7c3aed"},{name:"Svatantra",category:"Art & Culture Platform",outcome:"15x Ticket Sales",stat:"+400% Attendance",description:"Engineered buzz and retargeting ads that sold out cultural events across cities.",color:"#adfa3b"},{name:"The Copper Edge",category:"E-Commerce Kitchenware",outcome:"5.1x Ad Spend Return",stat:"+210% Direct Sales",description:"Built conversion-optimized sales landing pages paired with dynamic catalog ad retargeting.",color:"#7c3aed"}];return e.jsxs("section",{className:"relative overflow-hidden px-6 py-24 sm:px-10 lg:py-28",style:{background:"#0a0a0f"},children:[e.jsx("div",{className:"absolute inset-0 opacity-[0.02] pointer-events-none",style:{backgroundImage:"radial-gradient(circle at 50% 50%, rgba(173,250,59,0.1) 0%, transparent 70%)"}}),e.jsxs("div",{className:"relative z-10 mx-auto max-w-[1200px]",children:[e.jsxs("div",{className:"mb-16 text-center md:text-left md:flex justify-between items-end gap-8",children:[e.jsxs("div",{className:"max-w-2xl",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#7c3aed]/10 border border-[#7c3aed]/20 rounded-full",children:[e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#7c3aed] animate-pulse"}),e.jsx("span",{className:"text-[10px] font-mono font-black tracking-widest text-[#7c3aed] uppercase font-bold",children:"SUCCESS STORIES"})]}),e.jsxs("h2",{className:"font-['Montserrat'] text-[clamp(28px,4vw,52px)] font-black uppercase text-white leading-tight",children:["Brands we have ",e.jsx("span",{className:"text-[#adfa3b] italic",children:"marketed"})]}),e.jsx("p",{className:"mt-4 text-white/50 text-sm sm:text-base leading-relaxed",children:"We turn ad spends into pure customer acquisition. Here is how we scaled metrics for brands that demand real business growth."})]}),e.jsx("div",{className:"mt-6 md:mt-0",children:e.jsx("div",{className:"font-mono text-xs text-white/40 tracking-widest bg-white/[0.02] border border-white/5 px-4 py-2 rounded-xl inline-block",children:"TOTAL MANAGED SPEND: ₹2.5Cr+"})})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16",children:a.map((t,i)=>e.jsxs("div",{className:"rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.015] to-white/[0.002] hover:border-white/10 hover:bg-white/[0.02] p-8 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between",children:[e.jsxs("div",{className:"flex justify-between items-start mb-6",children:[e.jsx("span",{className:"text-[32px] font-mono font-black text-white/5",children:String(i+1).padStart(2,"0")}),e.jsx("span",{className:"w-2.5 h-2.5 rounded-full",style:{background:t.color,boxShadow:`0 0 10px ${t.color}`}})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-['Montserrat'] text-2xl font-black text-white uppercase tracking-tight mb-1 group-hover:text-[#adfa3b] transition-colors",children:t.name}),e.jsx("span",{className:"text-[10px] font-mono font-bold tracking-wider text-white/40 uppercase block mb-4",children:t.category}),e.jsx("p",{className:"text-white/60 text-sm leading-relaxed mb-6 font-normal",children:t.description})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.02] border border-white/5 mt-auto",children:[e.jsx("div",{className:"text-[10px] font-mono text-[#adfa3b] font-bold uppercase tracking-widest mb-1",children:t.outcome}),e.jsx("div",{className:"text-white text-lg font-black font-mono",children:t.stat})]})]},i))}),e.jsxs("div",{className:"rounded-[32px] border border-[#adfa3b]/20 bg-gradient-to-r from-[#0d1c07]/80 to-[#020502]/80 p-8 sm:p-12 backdrop-blur-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8",children:[e.jsx("div",{className:"absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(173,250,59,0.06)_0%,transparent_70%)] pointer-events-none"}),e.jsxs("div",{className:"text-center md:text-left relative z-10",children:[e.jsx("span",{className:"text-[10px] font-mono font-black tracking-[0.2em] text-[#adfa3b] uppercase mb-2 block font-bold",children:"DATA-BACKED RESULTS"}),e.jsx("h3",{className:"font-['Montserrat'] text-[24px] sm:text-[32px] font-black text-white uppercase tracking-wide mb-3",children:"Ready to see full campaign breakdowns?"}),e.jsx("p",{className:"text-white/60 text-sm max-w-lg leading-relaxed",children:"Explore our full catalog of audits, performance metrics, and strategic methodologies."})]}),e.jsx("div",{className:"flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-10",children:e.jsx("a",{href:"/case-studies",className:"rounded-full px-8 py-3.5 font-['Montserrat'] text-xs font-bold uppercase tracking-[0.08em] text-center text-black transition-all duration-200",style:{background:"#adfa3b"},onMouseEnter:t=>{t.currentTarget.style.background="#7c3aed",t.currentTarget.style.color="#ffffff"},onMouseLeave:t=>{t.currentTarget.style.background="#adfa3b",t.currentTarget.style.color="#000000"},children:"Know More"})})]})]})]})};export{K as default};
