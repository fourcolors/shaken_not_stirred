export type GamePhase = 'idle' | 'lobby' | 'intro' | 'writing' | 'shaking' | 'voting' | 'reveal' | 'summary' | 'podium' | 'bartender';
export type AvatarShape = 'cube' | 'pyramid' | 'sphere' | 'diamond';
export interface Player {
    id: string;
    name: string;
    avatarShape: AvatarShape;
    avatarColor: string;
    score: number;
    isDrinking: boolean;
    isVIP: boolean;
    isDJ: boolean;
    isConnected: boolean;
    currentAnswer?: string;
    hasSubmitted: boolean;
}
export interface Round {
    number: number;
    prompt: string;
    answers: Map<string, string>;
    votes: Map<string, string>;
    winnerId?: string;
}
export interface GameState {
    roomCode: string | null;
    isHostConnected: boolean;
    players: Player[];
    vipPlayerId: string | null;
    djPlayerId: string | null;
    phase: GamePhase;
    currentRound: number;
    totalRounds: number;
    rounds: Round[];
    timerDuration: number;
    timerRemaining: number;
    isTimerRunning: boolean;
    settings: {
        roundTimeSeconds: number;
        maxPlayers: number;
        contentFilter: 'family' | 'adult';
        streamerMode: boolean;
    };
}
/**
 * Global game state using Valtio proxy.
 * This state can be synced with Yjs for real-time multiplayer.
 */
export declare const gameState: GameState;
/**
 * Initialize a new game session
 */
export declare function initializeGame(): string;
/**
 * Reset game to initial state
 */
export declare function resetGame(): void;
/**
 * Add a player to the game
 */
export declare function addPlayer(player: Omit<Player, 'score' | 'hasSubmitted' | 'isConnected'>): Player;
/**
 * Remove a player from the game
 */
export declare function removePlayer(playerId: string): void;
/**
 * Start the game
 */
export declare function startGame(): void;
/**
 * Advance to next phase
 */
export declare function nextPhase(): void;
//# sourceMappingURL=gameState.d.ts.map