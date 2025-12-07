/**
 * Spotify OAuth Authentication Manager
 *
 * Handles the complete PKCE OAuth flow:
 * 1. Generate authorization URL
 * 2. Handle callback with authorization code
 * 3. Exchange code for tokens
 * 4. Refresh expired tokens
 */

import { getSpotifyConfig, SPOTIFY_ENDPOINTS } from './config';
import {
  generateCodeVerifier,
  generateCodeChallenge,
  storeCodeVerifier,
  getStoredCodeVerifier,
  clearCodeVerifier,
  generateState,
  validateState,
  storeTokens,
  getStoredTokens,
  clearTokens,
  isTokenExpired,
  type StoredTokens,
} from './pkce';

export interface SpotifyUser {
  id: string;
  display_name: string;
  email: string;
  images: { url: string }[];
  product: 'free' | 'open' | 'premium';
}

export interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token?: string;
  scope: string;
}

/**
 * Spotify Authentication Manager
 */
export class SpotifyAuth {
  private static instance: SpotifyAuth;
  private accessToken: string | null = null;
  private user: SpotifyUser | null = null;

  private constructor() {
    // Restore tokens from storage on init
    const tokens = getStoredTokens();
    if (tokens && !isTokenExpired()) {
      this.accessToken = tokens.accessToken;
    }
  }

  /**
   * Get singleton instance
   */
  static getInstance(): SpotifyAuth {
    if (!SpotifyAuth.instance) {
      SpotifyAuth.instance = new SpotifyAuth();
    }
    return SpotifyAuth.instance;
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return !!this.accessToken && !isTokenExpired();
  }

  /**
   * Get current access token
   */
  getAccessToken(): string | null {
    if (isTokenExpired()) {
      return null;
    }
    return this.accessToken;
  }

  /**
   * Get current user
   */
  getUser(): SpotifyUser | null {
    return this.user;
  }

  /**
   * Start OAuth login flow
   * Redirects to Spotify authorization page
   */
  async login(): Promise<void> {
    const config = getSpotifyConfig();

    if (!config.clientId) {
      throw new Error('Spotify Client ID not configured');
    }

    // Generate PKCE values
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = await generateCodeChallenge(codeVerifier);
    const state = generateState();

    // Store verifier for later
    storeCodeVerifier(codeVerifier);

    // Build authorization URL
    const params = new URLSearchParams({
      client_id: config.clientId,
      response_type: 'code',
      redirect_uri: config.redirectUri,
      scope: config.scopes.join(' '),
      state,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
    });

    // Redirect to Spotify
    window.location.href = `${SPOTIFY_ENDPOINTS.authorize}?${params.toString()}`;
  }

  /**
   * Handle OAuth callback
   * Call this on the redirect URI page
   */
  async handleCallback(urlParams?: URLSearchParams): Promise<boolean> {
    const params = urlParams || new URLSearchParams(window.location.search);

    const code = params.get('code');
    const state = params.get('state');
    const error = params.get('error');

    if (error) {
      console.error('[Spotify] Authorization error:', error);
      return false;
    }

    if (!code || !state) {
      console.error('[Spotify] Missing code or state');
      return false;
    }

    // Validate state
    if (!validateState(state)) {
      console.error('[Spotify] Invalid state parameter');
      return false;
    }

    // Get stored verifier
    const codeVerifier = getStoredCodeVerifier();
    if (!codeVerifier) {
      console.error('[Spotify] No code verifier found');
      return false;
    }

    try {
      // Exchange code for tokens
      const tokens = await this.exchangeCodeForTokens(code, codeVerifier);

      // Store tokens
      this.accessToken = tokens.access_token;
      storeTokens({
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token || null,
        expiresAt: Date.now() + tokens.expires_in * 1000,
      });

      // Clear verifier
      clearCodeVerifier();

      // Fetch user profile
      await this.fetchUserProfile();

      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);

      return true;
    } catch (err) {
      console.error('[Spotify] Token exchange failed:', err);
      return false;
    }
  }

  /**
   * Exchange authorization code for tokens
   */
  private async exchangeCodeForTokens(
    code: string,
    codeVerifier: string
  ): Promise<TokenResponse> {
    const config = getSpotifyConfig();

    const response = await fetch(SPOTIFY_ENDPOINTS.token, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: config.redirectUri,
        client_id: config.clientId,
        code_verifier: codeVerifier,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error_description || 'Token exchange failed');
    }

    return response.json();
  }

  /**
   * Refresh access token using refresh token
   */
  async refreshAccessToken(): Promise<boolean> {
    const tokens = getStoredTokens();
    if (!tokens?.refreshToken) {
      console.error('[Spotify] No refresh token available');
      return false;
    }

    const config = getSpotifyConfig();

    try {
      const response = await fetch(SPOTIFY_ENDPOINTS.token, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: tokens.refreshToken,
          client_id: config.clientId,
        }),
      });

      if (!response.ok) {
        throw new Error('Token refresh failed');
      }

      const newTokens: TokenResponse = await response.json();

      this.accessToken = newTokens.access_token;
      storeTokens({
        accessToken: newTokens.access_token,
        refreshToken: newTokens.refresh_token || tokens.refreshToken,
        expiresAt: Date.now() + newTokens.expires_in * 1000,
      });

      return true;
    } catch (err) {
      console.error('[Spotify] Token refresh failed:', err);
      this.logout();
      return false;
    }
  }

  /**
   * Fetch current user profile
   */
  async fetchUserProfile(): Promise<SpotifyUser | null> {
    if (!this.accessToken) return null;

    try {
      const response = await fetch(`${SPOTIFY_ENDPOINTS.api}/me`, {
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user profile');
      }

      this.user = await response.json();
      return this.user;
    } catch (err) {
      console.error('[Spotify] Failed to fetch user:', err);
      return null;
    }
  }

  /**
   * Logout and clear all tokens
   */
  logout(): void {
    this.accessToken = null;
    this.user = null;
    clearTokens();
  }
}

// Export singleton instance
export const spotifyAuth = SpotifyAuth.getInstance();
