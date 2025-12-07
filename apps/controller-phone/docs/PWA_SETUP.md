# PWA Setup - Shaken Not Stirred Controller

## Overview

Progressive Web App (PWA) support has been successfully added to the controller-phone app, enabling mobile users to install the app on their devices for a native-like experience.

## What Was Implemented

### 1. Dependencies
- **vite-plugin-pwa** (v0.21.1) - Automated PWA generation with Workbox

### 2. PWA Manifest (`public/manifest.json`)
```json
{
  "name": "Shaken Not Stirred",
  "short_name": "Shaken",
  "theme_color": "#CCFF00",  // Acid green
  "background_color": "#0a0a0a",  // Dark background
  "display": "standalone",
  "orientation": "portrait"
}
```

Features:
- Standalone display mode (hides browser UI)
- Portrait-only orientation (optimal for phone gameplay)
- Acid green theme color matching game aesthetic
- Game join shortcut

### 3. App Icons
Located in `public/icons/`:
- `icon.svg` - Base SVG design (martini glass with shake effects)
- `icon-192.png` - 192x192 icon (placeholder)
- `icon-512.png` - 512x512 icon (placeholder)
- `icon-maskable.png` - 512x512 maskable icon (placeholder)

**Note**: Current PNGs are placeholders. For production:
```bash
# Using ImageMagick
convert public/icons/icon.svg -resize 192x192 public/icons/icon-192.png
convert public/icons/icon.svg -resize 512x512 public/icons/icon-512.png
convert public/icons/icon.svg -resize 512x512 public/icons/icon-maskable.png
```

### 4. Vite Configuration
The `vite.config.ts` now includes:
- VitePWA plugin with auto-update registration
- Service worker generation via Workbox
- App shell caching strategy
- Font caching (Google Fonts)
- Offline support

### 5. HTML Updates (`index.html`)
Added meta tags:
- `theme-color` - Acid green (#CCFF00)
- `apple-mobile-web-app-capable` - iOS web app mode
- Manifest link
- Apple touch icon
- Favicon

## Installation Experience

### On Mobile Devices

1. **Android (Chrome)**
   - Visit app in Chrome
   - "Add to Home Screen" prompt appears automatically
   - Icon appears on home screen
   - Opens in standalone mode

2. **iOS (Safari)**
   - Visit app in Safari
   - Tap Share button
   - Select "Add to Home Screen"
   - Icon appears on home screen
   - Opens in standalone mode

### Features When Installed

- **Offline Support**: App works without internet after first load
- **Native Feel**: No browser UI, full-screen experience
- **Motion Sensors**: Full access to device motion for "Shake to Submit"
- **Fast Loading**: Cached assets load instantly
- **Auto-Updates**: Service worker updates automatically

## Build Output

When you build the app, vite-plugin-pwa generates:
- `dist/sw.js` - Service worker for caching
- `dist/workbox-*.js` - Workbox runtime
- `dist/manifest.webmanifest` - PWA manifest
- `dist/registerSW.js` - Service worker registration

Build verification:
```
✓ built in 292ms
PWA v0.21.2
mode      generateSW
precache  12 entries (160.78 KiB)
```

## Testing PWA

### Local Testing
```bash
# Build the app
pnpm run build

# Preview with PWA enabled
pnpm run preview

# Visit http://localhost:4173
# Open DevTools > Application > Service Workers
```

### Lighthouse PWA Audit
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Select "Progressive Web App"
4. Run audit

Expected scores:
- ✓ Installable
- ✓ PWA Optimized
- ✓ Offline capable
- ✓ Mobile optimized

## Workbox Caching Strategy

### Precached Assets
- All JS, CSS, HTML files
- Icons and images
- Fonts (woff2)

### Runtime Caching
- Google Fonts (CacheFirst, 1 year)
- API calls (NetworkFirst, fallback to cache)

## Troubleshooting

### PWA Not Installing
1. Ensure HTTPS (required for PWA except localhost)
2. Check manifest in DevTools > Application > Manifest
3. Verify service worker in DevTools > Application > Service Workers

### Icons Not Showing
1. Replace placeholder PNGs with proper icons
2. Ensure icons are in `public/icons/` directory
3. Rebuild the app

### Offline Not Working
1. Check service worker status
2. Verify cache in DevTools > Application > Cache Storage
3. Check Console for service worker errors

## Production Checklist

- [ ] Generate proper PNG icons from SVG
- [ ] Test on real iOS device
- [ ] Test on real Android device
- [ ] Verify offline functionality
- [ ] Run Lighthouse audit
- [ ] Test motion sensor permissions
- [ ] Verify HTTPS deployment

## File Structure

```
apps/controller-phone/
├── public/
│   ├── manifest.json          # PWA manifest
│   └── icons/
│       ├── icon.svg           # Base icon design
│       ├── icon-192.png       # 192x192 icon
│       ├── icon-512.png       # 512x512 icon
│       ├── icon-maskable.png  # Maskable icon
│       └── README.md          # Icon generation guide
├── scripts/
│   └── generate-icons.js      # Placeholder icon generator
├── vite.config.ts             # PWA plugin config
└── index.html                 # PWA meta tags
```

## Resources

- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Vite PWA Plugin](https://vite-pwa-org.netlify.app/)
- [Workbox Documentation](https://developers.google.com/web/tools/workbox)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)

## Next Steps

1. Generate production icons from SVG
2. Test installation flow on devices
3. Configure push notifications (if needed)
4. Add update prompt for new versions
5. Monitor service worker analytics
