# Quick Reference Guide
## Acid Lounge Design System - At a Glance

**For:** Developers and designers who need quick access to design tokens
**Updated:** 2025-12-06

---

## 🎨 Color Palette (Copy-Paste Ready)

### Primary Colors

```css
/* Acid Green */
#CCFF00  /* Primary - Main brand color */
#E0FF66  /* Bright - Lighter variant */
#9DFF00  /* Electric - High saturation */
#99CC00  /* Dark - More readable */

/* Hot Pink/Magenta */
#FF10F0  /* Primary - Neon magenta */
#FF66FF  /* Bright - Lighter pink */
#FF00FF  /* Electric - Pure magenta */
#CC0099  /* Deep - Deep fuchsia */

/* Cyber Purple */
#9D00FF  /* Primary - Electric purple */
#CC66FF  /* Glow - Glowing purple */
#660099  /* Dark - Deep violet */
```

### Backgrounds (Dark Theme)

```css
#000000  /* Void - Pure black */
#0A0A0F  /* Deep - Deep space blue-black */
#1A1A2E  /* Surface - Elevated surface */
#16213E  /* Panel - Card background */
```

### Semantic Colors

```css
/* Success */
#00FF88  /* Neon green success */

/* Error */
#FF3366  /* Hot red error */

/* Warning */
#FFAA00  /* Amber warning */

/* Info */
#00CCFF  /* Cyan info */
```

---

## 📝 Typography

### Font Families

```css
/* Display (Headings) */
font-family: 'Bebas Neue', 'Impact', 'Arial Black', sans-serif;

/* Kinetic (Logo/Special) */
font-family: 'Orbitron', 'Exo 2', 'Michroma', monospace;

/* Body (UI Text) */
font-family: 'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;

/* Monospace (Codes) */
font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
```

### Font Sizes (Mobile)

| Token | Size | Pixels | Use Case |
|-------|------|--------|----------|
| `--text-xs` | 0.75rem | 12px | Small labels |
| `--text-sm` | 0.875rem | 14px | Secondary text |
| `--text-base` | 1rem | 16px | Body text |
| `--text-lg` | 1.25rem | 20px | Large body |
| `--text-xl` | 1.563rem | 25px | H4 |
| `--text-2xl` | 1.953rem | 31px | H3 |
| `--text-3xl` | 2.441rem | 39px | H2 |
| `--text-4xl` | 3.052rem | 49px | H1 |
| `--text-5xl` | 3.815rem | 61px | Hero |
| `--text-7xl` | 5.96rem | 95px | "SHAKE IT!" |

### Font Sizes (TV Optimized)

| Token | Size | Pixels | Use Case |
|-------|------|--------|----------|
| `--text-tv-base` | 1.25rem | 20px | Base for TV |
| `--text-tv-xl` | 2.5rem | 40px | Large text |
| `--text-tv-3xl` | 5rem | 80px | Big impact |
| `--text-tv-hero` | 7rem | 112px | Full screen |

---

## 📏 Spacing (8px Grid)

```css
--space-1: 4px    /* Micro spacing */
--space-2: 8px    /* Tight */
--space-4: 16px   /* Base unit */
--space-6: 24px   /* Comfortable */
--space-8: 32px   /* Section spacing */
--space-12: 48px  /* Large gaps */
--space-16: 64px  /* Hero spacing */
--space-32: 128px /* Full-screen margins */
```

**Rule of thumb:** Use multiples of 8px for all spacing

---

## ✨ Effects

### Neon Glow (Acid Green)

```css
/* Small glow */
box-shadow: 0 0 10px rgba(204, 255, 0, 0.5), 0 0 20px rgba(204, 255, 0, 0.3);

/* Medium glow */
box-shadow: 0 0 20px rgba(204, 255, 0, 0.6), 0 0 40px rgba(204, 255, 0, 0.4), 0 0 60px rgba(204, 255, 0, 0.2);

/* Large glow */
box-shadow: 0 0 30px rgba(204, 255, 0, 0.8), 0 0 60px rgba(204, 255, 0, 0.6), 0 0 90px rgba(204, 255, 0, 0.4);
```

### Neon Glow (Pink)

```css
/* Small glow */
box-shadow: 0 0 10px rgba(255, 16, 240, 0.5), 0 0 20px rgba(255, 16, 240, 0.3);

/* Medium glow */
box-shadow: 0 0 20px rgba(255, 16, 240, 0.6), 0 0 40px rgba(255, 16, 240, 0.4), 0 0 60px rgba(255, 16, 240, 0.2);
```

---

## 🔘 Common Components

### Primary Button

