export interface SplashScreenProps {
    /** Room code to display (optional) */
    roomCode?: string;
    /** Whether to show the QR code placeholder */
    showQR?: boolean;
    /** Custom subtitle text */
    subtitle?: string;
    /** Callback when start/host button is clicked */
    onStart?: () => void;
    /** Additional CSS class */
    className?: string;
}
/**
 * Host/TV Splash Screen - The Attract Mode.
 * Features animated "Acid Liquid" logo with "Scan QR to Join" CTA.
 *
 * Note: This is the HTML/CSS layer. The liquid background effect
 * should be rendered separately with the PixiStage + LiquidBackground.
 *
 * @example
 * ```tsx
 * <PixiStage width={1920} height={1080}>
 *   <LiquidBackground />
 * </PixiStage>
 * <SplashScreen roomCode="ABCD" showQR />
 * ```
 */
export declare function SplashScreen({ roomCode, showQR, subtitle, onStart, className, }: SplashScreenProps): import("react/jsx-runtime").JSX.Element;
export default SplashScreen;
//# sourceMappingURL=SplashScreen.d.ts.map