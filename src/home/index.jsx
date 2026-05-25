import React from 'react';
import './Home.css';
import UpscaleGrid from './UpscaleGrid';
import ContentSalesSection from './ContentSalesSection';
import DigitalMarketingSection from './DigitalMarketingSection';
import ClienteleSection from './ClienteleSection';
import VisibleOnlineSection from './VisibleOnlineSection';
import Section10 from '../WebDevSections/Section10';
import NearbyStudioSection from './NearbyStudioSection';
import StatsSection from './StatsSection';
import ShuffleCards from './projects';

const caseStudies = [
  {
    img: 'branding_case.png',
    pill: 'Branding Project',
    title: 'Cohesive Brand Identity',
    tag: 'Complete corporate identity, style guides, logo design, stationery, and premium brand system.',
    url: '/branding'
  },
  {
    img: 'hearfon_case.png',
    pill: 'Ad Production',
    title: 'HearFon Clinic',
    tag: 'Professional medical healthcare ad campaigns, corporate identity, and audience media engagement.',
    url: 'https://hearfon.com/'
  },
  {
    img: 'wmn_case.png',
    pill: 'Content Marketing',
    title: 'WMN Healthcare',
    tag: 'Premium women and maternal wellness portals, targeted content strategies and digital performance.',
    url: 'https://wmnhealthcare.com/'
  },
  {
    img: 'tentcinema_case.png',
    pill: 'Social Campaigns',
    title: 'Tent Cinema',
    tag: 'Vibrant filmmaking school ad positioning, lead capture funnels and local community growth.',
    url: 'https://tentcinema.com/'
  },
  {
    img: 'kovedaa_case.png',
    pill: 'E-Commerce Website',
    title: 'Kovedaa Ayurveda',
    tag: 'Luxury organic ayurvedic skincare online storefront, modern brand collateral and product shoots.',
    url: 'https://kovedaa.com/'
  },
  {
    img: 'srichakra_case.webp',
    pill: 'Branding & Web',
    title: 'Sindoor Collection',
    tag: 'Because her beauty deserves to shine a little brighter. Refined brand identities, custom websites, and creative product shoots.',
    url: '/case-study/sindoor-collection'
  }
];

// WaterDropletEffect removed — 400ms setInterval was causing constant re-renders (major mobile lag)

