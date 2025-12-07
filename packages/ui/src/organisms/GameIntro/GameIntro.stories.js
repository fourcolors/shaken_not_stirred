import { GameIntro } from './GameIntro';
const meta = {
    title: 'Organisms/Game/Intro',
    component: GameIntro,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};
export default meta;
export const Round1 = {
    args: {
        roundNumber: 1,
        totalRounds: 5,
        duration: 10000, // Extended for demo
    },
};
export const Round3WithTheme = {
    args: {
        roundNumber: 3,
        totalRounds: 5,
        theme: '🔥 Spicy Confessions',
        duration: 10000,
    },
};
export const FinalRound = {
    args: {
        roundNumber: 5,
        totalRounds: 5,
        theme: '🏆 Championship Round',
        duration: 10000,
    },
};
export const DoubleDigits = {
    args: {
        roundNumber: 10,
        totalRounds: 10,
        duration: 10000,
    },
};
//# sourceMappingURL=GameIntro.stories.js.map