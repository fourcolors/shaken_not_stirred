import { WritingPhase } from './WritingPhase';
const mockPlayers = [
    { id: '1', name: 'Alice', avatarShape: 'cube', avatarColor: '#CCFF00', hasSubmitted: true },
    { id: '2', name: 'Bob', avatarShape: 'pyramid', avatarColor: '#FF10F0', hasSubmitted: true },
    { id: '3', name: 'Charlie', avatarShape: 'sphere', avatarColor: '#00FFFF', hasSubmitted: false },
    { id: '4', name: 'Diana', avatarShape: 'diamond', avatarColor: '#9D00FF', hasSubmitted: false },
];
const meta = {
    title: 'Organisms/Game/WritingPhase',
    component: WritingPhase,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};
export default meta;
export const InProgress = {
    args: {
        prompt: 'What would you name your autobiography?',
        timeRemaining: 45,
        totalTime: 60,
        players: mockPlayers,
    },
};
export const MostSubmitted = {
    args: {
        prompt: 'Describe your perfect vacation in 3 words',
        timeRemaining: 20,
        totalTime: 60,
        players: mockPlayers.map((p, i) => ({ ...p, hasSubmitted: i < 3 })),
    },
};
export const PanicMode = {
    args: {
        prompt: 'What secret talent do you have?',
        timeRemaining: 8,
        totalTime: 60,
        players: mockPlayers,
        isPanic: true,
    },
};
export const AllSubmitted = {
    args: {
        prompt: 'If you were a cocktail, what would you be?',
        timeRemaining: 30,
        totalTime: 60,
        players: mockPlayers.map((p) => ({ ...p, hasSubmitted: true })),
    },
};
//# sourceMappingURL=WritingPhase.stories.js.map