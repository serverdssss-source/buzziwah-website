import { useCallback, useEffect, useRef, useState } from 'react';
import './PerformanceMarketing.css';
import '../home/Home.css';

const useReveal = (threshold = 0.18) => {
  const ref = useRef(null);
  const [vis, setVis] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVis((prev) => prev + 1 || 1);
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, vis > 0];
};

const useParallax = () => {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setOffset({
      x: ((e.clientX - centerX) / rect.width) * 14,
      y: ((e.clientY - centerY) / rect.height) * 14,
    });
  }, []);

  const reset = useCallback(() => setOffset({ x: 0, y: 0 }), []);
  return [ref, offset, handleMove, reset];
};

const VideoPlayer = ({ videoSrc, poster, accentFrom, accentTo }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;
    video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    return undefined;
  }, [videoSrc]);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
      setPlaying(false);
    } else {
      video.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={toggle}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 11.5',
        borderRadius: 20,
        overflow: 'hidden',
        cursor: 'pointer',
        background: '#0a0a0f',
        boxShadow: hovered
          ? `0 30px 80px -10px ${accentFrom}55, 0 0 0 1px ${accentFrom}22`
          : '0 20px 60px -15px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
        transform: hovered ? 'scale(1.008)' : 'scale(1)',
        transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: -1,
          borderRadius: 21,
          padding: 1,
          background: `linear-gradient(135deg, ${accentFrom}44, transparent 50%, ${accentTo}44)`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <video
        ref={videoRef}
        src={videoSrc}
        poster={poster}
        loop
        muted
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: playing && !hovered ? 'transparent' : 'rgba(0,0,0,0.25)',
          opacity: playing && !hovered ? 0 : 1,
          transition: 'opacity 0.4s ease',
          zIndex: 3,
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 8px 32px ${accentFrom}66`,
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.3s ease',
          }}
        >
          {playing ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

const CaseSection = ({
  dark,
  reversed,
  title,
  subtitle,
  heading,
  points,
  videoSrc,
  poster,
  accentFrom,
  accentTo,
  tag,
  ctaLabel,
  backgroundImage,
}) => {
  const [sectionRef, show] = useReveal();
  const [parallaxRef, offset, onMove, onLeave] = useParallax();

  const anim = (name, delay = 0) =>
    show ? `${name} 0.9s ${delay}ms cubic-bezier(0.22, 1, 0.36, 1) both` : 'none';

  const textBlock = (
    <div
      style={{
        flex: '1 1 460px',
        maxWidth: 580,
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        opacity: show ? 1 : 0,
      }}
    >
      <div style={{ animation: anim('fadeUp', 100), opacity: 0 }}>
        <span
          style={{
            display: 'inline-block',
            padding: '6px 16px',
            borderRadius: 100,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: 1.8,
            textTransform: 'uppercase',
            color: accentFrom,
            border: `1px solid ${accentFrom}33`,
            background: `${accentFrom}0a`,
          }}
        >
          {tag}
        </span>
      </div>

      <h2
        style={{
          fontSize: 'clamp(34px, 5vw, 46px)',
          fontWeight: 800,
          lineHeight: 1.08,
          margin: 0,
          color: dark ? '#fff' : '#1a1a2e',
          letterSpacing: '-1.5px',
          animation: anim('fadeUp', 200),
          opacity: 0,
        }}
      >
        {title}
      </h2>

      <p
        style={{
          fontSize: 14,
          lineHeight: 1.7,
          margin: 0,
          color: dark ? 'rgba(255,255,255,0.45)' : 'rgba(26,26,46,0.45)',
          animation: anim('fadeUp', 280),
          opacity: 0,
        }}
      >
        {subtitle}
      </p>

      <div
        style={{
          width: 48,
          height: 3,
          borderRadius: 2,
          background: `linear-gradient(90deg, ${accentFrom}, ${accentTo})`,
          animation: anim('scaleX', 350),
          opacity: 0,
          transformOrigin: 'left',
        }}
      />

      <h3
        style={{
          fontSize: 20,
          fontWeight: 700,
          lineHeight: 1.4,
          margin: 0,
          color: dark ? 'rgba(255,255,255,0.92)' : 'rgba(26,26,46,0.9)',
          whiteSpace: 'nowrap',
          animation: anim('fadeUp', 400),
          opacity: 0,
        }}
      >
        {heading}
      </h3>

      <ul
        style={{
          margin: 0,
          padding: 0,
          listStyle: 'none',
          display: 'grid',
          gap: 12,
          animation: anim('fadeUp', 480),
          opacity: 0,
        }}
      >
        {points.map((point) => (
          <li
            key={point}
            style={{
              display: 'grid',
              gridTemplateColumns: '28px minmax(0, 1fr)',
              gap: 12,
              alignItems: 'start',
              padding: '14px 16px',
              borderRadius: 18,
              background: dark
                ? 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)'
                : 'linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.48) 100%)',
              border: dark
                ? '1px solid rgba(255,255,255,0.08)'
                : `1px solid ${accentFrom}22`,
              backdropFilter: 'blur(10px)',
            }}
          >
            <span
              style={{
                width: 28,
                height: 28,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 999,
                background: dark ? `${accentFrom}26` : `${accentFrom}18`,
                color: accentFrom,
                fontSize: '0.85rem',
                lineHeight: 1,
                marginTop: 1,
              }}
              aria-hidden="true"
            >
              ✦
            </span>
            <span
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: dark ? 'rgba(255,255,255,0.78)' : 'rgba(26,26,46,0.74)',
              }}
            >
              {point}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className="pm-case-cta"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          width: 'fit-content',
          padding: '14px 22px',
          borderRadius: 999,
          background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})`,
          color: '#fff',
          textDecoration: 'none',
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          boxShadow: `0 14px 34px ${accentFrom}33`,
          animation: anim('fadeUp', 540),
          opacity: 0,
        }}
      >
        {ctaLabel}
      </a>
    </div>
  );

  const videoBlock = (
    <div
      ref={parallaxRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        flex: '1 1 620px',
        maxWidth: 680,
        opacity: show ? 1 : 0,
        animation: anim(reversed ? 'slideLeft' : 'slideRight', 250),
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <VideoPlayer
        videoSrc={videoSrc}
        poster={poster}
        accentFrom={accentFrom}
        accentTo={accentTo}
      />
    </div>
  );

  return (
    <section
      className="pm-case-study"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '100px 48px',
        minHeight: 580,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: backgroundImage
          ? `url("${backgroundImage}") center/cover no-repeat`
          : dark
            ? '#0c0c14'
            : 'linear-gradient(180deg, #f3eff8 0%, #ece5f3 100%)',
      }}
    >
      {dark && (
        <>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
              backgroundSize: '72px 72px',
              opacity: show ? 1 : 0,
              transition: 'opacity 1.5s ease',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: 500,
              height: 500,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${accentFrom}08 0%, transparent 70%)`,
              top: '20%',
              left: reversed ? '70%' : '-5%',
              filter: 'blur(60px)',
              pointerEvents: 'none',
            }}
          />
        </>
      )}
      {!dark && (
        <div
          style={{
            position: 'absolute',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${accentFrom}0c 0%, transparent 60%)`,
            top: '-10%',
            right: reversed ? 'auto' : '-10%',
            left: reversed ? '-10%' : 'auto',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
      )}

      <div
        style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
        maxWidth: 1340,
        width: '100%',
        position: 'relative',
        zIndex: 1,
          flexDirection: reversed ? 'row-reverse' : 'row',
        }}
      >
        {textBlock}
        {videoBlock}
      </div>
    </section>
  );
};

