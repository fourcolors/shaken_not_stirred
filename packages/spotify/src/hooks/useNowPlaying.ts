/**
 * React hook for getting currently playing track info
 * Useful for audio visualization and game integration
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { spotifyAuth } from '../auth/SpotifyAuth';

export interface NowPlayingTrack {
  id: string;
  name: string;
  artists: string[];
  albumName: string;
  albumArt: string;
  durationMs: number;
  progressMs: number;
  isPlaying: boolean;
}

export interface AudioFeatures {
  tempo: number; // BPM
  energy: number; // 0-1
  danceability: number; // 0-1
  valence: number; // 0-1 (musical positiveness)
  loudness: number; // dB
}

export interface UseNowPlayingReturn {
  /** Current track info */
  track: NowPlayingTrack | null;
  /** Audio features for visualization */
  audioFeatures: AudioFeatures | null;
  /** Whether data is loading */
  isLoading: boolean;
  /** Error message */
  error: string | null;
  /** Manually refresh now playing */
  refresh: () => Promise<void>;
}

/**
 * Hook for getting currently playing track with audio features
 *
 * Polls Spotify API for current playback state.
 * Useful for:
 * - Displaying "Now Playing" info
 * - Audio visualization
 * - Game integration (tempo-based effects)
 *
 * @param pollIntervalMs - How often to poll (default: 1000ms)
 *
 * @example
 * ```tsx
 * function NowPlaying() {
 *   const { track, audioFeatures, isLoading } = useNowPlaying(1000);
 *
 *   if (isLoading) return <p>Loading...</p>;
 *   if (!track) return <p>Nothing playing</p>;
 *
 *   return (
 *     <div>
 *       <img src={track.albumArt} alt={track.albumName} />
 *       <p>{track.name}</p>
 *       <p>{track.artists.join(', ')}</p>
 *       {audioFeatures && <p>BPM: {Math.round(audioFeatures.tempo)}</p>}
 *     </div>
 *   );
 * }
 * ```
 */
export function useNowPlaying(pollIntervalMs = 1000): UseNowPlayingReturn {
  const [track, setTrack] = useState<NowPlayingTrack | null>(null);
  const [audioFeatures, setAudioFeatures] = useState<AudioFeatures | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const lastTrackId = useRef<string | null>(null);

  const fetchNowPlaying = useCallback(async () => {
    const token = spotifyAuth.getAccessToken();
    if (!token) {
      setTrack(null);
      setAudioFeatures(null);
      setIsLoading(false);
      return;
    }

    try {
      // Fetch currently playing
      const response = await fetch(
        'https://api.spotify.com/v1/me/player/currently-playing',
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 204) {
        // Nothing playing
        setTrack(null);
        setAudioFeatures(null);
        setError(null);
        setIsLoading(false);
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to fetch now playing');
      }

      const data = await response.json();

      if (!data.item) {
        setTrack(null);
        setAudioFeatures(null);
        setIsLoading(false);
        return;
      }

      const newTrack: NowPlayingTrack = {
        id: data.item.id,
        name: data.item.name,
        artists: data.item.artists.map((a: any) => a.name),
        albumName: data.item.album.name,
        albumArt: data.item.album.images[0]?.url || '',
        durationMs: data.item.duration_ms,
        progressMs: data.progress_ms,
        isPlaying: data.is_playing,
      };

      setTrack(newTrack);
      setError(null);

      // Fetch audio features if track changed
      if (newTrack.id !== lastTrackId.current) {
        lastTrackId.current = newTrack.id;
        await fetchAudioFeatures(token, newTrack.id);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchAudioFeatures = async (token: string, trackId: string) => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/audio-features/${trackId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!response.ok) {
        setAudioFeatures(null);
        return;
      }

      const data = await response.json();

      setAudioFeatures({
        tempo: data.tempo,
        energy: data.energy,
        danceability: data.danceability,
        valence: data.valence,
        loudness: data.loudness,
      });
    } catch {
      setAudioFeatures(null);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchNowPlaying();
  }, [fetchNowPlaying]);

  // Polling
  useEffect(() => {
    if (pollIntervalMs <= 0) return;

    const interval = setInterval(fetchNowPlaying, pollIntervalMs);
    return () => clearInterval(interval);
  }, [fetchNowPlaying, pollIntervalMs]);

  return {
    track,
    audioFeatures,
    isLoading,
    error,
    refresh: fetchNowPlaying,
  };
}
