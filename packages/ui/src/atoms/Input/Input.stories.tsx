import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your answer...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Your Name',
    placeholder: 'Enter your name',
  },
};

export const RoomCode: Story = {
  args: {
    label: 'Room Code',
    placeholder: 'ABCD',
    maxLength: 4,
    style: { textTransform: 'uppercase', textAlign: 'center', letterSpacing: '0.5em' },
  },
};

export const Error: Story = {
  args: {
    label: 'Answer',
    placeholder: 'Type your answer...',
    hasError: true,
    errorMessage: 'This answer is too short',
    defaultValue: 'Hi',
  },
};

export const PanicMode: Story = {
  args: {
    label: 'Quick! Time is running out!',
    placeholder: 'TYPE FASTER!',
    panicMode: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Panic mode activates when timer drops below 10 seconds',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input" />
      <Input size="lg" placeholder="Large input" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Locked',
    placeholder: 'Cannot edit',
    disabled: true,
    defaultValue: 'Submitted answer',
  },
};
