const BASE_URL = 'https://www.buzziwah.com';
const DEFAULT_IMAGE = `${BASE_URL}/Buzziwah_FInal_Logo_White.png`;
const SITE_NAME = 'Buzziwah';

const PAGE_SEO = {
  '/': {
    title: 'Buzziwah — Digital Marketing Agency in Bengaluru | Branding, SEO & Performance Marketing',
    description: 'Buzziwah is Bengaluru\'s top digital marketing agency. We deliver branding, performance marketing, SEO, social media, web development, and cinema-to-digital campaigns that actually convert.',
    keywords: 'Digital Marketing Company Bangalore, Digital Marketing Agency Bangalore, Best Digital Marketing Company Bangalore, Top Digital Marketing Agency Bangalore, Digital Marketing Services Bangalore, Online Marketing Agency Bangalore, Internet Marketing Company Bangalore, Digital Marketing Consultant Bangalore, Digital Growth Agency Bangalore, Creative Digital Agency Bangalore, Brand Development Agency Bangalore, Digital Transformation Services Bangalore, Full Service Digital Agency Bangalore, Integrated Marketing Agency Bangalore, Marketing Automation Bangalore, ROI Driven Marketing Bangalore, Data Driven Marketing Bangalore, B2B Digital Marketing Bangalore, Ecommerce Marketing Services Bangalore, Startup Marketing Services Bangalore, Small Business Marketing Bangalore, Digital Advertising Company Bangalore, Digital Strategy Consulting Bangalore, Corporate Digital Marketing Bangalore, Digital Marketing Packages Bangalore, Marketing Analytics Services Bangalore, Inbound Marketing Agency Bangalore, Growth Hacking Agency Bangalore, Digital Marketing Near Me, Digital Marketing Whitefield, Digital Marketing Electronic City, Digital Marketing Marathahalli, Digital Marketing BTM Layout, Digital Marketing Koramangala, Digital Marketing Indiranagar, Digital Marketing Hebbal, Digital Marketing Yelahanka, Content Marketing Services Bangalore, Email Marketing Agency Bangalore, Video Marketing Services Bangalore, Mobile Marketing Agency Bangalore, Affiliate Marketing Services Bangalore, Conversion Rate Optimization Bangalore, Online Reputation Management Bangalore, Local Marketing Services Bangalore, Lead Generation Agency Bangalore, Buzziwah digital marketing Bengaluru',
    image: `${BASE_URL}/home-digital-marketing-hero-image.png`,
    type: 'website',
  },
  '/about': {
    title: 'About Buzziwah — Bengaluru\'s Creative & Performance Marketing Conglomerate',
    description: 'Meet the team behind Buzziwah — a Bengaluru-based creative conglomerate powered by Sripada Studios. Sharp minds, fast execution, cinema-level storytelling meets data-driven marketing.',
    keywords: 'about Buzziwah, Sripada Studios, digital marketing team Bengaluru, creative agency about us',
    image: `${BASE_URL}/founders image about us.png`,
    type: 'website',
  },
  '/branding': {
    title: 'Branding Agency in Bengaluru | Brand Identity & Strategy — Buzziwah',
    description: 'Build a brand that commands attention. Buzziwah crafts bold brand identities, logos, visual systems, and brand strategies for businesses in Bengaluru and beyond.',
    keywords: 'Branding Agency Bangalore, Brand Identity Design Bangalore, Logo Design Bangalore, Brand Strategy Bangalore, Visual Identity Bangalore, Brand Development Agency Bangalore, Creative Digital Agency Bangalore, Corporate Branding Bangalore, Brand Awareness Campaigns Bangalore, Online Brand Management Bangalore, Buzziwah branding Bengaluru',
    image: `${BASE_URL}/banners/branding-page-banner.png`,
    type: 'website',
  },
  '/performance-marketing': {
    title: 'Performance Marketing Agency Bengaluru | ROI-Driven Ads — Buzziwah',
    description: 'Drive real results with Buzziwah\'s performance marketing. Meta Ads, Google Ads, and data-driven campaigns that deliver 300%+ ROI for brands in Bengaluru.',
    keywords: 'Performance Marketing Agency Bangalore, Google Ads Agency Bangalore, PPC Company Bangalore, PPC Services Bangalore, Pay Per Click Agency Bangalore, Best PPC Agency Bangalore, Google Advertising Company Bangalore, Search Engine Marketing Bangalore, SEM Services Bangalore, Google Ads Expert Bangalore, Google Ads Consultant Bangalore, Performance Marketing Bangalore, Lead Generation PPC Bangalore, Lead Generation Agency Bangalore, ROI Driven Marketing Bangalore, Data Driven Marketing Bangalore, Conversion Rate Optimization Bangalore, Meta Ads Bangalore, Paid Advertising Bangalore, Buzziwah performance marketing',
    image: `${BASE_URL}/banners/performance-marketing-page-banner.png`,
    type: 'website',
  },
  '/social-media': {
    title: 'Social Media Management Agency Bengaluru | Content & Growth — Buzziwah',
    description: 'Grow your brand on Instagram, YouTube, and LinkedIn with Buzziwah\'s social media management. Strategy, content creation, and community management in Bengaluru.',
    keywords: 'Social Media Marketing Company Bangalore, Social Media Marketing Agency Bangalore, Social Media Marketing Bangalore, Best Social Media Marketing Bangalore, SMM Services Bangalore, Social Media Management Bangalore, Instagram Marketing Agency Bangalore, Facebook Advertising Agency Bangalore, LinkedIn Marketing Services Bangalore, Twitter Marketing Agency Bangalore, YouTube Marketing Services Bangalore, Pinterest Marketing Bangalore, Social Media Strategy Bangalore, Brand Awareness Campaigns Bangalore, Community Management Services Bangalore, Social Media Content Creation Bangalore, Paid Social Advertising Bangalore, Social Media ROI Bangalore, Viral Marketing Agency Bangalore, Social Media Consulting Bangalore, Social Media Optimization Bangalore, SMO Services Bangalore, Online Brand Management Bangalore, Social Media Analytics Bangalore, Social Media Audit Services Bangalore, B2B Social Media Marketing Bangalore, B2C Social Media Marketing Bangalore, Social Commerce Services Bangalore, Reels Marketing Bangalore, Short Video Marketing Bangalore, Social Media Marketing Whitefield, Social Media Marketing Electronic City, Social Media Marketing Marathahalli, Social Media Marketing BTM Layout, Social Media Marketing Koramangala, Social Media Marketing Indiranagar, Social Media Marketing Hebbal, Social Media Marketing Yelahanka, Social Media Marketing Near Me, Influencer Marketing Agency Bangalore, Buzziwah social media Bengaluru',
    image: `${BASE_URL}/social media.png`,
    type: 'website',
  },
  '/seo': {
    title: 'SEO Agency in Bengaluru | Organic Growth & Search Rankings — Buzziwah',
    description: 'Rank higher, grow faster. Buzziwah\'s SEO services include technical SEO, on-page optimization, link building, and content strategy for businesses in Bengaluru.',
    keywords: 'SEO Agency Bangalore, Search Engine Optimization Bangalore, Technical SEO Bangalore, Local SEO Bangalore, Organic Growth Bangalore, On Page SEO Bangalore, Off Page SEO Bangalore, Link Building Services Bangalore, SEO Consultant Bangalore, SEO Expert Bangalore, SEO Services Bangalore, Google Ranking Bangalore, Keyword Research Bangalore, SEO Audit Bangalore, Content SEO Bangalore, Buzziwah SEO Bengaluru',
    image: `${BASE_URL}/seo/Buzziwah SEO page.png`,
    type: 'website',
  },
  '/website-development': {
    title: 'Web Development Agency Bengaluru | Fast, SEO-Ready Websites — Buzziwah',
    description: 'Get a high-performance, SEO-optimized website built by Buzziwah. React, custom design, and conversion-focused web development for brands in Bengaluru.',
    keywords: 'web development Bengaluru, website design Bangalore, React development, custom website, SEO website Bengaluru, Buzziwah web',
    image: `${BASE_URL}/website dev.png`,
    type: 'website',
  },
  '/content-solution': {
    title: 'Content Marketing Agency Bengaluru | Reels, Blogs & Copywriting — Buzziwah',
    description: 'From viral reels to SEO blogs and ad copy — Buzziwah creates content that converts. Full-stack content solutions for brands in Bengaluru.',
    keywords: 'content marketing Bengaluru, content creation agency Bangalore, reels production, copywriting, blog writing, Buzziwah content',
    image: `${BASE_URL}/content solutions.png`,
    type: 'website',
  },
  '/video-production': {
    title: 'Video Production Agency Bengaluru | Brand Films & Reels — Buzziwah',
    description: 'Cinema-quality video production for brands and films. Buzziwah produces brand films, promotional videos, reels, and OTT campaigns in Bengaluru.',
    keywords: 'video production Bengaluru, brand film Bangalore, reel production, corporate video, film promotion, Buzziwah video',
    image: `${BASE_URL}/banners/video-production-page-banner.png`,
    type: 'website',
  },
  '/influencer-marketing': {
    title: 'Influencer Marketing Agency Bengaluru | Creator Campaigns — Buzziwah',
    description: 'Connect with the right creators. Buzziwah manages end-to-end influencer marketing campaigns for brands in Bengaluru — from micro to macro influencers.',
    keywords: 'Influencer Marketing Agency Bangalore, Influencer Marketing Bangalore, Creator Campaigns Bangalore, Brand Collaborations Bangalore, Micro Influencer Marketing Bangalore, Macro Influencer Bangalore, Social Media Influencer Agency Bangalore, Instagram Influencer Marketing Bangalore, YouTube Influencer Bangalore, Buzziwah influencer marketing',
    image: `${BASE_URL}/banners/influencer-marketing-page-banner.png`,
    type: 'website',
  },
  '/outdoor-marketing': {
    title: 'Outdoor Marketing Agency Bengaluru | Hoardings & OOH Campaigns — Buzziwah',
    description: 'Make your brand impossible to miss. Buzziwah plans and executes outdoor marketing, hoarding campaigns, and OOH advertising across Bengaluru.',
    keywords: 'outdoor marketing Bengaluru, OOH advertising Bangalore, hoarding advertising, billboard marketing, Buzziwah outdoor',
    image: `${BASE_URL}/outdoor/outdoor1.png`,
    type: 'website',
  },
  '/services': {
    title: 'All Digital Marketing Services | Bengaluru\'s Full-Stack Agency — Buzziwah',
    description: 'Explore all services by Buzziwah — branding, SEO, performance marketing, social media, video production, web development, influencer marketing, and more.',
    keywords: 'Digital Marketing Services Bangalore, Full Service Digital Agency Bangalore, Integrated Marketing Agency Bangalore, Online Marketing Agency Bangalore, Internet Marketing Company Bangalore, Digital Advertising Company Bangalore, Digital Strategy Consulting Bangalore, Marketing Automation Bangalore, Growth Hacking Agency Bangalore, Startup Marketing Services Bangalore, Small Business Marketing Bangalore, Ecommerce Marketing Services Bangalore, B2B Digital Marketing Bangalore, Corporate Digital Marketing Bangalore, Digital Marketing Packages Bangalore, Buzziwah services Bengaluru',
    image: `${BASE_URL}/banners/services-page-banner.png`,
    type: 'website',
  },
  '/case-studies': {
    title: 'Case Studies | Real Results for Real Brands — Buzziwah',
    description: 'See how Buzziwah has helped 100+ brands grow. Explore our case studies in branding, performance marketing, SEO, and social media from Bengaluru.',
    keywords: 'Buzziwah case studies, digital marketing results, brand growth stories, marketing success Bengaluru',
    image: `${BASE_URL}/best works/branding_case.png`,
    type: 'website',
  },
  '/seo-case-studies': {
    title: 'SEO Case Studies | Organic Growth Results — Buzziwah',
    description: 'Real SEO results from Buzziwah. See how we\'ve driven organic traffic, improved rankings, and delivered measurable growth for brands in Bengaluru.',
    keywords: 'SEO case studies, organic growth results, search ranking improvement, Buzziwah SEO results',
    image: `${BASE_URL}/seo/seo_dashboard.png`,
    type: 'website',
  },
  '/contact': {
    title: 'Contact Buzziwah | Start Your Digital Marketing Project in Bengaluru',
    description: 'Ready to grow? Contact Buzziwah — Bengaluru\'s leading digital marketing agency. Let\'s build something bold together.',
    keywords: 'contact Buzziwah, digital marketing agency contact Bengaluru, hire marketing agency Bangalore',
    image: `${BASE_URL}/conactimage.png`,
    type: 'website',
  },
  '/careers': {
    title: 'Careers at Buzziwah | Join the Mad Energy — Bengaluru',
    description: 'Join Buzziwah\'s sharp, fast-moving team in Bengaluru. We\'re hiring creative minds, marketers, and developers who own their work and build with passion.',
    keywords: 'careers Buzziwah, jobs digital marketing Bengaluru, hiring marketing agency Bangalore, Buzziwah jobs',
    image: `${BASE_URL}/careers/joining_kit.png`,
    type: 'website',
  },
  '/blogs': {
    title: 'Blogs & Insights | Buzziwah — Digital Marketing & Branding Intelligence',
    description: 'Explore insights on branding, SEO, performance marketing, and creative production from the experts at Buzziwah, Bangalore\'s top digital agency.',
    keywords: 'Buzziwah blogs, marketing insights, branding strategies, SEO tips, performance marketing guide',
    image: `${BASE_URL}/blog_imgs/why_need_PMM.png`,
    type: 'website',
  },
  '/blog/why-you-need-paid-media-marketing': {
    title: 'Why You Need Paid Media Marketing | Buzziwah Insights',
    description: 'Learn why paid media marketing is essential for business success. Discover search ads, social ads, and tips to maximize ROI and scale visibility.',
    keywords: 'paid media marketing, Google Ads, Meta Ads, social media advertising, PPC, ROI marketing, Buzziwah blogs',
    image: `${BASE_URL}/blog_imgs/why_need_PMM.png`,
    type: 'article',
  },
  '/blog/wordpress-vs-shopify-which-one-is-more-powerful': {
    title: 'WordPress vs Shopify: Which One is More Powerful? | Buzziwah Insights',
    description: 'An in-depth comparison between WordPress and Shopify to determine which platform is more powerful for your e-commerce requirements, flexibility, scalability, and budget.',
    keywords: 'WordPress vs Shopify, WooCommerce vs Shopify, e-commerce platforms, Shopify store setup, WordPress customization, e-commerce scalability, website development Bengaluru, Buzziwah blogs',
    image: `${BASE_URL}/blog_imgs/why_need_PMM.png`,
    type: 'article',
  },
};


