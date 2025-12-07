import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';

let ydoc: Y.Doc | null = null;
let provider: WebsocketProvider | null = null;

export interface YjsProviderOptions {
  /** WebSocket server URL */
  serverUrl?: string;
  /** Room/document name */
  roomName: string;
  /** Optional auth token */
  authToken?: string;
}

/**
 * Get or create the Yjs document
 */
export function getYjsDoc(): Y.Doc {
  if (!ydoc) {
    ydoc = new Y.Doc();
  }
  return ydoc;
}

/**
 * Create a WebSocket provider for Yjs synchronization
 */
export function createYjsProvider(options: YjsProviderOptions): WebsocketProvider {
  const {
    serverUrl = 'ws://localhost:1234',
    roomName,
  } = options;

  const doc = getYjsDoc();

  // Disconnect existing provider if any
  if (provider) {
    provider.disconnect();
  }

  provider = new WebsocketProvider(serverUrl, roomName, doc);

  // Connection status logging
  provider.on('status', (event: { status: string }) => {
    console.log(`[Yjs] Connection status: ${event.status}`);
  });

  provider.on('sync', (isSynced: boolean) => {
    console.log(`[Yjs] Synced: ${isSynced}`);
  });

  return provider;
}

/**
 * Get shared Yjs types for game state
 */
export function getSharedTypes() {
  const doc = getYjsDoc();

  return {
    /** Shared array of players */
    players: doc.getArray<any>('players'),

    /** Shared game state map */
    gameState: doc.getMap<any>('gameState'),

    /** Shared rounds array */
    rounds: doc.getArray<any>('rounds'),

    /** Shared chat/messages */
    messages: doc.getArray<any>('messages'),
  };
}

/**
 * Disconnect and cleanup Yjs
 */
export function disconnectYjs(): void {
  if (provider) {
    provider.disconnect();
    provider = null;
  }
  if (ydoc) {
    ydoc.destroy();
    ydoc = null;
  }
}
