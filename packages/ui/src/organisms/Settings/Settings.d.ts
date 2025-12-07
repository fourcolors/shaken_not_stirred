export interface GameSettings {
    /** Number of rounds (3-10) */
    rounds: number;
    /** Time limit per answer in seconds */
    timeLimit: number;
    /** Enable drinking mode */
    drinkingMode: boolean;
    /** Enable DJ mode (Spotify integration) */
    djMode: boolean;
    /** Content filter level */
    contentFilter: 'family' | 'adult' | 'spicy';
}
export interface SettingsProps {
    /** Current settings */
    settings: GameSettings;
    /** Whether Spotify is connected */
    spotifyConnected?: boolean;
    /** Callback when settings change */
    onSettingsChange?: (settings: GameSettings) => void;
    /** Callback when close is clicked */
    onClose?: () => void;
    /** Callback to manage Spotify */
    onManageSpotify?: () => void;
    /** Whether overlay is open */
    isOpen?: boolean;
    /** Additional CSS class */
    className?: string;
}
/**
 * Settings overlay for game configuration.
 * Allows VIP to adjust game parameters before starting.
 */
export declare function Settings({ settings, spotifyConnected, onSettingsChange, onClose, onManageSpotify, isOpen, className, }: SettingsProps): import("react/jsx-runtime").JSX.Element | null;
export default Settings;
//# sourceMappingURL=Settings.d.ts.map