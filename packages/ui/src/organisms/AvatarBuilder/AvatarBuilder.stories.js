import { AvatarBuilder } from './AvatarBuilder';
const meta = {
    title: 'Organisms/Phone/AvatarBuilder',
    component: AvatarBuilder,
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
    args: {},
};
export const WithName = {
    args: {
        initialName: 'PartyPete',
    },
};
export const CustomAvatar = {
    args: {
        initialName: 'NeonQueen',
        initialShape: 'diamond',
        initialColor: '#FF10F0',
        initialDrinking: true,
    },
};
export const Submitting = {
    args: {
        initialName: 'WaitingWill',
        initialShape: 'sphere',
        initialColor: '#00FFFF',
        isSubmitting: true,
    },
};
export const Error = {
    args: {
        initialName: 'BadName!!!',
        errorMessage: 'Name contains invalid characters',
    },
};
//# sourceMappingURL=AvatarBuilder.stories.js.map