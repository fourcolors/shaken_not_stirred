import type { Meta, StoryObj } from '@storybook/react';
import { PlayerCard } from './PlayerCard';

const meta = {
  title: 'Molecules/PlayerCard',
  component: PlayerCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PlayerCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Player 1',
    shape: 'cube',
    color: '#CCFF00',
  },
};

export const WithScore: Story = {
  args: {
    name: 'Alice',
    shape: 'pyramid',
    color: '#FF10F0',
    score: 1500,
    rank: 1,
  },
};

export const WithScoreDelta: Story = {
  args: {
    name: 'Bob',
    shape: 'sphere',
    color: '#00FFFF',
    score: 2350,
    scoreDelta: 500,
    rank: 2,
  },
};

export const NegativeDelta: Story = {
  args: {
    name: 'Charlie',
    shape: 'diamond',
    color: '#9D00FF',
    score: 800,
    scoreDelta: -200,
    rank: 5,
  },
};

export const VIPPlayer: Story = {
  args: {
    name: 'Host',
    shape: 'diamond',
    color: '#FFD700',
    score: 0,
    isVIP: true,
  },
};

export const ActivePlayer: Story = {
  args: {
    name: 'Current Turn',
    shape: 'cube',
    color: '#CCFF00',
    score: 1200,
    isActive: true,
  },
};

export const SubmittedPlayer: Story = {
  args: {
    name: 'Done!',
    shape: 'pyramid',
    color: '#FF10F0',
    hasSubmitted: true,
  },
};

export const Leaderboard: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <PlayerCard
        name="Alice"
        shape="diamond"
        color="#FFD700"
        score={3500}
        scoreDelta={800}
        rank={1}
        isVIP
      />
      <PlayerCard
        name="Bob"
        shape="pyramid"
        color="#C0C0C0"
        score={2800}
        scoreDelta={400}
        rank={2}
      />
      <PlayerCard
        name="Charlie"
        shape="cube"
        color="#CD7F32"
        score={2200}
        scoreDelta={200}
        rank={3}
      />
    </div>
  ),
};

export const LobbyGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
      <PlayerCard name="Alice" shape="cube" color="#CCFF00" isVIP />
      <PlayerCard name="Bob" shape="pyramid" color="#FF10F0" isDrinking />
      <PlayerCard name="Charlie" shape="sphere" color="#00FFFF" hasSubmitted />
      <PlayerCard name="Diana" shape="diamond" color="#9D00FF" isDJ />
      <PlayerCard name="Eve" shape="cube" color="#FF10F0" hasSubmitted />
      <PlayerCard name="Frank" shape="pyramid" color="#CCFF00" />
      <PlayerCard name="Grace" shape="sphere" color="#9D00FF" isDrinking hasSubmitted />
      <PlayerCard name="Henry" shape="diamond" color="#00FFFF" isActive />
    </div>
  ),
};
