import React, { useEffect } from "react";
import "./CaseStudy.css";
import "../home/Home.css";

const CASE_STUDIES_DATA = {
  "aanya-hospital": {
    client: "Aanya Hospital",
    category: "healthcare",
    subCategory: "Healthcare Clinic",
    tagline: "Care with compassion",
    image: "/PROJECTS HOME PAGE /AH-CC-02.png",
    video: "/PROJECTS HOME PAGE /aanya.mp4",
    problem: "Aanya Hospital, a new healthcare center in Vijayanagar, entered a space where trust and visibility are critical. Despite advanced medical care, the brand lacked identity, digital presence, and clear communication — making it harder to be seen and trusted from day one.",
    assessment: "The need wasn’t just visibility, but trust at scale. Gaps in identity, communication, and consistency were identified to align brand perception with the quality of care offered.",
    actionTitle: "Solution: A healthcare startup positioned right",
    actions: [
      {
        num: "01",
        title: "Foundation — Branding",
        desc: "The process began with building a strong brand identity — establishing a clear visual system and premium print assets to create immediate trust and offline credibility."
      },
      {
        num: "02",
        title: "Structuring — Content Marketing",
        desc: "With the identity in place, content was strategically developed to define communication, educate the audience, and reflect the quality of care with clarity and consistency."
      },
      {
        num: "03",
        title: "Amplification — Social Media Marketing (SMM)",
        desc: "Content was then distributed across social platforms to build visibility, strengthen engagement, and establish a consistent, authoritative presence."
      }
    ],
    result: "Not just a launch, but a brand that felt established from day one — with every layer working together to build trust, visibility, and recall.",
    stats: [
      { value: "100%", label: "Establishment Value" },
      { value: "+300%", label: "Local Footfall" },
      { value: "0 to 1", label: "Trust Launched" }
    ],
    visuals: {
      palette: ["#0F766E", "#0D9488", "#2DD4BF", "#CCFBF1"],
      hasVisuals: true,
      scrollingVideo: true,
      bts: true,
      smm: true,
      branding: true,
      campaignVideo: "Heart Campaign Video"
    }
  },
  "ramesh-arvind": {
    client: "Ramesh Aravind",
    category: "Public Figure",
    subCategory: "Cinema & Personal Branding",
    tagline: "Actor & Motivational Speaker",
    image: "/PROJECTS HOME PAGE /RAMESH ARVIND.png",
    video: "/PROJECTS HOME PAGE /ramesh arvind.mp4",
    problem: "Despite strong recognition in cinema, the personal brand lacked a structured digital presence to reflect his full influence as an actor, storyteller, and speaker. The credibility existed, but it wasn’t consistently translated online.",
    assessment: "The goal wasn’t to rebuild, but to refine with intent. Existing credibility and audience perception were evaluated, revealing a clear gap — the narrative lacked direction, amplification, and authoritative positioning.",
    actionTitle: "Solution: Positioned Beyond Recognition",
    actions: [
      {
        num: "01",
        title: "Thought Leadership Playbook",
        desc: "Crafted personal brand strategies positioning him beyond cinema as a premier speaker of influence and storytelling excellence."
      },
      {
        num: "02",
        title: "Narrative Alignment",
        desc: "Refined communication and social platforms with clear messaging to translate offline trust into highly engaging online presence."
      },
      {
        num: "03",
        title: "Platform Synchronization",
        desc: "Synchronized professional digital platforms, ensuring consistent design, active fan engagement, and authoritative content."
      }
    ],
    result: "The result: Not just visibility, but a strong, consistent presence of authority. It was a stronger, more defined personal brand that carries weight both on and off screen.",
    stats: [
      { value: "10M+", label: "Inspirational Reach" },
      { value: "100%", label: "Narrative Alignment" },
      { value: "Elite", label: "Speaker Authority" }
    ],
    visuals: {
      hasVisuals: false
    }
  },
  "wmn-healthcare": {
    client: "WMN",
    category: "healthcare",
    subCategory: "Maternal Wellness System",
    tagline: "Mathruswasthyam | Lokaswasthyam",
    image: "/PROJECTS HOME PAGE /WMN Doctors.png",
    video: "/PROJECTS HOME PAGE /wmn.mp4",
    problem: "The brand lacked a connected digital ecosystem — with gaps in website, content, social media, and performance marketing, leading to low visibility and weak conversions.",
    assessment: "All services existed in silos. There was no structured flow from brand discovery to conversion, resulting in an inconsistent user journey and missed growth potential.",
    actionTitle: "Solution: A Cohesive Full-Funnel Ecosystem",
    actions: [
      {
        num: "01",
        title: "Foundation — Website Development",
        desc: "The journey began with building a strong digital foundation — a high-converting website designed to anchor all communication, streamline user experience, and act as the central hub for traffic and conversions."
      },
      {
        num: "02",
        title: "Layering — Content Marketing",
        desc: "With the foundation in place, content was strategically developed to shape the brand narrative, establish authority, and ensure consistent, meaningful communication across all touchpoints."
      },
      {
        num: "03",
        title: "Amplification — Social Media Marketing (SMM)",
        desc: "Content was then extended across social platforms, adapted to each medium to maximize reach, drive engagement, and strengthen brand recall through a unified voice."
      },
      {
        num: "04",
        title: "Acceleration — Performance Marketing",
        desc: "Paid campaigns were introduced to scale the ecosystem — driving targeted traffic, generating high-quality leads, and continuously optimizing performance through data-driven insights."
      }
    ],
    result: "A cohesive, full-funnel ecosystem where each layer builds on the previous, transforming visibility into engagement, and engagement into sustained, measurable growth.",
    stats: [
      { value: "828k+", label: "Reach in 5 Days" },
      { value: "1.08M+", label: "Impressions" },
      { value: "975k+", label: "Video Plays" },
      { value: "6%", label: "Hook Rate" },
      { value: "1.89%", label: "Hold Rate" }
    ],
    visuals: {
      palette: ["#BE123C", "#FDA4AF", "#FFE4E6", "#1E1E1E"],
      hasVisuals: true,
      scrollingVideo: true,
      bts: true,
      smm: true,
      branding: true,
      campaignVideo: "WMN Campaign Video"
    }
  },
  "hearfon": {
    client: "HearFon",
    category: "healthcare",
    subCategory: "Audiology Centers",
    tagline: "Centre of excellence in hearing Health",
    image: "/PROJECTS HOME PAGE /HEARPHON.png",
    video: "/PROJECTS HOME PAGE /hearphon.mp4",
    problem: "HearFon needed stronger visibility and engagement in a competitive market. While the product had potential, the brand lacked impactful ad creatives, consistent content, and a strong social media presence to capture attention and drive recall.",
    assessment: "The gap was clear — there was no structured system connecting content, ad creatives, and social media. Messaging lacked consistency, and the brand needed a more defined voice and direction to stand out.",
    actionTitle: "Solution: A content-led growth system",
    actions: [
      {
        num: "01",
        title: "Foundation — Content Marketing",
        desc: "The process began by defining the brand voice and content direction — building a structured content system to communicate value, maintain consistency, and create a strong narrative."
      },
      {
        num: "02",
        title: "Creation — Ad Production",
        desc: "With a clear content direction, high-impact ad creatives were produced — focused on strong hooks, compelling visuals, and clear messaging to capture attention and drive action."
      },
      {
        num: "03",
        title: "Amplification — Social Media Marketing (SMM)",
        desc: "Content and ad creatives were then strategically distributed and adapted across social platforms to maximize reach, increase engagement, and build strong brand recall."
      }
    ],
    result: "A cohesive digital presence where content, creatives, and social media work in sync — driving visibility, engagement, and a stronger brand connection.",
    stats: [
      { value: "5.5x", label: "SMM Engagement Lift" },
      { value: "2M+", label: "Targeted Impressions" },
      { value: "95%", label: "Recall Power" }
    ],
    visuals: {
      hasVisuals: false
    }
  },
  "tent-cinema": {
    client: "Tent Cinema",
    category: "Education",
    subCategory: "School of Cinema",
    tagline: "Nagathihalli school of cinema",
    image: "/PROJECTS HOME PAGE /TENT .webp",
    video: "/PROJECTS HOME PAGE /tent cenima.mp4",
    problem: "Tent Cinema needed a stronger digital push to attract aspiring actors and increase enrollments. While the offering was compelling, the brand lacked consistent social media presence, structured campaigns, and a clear lead generation system.",
    assessment: "The gap was evident — content lacked direction, campaigns weren’t optimized for conversions, and there was no seamless journey from discovery to inquiry. Visibility existed, but it wasn’t translating into leads.",
    actionTitle: "Solution: A performance-driven growth system",
    actions: [
      {
        num: "01",
        title: "Foundation — Social Media Marketing (SMM)",
        desc: "The process began by building a consistent and engaging social presence — with content designed to connect with aspiring actors, showcase opportunities, and establish credibility."
      },
      {
        num: "02",
        title: "Acceleration — Campaign Strategy",
        desc: "Targeted campaigns were introduced to amplify reach — built around strong hooks, clear messaging, and audience-specific creatives to drive interest and intent."
      },
      {
        num: "03",
        title: "Conversion — Lead Generation",
        desc: "A streamlined lead generation system was implemented — capturing, nurturing, and converting interested audiences through optimized funnels and timely follow-ups."
      }
    ],
    result: "A structured pipeline where awareness turns into interest, and interest into action — driving consistent leads, higher engagement, and improved enrollments.",
    stats: [
      { value: "1,270", label: "Leads (30 Days)" },
      { value: "₹14.80", label: "Cost Per Lead (CPL)" },
      { value: "0.80%", label: "Ad Click Rate" }
    ],
    visuals: {
      hasVisuals: false
    }
  },
  "kovedaa": {
    client: "Kovedaa",
    category: "cosmetics",
    subCategory: "Luxury Ayurveda",
    tagline: "Ayurveda got hot",
    image: "/PROJECTS HOME PAGE /Kovedaa.png",
    video: "/PROJECTS HOME PAGE /kovedaa.mp4",
    problem: "Kovedaa needed a strong brand identity and digital presence to stand out in a competitive market. While the products had quality, there was no cohesive branding, no e-commerce platform, and limited visual and content direction to attract and convert customers.",
    assessment: "The gap was clear — the brand lacked a unified identity and a structured system to showcase, communicate, and sell effectively. From visuals to platform to messaging, everything needed alignment.",
    actionTitle: "Solution: A brand-to-commerce ecosystem",
    actions: [
      {
        num: "01",
        title: "Foundation — Branding",
        desc: "The process began with building a distinct brand identity — defining visuals, tone, and positioning to create a strong and memorable presence."
      },
      {
        num: "02",
        title: "Platform — E-commerce Website",
        desc: "With a clear identity in place, a seamless e-commerce website was developed — designed for intuitive navigation, product clarity, and smooth conversion."
      },
      {
        num: "03",
        title: "Creation — Product Shoot",
        desc: "High-quality product visuals were produced to highlight details, elevate perception, and create a premium, trustworthy look across platforms."
      },
      {
        num: "04",
        title: "Amplification — Content Marketing",
        desc: "Content was then strategically developed to communicate the brand story, engage the audience, and drive consistent traffic to the platform."
      }
    ],
    result: "A cohesive ecosystem where branding, visuals, and digital platforms work together — transforming products into a compelling brand experience that drives engagement and sales.",
    stats: [
      { value: "+220%", label: "Revenue Expansion" },
      { value: "4.8%", label: "Checkout Conversions" },
      { value: "Premium", label: "Aesthetics Position" }
    ],
    visuals: {
      palette: ["#1C1917", "#D4AF37", "#064E3B", "#10B981"],
      hasVisuals: true,
      scrollingVideo: true,
      bts: true,
      smm: true,
      branding: true,
      campaignVideo: "Kovedaa Campaign Video"
    }
  },
  "sindoor-collection": {
    client: "Sindoor Collection",
    category: "ornament",
    subCategory: "Premium Jewelry",
    tagline: "Because her beauty deserves to shine a little brighter",
    image: "/best works/srichakra_case.webp",
    problem: "Sindoor Collection needed a distinct brand identity and digital presence to reflect its aesthetic and appeal to modern consumers. While the products had strong visual potential, the brand lacked cohesive branding, a dedicated website, and high-quality visuals to position itself effectively.",
    assessment: "The gap was clear — there was no unified system to present the brand with consistency and elegance. From identity to platform to visuals, everything needed alignment to elevate perception and build trust.",
    actionTitle: "Solution: A design-led brand ecosystem",
    actions: [
      {
        num: "01",
        title: "Foundation — Branding",
        desc: "The process began with crafting a refined brand identity — defining visual language, tone, and positioning to create a strong, recognizable presence."
      },
      {
        num: "02",
        title: "Platform — Website Development",
        desc: "With the identity in place, a clean and elegant website was developed — designed to reflect the brand’s aesthetic while ensuring a seamless and intuitive user experience."
      },
      {
        num: "03",
        title: "Creation — Product Creative Shoot",
        desc: "A premium product shoot was executed to capture the essence of the collection — focusing on styling, detailing, and visual storytelling to elevate brand perception."
      }
    ],
    result: "A cohesive and elevated brand presence — where identity, platform, and visuals come together to create a strong, memorable, and conversion-ready experience.",
    stats: [
      { value: "Premium", label: "Position" },
      { value: "100%", label: "Aesthetic Appeal" },
      { value: "High", label: "Digital Trust" }
    ],
    visuals: {
      hasVisuals: false
    }
  }
};