// Schema.org structured data per page
const SCHEMAS = {
  '/': [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Buzziwah',
      alternateName: 'Buzziwah Digital',
      url: BASE_URL,
      logo: `${BASE_URL}/Buzziwah_FInal_Logo_White.png`,
      description: 'Bengaluru\'s premier digital marketing agency specializing in branding, performance marketing, SEO, social media, and cinema-to-digital campaigns.',
      foundingLocation: { '@type': 'Place', name: 'Bengaluru, Karnataka, India' },
      areaServed: ['Bengaluru', 'Karnataka', 'India'],
      sameAs: [
        'https://www.instagram.com/buzziwah',
        'https://www.linkedin.com/company/buzziwah',
        'https://www.youtube.com/@buzziwah',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Kannada', 'Hindi'],
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Marketing Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Branding & Identity' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Performance Marketing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Management' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Video Production' } },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Buzziwah',
      url: BASE_URL,
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}/#localbusiness`,
      name: 'Buzziwah',
      image: `${BASE_URL}/Buzziwah_FInal_Logo_White.png`,
      url: BASE_URL,
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 12.9716, longitude: 77.5946 },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    },
  ],
  '/branding': [{
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Branding & Identity Design',
    provider: { '@type': 'Organization', name: 'Buzziwah', url: BASE_URL },
    areaServed: 'Bengaluru',
    description: 'Brand identity, logo design, visual systems, and brand strategy for businesses.',
    url: `${BASE_URL}/branding`,
  }],
  '/performance-marketing': [{
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Performance Marketing',
    provider: { '@type': 'Organization', name: 'Buzziwah', url: BASE_URL },
    areaServed: 'Bengaluru',
    description: 'ROI-driven Meta Ads, Google Ads, and data-driven paid campaigns.',
    url: `${BASE_URL}/performance-marketing`,
  }],
  '/seo': [{
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SEO Services',
    provider: { '@type': 'Organization', name: 'Buzziwah', url: BASE_URL },
    areaServed: 'Bengaluru',
    description: 'Technical SEO, on-page optimization, link building, and content strategy.',
    url: `${BASE_URL}/seo`,
  }],
  '/social-media': [{
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Social Media Management',
    provider: { '@type': 'Organization', name: 'Buzziwah', url: BASE_URL },
    areaServed: 'Bengaluru',
    description: 'Instagram, YouTube, and LinkedIn management, content creation, and growth.',
    url: `${BASE_URL}/social-media`,
  }],
  '/website-development': [{
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web Development',
    provider: { '@type': 'Organization', name: 'Buzziwah', url: BASE_URL },
    areaServed: 'Bengaluru',
    description: 'High-performance, SEO-optimized websites built with React and custom design.',
    url: `${BASE_URL}/website-development`,
  }],
  '/video-production': [{
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Video Production',
    provider: { '@type': 'Organization', name: 'Buzziwah', url: BASE_URL },
    areaServed: 'Bengaluru',
    description: 'Brand films, promotional videos, reels, and OTT campaigns.',
    url: `${BASE_URL}/video-production`,
  }],
  '/contact': [{
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Buzziwah',
    url: `${BASE_URL}/contact`,
    description: 'Get in touch with Buzziwah to start your digital marketing project.',
  }],
  '/careers': [{
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Digital Marketing & Creative Roles',
    hiringOrganization: { '@type': 'Organization', name: 'Buzziwah', sameAs: BASE_URL },
    jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressCountry: 'IN' } },
    description: 'Join Buzziwah\'s sharp, fast-moving team. We\'re hiring creative minds, marketers, and developers.',
    employmentType: 'FULL_TIME',
  }],
  '/case-studies': [{
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Buzziwah Case Studies',
    url: `${BASE_URL}/case-studies`,
    description: 'Real results for real brands — explore Buzziwah\'s portfolio of digital marketing case studies.',
  }],
};

