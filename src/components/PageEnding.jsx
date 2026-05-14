import React, { useState } from 'react';
import { FiSend, FiCheck, FiArrowUpRight } from 'react-icons/fi';
import '../home/Home.css';

const footerSections = [
  {
    title: 'SERVICES',
    links: [
      { label: 'Performance Marketing', href: '/performance-marketing' },
      { label: 'Social Media Management', href: '/social-media' },
      { label: 'Website Development', href: '/website-development' },
      { label: 'Branding and Re-branding', href: '/branding' },
    ],
  },
  {
    title: 'ABOUT',
    links: [
      { label: 'Our Story', href: '/about' },
      { label: 'Benefits', href: '/about' },
      { label: 'Team', href: '/about' },
      { label: 'Careers', href: '/about' },
    ],
  },
  {
    title: 'NAVIGATION',
    links: [
      { label: 'Content Solution', href: '/content-solution' },
      { label: 'Video Production', href: '/video-production' },
      { label: 'Search Engine Optimization', href: '/seo' },
      { label: 'Influencer Marketing', href: '/influencer-marketing' },
    ],
  },
  {
    title: 'HELP',
    links: [
      { label: 'FAQs', href: '/#faq' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
];

const FooterOnly = () => (
  <footer className="site-footer">
    <div className="footer-cta">
      <a href="/" aria-label="Buzziwah home">
        <img
          className="footer-logo"
          src="/logo.png"
          alt="Buzziwah"
        />
      </a>
      <div className="footer-cta-text">Ready To Get Started</div>
      <a className="footer-cta-button" href="/contact">
        Get Started →
      </a>
    </div>

    <div className="footer-divider" />

    <div className="footer-grid">
      <div className="footer-col">
        <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
        <input className="footer-input" type="text" placeholder="Name" />
        <input className="footer-input" type="email" placeholder="Email Address" />
        <button className="footer-subscribe" type="button">
          Subscribe
        </button>
      </div>

      {footerSections.map((section) => (
        <div className="footer-col" key={section.title}>
          <h4>{section.title}</h4>
          <ul>
            {section.links.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="footer-divider" />

    <div className="footer-bottom">
      <div className="footer-socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social facebook" aria-label="Facebook">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social instagram" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social youtube" aria-label="YouTube">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
          </svg>
        </a>
      </div>
      <div className="footer-copy">2026 Buzziwah.com | All Rights Reserved</div>
    </div>
  </footer>
);

const SharedContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", service: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitting(true);
      const finalData = {
        ...formData,
        access_key: import.meta.env.VITE_WEB3FORMS_KEY,
        subject: `New Lead for ${formData.service || 'General'}`,
        from_name: "Buzziwah Website (Shared Form)",
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
  };

  const services = [
    "Branding",
    "Digital Marketing",
    "Performance Marketing",
    "Film Promotion",
    "Web Design",
  ];

  return (
    <section className="contact-form-section" id="contact" style={{ background: "transparent", color: "#ffffff", padding: "40px 24px 0", position: "relative", overflow: "hidden" }}>
      {/* High-fidelity background decorations inherited from 'Look what we did' */}
      <div className="bbbbb-bg-decorations pointer-events-none select-none">
          <div className="bbbbb-orb bbbbb-orb-purple" style={{ top: '20%', left: '10%' }} />
          <div className="bbbbb-orb bbbbb-orb-lime" style={{ bottom: '20%', right: '10%' }} />
          <div className="bbbbb-grid-perspective" style={{ opacity: 0.3 }} />
          
          <svg className="bbbbb-decor-waves opacity-10" viewBox="0 0 1440 800" fill="none">
            <path d="M-200,300 Q720,-100 1640,300" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" strokeDasharray="10 10" />
          </svg>
      </div>

      {/* Dynamic Background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#adfa3b]/5 blur-[120px]" />
      </div>

      <style>{`
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
          border-color: #adfa3b;
          background: rgba(173, 250, 59, 0.08);
          color: #adfa3b;
          box-shadow: 0 0 12px rgba(173, 250, 59, 0.15);
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
      `}</style>

      <div className="contact-form-inner relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16" style={{ alignItems: "end" }}>
        {/* Left Side Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#adfa3b]/20 bg-[#adfa3b]/5 text-[9px] uppercase tracking-[0.25em] text-[#adfa3b] font-bold">
              ⚡ LET'S TALK
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none text-white">
              WE BRING THE BUZZ.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#adfa3b] to-purple-400">YOU GET THE RESULTS.</span>
            </h2>
            <p className="text-[#a3a3c2] text-sm md:text-base leading-relaxed max-w-md">
              Fill in your goals and let’s coordinate a custom-designed digital action plan to transform your brand identity.
            </p>
          </div>
          <div className="contact-form-image" style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-start" }}>
            <img 
              src="/shared-contact-section-illustration.png" 
              alt="Contact Illustration" 
              className="w-full max-w-sm opacity-80 mix-blend-screen"
              style={{ display: "block" }}
            />
          </div>
        </div>

        {/* Right Side Glass Form */}
        <div className="page-ending-glass-form" style={{ marginBottom: "24px" }}>
          {submitted && (
            <div className="pe-success-overlay">
              <div className="text-center space-y-4 px-6">
                <div className="w-12 h-12 rounded-full bg-[#adfa3b]/15 border border-[#adfa3b] flex items-center justify-center mx-auto">
                  <FiCheck size={20} className="text-[#adfa3b]" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-white">TRANSMISSION LOCKED</h3>
                <p className="text-xs text-white/60 max-w-xs mx-auto">
                  Thank you! Our creative elite team will review and reply within 12 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 border border-white/20 hover:border-white text-[10px] font-bold uppercase tracking-widest rounded-full transition-all text-white/80"
                >
                  Send New Query
                </button>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="pe-input-wrap">
                <input
                  required
                  type="text"
                  placeholder=" "
                  className="pe-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <label className="pe-input-label">Your Name *</label>
              </div>

              <div className="pe-input-wrap">
                <input
                  required
                  type="email"
                  placeholder=" "
                  className="pe-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <label className="pe-input-label">Email Address *</label>
              </div>
            </div>

            {/* Target Service Option Boxes */}
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#adfa3b] block">
                Target Service *
              </span>
              <div className="grid grid-cols-2 gap-3">
                {services.map((srv) => (
                  <div
                    key={srv}
                    onClick={() => setFormData({ ...formData, service: srv })}
                    className={`pe-option-box ${formData.service === srv ? "active" : ""}`}
                  >
                    {srv}
                  </div>
                ))}
              </div>
            </div>

            <div className="pe-input-wrap">
              <textarea
                required
                rows={3}
                placeholder=" "
                className="pe-input"
                style={{ resize: "none" }}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <label className="pe-input-label">Comment or Message *</label>
            </div>

            <div>
              <button 
                type="submit" 
                className="pe-submit-btn"
                disabled={isSubmitting}
                style={{ opacity: isSubmitting ? 0.7 : 1 }}
              >
                {isSubmitting ? "Processing..." : "Initiate Contact"} <FiArrowUpRight size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const PageEnding = ({ showContactForm = true }) => (
  <>
    {showContactForm ? <SharedContactForm /> : null}
    <FooterOnly />
  </>
);

export default PageEnding;
