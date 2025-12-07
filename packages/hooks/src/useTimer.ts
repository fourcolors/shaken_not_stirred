import { useState, useEffect, useCallback, useRef } from 'react';

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
export function useTimer(options: UseTimerOptions): UseTimerReturn {
  const {
    duration,
    autoStart = false,
    onComplete,
    onTick,
    interval = 1000,
  } = options;

  const [timeRemaining, setTimeRemaining] = useState(duration);
  const [isRunning, setIsRunning] = useState(autoStart);
  const [isComplete, setIsComplete] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
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

  const setDuration = useCallback((seconds: number) => {
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
