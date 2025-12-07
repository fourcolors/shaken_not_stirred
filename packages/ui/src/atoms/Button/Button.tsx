import React, { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Show loading spinner and disable interactions */
  isLoading?: boolean;
  /** Expand to full width of container */
  fullWidth?: boolean;
  /** Enable neon glow effect */
  glow?: boolean;
  /** Button content */
  children: ReactNode;
}

/**
 * Primary interactive button component with Acid Lounge styling.
 * Supports multiple variants, sizes, and visual effects.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="lg" glow>
 *   Start Game
 * </Button>
 * ```
 */
export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  glow = false,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        glow && styles.glow,
        isLoading && styles.loading,
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className={styles.spinner} aria-hidden="true" />
      ) : null}
      <span className={clsx(styles.content, isLoading && styles.hidden)}>
        {children}
      </span>
    </button>
  );
}

export default Button;
