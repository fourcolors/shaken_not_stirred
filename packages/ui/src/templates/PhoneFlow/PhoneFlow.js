import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { PhoneLanding } from '../../organisms/PhoneLanding';
import { AvatarBuilder } from '../../organisms/AvatarBuilder';
import { PhoneLobby } from '../../organisms/PhoneLobby';
import { WritingInput } from '../../organisms/WritingInput';
import { ShakeSubmit } from '../../organisms/ShakeSubmit';
import { VotingPad } from '../../organisms/VotingPad';
import { WaitingScreen } from '../../organisms/WaitingScreen';
/**
 * Phone/controller game flow template.
 * Renders the appropriate mobile screen based on game phase.
 * This is a pure presentation component - state is passed via props.
 */
export function PhoneFlow({ phase, roomCode, players, currentRound, timerRemaining, timerDuration, rounds, playerId, onJoin, onCreatePlayer, onSubmitAnswer, onVote, onLeave, onStartGame, }) {
    const [screen, setScreen] = useState('landing');
    const [shakeProgress, setShakeProgress] = useState(0);
    // Get current player
    const currentPlayer = players.find((p) => p.id === playerId);
    // Determine player role
    const getRole = () => {
        if (currentPlayer?.isVIP)
            return 'vip';
        if (currentPlayer?.isDJ)
            return 'dj';
        return 'player';
    };
    // Get current round data
    const currentRoundData = rounds[currentRound - 1];
    // Handle screen based on game phase and local state
    const getEffectiveScreen = () => {
        // Pre-join screens
        if (!playerId) {
            return screen === 'avatar' ? 'avatar' : 'landing';
        }
        // Map game phase to phone screen
        switch (phase) {
            case 'lobby':
                return 'lobby';
            case 'writing':
                return currentPlayer?.hasSubmitted ? 'waiting' : 'writing';
            case 'shaking':
                return shakeProgress >= 100 ? 'waiting' : 'shaking';
            case 'voting':
                return 'voting';
            case 'intro':
            case 'reveal':
            case 'summary':
            case 'podium':
                return 'waiting';
            default:
                return 'waiting';
        }
    };
    const effectiveScreen = getEffectiveScreen();
    // Render based on screen
    switch (effectiveScreen) {
        case 'landing':
            return (_jsx(PhoneLanding, { mode: "join", onJoin: (code) => {
                    onJoin?.(code);
                    setScreen('avatar');
                } }));
        case 'avatar':
            return (_jsx(AvatarBuilder, { onConfirm: (data) => {
                    onCreatePlayer?.(data);
                } }));
        case 'lobby':
            return (_jsx(PhoneLobby, { currentPlayer: {
                    id: currentPlayer?.id || '',
                    name: currentPlayer?.name || '',
                    avatarShape: currentPlayer?.avatarShape || 'cube',
                    avatarColor: currentPlayer?.avatarColor || '#CCFF00',
                    isVIP: currentPlayer?.isVIP,
                    isDJ: currentPlayer?.isDJ,
                }, players: players.map((p) => ({
                    id: p.id,
                    name: p.name,
                    avatarShape: p.avatarShape,
                    avatarColor: p.avatarColor,
                    isVIP: p.isVIP,
                    isDJ: p.isDJ,
                })), roomCode: roomCode || '', role: getRole(), onStartGame: onStartGame, onLeave: onLeave }));
        case 'writing':
            return (_jsx(WritingInput, { prompt: currentRoundData?.prompt || 'Loading...', timeRemaining: timerRemaining, totalTime: timerDuration, isPanic: timerRemaining <= 10, onSubmit: onSubmitAnswer }));
        case 'shaking':
            return (_jsx(ShakeSubmit, { progress: shakeProgress, targetShakes: 50, currentShakes: Math.floor(shakeProgress / 2), isComplete: shakeProgress >= 100 }));
        case 'voting':
            return (_jsx(VotingPad, { prompt: currentRoundData?.prompt || '', answerA: "Answer A placeholder", answerB: "Answer B placeholder", timeRemaining: timerRemaining, totalTime: timerDuration, onVote: onVote }));
        case 'waiting':
            return (_jsx(WaitingScreen, { reason: phase === 'voting'
                    ? 'voting'
                    : phase === 'reveal'
                        ? 'results'
                        : phase === 'summary'
                            ? 'next-round'
                            : 'host', playerShape: currentPlayer?.avatarShape, playerColor: currentPlayer?.avatarColor }));
        default:
            return (_jsx(WaitingScreen, { reason: "host", playerShape: currentPlayer?.avatarShape, playerColor: currentPlayer?.avatarColor }));
    }
}
export default PhoneFlow;
//# sourceMappingURL=PhoneFlow.js.map