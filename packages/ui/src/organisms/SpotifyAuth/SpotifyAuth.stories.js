import { SpotifyAuth } from './SpotifyAuth';
const meta = {
    title: 'Organisms/Host/SpotifyAuth',
    component: SpotifyAuth,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};
export default meta;
export const Idle = {
    args: {
        state: 'idle',
    },
};
export const Connecting = {
    args: {
        state: 'connecting',
    },
};
export const Success = {
    args: {
        state: 'success',
        accountName: 'DJ_PartyVibes',
    },
};
export const Error = {
    args: {
        state: 'error',
        errorMessage: 'Authentication was cancelled. Please try again.',
    },
};
//# sourceMappingURL=SpotifyAuth.stories.js.map