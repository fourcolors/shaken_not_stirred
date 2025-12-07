// State
export { gameState, initializeGame, resetGame, startGame, addPlayer, removePlayer, nextPhase } from './state/gameState';
export type { GameState, Player, GamePhase, Round, AvatarShape } from './state/gameState';

// Yjs Provider
export {
  createYjsProvider,
  getYjsDoc,
  getSharedTypes,
  disconnectYjs,
} from './state/yjsProvider';
export type { YjsProviderOptions } from './state/yjsProvider';

// Rules
export { GameRules } from './rules/gameRules';
