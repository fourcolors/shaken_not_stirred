import React, { useState } from 'react';
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { Timer } from '../../molecules/Timer';
import styles from './VotingPad.module.css';

export interface VotingPadProps {
  /** The original prompt */
  prompt: string;
  /** Answer A text */
  answerA: string;
  /** Answer B text */
  answerB: string;
  /** Time remaining */
  timeRemaining: number;
  /** Total time */
  totalTime: number;
  /** Already voted */
  hasVoted?: boolean;
  /** Callback when vote is cast */
  onVote?: (choice: 'A' | 'B') => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * Phone voting interface.
 * Players tap left or right to vote for their favorite answer.
 */
export function VotingPad({
  prompt,
  answerA,
  answerB,
  timeRemaining,
  totalTime,
  hasVoted = false,
  onVote,
  className,
}: VotingPadProps) {
  const [selected, setSelected] = useState<'A' | 'B' | null>(null);

  const handleVote = (choice: 'A' | 'B') => {
    if (!hasVoted && !selected) {
      setSelected(choice);
      onVote?.(choice);
    }
  };

  if (hasVoted || selected) {
    return (
      <div className={clsx(styles.votingPad, styles.voted, className)}>
        <div className={styles.votedContent}>
          <Typography variant="h3" color="accent" glow>
            Vote Cast! 🗳️
          </Typography>
          <Typography variant="body" color="muted">
            Waiting for results...
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <div className={clsx(styles.votingPad, className)}>
      {/* Timer */}
      <div className={styles.timerSection}>
        <Timer
          duration={totalTime}
          timeRemaining={timeRemaining}
          variant="bar"
          size="sm"
        />
      </div>

      {/* Prompt */}
      <div className={styles.promptSection}>
        <Typography variant="caption" color="muted">
          {prompt}
        </Typography>
      </div>

      {/* Instruction */}
      <Typography variant="label" color="muted" className={styles.instruction}>
        Tap your favorite answer
      </Typography>

      {/* Voting Options */}
      <div className={styles.options}>
        <button
          className={clsx(styles.option, styles.optionA)}
          onClick={() => handleVote('A')}
        >
          <Typography variant="h4" className={styles.answerText}>
            "{answerA}"
          </Typography>
          <div className={styles.tapHint}>TAP</div>
        </button>

        <div className={styles.divider}>
          <Typography variant="caption" color="muted">
            VS
          </Typography>
        </div>

        <button
          className={clsx(styles.option, styles.optionB)}
          onClick={() => handleVote('B')}
        >
          <Typography variant="h4" className={styles.answerText}>
            "{answerB}"
          </Typography>
          <div className={styles.tapHint}>TAP</div>
        </button>
      </div>
    </div>
  );
}

export default VotingPad;
