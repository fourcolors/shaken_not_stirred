import type { Meta, StoryObj } from '@storybook/react';
import { ShakeSubmit } from './ShakeSubmit';

const meta = {
  title: 'Organisms/Phone/ShakeSubmit',
  component: ShakeSubmit,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ShakeSubmit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Start: Story = {
  args: {
    progress: 0,
    targetShakes: 50,
    currentShakes: 0,
  },
};

export const InProgress: Story = {
  args: {
    progress: 45,
    targetShakes: 50,
    currentShakes: 22,
  },
};

export const AlmostDone: Story = {
  args: {
    progress: 90,
    targetShakes: 50,
    currentShakes: 45,
  },
};

export const Complete: Story = {
  args: {
    progress: 100,
    targetShakes: 50,
    currentShakes: 50,
    isComplete: true,
  },
};
