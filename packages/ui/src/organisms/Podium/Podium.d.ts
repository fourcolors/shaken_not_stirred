import type { AvatarShape } from '../../atoms/Avatar';
export interface PodiumPlayer {
    id: string;
    name: string;
    avatarShape: AvatarShape;
    avatarColor: string;
    score: number;
    rank: 1 | 2 | 3;
}
export interface PodiumProps {
    /** Top 3 players */
    winners: [PodiumPlayer, PodiumPlayer, PodiumPlayer];
    /** Callback when play again is clicked */
    onPlayAgain?: () => void;
    /** Callback when exit is clicked */
    onExit?: () => void;
    /** Additional CSS class */
    className?: string;
}
/**
 * Final podium screen showing top 3 winners with confetti.
 * Displays winners with celebration animations.
 */
export declare function Podium({ winners, onPlayAgain, onExit, className, }: PodiumProps): import("react/jsx-runtime").JSX.Element;
export default Podium;
//# sourceMappingURL=Podium.d.ts.map