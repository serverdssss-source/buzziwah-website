import { forwardRef, useRef, useEffect } from 'react';
import './VariableProximity.css';

// Throttled animation frame hook — runs at ~30fps instead of 60fps
function useAnimationFrame(callback) {
  useEffect(() => {
    let frameId;
    let lastTime = 0;
    const TARGET_FPS = 30;
    const FRAME_INTERVAL = 1000 / TARGET_FPS;

    const loop = (timestamp) => {
      frameId = requestAnimationFrame(loop);
      const delta = timestamp - lastTime;
      if (delta < FRAME_INTERVAL) return; // skip frame
      lastTime = timestamp - (delta % FRAME_INTERVAL);
      callback();
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [callback]);
}

const VariableProximity = forwardRef((props, ref) => {
  const {
    label,
    fromFontVariationSettings,
    toFontVariationSettings,
    containerRef,
    radius = 100,
    falloff = 'linear',
    mode = 'mouse',
    autoSpeed = 1.8,
    autoIntensity = 1,
    autoStagger = 0.22,
    wordStyles = {},
    className = '',
    onClick,
    ...rest
  } = props;

  const letterRefs = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const activeLetters = useRef(new Set());
  const lastChangeTime = useRef(0);
  const isVisible = useRef(false);
  const wrapperRef = useRef(null);

  // Only track mouse — no need to do anything expensive here
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Pause the rAF loop when component is off-screen
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { isVisible.current = entry.isIntersecting; },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const letterRects = useRef([]);
  // Only update rects every 200ms — not every frame
  const lastRectUpdate = useRef(0);

  useAnimationFrame(() => {
    if (!isVisible.current) return; // skip if off-screen
    if (!containerRef.current) return;

    const now = performance.now() / 1000;

    // Refresh bounding rects only every 200ms
    const shouldUpdateRects = (performance.now() - lastRectUpdate.current) > 200;
    if (shouldUpdateRects) {
      letterRefs.current.forEach((letter, index) => {
        if (!letter) return;
        letterRects.current[index] = letter.getBoundingClientRect();
      });
      lastRectUpdate.current = performance.now();
    }

    // For sequential mode: pick 2-3 letters at a time
    if (mode === 'sequential') {
      const cycleDuration = 1.2 / autoSpeed;
      const totalLetters = letterRefs.current.filter(l => l).length;

      if (now - lastChangeTime.current > cycleDuration) {
        activeLetters.current.clear();
        const numActive = Math.floor(Math.random() * 2) + 2;
        const availableIndices = Array.from({ length: totalLetters }, (_, i) => i);

        for (let i = 0; i < numActive && availableIndices.length > 0; i++) {
          const randomIdx = Math.floor(Math.random() * availableIndices.length);
          activeLetters.current.add(availableIndices[randomIdx]);
          availableIndices.splice(randomIdx, 1);
        }
        lastChangeTime.current = now;
      }
    }

    letterRefs.current.forEach((letter, index) => {
      if (!letter) return;

      let proximity = 0;

      if (mode === 'sequential') {
        if (activeLetters.current.has(index)) {
          const timeSinceChange = now - lastChangeTime.current;
          const cycleDuration = 1.2 / autoSpeed;
          const progress = timeSinceChange / cycleDuration;
          if (progress < 0.3) {
            proximity = (progress / 0.3) * autoIntensity;
          } else if (progress > 0.7) {
            proximity = ((1 - progress) / 0.3) * autoIntensity;
          } else {
            proximity = autoIntensity;
          }
        }
      } else if (mode === 'auto') {
        proximity = ((Math.sin(now * autoSpeed - index * autoStagger) + 1) / 2) * autoIntensity;
      } else if (mode === 'random') {
        const randomPhase = Math.sin(index * 133.7) * 1000;
        const oscillation = (Math.sin(now * autoSpeed + randomPhase) + 1) / 2;
        proximity = Math.pow(oscillation, 14) * autoIntensity;
      } else {
        // mouse mode — use cached rects
        const letterRect = letterRects.current[index];
        if (!letterRect) return;
        const letterX = letterRect.left + letterRect.width / 2;
        const letterY = letterRect.top + letterRect.height / 2;

        const distance = Math.sqrt(
          Math.pow(mousePos.current.x - letterX, 2) +
          Math.pow(mousePos.current.y - letterY, 2)
        );

        if (falloff === 'linear') {
          proximity = Math.max(0, 1 - distance / radius);
        } else if (falloff === 'exponential') {
          proximity = Math.exp(-distance / radius);
        }
      }

      proximity = Math.max(0, Math.min(1, proximity));

      // Jump effect when weight is high (removed O(n²) collision — wasn't visible anyway)
      let translateY = 0;
      if (proximity > 0.8) {
        translateY = -12 * Math.pow(proximity, 2);
      }

      const settings = interpolateSettings(
        fromFontVariationSettings,
        toFontVariationSettings,
        proximity
      );

      letter.style.fontVariationSettings = settings;
      letter.style.transform = `translateY(${translateY}px)`;
      letter.style.transition = 'transform 0.1s cubic-bezier(0.2, 0.8, 0.2, 1)';
    });
  });

  const lines = label.split('\n');
  let letterIndex = 0;
  let globalWordIndex = 0;

  return (
    <span
      ref={(el) => {
        wrapperRef.current = el;
        if (typeof ref === 'function') ref(el);
        else if (ref) ref.current = el;
      }}
      className={`variable-proximity ${className}`}
      onClick={onClick}
      style={{ display: 'block', textAlign: 'left' }}
      {...rest}
    >
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} style={{ display: 'block' }} className="line">
          {line.split(' ').map((word, wordIdx, wordArr) => {
            const currentWordGlobalIndex = globalWordIndex++;
            const currentWordStyle = wordStyles[currentWordGlobalIndex] || {};

            return (
              <span
                key={wordIdx}
                style={{
                  display: 'inline-block',
                  whiteSpace: 'nowrap',
                  ...currentWordStyle
                }}
                className="word"
              >
                {word.split('').map((char, charIdx) => {
                  const index = letterIndex++;
                  return (
                    <span
                      key={charIdx}
                      ref={(el) => (letterRefs.current[index] = el)}
                      style={{ display: 'inline-block' }}
                      className="char"
                    >
                      {char}
                    </span>
                  );
                })}
                {wordIdx < wordArr.length - 1 && (
                  <span style={{ display: 'inline-block' }}>&nbsp;</span>
                )}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
});

function interpolateSettings(from, to, proximity) {
  const fromParsed = parseSettings(from);
  const toParsed = parseSettings(to);
  const result = [];

  for (const key in fromParsed) {
    const fromVal = fromParsed[key];
    const toVal = toParsed[key] ?? fromVal;
    const currentVal = fromVal + (toVal - fromVal) * proximity;
    result.push(`'${key}' ${currentVal}`);
  }

  return result.join(', ');
}

function parseSettings(settings) {
  const result = {};
  if (!settings) return result;
  const parts = settings.split(',');
  parts.forEach((part) => {
    const match = part.match(/'(\w+)'\s+(-?\d+\.?\d*)/);
    if (match) {
      result[match[1]] = parseFloat(match[2]);
    }
  });
  return result;
}

export default VariableProximity;
