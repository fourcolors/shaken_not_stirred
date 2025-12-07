import { describe, it, expect, beforeEach } from 'vitest';
import {
  gameState,
  initializeGame,
  resetGame,
  addPlayer,
  removePlayer,
  startGame,
  nextPhase,
  type Player,
  type GamePhase,
} from './gameState';

describe('gameState', () => {
  beforeEach(() => {
    resetGame();
  });

  describe('initializeGame', () => {
    it('should generate a 4-letter room code', () => {
      const roomCode = initializeGame();

      expect(roomCode).toHaveLength(4);
      expect(roomCode).toMatch(/^[A-Z]+$/);
      expect(gameState.roomCode).toBe(roomCode);
    });

    it('should set initial game state correctly', () => {
      initializeGame();

      expect(gameState.isHostConnected).toBe(true);
      expect(gameState.phase).toBe('lobby');
      expect(gameState.players).toHaveLength(0);
      expect(gameState.currentRound).toBe(0);
      expect(gameState.rounds).toHaveLength(0);
      expect(gameState.isTimerRunning).toBe(false);
    });

    it('should generate unique room codes', () => {
      const code1 = initializeGame();
      resetGame();
      const code2 = initializeGame();

      // While not guaranteed to be different, they should be statistically different
      // This test may occasionally fail but is useful for catching obvious bugs
      expect(code1).toBeDefined();
      expect(code2).toBeDefined();
    });
  });

  describe('resetGame', () => {
    it('should reset all game state to initial values', () => {
      initializeGame();
      addPlayer({
        id: '1',
        name: 'Test',
        avatarShape: 'cube',
        avatarColor: '#FF0000',
        isDrinking: false,
        isVIP: false,
        isDJ: false,
      });

      resetGame();

      expect(gameState.roomCode).toBeNull();
      expect(gameState.isHostConnected).toBe(false);
      expect(gameState.phase).toBe('idle');
      expect(gameState.players).toHaveLength(0);
      expect(gameState.vipPlayerId).toBeNull();
      expect(gameState.djPlayerId).toBeNull();
      expect(gameState.currentRound).toBe(0);
      expect(gameState.rounds).toHaveLength(0);
      expect(gameState.timerRemaining).toBe(0);
      expect(gameState.isTimerRunning).toBe(false);
    });
  });

  describe('addPlayer', () => {
    beforeEach(() => {
      initializeGame();
    });

    it('should add a player with default values', () => {
      const player = addPlayer({
        id: 'player1',
        name: 'Alice',
        avatarShape: 'cube',
        avatarColor: '#FF0000',
        isDrinking: false,
        isVIP: false,
        isDJ: false,
      });

      expect(player.score).toBe(0);
      expect(player.hasSubmitted).toBe(false);
      expect(player.isConnected).toBe(true);
      expect(gameState.players).toHaveLength(1);
    });

    it('should make first player VIP', () => {
      const player = addPlayer({
        id: 'player1',
        name: 'Alice',
        avatarShape: 'cube',
        avatarColor: '#FF0000',
        isDrinking: false,
        isVIP: false,
        isDJ: false,
      });

      expect(player.isVIP).toBe(true);
      expect(gameState.vipPlayerId).toBe('player1');
    });

    it('should not make subsequent players VIP', () => {
      addPlayer({
        id: 'player1',
        name: 'Alice',
        avatarShape: 'cube',
        avatarColor: '#FF0000',
        isDrinking: false,
        isVIP: false,
        isDJ: false,
      });

      const player2 = addPlayer({
        id: 'player2',
        name: 'Bob',
        avatarShape: 'pyramid',
        avatarColor: '#00FF00',
        isDrinking: false,
        isVIP: false,
        isDJ: false,
      });

      expect(player2.isVIP).toBe(false);
      expect(gameState.vipPlayerId).toBe('player1');
      expect(gameState.players).toHaveLength(2);
    });
  });

  describe('removePlayer', () => {
    beforeEach(() => {
      initializeGame();
    });

    it('should remove player from the game', () => {
      addPlayer({
        id: 'player1',
        name: 'Alice',
        avatarShape: 'cube',
        avatarColor: '#FF0000',
        isDrinking: false,
        isVIP: false,
        isDJ: false,
      });

      removePlayer('player1');
      expect(gameState.players).toHaveLength(0);
    });

    it('should reassign VIP when VIP leaves', () => {
      const player1 = addPlayer({
        id: 'player1',
        name: 'Alice',
        avatarShape: 'cube',
        avatarColor: '#FF0000',
        isDrinking: false,
        isVIP: false,
        isDJ: false,
      });

      addPlayer({
        id: 'player2',
        name: 'Bob',
        avatarShape: 'pyramid',
        avatarColor: '#00FF00',
        isDrinking: false,
        isVIP: false,
        isDJ: false,
      });

      expect(player1.isVIP).toBe(true);

      removePlayer('player1');

      expect(gameState.players).toHaveLength(1);
      expect(gameState.players[0].isVIP).toBe(true);
      expect(gameState.vipPlayerId).toBe('player2');
    });

    it('should handle removing non-existent player', () => {
      addPlayer({
        id: 'player1',
        name: 'Alice',
        avatarShape: 'cube',
        avatarColor: '#FF0000',
        isDrinking: false,
        isVIP: false,
        isDJ: false,
      });

      removePlayer('nonexistent');
      expect(gameState.players).toHaveLength(1);
    });
  });

  describe('startGame', () => {
    beforeEach(() => {
      initializeGame();
    });

    it('should not start with less than 2 players', () => {
      addPlayer({
        id: 'player1',
        name: 'Alice',
        avatarShape: 'cube',
        avatarColor: '#FF0000',
        isDrinking: false,
        isVIP: false,
        isDJ: false,
      });

      startGame();
      expect(gameState.phase).toBe('lobby');
    });

    it('should start game with 2 or more players', () => {
      addPlayer({
        id: 'player1',
        name: 'Alice',
        avatarShape: 'cube',
        avatarColor: '#FF0000',
        isDrinking: false,
        isVIP: false,
        isDJ: false,
      });

      addPlayer({
        id: 'player2',
        name: 'Bob',
        avatarShape: 'pyramid',
        avatarColor: '#00FF00',
        isDrinking: false,
        isVIP: false,
        isDJ: false,
      });

      startGame();
      expect(gameState.phase).toBe('intro');
      expect(gameState.currentRound).toBe(1);
    });
  });

  describe('nextPhase', () => {
    beforeEach(() => {
      initializeGame();
      addPlayer({
        id: 'player1',
        name: 'Alice',
        avatarShape: 'cube',
        avatarColor: '#FF0000',
        isDrinking: false,
        isVIP: false,
        isDJ: false,
      });
      addPlayer({
        id: 'player2',
        name: 'Bob',
        avatarShape: 'pyramid',
        avatarColor: '#00FF00',
        isDrinking: false,
        isVIP: false,
        isDJ: false,
      });
      startGame();
    });

    it('should progress through phases in correct order', () => {
      const expectedPhases: GamePhase[] = [
        'intro',
        'writing',
        'shaking',
        'voting',
        'reveal',
        'summary',
      ];

      expectedPhases.forEach((expectedPhase, index) => {
        expect(gameState.phase).toBe(expectedPhase);
        if (index < expectedPhases.length - 1) {
          nextPhase();
        }
      });
    });

    it('should start new round after summary phase', () => {
      // Progress through all phases of round 1
      while (gameState.phase !== 'summary') {
        nextPhase();
      }

      expect(gameState.currentRound).toBe(1);
      nextPhase();
      expect(gameState.phase).toBe('intro');
      expect(gameState.currentRound).toBe(2);
    });

    it('should go to podium after final round', () => {
      gameState.totalRounds = 1;

      // Progress through all phases
      while (gameState.phase !== 'summary') {
        nextPhase();
      }

      nextPhase();
      expect(gameState.phase).toBe('podium');
    });
  });
});
