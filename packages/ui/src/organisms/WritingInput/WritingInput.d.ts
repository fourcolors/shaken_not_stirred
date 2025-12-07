export interface WritingInputProps {
    /** The prompt to answer */
    prompt: string;
    /** Time remaining in seconds */
    timeRemaining: number;
    /** Total time for this phase */
    totalTime: number;
    /** Maximum character limit */
    maxLength?: number;
    /** Whether already submitted */
    isSubmitted?: boolean;
    /** Panic mode (< 10 seconds) */
    isPanic?: boolean;
    /** Callback when answer is submitted */
    onSubmit?: (answer: string) => void;
    /** Additional CSS class */
    className?: string;
}
/**
 * Phone input screen for writing answers.
 * Players type their answer and submit before time runs out.
 */
export declare function WritingInput({ prompt, timeRemaining, totalTime, maxLength, isSubmitted, isPanic, onSubmit, className, }: WritingInputProps): import("react/jsx-runtime").JSX.Element;
export default WritingInput;
//# sourceMappingURL=WritingInput.d.ts.map