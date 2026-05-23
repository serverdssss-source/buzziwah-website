"use client"

import { useState, useRef, useLayoutEffect, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const openings = [
    { role: "Social Media Manager", dept: "Strategy", type: "Full-time", location: "Bengaluru", blurb: "Lead motion systems for India's fastest-growing brand campaigns. You'll define the language of movement across digital and broadcast." },
    { role: "Reel Content Creators", dept: "Creative", type: "Full-time", location: "Remote", blurb: "Decode culture, map audiences, build brand frameworks that outlast trends. Strategy here means having a real point of view." },
    { role: "3D Visualisation Artist", dept: "Creative", type: "Contract", location: "Hybrid", blurb: "Bring concepts to life in three dimensions. Product viz, environments, abstract brand worlds — you decide what's possible." },
    { role: "Creative Project Manager", dept: "Operations", type: "Full-time", location: "Bengaluru", blurb: "Keep extraordinary creative work moving. You'll work across teams to ship bold campaigns on time without dimming the spark." },
    { role: "UI/UX Designer", dept: "Product", type: "Full-time", location: "Remote", blurb: "Design digital products where craft and usability are inseparable. Every screen should feel like it was made by someone who cares." },
]

const policies = [
    { num: "01", title: "Flexible Hours", desc: "We measure output, not clock-in time. Own your day." },
    { num: "02", title: "Remote-First", desc: "Work from wherever creativity comes easiest." },
    { num: "03", title: "Learning Budget", desc: "₹50K annual stipend — courses, books, conferences." },
    { num: "04", title: "Wellness Days", desc: "12 mental health days per year, no questions asked." },
    { num: "05", title: "Equity Sharing", desc: "Profit-sharing for every full-time team member." },
    { num: "06", title: "Sabbatical", desc: "3-month paid sabbatical after every 3 years." },
]

const WHY = [
    { title: "Real Ownership", body: "Your name is on the work. Your ideas ship." },
    { title: "Global Brands", body: "Indian creativity reaching international audiences." },
    { title: "Flat Structure", body: "Flat decisions. No noise. Pure creative focus." },
    { title: "Senior Mentorship", body: "Learn from India's sharpest creative directors." },
    { title: "Ethics-Led", body: "We only take work we actually believe in." },
]

export default function Careers() {
    const [filter, setFilter] = useState("All")
    const [selectedJob, setSelectedJob] = useState(0)
    const depts = ["All", "Creative", "Strategy", "Operations", "Product"]
    const filtered = filter === "All" ? openings : openings.filter(o => o.dept === filter)

    const heroRef = useRef<HTMLElement>(null)
    const h1aRef = useRef<HTMLDivElement>(null)
    const h1bRef = useRef<HTMLDivElement>(null)
    const h1cRef = useRef<HTMLDivElement>(null)
    const subRef = useRef<HTMLDivElement>(null)
    const ctaRef = useRef<HTMLDivElement>(null)
    const mainRef = useRef<HTMLElement>(null)
    const spotlightRef = useRef<HTMLElement>(null)
    const cardCRef = useRef<HTMLDivElement>(null)
    const cardL1Ref = useRef<HTMLDivElement>(null)
    const cardR1Ref = useRef<HTMLDivElement>(null)
    const cardL2Ref = useRef<HTMLDivElement>(null)
    const cardR2Ref = useRef<HTMLDivElement>(null)
    const terminalRef = useRef<HTMLDivElement>(null)

    // GSAP Animate terminal panel elements whenever selection switches
    useEffect(() => {
        if (terminalRef.current) {
            gsap.fromTo(
                terminalRef.current.children,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power3.out" }
            )
        }
    }, [selectedJob, filter])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const ctx = gsap.context(() => {
            const els = [h1aRef.current, h1bRef.current, h1cRef.current, subRef.current, ctaRef.current].filter(Boolean)
            gsap.set(els, { opacity: 0, y: 60 })
            const tl = gsap.timeline({ delay: 0.1, defaults: { ease: "power3.out" } })
            h1aRef.current && tl.to(h1aRef.current, { opacity: 1, y: 0, duration: 1 })
            h1bRef.current && tl.to(h1bRef.current, { opacity: 1, y: 0, duration: 1 }, "-=.65")
            h1cRef.current && tl.to(h1cRef.current, { opacity: 1, y: 0, duration: 1 }, "-=.65")
            subRef.current && tl.to(subRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=.45")
            ctaRef.current && tl.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=.4")
            ctaRef.current && tl.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=.4")

            if (spotlightRef.current) {
                gsap.set([cardCRef.current, cardL1Ref.current, cardR1Ref.current, cardL2Ref.current, cardR2Ref.current], {
                    y: -150,
                    opacity: 0,
                })

                const sptl = gsap.timeline({
                    scrollTrigger: {
                        trigger: spotlightRef.current,
                        start: "top 80%",
                        end: "center center",
                        scrub: 1.5,
                    }
                })

                sptl.to(cardCRef.current, { y: 0, opacity: 1, duration: 1, ease: "power2.out" })
                    .to([cardL1Ref.current, cardR1Ref.current], { y: 0, opacity: 1, duration: 1, ease: "power2.out" }, "-=0.7")
                    .to([cardL2Ref.current, cardR2Ref.current], { y: 0, opacity: 1, duration: 1, ease: "power2.out" }, "-=0.7")
            }

            // Animated Pillar Row Runway
            const rows = gsap.utils.toArray<HTMLElement>(".pillar-row")
            rows.forEach((row) => {
                const num = row.querySelector(".pillar-num")
                const title = row.querySelector(".pillar-title")
                const text = row.querySelector(".pillar-text")
                const accent = row.querySelector(".pillar-accent")

                gsap.set([title, text], { opacity: 0, y: 50 })
                gsap.set(num, { opacity: 0, scale: 0.85, y: 60 })
                gsap.set(accent, { scaleX: 0, transformOrigin: "left center" })

                const rowTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: row,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse",
                    }
                })

                rowTl.to(accent, { scaleX: 1, duration: 0.5, ease: "power2.out" })
                     .to(num, { opacity: 0.12, scale: 1, y: 0, duration: 0.6, ease: "back.out(1.2)" }, "-=0.3")
                     .to(title, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.4")
                     .to(text, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.4")
            })

            // Matrix Cards Grid Stagger-in
            const cards = gsap.utils.toArray<HTMLElement>(".matrix-card")
            if (cards.length > 0) {
                gsap.set(cards, { opacity: 0, y: 30 })
                gsap.to(cards, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.08,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".matrix-grid",
                        start: "top 85%",
                    }
                })
            }
        }, mainRef)
        return () => ctx.revert()
    }, [])

    return (
        <main
            ref={mainRef}
            className="carrer-page-wrapper text-white overflow-x-hidden pt-28 pb-10"
        >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=DM+Sans:wght@300;400;500;700&display=swap');

                .carrer-page-wrapper {
                    --font-display: 'Barlow Condensed', sans-serif;
                    --font-body: 'DM Sans', sans-serif;
                    font-family: var(--font-body);
                }

                @keyframes marq { from { transform: translateX(0) } to { transform: translateX(-50%) } }
                @keyframes slideDown { from { opacity:0; transform:translateY(-10px) } to { opacity:1; transform:translateY(0) } }
                .slide-down { animation: slideDown .35s cubic-bezier(.16,1,.3,1) both; }

                .role-row { 
                    border-bottom: 0.5px solid rgba(255,255,255,.07); 
                    transition: padding-left .3s cubic-bezier(.16,1,.3,1), background .3s cubic-bezier(.16,1,.3,1); 
                }
                .role-row:hover { 
                    background: rgba(173,250,59,.03); 
                    padding-left: 12px;
                }
                .role-row:hover .role-title { 
                    color: #adfa3b; 
                    text-shadow: 0 0 15px rgba(173,250,59,0.25);
                }
                .role-title { 
                    transition: color .25s ease; 
                }

                .why-row { border-bottom: 0.5px solid rgba(173,250,59,.1); transition: padding-left .25s ease, background .25s ease; }
                .why-row:hover { padding-left: 16px; background: rgba(173,250,59,.03); }
                .why-row:hover .why-t { color: #adfa3b; }
                .why-t { transition: color .25s ease; }
                .why-b { max-height:0; opacity:0; overflow:hidden; transition: max-height .35s ease, opacity .35s ease; }
                .why-row:hover .why-b { max-height:48px; opacity:1; }

                .pol-card { transition: transform .3s cubic-bezier(.16,1,.3,1), border-color .3s ease; }
                .pol-card:hover { transform: translateY(-6px); border-color: rgba(173,250,59,.35) !important; }
                .pol-card:hover .pol-num { color: #adfa3b; }
                .pol-num { transition: color .3s ease; }
            `}</style>

            {/* ══════════════════════════
                §1  HERO
                bg: Cyber Space Black (#060811)
            ══════════════════════════ */}
            <section
                ref={heroRef}
                className="relative min-h-[7vh] md:h-[70vh] flex flex-col justify-center overflow-hidden"
                style={{ background: "#060811" }}
            >
                {/* Hero Aesthetic Bento Grid */}
                <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                    <div className="w-full h-full grid grid-cols-3 sm:grid-cols-8 md:grid-cols-10 gap-1 sm:gap-2 md:gap-3 content-center px-3 sm:px-4 md:px-0">
                        {Array.from({ length: 60 }).map((_, i) => {
                            // In a 10-column grid, indices ending in 7, 8, or 9 fall exclusively on the rightmost 30% of the screen.
                            const rightSideIndices = [44, 21, 36, 25, 28, 48];
                            const mobileImageIndices = [33, 7, 13, 24, 38, 53];
                            const isImage = rightSideIndices.includes(i);
                            const isMobileImage = mobileImageIndices.includes(i);
                            const imgPaths = ['/careers/42.png', '/careers/431_new.png', '/careers/41.png', '/careers/44.png', '/careers/45_new.png', '/careers/432_new.png'];
                            let content = null;
                            let bgClass = "bg-transparent";

                            if (isImage) {
                                bgClass = "shadow-[0_4px_25px_rgba(173,250,59,0.15)] bg-white/5 border border-white/10 overflow-hidden";
                                content = <img src={imgPaths[rightSideIndices.indexOf(i)]} alt="Culture Core" className="hidden sm:block w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-500" />;
                            } else if (isMobileImage) {
                                bgClass = "shadow-[0_4px_25px_rgba(173,250,59,0.15)] bg-white/5 border border-white/10 overflow-hidden";
                                content = <img src={imgPaths[mobileImageIndices.indexOf(i)]} alt="Culture Core" className="block sm:hidden w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-500" />;
                            } else if (i % 7 === 0) {
                                // Neon green tile
                                bgClass = "bg-[#adfa3b]/[0.05] border border-[#adfa3b]/[0.15] shadow-[0_0_20px_rgba(173,250,59,0.08)] backdrop-blur-sm";
                            } else if (i % 3 === 0) {
                                // Neon purple tile
                                bgClass = "bg-[#a855f7]/[0.05] border border-[#a855f7]/[0.15] shadow-[0_0_20px_rgba(168,85,247,0.08)] backdrop-blur-sm";
                            } else {
                                bgClass = "bg-white/[0.01] border border-white/[0.04]";
                            }

                            return (
                                <div
                                    key={i}
                                    className={`rounded-[12px] sm:rounded-[18px] md:rounded-[24px] aspect-square transition-all duration-1000 ${bgClass}`}
                                >
                                    {content}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Radial washes */}
                <div
                    className="absolute bottom-0 right-0 w-[700px] h-[600px] pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at 90% 100%, rgba(168,85,247,0.15) 0%, transparent 65%)" }}
                />
                <div
                    className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at 0% 0%, rgba(173,250,59,0.1) 0%, transparent 65%)" }}
                />

                <div className="relative z-10 px-5 sm:px-8 md:px-10 lg:pr-12 lg:py-24 lg:ml-[18%] py-16">

                    <div className="overflow-hidden mb-1">
                        <div ref={h1aRef} className="opacity-0">
                            <h1
                                className="font-[family-name:var(--font-display)] font-black uppercase text-white leading-[0.85]"
                                style={{ fontSize: "clamp(64px,11vw,80px)", letterSpacing: "-0.02em" }}
                            >
                                DON&apos;T
                            </h1>
                        </div>
                    </div>

                    <div className="overflow-hidden mb-1" style={{ paddingLeft: "clamp(20px,4vw,72px)" }}>
                        <div ref={h1bRef} className="opacity-0">
                            <h1
                                className="font-[family-name:var(--font-display)] font-black uppercase italic leading-[0.85] text-[#adfa3b]"
                                style={{ fontSize: "clamp(64px,11vw,80px)", letterSpacing: "-0.02em" }}
                            >
                                APPLY.
                            </h1>
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <div ref={h1cRef} className="opacity-0">
                            <h1
                                className="font-[family-name:var(--font-display)] font-black uppercase leading-[0.85]"
                                style={{
                                    fontSize: "clamp(64px,11vw,80px)",
                                    letterSpacing: "-0.02em",
                                    WebkitTextStroke: "2px #a855f7",
                                    color: "transparent",
                                }}
                            >
                                BELONG.
                            </h1>
                        </div>
                    </div>

                    <div ref={subRef} className="opacity-0 mt-2 sm:mt-2 md:mt-6 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-start">
                        <div className="flex items-start gap-4 max-w-sm">
                            <div className="w-[2px] h-14 bg-[#adfa3b] mt-1 shrink-0" />
                            <p className="text-white/80 text-sm leading-relaxed">
                                We&apos;re assembling a room full of obsessive makers who challenge briefs, challenge clients, and challenge each other — to make creativity world-class.
                            </p>
                        </div>
                    </div>

                    <div ref={ctaRef} className="opacity-0 mt-4 flex flex-col items-start gap-3">
                        <button
                            onClick={() => document.getElementById("openings")?.scrollIntoView({ behavior: "smooth" })}
                            className="inline-flex items-center gap-3 bg-[#adfa3b] text-[#060811] px-5 py-3 rounded-full text-sm font-bold hover:bg-[#adfa3b]/90 hover:shadow-[0_0_30px_rgba(173,250,59,0.4)] transition-all duration-300"
                        >
                            View Open Roles <span className="text-[#060811] text-sm font-black">→</span>
                        </button>
                        <a
                            href="mailto:connect@sripadastudios.com"
                            className="text-[#a855f7] text-xs uppercase tracking-[0.2em] border-b border-[#a855f7]/20 hover:text-[#adfa3b] hover:border-[#adfa3b] transition-colors duration-200 pb-0.5"
                        >
                            Or just say hello
                        </a>
                    </div>

                </div>

            </section>

            {/* ── MARQUEE STRIP ── */}
            <div className="py-4 overflow-hidden border-y border-white/[0.06]" style={{ background: "linear-gradient(90deg, #090c1a 0%, #11142a 50%, #090c1a 100%)" }}>
                <div className="inline-block whitespace-nowrap" style={{ animation: "marq 30s linear infinite" }}>
                    {[...Array(2)].map((_, r) => (
                        <span key={r} className="inline-flex items-center gap-6 mr-6">
                            {["Social Media Management", "Web Development", "Video Editing", "Ad Execution", "Content Writing", "Creative Design", "Photography", "Film Making"].map((w, i) => (
                                <span key={i} className="inline-flex items-center gap-6">
                                    <span className="font-[family-name:var(--font-display)] text-sm font-black uppercase tracking-[0.2em] text-[#fffefa]/40">{w}</span>
                                    <span className="w-1 h-1 rounded-full bg-[#adfa3b]/50" />
                                </span>
                            ))}
                        </span>
                    ))}
                </div>
            </div>

            {/* ══════════════════════════
                §3  OPENINGS
                bg: deep teal gradient — replaces pure black
            ══════════════════════════ */}
            <section
                id="openings"
                className="py-14 md:py-28 px-5 sm:px-6 md:px-14 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #060811 0%, #090a16 40%, #0b0c1e 70%, #060811 100%)" }}
            >
                {/* SVG guide */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1440 800" preserveAspectRatio="none">
                    <path d="M -100 700 C 300 500, 600 750, 800 400 S 1200 100, 1540 350" fill="none" stroke="rgba(173,250,59,0.03)" strokeWidth="2" strokeDasharray="8 6" />
                    <ellipse cx="200" cy="700" rx="300" ry="200" fill="url(#og1)" />
                    <ellipse cx="1300" cy="100" rx="280" ry="180" fill="url(#og2)" />
                    <defs>
                        <radialGradient id="og1" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#adfa3b" stopOpacity="0.04" />
                            <stop offset="100%" stopColor="#adfa3b" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="og2" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.06" />
                            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>

                {/* Faint watermark */}
                <div
                    className="absolute right-4 top-1/2 -translate-y-1/2 font-[family-name:var(--font-display)] font-black uppercase pointer-events-none select-none leading-none"
                    style={{ 
                        fontSize: "clamp(96px,14vw,220px)", 
                        color: "rgba(255, 255, 255, 0.035)", 
                        WebkitTextStroke: "1px rgba(255, 255, 255, 0.05)",
                        letterSpacing: "-0.04em" 
                    }}
                >
                    CAREERS
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-[1fr_1.8fr] gap-8 md:gap-12 mb-10 md:mb-16 items-end">
                        <div>
                            <h2
                                className="font-[family-name:var(--font-display)] font-black uppercase text-white leading-[0.86]"
                                style={{ fontSize: "clamp(30px,6vw,72px)" }}
                            >
                                <span className="sm:hidden">Current <span className="italic text-[#adfa3b]">Openings.</span></span>
                                <span className="hidden sm:inline">Current<br /><span className="italic text-[#adfa3b]">Openings.</span></span>
                            </h2>
                        </div>
                        <div className="flex flex-col gap-5 justify-end">
                            <p className="text-white/75 text-sm leading-relaxed max-w-sm">
                                Sharp minds only. Bring genuine curiosity, fast execution, and ideas that refuse to be ignored.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {depts.map(d => (
                                    <button
                                        key={d}
                                        onClick={() => {
                                            setFilter(d);
                                            setSelectedJob(0);
                                        }}
                                        className={`px-5 py-2 rounded-full border text-[10px] uppercase tracking-widest transition-all duration-200 font-bold ${filter === d
                                            ? "bg-[#adfa3b] border-[#adfa3b] text-[#060811] shadow-[0_0_20px_rgba(173,250,59,0.3)]"
                                            : "border-white/10 text-white hover:border-[#adfa3b]/40 hover:text-[#adfa3b]"
                                            }`}
                                    >
                                        {d}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Interactive Side-By-Side Split Panel Controller */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-8 md:gap-12 mt-4 items-stretch">
                        
                        {/* LEFT COLUMN: Openings Picker with Laser hover scanner effect */}
                        <div className="flex flex-col justify-between h-full">
                            <div className="border-t border-white/[0.06] divide-y divide-white/[0.06]">
                                {filtered.map((job, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setSelectedJob(i)}
                                        className={`group/item py-5 md:py-6 px-3 cursor-pointer select-none transition-all duration-300 relative overflow-hidden flex items-center justify-between ${
                                            selectedJob === i ? "bg-[#adfa3b]/[0.02] pl-6" : "hover:pl-5"
                                        }`}
                                    >
                                        {/* Cyber laser indicator accent */}
                                        <div className={`absolute left-0 top-0 bottom-0 w-[4px] bg-[#adfa3b] shadow-[0_0_15px_#adfa3b] transition-all duration-300 ${
                                            selectedJob === i ? "h-full opacity-100" : "h-0 opacity-0"
                                        }`} />
                                        
                                        <div className="flex items-center gap-4">
                                            <span
                                                className={`font-[family-name:var(--font-display)] font-black leading-none w-8 transition-colors duration-300 ${
                                                    selectedJob === i ? "text-[#adfa3b]" : "text-white/35 group-hover/item:text-[#adfa3b]"
                                                }`}
                                                style={{ fontSize: "clamp(14px,1.8vw,24px)" }}
                                            >
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <div>
                                                <h3
                                                    className={`font-[family-name:var(--font-display)] font-black uppercase text-xl sm:text-2xl transition-all duration-300 tracking-wide ${
                                                        selectedJob === i 
                                                            ? "text-[#adfa3b] translate-x-1" 
                                                            : "text-white group-hover/item:text-[#adfa3b] group-hover/item:translate-x-1"
                                                    }`}
                                                >
                                                    {job.role}
                                                </h3>
                                                <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest block lg:hidden mt-1.5">
                                                    {job.dept} • {job.location}
                                                </span>
                                            </div>
                                        </div>

                                        <span
                                            className={`text-xl font-bold transition-all duration-300 ${
                                                selectedJob === i ? "text-[#adfa3b] translate-x-1" : "text-white/20 group-hover/item:text-[#adfa3b]/60 group-hover/item:translate-x-1"
                                            }`}
                                        >
                                            →
                                        </span>
                                    </div>
                                ))}
                                {filtered.length === 0 && (
                                    <div className="py-12 text-center text-white/40 font-medium">
                                        No active openings found in this category.
                                    </div>
                                )}
                            </div>

                            {/* Speculative footer positioned beneath the selector list */}
                            <div className="mt-8 border-t border-white/[0.06] pt-6 hidden lg:block">
                                <p className="text-white/70 text-sm">
                                    Don&apos;t see your role?{"  "}
                                    <a
                                        href="mailto:connect@sripadastudios.com"
                                        className="text-[#adfa3b] font-bold border-b border-[#adfa3b]/20 hover:text-[#a855f7] hover:border-[#a855f7]/40 transition-all duration-300 inline-flex items-center gap-1"
                                    >
                                        Send a speculative application <span className="text-xs">→</span>
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Glassmorphic Floating Spec terminal pane */}
                        <div className="lg:sticky lg:top-32 h-fit">
                            {filtered[selectedJob] ? (
                                <div
                                    ref={terminalRef}
                                    className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#090b1c] via-[#0d0e23] to-[#040612] p-8 md:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.65)] relative overflow-hidden flex flex-col justify-between min-h-[360px] sm:min-h-[420px]"
                                    style={{
                                        boxShadow: "0 30px 60px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)"
                                    }}
                                >
                                    {/* Tech green neon backglow */}
                                    <div className="absolute -top-16 -right-16 w-[250px] h-[250px] pointer-events-none opacity-20"
                                        style={{ background: "radial-gradient(circle, rgba(173,250,59,0.2) 0%, transparent 70%)" }} />

                                    <div className="relative z-10 flex flex-col">
                                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                                            <span className="font-[family-name:var(--font-display)] font-bold text-xs uppercase tracking-[0.25em] text-[#a855f7]">
                                                Job specification #{String(selectedJob + 1).padStart(2, "0")}
                                            </span>
                                            <span className="text-[9px] font-mono font-black uppercase tracking-widest text-[#adfa3b] bg-[#adfa3b]/10 px-3 py-1 rounded border border-[#adfa3b]/15">
                                                Active Drawer
                                            </span>
                                        </div>

                                        <h3 className="font-[family-name:var(--font-display)] font-black uppercase text-3xl sm:text-4xl text-white tracking-wide mb-5 leading-tight">
                                            {filtered[selectedJob].role}
                                        </h3>

                                        <div className="flex gap-2 mb-6 flex-wrap">
                                            {[filtered[selectedJob].type, filtered[selectedJob].location, filtered[selectedJob].dept].map((tag, j) => (
                                                <span
                                                    key={j}
                                                    className="text-[9px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-full"
                                                    style={{ 
                                                        background: "rgba(173,250,59,0.08)", 
                                                        color: "#adfa3b", 
                                                        border: "1px solid rgba(173,250,59,0.22)" 
                                                    }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <p className="text-white/85 text-sm md:text-base leading-relaxed font-medium mb-4">
                                            {filtered[selectedJob].blurb}
                                        </p>
                                    </div>

                                    <div className="relative z-10 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/[0.06]">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2.5 h-2.5 rounded-full bg-[#adfa3b] animate-pulse shadow-[0_0_8px_#adfa3b]" />
                                            <span className="text-xs font-semibold text-white/50 tracking-wide">Ready to shape culture?</span>
                                        </div>
                                        <a 
                                            href="#contact"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                                            }}
                                            className="group inline-flex items-center gap-3 bg-[#adfa3b] text-[#060811] px-8 py-4 rounded-xl text-sm font-bold hover:bg-[#adfa3b]/90 hover:shadow-[0_0_30px_rgba(173,250,59,0.45)] transition-all duration-300 justify-center"
                                        >
                                            Apply Now{" "}
                                            <span className="inline-block transition-transform duration-200 translate-x-1 group-hover:translate-x-3">→</span>
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <div className="rounded-[32px] border border-white/5 bg-[#0a0c1a]/50 p-10 flex flex-col items-center justify-center min-h-[400px] text-center">
                                    <p className="text-white/40 text-sm">Select a role from the left picker to view specifications.</p>
                                </div>
                            )}
                        </div>

                        {/* Mobile view Speculative application block */}
                        <div className="mt-4 border-t border-white/[0.06] pt-6 block lg:hidden">
                            <p className="text-white/70 text-sm text-center">
                                Don&apos;t see your role?{"  "}
                                <a
                                    href="mailto:connect@sripadastudios.com"
                                    className="text-[#adfa3b] font-bold border-b border-[#adfa3b]/20 hover:text-[#a855f7] hover:border-[#a855f7]/40 transition-all duration-300 inline-flex items-center gap-1"
                                >
                                    Send a speculative application <span className="text-xs">→</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════
                §4  SPOTLIGHT
            ══════════════════════════ */}
            <section
                ref={spotlightRef}
                className="py-12 relative overflow-hidden flex flex-col items-center min-h-[80vh]"
                style={{ background: "#060811" }}
            >
                {/* Radial Glows */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0 opacity-40"
                    style={{ background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, rgba(173,250,59,0.06) 50%, transparent 70%)" }}
                />

                <div className="text-center z-10 mb-10 px-4">
                    <h2
                        className="font-[family-name:var(--font-display)] font-black uppercase text-transparent bg-clip-text leading-[0.9]"
                        style={{
                            fontSize: "clamp(36px, 6vw, 56px)",
                            backgroundImage: "linear-gradient(135deg, #ffffff 0%, #adfa3b 50%, #a855f7 100%)",
                        }}
                    >
                        Shining a Spotlight On You
                    </h2>
                </div>

                <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-0 lg:gap-3 sm:lg:gap-6 md:lg:gap-8 px-4 mt-8 pb-12">
                    <div className="w-[84%] sm:w-[68%] lg:w-[28%] max-w-[320px] shrink-0 z-20 mt-0 rotate-[-3deg] lg:rotate-0 lg:order-3">
                        <div ref={cardCRef} className="shadow-2xl rounded-2xl overflow-hidden bg-[#121124]/90 border-[4px] md:border-[6px] border-white/10 shadow-[0_20px_50px_rgba(173,250,59,0.15)]">
                            <img src="/careers/ImageLi.png" alt="Stepney Awards" className="w-full h-auto rounded-xl" />
                        </div>
                    </div>

                    <div className="w-[78%] sm:w-[62%] lg:w-[22%] max-w-[250px] shrink-0 -mt-[5%] lg:mt-[12%] rotate-[4deg] lg:rotate-0 lg:order-2">
                        <div ref={cardL1Ref} className="shadow-xl rounded-xl z-10 overflow-hidden bg-[#0a081a]/80 border border-white/5">
                            <img src="/careers/linkedin6.png" alt="LinkedIn Post" className="w-full h-auto rounded-md" />
                        </div>
                    </div>

                    <div className="w-[72%] sm:w-[58%] lg:w-[18%] max-w-[210px] shrink-0 -mt-[5%] lg:mt-[24%] rotate-[-4deg] lg:rotate-0 lg:order-1">
                        <div ref={cardL2Ref} className="shadow-lg rounded-xl overflow-hidden bg-[#0a081a]/80 border border-white/5">
                            <img src="/careers/linkedin5.png" alt="LinkedIn Post" className="w-full h-auto rounded-md" />
                        </div>
                    </div>

                    <div className="w-[78%] sm:w-[62%] lg:w-[22%] max-w-[250px] shrink-0 -mt-[5%] lg:mt-[12%] rotate-[4deg] lg:rotate-0 lg:order-4">
                        <div ref={cardR1Ref} className="shadow-xl rounded-xl z-10 overflow-hidden bg-[#0a081a]/80 border border-white/5">
                            <img src="/careers/linkedin3.png" alt="LinkedIn Post" className="w-full h-auto rounded-md" />
                        </div>
                    </div>

                    <div className="w-[72%] sm:w-[58%] lg:w-[18%] max-w-[210px] shrink-0 -mt-[5%] lg:mt-[30%] rotate-[-4deg] lg:rotate-0 lg:order-5">
                        <div ref={cardR2Ref} className="shadow-lg rounded-xl overflow-hidden bg-[#0a081a]/80 border border-white/5">
                            <img src="/careers/linkedin4.png" alt="LinkedIn Post" className="w-full h-auto rounded-md" />
                        </div>
                    </div>
                </div>

                <div className="z-10 mt-4 flex items-center justify-center">
                    <a
                        href="https://www.instagram.com/buzziwah/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 font-[family-name:var(--font-body)] font-bold text-xl sm:text-2xl tracking-wide group text-transparent bg-clip-text transition-all"
                        style={{ backgroundImage: "linear-gradient(135deg, #adfa3b 0%, #a855f7 100%)" }}
                    >
                        <div className="w-8 h-8 rounded-md flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300"
                            style={{ background: "linear-gradient(135deg, #adfa3b 0%, #a855f7 100%)" }}>
                            <svg className="w-5 h-5 stroke-black fill-none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </div>
                        BUZZIWAH
                    </a>
                </div>
            </section>

            <section
                className="relative overflow-hidden px-5 py-14 sm:px-8 md:px-14 md:py-20"
                style={{ background: "#060811" }}
            >
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.05]"
                    style={{
                        backgroundImage: "linear-gradient(rgba(173,250,59,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.1) 1px, transparent 1px)",
                        backgroundSize: "56px 56px",
                    }}
                />

                <div className="relative z-10 mx-auto max-w-7xl">
                    <div className="mb-10 max-w-3xl md:mb-14">
                        <p className="font-[family-name:var(--font-body)] text-[11px] font-bold uppercase tracking-[0.28em] text-[#adfa3b]">
                            Joining Kit
                        </p>
                        <h2
                            className="mt-3 font-[family-name:var(--font-display)] font-black uppercase leading-[0.9] text-white"
                            style={{ fontSize: "clamp(34px, 5.5vw, 60px)" }}
                        >
                            What Joining Us
                            <span className="block italic text-[#a855f7]">Looks Like.</span>
                        </h2>
                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                            A quick look at the kind of welcome, energy, and setup new team members step into when they start building with us.
                        </p>
                    </div>

                    <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-2">
                        <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-[28px] border border-white/10 bg-[#121124]/90 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                            <div className="overflow-hidden rounded-[22px]">
                                <img
                                    src="/careers/joining_kit.png"
                                    alt="Joining kit welcome essentials"
                                    className="h-auto w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-[28px] border border-white/10 bg-[#15102a]/60 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.4)]">
                            <div className="overflow-hidden rounded-[22px]">
                                <img
                                    src="/careers/linkedin4.png"
                                    alt="Team onboarding and joining experience"
                                    className="h-auto w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="relative overflow-hidden px-5 py-14 sm:px-8 md:px-14 md:py-24"
                style={{ background: "#060811" }}
            >
                {/* Background wash accents */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{
                        backgroundImage: "radial-gradient(circle at 20% 20%, rgba(168,85,247,0.06) 0%, transparent 28%), radial-gradient(circle at 80% 75%, rgba(173,250,59,0.04) 0%, transparent 24%)",
                    }}
                />

                <div className="absolute left-0 top-10 font-[family-name:var(--font-display)] text-[20vw] font-black uppercase leading-none text-white/[0.012]">
                    Selected
                </div>

                <div className="relative z-10 mx-auto max-w-7xl">
                    <div className="mb-14 sm:mb-20 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-2xl">
                            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#adfa3b]">
                                Alignment
                            </p>
                            <h2
                                className="mt-3 font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-white"
                                style={{ fontSize: "clamp(34px, 5.8vw, 64px)" }}
                            >
                                How Can You
                                <span className="block italic text-[#a855f7]">Be Selected?</span>
                            </h2>
                        </div>

                        <div className="max-w-md border-l border-[#adfa3b]/35 pl-5">
                            <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                                We’re not only hiring for output. We’re looking for curiosity, belief, visual thinking, and the kind of mindset that keeps growing one step at a time.
                            </p>
                        </div>
                    </div>

                    {/* THE 4 PILLARS VERTICAL STACK RUNWAY */}
                    <div className="space-y-12 sm:space-y-20 relative before:absolute before:top-4 before:bottom-4 before:left-4 md:before:left-1/2 md:before:-translate-x-1/2 before:w-[2px] before:bg-white/[0.04]">
                        {[
                            { 
                                title: "Curious", 
                                body: "You ask better questions, stay close to context, and care deeply about why something works.", 
                                color: "#adfa3b", 
                                glow: "rgba(173,250,59,0.04)",
                                image: "/careers/41.png"
                            },
                            { 
                                title: "Creative", 
                                body: "You can turn references, ideas, and rough thoughts into sharper visual possibilities.", 
                                color: "#a855f7", 
                                glow: "rgba(168,85,247,0.04)",
                                image: "/careers/44.png"
                            },
                            { 
                                title: "Respectful", 
                                body: "You work with an open mind, value people, and bring professionalism across every interaction.", 
                                color: "#00f0ff", 
                                glow: "rgba(0,240,255,0.04)",
                                image: "/careers/linkedin1.png"
                            },
                            { 
                                title: "Consistent", 
                                body: "You believe in step-by-step progress and keep learning instead of waiting for perfect conditions.", 
                                color: "#ff007f", 
                                glow: "rgba(255,0,127,0.04)",
                                image: "/careers/joining_kit.png"
                            }
                        ].map((m, idx) => (
                            <div 
                                key={idx} 
                                className="pillar-row relative flex flex-col justify-center py-10 sm:py-14 border border-white/[0.03] bg-white/[0.01] rounded-[24px] overflow-hidden group transition-all duration-300 hover:bg-white/[0.02]"
                            >
                                {/* Radial hover light */}
                                <div 
                                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
                                    style={{
                                        background: `radial-gradient(circle at 50% 50%, ${m.glow} 0%, transparent 60%)`,
                                    }}
                                />
                                
                                {/* Accent top line */}
                                <div 
                                    className="pillar-accent absolute top-0 left-0 right-0 h-[2px]" 
                                    style={{ backgroundColor: m.color }}
                                />

                                <div className="relative z-10 w-full grid md:grid-cols-2 gap-8 items-center px-6 sm:px-10">
                                    {/* Content side */}
                                    <div className={`flex flex-col justify-center ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span 
                                                className="font-mono text-xs font-black uppercase tracking-widest"
                                                style={{ color: m.color }}
                                            >
                                                Pillar // 0{idx + 1}
                                            </span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Mindset Core</span>
                                        </div>
                                        <h3 
                                            className="pillar-title font-[family-name:var(--font-display)] font-black uppercase leading-none tracking-tight mb-5"
                                            style={{ 
                                                fontSize: "clamp(28px, 4.5vw, 56px)",
                                                color: m.color,
                                                textShadow: `0 0 40px ${m.color}15`
                                            }}
                                        >
                                            {m.title}
                                        </h3>
                                        <p className="pillar-text text-white/70 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
                                            {m.body}
                                        </p>
                                    </div>

                                    {/* Typographic and Image side */}
                                    <div className={`relative flex items-center justify-center min-h-[160px] sm:min-h-[220px] select-none ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                                        {/* Giant number behind */}
                                        <span 
                                            className="pillar-num absolute font-[family-name:var(--font-display)] font-black leading-none text-transparent z-0 select-none pointer-events-none opacity-20"
                                            style={{ 
                                                fontSize: "clamp(120px, 18vw, 260px)",
                                                WebkitTextStroke: `2px ${m.color}1c`,
                                                textShadow: `0 0 80px ${m.color}05`,
                                                left: "50%",
                                                top: "50%",
                                                transform: "translate(-50%, -50%)"
                                            }}
                                        >
                                            0{idx + 1}
                                        </span>

                                        {/* Floating team image card in front */}
                                        <div className="relative z-10 w-full max-w-[280px] sm:max-w-[340px] aspect-[4/3] rounded-[20px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:scale-[1.03] group-hover:border-white/20">
                                            <img 
                                                src={m.image} 
                                                alt={m.title} 
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" 
                                            />
                                            {/* Glowing overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* SELECTION MATRIX TRANSITION HEADER */}
                    <div className="mt-24 sm:mt-36 mb-12 sm:mb-16 text-center">
                        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#a855f7]">
                            Framework
                        </p>
                        <h3 
                            className="mt-3 font-[family-name:var(--font-display)] font-black uppercase text-white leading-none"
                            style={{ fontSize: "clamp(28px, 4.5vw, 48px)" }}
                        >
                            Selection <span className="italic text-[#adfa3b]">Matrix</span>
                        </h3>
                        <p className="mt-4 max-w-lg mx-auto text-sm sm:text-base text-white/50 leading-relaxed">
                            Our 9 key checkpoints to measure capability, compatibility, and shared vision.
                        </p>
                    </div>

                    {/* SELECTION MATRIX CARDS GRID */}
                    <div className="matrix-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { title: "Cinema Enthusiast", desc: "If you are deep into movies, framing, and visual storytelling." },
                            { title: "Digital Native", desc: "If you thrive in the digital realm and understand modern cultures." },
                            { title: "Visual Storyteller", desc: "If you can visualize, draft, and assemble high-retention reels." },
                            { title: "High-Concept Thinker", desc: "A creative mindset is essential to comprehend and expand on our ideas." },
                            { title: "The 5W & 1H", desc: "Keep your investigative curiosity locked on the 5W & 1H mechanics." },
                            { title: "Result Catalyst", desc: "Belief in tangible creative outcomes that can make a real difference." },
                            { title: "Continuous Learner", desc: "If you are driven to learn daily and acquire fresh perspectives." },
                            { title: "Step-by-Step Progress", desc: "If you fully embrace the concept of iterative, consistent growth." },
                            { title: "Inclusivity & Respect", desc: "Maintain an open mind, respect all genders, and value individuals." }
                        ].map((p, index) => (
                            <div
                                key={index}
                                className="matrix-card rounded-2xl border border-white/5 bg-white/[0.015] p-6 flex flex-col justify-between min-h-[160px] hover:border-[#adfa3b]/20 hover:bg-white/[0.025] transition-all duration-300 hover:scale-[1.02] group/pcard shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/[0.04]">
                                        <span className="font-mono text-[9px] text-[#adfa3b] bg-[#adfa3b]/10 border border-[#adfa3b]/15 px-2 py-0.5 rounded font-black">
                                            P-{(index + 1).toString().padStart(2, "0")}
                                        </span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] group-hover/pcard:bg-[#adfa3b] transition-colors duration-300" />
                                    </div>
                                    <h4 className="font-[family-name:var(--font-display)] text-md font-bold uppercase text-white tracking-wide group-hover/pcard:text-[#adfa3b] transition-colors duration-300 mb-2">
                                        {p.title}
                                    </h4>
                                    <p className="text-white/60 text-xs leading-relaxed font-medium">
                                        {p.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                className="relative overflow-hidden px-5 py-14 sm:px-8 md:px-14 md:py-20"
                style={{ background: "#060811" }}
            >
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.05]"
                    style={{
                        backgroundImage: "linear-gradient(rgba(173,250,59,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.1) 1px, transparent 1px)",
                        backgroundSize: "62px 62px",
                    }}
                />

                <div className="relative z-10 mx-auto max-w-7xl">
                    <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#adfa3b]">
                                Why BUZZIWAH
                            </p>
                            <h2
                                className="mt-3 font-[family-name:var(--font-display)] font-black uppercase leading-[0.88] text-white"
                                style={{ fontSize: "clamp(34px, 5.6vw, 62px)" }}
                            >
                                Work That Feels
                                <span className="block italic text-[#a855f7]">Alive To Build.</span>
                            </h2>
                            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                                We’re passionate about changing the world, just like you. Around here, we draw parallels between cinema and life through four stages: Preparation, Presumption, Conduct, and Re-Learning.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                {[
                                    "Competitive salaries commensurate with experience.",
                                    "Opportunities for professional development and growth.",
                                    "Dynamic and inclusive work culture emphasizing collaboration and creativity.",
                                    "Flexible and friendly work environment.",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="rounded-[22px] border border-white/10 bg-white/[0.02] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.5)] backdrop-blur-sm"
                                    >
                                        <p className="text-sm leading-relaxed text-white/90">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 rounded-[28px] border border-white/10 bg-[#0f1020]/60 p-5 text-white shadow-[0_24px_70px_rgba(0,0,0,0.4)] md:p-6">
                                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#adfa3b]">
                                    What Makes Us Special
                                </p>
                                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                    {[
                                        "Empower employees to make decisions.",
                                        "Share information openly, broadly, and intentionally.",
                                        "Communicate candidly and directly.",
                                        "Retain only our most effective team members.",
                                        "Minimize rules, but respect essential guidelines.",
                                    ].map((item) => (
                                        <div key={item} className="rounded-[18px] border border-white/10 bg-white/[0.02] px-4 py-3">
                                            <p className="text-sm leading-relaxed text-white/80">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-5">
                            <div className="grid gap-5 md:grid-cols-[0.92fr_1.08fr]">
                                <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#121124]/90 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.5)]">
                                    <div className="grid h-full gap-3">
                                        <div className="overflow-hidden rounded-[24px]">
                                            <img
                                                src="/careers/43.png"
                                                alt="Team moments at BUZZIWAH"
                                                className="h-full min-h-[190px] w-full scale-[1.06] object-cover"
                                            />
                                        </div>
                                        <div className="overflow-hidden rounded-[24px]">
                                            <img
                                                src="/careers/45.png"
                                                alt="Culture moments at BUZZIWAH"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#0b0c1e]/60 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.4)]">
                                    <div className="overflow-hidden rounded-[24px]">
                                        <img
                                            src="/careers/linkedin1.png"
                                            alt="Collaborative work culture at BUZZIWAH"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-[30px] border border-[#a855f7]/20 bg-[linear-gradient(135deg,#111022_0%,#17153a_100%)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.5)] md:p-7">
                                <p className="font-[family-name:var(--font-display)] text-2xl font-black uppercase leading-none text-white sm:text-3xl">
                                    Growth Is Not Just Encouraged.
                                </p>
                                <p className="mt-1 font-[family-name:var(--font-display)] text-2xl font-black uppercase italic leading-none text-[#adfa3b] sm:text-3xl">
                                    It&apos;s Mandatory.
                                </p>

                                <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/80 sm:text-base">
                                    <p>
                                        We prioritize passionate projects, with occasional exceptions for financial reasons.
                                    </p>
                                    <p>
                                        Perks include access to Maggie, coffee, unlimited Spotify, Netflix, and a laid-back work chill atmosphere.
                                    </p>
                                    <p>
                                        We&apos;re down to earth here, often opting to sit on the floor together for lunch.
                                    </p>
                                </div>

                                <div className="mt-6 rounded-[22px] border border-white/10 bg-white/[0.02] px-4 py-4">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#adfa3b]">
                                        Apply
                                    </p>
                                    <p className="mt-2 text-sm leading-relaxed text-white sm:text-base">
                                        Send the resume at <a href="mailto:connect@sripadastudios.com" className="font-semibold text-[#adfa3b] underline decoration-[#adfa3b]/30 underline-offset-4">connect@sripadastudios.com</a> or <a href="tel:+918050236982" className="font-semibold text-[#adfa3b] underline decoration-[#adfa3b]/30 underline-offset-4">+91 80502 36982</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════
                §5  FINAL CTA
                bg: same hero tint, warmer direction
            ══════════════════════════ */}
            <section
                className="px-5 sm:px-8 md:px-14 py-8 sm:py-12 relative overflow-hidden"
                style={{ background: "linear-gradient(150deg, #060811 0%, #090b1c 40%, #060811 100%)" }}
            >
                {/* Ghost characters */}
                <div
                    className="absolute top-0 right-0 font-[family-name:var(--font-display)] font-black text-[#a855f7]/[0.025] leading-none select-none pointer-events-none"
                    style={{ fontSize: "clamp(160px,18vw,280px)", marginTop: "-30px", marginRight: "-20px" }}
                >
                    B
                </div>
                <div
                    className="absolute bottom-0 left-0 font-[family-name:var(--font-display)] font-black text-[#adfa3b]/[0.025] leading-none select-none pointer-events-none"
                    style={{ fontSize: "clamp(130px,15vw,230px)", marginBottom: "-40px", marginLeft: "-20px" }}
                >
                    W
                </div>

                {/* Grid texture */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#adfa3b 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Radial accent */}
                <div
                    className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(168,85,247,0.1) 0%, transparent 60%)" }}
                />

                <div className="max-w-7xl mx-auto relative z-10">

                    <h2
                        className="font-[family-name:var(--font-display)] font-black uppercase text-white leading-[0.84] mb-10 sm:mb-16"
                        style={{ fontSize: "clamp(40px,7vw,96px)" }}
                    >
                        Still<br />
                        Scrolling?<br />
                        <span
                            className="italic"
                            style={{ WebkitTextStroke: "2px #adfa3b", color: "transparent" }}
                        >
                            Good.
                        </span>
                    </h2>

                    <div className="grid lg:grid-cols-[1fr_1fr] gap-8 sm:gap-12 lg:gap-16 items-end">

                        <div>
                            <p className="text-white/80 text-[0.95rem] sm:text-[1rem] leading-relaxed max-w-md mb-8 sm:mb-10">
                                We like curious people. The ones who read this far are exactly who we&apos;re building a team of. Come in with ideas — leave with a body of work you&apos;re genuinely proud of.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -left-1 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-[#adfa3b] to-[#a855f7]" />
                            <div className="pl-6 sm:pl-10">
                                <p
                                    className="font-[family-name:var(--font-display)] font-black uppercase text-white leading-[1.0]"
                                    style={{ fontSize: "clamp(22px,4.5vw,26px)" }}
                                >
                                    &quot;Your ideas aren&apos;t<br />
                                    suggestions.<br />
                                    <span className="italic text-[#adfa3b]">They&apos;re your career.&quot;</span>
                                </p>
                                <p className="font-medium text-[12px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[#a855f7] mt-4 sm:mt-5">
                                    — P.V. Phani Srivatsa
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="mt-10 sm:mt-20 pt-6 sm:pt-8 border-t border-white/[0.08] flex justify-end items-center flex-wrap gap-4">
                        <a
                            href="https://www.instagram.com/buzziwah/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-[#adfa3b] hover:text-[#a855f7] text-[11px] uppercase tracking-[0.22em] transition-colors"
                        >
                            <span className="w-7 h-7 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded flex items-center justify-center text-white text-[10px] font-bold">IG</span>
                            Follow on Instagram
                        </a>
                    </div>

                </div>
            </section>

        </main>
    )
}
