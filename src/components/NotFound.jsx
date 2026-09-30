const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/contact', label: 'Contact' },
];

export default function NotFound() {
  return (
    <section
      className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20 text-center text-white"
      style={{ background: '#060811' }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(circle at 50% 40%, rgba(168,85,247,0.18) 0%, transparent 60%)' }}
      />
      <p className="relative mb-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-[#adfa3b]">
        Error 404
      </p>
      <h1
        className="relative mb-6 font-black uppercase leading-none"
        style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", fontSize: 'clamp(56px, 12vw, 140px)', letterSpacing: '0.02em' }}
      >
        Page not <span className="text-[#adfa3b]">found</span>
      </h1>
      <p className="relative mb-10 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Try one of these instead:
      </p>
      <nav className="relative flex flex-wrap justify-center gap-3" aria-label="Helpful links">
        {LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={
              href === '/'
                ? 'rounded-full bg-[#adfa3b] px-6 py-3 text-sm font-bold text-[#060811] transition hover:shadow-[0_0_30px_rgba(173,250,59,0.4)]'
                : 'rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:border-[#adfa3b]/50 hover:text-[#adfa3b]'
            }
          >
            {label}
          </a>
        ))}
      </nav>
    </section>
  );
}
