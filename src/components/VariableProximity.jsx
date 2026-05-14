import { forwardRef, useRef, useEffect } from 'react';
import './VariableProximity.css';

function useAnimationFrame(callback) {
  useEffect(() => {
    let frameId;
    const loop = () => {
      callback();
      frameId = requestAnimationFrame(loop);
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

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const letterRects = useRef([]);

  useAnimationFrame(() => {
    if (!containerRef.current) return;

    const now = performance.now() / 1000;
    
    // For sequential mode: pick 2-3 letters at a time
    if (mode === 'sequential') {
      const cycleDuration = 1.2 / autoSpeed; // How long each group stays active
      const totalLetters = letterRefs.current.filter(l => l).length;
      
      if (now - lastChangeTime.current > cycleDuration) {
        activeLetters.current.clear();
        const numActive = Math.floor(Math.random() * 2) + 2; // 2 or 3 letters
        const availableIndices = Array.from({ length: totalLetters }, (_, i) => i);
        
        for (let i = 0; i < numActive && availableIndices.length > 0; i++) {
          const randomIdx = Math.floor(Math.random() * availableIndices.length);
          activeLetters.current.add(availableIndices[randomIdx]);
          availableIndices.splice(randomIdx, 1);
        }
        
        lastChangeTime.current = now;
      }
    }
    
    // First pass: update base proximity and cache rects
    letterRefs.current.forEach((letter, index) => {
      if (!letter) return;
      letterRects.current[index] = letter.getBoundingClientRect();
      
      let proximity = 0;
      if (mode === 'sequential') {
        // Only active letters get proximity
        if (activeLetters.current.has(index)) {
          const timeSinceChange = now - lastChangeTime.current;
          const cycleDuration = 1.2 / autoSpeed;
          // Smooth in and out
          const progress = timeSinceChange / cycleDuration;
          if (progress < 0.3) {
            proximity = (progress / 0.3) * autoIntensity; // Fade in
          } else if (progress > 0.7) {
            proximity = ((1 - progress) / 0.3) * autoIntensity; // Fade out
          } else {
            proximity = autoIntensity; // Full intensity
          }
        }
      } else if (mode === 'auto') {
        proximity = ((Math.sin(now * autoSpeed - index * autoStagger) + 1) / 2) * autoIntensity;
      } else if (mode === 'random') {
        const randomPhase = Math.sin(index * 133.7) * 1000;
        const oscillation = (Math.sin(now * autoSpeed + randomPhase) + 1) / 2;
        proximity = Math.pow(oscillation, 14) * autoIntensity;
      } else {
        const letterRect = letterRects.current[index];
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
      
      // Store current proximity on the element for the second pass
      letter._baseProximity = Math.max(0, Math.min(1, proximity));
    });

    // Second pass: Collision & Vertical Jump
    letterRefs.current.forEach((letter, index) => {
      if (!letter) return;
      
      let finalProximity = letter._baseProximity;
      let translateY = 0;

      // "Jump" effect when weight is high
      if (finalProximity > 0.8) {
        translateY = -12 * Math.pow(finalProximity, 2);
      }

      // "Moment" reaction for letters above
      // Check for letters physically above this one
      const currentRect = letterRects.current[index];
      letterRefs.current.forEach((otherLetter, otherIndex) => {
        if (!otherLetter || index === otherIndex) return;
        const otherRect = letterRects.current[otherIndex];
        
        // If otherLetter is above current letter and horizontally aligned
        const isAbove = otherRect.bottom < currentRect.top + 5;
        const isAligned = Math.abs((otherRect.left + otherRect.width/2) - (currentRect.left + currentRect.width/2)) < 15;
        
        if (isAbove && isAligned && translateY < -5) {
          // Trigger a reaction "moment"
          finalProximity = Math.max(finalProximity, 0.4); 
          translateY -= 4; // Extra lift from below
        }
      });

      finalProximity = Math.max(0, Math.min(1, finalProximity));
      const settings = interpolateSettings(
        fromFontVariationSettings,
        toFontVariationSettings,
        finalProximity
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
      ref={ref}
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