// AEO: FAQ schema for key pages (Answer Engine Optimization)
const FAQ_SCHEMAS = {
  '/': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is Buzziwah?', acceptedAnswer: { '@type': 'Answer', text: 'Buzziwah is a Bengaluru-based digital marketing agency powered by Sripada Studios, specializing in branding, performance marketing, SEO, social media management, web development, and cinema-to-digital campaigns.' } },
      { '@type': 'Question', name: 'Where is Buzziwah located?', acceptedAnswer: { '@type': 'Answer', text: 'Buzziwah is based in Bengaluru, Karnataka, India, serving clients across Koramangala, Indiranagar, Whitefield, Marathahalli, BTM Layout, Hebbal, Yelahanka, and Electronic City.' } },
      { '@type': 'Question', name: 'What services does Buzziwah offer?', acceptedAnswer: { '@type': 'Answer', text: 'Buzziwah offers branding & identity, performance marketing, SEO, social media management, web development, video production, content marketing, influencer marketing, and outdoor marketing.' } },
      { '@type': 'Question', name: 'How many brands has Buzziwah worked with?', acceptedAnswer: { '@type': 'Answer', text: 'Buzziwah has worked with 100+ brands, generated 600,000+ leads, achieved 50M+ views annually, and delivered 300% organic growth for clients.' } },
      { '@type': 'Question', name: 'Is Buzziwah the best digital marketing agency in Bangalore?', acceptedAnswer: { '@type': 'Answer', text: 'Buzziwah is one of Bengaluru top digital marketing agencies, combining cinema-level storytelling with data-driven marketing to deliver measurable results for brands across Bangalore.' } },
    ],
  },
  '/seo': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How long does SEO take to show results?', acceptedAnswer: { '@type': 'Answer', text: 'SEO typically shows measurable results in 3-6 months. Buzziwah data-driven approach accelerates organic growth through technical SEO, content strategy, and link building.' } },
      { '@type': 'Question', name: 'Does Buzziwah offer local SEO in Bengaluru?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Buzziwah specializes in local SEO for Bengaluru businesses, helping them rank in Google Maps and local search results across Koramangala, Indiranagar, Whitefield, and more.' } },
      { '@type': 'Question', name: 'What does Buzziwah SEO service include?', acceptedAnswer: { '@type': 'Answer', text: 'Buzziwah SEO services include technical SEO audit, on-page optimization, keyword research, link building, content strategy, local SEO, and monthly performance reporting.' } },
    ],
  },
  '/performance-marketing': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is performance marketing?', acceptedAnswer: { '@type': 'Answer', text: 'Performance marketing is a results-driven approach where you pay only for measurable outcomes like clicks, leads, or conversions. Buzziwah runs Meta Ads, Google Ads, and PPC campaigns for brands in Bangalore.' } },
      { '@type': 'Question', name: 'Does Buzziwah manage Google Ads in Bangalore?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Buzziwah is a Google Ads agency in Bangalore offering PPC management, search ads, display ads, and shopping campaigns with ROI-focused strategies.' } },
      { '@type': 'Question', name: 'What ROI can I expect from performance marketing?', acceptedAnswer: { '@type': 'Answer', text: 'Buzziwah has delivered 300%+ ROI for clients through data-driven performance marketing campaigns. Results vary by industry and budget.' } },
    ],
  },
  '/social-media': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Which social media platforms does Buzziwah manage?', acceptedAnswer: { '@type': 'Answer', text: 'Buzziwah manages Instagram, Facebook, LinkedIn, YouTube, Twitter, and Pinterest for brands in Bangalore, including content creation, scheduling, and community management.' } },
      { '@type': 'Question', name: 'Does Buzziwah create reels and short videos?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Buzziwah specializes in reels marketing and short video production for Instagram and YouTube, combining cinema-level production with social media strategy.' } },
    ],
  },
  '/branding': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What does Buzziwah branding service include?', acceptedAnswer: { '@type': 'Answer', text: 'Buzziwah branding service includes logo design, brand identity, visual systems, brand guidelines, brand strategy, and brand development for businesses in Bangalore.' } },
      { '@type': 'Question', name: 'How long does branding take?', acceptedAnswer: { '@type': 'Answer', text: 'A complete brand identity project at Buzziwah typically takes 2-4 weeks depending on scope, including discovery, design, revisions, and final delivery.' } },
    ],
  },
  '/website-development': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What kind of websites does Buzziwah build?', acceptedAnswer: { '@type': 'Answer', text: 'Buzziwah builds high-performance, SEO-optimized websites using React, including landing pages, business websites, e-commerce sites, and portfolio websites for brands in Bangalore.' } },
      { '@type': 'Question', name: 'Are Buzziwah websites SEO-friendly?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, all websites built by Buzziwah are SEO-ready with proper meta tags, structured data, fast load times, and mobile-first design.' } },
    ],
  },
  '/video-production': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What video services does Buzziwah offer?', acceptedAnswer: { '@type': 'Answer', text: 'Buzziwah offers brand films, promotional videos, reels, corporate videos, OTT campaigns, and film promotion campaigns in Bangalore.' } },
    ],
  },
  '/influencer-marketing': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Does Buzziwah manage influencer campaigns in Bangalore?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Buzziwah manages end-to-end influencer marketing campaigns in Bangalore, from influencer identification and outreach to content creation and performance tracking.' } },
    ],
  },
};

