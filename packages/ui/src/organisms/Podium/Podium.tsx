import React, { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { Avatar } from '../../atoms/Avatar';
import { Button } from '../../atoms/Button';
import type { AvatarShape } from '../../atoms/Avatar';
import styles from './Podium.module.css';

export interface PodiumPlayer {
  id: string;
  name: string;
  avatarShape: AvatarShape;
  avatarColor: string;
  score: number;
  rank: 1 | 2 | 3;
}

export interface PodiumProps {
  /** Top 3 players */
  winners: [PodiumPlayer, PodiumPlayer, PodiumPlayer];
  /** Callback when play again is clicked */
  onPlayAgain?: () => void;
  /** Callback when exit is clicked */
  onExit?: () => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * Final podium screen showing top 3 winners with confetti.
 * Displays winners with celebration animations.
 */
export function Podium({
  winners,
  onPlayAgain,
  onExit,
  className,
}: PodiumProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [revealed, setRevealed] = useState([false, false, false]);

  // Staggered reveal animation
  useEffect(() => {
    const timers = [
      setTimeout(() => setRevealed((r) => [true, r[1], r[2]]), 500),   // 3rd place
      setTimeout(() => setRevealed((r) => [r[0], true, r[2]]), 1200), // 2nd place
      setTimeout(() => setRevealed((r) => [r[0], r[1], true]), 2000), // 1st place
      setTimeout(() => setShowConfetti(true), 2200),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const first = winners.find((w) => w.rank === 1)!;
  const second = winners.find((w) => w.rank === 2)!;
  const third = winners.find((w) => w.rank === 3)!;

  return (
    <div className={clsx(styles.podium, className)}>
      {/* Confetti */}
      {showConfetti && (
        <div className={styles.confetti}>
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className={styles.confettiPiece}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                backgroundColor: ['#CCFF00', '#FF10F0', '#00FFFF', '#9D00FF', '#FFD700'][
                  Math.floor(Math.random() * 5)
                ],
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <header className={styles.header}>
        <Typography variant="h1" glow className={styles.title}>
          🏆 WINNERS 🏆
        </Typography>
      </header>

      {/* Podium Stands */}
      <div className={styles.podiumStands}>
        {/* 2nd Place */}
        <div className={clsx(styles.stand, styles.second, revealed[1] && styles.revealed)}>
          <div className={styles.playerContainer}>
            <Avatar
              shape={second.avatarShape}
              color={second.avatarColor}
              size="xl"
              className={styles.avatar}
            />
            <Typography variant="h4" glow>
              {second.name}
            </Typography>
            <Typography variant="body" color="muted">
              {second.score} pts
            </Typography>
          </div>
          <div className={styles.standBase}>
            <Typography variant="h2" color="muted">
              2
            </Typography>
          </div>
        </div>

        {/* 1st Place */}
        <div className={clsx(styles.stand, styles.first, revealed[2] && styles.revealed)}>
          <div className={styles.playerContainer}>
            <div className={styles.crown}>👑</div>
            <Avatar
              shape={first.avatarShape}
              color={first.avatarColor}
              size="xl"
              className={styles.avatar}
            />
            <Typography variant="h3" color="accent" glow>
              {first.name}
            </Typography>
            <Typography variant="body" color="accent">
              {first.score} pts
            </Typography>
          </div>
          <div className={clsx(styles.standBase, styles.goldBase)}>
            <Typography variant="h1" color="accent" glow>
              1
            </Typography>
          </div>
        </div>

        {/* 3rd Place */}
        <div className={clsx(styles.stand, styles.third, revealed[0] && styles.revealed)}>
          <div className={styles.playerContainer}>
            <Avatar
              shape={third.avatarShape}
              color={third.avatarColor}
              size="xl"
              className={styles.avatar}
            />
            <Typography variant="h4" glow>
              {third.name}
            </Typography>
            <Typography variant="body" color="muted">
              {third.score} pts
            </Typography>
          </div>
          <div className={styles.standBase}>
            <Typography variant="h2" color="muted">
              3
            </Typography>
          </div>
        </div>
      </div>

      {/* Actions */}
      <footer className={styles.actions}>
        <Button variant="primary" size="lg" glow onClick={onPlayAgain}>
          Play Again
        </Button>
        <Button variant="ghost" size="lg" onClick={onExit}>
          Exit
        </Button>
      </footer>
    </div>
  );
}

export default Podium;
