import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import styles from './ShakeSubmit.module.css';
/**
 * Phone shake-to-submit screen.
 * Players physically shake their phone to "mix their cocktail".
 */
export function ShakeSubmit({ progress, targetShakes, currentShakes, isComplete = false, className, }) {
    if (isComplete) {
        return (_jsx("div", { className: clsx(styles.shakeSubmit, styles.complete, className), children: _jsxs("div", { className: styles.completeContent, children: [_jsx("div", { className: styles.cocktailIcon, children: "\uD83C\uDF78" }), _jsx(Typography, { variant: "h2", color: "accent", glow: true, children: "Mixed!" }), _jsx(Typography, { variant: "body", color: "muted", children: "Your cocktail is ready" })] }) }));
    }
    return (_jsxs("div", { className: clsx(styles.shakeSubmit, progress > 0 && styles.shaking, className), children: [_jsxs("div", { className: styles.glassContainer, children: [_jsxs("div", { className: styles.glass, children: [_jsx("div", { className: styles.liquid, style: { height: `${progress}%` } }), _jsx("div", { className: styles.bubbles, children: Array.from({ length: 5 }).map((_, i) => (_jsx("div", { className: styles.bubble, style: {
                                        left: `${20 + i * 15}%`,
                                        animationDelay: `${i * 0.2}s`,
                                    } }, i))) })] }), _jsx(Typography, { variant: "h1", className: styles.glassEmoji, children: "\uD83C\uDF78" })] }), _jsxs("div", { className: styles.instruction, children: [_jsx(Typography, { variant: "h2", glow: true, className: styles.shakeText, children: "SHAKE IT!" }), _jsx(Typography, { variant: "body", color: "muted", children: "Shake your phone to mix" })] }), _jsxs("div", { className: styles.progressSection, children: [_jsx("div", { className: styles.progressBar, children: _jsx("div", { className: styles.progressFill, style: { width: `${progress}%` } }) }), _jsxs("div", { className: styles.shakeCount, children: [_jsx(Typography, { variant: "h3", color: "primary", glow: true, children: currentShakes }), _jsxs(Typography, { variant: "caption", color: "muted", children: ["/ ", targetShakes, " shakes"] })] })] })] }));
}
export default ShakeSubmit;
//# sourceMappingURL=ShakeSubmit.js.map