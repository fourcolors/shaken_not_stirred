import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from './Button';
const meta = {
    title: 'Atoms/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'ghost', 'danger'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl'],
        },
    },
};
export default meta;
export const Primary = {
    args: {
        children: 'Start Game',
        variant: 'primary',
        size: 'md',
    },
};
export const Secondary = {
    args: {
        children: 'Settings',
        variant: 'secondary',
        size: 'md',
    },
};
export const Ghost = {
    args: {
        children: 'Cancel',
        variant: 'ghost',
        size: 'md',
    },
};
export const Danger = {
    args: {
        children: 'Leave Game',
        variant: 'danger',
        size: 'md',
    },
};
export const WithGlow = {
    args: {
        children: 'Join Room',
        variant: 'primary',
        size: 'lg',
        glow: true,
    },
};
export const Loading = {
    args: {
        children: 'Connecting...',
        variant: 'primary',
        size: 'md',
        isLoading: true,
    },
};
export const FullWidth = {
    args: {
        children: 'Submit Answer',
        variant: 'primary',
        size: 'lg',
        fullWidth: true,
    },
    decorators: [
        (Story) => (_jsx("div", { style: { width: '300px' }, children: _jsx(Story, {}) })),
    ],
};
export const AllSizes = {
    render: () => (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }, children: [_jsx(Button, { size: "sm", children: "Small" }), _jsx(Button, { size: "md", children: "Medium" }), _jsx(Button, { size: "lg", children: "Large" }), _jsx(Button, { size: "xl", children: "Extra Large" })] })),
};
export const AllVariants = {
    render: () => (_jsxs("div", { style: { display: 'flex', gap: '16px', flexWrap: 'wrap' }, children: [_jsx(Button, { variant: "primary", children: "Primary" }), _jsx(Button, { variant: "secondary", children: "Secondary" }), _jsx(Button, { variant: "ghost", children: "Ghost" }), _jsx(Button, { variant: "danger", children: "Danger" })] })),
};
//# sourceMappingURL=Button.stories.js.map