import type { Meta, StoryObj } from '@storybook/react';
import { Timer } from './Timer';

const meta = {
  title: 'Molecules/Timer',
  component: Timer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Timer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CircularDefault: Story = {
  args: {
    duration: 60,
    timeRemaining: 45,
    variant: 'circular',
    size: 'md',
  },
};

export const CircularPanic: Story = {
  args: {
    duration: 60,
    timeRemaining: 8,
    variant: 'circular',
    size: 'md',
    panicThreshold: 10,
  },
};

export const CircularLarge: Story = {
  args: {
    duration: 90,
    timeRemaining: 75,
    variant: 'circular',
    size: 'lg',
  },
};

export const BarDefault: Story = {
  args: {
    duration: 60,
    timeRemaining: 40,
    variant: 'bar',
    size: 'md',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const BarPanic: Story = {
  args: {
    duration: 60,
    timeRemaining: 5,
    variant: 'bar',
    size: 'md',
    panicThreshold: 10,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <Timer duration={60} timeRemaining={45} size="sm" />
      <Timer duration={60} timeRemaining={45} size="md" />
      <Timer duration={60} timeRemaining={45} size="lg" />
    </div>
  ),
};

export const ProgressStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px' }}>
      <Timer duration={60} timeRemaining={60} size="md" />
      <Timer duration={60} timeRemaining={30} size="md" />
      <Timer duration={60} timeRemaining={10} size="md" panicThreshold={10} />
      <Timer duration={60} timeRemaining={3} size="md" panicThreshold={10} />
    </div>
  ),
};

export const AutoCountdown: Story = {
  args: {
    duration: 15,
    autoStart: true,
    variant: 'circular',
    size: 'lg',
    panicThreshold: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'This timer will auto-count down from 15 seconds',
      },
    },
  },
};
