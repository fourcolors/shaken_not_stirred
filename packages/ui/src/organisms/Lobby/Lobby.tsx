import React from 'react';
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import { Button } from '../../atoms/Button';
import { PlayerCard } from '../../molecules/PlayerCard';
import type { AvatarShape } from '../../atoms/Avatar';
import styles from './Lobby.module.css';

export interface LobbyPlayer {
  id: string;
  name: string;
  avatarShape: AvatarShape;
  avatarColor: string;
  isVIP?: boolean;
  isDJ?: boolean;
  isDrinking?: boolean;
}

export type LobbyState = 'empty' | 'populating' | 'ready';

export interface LobbyProps {
  /** Current lobby state */
  state: LobbyState;
  /** Room code to display */
  roomCode: string;
  /** List of players in lobby */
  players: LobbyPlayer[];
  /** Maximum players allowed */
  maxPlayers?: number;
  /** Whether current user is VIP (can start game) */
  isVIP?: boolean;
  /** Callback when start game is clicked */
  onStartGame?: () => void;
  /** Callback when settings is clicked */
  onSettings?: () => void;
  /** Additional CSS class */
  className?: string;
}

/**
 * Host/TV Lobby screen showing players joining the game.
 * Displays different states: empty, populating, and ready.
 */
export function Lobby({
  state,
  roomCode,
  players,
  maxPlayers = 8,
  isVIP = false,
  onStartGame,
  onSettings,
  className,
}: LobbyProps) {
  return (
    <div className={clsx(styles.lobby, styles[state], className)}>
      {/* Header */}
      <header className={styles.header}>
        <Typography variant="h2" glow>
          THE VIVA LOUNGE
        </Typography>
        <div className={styles.roomInfo}>
          <Typography variant="label" color="muted">
            Room Code
          </Typography>
          <div className={styles.roomCode}>
            {roomCode.split('').map((char, i) => (
              <span key={i} className={styles.roomCodeChar}>
                {char}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Player Grid */}
      <main className={styles.main}>
        {state === 'empty' && (
          <div className={styles.emptyState}>
            <Typography variant="h3" color="muted" className={styles.pulsingText}>
              Waiting for players...
            </Typography>
            <Typography variant="body" color="muted">
              Scan the QR code or enter the room code on your phone
            </Typography>
          </div>
        )}

        {(state === 'populating' || state === 'ready') && (
          <div className={styles.playerGrid}>
            {players.map((player, index) => (
              <div
                key={player.id}
                className={styles.playerSlot}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PlayerCard
                  name={player.name}
                  shape={player.avatarShape}
                  color={player.avatarColor}
                  isVIP={player.isVIP}
                  isDJ={player.isDJ}
                  isDrinking={player.isDrinking}
                />
              </div>
            ))}
            {/* Empty slots */}
            {Array.from({ length: maxPlayers - players.length }).map((_, i) => (
              <div key={`empty-${i}`} className={styles.emptySlot}>
                <div className={styles.emptySlotInner}>
                  <Typography variant="caption" color="muted">
                    ?
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.playerCount}>
          <Typography variant="h4" color="accent" glow>
            {players.length}
          </Typography>
          <Typography variant="body" color="muted">
            / {maxPlayers} players
          </Typography>
        </div>

        {state === 'ready' && isVIP && (
          <div className={styles.actions}>
            <Button variant="ghost" size="lg" onClick={onSettings}>
              Settings
            </Button>
            <Button variant="primary" size="lg" glow onClick={onStartGame}>
              Start Game
            </Button>
          </div>
        )}

        {state === 'ready' && !isVIP && (
          <Typography variant="body" color="secondary" glow className={styles.waitingVIP}>
            Waiting for VIP to start...
          </Typography>
        )}
      </footer>
    </div>
  );
}

export default Lobby;
