import type { Meta, StoryObj } from '@storybook/react';
import { LiquidBackground } from './LiquidBackground';
import { PixiDecorator } from '../utils/PixiDecorator';

const meta = {
  title: 'Pixi/Effects/LiquidBackground',
  component: LiquidBackground,
  decorators: [
    PixiDecorator({
      width: 800,
      height: 600,
      backgroundColor: 0x000000,
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    primaryColor: { control: 'color' },
    secondaryColor: { control: 'color' },
    accentColor: { control: 'color' },
    speed: { control: { type: 'range', min: 0.1, max: 3, step: 0.1 } },
    blobCount: { control: { type: 'range', min: 1, max: 10, step: 1 } },
  },
} satisfies Meta<typeof LiquidBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    primaryColor: 0xccff00,
    secondaryColor: 0xff10f0,
    accentColor: 0x9d00ff,
    speed: 1,
    blobCount: 5,
    width: 800,
    height: 600,
  },
};

export const AcidGreen: Story = {
  args: {
    primaryColor: 0xccff00,
    secondaryColor: 0x99cc00,
    accentColor: 0x66ff00,
    speed: 0.8,
    blobCount: 4,
    width: 800,
    height: 600,
  },
};

export const HotPink: Story = {
  args: {
    primaryColor: 0xff10f0,
    secondaryColor: 0xff00aa,
    accentColor: 0xff0066,
    speed: 1.2,
    blobCount: 6,
    width: 800,
    height: 600,
  },
};

export const Cyberpunk: Story = {
  args: {
    primaryColor: 0x00ffff,
    secondaryColor: 0xff10f0,
    accentColor: 0xccff00,
    speed: 1,
    blobCount: 5,
    width: 800,
    height: 600,
  },
};

export const SlowDrift: Story = {
  args: {
    primaryColor: 0xccff00,
    secondaryColor: 0xff10f0,
    accentColor: 0x9d00ff,
    speed: 0.3,
    blobCount: 3,
    width: 800,
    height: 600,
  },
};

export const Chaotic: Story = {
  args: {
    primaryColor: 0xccff00,
    secondaryColor: 0xff10f0,
    accentColor: 0x00ffff,
    speed: 2.5,
    blobCount: 8,
    width: 800,
    height: 600,
  },
};
