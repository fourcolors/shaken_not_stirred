import React from 'react';
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import styles from './ShakeSubmit.module.css';

export interface ShakeSubmitProps {
  /** Current shake progress (0-100) */
  progress: number;
  /** Target number of shakes */
  targetShakes: number;
  /** Current shake count */
  currentShakes: number;
  /** Whether shake is complete */
  isComplete?: boolean;
  /** Additional CSS class */
  className?: string;
}

/**
 * Phone shake-to-submit screen.
 * Players physically shake their phone to "mix their cocktail".
 */
export function ShakeSubmit({
  progress,
  targetShakes,
  currentShakes,
  isComplete = false,
  className,
}: ShakeSubmitProps) {
  if (isComplete) {
    return (
      <div className={clsx(styles.shakeSubmit, styles.complete, className)}>
        <div className={styles.completeContent}>
          <div className={styles.cocktailIcon}>🍸</div>
          <Typography variant="h2" color="accent" glow>
            Mixed!
          </Typography>
          <Typography variant="body" color="muted">
            Your cocktail is ready
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        styles.shakeSubmit,
        progress > 0 && styles.shaking,
        className
      )}
    >
      {/* Cocktail glass animation */}
      <div className={styles.glassContainer}>
        <div className={styles.glass}>
          <div className={styles.liquid} style={{ height: `${progress}%` }} />
          <div className={styles.bubbles}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={styles.bubble}
                style={{
                  left: `${20 + i * 15}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
        <Typography variant="h1" className={styles.glassEmoji}>
          🍸
        </Typography>
      </div>

      {/* Instruction */}
      <div className={styles.instruction}>
        <Typography variant="h2" glow className={styles.shakeText}>
          SHAKE IT!
        </Typography>
        <Typography variant="body" color="muted">
          Shake your phone to mix
        </Typography>
      </div>

      {/* Progress */}
      <div className={styles.progressSection}>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className={styles.shakeCount}>
          <Typography variant="h3" color="primary" glow>
            {currentShakes}
          </Typography>
          <Typography variant="caption" color="muted">
            / {targetShakes} shakes
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default ShakeSubmit;
