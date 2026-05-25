import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NearbyStudioSection = () => {
  const sectionRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Skip GSAP scroll scrub on mobile — saves CPU on every scroll frame
    if (window.innerWidth < 768) return;

    let ctx = gsap.context(() => {
      gsap.fromTo(videoWrapperRef.current,
        { scale: 0.7, opacity: 0.4, y: 100 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: videoWrapperRef.current,
            start: "top 95%",
            end: "center 60%",
            scrub: 1,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Volumetric Canvas Smoke/Mist Particle Engine
  useEffect(() => {
    if (window.innerWidth < 768) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class SmokeParticle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * canvas.width;
        this.y = init ? Math.random() * canvas.height : canvas.height + Math.random() * 120;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = -Math.random() * 0.4 - 0.15; // Slow upward drift
        this.baseRadius = Math.random() * 140 + 90; // Large cloud radius
        this.radius = this.baseRadius;
        this.alpha = 0;
        this.maxAlpha = Math.random() * 0.11 + 0.03; // Soft, ambient look
        this.fadeInSpeed = Math.random() * 0.004 + 0.002;
        this.fadeOutSpeed = Math.random() * 0.003 + 0.001;
        this.isFadingIn = true;

        // Custom theme colors (Brand Purple & Brand Lime Green)
        const isPurple = Math.random() > 0.5;
        this.color = isPurple ? '139, 92, 246' : '173, 250, 59';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.radius += 0.12; // Gradual expansion

        if (this.isFadingIn) {
          this.alpha += this.fadeInSpeed;
          if (this.alpha >= this.maxAlpha) {
            this.alpha = this.maxAlpha;
            this.isFadingIn = false;
          }
        } else {
          this.alpha -= this.fadeOutSpeed;
          if (this.alpha <= 0) {
            this.reset(false);
          }
        }

        // Restart particle if boundaries exceeded
        if (this.x < -this.radius || this.x > canvas.width + this.radius || this.y < -this.radius) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        grad.addColorStop(0, `rgba(${this.color}, ${this.alpha})`);
        grad.addColorStop(0.5, `rgba(${this.color}, ${this.alpha * 0.35})`);
        grad.addColorStop(1, `rgba(${this.color}, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const particleCount = 10; // Reduced from 24 for performance
    const particles = Array.from({ length: particleCount }, () => new SmokeParticle());

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-24 sm:py-32 bg-[#050508] flex flex-col items-center justify-center text-center px-4 sm:px-8 overflow-hidden z-10">
      
      {/* Self-contained CSS styles for background auras and Canvas layout */}
      <style>{`
        @keyframes pulseGlowSlow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translate(40px, -30px) scale(1.15);
            opacity: 1;
          }
        }

        @keyframes pulseGlowReverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translate(-40px, 30px) scale(1.1);
            opacity: 1;
          }
        }

        .ambient-aurora-glow-1 {
          animation: pulseGlowSlow 20s infinite ease-in-out;
        }

        .ambient-aurora-glow-2 {
          animation: pulseGlowReverse 24s infinite ease-in-out;
        }
      `}</style>

      {/* Volumetric Particle Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Shifting background brand auras */}
      <div className="ambient-aurora-glow-1 absolute top-1/4 left-1/4 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-purple-700/20 blur-[130px] rounded-full pointer-events-none z-0" style={{ willChange: 'transform' }} />
      <div className="ambient-aurora-glow-2 absolute bottom-1/4 right-1/4 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-[#adfa3b]/12 blur-[130px] rounded-full pointer-events-none z-0" style={{ willChange: 'transform' }} />

      {/* Header Text */}
      <div className="relative z-10 max-w-3xl mx-auto mb-10 sm:mb-16">
        <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-white/20 bg-white/5 text-[9px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-white/70 mb-4 sm:mb-5">
          In-House Production
        </span>
        <h2 className="text-2xl sm:text-[2.4rem] md:text-[2.8rem] leading-tight font-black text-white uppercase font-['Geom'] mb-4 sm:mb-6 retro-4">
          Why we win at content
        </h2>
        <div className="text-sm sm:text-xl text-white/70 leading-relaxed max-w-xl mx-auto px-4">
          <p className="font-semibold text-white text-base sm:text-xl mb-2 sm:mb-3">
            Because it’s not outsourced. <span className="text-[#adfa3b]">It’s built in-house.</span>
          </p>
          <p className="text-xs sm:text-base text-white/60 font-bold">
            With our own studio and production team, we create everything—from podcasts and reels to ads that actually perform.
          </p>
        </div>
      </div>

      {/* Video Container with Animation Ref */}
      <div 
        ref={videoWrapperRef}
        className="relative z-10 w-full max-w-6xl mx-auto rounded-[2rem] overflow-hidden shadow-[0_20px_100px_rgba(0,0,0,0.8)] border border-white/10 group group-hover:border-white/20 transition-colors duration-500 bg-[#07030f] origin-center"
      >
        
        <video 
          className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
          src="/clientlogos/nearby-studio-tour.mp4"
          ref={(el) => {
            if (!el) return;
            const io = new IntersectionObserver(([entry]) => {
              if (entry.isIntersecting) { el.play().catch(() => {}); }
              else { el.pause(); }
            }, { threshold: 0.25 });
            io.observe(el);
          }}
          loop
          muted
          playsInline
          preload="none"
        />
        
        {/* Dark gradient overlay so the logo and button pop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
        
        {/* Logo and Button overlay on top of video */}
        <div className="absolute bottom-0 left-0 w-full p-4 sm:p-12 flex flex-row items-center justify-between gap-4 z-20">
          <img 
            src="/clientlogos/Nearby studio_white.webp" 
            alt="Nearby Studio Logo" 
            width="224"
            height="64"
            className="w-24 sm:w-56 object-contain"
            style={{ height: 'auto' }}
          />
          <a 
            href="https://nearbystudio.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 sm:px-8 py-2.5 sm:py-4 bg-white text-black font-bold uppercase tracking-[0.1em] text-[9px] sm:text-sm rounded-full hover:bg-zinc-200 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] whitespace-nowrap"
          >
            Know More <span className="hidden sm:inline">&nbsp;about Studio</span>
          </a>
        </div>
      </div>

    </section>
  );
};

export default NearbyStudioSection;