const FlipCard = ({ src, alt }) => {
  const ref = useRef(null);
  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -15;
    const rotateY = ((x - rect.width / 2) / rect.width) * 15;
    ref.current.querySelector('.pm-flip-card').style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  const handleLeave = () => {
    ref.current.querySelector('.pm-flip-card').style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  };
  return (
    <div className="pm-flip-container" ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div className="pm-flip-card">
        <div className="pm-flip-card-front">
          <img src={src} alt={alt} />
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    num: '01',
    title: 'Campaign Strategy & Planning',
    desc: "We map out your campaign goals, audience, and funnel strategy to ensure every ad dollar is spent with purpose and precision.",
    img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-32.png',
  },
  {
    num: '02',
    title: 'Paid Ads (Google, Meta, YouTube)',
    desc: 'We create and manage high-performing ad campaigns across Google, Meta, and YouTube to maximize reach and conversions.',
    img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-33.png',
  },
  {
    num: '03',
    title: 'Audience Targeting & Segmentation',
    desc: 'We identify and target the right audience segments based on behavior, demographics, and intent for better campaign performance.',
    img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-34.png',
  },
  {
    num: '04',
    title: 'Ad Creatives & Copy',
    desc: 'We design scroll-stopping visuals and write compelling ad copy that captures attention and drives action.',
    img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-35.png',
  },
  {
    num: '05',
    title: 'Landing Page Optimisation',
    desc: 'We optimize your landing pages for conversions, ensuring seamless user experience from click to conversion.',
    img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-36.png',
  },
  {
    num: '06',
    title: 'A/B Testing & Experimentation',
    desc: 'We continuously test ad variations, creatives, and messaging to identify what works best and scale winning campaigns.',
    img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-37.png',
  },
  {
    num: '07',
    title: 'Conversion Tracking & Analytics',
    desc: 'We implement precise tracking systems to measure every conversion, click, and customer action across all platforms.',
    img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-38.png',
  },
  {
    num: '08',
    title: 'Performance Monitoring & Reporting',
    desc: 'We provide transparent, data-driven reports that show exactly how your campaigns are performing and where to improve.',
    img: 'https://sripadastudiosdigital.com/wp-content/uploads/2026/03/SSD_Performance-Marketing-Webpage-39.png',
  },
];

