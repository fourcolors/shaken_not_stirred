export interface LiquidBackgroundProps {
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
export declare function LiquidBackground({ primaryColor, secondaryColor, accentColor, speed, blobCount, width, height, }: LiquidBackgroundProps): import("react/jsx-runtime").JSX.Element;
export default LiquidBackground;
//# sourceMappingURL=LiquidBackground.d.ts.map