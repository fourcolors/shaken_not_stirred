import { useSnapshot } from 'valtio';
import { gameState } from '@shaken/game-logic';
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
export function useGameState() {
  const snap = useSnapshot(gameState);

  return {
    // Room
    roomCode: snap.roomCode,
    isHostConnected: snap.isHostConnected,

    // Players
    players: snap.players as Player[],
    vipPlayerId: snap.vipPlayerId,
    djPlayerId: snap.djPlayerId,
    playerCount: snap.players.length,

    // Game State
    phase: snap.phase,
    currentRound: snap.currentRound,
    totalRounds: snap.totalRounds,
    rounds: snap.rounds,

    // Timer
    timerDuration: snap.timerDuration,
    timerRemaining: snap.timerRemaining,
    isTimerRunning: snap.isTimerRunning,

    // Settings
    settings: snap.settings,

    // Computed
    isInLobby: snap.phase === 'lobby',
    isPlaying: !['idle', 'lobby', 'podium'].includes(snap.phase),
    isGameOver: snap.phase === 'podium',
    canStart: snap.players.length >= 2,

    // Get specific player
    getPlayer: (id: string) => snap.players.find((p) => p.id === id),
    getVIP: () => snap.players.find((p) => p.isVIP),
    getDJ: () => snap.players.find((p) => p.isDJ),
  };
}
