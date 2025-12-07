import React, { type InputHTMLAttributes } from 'react';
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
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;
//# sourceMappingURL=Input.d.ts.map