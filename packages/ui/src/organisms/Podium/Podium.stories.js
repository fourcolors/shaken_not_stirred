import { Podium } from './Podium';
const mockWinners = [
    { id: '1', name: 'Alice', avatarShape: 'cube', avatarColor: '#CCFF00', score: 500, rank: 1 },
    { id: '2', name: 'Bob', avatarShape: 'pyramid', avatarColor: '#FF10F0', score: 420, rank: 2 },
    { id: '3', name: 'Charlie', avatarShape: 'sphere', avatarColor: '#00FFFF', score: 350, rank: 3 },
];
const meta = {
    title: 'Organisms/Game/Podium',
    component: Podium,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    args: {
        winners: mockWinners,
    },
};
export const CloseScores = {
    args: {
        winners: [
            { ...mockWinners[0], score: 500 },
            { ...mockWinners[1], score: 495 },
            { ...mockWinners[2], score: 490 },
        ],
    },
};
export const DifferentAvatars = {
    args: {
        winners: [
            { id: '1', name: 'NeonKing', avatarShape: 'diamond', avatarColor: '#9D00FF', score: 750, rank: 1 },
            { id: '2', name: 'PartyQueen', avatarShape: 'sphere', avatarColor: '#FF10F0', score: 600, rank: 2 },
            { id: '3', name: 'AcidDancer', avatarShape: 'pyramid', avatarColor: '#CCFF00', score: 550, rank: 3 },
        ],
    },
};
//# sourceMappingURL=Podium.stories.js.map