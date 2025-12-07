import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { Avatar } from '../../atoms/Avatar';
import { Button } from '../../atoms/Button';
import styles from './Podium.module.css';
/**
 * Final podium screen showing top 3 winners with confetti.
 * Displays winners with celebration animations.
 */
export function Podium({ winners, onPlayAgain, onExit, className, }) {
    const [showConfetti, setShowConfetti] = useState(false);
    const [revealed, setRevealed] = useState([false, false, false]);
    // Staggered reveal animation
    useEffect(() => {
        const timers = [
            setTimeout(() => setRevealed((r) => [true, r[1], r[2]]), 500), // 3rd place
            setTimeout(() => setRevealed((r) => [r[0], true, r[2]]), 1200), // 2nd place
            setTimeout(() => setRevealed((r) => [r[0], r[1], true]), 2000), // 1st place
            setTimeout(() => setShowConfetti(true), 2200),
        ];
        return () => timers.forEach(clearTimeout);
    }, []);
    const first = winners.find((w) => w.rank === 1);
    const second = winners.find((w) => w.rank === 2);
    const third = winners.find((w) => w.rank === 3);
    return (_jsxs("div", { className: clsx(styles.podium, className), children: [showConfetti && (_jsx("div", { className: styles.confetti, children: Array.from({ length: 50 }).map((_, i) => (_jsx("div", { className: styles.confettiPiece, style: {
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        backgroundColor: ['#CCFF00', '#FF10F0', '#00FFFF', '#9D00FF', '#FFD700'][Math.floor(Math.random() * 5)],
                    } }, i))) })), _jsx("header", { className: styles.header, children: _jsx(Typography, { variant: "h1", glow: true, className: styles.title, children: "\uD83C\uDFC6 WINNERS \uD83C\uDFC6" }) }), _jsxs("div", { className: styles.podiumStands, children: [_jsxs("div", { className: clsx(styles.stand, styles.second, revealed[1] && styles.revealed), children: [_jsxs("div", { className: styles.playerContainer, children: [_jsx(Avatar, { shape: second.avatarShape, color: second.avatarColor, size: "xl", className: styles.avatar }), _jsx(Typography, { variant: "h4", glow: true, children: second.name }), _jsxs(Typography, { variant: "body", color: "muted", children: [second.score, " pts"] })] }), _jsx("div", { className: styles.standBase, children: _jsx(Typography, { variant: "h2", color: "muted", children: "2" }) })] }), _jsxs("div", { className: clsx(styles.stand, styles.first, revealed[2] && styles.revealed), children: [_jsxs("div", { className: styles.playerContainer, children: [_jsx("div", { className: styles.crown, children: "\uD83D\uDC51" }), _jsx(Avatar, { shape: first.avatarShape, color: first.avatarColor, size: "xl", className: styles.avatar }), _jsx(Typography, { variant: "h3", color: "accent", glow: true, children: first.name }), _jsxs(Typography, { variant: "body", color: "accent", children: [first.score, " pts"] })] }), _jsx("div", { className: clsx(styles.standBase, styles.goldBase), children: _jsx(Typography, { variant: "h1", color: "accent", glow: true, children: "1" }) })] }), _jsxs("div", { className: clsx(styles.stand, styles.third, revealed[0] && styles.revealed), children: [_jsxs("div", { className: styles.playerContainer, children: [_jsx(Avatar, { shape: third.avatarShape, color: third.avatarColor, size: "xl", className: styles.avatar }), _jsx(Typography, { variant: "h4", glow: true, children: third.name }), _jsxs(Typography, { variant: "body", color: "muted", children: [third.score, " pts"] })] }), _jsx("div", { className: styles.standBase, children: _jsx(Typography, { variant: "h2", color: "muted", children: "3" }) })] })] }), _jsxs("footer", { className: styles.actions, children: [_jsx(Button, { variant: "primary", size: "lg", glow: true, onClick: onPlayAgain, children: "Play Again" }), _jsx(Button, { variant: "ghost", size: "lg", onClick: onExit, children: "Exit" })] })] }));
}
export default Podium;
//# sourceMappingURL=Podium.js.map