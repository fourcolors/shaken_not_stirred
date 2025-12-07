import { ShakeSubmit } from './ShakeSubmit';
const meta = {
    title: 'Organisms/Phone/ShakeSubmit',
    component: ShakeSubmit,
    parameters: {
        layout: 'fullscreen',
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
    tags: ['autodocs'],
};
export default meta;
export const Start = {
    args: {
        progress: 0,
        targetShakes: 50,
        currentShakes: 0,
    },
};
export const InProgress = {
    args: {
        progress: 45,
        targetShakes: 50,
        currentShakes: 22,
    },
};
export const AlmostDone = {
    args: {
        progress: 90,
        targetShakes: 50,
        currentShakes: 45,
    },
};
export const Complete = {
    args: {
        progress: 100,
        targetShakes: 50,
        currentShakes: 50,
        isComplete: true,
    },
};
//# sourceMappingURL=ShakeSubmit.stories.js.map