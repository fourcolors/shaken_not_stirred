import type { Meta, StoryObj } from '@storybook/react';
import { WritingPhase } from './WritingPhase';

const mockPlayers = [
  { id: '1', name: 'Alice', avatarShape: 'cube' as const, avatarColor: '#CCFF00', hasSubmitted: true },
  { id: '2', name: 'Bob', avatarShape: 'pyramid' as const, avatarColor: '#FF10F0', hasSubmitted: true },
  { id: '3', name: 'Charlie', avatarShape: 'sphere' as const, avatarColor: '#00FFFF', hasSubmitted: false },
  { id: '4', name: 'Diana', avatarShape: 'diamond' as const, avatarColor: '#9D00FF', hasSubmitted: false },
];

const meta = {
  title: 'Organisms/Game/WritingPhase',
  component: WritingPhase,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof WritingPhase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InProgress: Story = {
  args: {
    prompt: 'What would you name your autobiography?',
    timeRemaining: 45,
    totalTime: 60,
    players: mockPlayers,
  },
};

export const MostSubmitted: Story = {
  args: {
    prompt: 'Describe your perfect vacation in 3 words',
    timeRemaining: 20,
    totalTime: 60,
    players: mockPlayers.map((p, i) => ({ ...p, hasSubmitted: i < 3 })),
  },
};

export const PanicMode: Story = {
  args: {
    prompt: 'What secret talent do you have?',
    timeRemaining: 8,
    totalTime: 60,
    players: mockPlayers,
    isPanic: true,
  },
};

export const AllSubmitted: Story = {
  args: {
    prompt: 'If you were a cocktail, what would you be?',
    timeRemaining: 30,
    totalTime: 60,
    players: mockPlayers.map((p) => ({ ...p, hasSubmitted: true })),
  },
};
