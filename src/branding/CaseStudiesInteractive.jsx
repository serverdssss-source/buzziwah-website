import React, { useState, useEffect, useRef } from 'react';

const caseStudiesData = [
  {
    id: "nkr",
    name: "NKR News",
    tagline: "The Voice of Karnataka",
    category: "Media & Broadcasting",
    brandColor: "#dc2626", // Red
    logoSrc: "/clientlogos/31.png",
    problem: "NKR needed to relaunch its digital broadcasting arm in a hyper-competitive regional news market. Despite strong offline credibility, their online presence lacked a modern visual identity, reliable digital infrastructure, and a strategy to capture younger audiences.",
    assessment: "The legacy brand required a complete digital transformation. We needed a cohesive visual identity that retained traditional trust while embracing a dynamic, fast-paced digital news format to dominate screen time.",
    solutionTitle: "A Digital-First News Network",
    solutions: [
      { title: "Identity Evolution", desc: "Modernized the broadcasting logo, lower-thirds, and overall screen layout for a cleaner, high-retention viewing experience." },
      { title: "Digital Infrastructure", desc: "Built a high-performance content delivery web platform optimized for real-time news streaming and massive traffic spikes." },
      { title: "Viral SMM", desc: "Implemented rapid-response social media formatting for breaking news, significantly increasing regional engagement and shareability." }
    ],
    result: "A powerful, dominant regional news brand that successfully bridged the gap between legacy broadcasting and modern digital consumption."
  },
  {
    id: "kovedaa",
    name: "Kovedaa",
    tagline: "Ayurveda got hot",
    category: "cosmetics",
    brandColor: "#d946ef", // Fuchsia
    logoSrc: "/clientlogos/17.png",
    problem: "Kovedaa needed a strong brand identity and digital presence to stand out in a competitive market. While the products had quality, there was no cohesive branding, no e-commerce platform, and limited visual and content direction to attract and convert customers.",
    assessment: "The gap was clear — the brand lacked a unified identity and a structured system to showcase, communicate, and sell effectively. From visuals to platform to messaging, everything needed alignment.",
    solutionTitle: "A Brand-to-Commerce Ecosystem",
    solutions: [
      { title: "Foundation — Branding", desc: "The process began with building a distinct brand identity — defining visuals, tone, and positioning to create a strong and memorable presence." },
      { title: "Platform — E-commerce", desc: "With a clear identity in place, a seamless e-commerce website was developed — designed for intuitive navigation, product clarity, and smooth conversion." },
      { title: "Creation — Product Shoot", desc: "High-quality product visuals were produced to highlight details, elevate perception, and create a premium, trustworthy look across platforms." },
      { title: "Amplification — Content", desc: "Content was then strategically developed to communicate the brand story, engage the audience, and drive consistent traffic to the platform." }
    ],
    result: "A cohesive ecosystem where branding, visuals, and digital platforms work together — transforming products into a compelling brand experience that drives engagement and sales."
  },
  {
    id: "ramesh",
    name: "Ramesh Aravind",
    tagline: "Actor & Motivational Speaker",
    category: "Public Figure",
    brandColor: "#f59e0b", // Amber
    logoSrc: "/clientlogos/13.png",
    problem: "Despite strong recognition in cinema, the personal brand lacked a structured digital presence to reflect his full influence as an actor, storyteller, and speaker. The credibility existed, but it wasn’t consistently translated online.",
    assessment: "The goal wasn’t to rebuild, but to refine with intent. Existing credibility and audience perception were evaluated, revealing a clear gap — the narrative lacked direction, amplification, and authoritative positioning.",
    solutionTitle: "A Focused Personal Branding Strategy",
    solutions: [
      { title: "Strategic Positioning", desc: "A focused personal branding strategy positioned him beyond recognition as a voice of influence. Content highlighted both cinematic legacy and thought leadership, with refined messaging and aligned digital platforms." }
    ],
    result: "Not just visibility, but a strong, consistent presence of authority. It was a stronger, more defined personal brand that carries weight both on and off screen."
  },
  {
    id: "bodhiable",
    name: "Bodhiable",
    tagline: "Empowering Minds",
    category: "EdTech & Wellness",
    brandColor: "#10b981", // Emerald
    logoSrc: "/clientlogos/40.png",
    problem: "Bodhiable entered the market with a revolutionary approach to holistic education and wellness. However, the complex nature of their methodology was difficult to communicate, resulting in low user acquisition and unclear brand positioning.",
    assessment: "The brand needed extreme clarity. The visual language was too generic, and the user journey from discovery to enrollment was fragmented and confusing.",
    solutionTitle: "Simplifying the Complex",
    solutions: [
      { title: "Brand Clarity", desc: "Redefined the brand narrative, distilling complex methodologies into clear, empathetic, and engaging visual communication." },
      { title: "Platform Architecture", desc: "Designed an intuitive, seamless user interface that guided users from curiosity directly into structured wellness and learning programs." },
      { title: "Targeted Outreach", desc: "Launched performance marketing campaigns focused on highly specific demographic pain points, driving qualified, high-intent traffic." }
    ],
    result: "A trusted, approachable brand identity that converted complex concepts into a seamless, highly engaging user enrollment journey."
  },
  {
    id: "crimestopper",
    name: "Crime Stopper",
    tagline: "Vigilance & Security",
    category: "Security Tech",
    brandColor: "#facc15", // Yellow
    logoSrc: "/clientlogos/41.png",
    problem: "Crime Stopper offered cutting-edge security and surveillance tech, but their brand felt outdated and overly aggressive. They struggled to build trust with corporate and residential clients who valued safety and sophistication.",
    assessment: "The brand needed a shift from 'aggressive enforcement' to 'intelligent, proactive safety'. The entire visual system and messaging framework required an overhaul to appeal to modern premium clients.",
    solutionTitle: "Intelligent Security Branding",
    solutions: [
      { title: "Premium Identity", desc: "Overhauled the visual identity with a sleek, high-tech, and reassuring aesthetic that communicated absolute reliability." },
      { title: "Trust-Building Content", desc: "Developed a content ecosystem focusing on preventative technology, case studies, and expert authority rather than fear-based marketing." }
    ],
    result: "A highly sophisticated, trustworthy security brand that successfully penetrated the premium corporate and luxury residential markets."
  },
  {
    id: "svni",
    name: "Sri Vaidya Niketan",
    tagline: "Excellence in Education",
    category: "Education",
    brandColor: "#8b5cf6", // Violet
    logoSrc: "/clientlogos/42.png",
    problem: "As a rapidly expanding group of institutions, SVNI faced a fragmented brand presence. Different campuses operated in silos, diluting the overall prestige and making unified student recruitment highly inefficient.",
    assessment: "The core issue was a lack of a unified brand architecture. They needed a centralized digital presence that projected massive institutional authority and streamlined the admission funnel.",
    solutionTitle: "Unified Institutional Authority",
    solutions: [
      { title: "Brand Unification", desc: "Developed a master brand architecture with distinct yet cohesive visual systems for each individual campus." },
      { title: "Centralized Web Portal", desc: "Built a massive, high-performance central admissions website featuring virtual campus tours, faculty highlights, and streamlined lead generation." },
      { title: "Omnichannel Recruitment", desc: "Executed large-scale lead-gen campaigns targeting precise student demographics across multiple regions." }
    ],
    result: "A monumental shift in institutional prestige, resulting in a cohesive digital presence and record-breaking enrollment numbers across all campuses."
  },
  {
    id: "cinimini",
    name: "Cini Mini",
    tagline: "Bite-Sized Entertainment",
    category: "Entertainment App",
    brandColor: "#ec4899", // Pink
    logoSrc: "/clientlogos/43.png",
    problem: "Cini Mini aimed to disrupt the short-form entertainment space, but their initial launch lacked the vibrant, high-energy brand identity necessary to capture and hold Gen-Z attention in a saturated market.",
    assessment: "The platform's UI and marketing assets were too sterile. To succeed, the brand needed a massive injection of color, motion, and viral engineering.",
    solutionTitle: "Engineered for Virality",
    solutions: [
      { title: "Vibrant Branding", desc: "Crafted an ultra-vibrant, kinetic brand identity with neon accents and high-speed motion graphics designed for absolute scroll-stopping power." },
      { title: "UI/UX Overhaul", desc: "Redesigned the app interface to maximize frictionless content consumption and user engagement." },
      { title: "Viral Growth Loops", desc: "Implemented aggressive influencer marketing strategies and viral challenge formats to artificially kickstart network effects." }
    ],
    result: "An explosive, highly recognizable entertainment brand that rapidly achieved massive cultural relevance and user acquisition."
  },
  {
    id: "angola",
    name: "Angola Academy",
    tagline: "Empowering future leaders",
    category: "Education",
    brandColor: "#3b82f6", // Blue
    logoSrc: "/clientlogos/21.png",
    problem: "Angola Academy wanted to create a compelling brand architecture to stand out and attract students globally. They had outstanding faculty but lacked cohesive branding, social proof, and modern, dynamic outreach.",
    assessment: "The narrative was fragmented across multiple regions. They needed a single, premium brand core with visual systems, collateral, and online trust flags.",
    solutionTitle: "Building Elite Educational Trust",
    solutions: [
      { title: "Foundation — Brand Systems", desc: "Designed a majestic emblem, a strong academic color system, and complete brand stationery to project immediate authority." },
      { title: "Amplification — Social Proof", desc: "Created modern digital brochures, structured marketing campaigns, and video assets to highlight success stories and student testimonies." }
    ],
    result: "A unified, elite academic brand identity that commands high premium perception and trust."
  }
];

