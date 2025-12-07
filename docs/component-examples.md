# Component Implementation Examples
## Ready-to-use Code Snippets for "Acid Lounge" Aesthetic

This document provides copy-paste ready code examples for implementing the Acid Lounge design system in React/Storybook.

---

## 1. Setup: Import Design Tokens

```tsx
// In your root App.tsx or _app.tsx
import './styles/design-tokens.css';

// Or in your main SCSS file
@import './design-tokens.css';
```

---

## 2. Typography Components

### 2.1 Hero Heading (Kinetic Typography)

```tsx
// components/HeroHeading.tsx
import React from 'react';
import './HeroHeading.css';

interface HeroHeadingProps {
  children: React.ReactNode;
  animate?: 'pulse' | 'glitch' | 'none';
  color?: 'acid' | 'pink' | 'purple' | 'white';
}

export const HeroHeading: React.FC<HeroHeadingProps> = ({
  children,
  animate = 'pulse',
  color = 'white'
}) => {
  return (
    <h1
      className={`hero-heading hero-heading--${color} hero-heading--${animate}`}
      data-text={children}
    >
      {children}
    </h1>
  );
};
```

```css
/* components/HeroHeading.css */
.hero-heading {
  font-family: var(--font-display);
  font-size: var(--text-tv-hero);
  font-weight: var(--font-black);
  text-align: center;
  letter-spacing: var(--tracking-widest);
  line-height: var(--leading-none);
  text-transform: uppercase;
  margin: 0;
}

.hero-heading--acid {
  color: var(--color-acid-primary);
  text-shadow: var(--glow-acid-lg);
}

.hero-heading--pink {
  color: var(--color-pink-primary);
  text-shadow: var(--glow-pink-lg);
}

.hero-heading--purple {
  color: var(--color-purple-primary);
  text-shadow: var(--glow-purple-lg);
}

.hero-heading--white {
  color: var(--text-primary);
  text-shadow: var(--glow-white-md);
}

.hero-heading--pulse {
  animation: pulse var(--duration-slow) var(--ease-smooth) infinite;
}

.hero-heading--glitch {
  position: relative;
}

.hero-heading--glitch::before,
.hero-heading--glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-heading--glitch::before {
  animation: glitch-1 2s infinite;
  color: var(--color-acid-primary);
  z-index: -1;
}

.hero-heading--glitch::after {
  animation: glitch-2 2s infinite;
  color: var(--color-pink-primary);
  z-index: -2;
}

@keyframes glitch-1 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-5px, -2px); }
  40% { transform: translate(-5px, -2px); }
  60% { transform: translate(5px, 2px); }
  80% { transform: translate(5px, -2px); }
}

@keyframes glitch-2 {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(5px, 2px); }
  40% { transform: translate(5px, 2px); }
  60% { transform: translate(-5px, -2px); }
  80% { transform: translate(-5px, 2px); }
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .hero-heading {
    font-size: var(--text-5xl);
  }
}
```

**Storybook Story:**

```tsx
// HeroHeading.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { HeroHeading } from './HeroHeading';

const meta: Meta<typeof HeroHeading> = {
  title: 'Atoms/Typography/HeroHeading',
  component: HeroHeading,
  parameters: {
    backgrounds: { default: 'void' }
  }
};

export default meta;
type Story = StoryObj<typeof HeroHeading>;

export const Default: Story = {
  args: {
    children: 'SHAKE IT!',
    animate: 'pulse',
    color: 'acid'
  }
};

export const Pink: Story = {
  args: {
    children: 'ROUND 1',
    animate: 'pulse',
    color: 'pink'
  }
};

export const Glitch: Story = {
  args: {
    children: 'SIGNAL LOST',
    animate: 'glitch',
    color: 'white'
  }
};
```

---

## 3. Button Components

### 3.1 Primary Neon Button

```tsx
// components/NeonButton.tsx
import React from 'react';
import './NeonButton.css';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const NeonButton: React.FC<NeonButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`
        neon-btn
        neon-btn--${variant}
        neon-btn--${size}
        ${fullWidth ? 'neon-btn--full' : ''}
        ${className}
      `.trim()}
      {...props}
    >
      <span className="neon-btn__text">{children}</span>
      <span className="neon-btn__glow" aria-hidden="true"></span>
    </button>
  );
};
```

