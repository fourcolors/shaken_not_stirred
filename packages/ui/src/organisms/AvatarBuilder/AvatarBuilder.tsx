import React, { useState } from 'react';
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { Avatar } from '../../atoms/Avatar';
import type { AvatarShape } from '../../atoms/Avatar';
import styles from './AvatarBuilder.module.css';

const SHAPES: AvatarShape[] = ['cube', 'pyramid', 'sphere', 'diamond'];
const COLORS = ['#CCFF00', '#FF10F0', '#00FFFF', '#9D00FF', '#FF4D4D', '#FFD700'];

export interface AvatarBuilderProps {
  /** Initial player name */
  initialName?: string;
  /** Initial avatar shape */
  initialShape?: AvatarShape;
  /** Initial avatar color */
  initialColor?: string;
  /** Whether player wants drinking mode */
  initialDrinking?: boolean;
  /** Whether currently submitting */
  isSubmitting?: boolean;
  /** Error message */
  errorMessage?: string;
  /** Callback when avatar is confirmed */
  onConfirm?: (data: {
    name: string;
    shape: AvatarShape;
    color: string;
    isDrinking: boolean;
  }) => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * Avatar builder screen for customizing player appearance.
 * Players choose name, shape, color, and drinking preference.
 */
export function AvatarBuilder({
  initialName = '',
  initialShape = 'cube',
  initialColor = COLORS[0],
  initialDrinking = false,
  isSubmitting = false,
  errorMessage,
  onConfirm,
  className,
}: AvatarBuilderProps) {
  const [name, setName] = useState(initialName);
  const [shape, setShape] = useState<AvatarShape>(initialShape);
  const [color, setColor] = useState(initialColor);
  const [isDrinking, setIsDrinking] = useState(initialDrinking);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onConfirm?.({ name: name.trim(), shape, color, isDrinking });
    }
  };

  return (
    <div className={clsx(styles.builder, className)}>
      <Typography variant="h3" glow className={styles.title}>
        Create Your Avatar
      </Typography>

      {/* Avatar Preview */}
      <div className={styles.preview}>
        <Avatar
          shape={shape}
          color={color}
          size="xl"
          className={styles.avatarPreview}
        />
        {name && (
          <Typography variant="h4" color="primary" glow>
            {name}
          </Typography>
        )}
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Name Input */}
        <div className={styles.field}>
          <Typography variant="label" color="muted">
            Your Name
          </Typography>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            maxLength={12}
            autoFocus
            disabled={isSubmitting}
          />
        </div>

        {/* Shape Selector */}
        <div className={styles.field}>
          <Typography variant="label" color="muted">
            Choose Shape
          </Typography>
          <div className={styles.shapeGrid}>
            {SHAPES.map((s) => (
              <button
                key={s}
                type="button"
                className={clsx(styles.shapeOption, shape === s && styles.shapeSelected)}
                onClick={() => setShape(s)}
                disabled={isSubmitting}
              >
                <Avatar shape={s} color={color} size="md" />
              </button>
            ))}
          </div>
        </div>

        {/* Color Selector */}
        <div className={styles.field}>
          <Typography variant="label" color="muted">
            Pick Color
          </Typography>
          <div className={styles.colorGrid}>
            {COLORS.map((c) => (
              <button
                key={c}
                type="button"
                className={clsx(styles.colorOption, color === c && styles.colorSelected)}
                style={{ backgroundColor: c }}
                onClick={() => setColor(c)}
                disabled={isSubmitting}
                aria-label={`Select color ${c}`}
              />
            ))}
          </div>
        </div>

        {/* Drinking Toggle */}
        <div className={styles.drinkingField}>
          <div className={styles.drinkingInfo}>
            <Typography variant="label">🍺 Drinking Mode</Typography>
            <Typography variant="caption" color="muted">
              Get drinking challenges during the game
            </Typography>
          </div>
          <button
            type="button"
            className={clsx(styles.toggle, isDrinking && styles.toggleActive)}
            onClick={() => setIsDrinking(!isDrinking)}
            role="switch"
            aria-checked={isDrinking}
            disabled={isSubmitting}
          >
            <span className={styles.toggleThumb} />
          </button>
        </div>

        {errorMessage && (
          <Typography variant="caption" color="error" className={styles.error}>
            {errorMessage}
          </Typography>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          glow
          disabled={!name.trim() || isSubmitting}
        >
          {isSubmitting ? 'Joining...' : 'Join the Party!'}
        </Button>
      </form>
    </div>
  );
}

export default AvatarBuilder;
