import { GameFlow } from './GameFlow';
const meta = {
    title: 'Templates/GameFlow',
    component: GameFlow,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    args: {
        isHost: true,
    },
};
// Note: GameFlow renders based on global game state.
// Use game-logic actions to change phases for testing.
//# sourceMappingURL=GameFlow.stories.js.map