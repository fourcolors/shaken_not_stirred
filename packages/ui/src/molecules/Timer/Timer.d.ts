export interface TimerProps {
    /** Total duration in seconds */
    duration: number;
    /** Current time remaining in seconds (controlled) */
    timeRemaining?: number;
    /** Callback when timer completes */
    onComplete?: () => void;
    /** Callback on each tick (receives remaining seconds) */
    onTick?: (remaining: number) => void;
    /** Whether to auto-start the timer */
    autoStart?: boolean;
    /** Threshold for panic mode (seconds) */
    panicThreshold?: number;
    /** Size variant */
    size?: 'sm' | 'md' | 'lg';
    /** Show as circular progress or bar */
    variant?: 'circular' | 'bar';
    /** Additional CSS class */
    className?: string;
}
/**
 * Countdown timer with visual progress indicator.
 * Supports panic mode when time is running low.
 *
 * @example
 * ```tsx
 * <Timer
 *   duration={60}
 *   panicThreshold={10}
 *   onComplete={() => console.log('Time up!')}
 * />
 * ```
 */
export declare function Timer({ duration, timeRemaining: controlledTime, onComplete, onTick, autoStart, panicThreshold, size, variant, className, }: TimerProps): import("react/jsx-runtime").JSX.Element;
export default Timer;
//# sourceMappingURL=Timer.d.ts.map