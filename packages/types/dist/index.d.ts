/**
 * Shared type definitions for Shaken Not Stirred
 */
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
 * WebSocket message types
 */
type MessageType = 'player:join' | 'player:leave' | 'player:ready' | 'player:answer' | 'player:vote' | 'player:shake' | 'game:start' | 'game:phase' | 'game:timer' | 'game:end' | 'host:settings' | 'sync:state';
interface WebSocketMessage<T = unknown> {
    type: MessageType;
    payload: T;
    timestamp: number;
    senderId?: string;
}
/**
 * Player join payload
 */
interface PlayerJoinPayload {
    name: string;
    avatarShape: AvatarShape;
    avatarColor: string;
    isDrinking: boolean;
}
/**
 * Player answer payload
 */
interface PlayerAnswerPayload {
    roundNumber: number;
    answer: string;
}
/**
 * Player vote payload
 */
interface PlayerVotePayload {
    roundNumber: number;
    votedForPlayerId: string;
}
/**
 * Game phase change payload
 */
interface PhaseChangePayload {
    phase: GamePhase;
    roundNumber: number;
    timerDuration?: number;
}
/**
 * API response types
 */
interface ApiResponse<T = unknown> {
    success: boolean;
    data?: T;
    error?: string;
}
interface RoomCreateResponse {
    roomCode: string;
    hostToken: string;
}
interface RoomJoinResponse {
    playerId: string;
    playerToken: string;
    roomState: GameState;
}

export type { ApiResponse, AvatarShape, GamePhase, GameState, MessageType, PhaseChangePayload, Player, PlayerAnswerPayload, PlayerJoinPayload, PlayerVotePayload, RoomCreateResponse, RoomJoinResponse, Round, WebSocketMessage };
