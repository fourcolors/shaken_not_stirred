import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { clsx } from 'clsx';
import styles from './Input.module.css';
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
export const Input = forwardRef(({ size = 'md', hasError = false, panicMode = false, glow = true, label, errorMessage, className, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    return (_jsxs("div", { className: styles.wrapper, children: [label && (_jsx("label", { htmlFor: inputId, className: styles.label, children: label })), _jsx("input", { ref: ref, id: inputId, className: clsx(styles.input, styles[size], hasError && styles.error, panicMode && styles.panic, glow && styles.glow, className), ...props }), errorMessage && (_jsx("span", { className: styles.errorMessage, children: errorMessage }))] }));
});
Input.displayName = 'Input';
export default Input;
//# sourceMappingURL=Input.js.map