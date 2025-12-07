import type { AvatarShape } from '../../atoms/Avatar';
export interface RoundSummaryPlayer {
    id: string;
    name: string;
    avatarShape: AvatarShape;
    avatarColor: string;
    score: number;
    roundPoints: number;
    rank: number;
    previousRank?: number;
}
export interface RoundSummaryProps {
    /** Current round number */
    roundNumber: number;
    /** Total rounds */
    totalRounds: number;
    /** Sorted players (by score, highest first) */
    players: RoundSummaryPlayer[];
    /** Callback when continue is clicked */
    onContinue?: () => void;
    /** Whether this is the final round */
    isFinalRound?: boolean;
    /** Additional CSS class */
    className?: string;
}
/**
 * Round summary screen showing current standings.
 * Displays leaderboard with score changes after each round.
 */
export declare function RoundSummary({ roundNumber, totalRounds, players, onContinue, isFinalRound, className, }: RoundSummaryProps): import("react/jsx-runtime").JSX.Element;
export default RoundSummary;
//# sourceMappingURL=RoundSummary.d.ts.map