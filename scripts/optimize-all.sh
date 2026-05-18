#!/bin/bash

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "🚀 Buzziwah Performance Optimization Script"
echo "==========================================="
echo ""

# Check if required tools are installed
command -v ffmpeg >/dev/null 2>&1 || { echo -e "${RED}❌ FFmpeg is not installed. Install with: brew install ffmpeg${NC}"; exit 1; }
command -v magick >/dev/null 2>&1 || { echo -e "${RED}❌ ImageMagick is not installed. Install with: brew install imagemagick${NC}"; exit 1; }

echo -e "${GREEN}✓ All required tools are installed${NC}"
echo ""

# Navigate to project root
cd "$(dirname "$0")/.." || exit

# Create backup directory
BACKUP_DIR="backup_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"
echo -e "${YELLOW}📦 Backup directory created: $BACKUP_DIR${NC}"
echo ""

# ============================================
# PART 1: OPTIMIZE CRITICAL HERO IMAGES
# ============================================
echo -e "${GREEN}🖼️  PART 1: Optimizing Hero Images${NC}"
echo "-----------------------------------"

cd public || exit

# 1. BEGIDN THE BUZZ.png (1.5 MB → ~150 KB)
if [ -f "BEGIDN THE BUZZ.png" ]; then
    echo "Processing: BEGIDN THE BUZZ.png"
    cp "BEGIDN THE BUZZ.png" "../$BACKUP_DIR/"
    magick "BEGIDN THE BUZZ.png" -resize 760x428 -quality 85 -define webp:method=6 "BEGIDN THE BUZZ.webp"
    echo -e "${GREEN}✓ Created BEGIDN THE BUZZ.webp${NC}"
fi

# 2. image.png (1.1 MB → ~120 KB)
if [ -f "image.png" ]; then
    echo "Processing: image.png"
    cp "image.png" "../$BACKUP_DIR/"
    magick "image.png" -resize 758x948 -quality 85 -define webp:method=6 "image.webp"
    echo -e "${GREEN}✓ Created image.webp${NC}"
fi

# 3. logo.png (762 KB → ~80 KB)
if [ -f "logo.png" ]; then
    echo "Processing: logo.png"
    cp "logo.png" "../$BACKUP_DIR/"
    magick "logo.png" -resize 700x876 -quality 85 -define webp:method=6 "logo.webp"
    echo -e "${GREEN}✓ Created logo.webp${NC}"
fi

# 4. Buzziwah_FInal_Logo_White.png (122 KB → ~15 KB)
if [ -f "Buzziwah_FInal_Logo_White.png" ]; then
    echo "Processing: Buzziwah_FInal_Logo_White.png"
    cp "Buzziwah_FInal_Logo_White.png" "../$BACKUP_DIR/"
    magick "Buzziwah_FInal_Logo_White.png" -resize 360x90 -quality 85 -define webp:method=6 "Buzziwah_FInal_Logo_White.webp"
    echo -e "${GREEN}✓ Created Buzziwah_FInal_Logo_White.webp${NC}"
fi

echo ""

# ============================================
# PART 2: OPTIMIZE GRID IMAGES (CRITICAL!)
# ============================================
echo -e "${GREEN}🎨 PART 2: Optimizing Grid Images (9.7 MB → ~800 KB)${NC}"
echo "---------------------------------------------------"

cd grid || exit

for file in *.png; do
    if [ -f "$file" ]; then
        echo "Processing: $file"
        cp "$file" "../../$BACKUP_DIR/"
        magick "$file" -resize 800x800 -quality 85 -define webp:method=6 "${file%.png}.webp"
        echo -e "${GREEN}✓ Created ${file%.png}.webp${NC}"
    fi
done

cd .. || exit
echo ""

# ============================================
# PART 3: OPTIMIZE CASE STUDY IMAGES
# ============================================
echo -e "${GREEN}📁 PART 3: Optimizing Case Study Images${NC}"
echo "---------------------------------------"

cd "best works" || exit

if [ -f "srichakra_case.png" ]; then
    echo "Processing: srichakra_case.png"
    cp "srichakra_case.png" "../../$BACKUP_DIR/"
    magick "srichakra_case.png" -resize 328x328 -quality 85 -define webp:method=6 "srichakra_case.webp"
    echo -e "${GREEN}✓ Created srichakra_case.webp${NC}"
fi

cd .. || exit
echo ""

# ============================================
# PART 4: OPTIMIZE PROJECT VIDEOS
# ============================================
echo -e "${GREEN}🎬 PART 4: Optimizing Project Videos (18 MB → 5 MB)${NC}"
echo "--------------------------------------------------"

cd "PROJECTS HOME PAGE " || exit

