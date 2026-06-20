import React, { useRef } from "react";
import { BLOGS_DATA } from "../blogs/index";
import "../blogs/Blogs.css";

const BlogSectionCard = ({ id, data }) => {
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
    <a
      ref={cardRef}
      href={`/blog/${id}`}
      className="blog-card"
      onMouseMove={handleMouseMove}
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
    </a>
  );
};

export default function BlogsSection() {
  const blogKeys = Object.keys(BLOGS_DATA).slice(0, 3);

  return (
    <section className="hp-blogs-section">
      <div className="hp-blogs-inner">
        {/* Header Block */}
        <header className="hp-blogs-header">
          <div className="hp-blogs-title-block">
            <div className="hp-blogs-kicker">
              <span className="hp-blogs-kicker-dot" />
              <span>MARKETING INTELLIGENCE & INSIGHTS</span>
            </div>
            <h2 className="hp-blogs-title">Latest From Buzziwah</h2>
          </div>
          <a href="/blogs" className="hp-blogs-viewall-top">
            View All Articles <span className="hp-blogs-viewall-top-arrow">→</span>
          </a>
        </header>

        {/* Dynamic list */}
        <div className="hp-blogs-grid">
          {blogKeys.map((key) => (
            <BlogSectionCard key={key} id={key} data={BLOGS_DATA[key]} />
          ))}
        </div>
      </div>
    </section>
  );
}
