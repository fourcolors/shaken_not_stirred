import type { Player } from '@shaken/types';
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
export declare function useGameState(): {
    roomCode: string | null;
    isHostConnected: boolean;
    players: Player[];
    vipPlayerId: string | null;
    djPlayerId: string | null;
    playerCount: number;
    phase: import("@shaken/game-logic").GamePhase;
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
        readonly avatarShape: import("@shaken/game-logic").AvatarShape;
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
        readonly avatarShape: import("@shaken/game-logic").AvatarShape;
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
        readonly avatarShape: import("@shaken/game-logic").AvatarShape;
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
//# sourceMappingURL=useGameState.d.ts.map