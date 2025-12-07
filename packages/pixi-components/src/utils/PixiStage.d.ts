import React, { type ReactNode } from 'react';
export interface PixiStageProps {
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
export declare function PixiStage({ width, height, backgroundColor, antialias, resizeTo, children, className, style, }: PixiStageProps): import("react/jsx-runtime").JSX.Element;
export default PixiStage;
//# sourceMappingURL=PixiStage.d.ts.map