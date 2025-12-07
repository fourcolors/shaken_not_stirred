import type { AvatarShape } from '../../atoms/Avatar';
export interface AvatarBuilderProps {
    /** Initial player name */
    initialName?: string;
    /** Initial avatar shape */
    initialShape?: AvatarShape;
    /** Initial avatar color */
    initialColor?: string;
    /** Whether player wants drinking mode */
    initialDrinking?: boolean;
    /** Whether currently submitting */
    isSubmitting?: boolean;
    /** Error message */
    errorMessage?: string;
    /** Callback when avatar is confirmed */
    onConfirm?: (data: {
        name: string;
        shape: AvatarShape;
        color: string;
        isDrinking: boolean;
    }) => void;
    /** Additional CSS class */
    className?: string;
}
/**
 * Avatar builder screen for customizing player appearance.
 * Players choose name, shape, color, and drinking preference.
 */
export declare function AvatarBuilder({ initialName, initialShape, initialColor, initialDrinking, isSubmitting, errorMessage, onConfirm, className, }: AvatarBuilderProps): import("react/jsx-runtime").JSX.Element;
export default AvatarBuilder;
//# sourceMappingURL=AvatarBuilder.d.ts.map