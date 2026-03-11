const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const convertToWebp = async (filename) => {
  const inputPath = path.join('public', 'images', `${filename}.svg`);
  const outputPath = path.join('public', 'images', `${filename}.webp`);

  try {
    if (fs.existsSync(inputPath)) {
        await sharp(inputPath)
          .resize(300, 300, {
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 1 }
          })
          .flatten({ background: '#ffffff' })
          .webp()
          .toFile(outputPath);
        console.log(`Converted ${filename}.svg to ${filename}.webp`);
    } else {
        console.log(`Skipped ${filename}, input file missing.`);
    }
  } catch (error) {
    console.error(`Error converting ${filename}:`, error);
  }
};

const convertIcons = async () => {
    const icons = [
      'hibernate', 'javascript', 'eclipse', 'vscode', 'git', 
      'github', 'tomcat', 'mysql', 'figma', 'vercel',
      'servlets', 'jsp', 'jdbc', 'rest', 'oop', 'datastructures', 'algorithms'
    ];
    for (const icon of icons) {
        await convertToWebp(icon);
    }
}

// Ensure output directory exists if needed, but we already have public/images
convertIcons();
