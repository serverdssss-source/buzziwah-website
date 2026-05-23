/* eslint-disable react/prop-types, no-unused-vars, react/no-unescaped-entities */
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CASE_STUDIES_DATA } from "./index";
import "./CaseStudiesList.css";

// Helper to map actual case study categories to filters
const getFilterCategory = (category) => {
  const cat = category.toLowerCase();
  if (cat === "healthcare") return "healthcare";
  if (cat === "cosmetics" || cat === "ornament") return "cosmetics";
  if (cat === "public figure" || cat === "education") return "cinema";
  return "other";
};

// Sub-component for individual card with hover video capability
const CaseStudyCard = ({ id, data, index }) => {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Dynamic mouse position tracking for radial background glow effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  useEffect(() => {
    if (!videoRef.current) return;
    if (isHovered) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <motion.a
      ref={cardRef}
      href={`/case-study/${id}`}
      className="csl-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="csl-card-glow" />
      
      {/* Media Frame */}
      <div className="csl-media-frame">
        <span className="csl-category-pill">{data.category}</span>
        {data.video ? (
          <video
            ref={videoRef}
            src={data.video}
            className="csl-media"
            muted
            loop
            playsInline
            poster={data.image}
          />
        ) : (
          <img src={data.image} alt={data.client} className="csl-media" />
        )}
        <div className="csl-media-overlay" />
      </div>

      {/* Content Frame */}
      <div className="csl-content">
        <span className="csl-tagline">{data.subCategory}</span>
        <h3 className="csl-client-name">{data.client}</h3>
        <p className="csl-problem-preview">{data.problem}</p>
        
        {/* Metric Snapshots */}
        <div className="csl-card-stats">
          {data.stats.slice(0, 2).map((stat, idx) => (
            <div className="csl-card-stat-box" key={idx}>
              <span className="csl-card-stat-val">{stat.value}</span>
              <span className="csl-card-stat-lbl">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="csl-action-link">
          Explore Case Study <span className="csl-action-arrow">→</span>
        </div>
      </div>
    </motion.a>
  );
};

export default function CaseStudiesList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter keys and readable labels
  const filters = [
    { key: "all", label: "All Work" },
    { key: "healthcare", label: "Healthcare" },
    { key: "cosmetics", label: "Cosmetics & Jewelry" },
    { key: "cinema", label: "Cinema & Entertainment" },
  ];

  // Filter and search computation
  const filteredCaseStudies = Object.keys(CASE_STUDIES_DATA).filter((key) => {
    const item = CASE_STUDIES_DATA[key];
    const matchesFilter = selectedFilter === "all" || getFilterCategory(item.category) === selectedFilter;
    const matchesSearch =
      item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.problem.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="csl-root">
      {/* Background Orbs & Tech Grid */}
      <div className="csl-bg-glows">
        <div className="csl-glow-primary" />
        <div className="csl-glow-secondary" />
        <div className="csl-grid-lines" />
      </div>

      {/* Decorative Technical Watermarks */}
      <div className="csl-watermarks">
        <div className="csl-watermark-1">SUCCESS</div>
        <div className="csl-watermark-2">STORIES</div>
      </div>

      <div className="csl-container">
        {/* Header Block */}
        <header className="csl-header">
          <span className="csl-kicker">STRATEGY · CREATIVE · RESULTS</span>
          <h1 className="csl-title">Our Case Studies</h1>
          <p className="csl-desc">
            Explore how we build digital ecosystems, scale high-impact paid campaigns, and craft memorable visual branding that drives business velocity.
          </p>
        </header>

        {/* Search & Filter Controls Hub */}
        <section className="csl-controls-hub">
          {/* Fuzzy Search */}
          <div className="csl-search-wrapper">
            <input
              type="text"
              placeholder="Search case studies by client, service, keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="csl-search-input"
            />
            <div className="csl-search-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="csl-filters">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`csl-filter-btn ${selectedFilter === filter.key ? "active" : ""}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </section>

        {/* Case Studies Grid Layout */}
        <motion.div layout className="csl-grid">
          <AnimatePresence mode="popLayout">
            {filteredCaseStudies.map((key, index) => (
              <CaseStudyCard
                key={key}
                id={key}
                data={CASE_STUDIES_DATA[key]}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Result Fallback */}
        {filteredCaseStudies.length === 0 && (
          <motion.div
            className="csl-empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="csl-empty-icon">🔍</div>
            <h3>No case studies found</h3>
            <p>We couldn&apos;t find any projects matching &ldquo;{searchQuery}&rdquo;. Try adjusting your keywords or filters.</p>
          </motion.div>
        )}

        {/* Bottom CTA Block */}
        <section className="csl-footer-cta">
          <div className="csl-cta-glow" />
          <h2>Ready to write your growth story?</h2>
          <p>Let’s collaborate to build high-performance creative campaigns that demand attention.</p>
          <a href="/contact" className="csl-cta-button">
            KICKSTART A PROJECT <span className="csl-cta-arrow">→</span>
          </a>
        </section>
      </div>
    </div>
  );
}