const CaseStudiesInteractive = ({ activeClientId }) => {
  const containerRef = useRef(null);

  // Find the active client from data
  const activeClient = caseStudiesData.find(c => c.id === activeClientId) || caseStudiesData[0];

  if (!activeClient) return null;

  // Active Case Study View
  return (
    <section ref={containerRef} className="relative z-20 bg-[#07030f] text-white overflow-hidden pb-32 transition-colors duration-1000">
      {/* Banner */}
      <div 
        className="relative pt-20 pb-16 px-5 sm:px-10 flex flex-col items-center text-center border-b border-white/10 transition-colors duration-1000"
        style={{ 
          background: `radial-gradient(ellipse at top, ${activeClient.brandColor}33 0%, transparent 70%), #07030f` 
        }}
      >
        <span className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-xs uppercase tracking-[0.2em] text-white/70 mb-6 mt-10">
          {activeClient.category}
        </span>
        <h1 className="text-[clamp(40px,6vw,80px)] font-black uppercase tracking-tight mb-4 font-['Geom'] transition-colors duration-1000" style={{ color: activeClient.brandColor }}>
          {activeClient.name}
        </h1>
        <p className="text-xl sm:text-3xl text-white/80 font-light max-w-3xl">
          {activeClient.tagline}
        </p>
      </div>

      {/* Content Blocks: Problem/Assessment */}
      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-10 mt-12">
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-12 py-10">
          
          {/* Left: Problem */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full transition-colors duration-1000" style={{ backgroundColor: activeClient.brandColor }} />
            <div className="absolute -inset-1 opacity-20 blur-2xl group-hover:opacity-40 transition-all duration-1000" style={{ backgroundColor: activeClient.brandColor }} />
            <h3 className="text-3xl font-black mb-6 uppercase tracking-wider font-['Geom']">The Problem</h3>
            <p className="text-lg text-white/70 leading-relaxed relative z-10">
              {activeClient.problem}
            </p>
          </div>

          {/* Right: Assessment */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-2 h-full transition-colors duration-1000" style={{ backgroundColor: activeClient.brandColor }} />
             <div className="absolute -inset-1 opacity-20 blur-2xl group-hover:opacity-40 transition-all duration-1000" style={{ backgroundColor: activeClient.brandColor }} />
             <h3 className="text-3xl font-black mb-6 uppercase tracking-wider font-['Geom']">The Assessment</h3>
             <p className="text-lg text-white/70 leading-relaxed relative z-10">
              {activeClient.assessment}
             </p>
          </div>

        </div>
      </div>

      {/* Solution Section */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 mt-20">
        <div className="text-center mb-16">
          <span className="text-[#adfa3b] font-bold tracking-widest uppercase text-sm mb-4 block">The Action Plan</span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase font-['Geom']">{activeClient.solutionTitle}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeClient.solutions.map((sol, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl hover:bg-white/[0.05] transition-colors">
              <div className="text-4xl font-black text-white/10 mb-6 font-mono">0{i+1}</div>
              <h4 className="text-xl font-bold text-white mb-4">{sol.title}</h4>
              <p className="text-white/60 leading-relaxed">{sol.desc}</p>
            </div>
          ))}
        </div>

        {/* Conditional Metrics Section */}
        {activeClient.metrics && (
          <div className="mt-16 bg-[#140c27] border border-white/10 rounded-3xl p-10 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 blur-[120px] opacity-10 rounded-full transition-colors duration-1000" style={{ backgroundColor: activeClient.brandColor }} />
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-8 text-center">Campaign Impact Metrics</h4>
            <div className="flex flex-wrap justify-center gap-10">
              {activeClient.metrics.map((m, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl sm:text-5xl font-black text-white mb-2 font-['Geom']">{m.value}</div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* The Result */}
        <div className="mt-32 max-w-4xl mx-auto text-center relative">
          <div className="absolute left-1/2 -top-10 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent transition-colors duration-1000" style={{ backgroundImage: `linear-gradient(to bottom, transparent, ${activeClient.brandColor})` }} />
          <h3 className="text-2xl sm:text-4xl font-black uppercase mb-8 font-['Geom'] transition-colors duration-1000" style={{ color: activeClient.brandColor }}>The Result</h3>
          <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light">
            "{activeClient.result}"
          </p>
        </div>
      </div>


    </section>
  );
};

export default CaseStudiesInteractive;
