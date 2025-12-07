import type { Meta, StoryObj } from '@storybook/react';
import { Reconnect } from './Reconnect';

const meta = {
  title: 'Organisms/Host/Reconnect',
  component: Reconnect,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Reconnect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Disconnected: Story = {
  args: {
    state: 'disconnected',
  },
};

export const Reconnecting: Story = {
  args: {
    state: 'reconnecting',
    attempts: 2,
    maxAttempts: 5,
  },
};

export const ReconnectingLate: Story = {
  args: {
    state: 'reconnecting',
    attempts: 4,
    maxAttempts: 5,
  },
};

export const Failed: Story = {
  args: {
    state: 'failed',
    errorMessage: 'Server timed out. The game may have ended.',
  },
};
