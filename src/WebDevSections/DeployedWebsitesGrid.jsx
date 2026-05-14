import React from 'react';

const DeployedWebsitesGrid = () => {
  const deployedSites = [
    {
      name: "Kovedaa",
      domain: "Wellness & Ayurvedic Skincare",
      outcome: "Seamless Ecommerce Integration",
      stat: "+240% Order Volume",
      description: "A gorgeous, high-conversion online store blending holistic Ayurvedic heritage with advanced modern shopping UX.",
      color: "#adfa3b"
    },
    {
      name: "Aanya Hospital",
      domain: "Healthcare & Patient Services",
      outcome: "Integrated Patient Booking",
      stat: "Instant Appointments",
      description: "Clean, ultra-secure hospital portal engineered for swift emergency contacts, appointments, and medical service listings.",
      color: "#7c3aed"
    },
    {
      name: "WMN",
      domain: "Womens Healthcare & Diagnostics",
      outcome: "Interactive Symptom Assessment",
      stat: "1.5M+ Digital Queries",
      description: "A premium, compassionate digital medical space customized for specialized women's health consulting and virtual check-ins.",
      color: "#adfa3b"
    },
    {
      name: "New Samrat Restaurant",
      domain: "Gastronomy & Online Ordering",
      outcome: "Dynamic Visual Food Menu",
      stat: "3.5x More Deliveries",
      description: "Slick, responsive digital showcase featuring high-res imagery, table booking workflows, and instant delivery ordering integration.",
      color: "#7c3aed"
    },
    {
      name: "Crime Stoppers",
      domain: "Public Safety & Incident Alerts",
      outcome: "Encrypted Secure Anonymity",
      stat: "Zero-Trace Security",
      description: "A vital, state-grade emergency and secure anonymous reporting platform built to strict cybersecurity guidelines.",
      color: "#adfa3b"
    },
    {
      name: "SVNI",
      domain: "Educational Institute Portal",
      outcome: "LMS & Student Enrolment",
      stat: "12,000+ Active Students",
      description: "Academic powerhouse website organizing course directories, student portals, online registration systems, and curriculum archives.",
      color: "#7c3aed"
    },
    {
      name: "Action Cut Entertainments",
      domain: "Film, Media & Production Studio",
      outcome: "Fluid Immersive Video Showreel",
      stat: "Cinema-Grade Media Hub",
      description: "A dark-themed portfolio featuring smooth embedded video structures, custom showreels, and dynamic production showcases.",
      color: "#adfa3b"
    }
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:py-28" style={{ background: '#05030d' }}>
      {/* Background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(173,250,59,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left md:flex justify-between items-end gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#7c3aed]/10 border border-[#7c3aed]/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] animate-pulse" />
              <span className="text-[10px] font-mono font-black tracking-widest text-[#7c3aed] uppercase font-bold">DIGITAL PORTFOLIO</span>
            </div>
            <h2 className="font-['Montserrat'] text-[clamp(28px,4.5vw,52px)] font-black uppercase text-white leading-tight">
              Websites that we have <span className="text-[#adfa3b] italic">deployed</span>
            </h2>
            <p className="mt-4 text-white/50 text-sm sm:text-base leading-relaxed">
              Crafted to perfection. From responsive layouts to lightning-fast interaction times, we build websites that transform traffic into pure brand trust.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <span className="font-mono text-xs text-white/40 tracking-widest bg-white/[0.02] border border-white/5 px-4 py-2 rounded-xl inline-block">
              TOTAL DEPLOYMENTS: 85+ SITES
            </span>
          </div>
        </div>

        {/* Deployed Websites Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {deployedSites.map((site, idx) => (
            <div 
              key={idx}
              className="rounded-[28px] border border-white/5 bg-gradient-to-b from-white/[0.015] to-white/[0.002] hover:border-white/10 hover:bg-white/[0.02] p-8 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
            >
              <div>
                {/* Top Row */}
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[28px] font-mono font-black text-white/5">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: site.color, boxShadow: `0 0 10px ${site.color}` }} />
                </div>

                {/* Body details */}
                <h3 className="font-['Montserrat'] text-2xl font-black text-white uppercase tracking-tight mb-1 group-hover:text-[#adfa3b] transition-colors">
                  {site.name}
                </h3>
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#adfa3b] uppercase block mb-4">
                  {site.domain}
                </span>
                <p className="text-white/60 text-sm leading-relaxed mb-6 font-normal">
                  {site.description}
                </p>
              </div>

              {/* Outcome Badge */}
              <div className="p-4 rounded-2xl bg-white/[0.015] border border-white/5 mt-auto">
                <div className="text-[10px] font-mono text-white/40 font-bold uppercase tracking-widest mb-1">
                  {site.outcome}
                </div>
                <div className="text-white text-[15px] font-black font-mono">
                  {site.stat}
                </div>
              </div>
            </div>
          ))}

          {/* Symmetrical CTA Box */}
          <div className="rounded-[28px] border border-dashed border-[#adfa3b]/20 bg-gradient-to-b from-[#120f03]/30 to-[#030502]/10 p-8 flex flex-col justify-between items-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(173,250,59,0.04)_0%,transparent_70%)] opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="my-auto relative z-10">
              <span className="text-[32px] block mb-4">✨</span>
              <h3 className="font-['Montserrat'] text-xl font-black text-white uppercase tracking-tight mb-2">
                YOUR BRAND HERE
              </h3>
              <p className="text-white/50 text-xs leading-relaxed max-w-[200px] mx-auto mb-6">
                Let’s co-author the perfect digital home for your unique brand story.
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 font-['Montserrat'] text-[10px] font-black uppercase tracking-[0.1em] text-[#05030d] bg-[#adfa3b] hover:bg-white transition-all duration-300"
              >
                Launch Now
              </a>
            </div>
          </div>
        </div>

        {/* Dynamic High-Impact Case Studies Redirect CTA Banner */}
        <div className="rounded-[32px] border border-[#adfa3b]/20 bg-gradient-to-r from-[#0d1c07]/80 to-[#020502]/80 p-8 sm:p-12 backdrop-blur-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(173,250,59,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="text-center md:text-left relative z-10">
            <span className="text-[10px] font-mono font-black tracking-[0.2em] text-[#adfa3b] uppercase mb-2 block font-bold">CASE REVIEWS</span>
            <h3 className="font-['Montserrat'] text-[24px] sm:text-[32px] font-black text-white uppercase tracking-wide mb-3">
              Explore complete deployed site audits?
            </h3>
            <p className="text-white/60 text-sm max-w-lg leading-relaxed">
              Check out all the custom architectures, performance results, and design structures we implemented.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-10">
            <a 
              href="/case-studies"
              className="rounded-full px-8 py-3.5 font-['Montserrat'] text-xs font-bold uppercase tracking-[0.08em] text-center text-black transition-all duration-200"
              style={{ background: '#adfa3b' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#7c3aed'; e.currentTarget.style.color = '#ffffff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#adfa3b'; e.currentTarget.style.color = '#000000'; }}
            >
              Know More
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DeployedWebsitesGrid;
