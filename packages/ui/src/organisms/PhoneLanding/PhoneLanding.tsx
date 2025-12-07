import React, { useState } from 'react';
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import styles from './PhoneLanding.module.css';

export type PhoneLandingMode = 'join' | 'rejoin';

export interface PhoneLandingProps {
  /** Current mode */
  mode?: PhoneLandingMode;
  /** Pre-filled room code (from URL or QR) */
  initialRoomCode?: string;
  /** Previous player name for rejoin */
  previousName?: string;
  /** Whether currently connecting */
  isConnecting?: boolean;
  /** Error message to display */
  errorMessage?: string;
  /** Callback when join is submitted */
  onJoin?: (roomCode: string) => void;
  /** Callback when rejoin is clicked */
  onRejoin?: () => void;
  /** Callback to switch modes */
  onModeSwitch?: (mode: PhoneLandingMode) => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * Phone landing screen for joining a game.
 * Supports both new join and rejoin flows.
 */
export function PhoneLanding({
  mode = 'join',
  initialRoomCode = '',
  previousName,
  isConnecting = false,
  errorMessage,
  onJoin,
  onRejoin,
  onModeSwitch,
  className,
}: PhoneLandingProps) {
  const [roomCode, setRoomCode] = useState(initialRoomCode);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (roomCode.length === 4) {
      onJoin?.(roomCode.toUpperCase());
    }
  };

  const handleCodeChange = (value: string) => {
    // Only allow letters, max 4 characters
    const cleaned = value.replace(/[^a-zA-Z]/g, '').toUpperCase().slice(0, 4);
    setRoomCode(cleaned);
  };

  return (
    <div className={clsx(styles.landing, className)}>
      {/* Logo */}
      <div className={styles.logo}>
        <Typography variant="h1" glow className={styles.logoText}>
          🍸
        </Typography>
        <Typography variant="h2" glow>
          SHAKEN
        </Typography>
        <Typography variant="body" color="secondary">
          Not Stirred
        </Typography>
      </div>

      {/* Join Form */}
      {mode === 'join' && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.codeInput}>
            <Typography variant="label" color="muted">
              Enter Room Code
            </Typography>
            <div className={styles.codeBoxes}>
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={clsx(
                    styles.codeBox,
                    roomCode[i] && styles.codeBoxFilled
                  )}
                >
                  {roomCode[i] || ''}
                </div>
              ))}
            </div>
            <input
              type="text"
              value={roomCode}
              onChange={(e) => handleCodeChange(e.target.value)}
              className={styles.hiddenInput}
              autoFocus
              autoComplete="off"
              autoCapitalize="characters"
              maxLength={4}
              disabled={isConnecting}
            />
          </div>

          {errorMessage && (
            <Typography variant="caption" color="error" className={styles.error}>
              {errorMessage}
            </Typography>
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            glow
            disabled={roomCode.length !== 4 || isConnecting}
          >
            {isConnecting ? 'Connecting...' : 'Join Game'}
          </Button>
        </form>
      )}

      {/* Rejoin Form */}
      {mode === 'rejoin' && previousName && (
        <div className={styles.rejoinContainer}>
          <div className={styles.rejoinInfo}>
            <Typography variant="body" color="muted">
              Welcome back,
            </Typography>
            <Typography variant="h3" color="primary" glow>
              {previousName}
            </Typography>
          </div>

          {errorMessage && (
            <Typography variant="caption" color="error" className={styles.error}>
              {errorMessage}
            </Typography>
          )}

          <Button
            variant="primary"
            size="lg"
            fullWidth
            glow
            onClick={onRejoin}
            disabled={isConnecting}
          >
            {isConnecting ? 'Reconnecting...' : 'Rejoin Game'}
          </Button>

          <Button
            variant="ghost"
            size="md"
            onClick={() => onModeSwitch?.('join')}
          >
            Join different game
          </Button>
        </div>
      )}

      {/* Mode Switch */}
      {mode === 'join' && previousName && (
        <button
          className={styles.rejoinLink}
          onClick={() => onModeSwitch?.('rejoin')}
        >
          <Typography variant="caption" color="muted">
            Rejoin as <span className={styles.playerName}>{previousName}</span>?
          </Typography>
        </button>
      )}
    </div>
  );
}

export default PhoneLanding;
