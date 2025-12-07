import type { Meta, StoryObj } from '@storybook/react';
import { PhoneFlow } from './PhoneFlow';

const meta = {
  title: 'Templates/PhoneFlow',
  component: PhoneFlow,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PhoneFlow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Landing: Story = {
  args: {},
};

export const WithPlayer: Story = {
  args: {
    playerId: 'player-1',
  },
};

// Note: PhoneFlow renders based on global game state.
// Use game-logic actions to change phases for testing.
