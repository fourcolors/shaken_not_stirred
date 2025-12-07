/**
 * Type declarations for y-websocket utilities
 */

declare module 'y-websocket/bin/utils' {
  import { IncomingMessage } from 'http';
  import { WebSocket } from 'ws';

  export interface WSConnectionOptions {
    gc?: boolean;
    gcFilter?: (item: string) => boolean;
  }

  export function setupWSConnection(
    conn: WebSocket,
    req: IncomingMessage,
    options?: WSConnectionOptions
  ): void;
}
