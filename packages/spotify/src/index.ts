/**
 * @shaken/spotify - Spotify integration for Shaken Not Stirred
 *
 * Provides OAuth authentication, Web Playback SDK, and React hooks
 * for integrating Spotify music into the game.
 *
 * @example
 * ```tsx
 * import { useSpotifyAuth, useSpotifyPlayer, useNowPlaying } from '@shaken/spotify';
 *
 * function App() {
 *   const { isAuthenticated, login } = useSpotifyAuth();
 *   const { isReady, togglePlay } = useSpotifyPlayer();
 *   const { track, audioFeatures } = useNowPlaying();
 *
 *   // ...
 * }
 * ```
 */

// Auth
export {
  spotifyAuth,
  SpotifyAuth,
  type SpotifyUser,
  type TokenResponse,
  getSpotifyConfig,
  SPOTIFY_SCOPES,
  SPOTIFY_ENDPOINTS,
  type SpotifyConfig,
} from './auth';

// Player
export {
  spotifyPlayer,
  SpotifyPlayer,
  type PlayerState,
  type SpotifyTrack,
  type PlayerEventCallback,
} from './player';

// Hooks
export {
  useSpotifyAuth,
  type UseSpotifyAuthReturn,
  useSpotifyPlayer,
  type UseSpotifyPlayerReturn,
  useNowPlaying,
  type UseNowPlayingReturn,
  type NowPlayingTrack,
  type AudioFeatures,
} from './hooks';
