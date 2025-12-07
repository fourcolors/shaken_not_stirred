import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { ReactNode } from 'react';

interface PixiStageProps {
    /** Canvas width - defaults to window width if not specified */
    width?: number;
    /** Canvas height - defaults to window height if not specified */
    height?: number;
    /** Background color as hex number */
    backgroundColor?: number;
    /** Enable antialiasing for smoother edges */
    antialias?: boolean;
    /** Whether to auto-resize to parent container */
    resizeTo?: HTMLElement | Window;
    /** Children to render inside the Pixi Application */
    children: ReactNode;
    /** Additional CSS class name for the wrapper */
    className?: string;
    /** Additional inline styles for the wrapper */
    style?: React.CSSProperties;
}
/**
 * A wrapper component that provides a Pixi.js Application context
 * for rendering WebGL graphics with React components.
 *
 * @example
 * ```tsx
 * <PixiStage width={800} height={600} backgroundColor={0x000000}>
 *   <pixiContainer x={100} y={100}>
 *     <PixiAvatar shape="cube" color={0xCCFF00} />
 *   </pixiContainer>
 * </PixiStage>
 * ```
 */
declare function PixiStage({ width, height, backgroundColor, antialias, resizeTo, children, className, style, }: PixiStageProps): react_jsx_runtime.JSX.Element;

interface LiquidBackgroundProps {
    /** Primary color for the liquid blobs */
    primaryColor?: number;
    /** Secondary color for the liquid blobs */
    secondaryColor?: number;
    /** Accent color for highlights */
    accentColor?: number;
    /** Animation speed multiplier */
    speed?: number;
    /** Number of blob shapes */
    blobCount?: number;
    /** Canvas width */
    width?: number;
    /** Canvas height */
    height?: number;
}
/**
 * Animated liquid background with morphing blobs.
 * Creates the signature "Acid Lounge" visual effect.
 *
 * @example
 * ```tsx
 * <PixiStage width={1920} height={1080}>
 *   <LiquidBackground
 *     primaryColor={0xCCFF00}
 *     secondaryColor={0xFF10F0}
 *   />
 * </PixiStage>
 * ```
 */
declare function LiquidBackground({ primaryColor, secondaryColor, accentColor, speed, blobCount, width, height, }: LiquidBackgroundProps): react_jsx_runtime.JSX.Element;

export { LiquidBackground, type LiquidBackgroundProps, PixiStage, type PixiStageProps };
