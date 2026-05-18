import PropTypes from 'prop-types';

/**
 * OptimizedImage component that serves WebP with fallback
 * Automatically adds width, height, and loading attributes for better performance
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  loading = 'lazy',
  fetchpriority,
  style,
  onClick,
  role,
  ...rest 
}) => {
  // Generate WebP source from original image path
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  const isPngOrJpg = /\.(png|jpg|jpeg)$/i.test(src);
  
  // If image is already WebP or SVG, just use regular img tag
  if (!isPngOrJpg) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        fetchpriority={fetchpriority}
        style={style}
        onClick={onClick}
        role={role}
        {...rest}
      />
    );
  }

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        fetchpriority={fetchpriority}
        style={style}
        onClick={onClick}
        role={role}
        {...rest}
      />
    </picture>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  fetchpriority: PropTypes.oneOf(['high', 'low', 'auto']),
  style: PropTypes.object,
  onClick: PropTypes.func,
  role: PropTypes.string,
};

export default OptimizedImage;
