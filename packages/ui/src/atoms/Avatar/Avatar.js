import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { clsx } from 'clsx';
import styles from './Avatar.module.css';
const shapeIcons = {
    cube: '■',
    pyramid: '▲',
    sphere: '●',
    diamond: '◆',
};
/**
 * Player avatar component with geometric shapes and Acid Lounge colors.
 * Displays player identity with optional role indicators.
 *
 * @example
 * ```tsx
 * <Avatar
 *   name="Player 1"
 *   shape="cube"
 *   color="#CCFF00"
 *   isVIP
 *   isDrinking
 * />
 * ```
 */
export function Avatar({ name = '', shape = 'cube', color = '#CCFF00', size = 'md', isDrinking = false, isVIP = false, isDJ = false, animated = true, className, }) {
    return (_jsxs("div", { className: clsx(styles.avatar, styles[size], animated && styles.animated, className), children: [_jsx("div", { className: styles.shape, style: {
                    color: color,
                    textShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
                }, children: shapeIcons[shape] }), name && _jsx("span", { className: styles.name, children: name }), _jsxs("div", { className: styles.badges, children: [isVIP && _jsx("span", { className: styles.badge, title: "VIP", children: "\uD83D\uDC51" }), isDJ && _jsx("span", { className: styles.badge, title: "DJ", children: "\uD83C\uDFA7" }), isDrinking && _jsx("span", { className: styles.badge, title: "Drinking", children: "\uD83C\uDF78" })] })] }));
}
export default Avatar;
//# sourceMappingURL=Avatar.js.map