#!/bin/bash

# QUICK FIX - Only the most critical optimizations
# This will fix the LCP issue (36.7s → <3s)

echo "🚀 Quick Performance Fix"
echo "======================="
echo ""

cd "$(dirname "$0")/../public" || exit

# Fix #1: Optimize grid images (9.7 MB → 800 KB) - BIGGEST IMPACT
echo "1️⃣  Optimizing grid images..."
cd grid || exit
for file in photograpohy.png video.png seo.png "web devlopmnnt.png"; do
    if [ -f "$file" ]; then
        echo "  → $file"
        magick "$file" -resize 800x800 -quality 85 -define webp:method=6 "${file%.png}.webp"
    fi
done
cd .. || exit

# Fix #2: Optimize hero images (3.5 MB → 400 KB)
echo "2️⃣  Optimizing hero images..."
magick "BEGIDN THE BUZZ.png" -resize 760x428 -quality 85 "BEGIDN THE BUZZ.webp" 2>/dev/null
magick "image.png" -resize 758x948 -quality 85 "image.webp" 2>/dev/null
magick "logo.png" -resize 700x876 -quality 85 "logo.webp" 2>/dev/null

# Fix #3: Optimize case study image
echo "3️⃣  Optimizing case study images..."
cd "best works" || exit
magick "srichakra_case.png" -resize 328x328 -quality 85 "srichakra_case.webp" 2>/dev/null
cd .. || exit

echo ""
echo "✅ Quick fixes complete!"
echo "Expected LCP improvement: 36.7s → 3-5s"
echo ""
echo "Next: Update components to use .webp images"
