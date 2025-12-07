import { type ReactNode, type ElementType } from 'react';
export type TypographyVariant = 'hero' | 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body-sm' | 'caption' | 'label';
export type TypographyColor = 'primary' | 'secondary' | 'muted' | 'accent' | 'success' | 'error' | 'inherit';
export interface TypographyProps {
    /** Typography style variant */
    variant?: TypographyVariant;
    /** Text color */
    color?: TypographyColor;
    /** Apply neon glow effect */
    glow?: boolean;
    /** Use kinetic/futuristic font (Orbitron) */
    kinetic?: boolean;
    /** Text alignment */
    align?: 'left' | 'center' | 'right';
    /** Render as different HTML element */
    as?: ElementType;
    /** Additional CSS class */
    className?: string;
    /** Text content */
    children: ReactNode;
}
/**
 * Typography component for consistent text styling with Acid Lounge aesthetic.
 * Supports display fonts, neon glow effects, and kinetic styling.
 *
 * @example
 * ```tsx
 * <Typography variant="hero" glow kinetic>
 *   SHAKEN NOT STIRRED
 * </Typography>
 * ```
 */
export declare function Typography({ variant, color, glow, kinetic, align, as, className, children, }: TypographyProps): import("react/jsx-runtime").JSX.Element;
export default Typography;
//# sourceMappingURL=Typography.d.ts.map