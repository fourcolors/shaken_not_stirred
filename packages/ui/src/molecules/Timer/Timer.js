import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import styles from './Timer.module.css';
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
export function Timer({ duration, timeRemaining: controlledTime, onComplete, onTick, autoStart = true, panicThreshold = 10, size = 'md', variant = 'circular', className, }) {
    const [internalTime, setInternalTime] = useState(duration);
    const [isRunning, setIsRunning] = useState(autoStart);
    const timeRemaining = controlledTime ?? internalTime;
    const progress = (timeRemaining / duration) * 100;
    const isPanic = timeRemaining <= panicThreshold && timeRemaining > 0;
    useEffect(() => {
        if (!isRunning || controlledTime !== undefined)
            return;
        const interval = setInterval(() => {
            setInternalTime((prev) => {
                const newTime = Math.max(0, prev - 1);
                onTick?.(newTime);
                if (newTime === 0) {
                    setIsRunning(false);
                    onComplete?.();
                }
                return newTime;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [isRunning, controlledTime, onTick, onComplete]);
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return mins > 0 ? `${mins}:${secs.toString().padStart(2, '0')}` : `${secs}`;
    };
    if (variant === 'bar') {
        return (_jsxs("div", { className: clsx(styles.barContainer, styles[size], className), children: [_jsx("div", { className: clsx(styles.barProgress, isPanic && styles.panic), style: { width: `${progress}%` } }), _jsx(Typography, { variant: size === 'lg' ? 'h3' : size === 'sm' ? 'label' : 'h4', color: isPanic ? 'error' : 'primary', glow: isPanic, className: styles.barTime, children: formatTime(timeRemaining) })] }));
    }
    // Circular variant
    const circleSize = size === 'lg' ? 200 : size === 'sm' ? 80 : 120;
    const strokeWidth = size === 'lg' ? 8 : size === 'sm' ? 4 : 6;
    const radius = (circleSize - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference * (1 - progress / 100);
    return (_jsxs("div", { className: clsx(styles.circular, styles[size], isPanic && styles.panic, className), style: { width: circleSize, height: circleSize }, children: [_jsxs("svg", { className: styles.svg, viewBox: `0 0 ${circleSize} ${circleSize}`, children: [_jsx("circle", { className: styles.bgCircle, cx: circleSize / 2, cy: circleSize / 2, r: radius, strokeWidth: strokeWidth }), _jsx("circle", { className: clsx(styles.progressCircle, isPanic && styles.panicCircle), cx: circleSize / 2, cy: circleSize / 2, r: radius, strokeWidth: strokeWidth, strokeDasharray: circumference, strokeDashoffset: strokeDashoffset, transform: `rotate(-90 ${circleSize / 2} ${circleSize / 2})` })] }), _jsx("div", { className: styles.timeDisplay, children: _jsx(Typography, { variant: size === 'lg' ? 'h1' : size === 'sm' ? 'h4' : 'h2', color: isPanic ? 'error' : 'primary', glow: isPanic, kinetic: true, children: formatTime(timeRemaining) }) })] }));
}
export default Timer;
//# sourceMappingURL=Timer.js.map