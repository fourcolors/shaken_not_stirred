import React from 'react';
import { PhysicsBody } from './PhysicsBody';

export type AvatarShape = 'cube' | 'pyramid' | 'sphere' | 'diamond';

export interface AvatarBodyProps {
  /** Initial x position */
  x: number;
  /** Initial y position */
  y: number;
  /** Avatar shape */
  shape: AvatarShape;
  /** Avatar size */
  size?: number;
  /** Avatar color */
  color?: number;
  /** Enable randomized bouncing */
  enableBounce?: boolean;
  /** Debug mode */
  debug?: boolean;
}

/**
 * Avatar-specific physics body with shape-based physics and randomized bouncing.
 *
 * @example
 * ```tsx
 * <AvatarBody x={100} y={100} shape="sphere" color={0xff10f0} />
 * <AvatarBody x={200} y={100} shape="cube" enableBounce />
 * ```
 */
export const AvatarBody: React.FC<AvatarBodyProps> = ({
  x,
  y,
  shape,
  size = 50,
  color = 0xccff00,
  enableBounce = true,
  debug = false,
}) => {
  // Generate randomized initial velocity for bouncing effect
  const getRandomVelocity = () => {
    if (!enableBounce) {
      return { x: 0, y: 0 };
    }

    const speed = 2 + Math.random() * 3; // 2-5 units/second
    const angle = Math.random() * Math.PI * 2; // Random direction

    return {
      x: Math.cos(angle) * speed,
      y: Math.sin(angle) * speed,
    };
  };

  // Map avatar shapes to physics bodies
  const getPhysicsConfig = () => {
    const velocity = getRandomVelocity();

    switch (shape) {
      case 'sphere':
        // Circle physics for sphere
        return {
          shape: 'circle' as const,
          width: size,
          height: size,
          restitution: 0.9, // Very bouncy
          friction: 0.005,
          velocity,
        };

      case 'cube':
        // Square physics for cube
        return {
          shape: 'rectangle' as const,
          width: size,
          height: size,
          restitution: 0.7, // Moderately bouncy
          friction: 0.01,
          velocity,
        };

      case 'pyramid':
        // Triangle-ish (use rectangle but with different restitution)
        return {
          shape: 'rectangle' as const,
          width: size,
          height: size * 0.866, // √3/2 for triangle aspect
          restitution: 0.75,
          friction: 0.015,
          velocity,
        };

      case 'diamond':
        // Diamond (rotated square physics)
        return {
          shape: 'rectangle' as const,
          width: size * 0.7,
          height: size * 0.7,
          restitution: 0.85,
          friction: 0.008,
          velocity,
        };

      default:
        return {
          shape: 'rectangle' as const,
          width: size,
          height: size,
          restitution: 0.8,
          friction: 0.01,
          velocity,
        };
    }
  };

  const physicsConfig = getPhysicsConfig();

  if (debug) {
    console.log('[AvatarBody] Created avatar', {
      shape,
      x,
      y,
      size,
      velocity: physicsConfig.velocity,
    });
  }

  return (
    <PhysicsBody
      x={x}
      y={y}
      width={physicsConfig.width}
      height={physicsConfig.height}
      shape={physicsConfig.shape}
      restitution={physicsConfig.restitution}
      friction={physicsConfig.friction}
      color={color}
      velocity={physicsConfig.velocity}
      debug={debug}
    />
  );
};

export default AvatarBody;
