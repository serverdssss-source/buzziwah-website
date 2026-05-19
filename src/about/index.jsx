import React from 'react';
import VariableProximity from '../components/VariableProximity';
import '../home/Home.css';

const WaterDropletEffect = () => {
  const [drops, setDrops] = React.useState([]);
  const [ripples, setRipples] = React.useState([]);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    // Auto spawn falling water drops
    const dropInterval = setInterval(() => {
      const id = Math.random().toString(36).substring(2, 9);
      const left = Math.random() * 100;
      const scale = 0.3 + Math.random() * 0.7; // size variance
      const speed = 1.8 + Math.random() * 2.2; // 1.8s to 4s speed

      setDrops((prev) => [...prev, { id, left, scale, speed }]);

      // When the drop reaches the bottom, spawn a beautiful ripple!
      setTimeout(() => {
        // Remove the drop
        setDrops((prev) => prev.filter((d) => d.id !== id));

        // Create a concentric ripple at the bottom where it fell
        const rippleId = Math.random().toString(36).substring(2, 9);
        const size = 30 + Math.random() * 50; // ripple size variance
        setRipples((prev) => [
          ...prev,
          { id: rippleId, x: left, y: 90 + Math.random() * 8, size }
        ]);

        // Remove the ripple after its animation is complete
        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== rippleId));
        }, 1200);

      }, speed * 1000);
    }, 400); // spawn a droplet every 400ms

    return () => clearInterval(dropInterval);
  }, []);

  return (
    <div ref={containerRef} className="water-droplet-container">
      {/* Falling droplet visual tracks */}
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="water-drop"
          style={{
            left: `${drop.left}%`,
            animationDuration: `${drop.speed}s`,
            transform: `scale(${drop.scale})`
          }}
        />
      ))}

      {/* Dynamic concentric expanding ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="water-ripple"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
            width: `${ripple.size}px`,
            height: `${ripple.size}px`
          }}
        />
      ))}
    </div>
  );
};

const ThreeDInteractiveCard = ({ title, desc, gradient, accentColor, hoverBorder, icon }) => {
  const cardRef = React.useRef(null);
  const [rotate, setRotate] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Smooth scaled rotation
    const rX = -(mouseY / height) * 25;
    const rY = (mouseX / width) * 25;

    setRotate({ x: rX, y: rY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl p-6 border border-white/5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] transition-all duration-300 overflow-hidden cursor-pointer shadow-2xl ${isHovered ? hoverBorder : ''
        }`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${isHovered ? 1.03 : 1})`,
        transition: isHovered ? 'none' : 'transform 0.5s ease-out, border-color 0.3s ease-out'
      }}
    >
      {/* Background radial glowing sphere that moves or flares */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 transition-opacity duration-500`}
        style={{
          transform: `translateZ(-20px) scale(1.15)`
        }}
      />

      {/* Cybernetic Grid Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '16px 16px',
          transform: 'translateZ(-10px)'
        }}
      />

      {/* Futuristic Telemetry Lines */}
      <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-white/10" />
      <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-white/10" />
      <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-white/10" />
      <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-white/10" />

      {/* Primary Floating 3D Elements */}
      <div style={{ transform: 'translateZ(40px)' }} className="relative z-10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xl backdrop-blur-md">
            {icon}
          </div>
          <span className="text-[9px] font-mono tracking-widest text-white/30 uppercase">SYSTEM ID: 0{Math.floor(100 + Math.random() * 900)}</span>
        </div>

        <div className="space-y-1">
          <h3 className={`text-xl font-black uppercase tracking-tight ${accentColor}`} style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {title}
          </h3>
          <div className={`h-0.5 w-12 bg-gradient-to-r ${gradient} rounded-full`} />
        </div>

        <p className="text-white/60 text-xs md:text-sm leading-relaxed">
          {desc}
        </p>

        {/* Action helper */}
        <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-white/30 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-white/20 animate-pulse" />
          <span>Interactive 3D Frame</span>
        </div>
      </div>
    </div>
  );
};

/* ── MEET THE TEAM INTERACTIVE OPTIONS ── */

// CSS Keyframes for Popup Transitions
const TeamPopStyle = () => (
  <style>{`
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes scaleUp {
      from { transform: scale(0.95); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    .animate-fade-in {
      animation: fadeIn 0.25s ease-out forwards;
    }
    .animate-scale-up {
      animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `}</style>
);

// Option 1: 🫧 Kinetic Bubble World
const BubbleWorld = ({ teamMembers, blackImages, hoverImages, onSelectMember }) => {
  const containerRef = React.useRef(null);
  const [bubbles, setBubbles] = React.useState([]);

  React.useEffect(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width || 800;
    const height = 550;

    const initialBubbles = teamMembers.map((member, i) => {
      const radius = width < 640 ? 35 : 55;
      const x = radius + Math.random() * (width - radius * 2);
      const y = radius + Math.random() * (height - radius * 2);
      const vx = (Math.random() - 0.5) * 1.8;
      const vy = (Math.random() - 0.5) * 1.8;

      return {
        id: i,
        member,
        image: blackImages[i] || hoverImages[i],
        x,
        y,
        vx,
        vy,
        radius
      };
    });

    setBubbles(initialBubbles);
  }, [teamMembers, blackImages, hoverImages]);

  React.useEffect(() => {
    let animationFrameId;

    const updatePhysics = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width || 800;
      const height = 550;

      setBubbles((prevBubbles) => {
        if (prevBubbles.length === 0) return prevBubbles;

        const nextBubbles = prevBubbles.map((b) => ({ ...b }));

        // Wall collisions
        for (let i = 0; i < nextBubbles.length; i++) {
          const b = nextBubbles[i];
          b.x += b.vx;
          b.y += b.vy;

          if (b.x - b.radius < 0) {
            b.x = b.radius;
            b.vx = Math.abs(b.vx);
          } else if (b.x + b.radius > width) {
            b.x = width - b.radius;
            b.vx = -Math.abs(b.vx);
          }

          if (b.y - b.radius < 0) {
            b.y = b.radius;
            b.vy = Math.abs(b.vy);
          } else if (b.y + b.radius > height) {
            b.y = height - b.radius;
            b.vy = -Math.abs(b.vy);
          }
        }

        // Bubble-to-bubble elastic collisions
        for (let i = 0; i < nextBubbles.length; i++) {
          for (let j = i + 1; j < nextBubbles.length; j++) {
            const b1 = nextBubbles[i];
            const b2 = nextBubbles[j];

            const dx = b2.x - b1.x;
            const dy = b2.y - b1.y;
            const dist = Math.hypot(dx, dy);
            const minDist = b1.radius + b2.radius;

            if (dist < minDist) {
              const overlap = minDist - dist;
              const pushX = (dx / dist) * overlap * 0.5;
              const pushY = (dy / dist) * overlap * 0.5;

              b1.x -= pushX;
              b1.y -= pushY;
              b2.x += pushX;
              b2.y += pushY;

              const nx = dx / dist;
              const ny = dy / dist;

              const rvx = b2.vx - b1.vx;
              const rvy = b2.vy - b1.vy;

              const velAlongNormal = rvx * nx + rvy * ny;

              if (velAlongNormal < 0) {
                const impulse = -velAlongNormal;
                b1.vx -= impulse * nx;
                b1.vy -= impulse * ny;
                b2.vx += impulse * nx;
                b2.vy += impulse * ny;
              }
            }
          }
        }

        return nextBubbles;
      });

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    animationFrameId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-[32px] border border-white/5 bg-[#03010a] overflow-hidden"
      style={{ height: '550px' }}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      {bubbles.map((b) => (
        <button
          key={b.id}
          onClick={() => onSelectMember(b.member, b.image)}
          className="absolute rounded-full cursor-pointer overflow-hidden transition-all duration-300 group select-none flex items-center justify-center border"
          style={{
            left: b.x - b.radius,
            top: b.y - b.radius,
            width: b.radius * 2,
            height: b.radius * 2,
            borderColor: 'rgba(173,250,59,0.25)',
            boxShadow: '0 0 15px rgba(173,250,59,0.1), inset 0 0 10px rgba(173,250,59,0.15)',
            background: 'rgba(13, 11, 26, 0.55)',
            backdropFilter: 'blur(4px)',
            transform: 'translate3d(0, 0, 0)'
          }}
          type="button"
        >
          <div className="absolute inset-0 rounded-full border border-white/10 group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

          <img
            src={b.image}
            alt={b.member.name}
            className="w-[85%] h-[85%] object-cover rounded-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300 pointer-events-none"
          />

          <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-1 text-center pointer-events-none">
            <span className="font-geom text-[8px] font-black text-white leading-tight uppercase tracking-wider">{b.member.name.split(' ')[0]}</span>
            <span className="text-[6px] text-[#adfa3b] font-mono uppercase tracking-widest">{b.member.role.split(' | ')[0]}</span>
            <span className="text-[7px] text-white/50 mt-1 font-bold">POP 🫧</span>
          </div>
        </button>
      ))}
    </div>
  );
};

// Option 2: 🛰️ Hologram Deck
const HologramDeck = ({ teamMembers, blackImages, onSelectMember }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10 max-w-7xl mx-auto">
        {teamMembers.map((member, idx) => (
          <button
            key={idx}
            onClick={() => onSelectMember(member, blackImages[idx])}
            className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#110e2e]/60 to-[#03010a]/90 p-5 transition-all duration-500 hover:border-[#adfa3b]/60 hover:-translate-y-2 overflow-hidden flex flex-col items-center shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(173,250,59,0.15)] w-full text-left"
            type="button"
          >
            {/* Pulsating corner tech brackets or lines */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/10 group-hover:border-[#adfa3b]/40 transition-all duration-500" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/10 group-hover:border-[#adfa3b]/40 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/10 group-hover:border-[#adfa3b]/40 transition-all duration-500" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/10 group-hover:border-[#adfa3b]/40 transition-all duration-500" />

            {/* Glowing Scanline Animation */}
            <div className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#adfa3b] to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[hologramScan_2.5s_infinite_linear] pointer-events-none z-20" />

            {/* Futuristic Tech Telemetry Coordinates overlay */}
            <div className="absolute top-3 right-3 text-[7px] font-mono text-white/30 tracking-widest uppercase">
              SYS_ID: 0{idx + 1}
            </div>

            {/* Portrait Image Container - Large and Beautiful */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 mb-4 bg-gradient-to-b from-white/5 to-transparent shadow-inner group-hover:border-[#adfa3b]/20 transition-all duration-500">
              <div className="absolute inset-0 bg-[#0d0b21]/10 mix-blend-color z-10 pointer-events-none group-hover:bg-transparent transition-all duration-500" />
              <img
                src={blackImages[idx]}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              {/* Overlay grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(173,250,59,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(173,250,59,0.03)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
            </div>

            {/* Profile Meta Metadata Info */}
            <div className="text-center w-full z-10 mt-2">
              <h4 className="font-geom text-sm md:text-base font-black uppercase text-white tracking-wide leading-tight group-hover:text-[#adfa3b] transition-colors duration-300 truncate" style={{ fontFamily: "'Syne', sans-serif" }}>
                {member.name}
              </h4>
              <p className="text-[9px] text-[#adfa3b] font-mono uppercase tracking-[0.2em] font-bold mt-1.5">{member.role}</p>

              <p className="text-[10px] text-white/60 leading-relaxed mt-3.5 line-clamp-3 group-hover:text-white/90 transition-colors duration-300 font-medium">
                {member.desc}
              </p>
            </div>

            {/* Bottom active state label */}
            <div className="w-full mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[7px] font-mono text-white/20">
              <span>HOLOGRAM UNIT // SEC_0{idx + 1}</span>
              <span className="text-[#adfa3b] opacity-80 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#adfa3b] animate-ping" /> ONLINE
              </span>
            </div>
          </button>
        ))}
      </div>

      <style>{`
        @keyframes hologramScan {
          0% { top: -5%; opacity: 0; }
          15% { opacity: 0.9; }
          85% { opacity: 0.9; }
          100% { top: 105%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

// Option 3: 🔄 Rotating Orbit Ring
const OrbitRing = ({ teamMembers, blackImages, onSelectMember }) => {
  const [rotation, setRotation] = React.useState(0);
  const [hoveredIdx, setHoveredIdx] = React.useState(null);

  React.useEffect(() => {
    let timer;
    if (hoveredIdx === null) {
      timer = setInterval(() => {
        setRotation((prev) => (prev + 0.3) % 360);
      }, 16);
    }
    return () => clearInterval(timer);
  }, [hoveredIdx]);

  return (
    <div
      className="relative w-full rounded-[32px] border border-white/5 bg-[#03010a] overflow-hidden flex items-center justify-center"
      style={{ height: '550px' }}
    >
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)'
      }} />
      <div className="absolute font-geom text-[10vw] text-white/[0.01] uppercase select-none pointer-events-none font-black tracking-widest">
        ORBIT
      </div>

      <div className="relative w-full h-full flex items-center justify-center">
        {teamMembers.map((member, idx) => {
          const angle = (idx * (360 / teamMembers.length) + rotation) * (Math.PI / 180);

          const rx = 340;
          const ry = 90;

          const x = Math.cos(angle) * rx;
          const y = Math.sin(angle) * ry;

          const depth = Math.sin(angle);
          const scale = 0.55 + (depth + 1) * 0.225;
          const opacity = 0.35 + (depth + 1) * 0.325;
          const zIndex = Math.floor((depth + 1) * 100);

          return (
            <button
              key={idx}
              onClick={() => onSelectMember(member, blackImages[idx])}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="absolute rounded-full overflow-hidden border border-[#adfa3b]/30 bg-[#0d0b1a] shadow-[0_0_20px_rgba(173,250,59,0.15)] group transition-all duration-300"
              style={{
                width: '100px',
                height: '100px',
                transform: `translate3d(${x}px, ${y}px, 0) scale(${hoveredIdx === idx ? scale * 1.15 : scale})`,
                opacity: hoveredIdx === idx ? 1 : opacity,
                zIndex: hoveredIdx === idx ? 999 : zIndex,
                boxShadow: hoveredIdx === idx
                  ? '0 0 30px rgba(173,250,59,0.4), inset 0 0 15px rgba(173,250,59,0.2)'
                  : '0 0 20px rgba(173,250,59,0.15)'
              }}
              type="button"
            >
              <img
                src={blackImages[idx]}
                alt={member.name}
                className="w-[90%] h-[90%] m-[5%] rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-1 pointer-events-none text-center">
                <span className="font-geom text-[8px] font-black text-white leading-tight uppercase">{member.name.split(' ')[0]}</span>
                <span className="text-[6px] text-[#adfa3b] font-mono tracking-widest">{member.role.split(' | ')[0]}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// Option 4: 🔊 Soundwave Equalizer Reactor
const AudioReactor = ({ teamMembers, blackImages, onSelectMember }) => {
  const [ticks, setTicks] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTicks((t) => t + 1);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full rounded-[32px] border border-white/5 bg-[#03010a] p-8 overflow-hidden min-h-[500px]">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '20px 100%'
      }} />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 relative z-10">
        {teamMembers.map((member, idx) => {
          const bounce = Math.sin((ticks * 0.1) + (idx * 0.5)) * 12;

          return (
            <button
              key={idx}
              onClick={() => onSelectMember(member, blackImages[idx])}
              className="group relative rounded-2xl border border-white/5 bg-[#0d0b1a] p-3 transition-all duration-300 hover:border-[#adfa3b]/30 flex flex-col items-center"
              style={{
                transform: `translateY(${bounce}px)`,
                boxShadow: '0 8px 30px rgba(0,0,0,0.5)'
              }}
              type="button"
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 border border-white/5">
                <img
                  src={blackImages[idx]}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/75 border border-white/10 text-[6px] font-mono text-[#adfa3b] flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-[#adfa3b] animate-ping" />
                  <span>REACTOR</span>
                </div>
              </div>

              <div className="text-center w-full">
                <h4 className="font-geom text-[9px] font-black uppercase text-white truncate">{member.name}</h4>
                <p className="text-[7px] text-[#adfa3b] font-mono uppercase tracking-wider truncate mt-0.5">{member.role}</p>
              </div>

              <div
                className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full opacity-30 group-hover:opacity-100 transition-all duration-300"
                style={{
                  background: 'linear-gradient(90deg, transparent, #adfa3b, transparent)',
                  boxShadow: '0 0 10px #adfa3b'
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

// Option 5: 🥞 Kinetic Accordion Slices
const KineticPanel = ({ teamMembers, blackImages, onSelectMember }) => {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const visibleMembers = teamMembers.slice(0, 6);

  return (
    <div className="relative w-full rounded-[32px] border border-white/5 bg-[#03010a] overflow-hidden flex h-[480px]">
      {visibleMembers.map((member, idx) => {
        const isActive = activeIdx === idx;

        return (
          <button
            key={idx}
            onMouseEnter={() => setActiveIdx(idx)}
            onClick={() => onSelectMember(member, blackImages[idx])}
            className="h-full relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-end border-r border-white/5"
            style={{
              width: isActive ? '45%' : '11%',
              background: '#0d0b1a'
            }}
            type="button"
          >
            <img
              src={blackImages[idx]}
              alt={member.name}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isActive ? 'scale-105 grayscale-0 opacity-40' : 'grayscale opacity-25'}`}
            />

            {isActive && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-[#adfa3b] animate-pulse" />
            )}

            {!isActive && (
              <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
                <span className="font-geom text-[10px] font-black uppercase text-white/40 tracking-[0.2em] rotate-[-90deg] whitespace-nowrap">
                  {member.name.split(' ')[0]}
                </span>
              </div>
            )}

            <div
              className={`p-6 relative z-10 w-full text-left transition-all duration-500 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ background: 'linear-gradient(to top, rgba(3,1,10,0.95), transparent)' }}
            >
              <span className="text-[8px] font-mono text-[#adfa3b] uppercase tracking-[0.2em]">{member.role}</span>
              <h4 className="font-geom text-lg font-black uppercase text-white mt-1 leading-none">{member.name}</h4>
              <p className="text-xs text-white/70 leading-relaxed mt-3 max-w-[90%]">{member.desc}</p>
              <div className="inline-flex items-center gap-1.5 text-[8px] font-mono text-white/50 uppercase tracking-widest mt-4 border border-white/10 px-2.5 py-1 rounded-full bg-white/5">
                <span>POP BIO 🫧</span>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

/* ── FUNNY PLAYFUL CARD WALL ── */
const FunnyCardWall = ({ teamMembers, blackImages, onSelectMember }) => {
  const [hoveredIdx, setHoveredIdx] = React.useState(null);

  const funnyQuips = [
    "Ships code & reels at 3AM. Help. 💀",
    "Deleted the timeline. Made it look intentional. 😈",
    "Wrote this bio while on a deadline. ⏰",
    "ROAS? More like R-O-A-SLAY! 🔥",
    "Figma > Sleep. Non-negotiable. 😤",
    "Do NOT delete his raw files. Ever. 😤",
    "Premiere Pro is her native language. 🎬",
    "Posted 4 Reels before breakfast. 📱",
    "It works on his machine ✅ Obviously.",
    "Therapist for the whole office. 🛋️",
    "His transitions slap harder than ur playlist. 🎵",
    "Knows every trending audio 0.2s in. 👂",
    "CTR > 40%? Just a Tuesday. 📊",
    "Color graded ur fave brand. You're welcome. 🎨",
    "Comments back faster than ur WhatsApp. 💬",
    "Hook, intro, CTA. Already done. ✍️",
    "B-roll king 👑 No contest.",
    "Stack Overflow's most loyal customer. 🙏",
  ];

  const roleEmojis = ["💻", "🎨", "✍️", "📊", "🖌️", "📸", "🎬", "📱", "⚙️", "💼", "🎞️", "🌟", "📣", "🎭", "🗣️", "📝", "✂️", "🌐"];
  const cardColors = ['#adfa3b', '#a855f7', '#f59e0b', '#ec4899', '#06b6d4', '#adfa3b', '#a855f7', '#10b981', '#f59e0b', '#adfa3b', '#a855f7', '#ec4899', '#06b6d4', '#adfa3b', '#10b981', '#f59e0b', '#a855f7', '#adfa3b'];
  const rotations = [-6, 4, -3, 7, -5, 3, -7, 5, -4, 6, -2, 8, -6, 3, -8, 5, -3, 7];

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <style>{`
        @keyframes funCardJiggle {
          0%,100% { transform: rotate(0deg) scale(1.06) translateY(-10px); }
          25% { transform: rotate(-3deg) scale(1.07) translateY(-12px); }
          75% { transform: rotate(3deg) scale(1.07) translateY(-12px); }
        }
        @keyframes funBubblePop {
          0% { transform: translateX(-50%) scale(0) translateY(8px); opacity:0; }
          70% { transform: translateX(-50%) scale(1.08) translateY(-3px); opacity:1; }
          100% { transform: translateX(-50%) scale(1) translateY(0); opacity:1; }
        }
        @keyframes funEmojiFloat {
          0%,100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-8px) rotate(5deg); }
        }
        @keyframes funTapeShimmer {
          0%,100% { opacity:0.85; }
          50% { opacity:1; filter:brightness(1.25); }
        }
        @keyframes aboutBebasIn {
          from { opacity:0; transform: translateY(30px) skewX(-4deg); }
          to   { opacity:1; transform: translateY(0)   skewX(0deg); }
        }
      `}</style>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(155px, 1fr))',
        gap: '32px 20px',
        padding: '28px 8px 48px',
        alignItems: 'start',
      }}>
        {teamMembers.map((member, idx) => {
          const isHovered = hoveredIdx === idx;
          const color = cardColors[idx % cardColors.length];
          const rot = rotations[idx % rotations.length];
          const isDark = color === '#adfa3b' || color === '#f59e0b';

          return (
            <button
              key={idx}
              type="button"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => onSelectMember(member, blackImages[idx])}
              style={{
                position: 'relative',
                background: '#0d0b1a',
                border: `2px solid ${isHovered ? color : 'rgba(255,255,255,0.07)'}`,
                borderRadius: '16px',
                padding: '0',
                overflow: 'visible',
                transform: isHovered
                  ? 'rotate(0deg) scale(1.06) translateY(-10px)'
                  : `rotate(${rot}deg)`,
                transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s ease, box-shadow 0.3s ease',
                boxShadow: isHovered
                  ? `0 24px 48px rgba(0,0,0,0.75), 0 0 0 3px ${color}44`
                  : '0 6px 18px rgba(0,0,0,0.55)',
                cursor: 'pointer',
                zIndex: isHovered ? 50 : 'auto',
              }}
            >
              {/* Coloured tape strip at top */}
              <div style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '56px',
                height: '20px',
                background: color,
                borderRadius: '4px',
                zIndex: 5,
                animation: `funTapeShimmer 3s ease-in-out infinite`,
                animationDelay: `${idx * 0.2}s`,
              }} />

              {/* Floating role emoji */}
              <div style={{
                position: 'absolute',
                top: '-14px',
                right: '-6px',
                fontSize: '20px',
                animation: 'funEmojiFloat 2.5s ease-in-out infinite',
                animationDelay: `${idx * 0.18}s`,
                zIndex: 6,
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.6))',
                pointerEvents: 'none',
              }}>
                {roleEmojis[idx % roleEmojis.length]}
              </div>

              {/* Photo */}
              <div style={{
                width: '100%',
                aspectRatio: '3/4',
                borderRadius: '14px 14px 0 0',
                overflow: 'hidden',
                background: '#060811',
              }}>
                <img
                  src={blackImages[idx]}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: isHovered ? 'grayscale(0%) saturate(1.2)' : 'grayscale(100%)',
                    transition: 'filter 0.4s ease, transform 0.4s ease',
                    transform: isHovered ? 'scale(1.07)' : 'scale(1)',
                    display: 'block',
                  }}
                />
              </div>

              {/* Info panel */}
              <div style={{
                padding: '10px 10px 13px',
                background: '#0d0b1a',
                borderRadius: '0 0 14px 14px',
                borderTop: `2px solid ${color}22`,
              }}>
                <div style={{
                  fontFamily: "'Bebas Neue','Impact','Arial Black',sans-serif",
                  fontSize: '15px',
                  color: '#fff',
                  letterSpacing: '0.06em',
                  lineHeight: 1.1,
                  marginBottom: '3px',
                  textAlign: 'left',
                }}>
                  {member.name.split(' ')[0]}
                </div>
                <div style={{
                  fontFamily: 'monospace',
                  fontSize: '9px',
                  color: color,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  lineHeight: 1.3,
                  textAlign: 'left',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}>
                  {member.role.split(' | ')[0].split(' & ')[0].substring(0, 22)}
                </div>
              </div>

              {/* Funny speech bubble on hover */}
              {isHovered && (
                <div style={{
                  position: 'absolute',
                  bottom: 'calc(100% + 18px)',
                  left: '50%',
                  background: color,
                  color: isDark ? '#060811' : '#fff',
                  padding: '9px 13px',
                  borderRadius: '12px',
                  fontSize: '10.5px',
                  fontFamily: "'Nunito Sans','DM Sans',sans-serif",
                  fontWeight: 800,
                  width: '180px',
                  textAlign: 'center',
                  lineHeight: 1.4,
                  zIndex: 100,
                  animation: 'funBubblePop 0.3s ease-out forwards',
                  boxShadow: `0 6px 24px ${color}55`,
                  pointerEvents: 'none',
                }}>
                  {funnyQuips[idx % funnyQuips.length]}
                  {/* Bubble tail */}
                  <div style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '8px solid transparent',
                    borderRight: '8px solid transparent',
                    borderTop: `8px solid ${color}`,
                  }} />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const About = () => {
  const containerRef = React.useRef(null);
  const [selectedMember, setSelectedMember] = React.useState(null);
  const images = [
    'https://demo.sripadastudios.com/wp-content/uploads/2025/04/1-6.png',
    'https://demo.sripadastudios.com/wp-content/uploads/2025/04/2-5.png',
    'https://demo.sripadastudios.com/wp-content/uploads/2025/04/3-5.png',
    'https://demo.sripadastudios.com/wp-content/uploads/2025/04/4-5.png',
    'https://demo.sripadastudios.com/wp-content/uploads/2025/04/5-3.png',
    'https://demo.sripadastudios.com/wp-content/uploads/2025/04/6-4.png',
    'https://demo.sripadastudios.com/wp-content/uploads/2025/04/7-1.png',
    'https://demo.sripadastudios.com/wp-content/uploads/2025/04/8-1.png',
    'https://demo.sripadastudios.com/wp-content/uploads/2025/04/9-1.png',
    'https://demo.sripadastudios.com/wp-content/uploads/2025/04/10-2.png',
    'https://demo.sripadastudios.com/wp-content/uploads/2025/04/11-2.png',
  ];

  const loopImages = images.concat(images);

  return (
    <>
      {/* ── BEBAS NEUE FONT ── */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');`}</style>

      <section className="w-full bg-[#05020e] overflow-hidden pt-28 pb-12 relative">
        {/* Glowing backdrops */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[20%] w-[600px] h-[350px] rounded-full bg-purple-600/10 blur-[130px]" />
          <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[300px] rounded-full bg-[#adfa3b]/5 blur-[120px]" />
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }} />
        </div>

        {/* ── FUNKY ABOUT HERO HEADING ── */}
        <div ref={containerRef} style={{ textAlign: 'center', position: 'relative', zIndex: 10, paddingBottom: '36px', paddingLeft: '16px', paddingRight: '16px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 'clamp(12px, 2vw, 24px)', marginBottom: '18px' }}>
            <div style={{ fontFamily: "'Bebas Neue','Impact','Arial Black',sans-serif", fontSize: 'clamp(58px,11vw,130px)', color: '#adfa3b', WebkitTextStroke: '3px white', textShadow: '8px 8px 0 rgba(0,0,0,0.65)', letterSpacing: '0.04em', lineHeight: 0.85, animation: 'aboutBebasIn 0.8s ease-out both' }}>
              <VariableProximity
                label="WHO WE ARE"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            </div>
            <div style={{ fontFamily: "'Bebas Neue','Impact','Arial Black',sans-serif", fontSize: 'clamp(58px,11vw,130px)', color: 'transparent', WebkitTextStroke: '3px #adfa3b', letterSpacing: '0.04em', lineHeight: 0.85, animation: 'aboutBebasIn 0.8s 0.15s ease-out both' }}>
              <VariableProximity
                label="THE MAD ONES"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            </div>
          </div>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 'clamp(12px,1.4vw,16px)', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.32em', textTransform: 'uppercase', fontWeight: 700 }}>
            Bengaluru's Most Chaotic Creative Agency ✨
          </p>
        </div>

        {/* Carousel Container */}
        <div className="h-[45vh] relative z-10">
          <div className="flex w-max aaaa-animate gap-5">
            {loopImages.map((src, idx) => (
              <div
                className="flex-shrink-0 h-[45vh] rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all hover:scale-[1.02] duration-500"
                key={`${src}-${idx}`}
              >
                <img className="h-full w-auto object-cover" src={src} alt={`Carousel ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section A: Behind the Buzz */}
      <section className="w-full bg-[#080a16] text-white py-24 px-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-[#adfa3b]/5 blur-[100px] pointer-events-none" />

        {/* Large Watermark */}
        <div className="absolute top-8 right-8 text-transparent select-none pointer-events-none text-[8vw] font-black uppercase tracking-widest opacity-5" style={{ fontFamily: "'DM Sans', sans-serif", WebkitTextStroke: '1.5px rgba(255,255,255,0.4)' }}>
          THE BUZZ
        </div>

        <div className="mx-auto max-w-6xl grid items-center gap-16 md:grid-cols-2 relative z-10">
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#adfa3b]/20 bg-[#adfa3b]/5 text-[10px] uppercase tracking-[0.35em] text-[#adfa3b] font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Who We Are
            </span>
            <h2 style={{ fontFamily: "'Bebas Neue','Impact','Arial Black',sans-serif", fontSize: 'clamp(48px,8vw,100px)', color: '#adfa3b', WebkitTextStroke: '2px white', textShadow: '6px 6px 0 rgba(0,0,0,0.55)', letterSpacing: '0.04em', lineHeight: 0.9, margin: 0 }}>
              Behind the Buzz
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-[#adfa3b] to-transparent" />

            <p className="text-lg md:text-xl font-bold text-white/95 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Buzziwah is the evolved, Gen Z–driven digital marketing arm of Sripada Studios.
            </p>

            <p className="text-white/70 leading-relaxed text-sm md:text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Backed by a strong talent pool and in-house studio capabilities, we combine creative storytelling with technical precision to build brands that grow.
            </p>

            <p className="text-white/70 leading-relaxed text-sm md:text-base flex items-center gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="w-2 h-2 rounded-full bg-[#adfa3b]" />
              Rooted in Bengaluru, we bring a regional edge with a fresh, fast-moving approach to digital marketing.
            </p>
          </div>

          <div className="space-y-4 max-w-md mx-auto md:max-w-none md:mx-0 w-full flex flex-col items-center md:items-stretch">
            <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 aspect-[4/3] flex items-center justify-center shadow-2xl w-full max-w-sm md:max-w-none">
              {/* Absolute overlay of gradient and particle lines */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />

              {/* Group Photo frame */}
              <picture>
                <source srcSet="/BEGIDN THE BUZZ.webp" type="image/webp" />
                <img
                  src="/BEGIDN THE BUZZ.png"
                  alt="Buzziwah Team Group"
                  width="760"
                  height="428"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </picture>

              {/* Floating technical ornaments */}
              <div className="absolute top-6 right-6 z-20 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 text-xs backdrop-blur-sm">
                +
              </div>
            </div>

            {/* Cinematic Glass Label underneath the photo so it doesn't hide anything! */}
            <div className="backdrop-blur-md bg-white/[0.02] p-5 rounded-2xl border border-white/5 text-center md:text-left w-full max-w-sm md:max-w-none">
              <span className="text-[9px] tracking-[0.3em] text-[#adfa3b] font-black block uppercase mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>In-House Capabilities</span>
              <span className="text-white text-sm md:text-base font-bold block" style={{ fontFamily: "'DM Sans', sans-serif" }}>Behind the Buzz • Team Photo</span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #080a1a 0%, #0d0b21 100%)" }}>
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-600/8 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#adfa3b]/5 blur-[100px] pointer-events-none" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 relative z-10">
          <div className="flex justify-center fade-up" style={{ '--delay': '0s', marginTop: '36px' }}>
            <img
              className="w-full max-w-xl rounded-2xl object-cover"
              src="/founders image about us.png"
              alt="The Boys Story"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.6)', border: '1px solid rgba(173,250,59,0.15)' }}
            />
          </div>

          <div className="boys-card font-google-sans fade-up" style={{ '--delay': '0.1s', marginTop: '140px' }}>
            <h2 style={{ fontFamily: "'Bebas Neue','Impact','Arial Black',sans-serif", fontSize: 'clamp(40px,6vw,80px)', color: '#24bf89ff', WebkitTextStroke: '2px white', textShadow: '5px 5px 0 rgba(0,0,0,0.5)', letterSpacing: '0.04em', lineHeight: 0.9, marginBottom: '20px' }}>
              THE BOYS STORY!
            </h2>
            <p className="boys-body" style={{ color: 'rgba(10, 11, 10, 0.75)', lineHeight: '1.8' }}>
              P V Phani Srivatsa &amp; Satish MS quit their 10-to-7 jobs, believing Sripada Studios
              as their dream and goal, trusting their talent completely. Both are passionate about
              cinema and digital marketing, which eventually led to the development of this
              conglomerate company. If you wish to engage with Sripada Studios, you should speak
              with these individuals who will astound you with their immense potential and
              delightful sense of humour.
            </p>
            <button className="boys-btn" style={{ background: '#adfa3b', color: '#060811', fontWeight: 900, border: 'none', boxShadow: '0 0 24px rgba(173,250,59,0.35)' }}>
              Know More <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#05030e] py-24 px-6 relative overflow-hidden border-t border-b border-white/5">
        {/* Fun water droplet effect */}
        <WaterDropletEffect />

        {/* Glowing orbs for atmosphere */}
        <div className="crew-orb crew-orb-lime" />
        <div className="crew-orb crew-orb-purple" />
        <div className="crew-orb crew-orb-center" />

        {/* Fun floating background shapes */}
        <div className="absolute inset-0 pointer-events-none opacity-60 z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="fun-grad-lime" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#adfa3b" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#adfa3b" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="fun-grad-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Wavy fun curves */}
            <path d="M-100,200 C300,50 600,600 1200,400" fill="none" stroke="url(#fun-grad-lime)" strokeWidth="2" strokeDasharray="10,14" />
            <path d="M200,800 C600,500 900,1000 1600,600" fill="none" stroke="url(#fun-grad-purple)" strokeWidth="2" strokeDasharray="14,10" />

            {/* Fun decorative circles — no sci-fi vibes, just vibe */}
            <circle cx="15%" cy="30%" r="140" fill="none" stroke="rgba(173,250,59,0.12)" strokeWidth="2" strokeDasharray="6,10" />
            <circle cx="15%" cy="30%" r="90" fill="rgba(173,250,59,0.03)" stroke="rgba(173,250,59,0.08)" strokeWidth="1.5" />

            <circle cx="85%" cy="72%" r="170" fill="none" stroke="rgba(168,85,247,0.12)" strokeWidth="2" strokeDasharray="8,12" />
            <circle cx="85%" cy="72%" r="110" fill="rgba(168,85,247,0.03)" stroke="rgba(168,85,247,0.08)" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Localized styles for cyber telemetry elements */}
        <style>{`
          .crew-grid-perspective {
            position: absolute;
            inset: 0;
            background-image: 
              linear-gradient(rgba(173, 250, 59, 0.08) 1.2px, transparent 1.2px),
              linear-gradient(90deg, rgba(173, 250, 59, 0.08) 1.2px, transparent 1.2px);
            background-size: 80px 80px;
            mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, #000 35%, transparent 100%);
            -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, #000 35%, transparent 100%);
            transform: perspective(1000px) rotateX(65deg) translateY(-80px) translateZ(-40px);
            transform-origin: top center;
            opacity: 0.75;
            pointer-events: none;
            z-index: 0;
          }

          .crew-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(140px);
            opacity: 0.65;
            mix-blend-mode: screen;
            pointer-events: none;
            animation: floatCrewOrb 20s infinite alternate ease-in-out;
            z-index: 0;
          }

          .crew-orb-lime {
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(173, 250, 59, 0.35) 0%, rgba(173, 250, 59, 0) 70%);
            top: 10%;
            left: -10%;
            animation-duration: 18s;
          }

          .crew-orb-purple {
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, rgba(139, 92, 246, 0) 70%);
            bottom: 10%;
            right: -10%;
            animation-duration: 24s;
            animation-delay: -5s;
          }

          .crew-orb-center {
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(173, 250, 59, 0.1) 0%, rgba(173, 250, 59, 0) 70%);
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: none;
          }

          @keyframes floatCrewOrb {
            0% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-30px) scale(1.05); }
            100% { transform: translateY(15px) scale(0.95); }
          }
        `}</style>

        <div className="mx-auto max-w-6xl mb-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-end border-b border-white/10 pb-12">
            <div>
              <span className="inline-block px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-[9px] uppercase tracking-[0.3em] text-purple-400 font-bold mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Mindset & Collaboration
              </span>
              <h2 style={{ fontFamily: "'Bebas Neue','Impact','Arial Black',sans-serif", fontSize: 'clamp(34px,4.5vw,68px)', color: '#fff', WebkitTextStroke: '1px rgba(255,255,255,0.3)', letterSpacing: '0.04em', lineHeight: 0.92, margin: 0 }}>
                Creative Thinking<br />
                <span style={{ color: '#adfa3b', WebkitTextStroke: '2px white' }}>meets Technical Precision</span>
              </h2>
            </div>

            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <ThreeDInteractiveCard
                  title="Breaking Patterns"
                  desc="Some minds break patterns. They explore, disrupt, and bring pure creative energy."
                  gradient="from-purple-600/30 to-pink-500/10"
                  accentColor="text-purple-400"
                  hoverBorder="hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                  icon="⚡"
                />
                <ThreeDInteractiveCard
                  title="Building Systems"
                  desc="Some build systems. They structure, scale, and deliver technical precision."
                  gradient="from-[#adfa3b]/30 to-emerald-500/10"
                  accentColor="text-[#adfa3b]"
                  hoverBorder="hover:border-[#adfa3b]/40 hover:shadow-[0_0_30px_rgba(173,250,59,0.15)]"
                  icon="⚙️"
                />
              </div>
              <p className="text-[#a3a3c2] text-sm md:text-base leading-relaxed font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Different approaches. Same goal—results. <br />
                <span className="text-white font-bold">Because when you enjoy the process, the outcome shows.</span>
              </p>
            </div>
          </div>

          <TeamPopStyle />

          <div className="mb-10 mt-20 text-center">
            <h3 style={{ fontFamily: "'Bebas Neue','Impact','Arial Black',sans-serif", fontSize: 'clamp(48px,8vw,96px)', letterSpacing: '0.05em', lineHeight: 0.88, margin: 0 }}>
              <span style={{ color: 'transparent', WebkitTextStroke: '3px rgba(255,255,255,0.4)' }}>MEET THE </span>
              <span style={{ color: '#adfa3b', WebkitTextStroke: '2px white', textShadow: '5px 5px 0 rgba(0,0,0,0.5)' }}>MAD CREW</span>
            </h3>
            <p className="text-xs md:text-sm text-white/50 font-mono mt-3 uppercase tracking-widest">
              Hover to see what these legends are REALLY about 👀 — Click to pop their full card.
            </p>
          </div>

          <div className="mt-12 w-full">
            {(() => {
              const blackImages = [
                '/employees%20black/SSD_Website_Employees-27-scaled.png',
                '/employees%20black/SSD_Website_Employees-25-scaled.png',
                '/employees%20black/SSD_Website_Employees-26-scaled.png',
                '/employees%20black/SSD_Website_Employees-scaled.png',
                '/employees%20black/SSD_Website_Employees-2-scaled.png',
                '/employees%20black/SSD_Website_Employees-11-scaled.png',
                '/employees%20black/SSD_Website_Employees-12-scaled.png',
                '/employees%20black/SSD_Website_Employees-10-scaled.png',
                '/employees%20black/SSD_Website-3-1-scaled.png',
                '/employees%20black/SSD_Website_Employees-8-scaled.png',
                '/employees%20black/SSD_Website_Employees-4-scaled.png',
                '/employees%20black/SSD_Website_Employees-6-scaled.png',
                '/employees%20black/SSD_Website_Employees-5-scaled.png',
                '/employees%20black/SSD_Website_Employees-1-scaled.png',
                '/employees%20black/SSD_Website_Employees-7-scaled.png',
                '/employees%20black/SSD_Website_Employees-9-scaled.png',
                '/employees%20black/SSD_Website_Employees-13-scaled.png',
                '/employees%20black/SSD_Website_Employees-3-scaled.png',
              ];

              const teamMembers = [
                {
                  name: 'PHANI SRIVATSA PV',
                  role: 'EDITOR | DEVELOPER',
                  desc: 'Crafts seamless digital platforms, cuts high-impact cinematic edits, and codes with relentless energy.'
                },
                {
                  name: 'SATISH MS',
                  role: 'UX DESIGNER | EDITOR',
                  desc: 'Fuses user psychology with clean aesthetics, shaping intuitive digital flows and master cuts.'
                },
                {
                  name: 'RAKSHA S',
                  role: 'CONTENT WRITER',
                  desc: 'Weaves viral hooks and immersive storytelling narratives that keep audiences hooked.'
                },
                {
                  name: 'SATHWIK NJ',
                  role: 'PERFORMANCE MARKETER',
                  desc: 'Decodes algorithms, optimizes ad spends, and scales ROI with data-backed precision.'
                },
                {
                  name: 'GOUTHAM SRINAG',
                  role: 'UI DESIGNER',
                  desc: 'Molds glowing user interfaces, vibrant interaction vectors, and next-level layout grids.'
                },
                {
                  name: 'MANISH N',
                  role: 'PHOTOGRAPHER',
                  desc: 'Frames high-delivery moments, capturing chaotic creative energy with cinematic precision.'
                },
                {
                  name: 'VYSHNAVI AM',
                  role: 'VIDEO EDITOR',
                  desc: 'Splices high-octane video sequences, flawless audio tracks, and ultra-smooth transitions.'
                },
                {
                  name: 'HEMASHREE K',
                  role: 'SOCIAL MEDIA MANAGER',
                  desc: 'Orchestrates feed schedules, tracks real-time trends, and drives daily brand engagement.'
                },
                {
                  name: 'ASHOK KUMAR S',
                  role: 'FULL STACK DEVELOPER',
                  desc: 'Builds robust server-side structures and styles interactive frontends with perfection.'
                },
                {
                  name: 'ARPITHA M',
                  role: 'HUMAN RESOURCE',
                  desc: 'Curates elite design talents and ensures our dynamic work culture maintains its peak vibes.'
                },
                {
                  name: 'KARTHIK D',
                  role: 'VIDEO EDITOR',
                  desc: 'Injects fresh rhythm, timing, and sound design layers to bring corporate reels to life.'
                },
                {
                  name: 'NAYANA CN',
                  role: 'SOCIAL MEDIA ASSOCIATIVE',
                  desc: 'Monitors viral platform trends, creating high-reach daily content strategies.'
                },
                {
                  name: 'JITENDRANTHA',
                  role: 'AD OPS EXECUTIVE',
                  desc: 'Deploys paid programmatic marketing campaigns and audits delivery metrics.'
                },
                {
                  name: 'AMITHA SHETTY',
                  role: 'DESIGNER',
                  desc: 'Engineers gorgeous branding elements, layout iconography, and brand identity toolkits.'
                },
                {
                  name: 'HARIPRASAD',
                  role: 'SOCIAL MEDIA EXECUTIVE',
                  desc: 'Directs community interactions and moderates fan circles to boost account visibility.'
                },
                {
                  name: 'VARUNGOWDA',
                  role: 'CONTENT WRITER & STRATEGIST',
                  desc: 'Engineers highly-persuasive marketing content copies and maps out user-acquisition funnels.'
                },
                {
                  name: 'RANJAN NAVEEN',
                  role: 'ASSOCIATE VIDEO EDITOR',
                  desc: 'Drafts pacing timelines and assembles video sequences for social campaigns.'
                },
                {
                  name: 'ADITYA NAYAK',
                  role: 'JUNIOR WEB DEVELOPER',
                  desc: 'Polishes responsive stylesheet code-structures, fixing interface grids with speed.'
                },
              ];

              const onSelectMember = (member, image) => {
                // No popup - just hover effects
              };

              return (
                <div className="relative w-full">
                  <FunnyCardWall
                    teamMembers={teamMembers}
                    blackImages={blackImages}
                    onSelectMember={onSelectMember}
                  />
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Section C: Join the Mad Energy */}
      <section className="w-full bg-[#060811] text-white py-24 px-6 relative overflow-hidden border-t border-b border-white/5">
        <WaterDropletEffect />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#adfa3b]/5 blur-[150px] pointer-events-none" />

        <div className="mx-auto max-w-4xl text-center relative z-10 space-y-8">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#adfa3b]/20 bg-[#adfa3b]/5 text-[10px] uppercase tracking-[0.35em] text-[#adfa3b] font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Grow With Us
          </span>

          <h2 style={{ fontFamily: "'Bebas Neue','Impact','Arial Black',sans-serif", fontSize: 'clamp(44px,7vw,90px)', letterSpacing: '0.03em', lineHeight: 0.92, margin: 0 }}>
            <span style={{ color: '#adfa3b', WebkitTextStroke: '2px white', textShadow: '5px 5px 0 rgba(0,0,0,0.5)' }}>Join the Mad Energy</span><br />
            <span style={{ color: 'transparent', WebkitTextStroke: '2px #a855f7' }}>Build a Career from Passion</span>
          </h2>

          <div className="max-w-2xl mx-auto space-y-6 text-base md:text-lg text-white/80 leading-relaxed font-google-sans">
            <p className="font-bold text-white text-lg md:text-xl">
              When passion meets execution, energy turns into impact.
            </p>
            <p>
              We’re driven by that mix—creativity, discipline, and purpose working together.
            </p>
            <p className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
              If you bring the curiosity, the energy, and the intent to do better, <br />
              <span className="text-[#adfa3b] font-bold">You’re not just joining a team—You’re adding to it.</span>
            </p>
          </div>

          <div className="pt-4">
            <button className="relative px-8 py-4 bg-[#adfa3b] text-black font-black uppercase tracking-widest text-xs rounded-full hover:shadow-[0_0_30px_rgba(173,250,59,0.5)] hover:scale-105 transition-all duration-300" style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: '16px', letterSpacing: '0.15em' }}>
              Explore Opportunities 🚀
            </button>
          </div>
        </div>
      </section>

      {/* Section D: Sripada Studios Main Page Redirect */}
      <section className="w-full bg-[#0a0d1a] py-24 px-6 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] rounded-[40px] border border-white/10 p-8 md:p-16 overflow-hidden relative shadow-2xl">
            {/* Absolute Watermark */}
            <div className="absolute bottom-[-10%] right-[-5%] text-transparent select-none pointer-events-none text-[12vw] font-black uppercase tracking-widest opacity-5" style={{ fontFamily: "'DM Sans', sans-serif", WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}>
              SRIPADA
            </div>

            <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 items-center relative z-10">
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 rounded-full border border-purple-400/20 bg-purple-400/5 text-[9px] uppercase tracking-[0.25em] text-purple-400 font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  The Parent Company
                </span>
                <h2 style={{ fontFamily: "'Bebas Neue','Impact','Arial Black',sans-serif", fontSize: 'clamp(36px,5vw,72px)', color: 'white', WebkitTextStroke: '1.5px rgba(255,255,255,0.25)', letterSpacing: '0.05em', lineHeight: 0.9, margin: 0 }}>
                  SRIPADA STUDIOS
                </h2>
                <p className="text-[#a3a3c2] leading-relaxed text-sm md:text-base">
                  Buzziwah is backed by the colossal capabilities of Sripada Studios. Discover the master studio where cinema, high-end film production, professional studio shoots, and creative storytelling are forged at scale.
                </p>
                <div className="pt-2">
                  <a href="https://sripadastudios.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#adfa3b] hover:text-black hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300">
                    Visit Main Page <span className="text-sm">→</span>
                  </a>
                </div>
              </div>

              <div className="relative group rounded-2xl border border-white/15 overflow-hidden h-[400px] md:h-[550px] lg:h-[650px] bg-[#0c0d16] flex flex-col shadow-2xl transition-all duration-300 hover:border-purple-500/30">
                {/* Browser Mockup Top Bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0c14] border-b border-white/10 select-none">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/80" />
                  </div>
                  <div className="mx-auto bg-white/5 border border-white/10 rounded-md text-[10px] text-white/40 px-6 py-1 select-all font-mono tracking-wider w-[50%] text-center truncate">
                    sripadastudios.com
                  </div>
                </div>

                {/* Live iframe container */}
                <div className="flex-1 w-full h-full relative overflow-hidden bg-black">
                  <iframe
                    src="https://sripadastudios.com"
                    title="Sripada Studios Live Website"
                    className="w-full h-full border-0 opacity-85 hover:opacity-100 transition-opacity duration-300"
                    style={{ background: '#000' }}
                    sandbox="allow-scripts allow-same-origin"
                    loading="lazy"
                  />

                  {/* Subtle glass touch element or label */}
                  <div className="absolute bottom-4 left-4 z-20 backdrop-blur-md bg-black/60 px-4 py-2 rounded-xl border border-white/10 pointer-events-none">
                    <span className="text-[#adfa3b] text-[8px] font-black tracking-widest block uppercase mb-0.5">Live Preview</span>
                    <span className="text-white font-bold text-[11px]">Sripada Studios Official</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section" id="contact">
        <div className="contact-form-header">
          <h2>Contact Us</h2>
          <p>Tell us about your project and we will get back to you quickly.</p>
        </div>
        <div className="contact-form-inner">
          <div className="contact-form-image">
            <img src="/shared-contact-section-illustration.png" alt="Contact" />
          </div>

          <div>
            <form className="contact-form">
              <div className="form-row two">
                <label className="form-field">
                  <span>Name *</span>
                  <input type="text" placeholder="First" required />
                </label>
                <label className="form-field">
                  <span>&nbsp;</span>
                  <input type="text" placeholder="Last" required />
                </label>
              </div>

              <div className="form-row two">
                <label className="form-field">
                  <span>Email *</span>
                  <input type="email" placeholder="Email" required />
                </label>
                <label className="form-field">
                  <span>Numbers</span>
                  <input type="tel" placeholder="Phone" />
                </label>
              </div>

              <div className="form-row">
                <label className="form-field">
                  <span>Select your Services *</span>
                  <select required>
                    <option value="">Select your Services</option>
                    <option>Branding</option>
                    <option>Digital Marketing</option>
                    <option>Performance Marketing</option>
                    <option>Film Promotion</option>
                    <option>Web Design</option>
                  </select>
                </label>
              </div>

              <div className="form-row">
                <label className="form-field">
                  <span>Message *</span>
                  <textarea rows="5" placeholder="Comment or Message" required />
                </label>
              </div>

              <div className="form-actions">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-cta">
          <img
            className="footer-logo"
            src="/Buzziwah_FInal_Logo_White.png"
            alt="Buzziwah"
          />
          <div className="footer-cta-text">Ready To Get Started</div>
          <button className="footer-cta-button" type="button">
            Get Started →
          </button>
        </div>

        <div className="footer-divider" />

        <div className="footer-grid">
          <div className="footer-col">
            <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
            <input className="footer-input" type="text" placeholder="Name" />
            <input className="footer-input" type="email" placeholder="Email Address" />
            <button className="footer-subscribe" type="button">
              Subscribe
            </button>
          </div>

          <div className="footer-col">
            <h4>SERVICES</h4>
            <ul>
              <li>Performance Marketing</li>
              <li>Social Media Management</li>
              <li>Website Development</li>
              <li>Branding and Re-branding</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>ABOUT</h4>
            <ul>
              <li>Our Story</li>
              <li>Benefits</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>NAVIGATION</h4>
            <ul>
              <li>Content Solution</li>
              <li>Video Production</li>
              <li>Search Engine Optimization</li>
              <li>Influencer Marketing</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>HELP</h4>
            <ul>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social facebook" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social instagram" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social youtube" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
              </svg>
            </a>
          </div>
          <div className="footer-copy">2026 Buzziwah.com | All Rights Reserved</div>
        </div>
      </footer>
    </>
  );
};

export default About;
