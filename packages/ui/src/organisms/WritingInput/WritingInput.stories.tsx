import type { Meta, StoryObj } from '@storybook/react';
import { WritingInput } from './WritingInput';

const meta = {
  title: 'Organisms/Phone/WritingInput',
  component: WritingInput,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof WritingInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    prompt: 'What would you name your autobiography?',
    timeRemaining: 45,
    totalTime: 60,
  },
};

export const ShortTime: Story = {
  args: {
    prompt: 'Describe your perfect vacation',
    timeRemaining: 15,
    totalTime: 60,
  },
};

export const Panic: Story = {
  args: {
    prompt: 'What secret talent do you have?',
    timeRemaining: 5,
    totalTime: 60,
    isPanic: true,
  },
};

export const Submitted: Story = {
  args: {
    prompt: 'What would you name your autobiography?',
    timeRemaining: 30,
    totalTime: 60,
    isSubmitted: true,
  },
};
