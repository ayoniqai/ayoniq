const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const publicIconsDir = path.join(__dirname, 'public', 'icons');
const appIconPath = path.join(__dirname, 'app', 'favicon.ico');

const filesToProcess = [
  path.join(publicIconsDir, 'android-chrome-192x192.png'),
  path.join(publicIconsDir, 'android-chrome-512x512.png'),
  path.join(publicIconsDir, 'apple-touch-icon.png'),
  path.join(publicIconsDir, 'favicon-16x16.png'),
  path.join(publicIconsDir, 'favicon-32x32.png'),
];

async function roundImage(filePath) {
  try {
    if (!fs.existsSync(filePath)) return;
    const image = await Jimp.read(filePath);
    
    // Resize to a square just in case, though they should be
    const size = Math.min(image.bitmap.width, image.bitmap.height);
    image.resize(size, size);
    
    // Create a circular mask
    image.circle();
    
    await image.writeAsync(filePath);
    console.log(`Rounded ${filePath}`);
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err);
  }
}

async function main() {
  for (const file of filesToProcess) {
    await roundImage(file);
  }
  
  // For favicon.ico, we can't easily convert to ico with pure jimp 0.22, 
  // but we can round the PNGs. Next.js typically prefers the PNG favicons anyway 
  // (favicon-32x32.png) for modern browsers.
  // We can delete app/favicon.ico and let next.js use the icons from the manifest.
  // Wait, let's keep it simple, just round the PNGs and the user will see it in the PWA/manifest and newer browsers.
  // Actually, we can replace app/favicon.ico with a copy of favicon-32x32.png renamed to .ico? 
  // Some browsers support PNG renamed to .ico, but it's not ideal.
  // Let's just process the pngs.
}

main();
