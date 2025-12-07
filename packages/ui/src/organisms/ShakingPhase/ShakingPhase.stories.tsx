import type { Meta, StoryObj } from '@storybook/react';
import { ShakingPhase } from './ShakingPhase';

const mockPlayers = [
  { id: '1', name: 'Alice', avatarShape: 'cube' as const, avatarColor: '#CCFF00', shakeProgress: 100, hasCompleted: true },
  { id: '2', name: 'Bob', avatarShape: 'pyramid' as const, avatarColor: '#FF10F0', shakeProgress: 75, hasCompleted: false },
  { id: '3', name: 'Charlie', avatarShape: 'sphere' as const, avatarColor: '#00FFFF', shakeProgress: 45, hasCompleted: false },
  { id: '4', name: 'Diana', avatarShape: 'diamond' as const, avatarColor: '#9D00FF', shakeProgress: 20, hasCompleted: false },
];

const meta = {
  title: 'Organisms/Game/ShakingPhase',
  component: ShakingPhase,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ShakingPhase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InProgress: Story = {
  args: {
    players: mockPlayers,
    targetShakes: 50,
    timeRemaining: 15,
  },
};

export const EarlyPhase: Story = {
  args: {
    players: mockPlayers.map((p) => ({ ...p, shakeProgress: Math.random() * 30, hasCompleted: false })),
    targetShakes: 50,
    timeRemaining: 25,
  },
};

export const NearlyDone: Story = {
  args: {
    players: mockPlayers.map((p, i) => ({
      ...p,
      shakeProgress: i < 3 ? 100 : 85,
      hasCompleted: i < 3,
    })),
    targetShakes: 50,
    timeRemaining: 5,
  },
};

export const AllComplete: Story = {
  args: {
    players: mockPlayers.map((p) => ({ ...p, shakeProgress: 100, hasCompleted: true })),
    targetShakes: 50,
  },
};
