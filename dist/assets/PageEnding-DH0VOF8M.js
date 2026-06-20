import{j as e,r as s}from"./react-core-CFCE4xZu.js";import{h as f,i as h}from"./icons-DS3HIroC.js";/* empty css             */const u=[{title:"SERVICES",links:[{label:"Performance Marketing",href:"/performance-marketing"},{label:"Social Media Management",href:"/social-media"},{label:"Website Development",href:"/website-development"},{label:"Branding and Re-branding",href:"/branding"}]},{title:"ABOUT",links:[{label:"Our Story",href:"/about"},{label:"Benefits",href:"/about"},{label:"Team",href:"/about"},{label:"Careers",href:"/about"}]},{title:"NAVIGATION",links:[{label:"Content Solution",href:"/content-solution"},{label:"Video Production",href:"/video-production"},{label:"Search Engine Optimization",href:"/seo"},{label:"Influencer Marketing",href:"/influencer-marketing"},{label:"Blogs & Insights",href:"/blogs"}]},{title:"HELP",links:[{label:"FAQs",href:"/#faq"},{label:"Contact Us",href:"/contact"}]}],g=()=>e.jsxs("footer",{className:"site-footer",children:[e.jsxs("div",{className:"footer-cta",children:[e.jsx("a",{href:"/","aria-label":"Buzziwah home",children:e.jsx("img",{className:"footer-logo",src:"/logo.webp",alt:"Buzziwah",width:"150",height:"188",style:{height:"auto"}})}),e.jsx("div",{className:"footer-cta-text",children:"Ready To Get Started"}),e.jsx("a",{className:"footer-cta-button",href:"/contact",children:"Get Started →"})]}),e.jsx("div",{className:"footer-divider"}),e.jsxs("div",{className:"footer-grid",children:["      ",u.map(r=>e.jsxs("div",{className:"footer-col",children:[e.jsx("h4",{children:r.title}),e.jsx("ul",{children:r.links.map(t=>e.jsx("li",{children:e.jsx("a",{href:t.href,children:t.label})},t.label))})]},r.title))]}),e.jsx("div",{className:"footer-divider"}),e.jsxs("div",{className:"footer-bottom",children:[e.jsxs("div",{className:"footer-socials",children:[e.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",className:"footer-social facebook","aria-label":"Facebook",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"18",height:"18",children:e.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})}),e.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",className:"footer-social instagram","aria-label":"Instagram",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"18",height:"18",children:[e.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),e.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),e.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]})}),e.jsx("a",{href:"https://youtube.com",target:"_blank",rel:"noopener noreferrer",className:"footer-social youtube","aria-label":"YouTube",children:e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"18",height:"18",children:[e.jsx("path",{d:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"}),e.jsx("polygon",{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02",fill:"currentColor"})]})})]}),e.jsx("div",{className:"footer-copy",children:"2026 Buzziwah.com | All Rights Reserved"})]})]}),j=({isCareers:r=!1})=>{const[t,o]=s.useState({name:"",email:"",phone:"",role:"",experience:"",message:"",service:""}),[p,n]=s.useState(!1),[i,l]=s.useState(!1),d=async a=>{if(a.preventDefault(),r?t.name&&t.email&&t.role&&t.experience&&t.message:t.name&&t.email&&t.message){l(!0);const b={...t,access_key:"630055c9-f103-4cf8-a3d9-296452634b67",subject:r?`Job Application: ${t.role} (${t.experience})`:`New Lead for ${t.service||"General"}`,from_name:r?"Buzziwah Careers Page":"Buzziwah Website (Shared Form)"};try{const c=await(await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(b)})).json();c.success?n(!0):alert(c.message||"Something went wrong")}catch(m){alert("Error connecting to the server")}finally{l(!1)}}else alert("Please fill in all required fields marked with *")},x=["Branding","Digital Marketing","Performance Marketing","Film Promotion","Web Design"];return e.jsxs("section",{className:"contact-form-section",id:"contact",style:{background:"transparent",color:"#ffffff",padding:"40px 24px 0",position:"relative",overflow:"hidden"},children:[e.jsxs("div",{className:"bbbbb-bg-decorations pointer-events-none select-none",children:[e.jsx("div",{className:"bbbbb-orb bbbbb-orb-purple",style:{top:"20%",left:"10%"}}),e.jsx("div",{className:"bbbbb-orb bbbbb-orb-lime",style:{bottom:"20%",right:"10%"}}),e.jsx("div",{className:"bbbbb-grid-perspective",style:{opacity:.3}}),e.jsx("svg",{className:"bbbbb-decor-waves opacity-10",viewBox:"0 0 1440 800",fill:"none",children:e.jsx("path",{d:"M-200,300 Q720,-100 1640,300",stroke:"rgba(168, 85, 247, 0.3)",strokeWidth:"1",strokeDasharray:"10 10"})})]}),e.jsxs("div",{className:"absolute inset-0 pointer-events-none z-0",children:[e.jsx("div",{className:"absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px]"}),e.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#adfa3b]/5 blur-[120px]"})]}),e.jsx("style",{children:`
        /* Local Override Styles for modern glass contact form */
        .page-ending-glass-form {
          background: rgba(255, 255, 255, 0.01) !important;
          backdrop-filter: blur(25px) !important;
          -webkit-backdrop-filter: blur(25px) !important;
          border: 1px solid rgba(255, 255, 255, 0.06) !important;
          border-radius: 36px !important;
          padding: 44px 48px 40px !important;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
          position: relative;
          overflow: visible;
        }

        .pe-input-wrap {
          position: relative;
          width: 100%;
          margin-bottom: 24px;
        }

        .pe-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.02) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 14px !important;
          padding: 16px 20px !important;
          color: #ffffff !important;
          font-size: 14.5px !important;
          outline: none !important;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .pe-input:focus {
          border-color: #adfa3b !important;
          background: rgba(173, 250, 59, 0.01) !important;
          box-shadow: 0 0 20px rgba(173, 250, 59, 0.1) !important;
        }

        .pe-input-label {
          position: absolute;
          left: 20px;
          top: 17px;
          color: rgba(255, 255, 255, 0.4);
          font-size: 14px;
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pe-input:focus ~ .pe-input-label,
        .pe-input:not(:placeholder-shown) ~ .pe-input-label {
          top: -10px;
          left: 14px;
          font-size: 10px;
          font-weight: 800;
          color: #adfa3b;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          background: #05020e !important;
          padding: 2px 10px;
          border-radius: 6px;
          border: 1px solid rgba(173, 250, 59, 0.2);
        }

        /* Option Boxes */
        .pe-option-box {
          padding: 14px 18px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
          color: rgba(255, 255, 255, 0.6);
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: center;
          user-select: none;
        }

        .pe-option-box:hover {
          border-color: rgba(255, 255, 255, 0.15);
          color: #ffffff;
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.04);
        }

        .pe-option-box.active {
          border-color: #adfa3b;
          background: rgba(173, 250, 59, 0.08);
          color: #adfa3b;
          box-shadow: 0 0 15px rgba(173, 250, 59, 0.15);
        }

        .pe-submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 32px;
          border: none;
          border-radius: 30px;
          background: #adfa3b;
          color: #000000;
          font-size: 13px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
          width: 100%;
        }

        .pe-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 25px rgba(173, 250, 59, 0.4);
        }

        .pe-success-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(9, 7, 18, 0.98);
          border-radius: 32px;
          z-index: 10;
          animation: fadeIn 0.4s ease-out;
          border: 1px solid rgba(173,250,59,0.2);
        }

        .footer-cta {
          border-top: 1px solid rgba(255, 255, 255, 0.05) !important;
          padding-top: 60px !important;
        }

        .site-footer {
          background: #03010a !important;
          color: #ffffff !important;
          border-top: 1px solid rgba(255, 255, 255, 0.05) !important;
          padding-top: 80px !important;
        }

        .footer-cta-text {
          color: #ffffff !important;
        }

        .footer-cta-button {
          background: #adfa3b !important;
          color: #000000 !important;
          font-weight: 900 !important;
          border-radius: 30px !important;
          box-shadow: 0 0 20px rgba(173, 250, 59, 0.2) !important;
        }

        .footer-cta-button:hover {
          box-shadow: 0 0 30px rgba(173, 250, 59, 0.4) !important;
          transform: translateY(-2px) !important;
        }

        .footer-col h4 {
          color: #adfa3b !important;
          font-size: 12px !important;
          letter-spacing: 0.2em !important;
        }

        .footer-col ul li a {
          color: rgba(255, 255, 255, 0.6) !important;
        }

        .footer-col ul li a:hover {
          color: #adfa3b !important;
        }

        .footer-input {
          background: rgba(255, 255, 255, 0.03) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          color: #ffffff !important;
          border-radius: 12px !important;
        }

        .footer-subscribe {
          background: #ffffff !important;
          color: #000000 !important;
          font-weight: 700 !important;
          border-radius: 12px !important;
        }

        .footer-subscribe:hover {
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.3) !important;
        }
      `}),e.jsxs("div",{className:`contact-form-inner relative z-10 max-w-6xl mx-auto ${r?"flex flex-col items-center justify-center":"grid lg:grid-cols-2 gap-16"}`,style:r?{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:"0 auto",width:"100%"}:{alignItems:"end"},children:[!r&&e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#adfa3b]/20 bg-[#adfa3b]/5 text-[9px] uppercase tracking-[0.25em] text-[#adfa3b] font-bold",children:"⚡ LET'S TALK"}),e.jsxs("h2",{className:"text-4xl md:text-5xl font-black uppercase tracking-tight leading-none text-white",children:["WE BRING THE BUZZ.",e.jsx("br",{}),e.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#adfa3b] to-purple-400",children:"YOU GET THE RESULTS."})]}),e.jsx("p",{className:"text-[#a3a3c2] text-sm md:text-base leading-relaxed max-w-md",children:"Fill in your goals and let’s coordinate a custom-designed digital action plan to transform your brand identity."})]}),e.jsx("div",{className:"contact-form-image",style:{display:"flex",alignItems:"flex-end",justifyContent:"flex-start"},children:e.jsx("img",{src:"/conactimage.webp",alt:"Contact Illustration",width:"600",height:"750",className:"w-full max-w-sm opacity-80 mix-blend-screen",style:{display:"block",height:"auto"}})})]}),e.jsxs("div",{className:"page-ending-glass-form w-full",style:{marginBottom:"24px",maxWidth:r?"600px":"100%"},children:[p&&e.jsx("div",{className:"pe-success-overlay",children:e.jsxs("div",{className:"text-center space-y-4 px-6",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-[#adfa3b]/15 border border-[#adfa3b] flex items-center justify-center mx-auto",children:e.jsx(f,{size:20,className:"text-[#adfa3b]"})}),e.jsx("h3",{className:"text-lg font-black uppercase tracking-tight text-white",children:"TRANSMISSION LOCKED"}),e.jsx("p",{className:"text-xs text-white/60 max-w-xs mx-auto",children:"Thank you! Our creative elite team will review and reply within 12 hours."}),e.jsx("button",{onClick:()=>n(!1),className:"px-5 py-2 border border-white/20 hover:border-white text-[10px] font-bold uppercase tracking-widest rounded-full transition-all text-white/80",children:"Send New Query"})]})}),r&&e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#adfa3b]/20 bg-[#adfa3b]/5 text-[9px] uppercase tracking-[0.25em] text-[#adfa3b] font-bold mb-3",children:"💼 CAREERS"}),e.jsx("h2",{className:"text-3xl font-black uppercase tracking-tight text-white",children:"JOIN THE CREATIVE ELITE"}),e.jsx("p",{className:"text-[#a3a3c2] text-xs mt-2 max-w-sm mx-auto",children:"Submit your application, target role, and experience level below."})]}),e.jsxs("form",{onSubmit:d,className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{className:"pe-input-wrap",children:[e.jsx("input",{required:!0,type:"text",id:"pe_name",placeholder:" ",className:"pe-input",value:t.name,onChange:a=>o({...t,name:a.target.value})}),e.jsx("label",{htmlFor:"pe_name",className:"pe-input-label",children:"Your Name *"})]}),e.jsxs("div",{className:"pe-input-wrap",children:[e.jsx("input",{required:!0,type:"email",id:"pe_email",placeholder:" ",className:"pe-input",value:t.email,onChange:a=>o({...t,email:a.target.value})}),e.jsx("label",{htmlFor:"pe_email",className:"pe-input-label",children:"Email Address *"})]})]}),r?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs("div",{className:"pe-input-wrap",children:[e.jsx("input",{required:!0,type:"text",id:"pe_phone",placeholder:" ",className:"pe-input",value:t.phone,onChange:a=>o({...t,phone:a.target.value})}),e.jsx("label",{htmlFor:"pe_phone",className:"pe-input-label",children:"Phone Number *"})]}),e.jsxs("div",{className:"pe-input-wrap",children:[e.jsx("input",{required:!0,type:"text",id:"pe_role",placeholder:" ",className:"pe-input",value:t.role,onChange:a=>o({...t,role:a.target.value})}),e.jsx("label",{htmlFor:"pe_role",className:"pe-input-label",children:"Target Role *"})]})]}),e.jsxs("div",{className:"pe-input-wrap",children:[e.jsxs("select",{required:!0,id:"pe_experience",className:"pe-input",value:t.experience,onChange:a=>o({...t,experience:a.target.value}),style:{appearance:"none",WebkitAppearance:"none",color:t.experience?"#ffffff":"rgba(255, 255, 255, 0.4)"},children:[e.jsx("option",{value:"",disabled:!0}),e.jsx("option",{value:"Freshers",style:{background:"#05020e",color:"#fff"},children:"Freshers (0 - 1 years)"}),e.jsx("option",{value:"Mid-Level",style:{background:"#05020e",color:"#fff"},children:"Mid-Level (1 - 3 years)"}),e.jsx("option",{value:"Senior",style:{background:"#05020e",color:"#fff"},children:"Senior (3 - 5 years)"}),e.jsx("option",{value:"Lead",style:{background:"#05020e",color:"#fff"},children:"Lead (5+ years)"})]}),e.jsx("label",{htmlFor:"pe_experience",className:"pe-input-label",style:{top:t.experience?"-10px":"17px",left:t.experience?"14px":"20px",fontSize:t.experience?"10px":"14px",fontWeight:t.experience?"800":"bold",color:t.experience?"#adfa3b":"rgba(255, 255, 255, 0.4)",background:t.experience?"#03010a":"transparent",border:t.experience?"1px solid rgba(173, 250, 59, 0.2)":"none",padding:t.experience?"2px 10px":"0",borderRadius:t.experience?"6px":"0"},children:"Experience Level *"}),e.jsx("div",{className:"absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50 text-[10px]",children:"▼"})]}),e.jsxs("div",{className:"pe-input-wrap",children:[e.jsx("textarea",{required:!0,rows:4,id:"pe_career_msg",placeholder:" ",className:"pe-input",style:{resize:"none"},value:t.message,onChange:a=>o({...t,message:a.target.value})}),e.jsx("label",{htmlFor:"pe_career_msg",className:"pe-input-label",children:"Role Description & Cover Letter *"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("span",{className:"text-[10px] font-bold uppercase tracking-[0.15em] text-[#adfa3b] block",children:"Target Service *"}),e.jsx("div",{className:"grid grid-cols-2 gap-3",children:x.map(a=>e.jsx("div",{onClick:()=>o({...t,service:a}),className:`pe-option-box ${t.service===a?"active":""}`,children:a},a))})]}),e.jsxs("div",{className:"pe-input-wrap",children:[e.jsx("textarea",{required:!0,rows:3,id:"pe_contact_msg",placeholder:" ",className:"pe-input",style:{resize:"none"},value:t.message,onChange:a=>o({...t,message:a.target.value})}),e.jsx("label",{htmlFor:"pe_contact_msg",className:"pe-input-label",children:"Comment or Message *"})]})]}),e.jsx("div",{children:e.jsxs("button",{type:"submit",className:"pe-submit-btn",disabled:i,style:{opacity:i?.7:1},children:[i?"Processing...":r?"Submit Application":"Initiate Contact"," ",e.jsx(h,{size:16})]})})]})]})]})]})},k=({showContactForm:r=!0,isCareers:t=!1})=>e.jsxs(e.Fragment,{children:[r?e.jsx(j,{isCareers:t}):null,e.jsx(g,{})]});export{k as default};
