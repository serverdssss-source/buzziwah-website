import React, { useEffect, useState } from 'react';
import './Navbar.css';

const serviceLinks = [
  {
    title: 'Social Media Management',
    desc: 'Grow & engage your audience',
    href: '/social-media',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    title: 'Performance Marketing',
    desc: 'ROI-driven paid campaigns',
    href: '/performance-marketing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: 'Branding & Re-Branding',
    desc: 'Identity & visual systems',
    href: '/branding',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: 'Website Development',
    desc: 'Fast, conversion-focused sites',
    href: '/website-development',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Video Production',
    desc: 'Cinematic brand storytelling',
    href: '/video-production',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    title: 'Search Engine Optimization',
    desc: 'Rank higher, get found faster',
    href: '/seo',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: 'Influencer Marketing',
    desc: 'Authentic creator partnerships',
    href: '/influencer-marketing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Content Solutions',
    desc: 'Strategy, copy & creative assets',
    href: '/content-solution',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Outdoor Marketing',
    desc: 'End-to-end real-world visibility',
    href: '/outdoor-marketing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="12" rx="2" />
        <line x1="5" y1="15" x2="5" y2="21" />
        <line x1="19" y1="15" x2="19" y2="21" />
        <line x1="2" y1="15" x2="22" y2="15" />
      </svg>
    ),
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileSub, setOpenMobileSub] = useState(false);

  const path = window.location.pathname.replace(/\/$/, '');
  const servicesActive = path === '/services' || serviceLinks.some((s) => s.href === path);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const setActive = () => {
      ['#navLinks > li > a', '#mobileLinks > li > a'].forEach((sel) => {
        document.querySelectorAll(sel).forEach((a) => {
          const linkPath = new URL(a.href, location.origin).pathname.replace(/\/$/, '');
          if (linkPath && linkPath === path) {
            a.closest('li')?.classList.add('active-link');
          }
        });
      });
    };
    setActive();
  }, [path]);

  useEffect(() => () => {
    document.body.style.overflow = '';
  }, []);

  const toggleMobile = () => {
    setMobileOpen((open) => {
      const next = !open;
      document.body.style.overflow = next ? 'hidden' : '';
      if (!next) setOpenMobileSub(false);
      return next;
    });
  };

  const toggleMobileSub = () => setOpenMobileSub((v) => !v);

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-backdrop" />
        <div className="nav-inner">
          <a href="/" className="logo">
            <img
              src="/Buzziwah_FInal_Logo_White.png"
              alt="Buzziwah"
            />
          </a>

          <ul className="nav-links" id="navLinks">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li
              className={`${servicesActive ? 'active-link' : ''} ${openDropdown === 'services' ? 'open' : ''}`}
              onMouseEnter={() => setOpenDropdown('services')}
              onMouseLeave={() => setOpenDropdown(null)}
              onFocus={() => setOpenDropdown('services')}
            >
              <a href="/services">
                Services
                <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>
              <div className="dropdown">
                <div className="dropdown-grid">
                  {serviceLinks.map((item) => (
                    <a className="dropdown-item" href={item.href} key={item.title}>
                      <div className="dropdown-icon">{item.icon}</div>
                      <div className="dropdown-copy">
                        <strong>{item.title}</strong>
                        <span>{item.desc}</span>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="dropdown-footer">
                  <span>Full-funnel marketing, creative, and performance in one team.</span>
                  <a href="/services">View all</a>
                </div>
              </div>
            </li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>

          <div className="nav-right">
            <a href="tel:+919980687439" className="phone-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.21 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span>+91 99806 87439</span>
            </a>
            <a href="/contact" className="btn-cta">
              Get Started
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <button
              className={`hamburger ${mobileOpen ? 'open' : ''}`}
              id="hamburger"
              onClick={toggleMobile}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-panel ${mobileOpen ? 'open' : ''}`} id="mobilePanel">
        <ul className="mobile-links" id="mobileLinks">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li className={openMobileSub ? 'open' : ''}>
            <button type="button" onClick={toggleMobileSub}>
              Services
              <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className={`mobile-sub ${openMobileSub ? 'open' : ''}`}>
              {serviceLinks.map((item) => (
                <a href={item.href} key={`m-${item.title}`}>
                  <span className="mobile-sub-dot" />
                  {item.title}
                </a>
              ))}
              <a href="/services">
                <span className="mobile-sub-dot" />
                View All Services
              </a>
            </div>
          </li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="mobile-footer">
          <a href="/contact" className="btn-cta">
            Get Started {'->'}
          </a>
          <a href="tel:+919980687439" className="phone-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.21 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            <span>+91 99806 87439</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
