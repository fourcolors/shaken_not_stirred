/**
 * React hook for Spotify authentication
 */

import { useState, useEffect, useCallback } from 'react';
import { spotifyAuth, type SpotifyUser } from '../auth/SpotifyAuth';

export interface UseSpotifyAuthReturn {
  /** Whether user is authenticated */
  isAuthenticated: boolean;
  /** Whether auth check is in progress */
  isLoading: boolean;
  /** Current user profile (null if not authenticated) */
  user: SpotifyUser | null;
  /** Error message if auth failed */
  error: string | null;
  /** Start OAuth login flow */
  login: () => Promise<void>;
  /** Logout and clear tokens */
  logout: () => void;
  /** Check if on callback page and handle it */
  handleCallback: () => Promise<boolean>;
}

/**
 * Hook for managing Spotify authentication
 *
 * @example
 * ```tsx
 * function SpotifyLogin() {
 *   const { isAuthenticated, user, login, logout } = useSpotifyAuth();
 *
 *   if (isAuthenticated) {
 *     return (
 *       <div>
 *         <p>Welcome, {user?.display_name}!</p>
 *         <button onClick={logout}>Logout</button>
 *       </div>
 *     );
 *   }
 *
 *   return <button onClick={login}>Login with Spotify</button>;
 * }
 * ```
 */
export function useSpotifyAuth(): UseSpotifyAuthReturn {
  const [isAuthenticated, setIsAuthenticated] = useState(spotifyAuth.isAuthenticated());
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<SpotifyUser | null>(spotifyAuth.getUser());
  const [error, setError] = useState<string | null>(null);

  // Check authentication on mount
  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true);

      if (spotifyAuth.isAuthenticated()) {
        // Already authenticated, fetch user if needed
        let currentUser = spotifyAuth.getUser();
        if (!currentUser) {
          currentUser = await spotifyAuth.fetchUserProfile();
        }
        setUser(currentUser);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }

      setIsLoading(false);
    };

    checkAuth();
  }, []);

  // Login handler
  const login = useCallback(async () => {
    setError(null);
    try {
      await spotifyAuth.login();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    }
  }, []);

  // Logout handler
  const logout = useCallback(() => {
    spotifyAuth.logout();
    setIsAuthenticated(false);
    setUser(null);
  }, []);

  // Handle OAuth callback
  const handleCallback = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const success = await spotifyAuth.handleCallback();

      if (success) {
        const currentUser = spotifyAuth.getUser();
        setUser(currentUser);
        setIsAuthenticated(true);
        return true;
      } else {
        setError('Authentication failed');
        return false;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Callback handling failed');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isAuthenticated,
    isLoading,
    user,
    error,
    login,
    logout,
    handleCallback,
  };
}
