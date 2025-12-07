import React, { type ReactNode, type ElementType } from 'react';
import { clsx } from 'clsx';
import styles from './Typography.module.css';

export type TypographyVariant =
  | 'hero'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body'
  | 'body-sm'
  | 'caption'
  | 'label';

export type TypographyColor =
  | 'primary'
  | 'secondary'
  | 'muted'
  | 'accent'
  | 'success'
  | 'error'
  | 'inherit';

export interface TypographyProps {
  /** Typography style variant */
  variant?: TypographyVariant;
  /** Text color */
  color?: TypographyColor;
  /** Apply neon glow effect */
  glow?: boolean;
  /** Use kinetic/futuristic font (Orbitron) */
  kinetic?: boolean;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Render as different HTML element */
  as?: ElementType;
  /** Additional CSS class */
  className?: string;
  /** Text content */
  children: ReactNode;
}

const variantToElement: Record<TypographyVariant, ElementType> = {
  hero: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  'body-sm': 'p',
  caption: 'span',
  label: 'label',
};

/**
 * Typography component for consistent text styling with Acid Lounge aesthetic.
 * Supports display fonts, neon glow effects, and kinetic styling.
 *
 * @example
 * ```tsx
 * <Typography variant="hero" glow kinetic>
 *   SHAKEN NOT STIRRED
 * </Typography>
 * ```
 */
export function Typography({
  variant = 'body',
  color = 'primary',
  glow = false,
  kinetic = false,
  align,
  as,
  className,
  children,
}: TypographyProps) {
  const Component = as || variantToElement[variant];

  return (
    <Component
      className={clsx(
        styles.typography,
        styles[variant],
        styles[`color-${color}`],
        glow && styles.glow,
        kinetic && styles.kinetic,
        align && styles[`align-${align}`],
        className
      )}
    >
      {children}
    </Component>
  );
}

export default Typography;
