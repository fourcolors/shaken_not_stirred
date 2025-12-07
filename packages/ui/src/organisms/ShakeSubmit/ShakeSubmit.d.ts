export interface ShakeSubmitProps {
    /** Current shake progress (0-100) */
    progress: number;
    /** Target number of shakes */
    targetShakes: number;
    /** Current shake count */
    currentShakes: number;
    /** Whether shake is complete */
    isComplete?: boolean;
    /** Additional CSS class */
    className?: string;
}
/**
 * Phone shake-to-submit screen.
 * Players physically shake their phone to "mix their cocktail".
 */
export declare function ShakeSubmit({ progress, targetShakes, currentShakes, isComplete, className, }: ShakeSubmitProps): import("react/jsx-runtime").JSX.Element;
export default ShakeSubmit;
//# sourceMappingURL=ShakeSubmit.d.ts.map