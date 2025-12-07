import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { Button } from '../../atoms/Button';
import { Avatar } from '../../atoms/Avatar';
import styles from './PhoneLobby.module.css';
/**
 * Phone lobby screen showing waiting state.
 * Different views for player, VIP, and DJ roles.
 */
export function PhoneLobby({ currentPlayer, players, roomCode, role, isStarting = false, onStartGame, onOpenPlaylist, onLeave, className, }) {
    const otherPlayers = players.filter((p) => p.id !== currentPlayer.id);
    const minPlayers = 3;
    const canStart = players.length >= minPlayers;
    return (_jsxs("div", { className: clsx(styles.lobby, styles[role], className), children: [_jsxs("header", { className: styles.header, children: [_jsxs("div", { className: styles.roomInfo, children: [_jsx(Typography, { variant: "caption", color: "muted", children: "Room" }), _jsx(Typography, { variant: "h4", color: "primary", glow: true, children: roomCode })] }), _jsx("button", { className: styles.leaveButton, onClick: onLeave, children: _jsx(Typography, { variant: "caption", color: "muted", children: "Leave" }) })] }), _jsxs("div", { className: styles.currentPlayer, children: [_jsx(Avatar, { shape: currentPlayer.avatarShape, color: currentPlayer.avatarColor, size: "lg", isVIP: currentPlayer.isVIP, isDJ: currentPlayer.isDJ }), _jsxs("div", { className: styles.playerInfo, children: [_jsx(Typography, { variant: "h3", glow: true, children: currentPlayer.name }), role === 'vip' && (_jsx(Typography, { variant: "caption", color: "accent", children: "\uD83D\uDC51 VIP - You control the game" })), role === 'dj' && (_jsx(Typography, { variant: "caption", color: "secondary", children: "\uD83C\uDFB5 DJ - You control the vibes" })), role === 'player' && (_jsx(Typography, { variant: "caption", color: "muted", children: "Ready to play" }))] })] }), _jsxs("div", { className: styles.playersSection, children: [_jsxs(Typography, { variant: "label", color: "muted", children: [otherPlayers.length, " other player", otherPlayers.length !== 1 ? 's' : '', " in lobby"] }), _jsx("div", { className: styles.playersList, children: otherPlayers.map((player) => (_jsxs("div", { className: styles.playerPill, children: [_jsx(Avatar, { shape: player.avatarShape, color: player.avatarColor, size: "sm", isVIP: player.isVIP, isDJ: player.isDJ }), _jsx(Typography, { variant: "caption", children: player.name })] }, player.id))) })] }), _jsxs("div", { className: styles.actions, children: [role === 'vip' && (_jsxs(_Fragment, { children: [_jsx(Button, { variant: "primary", size: "lg", fullWidth: true, glow: true, onClick: onStartGame, disabled: !canStart || isStarting, children: isStarting
                                    ? 'Starting...'
                                    : canStart
                                        ? 'Start Game'
                                        : `Need ${minPlayers - players.length} more` }), _jsx(Typography, { variant: "caption", color: "muted", className: styles.hint, children: canStart
                                    ? 'Tap to begin when everyone is ready'
                                    : `Waiting for at least ${minPlayers} players` })] })), role === 'dj' && (_jsxs(_Fragment, { children: [_jsx(Button, { variant: "secondary", size: "lg", fullWidth: true, onClick: onOpenPlaylist, children: "\uD83C\uDFB5 Manage Playlist" }), _jsx(Typography, { variant: "caption", color: "muted", className: styles.hint, children: "Queue up songs for between rounds" })] })), role === 'player' && (_jsxs("div", { className: styles.waitingMessage, children: [_jsx("div", { className: styles.pulsingDot }), _jsx(Typography, { variant: "body", color: "muted", children: "Waiting for VIP to start..." })] }))] })] }));
}
export default PhoneLobby;
//# sourceMappingURL=PhoneLobby.js.map