import React, { useEffect, useRef, useState } from "react";
import "./GlobalWaterEffect.css";

export default function GlobalWaterEffect() {
  const [ripples, setRipples] = useState([]);
  const [trail, setTrail] = useState([]);
  const lastSpawnRef = useRef({ x: 0, y: 0 });
  const trailIdCounter = useRef(0);

  // 1. Global mouse clicks trigger expanding neon ripples (only on user click!)
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const rippleId = Math.random().toString(36).substring(2, 9);
      const size = 120 + Math.random() * 60;

      setRipples((prev) => [
        ...prev,
        { id: rippleId, x, y, size }
      ]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== rippleId));
      }, 1200);
    };

    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, []);

  // 2. Global cursor movement trail tail (responsive glowing particles!)
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      const dx = x - lastSpawnRef.current.x;
      const dy = y - lastSpawnRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Spawn cursor trail particle if moved past distance threshold
      if (distance > 18) {
        lastSpawnRef.current = { x, y };
        trailIdCounter.current += 1;
        const id = trailIdCounter.current;
        const size = 12 + Math.random() * 14; // Premium larger particle size
        const color = Math.random() > 0.5 ? "#adfa3b" : "#8b5cf6"; // Alternate purple and lime

        setTrail((prev) => [
          ...prev,
          { id, x, y, size, color }
        ]);

        setTimeout(() => {
          setTrail((prev) => prev.filter((pt) => pt.id !== id));
        }, 650); // Lifespan of trail particle
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="global-water-effect-overlay">
      {/* Ripple expanding rings on user clicks only */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="global-water-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: `${ripple.size}px`,
            height: `${ripple.size}px`
          }}
        />
      ))}

      {/* Cursor movement trail tail */}
      {trail.map((pt) => (
        <div
          key={pt.id}
          className="global-cursor-trail-particle"
          style={{
            left: `${pt.x}px`,
            top: `${pt.y}px`,
            width: `${pt.size}px`,
            height: `${pt.size}px`,
            backgroundColor: pt.color,
            boxShadow: `0 0 12px ${pt.color}, 0 0 24px ${pt.color}`
          }}
        />
      ))}
    </div>
  );
}
