import type { Meta, StoryObj } from '@storybook/react';
import { GameIntro } from './GameIntro';

const meta = {
  title: 'Organisms/Game/Intro',
  component: GameIntro,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GameIntro>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Round1: Story = {
  args: {
    roundNumber: 1,
    totalRounds: 5,
    duration: 10000, // Extended for demo
  },
};

export const Round3WithTheme: Story = {
  args: {
    roundNumber: 3,
    totalRounds: 5,
    theme: '🔥 Spicy Confessions',
    duration: 10000,
  },
};

export const FinalRound: Story = {
  args: {
    roundNumber: 5,
    totalRounds: 5,
    theme: '🏆 Championship Round',
    duration: 10000,
  },
};

export const DoubleDigits: Story = {
  args: {
    roundNumber: 10,
    totalRounds: 10,
    duration: 10000,
  },
};
