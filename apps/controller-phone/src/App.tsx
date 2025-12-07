import { PhoneFlow } from '@shaken/ui';
import type { GamePhase, PhoneFlowPlayer, PhoneFlowRound } from '@shaken/ui';

// Placeholder app - will be connected to game state
function App() {
  // Mock data for development
  const mockPlayer: PhoneFlowPlayer = {
    id: 'test-player',
    name: 'Test Player',
    avatarShape: 'cube',
    avatarColor: '#CCFF00',
    isVIP: false,
    isDJ: false,
  };

  const mockRounds: PhoneFlowRound[] = [
    { prompt: 'Test prompt' },
  ];

  return (
    <PhoneFlow
      phase={'idle' as GamePhase}
      players={[mockPlayer]}
      currentRound={1}
      timerRemaining={60}
      timerDuration={60}
      rounds={mockRounds}
      roomCode="TEST"
      playerId={mockPlayer.id}
      onJoin={(code) => console.log('Join room:', code)}
      onCreatePlayer={(data) => console.log('Create player:', data)}
      onSubmitAnswer={(answer) => console.log('Submit answer:', answer)}
      onVote={(choice) => console.log('Vote:', choice)}
      onLeave={() => console.log('Leave')}
      onStartGame={() => console.log('Start game')}
    />
  );
}

export default App;
