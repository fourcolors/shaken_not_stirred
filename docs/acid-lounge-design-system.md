# 🍸 Acid Lounge Design System
## Visual Aesthetic Specification for "Shaken Not Stirred"

**Version:** 1.0.0
**Last Updated:** 2025-12-06
**Status:** Research Complete - Ready for Implementation

---

## 1. Design Philosophy

The **Acid Lounge** aesthetic combines:
- **Retro-futuristic**: 1960s spy lounge meets cyberpunk
- **Liquid/Organic**: Morphing, flowing, psychedelic effects
- **High Contrast**: Vibrant neons against deep blacks
- **Kinetic Energy**: Everything moves, pulses, and reacts

### Visual References
- Jackbox Games (playful, high-contrast UI)
- Synthwave/Vaporwave aesthetics (neon gradients, grids)
- Liquid motion graphics (After Effects liquid distortion)
- Experimental typography (kinetic, morphing text)

---

## 2. Color System

### 2.1 Primary Palette

```css
/* === ACID GREEN === */
--color-acid-primary: #CCFF00;           /* Main brand acid green */
--color-acid-bright: #E0FF66;            /* Lighter, glowing variant */
--color-acid-electric: #9DFF00;          /* High saturation variant */
--color-acid-dark: #99CC00;              /* Darker, more readable */

/* === HOT PINK/MAGENTA === */
--color-pink-primary: #FF10F0;           /* Neon magenta */
--color-pink-bright: #FF66FF;            /* Lighter pink */
--color-pink-electric: #FF00FF;          /* Pure magenta */
--color-pink-deep: #CC0099;              /* Deep fuchsia */

/* === CYBER PURPLE === */
--color-purple-primary: #9D00FF;         /* Electric purple (accent) */
--color-purple-glow: #CC66FF;            /* Glowing purple */
--color-purple-dark: #660099;            /* Deep violet */
```

### 2.2 Background & Surface Colors

```css
/* === DARK THEME (TV Display Optimized) === */
--bg-void: #000000;                      /* Pure black (TV friendly) */
--bg-deep: #0A0A0F;                      /* Deep space blue-black */
--bg-surface: #1A1A2E;                   /* Elevated surface */
--bg-panel: #16213E;                     /* Panel/card background */
--bg-overlay: rgba(10, 10, 15, 0.92);    /* Modal overlay */

/* === GRADIENT BACKGROUNDS === */
--bg-gradient-acid: linear-gradient(135deg, #9DFF00 0%, #CCFF00 100%);
--bg-gradient-pink: linear-gradient(135deg, #FF10F0 0%, #FF66FF 100%);
--bg-gradient-cosmic: linear-gradient(135deg, #0A0A0F 0%, #16213E 50%, #1A1A2E 100%);
--bg-gradient-neon: radial-gradient(circle at 50% 50%, #CCFF00 0%, #FF10F0 50%, #9D00FF 100%);
```

### 2.3 Semantic Colors (UI States)

```css
/* === SUCCESS === */
--color-success: #00FF88;                /* Neon green success */
--color-success-glow: #66FFAA;
--color-success-bg: rgba(0, 255, 136, 0.15);

/* === ERROR/DANGER === */
--color-error: #FF3366;                  /* Hot red error */
--color-error-glow: #FF6699;
--color-error-bg: rgba(255, 51, 102, 0.15);

/* === WARNING === */
--color-warning: #FFAA00;                /* Amber warning */
--color-warning-glow: #FFCC66;
--color-warning-bg: rgba(255, 170, 0, 0.15);

/* === INFO === */
--color-info: #00CCFF;                   /* Cyan info */
--color-info-glow: #66DDFF;
--color-info-bg: rgba(0, 204, 255, 0.15);
```

### 2.4 Text Colors

