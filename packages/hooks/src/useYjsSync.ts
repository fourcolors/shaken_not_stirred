import { useEffect, useState, useCallback } from 'react';
import { useSnapshot } from 'valtio';
import * as Y from 'yjs';
import {
  gameState,
  getYjsDoc,
  createYjsProvider,
  disconnectYjs,
  getSharedTypes,
} from '@shaken/game-logic';
import type { Player, GamePhase } from '@shaken/types';

export interface UseYjsSyncOptions {
  /** WebSocket server URL */
  serverUrl?: string;
  /** Room code to join */
  roomCode: string;
  /** Whether this is the host */
  isHost?: boolean;
}

export interface UseYjsSyncResult {
  /** Whether connected to server */
  isConnected: boolean;
  /** Whether synced with other clients */
  isSynced: boolean;
  /** Connection error if any */
  error: Error | null;
  /** Manually disconnect */
  disconnect: () => void;
  /** Reconnect to server */
  reconnect: () => void;
  /** Add a player directly to Yjs (for clients) */
  addPlayer: (player: Player) => void;
  /** Remove a player directly from Yjs */
  removePlayer: (playerId: string) => void;
}

/**
 * Hook for syncing game state via Yjs WebSocket.
 * Handles bidirectional sync between local Valtio state and Yjs CRDT.
 */
export function useYjsSync(options: UseYjsSyncOptions): UseYjsSyncResult {
  const { serverUrl, roomCode, isHost = false } = options;
  const [isConnected, setIsConnected] = useState(false);
  const [isSynced, setIsSynced] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const snapshot = useSnapshot(gameState);

  // Sync local state TO Yjs (host only)
  const syncToYjs = useCallback(() => {
    if (!isHost) return;

    const { gameState: yGameState, players: yPlayers } = getSharedTypes();

    // Sync game state
    yGameState.set('phase', gameState.phase);
    yGameState.set('currentRound', gameState.currentRound);
    yGameState.set('totalRounds', gameState.totalRounds);
    yGameState.set('timerRemaining', gameState.timerRemaining);
    yGameState.set('roomCode', gameState.roomCode);

    // Sync players
    const doc = getYjsDoc();
    doc.transact(() => {
      // Clear and re-add players
      while (yPlayers.length > 0) {
        yPlayers.delete(0);
      }
      gameState.players.forEach((player) => {
        yPlayers.push([player]);
      });
    });
  }, [isHost]);

  // Sync players FROM Yjs to local state (both host and clients need this)
  const syncPlayersFromYjs = useCallback(() => {
    const { players: yPlayers } = getSharedTypes();
    const players = yPlayers.toArray() as Player[];
    // Only update if different to avoid loops
    if (JSON.stringify(gameState.players) !== JSON.stringify(players)) {
      console.log('[Yjs] Syncing players from Yjs:', players.length);
      gameState.players = players;
    }
  }, []);

  // Sync game state FROM Yjs to local state (clients only)
  const syncGameStateFromYjs = useCallback(() => {
    if (isHost) return;

    const { gameState: yGameState } = getSharedTypes();

    // Read game state
    const phase = yGameState.get('phase') as GamePhase | undefined;
    const currentRound = yGameState.get('currentRound') as number | undefined;
    const totalRounds = yGameState.get('totalRounds') as number | undefined;
    const timerRemaining = yGameState.get('timerRemaining') as number | undefined;

    if (phase !== undefined) gameState.phase = phase;
    if (currentRound !== undefined) gameState.currentRound = currentRound;
    if (totalRounds !== undefined) gameState.totalRounds = totalRounds;
    if (timerRemaining !== undefined) gameState.timerRemaining = timerRemaining;
  }, [isHost]);

  // Combined sync from Yjs (for clients)
  const syncFromYjs = useCallback(() => {
    syncGameStateFromYjs();
    syncPlayersFromYjs();
  }, [syncGameStateFromYjs, syncPlayersFromYjs]);

  // Add player directly to Yjs (for clients to join)
  const addPlayer = useCallback((player: Player) => {
    const { players: yPlayers } = getSharedTypes();
    console.log('[Yjs] Adding player to Yjs:', player.name);
    yPlayers.push([player]);
  }, []);

  // Remove player from Yjs
  const removePlayer = useCallback((playerId: string) => {
    const { players: yPlayers } = getSharedTypes();
    const players = yPlayers.toArray() as Player[];
    const index = players.findIndex(p => p.id === playerId);
    if (index !== -1) {
      console.log('[Yjs] Removing player from Yjs:', playerId);
      yPlayers.delete(index);
    }
  }, []);

  // Connect to Yjs
  const connect = useCallback(() => {
    try {
      const provider = createYjsProvider({
        serverUrl,
        roomName: roomCode,
      });

      provider.on('status', (event: { status: string }) => {
        setIsConnected(event.status === 'connected');
        if (event.status === 'disconnected') {
          setError(new Error('Disconnected from server'));
        }
      });

      provider.on('sync', (synced: boolean) => {
        setIsSynced(synced);
        if (synced && !isHost) {
          syncFromYjs();
        }
      });

      // Subscribe to Yjs changes
      const { gameState: yGameState, players: yPlayers } = getSharedTypes();

      // Both host and clients observe player changes (for joining players)
      yPlayers.observe(() => {
        console.log('[Yjs] Players changed in Yjs');
        syncPlayersFromYjs();
      });

      // Only clients observe game state changes
      if (!isHost) {
        yGameState.observe(() => {
          syncGameStateFromYjs();
        });
      }

      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to connect'));
    }
  }, [serverUrl, roomCode, isHost, syncFromYjs, syncPlayersFromYjs, syncGameStateFromYjs]);

  // Disconnect from Yjs
  const disconnect = useCallback(() => {
    disconnectYjs();
    setIsConnected(false);
    setIsSynced(false);
  }, []);

  // Reconnect
  const reconnect = useCallback(() => {
    disconnect();
    setTimeout(connect, 100);
  }, [disconnect, connect]);

  // Initial connection
  useEffect(() => {
    connect();
    return () => disconnect();
  }, [connect, disconnect]);

  // Sync changes to Yjs when local state changes (host only)
  useEffect(() => {
    if (isHost && isSynced) {
      syncToYjs();
    }
  }, [isHost, isSynced, snapshot, syncToYjs]);

  return {
    isConnected,
    isSynced,
    error,
    disconnect,
    reconnect,
    addPlayer,
    removePlayer,
  };
}

export default useYjsSync;
