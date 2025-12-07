import { jsx as _jsx } from "react/jsx-runtime";
import { clsx } from 'clsx';
import styles from './Typography.module.css';
const variantToElement = {
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
export function Typography({ variant = 'body', color = 'primary', glow = false, kinetic = false, align, as, className, children, }) {
    const Component = as || variantToElement[variant];
    return (_jsx(Component, { className: clsx(styles.typography, styles[variant], styles[`color-${color}`], glow && styles.glow, kinetic && styles.kinetic, align && styles[`align-${align}`], className), children: children }));
}
export default Typography;
//# sourceMappingURL=Typography.js.map