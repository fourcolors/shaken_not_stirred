import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { clsx } from 'clsx';
import { Typography } from '../../atoms/Typography';
import styles from './SplashScreen.module.css';
/**
 * Host/TV Splash Screen - The Attract Mode.
 * Features animated "Acid Liquid" logo with "Scan QR to Join" CTA.
 *
 * Note: This is the HTML/CSS layer. The liquid background effect
 * should be rendered separately with the PixiStage + LiquidBackground.
 *
 * @example
 * ```tsx
 * <PixiStage width={1920} height={1080}>
 *   <LiquidBackground />
 * </PixiStage>
 * <SplashScreen roomCode="ABCD" showQR />
 * ```
 */
export function SplashScreen({ roomCode, showQR = true, subtitle = 'A Party Game Experience', onStart, className, }) {
    return (_jsx("div", { className: clsx(styles.splash, className), children: _jsxs("div", { className: styles.content, children: [_jsxs("div", { className: styles.titleContainer, children: [_jsx(Typography, { variant: "hero", glow: true, align: "center", className: styles.title, children: "SHAKEN" }), _jsx(Typography, { variant: "h2", color: "secondary", align: "center", className: styles.notText, children: "NOT" }), _jsx(Typography, { variant: "hero", glow: true, align: "center", className: styles.title, children: "STIRRED" })] }), _jsx(Typography, { variant: "h4", color: "muted", align: "center", kinetic: true, className: styles.subtitle, children: subtitle }), _jsxs("div", { className: styles.joinSection, children: [showQR && (_jsxs("div", { className: styles.qrContainer, children: [_jsx("div", { className: styles.qrPlaceholder, children: _jsx("span", { children: "QR" }) }), _jsx(Typography, { variant: "label", color: "secondary", children: "Scan to Join" })] })), roomCode && (_jsxs("div", { className: styles.roomCodeSection, children: [_jsx(Typography, { variant: "label", color: "muted", children: "Or Enter Code" }), _jsx("div", { className: styles.roomCode, children: roomCode.split('').map((char, i) => (_jsx("span", { className: styles.roomCodeChar, children: char }, i))) })] }))] }), _jsx(Typography, { variant: "body", color: "accent", align: "center", glow: true, className: styles.cta, children: "Waiting for players..." })] }) }));
}
export default SplashScreen;
//# sourceMappingURL=SplashScreen.js.map