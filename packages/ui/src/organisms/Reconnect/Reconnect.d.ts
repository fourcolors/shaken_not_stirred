export type ReconnectState = 'disconnected' | 'reconnecting' | 'failed';
export interface ReconnectProps {
    /** Current reconnection state */
    state: ReconnectState;
    /** Number of reconnection attempts */
    attempts?: number;
    /** Maximum reconnection attempts */
    maxAttempts?: number;
    /** Error message for failed state */
    errorMessage?: string;
    /** Callback when retry is clicked */
    onRetry?: () => void;
    /** Callback to start new game */
    onNewGame?: () => void;
    /** Additional CSS class */
    className?: string;
}
/**
 * Reconnection screen with glitch effects.
 * Shown when connection to server is lost.
 */
export declare function Reconnect({ state, attempts, maxAttempts, errorMessage, onRetry, onNewGame, className, }: ReconnectProps): import("react/jsx-runtime").JSX.Element;
export default Reconnect;
//# sourceMappingURL=Reconnect.d.ts.map