const ServiceCard = ({ service }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`service-card${hovered ? ' beam-active' : ''}`}
      style={{
        background: hovered ? '#ffffff' : '#f9f9f9',
        transition: 'all 0.45s cubic-bezier(.25,.46,.45,.94)',
      }}
    >
      <svg className="border-svg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <rect className="border-rect" x="0" y="0" rx="16" ry="16" width="100%" height="100%" />
      </svg>

      <div
        style={{
          marginBottom: 24,
          transform: hovered ? 'scale(1.08) rotate(-3deg)' : 'scale(1) rotate(0)',
          position: 'relative',
          zIndex: 1,
          transition: 'transform 0.4s ease',
        }}
      >
        <img
          src={service.img}
          alt={service.title}
          style={{
            width: 100,
            height: 100,
            objectFit: 'contain',
          }}
        />
      </div>

      <h3
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: '#a855f7',
          marginBottom: 14,
          lineHeight: 1.35,
          letterSpacing: '-0.2px',
          minHeight: 48,
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          fontSize: 14,
          lineHeight: 1.75,
          color: '#5a5a5a',
          margin: 0,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {service.desc}
      </p>
    </div>
  );
};

const zigzagSteps = [
  {
    title: 'Strategy Planning',
    desc: 'Define goals, KPIs, audience, and funnel direction. We map out every stage of your customer journey so campaigns launch with clarity and purpose.',
  },
  {
    title: 'Channel Selection',
    desc: 'Select platforms like Google Ads, Meta, YouTube, and more. We match each channel to your audience behaviour and business objectives.',
  },
  {
    title: 'Ad Creative',
    desc: 'Create engaging visuals and ad copy that convert. Every asset is designed to stop the scroll and drive meaningful action.',
  },
  {
    title: 'Campaign Execution',
    desc: 'Launch optimized campaigns with proper targeting and budgets. We set precise parameters to maximise reach and minimise waste.',
  },
  {
    title: 'Tracking & Analytics',
    desc: 'Use pixels, UTM tracking, and tools like GA4, Meta Pixel. Every click and conversion is measured to guide smarter decisions.',
  },
  {
    title: 'Optimization',
    desc: 'Test creatives, refine bids, and enhance audience targeting. Continuous improvement turns good campaigns into great ones.',
  },
  {
    title: 'Scaling',
    desc: "Scale high-performing campaigns for growth and profit. We expand what works and cut what doesn't — driving predictable returns.",
  },
];

