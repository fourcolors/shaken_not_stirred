// Utils
export { PixiStage } from './utils/PixiStage';
export type { PixiStageProps } from './utils/PixiStage';

// Effects
export { LiquidBackground } from './effects/LiquidBackground';
export type { LiquidBackgroundProps } from './effects/LiquidBackground';

// Physics
export { PhysicsWorld, usePhysics } from './physics/PhysicsWorld';
export type { PhysicsWorldProps } from './physics/PhysicsWorld';
export { PhysicsBody } from './physics/PhysicsBody';
export type { PhysicsBodyProps } from './physics/PhysicsBody';
export { AvatarBody } from './physics/AvatarBody';
export type { AvatarBodyProps, AvatarShape } from './physics/AvatarBody';

// Note: PixiDecorator is available at ./utils/PixiDecorator for Storybook usage
// It's not exported from main entry to avoid @storybook/react dependency in production
