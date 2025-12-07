import type { Meta, StoryObj } from '@storybook/react';
import { SplashScreen } from './SplashScreen';

const meta = {
  title: 'Organisms/Host/SplashScreen',
  component: SplashScreen,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'acid-lounge',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SplashScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    roomCode: 'VIVA',
    showQR: true,
    subtitle: 'A Party Game Experience',
  },
};

export const WithoutQR: Story = {
  args: {
    roomCode: 'SHAKE',
    showQR: false,
    subtitle: 'Join the Party',
  },
};

export const NoRoomCode: Story = {
  args: {
    showQR: true,
    subtitle: 'Scan to Create a Room',
  },
};

export const CustomSubtitle: Story = {
  args: {
    roomCode: 'ACID',
    showQR: true,
    subtitle: 'Welcome to the Viva Lounge',
  },
};

export const StreamerMode: Story = {
  args: {
    showQR: true,
    subtitle: 'Join at play.vivaLounge.gg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Streamer mode hides the room code to prevent unwanted joiners',
      },
    },
  },
};
