import type { AvatarShape } from '../../atoms/Avatar';
export interface VotingAnswer {
    playerId: string;
    playerName: string;
    avatarShape: AvatarShape;
    avatarColor: string;
    answer: string;
}
export interface VotingVersusProps {
    /** The original prompt */
    prompt: string;
    /** Left answer option */
    answerA: VotingAnswer;
    /** Right answer option */
    answerB: VotingAnswer;
    /** Time remaining for voting */
    timeRemaining: number;
    /** Total voting time */
    totalTime: number;
    /** Number of votes for answer A */
    votesA?: number;
    /** Number of votes for answer B */
    votesB?: number;
    /** Whether to show vote counts (during reveal) */
    showVotes?: boolean;
    /** Winner player ID (during reveal) */
    winnerId?: string;
    /** Additional CSS class */
    className?: string;
}
/**
 * Versus voting screen showing two answers side by side.
 * Players vote on their phones, host sees the matchup.
 */
export declare function VotingVersus({ prompt, answerA, answerB, timeRemaining, totalTime, votesA, votesB, showVotes, winnerId, className, }: VotingVersusProps): import("react/jsx-runtime").JSX.Element;
export default VotingVersus;
//# sourceMappingURL=VotingVersus.d.ts.map