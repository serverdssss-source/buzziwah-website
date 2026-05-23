import{r as a,j as e}from"./animation-vendor-CdhPfQVW.js";import{j as C,k as I,l as F,m as E,n as f,F as P}from"./index-C6rLB7PO.js";import{F as T,a as D,b as L,c as R}from"./index-q8OFSP72.js";import"./iconBase-Bo5QDCiS.js";function M(r=.15){const n=a.useRef(null),[c,d]=a.useState(!1);return a.useEffect(()=>{const s=n.current;if(!s)return;const l=new IntersectionObserver(([u])=>{u.isIntersecting&&(d(!0),l.unobserve(s))},{threshold:r});return l.observe(s),()=>l.disconnect()},[r]),[n,c]}function q(){const[r,n]=a.useState([]),[c,d]=a.useState(""),[s,l]=a.useState({name:"",email:"",phone:"",message:""}),[u,A]=a.useState(null),[g,m]=a.useState(!1),[x,h]=a.useState(!1),[j,w]=a.useState(""),[v,N]=M(.05);a.useEffect(()=>{const t=()=>{const o=new Date,z=new Date(o.toLocaleString("en-US",{timeZone:"Asia/Kolkata"})).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0});w(z)};t();const i=setInterval(t,1e3);return()=>clearInterval(i)},[]);const y=t=>{r.includes(t)?n(r.filter(i=>i!==t)):n([...r,t])},p=t=>i=>l(o=>({...o,[t]:i.target.value})),k=["Performance Marketing","Video Production","Web Development","Branding & Design","Influencer Campaign"],S=["Starter Setup","Growth Engine","Enterprise Elite"];return e.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",background:"#03010a",minHeight:"100vh",color:"#ffffff",overflow:"hidden",position:"relative"},children:[e.jsxs("div",{className:"absolute inset-0 pointer-events-none z-0 overflow-hidden",children:[e.jsx("div",{className:"absolute top-[-10%] right-[-10%] w-[650px] h-[650px] rounded-full bg-purple-600/10 blur-[130px]"}),e.jsx("div",{className:"absolute bottom-[-10%] left-[-10%] w-[650px] h-[650px] rounded-full bg-[#adfa3b]/5 blur-[130px]"}),e.jsx("div",{className:"absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px]"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-full h-[60%] opacity-40",style:{backgroundImage:`
              linear-gradient(rgba(255, 255, 255, 0.012) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.012) 1px, transparent 1px)
            `,backgroundSize:"60px 60px",transform:"perspective(800px) rotateX(60deg)",transformOrigin:"bottom center"}})]}),e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,500;0,9..40,700;0,9..40,900;1,9..40,400&display=swap');

        /* ── Animations & reveal classes ── */
        .reveal       { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal.show  { opacity: 1; transform: translateY(0); }

        /* Minimalist text inputs */
        .cyber-input-wrap {
          position: relative;
          width: 100%;
          margin-bottom: 32px;
        }
        .cyber-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          padding: 12px 0;
          color: #ffffff;
          font-size: 16px;
          outline: none;
          transition: border-color 0.4s;
        }
        .cyber-input-label {
          position: absolute;
          left: 0;
          top: 14px;
          color: rgba(255, 255, 255, 0.4);
          font-size: 15px;
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cyber-input:focus ~ .cyber-input-label,
        .cyber-input:not(:placeholder-shown) ~ .cyber-input-label {
          top: -12px;
          font-size: 11px;
          font-weight: 700;
          color: #adfa3b;
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }
        .cyber-input-line {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 1.5px;
          background: #adfa3b;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cyber-input:focus ~ .cyber-input-line {
          left: 0;
          width: 100%;
          box-shadow: 0 0 10px rgba(173, 250, 59, 0.5);
        }

        /* Interactive tags */
        .interactive-tag {
          padding: 10px 18px;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
          color: rgba(255, 255, 255, 0.7);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          user-select: none;
        }
        .interactive-tag:hover {
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
          transform: translateY(-2px);
        }
        .interactive-tag.active {
          border-color: #adfa3b;
          background: rgba(173, 250, 59, 0.08);
          color: #adfa3b;
          box-shadow: 0 0 15px rgba(173, 250, 59, 0.15);
        }

        /* Modern circular social icons */
        .modern-social {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .modern-social:hover {
          background: #ffffff;
          color: #000000;
          transform: scale(1.1) translateY(-4px);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.15);
        }

        /* Glassmorphism containers */
        .glass-container {
          background: rgba(255, 255, 255, 0.01);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border-radius: 32px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        @media (max-width: 1024px) {
          .split-grid {
            grid-template-columns: 1fr !important;
            gap: 64px !important;
          }
        }
      `}),e.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-36 pb-32",children:[e.jsxs("div",{className:"split-grid grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start",children:[e.jsxs("div",{className:"space-y-12",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-[9px] uppercase tracking-[0.3em] text-purple-400 font-bold",children:[e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"}),"GET IN TOUCH // BUZZIWAH"]}),e.jsxs("h1",{className:"text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95] text-white",children:["LET'S BUILD ",e.jsx("br",{}),e.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#adfa3b] to-purple-400",children:"SOMETHING MAD."})]}),e.jsx("p",{className:"text-[#a3a3c2] text-base md:text-lg max-w-md font-medium leading-relaxed",children:"Have a campaign, brand challenge, or disruptive idea? Connect with our Gen Z digital squad."})]}),e.jsxs("div",{className:"glass-container p-6 space-y-4 max-w-md",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-white/5 pb-4",children:[e.jsxs("span",{className:"text-[10px] uppercase font-bold tracking-widest text-white/40 flex items-center gap-1.5",children:[e.jsx(C,{className:"text-[#adfa3b]"})," Local Time (Bengaluru)"]}),e.jsxs("span",{className:"text-sm font-black text-white tracking-widest flex items-center gap-2",children:[e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#adfa3b] animate-ping"}),j||"00:00:00 PM"]})]}),e.jsxs("div",{className:"flex items-center justify-between border-b border-white/5 pb-4",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold tracking-widest text-white/40",children:"Response Speed"}),e.jsx("span",{className:"text-xs font-bold text-[#adfa3b]",children:"⚡ UNDER 12 HOURS"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold tracking-widest text-white/40",children:"Project Capacity"}),e.jsx("span",{className:"text-xs font-bold text-white/80",children:"🔥 3 SPOTS REMAINING"})]})]}),e.jsxs("div",{className:"space-y-6 max-w-md",children:[e.jsxs("div",{className:"flex gap-4 items-start group",children:[e.jsx("div",{className:"w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#adfa3b] group-hover:border-[#adfa3b] transition-all",children:e.jsx(I,{size:16})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1",children:"Base HQ"}),e.jsxs("p",{className:"text-xs text-white/80 leading-relaxed font-semibold",children:["3086/7, 8th C Cross Rd, RPC Layout,",e.jsx("br",{}),"Vijayanagar, Bengaluru, 560040"]})]})]}),e.jsxs("div",{className:"flex gap-4 items-start group",children:[e.jsx("div",{className:"w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#adfa3b] group-hover:border-[#adfa3b] transition-all",children:e.jsx(F,{size:16})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1",children:"Direct Mail"}),e.jsx("p",{className:"text-xs text-white/80 font-semibold group-hover:text-white transition-all",children:"contact@sripadastudios.com"})]})]}),e.jsxs("div",{className:"flex gap-4 items-start group",children:[e.jsx("div",{className:"w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#adfa3b] group-hover:border-[#adfa3b] transition-all",children:e.jsx(E,{size:16})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1",children:"Call Line"}),e.jsx("p",{className:"text-xs text-white/80 font-semibold",children:"+91 99806 87439"})]})]})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer",className:"modern-social",children:e.jsx(T,{size:18})}),e.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noreferrer",className:"modern-social",children:e.jsx(D,{size:18})}),e.jsx("a",{href:"https://youtube.com",target:"_blank",rel:"noreferrer",className:"modern-social",children:e.jsx(L,{size:18})}),e.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noreferrer",className:"modern-social",children:e.jsx(R,{size:18})})]})]}),e.jsxs("div",{ref:v,className:`reveal ${N?"show":""} glass-container p-8 md:p-12 relative overflow-hidden`,children:[g&&e.jsx("div",{className:"success-overlay",children:e.jsxs("div",{className:"text-center space-y-6 px-6",style:{animation:"bounceIn .6s ease"},children:[e.jsx("div",{className:"w-16 h-16 rounded-full bg-[#adfa3b]/10 border border-[#adfa3b] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(173,250,59,0.3)]",children:e.jsx(f,{size:28,className:"text-[#adfa3b]"})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-2xl font-black uppercase tracking-tight text-white",children:"PIPELINE LOCKED IN"}),e.jsx("p",{className:"text-xs text-white/60 max-w-xs mx-auto leading-relaxed",children:"We've captured your project requirements. A creative representative will secure contact within 12 hours."})]}),e.jsx("button",{onClick:()=>{m(!1),n([]),d(""),l({name:"",email:"",phone:"",message:""})},className:"px-6 py-3 border border-white/20 hover:border-white text-xs font-bold uppercase tracking-widest rounded-full transition-all text-white/80 hover:text-white",children:"Start Another Entry"})]})}),e.jsxs("div",{className:"space-y-10",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-[10px] font-bold uppercase tracking-[0.2em] text-[#adfa3b] block",children:"1. What services are you targeting?"}),e.jsx("div",{className:"flex flex-wrap gap-2.5",children:k.map(t=>e.jsxs("div",{onClick:()=>y(t),className:`interactive-tag ${r.includes(t)?"active":""}`,children:[t,r.includes(t)&&e.jsx(f,{className:"text-[#adfa3b]"})]},t))})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-[10px] font-bold uppercase tracking-[0.2em] text-[#adfa3b] block",children:"2. Approx budget tier?"}),e.jsx("div",{className:"flex flex-wrap gap-2.5",children:S.map(t=>e.jsx("div",{onClick:()=>d(t),className:`interactive-tag ${c===t?"active":""}`,children:t},t))})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("span",{className:"text-[10px] font-bold uppercase tracking-[0.2em] text-[#adfa3b] block mb-6",children:"3. Share your details"}),e.jsxs("div",{className:"cyber-input-wrap",children:[e.jsx("input",{required:!0,type:"text",value:s.name,onChange:p("name"),placeholder:" ",className:"cyber-input"}),e.jsx("label",{className:"cyber-input-label",children:"Your Name *"}),e.jsx("div",{className:"cyber-input-line"})]}),e.jsxs("div",{className:"cyber-input-wrap",children:[e.jsx("input",{required:!0,type:"email",value:s.email,onChange:p("email"),placeholder:" ",className:"cyber-input"}),e.jsx("label",{className:"cyber-input-label",children:"Email Address *"}),e.jsx("div",{className:"cyber-input-line"})]}),e.jsxs("div",{className:"cyber-input-wrap",children:[e.jsx("input",{type:"tel",value:s.phone,onChange:p("phone"),placeholder:" ",className:"cyber-input"}),e.jsx("label",{className:"cyber-input-label",children:"Phone Number"}),e.jsx("div",{className:"cyber-input-line"})]}),e.jsxs("div",{className:"cyber-input-wrap",children:[e.jsx("textarea",{required:!0,rows:4,value:s.message,onChange:p("message"),placeholder:" ",className:"cyber-input",style:{resize:"none"}}),e.jsx("label",{className:"cyber-input-label",children:"Tell us about your project *"}),e.jsx("div",{className:"cyber-input-line"})]})]}),e.jsx("div",{children:e.jsxs("button",{type:"submit",disabled:x,onClick:async t=>{if(t.preventDefault(),s.name&&s.email&&s.message){h(!0);const i={...s,access_key:"630055c9-f103-4cf8-a3d9-296452634b67",subject:"New Lead from Contact Page",from_name:"Buzziwah Website",services:r.join(", "),budget:c};try{const b=await(await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(i)})).json();b.success?m(!0):alert(b.message||"Something went wrong")}catch{alert("Error connecting to the server")}finally{h(!1)}}else alert("Please fill in all required fields marked with *")},className:"submit-btn",style:{width:"100%",justifyContent:"center",opacity:x?.7:1},children:[x?"Processing...":"Submit Proposal"," ",e.jsx(P,{size:18})]})})]})]})]}),e.jsx("div",{className:"mt-24 w-full",children:e.jsx("div",{style:{borderRadius:"32px",overflow:"hidden",border:"1px solid rgba(255, 255, 255, 0.08)",boxShadow:"0 30px 80px rgba(0, 0, 0, 0.4)"},children:e.jsx("iframe",{title:"Sripada Studios Location map",src:"https://www.google.com/maps?q=3086/7,%208th%20C%20Cross%20Rd,%20Weavers%20Layout,%20RPC%20Layout,%20Vijayanagar,%20Bengaluru,%20Karnataka%20560040&output=embed",style:{width:"100%",height:420,border:"none",filter:"invert(90%) hue-rotate(180deg) contrast(110%) opacity(0.8)"},loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})})]})]})}export{q as default};
