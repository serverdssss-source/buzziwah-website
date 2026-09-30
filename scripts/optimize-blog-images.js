/* eslint-env node */
// Makes web-sized copies of every blog image. Originals in public/blog_imgs
// are never modified; copies go to public/blog_imgs/optimized/:
//   <name>.webp  — shown on the site (max 1600px wide)
//   <name>.jpg   — social previews / og:image (1200px wide, WhatsApp-friendly)
// Only new or changed images are processed, so this is fast to run on every build.

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.resolve(__dirname, '../public/blog_imgs');
const OUT_DIR = path.join(SRC_DIR, 'optimized');
const INPUT_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp']);

const isFresh = (out, input) =>
  fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(input).mtimeMs;

async function run() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const files = fs.readdirSync(SRC_DIR).filter((f) => INPUT_EXT.has(path.extname(f).toLowerCase()));
  let made = 0;
  let before = 0;
  let after = 0;

  for (const file of files) {
    const input = path.join(SRC_DIR, file);
    const name = path.parse(file).name;
    const webp = path.join(OUT_DIR, `${name}.webp`);
    const jpg = path.join(OUT_DIR, `${name}.jpg`);
    if (isFresh(webp, input) && isFresh(jpg, input)) continue;

    await sharp(input)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 })
      .toFile(webp);
    await sharp(input)
      .resize({ width: 1200, withoutEnlargement: true })
      .flatten({ background: '#060811' })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(jpg);

    before += fs.statSync(input).size;
    after += fs.statSync(webp).size;
    made++;
  }

  if (made) {
    const mb = (n) => (n / 1024 / 1024).toFixed(1);
    console.log(`✅ Optimized ${made} blog image(s): ${mb(before)} MB → ${mb(after)} MB (WebP)`);
  } else {
    console.log('✅ Blog images already optimized');
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