# Backup videos
mkdir -p "../../$BACKUP_DIR/PROJECTS HOME PAGE "

# Optimize each video
for video in *.mp4; do
    if [ -f "$video" ]; then
        echo "Processing: $video"
        cp "$video" "../../$BACKUP_DIR/PROJECTS HOME PAGE /"
        
        # Optimize: 720p, 1 Mbps, fast encode
        ffmpeg -i "$video" \
            -vf "scale=-2:720" \
            -c:v libx264 \
            -b:v 1M \
            -preset fast \
            -c:a aac \
            -b:a 128k \
            -movflags +faststart \
            "${video%.mp4}-opt.mp4" \
            -y -loglevel error
        
        # Replace original with optimized
        mv "${video%.mp4}-opt.mp4" "$video"
        echo -e "${GREEN}✓ Optimized $video${NC}"
    fi
done

cd .. || exit
echo ""

# ============================================
# PART 5: OPTIMIZE NEARBY STUDIO VIDEO
# ============================================
echo -e "${GREEN}🏢 PART 5: Optimizing Nearby Studio Video (6.9 MB → 2 MB)${NC}"
echo "--------------------------------------------------------"

cd clientlogos || exit

if [ -f "Nearby studio_Studio tour 1.mp4" ]; then
    echo "Processing: Nearby studio_Studio tour 1.mp4"
    cp "Nearby studio_Studio tour 1.mp4" "../../$BACKUP_DIR/"
    
    ffmpeg -i "Nearby studio_Studio tour 1.mp4" \
        -vf "scale=-2:1080" \
        -c:v libx264 \
        -b:v 2M \
        -preset fast \
        -c:a aac \
        -b:a 128k \
        -movflags +faststart \
        "Nearby studio_Studio tour 1-opt.mp4" \
        -y -loglevel error
    
    mv "Nearby studio_Studio tour 1-opt.mp4" "Nearby studio_Studio tour 1.mp4"
    echo -e "${GREEN}✓ Optimized Nearby studio_Studio tour 1.mp4${NC}"
fi

# Optimize webp if needed
if [ -f "Nearby studio_white.webp" ]; then
    echo "Processing: Nearby studio_white.webp"
    cp "Nearby studio_white.webp" "../../$BACKUP_DIR/"
    magick "Nearby studio_white.webp" -resize 192x66 -quality 85 -define webp:method=6 "Nearby studio_white-opt.webp"
    mv "Nearby studio_white-opt.webp" "Nearby studio_white.webp"
    echo -e "${GREEN}✓ Optimized Nearby studio_white.webp${NC}"
fi

cd .. || exit
echo ""

# ============================================
# PART 6: OPTIMIZE WEBDEV DEMO
# ============================================
echo -e "${GREEN}💻 PART 6: Optimizing WebDev Demo Video${NC}"
echo "---------------------------------------"

if [ -f "webdev-demo.mp4" ]; then
    echo "Processing: webdev-demo.mp4"
    cp "webdev-demo.mp4" "../$BACKUP_DIR/"
    
    ffmpeg -i "webdev-demo.mp4" \
        -c:v libx264 \
        -b:v 500k \
        -preset fast \
        -c:a aac \
        -b:a 128k \
        -movflags +faststart \
        "webdev-demo-opt.mp4" \
        -y -loglevel error
    
    mv "webdev-demo-opt.mp4" "webdev-demo.mp4"
    echo -e "${GREEN}✓ Optimized webdev-demo.mp4${NC}"
fi

echo ""

# ============================================
# SUMMARY
# ============================================
echo ""
echo -e "${GREEN}✅ OPTIMIZATION COMPLETE!${NC}"
echo "========================="
echo ""
echo "📊 Expected Results:"
echo "  • Hero images: 3.5 MB → ~400 KB (89% reduction)"
echo "  • Grid images: 9.7 MB → ~800 KB (92% reduction)"
echo "  • Project videos: 18 MB → ~5 MB (72% reduction)"
echo "  • Nearby Studio: 6.9 MB → ~2 MB (71% reduction)"
echo "  • Total savings: ~30 MB (70% reduction)"
echo ""
echo "📁 Backups saved in: $BACKUP_DIR"
echo ""
echo -e "${YELLOW}⚠️  NEXT STEPS:${NC}"
echo "  1. Update React components to use .webp images"
echo "  2. Add width/height attributes to all images"
echo "  3. Test the site locally: npm run build && npm run preview"
echo "  4. Deploy and re-run Lighthouse"
echo ""
echo -e "${GREEN}Expected Performance Score: 84 → 95+${NC}"
echo -e "${GREEN}Expected LCP: 36.7s → <2.5s${NC}"
echo ""
