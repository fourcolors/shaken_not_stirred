import { useEffect } from 'react';
import { GameFlow } from '@shaken/ui';
import { useGameState, useYjsSync } from '@shaken/hooks';
import { gameState, initializeGame, startGame } from '@shaken/game-logic';

// Dev room code for testing - use this to join from the controller
const DEV_ROOM_CODE = 'TEST';

// ngrok URL for external phone access (update when ngrok restarts)
const NGROK_URL = 'https://0f23e263be95.ngrok-free.app';

// Build controller URL for QR code
const getControllerUrl = (roomCode: string) => {
  const baseUrl = NGROK_URL || `http://${window.location.hostname}:5173`;
  return `${baseUrl}/?room=${roomCode}&dev`;
};

// Host TV App - Uses Yjs for real-time multiplayer sync
function App() {
  // Initialize game as host with dev room code
  useEffect(() => {
    // Set dev room code directly (skip random generation)
    gameState.roomCode = DEV_ROOM_CODE;
    gameState.isHostConnected = true;
    gameState.phase = 'lobby';
    gameState.players = [];
    console.log('🎮 Host initialized with room code:', DEV_ROOM_CODE);
  }, []);

  // Connect to Yjs as host
  const { isConnected, isSynced, error } = useYjsSync({
    serverUrl: 'ws://localhost:1234',
    roomCode: DEV_ROOM_CODE,
    isHost: true,
  });

  // Get reactive game state
  const {
    phase,
    players,
    currentRound,
    totalRounds,
    timerRemaining,
    timerDuration,
    rounds,
    roomCode,
  } = useGameState();

  const joinUrl = getControllerUrl(roomCode || DEV_ROOM_CODE);

  // Debug logging
  useEffect(() => {
    console.log('🔌 Yjs connection:', { isConnected, isSynced, error: error?.message });
    console.log('👥 Players:', players.length, players.map(p => p.name));
  }, [isConnected, isSynced, error, players]);

  const handleStartGame = () => {
    console.log('🚀 Starting game!');
    startGame();
  };

  return (
    <GameFlow
      phase={phase}
      roomCode={roomCode || DEV_ROOM_CODE}
      joinUrl={joinUrl}
      players={players}
      currentRound={currentRound}
      totalRounds={totalRounds}
      timerRemaining={timerRemaining}
      timerDuration={timerDuration}
      rounds={rounds.map(r => ({ prompt: r.prompt }))}
      isHost={true}
      onStartGame={handleStartGame}
    />
  );
}

export default App;
