# 🎥 Video Optimization Guide

## Current Video Usage & Sizes

### Total Video Size: ~78 MB

| File | Size | Location | Usage |
|------|------|----------|-------|
| **Showreel_SSD.mp4** | 36 MB | `/public/` | Hero section (NOT USED - can delete) |
| **section 4 video.mov** | 15 MB | `/public/` | Unknown usage |
| **Nearby studio_Studio tour 1.mp4** | 6.9 MB | `/public/clientlogos/` | NearbyStudioSection |
| **ramesh arvind.mp4** | 5.9 MB | `/public/PROJECTS HOME PAGE/` | Projects carousel |
| **kovedaa.mp4** | 3.0 MB | `/public/PROJECTS HOME PAGE/` | Projects carousel |
| **aanya.mp4** | 3.0 MB | `/public/PROJECTS HOME PAGE/` | Projects carousel |
| **tent cenima.mp4** | 2.6 MB | `/public/PROJECTS HOME PAGE/` | Projects carousel |
| **wmn.mp4** | 2.3 MB | `/public/PROJECTS HOME PAGE/` | Projects carousel |
| **hearphon.mp4** | 1.3 MB | `/public/PROJECTS HOME PAGE/` | Projects carousel |
| **section 4.mp4** | 1.2 MB | `/public/` | Unknown usage |
| **section 4 bg an video.mp4** | 1.0 MB | `/public/` | Unknown usage |
| **webdev-demo.mp4** | 520 KB | `/public/` | WebDev Section 3 |
| **webdev-demo2.mp4** | 472 KB | `/public/` | Unknown usage |

### External Videos (from sripadastudiosdigital.com)
- Performance marketing page: 2 videos
- Social media page: 6+ reel videos

---

## 🎯 Optimization Strategy

### Option 1: Replace Videos with Poster Images (RECOMMENDED)

**Best for**: Project carousel cards
**Savings**: ~18 MB → ~500 KB (96% reduction)
**Quality**: No loss, better UX

#### Why This Works:
- Videos in project cards only show on hover
- Most users never see them
- Static images load instantly
- Much better mobile performance

#### Implementation:

1. **Create high-quality poster images** from video frames:
```bash
# Extract frame from each video
ffmpeg -i "ramesh arvind.mp4" -ss 00:00:01 -vframes 1 -q:v 2 "ramesh arvind-poster.jpg"
ffmpeg -i "kovedaa.mp4" -ss 00:00:01 -vframes 1 -q:v 2 "kovedaa-poster.jpg"
ffmpeg -i "aanya.mp4" -ss 00:00:01 -vframes 1 -q:v 2 "aanya-poster.jpg"
ffmpeg -i "tent cenima.mp4" -ss 00:00:01 -vframes 1 -q:v 2 "tent cenima-poster.jpg"
ffmpeg -i "wmn.mp4" -ss 00:00:01 -vframes 1 -q:v 2 "wmn-poster.jpg"
ffmpeg -i "hearphon.mp4" -ss 00:00:01 -vframes 1 -q:v 2 "hearphon-poster.jpg"

# Convert to WebP for even smaller size
magick "ramesh arvind-poster.jpg" -quality 85 "ramesh arvind-poster.webp"
# Repeat for all...
```

2. **Update projects.jsx** to use images instead of videos:
```jsx
const CARDS = [
    {
        id: 1,
        title: "Aanya Hospital",
        tag: "Branding · Digital",
        url: "/case-study/aanya-hospital",
        img: "/PROJECTS HOME PAGE /aanya-poster.webp", // Changed
        // video: "/PROJECTS HOME PAGE /aanya.mp4" // Removed
    },
    // ... repeat for all cards
];
```

3. **Update the Card component** to remove video logic:
```jsx
// Remove video state and hover handlers
// Just show the image
<img src={card.img} alt={card.title} />
```

**Expected Result**: 18 MB → 500 KB (36x smaller!)

---

### Option 2: Optimize Videos (Keep Videos)

**Best for**: Videos that must stay (like Nearby Studio)
**Savings**: ~50-70% file size reduction
**Quality**: Minimal visible loss

#### Optimization Commands:

