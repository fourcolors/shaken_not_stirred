import { type ButtonHTMLAttributes, type ReactNode } from 'react';
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual style variant */
    variant?: ButtonVariant;
    /** Size of the button */
    size?: ButtonSize;
    /** Show loading spinner and disable interactions */
    isLoading?: boolean;
    /** Expand to full width of container */
    fullWidth?: boolean;
    /** Enable neon glow effect */
    glow?: boolean;
    /** Button content */
    children: ReactNode;
}
/**
 * Primary interactive button component with Acid Lounge styling.
 * Supports multiple variants, sizes, and visual effects.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="lg" glow>
 *   Start Game
 * </Button>
 * ```
 */
export declare function Button({ variant, size, isLoading, fullWidth, glow, disabled, className, children, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export default Button;
//# sourceMappingURL=Button.d.ts.map