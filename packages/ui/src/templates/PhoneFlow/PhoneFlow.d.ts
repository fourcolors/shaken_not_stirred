import type { AvatarShape } from '../../atoms/Avatar';
export type PhoneFlowScreen = 'landing' | 'avatar' | 'lobby' | 'writing' | 'shaking' | 'voting' | 'waiting';
export type GamePhase = 'idle' | 'lobby' | 'intro' | 'writing' | 'shaking' | 'voting' | 'reveal' | 'summary' | 'podium';
export interface PhoneFlowPlayer {
    id: string;
    name: string;
    avatarShape: AvatarShape;
    avatarColor: string;
    isVIP?: boolean;
    isDJ?: boolean;
    hasSubmitted?: boolean;
}
export interface PhoneFlowRound {
    prompt: string;
}
export interface PhoneFlowProps {
    /** Current game phase */
    phase: GamePhase;
    /** Room code */
    roomCode?: string;
    /** All players */
    players: PhoneFlowPlayer[];
    /** Current round number */
    currentRound: number;
    /** Time remaining in seconds */
    timerRemaining: number;
    /** Total timer duration in seconds */
    timerDuration: number;
    /** All rounds data */
    rounds: PhoneFlowRound[];
    /** Current player ID (after joining) */
    playerId?: string;
    /** Callbacks */
    onJoin?: (roomCode: string) => void;
    onCreatePlayer?: (data: {
        name: string;
        shape: AvatarShape;
        color: string;
        isDrinking: boolean;
    }) => void;
    onSubmitAnswer?: (answer: string) => void;
    onVote?: (choice: 'A' | 'B') => void;
    onLeave?: () => void;
    onStartGame?: () => void;
}
/**
 * Phone/controller game flow template.
 * Renders the appropriate mobile screen based on game phase.
 * This is a pure presentation component - state is passed via props.
 */
export declare function PhoneFlow({ phase, roomCode, players, currentRound, timerRemaining, timerDuration, rounds, playerId, onJoin, onCreatePlayer, onSubmitAnswer, onVote, onLeave, onStartGame, }: PhoneFlowProps): import("react/jsx-runtime").JSX.Element;
export default PhoneFlow;
//# sourceMappingURL=PhoneFlow.d.ts.map