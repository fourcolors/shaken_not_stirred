import { jsx as _jsx } from "react/jsx-runtime";
import { Application, extend } from '@pixi/react';
import { Container, Graphics, Sprite, Text, TextStyle } from 'pixi.js';
// Extend @pixi/react with commonly used Pixi.js classes
extend({ Container, Graphics, Sprite, Text, TextStyle });
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
export function PixiStage({ width, height, backgroundColor = 0x000000, antialias = true, resizeTo, children, className, style, }) {
    const defaultWidth = typeof window !== 'undefined' ? window.innerWidth : 800;
    const defaultHeight = typeof window !== 'undefined' ? window.innerHeight : 600;
    return (_jsx("div", { className: className, style: {
            width: width || '100%',
            height: height || '100%',
            overflow: 'hidden',
            ...style,
        }, children: _jsx(Application, { width: width || defaultWidth, height: height || defaultHeight, backgroundColor: backgroundColor, antialias: antialias, autoDensity: true, resolution: typeof window !== 'undefined' ? window.devicePixelRatio : 1, resizeTo: resizeTo, children: children }) }));
}
export default PixiStage;
//# sourceMappingURL=PixiStage.js.map