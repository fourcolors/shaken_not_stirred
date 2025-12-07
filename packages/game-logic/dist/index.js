// src/state/gameState.ts
import { proxy } from "valtio";
var gameState = proxy({
  // Room
  roomCode: null,
  isHostConnected: false,
  // Players
  players: [],
  vipPlayerId: null,
  djPlayerId: null,
  // Game State
  phase: "idle",
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
    contentFilter: "adult",
    streamerMode: false
  }
});
function generateRoomCode() {
  const letters = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  let code = "";
  for (let i = 0; i < 4; i++) {
    code += letters[Math.floor(Math.random() * letters.length)];
  }
  return code;
}
function initializeGame() {
  const roomCode = generateRoomCode();
  gameState.roomCode = roomCode;
  gameState.isHostConnected = true;
  gameState.phase = "lobby";
  gameState.players = [];
  gameState.vipPlayerId = null;
  gameState.djPlayerId = null;
  gameState.currentRound = 0;
  gameState.rounds = [];
  gameState.timerRemaining = gameState.settings.roundTimeSeconds;
  gameState.isTimerRunning = false;
  return roomCode;
}
function resetGame() {
  gameState.roomCode = null;
  gameState.isHostConnected = false;
  gameState.phase = "idle";
  gameState.players = [];
  gameState.vipPlayerId = null;
  gameState.djPlayerId = null;
  gameState.currentRound = 0;
  gameState.rounds = [];
  gameState.timerRemaining = 0;
  gameState.isTimerRunning = false;
}
function addPlayer(player) {
  const newPlayer = {
    ...player,
    score: 0,
    hasSubmitted: false,
    isConnected: true
  };
  if (gameState.players.length === 0) {
    newPlayer.isVIP = true;
    gameState.vipPlayerId = newPlayer.id;
  }
  gameState.players.push(newPlayer);
  return newPlayer;
}
function removePlayer(playerId) {
  const index = gameState.players.findIndex((p) => p.id === playerId);
  if (index !== -1) {
    gameState.players.splice(index, 1);
    if (gameState.vipPlayerId === playerId && gameState.players.length > 0) {
      gameState.players[0].isVIP = true;
      gameState.vipPlayerId = gameState.players[0].id;
    }
  }
}
function startGame() {
  if (gameState.players.length < 2) {
    console.warn("Need at least 2 players to start");
    return;
  }
  gameState.phase = "intro";
  gameState.currentRound = 1;
}
function nextPhase() {
  const phaseOrder = [
    "intro",
    "writing",
    "shaking",
    "voting",
    "reveal",
    "summary"
  ];
  const currentIndex = phaseOrder.indexOf(gameState.phase);
  if (currentIndex === -1) return;
  if (currentIndex === phaseOrder.length - 1) {
    if (gameState.currentRound >= gameState.totalRounds) {
      gameState.phase = "podium";
    } else {
      gameState.currentRound++;
      gameState.phase = "intro";
    }
  } else {
    gameState.phase = phaseOrder[currentIndex + 1];
  }
}

// src/state/yjsProvider.ts
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";
var ydoc = null;
var provider = null;
function getYjsDoc() {
  if (!ydoc) {
    ydoc = new Y.Doc();
  }
  return ydoc;
}
function createYjsProvider(options) {
  const {
    serverUrl = "ws://localhost:1234",
    roomName
  } = options;
  const doc = getYjsDoc();
  if (provider) {
    provider.disconnect();
  }
  provider = new WebsocketProvider(serverUrl, roomName, doc);
  provider.on("status", (event) => {
    console.log(`[Yjs] Connection status: ${event.status}`);
  });
  provider.on("sync", (isSynced) => {
    console.log(`[Yjs] Synced: ${isSynced}`);
  });
  return provider;
}
function getSharedTypes() {
  const doc = getYjsDoc();
  return {
    /** Shared array of players */
    players: doc.getArray("players"),
    /** Shared game state map */
    gameState: doc.getMap("gameState"),
    /** Shared rounds array */
    rounds: doc.getArray("rounds"),
    /** Shared chat/messages */
    messages: doc.getArray("messages")
  };
}
function disconnectYjs() {
  if (provider) {
    provider.disconnect();
    provider = null;
  }
  if (ydoc) {
    ydoc.destroy();
    ydoc = null;
  }
}

// src/rules/gameRules.ts
var GameRules = {
  /**
   * Minimum players required to start a game
   */
  MIN_PLAYERS: 2,
  /**
   * Maximum players allowed in a game
   */
  MAX_PLAYERS: 8,
  /**
   * Default number of rounds
   */
  DEFAULT_ROUNDS: 3,
  /**
   * Points awarded for winning a vote
   */
  VOTE_WIN_POINTS: 500,
  /**
   * Points per vote received
   */
  POINTS_PER_VOTE: 100,
  /**
   * Bonus points for unanimous win
   */
  UNANIMOUS_BONUS: 250,
  /**
   * Check if game can start
   */
  canStartGame(state) {
    if (state.players.length < this.MIN_PLAYERS) {
      return {
        canStart: false,
        reason: `Need at least ${this.MIN_PLAYERS} players to start`
      };
    }
    if (state.players.length > this.MAX_PLAYERS) {
      return {
        canStart: false,
        reason: `Maximum ${this.MAX_PLAYERS} players allowed`
      };
    }
    return { canStart: true };
  },
  /**
   * Calculate score for a voting round
   */
  calculateRoundScore(playerId, votes, totalVoters) {
    let votesReceived = 0;
    votes.forEach((votedFor) => {
      if (votedFor === playerId) {
        votesReceived++;
      }
    });
    if (votesReceived === 0) {
      return 0;
    }
    let score = votesReceived * this.POINTS_PER_VOTE;
    if (votesReceived > totalVoters / 2) {
      score += this.VOTE_WIN_POINTS;
    }
    if (votesReceived === totalVoters) {
      score += this.UNANIMOUS_BONUS;
    }
    return score;
  },
  /**
   * Determine the winner of a voting matchup
   */
  determineVoteWinner(playerAId, playerBId, votes) {
    let votesA = 0;
    let votesB = 0;
    votes.forEach((votedFor) => {
      if (votedFor === playerAId) votesA++;
      if (votedFor === playerBId) votesB++;
    });
    if (votesA === votesB) {
      return { winnerId: null, votesA, votesB };
    }
    return {
      winnerId: votesA > votesB ? playerAId : playerBId,
      votesA,
      votesB
    };
  },
  /**
   * Get players sorted by score (for leaderboard)
   */
  getLeaderboard(players) {
    return [...players].sort((a, b) => b.score - a.score);
  },
  /**
   * Get podium positions (top 3)
   */
  getPodium(players) {
    return this.getLeaderboard(players).slice(0, 3);
  },
  /**
   * Validate room code format
   */
  isValidRoomCode(code) {
    return /^[A-Z]{4}$/.test(code);
  },
  /**
   * Validate player name
   */
  isValidPlayerName(name) {
    if (!name || name.trim().length === 0) {
      return { valid: false, reason: "Name cannot be empty" };
    }
    if (name.length > 16) {
      return { valid: false, reason: "Name must be 16 characters or less" };
    }
    if (!/^[a-zA-Z0-9\s]+$/.test(name)) {
      return { valid: false, reason: "Name can only contain letters, numbers, and spaces" };
    }
    return { valid: true };
  }
};
export {
  GameRules,
  addPlayer,
  createYjsProvider,
  disconnectYjs,
  gameState,
  getSharedTypes,
  getYjsDoc,
  initializeGame,
  nextPhase,
  removePlayer,
  resetGame,
  startGame
};
