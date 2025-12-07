import React from 'react';
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { Avatar } from '../../atoms/Avatar';
import type { AvatarShape } from '../../atoms/Avatar';
import styles from './ShakingPhase.module.css';

export interface ShakingPhasePlayer {
  id: string;
  name: string;
  avatarShape: AvatarShape;
  avatarColor: string;
  shakeProgress: number; // 0-100
  hasCompleted: boolean;
}

export interface ShakingPhaseProps {
  /** All players with shake progress */
  players: ShakingPhasePlayer[];
  /** Target shake count */
  targetShakes: number;
  /** Time remaining (optional, for timed mode) */
  timeRemaining?: number;
  /** Additional CSS class */
  className?: string;
}

/**
 * Host display during the shaking phase.
 * Shows all players' shake progress as they physically shake their phones.
 */
export function ShakingPhase({
  players,
  targetShakes,
  timeRemaining,
  className,
}: ShakingPhaseProps) {
  const completedCount = players.filter((p) => p.hasCompleted).length;

  return (
    <div className={clsx(styles.phase, className)}>
      {/* Header */}
      <header className={styles.header}>
        <Typography variant="h2" glow className={styles.title}>
          🍸 SHAKE IT!
        </Typography>
        {timeRemaining !== undefined && (
          <Typography variant="h3" color="accent">
            {timeRemaining}s
          </Typography>
        )}
      </header>

      {/* Instruction */}
      <div className={styles.instruction}>
        <Typography variant="body" color="muted">
          Shake your phone to mix your cocktail!
        </Typography>
      </div>

      {/* Player Progress */}
      <div className={styles.playersGrid}>
        {players.map((player) => (
          <div
            key={player.id}
            className={clsx(
              styles.playerCard,
              player.hasCompleted && styles.completed
            )}
          >
            <div className={styles.avatarContainer}>
              <Avatar
                shape={player.avatarShape}
                color={player.avatarColor}
                size="lg"
                className={clsx(
                  !player.hasCompleted && player.shakeProgress > 0 && styles.shaking
                )}
              />
              {player.hasCompleted && (
                <div className={styles.completedBadge}>✓</div>
              )}
            </div>

            <Typography variant="label" className={styles.playerName}>
              {player.name}
            </Typography>

            {/* Progress bar */}
            <div className={styles.progressContainer}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{
                    width: `${player.shakeProgress}%`,
                    backgroundColor: player.avatarColor,
                  }}
                />
              </div>
              <Typography variant="caption" color="muted">
                {Math.round(player.shakeProgress)}%
              </Typography>
            </div>

            {/* Liquid fill effect */}
            <div
              className={styles.liquidFill}
              style={{
                height: `${player.shakeProgress}%`,
                backgroundColor: player.avatarColor,
              }}
            />
          </div>
        ))}
      </div>

      {/* Status */}
      <div className={styles.status}>
        <Typography variant="h4" color="accent" glow>
          {completedCount} / {players.length} Ready
        </Typography>
      </div>
    </div>
  );
}

export default ShakingPhase;