```css
/* components/NeonButton.css */
.neon-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: var(--font-bold);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  border: none;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--duration-base) var(--ease-liquid);
  overflow: hidden;
  user-select: none;
}

.neon-btn:focus-visible {
  outline: var(--focus-ring);
  outline-offset: var(--focus-offset);
}

.neon-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.neon-btn__text {
  position: relative;
  z-index: 2;
}

.neon-btn__glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity var(--duration-base) var(--ease-out);
}

/* Sizes */
.neon-btn--sm {
  height: var(--btn-sm-height);
  padding: var(--btn-sm-padding);
  font-size: var(--text-sm);
}

.neon-btn--md {
  height: var(--btn-md-height);
  padding: var(--btn-md-padding);
  font-size: var(--text-base);
}

.neon-btn--lg {
  height: var(--btn-lg-height);
  padding: var(--btn-lg-padding);
  font-size: var(--text-lg);
}

.neon-btn--xl {
  height: var(--btn-xl-height);
  padding: var(--btn-xl-padding);
  font-size: var(--text-2xl);
}

.neon-btn--full {
  width: 100%;
}

/* Primary Variant (Acid Green) */
.neon-btn--primary {
  background: var(--btn-primary-bg);
  color: var(--btn-primary-text);
  box-shadow: var(--btn-primary-glow);
}

.neon-btn--primary:hover:not(:disabled) {
  transform: scale(1.05);
  box-shadow: var(--glow-acid-xl);
}

.neon-btn--primary:active:not(:disabled) {
  transform: scale(0.98);
}

/* Secondary Variant (Pink) */
.neon-btn--secondary {
  background: var(--btn-secondary-bg);
  color: var(--btn-secondary-text);
  box-shadow: var(--btn-secondary-glow);
}

.neon-btn--secondary:hover:not(:disabled) {
  transform: scale(1.05);
  box-shadow: var(--glow-pink-xl);
}

.neon-btn--secondary:active:not(:disabled) {
  transform: scale(0.98);
}

/* Ghost Variant (Transparent with border) */
.neon-btn--ghost {
  background: var(--btn-ghost-bg);
  color: var(--btn-ghost-text);
  border: var(--btn-ghost-border);
}

.neon-btn--ghost:hover:not(:disabled) {
  background: rgba(204, 255, 0, 0.1);
  box-shadow: var(--glow-acid-md);
}
```

**Storybook Story:**

```tsx
// NeonButton.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { NeonButton } from './NeonButton';

const meta: Meta<typeof NeonButton> = {
  title: 'Atoms/Buttons/NeonButton',
  component: NeonButton,
  parameters: {
    backgrounds: { default: 'void' }
  }
};

export default meta;
type Story = StoryObj<typeof NeonButton>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Join Game'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'lg',
    children: 'Start Game'
  }
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
    children: 'Settings'
  }
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    size: 'xl',
    children: 'Submit Answer',
    fullWidth: true
  }
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Waiting...',
    disabled: true
  }
};
```

---

## 4. Avatar Component

```tsx
// components/Avatar.tsx
import React from 'react';
import './Avatar.css';

interface AvatarProps {
  shape: 'cube' | 'pyramid';
  color: 'acid' | 'pink';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  playerName?: string;
  isActive?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
  shape,
  color,
  size = 'md',
  playerName,
  isActive = false
}) => {
  return (
    <div
      className={`
        avatar
        avatar--${size}
        avatar--${color}
        ${isActive ? 'avatar--active' : ''}
      `.trim()}
      role="img"
      aria-label={playerName ? `${playerName}'s avatar` : 'Player avatar'}
    >
      <div className="avatar__shape">
        {shape === 'cube' ? '⬛' : '🔺'}
      </div>
      {playerName && (
        <div className="avatar__name">{playerName}</div>
      )}
    </div>
  );
};
```

```css
/* components/Avatar.css */
.avatar {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
}

.avatar__shape {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  transition: all var(--duration-base) var(--ease-liquid);
}

.avatar__name {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--text-secondary);
  text-align: center;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Sizes */
