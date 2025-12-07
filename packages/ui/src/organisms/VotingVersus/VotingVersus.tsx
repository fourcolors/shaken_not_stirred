import React from 'react';
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { Avatar } from '../../atoms/Avatar';
import { Timer } from '../../molecules/Timer';
import type { AvatarShape } from '../../atoms/Avatar';
import styles from './VotingVersus.module.css';

export interface VotingAnswer {
  playerId: string;
  playerName: string;
  avatarShape: AvatarShape;
  avatarColor: string;
  answer: string;
}

export interface VotingVersusProps {
  /** The original prompt */
  prompt: string;
  /** Left answer option */
  answerA: VotingAnswer;
  /** Right answer option */
  answerB: VotingAnswer;
  /** Time remaining for voting */
  timeRemaining: number;
  /** Total voting time */
  totalTime: number;
  /** Number of votes for answer A */
  votesA?: number;
  /** Number of votes for answer B */
  votesB?: number;
  /** Whether to show vote counts (during reveal) */
  showVotes?: boolean;
  /** Winner player ID (during reveal) */
  winnerId?: string;
  /** Additional CSS class */
  className?: string;
}

/**
 * Versus voting screen showing two answers side by side.
 * Players vote on their phones, host sees the matchup.
 */
export function VotingVersus({
  prompt,
  answerA,
  answerB,
  timeRemaining,
  totalTime,
  votesA = 0,
  votesB = 0,
  showVotes = false,
  winnerId,
  className,
}: VotingVersusProps) {
  const isReveal = showVotes && winnerId;

  return (
    <div className={clsx(styles.versus, isReveal && styles.reveal, className)}>
      {/* Header */}
      <header className={styles.header}>
        <Typography variant="label" color="muted">
          The Prompt
        </Typography>
        <Typography variant="h3" glow>
          {prompt}
        </Typography>
      </header>

      {/* Timer */}
      {!isReveal && (
        <div className={styles.timer}>
          <Timer
            duration={totalTime}
            timeRemaining={timeRemaining}
            variant="bar"
            size="sm"
          />
        </div>
      )}

      {/* Answers */}
      <div className={styles.answers}>
        {/* Answer A */}
        <div
          className={clsx(
            styles.answerCard,
            styles.cardA,
            winnerId === answerA.playerId && styles.winner,
            winnerId && winnerId !== answerA.playerId && styles.loser
          )}
        >
          <div className={styles.answerContent}>
            <Typography variant="h2" className={styles.answerText}>
              "{answerA.answer}"
            </Typography>
          </div>

          {showVotes && (
            <div className={styles.voteCount}>
              <Typography variant="h1" color="primary" glow>
                {votesA}
              </Typography>
              <Typography variant="caption" color="muted">
                votes
              </Typography>
            </div>
          )}

          <div className={styles.playerTag}>
            <Avatar
              shape={answerA.avatarShape}
              color={answerA.avatarColor}
              size="sm"
            />
            <Typography variant="caption" color="muted">
              {isReveal ? answerA.playerName : '???'}
            </Typography>
          </div>
        </div>

        {/* VS Badge */}
        <div className={styles.vsBadge}>
          <Typography variant="h3" color="secondary" glow>
            VS
          </Typography>
        </div>

        {/* Answer B */}
        <div
          className={clsx(
            styles.answerCard,
            styles.cardB,
            winnerId === answerB.playerId && styles.winner,
            winnerId && winnerId !== answerB.playerId && styles.loser
          )}
        >
          <div className={styles.answerContent}>
            <Typography variant="h2" className={styles.answerText}>
              "{answerB.answer}"
            </Typography>
          </div>

          {showVotes && (
            <div className={styles.voteCount}>
              <Typography variant="h1" color="secondary" glow>
                {votesB}
              </Typography>
              <Typography variant="caption" color="muted">
                votes
              </Typography>
            </div>
          )}

          <div className={styles.playerTag}>
            <Avatar
              shape={answerB.avatarShape}
              color={answerB.avatarColor}
              size="sm"
            />
            <Typography variant="caption" color="muted">
              {isReveal ? answerB.playerName : '???'}
            </Typography>
          </div>
        </div>
      </div>

      {/* Winner announcement */}
      {isReveal && winnerId && (
        <div className={styles.winnerAnnouncement}>
          <Typography variant="h4" color="accent" glow>
            🏆 {winnerId === answerA.playerId ? answerA.playerName : answerB.playerName} wins!
          </Typography>
        </div>
      )}
    </div>
  );
}

export default VotingVersus;
