import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { clsx } from 'clsx';
import styles from './Button.module.css';
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
export function Button({ variant = 'primary', size = 'md', isLoading = false, fullWidth = false, glow = false, disabled, className, children, ...props }) {
    return (_jsxs("button", { className: clsx(styles.button, styles[variant], styles[size], fullWidth && styles.fullWidth, glow && styles.glow, isLoading && styles.loading, className), disabled: disabled || isLoading, ...props, children: [isLoading ? (_jsx("span", { className: styles.spinner, "aria-hidden": "true" })) : null, _jsx("span", { className: clsx(styles.content, isLoading && styles.hidden), children: children })] }));
}
export default Button;
//# sourceMappingURL=Button.js.map