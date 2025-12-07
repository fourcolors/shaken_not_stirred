import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { Timer } from '../../molecules/Timer';
import { PlayerCard } from '../../molecules/PlayerCard';
import styles from './WritingPhase.module.css';
/**
 * Host display during the writing phase.
 * Shows prompt, timer, and player submission status.
 */
export function WritingPhase({ prompt, timeRemaining, totalTime, players, isPanic = false, onTimeUp, className, }) {
    const submittedCount = players.filter((p) => p.hasSubmitted).length;
    const progress = (totalTime - timeRemaining) / totalTime;
    return (_jsxs("div", { className: clsx(styles.phase, isPanic && styles.panic, className), children: [_jsx("div", { className: styles.timerSection, children: _jsx(Timer, { duration: totalTime, timeRemaining: timeRemaining, variant: "circular", size: "lg", panicThreshold: 10, onComplete: onTimeUp }) }), _jsxs("div", { className: styles.promptSection, children: [_jsx(Typography, { variant: "label", color: "muted", children: "The Prompt" }), _jsx(Typography, { variant: "h2", glow: true, className: styles.prompt, children: prompt })] }), _jsxs("div", { className: styles.playersSection, children: [_jsxs("div", { className: styles.statusHeader, children: [_jsx(Typography, { variant: "label", color: "muted", children: "Answers Submitted" }), _jsxs(Typography, { variant: "h4", color: "accent", glow: true, children: [submittedCount, " / ", players.length] })] }), _jsx("div", { className: styles.playerGrid, children: players.map((player) => (_jsxs("div", { className: clsx(styles.playerStatus, player.hasSubmitted && styles.submitted), children: [_jsx(PlayerCard, { name: player.name, shape: player.avatarShape, color: player.avatarColor }), _jsx("div", { className: styles.statusIndicator, children: player.hasSubmitted ? (_jsx("span", { className: styles.checkmark, children: "\u2713" })) : (_jsx("span", { className: styles.writing, children: "..." })) })] }, player.id))) })] }), _jsx("div", { className: styles.progressBar, children: _jsx("div", { className: styles.progressFill, style: { width: `${progress * 100}%` } }) })] }));
}
export default WritingPhase;
//# sourceMappingURL=WritingPhase.js.map