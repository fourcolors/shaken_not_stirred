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

  // Sync FROM Yjs to local state (clients)
  const syncFromYjs = useCallback(() => {
    if (isHost) return;

    const { gameState: yGameState, players: yPlayers } = getSharedTypes();

    // Read game state
    const phase = yGameState.get('phase') as GamePhase | undefined;
    const currentRound = yGameState.get('currentRound') as number | undefined;
    const totalRounds = yGameState.get('totalRounds') as number | undefined;
    const timerRemaining = yGameState.get('timerRemaining') as number | undefined;

    if (phase !== undefined) gameState.phase = phase;
    if (currentRound !== undefined) gameState.currentRound = currentRound;
    if (totalRounds !== undefined) gameState.totalRounds = totalRounds;
    if (timerRemaining !== undefined) gameState.timerRemaining = timerRemaining;

    // Read players
    const players = yPlayers.toArray() as Player[];
    gameState.players = players;
  }, [isHost]);

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

      // Subscribe to Yjs changes (for clients)
      if (!isHost) {
        const { gameState: yGameState, players: yPlayers } = getSharedTypes();

        yGameState.observe(() => {
          syncFromYjs();
        });

        yPlayers.observe(() => {
          syncFromYjs();
        });
      }

      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to connect'));
    }
  }, [serverUrl, roomCode, isHost, syncFromYjs]);

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
  };
}

export default useYjsSync;
