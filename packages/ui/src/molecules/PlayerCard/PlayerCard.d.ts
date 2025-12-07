import { type AvatarShape } from '../../atoms/Avatar';
export interface PlayerCardProps {
    /** Player's display name */
    name: string;
    /** Avatar shape */
    shape?: AvatarShape;
    /** Avatar color (hex string) */
    color?: string;
    /** Player's current score */
    score?: number;
    /** Score delta from last round (e.g., +500) */
    scoreDelta?: number;
    /** Player rank position */
    rank?: number;
    /** Is this player the VIP/Host */
    isVIP?: boolean;
    /** Is this player the DJ */
    isDJ?: boolean;
    /** Is this player drinking */
    isDrinking?: boolean;
    /** Is this player currently active/selected */
    isActive?: boolean;
    /** Has this player submitted their answer */
    hasSubmitted?: boolean;
    /** Additional CSS class */
    className?: string;
}
/**
 * Player card molecule displaying avatar, name, score, and status.
 * Used in lobby grids and leaderboards.
 *
 * @example
 * ```tsx
 * <PlayerCard
 *   name="Alice"
 *   shape="cube"
 *   color="#CCFF00"
 *   score={1500}
 *   scoreDelta={500}
 *   rank={1}
 *   isVIP
 * />
 * ```
 */
export declare function PlayerCard({ name, shape, color, score, scoreDelta, rank, isVIP, isDJ, isDrinking, isActive, hasSubmitted, className, }: PlayerCardProps): import("react/jsx-runtime").JSX.Element;
export default PlayerCard;
//# sourceMappingURL=PlayerCard.d.ts.map