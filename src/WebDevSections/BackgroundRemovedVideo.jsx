import { useEffect, useRef } from 'react';

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const BackgroundRemovedVideo = ({
  src,
  maxWidth,
  style = {},
  lowThreshold = 16,
  highThreshold = 242,
}) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const frameRef = useRef(0);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return undefined;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return undefined;

    let isMounted = true;
    let lastFrameTime = 0;
    const TARGET_FPS = 15; // 15fps is plenty for background removal effect
    const FRAME_INTERVAL = 1000 / TARGET_FPS;

    // Only process when visible in viewport
    const observer = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
      { rootMargin: '100px' }
    );
    observer.observe(canvas);

    const resizeCanvas = () => {
      const width = video.videoWidth || 1280;
      const height = video.videoHeight || 720;
      canvas.width = width;
      canvas.height = height;
    };

    const processFrame = (timestamp) => {
      frameRef.current = requestAnimationFrame(processFrame);

      if (!isMounted || video.paused || video.ended) return;
      if (!isVisibleRef.current) return; // skip when off-screen

      // Throttle to 15fps
      const delta = timestamp - lastFrameTime;
      if (delta < FRAME_INTERVAL) return;
      lastFrameTime = timestamp - (delta % FRAME_INTERVAL);

      if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
        resizeCanvas();
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const { data } = frame;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const spread = max - min;
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

        const nearWhite = luminance >= highThreshold && spread < 42;
        const nearBlack = luminance <= lowThreshold && spread < 34;

        if (nearWhite || nearBlack) {
          let alpha = 255;
          if (nearWhite) {
            alpha = clamp(((highThreshold + 12 - luminance) / 12) * 255, 0, 255);
          } else if (nearBlack) {
            alpha = clamp(((luminance - Math.max(lowThreshold - 10, 0)) / 10) * 255, 0, 255);
          }
          data[i + 3] = alpha;
        }
      }

      ctx.putImageData(frame, 0, 0);
    };

    const start = () => {
      resizeCanvas();
      frameRef.current = requestAnimationFrame(processFrame);
    };

    video.addEventListener('loadedmetadata', resizeCanvas);
    video.addEventListener('play', start);

    if (video.readyState >= 2) {
      resizeCanvas();
    }

    video.play().catch(() => {});
    frameRef.current = requestAnimationFrame(processFrame);

    return () => {
      isMounted = false;
      observer.disconnect();
      video.removeEventListener('loadedmetadata', resizeCanvas);
      video.removeEventListener('play', start);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [src, lowThreshold, highThreshold]);

  return (
    <div
      style={{
        width: '100%',
        maxWidth,
        display: 'block',
        position: 'relative',
        background: 'transparent',
        ...style,
      }}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        style={{ display: 'none' }}
      />
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          background: 'transparent',
        }}
      />
    </div>
  );
};

export default BackgroundRemovedVideo;