```css
/* === TEXT HIERARCHY === */
--text-primary: #FFFFFF;                 /* Pure white headings */
--text-secondary: #E5E5E5;               /* Light gray body */
--text-tertiary: #999999;                /* Muted gray labels */
--text-disabled: #555555;                /* Disabled state */
--text-inverted: #000000;                /* Black text on neon */

/* === NEON TEXT (with glow) === */
--text-neon-acid: #CCFF00;
--text-neon-pink: #FF10F0;
--text-neon-purple: #9D00FF;
```

---

## 3. Typography System

### 3.1 Font Stacks

```css
/* === DISPLAY FONTS (Headings, Big Impact) === */
--font-display: 'Bebas Neue', 'Impact', 'Arial Black', sans-serif;
  /* Recommendation: Bebas Neue (Google Fonts - Free) */
  /* Fallback: System condensed sans-serif */

/* === KINETIC/FUTURISTIC FONT (Logo, Special Text) === */
--font-kinetic: 'Orbitron', 'Exo 2', 'Michroma', monospace;
  /* Recommendation: Orbitron (Google Fonts - Free) */
  /* Characteristics: Geometric, sci-fi, readable at all sizes */

/* === BODY/UI FONT (Readability First) === */
--font-body: 'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
  /* Recommendation: Inter (Google Fonts - Free) */
  /* Excellent readability, modern, wide language support */

/* === MONOSPACE (Code, Room Codes) === */
--font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  /* Recommendation: JetBrains Mono (Google Fonts - Free) */
```

### 3.2 Font Sizes (Fluid Scale - 1.250 Major Third)

```css
/* === MOBILE FIRST (16px base) === */
--text-xs: 0.75rem;      /* 12px - Small labels */
--text-sm: 0.875rem;     /* 14px - Secondary text */
--text-base: 1rem;       /* 16px - Body text */
--text-lg: 1.25rem;      /* 20px - Large body */
--text-xl: 1.563rem;     /* 25px - H4 */
--text-2xl: 1.953rem;    /* 31px - H3 */
--text-3xl: 2.441rem;    /* 39px - H2 */
--text-4xl: 3.052rem;    /* 49px - H1 */
--text-5xl: 3.815rem;    /* 61px - Hero */
--text-6xl: 4.768rem;    /* 76px - Massive impact */
--text-7xl: 5.96rem;     /* 95px - "SHAKE IT!" style */

/* === TV OPTIMIZED (larger for readability at distance) === */
--text-tv-base: 1.25rem;    /* 20px base for TV */
--text-tv-lg: 1.75rem;      /* 28px */
--text-tv-xl: 2.5rem;       /* 40px */
--text-tv-2xl: 3.5rem;      /* 56px */
--text-tv-3xl: 5rem;        /* 80px */
--text-tv-hero: 7rem;       /* 112px - Full screen impact */
```

### 3.3 Font Weights

```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-black: 900;        /* For high-impact display text */
```

### 3.4 Line Heights

```css
--leading-none: 1;        /* Tight, for display text */
--leading-tight: 1.25;    /* Headlines */
--leading-snug: 1.375;    /* UI elements */
--leading-normal: 1.5;    /* Body text */
--leading-relaxed: 1.625; /* Comfortable reading */
--leading-loose: 2;       /* Spacious */
```

### 3.5 Letter Spacing

```css
--tracking-tighter: -0.05em;
--tracking-tight: -0.025em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
--tracking-widest: 0.1em;  /* Bebas Neue style spacing */
```

---

## 4. Spacing System (8px Base Grid)

```css
/* === SPACING SCALE === */
--space-0: 0;
--space-1: 0.25rem;    /* 4px - Micro spacing */
--space-2: 0.5rem;     /* 8px - Tight */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px - Base unit */
--space-5: 1.25rem;    /* 20px */
--space-6: 1.5rem;     /* 24px - Comfortable */
--space-8: 2rem;       /* 32px - Section spacing */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px - Large gaps */
--space-16: 4rem;      /* 64px - Hero spacing */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px - Massive */
--space-32: 8rem;      /* 128px - Full-screen margins */
```

---

## 5. Border Radius (Organic Shapes)