const pmHighlight = {
  title: 'Campaigns that pay off',
  intro: 'Creative + data + continuous optimization. Knowing what works, what doesn\'t, and refining every step along the way from targeting the right audience to optimising creatives and tracking real outcomes.',
  points: [
    'We build and manage campaigns that are designed to deliver outcomes, not just impressions, in both Meta and Google Ads.',
    'From targeting the right audience to optimising campaigns in real-time, everything is focused on performance.',
    'Track results, analyse, and get insight into what ad is working best for your target audience.',
  ],
};

const pmFaqs = [
  { q: 'What is Buzziwah?', a: 'Buzziwah is a Bengaluru-based conglomerate specializing in filmmaking, digital marketing, and research. We deliver creative and strategic solutions across three core verticals to help brands and individuals connect meaningfully with their audiences.' },
  { q: 'What services does Buzziwah offer?', a: 'Filmmaking: Short films, documentaries, promotional videos, and corporate films. Digital Marketing: Social media management, performance marketing, content creation, branding, and online reputation management. Research & Reach: Data-driven audience analysis, campaign planning, and customized strategies for better outreach.' },
  { q: 'Who are your clients?', a: 'We cater to small businesses, multinational corporations, startups, personal branding clients, and large-scale brands across industries.' },
  { q: 'What makes Buzziwah unique?', a: 'We combine creativity with strategy to deliver innovative solutions tailored to each project. Our young, dynamic team excels at breaking monotony and crafting imaginative campaigns that resonate deeply with the target audience.' },
  { q: 'Do you specialize in Kannada film promotions?', a: 'Yes. Under Sripada Studios Designs, we focus exclusively on Kannada films, handling logo creation, promotional videos, posters, social media management, event coverage, and more to align with filmmakers’ vision and audience.' },
  { q: 'Can you handle end-to-end digital marketing campaigns?', a: 'Absolutely. From social media marketing and performance ads to website design and content marketing, we provide end-to-end digital marketing solutions customized to your goals.' },
  { q: 'How experienced is your team?', a: 'Our team includes creative writers, editors, filmmakers, and digital marketing professionals with years of experience, all driven by a shared passion for storytelling and impactful campaigns.' },
  { q: 'Do you have examples of your past work?', a: 'Yes. We’ve completed 500+ projects for 100+ clients. Check out our portfolio for case studies and success stories that showcase our expertise.' },
];

