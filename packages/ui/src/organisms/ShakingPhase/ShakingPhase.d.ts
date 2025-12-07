import type { AvatarShape } from '../../atoms/Avatar';
export interface ShakingPhasePlayer {
    id: string;
    name: string;
    avatarShape: AvatarShape;
    avatarColor: string;
    shakeProgress: number;
    hasCompleted: boolean;
}
export interface ShakingPhaseProps {
    /** All players with shake progress */
    players: ShakingPhasePlayer[];
    /** Target shake count */
    targetShakes: number;
    /** Time remaining (optional, for timed mode) */
    timeRemaining?: number;
    /** Additional CSS class */
    className?: string;
}
/**
 * Host display during the shaking phase.
 * Shows all players' shake progress as they physically shake their phones.
 */
export declare function ShakingPhase({ players, targetShakes, timeRemaining, className, }: ShakingPhaseProps): import("react/jsx-runtime").JSX.Element;
export default ShakingPhase;
//# sourceMappingURL=ShakingPhase.d.ts.map