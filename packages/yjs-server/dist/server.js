#!/usr/bin/env node
/**
 * Yjs WebSocket Server for Shaken Not Stirred
 *
 * Provides real-time collaborative editing for multiplayer game state
 */
import { WebSocketServer } from 'ws';
import { setupWSConnection } from 'y-websocket/bin/utils';
import { RoomManager } from './roomManager.js';
import * as http from 'http';
/**
 * Start the Yjs WebSocket server
 */
export async function startServer(options = {}) {
    const { port = 1234, host = 'localhost', maxPlayersPerRoom = 8, verbose = true, } = options;
    const roomManager = new RoomManager(maxPlayersPerRoom);
    // Create HTTP server
    const httpServer = http.createServer((request, response) => {
        if (request.url === '/health') {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({
                status: 'healthy',
                stats: roomManager.getStats(),
            }));
        }
        else if (request.url === '/stats') {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({
                stats: roomManager.getStats(),
                rooms: roomManager.getAllRooms().map(room => ({
                    code: room.code,
                    players: room.playerCount,
                    created: room.createdAt.toISOString(),
                    lastActivity: room.lastActivity.toISOString(),
                })),
            }));
        }
        else {
            response.writeHead(404);
            response.end('Not Found');
        }
    });
    // Create WebSocket server
    const wss = new WebSocketServer({ server: httpServer });
    wss.on('connection', (ws, req) => {
        // Extract room code from URL path
        const roomCode = req.url?.slice(1).toUpperCase() || '';
        if (verbose) {
            console.log(`[Yjs] Connection attempt to room: ${roomCode}`);
        }
        // Validate room code
        if (!roomManager.isValidRoomCode(roomCode)) {
            console.error(`[Yjs] Invalid room code: ${roomCode}`);
            ws.close(1008, 'Invalid room code. Must be 4 uppercase letters.');
            return;
        }
        // Check if room can accept new players
        if (!roomManager.canJoinRoom(roomCode)) {
            console.error(`[Yjs] Room full: ${roomCode}`);
            ws.close(1008, 'Room is full. Maximum 8 players allowed.');
            return;
        }
        // Add player to room
        roomManager.addPlayer(roomCode);
        const roomInfo = roomManager.getRoomInfo(roomCode);
        if (verbose) {
            console.log(`[Yjs] Player joined room ${roomCode} (${roomInfo?.playerCount}/${maxPlayersPerRoom} players)`);
        }
        // Setup Yjs WebSocket connection
        setupWSConnection(ws, req, {
            gc: true, // Enable garbage collection
        });
        // Handle disconnection
        ws.on('close', () => {
            roomManager.removePlayer(roomCode);
            const updatedInfo = roomManager.getRoomInfo(roomCode);
            if (verbose) {
                if (updatedInfo) {
                    console.log(`[Yjs] Player left room ${roomCode} (${updatedInfo.playerCount}/${maxPlayersPerRoom} players)`);
                }
                else {
                    console.log(`[Yjs] Room ${roomCode} closed (empty)`);
                }
            }
        });
    });
    // Periodic cleanup of stale rooms (every 10 minutes)
    setInterval(() => {
        const cleaned = roomManager.cleanupStaleRooms(60);
        if (cleaned > 0 && verbose) {
            console.log(`[Yjs] Cleaned up ${cleaned} stale room(s)`);
        }
    }, 10 * 60 * 1000);
    // Start server
    await new Promise((resolve) => {
        httpServer.listen(port, host, () => {
            console.log(`🎮 Yjs WebSocket Server running on ws://${host}:${port}`);
            console.log(`📊 Health check: http://${host}:${port}/health`);
            console.log(`📈 Stats: http://${host}:${port}/stats`);
            console.log(`👥 Max players per room: ${maxPlayersPerRoom}`);
            resolve();
        });
    });
    // Graceful shutdown
    const shutdown = () => {
        console.log('\n[Yjs] Shutting down server...');
        wss.close(() => {
            httpServer.close(() => {
                console.log('[Yjs] Server closed');
                process.exit(0);
            });
        });
    };
    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
}
// CLI entry point
if (import.meta.url === `file://${process.argv[1]}`) {
    const port = process.env.PORT ? parseInt(process.env.PORT) : 1234;
    const host = process.env.HOST || 'localhost';
    startServer({
        port,
        host,
        maxPlayersPerRoom: 8,
        verbose: true,
    }).catch((error) => {
        console.error('[Yjs] Failed to start server:', error);
        process.exit(1);
    });
}
//# sourceMappingURL=server.js.map