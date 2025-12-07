import { PhoneFlow } from './PhoneFlow';
const meta = {
    title: 'Templates/PhoneFlow',
    component: PhoneFlow,
    parameters: {
        layout: 'fullscreen',
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
    tags: ['autodocs'],
};
export default meta;
export const Landing = {
    args: {},
};
export const WithPlayer = {
    args: {
        playerId: 'player-1',
    },
};
// Note: PhoneFlow renders based on global game state.
// Use game-logic actions to change phases for testing.
//# sourceMappingURL=PhoneFlow.stories.js.map