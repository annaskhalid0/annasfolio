/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const Jimp = require('jimp');

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function createAppleTouchIcon(sourcePath, outputPath) {
  const image = await Jimp.read(sourcePath);
  image.cover(180, 180, Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE);
  await image.quality(90).writeAsync(outputPath);
  console.log(`Generated ${outputPath}`);
}

async function createSocialShare(sourcePath, outputPath) {
  const targetWidth = 1200;
  const targetHeight = 630; // 1.91:1
  const background = await new Jimp(targetWidth, targetHeight, 0xffffffff); // white bg
  const image = await Jimp.read(sourcePath);

  // Fill the canvas using cover to prevent letterboxing
  image.cover(targetWidth, targetHeight, Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE);
  background.composite(image, 0, 0);
  await background.quality(85).writeAsync(outputPath);
  console.log(`Generated ${outputPath}`);
}

async function main() {
  const publicDir = path.resolve(__dirname, '..', 'public');
  const source = path.join(publicDir, 'annas1.jpg');
  const appleIcon = path.join(publicDir, 'apple-touch-icon.png');
  const socialImage = path.join(publicDir, 'social-share.jpg');

  if (!fs.existsSync(source)) {
    console.error(`Source image not found: ${source}`);
    process.exit(1);
  }

  await ensureDir(publicDir);
  await createAppleTouchIcon(source, appleIcon);
  await createSocialShare(source, socialImage);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});


