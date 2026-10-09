#!/usr/bin/env node

/**
 * Generate icons for Next.js from the source logo
 * This script creates favicon.ico, icon.png, apple-icon.png, and opengraph-image.png
 */

import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SOURCE_LOGO = path.join(import.meta.dirname, '../interface_innovations_logo.png');
const APP_DIR = path.join(import.meta.dirname, '../app');

async function generateIcons() {
  console.log('🎨 Generating icons for Next.js...\n');

  // Ensure app directory exists
  if (!fs.existsSync(APP_DIR)) {
    fs.mkdirSync(APP_DIR, { recursive: true });
  }

  try {
    // Read source image
    const sourceImage = sharp(SOURCE_LOGO);
    const metadata = await sourceImage.metadata();
    console.log(`📷 Source image: ${metadata.width}x${metadata.height}px\n`);

    // 1. Generate favicon.ico (32x32)
    console.log('Generating favicon.ico (32x32)...');
    await sourceImage
      .clone()
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .toFile(path.join(APP_DIR, 'favicon.ico'));
    console.log('✅ favicon.ico created\n');

    // 2. Generate icon.png (512x512 - used for PWA)
    console.log('Generating icon.png (512x512)...');
    await sourceImage
      .clone()
      .resize(512, 512, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(APP_DIR, 'icon.png'));
    console.log('✅ icon.png created\n');

    // 3. Generate apple-icon.png (180x180 - Apple touch icon)
    console.log('Generating apple-icon.png (180x180)...');
    await sourceImage
      .clone()
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(APP_DIR, 'apple-icon.png'));
    console.log('✅ apple-icon.png created\n');

    // 4. Generate opengraph-image.png (1200x630 - Social media preview)
    console.log('Generating opengraph-image.png (1200x630)...');
    
    // Create a canvas with the Open Graph dimensions
    const ogWidth = 1200;
    const ogHeight = 630;
    const logoSize = 400; // Size of the logo on the OG image
    
    // Create a white background and center the logo
    await sharp({
      create: {
        width: ogWidth,
        height: ogHeight,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    })
    .composite([
      {
        input: await sourceImage.clone()
          .resize(logoSize, logoSize, {
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 0 }
          })
          .toBuffer(),
        top: Math.floor((ogHeight - logoSize) / 2),
        left: Math.floor((ogWidth - logoSize) / 2)
      }
    ])
    .png()
    .toFile(path.join(APP_DIR, 'opengraph-image.png'));
    console.log('✅ opengraph-image.png created\n');

    // 5. Generate twitter-image.png (same as opengraph)
    console.log('Generating twitter-image.png (1200x630)...');
    await sharp({
      create: {
        width: ogWidth,
        height: ogHeight,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    })
    .composite([
      {
        input: await sourceImage.clone()
          .resize(logoSize, logoSize, {
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 0 }
          })
          .toBuffer(),
        top: Math.floor((ogHeight - logoSize) / 2),
        left: Math.floor((ogWidth - logoSize) / 2)
      }
    ])
    .png()
    .toFile(path.join(APP_DIR, 'twitter-image.png'));
    console.log('✅ twitter-image.png created\n');

    console.log('🎉 All icons generated successfully!');
    console.log(`📁 Icons saved to: ${APP_DIR}`);
    console.log('\nGenerated files:');
    console.log('  - favicon.ico (32x32)');
    console.log('  - icon.png (512x512)');
    console.log('  - apple-icon.png (180x180)');
    console.log('  - opengraph-image.png (1200x630)');
    console.log('  - twitter-image.png (1200x630)');
    console.log('\n🚀 Next.js will automatically use these icons!');

  } catch (error) {
    console.error('❌ Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons();

