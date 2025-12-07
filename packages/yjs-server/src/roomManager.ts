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

export class RoomManager {
  private rooms: Map<string, RoomInfo> = new Map();
  private readonly maxPlayersPerRoom: number;
  private readonly roomCodePattern = /^[A-Z]{4}$/;

  constructor(maxPlayersPerRoom: number = 8) {
    this.maxPlayersPerRoom = maxPlayersPerRoom;
  }

  /**
   * Validate room code format (4 uppercase letters)
   */
  isValidRoomCode(code: string): boolean {
    return this.roomCodePattern.test(code);
  }

  /**
   * Check if room can accept new connections
   */
  canJoinRoom(roomCode: string): boolean {
    if (!this.isValidRoomCode(roomCode)) {
      return false;
    }

    const room = this.rooms.get(roomCode);
    if (!room) {
      // Room doesn't exist yet, can create
      return true;
    }

    return room.playerCount < this.maxPlayersPerRoom;
  }

  /**
   * Register a new player connection to a room
   */
  addPlayer(roomCode: string): boolean {
    if (!this.canJoinRoom(roomCode)) {
      return false;
    }

    const room = this.rooms.get(roomCode);
    if (room) {
      room.playerCount++;
      room.lastActivity = new Date();
    } else {
      // Create new room
      this.rooms.set(roomCode, {
        code: roomCode,
        playerCount: 1,
        createdAt: new Date(),
        lastActivity: new Date(),
      });
    }

    return true;
  }

  /**
   * Remove a player connection from a room
   */
  removePlayer(roomCode: string): void {
    const room = this.rooms.get(roomCode);
    if (!room) {
      return;
    }

    room.playerCount--;
    room.lastActivity = new Date();

    // Clean up empty rooms
    if (room.playerCount <= 0) {
      this.rooms.delete(roomCode);
    }
  }

  /**
   * Get room information
   */
  getRoomInfo(roomCode: string): RoomInfo | null {
    return this.rooms.get(roomCode) ?? null;
  }

  /**
   * Get all active rooms
   */
  getAllRooms(): RoomInfo[] {
    return Array.from(this.rooms.values());
  }

  /**
   * Clean up stale rooms (no activity for specified duration)
   */
  cleanupStaleRooms(maxIdleMinutes: number = 60): number {
    const now = new Date();
    let cleaned = 0;

    for (const [code, room] of this.rooms.entries()) {
      const idleMinutes = (now.getTime() - room.lastActivity.getTime()) / (1000 * 60);
      if (idleMinutes > maxIdleMinutes) {
        this.rooms.delete(code);
        cleaned++;
      }
    }

    return cleaned;
  }

  /**
   * Get server statistics
   */
  getStats() {
    const rooms = this.getAllRooms();
    return {
      totalRooms: rooms.length,
      totalPlayers: rooms.reduce((sum, room) => sum + room.playerCount, 0),
      maxPlayersPerRoom: this.maxPlayersPerRoom,
      averagePlayersPerRoom: rooms.length > 0
        ? (rooms.reduce((sum, room) => sum + room.playerCount, 0) / rooms.length).toFixed(2)
        : '0',
    };
  }
}