// eslint-disable-next-line no-unused-vars
const BREADCRUMB_SCHEMAS = {
  '/branding': { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }, { '@type': 'ListItem', position: 2, name: 'Branding', item: BASE_URL + '/branding' }] },
  '/performance-marketing': { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }, { '@type': 'ListItem', position: 2, name: 'Performance Marketing', item: BASE_URL + '/performance-marketing' }] },
  '/social-media': { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }, { '@type': 'ListItem', position: 2, name: 'Social Media Marketing', item: BASE_URL + '/social-media' }] },
  '/seo': { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }, { '@type': 'ListItem', position: 2, name: 'SEO Services', item: BASE_URL + '/seo' }] },
  '/website-development': { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }, { '@type': 'ListItem', position: 2, name: 'Web Development', item: BASE_URL + '/website-development' }] },
  '/video-production': { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }, { '@type': 'ListItem', position: 2, name: 'Video Production', item: BASE_URL + '/video-production' }] },
  '/content-solution': { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }, { '@type': 'ListItem', position: 2, name: 'Content Solutions', item: BASE_URL + '/content-solution' }] },
  '/influencer-marketing': { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }, { '@type': 'ListItem', position: 2, name: 'Influencer Marketing', item: BASE_URL + '/influencer-marketing' }] },
  '/outdoor-marketing': { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }, { '@type': 'ListItem', position: 2, name: 'Outdoor Marketing', item: BASE_URL + '/outdoor-marketing' }] },
  '/services': { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }, { '@type': 'ListItem', position: 2, name: 'Services', item: BASE_URL + '/services' }] },
  '/case-studies': { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }, { '@type': 'ListItem', position: 2, name: 'Case Studies', item: BASE_URL + '/case-studies' }] },
  '/about': { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }, { '@type': 'ListItem', position: 2, name: 'About', item: BASE_URL + '/about' }] },
  '/contact': { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }, { '@type': 'ListItem', position: 2, name: 'Contact', item: BASE_URL + '/contact' }] },
  '/careers': { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }, { '@type': 'ListItem', position: 2, name: 'Careers', item: BASE_URL + '/careers' }] },
  '/blogs': { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }, { '@type': 'ListItem', position: 2, name: 'Blogs', item: BASE_URL + '/blogs' }] },
  '/blog/why-you-need-paid-media-marketing': { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }, { '@type': 'ListItem', position: 2, name: 'Blogs', item: BASE_URL + '/blogs' }, { '@type': 'ListItem', position: 3, name: 'Why You Need Paid Media Marketing', item: BASE_URL + '/blog/why-you-need-paid-media-marketing' }] },
  '/blog/wordpress-vs-shopify-which-one-is-more-powerful': { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL }, { '@type': 'ListItem', position: 2, name: 'Blogs', item: BASE_URL + '/blogs' }, { '@type': 'ListItem', position: 3, name: 'WordPress vs Shopify: Which One is More Powerful?', item: BASE_URL + '/blog/wordpress-vs-shopify-which-one-is-more-powerful' }] },
};


