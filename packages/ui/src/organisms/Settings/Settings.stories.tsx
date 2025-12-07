import type { Meta, StoryObj } from '@storybook/react';
import { Settings } from './Settings';

const defaultSettings = {
  rounds: 5,
  timeLimit: 60,
  drinkingMode: false,
  djMode: false,
  contentFilter: 'adult' as const,
};

const meta = {
  title: 'Organisms/Host/Settings',
  component: Settings,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Settings>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    settings: defaultSettings,
    isOpen: true,
  },
};

export const WithSpotify: Story = {
  args: {
    settings: { ...defaultSettings, djMode: true },
    spotifyConnected: true,
    isOpen: true,
  },
};

export const FamilyMode: Story = {
  args: {
    settings: { ...defaultSettings, contentFilter: 'family', drinkingMode: false },
    isOpen: true,
  },
};

export const SpicyParty: Story = {
  args: {
    settings: {
      rounds: 8,
      timeLimit: 45,
      drinkingMode: true,
      djMode: true,
      contentFilter: 'spicy',
    },
    spotifyConnected: true,
    isOpen: true,
  },
};
