import { proxy } from 'valtio';
/**
 * Global game state using Valtio proxy.
 * This state can be synced with Yjs for real-time multiplayer.
 */
export const gameState = proxy({
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
function generateRoomCode() {
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
export function initializeGame() {
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
export function resetGame() {
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
export function addPlayer(player) {
    const newPlayer = {
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
export function removePlayer(playerId) {
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
export function startGame() {
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
export function nextPhase() {
    const phaseOrder = [
        'intro',
        'writing',
        'shaking',
        'voting',
        'reveal',
        'summary',
    ];
    const currentIndex = phaseOrder.indexOf(gameState.phase);
    if (currentIndex === -1)
        return;
    if (currentIndex === phaseOrder.length - 1) {
        // End of round
        if (gameState.currentRound >= gameState.totalRounds) {
            gameState.phase = 'podium';
        }
        else {
            gameState.currentRound++;
            gameState.phase = 'intro';
        }
    }
    else {
        gameState.phase = phaseOrder[currentIndex + 1];
    }
}
//# sourceMappingURL=gameState.js.map