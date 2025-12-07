/**
 * Shared type definitions for Shaken Not Stirred
 */

// Define types locally to avoid rootDir issues with cross-package imports
export type GamePhase =
  | 'idle'
  | 'lobby'
  | 'intro'
  | 'writing'
  | 'shaking'
  | 'voting'
  | 'reveal'
  | 'summary'
  | 'podium'
  | 'bartender';

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
 * WebSocket message types
 */
export type MessageType =
  | 'player:join'
  | 'player:leave'
  | 'player:ready'
  | 'player:answer'
  | 'player:vote'
  | 'player:shake'
  | 'game:start'
  | 'game:phase'
  | 'game:timer'
  | 'game:end'
  | 'host:settings'
  | 'sync:state';

export interface WebSocketMessage<T = unknown> {
  type: MessageType;
  payload: T;
  timestamp: number;
  senderId?: string;
}

/**
 * Player join payload
 */
export interface PlayerJoinPayload {
  name: string;
  avatarShape: AvatarShape;
  avatarColor: string;
  isDrinking: boolean;
}

/**
 * Player answer payload
 */
export interface PlayerAnswerPayload {
  roundNumber: number;
  answer: string;
}

/**
 * Player vote payload
 */
export interface PlayerVotePayload {
  roundNumber: number;
  votedForPlayerId: string;
}

/**
 * Game phase change payload
 */
export interface PhaseChangePayload {
  phase: GamePhase;
  roundNumber: number;
  timerDuration?: number;
}

/**
 * API response types
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface RoomCreateResponse {
  roomCode: string;
  hostToken: string;
}

export interface RoomJoinResponse {
  playerId: string;
  playerToken: string;
  roomState: GameState;
}
