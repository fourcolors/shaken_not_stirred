/// <reference path="./jsx.d.ts" />
import React, { useEffect, useRef, useState } from 'react';
import { extend } from '@pixi/react';
import { Graphics } from 'pixi.js';
import Matter from 'matter-js';
import { usePhysics } from './PhysicsWorld';

// Extend @pixi/react with Pixi.js Graphics
extend({ Graphics });

export interface PhysicsBodyProps {
  /** Initial x position */
  x: number;
  /** Initial y position */
  y: number;
  /** Body width */
  width: number;
  /** Body height */
  height: number;
  /** Whether the body is static (doesn't move) */
  isStatic?: boolean;
  /** Bounciness (0 = no bounce, 1 = perfect bounce) */
  restitution?: number;
  /** Friction coefficient */
  friction?: number;
  /** Fill color */
  color?: number;
  /** Initial velocity */
  velocity?: { x: number; y: number };
  /** Body shape */
  shape?: 'rectangle' | 'circle';
  /** Enable debug rendering */
  debug?: boolean;
}

/**
 * Generic physics body component that syncs Matter.js physics with Pixi rendering.
 *
 * @example
 * ```tsx
 * <PhysicsBody
 *   x={100}
 *   y={100}
 *   width={50}
 *   height={50}
 *   restitution={0.8}
 *   color={0xff0000}
 * />
 * ```
 */
export const PhysicsBody: React.FC<PhysicsBodyProps> = ({
  x,
  y,
  width,
  height,
  isStatic = false,
  restitution = 0.8,
  friction = 0.01,
  color = 0xccff00,
  velocity = { x: 0, y: 0 },
  shape = 'rectangle',
  debug = false,
}) => {
  const { engine, world } = usePhysics();
  const bodyRef = useRef<Matter.Body | null>(null);
  const [position, setPosition] = useState({ x, y });
  const [rotation, setRotation] = useState(0);

  // Create Matter.js body
  useEffect(() => {
    let body: Matter.Body;

    if (shape === 'circle') {
      const radius = Math.min(width, height) / 2;
      body = Matter.Bodies.circle(x, y, radius, {
        isStatic,
        restitution,
        friction,
        frictionAir: 0.01,
        density: 0.001,
      });
    } else {
      body = Matter.Bodies.rectangle(x, y, width, height, {
        isStatic,
        restitution,
        friction,
        frictionAir: 0.01,
        density: 0.001,
      });
    }

    // Set initial velocity
    Matter.Body.setVelocity(body, velocity);

    // Add to world
    Matter.World.add(world, body);
    bodyRef.current = body;

    if (debug) {
      console.log('[PhysicsBody] Created body', { x, y, width, height, shape });
    }

    // Cleanup
    return () => {
      if (bodyRef.current) {
        Matter.World.remove(world, bodyRef.current);
        bodyRef.current = null;
      }
    };
  }, []); // Only create once

  // Sync physics to rendering
  useEffect(() => {
    const updatePosition = () => {
      if (bodyRef.current) {
        setPosition({
          x: bodyRef.current.position.x,
          y: bodyRef.current.position.y,
        });
        setRotation(bodyRef.current.angle);
      }
    };

    // Update on every physics step
    Matter.Events.on(engine, 'afterUpdate', updatePosition);

    return () => {
      Matter.Events.off(engine, 'afterUpdate', updatePosition);
    };
  }, [engine]);

  // Draw function
  const draw = React.useCallback(
    (g: Graphics) => {
      g.clear();
      g.beginFill(color);

      if (shape === 'circle') {
        const radius = Math.min(width, height) / 2;
        g.drawCircle(0, 0, radius);
      } else {
        g.drawRect(-width / 2, -height / 2, width, height);
      }

      g.endFill();
    },
    [color, width, height, shape]
  );

  return (
    <pixiGraphics
      draw={draw}
      x={position.x}
      y={position.y}
      rotation={rotation}
    />
  );
};

export default PhysicsBody;
