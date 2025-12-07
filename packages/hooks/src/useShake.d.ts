export interface UseShakeOptions {
    /** Acceleration threshold to detect shake (default: 15) */
    threshold?: number;
    /** Time window for shake detection in ms (default: 1000) */
    timeWindow?: number;
    /** Number of shakes required (default: 3) */
    requiredShakes?: number;
    /** Callback when shake is detected */
    onShake?: () => void;
    /** Whether shake detection is enabled */
    enabled?: boolean;
}
export interface UseShakeReturn {
    /** Whether device is currently being shaken */
    isShaking: boolean;
    /** Number of shakes detected in current window */
    shakeCount: number;
    /** Whether shake threshold has been met */
    hasShaken: boolean;
    /** Whether device motion is supported */
    isSupported: boolean;
    /** Request permission for device motion (iOS 13+) */
    requestPermission: () => Promise<boolean>;
    /** Reset shake detection state */
    reset: () => void;
}
/**
 * Hook for detecting device shake gestures.
 * Used for the "Shake to Submit" feature.
 *
 * @example
 * ```tsx
 * function ShakePhase() {
 *   const { hasShaken, shakeCount, requestPermission } = useShake({
 *     threshold: 15,
 *     requiredShakes: 3,
 *     onShake: () => submitAnswer(),
 *   });
 *
 *   useEffect(() => {
 *     requestPermission();
 *   }, []);
 *
 *   return hasShaken ? <LockedIn /> : <ShakeInstruction shakes={shakeCount} />;
 * }
 * ```
 */
export declare function useShake(options?: UseShakeOptions): UseShakeReturn;
//# sourceMappingURL=useShake.d.ts.map