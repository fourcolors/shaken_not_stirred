import type { Meta, StoryObj } from '@storybook/react';
import { PhoneLanding } from './PhoneLanding';

const meta = {
  title: 'Organisms/Phone/Landing',
  component: PhoneLanding,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PhoneLanding>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    mode: 'join',
  },
};

export const WithCode: Story = {
  args: {
    mode: 'join',
    initialRoomCode: 'VIVA',
  },
};

export const PartialCode: Story = {
  args: {
    mode: 'join',
    initialRoomCode: 'VI',
  },
};

export const Connecting: Story = {
  args: {
    mode: 'join',
    initialRoomCode: 'VIVA',
    isConnecting: true,
  },
};

export const Error: Story = {
  args: {
    mode: 'join',
    initialRoomCode: 'FAKE',
    errorMessage: 'Room not found. Check the code and try again.',
  },
};

export const Rejoin: Story = {
  args: {
    mode: 'rejoin',
    previousName: 'PartyAnimal',
  },
};

export const JoinWithRejoinOption: Story = {
  args: {
    mode: 'join',
    previousName: 'PartyAnimal',
  },
};
