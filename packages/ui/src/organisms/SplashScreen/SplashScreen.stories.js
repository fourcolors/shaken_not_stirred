import { SplashScreen } from './SplashScreen';
const meta = {
    title: 'Organisms/Host/SplashScreen',
    component: SplashScreen,
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
            default: 'acid-lounge',
        },
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    args: {
        roomCode: 'VIVA',
        showQR: true,
        subtitle: 'A Party Game Experience',
    },
};
export const WithoutQR = {
    args: {
        roomCode: 'SHAKE',
        showQR: false,
        subtitle: 'Join the Party',
    },
};
export const NoRoomCode = {
    args: {
        showQR: true,
        subtitle: 'Scan to Create a Room',
    },
};
export const CustomSubtitle = {
    args: {
        roomCode: 'ACID',
        showQR: true,
        subtitle: 'Welcome to the Viva Lounge',
    },
};
export const StreamerMode = {
    args: {
        showQR: true,
        subtitle: 'Join at play.vivaLounge.gg',
    },
    parameters: {
        docs: {
            description: {
                story: 'Streamer mode hides the room code to prevent unwanted joiners',
            },
        },
    },
};
//# sourceMappingURL=SplashScreen.stories.js.map