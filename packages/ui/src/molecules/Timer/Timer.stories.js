import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Timer } from './Timer';
const meta = {
    title: 'Molecules/Timer',
    component: Timer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export const CircularDefault = {
    args: {
        duration: 60,
        timeRemaining: 45,
        variant: 'circular',
        size: 'md',
    },
};
export const CircularPanic = {
    args: {
        duration: 60,
        timeRemaining: 8,
        variant: 'circular',
        size: 'md',
        panicThreshold: 10,
    },
};
export const CircularLarge = {
    args: {
        duration: 90,
        timeRemaining: 75,
        variant: 'circular',
        size: 'lg',
    },
};
export const BarDefault = {
    args: {
        duration: 60,
        timeRemaining: 40,
        variant: 'bar',
        size: 'md',
    },
    decorators: [
        (Story) => (_jsx("div", { style: { width: '400px' }, children: _jsx(Story, {}) })),
    ],
};
export const BarPanic = {
    args: {
        duration: 60,
        timeRemaining: 5,
        variant: 'bar',
        size: 'md',
        panicThreshold: 10,
    },
    decorators: [
        (Story) => (_jsx("div", { style: { width: '400px' }, children: _jsx(Story, {}) })),
    ],
};
export const AllSizes = {
    render: () => (_jsxs("div", { style: { display: 'flex', gap: '32px', alignItems: 'center' }, children: [_jsx(Timer, { duration: 60, timeRemaining: 45, size: "sm" }), _jsx(Timer, { duration: 60, timeRemaining: 45, size: "md" }), _jsx(Timer, { duration: 60, timeRemaining: 45, size: "lg" })] })),
};
export const ProgressStates = {
    render: () => (_jsxs("div", { style: { display: 'flex', gap: '24px' }, children: [_jsx(Timer, { duration: 60, timeRemaining: 60, size: "md" }), _jsx(Timer, { duration: 60, timeRemaining: 30, size: "md" }), _jsx(Timer, { duration: 60, timeRemaining: 10, size: "md", panicThreshold: 10 }), _jsx(Timer, { duration: 60, timeRemaining: 3, size: "md", panicThreshold: 10 })] })),
};
export const AutoCountdown = {
    args: {
        duration: 15,
        autoStart: true,
        variant: 'circular',
        size: 'lg',
        panicThreshold: 5,
    },
    parameters: {
        docs: {
            description: {
                story: 'This timer will auto-count down from 15 seconds',
            },
        },
    },
};
//# sourceMappingURL=Timer.stories.js.map