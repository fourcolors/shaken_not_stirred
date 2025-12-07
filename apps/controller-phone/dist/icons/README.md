# PWA Icons

This directory contains icons for the Progressive Web App.

## Current Setup

- `icon.svg` - Base SVG icon (512x512) with martini glass design
- Placeholder PNG files (to be generated)

## Production Icon Generation

To generate proper PNG icons from the SVG, use one of these methods:

### Method 1: ImageMagick (Recommended)
```bash
# Install ImageMagick
brew install imagemagick  # macOS
# or apt-get install imagemagick  # Linux

# Generate icons
convert icon.svg -resize 192x192 icon-192.png
convert icon.svg -resize 512x512 icon-512.png
convert icon.svg -resize 512x512 icon-maskable.png
```

### Method 2: Online Tools
- https://realfavicongenerator.net/
- https://www.pwabuilder.com/imageGenerator

### Method 3: Node.js Sharp
```javascript
const sharp = require('sharp');

sharp('icon.svg')
  .resize(192, 192)
  .png()
  .toFile('icon-192.png');
```

## Icon Specifications

- **icon-192.png**: 192x192px, standard icon
- **icon-512.png**: 512x512px, high-res icon
- **icon-maskable.png**: 512x512px, maskable icon with safe zone

## Design

The icon features:
- Acid green (#CCFF00) martini glass on dark background (#0a0a0a)
- Pink (#FF10F0) motion lines for "shake" effect
- Minimalist, recognizable at small sizes
