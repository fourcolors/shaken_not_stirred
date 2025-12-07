import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { PlayerCard } from '../../molecules/PlayerCard';
import styles from './RoundSummary.module.css';
/**
 * Round summary screen showing current standings.
 * Displays leaderboard with score changes after each round.
 */
export function RoundSummary({ roundNumber, totalRounds, players, onContinue, isFinalRound = false, className, }) {
    return (_jsxs("div", { className: clsx(styles.summary, className), children: [_jsxs("header", { className: styles.header, children: [_jsx(Typography, { variant: "label", color: "muted", children: isFinalRound ? 'Final Results' : `Round ${roundNumber} of ${totalRounds}` }), _jsx(Typography, { variant: "h2", glow: true, children: isFinalRound ? '🏆 Final Standings' : 'Leaderboard' })] }), _jsx("div", { className: styles.leaderboard, children: players.map((player, index) => {
                    const rankChange = player.previousRank
                        ? player.previousRank - player.rank
                        : 0;
                    return (_jsxs("div", { className: clsx(styles.leaderboardRow, index === 0 && styles.leader), style: { animationDelay: `${index * 0.1}s` }, children: [_jsxs("div", { className: styles.rank, children: [_jsx(Typography, { variant: "h3", color: index === 0 ? 'accent' : 'primary', glow: index === 0, children: player.rank }), rankChange !== 0 && (_jsxs("span", { className: clsx(styles.rankChange, rankChange > 0 ? styles.rankUp : styles.rankDown), children: [rankChange > 0 ? '↑' : '↓', Math.abs(rankChange)] }))] }), _jsx("div", { className: styles.playerInfo, children: _jsx(PlayerCard, { name: player.name, shape: player.avatarShape, color: player.avatarColor, score: player.score }) }), _jsx("div", { className: styles.pointsEarned, children: player.roundPoints > 0 && (_jsxs(Typography, { variant: "label", color: "accent", glow: true, children: ["+", player.roundPoints] })) }), _jsx("div", { className: styles.totalScore, children: _jsx(Typography, { variant: "h3", color: "primary", glow: true, children: player.score }) })] }, player.id));
                }) }), !isFinalRound && (_jsx("footer", { className: styles.footer, children: _jsxs(Typography, { variant: "body", color: "muted", children: [totalRounds - roundNumber, " round", totalRounds - roundNumber !== 1 ? 's' : '', " remaining"] }) }))] }));
}
export default RoundSummary;
//# sourceMappingURL=RoundSummary.js.map