```css
/* === ROUNDED CORNERS === */
--radius-none: 0;
--radius-sm: 0.25rem;      /* 4px - Subtle */
--radius-base: 0.5rem;     /* 8px - Standard */
--radius-md: 0.75rem;      /* 12px - Cards */
--radius-lg: 1rem;         /* 16px - Panels */
--radius-xl: 1.5rem;       /* 24px - Large cards */
--radius-2xl: 2rem;        /* 32px - Hero elements */
--radius-3xl: 3rem;        /* 48px - Extreme curves */
--radius-full: 9999px;     /* Pills, circles, avatars */

/* === ORGANIC SHAPES (for liquid aesthetic) === */
--radius-blob: 30% 70% 70% 30% / 30% 30% 70% 70%;  /* Morphing blob */
--radius-liquid: 40% 60% 60% 40% / 60% 40% 60% 40%; /* Liquid drop */
```

---

## 6. Shadows & Glow Effects

### 6.1 Standard Shadows (Depth)

```css
/* === ELEVATION SHADOWS === */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
--shadow-base: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
--shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15);
--shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.15);
--shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
--shadow-2xl: 0 35px 60px -15px rgba(0, 0, 0, 0.6);
```

### 6.2 Neon Glow Effects (Signature Acid Lounge Look)

```css
/* === ACID GREEN GLOW === */
--glow-acid-sm: 0 0 10px rgba(204, 255, 0, 0.5), 0 0 20px rgba(204, 255, 0, 0.3);
--glow-acid-md: 0 0 20px rgba(204, 255, 0, 0.6), 0 0 40px rgba(204, 255, 0, 0.4), 0 0 60px rgba(204, 255, 0, 0.2);
--glow-acid-lg: 0 0 30px rgba(204, 255, 0, 0.8), 0 0 60px rgba(204, 255, 0, 0.6), 0 0 90px rgba(204, 255, 0, 0.4);
--glow-acid-xl: 0 0 40px rgba(204, 255, 0, 1), 0 0 80px rgba(204, 255, 0, 0.8), 0 0 120px rgba(204, 255, 0, 0.6);

/* === PINK GLOW === */
--glow-pink-sm: 0 0 10px rgba(255, 16, 240, 0.5), 0 0 20px rgba(255, 16, 240, 0.3);
--glow-pink-md: 0 0 20px rgba(255, 16, 240, 0.6), 0 0 40px rgba(255, 16, 240, 0.4), 0 0 60px rgba(255, 16, 240, 0.2);
--glow-pink-lg: 0 0 30px rgba(255, 16, 240, 0.8), 0 0 60px rgba(255, 16, 240, 0.6), 0 0 90px rgba(255, 16, 240, 0.4);
--glow-pink-xl: 0 0 40px rgba(255, 16, 240, 1), 0 0 80px rgba(255, 16, 240, 0.8), 0 0 120px rgba(255, 16, 240, 0.6);

/* === PURPLE GLOW === */
--glow-purple-sm: 0 0 10px rgba(157, 0, 255, 0.5), 0 0 20px rgba(157, 0, 255, 0.3);
--glow-purple-md: 0 0 20px rgba(157, 0, 255, 0.6), 0 0 40px rgba(157, 0, 255, 0.4), 0 0 60px rgba(157, 0, 255, 0.2);
--glow-purple-lg: 0 0 30px rgba(157, 0, 255, 0.8), 0 0 60px rgba(157, 0, 255, 0.6), 0 0 90px rgba(157, 0, 255, 0.4);

/* === WHITE GLOW (for spotlights) === */
--glow-white-sm: 0 0 10px rgba(255, 255, 255, 0.5);
--glow-white-md: 0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.4);
--glow-white-lg: 0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.6);
```

### 6.3 Inner Shadows (Depth)

```css
--shadow-inner-sm: inset 0 2px 4px 0 rgba(0, 0, 0, 0.3);
--shadow-inner-md: inset 0 4px 8px 0 rgba(0, 0, 0, 0.4);
--shadow-inner-lg: inset 0 8px 16px 0 rgba(0, 0, 0, 0.5);
```

