export type SpotifyAuthState = 'idle' | 'connecting' | 'success' | 'error';
export interface SpotifyAuthProps {
    /** Current authentication state */
    state: SpotifyAuthState;
    /** Connected account name (when authenticated) */
    accountName?: string;
    /** Error message (when in error state) */
    errorMessage?: string;
    /** Callback when connect is clicked */
    onConnect?: () => void;
    /** Callback when skip is clicked */
    onSkip?: () => void;
    /** Callback when disconnect is clicked */
    onDisconnect?: () => void;
    /** Additional CSS class */
    className?: string;
}
/**
 * Spotify authentication screen for DJ mode.
 * Allows host to connect their Spotify account for music integration.
 */
export declare function SpotifyAuth({ state, accountName, errorMessage, onConnect, onSkip, onDisconnect, className, }: SpotifyAuthProps): import("react/jsx-runtime").JSX.Element;
export default SpotifyAuth;
//# sourceMappingURL=SpotifyAuth.d.ts.map