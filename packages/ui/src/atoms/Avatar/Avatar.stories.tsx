import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: 'select',
      options: ['cube', 'pyramid', 'sphere', 'diamond'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'color',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Player 1',
    shape: 'cube',
    color: '#CCFF00',
  },
};

export const AllShapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px' }}>
      <Avatar name="Cube" shape="cube" color="#CCFF00" />
      <Avatar name="Pyramid" shape="pyramid" color="#FF10F0" />
      <Avatar name="Sphere" shape="sphere" color="#00FFFF" />
      <Avatar name="Diamond" shape="diamond" color="#9D00FF" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-end' }}>
      <Avatar name="Small" size="sm" color="#CCFF00" />
      <Avatar name="Medium" size="md" color="#CCFF00" />
      <Avatar name="Large" size="lg" color="#CCFF00" />
      <Avatar name="XL" size="xl" color="#CCFF00" />
    </div>
  ),
};

export const VIP: Story = {
  args: {
    name: 'Host',
    shape: 'diamond',
    color: '#FFD700',
    size: 'lg',
    isVIP: true,
  },
};

export const DJ: Story = {
  args: {
    name: 'DJ Mike',
    shape: 'sphere',
    color: '#9D00FF',
    size: 'lg',
    isDJ: true,
  },
};

export const Drinking: Story = {
  args: {
    name: 'Party Pete',
    shape: 'cube',
    color: '#FF10F0',
    size: 'lg',
    isDrinking: true,
  },
};

export const AllBadges: Story = {
  args: {
    name: 'Legend',
    shape: 'diamond',
    color: '#CCFF00',
    size: 'xl',
    isVIP: true,
    isDJ: true,
    isDrinking: true,
  },
};

export const PlayerGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
      <Avatar name="Alice" shape="cube" color="#CCFF00" isVIP />
      <Avatar name="Bob" shape="pyramid" color="#FF10F0" isDrinking />
      <Avatar name="Charlie" shape="sphere" color="#00FFFF" />
      <Avatar name="Diana" shape="diamond" color="#9D00FF" isDJ />
      <Avatar name="Eve" shape="cube" color="#FF10F0" isDrinking />
      <Avatar name="Frank" shape="pyramid" color="#CCFF00" />
      <Avatar name="Grace" shape="sphere" color="#9D00FF" isDrinking />
      <Avatar name="Henry" shape="diamond" color="#00FFFF" />
    </div>
  ),
};
