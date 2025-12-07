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
export declare function useYjsSync(options: UseYjsSyncOptions): UseYjsSyncResult;
export default useYjsSync;
//# sourceMappingURL=useYjsSync.d.ts.map