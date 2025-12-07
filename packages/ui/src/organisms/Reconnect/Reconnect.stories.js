import { Reconnect } from './Reconnect';
const meta = {
    title: 'Organisms/Host/Reconnect',
    component: Reconnect,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};
export default meta;
export const Disconnected = {
    args: {
        state: 'disconnected',
    },
};
export const Reconnecting = {
    args: {
        state: 'reconnecting',
        attempts: 2,
        maxAttempts: 5,
    },
};
export const ReconnectingLate = {
    args: {
        state: 'reconnecting',
        attempts: 4,
        maxAttempts: 5,
    },
};
export const Failed = {
    args: {
        state: 'failed',
        errorMessage: 'Server timed out. The game may have ended.',
    },
};
//# sourceMappingURL=Reconnect.stories.js.map