import * as _shaken_game_logic from '@shaken/game-logic';
import { Player } from '@shaken/types';

/**
 * Hook to access reactive game state.
 * Automatically re-renders when state changes.
 *
 * @example
 * ```tsx
 * function GameView() {
 *   const { players, phase, currentRound } = useGameState();
 *
 *   return (
 *     <div>
 *       <h2>Round {currentRound}</h2>
 *       <p>Phase: {phase}</p>
 *       <PlayerList players={players} />
 *     </div>
 *   );
 * }
 * ```
 */
declare function useGameState(): {
    roomCode: string | null;
    isHostConnected: boolean;
    players: Player[];
    vipPlayerId: string | null;
    djPlayerId: string | null;
    playerCount: number;
    phase: _shaken_game_logic.GamePhase;
    currentRound: number;
    totalRounds: number;
    rounds: readonly {
        readonly number: number;
        readonly prompt: string;
        readonly answers: Map<string, string>;
        readonly votes: Map<string, string>;
        readonly winnerId?: string | undefined;
    }[];
    timerDuration: number;
    timerRemaining: number;
    isTimerRunning: boolean;
    settings: {
        readonly roundTimeSeconds: number;
        readonly maxPlayers: number;
        readonly contentFilter: "family" | "adult";
        readonly streamerMode: boolean;
    };
    isInLobby: boolean;
    isPlaying: boolean;
    isGameOver: boolean;
    canStart: boolean;
    getPlayer: (id: string) => {
        readonly id: string;
        readonly name: string;
        readonly avatarShape: _shaken_game_logic.AvatarShape;
        readonly avatarColor: string;
        readonly score: number;
        readonly isDrinking: boolean;
        readonly isVIP: boolean;
        readonly isDJ: boolean;
        readonly isConnected: boolean;
        readonly currentAnswer?: string | undefined;
        readonly hasSubmitted: boolean;
    } | undefined;
    getVIP: () => {
        readonly id: string;
        readonly name: string;
        readonly avatarShape: _shaken_game_logic.AvatarShape;
        readonly avatarColor: string;
        readonly score: number;
        readonly isDrinking: boolean;
        readonly isVIP: boolean;
        readonly isDJ: boolean;
        readonly isConnected: boolean;
        readonly currentAnswer?: string | undefined;
        readonly hasSubmitted: boolean;
    } | undefined;
    getDJ: () => {
        readonly id: string;
        readonly name: string;
        readonly avatarShape: _shaken_game_logic.AvatarShape;
        readonly avatarColor: string;
        readonly score: number;
        readonly isDrinking: boolean;
        readonly isVIP: boolean;
        readonly isDJ: boolean;
        readonly isConnected: boolean;
        readonly currentAnswer?: string | undefined;
        readonly hasSubmitted: boolean;
    } | undefined;
};

interface UseTimerOptions {
    /** Initial duration in seconds */
    duration: number;
    /** Auto-start the timer */
    autoStart?: boolean;
    /** Callback when timer completes */
    onComplete?: () => void;
    /** Callback on each tick */
    onTick?: (remaining: number) => void;
    /** Tick interval in ms (default: 1000) */
    interval?: number;
}
interface UseTimerReturn {
    /** Time remaining in seconds */
    timeRemaining: number;
    /** Progress as percentage (0-100) */
    progress: number;
    /** Whether timer is currently running */
    isRunning: boolean;
    /** Whether timer has completed */
    isComplete: boolean;
    /** Start or resume the timer */
    start: () => void;
    /** Pause the timer */
    pause: () => void;
    /** Reset timer to initial duration */
    reset: () => void;
    /** Set a new duration and reset */
    setDuration: (seconds: number) => void;
}
/**
 * Hook for countdown timer functionality.
 *
 * @example
 * ```tsx
 * function WritingPhase() {
 *   const { timeRemaining, progress, isRunning } = useTimer({
 *     duration: 60,
 *     autoStart: true,
 *     onComplete: () => submitAnswer(),
 *   });
 *
 *   return <Timer timeRemaining={timeRemaining} />;
 * }
 * ```
 */
declare function useTimer(options: UseTimerOptions): UseTimerReturn;

interface UseShakeOptions {
    /** Acceleration threshold to detect shake (default: 15) */
    threshold?: number;
    /** Time window for shake detection in ms (default: 1000) */
    timeWindow?: number;
    /** Number of shakes required (default: 3) */
    requiredShakes?: number;
    /** Callback when shake is detected */
    onShake?: () => void;
    /** Whether shake detection is enabled */
    enabled?: boolean;
}
interface UseShakeReturn {
    /** Whether device is currently being shaken */
    isShaking: boolean;
    /** Number of shakes detected in current window */
    shakeCount: number;
    /** Whether shake threshold has been met */
    hasShaken: boolean;
    /** Whether device motion is supported */
    isSupported: boolean;
    /** Request permission for device motion (iOS 13+) */
    requestPermission: () => Promise<boolean>;
    /** Reset shake detection state */
    reset: () => void;
}
/**
 * Hook for detecting device shake gestures.
 * Used for the "Shake to Submit" feature.
 *
 * @example
 * ```tsx
 * function ShakePhase() {
 *   const { hasShaken, shakeCount, requestPermission } = useShake({
 *     threshold: 15,
 *     requiredShakes: 3,
 *     onShake: () => submitAnswer(),
 *   });
 *
 *   useEffect(() => {
 *     requestPermission();
 *   }, []);
 *
 *   return hasShaken ? <LockedIn /> : <ShakeInstruction shakes={shakeCount} />;
 * }
 * ```
 */
declare function useShake(options?: UseShakeOptions): UseShakeReturn;

interface UseYjsSyncOptions {
    /** WebSocket server URL */
    serverUrl?: string;
    /** Room code to join */
    roomCode: string;
    /** Whether this is the host */
    isHost?: boolean;
}
interface UseYjsSyncResult {
    /** Whether connected to server */
    isConnected: boolean;
    /** Whether synced with other clients */
    isSynced: boolean;
    /** Connection error if any */
    error: Error | null;
    /** Manually disconnect */
    disconnect: () => void;
    /** Reconnect to server */
    reconnect: () => void;
}
/**
 * Hook for syncing game state via Yjs WebSocket.
 * Handles bidirectional sync between local Valtio state and Yjs CRDT.
 */
declare function useYjsSync(options: UseYjsSyncOptions): UseYjsSyncResult;

export { type UseYjsSyncOptions, type UseYjsSyncResult, useGameState, useShake, useTimer, useYjsSync };
