import type { Meta, StoryObj } from '@storybook/react';
import { RoundSummary } from './RoundSummary';

const mockPlayers = [
  { id: '1', name: 'Alice', avatarShape: 'cube' as const, avatarColor: '#CCFF00', score: 350, roundPoints: 150, rank: 1, previousRank: 2 },
  { id: '2', name: 'Bob', avatarShape: 'pyramid' as const, avatarColor: '#FF10F0', score: 300, roundPoints: 100, rank: 2, previousRank: 1 },
  { id: '3', name: 'Charlie', avatarShape: 'sphere' as const, avatarColor: '#00FFFF', score: 250, roundPoints: 50, rank: 3, previousRank: 4 },
  { id: '4', name: 'Diana', avatarShape: 'diamond' as const, avatarColor: '#9D00FF', score: 200, roundPoints: 0, rank: 4, previousRank: 3 },
];

const meta = {
  title: 'Organisms/Game/RoundSummary',
  component: RoundSummary,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RoundSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Round2: Story = {
  args: {
    roundNumber: 2,
    totalRounds: 5,
    players: mockPlayers,
  },
};

export const MidGame: Story = {
  args: {
    roundNumber: 3,
    totalRounds: 5,
    players: mockPlayers,
  },
};

export const FinalRound: Story = {
  args: {
    roundNumber: 5,
    totalRounds: 5,
    players: mockPlayers,
    isFinalRound: true,
  },
};

export const LargeGroup: Story = {
  args: {
    roundNumber: 3,
    totalRounds: 5,
    players: [
      ...mockPlayers,
      { id: '5', name: 'Eve', avatarShape: 'cube' as const, avatarColor: '#FF10F0', score: 180, roundPoints: 25, rank: 5, previousRank: 5 },
      { id: '6', name: 'Frank', avatarShape: 'pyramid' as const, avatarColor: '#CCFF00', score: 150, roundPoints: 50, rank: 6, previousRank: 7 },
      { id: '7', name: 'Grace', avatarShape: 'sphere' as const, avatarColor: '#9D00FF', score: 100, roundPoints: 0, rank: 7, previousRank: 6 },
      { id: '8', name: 'Henry', avatarShape: 'diamond' as const, avatarColor: '#00FFFF', score: 50, roundPoints: 25, rank: 8, previousRank: 8 },
    ],
  },
};
