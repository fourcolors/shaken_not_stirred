import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta = {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hero: Story = {
  args: {
    variant: 'hero',
    children: 'SHAKEN NOT STIRRED',
    glow: true,
  },
};

export const HeroKinetic: Story = {
  args: {
    variant: 'hero',
    children: 'ROUND 1',
    glow: true,
    kinetic: true,
  },
};

export const Headings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
    </div>
  ),
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'This is body text. The quick brown fox jumps over the lazy dog.',
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography color="primary">Primary Text</Typography>
      <Typography color="secondary">Secondary Text</Typography>
      <Typography color="muted">Muted Text</Typography>
      <Typography color="accent" glow>Accent with Glow</Typography>
      <Typography color="success" glow>Success Message</Typography>
      <Typography color="error" glow>Error Message</Typography>
    </div>
  ),
};

export const GlowingTitle: Story = {
  args: {
    variant: 'h1',
    children: 'VIVA LOUNGE',
    glow: true,
    color: 'accent',
    align: 'center',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '600px' }}>
      <Typography variant="hero" glow>Hero</Typography>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="body">Body text for paragraphs and content.</Typography>
      <Typography variant="body-sm">Smaller body text for secondary content.</Typography>
      <Typography variant="caption" color="muted">Caption text for metadata</Typography>
      <Typography variant="label">Label Text</Typography>
    </div>
  ),
};
