import { proxy } from 'valtio';

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
  // Room
  roomCode: string | null;
  isHostConnected: boolean;

  // Players
  players: Player[];
  vipPlayerId: string | null;
  djPlayerId: string | null;

  // Game State
  phase: GamePhase;
  currentRound: number;
  totalRounds: number;
  rounds: Round[];

  // Timer
  timerDuration: number;
  timerRemaining: number;
  isTimerRunning: boolean;

  // Settings
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
export const gameState = proxy<GameState>({
  // Room
  roomCode: null,
  isHostConnected: false,

  // Players
  players: [],
  vipPlayerId: null,
  djPlayerId: null,

  // Game State
  phase: 'idle',
  currentRound: 0,
  totalRounds: 3,
  rounds: [],

  // Timer
  timerDuration: 60,
  timerRemaining: 60,
  isTimerRunning: false,

  // Settings
  settings: {
    roundTimeSeconds: 60,
    maxPlayers: 8,
    contentFilter: 'adult',
    streamerMode: false,
  },
});

/**
 * Generate a random 4-letter room code
 */
function generateRoomCode(): string {
  const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; // Removed I and O to avoid confusion
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += letters[Math.floor(Math.random() * letters.length)];
  }
  return code;
}

/**
 * Initialize a new game session
 */
export function initializeGame(): string {
  const roomCode = generateRoomCode();

  gameState.roomCode = roomCode;
  gameState.isHostConnected = true;
  gameState.phase = 'lobby';
  gameState.players = [];
  gameState.vipPlayerId = null;
  gameState.djPlayerId = null;
  gameState.currentRound = 0;
  gameState.rounds = [];
  gameState.timerRemaining = gameState.settings.roundTimeSeconds;
  gameState.isTimerRunning = false;

  return roomCode;
}

/**
 * Reset game to initial state
 */
export function resetGame(): void {
  gameState.roomCode = null;
  gameState.isHostConnected = false;
  gameState.phase = 'idle';
  gameState.players = [];
  gameState.vipPlayerId = null;
  gameState.djPlayerId = null;
  gameState.currentRound = 0;
  gameState.rounds = [];
  gameState.timerRemaining = 0;
  gameState.isTimerRunning = false;
}

/**
 * Add a player to the game
 */
export function addPlayer(player: Omit<Player, 'score' | 'hasSubmitted' | 'isConnected'>): Player {
  const newPlayer: Player = {
    ...player,
    score: 0,
    hasSubmitted: false,
    isConnected: true,
  };

  // First player becomes VIP
  if (gameState.players.length === 0) {
    newPlayer.isVIP = true;
    gameState.vipPlayerId = newPlayer.id;
  }

  gameState.players.push(newPlayer);
  return newPlayer;
}

/**
 * Remove a player from the game
 */
export function removePlayer(playerId: string): void {
  const index = gameState.players.findIndex((p) => p.id === playerId);
  if (index !== -1) {
    gameState.players.splice(index, 1);

    // If VIP left, assign to next player
    if (gameState.vipPlayerId === playerId && gameState.players.length > 0) {
      gameState.players[0].isVIP = true;
      gameState.vipPlayerId = gameState.players[0].id;
    }
  }
}

/**
 * Start the game
 */
export function startGame(): void {
  if (gameState.players.length < 2) {
    console.warn('Need at least 2 players to start');
    return;
  }

  gameState.phase = 'intro';
  gameState.currentRound = 1;
}

/**
 * Advance to next phase
 */
export function nextPhase(): void {
  const phaseOrder: GamePhase[] = [
    'intro',
    'writing',
    'shaking',
    'voting',
    'reveal',
    'summary',
  ];

  const currentIndex = phaseOrder.indexOf(gameState.phase);

  if (currentIndex === -1) return;

  if (currentIndex === phaseOrder.length - 1) {
    // End of round
    if (gameState.currentRound >= gameState.totalRounds) {
      gameState.phase = 'podium';
    } else {
      gameState.currentRound++;
      gameState.phase = 'intro';
    }
  } else {
    gameState.phase = phaseOrder[currentIndex + 1];
  }
}