.avatar--xs .avatar__shape {
  width: var(--avatar-xs);
  height: var(--avatar-xs);
  font-size: var(--text-base);
}

.avatar--sm .avatar__shape {
  width: var(--avatar-sm);
  height: var(--avatar-sm);
  font-size: var(--text-xl);
}

.avatar--md .avatar__shape {
  width: var(--avatar-md);
  height: var(--avatar-md);
  font-size: var(--text-3xl);
}

.avatar--lg .avatar__shape {
  width: var(--avatar-lg);
  height: var(--avatar-lg);
  font-size: var(--text-5xl);
}

.avatar--xl .avatar__shape {
  width: var(--avatar-xl);
  height: var(--avatar-xl);
  font-size: var(--text-6xl);
}

.avatar--2xl .avatar__shape {
  width: var(--avatar-2xl);
  height: var(--avatar-2xl);
  font-size: var(--text-7xl);
}

/* Colors */
.avatar--acid .avatar__shape {
  background: var(--bg-gradient-acid);
  box-shadow: var(--glow-acid-md);
}

.avatar--pink .avatar__shape {
  background: var(--bg-gradient-pink);
  box-shadow: var(--glow-pink-md);
}

/* Active State */
.avatar--active .avatar__shape {
  animation: float var(--duration-glacial) var(--ease-smooth) infinite;
}

.avatar--active.avatar--acid .avatar__shape {
  box-shadow: var(--glow-acid-lg);
}

.avatar--active.avatar--pink .avatar__shape {
  box-shadow: var(--glow-pink-lg);
}
```

---

## 5. Card Component (Liquid Morphing)

```tsx
// components/LiquidCard.tsx
import React from 'react';
import './LiquidCard.css';

interface LiquidCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'glow' | 'winner';
  animate?: boolean;
}

export const LiquidCard: React.FC<LiquidCardProps> = ({
  children,
  variant = 'default',
  animate = true
}) => {
  return (
    <div
      className={`
        liquid-card
        liquid-card--${variant}
        ${animate ? 'liquid-card--animate' : ''}
      `.trim()}
    >
      {children}
    </div>
  );
};
```

```css
/* components/LiquidCard.css */
.liquid-card {
  background: var(--card-bg);
  border: var(--card-border);
  padding: var(--card-padding);
  box-shadow: var(--card-shadow);
  backdrop-filter: blur(10px);
  transition: all var(--duration-base) var(--ease-liquid);
}

.liquid-card--animate {
  border-radius: var(--radius-blob);
  animation: liquid var(--duration-glacial) var(--ease-smooth) infinite;
}

.liquid-card--glow {
  box-shadow: var(--card-shadow), var(--glow-purple-sm);
}

.liquid-card--winner {
  background: linear-gradient(135deg, rgba(204, 255, 0, 0.2) 0%, rgba(157, 0, 255, 0.2) 100%);
  border: 2px solid var(--color-acid-primary);
  box-shadow: var(--shadow-xl), var(--glow-acid-lg);
}

.liquid-card:hover {
  transform: scale(1.02);
}
```

---

## 6. Input Field

```tsx
// components/NeonInput.tsx
import React from 'react';
import './NeonInput.css';

interface NeonInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const NeonInput: React.FC<NeonInputProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="neon-input-wrapper">
      {label && (
        <label className="neon-input__label" htmlFor={props.id}>
          {label}
        </label>
      )}
      <input
        className={`neon-input ${error ? 'neon-input--error' : ''} ${className}`}
        {...props}
      />
      {error && (
        <span className="neon-input__error">{error}</span>
      )}
    </div>
  );
};
```

```css
/* components/NeonInput.css */
.neon-input-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.neon-input__label {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
}

.neon-input {
  width: 100%;
  height: var(--input-height);
  padding: var(--input-padding);
  background: var(--input-bg);
  border: var(--input-border);
  border-radius: var(--input-radius);
  color: var(--input-text);
  font-family: var(--font-body);
  font-size: var(--text-base);
  transition: all var(--duration-base) var(--ease-out);
}

.neon-input::placeholder {
  color: var(--input-placeholder);
}

.neon-input:focus {
  outline: none;
  border: var(--input-border-focus);
  box-shadow: var(--glow-acid-sm);
}

