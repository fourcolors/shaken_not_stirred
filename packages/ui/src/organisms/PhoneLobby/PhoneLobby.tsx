import React from 'react';
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { Button } from '../../atoms/Button';
import { Avatar } from '../../atoms/Avatar';
import type { AvatarShape } from '../../atoms/Avatar';
import styles from './PhoneLobby.module.css';

export interface PhoneLobbyPlayer {
  id: string;
  name: string;
  avatarShape: AvatarShape;
  avatarColor: string;
  isVIP?: boolean;
  isDJ?: boolean;
}

export type PhoneLobbyRole = 'player' | 'vip' | 'dj';

export interface PhoneLobbyProps {
  /** Current player info */
  currentPlayer: PhoneLobbyPlayer;
  /** All players in lobby */
  players: PhoneLobbyPlayer[];
  /** Room code */
  roomCode: string;
  /** Current player's role */
  role: PhoneLobbyRole;
  /** Whether game is starting */
  isStarting?: boolean;
  /** Callback when VIP starts game */
  onStartGame?: () => void;
  /** Callback when DJ opens playlist */
  onOpenPlaylist?: () => void;
  /** Callback to leave game */
  onLeave?: () => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * Phone lobby screen showing waiting state.
 * Different views for player, VIP, and DJ roles.
 */
export function PhoneLobby({
  currentPlayer,
  players,
  roomCode,
  role,
  isStarting = false,
  onStartGame,
  onOpenPlaylist,
  onLeave,
  className,
}: PhoneLobbyProps) {
  const otherPlayers = players.filter((p) => p.id !== currentPlayer.id);
  const minPlayers = 3;
  const canStart = players.length >= minPlayers;

  return (
    <div className={clsx(styles.lobby, styles[role], className)}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.roomInfo}>
          <Typography variant="caption" color="muted">
            Room
          </Typography>
          <Typography variant="h4" color="primary" glow>
            {roomCode}
          </Typography>
        </div>
        <button className={styles.leaveButton} onClick={onLeave}>
          <Typography variant="caption" color="muted">
            Leave
          </Typography>
        </button>
      </header>

      {/* Current Player Card */}
      <div className={styles.currentPlayer}>
        <Avatar
          shape={currentPlayer.avatarShape}
          color={currentPlayer.avatarColor}
          size="lg"
          isVIP={currentPlayer.isVIP}
          isDJ={currentPlayer.isDJ}
        />
        <div className={styles.playerInfo}>
          <Typography variant="h3" glow>
            {currentPlayer.name}
          </Typography>
          {role === 'vip' && (
            <Typography variant="caption" color="accent">
              👑 VIP - You control the game
            </Typography>
          )}
          {role === 'dj' && (
            <Typography variant="caption" color="secondary">
              🎵 DJ - You control the vibes
            </Typography>
          )}
          {role === 'player' && (
            <Typography variant="caption" color="muted">
              Ready to play
            </Typography>
          )}
        </div>
      </div>

      {/* Other Players */}
      <div className={styles.playersSection}>
        <Typography variant="label" color="muted">
          {otherPlayers.length} other player{otherPlayers.length !== 1 ? 's' : ''} in lobby
        </Typography>
        <div className={styles.playersList}>
          {otherPlayers.map((player) => (
            <div key={player.id} className={styles.playerPill}>
              <Avatar
                shape={player.avatarShape}
                color={player.avatarColor}
                size="sm"
                isVIP={player.isVIP}
                isDJ={player.isDJ}
              />
              <Typography variant="caption">{player.name}</Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Actions based on role */}
      <div className={styles.actions}>
        {role === 'vip' && (
          <>
            <Button
              variant="primary"
              size="lg"
              fullWidth
              glow
              onClick={onStartGame}
              disabled={!canStart || isStarting}
            >
              {isStarting
                ? 'Starting...'
                : canStart
                  ? 'Start Game'
                  : `Need ${minPlayers - players.length} more`}
            </Button>
            <Typography variant="caption" color="muted" className={styles.hint}>
              {canStart
                ? 'Tap to begin when everyone is ready'
                : `Waiting for at least ${minPlayers} players`}
            </Typography>
          </>
        )}

        {role === 'dj' && (
          <>
            <Button
              variant="secondary"
              size="lg"
              fullWidth
              onClick={onOpenPlaylist}
            >
              🎵 Manage Playlist
            </Button>
            <Typography variant="caption" color="muted" className={styles.hint}>
              Queue up songs for between rounds
            </Typography>
          </>
        )}

        {role === 'player' && (
          <div className={styles.waitingMessage}>
            <div className={styles.pulsingDot} />
            <Typography variant="body" color="muted">
              Waiting for VIP to start...
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}

export default PhoneLobby;