export default function CaseStudyPage({ id }) {
  const caseId = id || "aanya-hospital";
  const data = CASE_STUDIES_DATA[caseId] || CASE_STUDIES_DATA["aanya-hospital"];

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [caseId]);

  // Dynamically lock the body background to match the 'Look what we did' sectionExactly
  useEffect(() => {
    const originalBg = document.body.style.background;
    document.body.style.background = "#060811";
    return () => {
      document.body.style.background = originalBg;
    };
  }, []);

  return (
    <div className="case-study-root" style={{ fontFamily: "'Nunito', sans-serif" }}>
      {/* Dynamic watermarks in background */}
      <div className="cs-bg-text-container">
        <div className="absolute top-[12%] left-[2%] text-transparent select-none pointer-events-none text-[8vw] md:text-[10vw] font-black tracking-[0.25em] uppercase opacity-40 rotate-[-5deg]" style={{ fontFamily: "'Nunito', sans-serif", WebkitTextStroke: '1px rgba(255,255,255,0.45)', zIndex: 1 }}>
            WE BUZZ
        </div>
        <div className="absolute top-[52%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white/[0.06] select-none pointer-events-none text-[12vw] font-black tracking-[0.3em] uppercase" style={{ fontFamily: "'Nunito', sans-serif", zIndex: 1 }}>
            WE BUZZ
        </div>
        <div className="absolute bottom-[10%] right-[3%] text-transparent select-none pointer-events-none text-[8vw] md:text-[10vw] font-black tracking-[0.25em] uppercase opacity-40 rotate-[4deg]" style={{ fontFamily: "'Nunito', sans-serif", WebkitTextStroke: '1px rgba(255,255,255,0.45)', zIndex: 1 }}>
            BUZZIWAH
        </div>
      </div>

      <div className="cs-container">
        {/* Floating Back Navigation Button */}
        <div className="cs-back-bar">
          <a href="/" className="cs-back-btn">
            <span className="cs-back-arrow">←</span> BACK TO HOME
          </a>
        </div>

        {/* Immersive Header Block */}
        <header className="cs-header">
          <div className="cs-tags">
            <span className="cs-tag-category">{data.category}</span>
            <span className="cs-tag-separator">•</span>
            <span className="cs-tag-sub">{data.subCategory}</span>
          </div>
          <h1 className="cs-title">{data.client}</h1>
          <p className="cs-tagline">{data.tagline}</p>
          <div className="cs-title-accent" />
        </header>

        {/* Visual Columns Section: Image/Video & Story Cards */}
        <div className="cs-split-layout">
          {/* Left: Glass visual frame with gradient outline */}
          <div className="cs-visual-column">
            <div className="cs-visual-frame">
              <div className="cs-visual-glow" />
              {data.video ? (
                  <video 
                      src={data.video} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="cs-visual-img" 
                      style={{ objectFit: 'cover' }}
                  />
              ) : (
                  <img src={data.image} alt={`${data.client} Showcase`} className="cs-visual-img" />
              )}
              <div className="cs-visual-overlay" />
            </div>
          </div>

          {/* Right: The Challenge (Problem + Assessment) */}
          <div className="cs-story-column">
            <div className="cs-card cs-card-problem">
              <div className="cs-card-glow" />
              <div className="cs-card-header">
                <span className="cs-card-dot cs-dot-red" />
                <h3>The Problem</h3>
              </div>
              <p className="cs-card-body">{data.problem}</p>
            </div>

            <div className="cs-card cs-card-assessment">
              <div className="cs-card-glow" />
              <div className="cs-card-header">
                <span className="cs-card-dot cs-dot-lime" />
                <h3>The Assessment</h3>
              </div>
              <p className="cs-card-body">{data.assessment}</p>
            </div>
          </div>
        </div>

        {/* Action Plan Section: Chronological Process Deck */}
        <section className="cs-action-section">
          <div className="cs-section-header">
            <span className="cs-section-kicker">STRATEGY & EXECUTION</span>
            <h2>{data.actionTitle}</h2>
            <div className="cs-section-line" />
          </div>

          <div className="cs-actions-grid">
            {data.actions.map((act, idx) => (
              <div key={idx} className="cs-action-card">
                <div className="cs-action-glow" />
                <div className="cs-action-top">
                  <span className="cs-action-number">{act.num}</span>
                  <div className="cs-action-dot-trail" />
                </div>
                <h3 className="cs-action-title">{act.title}</h3>
                <p className="cs-action-desc">{act.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Results Block & Core Statistics Grid */}
        <section className="cs-results-section">
          <div className="cs-result-quote-container">
            <div className="cs-quote-bg-decor">IMPACT</div>
            <div className="cs-quote-brackets cs-qb-left">"</div>
            <blockquote className="cs-result-quote">
              {data.result}
            </blockquote>
            <div className="cs-quote-brackets cs-qb-right">"</div>
          </div>

          {/* Metric Dashboard */}
          <div className="cs-stats-row">
            {data.stats.map((stat, idx) => (
              <div key={idx} className="cs-stat-box">
                <div className="cs-stat-glow" />
                <span className="cs-stat-number">{stat.value}</span>
                <span className="cs-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Brand Specific Visual Assets Showcase (If active) */}
        {data.visuals?.hasVisuals && (
          <section className="cs-visuals-showcase-section">
            <div className="cs-section-header">
              <span className="cs-section-kicker">CREATIVE WORK & BTS</span>
              <h2>Project Visuals & Branding System</h2>
              <div className="cs-section-line" />
            </div>

            <div className="cs-visuals-grid">
              {/* Colour Palette Box */}
              {data.visuals.palette && (
                <div className="cs-visual-card cs-palette-box">
                  <h4 className="cs-visual-card-title">Brand Color Palette</h4>
                  <p className="cs-visual-card-subtitle">Establishing consistency and identity depth</p>
                  <div className="cs-palette-circles">
                    {data.visuals.palette.map((color, idx) => (
                      <div key={idx} className="cs-color-circle-wrapper">
                        <div className="cs-color-circle" style={{ backgroundColor: color }} />
                        <span className="cs-color-hex">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Scrolling Mockup and BTS Box */}
              <div className="cs-visual-card cs-mockup-box">
                <h4 className="cs-visual-card-title">Website Scrolling Video</h4>
                <div className="cs-mockup-player">
                  <div className="cs-mockup-dot-bar">
                    <span className="cs-mockup-dot red" />
                    <span className="cs-mockup-dot yellow" />
                    <span className="cs-mockup-dot green" />
                  </div>
                  <div className="cs-mockup-video-canvas">
                    <div className="cs-mockup-video-scroller-placeholder">
                      <div className="cs-mockup-scroll-element" style={{ backgroundImage: `url(${data.image})` }} />
                      <div className="cs-video-play-overlay">
                        <div className="cs-video-play-btn">▶ PLAY PREVIEW</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Creative Shoot & BTS Shoots */}
              <div className="cs-visual-card cs-grid-visuals-box">
                <h4 className="cs-visual-card-title">Shoots & BTS (Behind the Scenes)</h4>
                <div className="cs-shoots-mini-grid">
                  <div className="cs-shoot-frame">
                    <img src={data.image} alt="Behind the scenes shoot" />
                    <span>STUDIO BTS</span>
                  </div>
                  <div className="cs-shoot-frame">
                    <div className="cs-shoot-gradient" />
                    <span>PRODUCT BRANDING</span>
                  </div>
                </div>
              </div>

              {/* Campaign Video Block */}
              {data.visuals.campaignVideo && (
                <div className="cs-visual-card cs-campaign-box">
                  <h4 className="cs-visual-card-title">{data.visuals.campaignVideo}</h4>
                  <div className="cs-campaign-player">
                    <div className="cs-play-icon-ring">
                      <div className="cs-play-triangle" />
                    </div>
                    <span>WATCH CAMPAIGN REEL</span>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 🌟 Other Client Scroller Section (pinterest dynamic loop feel) 🌟 */}
        <section className="cs-others-scroller-section">
          <div className="cs-section-header">
            <span className="cs-section-kicker">EXPLORE MORE SENSATIONAL WORK</span>
            <h2>Client Case Studies</h2>
            <div className="cs-section-line" />
          </div>

          <div className="cs-scroller-track">
            {Object.keys(CASE_STUDIES_DATA)
              .filter((key) => key !== caseId)
              .map((key) => {
                const item = CASE_STUDIES_DATA[key];
                return (
                  <a href={`/case-study/${key}`} key={key} className="cs-scroller-card">
                    <div className="cs-scroller-card-img-wrapper">
                      <img src={item.image} alt={item.client} className="cs-scroller-card-img" />
                      <div className="cs-scroller-card-overlay" />
                    </div>
                    <div className="cs-scroller-card-info">
                      <span className="cs-scroller-card-cat">{item.category}</span>
                      <h4 className="cs-scroller-card-title">{item.client}</h4>
                      <p className="cs-scroller-card-tagline">{item.tagline}</p>
                      <div className="cs-scroller-card-link">
                        VIEW BRIEF <span className="cs-scroller-arrow">→</span>
                      </div>
                    </div>
                  </a>
                );
              })}
          </div>
        </section>

        {/* Elegant Bottom Footer CTA Block */}
        <div className="cs-footer-cta">
          <div className="cs-cta-glow" />
          <h2>Ready to write your growth story?</h2>
          <p>Let’s collaborate to build high-performance creative campaigns that demand attention.</p>
          <a href="/contact" className="cs-cta-button">
            KICKSTART A PROJECT <span className="cs-cta-arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
