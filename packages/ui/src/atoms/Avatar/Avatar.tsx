import React from 'react';
import { clsx } from 'clsx';
import styles from './Avatar.module.css';

export type AvatarShape = 'cube' | 'pyramid' | 'sphere' | 'diamond';
export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps {
  /** Player's display name (optional for preview mode) */
  name?: string;
  /** Avatar shape */
  shape?: AvatarShape;
  /** Primary color (hex string or CSS color) */
  color?: string;
  /** Size of the avatar */
  size?: AvatarSize;
  /** Show drinking indicator */
  isDrinking?: boolean;
  /** Show VIP crown */
  isVIP?: boolean;
  /** Show DJ headphones */
  isDJ?: boolean;
  /** Enable hover animation */
  animated?: boolean;
  /** Additional CSS class */
  className?: string;
}

const shapeIcons: Record<AvatarShape, string> = {
  cube: '■',
  pyramid: '▲',
  sphere: '●',
  diamond: '◆',
};

/**
 * Player avatar component with geometric shapes and Acid Lounge colors.
 * Displays player identity with optional role indicators.
 *
 * @example
 * ```tsx
 * <Avatar
 *   name="Player 1"
 *   shape="cube"
 *   color="#CCFF00"
 *   isVIP
 *   isDrinking
 * />
 * ```
 */
export function Avatar({
  name = '',
  shape = 'cube',
  color = '#CCFF00',
  size = 'md',
  isDrinking = false,
  isVIP = false,
  isDJ = false,
  animated = true,
  className,
}: AvatarProps) {
  return (
    <div
      className={clsx(
        styles.avatar,
        styles[size],
        animated && styles.animated,
        className
      )}
    >
      <div
        className={styles.shape}
        style={{
          color: color,
          textShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
        }}
      >
        {shapeIcons[shape]}
      </div>

      {name && <span className={styles.name}>{name}</span>}

      <div className={styles.badges}>
        {isVIP && <span className={styles.badge} title="VIP">👑</span>}
        {isDJ && <span className={styles.badge} title="DJ">🎧</span>}
        {isDrinking && <span className={styles.badge} title="Drinking">🍸</span>}
      </div>
    </div>
  );
}

export default Avatar;
