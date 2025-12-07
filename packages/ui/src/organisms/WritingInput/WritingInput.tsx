import React, { useState } from 'react';
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { Button } from '../../atoms/Button';
import { Timer } from '../../molecules/Timer';
import styles from './WritingInput.module.css';

export interface WritingInputProps {
  /** The prompt to answer */
  prompt: string;
  /** Time remaining in seconds */
  timeRemaining: number;
  /** Total time for this phase */
  totalTime: number;
  /** Maximum character limit */
  maxLength?: number;
  /** Whether already submitted */
  isSubmitted?: boolean;
  /** Panic mode (< 10 seconds) */
  isPanic?: boolean;
  /** Callback when answer is submitted */
  onSubmit?: (answer: string) => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * Phone input screen for writing answers.
 * Players type their answer and submit before time runs out.
 */
export function WritingInput({
  prompt,
  timeRemaining,
  totalTime,
  maxLength = 100,
  isSubmitted = false,
  isPanic = false,
  onSubmit,
  className,
}: WritingInputProps) {
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    if (answer.trim()) {
      onSubmit?.(answer.trim());
    }
  };

  const charactersLeft = maxLength - answer.length;

  if (isSubmitted) {
    return (
      <div className={clsx(styles.writingInput, styles.submitted, className)}>
        <div className={styles.submittedContent}>
          <div className={styles.checkmark}>✓</div>
          <Typography variant="h3" color="accent" glow>
            Answer Submitted!
          </Typography>
          <Typography variant="body" color="muted">
            Waiting for other players...
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <div className={clsx(styles.writingInput, isPanic && styles.panic, className)}>
      {/* Timer */}
      <div className={styles.timerSection}>
        <Timer
          duration={totalTime}
          timeRemaining={timeRemaining}
          variant="circular"
          size="md"
          panicThreshold={10}
        />
      </div>

      {/* Prompt */}
      <div className={styles.promptSection}>
        <Typography variant="label" color="muted">
          The Prompt
        </Typography>
        <Typography variant="h4" glow className={styles.prompt}>
          {prompt}
        </Typography>
      </div>

      {/* Input */}
      <div className={styles.inputSection}>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value.slice(0, maxLength))}
          placeholder="Type your answer..."
          className={clsx(styles.textarea, isPanic && styles.textareaPanic)}
          autoFocus
          rows={4}
        />
        <div className={styles.charCount}>
          <Typography
            variant="caption"
            color={charactersLeft < 20 ? 'error' : 'muted'}
          >
            {charactersLeft} characters left
          </Typography>
        </div>
      </div>

      {/* Submit */}
      <Button
        variant="primary"
        size="lg"
        fullWidth
        glow
        onClick={handleSubmit}
        disabled={!answer.trim()}
      >
        Submit Answer
      </Button>
    </div>
  );
}

export default WritingInput;
