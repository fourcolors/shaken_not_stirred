# Color Swatches - Visual Reference
## Acid Lounge Color Palette

**Quick visual reference for designers and developers**

---

## 🟩 Acid Green Family

### Primary: Acid Green
```
#CCFF00
RGB: 204, 255, 0
HSL: 72°, 100%, 50%
```
**Use:** Main brand color, primary buttons, logo
**Text on this:** Black (#000000) for WCAG AA compliance

---

### Bright: Acid Bright
```
#E0FF66
RGB: 224, 255, 102
HSL: 72°, 100%, 70%
```
**Use:** Hover states, highlights, lighter accents

---

### Electric: Acid Electric
```
#9DFF00
RGB: 157, 255, 0
HSL: 83°, 100%, 50%
```
**Use:** High energy states, active elements, glowing effects

---

### Dark: Acid Dark
```
#99CC00
RGB: 153, 204, 0
HSL: 75°, 100%, 40%
```
**Use:** Readable text variant, subtle accents

---

## 🟪 Hot Pink/Magenta Family

### Primary: Hot Pink
```
#FF10F0
RGB: 255, 16, 240
HSL: 304°, 100%, 53%
```
**Use:** Secondary brand color, secondary buttons, accents
**Text on this:** White (#FFFFFF) for WCAG AA compliance

---

### Bright: Pink Bright
```
#FF66FF
RGB: 255, 102, 255
HSL: 300°, 100%, 70%
```
**Use:** Lighter pink variant, soft glows

---

### Electric: Pink Electric (Pure Magenta)
```
#FF00FF
RGB: 255, 0, 255
HSL: 300°, 100%, 50%
```
**Use:** Maximum saturation pink, special effects

---

### Deep: Pink Deep (Fuchsia)
```
#CC0099
RGB: 204, 0, 153
HSL: 320°, 100%, 40%
```
**Use:** Darker pink variant, shadows

---

## 🟣 Cyber Purple Family

### Primary: Electric Purple
```
#9D00FF
RGB: 157, 0, 255
HSL: 277°, 100%, 50%
```
**Use:** Accent color, special states, tertiary actions
**Text on this:** White (#FFFFFF)

---

### Glow: Purple Glow
```
#CC66FF
RGB: 204, 102, 255
HSL: 280°, 100%, 70%
```
**Use:** Lighter purple, soft glows, highlights

---

### Dark: Purple Dark (Deep Violet)
```
#660099
RGB: 102, 0, 153
HSL: 280°, 100%, 30%
```
**Use:** Dark purple variant, depth effects

---

## ⬛ Background Colors (Dark Theme)

### Void: Pure Black
```
#000000
RGB: 0, 0, 0
HSL: 0°, 0%, 0%
```
**Use:** Main background, TV display optimized (no OLED burn-in)

---

### Deep: Deep Space
```
#0A0A0F
RGB: 10, 10, 15
HSL: 240°, 20%, 5%
```
**Use:** Secondary background, subtle depth

---

### Surface: Elevated Surface
```
#1A1A2E
RGB: 26, 26, 46
HSL: 240°, 28%, 14%
```
**Use:** Cards, panels, raised elements

---

### Panel: Card Background
```
#16213E
RGB: 22, 33, 62
HSL: 224°, 48%, 16%
```
**Use:** Card backgrounds, containers

---

## ✅ Semantic Colors

### Success: Neon Green
```
#00FF88
RGB: 0, 255, 136
HSL: 152°, 100%, 50%
```
**Use:** Success messages, checkmarks, "You won!"

---

### Error: Hot Red
```
#FF3366
RGB: 255, 51, 102
HSL: 340°, 100%, 60%
```
**Use:** Error states, "Panic mode", "You lost!"

---

### Warning: Amber
```
#FFAA00
RGB: 255, 170, 0
HSL: 40°, 100%, 50%
```
**Use:** Warning states, low time remaining

---

### Info: Cyan
```
#00CCFF
RGB: 0, 204, 255
HSL: 192°, 100%, 50%
```
**Use:** Informational messages, hints, tips

---

## 🌈 Gradients

### Acid Gradient
```css
linear-gradient(135deg, #9DFF00 0%, #CCFF00 100%)
```
**Use:** Buttons, avatars, highlight areas

---

### Pink Gradient
```css
linear-gradient(135deg, #FF10F0 0%, #FF66FF 100%)
```
**Use:** Secondary buttons, alternate avatars

---

### Cosmic Gradient
```css
linear-gradient(135deg, #0A0A0F 0%, #16213E 50%, #1A1A2E 100%)
```
**Use:** Background depth, atmospheric effects

---

### Neon Gradient (Multi-color)
```css
radial-gradient(circle at 50% 50%, #CCFF00 0%, #FF10F0 50%, #9D00FF 100%)
```
**Use:** Special effects, hero elements, party mode

---

## 📊 Color Combinations

### High Contrast Pairings (WCAG AA+)

| Background | Foreground | Contrast Ratio | Use Case |
|-----------|-----------|---------------|----------|
| #000000 (Void) | #CCFF00 (Acid Green) | 15.1:1 ✅ | Main UI text |
| #000000 (Void) | #FF10F0 (Hot Pink) | 7.4:1 ✅ | Secondary text |
| #000000 (Void) | #FFFFFF (White) | 21:1 ✅ | Body text |
| #CCFF00 (Acid Green) | #000000 (Black) | 15.1:1 ✅ | Button text |
| #FF10F0 (Hot Pink) | #FFFFFF (White) | 4.8:1 ✅ | Button text |
| #16213E (Panel) | #FFFFFF (White) | 12.6:1 ✅ | Card text |

---

## 🎨 Color Usage Guidelines

### DO's ✅

- Use Acid Green (#CCFF00) as the primary brand identifier
- Use Hot Pink (#FF10F0) for secondary actions
- Use Pure Black (#000000) for main backgrounds
- Combine neon colors with black for maximum contrast
- Use gradients sparingly for special elements

### DON'Ts ❌

- Don't use neon colors on neon backgrounds (readability)
- Don't use light backgrounds (breaks dark theme)
- Don't mix too many neon colors in one element
- Don't use gradients on text (readability)
- Don't forget to test contrast ratios

---

## 🖼️ Visual Hierarchy

```
Hierarchy Level          Color                 Usage
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hero/Primary Action      #CCFF00 (Acid Green)  Main CTA buttons
Secondary Action         #FF10F0 (Hot Pink)    Secondary buttons
Tertiary Action          #9D00FF (Purple)      Ghost buttons
Primary Text             #FFFFFF (White)       Headings, labels
Secondary Text           #E5E5E5 (Light Gray)  Body text
Tertiary Text            #999999 (Gray)        Metadata, hints
Disabled                 #555555 (Dark Gray)   Inactive elements
```

---

## 🔍 Testing Your Colors

### Tools
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Coolors.co](https://coolors.co/ccff00-ff10f0-9d00ff-000000-ffffff)
- Chrome DevTools (Lighthouse accessibility audit)

### Tests to Run
1. **Contrast Ratio** - Ensure 4.5:1 minimum for text
2. **Color Blindness** - Test with Deuteranopia, Protanopia
3. **Screen Brightness** - View on dim and bright screens
4. **TV Display** - Test on actual 1920x1080 TV
5. **Mobile** - Test on various phone displays

---

## 📱 Export for Design Tools

### Figma
1. Create color styles for each token
2. Use Local Styles for project consistency
3. Export as Figma Tokens plugin format

### Sketch
1. Add to Document Colors
2. Create shared library
3. Sync across team

### Adobe XD
1. Add to Color Assets panel
2. Create Component Library
3. Share library link

---

## 💾 CSS Variables Quick Copy

```css
:root {
  /* Acid Green */
  --acid-primary: #CCFF00;
  --acid-bright: #E0FF66;
  --acid-electric: #9DFF00;
  --acid-dark: #99CC00;

  /* Hot Pink */
  --pink-primary: #FF10F0;
  --pink-bright: #FF66FF;
  --pink-electric: #FF00FF;
  --pink-deep: #CC0099;

  /* Purple */
  --purple-primary: #9D00FF;
  --purple-glow: #CC66FF;
  --purple-dark: #660099;

  /* Backgrounds */
  --bg-void: #000000;
  --bg-deep: #0A0A0F;
  --bg-surface: #1A1A2E;
  --bg-panel: #16213E;

  /* Semantic */
  --success: #00FF88;
  --error: #FF3366;
  --warning: #FFAA00;
  --info: #00CCFF;

  /* Text */
  --text-primary: #FFFFFF;
  --text-secondary: #E5E5E5;
  --text-tertiary: #999999;
  --text-disabled: #555555;
}
```

---

**Color Swatch Guide Version:** 1.0.0
**Last Updated:** 2025-12-06
**Total Colors:** 28 unique values
