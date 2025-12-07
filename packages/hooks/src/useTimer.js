import { useState, useEffect, useCallback, useRef } from 'react';
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
export function useTimer(options) {
    const { duration, autoStart = false, onComplete, onTick, interval = 1000, } = options;
    const [timeRemaining, setTimeRemaining] = useState(duration);
    const [isRunning, setIsRunning] = useState(autoStart);
    const [isComplete, setIsComplete] = useState(false);
    const intervalRef = useRef(null);
    const onCompleteRef = useRef(onComplete);
    const onTickRef = useRef(onTick);
    // Keep refs updated
    useEffect(() => {
        onCompleteRef.current = onComplete;
        onTickRef.current = onTick;
    }, [onComplete, onTick]);
    // Timer logic
    useEffect(() => {
        if (!isRunning || isComplete) {
            return;
        }
        intervalRef.current = setInterval(() => {
            setTimeRemaining((prev) => {
                const newTime = Math.max(0, prev - 1);
                onTickRef.current?.(newTime);
                if (newTime === 0) {
                    setIsRunning(false);
                    setIsComplete(true);
                    onCompleteRef.current?.();
                }
                return newTime;
            });
        }, interval);
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isRunning, isComplete, interval]);
    const start = useCallback(() => {
        if (!isComplete) {
            setIsRunning(true);
        }
    }, [isComplete]);
    const pause = useCallback(() => {
        setIsRunning(false);
    }, []);
    const reset = useCallback(() => {
        setTimeRemaining(duration);
        setIsRunning(false);
        setIsComplete(false);
    }, [duration]);
    const setDuration = useCallback((seconds) => {
        setTimeRemaining(seconds);
        setIsRunning(false);
        setIsComplete(false);
    }, []);
    const progress = (timeRemaining / duration) * 100;
    return {
        timeRemaining,
        progress,
        isRunning,
        isComplete,
        start,
        pause,
        reset,
        setDuration,
    };
}
//# sourceMappingURL=useTimer.js.map