import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';

type GamePhase = 'idle' | 'lobby' | 'intro' | 'writing' | 'shaking' | 'voting' | 'reveal' | 'summary' | 'podium' | 'bartender';
type AvatarShape = 'cube' | 'pyramid' | 'sphere' | 'diamond';
interface Player {
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
interface Round {
    number: number;
    prompt: string;
    answers: Map<string, string>;
    votes: Map<string, string>;
    winnerId?: string;
}
interface GameState {
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
declare const gameState: GameState;
/**
 * Initialize a new game session
 */
declare function initializeGame(): string;
/**
 * Reset game to initial state
 */
declare function resetGame(): void;

interface YjsProviderOptions {
    /** WebSocket server URL */
    serverUrl?: string;
    /** Room/document name */
    roomName: string;
    /** Optional auth token */
    authToken?: string;
}
/**
 * Get or create the Yjs document
 */
declare function getYjsDoc(): Y.Doc;
/**
 * Create a WebSocket provider for Yjs synchronization
 */
declare function createYjsProvider(options: YjsProviderOptions): WebsocketProvider;
/**
 * Get shared Yjs types for game state
 */
declare function getSharedTypes(): {
    /** Shared array of players */
    players: Y.Array<any>;
    /** Shared game state map */
    gameState: Y.Map<any>;
    /** Shared rounds array */
    rounds: Y.Array<any>;
    /** Shared chat/messages */
    messages: Y.Array<any>;
};
/**
 * Disconnect and cleanup Yjs
 */
declare function disconnectYjs(): void;

/**
 * Game rules and scoring logic for Shaken Not Stirred
 */
declare const GameRules: {
    /**
     * Minimum players required to start a game
     */
    MIN_PLAYERS: number;
    /**
     * Maximum players allowed in a game
     */
    MAX_PLAYERS: number;
    /**
     * Default number of rounds
     */
    DEFAULT_ROUNDS: number;
    /**
     * Points awarded for winning a vote
     */
    VOTE_WIN_POINTS: number;
    /**
     * Points per vote received
     */
    POINTS_PER_VOTE: number;
    /**
     * Bonus points for unanimous win
     */
    UNANIMOUS_BONUS: number;
    /**
     * Check if game can start
     */
    canStartGame(state: GameState): {
        canStart: boolean;
        reason?: string;
    };
    /**
     * Calculate score for a voting round
     */
    calculateRoundScore(playerId: string, votes: Map<string, string>, totalVoters: number): number;
    /**
     * Determine the winner of a voting matchup
     */
    determineVoteWinner(playerAId: string, playerBId: string, votes: Map<string, string>): {
        winnerId: string | null;
        votesA: number;
        votesB: number;
    };
    /**
     * Get players sorted by score (for leaderboard)
     */
    getLeaderboard(players: Player[]): Player[];
    /**
     * Get podium positions (top 3)
     */
    getPodium(players: Player[]): Player[];
    /**
     * Validate room code format
     */
    isValidRoomCode(code: string): boolean;
    /**
     * Validate player name
     */
    isValidPlayerName(name: string): {
        valid: boolean;
        reason?: string;
    };
};

export { type AvatarShape, type GamePhase, GameRules, type GameState, type Player, type Round, type YjsProviderOptions, createYjsProvider, disconnectYjs, gameState, getSharedTypes, getYjsDoc, initializeGame, resetGame };
