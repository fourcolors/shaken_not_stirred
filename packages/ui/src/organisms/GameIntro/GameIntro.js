import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import styles from './GameIntro.module.css';
/**
 * Game intro animation shown at the start of each round.
 * Displays round number with dramatic reveal animation.
 */
export function GameIntro({ roundNumber, totalRounds, theme, onComplete, duration = 3000, className, }) {
    const [phase, setPhase] = useState('entering');
    useEffect(() => {
        const enterTimer = setTimeout(() => setPhase('showing'), 500);
        const exitTimer = setTimeout(() => setPhase('exiting'), duration - 500);
        const completeTimer = setTimeout(() => onComplete?.(), duration);
        return () => {
            clearTimeout(enterTimer);
            clearTimeout(exitTimer);
            clearTimeout(completeTimer);
        };
    }, [duration, onComplete]);
    return (_jsxs("div", { className: clsx(styles.intro, styles[phase], className), children: [_jsx("div", { className: styles.flash }), _jsxs("div", { className: styles.content, children: [_jsx(Typography, { variant: "label", color: "muted", className: styles.label, children: "ROUND" }), _jsxs("div", { className: styles.numberContainer, children: [_jsx("span", { className: styles.number, children: roundNumber }), _jsx("span", { className: styles.numberGhost, children: roundNumber }), _jsx("span", { className: styles.numberGhost2, children: roundNumber })] }), _jsxs(Typography, { variant: "body", color: "muted", className: styles.total, children: ["of ", totalRounds] }), theme && (_jsx("div", { className: styles.theme, children: _jsx(Typography, { variant: "h4", color: "secondary", glow: true, children: theme }) }))] }), _jsxs("div", { className: styles.lines, children: [_jsx("div", { className: styles.line }), _jsx("div", { className: styles.line }), _jsx("div", { className: styles.line })] })] }));
}
export default GameIntro;
//# sourceMappingURL=GameIntro.js.map