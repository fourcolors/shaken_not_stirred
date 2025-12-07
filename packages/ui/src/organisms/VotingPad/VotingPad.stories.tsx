import type { Meta, StoryObj } from '@storybook/react';
import { VotingPad } from './VotingPad';

const meta = {
  title: 'Organisms/Phone/VotingPad',
  component: VotingPad,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof VotingPad>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    prompt: 'What would you do with a million dollars?',
    answerA: 'Buy a private island and name it after my cat',
    answerB: 'Open a 24/7 taco truck that only plays 80s music',
    timeRemaining: 12,
    totalTime: 15,
  },
};

export const ShortAnswers: Story = {
  args: {
    prompt: 'Best pizza topping?',
    answerA: 'Pineapple forever!',
    answerB: 'Pepperoni gang',
    timeRemaining: 10,
    totalTime: 15,
  },
};

export const LongAnswers: Story = {
  args: {
    prompt: 'Describe your dream vacation',
    answerA: 'Backpacking through Europe with nothing but a camera and good vibes',
    answerB: 'Luxury resort with unlimited spa treatments and room service',
    timeRemaining: 8,
    totalTime: 15,
  },
};

export const Voted: Story = {
  args: {
    prompt: 'What would you do with a million dollars?',
    answerA: 'Answer A',
    answerB: 'Answer B',
    timeRemaining: 5,
    totalTime: 15,
    hasVoted: true,
  },
};
