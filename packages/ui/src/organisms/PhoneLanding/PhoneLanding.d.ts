export type PhoneLandingMode = 'join' | 'rejoin';
export interface PhoneLandingProps {
    /** Current mode */
    mode?: PhoneLandingMode;
    /** Pre-filled room code (from URL or QR) */
    initialRoomCode?: string;
    /** Previous player name for rejoin */
    previousName?: string;
    /** Whether currently connecting */
    isConnecting?: boolean;
    /** Error message to display */
    errorMessage?: string;
    /** Callback when join is submitted */
    onJoin?: (roomCode: string) => void;
    /** Callback when rejoin is clicked */
    onRejoin?: () => void;
    /** Callback to switch modes */
    onModeSwitch?: (mode: PhoneLandingMode) => void;
    /** Additional CSS class */
    className?: string;
}
/**
 * Phone landing screen for joining a game.
 * Supports both new join and rejoin flows.
 */
export declare function PhoneLanding({ mode, initialRoomCode, previousName, isConnecting, errorMessage, onJoin, onRejoin, onModeSwitch, className, }: PhoneLandingProps): import("react/jsx-runtime").JSX.Element;
export default PhoneLanding;
//# sourceMappingURL=PhoneLanding.d.ts.map