```css
.primary-button {
  background: #CCFF00;
  color: #000000;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 9999px;
  border: none;
  box-shadow: 0 0 20px rgba(204, 255, 0, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.primary-button:hover {
  box-shadow: 0 0 40px rgba(204, 255, 0, 1);
  transform: scale(1.05);
}
```

### Input Field

```css
.neon-input {
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  color: #FFFFFF;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
}

.neon-input:focus {
  border: 2px solid #CCFF00;
  box-shadow: 0 0 10px rgba(204, 255, 0, 0.5);
  outline: none;
}
```

### Card

```css
.liquid-card {
  background: #16213E;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  padding: 1.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
  animation: liquid 1200ms ease-in-out infinite;
}
```

---

## 🎬 Animations

### Pulse (Glowing effect)

```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

/* Usage */
.pulsing-element {
  animation: pulse 800ms ease-in-out infinite;
}
```

### Shake (Violent shake)

```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
  20%, 40%, 60%, 80% { transform: translateX(10px); }
}

/* Usage */
.shaking-element {
  animation: shake 500ms linear;
}
```

### Liquid Morph

```css
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

/* Usage */
.morphing-element {
  animation: liquid 1200ms ease-in-out infinite;
}
```

---

## 📱 Responsive Breakpoints

```css
/* Phone Portrait */
@media (min-width: 320px) { /* xs */ }

/* Phone Landscape / Small Tablet */
@media (min-width: 640px) { /* sm */ }

/* Tablet */
@media (min-width: 768px) { /* md */ }

/* Laptop */
@media (min-width: 1024px) { /* lg */ }

/* Desktop */
@media (min-width: 1280px) { /* xl */ }

/* TV (Full HD) */
@media (min-width: 1920px) { /* tv */ }

/* 4K TV */
@media (min-width: 3840px) { /* 4k */ }
```

---

## 🎯 Common Use Cases

### Neon Button with Glow

```jsx
<button className="neon-btn">
  Join Game
</button>
```

```css
.neon-btn {
  background: var(--color-acid-primary);
  color: var(--text-inverted);
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  padding: var(--btn-lg-padding);
  border-radius: var(--radius-full);
  border: none;
  box-shadow: var(--glow-acid-md);
  transition: all var(--duration-base) var(--ease-liquid);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  cursor: pointer;
}

.neon-btn:hover {
  box-shadow: var(--glow-acid-xl);
  transform: scale(1.05);
}
```

### Hero Heading with Pulse

```jsx
<h1 className="hero-heading">SHAKE IT!</h1>
```

```css
.hero-heading {
  font-family: var(--font-display);
  font-size: var(--text-tv-hero);
  font-weight: var(--font-black);
  color: var(--text-primary);
  text-align: center;
  text-shadow: var(--glow-acid-lg);
  letter-spacing: var(--tracking-widest);
  animation: pulse var(--duration-slow) var(--ease-smooth) infinite;
}
```

### Player Avatar

```jsx
<div className="avatar avatar--acid">
  <div className="avatar__shape">⬛</div>
  <div className="avatar__name">Player 1</div>
</div>
```

```css
.avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
}

.avatar__shape {
  width: var(--avatar-lg);
  height: var(--avatar-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  font-size: var(--text-5xl);
}

.avatar--acid .avatar__shape {
  background: var(--bg-gradient-acid);
  box-shadow: var(--glow-acid-md);
}

.avatar__name {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--text-secondary);
}
```

---

## 🔗 Google Fonts Import

**Add to your HTML `<head>` or CSS:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&family=Orbitron:wght@400;500;700;900&family=JetBrains+Mono&display=swap" rel="stylesheet">
```

---

## 📚 Full Documentation

For complete specifications, see:
- **Design System:** `/docs/acid-lounge-design-system.md`
- **CSS Tokens:** `/docs/design-tokens.css`
- **JSON Export:** `/docs/design-tokens.json`
- **Component Examples:** `/docs/component-examples.md`
- **Research Summary:** `/docs/RESEARCH-SUMMARY.md`

---

## 🚀 Quick Start

1. Import design tokens CSS:
   ```tsx
   import './docs/design-tokens.css';
   ```

2. Add Google Fonts to your HTML

3. Use CSS custom properties:
   ```css
   .my-component {
     background: var(--bg-void);
     color: var(--color-acid-primary);
     font-family: var(--font-display);
   }
   ```

4. Apply animations:
   ```css
   .my-element {
     animation: pulse var(--duration-slow) infinite;
   }
   ```

---

**Quick Reference Version:** 1.0.0
**Last Updated:** 2025-12-06
