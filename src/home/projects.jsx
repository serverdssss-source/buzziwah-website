const CARDS = [
    {
        id: 1,
        title: "Aanya Hospital",
        tag: "Branding · Digital",
        url: "/case-study/aanya-hospital",
        img: "/PROJECTS HOME PAGE /AH-CC-02.png",
        video: "/PROJECTS HOME PAGE /aanya.mp4"
    },
    {
        id: 2,
        title: "Ramesh Aravind",
        tag: "Branding · Social",
        url: "/case-study/ramesh-arvind",
        img: "/PROJECTS HOME PAGE /RAMESH ARVIND.png",
        video: "/PROJECTS HOME PAGE /ramesh arvind.mp4"
    },
    {
        id: 3,
        title: "HearFon",
        tag: "Video · Production",
        url: "/case-study/hearfon",
        img: "/PROJECTS HOME PAGE /HEARPHON.png",
        video: "/PROJECTS HOME PAGE /hearphon.mp4"
    },
    {
        id: 4,
        title: "WMN",
        tag: "Web · Marketing",
        url: "/case-study/wmn-healthcare",
        img: "/PROJECTS HOME PAGE /WMN Doctors.png",
        video: "/PROJECTS HOME PAGE /wmn.mp4"
    },
    {
        id: 5,
        title: "Tent Cinema",
        tag: "Social · Leads",
        url: "/case-study/tent-cinema",
        img: "/PROJECTS HOME PAGE /TENT .webp",
        video: "/PROJECTS HOME PAGE /tent cenima.mp4"
    },
    {
        id: 6,
        title: "Kovedaa",
        tag: "Branding · Web",
        url: "/case-study/kovedaa",
        img: "/PROJECTS HOME PAGE /Kovedaa.png",
        video: "/PROJECTS HOME PAGE /kovedaa.mp4"
    },
    {
        id: 7,
        title: "Sindoor Collection",
        tag: "Branding · Website · Product Shoot",
        url: "/case-study/sindoor-collection",
        img: "/best works/srichakra_case.webp",
        video: ""
    }
];

// Local images for the parallax - using real high-fidelity portfolio assets!
const PARALLAX_IMAGES = [
    "/PROJECTS HOME PAGE /AH-CC-02.png",
    "/PROJECTS HOME PAGE /RAMESH ARVIND.png",
    "/PROJECTS HOME PAGE /HEARPHON.png",
    "/PROJECTS HOME PAGE /WMN Doctors.png",
    "/PROJECTS HOME PAGE /TENT .webp",
    "/PROJECTS HOME PAGE /Kovedaa.png",
    "/best works/srichakra_case.webp"
];

import React, { useRef } from "react";
import { ReactLenis } from "lenis/react";
import {
    motion,
    AnimatePresence,
    useMotionTemplate,
    useScroll,
    useTransform,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const WaterDropletEffect = () => {
  const [drops, setDrops] = React.useState([]);
  const [ripples, setRipples] = React.useState([]);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const dropInterval = setInterval(() => {
      const id = Math.random().toString(36).substring(2, 9);
      const left = Math.random() * 100;
      const scale = 0.3 + Math.random() * 0.7; 
      const speed = 1.8 + Math.random() * 2.2; 

      setDrops((prev) => [...prev, { id, left, scale, speed }]);

      setTimeout(() => {
        setDrops((prev) => prev.filter((d) => d.id !== id));

        const rippleId = Math.random().toString(36).substring(2, 9);
        const size = 30 + Math.random() * 50; 
        setRipples((prev) => [
          ...prev,
          { id: rippleId, x: left, y: 90 + Math.random() * 8, size }
        ]);

        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== rippleId));
        }, 1200);

      }, speed * 1000);
    }, 400); 

    return () => clearInterval(dropInterval);
  }, []);

  return (
    <div ref={containerRef} className="water-droplet-container">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="water-drop"
          style={{
            left: `${drop.left}%`,
            animationDuration: `${drop.speed}s`,
            transform: `scale(${drop.scale})`
          }}
        />
      ))}

      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="water-ripple"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
            width: `${ripple.size}px`,
            height: `${ripple.size}px`
          }}
        />
      ))}
    </div>
  );
};

