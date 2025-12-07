/**
 * PKCE (Proof Key for Code Exchange) utilities for Spotify OAuth
 *
 * PKCE is the recommended OAuth flow for client-side applications.
 * It uses a dynamically generated code verifier/challenge pair
 * instead of a client secret.
 */

/**
 * Generate a cryptographically random string
 */
function generateRandomString(length: number): string {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = crypto.getRandomValues(new Uint8Array(length));
  return Array.from(values)
    .map((x) => possible[x % possible.length])
    .join('');
}

/**
 * Generate SHA-256 hash of a string
 */
async function sha256(plain: string): Promise<ArrayBuffer> {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return crypto.subtle.digest('SHA-256', data);
}

/**
 * Base64 URL encode an ArrayBuffer
 */
function base64UrlEncode(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

/**
 * Generate PKCE code verifier (random string)
 * Must be between 43-128 characters
 */
export function generateCodeVerifier(): string {
  return generateRandomString(64);
}

/**
 * Generate PKCE code challenge from verifier
 * Uses SHA-256 hash with base64url encoding
 */
export async function generateCodeChallenge(verifier: string): Promise<string> {
  const hashed = await sha256(verifier);
  return base64UrlEncode(hashed);
}

/**
 * Storage keys for PKCE flow
 */
const STORAGE_KEYS = {
  codeVerifier: 'spotify_code_verifier',
  state: 'spotify_auth_state',
  accessToken: 'spotify_access_token',
  refreshToken: 'spotify_refresh_token',
  tokenExpiry: 'spotify_token_expiry',
} as const;

/**
 * Store code verifier for later use in token exchange
 */
export function storeCodeVerifier(verifier: string): void {
  sessionStorage.setItem(STORAGE_KEYS.codeVerifier, verifier);
}

/**
 * Retrieve stored code verifier
 */
export function getStoredCodeVerifier(): string | null {
  return sessionStorage.getItem(STORAGE_KEYS.codeVerifier);
}

/**
 * Clear code verifier after use
 */
export function clearCodeVerifier(): void {
  sessionStorage.removeItem(STORAGE_KEYS.codeVerifier);
}

/**
 * Generate and store a random state for CSRF protection
 */
export function generateState(): string {
  const state = generateRandomString(16);
  sessionStorage.setItem(STORAGE_KEYS.state, state);
  return state;
}

/**
 * Validate state parameter matches stored value
 */
export function validateState(state: string): boolean {
  const storedState = sessionStorage.getItem(STORAGE_KEYS.state);
  sessionStorage.removeItem(STORAGE_KEYS.state);
  return state === storedState;
}

/**
 * Token storage interface
 */
export interface StoredTokens {
  accessToken: string;
  refreshToken: string | null;
  expiresAt: number;
}

/**
 * Store OAuth tokens
 */
export function storeTokens(tokens: StoredTokens): void {
  localStorage.setItem(STORAGE_KEYS.accessToken, tokens.accessToken);
  if (tokens.refreshToken) {
    localStorage.setItem(STORAGE_KEYS.refreshToken, tokens.refreshToken);
  }
  localStorage.setItem(STORAGE_KEYS.tokenExpiry, tokens.expiresAt.toString());
}

/**
 * Retrieve stored tokens
 */
export function getStoredTokens(): StoredTokens | null {
  const accessToken = localStorage.getItem(STORAGE_KEYS.accessToken);
  const refreshToken = localStorage.getItem(STORAGE_KEYS.refreshToken);
  const expiryStr = localStorage.getItem(STORAGE_KEYS.tokenExpiry);

  if (!accessToken || !expiryStr) {
    return null;
  }

  return {
    accessToken,
    refreshToken,
    expiresAt: parseInt(expiryStr, 10),
  };
}

/**
 * Clear all stored tokens (logout)
 */
export function clearTokens(): void {
  localStorage.removeItem(STORAGE_KEYS.accessToken);
  localStorage.removeItem(STORAGE_KEYS.refreshToken);
  localStorage.removeItem(STORAGE_KEYS.tokenExpiry);
}

/**
 * Check if tokens are expired
 */
export function isTokenExpired(): boolean {
  const tokens = getStoredTokens();
  if (!tokens) return true;

  // Add 60 second buffer
  return Date.now() >= tokens.expiresAt - 60000;
}
