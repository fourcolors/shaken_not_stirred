/// <reference path="./jsx.d.ts" />
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { extend, useTick } from '@pixi/react';
import { Container } from 'pixi.js';
import Matter from 'matter-js';

// Extend @pixi/react with Pixi.js Container
extend({ Container });

export interface PhysicsWorldProps {
  /** Width of the physics world (container) */
  width: number;
  /** Height of the physics world (container) */
  height: number;
  /** Gravity configuration */
  gravity?: { x: number; y: number };
  /** Enable debug rendering */
  debug?: boolean;
  /** Children components */
  children?: ReactNode;
}

interface PhysicsContextValue {
  engine: Matter.Engine;
  world: Matter.World;
  width: number;
  height: number;
}

const PhysicsContext = createContext<PhysicsContextValue | null>(null);

/**
 * Hook to access the physics world context
 */
export const usePhysics = () => {
  const context = useContext(PhysicsContext);
  if (!context) {
    throw new Error('usePhysics must be used within a PhysicsWorld');
  }
  return context;
};

/**
 * PhysicsWorld component that wraps children with a Matter.js physics engine.
 * Integrates with Pixi's ticker for smooth 60fps rendering.
 *
 * @example
 * ```tsx
 * <PhysicsWorld width={800} height={600}>
 *   <AvatarBody x={100} y={100} shape="cube" />
 *   <AvatarBody x={200} y={100} shape="sphere" />
 * </PhysicsWorld>
 * ```
 */
export const PhysicsWorld: React.FC<PhysicsWorldProps> = ({
  width,
  height,
  gravity = { x: 0, y: 1 },
  debug = false,
  children,
}) => {
  const engineRef = useRef<Matter.Engine | null>(null);
  const [contextValue, setContextValue] = useState<PhysicsContextValue | null>(
    null
  );

  // Initialize physics engine
  useEffect(() => {
    // Create engine
    const engine = Matter.Engine.create({
      gravity,
    });

    engineRef.current = engine;

    // Create boundary walls
    const wallThickness = 50;
    const walls = [
      // Floor
      Matter.Bodies.rectangle(
        width / 2,
        height + wallThickness / 2,
        width,
        wallThickness,
        { isStatic: true, label: 'floor' }
      ),
      // Ceiling
      Matter.Bodies.rectangle(
        width / 2,
        -wallThickness / 2,
        width,
        wallThickness,
        { isStatic: true, label: 'ceiling' }
      ),
      // Left wall
      Matter.Bodies.rectangle(
        -wallThickness / 2,
        height / 2,
        wallThickness,
        height,
        { isStatic: true, label: 'left-wall' }
      ),
      // Right wall
      Matter.Bodies.rectangle(
        width + wallThickness / 2,
        height / 2,
        wallThickness,
        height,
        { isStatic: true, label: 'right-wall' }
      ),
    ];

    Matter.World.add(engine.world, walls);

    setContextValue({
      engine,
      world: engine.world,
      width,
      height,
    });

    if (debug) {
      console.log('[PhysicsWorld] Engine initialized', {
        width,
        height,
        gravity,
      });
    }

    // Cleanup
    return () => {
      if (engineRef.current) {
        Matter.World.clear(engineRef.current.world, false);
        Matter.Engine.clear(engineRef.current);
        engineRef.current = null;
      }
    };
  }, [width, height, gravity.x, gravity.y, debug]);

  // Run physics simulation with Pixi ticker (60fps)
  useTick((ticker) => {
    if (engineRef.current) {
      // ticker.deltaTime is in frames (1 = 60fps, 2 = 30fps, etc.)
      // Matter.js expects milliseconds per update
      // At 60fps, deltaTime = 1, so timeStep = 16.67ms
      const timeStep = (1000 / 60) * ticker.deltaTime;
      Matter.Engine.update(engineRef.current, timeStep);
    }
  });

  if (!contextValue) {
    return null;
  }

  return (
    <PhysicsContext.Provider value={contextValue}>
      <pixiContainer>{children}</pixiContainer>
    </PhysicsContext.Provider>
  );
};

export default PhysicsWorld;
