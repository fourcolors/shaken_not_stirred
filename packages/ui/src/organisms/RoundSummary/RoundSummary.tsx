import React from 'react';
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { PlayerCard } from '../../molecules/PlayerCard';
import type { AvatarShape } from '../../atoms/Avatar';
import styles from './RoundSummary.module.css';

export interface RoundSummaryPlayer {
  id: string;
  name: string;
  avatarShape: AvatarShape;
  avatarColor: string;
  score: number;
  roundPoints: number;
  rank: number;
  previousRank?: number;
}

export interface RoundSummaryProps {
  /** Current round number */
  roundNumber: number;
  /** Total rounds */
  totalRounds: number;
  /** Sorted players (by score, highest first) */
  players: RoundSummaryPlayer[];
  /** Callback when continue is clicked */
  onContinue?: () => void;
  /** Whether this is the final round */
  isFinalRound?: boolean;
  /** Additional CSS class */
  className?: string;
}

/**
 * Round summary screen showing current standings.
 * Displays leaderboard with score changes after each round.
 */
export function RoundSummary({
  roundNumber,
  totalRounds,
  players,
  onContinue,
  isFinalRound = false,
  className,
}: RoundSummaryProps) {
  return (
    <div className={clsx(styles.summary, className)}>
      {/* Header */}
      <header className={styles.header}>
        <Typography variant="label" color="muted">
          {isFinalRound ? 'Final Results' : `Round ${roundNumber} of ${totalRounds}`}
        </Typography>
        <Typography variant="h2" glow>
          {isFinalRound ? '🏆 Final Standings' : 'Leaderboard'}
        </Typography>
      </header>

      {/* Leaderboard */}
      <div className={styles.leaderboard}>
        {players.map((player, index) => {
          const rankChange = player.previousRank
            ? player.previousRank - player.rank
            : 0;

          return (
            <div
              key={player.id}
              className={clsx(
                styles.leaderboardRow,
                index === 0 && styles.leader
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rank */}
              <div className={styles.rank}>
                <Typography
                  variant="h3"
                  color={index === 0 ? 'accent' : 'primary'}
                  glow={index === 0}
                >
                  {player.rank}
                </Typography>
                {rankChange !== 0 && (
                  <span
                    className={clsx(
                      styles.rankChange,
                      rankChange > 0 ? styles.rankUp : styles.rankDown
                    )}
                  >
                    {rankChange > 0 ? '↑' : '↓'}
                    {Math.abs(rankChange)}
                  </span>
                )}
              </div>

              {/* Player Info */}
              <div className={styles.playerInfo}>
                <PlayerCard
                  name={player.name}
                  shape={player.avatarShape}
                  color={player.avatarColor}
                  score={player.score}
                />
              </div>

              {/* Round Points */}
              <div className={styles.pointsEarned}>
                {player.roundPoints > 0 && (
                  <Typography variant="label" color="accent" glow>
                    +{player.roundPoints}
                  </Typography>
                )}
              </div>

              {/* Total Score */}
              <div className={styles.totalScore}>
                <Typography variant="h3" color="primary" glow>
                  {player.score}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      {!isFinalRound && (
        <footer className={styles.footer}>
          <Typography variant="body" color="muted">
            {totalRounds - roundNumber} round{totalRounds - roundNumber !== 1 ? 's' : ''} remaining
          </Typography>
        </footer>
      )}
    </div>
  );
}

export default RoundSummary;
