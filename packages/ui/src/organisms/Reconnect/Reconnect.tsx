import React from 'react';
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { Button } from '../../atoms/Button';
import styles from './Reconnect.module.css';

export type ReconnectState = 'disconnected' | 'reconnecting' | 'failed';

export interface ReconnectProps {
  /** Current reconnection state */
  state: ReconnectState;
  /** Number of reconnection attempts */
  attempts?: number;
  /** Maximum reconnection attempts */
  maxAttempts?: number;
  /** Error message for failed state */
  errorMessage?: string;
  /** Callback when retry is clicked */
  onRetry?: () => void;
  /** Callback to start new game */
  onNewGame?: () => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * Reconnection screen with glitch effects.
 * Shown when connection to server is lost.
 */
export function Reconnect({
  state,
  attempts = 0,
  maxAttempts = 5,
  errorMessage,
  onRetry,
  onNewGame,
  className,
}: ReconnectProps) {
  return (
    <div className={clsx(styles.reconnect, styles[state], className)}>
      {/* Glitch background effect */}
      <div className={styles.glitchBg}>
        <div className={styles.scanlines} />
        <div className={styles.noise} />
      </div>

      <div className={styles.container}>
        {/* Glitch icon */}
        <div className={styles.iconContainer}>
          <div className={styles.icon}>
            <svg viewBox="0 0 24 24" className={styles.wifiIcon}>
              <path
                fill="currentColor"
                d="M12 21l-1.5-1.5c-2.1-2.1-2.1-5.5 0-7.6l1.5-1.5 1.5 1.5c2.1 2.1 2.1 5.5 0 7.6L12 21zm0-4.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z"
              />
              <path
                fill="currentColor"
                d="M12 3C7.95 3 4.21 4.34 1.2 6.6l1.5 1.5C5.25 6.05 8.45 5 12 5s6.75 1.05 9.3 3.1l1.5-1.5C19.79 4.34 16.05 3 12 3zm0 4c-2.84 0-5.45.95-7.6 2.55l1.5 1.5C7.75 9.75 9.8 9 12 9s4.25.75 6.1 2.05l1.5-1.5C17.45 7.95 14.84 7 12 7z"
                className={styles.signalBars}
              />
            </svg>
            {state !== 'failed' && <div className={styles.iconGlitch} />}
          </div>
        </div>

        {/* Status text */}
        {state === 'disconnected' && (
          <>
            <Typography variant="h2" className={styles.glitchText}>
              <span className={styles.glitchLayer} data-text="DISCONNECTED">
                DISCONNECTED
              </span>
            </Typography>
            <Typography variant="body" color="muted">
              Connection to server lost
            </Typography>
          </>
        )}

        {state === 'reconnecting' && (
          <>
            <Typography variant="h2" className={styles.glitchText}>
              <span className={styles.glitchLayer} data-text="RECONNECTING">
                RECONNECTING
              </span>
            </Typography>
            <div className={styles.progressContainer}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${(attempts / maxAttempts) * 100}%` }}
                />
              </div>
              <Typography variant="caption" color="muted">
                Attempt {attempts} of {maxAttempts}
              </Typography>
            </div>
          </>
        )}

        {state === 'failed' && (
          <>
            <Typography variant="h2" color="error" className={styles.glitchText}>
              <span className={styles.glitchLayer} data-text="FAILED">
                CONNECTION FAILED
              </span>
            </Typography>
            <Typography variant="body" color="muted">
              {errorMessage || 'Unable to reconnect to the game server.'}
            </Typography>
            <div className={styles.actions}>
              <Button variant="primary" size="lg" onClick={onRetry}>
                Try Again
              </Button>
              <Button variant="ghost" size="lg" onClick={onNewGame}>
                Start New Game
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Reconnect;
