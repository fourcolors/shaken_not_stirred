import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
let ydoc = null;
let provider = null;
/**
 * Get or create the Yjs document
 */
export function getYjsDoc() {
    if (!ydoc) {
        ydoc = new Y.Doc();
    }
    return ydoc;
}
/**
 * Create a WebSocket provider for Yjs synchronization
 */
export function createYjsProvider(options) {
    const { serverUrl = 'ws://localhost:1234', roomName, } = options;
    const doc = getYjsDoc();
    // Disconnect existing provider if any
    if (provider) {
        provider.disconnect();
    }
    provider = new WebsocketProvider(serverUrl, roomName, doc);
    // Connection status logging
    provider.on('status', (event) => {
        console.log(`[Yjs] Connection status: ${event.status}`);
    });
    provider.on('sync', (isSynced) => {
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
        players: doc.getArray('players'),
        /** Shared game state map */
        gameState: doc.getMap('gameState'),
        /** Shared rounds array */
        rounds: doc.getArray('rounds'),
        /** Shared chat/messages */
        messages: doc.getArray('messages'),
    };
}
/**
 * Disconnect and cleanup Yjs
 */
export function disconnectYjs() {
    if (provider) {
        provider.disconnect();
        provider = null;
    }
    if (ydoc) {
        ydoc.destroy();
        ydoc = null;
    }
}
//# sourceMappingURL=yjsProvider.js.map