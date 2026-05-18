import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * LazyVideo component that loads iframe only when visible
 * Improves initial page load performance
 */
const LazyVideo = ({ 
  src, 
  title, 
  width,
  height,
  allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  style,
  className,
  placeholder,
  ...rest 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: '200px', // Load video 200px before it enters viewport
        threshold: 0.01 
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={className}
      style={{
        ...style,
        aspectRatio: width && height ? `${width}/${height}` : '16/9',
        background: placeholder || '#000',
        position: 'relative',
      }}
    >
      {isVisible ? (
        <iframe
          src={src}
          title={title}
          width={width}
          height={height}
          allow={allow}
          loading="lazy"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          {...rest}
        />
      ) : (
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            color: '#fff',
            fontSize: '14px',
          }}
          aria-label="Video loading placeholder"
        >
          {/* Optional loading indicator */}
        </div>
      )}
    </div>
  );
};

LazyVideo.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  allow: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default LazyVideo;
