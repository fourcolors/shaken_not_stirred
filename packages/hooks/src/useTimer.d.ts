export interface UseTimerOptions {
    /** Initial duration in seconds */
    duration: number;
    /** Auto-start the timer */
    autoStart?: boolean;
    /** Callback when timer completes */
    onComplete?: () => void;
    /** Callback on each tick */
    onTick?: (remaining: number) => void;
    /** Tick interval in ms (default: 1000) */
    interval?: number;
}
export interface UseTimerReturn {
    /** Time remaining in seconds */
    timeRemaining: number;
    /** Progress as percentage (0-100) */
    progress: number;
    /** Whether timer is currently running */
    isRunning: boolean;
    /** Whether timer has completed */
    isComplete: boolean;
    /** Start or resume the timer */
    start: () => void;
    /** Pause the timer */
    pause: () => void;
    /** Reset timer to initial duration */
    reset: () => void;
    /** Set a new duration and reset */
    setDuration: (seconds: number) => void;
}
/**
 * Hook for countdown timer functionality.
 *
 * @example
 * ```tsx
 * function WritingPhase() {
 *   const { timeRemaining, progress, isRunning } = useTimer({
 *     duration: 60,
 *     autoStart: true,
 *     onComplete: () => submitAnswer(),
 *   });
 *
 *   return <Timer timeRemaining={timeRemaining} />;
 * }
 * ```
 */
export declare function useTimer(options: UseTimerOptions): UseTimerReturn;
//# sourceMappingURL=useTimer.d.ts.map