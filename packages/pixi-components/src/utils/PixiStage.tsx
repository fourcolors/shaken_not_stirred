import { Application, extend } from '@pixi/react';
import { Container, Graphics, Sprite, Text, TextStyle } from 'pixi.js';
import React, { type ReactNode } from 'react';

// Extend @pixi/react with commonly used Pixi.js classes
extend({ Container, Graphics, Sprite, Text, TextStyle });

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
export function PixiStage({
  width,
  height,
  backgroundColor = 0x000000,
  antialias = true,
  resizeTo,
  children,
  className,
  style,
}: PixiStageProps) {
  const defaultWidth = typeof window !== 'undefined' ? window.innerWidth : 800;
  const defaultHeight = typeof window !== 'undefined' ? window.innerHeight : 600;

  return (
    <div
      className={className}
      style={{
        width: width || '100%',
        height: height || '100%',
        overflow: 'hidden',
        ...style,
      }}
    >
      <Application
        width={width || defaultWidth}
        height={height || defaultHeight}
        backgroundColor={backgroundColor}
        antialias={antialias}
        autoDensity
        resolution={typeof window !== 'undefined' ? window.devicePixelRatio : 1}
        resizeTo={resizeTo}
      >
        {children}
      </Application>
    </div>
  );
}

export default PixiStage;
