#!/usr/bin/env node
/**
 * Yjs WebSocket Server for Shaken Not Stirred
 *
 * Provides real-time collaborative editing for multiplayer game state
 */
export interface ServerOptions {
    /** Port to listen on */
    port?: number;
    /** Host to bind to */
    host?: string;
    /** Maximum players per room */
    maxPlayersPerRoom?: number;
    /** Enable verbose logging */
    verbose?: boolean;
}
/**
 * Start the Yjs WebSocket server
 */
export declare function startServer(options?: ServerOptions): Promise<void>;
//# sourceMappingURL=server.d.ts.map