export default function SmoothScrollHero() {
    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const sectionHeight = isMobile ? 1200 : 2600;

    return (
        <div id="projects" className="bg-[#060811] relative z-10 w-full overflow-hidden border-t border-b border-white/5">
            <WaterDropletEffect />
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#adfa3b]/12 blur-[150px] pointer-events-none" />
            
            {/* High-fidelity background decorations */}
            <div className="bbbbb-bg-decorations pointer-events-none select-none opacity-95">
                <div className="bbbbb-orb bbbbb-orb-purple" />
                <div className="bbbbb-orb bbbbb-orb-lime" />
                <div className="bbbbb-grid-perspective" />
                
                {/* Animated technical lines and vector curves */}
                <svg className="bbbbb-decor-waves animate-pulse" style={{ animationDuration: '8s' }} viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Sweeping diagonal orbit halo */}
                  <path d="M-200,600 Q720,-100 1640,600" stroke="rgba(168, 85, 247, 0.45)" strokeWidth="1.5" strokeDasharray="16 12" />
                  
                  <path d="M-100,200 C300,100 500,400 900,150 C1100,50 1300,300 1600,200" stroke="rgba(168, 85, 247, 0.65)" strokeWidth="2" strokeDasharray="8 6" />
                  <path d="M-100,280 C320,180 540,480 940,230 C1140,130 1340,380 1640,280" stroke="rgba(173, 250, 59, 0.55)" strokeWidth="1.8" />
                  <path d="M-50,450 C380,350 480,100 880,300 C1080,400 1280,150 1580,350" stroke="rgba(168, 85, 247, 0.45)" strokeWidth="1.5" />
                  
                  {/* Target concentric circles and telemetry coordinates */}
                  <circle cx="180" cy="160" r="90" stroke="rgba(168, 85, 247, 0.45)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle cx="180" cy="160" r="130" stroke="rgba(173, 250, 59, 0.4)" strokeWidth="1.5" />
                  <circle cx="1180" cy="380" r="160" stroke="rgba(168, 85, 247, 0.45)" strokeWidth="1.5" strokeDasharray="12 6" />
                  <circle cx="1180" cy="380" r="220" stroke="rgba(173, 250, 59, 0.35)" strokeWidth="1.5" />
                  
                  {/* Precision telemetry crosshairs */}
                  <path d="M170,160 L190,160 M180,150 L180,170" stroke="rgba(173, 250, 59, 0.85)" strokeWidth="2" />
                  <path d="M1170,380 L1190,380 M1180,370 L1180,390" stroke="rgba(168, 85, 247, 0.85)" strokeWidth="2" />
                  {/* Glowing tech hexagons & concentric network node shapes */}
                  <polygon points="1220,130 1260,155 1260,205 1220,230 1180,205 1180,155" stroke="rgba(173, 250, 59, 0.45)" strokeWidth="1.5" strokeDasharray="4 2" />
                  <polygon points="1220,130 1260,155 1260,205 1220,230 1180,205 1180,155" stroke="rgba(173, 250, 59, 0.35)" strokeWidth="4" opacity="0.6" />
                  <polygon points="140,480 170,498 170,532 140,550 110,532 110,498" stroke="rgba(168, 85, 247, 0.45)" strokeWidth="1.8" />
                </svg>
        
                {/* Floating technical plus particles (+) */}
                <div className="bbbbb-tech-plus bbbbb-tp-1 font-black text-[#adfa3b] text-base">+</div>
                <div className="bbbbb-tech-plus bbbbb-tp-2 font-black text-[#C084FC] text-base">+</div>
                <div className="bbbbb-tech-plus bbbbb-tp-3 font-black text-[#adfa3b] text-base">+</div>
                <div className="bbbbb-tech-plus bbbbb-tp-4 font-black text-[#C084FC] text-base">+</div>

                {/* Large translucent decorative brand watermarks in 'Geom' and 'Syne' font */}
                <div className="absolute top-[12%] left-[2%] text-transparent select-none pointer-events-none text-[8vw] md:text-[10vw] font-black tracking-[0.25em] uppercase opacity-40 rotate-[-5deg]" style={{ fontFamily: "'Syne', sans-serif", WebkitTextStroke: '1px rgba(255,255,255,0.45)' }}>
                    WE BUZZ
                </div>
                <div className="absolute top-[52%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white/[0.06] select-none pointer-events-none text-[12vw] font-black tracking-[0.3em] uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>
                    WE BUZZ
                </div>
                <div className="absolute bottom-[10%] right-[3%] text-transparent select-none pointer-events-none text-[8vw] md:text-[10vw] font-black tracking-[0.25em] uppercase opacity-40 rotate-[4deg]" style={{ fontFamily: "'Syne', sans-serif", WebkitTextStroke: '1px rgba(255,255,255,0.45)' }}>
                    BUZZIWAH
                </div>
            </div>

            {/* Premium Section Title Header */}
            <div className="w-full text-center pt-28 pb-4 bg-transparent relative z-30">
                <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.35em] text-white/50 mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                    OUR PORTFOLIO
                </span>
                <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tight retro-10" style={{ fontFamily: "'Syne', sans-serif" }}>
                    Look what we did.
                </h2>
            </div>

            <ReactLenis
                root
                options={{
                    lerp: 0.05,
                }}
            >
                <Hero sectionHeight={sectionHeight} />
            </ReactLenis>
        </div>
    );
}

