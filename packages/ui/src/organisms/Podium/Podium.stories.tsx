import type { Meta, StoryObj } from '@storybook/react';
import { Podium } from './Podium';

const mockWinners: [any, any, any] = [
  { id: '1', name: 'Alice', avatarShape: 'cube' as const, avatarColor: '#CCFF00', score: 500, rank: 1 as const },
  { id: '2', name: 'Bob', avatarShape: 'pyramid' as const, avatarColor: '#FF10F0', score: 420, rank: 2 as const },
  { id: '3', name: 'Charlie', avatarShape: 'sphere' as const, avatarColor: '#00FFFF', score: 350, rank: 3 as const },
];

const meta = {
  title: 'Organisms/Game/Podium',
  component: Podium,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Podium>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    winners: mockWinners,
  },
};

export const CloseScores: Story = {
  args: {
    winners: [
      { ...mockWinners[0], score: 500 },
      { ...mockWinners[1], score: 495 },
      { ...mockWinners[2], score: 490 },
    ],
  },
};

export const DifferentAvatars: Story = {
  args: {
    winners: [
      { id: '1', name: 'NeonKing', avatarShape: 'diamond' as const, avatarColor: '#9D00FF', score: 750, rank: 1 as const },
      { id: '2', name: 'PartyQueen', avatarShape: 'sphere' as const, avatarColor: '#FF10F0', score: 600, rank: 2 as const },
      { id: '3', name: 'AcidDancer', avatarShape: 'pyramid' as const, avatarColor: '#CCFF00', score: 550, rank: 3 as const },
    ],
  },
};
