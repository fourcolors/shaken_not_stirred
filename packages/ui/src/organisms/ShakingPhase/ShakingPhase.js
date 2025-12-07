import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { Avatar } from '../../atoms/Avatar';
import styles from './ShakingPhase.module.css';
/**
 * Host display during the shaking phase.
 * Shows all players' shake progress as they physically shake their phones.
 */
export function ShakingPhase({ players, targetShakes, timeRemaining, className, }) {
    const completedCount = players.filter((p) => p.hasCompleted).length;
    return (_jsxs("div", { className: clsx(styles.phase, className), children: [_jsxs("header", { className: styles.header, children: [_jsx(Typography, { variant: "h2", glow: true, className: styles.title, children: "\uD83C\uDF78 SHAKE IT!" }), timeRemaining !== undefined && (_jsxs(Typography, { variant: "h3", color: "accent", children: [timeRemaining, "s"] }))] }), _jsx("div", { className: styles.instruction, children: _jsx(Typography, { variant: "body", color: "muted", children: "Shake your phone to mix your cocktail!" }) }), _jsx("div", { className: styles.playersGrid, children: players.map((player) => (_jsxs("div", { className: clsx(styles.playerCard, player.hasCompleted && styles.completed), children: [_jsxs("div", { className: styles.avatarContainer, children: [_jsx(Avatar, { shape: player.avatarShape, color: player.avatarColor, size: "lg", className: clsx(!player.hasCompleted && player.shakeProgress > 0 && styles.shaking) }), player.hasCompleted && (_jsx("div", { className: styles.completedBadge, children: "\u2713" }))] }), _jsx(Typography, { variant: "label", className: styles.playerName, children: player.name }), _jsxs("div", { className: styles.progressContainer, children: [_jsx("div", { className: styles.progressBar, children: _jsx("div", { className: styles.progressFill, style: {
                                            width: `${player.shakeProgress}%`,
                                            backgroundColor: player.avatarColor,
                                        } }) }), _jsxs(Typography, { variant: "caption", color: "muted", children: [Math.round(player.shakeProgress), "%"] })] }), _jsx("div", { className: styles.liquidFill, style: {
                                height: `${player.shakeProgress}%`,
                                backgroundColor: player.avatarColor,
                            } })] }, player.id))) }), _jsx("div", { className: styles.status, children: _jsxs(Typography, { variant: "h4", color: "accent", glow: true, children: [completedCount, " / ", players.length, " Ready"] }) })] }));
}
export default ShakingPhase;
//# sourceMappingURL=ShakingPhase.js.map