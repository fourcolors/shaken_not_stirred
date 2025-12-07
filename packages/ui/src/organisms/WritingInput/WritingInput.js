import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { Button } from '../../atoms/Button';
import { Timer } from '../../molecules/Timer';
import styles from './WritingInput.module.css';
/**
 * Phone input screen for writing answers.
 * Players type their answer and submit before time runs out.
 */
export function WritingInput({ prompt, timeRemaining, totalTime, maxLength = 100, isSubmitted = false, isPanic = false, onSubmit, className, }) {
    const [answer, setAnswer] = useState('');
    const handleSubmit = () => {
        if (answer.trim()) {
            onSubmit?.(answer.trim());
        }
    };
    const charactersLeft = maxLength - answer.length;
    if (isSubmitted) {
        return (_jsx("div", { className: clsx(styles.writingInput, styles.submitted, className), children: _jsxs("div", { className: styles.submittedContent, children: [_jsx("div", { className: styles.checkmark, children: "\u2713" }), _jsx(Typography, { variant: "h3", color: "accent", glow: true, children: "Answer Submitted!" }), _jsx(Typography, { variant: "body", color: "muted", children: "Waiting for other players..." })] }) }));
    }
    return (_jsxs("div", { className: clsx(styles.writingInput, isPanic && styles.panic, className), children: [_jsx("div", { className: styles.timerSection, children: _jsx(Timer, { duration: totalTime, timeRemaining: timeRemaining, variant: "circular", size: "md", panicThreshold: 10 }) }), _jsxs("div", { className: styles.promptSection, children: [_jsx(Typography, { variant: "label", color: "muted", children: "The Prompt" }), _jsx(Typography, { variant: "h4", glow: true, className: styles.prompt, children: prompt })] }), _jsxs("div", { className: styles.inputSection, children: [_jsx("textarea", { value: answer, onChange: (e) => setAnswer(e.target.value.slice(0, maxLength)), placeholder: "Type your answer...", className: clsx(styles.textarea, isPanic && styles.textareaPanic), autoFocus: true, rows: 4 }), _jsx("div", { className: styles.charCount, children: _jsxs(Typography, { variant: "caption", color: charactersLeft < 20 ? 'error' : 'muted', children: [charactersLeft, " characters left"] }) })] }), _jsx(Button, { variant: "primary", size: "lg", fullWidth: true, glow: true, onClick: handleSubmit, disabled: !answer.trim(), children: "Submit Answer" })] }));
}
export default WritingInput;
//# sourceMappingURL=WritingInput.js.map