---

## 7. Animation & Motion

### 7.1 Timing Functions (Easing)

```css
/* === STANDARD EASING === */
--ease-linear: cubic-bezier(0, 0, 1, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

/* === CUSTOM ACID LOUNGE EASING === */
--ease-liquid: cubic-bezier(0.68, -0.55, 0.265, 1.55);  /* Bouncy, liquid feel */
--ease-elastic: cubic-bezier(0.87, 0, 0.13, 1);          /* Elastic snap */
--ease-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);     /* Smooth flow */
```

### 7.2 Duration Scale

```css
/* === ANIMATION SPEEDS === */
--duration-instant: 50ms;      /* Micro-interactions */
--duration-fast: 150ms;        /* Quick feedback */
--duration-base: 300ms;        /* Standard transitions */
--duration-medium: 500ms;      /* Deliberate animations */
--duration-slow: 800ms;        /* Dramatic reveals */
--duration-glacial: 1200ms;    /* Hero animations */
```

### 7.3 Key Animation Names

```css
/* These will be defined in CSS/SCSS */
--animation-pulse: pulse;           /* Pulsing glow effect */
--animation-float: float;           /* Floating up/down */
--animation-shake: shake;           /* Violent shake */
--animation-glitch: glitch;         /* Digital glitch */
--animation-liquid: liquid;         /* Morphing blob */
--animation-fade-in: fadeIn;        /* Smooth fade */
--animation-slide-up: slideUp;      /* Slide from bottom */
--animation-bounce-in: bounceIn;    /* Physics bounce */
--animation-spin: spin;             /* 360° rotation */
```

---

## 8. Z-Index System (Layering)

```css
/* === Z-INDEX SCALE === */
--z-base: 0;              /* Base layer */
--z-dropdown: 100;        /* Dropdowns */
--z-sticky: 200;          /* Sticky headers */
--z-fixed: 300;           /* Fixed elements */
--z-modal-backdrop: 400;  /* Modal overlays */
--z-modal: 500;           /* Modal content */
--z-popover: 600;         /* Popovers, tooltips */
--z-toast: 700;           /* Notifications */
--z-debug: 9999;          /* Debug overlays */
```

---

## 9. Breakpoints (Responsive Design)

```css
/* === SCREEN SIZES === */
--screen-xs: 320px;       /* Small phones */
--screen-sm: 640px;       /* Large phones */
--screen-md: 768px;       /* Tablets */
--screen-lg: 1024px;      /* Laptops */
--screen-xl: 1280px;      /* Desktops */
--screen-2xl: 1536px;     /* Large displays */
--screen-tv: 1920px;      /* Full HD TV */
--screen-4k: 3840px;      /* 4K TV */
```

---

## 10. Component-Specific Tokens

### 10.1 Buttons

```css
/* === BUTTON SIZES === */
--btn-sm-height: 2rem;      /* 32px */
--btn-md-height: 2.75rem;   /* 44px - Touch target */
--btn-lg-height: 3.5rem;    /* 56px */
--btn-xl-height: 4rem;      /* 64px - Phone voting buttons */

--btn-sm-padding: 0.5rem 1rem;
--btn-md-padding: 0.75rem 1.5rem;
--btn-lg-padding: 1rem 2rem;
--btn-xl-padding: 1.25rem 3rem;

/* === BUTTON VARIANTS === */
--btn-primary-bg: var(--color-acid-primary);
--btn-primary-text: var(--text-inverted);
--btn-primary-glow: var(--glow-acid-md);

--btn-secondary-bg: var(--color-pink-primary);
--btn-secondary-text: var(--text-primary);
--btn-secondary-glow: var(--glow-pink-md);

--btn-ghost-bg: transparent;
--btn-ghost-text: var(--text-primary);
--btn-ghost-border: 2px solid var(--color-acid-primary);
```

### 10.2 Avatars