const Hero = ({ sectionHeight }) => {
    return (
        <div
            style={{ height: `calc(${sectionHeight}px + 100vh)` }}
            className="relative w-full"
        >
            <CenterImage sectionHeight={sectionHeight} />
            <ParallaxImages />
            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-[#060811]" />
        </div>
    );
};

const CenterImage = ({ sectionHeight }) => {
    const { scrollY } = useScroll();

    const clip1 = useTransform(scrollY, [0, 800], [25, 0]);
    const clip2 = useTransform(scrollY, [0, 800], [75, 100]);

    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

    const backgroundSize = useTransform(
        scrollY,
        [0, sectionHeight + 300],
        ["170%", "100%"]
    );
    const opacity = useTransform(
        scrollY,
        [sectionHeight, sectionHeight + 500],
        [1, 0]
    );

    return (
        <motion.div
            className="sticky top-0 h-screen w-full"
            style={{
                clipPath,
                backgroundSize,
                opacity,
                backgroundImage: "url('/PROJECTS HOME PAGE /RAMESH ARVIND.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h2 className="text-5xl md:text-8xl font-black text-white text-center drop-shadow-2xl retro-10" style={{ fontFamily: "'Syne', sans-serif" }}>
                    Look what we did.
                </h2>
            </div>
        </motion.div>
    );
};

// Parallax config: pair each card with an image, stagger left/right
const PARALLAX_CONFIG = CARDS.map((card, i) => ({
    card,
    src: card.img,
    side: i % 2 === 0 ? "left" : "right",
    start: i % 2 === 0 ? 0 : 150,
    end: i % 2 === 0 ? -300 : -450,
}));

const ParallaxImages = () => {
    return (
        <div className="relative z-20 mt-[-100vh] pt-[25vh] pb-[10vh]" style={{ maxWidth: '1400px', margin: '0 auto', marginTop: '-100vh', padding: '25vh 24px 10vh' }}>
            
            {/* Row 1 — small left, large right */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10 md:mb-16 items-center md:items-start justify-between">
                <ParallaxCard
                    card={CARDS[0]}
                    start={0} end={-250}
                    style={{ width: '38%', maxWidth: '380px', marginTop: '0' }}
                />
                <ParallaxCard
                    card={CARDS[1]}
                    start={120} end={-380}
                    style={{ width: '50%', maxWidth: '480px', marginTop: '80px' }}
                />
            </div>

            {/* Row 2 — medium left, small right */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10 md:mb-16 items-center md:items-start justify-between">
                <ParallaxCard
                    card={CARDS[2]}
                    start={80} end={-320}
                    style={{ width: '45%', maxWidth: '420px', marginTop: '40px' }}
                />
                <ParallaxCard
                    card={CARDS[3]}
                    start={0} end={-280}
                    style={{ width: '38%', maxWidth: '360px', marginTop: '0' }}
                />
            </div>

            {/* Row 3 — medium left (Tent Cinema), medium right (Kovedaa) */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10 md:mb-16 items-center md:items-start justify-between">
                <ParallaxCard
                    card={CARDS[4]}
                    start={60} end={-350}
                    style={{ width: '42%', maxWidth: '380px', marginTop: '0' }} // Compact Tent Cinema card!
                />
                <ParallaxCard
                    card={CARDS[5]}
                    start={100} end={-300}
                    style={{ width: '45%', maxWidth: '420px', marginTop: '60px' }}
                />
            </div>

            {/* Row 4 — Centered focal final showcase (Sri Chakra) */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10 md:mb-16 items-center md:items-start justify-center">
                <ParallaxCard
                    card={CARDS[6]}
                    start={80} end={-350}
                    style={{ width: '45%', maxWidth: '420px' }}
                />
            </div>
        </div>
    );
};

const ParallaxCard = ({ card, start, end, style = {} }) => {
    const ref = useRef(null);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const adjustedStart = isMobile ? Math.round(start * 0.4) : start;
    const adjustedEnd = isMobile ? Math.round(end * 0.4) : end;

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${adjustedStart}px end`, `end ${adjustedEnd * -1}px`],
    });

    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
    const y = useTransform(scrollYProgress, [0, 1], [adjustedStart, adjustedEnd]);
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

    const finalTransform = isMobile ? 'none' : transform;
    const finalOpacity = isMobile ? 1 : opacity;

    return (
        <motion.a
            ref={ref}
            href={card.url}
            target={card.url.startsWith("/") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="relative block group cursor-pointer shrink-0 overflow-hidden rounded-3xl mx-auto w-full"
            style={{ 
                transform: finalTransform, 
                opacity: finalOpacity, 
                maxWidth: '380px',
                ...style,
                width: isMobile ? '100%' : style.width,
                marginTop: isMobile ? '1.5rem' : style.marginTop
            }}
        >
            {card.video ? (
                <video
                    preload="none"
                    loop
                    muted
                    playsInline
                    ref={(el) => {
                        if (!el) return;
                        // Only load + play when the card scrolls into view
                        const io = new IntersectionObserver(
                            ([entry]) => {
                                if (entry.isIntersecting) {
                                    el.src = card.video; // set src lazily
                                    el.load();
                                    el.play().catch(() => {});
                                } else {
                                    el.pause();
                                }
                            },
                            { threshold: 0.15, rootMargin: '100px' }
                        );
                        io.observe(el);
                    }}
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                />
            ) : (
                <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                />
            )}
            
            {/* Soft bottom text shade (only 120px tall, does NOT cover or darken the video!) */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-3 pointer-events-none">
                <div className="min-w-0">
                    <h3 className="text-white text-base md:text-xl font-black drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] uppercase tracking-wider retro-sm" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {card.tag.replace(' · ', ' & ')}
                    </h3>
                </div>
                <div
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold uppercase tracking-wider text-[9px] md:text-[10px] rounded-full group-hover:bg-[#C084FC] group-hover:border-[#C084FC] transition-all duration-300 shrink-0 whitespace-nowrap pointer-events-auto shadow-md"
                >
                    Know More <FiArrowRight className="text-xs" />
                </div>
            </div>
        </motion.a>
    );
};