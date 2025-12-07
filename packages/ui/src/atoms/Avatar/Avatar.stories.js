import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar } from './Avatar';
const meta = {
    title: 'Atoms/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        shape: {
            control: 'select',
            options: ['cube', 'pyramid', 'sphere', 'diamond'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl'],
        },
        color: {
            control: 'color',
        },
    },
};
export default meta;
export const Default = {
    args: {
        name: 'Player 1',
        shape: 'cube',
        color: '#CCFF00',
    },
};
export const AllShapes = {
    render: () => (_jsxs("div", { style: { display: 'flex', gap: '32px' }, children: [_jsx(Avatar, { name: "Cube", shape: "cube", color: "#CCFF00" }), _jsx(Avatar, { name: "Pyramid", shape: "pyramid", color: "#FF10F0" }), _jsx(Avatar, { name: "Sphere", shape: "sphere", color: "#00FFFF" }), _jsx(Avatar, { name: "Diamond", shape: "diamond", color: "#9D00FF" })] })),
};
export const AllSizes = {
    render: () => (_jsxs("div", { style: { display: 'flex', gap: '32px', alignItems: 'flex-end' }, children: [_jsx(Avatar, { name: "Small", size: "sm", color: "#CCFF00" }), _jsx(Avatar, { name: "Medium", size: "md", color: "#CCFF00" }), _jsx(Avatar, { name: "Large", size: "lg", color: "#CCFF00" }), _jsx(Avatar, { name: "XL", size: "xl", color: "#CCFF00" })] })),
};
export const VIP = {
    args: {
        name: 'Host',
        shape: 'diamond',
        color: '#FFD700',
        size: 'lg',
        isVIP: true,
    },
};
export const DJ = {
    args: {
        name: 'DJ Mike',
        shape: 'sphere',
        color: '#9D00FF',
        size: 'lg',
        isDJ: true,
    },
};
export const Drinking = {
    args: {
        name: 'Party Pete',
        shape: 'cube',
        color: '#FF10F0',
        size: 'lg',
        isDrinking: true,
    },
};
export const AllBadges = {
    args: {
        name: 'Legend',
        shape: 'diamond',
        color: '#CCFF00',
        size: 'xl',
        isVIP: true,
        isDJ: true,
        isDrinking: true,
    },
};
export const PlayerGrid = {
    render: () => (_jsxs("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }, children: [_jsx(Avatar, { name: "Alice", shape: "cube", color: "#CCFF00", isVIP: true }), _jsx(Avatar, { name: "Bob", shape: "pyramid", color: "#FF10F0", isDrinking: true }), _jsx(Avatar, { name: "Charlie", shape: "sphere", color: "#00FFFF" }), _jsx(Avatar, { name: "Diana", shape: "diamond", color: "#9D00FF", isDJ: true }), _jsx(Avatar, { name: "Eve", shape: "cube", color: "#FF10F0", isDrinking: true }), _jsx(Avatar, { name: "Frank", shape: "pyramid", color: "#CCFF00" }), _jsx(Avatar, { name: "Grace", shape: "sphere", color: "#9D00FF", isDrinking: true }), _jsx(Avatar, { name: "Henry", shape: "diamond", color: "#00FFFF" })] })),
};
//# sourceMappingURL=Avatar.stories.js.map