import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography } from './Typography';
const meta = {
    title: 'Atoms/Typography',
    component: Typography,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export const Hero = {
    args: {
        variant: 'hero',
        children: 'SHAKEN NOT STIRRED',
        glow: true,
    },
};
export const HeroKinetic = {
    args: {
        variant: 'hero',
        children: 'ROUND 1',
        glow: true,
        kinetic: true,
    },
};
export const Headings = {
    render: () => (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '24px' }, children: [_jsx(Typography, { variant: "h1", children: "Heading 1" }), _jsx(Typography, { variant: "h2", children: "Heading 2" }), _jsx(Typography, { variant: "h3", children: "Heading 3" }), _jsx(Typography, { variant: "h4", children: "Heading 4" })] })),
};
export const Body = {
    args: {
        variant: 'body',
        children: 'This is body text. The quick brown fox jumps over the lazy dog.',
    },
};
export const Colors = {
    render: () => (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px' }, children: [_jsx(Typography, { color: "primary", children: "Primary Text" }), _jsx(Typography, { color: "secondary", children: "Secondary Text" }), _jsx(Typography, { color: "muted", children: "Muted Text" }), _jsx(Typography, { color: "accent", glow: true, children: "Accent with Glow" }), _jsx(Typography, { color: "success", glow: true, children: "Success Message" }), _jsx(Typography, { color: "error", glow: true, children: "Error Message" })] })),
};
export const GlowingTitle = {
    args: {
        variant: 'h1',
        children: 'VIVA LOUNGE',
        glow: true,
        color: 'accent',
        align: 'center',
    },
};
export const AllVariants = {
    render: () => (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '600px' }, children: [_jsx(Typography, { variant: "hero", glow: true, children: "Hero" }), _jsx(Typography, { variant: "h1", children: "Heading 1" }), _jsx(Typography, { variant: "h2", children: "Heading 2" }), _jsx(Typography, { variant: "h3", children: "Heading 3" }), _jsx(Typography, { variant: "h4", children: "Heading 4" }), _jsx(Typography, { variant: "body", children: "Body text for paragraphs and content." }), _jsx(Typography, { variant: "body-sm", children: "Smaller body text for secondary content." }), _jsx(Typography, { variant: "caption", color: "muted", children: "Caption text for metadata" }), _jsx(Typography, { variant: "label", children: "Label Text" })] })),
};
//# sourceMappingURL=Typography.stories.js.map