import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { Avatar } from '../../atoms/Avatar';
import styles from './WaitingScreen.module.css';
const REASON_MESSAGES = {
    voting: {
        title: 'Votes Coming In...',
        subtitle: 'The crowd is deciding',
    },
    results: {
        title: 'Drumroll Please...',
        subtitle: 'Results are being tallied',
    },
    'next-round': {
        title: 'Get Ready!',
        subtitle: 'Next round starting soon',
    },
    'other-players': {
        title: 'Waiting for Others',
        subtitle: 'Some players are still answering',
    },
    host: {
        title: 'Look at the Screen!',
        subtitle: 'Something exciting is happening',
    },
};
/**
 * Generic waiting screen for phone.
 * Shows when player needs to wait for game events.
 */
export function WaitingScreen({ reason, message, playerShape = 'cube', playerColor = '#CCFF00', className, }) {
    const { title, subtitle } = REASON_MESSAGES[reason];
    return (_jsxs("div", { className: clsx(styles.waiting, className), children: [_jsxs("div", { className: styles.avatarContainer, children: [_jsx(Avatar, { shape: playerShape, color: playerColor, size: "xl", className: styles.avatar }), _jsx("div", { className: styles.pulseRing, style: { borderColor: playerColor } }), _jsx("div", { className: styles.pulseRing2, style: { borderColor: playerColor } })] }), _jsxs("div", { className: styles.content, children: [_jsx(Typography, { variant: "h3", glow: true, children: title }), _jsx(Typography, { variant: "body", color: "muted", children: message || subtitle })] }), _jsxs("div", { className: styles.loadingDots, children: [_jsx("span", { className: styles.dot }), _jsx("span", { className: styles.dot }), _jsx("span", { className: styles.dot })] })] }));
}
export default WaitingScreen;
//# sourceMappingURL=WaitingScreen.js.map