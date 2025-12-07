import { Lobby } from './Lobby';
const mockPlayers = [
    { id: '1', name: 'Alice', avatarShape: 'cube', avatarColor: '#CCFF00', isVIP: true },
    { id: '2', name: 'Bob', avatarShape: 'pyramid', avatarColor: '#FF10F0', isDrinking: true },
    { id: '3', name: 'Charlie', avatarShape: 'sphere', avatarColor: '#00FFFF' },
    { id: '4', name: 'Diana', avatarShape: 'diamond', avatarColor: '#9D00FF', isDJ: true },
];
const meta = {
    title: 'Organisms/Host/Lobby',
    component: Lobby,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};
export default meta;
export const Empty = {
    args: {
        state: 'empty',
        roomCode: 'VIVA',
        players: [],
        maxPlayers: 8,
    },
};
export const Populating = {
    args: {
        state: 'populating',
        roomCode: 'VIVA',
        players: mockPlayers.slice(0, 2),
        maxPlayers: 8,
    },
};
export const Ready = {
    args: {
        state: 'ready',
        roomCode: 'VIVA',
        players: mockPlayers,
        maxPlayers: 8,
        isVIP: true,
    },
};
export const ReadyNotVIP = {
    args: {
        state: 'ready',
        roomCode: 'VIVA',
        players: mockPlayers,
        maxPlayers: 8,
        isVIP: false,
    },
};
export const FullLobby = {
    args: {
        state: 'ready',
        roomCode: 'FULL',
        players: [
            ...mockPlayers,
            { id: '5', name: 'Eve', avatarShape: 'cube', avatarColor: '#FF10F0' },
            { id: '6', name: 'Frank', avatarShape: 'pyramid', avatarColor: '#CCFF00' },
            { id: '7', name: 'Grace', avatarShape: 'sphere', avatarColor: '#9D00FF', isDrinking: true },
            { id: '8', name: 'Henry', avatarShape: 'diamond', avatarColor: '#00FFFF' },
        ],
        maxPlayers: 8,
        isVIP: true,
    },
};
//# sourceMappingURL=Lobby.stories.js.map