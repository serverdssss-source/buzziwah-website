import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

// Site-wide "pre-orders are open" popup for the Sripada Studios 2027 Kannada meme calendar.
// Ported from sswebsite (components/preorder-popup.tsx). Shows 2 seconds after every
// page load/refresh; closes only via the close button or one of the CTA links.
// The shop lives on sripadastudios.com, so all links are absolute and open in a new tab.

const DELAY_MS = 2000;
const SHOP_URL = 'https://www.sripadastudios.com';

const PRODUCT = {
  slug: '2027-kannada-meme-table-top-calendar',
  shortTitle: 'Kannada Meme Calendar',
  year: 2027,
  price: 199,
  mrp: 300,
  image: '/preorder/table_top_calendar_2027.webp',
  imageAlt: '2027 Kannada Meme Calendar - Table Top Desk Calendar by Sripada Studios',
};

const PREORDER_URL = `${SHOP_URL}/calendar/${PRODUCT.slug}/preorder`;
const SHOP_PAGE_URL = `${SHOP_URL}/calendar`;

export default function PreorderPopup() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false); // drives the enter animation
  const closeRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  // Hard scroll lock while open. Some pages use Lenis smooth scrolling, which listens
  // to wheel/touch directly, so block those too.
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const body = document.body;
    const prev = { html: html.style.overflow, body: body.style.overflow };
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    const block = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    const opts = { capture: true, passive: false };
    window.addEventListener('wheel', block, opts);
    window.addEventListener('touchmove', block, opts);

    const raf = requestAnimationFrame(() => {
      setVisible(true);
      closeRef.current?.focus();
    });

    return () => {
      cancelAnimationFrame(raf);
      html.style.overflow = prev.html;
      body.style.overflow = prev.body;
      window.removeEventListener('wheel', block, opts);
      window.removeEventListener('touchmove', block, opts);
    };
  }, [open]);

  const close = () => {
    setVisible(false);
    setTimeout(() => setOpen(false), 200);
  };

  if (!open) return null;

  const discount = Math.round(((PRODUCT.mrp - PRODUCT.price) / PRODUCT.mrp) * 100);

  return createPortal(
    <>
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-[1000] bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="preorder-popup-title"
        aria-describedby="preorder-popup-desc"
        className={`fixed left-1/2 top-1/2 z-[1001] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1.5rem] border-[3px] border-[#f5f5f3] bg-[#f3f8f8] font-sans text-[#0b0b0f] shadow-[0_30px_60px_-20px_rgb(0_0_0/0.7)] transition-all duration-300 ${visible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
      >
        <button
          ref={closeRef}
          type="button"
          aria-label="Close"
          onClick={close}
          className="absolute right-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-full bg-[#0b0b0f] text-[#f5f5f3] transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5a623]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {/* Product image */}
        <div className="relative h-56 w-full bg-[#e6f1f2] sm:h-64">
          <img
            src={PRODUCT.image}
            alt={PRODUCT.imageAlt}
            width="900"
            height="1125"
            className="absolute inset-0 h-full w-full object-contain p-4"
          />
          <span className="absolute left-4 top-4 -rotate-6 rounded-full bg-[#f5a623] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.11em] shadow-[0_9px_20px_-10px_rgb(0_0_0/0.5)]">
            Pre-orders open
          </span>
        </div>

        <div className="flex flex-col gap-3 p-6 pt-5">
          <p className="m-0 text-xs font-bold uppercase tracking-[0.18em] text-[#0f3f45]">
            Innomme · {PRODUCT.year}
          </p>
          <h2 id="preorder-popup-title" className="m-0 text-2xl font-bold leading-tight tracking-[-0.02em]">
            {PRODUCT.year} {PRODUCT.shortTitle} is here!
          </h2>
          <p id="preorder-popup-desc" className="m-0 text-sm text-black/65">
            12 of the most celebrated Kannada film memes, one for every month. Reserve yours today.
          </p>

          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-2xl font-extrabold text-[#0f3f45]">₹{PRODUCT.price}</span>
            <span className="text-sm text-black/45 line-through">₹{PRODUCT.mrp}</span>
            <span className="rounded-full bg-[#0f3f45] px-2 py-0.5 text-xs font-bold text-[#f5f5f3]">
              {discount}% OFF
            </span>
          </div>

          <div className="mt-2 flex flex-col gap-2 sm:flex-row">
            <a
              href={PREORDER_URL}
              target="_blank"
              rel="noopener"
              onClick={close}
              className="flex-1 rounded-full bg-[#0b0b0f] px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.06em] text-[#f5f5f3] no-underline transition-transform hover:-translate-y-0.5"
            >
              Pre-order now
            </a>
            <a
              href={SHOP_PAGE_URL}
              target="_blank"
              rel="noopener"
              onClick={close}
              className="flex-1 rounded-full border-2 border-[#0b0b0f] px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.06em] text-[#0b0b0f] no-underline transition-colors hover:bg-[#0b0b0f] hover:text-[#f5f5f3]"
            >
              View shop
            </a>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}
