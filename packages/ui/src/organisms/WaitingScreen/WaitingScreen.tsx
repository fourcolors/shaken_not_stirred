import React from 'react';
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { Avatar } from '../../atoms/Avatar';
import type { AvatarShape } from '../../atoms/Avatar';
import styles from './WaitingScreen.module.css';

export type WaitingReason =
  | 'voting'
  | 'results'
  | 'next-round'
  | 'other-players'
  | 'host';

export interface WaitingScreenProps {
  /** Why we're waiting */
  reason: WaitingReason;
  /** Custom message (optional) */
  message?: string;
  /** Current player avatar */
  playerShape?: AvatarShape;
  /** Current player color */
  playerColor?: string;
  /** Additional CSS class */
  className?: string;
}

const REASON_MESSAGES: Record<WaitingReason, { title: string; subtitle: string }> = {
  voting: {
    title: 'Votes Coming In...',
    subtitle: 'The crowd is deciding',
  },
  results: {
    title: 'Drumroll Please...',
    subtitle: 'Results are being tallied',
  },
  'next-round': {
    title: 'Get Ready!',
    subtitle: 'Next round starting soon',
  },
  'other-players': {
    title: 'Waiting for Others',
    subtitle: 'Some players are still answering',
  },
  host: {
    title: 'Look at the Screen!',
    subtitle: 'Something exciting is happening',
  },
};

/**
 * Generic waiting screen for phone.
 * Shows when player needs to wait for game events.
 */
export function WaitingScreen({
  reason,
  message,
  playerShape = 'cube',
  playerColor = '#CCFF00',
  className,
}: WaitingScreenProps) {
  const { title, subtitle } = REASON_MESSAGES[reason];

  return (
    <div className={clsx(styles.waiting, className)}>
      {/* Avatar Animation */}
      <div className={styles.avatarContainer}>
        <Avatar
          shape={playerShape}
          color={playerColor}
          size="xl"
          className={styles.avatar}
        />
        <div className={styles.pulseRing} style={{ borderColor: playerColor }} />
        <div
          className={styles.pulseRing2}
          style={{ borderColor: playerColor }}
        />
      </div>

      {/* Message */}
      <div className={styles.content}>
        <Typography variant="h3" glow>
          {title}
        </Typography>
        <Typography variant="body" color="muted">
          {message || subtitle}
        </Typography>
      </div>

      {/* Loading dots */}
      <div className={styles.loadingDots}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
    </div>
  );
}

export default WaitingScreen;
