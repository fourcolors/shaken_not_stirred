/**
 * Room Manager for Yjs WebSocket Server
 *
 * Handles room validation, player limits, and connection tracking
 */
export interface RoomInfo {
    /** Room code (4-letter uppercase code) */
    code: string;
    /** Number of connected players */
    playerCount: number;
    /** Timestamp when room was created */
    createdAt: Date;
    /** Last activity timestamp */
    lastActivity: Date;
}
export declare class RoomManager {
    private rooms;
    private readonly maxPlayersPerRoom;
    private readonly roomCodePattern;
    constructor(maxPlayersPerRoom?: number);
    /**
     * Validate room code format (4 uppercase letters)
     */
    isValidRoomCode(code: string): boolean;
    /**
     * Check if room can accept new connections
     */
    canJoinRoom(roomCode: string): boolean;
    /**
     * Register a new player connection to a room
     */
    addPlayer(roomCode: string): boolean;
    /**
     * Remove a player connection from a room
     */
    removePlayer(roomCode: string): void;
    /**
     * Get room information
     */
    getRoomInfo(roomCode: string): RoomInfo | null;
    /**
     * Get all active rooms
     */
    getAllRooms(): RoomInfo[];
    /**
     * Clean up stale rooms (no activity for specified duration)
     */
    cleanupStaleRooms(maxIdleMinutes?: number): number;
    /**
     * Get server statistics
     */
    getStats(): {
        totalRooms: number;
        totalPlayers: number;
        maxPlayersPerRoom: number;
        averagePlayersPerRoom: string;
    };
}
//# sourceMappingURL=roomManager.d.ts.map