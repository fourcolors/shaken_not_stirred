import type { Decorator } from '@storybook/react';
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
export declare const PixiDecorator: (options?: PixiDecoratorOptions) => Decorator;
/**
 * Preset decorators for common use cases
 */
export declare const PixiDecorators: {
    /** Default 800x600 canvas with dark background */
    Default: Decorator;
    /** Full HD canvas for TV/Host screens */
    FullHD: Decorator;
    /** Mobile-sized canvas for phone controller */
    Mobile: Decorator;
    /** Square canvas for avatars and icons */
    Square: Decorator;
    /** Acid Lounge theme preset */
    AcidLounge: Decorator;
};
export default PixiDecorator;
//# sourceMappingURL=PixiDecorator.d.ts.map