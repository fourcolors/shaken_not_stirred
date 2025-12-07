import { GameFlow } from '@shaken/ui';
import type { GameFlowPlayer, GameFlowRound, GamePhase } from '@shaken/ui';

// Placeholder app - will be connected to game state
function App() {
  // Mock data for development
  const mockPlayers: GameFlowPlayer[] = [];
  const mockRounds: GameFlowRound[] = [];

  return (
    <GameFlow
      phase={'idle' as GamePhase}
      players={mockPlayers}
      currentRound={1}
      totalRounds={5}
      timerRemaining={60}
      timerDuration={60}
      rounds={mockRounds}
      onStartGame={() => console.log('Start game')}
      onPlayAgain={() => console.log('Play again')}
    />
  );
}

export default App;
