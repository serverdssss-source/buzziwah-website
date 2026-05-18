import React from 'react';
import './Home.css';

const ServicesGrid = () => {
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
    <div className="ssd-wrap ssd-grid-wrap">
      <div className="ssd-grid">
        <div className="ssd-card c1" onClick={() => window.location.href = links.branding}>
          <div className="ssd-card__img-wrap">
            <picture>
              <source srcSet="/grid/branding.webp" type="image/webp" />
              <img className="ssd-card__img" src={encodeURI('/grid/branding.png')} alt="Branding Services - Logo Design and Brand Identity" width="800" height="800" loading="lazy" />
            </picture>
          </div>
          <div className="ssd-card__shimmer"></div>
        </div>

        <div className="ssd-card c2" onClick={() => window.location.href = links.photography}>
          <div className="ssd-card__img-wrap">
            <picture>
              <source srcSet="/grid/photograpohy.webp" type="image/webp" />
              <img className="ssd-card__img" src={encodeURI('/grid/photograpohy.png')} alt="Photography and Videography Services" width="800" height="800" loading="lazy" />
            </picture>
          </div>
          <div className="ssd-card__shimmer"></div>
        </div>

        <div className="ssd-card c3" onClick={() => window.location.href = links.content}>
          <div className="ssd-card__img-wrap">
            <picture>
              <source srcSet="/grid/content solutions.webp" type="image/webp" />
              <img className="ssd-card__img" src={encodeURI('/grid/content solutions.png')} alt="Content Solutions - Content Marketing and Strategy" width="800" height="800" loading="lazy" />
            </picture>
          </div>
          <div className="ssd-card__shimmer"></div>
        </div>

        <div className="ssd-card c4" onClick={() => window.location.href = links.social}>
          <div className="ssd-card__img-wrap">
            <picture>
              <source srcSet="/grid/social media managemnt .webp" type="image/webp" />
              <img className="ssd-card__img" src={encodeURI('/grid/social media managemnt .png')} alt="Social Media Management Services" width="800" height="800" loading="lazy" />
            </picture>
          </div>
          <div className="ssd-card__shimmer"></div>
        </div>

        <div className="ssd-card c5" onClick={() => window.location.href = links.video}>
          <div className="ssd-card__img-wrap">
            <picture>
              <source srcSet="/grid/video.webp" type="image/webp" />
              <img className="ssd-card__img" src={encodeURI('/grid/video.png')} alt="Video Production Services" width="800" height="800" loading="lazy" />
            </picture>
          </div>
          <div className="ssd-card__shimmer"></div>
        </div>

        <div className="ssd-card c6" onClick={() => window.location.href = links.web}>
          <div className="ssd-card__img-wrap">
            <picture>
              <source srcSet="/grid/web devlopmnnt.webp" type="image/webp" />
              <img className="ssd-card__img" src={encodeURI('/grid/web devlopmnnt.png')} alt="Website Development Services" width="800" height="800" loading="lazy" />
            </picture>
          </div>
          <div className="ssd-card__shimmer"></div>
        </div>

        <div className="ssd-card c7" onClick={() => window.location.href = links.seo}>
          <div className="ssd-card__img-wrap">
            <picture>
              <source srcSet="/grid/seo.webp" type="image/webp" />
              <img className="ssd-card__img" src={encodeURI('/grid/seo.png')} alt="SEO Services - Search Engine Optimization" width="800" height="800" loading="lazy" />
            </picture>
          </div>
          <div className="ssd-card__shimmer"></div>
        </div>

        <div className="ssd-card c8" onClick={() => window.location.href = links.performance}>
          <div className="ssd-card__img-wrap">
            <picture>
              <source srcSet="/grid/performance marketing.webp" type="image/webp" />
              <img className="ssd-card__img" src={encodeURI('/grid/performance marketing.png')} alt="Performance Marketing Services" width="800" height="800" loading="lazy" />
            </picture>
          </div>
          <div className="ssd-card__shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
