import { PhoneLanding } from './PhoneLanding';
const meta = {
    title: 'Organisms/Phone/Landing',
    component: PhoneLanding,
    parameters: {
        layout: 'fullscreen',
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
    tags: ['autodocs'],
};
export default meta;
export const Empty = {
    args: {
        mode: 'join',
    },
};
export const WithCode = {
    args: {
        mode: 'join',
        initialRoomCode: 'VIVA',
    },
};
export const PartialCode = {
    args: {
        mode: 'join',
        initialRoomCode: 'VI',
    },
};
export const Connecting = {
    args: {
        mode: 'join',
        initialRoomCode: 'VIVA',
        isConnecting: true,
    },
};
export const Error = {
    args: {
        mode: 'join',
        initialRoomCode: 'FAKE',
        errorMessage: 'Room not found. Check the code and try again.',
    },
};
export const Rejoin = {
    args: {
        mode: 'rejoin',
        previousName: 'PartyAnimal',
    },
};
export const JoinWithRejoinOption = {
    args: {
        mode: 'join',
        previousName: 'PartyAnimal',
    },
};
//# sourceMappingURL=PhoneLanding.stories.js.map