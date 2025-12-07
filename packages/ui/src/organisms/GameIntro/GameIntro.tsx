import React, { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import styles from './GameIntro.module.css';

export interface GameIntroProps {
  /** Current round number */
  roundNumber: number;
  /** Total number of rounds */
  totalRounds: number;
  /** Round theme/category (optional) */
  theme?: string;
  /** Callback when intro animation completes */
  onComplete?: () => void;
  /** Duration of intro in ms */
  duration?: number;
  /** Additional CSS class */
  className?: string;
}

/**
 * Game intro animation shown at the start of each round.
 * Displays round number with dramatic reveal animation.
 */
export function GameIntro({
  roundNumber,
  totalRounds,
  theme,
  onComplete,
  duration = 3000,
  className,
}: GameIntroProps) {
  const [phase, setPhase] = useState<'entering' | 'showing' | 'exiting'>('entering');

  useEffect(() => {
    const enterTimer = setTimeout(() => setPhase('showing'), 500);
    const exitTimer = setTimeout(() => setPhase('exiting'), duration - 500);
    const completeTimer = setTimeout(() => onComplete?.(), duration);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [duration, onComplete]);

  return (
    <div className={clsx(styles.intro, styles[phase], className)}>
      {/* Background flash */}
      <div className={styles.flash} />

      {/* Content */}
      <div className={styles.content}>
        <Typography variant="label" color="muted" className={styles.label}>
          ROUND
        </Typography>

        <div className={styles.numberContainer}>
          <span className={styles.number}>{roundNumber}</span>
          <span className={styles.numberGhost}>{roundNumber}</span>
          <span className={styles.numberGhost2}>{roundNumber}</span>
        </div>

        <Typography variant="body" color="muted" className={styles.total}>
          of {totalRounds}
        </Typography>

        {theme && (
          <div className={styles.theme}>
            <Typography variant="h4" color="secondary" glow>
              {theme}
            </Typography>
          </div>
        )}
      </div>

      {/* Decorative lines */}
      <div className={styles.lines}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
    </div>
  );
}

export default GameIntro;
