// Maps an original blog image ("/blog_imgs/Meta.png") to the web-sized copy
// made by scripts/optimize-blog-images.js ("/blog_imgs/optimized/Meta.webp").
// Use ext 'jpg' for social previews (og:image), where WebP isn't always supported.
export function optimizedBlogImage(src, ext = 'webp') {
  const match = /^\/blog_imgs\/([^/]+)\.(png|jpe?g|webp)$/i.exec(src || '');
  return match ? `/blog_imgs/optimized/${match[1]}.${ext}` : src;
}

// onError handler: fall back to the original image if the optimized copy is missing
export const fallbackToOriginal = (original) => (e) => {
  e.currentTarget.onerror = null;
  e.currentTarget.src = original;
};
