import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { Timer } from '../../molecules/Timer';
import styles from './VotingPad.module.css';
/**
 * Phone voting interface.
 * Players tap left or right to vote for their favorite answer.
 */
export function VotingPad({ prompt, answerA, answerB, timeRemaining, totalTime, hasVoted = false, onVote, className, }) {
    const [selected, setSelected] = useState(null);
    const handleVote = (choice) => {
        if (!hasVoted && !selected) {
            setSelected(choice);
            onVote?.(choice);
        }
    };
    if (hasVoted || selected) {
        return (_jsx("div", { className: clsx(styles.votingPad, styles.voted, className), children: _jsxs("div", { className: styles.votedContent, children: [_jsx(Typography, { variant: "h3", color: "accent", glow: true, children: "Vote Cast! \uD83D\uDDF3\uFE0F" }), _jsx(Typography, { variant: "body", color: "muted", children: "Waiting for results..." })] }) }));
    }
    return (_jsxs("div", { className: clsx(styles.votingPad, className), children: [_jsx("div", { className: styles.timerSection, children: _jsx(Timer, { duration: totalTime, timeRemaining: timeRemaining, variant: "bar", size: "sm" }) }), _jsx("div", { className: styles.promptSection, children: _jsx(Typography, { variant: "caption", color: "muted", children: prompt }) }), _jsx(Typography, { variant: "label", color: "muted", className: styles.instruction, children: "Tap your favorite answer" }), _jsxs("div", { className: styles.options, children: [_jsxs("button", { className: clsx(styles.option, styles.optionA), onClick: () => handleVote('A'), children: [_jsxs(Typography, { variant: "h4", className: styles.answerText, children: ["\"", answerA, "\""] }), _jsx("div", { className: styles.tapHint, children: "TAP" })] }), _jsx("div", { className: styles.divider, children: _jsx(Typography, { variant: "caption", color: "muted", children: "VS" }) }), _jsxs("button", { className: clsx(styles.option, styles.optionB), onClick: () => handleVote('B'), children: [_jsxs(Typography, { variant: "h4", className: styles.answerText, children: ["\"", answerB, "\""] }), _jsx("div", { className: styles.tapHint, children: "TAP" })] })] })] }));
}
export default VotingPad;
//# sourceMappingURL=VotingPad.js.map