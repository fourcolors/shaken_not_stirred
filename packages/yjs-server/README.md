# @shaken/yjs-server

WebSocket server for real-time multiplayer state synchronization using Yjs.

## Features

- ✅ Room-based connections with 4-letter room codes
- ✅ Maximum 8 players per room
- ✅ Automatic cleanup of empty rooms
- ✅ Health check and stats endpoints
- ✅ Graceful shutdown handling
- ✅ Connection logging and monitoring

## Development

```bash
# Start development server with hot reload
pnpm --filter @shaken/yjs-server dev

# Build for production
pnpm --filter @shaken/yjs-server build

# Start production server
pnpm --filter @shaken/yjs-server start
```

## Environment Variables

- `PORT` - Server port (default: 1234)
- `HOST` - Host to bind to (default: localhost)

## API Endpoints

### WebSocket
- `ws://localhost:1234/<ROOM_CODE>` - Connect to a game room

### HTTP
- `http://localhost:1234/health` - Health check with basic stats
- `http://localhost:1234/stats` - Detailed server statistics

## Room Code Format

Room codes must be exactly 4 uppercase letters (A-Z).

Examples: `ABCD`, `GAME`, `PLAY`

## Client Connection

The client connects using the room code:

```typescript
import { createYjsProvider } from '@shaken/game-logic';

const provider = createYjsProvider({
  serverUrl: 'ws://localhost:1234',
  roomName: 'ABCD', // 4-letter room code
});
```

## Architecture

- **server.ts** - Main WebSocket server with HTTP endpoints
- **roomManager.ts** - Room validation, player limits, and tracking

## Monitoring

Check server stats:
```bash
curl http://localhost:1234/stats
```

Response:
```json
{
  "stats": {
    "totalRooms": 3,
    "totalPlayers": 12,
    "maxPlayersPerRoom": 8,
    "averagePlayersPerRoom": "4.00"
  },
  "rooms": [
    {
      "code": "ABCD",
      "players": 4,
      "created": "2025-12-06T10:30:00.000Z",
      "lastActivity": "2025-12-06T10:35:00.000Z"
    }
  ]
}
```
