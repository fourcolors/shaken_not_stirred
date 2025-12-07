import type { AvatarShape } from '../../atoms/Avatar';
export interface PhoneLobbyPlayer {
    id: string;
    name: string;
    avatarShape: AvatarShape;
    avatarColor: string;
    isVIP?: boolean;
    isDJ?: boolean;
}
export type PhoneLobbyRole = 'player' | 'vip' | 'dj';
export interface PhoneLobbyProps {
    /** Current player info */
    currentPlayer: PhoneLobbyPlayer;
    /** All players in lobby */
    players: PhoneLobbyPlayer[];
    /** Room code */
    roomCode: string;
    /** Current player's role */
    role: PhoneLobbyRole;
    /** Whether game is starting */
    isStarting?: boolean;
    /** Callback when VIP starts game */
    onStartGame?: () => void;
    /** Callback when DJ opens playlist */
    onOpenPlaylist?: () => void;
    /** Callback to leave game */
    onLeave?: () => void;
    /** Additional CSS class */
    className?: string;
}
/**
 * Phone lobby screen showing waiting state.
 * Different views for player, VIP, and DJ roles.
 */
export declare function PhoneLobby({ currentPlayer, players, roomCode, role, isStarting, onStartGame, onOpenPlaylist, onLeave, className, }: PhoneLobbyProps): import("react/jsx-runtime").JSX.Element;
export default PhoneLobby;
//# sourceMappingURL=PhoneLobby.d.ts.map