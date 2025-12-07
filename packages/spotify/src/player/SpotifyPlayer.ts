/**
 * Spotify Web Playback SDK Manager
 *
 * Enables in-browser music playback for Premium users.
 * The game's TV/Host becomes a Spotify Connect device.
 *
 * Requirements:
 * - User must have Spotify Premium
 * - Must be called after successful OAuth authentication
 */

import { spotifyAuth } from '../auth/SpotifyAuth';

export interface PlayerState {
  isReady: boolean;
  isPlaying: boolean;
  isPaused: boolean;
  currentTrack: SpotifyTrack | null;
  position: number;
  duration: number;
  volume: number;
}

export interface SpotifyTrack {
  id: string;
  name: string;
  artists: string[];
  albumName: string;
  albumArt: string;
  durationMs: number;
}

export type PlayerEventCallback = (state: PlayerState) => void;

/**
 * Spotify Web Playback SDK Manager
 */
export class SpotifyPlayer {
  private static instance: SpotifyPlayer;
  private player: Spotify.Player | null = null;
  private deviceId: string | null = null;
  private state: PlayerState = {
    isReady: false,
    isPlaying: false,
    isPaused: false,
    currentTrack: null,
    position: 0,
    duration: 0,
    volume: 0.5,
  };
  private listeners: Set<PlayerEventCallback> = new Set();
  private sdkLoaded = false;

  private constructor() {}

  /**
   * Get singleton instance
   */
  static getInstance(): SpotifyPlayer {
    if (!SpotifyPlayer.instance) {
      SpotifyPlayer.instance = new SpotifyPlayer();
    }
    return SpotifyPlayer.instance;
  }

  /**
   * Get current player state
   */
  getState(): PlayerState {
    return { ...this.state };
  }

  /**
   * Get device ID (for transferring playback)
   */
  getDeviceId(): string | null {
    return this.deviceId;
  }

  /**
   * Subscribe to player state changes
   */
  subscribe(callback: PlayerEventCallback): () => void {
    this.listeners.add(callback);
    // Immediately call with current state
    callback(this.state);
    return () => this.listeners.delete(callback);
  }

  /**
   * Notify all listeners of state change
   */
  private notifyListeners(): void {
    this.listeners.forEach((cb) => cb(this.state));
  }

  /**
   * Load the Spotify Web Playback SDK
   */
  async loadSDK(): Promise<void> {
    if (this.sdkLoaded) return;

    return new Promise((resolve, reject) => {
      // Check if already loaded
      if (window.Spotify) {
        this.sdkLoaded = true;
        resolve();
        return;
      }

      // Set up callback for when SDK loads
      window.onSpotifyWebPlaybackSDKReady = () => {
        this.sdkLoaded = true;
        resolve();
      };

      // Load the SDK script
      const script = document.createElement('script');
      script.src = 'https://sdk.scdn.co/spotify-player.js';
      script.async = true;
      script.onerror = () => reject(new Error('Failed to load Spotify SDK'));
      document.body.appendChild(script);

      // Timeout after 10 seconds
      setTimeout(() => {
        if (!this.sdkLoaded) {
          reject(new Error('Spotify SDK load timeout'));
        }
      }, 10000);
    });
  }

  /**
   * Initialize the player
   */
  async initialize(playerName = 'Shaken Not Stirred'): Promise<boolean> {
    const token = spotifyAuth.getAccessToken();
    if (!token) {
      console.error('[SpotifyPlayer] No access token');
      return false;
    }

    try {
      await this.loadSDK();

      this.player = new window.Spotify.Player({
        name: playerName,
        getOAuthToken: async (cb) => {
          // Check if token needs refresh
          let currentToken = spotifyAuth.getAccessToken();
          if (!currentToken) {
            await spotifyAuth.refreshAccessToken();
            currentToken = spotifyAuth.getAccessToken();
          }
          cb(currentToken || '');
        },
        volume: this.state.volume,
      });

      // Set up event handlers
      this.setupEventHandlers();

      // Connect to Spotify
      const connected = await this.player.connect();

      if (!connected) {
        console.error('[SpotifyPlayer] Failed to connect');
        return false;
      }

      console.log('[SpotifyPlayer] Connected successfully');
      return true;
    } catch (err) {
      console.error('[SpotifyPlayer] Initialization failed:', err);
      return false;
    }
  }

