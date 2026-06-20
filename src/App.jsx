import { lazy, Suspense, useEffect } from 'react';
import Navbar from './Navbar';
import './App.css';
import { applySEO } from './seo/useSEO';

const Home = lazy(() => import('./home'));
const About = lazy(() => import('./about'));
const Contact = lazy(() => import('./contact'));
const Branding = lazy(() => import('./branding'));
const SocialMedia = lazy(() => import('./social-media'));
const ContentSolution = lazy(() => import('./content-solution'));
const InfluencerPage = lazy(() => import('./influencer'));
const VideoProductionPage = lazy(() => import('./video-production'));
const WebsiteDevelopment = lazy(() => import('./website-development'));
const PerformanceMarketing = lazy(() => import('./performance-marketing'));
const SEO = lazy(() => import('./seo'));
const OutdoorMarketingPage = lazy(() => import('./outdoor-marketing'));
const Services = lazy(() => import('./services'));
const CaseStudyPage = lazy(() => import('./case-studies'));
const CaseStudiesList = lazy(() => import('./case-studies/CaseStudiesList'));
const SeoCaseStudies = lazy(() => import('./case-studies/SeoCaseStudies'));
const PageEnding = lazy(() => import('./components/PageEnding'));
const Careers = lazy(() => import('./carrer/carrer'));
const BlogsList = lazy(() => import('./blogs/BlogsList'));
const BlogPage = lazy(() => import('./blogs'));


function App() {
  const path = window.location.pathname.replace(/\/$/, '');
  const isCaseStudy = path.startsWith('/case-study/');
  const isBlog = path.startsWith('/blog/');


  useEffect(() => {
    applySEO(path || '/');
  }, [path]);

  return (
    <>
      <>
        <Navbar />
        <Suspense fallback={<div style={{ minHeight: '100vh', background: '#050508' }} />}>
          {(() => {
            if (isCaseStudy) {
              const caseId = path.substring('/case-study/'.length);
              return <CaseStudyPage id={caseId} />;
            }

            if (isBlog) {
              const blogId = path.substring('/blog/'.length);
              return <BlogPage id={blogId} />;
            }


            switch (path) {
              case '/about':
                return <About />;
              case '/contact':
                return <Contact />;
              case '/branding':
                return <Branding />;
              case '/social-media':
                return <SocialMedia />;
              case '/content-solution':
                return <ContentSolution />;
              case '/influencer-marketing':
                return <InfluencerPage />;
              case '/video-production':
                return <VideoProductionPage />;
              case '/website-development':
                return <WebsiteDevelopment />;
              case '/performance-marketing':
                return <PerformanceMarketing />;
              case '/seo':
                return <SEO />;
              case '/outdoor-marketing':
                return <OutdoorMarketingPage />;
              case '/services':
                return <Services />;
              case '/case-studies':
                return <CaseStudiesList />;
              case '/seo-case-studies':
                return <SeoCaseStudies />;
              case '/careers':
              case '/carrer':
                return <Careers />;
              case '/blogs':
                return <BlogsList />;
              default:
                return <Home />;
            }
          })()}
          {path !== '/about' && !isCaseStudy && <PageEnding showContactForm={path !== '/contact' && path !== '/case-studies' && path !== '/seo-case-studies' && !isBlog} isCareers={path === '/careers' || path === '/carrer'} />}

        </Suspense>
      </>
    </>
  )
}

export default App;
