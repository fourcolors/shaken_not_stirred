import { useState, useEffect, useCallback, useRef } from 'react';

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
export function useShake(options: UseShakeOptions = {}): UseShakeReturn {
  const {
    threshold = 15,
    timeWindow = 1000,
    requiredShakes = 3,
    onShake,
    enabled = true,
  } = options;

  const [isShaking, setIsShaking] = useState(false);
  const [shakeCount, setShakeCount] = useState(0);
  const [hasShaken, setHasShaken] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  const lastUpdate = useRef(0);
  const lastX = useRef(0);
  const lastY = useRef(0);
  const lastZ = useRef(0);
  const shakeTimestamps = useRef<number[]>([]);
  const onShakeRef = useRef(onShake);

  // Keep callback ref updated
  useEffect(() => {
    onShakeRef.current = onShake;
  }, [onShake]);

  // Check for device motion support
  useEffect(() => {
    const supported =
      typeof window !== 'undefined' &&
      'DeviceMotionEvent' in window;
    setIsSupported(supported);
  }, []);

  // Request permission for iOS 13+
  const requestPermission = useCallback(async (): Promise<boolean> => {
    if (typeof window === 'undefined') return false;

    // Check if permission API exists (iOS 13+)
    const DeviceMotionEvent = window.DeviceMotionEvent as any;
    if (typeof DeviceMotionEvent?.requestPermission === 'function') {
      try {
        const permission = await DeviceMotionEvent.requestPermission();
        return permission === 'granted';
      } catch {
        return false;
      }
    }

    // Permission not required on other platforms
    return true;
  }, []);

  // Reset state
  const reset = useCallback(() => {
    setShakeCount(0);
    setHasShaken(false);
    setIsShaking(false);
    shakeTimestamps.current = [];
  }, []);

  // Device motion handler
  useEffect(() => {
    if (!enabled || hasShaken || !isSupported) return;

    const handleMotion = (event: DeviceMotionEvent) => {
      const acceleration = event.accelerationIncludingGravity;
      if (!acceleration) return;

      const { x, y, z } = acceleration;
      if (x === null || y === null || z === null) return;

      const currentTime = Date.now();
      const timeDiff = currentTime - lastUpdate.current;

      if (timeDiff > 100) {
        const diffX = x - lastX.current;
        const diffY = y - lastY.current;
        const diffZ = z - lastZ.current;

        const speed = Math.abs(diffX + diffY + diffZ) / timeDiff * 10000;

        if (speed > threshold) {
          setIsShaking(true);

          // Add timestamp
          shakeTimestamps.current.push(currentTime);

          // Remove old timestamps
          shakeTimestamps.current = shakeTimestamps.current.filter(
            (t) => currentTime - t < timeWindow
          );

          const count = shakeTimestamps.current.length;
          setShakeCount(count);

          if (count >= requiredShakes) {
            setHasShaken(true);
            onShakeRef.current?.();
          }

          // Reset shaking state after a brief moment
          setTimeout(() => setIsShaking(false), 100);
        }

        lastUpdate.current = currentTime;
        lastX.current = x;
        lastY.current = y;
        lastZ.current = z;
      }
    };

    window.addEventListener('devicemotion', handleMotion);

    return () => {
      window.removeEventListener('devicemotion', handleMotion);
    };
  }, [enabled, hasShaken, isSupported, threshold, timeWindow, requiredShakes]);

  return {
    isShaking,
    shakeCount,
    hasShaken,
    isSupported,
    requestPermission,
    reset,
  };
}
