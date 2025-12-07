import { WaitingScreen } from './WaitingScreen';
const meta = {
    title: 'Organisms/Phone/WaitingScreen',
    component: WaitingScreen,
    parameters: {
        layout: 'fullscreen',
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
    tags: ['autodocs'],
};
export default meta;
export const Voting = {
    args: {
        reason: 'voting',
        playerShape: 'cube',
        playerColor: '#CCFF00',
    },
};
export const Results = {
    args: {
        reason: 'results',
        playerShape: 'pyramid',
        playerColor: '#FF10F0',
    },
};
export const NextRound = {
    args: {
        reason: 'next-round',
        playerShape: 'sphere',
        playerColor: '#00FFFF',
    },
};
export const OtherPlayers = {
    args: {
        reason: 'other-players',
        playerShape: 'diamond',
        playerColor: '#9D00FF',
    },
};
export const Host = {
    args: {
        reason: 'host',
        playerShape: 'cube',
        playerColor: '#CCFF00',
    },
};
export const CustomMessage = {
    args: {
        reason: 'host',
        message: 'The DJ is picking the next song!',
        playerShape: 'sphere',
        playerColor: '#FF10F0',
    },
};
//# sourceMappingURL=WaitingScreen.stories.js.map