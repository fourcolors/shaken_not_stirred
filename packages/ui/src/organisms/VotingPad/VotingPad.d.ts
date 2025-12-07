export interface VotingPadProps {
    /** The original prompt */
    prompt: string;
    /** Answer A text */
    answerA: string;
    /** Answer B text */
    answerB: string;
    /** Time remaining */
    timeRemaining: number;
    /** Total time */
    totalTime: number;
    /** Already voted */
    hasVoted?: boolean;
    /** Callback when vote is cast */
    onVote?: (choice: 'A' | 'B') => void;
    /** Additional CSS class */
    className?: string;
}
/**
 * Phone voting interface.
 * Players tap left or right to vote for their favorite answer.
 */
export declare function VotingPad({ prompt, answerA, answerB, timeRemaining, totalTime, hasVoted, onVote, className, }: VotingPadProps): import("react/jsx-runtime").JSX.Element;
export default VotingPad;
//# sourceMappingURL=VotingPad.d.ts.map