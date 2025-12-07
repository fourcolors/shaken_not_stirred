import type { AvatarShape } from '../../atoms/Avatar';
export interface WritingPhasePlayer {
    id: string;
    name: string;
    avatarShape: AvatarShape;
    avatarColor: string;
    hasSubmitted?: boolean;
}
export interface WritingPhaseProps {
    /** The prompt for this round */
    prompt: string;
    /** Time remaining in seconds */
    timeRemaining: number;
    /** Total time for this phase */
    totalTime: number;
    /** All players with submission status */
    players: WritingPhasePlayer[];
    /** Whether timer is in panic mode (< 10 seconds) */
    isPanic?: boolean;
    /** Callback when time expires */
    onTimeUp?: () => void;
    /** Additional CSS class */
    className?: string;
}
/**
 * Host display during the writing phase.
 * Shows prompt, timer, and player submission status.
 */
export declare function WritingPhase({ prompt, timeRemaining, totalTime, players, isPanic, onTimeUp, className, }: WritingPhaseProps): import("react/jsx-runtime").JSX.Element;
export default WritingPhase;
//# sourceMappingURL=WritingPhase.d.ts.map