/**
 * React hook for Spotify Web Playback
 */

import { useState, useEffect, useCallback } from 'react';
import { spotifyPlayer, type PlayerState, type SpotifyTrack } from '../player/SpotifyPlayer';
import { spotifyAuth } from '../auth/SpotifyAuth';

export interface UseSpotifyPlayerReturn {
  /** Whether player is ready */
  isReady: boolean;
  /** Whether currently playing */
  isPlaying: boolean;
  /** Whether paused */
  isPaused: boolean;
  /** Current track info */
  currentTrack: SpotifyTrack | null;
  /** Current position in ms */
  position: number;
  /** Track duration in ms */
  duration: number;
  /** Current volume (0-1) */
  volume: number;
  /** Device ID for this player */
  deviceId: string | null;
  /** Initialize the player */
  initialize: (playerName?: string) => Promise<boolean>;
  /** Toggle play/pause */
  togglePlay: () => Promise<void>;
  /** Resume playback */
  play: () => Promise<void>;
  /** Pause playback */
  pause: () => Promise<void>;
  /** Next track */
  nextTrack: () => Promise<void>;
  /** Previous track */
  previousTrack: () => Promise<void>;
  /** Seek to position */
  seek: (positionMs: number) => Promise<void>;
  /** Set volume */
  setVolume: (volume: number) => Promise<void>;
  /** Transfer playback to this device */
  transferPlayback: () => Promise<boolean>;
  /** Disconnect player */
  disconnect: () => void;
}

/**
 * Hook for controlling Spotify playback
 *
 * @example
 * ```tsx
 * function MusicPlayer() {
 *   const {
 *     isReady,
 *     isPlaying,
 *     currentTrack,
 *     togglePlay,
 *     initialize,
 *   } = useSpotifyPlayer();
 *
 *   useEffect(() => {
 *     initialize('My App Player');
 *   }, [initialize]);
 *
 *   if (!isReady) return <p>Loading player...</p>;
 *
 *   return (
 *     <div>
 *       <p>{currentTrack?.name || 'No track playing'}</p>
 *       <button onClick={togglePlay}>
 *         {isPlaying ? 'Pause' : 'Play'}
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 */
export function useSpotifyPlayer(): UseSpotifyPlayerReturn {
  const [state, setState] = useState<PlayerState>(spotifyPlayer.getState());
  const [deviceId, setDeviceId] = useState<string | null>(spotifyPlayer.getDeviceId());

  // Subscribe to player state changes
  useEffect(() => {
    const unsubscribe = spotifyPlayer.subscribe((newState) => {
      setState(newState);
      setDeviceId(spotifyPlayer.getDeviceId());
    });

    return unsubscribe;
  }, []);

  // Initialize player
  const initialize = useCallback(async (playerName?: string) => {
    if (!spotifyAuth.isAuthenticated()) {
      console.error('[useSpotifyPlayer] Not authenticated');
      return false;
    }
    return spotifyPlayer.initialize(playerName);
  }, []);

  // Playback controls
  const togglePlay = useCallback(() => spotifyPlayer.togglePlay(), []);
  const play = useCallback(() => spotifyPlayer.play(), []);
  const pause = useCallback(() => spotifyPlayer.pause(), []);
  const nextTrack = useCallback(() => spotifyPlayer.nextTrack(), []);
  const previousTrack = useCallback(() => spotifyPlayer.previousTrack(), []);
  const seek = useCallback((positionMs: number) => spotifyPlayer.seek(positionMs), []);
  const setVolume = useCallback((volume: number) => spotifyPlayer.setVolume(volume), []);
  const transferPlayback = useCallback(() => spotifyPlayer.transferPlayback(), []);
  const disconnect = useCallback(() => spotifyPlayer.disconnect(), []);

  return {
    ...state,
    deviceId,
    initialize,
    togglePlay,
    play,
    pause,
    nextTrack,
    previousTrack,
    seek,
    setVolume,
    transferPlayback,
    disconnect,
  };
}