```bash
# Install FFmpeg if not installed
brew install ffmpeg

# Optimize project videos (reduce to 1 Mbps, 720p)
ffmpeg -i "ramesh arvind.mp4" -vf "scale=-2:720" -c:v libx264 -b:v 1M -c:a aac -b:a 128k "ramesh arvind-optimized.mp4"
ffmpeg -i "kovedaa.mp4" -vf "scale=-2:720" -c:v libx264 -b:v 1M -c:a aac -b:a 128k "kovedaa-optimized.mp4"
ffmpeg -i "aanya.mp4" -vf "scale=-2:720" -c:v libx264 -b:v 1M -c:a aac -b:a 128k "aanya-optimized.mp4"
ffmpeg -i "tent cenima.mp4" -vf "scale=-2:720" -c:v libx264 -b:v 1M -c:a aac -b:a 128k "tent cenima-optimized.mp4"
ffmpeg -i "wmn.mp4" -vf "scale=-2:720" -c:v libx264 -b:v 1M -c:a aac -b:a 128k "wmn-optimized.mp4"
ffmpeg -i "hearphon.mp4" -vf "scale=-2:720" -c:v libx264 -b:v 800k -c:a aac -b:a 128k "hearphon-optimized.mp4"

# Optimize Nearby Studio video (larger, keep 1080p)
ffmpeg -i "Nearby studio_Studio tour 1.mp4" -vf "scale=-2:1080" -c:v libx264 -b:v 2M -c:a aac -b:a 128k "Nearby studio_Studio tour 1-optimized.mp4"

# Optimize webdev demo (already small, just re-encode)
ffmpeg -i "webdev-demo.mp4" -c:v libx264 -b:v 500k -c:a aac -b:a 128k "webdev-demo-optimized.mp4"
```

**Expected Result**: 78 MB → 25-30 MB (60% reduction)

---

### Option 3: Hybrid Approach (BEST BALANCE)

1. **Replace project carousel videos with images** (18 MB → 500 KB)
2. **Keep and optimize Nearby Studio video** (6.9 MB → 2 MB)
3. **Keep and optimize webdev demo** (520 KB → 300 KB)
4. **Delete unused videos** (Showreel_SSD.mp4, section 4 videos)

**Total Savings**: 78 MB → 3 MB (96% reduction!)

---

## 🚀 Recommended Action Plan

### Step 1: Delete Unused Videos (52 MB saved)

```bash
cd /Users/ssmacmini04/Documents/GitHub/bAZZIWAH/public

# These are not used anywhere
rm "Showreel_SSD.mp4"  # 36 MB
rm "section 4 video.mov"  # 15 MB
rm "section 4.mp4"  # 1.2 MB
rm "section 4 bg an video.mp4"  # 1 MB (if not used)
rm "webdev-demo2.mp4"  # 472 KB (if not used)
```

### Step 2: Replace Project Videos with Images (18 MB → 500 KB)

```bash
cd "/Users/ssmacmini04/Documents/GitHub/bAZZIWAH/public/PROJECTS HOME PAGE "

# Extract poster frames
ffmpeg -i "ramesh arvind.mp4" -ss 00:00:01 -vframes 1 -q:v 2 "ramesh arvind-poster.jpg"
ffmpeg -i "kovedaa.mp4" -ss 00:00:01 -vframes 1 -q:v 2 "kovedaa-poster.jpg"
ffmpeg -i "aanya.mp4" -ss 00:00:01 -vframes 1 -q:v 2 "aanya-poster.jpg"
ffmpeg -i "tent cenima.mp4" -ss 00:00:01 -vframes 1 -q:v 2 "tent cenima-poster.jpg"
ffmpeg -i "wmn.mp4" -ss 00:00:01 -vframes 1 -q:v 2 "wmn-poster.jpg"
ffmpeg -i "hearphon.mp4" -ss 00:00:01 -vframes 1 -q:v 2 "hearphon-poster.jpg"

# Convert to WebP
for file in *-poster.jpg; do
  magick "$file" -quality 85 "${file%.jpg}.webp"
done

# Optional: Delete original videos after confirming images look good
# rm *.mp4
```

### Step 3: Update projects.jsx

```jsx
const CARDS = [
    {
        id: 1,
        title: "Aanya Hospital",
        tag: "Branding · Digital",
        url: "/case-study/aanya-hospital",
        img: "/PROJECTS HOME PAGE /aanya-poster.webp",
    },
    {
        id: 2,
        title: "Ramesh Aravind",
        tag: "Branding · Social",
        url: "/case-study/ramesh-arvind",
        img: "/PROJECTS HOME PAGE /ramesh arvind-poster.webp",
    },
    {
        id: 3,
        title: "HearFon",
        tag: "Video · Production",
        url: "/case-study/hearfon",
        img: "/PROJECTS HOME PAGE /hearphon-poster.webp",
    },
    {
        id: 4,
        title: "WMN",
        tag: "Web · Marketing",
        url: "/case-study/wmn-healthcare",
        img: "/PROJECTS HOME PAGE /wmn-poster.webp",
    },
    {
        id: 5,
        title: "Tent Cinema",
        tag: "Social · Leads",
        url: "/case-study/tent-cinema",
        img: "/PROJECTS HOME PAGE /tent cenima-poster.webp",
    },
    {
        id: 6,
        title: "Kovedaa",
        tag: "Branding · Web",
        url: "/case-study/kovedaa",
        img: "/PROJECTS HOME PAGE /kovedaa-poster.webp",
    },
];
```

