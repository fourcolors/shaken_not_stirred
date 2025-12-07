import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
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
export declare function getYjsDoc(): Y.Doc;
/**
 * Create a WebSocket provider for Yjs synchronization
 */
export declare function createYjsProvider(options: YjsProviderOptions): WebsocketProvider;
/**
 * Get shared Yjs types for game state
 */
export declare function getSharedTypes(): {
    /** Shared array of players */
    players: Y.Array<any>;
    /** Shared game state map */
    gameState: Y.Map<any>;
    /** Shared rounds array */
    rounds: Y.Array<any>;
    /** Shared chat/messages */
    messages: Y.Array<any>;
};
/**
 * Disconnect and cleanup Yjs
 */
export declare function disconnectYjs(): void;
//# sourceMappingURL=yjsProvider.d.ts.map