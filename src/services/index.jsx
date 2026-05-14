import React, { useRef } from 'react';
import VariableProximity from '../components/VariableProximity';
import './ServicesNew.css';

const services = [
  {
    num: '01',
    title: 'Social Media Management',
    text: 'Content, community, and growth strategies to keep your brand active and loved.',
    href: '/social-media',
    gradient: 'from-pink-500 to-purple-600',
    accentColor: 'text-pink-400',
    icon: '📱',
  },
  {
    num: '02',
    title: 'Performance Marketing',
    text: 'ROI-first paid campaigns across search, social, and display with transparent reporting.',
    href: '/performance-marketing',
    gradient: 'from-purple-500 to-indigo-600',
    accentColor: 'text-purple-400',
    icon: '📊',
  },
  {
    num: '03',
    title: 'Branding & Identity',
    text: 'Build memorable brands with naming, visual systems, and clear messaging.',
    href: '/branding',
    gradient: 'from-lime-400 to-green-500',
    accentColor: 'text-lime-400',
    icon: '✨',
  },
  {
    num: '04',
    title: 'Website Development',
    text: 'Fast, beautiful, conversion-focused websites engineered for growth.',
    href: '/website-development',
    gradient: 'from-cyan-400 to-blue-500',
    accentColor: 'text-cyan-400',
    icon: '💻',
  },
  {
    num: '05',
    title: 'Video Production',
    text: 'Cinematic storytelling, ads, and product films that stop the scroll.',
    href: '/video-production',
    gradient: 'from-red-500 to-orange-500',
    accentColor: 'text-red-400',
    icon: '🎬',
  },
  {
    num: '06',
    title: 'Search Engine Optimization',
    text: 'Technical and on-page optimization to keep your brand discoverable.',
    href: '/seo',
    gradient: 'from-green-400 to-emerald-500',
    accentColor: 'text-green-400',
    icon: '🔍',
  },
  {
    num: '07',
    title: 'Influencer Marketing',
    text: 'Creator partnerships that build trust and amplify reach.',
    href: '/influencer-marketing',
    gradient: 'from-yellow-400 to-orange-500',
    accentColor: 'text-yellow-400',
    icon: '👥',
  },
  {
    num: '08',
    title: 'Content Solutions',
    text: 'Strategy, copy, and creative assets tailored to your brand voice.',
    href: '/content-solution',
    gradient: 'from-indigo-400 to-purple-500',
    accentColor: 'text-indigo-400',
    icon: '📝',
  },
  {
    num: '09',
    title: 'Outdoor Marketing',
    text: 'Command attention and build immense brand trust in high-traffic real-world zones.',
    href: '/outdoor-marketing',
    gradient: 'from-teal-400 to-cyan-500',
    accentColor: 'text-teal-400',
    icon: '🏙️',
  },
];



const ServiceCard3D = ({ service }) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    const rX = -(mouseY / height) * 15;
    const rY = (mouseX / width) * 15;

    setRotate({ x: rX, y: rY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <a
      href={service.href}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="service-card-3d"
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${isHovered ? 1.03 : 1})`,
        transition: isHovered ? 'none' : 'transform 0.5s ease-out'
      }}
    >
      <div className={`service-card-bg bg-gradient-to-br ${service.gradient}`} />
      <div className="service-card-grid" />
      <div className="service-card-corners">
        <div className="corner-tl" />
        <div className="corner-tr" />
        <div className="corner-bl" />
        <div className="corner-br" />
      </div>

      <div className="service-card-content">
        <div className="service-card-header">
          <div className="service-card-icon-box">
            <span className="service-icon-emoji">{service.icon}</span>
          </div>
          <span className="service-card-num">{service.num}</span>
        </div>

        <div className="service-card-body">
          <h3 className={`service-card-title ${service.accentColor}`}>
            {service.title}
          </h3>
          <div className={`service-card-line bg-gradient-to-r ${service.gradient}`} />
          <p className="service-card-text">{service.text}</p>
        </div>

        <div className="service-card-footer">
          <span className="service-card-cta">
            View service <span className="service-arrow">→</span>
          </span>
        </div>
      </div>
    </a>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  
  return (
    <div className="services-page-new">
      <section className="services-hero-new" ref={containerRef}>
        <div className="services-hero-bg">
          <div className="hero-orb hero-orb-purple" />
          <div className="hero-orb hero-orb-lime" />
          <div className="hero-grid" />
        </div>

        <div className="services-hero-content">
          <div className="services-badge">
            <span className="badge-dot" />
            OVERVIEW // BUZZIWAH
          </div>

          <h1 className="services-hero-title">
            <div style={{ marginBottom: '8px' }}>
              <VariableProximity
                label="Everything you need"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                mode="sequential"
                autoSpeed={1.2}
                autoIntensity={1}
              />
            </div>
            <div style={{ color: '#adfa3b' }}>
              <VariableProximity
                label="to grow online"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                mode="sequential"
                autoSpeed={1.2}
                autoIntensity={1}
              />
            </div>
          </h1>

          <p className="services-hero-subtitle">
            We design integrated service stacks that connect your brand story with measurable outcomes.
            Choose a single service or combine them into a tailored growth plan.
          </p>

          <div className="services-hero-features">
            <div className="hero-feature">
              <span className="feature-icon">✦</span>
              <span>Strategy</span>
            </div>
            <div className="hero-feature">
              <span className="feature-icon">✦</span>
              <span>Production</span>
            </div>
            <div className="hero-feature">
              <span className="feature-icon">✦</span>
              <span>Performance</span>
            </div>
          </div>
        </div>
      </section>

      <section className="services-grid-new">
        {services.map((service) => (
          <ServiceCard3D key={service.num} service={service} />
        ))}
      </section>
    </div>
  );
};

export default Services;
