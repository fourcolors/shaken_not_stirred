import { useState, useEffect, useCallback } from 'react';
import { PhoneFlow } from '@shaken/ui';
import type { PhoneFlowRound } from '@shaken/ui';
import type { AvatarShape } from '@shaken/ui';
import { useGameState, useYjsSync } from '@shaken/hooks';
import { gameState } from '@shaken/game-logic';
import type { Player } from '@shaken/game-logic';

// Check for dev mode via URL param: ?dev or ?dev=true
const isDevMode = new URLSearchParams(window.location.search).has('dev');
const urlParams = new URLSearchParams(window.location.search);
const URL_ROOM_CODE = urlParams.get('room')?.toUpperCase() || '';
const DEV_ROOM_CODE = 'TEST';

// Controller app - Uses Yjs for real-time multiplayer sync
function App() {
  const [joinedRoom, setJoinedRoom] = useState<string>(isDevMode ? DEV_ROOM_CODE : URL_ROOM_CODE);
  const [playerId, setPlayerId] = useState<string | undefined>(undefined);
  const [hasCreatedPlayer, setHasCreatedPlayer] = useState(false);

  // Connect to Yjs as client when we have a room code
  const { isConnected, isSynced, error, addPlayer, removePlayer } = useYjsSync({
    serverUrl: 'ws://localhost:1234',
    roomCode: joinedRoom || 'NONE',
    isHost: false,
  });

  // Get reactive game state (synced from host via Yjs)
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

  // Debug logging
  useEffect(() => {
    console.log('📱 Controller Yjs:', { isConnected, isSynced, error: error?.message });
    console.log('👥 Players from host:', players.length, players.map(p => p.name));
  }, [isConnected, isSynced, error, players]);

  const handleJoin = useCallback((code: string) => {
    console.log('📱 Joining room:', code);
    setJoinedRoom(code.toUpperCase());
  }, []);

  const handleCreatePlayer = useCallback((data: {
    name: string;
    shape: AvatarShape;
    color: string;
    isDrinking: boolean;
  }) => {
    console.log('📱 Creating player:', data);

    // Create new player
    const newPlayer: Player = {
      id: `player-${Date.now()}`,
      name: data.name,
      avatarShape: data.shape,
      avatarColor: data.color,
      isVIP: players.length === 0, // First player is VIP
      isDJ: false,
      isDrinking: data.isDrinking,
      score: 0,
      hasSubmitted: false,
      isConnected: true,
    };

    // Add directly to Yjs (syncs to all clients including host)
    addPlayer(newPlayer);

    setPlayerId(newPlayer.id);
    setHasCreatedPlayer(true);
    console.log('📱 Player added to Yjs:', newPlayer.name);
  }, [addPlayer, players.length]);

  const handleStartGame = useCallback(() => {
    console.log('📱 Requesting game start');
    // VIP can start the game - update shared state
    if (gameState.players.length >= 2) {
      gameState.phase = 'intro';
      gameState.currentRound = 1;
    }
  }, []);

  const handleLeave = useCallback(() => {
    console.log('📱 Leaving room');
    // Remove player from Yjs (syncs to all clients)
    if (playerId) {
      removePlayer(playerId);
    }
    setPlayerId(undefined);
    setHasCreatedPlayer(false);
    setJoinedRoom('');
  }, [playerId, removePlayer]);

  const mockRounds: PhoneFlowRound[] = rounds.length > 0
    ? rounds.map(r => ({ prompt: r.prompt }))
    : [{ prompt: 'What would make this party legendary?' }];

  // Determine display phase - show join/create if not yet in game
  const displayPhase = !joinedRoom ? 'idle' :
                       joinedRoom && !hasCreatedPlayer ? 'idle' :
                       phase;

  return (
    <PhoneFlow
      phase={displayPhase}
      players={players}
      currentRound={currentRound || 1}
      timerRemaining={timerRemaining}
      timerDuration={timerDuration}
      rounds={mockRounds}
      roomCode={joinedRoom}
      playerId={playerId}
      onJoin={handleJoin}
      onCreatePlayer={handleCreatePlayer}
      onSubmitAnswer={(answer) => console.log('Submit answer:', answer)}
      onVote={(choice) => console.log('Vote:', choice)}
      onLeave={handleLeave}
      onStartGame={handleStartGame}
    />
  );
}

export default App;
