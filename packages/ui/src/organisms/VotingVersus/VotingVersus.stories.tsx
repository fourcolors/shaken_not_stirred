import type { Meta, StoryObj } from '@storybook/react';
import { VotingVersus } from './VotingVersus';

const answerA = {
  playerId: '1',
  playerName: 'Alice',
  avatarShape: 'cube' as const,
  avatarColor: '#CCFF00',
  answer: 'Dancing in the rain with my cat',
};

const answerB = {
  playerId: '2',
  playerName: 'Bob',
  avatarShape: 'pyramid' as const,
  avatarColor: '#FF10F0',
  answer: 'Eating pizza on a rollercoaster',
};

const meta = {
  title: 'Organisms/Game/VotingVersus',
  component: VotingVersus,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof VotingVersus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Voting: Story = {
  args: {
    prompt: 'What would you do with a million dollars?',
    answerA,
    answerB,
    timeRemaining: 15,
    totalTime: 20,
  },
};

export const VotingEnding: Story = {
  args: {
    prompt: 'What would you do with a million dollars?',
    answerA,
    answerB,
    timeRemaining: 3,
    totalTime: 20,
  },
};

export const RevealWinnerA: Story = {
  args: {
    prompt: 'What would you do with a million dollars?',
    answerA,
    answerB,
    timeRemaining: 0,
    totalTime: 20,
    votesA: 5,
    votesB: 3,
    showVotes: true,
    winnerId: '1',
  },
};

export const RevealWinnerB: Story = {
  args: {
    prompt: 'What would you do with a million dollars?',
    answerA,
    answerB,
    timeRemaining: 0,
    totalTime: 20,
    votesA: 2,
    votesB: 6,
    showVotes: true,
    winnerId: '2',
  },
};

export const Tie: Story = {
  args: {
    prompt: 'What would you do with a million dollars?',
    answerA,
    answerB,
    timeRemaining: 0,
    totalTime: 20,
    votesA: 4,
    votesB: 4,
    showVotes: true,
  },
};
