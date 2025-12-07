import { PhoneLobby } from './PhoneLobby';
const mockPlayers = [
    { id: '1', name: 'Alice', avatarShape: 'cube', avatarColor: '#CCFF00', isVIP: true },
    { id: '2', name: 'Bob', avatarShape: 'pyramid', avatarColor: '#FF10F0' },
    { id: '3', name: 'Charlie', avatarShape: 'sphere', avatarColor: '#00FFFF', isDJ: true },
    { id: '4', name: 'Diana', avatarShape: 'diamond', avatarColor: '#9D00FF' },
];
const meta = {
    title: 'Organisms/Phone/Lobby',
    component: PhoneLobby,
    parameters: {
        layout: 'fullscreen',
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
    tags: ['autodocs'],
};
export default meta;
export const AsPlayer = {
    args: {
        currentPlayer: mockPlayers[1],
        players: mockPlayers,
        roomCode: 'VIVA',
        role: 'player',
    },
};
export const AsVIP = {
    args: {
        currentPlayer: mockPlayers[0],
        players: mockPlayers,
        roomCode: 'VIVA',
        role: 'vip',
    },
};
export const AsVIPNotEnoughPlayers = {
    args: {
        currentPlayer: mockPlayers[0],
        players: mockPlayers.slice(0, 2),
        roomCode: 'VIVA',
        role: 'vip',
    },
};
export const AsDJ = {
    args: {
        currentPlayer: mockPlayers[2],
        players: mockPlayers,
        roomCode: 'VIVA',
        role: 'dj',
    },
};
export const Starting = {
    args: {
        currentPlayer: mockPlayers[0],
        players: mockPlayers,
        roomCode: 'VIVA',
        role: 'vip',
        isStarting: true,
    },
};
//# sourceMappingURL=PhoneLobby.stories.js.map