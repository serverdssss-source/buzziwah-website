/* eslint-env node */
// Static prerender (runs after `vite build`).
//
// For every route this writes dist/<route>/index.html with:
//   - page-specific <title>, description, canonical, Open Graph and Twitter tags
//   - JSON-LD schema (BlogPosting + FAQPage + BreadcrumbList for blogs)
//   - the fully rendered article/case study HTML inside #root, so crawlers
//     that don't run JavaScript (GPTBot, ClaudeBot, PerplexityBot…) can read it
// It also writes dist/sitemap.xml and dist/llms.txt.
//
// Data is loaded from the real source modules through Vite, so any blog added
// to BLOGS_DATA (or case study added to CASE_STUDIES_DATA) is picked up
// automatically — no extra SEO entries needed.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const SITE_NAME = 'Buzziwah';

// Routes served by App.jsx that aren't blogs or case studies, mapped to the
// source module App.jsx lazy-loads for them. Keep in sync with App.jsx.
const STATIC_PAGES = {
  '/about': 'src/about/index.jsx',
  '/services': 'src/services/index.jsx',
  '/branding': 'src/branding/index.jsx',
  '/performance-marketing': 'src/performance-marketing/index.jsx',
  '/social-media': 'src/social-media/index.jsx',
  '/seo': 'src/seo/index.jsx',
  '/website-development': 'src/website-development/index.jsx',
  '/content-solution': 'src/content-solution/index.jsx',
  '/video-production': 'src/video-production/index.jsx',
  '/influencer-marketing': 'src/influencer/index.jsx',
  '/outdoor-marketing': 'src/outdoor-marketing/index.jsx',
  '/case-studies': 'src/case-studies/CaseStudiesList.jsx',
  '/seo-case-studies': 'src/case-studies/SeoCaseStudies.jsx',
  '/contact': 'src/contact/index.jsx',
  '/careers': 'src/carrer/carrer.tsx',
  '/blogs': 'src/blogs/BlogsList.jsx',
};
const STATIC_ROUTES = Object.keys(STATIC_PAGES);
const HOME_MODULE = 'src/home/index.jsx';
const PAGE_ENDING_MODULE = 'src/components/PageEnding.jsx';
const NOT_FOUND_MODULE = 'src/components/NotFound.jsx';
// Extra paths App.jsx serves that are aliases of a STATIC_PAGES route
const ROUTE_ALIASES = { '/carrer': '/careers' };

// vercel.json has no catch-all rewrite, so a route without a prerendered file
// would 404 in production. Fail the build if App.jsx routes a path we don't render.
function checkAppRoutes() {
  const app = fs.readFileSync(path.join(ROOT_DIR, 'src/App.jsx'), 'utf-8');
  const routed = [...app.matchAll(/case '(\/[^']*)':/g)].map((m) => m[1]);
  const missing = routed.filter((r) => !STATIC_PAGES[r] && !ROUTE_ALIASES[r]);
  if (missing.length) {
    console.error(`❌ App.jsx routes ${missing.join(', ')} but scripts/prerender.js doesn't render them.`);
    console.error('   Add them to STATIC_PAGES (and PAGE_SEO in src/seo/useSEO.js), or they will 404 on Vercel.');
    process.exit(1);
  }
}

// Mirrors the <PageEnding> rules in App.jsx
function pageEndingProps(routePath) {
  const isCaseStudy = routePath.startsWith('/case-study/');
  const isBlog = routePath.startsWith('/blog/');
  if (routePath === '/about' || isCaseStudy) return null;
  return {
    showContactForm: !['/contact', '/case-studies', '/seo-case-studies'].includes(routePath) && !isBlog,
    isCareers: routePath === '/careers',
  };
}

// ---------- helpers ----------

const escapeHtml = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const decodeEntities = (s) =>
  s.replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"').replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

