import type { Meta, StoryObj } from '@storybook/react';
import { AvatarBuilder } from './AvatarBuilder';

const meta = {
  title: 'Organisms/Phone/AvatarBuilder',
  component: AvatarBuilder,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AvatarBuilder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {},
};

export const WithName: Story = {
  args: {
    initialName: 'PartyPete',
  },
};

export const CustomAvatar: Story = {
  args: {
    initialName: 'NeonQueen',
    initialShape: 'diamond',
    initialColor: '#FF10F0',
    initialDrinking: true,
  },
};

export const Submitting: Story = {
  args: {
    initialName: 'WaitingWill',
    initialShape: 'sphere',
    initialColor: '#00FFFF',
    isSubmitting: true,
  },
};

export const Error: Story = {
  args: {
    initialName: 'BadName!!!',
    errorMessage: 'Name contains invalid characters',
  },
};
