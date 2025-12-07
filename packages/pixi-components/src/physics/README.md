# Physics System - Matter.js Integration

## Overview

This physics system integrates Matter.js with Pixi.js v8 to create realistic bouncing avatars for the lobby screen. It provides a 60fps physics simulation that syncs seamlessly with Pixi rendering.

## Components

### PhysicsWorld
The container component that initializes the Matter.js physics engine and manages the simulation loop.

**Features:**
- Creates invisible boundary walls (floor, ceiling, left, right)
- Runs physics at 60fps using Pixi's ticker
- Provides context for child physics bodies
- Configurable gravity

**Usage:**
```tsx
import { PhysicsWorld } from '@shaken/pixi';

<PhysicsWorld width={800} height={600} gravity={{ x: 0, y: 1 }}>
  {/* Physics bodies go here */}
</PhysicsWorld>
```

### PhysicsBody
Generic physics body component that syncs Matter.js physics with Pixi graphics rendering.

**Features:**
- Supports rectangle and circle shapes
- Configurable restitution (bounciness) and friction
- Auto-syncs position and rotation from physics to rendering
- Initial velocity support

**Usage:**
```tsx
import { PhysicsBody } from '@shaken/pixi';

<PhysicsBody
  x={100}
  y={100}
  width={50}
  height={50}
  shape="circle"
  restitution={0.8}
  color={0xff0000}
  velocity={{ x: 2, y: -3 }}
/>
```

### AvatarBody
Avatar-specific physics body with shape-based physics properties.

**Features:**
- Pre-configured physics for each avatar shape:
  - **Sphere**: Circle physics, very bouncy (0.9 restitution)
  - **Cube**: Square physics, moderately bouncy (0.7 restitution)
  - **Pyramid**: Rectangle with triangle aspect, 0.75 restitution
  - **Diamond**: Rotated square, high bounce (0.85 restitution)
- Randomized initial velocity for natural bouncing
- Optional bounce disable for static avatars

**Usage:**
```tsx
import { AvatarBody } from '@shaken/pixi';

<AvatarBody
  x={200}
  y={100}
  shape="sphere"
  color={0xff10f0}
  size={50}
  enableBounce={true}
/>
```

## Storybook Stories

### PhysicsWorld.stories.tsx

Interactive demonstrations of the physics system:

1. **Default** - Various avatar shapes bouncing with standard gravity
2. **ManyAvatars** - 20 avatars bouncing around for stress testing
3. **ZeroGravity** - Avatars floating freely in zero-g
4. **HighGravity** - Avatars falling quickly with 2.5x gravity
5. **SideGravity** - Horizontal gravity demonstration
6. **AcidLounge** - Themed demo with acid lounge colors
7. **NoBounce** - Avatars without initial velocity

To view the stories:
```bash
pnpm storybook
# Navigate to Pixi/Physics/PhysicsWorld
```

## Physics Configuration

### Default Values

```typescript
// PhysicsWorld
width: 800
height: 600
gravity: { x: 0, y: 1 }

// PhysicsBody
restitution: 0.8  // 80% bounce
friction: 0.01
frictionAir: 0.01
density: 0.001

// AvatarBody - varies by shape
sphere: { restitution: 0.9, friction: 0.005 }
cube: { restitution: 0.7, friction: 0.01 }
pyramid: { restitution: 0.75, friction: 0.015 }
diamond: { restitution: 0.85, friction: 0.008 }
```

### Random Velocity

When `enableBounce={true}`, avatars get random initial velocity:
- Speed: 2-5 units/second
- Direction: Random angle (0-360°)

## Integration with Lobby

To add physics to the lobby screen:

```tsx
import { PhysicsWorld, AvatarBody } from '@shaken/pixi';

function Lobby({ players }) {
  return (
    <PhysicsWorld width={1920} height={1080}>
      {players.map(player => (
        <AvatarBody
          key={player.id}
          x={player.spawnX}
          y={player.spawnY}
          shape={player.avatarShape}
          color={player.color}
          size={50}
        />
      ))}
    </PhysicsWorld>
  );
}
```

## Performance

- **60fps** physics simulation
- Syncs with Pixi ticker for smooth rendering
- Efficient Matter.js engine
- No physics calculations when bodies are sleeping

## Dependencies

- `matter-js` (^0.20.0) - Physics engine
- `@types/matter-js` (^0.19.7) - TypeScript types
- `pixi.js` (^8.6.6) - Rendering
- `@pixi/react` (^8.0.0) - React integration

## Exports

From `@shaken/pixi`:
```typescript
export { PhysicsWorld, usePhysics } from '@shaken/pixi';
export { PhysicsBody } from '@shaken/pixi';
export { AvatarBody } from '@shaken/pixi';

// Types
export type { PhysicsWorldProps } from '@shaken/pixi';
export type { PhysicsBodyProps } from '@shaken/pixi';
export type { AvatarBodyProps, AvatarShape } from '@shaken/pixi';
```

## usePhysics Hook

Access the physics context from any child component:

```tsx
import { usePhysics } from '@shaken/pixi';

function CustomPhysicsComponent() {
  const { engine, world, width, height } = usePhysics();

  // Add custom bodies, constraints, etc.
  useEffect(() => {
    const body = Matter.Bodies.circle(100, 100, 25);
    Matter.World.add(world, body);

    return () => {
      Matter.World.remove(world, body);
    };
  }, [world]);

  return null;
}
```

## Future Enhancements

Potential additions:
- Mouse/touch interaction (drag avatars)
- Constraints and joints between avatars
- Collision events for gameplay
- Custom shapes beyond rectangles/circles
- Polygon support for pyramid/diamond shapes
- Performance optimization with sleeping bodies