const htmlToText = (html) =>
  decodeEntities(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();

const elementToText = (el) => htmlToText(renderToStaticMarkup(el));

const truncate = (s, max = 160) =>
  s.length <= max ? s : s.slice(0, s.lastIndexOf(' ', max - 1)).replace(/[,;:.\s]+$/, '') + '…';

const jsonLd = (obj) =>
  `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;

// "September 30, 2026" -> "2026-09-30" (no timezone shift)
function toIsoDate(dateStr) {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return null;
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function breadcrumb(BASE_URL, items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, url], i) => ({
      '@type': 'ListItem', position: i + 1, name, item: BASE_URL + url,
    })),
  };
}

// Pull Q&A pairs out of a blog body: every <h2> ending in "?" becomes a
// question, and the content up to the next <h2>/<hr> becomes its answer.
function extractFaqs(content) {
  const children = React.Children.toArray(content?.props?.children);
  const faqs = [];
  let current = null;
  for (const child of children) {
    if (!React.isValidElement(child)) continue;
    if (child.type === 'h2' || child.type === 'hr') {
      if (current?.answer.length) faqs.push(current);
      current = null;
      if (child.type === 'h2') {
        const q = elementToText(child);
        if (q.endsWith('?')) current = { question: q, answer: [] };
      }
      continue;
    }
    if (current) {
      const text = elementToText(child);
      if (text) current.answer.push(text);
    }
  }
  if (current?.answer.length) faqs.push(current);
  return faqs.map(({ question, answer }) => ({ question, answer: answer.join(' ') }));
}

// CSS + JS chunks a lazily-loaded page needs, so the prerendered markup is
// styled immediately and React can take over without a flash.
function chunkAssets(manifest, entry) {
  const css = new Set();
  const js = new Set();
  const visit = (key) => {
    const chunk = manifest[key];
    if (!chunk) return;
    js.add('/' + chunk.file);
    (chunk.css || []).forEach((f) => css.add('/' + f));
    (chunk.imports || []).forEach(visit);
  };
  visit(entry);
  return { css: [...css], js: [...js] };
}

// ---------- page builder ----------

function buildPage(template, page) {
  const { BASE_URL } = page;
  const url = `${BASE_URL}${page.path}`;
  const image = encodeURI(page.image.startsWith('http') ? page.image : BASE_URL + page.image);

  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/\s*<meta (?:name|property)="(?:description|keywords|og:[^"]+|twitter:[^"]+)"[^>]*>/g, '')
    .replace(/\s*<link rel="canonical"[^>]*>/g, '')
    // Tells applySEO() to leave these head tags alone
    .replace('<html lang="en-IN">', '<html lang="en-IN" data-prerendered>');
  if (page.path !== '/') {
    html = html.replace(/\s*<link rel="preload" href="\/home-digital-marketing-hero-image\.png"[^>]*>/, '');
  }
  if (page.noindex) {
    html = html.replace(/<meta name="(robots|googlebot)" content="[^"]*"/g, '<meta name="$1" content="noindex, follow"');
  }

  const head = [
    `<title>${escapeHtml(page.title)}</title>`,
    `<meta name="description" content="${escapeHtml(page.description)}" />`,
    page.keywords && `<meta name="keywords" content="${escapeHtml(page.keywords)}" />`,
    !page.noindex && `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${page.ogType || 'website'}" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    ...(page.article ? [
      `<meta property="article:published_time" content="${page.article.published}" />`,
      `<meta property="article:modified_time" content="${page.article.modified}" />`,
      `<meta property="article:author" content="${escapeHtml(page.article.author)}" />`,
      `<meta property="article:section" content="${escapeHtml(page.article.section)}" />`,
    ] : []),
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:site" content="@buzziwah" />`,
    `<meta name="twitter:creator" content="@buzziwah" />`,
    `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    page.heroImage && `<link rel="preload" href="${encodeURI(page.heroImage)}" as="image" />`,
    ...(page.assets?.css || []).filter((href) => !template.includes(href)).map((href) => `<link rel="stylesheet" href="${href}" />`),
    ...(page.assets?.js || []).filter((href) => !template.includes(href)).map((href) => `<link rel="modulepreload" href="${href}" />`),
    ...(page.schemas || []).map(jsonLd),
  ].filter(Boolean).join('\n    ');

  html = html.replace('</head>', `    ${head}\n  </head>`);
  if (page.body) html = html.replace('<div id="root"></div>', `<div id="root">${page.body}</div>`);
  return html;
}

function writeRoute(routePath, html) {
  const dir = path.join(DIST_DIR, routePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
}

// ---------- main ----------

async function run() {
  checkAppRoutes();
  const templatePath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found. Did you run vite build?');
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, 'utf-8');
  if (!template.includes('<div id="root"></div>')) {
    console.error('dist/index.html is already prerendered. Run the full `npm run build` instead.');
    process.exit(1);
  }

  const manifestPath = path.join(DIST_DIR, '.vite', 'manifest.json');
  const manifest = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, 'utf-8')) : {};
  if (!Object.keys(manifest).length) console.warn('⚠️  No build manifest found — page CSS/JS won\'t be preloaded');

  const vite = await createServer({
    root: ROOT_DIR,
    logLevel: 'error',
    server: { middlewareMode: true, hmr: false },
    appType: 'custom',
  });

  let blogsMod, casesMod, seoMod, imageMod;
  const pageComponents = {};
  try {
    [blogsMod, casesMod, seoMod, imageMod] = await Promise.all([
      vite.ssrLoadModule('/src/blogs/index.jsx'),
      vite.ssrLoadModule('/src/case-studies/index.jsx'),
      vite.ssrLoadModule('/src/seo/useSEO.js'),
      vite.ssrLoadModule('/src/blogs/blogImage.js'),
    ]);
    for (const mod of [HOME_MODULE, PAGE_ENDING_MODULE, NOT_FOUND_MODULE, ...Object.values(STATIC_PAGES)]) {
      try {
        pageComponents[mod] = (await vite.ssrLoadModule('/' + mod)).default;
      } catch (err) {
        console.warn(`⚠️  Could not load ${mod}: ${err.message.split('\n')[0]}`);
      }
    }
  } finally {
    await vite.close();
  }

  // Renders a page the way App.jsx lays it out (page + optional PageEnding).
  // Falls back to an empty #root (head tags only) if rendering fails.
  const renderBody = (routePath, Component, props = {}) => {
    try {
      let html = renderToStaticMarkup(React.createElement(Component, props));
      const endingProps = pageEndingProps(routePath);
      const PageEnding = pageComponents[PAGE_ENDING_MODULE];
      if (endingProps && PageEnding) html += renderToStaticMarkup(React.createElement(PageEnding, endingProps));
      return html;
    } catch (err) {
      console.warn(`⚠️  Could not render body for ${routePath}: ${err.message.split('\n')[0]}`);
      return '';
    }
  };
  const pageAssets = (routePath, moduleKey) => {
    const own = chunkAssets(manifest, moduleKey);
    if (!pageEndingProps(routePath)) return own;
    const ending = chunkAssets(manifest, PAGE_ENDING_MODULE);
    return { css: [...new Set([...own.css, ...ending.css])], js: [...new Set([...own.js, ...ending.js])] };
  };

  const { BLOGS_DATA, default: BlogPage } = blogsMod;
  const { CASE_STUDIES_DATA, default: CaseStudyPage } = casesMod;
  const { BASE_URL, DEFAULT_IMAGE, PAGE_SEO, SCHEMAS, FAQ_SCHEMAS } = seoMod;

  const today = toIsoDate(new Date().toString());
  const sitemap = [{ loc: '/', lastmod: today, priority: '1.0', changefreq: 'weekly' }];
  let count = 0;

  const orgRef = { '@type': 'Organization', name: SITE_NAME, url: BASE_URL, logo: { '@type': 'ImageObject', url: DEFAULT_IMAGE } };

  // --- Blogs ---
  const blogs = Object.entries(BLOGS_DATA)
    .map(([slug, data]) => ({ slug, ...data, iso: toIsoDate(data.date) || today }))
    .sort((a, b) => b.iso.localeCompare(a.iso));

  for (const blog of blogs) {
    const routePath = `/blog/${blog.slug}`;
    const url = BASE_URL + routePath;
    // Social/schema image: 1200px JPG copy (the original PNGs are several MB)
    const socialImage = imageMod.optimizedBlogImage(blog.image, 'jpg');
    const image = encodeURI(BASE_URL + socialImage);
    const articleText = blog.content ? elementToText(blog.content) : '';
    const faqs = extractFaqs(blog.content);

    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: blog.title,
        description: blog.description,
        image: [image],
        datePublished: blog.iso,
        dateModified: blog.iso,
        author: { '@type': 'Organization', name: blog.author || SITE_NAME, url: BASE_URL },
        publisher: orgRef,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        url,
        articleSection: blog.category,
        inLanguage: 'en-IN',
        wordCount: articleText.split(' ').filter(Boolean).length,
      },
      breadcrumb(BASE_URL, [['Home', ''], ['Blogs', '/blogs'], [blog.title, routePath]]),
    ];
    if (faqs.length) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question', name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      });
    }

    const body = renderBody(routePath, BlogPage, { id: blog.slug });

    writeRoute(routePath, buildPage(template, {
      BASE_URL, path: routePath,
      title: `${blog.title} | ${SITE_NAME}`,
      description: blog.description,
      image: socialImage,
      heroImage: imageMod.optimizedBlogImage(blog.image),
      ogType: 'article',
      article: { published: blog.iso, modified: blog.iso, author: blog.author || SITE_NAME, section: blog.category },
      schemas, body, assets: pageAssets(routePath, 'src/blogs/index.jsx'),
    }));
    sitemap.push({ loc: routePath, lastmod: blog.iso, priority: '0.8', changefreq: 'monthly' });
    count++;
  }

  // --- Case studies ---
  for (const [slug, cs] of Object.entries(CASE_STUDIES_DATA)) {
    const routePath = `/case-study/${slug}`;
    const title = `${cs.client} Case Study${cs.subCategory ? ` — ${cs.subCategory}` : ''} | ${SITE_NAME}`;
    const description = truncate(cs.problem || cs.tagline || `${cs.client} case study by ${SITE_NAME}.`);

    const body = renderBody(routePath, CaseStudyPage, { id: slug });

    writeRoute(routePath, buildPage(template, {
      BASE_URL, path: routePath, title, description,
      image: cs.image || DEFAULT_IMAGE,
      schemas: [
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: `${cs.client} Case Study`,
          description,
          image: cs.image ? [encodeURI(BASE_URL + cs.image)] : undefined,
          author: orgRef,
          publisher: orgRef,
          mainEntityOfPage: { '@type': 'WebPage', '@id': BASE_URL + routePath },
          about: cs.client,
        },
        breadcrumb(BASE_URL, [['Home', ''], ['Case Studies', '/case-studies'], [cs.client, routePath]]),
      ],
      body, assets: pageAssets(routePath, 'src/case-studies/index.jsx'),
    }));
    sitemap.push({ loc: routePath, lastmod: today, priority: '0.8', changefreq: 'monthly' });
    count++;
  }

  // --- Static pages ---
  const buildStaticPage = (routePath, moduleKey, extra = {}) => {
    const seo = PAGE_SEO[routePath];
    const Component = pageComponents[moduleKey];
    return buildPage(template, {
      BASE_URL, path: routePath,
      title: seo.title, description: seo.description, keywords: seo.keywords,
      image: seo.image || DEFAULT_IMAGE,
      schemas: [...(SCHEMAS[routePath] || []), ...(FAQ_SCHEMAS[routePath] ? [FAQ_SCHEMAS[routePath]] : [])],
      body: Component ? renderBody(routePath, Component) : '',
      assets: pageAssets(routePath, moduleKey),
      ...extra,
    });
  };

  for (const routePath of STATIC_ROUTES) {
    if (!PAGE_SEO[routePath]) {
      console.warn(`⚠️  No PAGE_SEO entry for ${routePath} — skipped`);
      continue;
    }
    const html = buildStaticPage(routePath, STATIC_PAGES[routePath]);
    writeRoute(routePath, html);
    // Aliases (e.g. the misspelled /carrer) reuse the page; canonical stays on the real URL
    for (const [alias, target] of Object.entries(ROUTE_ALIASES)) {
      if (target === routePath) writeRoute(alias, html);
    }
    const isHub = routePath === '/blogs' || routePath === '/case-studies';
    sitemap.push({
      loc: routePath,
      lastmod: routePath === '/blogs' && blogs.length ? blogs[0].iso : today,
      priority: '0.9', changefreq: isHub ? 'weekly' : 'monthly',
    });
    count++;
  }

  // --- 404 page (Vercel serves dist/404.html with a 404 status for unknown URLs) ---
  const NotFound = pageComponents[NOT_FOUND_MODULE];
  fs.writeFileSync(path.join(DIST_DIR, '404.html'), buildPage(template, {
    BASE_URL, path: '/404',
    title: `Page Not Found | ${SITE_NAME}`,
    description: PAGE_SEO['/'].description,
    image: DEFAULT_IMAGE,
    noindex: true,
    body: NotFound ? renderBody('/404', NotFound) : '',
    assets: pageAssets('/404', NOT_FOUND_MODULE),
  }), 'utf-8');

  // --- Homepage (written last: dist/index.html is the template above) ---
  fs.writeFileSync(templatePath, buildStaticPage('/', HOME_MODULE), 'utf-8');
  count++;

  // --- sitemap.xml ---
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    sitemap.map((u) =>
      `  <url>\n    <loc>${BASE_URL}${u.loc === '/' ? '/' : u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>\n`
    ).join('') + `</urlset>\n`;
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), xml, 'utf-8');

  // --- llms.txt (site summary for AI assistants) ---
  const llms = [
    `# ${SITE_NAME}`,
    '',
    `> ${PAGE_SEO['/'].description}`,
    '',
    '## Services',
    ...STATIC_ROUTES.filter((r) => PAGE_SEO[r] && !['/blogs', '/case-studies', '/seo-case-studies', '/contact', '/careers', '/about'].includes(r))
      .map((r) => `- [${PAGE_SEO[r].title}](${BASE_URL}${r}): ${PAGE_SEO[r].description}`),
    '',
    '## Blog',
    ...blogs.map((b) => `- [${b.title}](${BASE_URL}/blog/${b.slug}) (${b.iso}): ${b.description}`),
    '',
    '## Case Studies',
    ...Object.entries(CASE_STUDIES_DATA).map(([slug, cs]) => `- [${cs.client}](${BASE_URL}/case-study/${slug}): ${truncate(cs.problem || cs.tagline || '', 200)}`),
    '',
    '## Company',
    `- [About](${BASE_URL}/about)`,
    `- [Contact](${BASE_URL}/contact)`,
    '',
  ].join('\n');
  fs.writeFileSync(path.join(DIST_DIR, 'llms.txt'), llms, 'utf-8');

  // Build manifest isn't needed at runtime
  fs.rmSync(path.join(DIST_DIR, '.vite'), { recursive: true, force: true });

  console.log(`✅ Prerendered ${count} pages (${blogs.length} blogs), sitemap.xml (${sitemap.length} URLs) and llms.txt`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
