import type { Meta, StoryObj } from '@storybook/react';
import { Lobby } from './Lobby';

const mockPlayers = [
  { id: '1', name: 'Alice', avatarShape: 'cube' as const, avatarColor: '#CCFF00', isVIP: true },
  { id: '2', name: 'Bob', avatarShape: 'pyramid' as const, avatarColor: '#FF10F0', isDrinking: true },
  { id: '3', name: 'Charlie', avatarShape: 'sphere' as const, avatarColor: '#00FFFF' },
  { id: '4', name: 'Diana', avatarShape: 'diamond' as const, avatarColor: '#9D00FF', isDJ: true },
];

const meta = {
  title: 'Organisms/Host/Lobby',
  component: Lobby,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Lobby>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    state: 'empty',
    roomCode: 'VIVA',
    players: [],
    maxPlayers: 8,
  },
};

export const Populating: Story = {
  args: {
    state: 'populating',
    roomCode: 'VIVA',
    players: mockPlayers.slice(0, 2),
    maxPlayers: 8,
  },
};

export const Ready: Story = {
  args: {
    state: 'ready',
    roomCode: 'VIVA',
    players: mockPlayers,
    maxPlayers: 8,
    isVIP: true,
  },
};

export const ReadyNotVIP: Story = {
  args: {
    state: 'ready',
    roomCode: 'VIVA',
    players: mockPlayers,
    maxPlayers: 8,
    isVIP: false,
  },
};

export const FullLobby: Story = {
  args: {
    state: 'ready',
    roomCode: 'FULL',
    players: [
      ...mockPlayers,
      { id: '5', name: 'Eve', avatarShape: 'cube' as const, avatarColor: '#FF10F0' },
      { id: '6', name: 'Frank', avatarShape: 'pyramid' as const, avatarColor: '#CCFF00' },
      { id: '7', name: 'Grace', avatarShape: 'sphere' as const, avatarColor: '#9D00FF', isDrinking: true },
      { id: '8', name: 'Henry', avatarShape: 'diamond' as const, avatarColor: '#00FFFF' },
    ],
    maxPlayers: 8,
    isVIP: true,
  },
};