### Step 4: Optimize Remaining Videos

```bash
# Optimize Nearby Studio video
cd /Users/ssmacmini04/Documents/GitHub/bAZZIWAH/public/clientlogos
ffmpeg -i "Nearby studio_Studio tour 1.mp4" -vf "scale=-2:1080" -c:v libx264 -b:v 2M -c:a aac -b:a 128k "Nearby studio_Studio tour 1-opt.mp4"

# Test the optimized version, then replace
mv "Nearby studio_Studio tour 1-opt.mp4" "Nearby studio_Studio tour 1.mp4"

# Optimize webdev demo
cd /Users/ssmacmini04/Documents/GitHub/bAZZIWAH/public
ffmpeg -i "webdev-demo.mp4" -c:v libx264 -b:v 500k -c:a aac -b:a 128k "webdev-demo-opt.mp4"
mv "webdev-demo-opt.mp4" "webdev-demo.mp4"
```

---

## 📊 Expected Results

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| **Total Video Size** | 78 MB | 3 MB | **96% reduction** |
| **Project Videos** | 18 MB | 500 KB | **97% reduction** |
| **Unused Videos** | 52 MB | 0 MB | **100% removed** |
| **Page Load Time** | Slow | Fast | **5-10x faster** |
| **Mobile Performance** | Poor | Good | **Huge improvement** |

---

## 🎬 Video Best Practices

### When to Use Videos:
- ✅ Hero sections (but use poster + lazy load)
- ✅ Product demos (optimize heavily)
- ✅ Background ambiance (muted, optimized)

### When to Use Images Instead:
- ✅ Project cards/thumbnails
- ✅ Portfolio items
- ✅ Testimonials
- ✅ Case study previews

### Optimization Settings:
```bash
# For small preview videos (project cards)
-vf "scale=-2:720" -b:v 800k-1M

# For feature videos (hero, demos)
-vf "scale=-2:1080" -b:v 2M-3M

# For background videos
-vf "scale=-2:720" -b:v 1M-1.5M

# Always include
-c:v libx264  # H.264 codec (best compatibility)
-c:a aac -b:a 128k  # Audio codec
-movflags +faststart  # Enable streaming
```

---

## 🔧 Automation Script

Create `scripts/optimize-videos.sh`:

```bash
#!/bin/bash

echo "🎥 Optimizing videos..."

# Project videos → posters
cd "public/PROJECTS HOME PAGE "
for video in *.mp4; do
  name="${video%.mp4}"
  echo "Creating poster for $video..."
  ffmpeg -i "$video" -ss 00:00:01 -vframes 1 -q:v 2 "${name}-poster.jpg" -y
  magick "${name}-poster.jpg" -quality 85 "${name}-poster.webp"
  rm "${name}-poster.jpg"
done

# Optimize Nearby Studio
cd ../clientlogos
ffmpeg -i "Nearby studio_Studio tour 1.mp4" \
  -vf "scale=-2:1080" -c:v libx264 -b:v 2M \
  -c:a aac -b:a 128k -movflags +faststart \
  "Nearby studio_Studio tour 1-opt.mp4" -y
mv "Nearby studio_Studio tour 1-opt.mp4" "Nearby studio_Studio tour 1.mp4"

echo "✅ Done!"
```

---

## ⚠️ Important Notes

1. **Test Before Deleting**: Always test optimized versions before deleting originals
2. **Keep Backups**: Keep original videos in a backup folder
3. **Check Quality**: View optimized videos on different devices
4. **Update Components**: Remember to update React components after changes
5. **Clear Cache**: Clear browser cache after deploying changes

---

## 🎯 Priority Order

1. **🔥 CRITICAL**: Delete unused videos (52 MB saved, 5 minutes)
2. **🔥 CRITICAL**: Replace project videos with images (18 MB → 500 KB, 15 minutes)
3. **⚠️ HIGH**: Optimize Nearby Studio video (6.9 MB → 2 MB, 5 minutes)
4. **⚠️ MEDIUM**: Optimize webdev demo (520 KB → 300 KB, 2 minutes)

**Total Time**: ~30 minutes
**Total Savings**: 75 MB (96% reduction)
**Performance Impact**: Massive improvement!
