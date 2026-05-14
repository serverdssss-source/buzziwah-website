import Section1 from './Section1';
import BentoSection from './BentoSection';
import Section2 from './Section2';
import WhatIsAWebsiteToday from './WhatIsAWebsiteToday';
import Section3 from './Section3';
import Section4 from './Section4';
import DeployedWebsitesGrid from './DeployedWebsitesGrid';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Section9 from './Section9';
import Section10 from './Section10';

const WebDevPage = () => (
  <div className="webdev-page-font">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800;900&display=swap');
      .webdev-page-font,
      .webdev-page-font * {
        font-family: 'Nunito Sans', sans-serif !important;
      }
    `}</style>
    <Section1 />
    <BentoSection />
    <Section2 />
    <WhatIsAWebsiteToday />
    <Section3 />
    <Section4 />
    <DeployedWebsitesGrid />
    <Section5 />
    <Section6 />
    <Section7 />
    <Section8 />
    <Section9 />
    <Section10 />
  </div>
);

export default WebDevPage;
