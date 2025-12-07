import { ShakingPhase } from './ShakingPhase';
const mockPlayers = [
    { id: '1', name: 'Alice', avatarShape: 'cube', avatarColor: '#CCFF00', shakeProgress: 100, hasCompleted: true },
    { id: '2', name: 'Bob', avatarShape: 'pyramid', avatarColor: '#FF10F0', shakeProgress: 75, hasCompleted: false },
    { id: '3', name: 'Charlie', avatarShape: 'sphere', avatarColor: '#00FFFF', shakeProgress: 45, hasCompleted: false },
    { id: '4', name: 'Diana', avatarShape: 'diamond', avatarColor: '#9D00FF', shakeProgress: 20, hasCompleted: false },
];
const meta = {
    title: 'Organisms/Game/ShakingPhase',
    component: ShakingPhase,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};
export default meta;
export const InProgress = {
    args: {
        players: mockPlayers,
        targetShakes: 50,
        timeRemaining: 15,
    },
};
export const EarlyPhase = {
    args: {
        players: mockPlayers.map((p) => ({ ...p, shakeProgress: Math.random() * 30, hasCompleted: false })),
        targetShakes: 50,
        timeRemaining: 25,
    },
};
export const NearlyDone = {
    args: {
        players: mockPlayers.map((p, i) => ({
            ...p,
            shakeProgress: i < 3 ? 100 : 85,
            hasCompleted: i < 3,
        })),
        targetShakes: 50,
        timeRemaining: 5,
    },
};
export const AllComplete = {
    args: {
        players: mockPlayers.map((p) => ({ ...p, shakeProgress: 100, hasCompleted: true })),
        targetShakes: 50,
    },
};
//# sourceMappingURL=ShakingPhase.stories.js.map