const Home = () => {
  const [openFaqIndex, setOpenFaqIndex] = React.useState(0);
  const [activeCaseIndex, setActiveCaseIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(() => {
    if (typeof window !== 'undefined') return window.innerWidth < 768;
    return true;
  });

  const activeCase = caseStudies[activeCaseIndex];

  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);

    // Scroll-reveal only on desktop — on mobile all sections visible immediately
    if (!mq.matches) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
      document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
      return () => { observer.disconnect(); mq.removeEventListener('change', handler); };
    } else {
      // On mobile: instantly make all scroll-reveal elements visible
      document.querySelectorAll('.scroll-reveal').forEach((el) => el.classList.add('is-visible'));
      return () => mq.removeEventListener('change', handler);
    }
  }, []);

  return (
    <div className="bg-black">
      <div className="scroll-reveal reveal-fade-in">
        <DigitalMarketingSection />
      </div>

      <div className="scroll-reveal reveal-slide-up">
        <UpscaleGrid />
      </div>

      <div className="scroll-reveal reveal-zoom-in">
        <NearbyStudioSection />
      </div>

      <div className="scroll-reveal reveal-slide-right">
        <ContentSalesSection />
      </div>

      <ShuffleCards />

      <section className="growth-section">
        <div className="growth-inner">
          <div className="growth-content">
            <div className="growth-kicker">
              <span className="growth-kicker-dot" aria-hidden="true" />
              <span>Driven by Passion. Quality. Dedication.</span>
            </div>
            <h2 className="growth-title retro-9">
              Grow with
              <span className="growth-title-accent">Buzziwah</span>
            </h2>
            <p className="growth-lead">
              Because “trying” isn’t a growth strategy.
            </p>

            <div className="growth-cta">
              <a href="/contact" className="growth-button">
                Start a Project <span>→</span>
              </a>
            </div>
          </div>

          <div className="growth-cards-grid">
            <div className="growth-card growth-card-1">
              <div className="growth-card-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <div className="growth-card-content">
                <span className="growth-card-num">01</span>
                <h3 className="growth-card-title retro-sm">Brand Visibility</h3>
                <p className="growth-card-desc">Build a presence that stays visible across every digital platform your audience uses.</p>
              </div>
            </div>

            <div className="growth-card growth-card-2">
              <div className="growth-card-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div className="growth-card-content">
                <span className="growth-card-num">02</span>
                <h3 className="growth-card-title retro-sm">Customer Trust</h3>
                <p className="growth-card-desc">Create authentic connections that turn first-time visitors into loyal customers.</p>
              </div>
            </div>

            <div className="growth-card growth-card-3">
              <div className="growth-card-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <div className="growth-card-content">
                <span className="growth-card-num">03</span>
                <h3 className="growth-card-title retro-sm">Smart Growth</h3>
                <p className="growth-card-desc">Marketing strategies that deliver measurable results and real business growth.</p>
              </div>
            </div>

            <div className="growth-card growth-card-4">
              <div className="growth-card-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <div className="growth-card-content">
                <span className="growth-card-num">04</span>
                <h3 className="growth-card-title font-bold retro-sm">Target Precision</h3>
                <p className="growth-card-desc">Reach the right people at the right time with data-driven targeting.</p>
              </div>
            </div>

            <div className="growth-card growth-card-5">
              <div className="growth-card-icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              </div>
              <div className="growth-card-content">
                <span className="growth-card-num">05</span>
                <h3 className="growth-card-title retro-sm">Data Insights</h3>
                <p className="growth-card-desc">Make informed decisions backed by analytics, metrics, and proven performance data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="scroll-reveal reveal-fade-in">
        <VisibleOnlineSection />
      </div>

      <section className="faq-showcase" id="faq">
        <div className="faq-inner">
          <div className="faq-header">
            <div className="faq-title-block">
              <h2 className="retro-1">Any questions?</h2>
            </div>
            <p className="faq-intro">
              Have something on your mind? Whether it’s about our services, process, timelines, or
              pricing — we’ve answered the most common questions to help you move forward with
              clarity and confidence.
            </p>
          </div>

          {(() => {
            const faqItems = [
              {
                question: 'What is Buzziwah?',
                answer:
                  'Buzziwah is a Bengaluru-based conglomerate specializing in filmmaking, digital marketing, and research. We deliver creative and strategic solutions across three core verticals to help brands and individuals connect meaningfully with their audiences.',
              },
              {
                question: 'What services does Buzziwah offer?',
                answer:
                  'Filmmaking: Short films, documentaries, promotional videos, and corporate films. Digital Marketing: Social media management, performance marketing, content creation, branding, and online reputation management. Research & Reach: Data-driven audience analysis, campaign planning, and customized strategies for better outreach.',
              },
              {
                question: 'Who are your clients?',
                answer:
                  'We cater to small businesses, multinational corporations, startups, personal branding clients, and large-scale brands across industries.',
              },
              {
                question: 'What makes Buzziwah unique?',
                answer:
                  'We combine creativity with strategy to deliver innovative solutions tailored to each project. Our young, dynamic team excels at breaking monotony and crafting imaginative campaigns that resonate deeply with the target audience.',
              },
              {
                question: 'Do you specialize in Kannada film promotions?',
                answer:
                  'Yes. Under Sripada Studios Designs, we focus exclusively on Kannada films, handling logo creation, promotional videos, posters, social media management, event coverage, and more to align with filmmakers’ vision and audience.',
              },
              {
                question: 'Can you handle end-to-end digital marketing campaigns?',
                answer:
                  'Absolutely. From social media marketing and performance ads to website design and content marketing, we provide end-to-end digital marketing solutions customized to your goals.',
              },
              {
                question: 'How experienced is your team?',
                answer:
                  'Our team includes creative writers, editors, filmmakers, and digital marketing professionals with years of experience, all driven by a shared passion for storytelling and impactful campaigns.',
              },
              {
                question: 'Do you have examples of your past work?',
                answer:
                  'Yes. We’ve completed 500+ projects for 100+ clients. Check out our portfolio for case studies and success stories that showcase our expertise.',
              },
            ];

            return (
              <div className="faq-grid">
                {faqItems.map((item, idx) => (
                  <div className={`faq-card ${openFaqIndex === idx ? 'open' : ''}`} key={item.question}>
                    <button
                      className="faq-question"
                      type="button"
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
                      aria-expanded={openFaqIndex === idx}
                    >
                      <span>{`${idx + 1}. ${item.question}`}</span>
                      <span className="faq-arrow">⌄</span>
                    </button>
                    <div className="faq-answer">{item.answer}</div>
                  </div>
                ))}
              </div>
            );
          })()}

        </div>
      </section>

      <ClienteleSection />

      <section className="home-bottom-megablock relative overflow-hidden">
        {/* High-fidelity background decorations inherited from 'Look what we did' */}
        <div className="bbbbb-bg-decorations pointer-events-none select-none">
            <div className="bbbbb-orb bbbbb-orb-purple" style={{ top: '10%', left: '5%' }} />
            <div className="bbbbb-orb bbbbb-orb-lime" style={{ bottom: '15%', right: '5%' }} />
            <div className="bbbbb-grid-perspective" style={{ opacity: 0.4 }} />
            
            <svg className="bbbbb-decor-waves opacity-10" viewBox="0 0 1440 800" fill="none">
              <path d="M-200,400 Q720,-100 1640,400" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" strokeDasharray="10 10" />
              <circle cx="1200" cy="200" r="150" stroke="rgba(173, 250, 59, 0.2)" strokeWidth="1" />
            </svg>

            {/* Technical plus particles */}
            <div className="bbbbb-tech-plus" style={{ top: '20%', left: '10%', color: '#adfa3b' }}>+</div>
            <div className="bbbbb-tech-plus" style={{ bottom: '30%', right: '15%', color: '#8b5cf6' }}>+</div>
        </div>

        <div className="relative z-10">
          <div className="scroll-reveal reveal-slide-up">
            <StatsSection />
          </div>
          <div className="scroll-reveal reveal-slide-up">
            <Section10 />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
