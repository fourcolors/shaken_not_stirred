import type { Meta, StoryObj } from '@storybook/react';
import { SpotifyAuth } from './SpotifyAuth';

const meta = {
  title: 'Organisms/Host/SpotifyAuth',
  component: SpotifyAuth,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SpotifyAuth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Idle: Story = {
  args: {
    state: 'idle',
  },
};

export const Connecting: Story = {
  args: {
    state: 'connecting',
  },
};

export const Success: Story = {
  args: {
    state: 'success',
    accountName: 'DJ_PartyVibes',
  },
};

export const Error: Story = {
  args: {
    state: 'error',
    errorMessage: 'Authentication was cancelled. Please try again.',
  },
};