.neon-input--error {
  border: 2px solid var(--color-error);
}

.neon-input--error:focus {
  box-shadow: var(--glow-pink-sm);
}

.neon-input__error {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-error);
}
```

---

## 7. Timer/Progress Bar

```tsx
// components/CircularTimer.tsx
import React from 'react';
import './CircularTimer.css';

interface CircularTimerProps {
  timeLeft: number;
  totalTime: number;
  size?: number;
  warning?: boolean;
}

export const CircularTimer: React.FC<CircularTimerProps> = ({
  timeLeft,
  totalTime,
  size = 200,
  warning = false
}) => {
  const progress = (timeLeft / totalTime) * 100;
  const circumference = 2 * Math.PI * 85;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="circular-timer" style={{ width: size, height: size }}>
      <svg className="circular-timer__svg" viewBox="0 0 200 200">
        <circle
          className="circular-timer__track"
          cx="100"
          cy="100"
          r="85"
          fill="none"
          strokeWidth="10"
        />
        <circle
          className={`circular-timer__progress ${warning ? 'circular-timer__progress--warning' : ''}`}
          cx="100"
          cy="100"
          r="85"
          fill="none"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 100 100)"
        />
      </svg>
      <div className={`circular-timer__text ${warning ? 'circular-timer__text--warning' : ''}`}>
        {timeLeft}
      </div>
    </div>
  );
};
```

```css
/* components/CircularTimer.css */
.circular-timer {
  position: relative;
  display: inline-block;
}

.circular-timer__svg {
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
}

.circular-timer__track {
  stroke: rgba(255, 255, 255, 0.1);
}

.circular-timer__progress {
  stroke: var(--color-acid-primary);
  stroke-linecap: round;
  transition: stroke-dashoffset var(--duration-base) linear;
  filter: drop-shadow(var(--glow-acid-md));
}

.circular-timer__progress--warning {
  stroke: var(--color-error);
  filter: drop-shadow(var(--glow-pink-md));
  animation: pulse var(--duration-fast) var(--ease-smooth) infinite;
}

.circular-timer__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-kinetic);
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  color: var(--text-primary);
  text-shadow: var(--glow-white-sm);
}

.circular-timer__text--warning {
  color: var(--color-error);
  text-shadow: var(--glow-pink-md);
  animation: shake var(--duration-medium) var(--ease-linear) infinite;
}
```

---

## 8. Usage in Storybook

### Example Story File (Full Page Layout)

```tsx
// Host/Lobby.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { HeroHeading } from '../components/HeroHeading';
import { Avatar } from '../components/Avatar';
import { NeonButton } from '../components/NeonButton';

const LobbyScreen = () => {
  return (
    <div style={{
      background: 'var(--bg-void)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-8)',
      gap: 'var(--space-12)'
    }}>
      <HeroHeading color="acid" animate="pulse">
        THE VIVA LOUNGE
      </HeroHeading>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 'var(--space-8)',
        maxWidth: '800px'
      }}>
        <Avatar shape="cube" color="acid" size="lg" playerName="Player 1" isActive />
        <Avatar shape="pyramid" color="pink" size="lg" playerName="Player 2" />
        <Avatar shape="cube" color="pink" size="lg" playerName="Player 3" />
        <Avatar shape="pyramid" color="acid" size="lg" playerName="Player 4" />
      </div>

      <NeonButton variant="primary" size="xl" fullWidth style={{ maxWidth: '400px' }}>
        Start Game
      </NeonButton>
    </div>
  );
};

const meta: Meta = {
  title: 'Organisms/Host/Lobby',
  component: LobbyScreen,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'void' }
  }
};

export default meta;
type Story = StoryObj<typeof LobbyScreen>;

export const Default: Story = {};
```

---

## 9. Next Steps

1. Copy these components into your `/packages/ui/src/components` directory
2. Import the design tokens CSS in your root layout
3. Create Storybook stories for each component
4. Build additional molecules using these atoms
5. Test responsiveness and accessibility

---

**These examples are production-ready and follow best practices for:**
- Accessibility (ARIA labels, keyboard navigation)
- Performance (CSS transitions over JS animations)
- Responsiveness (fluid typography, mobile-first)
- Maintainability (design tokens, consistent naming)