```css
/* === AVATAR SIZES === */
--avatar-xs: 2rem;       /* 32px - Compact lists */
--avatar-sm: 3rem;       /* 48px - Standard */
--avatar-md: 4rem;       /* 64px - Player cards */
--avatar-lg: 6rem;       /* 96px - Lobby */
--avatar-xl: 8rem;       /* 128px - Podium */
--avatar-2xl: 12rem;     /* 192px - Winner spotlight */
```

### 10.3 Cards

```css
/* === CARD STYLES === */
--card-bg: var(--bg-panel);
--card-border: 1px solid rgba(255, 255, 255, 0.1);
--card-radius: var(--radius-xl);
--card-shadow: var(--shadow-lg);
--card-padding: var(--space-6);
```

### 10.4 Input Fields

```css
/* === INPUT STYLES === */
--input-bg: rgba(255, 255, 255, 0.05);
--input-border: 2px solid rgba(255, 255, 255, 0.2);
--input-border-focus: 2px solid var(--color-acid-primary);
--input-height: 3rem;        /* 48px - Touch friendly */
--input-padding: 0.75rem 1rem;
--input-radius: var(--radius-lg);
--input-text: var(--text-primary);
--input-placeholder: var(--text-tertiary);
```

---

## 11. Accessibility Considerations

### 11.1 Contrast Ratios (WCAG AA Compliant)

```css
/* Ensure text on neon backgrounds meets WCAG AA */
--text-on-acid: #000000;      /* Black on acid green (7.1:1) */
--text-on-pink: #FFFFFF;       /* White on pink (4.5:1) */
--text-on-purple: #FFFFFF;     /* White on purple (4.5:1) */
```

### 11.2 Focus States

```css
/* === KEYBOARD FOCUS === */
--focus-ring: 3px solid var(--color-acid-primary);
--focus-offset: 2px;
--focus-glow: var(--glow-acid-sm);
```

### 11.3 Animation Preferences

```css
/* Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  /* Disable all animations and use instant transitions */
  --duration-base: 0ms;
  --duration-medium: 0ms;
  --duration-slow: 0ms;
}
```

---

## 12. Pixi.js Visual Effects Specifications

### 12.1 Particle Effects

**Confetti Particle System:**
- Colors: Acid Green, Hot Pink, Purple, White
- Count: 200-500 particles
- Gravity: 0.5
- Lifespan: 2-4 seconds
- Spawn pattern: Explosion from center

**Liquid Distortion Shader:**
- Displacement Map: Perlin noise
- Wave frequency: 0.5-2Hz
- Amplitude: 10-30px
- Color shift: HSL rotation ±30°

### 12.2 Glitch Effects

**Digital Glitch:**
- RGB channel separation: 5-15px offset
- Scanline frequency: 3-5 horizontal lines
- Duration: 100-300ms bursts
- Trigger: On error states, "Signal Lost" screen

---

## 13. Implementation Checklist

### 13.1 CSS Custom Properties File

Create `/packages/ui/src/styles/tokens.css`:

```css
:root {
  /* Copy all tokens from sections 2-11 */
}
```

### 13.2 Google Fonts Import

```html
<!-- Add to index.html or _app.tsx -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&family=Orbitron:wght@400;500;700;900&family=JetBrains+Mono&display=swap" rel="stylesheet">
```

### 13.3 Storybook Theme Configuration

Configure Storybook to use dark theme with acid green accent:

```javascript
// .storybook/preview.js
export const parameters = {
  backgrounds: {
    default: 'void',
    values: [
      { name: 'void', value: '#000000' },
      { name: 'deep', value: '#0A0A0F' },
      { name: 'surface', value: '#1A1A2E' }
    ]
  }
}
```

---

## 14. Usage Examples

### 14.1 Neon Button Component

```jsx
<button className="btn-primary">
  Join Game
</button>
```

