import React from 'react';
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { Timer } from '../../molecules/Timer';
import { PlayerCard } from '../../molecules/PlayerCard';
import type { AvatarShape } from '../../atoms/Avatar';
import styles from './WritingPhase.module.css';

export interface WritingPhasePlayer {
  id: string;
  name: string;
  avatarShape: AvatarShape;
  avatarColor: string;
  hasSubmitted?: boolean;
}

export interface WritingPhaseProps {
  /** The prompt for this round */
  prompt: string;
  /** Time remaining in seconds */
  timeRemaining: number;
  /** Total time for this phase */
  totalTime: number;
  /** All players with submission status */
  players: WritingPhasePlayer[];
  /** Whether timer is in panic mode (< 10 seconds) */
  isPanic?: boolean;
  /** Callback when time expires */
  onTimeUp?: () => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * Host display during the writing phase.
 * Shows prompt, timer, and player submission status.
 */
export function WritingPhase({
  prompt,
  timeRemaining,
  totalTime,
  players,
  isPanic = false,
  onTimeUp,
  className,
}: WritingPhaseProps) {
  const submittedCount = players.filter((p) => p.hasSubmitted).length;
  const progress = (totalTime - timeRemaining) / totalTime;

  return (
    <div className={clsx(styles.phase, isPanic && styles.panic, className)}>
      {/* Timer */}
      <div className={styles.timerSection}>
        <Timer
          duration={totalTime}
          timeRemaining={timeRemaining}
          variant="circular"
          size="lg"
          panicThreshold={10}
          onComplete={onTimeUp}
        />
      </div>

      {/* Prompt */}
      <div className={styles.promptSection}>
        <Typography variant="label" color="muted">
          The Prompt
        </Typography>
        <Typography variant="h2" glow className={styles.prompt}>
          {prompt}
        </Typography>
      </div>

      {/* Player Status */}
      <div className={styles.playersSection}>
        <div className={styles.statusHeader}>
          <Typography variant="label" color="muted">
            Answers Submitted
          </Typography>
          <Typography variant="h4" color="accent" glow>
            {submittedCount} / {players.length}
          </Typography>
        </div>

        <div className={styles.playerGrid}>
          {players.map((player) => (
            <div
              key={player.id}
              className={clsx(
                styles.playerStatus,
                player.hasSubmitted && styles.submitted
              )}
            >
              <PlayerCard
                name={player.name}
                shape={player.avatarShape}
                color={player.avatarColor}
              />
              <div className={styles.statusIndicator}>
                {player.hasSubmitted ? (
                  <span className={styles.checkmark}>✓</span>
                ) : (
                  <span className={styles.writing}>...</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar at bottom */}
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
}

export default WritingPhase;
