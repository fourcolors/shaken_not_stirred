import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PlayerCard } from './PlayerCard';
const meta = {
    title: 'Molecules/PlayerCard',
    component: PlayerCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    args: {
        name: 'Player 1',
        shape: 'cube',
        color: '#CCFF00',
    },
};
export const WithScore = {
    args: {
        name: 'Alice',
        shape: 'pyramid',
        color: '#FF10F0',
        score: 1500,
        rank: 1,
    },
};
export const WithScoreDelta = {
    args: {
        name: 'Bob',
        shape: 'sphere',
        color: '#00FFFF',
        score: 2350,
        scoreDelta: 500,
        rank: 2,
    },
};
export const NegativeDelta = {
    args: {
        name: 'Charlie',
        shape: 'diamond',
        color: '#9D00FF',
        score: 800,
        scoreDelta: -200,
        rank: 5,
    },
};
export const VIPPlayer = {
    args: {
        name: 'Host',
        shape: 'diamond',
        color: '#FFD700',
        score: 0,
        isVIP: true,
    },
};
export const ActivePlayer = {
    args: {
        name: 'Current Turn',
        shape: 'cube',
        color: '#CCFF00',
        score: 1200,
        isActive: true,
    },
};
export const SubmittedPlayer = {
    args: {
        name: 'Done!',
        shape: 'pyramid',
        color: '#FF10F0',
        hasSubmitted: true,
    },
};
export const Leaderboard = {
    render: () => (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px' }, children: [_jsx(PlayerCard, { name: "Alice", shape: "diamond", color: "#FFD700", score: 3500, scoreDelta: 800, rank: 1, isVIP: true }), _jsx(PlayerCard, { name: "Bob", shape: "pyramid", color: "#C0C0C0", score: 2800, scoreDelta: 400, rank: 2 }), _jsx(PlayerCard, { name: "Charlie", shape: "cube", color: "#CD7F32", score: 2200, scoreDelta: 200, rank: 3 })] })),
};
export const LobbyGrid = {
    render: () => (_jsxs("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }, children: [_jsx(PlayerCard, { name: "Alice", shape: "cube", color: "#CCFF00", isVIP: true }), _jsx(PlayerCard, { name: "Bob", shape: "pyramid", color: "#FF10F0", isDrinking: true }), _jsx(PlayerCard, { name: "Charlie", shape: "sphere", color: "#00FFFF", hasSubmitted: true }), _jsx(PlayerCard, { name: "Diana", shape: "diamond", color: "#9D00FF", isDJ: true }), _jsx(PlayerCard, { name: "Eve", shape: "cube", color: "#FF10F0", hasSubmitted: true }), _jsx(PlayerCard, { name: "Frank", shape: "pyramid", color: "#CCFF00" }), _jsx(PlayerCard, { name: "Grace", shape: "sphere", color: "#9D00FF", isDrinking: true, hasSubmitted: true }), _jsx(PlayerCard, { name: "Henry", shape: "diamond", color: "#00FFFF", isActive: true })] })),
};
//# sourceMappingURL=PlayerCard.stories.js.map