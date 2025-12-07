import type { AvatarShape } from '../../atoms/Avatar';
export type GamePhase = 'idle' | 'lobby' | 'intro' | 'writing' | 'shaking' | 'voting' | 'reveal' | 'summary' | 'podium';
export interface GameFlowPlayer {
    id: string;
    name: string;
    avatarShape: AvatarShape;
    avatarColor: string;
    isVIP?: boolean;
    isDJ?: boolean;
    isDrinking?: boolean;
    hasSubmitted?: boolean;
    score: number;
}
export interface GameFlowRound {
    prompt: string;
}
export interface GameFlowProps {
    /** Current game phase */
    phase: GamePhase;
    /** Room code */
    roomCode?: string;
    /** All players */
    players: GameFlowPlayer[];
    /** Current round number (1-indexed) */
    currentRound: number;
    /** Total number of rounds */
    totalRounds: number;
    /** Time remaining in seconds */
    timerRemaining: number;
    /** Total timer duration in seconds */
    timerDuration: number;
    /** All rounds data */
    rounds: GameFlowRound[];
    /** Whether this is the host/TV display */
    isHost?: boolean;
    /** Callbacks for game actions */
    onStartGame?: () => void;
    onSettings?: () => void;
    onPlayAgain?: () => void;
    onExit?: () => void;
}
/**
 * Host/TV game flow template.
 * Renders the appropriate screen based on current game phase.
 * This is a pure presentation component - state is passed via props.
 */
export declare function GameFlow({ phase, roomCode, players, currentRound, totalRounds, timerRemaining, timerDuration, rounds, isHost, onStartGame, onSettings, onPlayAgain, onExit, }: GameFlowProps): import("react/jsx-runtime").JSX.Element;
export default GameFlow;
//# sourceMappingURL=GameFlow.d.ts.map