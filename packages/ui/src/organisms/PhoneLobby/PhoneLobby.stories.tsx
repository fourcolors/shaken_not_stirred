import type { Meta, StoryObj } from '@storybook/react';
import { PhoneLobby } from './PhoneLobby';

const mockPlayers = [
  { id: '1', name: 'Alice', avatarShape: 'cube' as const, avatarColor: '#CCFF00', isVIP: true },
  { id: '2', name: 'Bob', avatarShape: 'pyramid' as const, avatarColor: '#FF10F0' },
  { id: '3', name: 'Charlie', avatarShape: 'sphere' as const, avatarColor: '#00FFFF', isDJ: true },
  { id: '4', name: 'Diana', avatarShape: 'diamond' as const, avatarColor: '#9D00FF' },
];

const meta = {
  title: 'Organisms/Phone/Lobby',
  component: PhoneLobby,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PhoneLobby>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AsPlayer: Story = {
  args: {
    currentPlayer: mockPlayers[1],
    players: mockPlayers,
    roomCode: 'VIVA',
    role: 'player',
  },
};

export const AsVIP: Story = {
  args: {
    currentPlayer: mockPlayers[0],
    players: mockPlayers,
    roomCode: 'VIVA',
    role: 'vip',
  },
};

export const AsVIPNotEnoughPlayers: Story = {
  args: {
    currentPlayer: mockPlayers[0],
    players: mockPlayers.slice(0, 2),
    roomCode: 'VIVA',
    role: 'vip',
  },
};

export const AsDJ: Story = {
  args: {
    currentPlayer: mockPlayers[2],
    players: mockPlayers,
    roomCode: 'VIVA',
    role: 'dj',
  },
};

export const Starting: Story = {
  args: {
    currentPlayer: mockPlayers[0],
    players: mockPlayers,
    roomCode: 'VIVA',
    role: 'vip',
    isStarting: true,
  },
};
