import React, { useEffect, useMemo, useRef, useState } from 'react';
import VariableProximity from '../components/VariableProximity';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import Section10 from '../WebDevSections/Section10';
import { FaPalette, FaRocket, FaLightbulb, FaBox, FaTrophy, FaStar, FaBullseye, FaBook, FaPaintBrush, FaFont, FaImage, FaComments, FaShieldAlt } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';
import { MdColorLens } from 'react-icons/md';
import '../home/Home.css';
import servicesData from '../servicesData.json';

const serviceConfig = servicesData['branding'];
const Branding = () => {
  const containerRef = useRef(null);
  const pages = useMemo(
    () => [
      {
        back: null,
        front: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/ANGOLA-ACADEMY-2-1.png',
      },
      {
        back: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/ANGOLA-ACADEMY-2.png',
        front: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/CINIMINI-2.png',
      },
      {
        back: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/CINIMINI.png',
        front: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/SVNI-2-1.png',
      },
      {
        back: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/SVNI-3.png',
        front: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/CRIME-STOPPER-2-1.png',
      },
      {
        back: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/CRIME-STOPPER-2.png',
        front: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/BODHIABLE-1.png',
      },
      {
        back: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/BODHIABLE.png',
        front: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/HELLO-RAMESH-4.png',
      },
      {
        back: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/HELLO-RAMESH-2.png',
        front: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/KOVEDAA-1.png',
      },
      {
        back: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/KOVEDAA.png',
        front: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/NKR-2.png',
      },
      {
        back: 'https://sripadastudiosdigital.com/wp-content/uploads/2025/05/NKR.png',
        front: null,
        cover: true,
      },
    ],
    []
  );

  const pageRefs = useRef([]);
  const [flipIndex, setFlipIndex] = useState(pages.length);
  const [zIndex, setZIndex] = useState(1);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const flipRight = () => {
    let nextIndex = flipIndex;
    if (nextIndex >= 1) {
      nextIndex -= 1;
    } else {
      nextIndex = pages.length - 1;
      pageRefs.current.forEach((page) => {
        if (!page) return;
        page.classList.remove('flipbk-flip');
        setTimeout(() => {
          page.style.zIndex = 'auto';
        }, 300);
      });
      setZIndex(1);
    }

    const target = pageRefs.current[nextIndex];
    if (target) {
      target.classList.add('flipbk-flip');
      const nextZ = zIndex + 1;
      target.style.zIndex = nextZ;
      setZIndex(nextZ);
    }
    setFlipIndex(nextIndex);
  };

  const flipLeft = () => {
    let nextIndex = flipIndex;
    if (nextIndex < pages.length) {
      nextIndex += 1;
    } else {
      nextIndex = 1;
      for (let i = pages.length - 1; i > 0; i -= 1) {
        const page = pageRefs.current[i];
        if (!page) continue;
        page.classList.add('flipbk-flip');
        page.style.zIndex = pages.length + 1 - i;
      }
    }

    const target = pageRefs.current[nextIndex - 1];
    if (target) {
      target.classList.remove('flipbk-flip');
      setTimeout(() => {
        target.style.zIndex = 'auto';
      }, 350);
    }
    setFlipIndex(nextIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      flipRight();
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="branding-page">
      <style>{`
        @keyframes smFloatWobble {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) translateX(5px) rotate(5deg);
          }
          50% {
            transform: translateY(-5px) translateX(-5px) rotate(-5deg);
          }
          75% {
            transform: translateY(-15px) translateX(3px) rotate(3deg);
          }
        }
      `}</style>

      {/* 🔮 BRANDING SOLUTIONS - FIRST CONTENT SECTION */}
      <BrandingSolutionsSection />

      <section
        className="bbbbb-hero-section relative z-[1] -mt-[120px] px-5 pb-8 pt-[140px] text-center sm:px-8 sm:pt-[170px] md:-mt-[200px] md:px-10 md:pb-10 md:pt-[210px] overflow-hidden"
      >
        {/* Exact background decorations copied directly from the homepage bbbbb-hero-section */}
        <div className="bbbbb-bg-decorations">
          <div className="bbbbb-orb bbbbb-orb-purple" />
          <div className="bbbbb-orb bbbbb-orb-lime" />
          <div className="bbbbb-grid-perspective" />
          
          <svg className="bbbbb-decor-waves" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-200,600 Q720,-100 1640,600" stroke="rgba(168, 85, 247, 0.16)" strokeWidth="1" strokeDasharray="16 12" />
            <path d="M-100,200 C300,100 500,400 900,150 C1100,50 1300,300 1600,200" stroke="rgba(168, 85, 247, 0.28)" strokeWidth="1.5" strokeDasharray="8 6" />
            <path d="M-100,280 C320,180 540,480 940,230 C1140,130 1340,380 1640,280" stroke="rgba(173, 250, 59, 0.18)" strokeWidth="1.2" />
            <path d="M-50,450 C380,350 480,100 880,300 C1080,400 1280,150 1580,350" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="1" />
            
            <circle cx="180" cy="160" r="90" stroke="rgba(168, 85, 247, 0.14)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="180" cy="160" r="130" stroke="rgba(173, 250, 59, 0.1)" strokeWidth="1" />
            <circle cx="1180" cy="380" r="160" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="1" strokeDasharray="12 6" />
            <circle cx="1180" cy="380" r="220" stroke="rgba(173, 250, 59, 0.08)" strokeWidth="1" />
            
            <path d="M170,160 L190,160 M180,150 L180,170" stroke="rgba(173, 250, 59, 0.35)" strokeWidth="1.5" />
            <path d="M1170,380 L1190,380 M1180,370 L1180,390" stroke="rgba(168, 85, 247, 0.35)" strokeWidth="1.5" />
            <polygon points="1220,130 1260,155 1260,205 1220,230 1180,205 1180,155" stroke="rgba(173, 250, 59, 0.14)" strokeWidth="1" strokeDasharray="4 2" />
            <polygon points="1220,130 1260,155 1260,205 1220,230 1180,205 1180,155" stroke="rgba(173, 250, 59, 0.08)" strokeWidth="4" opacity="0.4" />
            <polygon points="140,480 170,498 170,532 140,550 110,532 110,498" stroke="rgba(168, 85, 247, 0.15)" strokeWidth="1.2" />
          </svg>

          {/* Floating high-fidelity green navbar logo shapes */}
          <img src="/logo.png" className="bbbbb-bg-logo bbbbb-bg-logo-1" alt="Buzziwah Decorative Logo Left" />
          <img src="/logo.png" className="bbbbb-bg-logo bbbbb-bg-logo-2" alt="Buzziwah Decorative Logo Right" />

          {/* Giant middle 3D watermark brand logo */}
          <img src="/logo.png" className="bbbbb-bg-logo-3d" alt="Buzziwah Giant 3D Watermark Center" />

          {/* Floating technical plus particles (+) */}
          <div className="bbbbb-tech-plus bbbbb-tp-1">+</div>
          <div className="bbbbb-tech-plus bbbbb-tp-2">+</div>
          <div className="bbbbb-tech-plus bbbbb-tp-3">+</div>
          <div className="bbbbb-tech-plus bbbbb-tp-4">+</div>
        </div>
        <div
          className="relative mx-auto mb-6 h-[420px] w-[90vw] max-w-[520px] sm:h-[500px] sm:max-w-[600px] md:h-[600px] md:w-[700px] md:max-w-[90vw]"
          style={{ perspective: '1200px' }}
        >
          {pages.map((page, idx) => (
            <div
              className="absolute inset-y-0 right-0 h-full w-1/2 rounded-l-[10px] transition-transform duration-700 ease-in-out [transform-style:preserve-3d]"
              key={`page-${idx}`}
              ref={(el) => {
                pageRefs.current[idx] = el;
              }}
              style={{ transformOrigin: 'left' }}
            >
              <figure
                className="absolute inset-0 overflow-hidden bg-white bg-contain bg-no-repeat bg-center [backface-visibility:hidden] rounded-l-[10px] shadow-[-2px_2px_15px_-2px_rgba(0,0,0,0.2)]"
                style={
                  page.back
                    ? { backgroundImage: `url('${page.back}')`, transform: 'rotateY(180deg)' }
                    : { transform: 'rotateY(180deg)' }
                }
              />
              {page.cover ? (
                <figure className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#0d0b1a] to-[#1a0f2e] [backface-visibility:hidden] rounded-r-[10px] shadow-[2px_2px_15px_-2px_rgba(0,0,0,0.2)] text-left px-6 py-8 sm:px-8 sm:py-10 border border-[#a855f7]/20">
                  <h1 className="text-xl font-bold tracking-wide text-white sm:text-2xl font-['Montserrat']">
                    BUZZIWAH
                  </h1>
                  <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[#adfa3b]">
                    Branding
                  </p>
                </figure>
              ) : (
                <figure
                  className="absolute inset-0 overflow-hidden bg-white bg-contain bg-no-repeat bg-center [backface-visibility:hidden] rounded-r-[10px] shadow-[2px_2px_15px_-2px_rgba(0,0,0,0.2)]"
                  style={page.front ? { backgroundImage: `url('${page.front}')` } : undefined}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={flipLeft}
            className="inline-flex items-center rounded-full border border-white/40 bg-white/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:px-6 sm:text-xs"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={flipRight}
            className="inline-flex items-center rounded-full border border-white/40 bg-white/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:px-6 sm:text-xs"
          >
            Next
          </button>
        </div>
      </section>

      {/* View All Case Studies Link */}
      <section className="relative z-[1] px-5 py-16 text-center" style={{ background: 'linear-gradient(180deg, #070312 0%, #0d091e 100%)' }}>
        <div className="mx-auto max-w-[800px]">
          <h2 className="text-[clamp(32px,5vw,48px)] font-black text-white mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Explore Our Brand Stories
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Dive deep into our complete portfolio of branding transformations and success stories.
          </p>
          <a
            href="/case-studies"
            className="inline-flex items-center gap-3 rounded-full px-8 py-4 font-['Montserrat'] text-sm font-bold uppercase tracking-[0.1em] text-white border-2 border-[#adfa3b] bg-[#adfa3b]/10 transition-all duration-300 hover:bg-[#adfa3b] hover:text-[#060811]"
          >
            View All Case Studies
            <span className="text-xl">→</span>
          </a>
        </div>
      </section>

      {/* BRAND KIT & BRANDS GRID */}
      <BrandKitSection />
      <BrandsGridSection />

      <section className="parallax-stack">
        <div className="parallax-inner">
          <div className="parallax-header">
            <p>OUR BEST PROJECTS</p>
            <h2>Our Success Projects</h2>
            <h3>That Inspire</h3>
          </div>

          <ScrollStack
            className="parallax-stack-list"
            useWindowScroll
            itemDistance={80}
            itemScale={0}
            itemStackDistance={14}
            stackPosition="18%"
            scaleEndPosition="8%"
            baseScale={1}
            parallaxStrength={0}
          >
            {[
              { src: '/branding images/SSD_Performance-Marketing-Webpage-2.png', label: 'Brand Strategy' },
              { src: '/branding images/SSD_Performance-Marketing-Webpage-45.png', label: 'Competitive Analysis' },
              { src: '/branding images/SSD_Performance-Marketing-Webpage-50.png', label: 'Brand Guidelines' },
              { src: '/branding images/SSD_Performance-Marketing-Webpage-48.png', label: 'Tone of Voice & Messaging Frameworks' },
              { src: '/branding images/SSD_Performance-Marketing-Webpage-46.png', label: 'Strategic Planning & Alignment' },
              { src: '/branding images/SSD_Performance-Marketing-Webpage-49.png', label: 'Branding & Packaging Design' },
              { src: '/branding images/SSD_Performance-Marketing-Webpage-47.png', label: 'Final Brand Deliverables' },
            ].map((item, idx) => (
              <ScrollStackItem itemClassName="parallax-card" key={`parallax-${item.src}`}>
                <div className="parallax-media" style={{ backgroundImage: `url('${item.src}')` }} />
                <div className="parallax-label">
                  <span>{`0${idx + 1}`}</span>
                  <span>{item.label}</span>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </section>

      <section className="faq-showcase">
        <div className="faq-inner">
          <div className="faq-header">
            <div className="faq-title-block">
              <h2>Any questions?</h2>
            </div>
            <p className="faq-intro">
              Have something on your mind? Whether it’s about our services, process, timelines, or
              pricing — we’ve answered the most common questions to help you move forward with
              clarity and confidence.
            </p>
          </div>

          {(() => {
            const faqItems = [
              {
                question: 'What does a branding project include?',
                answer:
                  'A typical branding project includes identity design, visual system, brand guidelines, and messaging support tailored to your goals.',
              },
              {
                question: 'How long does branding take?',
                answer:
                  'Timelines depend on scope, but most projects take 3–6 weeks including revisions and final delivery.',
              },
              {
                question: 'Can you refresh an existing brand?',
                answer:
                  'Yes. We can evolve your current identity while preserving recognition and improving clarity.',
              },
              {
                question: 'Will I get brand guidelines?',
                answer:
                  'Absolutely. We deliver a clear brand guide to ensure consistent use across all platforms.',
              },
              {
                question: 'Do you also handle content for the brand?',
                answer:
                  'Yes. We can support copy, social templates, and launch assets as part of the package.',
              },
            ];

            return (
              <div className="faq-grid">
                {faqItems.map((item, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div className={`faq-card${isOpen ? ' open' : ''}`} key={item.question}>
                      <button
                        type="button"
                        className="faq-question"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                      >
                        <span>{`${idx + 1}. ${item.question}`}</span>
                        <span className="faq-arrow">⌄</span>
                      </button>
                      <div className="faq-answer">
                        {item.answer}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>
      </section>

      <Section10 />

    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   🛡️ BRAND SOLUTIONS: DUAL CONCEPT COLUMN PANEL
═══════════════════════════════════════════════════════ */
const BrandingSolutionsSection = () => {
  const containerRef = useRef(null);
  
  return (
    <section ref={containerRef} className="relative overflow-hidden px-6 py-20 sm:px-10 lg:py-28" style={{ 
      background: 'linear-gradient(180deg, #070312 0%, #0d091e 100%)',
      paddingTop: 'calc(76px + 3rem)' // Navbar height + extra spacing
    }}>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(173,250,59,0.15) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(139,92,246,0.15) 0%, transparent 40%)'
      }} />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Floating brand icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-[15%] left-[8%] text-4xl animate-[smFloatWobble_7s_ease-in-out_infinite] text-[#a855f7]">
          <FaPalette />
        </div>
        <div className="absolute top-[60%] right-[12%] text-3xl animate-[smFloatWobble_8s_ease-in-out_infinite_1.5s] text-[#adfa3b]">
          <IoSparkles />
        </div>
        <div className="absolute bottom-[20%] left-[15%] text-2xl animate-[smFloatWobble_6s_ease-in-out_infinite_2s] text-[#a855f7]">
          <FaBullseye />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Section Header with Icon */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <FaPalette className="text-3xl text-[#a855f7]" />
            <span className="text-[11px] font-mono font-bold px-4 py-2 bg-[#a855f7]/10 text-[#a855f7] rounded-full uppercase tracking-[0.2em] border border-[#a855f7]/20">
              ✦ BRANDING SOLUTIONS ✦
            </span>
            <IoSparkles className="text-3xl text-[#adfa3b]" />
          </div>
          <h2 className="font-['Bebas_Neue','Impact',sans-serif] text-[clamp(48px,8vw,96px)] font-black uppercase leading-[0.9] mb-4 text-white">
            <span className="text-[#a855f7]">BRAND</span> <span className="text-[#adfa3b]">SOLUTIONS</span>
          </h2>
          <p className="text-white/60 text-base max-w-2xl mx-auto leading-relaxed">
            Building brands that resonate, connect, and dominate their markets
          </p>
        </div>

        {/* Split Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Card: What's a Brand Solution? */}
          <div className="rounded-[32px] border border-[#a855f7]/20 bg-gradient-to-br from-[#120e24]/75 to-[#080411]/75 p-8 sm:p-10 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group hover:border-[#a855f7]/40 transition-all duration-500">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#a855f7]/5 rounded-full blur-3xl pointer-events-none transition-all duration-500 group-hover:bg-[#a855f7]/10" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaLightbulb className="text-2xl text-[#a855f7]" />
                <span className="text-[11px] font-mono font-bold px-3 py-1 bg-[#a855f7]/10 text-[#a855f7] rounded-full uppercase tracking-widest">Core Philosophy</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-pulse" />
              </div>
              <h3 className="font-['Montserrat'] text-[clamp(28px,3.5vw,42px)] font-black uppercase text-white leading-tight mb-6 group-hover:text-[#a855f7] transition-colors duration-300">
                What's a <span className="text-[#a855f7]">Brand Solution?</span>
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                A brand is not just how it looks. It’s how it’s understood, remembered, and chosen.
              </p>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                A branding solution brings structure to defining what your brand stands for, how it communicates, and how it shows up everywhere. Because without clarity, even good brands get ignored.
              </p>
            </div>
            
            <div className="border-t border-white/5 pt-6 mt-6 flex items-center justify-between text-[11px] font-mono text-white/40">
              <span>Fidelity Standard</span>
              <span>[BUZZIWAH V-01]</span>
            </div>
          </div>

          {/* Right Card: Buzziwah Approach */}
          <div className="rounded-[32px] border border-[#adfa3b]/20 bg-gradient-to-br from-[#12161f]/60 to-[#0c0f16]/60 p-8 sm:p-10 backdrop-blur-md relative overflow-hidden flex flex-col justify-between group shadow-[0_20px_45px_rgba(0,0,0,0.4)] hover:border-[#adfa3b]/40 transition-all duration-500">
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#adfa3b]/5 rounded-full blur-3xl pointer-events-none transition-all duration-500 group-hover:bg-[#adfa3b]/10" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaRocket className="text-2xl text-[#adfa3b]" />
                <span className="text-[11px] font-mono font-bold px-3 py-1 bg-[#adfa3b]/15 text-[#adfa3b] rounded-full uppercase tracking-widest">Our Methodology</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#adfa3b] animate-ping" />
              </div>
              <h3 className="font-['Montserrat'] text-[clamp(28px,3.5vw,42px)] font-black uppercase text-white leading-tight mb-6 group-hover:text-[#adfa3b] transition-colors duration-300">
                The Buzziwah <span className="text-[#adfa3b]">Approach</span>
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 font-semibold italic">
                "We don’t just make brands look good."
              </p>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                We make sure they make sense, connect deeply with real people, and stay dynamically consistent across every single touchpoint — physical, digital, and virtual.
              </p>
            </div>

            <div className="border-t border-white/5 pt-6 mt-6 flex items-center justify-between text-[11px] font-mono text-white/40">
              <span>Brand Cohesion System</span>
              <span className="text-[#adfa3b] font-bold">STRICT_RECALL</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════
   ⚡ BRAND KIT BLUEPRINTS SECTION
═══════════════════════════════════════════════════════ */
const BrandKitSection = () => {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:py-24" style={{ background: '#060410' }}>
      {/* Blueprint Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]" style={{
        backgroundImage: 'linear-gradient(rgba(173,250,59,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-gradient-to-tl from-[#a855f7]/5 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Title Block */}
        <div className="mb-14 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a855f7] mb-3">✦ BRAND KIT SYSTEM ✦</p>
          <h2 className="font-['Bebas_Neue','Impact',sans-serif] text-[clamp(56px,10vw,120px)] font-black uppercase leading-[0.85] mb-2" style={{
            color: 'transparent',
            WebkitTextStroke: '2px white',
            textShadow: '6px 6px 0 rgba(124,58,237,0.4)',
          }}>
            WHAT'S IN A
          </h2>
          <h2 className="font-['Bebas_Neue','Impact',sans-serif] text-[clamp(56px,10vw,120px)] font-black uppercase leading-[0.85] mb-4" style={{
            color: '#adfa3b',
            WebkitTextStroke: '2px white',
            textShadow: '6px 6px 0 rgba(0,0,0,0.5)',
          }}>
            BRAND KIT?
          </h2>
          <p className="mt-4 max-w-2xl text-white/50 text-sm sm:text-base leading-relaxed mx-auto">
            A brand kit is not just a logo file. It’s the structured blueprint and ecosystem behind your entire brand presence.
          </p>
          <div className="h-[2px] w-24 bg-[#a855f7] mx-auto mt-6 rounded-full" />
        </div>

        {/* NEW DESIGN - Accordion/Timeline Style */}
        <div className="space-y-3">
          {[
            { num: "01", title: "Brand Strategy", details: "Purpose, market positioning, values, target audiences, and core messaging directions.", IconComponent: FaBullseye },
            { num: "02", title: "Brand Story & Copy", details: "Elevator pitches, brand stories, communication manuals, and headline rules.", IconComponent: FaBook },
            { num: "03", title: "Logo System & Guides", details: "Responsive spacing rules, primary & secondary logos, scales, and usage guidelines.", IconComponent: FaPaintBrush },
            { num: "04", title: "Color Palette & Codes", details: "Exact digital hex codes, RGB, CMYK guidelines, and contrast structures.", IconComponent: MdColorLens },
            { num: "05", title: "Typography System", details: "Strict font families, scale hierarchies, text alignments, and leading rules.", IconComponent: FaFont },
            { num: "06", title: "Visual Direction", details: "Imagery directions, asset styles, design layouts, and aesthetic tone.", IconComponent: FaImage },
            { num: "07", title: "Content Tone", details: "Conversational tones, messaging style rules, and engagement guidelines.", IconComponent: FaComments },
            { num: "08", title: "Consistency System", details: "Unified frameworks guaranteeing consistent delivery across all channels.", IconComponent: FaShieldAlt }
          ].map((item, idx) => {
            const IconComponent = item.IconComponent;
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                className="group relative rounded-2xl border border-white/5 bg-gradient-to-r from-white/[0.02] to-white/[0.01] hover:border-[#adfa3b]/30 transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7]/5 to-[#adfa3b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10 flex items-center gap-6 p-6">
                  {/* Number Circle */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#a855f7]/20 to-[#adfa3b]/20 border border-white/10 flex items-center justify-center">
                    <span className="font-['Bebas_Neue'] text-2xl font-black" style={{ color: isEven ? '#a855f7' : '#adfa3b' }}>
                      {item.num}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#a855f7]/10 to-[#adfa3b]/10 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-xl" style={{ color: isEven ? '#a855f7' : '#adfa3b' }} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-['Montserrat'] text-base font-extrabold text-white uppercase tracking-wide mb-2 group-hover:text-[#adfa3b] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                  
                  {/* Verified Badge */}
                  <div className="flex-shrink-0 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5">
                    <span className="w-2 h-2 rounded-full bg-[#adfa3b] animate-pulse" />
                    <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase whitespace-nowrap">
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════
   🌟 PORTFOLIO BRANDS SHOWCASE GRID & CTA BANNER
═══════════════════════════════════════════════════════ */
const BrandsGridSection = () => {
  const containerRef = useRef(null);
  
  return (
    <section ref={containerRef} className="relative overflow-hidden px-6 py-20 sm:px-10 lg:py-28" style={{ background: '#070312' }}>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.1) 0%, transparent 50%)'
      }} />

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-[18%] left-[12%] text-3xl animate-[smFloatWobble_7s_ease-in-out_infinite]">🏆</div>
        <div className="absolute top-[65%] right-[15%] text-2xl animate-[smFloatWobble_8s_ease-in-out_infinite_1.5s]">⭐</div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <FaTrophy className="text-3xl text-[#a855f7]" />
            <span className="text-[11px] font-mono font-bold px-4 py-2 bg-[#a855f7]/10 text-[#a855f7] rounded-full uppercase tracking-[0.2em] border border-[#a855f7]/20">
              ✦ PORTFOLIO SHOWCASE ✦
            </span>
            <FaStar className="text-3xl text-[#adfa3b]" />
          </div>
          <h2 className="font-['Bebas_Neue','Impact',sans-serif] text-[clamp(56px,10vw,120px)] font-black uppercase leading-[0.85] mb-2" style={{
            color: 'transparent',
            WebkitTextStroke: '2px white',
            textShadow: '6px 6px 0 rgba(124,58,237,0.4)',
          }}>
            BRANDS BUILT
          </h2>
          <h2 className="font-['Bebas_Neue','Impact',sans-serif] text-[clamp(56px,10vw,120px)] font-black uppercase leading-[0.85] mb-4" style={{
            color: '#adfa3b',
            WebkitTextStroke: '2px white',
            textShadow: '6px 6px 0 rgba(0,0,0,0.5)',
          }}>
            BY BUZZIWAH
          </h2>
          <p className="mt-4 max-w-xl text-white/50 text-sm sm:text-base leading-relaxed mx-auto">
            A look at the professional identities, positioning strategies, and design directions we've established for our partners.
          </p>
        </div>

        {/* NEW DESIGN - Masonry/Bento Grid with Featured Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-16">
          {[
            { name: "Angola Academy", cat: "Education" },
            { name: "Skill Incarnate", cat: "EdTech" },
            { name: "Kovedaa", cat: "Wellness" },
            { name: "BodhiAble", cat: "Accessibility" },
            { name: "Samrat Restaurant", cat: "Hospitality" },
            { name: "Wisden Clinics", cat: "Healthcare" },
            { name: "Locally Groomed", cat: "Aesthetics" },
            { name: "Kalpavriksha Wedding Venue", cat: "Events" },
            { name: "Sindoor Collection", cat: "E-Commerce" },
            { name: "Crime Stopper", cat: "Security" },
            { name: "Sri Vidyanikethan School", cat: "Academy" },
            { name: "Aanya Hospital", cat: "Healthcare" }
          ].map((brand, idx) => {
            // Make some cards span 2 columns for visual interest
            const isFeatured = idx === 0 || idx === 5 || idx === 10;
            const colSpan = isFeatured ? 'md:col-span-2' : '';
            
            return (
            <div 
              key={idx} 
              className={`group relative rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-white/[0.01] p-5 hover:border-[#adfa3b]/30 hover:shadow-[0_10px_30px_rgba(173,250,59,0.1)] transition-all duration-300 flex flex-col justify-between min-h-[140px] ${colSpan} overflow-hidden`}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/5 to-[#adfa3b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Number badge */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-gradient-to-br from-[#a855f7]/10 to-[#adfa3b]/10 border border-white/5 flex items-center justify-center">
                <span className="text-[10px] font-['Bebas_Neue'] font-black text-white/30">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
              
              <div className="relative z-10">
                {/* Brand Name */}
                <h4 className="font-['Montserrat'] text-sm font-extrabold text-white uppercase tracking-wide leading-tight mb-3 group-hover:text-[#adfa3b] transition-colors duration-200 pr-10">
                  {brand.name}
                </h4>
              </div>
              
              {/* Category Badge */}
              <div className="relative z-10 flex items-center gap-2">
                <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
                <span className="text-[9px] font-mono font-black uppercase tracking-widest px-2 py-1 rounded-md" style={{
                  color: '#a855f7',
                  background: 'rgba(168, 85, 247, 0.1)',
                }}>
                  {brand.cat}
                </span>
              </div>
            </div>
          )})}
        </div>

        {/* Let's get your brand right Banner */}
        <div className="rounded-[32px] border border-white/5 bg-gradient-to-r from-[#120a26]/75 to-[#080411]/75 p-8 sm:p-12 backdrop-blur-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(173,250,59,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="text-center md:text-left">
            <h3 className="font-['Montserrat'] text-[24px] sm:text-[32px] font-black text-white uppercase tracking-wide mb-3">
              Let’s get your brand right.
            </h3>
            <p className="text-white/60 text-sm max-w-lg leading-relaxed">
              Ready to craft a coherent system that positions your business, scaling your trust, and maximizing your market choice metrics?
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="/case-studies"
              className="rounded-full px-8 py-3.5 font-['Montserrat'] text-xs font-bold uppercase tracking-[0.08em] text-center text-white border-2 border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-200"
            >
              Know More
            </a>
            <a 
              href="/contact"
              className="rounded-full px-8 py-3.5 font-['Montserrat'] text-xs font-bold uppercase tracking-[0.08em] text-center text-black transition-all duration-200"
              style={{ background: '#adfa3b' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#a855f7'; e.currentTarget.style.color = '#ffffff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#adfa3b'; e.currentTarget.style.color = '#000000'; }}
            >
              Get In Touch
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Branding;
