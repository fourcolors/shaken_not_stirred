/**
 * Spotify OAuth Configuration
 *
 * IMPORTANT: Set your Client ID in the environment variable:
 * VITE_SPOTIFY_CLIENT_ID=your_client_id_here
 *
 * Get your Client ID from: https://developer.spotify.com/dashboard
 */

export interface SpotifyConfig {
  clientId: string;
  redirectUri: string;
  scopes: string[];
}

/**
 * Required Spotify OAuth scopes for the game
 * - streaming: Control playback (Web Playback SDK)
 * - user-read-email: Get user profile
 * - user-read-private: Get user's subscription level
 * - user-read-playback-state: Read current playback
 * - user-modify-playback-state: Control playback (pause, play, volume)
 * - user-read-currently-playing: Get currently playing track
 */
export const SPOTIFY_SCOPES = [
  'streaming',
  'user-read-email',
  'user-read-private',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
];

/**
 * Get Spotify configuration from environment
 */
export function getSpotifyConfig(): SpotifyConfig {
  const clientId = import.meta.env?.VITE_SPOTIFY_CLIENT_ID || '';

  if (!clientId) {
    console.warn(
      '[Spotify] No client ID found. Set VITE_SPOTIFY_CLIENT_ID in your .env file.'
    );
  }

  // Default redirect URI for development
  const redirectUri = import.meta.env?.VITE_SPOTIFY_REDIRECT_URI ||
    `${window.location.origin}/callback`;

  return {
    clientId,
    redirectUri,
    scopes: SPOTIFY_SCOPES,
  };
}

/**
 * Spotify authorization endpoints
 */
export const SPOTIFY_ENDPOINTS = {
  authorize: 'https://accounts.spotify.com/authorize',
  token: 'https://accounts.spotify.com/api/token',
  api: 'https://api.spotify.com/v1',
} as const;
