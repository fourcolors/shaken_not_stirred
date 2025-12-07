import type { AvatarShape } from '../../atoms/Avatar';
export interface LobbyPlayer {
    id: string;
    name: string;
    avatarShape: AvatarShape;
    avatarColor: string;
    isVIP?: boolean;
    isDJ?: boolean;
    isDrinking?: boolean;
}
export type LobbyState = 'empty' | 'populating' | 'ready';
export interface LobbyProps {
    /** Current lobby state */
    state: LobbyState;
    /** Room code to display */
    roomCode: string;
    /** List of players in lobby */
    players: LobbyPlayer[];
    /** Maximum players allowed */
    maxPlayers?: number;
    /** Whether current user is VIP (can start game) */
    isVIP?: boolean;
    /** Callback when start game is clicked */
    onStartGame?: () => void;
    /** Callback when settings is clicked */
    onSettings?: () => void;
    /** Additional CSS class */
    className?: string;
}
/**
 * Host/TV Lobby screen showing players joining the game.
 * Displays different states: empty, populating, and ready.
 */
export declare function Lobby({ state, roomCode, players, maxPlayers, isVIP, onStartGame, onSettings, className, }: LobbyProps): import("react/jsx-runtime").JSX.Element;
export default Lobby;
//# sourceMappingURL=Lobby.d.ts.map