import { WritingInput } from './WritingInput';
const meta = {
    title: 'Organisms/Phone/WritingInput',
    component: WritingInput,
    parameters: {
        layout: 'fullscreen',
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    args: {
        prompt: 'What would you name your autobiography?',
        timeRemaining: 45,
        totalTime: 60,
    },
};
export const ShortTime = {
    args: {
        prompt: 'Describe your perfect vacation',
        timeRemaining: 15,
        totalTime: 60,
    },
};
export const Panic = {
    args: {
        prompt: 'What secret talent do you have?',
        timeRemaining: 5,
        totalTime: 60,
        isPanic: true,
    },
};
export const Submitted = {
    args: {
        prompt: 'What would you name your autobiography?',
        timeRemaining: 30,
        totalTime: 60,
        isSubmitted: true,
    },
};
//# sourceMappingURL=WritingInput.stories.js.map