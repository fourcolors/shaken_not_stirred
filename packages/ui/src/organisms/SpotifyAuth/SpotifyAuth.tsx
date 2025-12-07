import React from 'react';
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { Button } from '../../atoms/Button';
import styles from './SpotifyAuth.module.css';

export type SpotifyAuthState = 'idle' | 'connecting' | 'success' | 'error';

export interface SpotifyAuthProps {
  /** Current authentication state */
  state: SpotifyAuthState;
  /** Connected account name (when authenticated) */
  accountName?: string;
  /** Error message (when in error state) */
  errorMessage?: string;
  /** Callback when connect is clicked */
  onConnect?: () => void;
  /** Callback when skip is clicked */
  onSkip?: () => void;
  /** Callback when disconnect is clicked */
  onDisconnect?: () => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * Spotify authentication screen for DJ mode.
 * Allows host to connect their Spotify account for music integration.
 */
export function SpotifyAuth({
  state,
  accountName,
  errorMessage,
  onConnect,
  onSkip,
  onDisconnect,
  className,
}: SpotifyAuthProps) {
  return (
    <div className={clsx(styles.spotifyAuth, styles[state], className)}>
      <div className={styles.container}>
        {/* Spotify Logo */}
        <div className={styles.logoContainer}>
          <div className={styles.spotifyLogo}>
            <svg viewBox="0 0 24 24" className={styles.logoIcon}>
              <path
                fill="currentColor"
                d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
              />
            </svg>
          </div>
          {state === 'connecting' && <div className={styles.pulseRing} />}
        </div>

        {/* Content based on state */}
        {state === 'idle' && (
          <>
            <Typography variant="h2" glow className={styles.title}>
              Connect Spotify
            </Typography>
            <Typography variant="body" color="muted" className={styles.description}>
              Enable DJ mode to let players vote on the vibe.
              <br />
              Music keeps the party going between rounds!
            </Typography>
            <div className={styles.actions}>
              <Button variant="primary" size="lg" glow onClick={onConnect}>
                Connect Account
              </Button>
              <Button variant="ghost" size="lg" onClick={onSkip}>
                Skip for now
              </Button>
            </div>
          </>
        )}

        {state === 'connecting' && (
          <>
            <Typography variant="h3" className={styles.title}>
              Connecting...
            </Typography>
            <Typography variant="body" color="muted" className={styles.description}>
              Complete authentication in the popup window
            </Typography>
            <div className={styles.spinner} />
          </>
        )}

        {state === 'success' && (
          <>
            <Typography variant="h2" color="accent" glow className={styles.title}>
              Connected!
            </Typography>
            <div className={styles.accountInfo}>
              <Typography variant="label" color="muted">
                Logged in as
              </Typography>
              <Typography variant="h4" color="primary">
                {accountName}
              </Typography>
            </div>
            <div className={styles.actions}>
              <Button variant="primary" size="lg" glow onClick={onSkip}>
                Continue
              </Button>
              <Button variant="ghost" size="md" onClick={onDisconnect}>
                Disconnect
              </Button>
            </div>
          </>
        )}

        {state === 'error' && (
          <>
            <Typography variant="h3" color="error" className={styles.title}>
              Connection Failed
            </Typography>
            <Typography variant="body" color="muted" className={styles.description}>
              {errorMessage || 'Unable to connect to Spotify. Please try again.'}
            </Typography>
            <div className={styles.actions}>
              <Button variant="primary" size="lg" onClick={onConnect}>
                Try Again
              </Button>
              <Button variant="ghost" size="lg" onClick={onSkip}>
                Skip
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SpotifyAuth;
