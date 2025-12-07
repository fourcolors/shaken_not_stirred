import React from 'react';
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { Button } from '../../atoms/Button';
import styles from './Settings.module.css';

export interface GameSettings {
  /** Number of rounds (3-10) */
  rounds: number;
  /** Time limit per answer in seconds */
  timeLimit: number;
  /** Enable drinking mode */
  drinkingMode: boolean;
  /** Enable DJ mode (Spotify integration) */
  djMode: boolean;
  /** Content filter level */
  contentFilter: 'family' | 'adult' | 'spicy';
}

export interface SettingsProps {
  /** Current settings */
  settings: GameSettings;
  /** Whether Spotify is connected */
  spotifyConnected?: boolean;
  /** Callback when settings change */
  onSettingsChange?: (settings: GameSettings) => void;
  /** Callback when close is clicked */
  onClose?: () => void;
  /** Callback to manage Spotify */
  onManageSpotify?: () => void;
  /** Whether overlay is open */
  isOpen?: boolean;
  /** Additional CSS class */
  className?: string;
}

/**
 * Settings overlay for game configuration.
 * Allows VIP to adjust game parameters before starting.
 */
export function Settings({
  settings,
  spotifyConnected = false,
  onSettingsChange,
  onClose,
  onManageSpotify,
  isOpen = true,
  className,
}: SettingsProps) {
  const handleChange = (key: keyof GameSettings, value: number | boolean | string) => {
    onSettingsChange?.({ ...settings, [key]: value });
  };

  if (!isOpen) return null;

  return (
    <div className={clsx(styles.overlay, className)}>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.panel}>
        {/* Header */}
        <header className={styles.header}>
          <Typography variant="h3" glow>
            Game Settings
          </Typography>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close">
            ×
          </button>
        </header>

        {/* Settings List */}
        <div className={styles.content}>
          {/* Rounds */}
          <div className={styles.setting}>
            <div className={styles.settingInfo}>
              <Typography variant="label">Rounds</Typography>
              <Typography variant="caption" color="muted">
                How many rounds to play
              </Typography>
            </div>
            <div className={styles.stepper}>
              <button
                className={styles.stepperButton}
                onClick={() => handleChange('rounds', Math.max(3, settings.rounds - 1))}
                disabled={settings.rounds <= 3}
              >
                −
              </button>
              <Typography variant="h4" className={styles.stepperValue}>
                {settings.rounds}
              </Typography>
              <button
                className={styles.stepperButton}
                onClick={() => handleChange('rounds', Math.min(10, settings.rounds + 1))}
                disabled={settings.rounds >= 10}
              >
                +
              </button>
            </div>
          </div>

          {/* Time Limit */}
          <div className={styles.setting}>
            <div className={styles.settingInfo}>
              <Typography variant="label">Time Limit</Typography>
              <Typography variant="caption" color="muted">
                Seconds per answer
              </Typography>
            </div>
            <div className={styles.stepper}>
              <button
                className={styles.stepperButton}
                onClick={() => handleChange('timeLimit', Math.max(15, settings.timeLimit - 15))}
                disabled={settings.timeLimit <= 15}
              >
                −
              </button>
              <Typography variant="h4" className={styles.stepperValue}>
                {settings.timeLimit}s
              </Typography>
              <button
                className={styles.stepperButton}
                onClick={() => handleChange('timeLimit', Math.min(120, settings.timeLimit + 15))}
                disabled={settings.timeLimit >= 120}
              >
                +
              </button>
            </div>
          </div>

          {/* Content Filter */}
          <div className={styles.setting}>
            <div className={styles.settingInfo}>
              <Typography variant="label">Content Filter</Typography>
              <Typography variant="caption" color="muted">
                Prompt spiciness level
              </Typography>
            </div>
            <div className={styles.segmentedControl}>
              {(['family', 'adult', 'spicy'] as const).map((level) => (
                <button
                  key={level}
                  className={clsx(
                    styles.segment,
                    settings.contentFilter === level && styles.segmentActive
                  )}
                  onClick={() => handleChange('contentFilter', level)}
                >
                  {level === 'family' && '👨‍👩‍👧'}
                  {level === 'adult' && '🔥'}
                  {level === 'spicy' && '🌶️'}
                  <span className={styles.segmentLabel}>{level}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Drinking Mode */}
          <div className={styles.setting}>
            <div className={styles.settingInfo}>
              <Typography variant="label">Drinking Mode</Typography>
              <Typography variant="caption" color="muted">
                Add drinking challenges
              </Typography>
            </div>
            <button
              className={clsx(styles.toggle, settings.drinkingMode && styles.toggleActive)}
              onClick={() => handleChange('drinkingMode', !settings.drinkingMode)}
              role="switch"
              aria-checked={settings.drinkingMode}
            >
              <span className={styles.toggleThumb} />
            </button>
          </div>

          {/* DJ Mode */}
          <div className={styles.setting}>
            <div className={styles.settingInfo}>
              <Typography variant="label">DJ Mode</Typography>
              <Typography variant="caption" color="muted">
                {spotifyConnected ? 'Spotify connected' : 'Connect Spotify for music'}
              </Typography>
            </div>
            {spotifyConnected ? (
              <Button variant="ghost" size="sm" onClick={onManageSpotify}>
                Manage
              </Button>
            ) : (
              <Button variant="secondary" size="sm" onClick={onManageSpotify}>
                Connect
              </Button>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <Button variant="primary" size="lg" fullWidth onClick={onClose}>
            Done
          </Button>
        </footer>
      </div>
    </div>
  );
}

export default Settings;