// eslint-disable-next-line no-unused-vars
const AGGREGATE_RATING = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Buzziwah',
  url: BASE_URL,
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '87', bestRating: '5', worstRating: '1' },
};
function setMeta(name, content, isProperty = false) {
  const attr = isProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel, href, extra = {}) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
  Object.entries(extra).forEach(([k, v]) => el.setAttribute(k, v));
}

function injectSchema(schemas) {
  document.querySelectorAll('script[data-seo-schema]').forEach(el => el.remove());
  schemas.forEach(schema => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-schema', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}

export function applySEO(path) {
  const normalizedPath = path.replace(/\/$/, '') || '/';
  const seo = PAGE_SEO[normalizedPath] || PAGE_SEO['/'];
  const canonical = `${BASE_URL}${normalizedPath === '/' ? '' : normalizedPath}`;
  const image = seo.image || DEFAULT_IMAGE;

  // Title
  document.title = seo.title;

  // Basic meta
  setMeta('description', seo.description);
  setMeta('keywords', seo.keywords);
  setMeta('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
  setMeta('author', SITE_NAME);

  // Canonical
  setLink('canonical', canonical);

  // Open Graph (for social sharing & GEO — Generative Engine Optimization)
  setMeta('og:type', seo.type || 'website', true);
  setMeta('og:title', seo.title, true);
  setMeta('og:description', seo.description, true);
  setMeta('og:url', canonical, true);
  setMeta('og:site_name', SITE_NAME, true);
  setMeta('og:image', image, true);
  setMeta('og:image:width', '1200', true);
  setMeta('og:image:height', '630', true);
  setMeta('og:image:alt', seo.title, true);
  setMeta('og:locale', 'en_IN', true);

  // Twitter Card
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', seo.title);
  setMeta('twitter:description', seo.description);
  setMeta('twitter:image', image);
  setMeta('twitter:site', '@buzziwah');
  setMeta('twitter:creator', '@buzziwah');

  // AIO / GEO signals — helps AI engines (ChatGPT, Perplexity, Gemini) understand the page
  setMeta('geo.region', 'IN-KA');
  setMeta('geo.placename', 'Bengaluru');
  setMeta('geo.position', '12.9716;77.5946');
  setMeta('ICBM', '12.9716, 77.5946');

  // Structured data (Schema + FAQ for AEO)
  const schemas = [...(SCHEMAS[normalizedPath] || SCHEMAS['/']), ...(FAQ_SCHEMAS[normalizedPath] ? [FAQ_SCHEMAS[normalizedPath]] : [])];
  injectSchema(schemas);
}