  /**
   * Set up player event handlers
   */
  private setupEventHandlers(): void {
    if (!this.player) return;

    // Ready
    this.player.addListener('ready', ({ device_id }) => {
      console.log('[SpotifyPlayer] Ready with device ID:', device_id);
      this.deviceId = device_id;
      this.state.isReady = true;
      this.notifyListeners();
    });

    // Not ready
    this.player.addListener('not_ready', ({ device_id }) => {
      console.log('[SpotifyPlayer] Device went offline:', device_id);
      this.state.isReady = false;
      this.notifyListeners();
    });

    // Player state changed
    this.player.addListener('player_state_changed', (state) => {
      if (!state) {
        this.state.isPlaying = false;
        this.state.isPaused = false;
        this.state.currentTrack = null;
        this.notifyListeners();
        return;
      }

      const track = state.track_window.current_track;

      this.state.isPlaying = !state.paused;
      this.state.isPaused = state.paused;
      this.state.position = state.position;
      this.state.duration = state.duration;

      if (track) {
        this.state.currentTrack = {
          id: track.id,
          name: track.name,
          artists: track.artists.map((a) => a.name),
          albumName: track.album.name,
          albumArt: track.album.images[0]?.url || '',
          durationMs: track.duration_ms,
        };
      } else {
        this.state.currentTrack = null;
      }

      this.notifyListeners();
    });

    // Errors
    this.player.addListener('initialization_error', ({ message }) => {
      console.error('[SpotifyPlayer] Init error:', message);
    });

    this.player.addListener('authentication_error', ({ message }) => {
      console.error('[SpotifyPlayer] Auth error:', message);
      // Try to refresh token
      spotifyAuth.refreshAccessToken();
    });

    this.player.addListener('account_error', ({ message }) => {
      console.error('[SpotifyPlayer] Account error (Premium required?):', message);
    });

    this.player.addListener('playback_error', ({ message }) => {
      console.error('[SpotifyPlayer] Playback error:', message);
    });
  }

  /**
   * Toggle play/pause
   */
  async togglePlay(): Promise<void> {
    await this.player?.togglePlay();
  }

  /**
   * Resume playback
   */
  async play(): Promise<void> {
    await this.player?.resume();
  }

  /**
   * Pause playback
   */
  async pause(): Promise<void> {
    await this.player?.pause();
  }

  /**
   * Skip to next track
   */
  async nextTrack(): Promise<void> {
    await this.player?.nextTrack();
  }

  /**
   * Skip to previous track
   */
  async previousTrack(): Promise<void> {
    await this.player?.previousTrack();
  }

  /**
   * Seek to position
   */
  async seek(positionMs: number): Promise<void> {
    await this.player?.seek(positionMs);
  }

  /**
   * Set volume (0-1)
   */
  async setVolume(volume: number): Promise<void> {
    const clamped = Math.max(0, Math.min(1, volume));
    this.state.volume = clamped;
    await this.player?.setVolume(clamped);
    this.notifyListeners();
  }

  /**
   * Transfer playback to this device
   */
  async transferPlayback(): Promise<boolean> {
    if (!this.deviceId) {
      console.error('[SpotifyPlayer] No device ID');
      return false;
    }

    const token = spotifyAuth.getAccessToken();
    if (!token) return false;

    try {
      const response = await fetch('https://api.spotify.com/v1/me/player', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          device_ids: [this.deviceId],
          play: true,
        }),
      });

      return response.ok || response.status === 204;
    } catch (err) {
      console.error('[SpotifyPlayer] Transfer failed:', err);
      return false;
    }
  }

  /**
   * Disconnect player
   */
  disconnect(): void {
    this.player?.disconnect();
    this.player = null;
    this.deviceId = null;
    this.state = {
      isReady: false,
      isPlaying: false,
      isPaused: false,
      currentTrack: null,
      position: 0,
      duration: 0,
      volume: 0.5,
    };
    this.notifyListeners();
  }
}

// Export singleton instance
export const spotifyPlayer = SpotifyPlayer.getInstance();

// Type declaration for Spotify SDK global
declare global {
  interface Window {
    Spotify: typeof Spotify;
    onSpotifyWebPlaybackSDKReady: () => void;
  }
}
