import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, dirname, extname, basename } from 'path';
import { existsSync } from 'fs';

const QUALITY = 85;
const EFFORT = 6;

// Define target dimensions for specific images
const imageDimensions = {
  'BEGIDN THE BUZZ.png': { width: 1610, height: 906 },
  'image.png': { width: 1488, height: 1860 },
  'logo.png': { width: 760, height: 950 },
  'Buzziwah_FInal_Logo_White.png': { width: 360, height: 90 },
  'Nearby studio_white.webp': { width: 448, height: 156 },
};

// Grid images should be 800x800
const gridDimensions = { width: 800, height: 800 };

async function optimizeImage(inputPath, outputPath, targetWidth, targetHeight) {
  try {
    const metadata = await sharp(inputPath).metadata();
    
    // Skip if already WebP and correct size
    if (metadata.format === 'webp' && 
        metadata.width === targetWidth && 
        metadata.height === targetHeight) {
      console.log(`⊘ Skipped (already optimized): ${inputPath}`);
      return;
    }

    await sharp(inputPath)
      .resize(targetWidth, targetHeight, { 
        fit: 'inside', 
        withoutEnlargement: false 
      })
      .webp({ quality: QUALITY, effort: EFFORT })
      .toFile(outputPath);
    
    const inputStats = await stat(inputPath);
    const outputStats = await stat(outputPath);
    const savings = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(1);
    
    console.log(`✓ Optimized: ${basename(inputPath)}`);
    console.log(`  ${(inputStats.size / 1024).toFixed(1)} KB → ${(outputStats.size / 1024).toFixed(1)} KB (${savings}% savings)`);
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error.message);
  }
}

async function processDirectory(dir, isGridDir = false) {
  try {
    const files = await readdir(dir);
    
    for (const file of files) {
      const filePath = join(dir, file);
      const fileStat = await stat(filePath);
      
      if (fileStat.isDirectory()) {
        // Check if this is the grid directory
        const isGrid = basename(dir) === 'grid' || isGridDir;
        await processDirectory(filePath, isGrid);
      } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
        const outputPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
        
        // Determine target dimensions
        let targetWidth, targetHeight;
        
        if (imageDimensions[file]) {
          // Specific image with defined dimensions
          targetWidth = imageDimensions[file].width;
          targetHeight = imageDimensions[file].height;
        } else if (isGridDir) {
          // Grid images
          targetWidth = gridDimensions.width;
          targetHeight = gridDimensions.height;
        } else {
          // Default: resize to 50% of original for general optimization
          const metadata = await sharp(filePath).metadata();
          targetWidth = Math.round(metadata.width * 0.5);
          targetHeight = Math.round(metadata.height * 0.5);
        }
        
        await optimizeImage(filePath, outputPath, targetWidth, targetHeight);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');
  
  const publicDir = './public';
  
  if (!existsSync(publicDir)) {
    console.error('Error: public directory not found');
    process.exit(1);
  }
  
  await processDirectory(publicDir);
  
  console.log('\n✅ Image optimization complete!');
  console.log('\nNext steps:');
  console.log('1. Update React components to use .webp images');
  console.log('2. Add width/height attributes to all <img> tags');
  console.log('3. Add loading="lazy" to below-fold images');
  console.log('4. Add fetchpriority="high" to LCP image');
  console.log('5. Run Lighthouse audit to verify improvements');
}

main().catch(console.error);
