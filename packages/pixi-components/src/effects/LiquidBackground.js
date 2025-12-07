import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from 'react';
import { useTick } from '@pixi/react';
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
export function LiquidBackground({ primaryColor = 0xccff00, secondaryColor = 0xff10f0, accentColor = 0x9d00ff, speed = 1, blobCount = 5, width = 800, height = 600, }) {
    const [blobs, setBlobs] = useState([]);
    const [time, setTime] = useState(0);
    // Initialize blobs on mount
    useEffect(() => {
        const colors = [primaryColor, secondaryColor, accentColor];
        const initialBlobs = [];
        for (let i = 0; i < blobCount; i++) {
            initialBlobs.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: 100 + Math.random() * 150,
                color: colors[i % colors.length],
                speedX: (Math.random() - 0.5) * 2,
                speedY: (Math.random() - 0.5) * 2,
                phase: Math.random() * Math.PI * 2,
            });
        }
        setBlobs(initialBlobs);
    }, [blobCount, width, height, primaryColor, secondaryColor, accentColor]);
    // Animate blobs
    useTick((ticker) => {
        const delta = ticker.deltaTime;
        setTime((t) => t + delta * 0.01 * speed);
        setBlobs((prevBlobs) => prevBlobs.map((blob) => {
            let newX = blob.x + blob.speedX * delta * speed;
            let newY = blob.y + blob.speedY * delta * speed;
            // Bounce off edges
            if (newX < -blob.radius)
                newX = width + blob.radius;
            if (newX > width + blob.radius)
                newX = -blob.radius;
            if (newY < -blob.radius)
                newY = height + blob.radius;
            if (newY > height + blob.radius)
                newY = -blob.radius;
            return {
                ...blob,
                x: newX,
                y: newY,
            };
        }));
    });
    // Draw blobs
    const drawBlob = useCallback((g, blob, index) => {
        g.clear();
        // Calculate morphing radius
        const morphedRadius = blob.radius *
            (1 + 0.2 * Math.sin(time * 2 + blob.phase) * Math.cos(time * 1.5 + index));
        // Draw with gradient-like effect using multiple circles
        const alpha = 0.15;
        // Outer glow
        g.circle(blob.x, blob.y, morphedRadius * 1.5);
        g.fill({ color: blob.color, alpha: alpha * 0.3 });
        // Middle layer
        g.circle(blob.x, blob.y, morphedRadius * 1.2);
        g.fill({ color: blob.color, alpha: alpha * 0.5 });
        // Core
        g.circle(blob.x, blob.y, morphedRadius);
        g.fill({ color: blob.color, alpha: alpha });
    }, [time]);
    return (_jsx(_Fragment, { children: blobs.map((blob, index) => (_jsx("pixiGraphics", { draw: (g) => drawBlob(g, blob, index), blendMode: "add" }, index))) }));
}
export default LiquidBackground;
//# sourceMappingURL=LiquidBackground.js.map