const PMFaqCard = ({ faq, idx }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-card ${open ? 'open' : ''}`}>
      <button className="faq-question" type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{`${idx + 1}. ${faq.q}`}</span>
        <span className="faq-arrow">ƒO,</span>
      </button>
      <div className="faq-answer">{faq.a}</div>
    </div>
  );
};

const WorkflowStepCard = ({ step, index }) => {
  const isEven = index % 2 === 1;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="step-row"
      style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '20px 40px',
        display: 'flex',
        justifyContent: isEven ? 'flex-end' : 'flex-start',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'all 0.7s cubic-bezier(.25,.46,.45,.94)',
      }}
    >
      <div
        style={{
          maxWidth: 520,
          textAlign: 'center',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            fontSize: 13,
            fontWeight: 700,
            color: '#a855f7',
            background: 'rgba(168,85,247,0.1)',
            borderRadius: 20,
            padding: '5px 16px',
            marginBottom: 16,
            letterSpacing: '1px',
          }}
        >
          STEP {String(index + 1).padStart(2, '0')}
        </span>

        <h3
          style={{
            fontSize: 'clamp(22px, 3vw, 30px)',
            fontWeight: 700,
            color: '#7c3aed',
            margin: '0 0 14px',
            lineHeight: 1.2,
            letterSpacing: '-0.3px',
          }}
        >
          {step.title}
        </h3>

        <p
          style={{
            fontSize: 15,
            lineHeight: 1.8,
            color: '#4a4a4a',
            margin: '0 0 18px',
          }}
        >
          {step.desc}
        </p>

        <div
          style={{
            width: '100%',
            aspectRatio: '16/6',
            borderRadius: 14,
            background: 'linear-gradient(145deg, #e8f5e9, #f1f8e9, #dcedc8)',
            border: '1px solid rgba(168,85,247,0.08)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <svg
            viewBox="0 0 400 150"
            style={{ width: '100%', height: '100%', position: 'absolute', bottom: 0 }}
            preserveAspectRatio="xMidYMax slice"
          >
            <rect width="400" height="150" fill="#e3f2fd" opacity="0.5" />
            <ellipse cx="90" cy="40" rx="30" ry="12" fill="white" opacity="0.7" />
            <ellipse cx="110" cy="37" rx="22" ry="10" fill="white" opacity="0.7" />
            <ellipse cx="270" cy="30" rx="25" ry="10" fill="white" opacity="0.6" />
            <ellipse cx="200" cy="180" rx="260" ry="80" fill="#8bc34a" opacity="0.3" />
            <ellipse cx="90" cy="185" rx="190" ry="70" fill="#689f38" opacity="0.4" />
            <ellipse cx="310" cy="188" rx="170" ry="65" fill="#558b2f" opacity="0.35" />
          </svg>

          <span
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: 50,
              fontWeight: 800,
              color: 'rgba(168,85,247,0.07)',
              userSelect: 'none',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
};

const PerformanceMarketing = () => (
  <div className="pm-page im-font">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap');

      .pm-page,
      .pm-page * {
        font-family: 'Nunito Sans', sans-serif !important;
      }

      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(36px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes slideRight {
        from { opacity: 0; transform: translateX(60px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes slideLeft {
        from { opacity: 0; transform: translateX(-60px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes scaleX {
        from { opacity: 0; transform: scaleX(0); }
        to { opacity: 1; transform: scaleX(1); }
      }
      @keyframes pmCtaGlow {
        0%, 100% { box-shadow: 0 14px 34px rgba(124, 58, 237, 0.22); }
        50% { box-shadow: 0 20px 42px rgba(124, 58, 237, 0.34); }
      }
      .pm-page .pm-case-cta {
        position: relative;
        overflow: hidden;
        transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
        animation: pmCtaGlow 2.8s ease-in-out infinite;
      }
      .pm-page .pm-case-cta::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.28) 45%, transparent 70%);
        transform: translateX(-140%);
        transition: transform 0.55s ease;
      }
      .pm-page .pm-case-cta:hover {
        transform: translateY(-3px) scale(1.02);
        filter: brightness(1.04);
      }
      .pm-page .pm-case-cta:hover::after {
        transform: translateX(140%);
      }
      @media (max-width: 900px) {
        .pm-page .pm-case-study {
          padding: 72px 20px !important;
          min-height: auto !important;
        }
      }
    `}</style>

    <section className="relative z-[2] m-0 w-full p-0 leading-none">
      <img src="/banners/performance-marketing-page-banner.png" alt="Performance Marketing Banner" className="block h-auto w-full" />
    </section>

    <section className="pm-section2">
      <div className="pm-section2-shell">
        <article className="pm-highlight-card">
          <div className="pm-highlight-visual">
            <img src="/performance-marketing-section2-illustration.png" alt={pmHighlight.title} />
          </div>
          <div className="pm-highlight-copy">
            <h3>{pmHighlight.title}</h3>
            <p>{pmHighlight.intro}</p>
            <ul className="growth-list pm-highlight-points">
              {pmHighlight.points.map((point) => (
                <li key={point}>
                  <span className="growth-list-icon" aria-hidden="true">✦</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="pm-highlight-cta-wrap">
              <a
                href="#"
                className="pm-highlight-cta"
                onClick={(e) => e.preventDefault()}
              >
                Know More
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <CaseSection
      dark={true}
      reversed={false}
      tag="Performance Marketing"
      title={
        <>
          <span style={{ whiteSpace: 'nowrap' }}>
            <span style={{ color: '#7C3AED' }}>Growth of </span>
            <span style={{ color: '#c8f041' }}>Fitness Factory</span>
          </span>
        </>
      }
      subtitle="From strategy to execution, we helped Fitness Factory grow."
      heading="How We Scaled Fitness Factory's Growth with Performance Marketing."
      points={[
        "Strategically crafted to engage Bengaluru's health and fitness-conscious audience.",
        'Focused on compelling creative direction and targeted ad placement.',
        'Used real-time performance tracking to drive high-quality leads and membership sign-ups.',
        'Exceeded expectations with measurable results, improved ROI, and scalable growth potential.',
      ]}
      videoSrc="https://sripadastudiosdigital.com/wp-content/uploads/2025/05/gym1-mp4.mp4"
      poster="https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Untitled-design-38.png"
      accentFrom="#8B5CF6"
      accentTo="#A78BFA"
      ctaLabel="Explore More"
    />

    <CaseSection
      dark={false}
      reversed={true}
      tag="Performance Marketing"
      title={
        <>
          <span style={{ whiteSpace: 'nowrap' }}>
            <span style={{ color: '#7C3AED' }}>Growth of </span>
            <span style={{ color: '#111111' }}>Lilbeez Pre-school</span>
          </span>
        </>
      }
      subtitle="From strategy to execution, we helped Lilbeez Pre-school Academic grow."
      heading="How We Scaled Lilbeez's Growth with Performance Marketing."
      points={[
        "Precisely engineered for Bengaluru's target education audience.",
        'Built with a clear focus on creative direction, ad precision, and consistent monitoring.',
        'Delivered strong lead quality and better campaign profitability.',
        'Surpassed expectations with measurable and scalable performance results.',
      ]}
      videoSrc="https://sripadastudiosdigital.com/wp-content/uploads/2025/05/lilbeez1-mp4-2.mp4"
      poster="https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Untitled-design-59.png"
      accentFrom="#7C3AED"
      accentTo="#9F7AEA"
      ctaLabel="Explore More"
      backgroundImage="/shared-light-pattern-bg.png"
    />

    <section className="pm-services">
      <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes traceBorder {
          0% { stroke-dashoffset: 2000; }
          100% { stroke-dashoffset: 0; }
        }
        .pm-services {
          min-height: 100vh;
          background: #0a0a0a;
          padding: 60px 20px 100px;
          position: relative;
          overflow: hidden;
        }
        .pm-services .heading-text {
          animation: fadeDown 0.8s ease both;
          text-align: center;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 800;
          color: #a855f7;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0 0 50px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
        }
        .pm-services-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding: 0;
        }
        .service-card {
          position: relative;
          border-radius: 16px;
          padding: 40px 28px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: default;
          opacity: 0;
          animation: cardIn 0.6s ease both;
          border: 1px solid rgba(0,0,0,0.06);
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }
        .border-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
          overflow: visible;
        }
        .border-rect {
          fill: none;
          stroke: url(#beamGradient);
          stroke-width: 6;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.6));
        }
        .beam-active .border-rect {
          animation: traceBorder 1.2s cubic-bezier(.4,0,.2,1) forwards;
        }
        .service-card:nth-child(1) { animation-delay: 0.1s; }
        .service-card:nth-child(2) { animation-delay: 0.17s; }
        .service-card:nth-child(3) { animation-delay: 0.24s; }
        .service-card:nth-child(4) { animation-delay: 0.31s; }
        .service-card:nth-child(5) { animation-delay: 0.38s; }
        .service-card:nth-child(6) { animation-delay: 0.45s; }
        .service-card:nth-child(7) { animation-delay: 0.52s; }
        .service-card:nth-child(8) { animation-delay: 0.59s; }
        .service-card:nth-child(9) { animation-delay: 0.66s; }
        @media (max-width: 900px) {
          .pm-services-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .pm-services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#e9d5ff" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
      <h2 className="heading-text">Ad Plans that kick off</h2>
      <div className="pm-services-grid">
        {services.map((service) => (
          <ServiceCard key={service.num} service={service} />
        ))}
      </div>
    </section>

    <section className="pm-why">
      <h2 className="pm-section-title">Why Choose Us</h2>
      <div className="pm-flip-row">
        <FlipCard src="https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Untitled-design-34.png" alt="Why 1" />
        <FlipCard src="https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Untitled-design-35.png" alt="Why 2" />
      </div>
      <div className="pm-flip-row">
        <FlipCard src="https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Untitled-design-36.png" alt="Why 3" />
        <FlipCard src="https://sripadastudiosdigital.com/wp-content/uploads/2025/05/Untitled-design-37.png" alt="Why 4" />
      </div>
    </section>

    <section className="pm-process">
      <style>{`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-badge {
          animation: fadeDown 0.6s ease both;
        }
        .hero-title {
          animation: fadeDown 0.6s 0.1s ease both;
        }
        .hero-sub {
          animation: fadeDown 0.6s 0.2s ease both;
        }
        @media (max-width: 768px) {
          .step-row {
            padding: 20px 20px !important;
            justify-content: center !important;
          }
          .step-row > div {
            max-width: 100% !important;
          }
        }
        .steps-container {
          position: relative;
        }
      `}</style>

      <div
        style={{
          textAlign: 'center',
          padding: '80px 40px 60px',
        }}
      >
        <span
          className="hero-badge"
          style={{
            display: 'inline-block',
            fontSize: 12,
            fontWeight: 600,
            color: '#7c3aed',
            textTransform: 'uppercase',
            letterSpacing: 3,
            marginBottom: 20,
            background: 'rgba(168,85,247,0.08)',
            padding: '8px 24px',
            borderRadius: 100,
          }}
        >
          Our Workflow
        </span>

        <h1
          className="hero-title"
          style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 800,
            color: '#7c3aed',
            letterSpacing: '-1px',
            margin: '0 0 20px',
            lineHeight: 1.15,
          }}
        >
          Performance Marketing Process
        </h1>

        <p
          className="hero-sub"
          style={{
            fontSize: 17,
            lineHeight: 1.7,
            color: '#555',
            maxWidth: 600,
            margin: '0 auto',
          }}
        >
          A clean, data-led system that takes campaigns from planning to scale without losing clarity,
          speed, or performance.
        </p>
      </div>

      <div className="steps-container">
        {zigzagSteps.map((step, i) => (
          <WorkflowStepCard key={step.title} step={step} index={i} />
        ))}
      </div>
    </section>

    <section className="faq-showcase">
      <div className="faq-inner">
        <div className="faq-header">
          <div className="faq-title-block">
            <h2>Any questions?</h2>
            <h3>We got you.</h3>
          </div>
          <p className="faq-intro">
            Have something on your mind? Whether it's about our services, process, timelines, or
            pricing — we've answered the most common questions to help you move forward with
            clarity and confidence.
          </p>
        </div>
        <div className="faq-grid">
          {pmFaqs.map((faq, idx) => <PMFaqCard key={idx} faq={faq} idx={idx} />)}
        </div>
      </div>
    </section>
  </div>
);

export default PerformanceMarketing;
