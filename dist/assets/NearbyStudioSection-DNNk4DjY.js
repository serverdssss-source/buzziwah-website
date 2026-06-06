import{r,j as t}from"./react-core-CFCE4xZu.js";import{g as h,S as f}from"./gsap-C1zbE3VV.js";h.registerPlugin(f);const y=()=>{const c=r.useRef(null),o=r.useRef(null),d=r.useRef(null);return r.useEffect(()=>{if(window.innerWidth<768)return;let e=h.context(()=>{h.fromTo(o.current,{scale:.7,opacity:.4,y:100},{scale:1,opacity:1,y:0,ease:"power2.out",scrollTrigger:{trigger:o.current,start:"top 95%",end:"center 60%",scrub:1}})},c);return()=>e.revert()},[]),r.useEffect(()=>{if(window.innerWidth<768)return;const e=d.current;if(!e)return;const s=e.getContext("2d");let i;const n=()=>{e.width=e.parentElement.offsetWidth,e.height=e.parentElement.offsetHeight};n(),window.addEventListener("resize",n);class u{constructor(){this.reset(!0)}reset(a=!1){this.x=Math.random()*e.width,this.y=a?Math.random()*e.height:e.height+Math.random()*120,this.vx=(Math.random()-.5)*.35,this.vy=-Math.random()*.4-.15,this.baseRadius=Math.random()*140+90,this.radius=this.baseRadius,this.alpha=0,this.maxAlpha=Math.random()*.11+.03,this.fadeInSpeed=Math.random()*.004+.002,this.fadeOutSpeed=Math.random()*.003+.001,this.isFadingIn=!0;const x=Math.random()>.5;this.color=x?"139, 92, 246":"173, 250, 59"}update(){this.x+=this.vx,this.y+=this.vy,this.radius+=.12,this.isFadingIn?(this.alpha+=this.fadeInSpeed,this.alpha>=this.maxAlpha&&(this.alpha=this.maxAlpha,this.isFadingIn=!1)):(this.alpha-=this.fadeOutSpeed,this.alpha<=0&&this.reset(!1)),(this.x<-this.radius||this.x>e.width+this.radius||this.y<-this.radius)&&this.reset(!1)}draw(){s.save();const a=s.createRadialGradient(this.x,this.y,0,this.x,this.y,this.radius);a.addColorStop(0,`rgba(${this.color}, ${this.alpha})`),a.addColorStop(.5,`rgba(${this.color}, ${this.alpha*.35})`),a.addColorStop(1,`rgba(${this.color}, 0)`),s.fillStyle=a,s.beginPath(),s.arc(this.x,this.y,this.radius,0,Math.PI*2),s.fill(),s.restore()}}const p=Array.from({length:10},()=>new u),m=()=>{s.clearRect(0,0,e.width,e.height),p.forEach(l=>{l.update(),l.draw()}),i=requestAnimationFrame(m)};return m(),()=>{window.removeEventListener("resize",n),cancelAnimationFrame(i)}},[]),t.jsxs("section",{ref:c,className:"relative w-full py-24 sm:py-32 bg-[#050508] flex flex-col items-center justify-center text-center px-4 sm:px-8 overflow-hidden z-10",children:[t.jsx("style",{children:`
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
      `}),t.jsx("canvas",{ref:d,className:"absolute inset-0 w-full h-full pointer-events-none z-0"}),t.jsx("div",{className:"ambient-aurora-glow-1 absolute top-1/4 left-1/4 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-purple-700/20 blur-[130px] rounded-full pointer-events-none z-0",style:{willChange:"transform"}}),t.jsx("div",{className:"ambient-aurora-glow-2 absolute bottom-1/4 right-1/4 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-[#adfa3b]/12 blur-[130px] rounded-full pointer-events-none z-0",style:{willChange:"transform"}}),t.jsxs("div",{className:"relative z-10 max-w-3xl mx-auto mb-10 sm:mb-16",children:[t.jsx("span",{className:"inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-white/20 bg-white/5 text-[9px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-white/70 mb-4 sm:mb-5",children:"In-House Production"}),t.jsx("h2",{className:"text-2xl sm:text-[2.4rem] md:text-[2.8rem] leading-tight font-black text-white uppercase font-['Geom'] mb-4 sm:mb-6 retro-4",children:"Why we win at content"}),t.jsxs("div",{className:"text-sm sm:text-xl text-white/70 leading-relaxed max-w-xl mx-auto px-4",children:[t.jsxs("p",{className:"font-semibold text-white text-base sm:text-xl mb-2 sm:mb-3",children:["Because it’s not outsourced. ",t.jsx("span",{className:"text-[#adfa3b]",children:"It’s built in-house."})]}),t.jsx("p",{className:"text-xs sm:text-base text-white/60 font-bold",children:"With our own studio and production team, we create everything—from podcasts and reels to ads that actually perform."})]})]}),t.jsxs("div",{ref:o,className:"relative z-10 w-full max-w-6xl mx-auto rounded-[2rem] overflow-hidden shadow-[0_20px_100px_rgba(0,0,0,0.8)] border border-white/10 group group-hover:border-white/20 transition-colors duration-500 bg-[#07030f] origin-center",children:[t.jsx("video",{className:"w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105",src:"/clientlogos/nearby-studio-tour.mp4",ref:e=>{if(!e)return;new IntersectionObserver(([i])=>{i.isIntersecting?e.play().catch(()=>{}):e.pause()},{threshold:.25}).observe(e)},loop:!0,muted:!0,playsInline:!0,preload:"none"}),t.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"}),t.jsxs("div",{className:"absolute bottom-0 left-0 w-full p-4 sm:p-12 flex flex-row items-center justify-between gap-4 z-20",children:[t.jsx("img",{src:"/clientlogos/Nearby studio_white.webp",alt:"Nearby Studio Logo",width:"224",height:"64",className:"w-24 sm:w-56 object-contain",style:{height:"auto"}}),t.jsxs("a",{href:"https://nearbystudio.in/",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center px-4 sm:px-8 py-2.5 sm:py-4 bg-white text-black font-bold uppercase tracking-[0.1em] text-[9px] sm:text-sm rounded-full hover:bg-zinc-200 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] whitespace-nowrap",children:["Know More ",t.jsx("span",{className:"hidden sm:inline",children:" about Studio"})]})]})]})]})};export{y as default};
