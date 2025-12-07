import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { clsx } from 'clsx';
import { Avatar } from '../../atoms/Avatar';
import { Typography } from '../../atoms/Typography';
import styles from './PlayerCard.module.css';
/**
 * Player card molecule displaying avatar, name, score, and status.
 * Used in lobby grids and leaderboards.
 *
 * @example
 * ```tsx
 * <PlayerCard
 *   name="Alice"
 *   shape="cube"
 *   color="#CCFF00"
 *   score={1500}
 *   scoreDelta={500}
 *   rank={1}
 *   isVIP
 * />
 * ```
 */
export function PlayerCard({ name, shape = 'cube', color = '#CCFF00', score, scoreDelta, rank, isVIP = false, isDJ = false, isDrinking = false, isActive = false, hasSubmitted = false, className, }) {
    return (_jsxs("div", { className: clsx(styles.card, isActive && styles.active, hasSubmitted && styles.submitted, className), style: {
            '--player-color': color,
        }, children: [rank !== undefined && (_jsx("div", { className: styles.rank, children: _jsxs(Typography, { variant: "label", color: "muted", children: ["#", rank] }) })), _jsx(Avatar, { name: name, shape: shape, color: color, size: "md", isVIP: isVIP, isDJ: isDJ, isDrinking: isDrinking, animated: !hasSubmitted }), score !== undefined && (_jsxs("div", { className: styles.scoreSection, children: [_jsx(Typography, { variant: "h4", color: "primary", className: styles.score, children: score.toLocaleString() }), scoreDelta !== undefined && scoreDelta !== 0 && (_jsxs(Typography, { variant: "caption", color: scoreDelta > 0 ? 'success' : 'error', glow: true, className: styles.delta, children: [scoreDelta > 0 ? '+' : '', scoreDelta] }))] })), hasSubmitted && (_jsx("div", { className: styles.submittedBadge, children: _jsx(Typography, { variant: "caption", color: "success", children: "\u2713 Locked In" }) }))] }));
}
export default PlayerCard;
//# sourceMappingURL=PlayerCard.js.map