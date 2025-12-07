import type { Meta, StoryObj } from '@storybook/react';
import { PhysicsWorld } from './PhysicsWorld';
import { AvatarBody } from './AvatarBody';
import { PixiDecorator } from '../utils/PixiDecorator';

const meta = {
  title: 'Pixi/Physics/PhysicsWorld',
  component: PhysicsWorld,
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
    width: { control: { type: 'range', min: 400, max: 1920, step: 100 } },
    height: { control: { type: 'range', min: 300, max: 1080, step: 100 } },
    debug: { control: 'boolean' },
  },
} satisfies Meta<typeof PhysicsWorld>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default bouncing avatars demo with various shapes
 */
export const Default: Story = {
  args: {
    width: 800,
    height: 600,
    gravity: { x: 0, y: 1 },
    debug: false,
  },
  render: (args) => (
    <PhysicsWorld {...args}>
      {/* Spheres - most bouncy */}
      <AvatarBody x={150} y={100} shape="sphere" color={0xff10f0} size={50} />
      <AvatarBody x={650} y={100} shape="sphere" color={0xff10f0} size={60} />

      {/* Cubes - moderate bounce */}
      <AvatarBody x={250} y={150} shape="cube" color={0xccff00} size={55} />
      <AvatarBody x={550} y={150} shape="cube" color={0xccff00} size={45} />

      {/* Pyramids */}
      <AvatarBody x={350} y={200} shape="pyramid" color={0x9d00ff} size={50} />
      <AvatarBody x={450} y={200} shape="pyramid" color={0x9d00ff} size={55} />

      {/* Diamonds */}
      <AvatarBody x={200} y={250} shape="diamond" color={0x00ffff} size={48} />
      <AvatarBody x={600} y={250} shape="diamond" color={0x00ffff} size={52} />
    </PhysicsWorld>
  ),
};

/**
 * Many avatars bouncing around
 */
export const ManyAvatars: Story = {
  args: {
    width: 800,
    height: 600,
    gravity: { x: 0, y: 1 },
    debug: false,
  },
  render: (args) => {
    const shapes: Array<'cube' | 'pyramid' | 'sphere' | 'diamond'> = [
      'cube',
      'pyramid',
      'sphere',
      'diamond',
    ];
    const colors = [0xccff00, 0xff10f0, 0x9d00ff, 0x00ffff];

    const avatars = Array.from({ length: 20 }, (_, i) => ({
      x: 100 + (i % 7) * 100,
      y: 50 + Math.floor(i / 7) * 80,
      shape: shapes[i % shapes.length],
      color: colors[i % colors.length],
      size: 40 + Math.random() * 20,
    }));

    return (
      <PhysicsWorld {...args}>
        {avatars.map((avatar, i) => (
          <AvatarBody key={i} {...avatar} />
        ))}
      </PhysicsWorld>
    );
  },
};

/**
 * Zero gravity - avatars float freely
 */
export const ZeroGravity: Story = {
  args: {
    width: 800,
    height: 600,
    gravity: { x: 0, y: 0 },
    debug: false,
  },
  render: (args) => (
    <PhysicsWorld {...args}>
      <AvatarBody x={200} y={300} shape="sphere" color={0xff10f0} size={50} />
      <AvatarBody x={400} y={300} shape="cube" color={0xccff00} size={50} />
      <AvatarBody x={600} y={300} shape="diamond" color={0x00ffff} size={50} />
    </PhysicsWorld>
  ),
};

/**
 * High gravity - avatars fall quickly
 */
export const HighGravity: Story = {
  args: {
    width: 800,
    height: 600,
    gravity: { x: 0, y: 2.5 },
    debug: false,
  },
  render: (args) => (
    <PhysicsWorld {...args}>
      <AvatarBody x={200} y={100} shape="sphere" color={0xff10f0} size={50} />
      <AvatarBody x={400} y={100} shape="cube" color={0xccff00} size={50} />
      <AvatarBody x={600} y={100} shape="pyramid" color={0x9d00ff} size={50} />
    </PhysicsWorld>
  ),
};

/**
 * Horizontal gravity - avatars bounce sideways
 */
export const SideGravity: Story = {
  args: {
    width: 800,
    height: 600,
    gravity: { x: 1, y: 0 },
    debug: false,
  },
  render: (args) => (
    <PhysicsWorld {...args}>
      <AvatarBody x={100} y={200} shape="sphere" color={0xff10f0} size={50} />
      <AvatarBody x={100} y={300} shape="cube" color={0xccff00} size={50} />
      <AvatarBody x={100} y={400} shape="diamond" color={0x00ffff} size={50} />
    </PhysicsWorld>
  ),
};

/**
 * Acid Lounge colors - cyberpunk theme
 */
export const AcidLounge: Story = {
  args: {
    width: 800,
    height: 600,
    gravity: { x: 0, y: 1 },
    debug: false,
  },
  render: (args) => (
    <PhysicsWorld {...args}>
      {/* Acid green spheres */}
      <AvatarBody x={150} y={100} shape="sphere" color={0xccff00} size={55} />
      <AvatarBody x={650} y={150} shape="sphere" color={0xccff00} size={48} />

      {/* Hot pink cubes */}
      <AvatarBody x={250} y={120} shape="cube" color={0xff10f0} size={52} />
      <AvatarBody x={550} y={180} shape="cube" color={0xff10f0} size={45} />

      {/* Purple pyramids */}
      <AvatarBody x={350} y={140} shape="pyramid" color={0x9d00ff} size={50} />
      <AvatarBody x={450} y={160} shape="pyramid" color={0x9d00ff} size={58} />

      {/* Cyan diamonds */}
      <AvatarBody x={400} y={100} shape="diamond" color={0x00ffff} size={46} />
      <AvatarBody x={200} y={200} shape="diamond" color={0x00ffff} size={54} />
    </PhysicsWorld>
  ),
};

/**
 * No bounce - avatars don't have initial velocity
 */
export const NoBounce: Story = {
  args: {
    width: 800,
    height: 600,
    gravity: { x: 0, y: 1 },
    debug: false,
  },
  render: (args) => (
    <PhysicsWorld {...args}>
      <AvatarBody
        x={200}
        y={100}
        shape="sphere"
        color={0xff10f0}
        enableBounce={false}
      />
      <AvatarBody
        x={400}
        y={100}
        shape="cube"
        color={0xccff00}
        enableBounce={false}
      />
      <AvatarBody
        x={600}
        y={100}
        shape="diamond"
        color={0x00ffff}
        enableBounce={false}
      />
    </PhysicsWorld>
  ),
};
