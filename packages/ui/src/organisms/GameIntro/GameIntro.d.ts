export interface GameIntroProps {
    /** Current round number */
    roundNumber: number;
    /** Total number of rounds */
    totalRounds: number;
    /** Round theme/category (optional) */
    theme?: string;
    /** Callback when intro animation completes */
    onComplete?: () => void;
    /** Duration of intro in ms */
    duration?: number;
    /** Additional CSS class */
    className?: string;
}
/**
 * Game intro animation shown at the start of each round.
 * Displays round number with dramatic reveal animation.
 */
export declare function GameIntro({ roundNumber, totalRounds, theme, onComplete, duration, className, }: GameIntroProps): import("react/jsx-runtime").JSX.Element;
export default GameIntro;
//# sourceMappingURL=GameIntro.d.ts.map