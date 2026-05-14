import React from 'react';
import './Home.css';

const MobileServicesGrid = () => {
  const links = {
    branding: '/branding',
    content: '/content-solution',
    photography: '/video-production',
    social: '/social-media',
    video: '/video-production',
    web: '/website-development',
    seo: '/seo',
    performance: '/performance-marketing',
  };

  return (
    <div className="mobile-only">
      <div className="ssd-wrap ssd-grid-wrap">
        <div className="ssd-grid">
          <div className="ssd-card c2" onClick={() => window.location.href = links.photography}>
            <div className="ssd-card__img-wrap">
              <img className="ssd-card__img" src={encodeURI('/grid/photograpohy.png')} alt="Photography" />
            </div>
            <div className="ssd-card__shimmer"></div>
          </div>

          <div className="ssd-card c3" onClick={() => window.location.href = links.content}>
            <div className="ssd-card__img-wrap">
              <img className="ssd-card__img" src={encodeURI('/grid/content solutions.png')} alt="Content Solutions" />
            </div>
            <div className="ssd-card__shimmer"></div>
          </div>

          <div className="ssd-card c4" onClick={() => window.location.href = links.social}>
            <div className="ssd-card__img-wrap">
              <img className="ssd-card__img" src={encodeURI('/grid/social media managemnt .png')} alt="Social Media Management" />
            </div>
            <div className="ssd-card__shimmer"></div>
          </div>

          <div className="ssd-card c5" onClick={() => window.location.href = links.video}>
            <div className="ssd-card__img-wrap">
              <img className="ssd-card__img" src={encodeURI('/grid/video.png')} alt="Video Production" />
            </div>
            <div className="ssd-card__shimmer"></div>
          </div>

          <div className="ssd-card c7" onClick={() => window.location.href = links.seo}>
            <div className="ssd-card__img-wrap">
              <img className="ssd-card__img" src={encodeURI('/grid/seo.png')} alt="SEO" />
            </div>
            <div className="ssd-card__shimmer"></div>
          </div>

          <div className="ssd-card c8" onClick={() => window.location.href = links.performance}>
            <div className="ssd-card__img-wrap">
              <img className="ssd-card__img" src={encodeURI('/grid/performance marketing.png')} alt="Performance Marketing" />
            </div>
            <div className="ssd-card__shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileServicesGrid;
