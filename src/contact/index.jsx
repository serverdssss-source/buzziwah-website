import React, { useState, useEffect, useRef } from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiCheck,
  FiClock,
  FiArrowUpRight,
} from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

/* ───────────────────────── hook: animate on scroll ───────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ───────────────────────────── main component ────────────────────────────── */
export default function Contact() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bengaluruTime, setBengaluruTime] = useState("");

  const [formRef, formVisible] = useReveal(0.05);

  // Tick Bengaluru local time dynamically
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
      const timeStr = istTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setBengaluruTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handle = (key) => (e) => setFormData((p) => ({ ...p, [key]: e.target.value }));

  const servicesList = [
    "Performance Marketing",
    "Video Production",
    "Web Development",
    "Branding & Design",
    "Influencer Campaign",
  ];

  const budgetTiers = [
    "Starter Setup",
    "Growth Engine",
    "Enterprise Elite",
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#03010a", minHeight: "100vh", color: "#ffffff", overflow: "hidden", position: "relative" }}>
      
      {/* ── Background Cyber Grid & Fluid Gradient Ornaments ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Futuristic glowing nodes */}
        <div className="absolute top-[-10%] right-[-10%] w-[650px] h-[650px] rounded-full bg-purple-600/10 blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[650px] h-[650px] rounded-full bg-[#adfa3b]/5 blur-[130px]" />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px]" />

        {/* 3D Horizon Grid Lines */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[60%] opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.012) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.012) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            transform: "perspective(800px) rotateX(60deg)",
            transformOrigin: "bottom center",
          }}
        />
      </div>

      <style>{`
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
      `}</style>

      {/* ── Outer Layout Block ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-36 pb-32">
        <div className="split-grid grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start">
          
          {/* ────────────────── LEFT COLUMN: TYPOGRAPHIC IDENTITY & STATS ────────────────── */}
          <div className="space-y-12">
            
            {/* Header / Brand Badge */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-[9px] uppercase tracking-[0.3em] text-purple-400 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                GET IN TOUCH // BUZZIWAH
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95] text-white">
                LET'S BUILD <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#adfa3b] to-purple-400">SOMETHING MAD.</span>
              </h1>
              
              <p className="text-[#a3a3c2] text-base md:text-lg max-w-md font-medium leading-relaxed">
                Have a campaign, brand challenge, or disruptive idea? Connect with our Gen Z digital squad.
              </p>
            </div>

            {/* Active Agency Telemetry Widget */}
            <div className="glass-container p-6 space-y-4 max-w-md">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 flex items-center gap-1.5">
                  <FiClock className="text-[#adfa3b]" /> Local Time (Bengaluru)
                </span>
                <span className="text-sm font-black text-white tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#adfa3b] animate-ping" />
                  {bengaluruTime || "00:00:00 PM"}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">Response Speed</span>
                <span className="text-xs font-bold text-[#adfa3b]">⚡ UNDER 12 HOURS</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">Project Capacity</span>
                <span className="text-xs font-bold text-white/80">🔥 3 SPOTS REMAINING</span>
              </div>
            </div>

            {/* Structured Contact Details Grid */}
            <div className="space-y-6 max-w-md">
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#adfa3b] group-hover:border-[#adfa3b] transition-all">
                  <FiMapPin size={16} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Base HQ</h4>
                  <p className="text-xs text-white/80 leading-relaxed font-semibold">
                    3086/7, 8th C Cross Rd, RPC Layout,<br />
                    Vijayanagar, Bengaluru, 560040
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#adfa3b] group-hover:border-[#adfa3b] transition-all">
                  <FiMail size={16} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Direct Mail</h4>
                  <p className="text-xs text-white/80 font-semibold group-hover:text-white transition-all">
                    contact@sripadastudios.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#adfa3b] group-hover:border-[#adfa3b] transition-all">
                  <FiPhone size={16} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Call Line</h4>
                  <p className="text-xs text-white/80 font-semibold">
                    +91 99806 87439
                  </p>
                </div>
              </div>
            </div>

            {/* Social Circle Links */}
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="modern-social">
                <FaInstagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="modern-social">
                <FaFacebookF size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="modern-social">
                <FaYoutube size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="modern-social">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* ────────────────── RIGHT COLUMN: INTERACTIVE FORM & BUILDER ────────────────── */}
          <div ref={formRef} className={`reveal ${formVisible ? "show" : ""} glass-container p-8 md:p-12 relative overflow-hidden`}>
            
            {/* Success overlay state */}
            {submitted && (
              <div className="success-overlay">
                <div className="text-center space-y-6 px-6" style={{ animation: "bounceIn .6s ease" }}>
                  <div className="w-16 h-16 rounded-full bg-[#adfa3b]/10 border border-[#adfa3b] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(173,250,59,0.3)]">
                    <FiCheck size={28} className="text-[#adfa3b]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white">PIPELINE LOCKED IN</h3>
                    <p className="text-xs text-white/60 max-w-xs mx-auto leading-relaxed">
                      We've captured your project requirements. A creative representative will secure contact within 12 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSelectedServices([]);
                      setSelectedBudget("");
                      setFormData({ name: "", email: "", phone: "", message: "" });
                    }}
                    className="px-6 py-3 border border-white/20 hover:border-white text-xs font-bold uppercase tracking-widest rounded-full transition-all text-white/80 hover:text-white"
                  >
                    Start Another Entry
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-10">
              
              {/* Service tags selector */}
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#adfa3b] block">
                  1. What services are you targeting?
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {servicesList.map((srv) => (
                    <div
                      key={srv}
                      onClick={() => toggleService(srv)}
                      className={`interactive-tag ${selectedServices.includes(srv) ? "active" : ""}`}
                    >
                      {srv}
                      {selectedServices.includes(srv) && <FiCheck className="text-[#adfa3b]" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Budget selector options */}
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#adfa3b] block">
                  2. Approx budget tier?
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {budgetTiers.map((tier) => (
                    <div
                      key={tier}
                      onClick={() => setSelectedBudget(tier)}
                      className={`interactive-tag ${selectedBudget === tier ? "active" : ""}`}
                    >
                      {tier}
                    </div>
                  ))}
                </div>
              </div>

              {/* Text Fields Form */}
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#adfa3b] block mb-6">
                  3. Share your details
                </span>

                <div className="cyber-input-wrap">
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={handle("name")}
                    placeholder=" "
                    className="cyber-input"
                  />
                  <label className="cyber-input-label">Your Name *</label>
                  <div className="cyber-input-line" />
                </div>

                <div className="cyber-input-wrap">
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={handle("email")}
                    placeholder=" "
                    className="cyber-input"
                  />
                  <label className="cyber-input-label">Email Address *</label>
                  <div className="cyber-input-line" />
                </div>

                <div className="cyber-input-wrap">
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={handle("phone")}
                    placeholder=" "
                    className="cyber-input"
                  />
                  <label className="cyber-input-label">Phone Number</label>
                  <div className="cyber-input-line" />
                </div>

                <div className="cyber-input-wrap">
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handle("message")}
                    placeholder=" "
                    className="cyber-input"
                    style={{ resize: "none" }}
                  />
                  <label className="cyber-input-label">Tell us about your project *</label>
                  <div className="cyber-input-line" />
                </div>
              </div>

              {/* Glowing CTA submit button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={async (e) => {
                    e.preventDefault();
                    if (formData.name && formData.email && formData.message) {
                      setIsSubmitting(true);
                      const finalData = {
                        ...formData,
                        access_key: import.meta.env.VITE_WEB3FORMS_KEY || "630055c9-f103-4cf8-a3d9-296452634b67",
                        subject: "New Lead from Contact Page",
                        from_name: "Buzziwah Website",
                        services: selectedServices.join(", "),
                        budget: selectedBudget
                      };

                      try {
                        const response = await fetch("https://api.web3forms.com/submit", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                          },
                          body: JSON.stringify(finalData),
                        });
                        const result = await response.json();
                        if (result.success) {
                          setSubmitted(true);
                        } else {
                          alert(result.message || "Something went wrong");
                        }
                      } catch (err) {
                        alert("Error connecting to the server");
                      } finally {
                        setIsSubmitting(false);
                      }
                    } else {
                      alert("Please fill in all required fields marked with *");
                    }
                  }}
                  className="submit-btn"
                  style={{ width: "100%", justifyContent: "center", opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? "Processing..." : "Submit Proposal"} <FiArrowUpRight size={18} />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Embedded Interactive Dark Blueprint Map section */}
        <div className="mt-24 w-full">
          <div style={{
            borderRadius: "32px", overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 30px 80px rgba(0, 0, 0, 0.4)",
          }}>
            <iframe
              title="Sripada Studios Location map"
              src="https://www.google.com/maps?q=3086/7,%208th%20C%20Cross%20Rd,%20Weavers%20Layout,%20RPC%20Layout,%20Vijayanagar,%20Bengaluru,%20Karnataka%20560040&output=embed"
              style={{ 
                width: "100%", 
                height: 420, 
                border: "none",
                filter: "invert(90%) hue-rotate(180deg) contrast(110%) opacity(0.8)"
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
