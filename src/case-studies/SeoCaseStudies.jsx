import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./SeoCaseStudies.css";

const SEO_STUDIES = [
  {
    id: "hearfon-seo",
    client: "HearFon — Hearing & Speech Clinic",
    tagline: "From zero digital presence to first-page Google rankings in Bangalore’s competitive audiology market.",
    image: "/PROJECTS HOME PAGE /HEARPHON.png",
    metricValue: "+489.6%",
    metricLabel: "Organic Traffic Growth",
    subStats: [
      { value: "3.3K", label: "Total Visitors" },
      { value: "86.4%", label: "Mobile Traffic" }
    ],
    highlight: "Page 1 · #1 Rank Achieved for Local Audiology"
  },
  {
    id: "kovedaa-seo",
    client: "Kovedaa — Ayurveda & Wellness",
    tagline: "Blending traditional Ayurvedic wellness with a modern ecommerce experience to build a growing digital wellness brand.",
    image: "/PROJECTS HOME PAGE /Kovedaa.png",
    metricValue: "+45%",
    metricLabel: "Conversion Growth",
    subStats: [
      { value: "9.85K+", label: "Total Impressions" },
      { value: "500+", label: "Products Sold" }
    ],
    highlight: "Scaling nationwide organic presence in 6 Months"
  }
];

export default function SeoCaseStudies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="scs-root">
      {/* Background Orbs & Tech Grid */}
      <div className="scs-bg-glows">
        <div className="scs-glow-primary" />
        <div className="scs-glow-secondary" />
        <div className="scs-grid-lines" />
      </div>

      <div className="scs-container">
        {/* Floating Back Navigation Button */}
        <div className="scs-back-bar">
          <a href="/seo" className="scs-back-btn">
            <span className="scs-back-arrow">←</span> BACK TO SEO
          </a>
        </div>

        {/* Header Block */}
        <header className="scs-header">
          <span className="scs-kicker">SUSTAINABLE MOMENTUM</span>
          <h1 className="scs-title">SEO Case Studies</h1>
          <p className="scs-desc">
            Paid ads stop delivering the second your budget hits zero. Organic search authority delivers compounding dividends forever. Explore how we establish absolute search engine dominance.
          </p>
        </header>

        {/* Case Studies Side-by-Side Grid */}
        <div className="scs-grid">
          {SEO_STUDIES.map((study, idx) => (
            <motion.div
              key={study.id}
              className="scs-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="scs-card-glow" />
              
              {/* Media Frame */}
              <div className="scs-media-frame">
                <img src={study.image} alt={study.client} className="scs-media" />
                <div className="scs-media-overlay" />
                <span className="scs-card-badge">SEO SUCCESS</span>
              </div>

              {/* Content Frame */}
              <div className="scs-content">
                <span className="scs-highlight-pill">{study.highlight}</span>
                <h3 className="scs-client-name">{study.client}</h3>
                <p className="scs-tagline">{study.tagline}</p>

                {/* Hero Stat & Sub-Stats Matrix */}
                <div className="scs-stats-block">
                  <div className="scs-hero-stat">
                    <span className="scs-hero-stat-val">{study.metricValue}</span>
                    <span className="scs-hero-stat-lbl">{study.metricLabel}</span>
                  </div>

                  <div className="scs-sub-stats">
                    {study.subStats.map((sub, i) => (
                      <div className="scs-sub-stat-box" key={i}>
                        <span className="scs-sub-stat-val">{sub.value}</span>
                        <span className="scs-sub-stat-lbl">{sub.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a href={`/case-study/${study.id}`} className="scs-action-btn">
                  VIEW FULL CASE STUDY <span className="scs-action-arrow">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <section className="scs-footer-cta">
          <div className="scs-cta-glow" />
          <h2>Ready to double your search authority?</h2>
          <p>Let’s collaborate to build high-performance organic SEO campaigns that dominate Google SERPs.</p>
          <a href="/contact" className="scs-cta-button">
            AUDIT MY WEBSITE <span className="scs-cta-arrow">→</span>
          </a>
        </section>
      </div>
    </div>
  );
}
