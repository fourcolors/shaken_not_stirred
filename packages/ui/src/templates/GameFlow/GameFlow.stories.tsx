import type { Meta, StoryObj } from '@storybook/react';
import { GameFlow } from './GameFlow';

const meta = {
  title: 'Templates/GameFlow',
  component: GameFlow,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GameFlow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isHost: true,
  },
};

// Note: GameFlow renders based on global game state.
// Use game-logic actions to change phases for testing.
