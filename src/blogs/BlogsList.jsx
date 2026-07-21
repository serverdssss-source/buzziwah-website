/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BLOGS_DATA } from "./index";
import "./Blogs.css";

const BlogCard = ({ id, data, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.a
      ref={cardRef}
      href={`/blog/${id}`}
      className="blog-card"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="blog-card-glow" />
      <div className="blog-media-frame">
        <img src={data.image} alt={data.title} className="blog-media" />
      </div>
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span>{data.date}</span>
          <span className="dot" />
          <span>{data.readTime}</span>
        </div>
        <h3 className="blog-card-title">{data.title}</h3>
        <p className="blog-card-desc">{data.description}</p>
        <div className="blog-card-link">
          READ ARTICLE <span className="blog-card-link-arrow">→</span>
        </div>
      </div>
    </motion.a>
  );
};

export default function BlogsList() {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredBlogs = Object.keys(BLOGS_DATA)
    .sort((a, b) => new Date(BLOGS_DATA[b].date) - new Date(BLOGS_DATA[a].date))
    .filter((key) => {
    const item = BLOGS_DATA[key];
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="blogs-root">
      {/* Background Orbs & Tech Grid */}
      <div className="blogs-bg-glows">
        <div className="blogs-glow-primary" />
        <div className="blogs-glow-secondary" />
        <div className="blogs-grid-lines" />
      </div>

      {/* Background Watermarks */}
      <div className="blogs-watermarks">
        <div className="blogs-watermark-1">BUZZIWAH</div>
        <div className="blogs-watermark-2">INSIGHTS</div>
      </div>

      <div className="blogs-container">
        {/* Header Block */}
        <header className="blogs-header">
          <h1 className="blogs-title">Blogs</h1>
        </header>

        {/* Search Controls Hub */}
        <section className="blogs-controls-hub">
          {/* Fuzzy Search */}
          <div className="blogs-search-wrapper">
            <input
              type="text"
              id="blogs_search"
              aria-label="Search articles"
              placeholder="Search articles by title, category, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="blogs-search-input"
            />
            <div className="blogs-search-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>
        </section>

        {/* Blogs Grid Layout */}
        <motion.div layout className="blogs-grid">
          <AnimatePresence mode="popLayout">
            {filteredBlogs.map((key, index) => (
              <BlogCard
                key={key}
                id={key}
                data={BLOGS_DATA[key]}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Result Fallback */}
        {filteredBlogs.length === 0 && (
          <motion.div
            className="blogs-empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="blogs-empty-icon">🔍</div>
            <h3>No articles found</h3>
            <p>We couldn't find any articles matching &ldquo;{searchQuery}&rdquo;. Try adjusting your keywords or filters.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
