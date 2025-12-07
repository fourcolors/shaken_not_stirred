import type { AvatarShape } from '../../atoms/Avatar';
export type WaitingReason = 'voting' | 'results' | 'next-round' | 'other-players' | 'host';
export interface WaitingScreenProps {
    /** Why we're waiting */
    reason: WaitingReason;
    /** Custom message (optional) */
    message?: string;
    /** Current player avatar */
    playerShape?: AvatarShape;
    /** Current player color */
    playerColor?: string;
    /** Additional CSS class */
    className?: string;
}
/**
 * Generic waiting screen for phone.
 * Shows when player needs to wait for game events.
 */
export declare function WaitingScreen({ reason, message, playerShape, playerColor, className, }: WaitingScreenProps): import("react/jsx-runtime").JSX.Element;
export default WaitingScreen;
//# sourceMappingURL=WaitingScreen.d.ts.map