import React, { type InputHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';
import styles from './Input.module.css';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Size of the input */
  size?: InputSize;
  /** Show error styling */
  hasError?: boolean;
  /** Show panic mode (red borders, for timer < 10s) */
  panicMode?: boolean;
  /** Enable neon glow on focus */
  glow?: boolean;
  /** Label text above the input */
  label?: string;
  /** Error message below the input */
  errorMessage?: string;
}

/**
 * Text input component with Acid Lounge styling.
 * Supports panic mode for time-sensitive inputs.
 *
 * @example
 * ```tsx
 * <Input
 *   label="Your Answer"
 *   placeholder="Type something clever..."
 *   panicMode={timeRemaining < 10}
 * />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      hasError = false,
      panicMode = false,
      glow = true,
      label,
      errorMessage,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={styles.wrapper}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={clsx(
            styles.input,
            styles[size],
            hasError && styles.error,
            panicMode && styles.panic,
            glow && styles.glow,
            className
          )}
          {...props}
        />
        {errorMessage && (
          <span className={styles.errorMessage}>{errorMessage}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
