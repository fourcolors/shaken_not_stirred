export type AvatarShape = 'cube' | 'pyramid' | 'sphere' | 'diamond';
export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
export interface AvatarProps {
    /** Player's display name (optional for preview mode) */
    name?: string;
    /** Avatar shape */
    shape?: AvatarShape;
    /** Primary color (hex string or CSS color) */
    color?: string;
    /** Size of the avatar */
    size?: AvatarSize;
    /** Show drinking indicator */
    isDrinking?: boolean;
    /** Show VIP crown */
    isVIP?: boolean;
    /** Show DJ headphones */
    isDJ?: boolean;
    /** Enable hover animation */
    animated?: boolean;
    /** Additional CSS class */
    className?: string;
}
/**
 * Player avatar component with geometric shapes and Acid Lounge colors.
 * Displays player identity with optional role indicators.
 *
 * @example
 * ```tsx
 * <Avatar
 *   name="Player 1"
 *   shape="cube"
 *   color="#CCFF00"
 *   isVIP
 *   isDrinking
 * />
 * ```
 */
export declare function Avatar({ name, shape, color, size, isDrinking, isVIP, isDJ, animated, className, }: AvatarProps): import("react/jsx-runtime").JSX.Element;
export default Avatar;
//# sourceMappingURL=Avatar.d.ts.map