import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from './Input';
const meta = {
    title: 'Atoms/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (_jsx("div", { style: { width: '320px' }, children: _jsx(Story, {}) })),
    ],
};
export default meta;
export const Default = {
    args: {
        placeholder: 'Enter your answer...',
    },
};
export const WithLabel = {
    args: {
        label: 'Your Name',
        placeholder: 'Enter your name',
    },
};
export const RoomCode = {
    args: {
        label: 'Room Code',
        placeholder: 'ABCD',
        maxLength: 4,
        style: { textTransform: 'uppercase', textAlign: 'center', letterSpacing: '0.5em' },
    },
};
export const Error = {
    args: {
        label: 'Answer',
        placeholder: 'Type your answer...',
        hasError: true,
        errorMessage: 'This answer is too short',
        defaultValue: 'Hi',
    },
};
export const PanicMode = {
    args: {
        label: 'Quick! Time is running out!',
        placeholder: 'TYPE FASTER!',
        panicMode: true,
    },
    parameters: {
        docs: {
            description: {
                story: 'Panic mode activates when timer drops below 10 seconds',
            },
        },
    },
};
export const AllSizes = {
    render: () => (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px' }, children: [_jsx(Input, { size: "sm", placeholder: "Small input" }), _jsx(Input, { size: "md", placeholder: "Medium input" }), _jsx(Input, { size: "lg", placeholder: "Large input" })] })),
};
export const Disabled = {
    args: {
        label: 'Locked',
        placeholder: 'Cannot edit',
        disabled: true,
        defaultValue: 'Submitted answer',
    },
};
//# sourceMappingURL=Input.stories.js.map