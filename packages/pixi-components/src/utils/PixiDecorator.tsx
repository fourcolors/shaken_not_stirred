import type { Decorator } from '@storybook/react';
import { Application, extend } from '@pixi/react';
import { Container, Graphics, Sprite, Text, TextStyle } from 'pixi.js';
import React from 'react';

// Extend @pixi/react with Pixi.js classes
extend({ Container, Graphics, Sprite, Text, TextStyle });

export interface PixiDecoratorOptions {
  /** Canvas width in pixels */
  width?: number;
  /** Canvas height in pixels */
  height?: number;
  /** Background color as hex number */
  backgroundColor?: number;
  /** Show border around canvas for debugging */
  showBorder?: boolean;
  /** Enable antialiasing */
  antialias?: boolean;
}

/**
 * Storybook decorator for wrapping stories in a Pixi.js Application
 *
 * @example
 * ```tsx
 * export default {
 *   title: 'Pixi/MyComponent',
 *   decorators: [PixiDecorator({ width: 800, height: 600 })],
 * };
 * ```
 */
export const PixiDecorator = (
  options: PixiDecoratorOptions = {}
): Decorator => {
  const {
    width = 800,
    height = 600,
    backgroundColor = 0x000000,
    showBorder = true,
    antialias = true,
  } = options;

  return (Story) => (
    <div
      style={{
        width: '100%',
        minHeight: `${height}px`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: showBorder ? '2px dashed rgba(204, 255, 0, 0.3)' : 'none',
        borderRadius: '8px',
        overflow: 'hidden',
        background: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <Application
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        antialias={antialias}
        autoDensity
        resolution={typeof window !== 'undefined' ? window.devicePixelRatio : 1}
      >
        <Story />
      </Application>
    </div>
  );
};

/**
 * Preset decorators for common use cases
 */
export const PixiDecorators = {
  /** Default 800x600 canvas with dark background */
  Default: PixiDecorator(),

  /** Full HD canvas for TV/Host screens */
  FullHD: PixiDecorator({ width: 1920, height: 1080 }),

  /** Mobile-sized canvas for phone controller */
  Mobile: PixiDecorator({ width: 390, height: 844 }),

  /** Square canvas for avatars and icons */
  Square: PixiDecorator({ width: 400, height: 400 }),

  /** Acid Lounge theme preset */
  AcidLounge: PixiDecorator({
    backgroundColor: 0x000000,
    showBorder: true,
  }),
};

export default PixiDecorator;
