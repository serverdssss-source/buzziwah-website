import Navbar from './Navbar';
import Home from './home';
import About from './about';
import Contact from './contact';
import Branding from './branding';
import SocialMedia from './social-media';
import ContentSolution from './content-solution';
import InfluencerPage from './influencer';
import VideoProductionPage from './video-production';
import WebsiteDevelopment from './website-development';
import PerformanceMarketing from './performance-marketing';
import SEO from './seo';
import OutdoorMarketingPage from './outdoor-marketing';
import Services from './services';
import CaseStudyPage from './case-studies';
import PageEnding from './components/PageEnding';
import Careers from './carrer/carrer';
import './App.css'

function App() {
  const path = window.location.pathname.replace(/\/$/, '');
  const isCaseStudy = path.startsWith('/case-study/');

  return (
    <>
      <>
        <Navbar />
        {(() => {
          if (isCaseStudy) {
            const caseId = path.substring('/case-study/'.length);
            return <CaseStudyPage id={caseId} />;
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
            case '/careers':
            case '/carrer':
              return <Careers />;
            default:
              return <Home />;
          }
        })()}
        {path !== '/about' && !isCaseStudy && <PageEnding showContactForm={path !== '/contact'} />}
      </>
    </>
  )
}

export default App