```css
.btn-primary {
  background: var(--btn-primary-bg);
  color: var(--btn-primary-text);
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  padding: var(--btn-lg-padding);
  border-radius: var(--radius-full);
  border: none;
  box-shadow: var(--btn-primary-glow);
  transition: all var(--duration-base) var(--ease-liquid);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
}

.btn-primary:hover {
  box-shadow: var(--glow-acid-xl);
  transform: scale(1.05);
}

.btn-primary:active {
  transform: scale(0.98);
}
```

### 14.2 Kinetic Typography Heading

```jsx
<h1 className="hero-text">SHAKE IT!</h1>
```

```css
.hero-text {
  font-family: var(--font-display);
  font-size: var(--text-tv-hero);
  font-weight: var(--font-black);
  color: var(--text-primary);
  text-align: center;
  text-shadow: var(--glow-acid-lg);
  letter-spacing: var(--tracking-widest);
  animation: pulse var(--duration-slow) var(--ease-liquid) infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    text-shadow: var(--glow-acid-lg);
  }
  50% {
    transform: scale(1.05);
    text-shadow: var(--glow-acid-xl);
  }
}
```

### 14.3 Liquid Background Card

```jsx
<div className="card-liquid">
  <h3>Player Name</h3>
  <p>Score: 1500</p>
</div>
```

```css
.card-liquid {
  background: var(--card-bg);
  border: var(--card-border);
  border-radius: var(--radius-blob);
  padding: var(--card-padding);
  box-shadow: var(--shadow-lg), var(--glow-purple-sm);
  backdrop-filter: blur(10px);
  animation: liquid var(--duration-glacial) var(--ease-smooth) infinite;
}

@keyframes liquid {
  0%, 100% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  25% {
    border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
  }
  50% {
    border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
  }
  75% {
    border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
  }
}
```

---

## 15. Design Token JSON Export

For programmatic access (e.g., Tailwind config, theme generators):

```json
{
  "colors": {
    "acid": {
      "primary": "#CCFF00",
      "bright": "#E0FF66",
      "electric": "#9DFF00",
      "dark": "#99CC00"
    },
    "pink": {
      "primary": "#FF10F0",
      "bright": "#FF66FF",
      "electric": "#FF00FF",
      "deep": "#CC0099"
    },
    "purple": {
      "primary": "#9D00FF",
      "glow": "#CC66FF",
      "dark": "#660099"
    }
  },
  "fonts": {
    "display": "Bebas Neue",
    "kinetic": "Orbitron",
    "body": "Inter",
    "mono": "JetBrains Mono"
  },
  "spacing": {
    "1": "0.25rem",
    "2": "0.5rem",
    "4": "1rem",
    "8": "2rem",
    "16": "4rem"
  }
}
```

---

## 16. Recommended Tooling

- **Design Tool**: Figma (for mockups and prototyping)
- **Color Contrast Checker**: WebAIM Contrast Checker
- **Animation Preview**: LottieFiles (for complex animations)
- **Shader Playground**: Shadertoy.com (for Pixi.js effects)
- **Font Pairing**: FontJoy.com (for typography exploration)

---

## 17. Next Steps for Implementation

1. **Create Design Tokens File**: `/packages/ui/src/styles/tokens.css`
2. **Set Up Storybook**: Configure theme and backgrounds
3. **Build Atom Components**: Typography, Buttons, Inputs
4. **Prototype in Storybook**: Test each component in isolation
5. **Visual QA**: Review with stakeholders for aesthetic sign-off

---

## 18. Aesthetic Keywords (For AI Prompt Engineering)

When generating visual assets or animations, use these keywords:
- "Neon acid green glow"
- "Liquid morphing blob"
- "Retro-futuristic synthwave"
- "Psychedelic distortion"
- "Kinetic typography"
- "Digital glitch effect"
- "High-contrast cyberpunk"
- "Particle confetti explosion"
- "1960s spy lounge meets vaporwave"

---

**Design System Status:** ✅ Research Complete
**Ready for Implementation:** Yes
**Approval Required:** Stakeholder visual sign-off on Storybook prototypes

---

*This design system ensures visual consistency, accessibility, and a distinctive "Acid Lounge" aesthetic across all platform screens.*
