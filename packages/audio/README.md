# @shaken/audio

Audio management package for Shaken Not Stirred using Howler.js with mobile compatibility.

## Features

- 🔊 Sound effects management (shake, vote, reveal, timer, confetti)
- 🎵 Background music (lobby, game phases)
- 📱 Mobile compatibility (iOS Safari)
- 🔇 Mute/unmute controls
- 🎚️ Volume controls for SFX and music separately
- ⚛️ React hooks for easy integration

## Installation

This package is part of the monorepo. Install dependencies:

```bash
pnpm install
```

## Usage

### Basic Setup

```typescript
import { useAudio, SFX, Music } from '@shaken/audio';

function App() {
  const {
    isInitialized,
    isMuted,
    toggleMute,
    playSFX,
    playMusic,
    stopMusic
  } = useAudio();

  // Play a sound effect
  const handleShake = () => {
    playSFX(SFX.SHAKE);
  };

  // Play background music
  const startGame = () => {
    playMusic(Music.GAME);
  };

  return (
    <div>
      <button onClick={handleShake}>Shake!</button>
      <button onClick={toggleMute}>
        {isMuted ? 'Unmute' : 'Mute'}
      </button>
    </div>
  );
}
```

### Using SFX Hook

```typescript
import { useSFX } from '@shaken/audio';

function GameComponent() {
  const {
    playShake,
    playVote,
    playReveal,
    playTimerEnd,
    playConfetti
  } = useSFX();

  return (
    <div>
      <button onClick={playShake}>Shake</button>
      <button onClick={playVote}>Vote</button>
      <button onClick={playReveal}>Reveal</button>
    </div>
  );
}
```

### Direct AudioManager Usage

```typescript
import { audioManager, SFX, Music } from '@shaken/audio';

// Initialize (required on mobile - must be from user interaction)
await audioManager.init();

// Play sounds
audioManager.playSFX(SFX.SHAKE);
audioManager.playMusic(Music.LOBBY);

// Volume control
audioManager.setSFXVolume(0.8);
audioManager.setMusicVolume(0.5);

// Mute control
audioManager.toggleMute();
```

## Available Sound Effects

- `SFX.SHAKE` - Shake action sound
- `SFX.VOTE` - Vote submission sound
- `SFX.REVEAL` - Card reveal sound
- `SFX.TIMER_TICK` - Timer tick sound
- `SFX.TIMER_END` - Timer end sound
- `SFX.CONFETTI` - Celebration sound

## Available Music Tracks

- `Music.LOBBY` - Lobby background music
- `Music.GAME` - Game phase background music

## Mobile Compatibility

The audio system is designed to work on iOS Safari:

1. **User Interaction Required**: Audio must be initialized from a user interaction (tap, click)
2. **HTML5 Audio**: Uses HTML5 audio for better mobile compatibility
3. **Auto-unlock**: The `init()` method automatically unlocks audio on mobile

### Best Practices

```typescript
// Initialize audio on first user interaction
function LandingPage() {
  const { audioManager } = useAudio();

  const handleStart = async () => {
    // This ensures audio is unlocked on mobile
    await audioManager.init();
    // Now audio will work throughout the app
    navigate('/game');
  };

  return <button onClick={handleStart}>Start Game</button>;
}
```

## API Reference

### AudioManager

- `init()` - Initialize audio system (required on mobile)
- `playSFX(sfx: SFX)` - Play a sound effect
- `playMusic(track: Music, loop?: boolean)` - Play background music
- `stopMusic()` - Stop background music
- `pauseMusic()` - Pause background music
- `resumeMusic()` - Resume background music
- `setSFXVolume(volume: number)` - Set SFX volume (0.0 - 1.0)
- `setMusicVolume(volume: number)` - Set music volume (0.0 - 1.0)
- `mute()` - Mute all audio
- `unmute()` - Unmute all audio
- `toggleMute()` - Toggle mute state
- `getMuted()` - Get mute state
- `getInitialized()` - Get initialization state

## Development

```bash
# Build the package
pnpm build

# Watch mode
pnpm dev

# Type check
pnpm typecheck
```

## Customizing Sounds

Replace the URLs in `src/sfx.ts` with your own sound files:

```typescript
export const SFX_URLS: Record<SFX, string> = {
  [SFX.SHAKE]: '/sounds/shake.mp3',
  [SFX.VOTE]: '/sounds/vote.mp3',
  // ... etc
};
```

## License

Private - Part of Shaken Not Stirred monorepo
