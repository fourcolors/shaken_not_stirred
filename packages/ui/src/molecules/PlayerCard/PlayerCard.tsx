import React from 'react';
import { clsx } from 'clsx';
import { Avatar, type AvatarShape } from '../../atoms/Avatar';
import { Typography } from '../../atoms/Typography';
import styles from './PlayerCard.module.css';

export interface PlayerCardProps {
  /** Player's display name */
  name: string;
  /** Avatar shape */
  shape?: AvatarShape;
  /** Avatar color (hex string) */
  color?: string;
  /** Player's current score */
  score?: number;
  /** Score delta from last round (e.g., +500) */
  scoreDelta?: number;
  /** Player rank position */
  rank?: number;
  /** Is this player the VIP/Host */
  isVIP?: boolean;
  /** Is this player the DJ */
  isDJ?: boolean;
  /** Is this player drinking */
  isDrinking?: boolean;
  /** Is this player currently active/selected */
  isActive?: boolean;
  /** Has this player submitted their answer */
  hasSubmitted?: boolean;
  /** Additional CSS class */
  className?: string;
}

/**
 * Player card molecule displaying avatar, name, score, and status.
 * Used in lobby grids and leaderboards.
 *
 * @example
 * ```tsx
 * <PlayerCard
 *   name="Alice"
 *   shape="cube"
 *   color="#CCFF00"
 *   score={1500}
 *   scoreDelta={500}
 *   rank={1}
 *   isVIP
 * />
 * ```
 */
export function PlayerCard({
  name,
  shape = 'cube',
  color = '#CCFF00',
  score,
  scoreDelta,
  rank,
  isVIP = false,
  isDJ = false,
  isDrinking = false,
  isActive = false,
  hasSubmitted = false,
  className,
}: PlayerCardProps) {
  return (
    <div
      className={clsx(
        styles.card,
        isActive && styles.active,
        hasSubmitted && styles.submitted,
        className
      )}
      style={{
        '--player-color': color,
      } as React.CSSProperties}
    >
      {rank !== undefined && (
        <div className={styles.rank}>
          <Typography variant="label" color="muted">
            #{rank}
          </Typography>
        </div>
      )}

      <Avatar
        name={name}
        shape={shape}
        color={color}
        size="md"
        isVIP={isVIP}
        isDJ={isDJ}
        isDrinking={isDrinking}
        animated={!hasSubmitted}
      />

      {score !== undefined && (
        <div className={styles.scoreSection}>
          <Typography variant="h4" color="primary" className={styles.score}>
            {score.toLocaleString()}
          </Typography>
          {scoreDelta !== undefined && scoreDelta !== 0 && (
            <Typography
              variant="caption"
              color={scoreDelta > 0 ? 'success' : 'error'}
              glow
              className={styles.delta}
            >
              {scoreDelta > 0 ? '+' : ''}{scoreDelta}
            </Typography>
          )}
        </div>
      )}

      {hasSubmitted && (
        <div className={styles.submittedBadge}>
          <Typography variant="caption" color="success">
            ✓ Locked In
          </Typography>
        </div>
      )}
    </div>
  );
}

export default PlayerCard;
