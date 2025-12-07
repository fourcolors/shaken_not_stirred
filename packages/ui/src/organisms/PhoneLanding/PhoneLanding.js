import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { Button } from '../../atoms/Button';
import styles from './PhoneLanding.module.css';
/**
 * Phone landing screen for joining a game.
 * Supports both new join and rejoin flows.
 */
export function PhoneLanding({ mode = 'join', initialRoomCode = '', previousName, isConnecting = false, errorMessage, onJoin, onRejoin, onModeSwitch, className, }) {
    const [roomCode, setRoomCode] = useState(initialRoomCode);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (roomCode.length === 4) {
            onJoin?.(roomCode.toUpperCase());
        }
    };
    const handleCodeChange = (value) => {
        // Only allow letters, max 4 characters
        const cleaned = value.replace(/[^a-zA-Z]/g, '').toUpperCase().slice(0, 4);
        setRoomCode(cleaned);
    };
    return (_jsxs("div", { className: clsx(styles.landing, className), children: [_jsxs("div", { className: styles.logo, children: [_jsx(Typography, { variant: "h1", glow: true, className: styles.logoText, children: "\uD83C\uDF78" }), _jsx(Typography, { variant: "h2", glow: true, children: "SHAKEN" }), _jsx(Typography, { variant: "body", color: "secondary", children: "Not Stirred" })] }), mode === 'join' && (_jsxs("form", { className: styles.form, onSubmit: handleSubmit, children: [_jsxs("div", { className: styles.codeInput, children: [_jsx(Typography, { variant: "label", color: "muted", children: "Enter Room Code" }), _jsx("div", { className: styles.codeBoxes, children: [0, 1, 2, 3].map((i) => (_jsx("div", { className: clsx(styles.codeBox, roomCode[i] && styles.codeBoxFilled), children: roomCode[i] || '' }, i))) }), _jsx("input", { type: "text", value: roomCode, onChange: (e) => handleCodeChange(e.target.value), className: styles.hiddenInput, autoFocus: true, autoComplete: "off", autoCapitalize: "characters", maxLength: 4, disabled: isConnecting })] }), errorMessage && (_jsx(Typography, { variant: "caption", color: "error", className: styles.error, children: errorMessage })), _jsx(Button, { type: "submit", variant: "primary", size: "lg", fullWidth: true, glow: true, disabled: roomCode.length !== 4 || isConnecting, children: isConnecting ? 'Connecting...' : 'Join Game' })] })), mode === 'rejoin' && previousName && (_jsxs("div", { className: styles.rejoinContainer, children: [_jsxs("div", { className: styles.rejoinInfo, children: [_jsx(Typography, { variant: "body", color: "muted", children: "Welcome back," }), _jsx(Typography, { variant: "h3", color: "primary", glow: true, children: previousName })] }), errorMessage && (_jsx(Typography, { variant: "caption", color: "error", className: styles.error, children: errorMessage })), _jsx(Button, { variant: "primary", size: "lg", fullWidth: true, glow: true, onClick: onRejoin, disabled: isConnecting, children: isConnecting ? 'Reconnecting...' : 'Rejoin Game' }), _jsx(Button, { variant: "ghost", size: "md", onClick: () => onModeSwitch?.('join'), children: "Join different game" })] })), mode === 'join' && previousName && (_jsx("button", { className: styles.rejoinLink, onClick: () => onModeSwitch?.('rejoin'), children: _jsxs(Typography, { variant: "caption", color: "muted", children: ["Rejoin as ", _jsx("span", { className: styles.playerName, children: previousName }), "?"] }) }))] }));
}
export default PhoneLanding;
//# sourceMappingURL=PhoneLanding.js.map