import React from 'react';

const WhatIsAWebsiteToday = () => {
  return (
    <section className="relative overflow-hidden px-6 py-28 sm:px-10 lg:py-36" style={{ background: '#05030a' }}>
      {/* Background neon glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute right-[-10%] top-10 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(173,250,59,0.04)_0%,transparent_70%)] pointer-events-none animate-pulse" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 mx-auto max-w-[1100px] text-center">
        {/* Floating Tag */}
        <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-1.5 bg-[#adfa3b]/10 border border-[#adfa3b]/20 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#adfa3b] animate-ping" />
          <span className="text-[11px] font-mono font-black tracking-[0.25em] text-[#adfa3b] uppercase">THE DIGITAL SHIFT</span>
        </div>

        {/* Big Question Heading */}
        <h2 className="font-['Montserrat'] text-[clamp(28px,4.5vw,56px)] font-black text-white uppercase tracking-tight leading-[1.1] mb-8">
          What is a website <span className="text-[#adfa3b] italic">today</span>?
        </h2>

        {/* Text Body with customized font-styles and quotes */}
        <div className="max-w-4xl mx-auto">
          <p className="font-['Montserrat'] text-[clamp(20px,2.8vw,36px)] font-light text-white/90 leading-[1.4] tracking-wide mb-6">
            "A website is your <span className="text-[#adfa3b] font-black">digital validation</span>, a space where trust begins, and credibility is built."
          </p>
          <p className="font-sans text-[clamp(16px,1.8vw,21px)] text-white/50 leading-relaxed max-w-2xl mx-auto font-normal">
            A dynamic, well-crafted website says more about your brand than any introduction ever could.
          </p>
        </div>

        {/* Decorative Graphic Lines */}
        <div className="mt-12 flex justify-center items-center gap-4">
          <div className="w-12 h-[1px] bg-white/10" />
          <span className="text-white/20 text-xs font-mono">✦</span>
          <div className="w-12 h-[1px] bg-white/10" />
        </div>
      </div>
    </section>
  );
};

export default WhatIsAWebsiteToday;
