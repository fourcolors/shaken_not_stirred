# Audio Package Integration Examples

## Quick Start Integration

### 1. App-Level Setup (Initialize Audio)

```typescript
// apps/client/src/App.tsx
import { useAudio, Music } from '@shaken/audio';
import { useEffect } from 'react';

function App() {
  const { isInitialized, playMusic } = useAudio();

  useEffect(() => {
    if (isInitialized) {
      // Start lobby music when app loads
      playMusic(Music.LOBBY);
    }
  }, [isInitialized, playMusic]);

  return (
    <Router>
      {/* Your app content */}
    </Router>
  );
}
```

### 2. Shake Component Integration

```typescript
// Use with the shake detection hook
import { useSFX } from '@shaken/audio';
import { useShake } from '@shaken/hooks';

function ShakeToSubmit() {
  const { playShake } = useSFX();
  const { shakes, reset } = useShake({
    threshold: 15,
    shakesRequired: 3,
    onComplete: () => {
      playShake(); // Play shake sound when complete
      submitAnswer();
    }
  });

  return (
    <div>
      <p>Shakes: {shakes}/3</p>
      <p>Shake your phone to submit!</p>
    </div>
  );
}
```

### 3. Vote Button Integration

```typescript
import { useSFX } from '@shaken/audio';

function VoteButton({ playerId, onVote }) {
  const { playVote } = useSFX();

  const handleVote = () => {
    playVote(); // Play click sound
    onVote(playerId);
  };

  return (
    <button onClick={handleVote}>
      Vote for this player
    </button>
  );
}
```

### 4. Timer Integration

```typescript
import { useSFX } from '@shaken/audio';
import { useEffect } from 'react';

function GameTimer({ timeRemaining }) {
  const { playTimerTick, playTimerEnd } = useSFX();

  useEffect(() => {
    if (timeRemaining <= 5 && timeRemaining > 0) {
      // Play tick in last 5 seconds
      playTimerTick();
    } else if (timeRemaining === 0) {
      // Play end sound when timer expires
      playTimerEnd();
    }
  }, [timeRemaining, playTimerTick, playTimerEnd]);

  return <div>Time: {timeRemaining}s</div>;
}
```

### 5. Reveal Phase Integration

```typescript
import { useSFX } from '@shaken/audio';

function RevealCard({ card, revealed, onReveal }) {
  const { playReveal } = useSFX();

  const handleReveal = () => {
    playReveal(); // Play whoosh sound
    onReveal();
  };

  return (
    <button onClick={handleReveal} disabled={revealed}>
      {revealed ? card : '?'}
    </button>
  );
}
```

### 6. Winner Celebration Integration

```typescript
import { useSFX, useAudio } from '@shaken/audio';
import { useEffect } from 'react';

function WinnerScreen({ winner }) {
  const { playConfetti } = useSFX();
  const { stopMusic } = useAudio();

  useEffect(() => {
    // Stop game music and play celebration
    stopMusic();
    playConfetti();
  }, [stopMusic, playConfetti]);

  return (
    <div>
      <h1>🎉 {winner} Wins! 🎉</h1>
      <Confetti />
    </div>
  );
}
```

### 7. Music Control Button

```typescript
import { useAudio } from '@shaken/audio';

function AudioControls() {
  const { isMuted, toggleMute, setSFXVolume, setMusicVolume } = useAudio();

  return (
    <div>
      <button onClick={toggleMute}>
        {isMuted ? '🔇 Unmute' : '🔊 Mute'}
      </button>

      <label>
        SFX Volume:
        <input
          type="range"
          min="0"
          max="100"
          onChange={(e) => setSFXVolume(Number(e.target.value) / 100)}
        />
      </label>

      <label>
        Music Volume:
        <input
          type="range"
          min="0"
          max="100"
          onChange={(e) => setMusicVolume(Number(e.target.value) / 100)}
        />
      </label>
    </div>
  );
}
```

### 8. Game Phase Music Switching

```typescript
import { useAudio, Music } from '@shaken/audio';
import { useEffect } from 'react';

function GameRoom({ gamePhase }) {
  const { playMusic } = useAudio();

  useEffect(() => {
    // Switch music based on game phase
    if (gamePhase === 'LOBBY') {
      playMusic(Music.LOBBY);
    } else if (gamePhase === 'IN_PROGRESS') {
      playMusic(Music.GAME);
    }
  }, [gamePhase, playMusic]);

  return (
    <div>
      {/* Game content */}
    </div>
  );
}
```

## Complete Game Flow Example

```typescript
import { useAudio, useSFX, Music, SFX } from '@shaken/audio';

function GameFlow() {
  const { playMusic, stopMusic } = useAudio();
  const {
    playShake,
    playVote,
    playReveal,
    playTimerTick,
    playTimerEnd,
    playConfetti
  } = useSFX();

  const handleGameStart = () => {
    playMusic(Music.GAME); // Start game music
  };

  const handleSubmitAnswer = () => {
    playShake(); // Play shake sound
  };

  const handleVote = () => {
    playVote(); // Play vote sound
  };

  const handleReveal = () => {
    playReveal(); // Play reveal sound
  };

  const handleTimerTick = () => {
    playTimerTick(); // Play tick in last seconds
  };

  const handleTimerEnd = () => {
    playTimerEnd(); // Play timer end sound
  };

  const handleWin = () => {
    stopMusic(); // Stop music
    playConfetti(); // Play celebration
  };

  return (
    <div>
      {/* Game UI with audio integration */}
    </div>
  );
}
```

## Mobile Compatibility Notes

### iOS Safari Audio Unlock

Audio must be initialized from a user interaction. Best practice:

```typescript
function LandingPage() {
  const { audioManager } = useAudio();

  const handleEnter = async () => {
    // This unlocks audio on iOS
    await audioManager.init();
    navigate('/lobby');
  };

  return (
    <button onClick={handleEnter}>
      Enter Game
    </button>
  );
}
```

### Testing Audio on Mobile

1. **Test on real devices**: iOS Safari and Android Chrome
2. **User interaction required**: All audio must follow a user action
3. **Test mute state**: Ensure mute persists across screens
4. **Test volume**: Verify volume controls work properly
5. **Test background music**: Ensure music loops correctly

## Performance Tips

1. **Preload**: Sound effects are preloaded on init
2. **Lazy music**: Music loads on first play
3. **Single instance**: AudioManager is a singleton (efficient)
4. **Memory**: Sounds stay cached for performance
5. **Cleanup**: Automatic cleanup on unmount

## Troubleshooting

### No sound on mobile?
- Ensure `audioManager.init()` is called from user interaction
- Check browser console for errors
- Verify audio URLs are accessible

### Sounds not playing?
- Check `isInitialized` state
- Verify not muted
- Check browser audio permissions

### Music not looping?
- Music loops by default
- Check if `stopMusic()` is called unexpectedly

### Volume issues?
- Default SFX volume: 0.7
- Default music volume: 0.4
- Check device volume settings
