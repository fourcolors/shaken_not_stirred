import type { Meta, StoryObj } from '@storybook/react';
import { WaitingScreen } from './WaitingScreen';

const meta = {
  title: 'Organisms/Phone/WaitingScreen',
  component: WaitingScreen,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof WaitingScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Voting: Story = {
  args: {
    reason: 'voting',
    playerShape: 'cube',
    playerColor: '#CCFF00',
  },
};

export const Results: Story = {
  args: {
    reason: 'results',
    playerShape: 'pyramid',
    playerColor: '#FF10F0',
  },
};

export const NextRound: Story = {
  args: {
    reason: 'next-round',
    playerShape: 'sphere',
    playerColor: '#00FFFF',
  },
};

export const OtherPlayers: Story = {
  args: {
    reason: 'other-players',
    playerShape: 'diamond',
    playerColor: '#9D00FF',
  },
};

export const Host: Story = {
  args: {
    reason: 'host',
    playerShape: 'cube',
    playerColor: '#CCFF00',
  },
};

export const CustomMessage: Story = {
  args: {
    reason: 'host',
    message: 'The DJ is picking the next song!',
    playerShape: 'sphere',
    playerColor: '#FF10F0',
  },
};
