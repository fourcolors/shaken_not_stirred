import React from 'react';
import { clsx } from 'clsx';
import { QRCodeSVG } from 'qrcode.react';
import { Typography } from '../../atoms/Typography';
import styles from './SplashScreen.module.css';

export interface SplashScreenProps {
  /** Room code to display (optional) */
  roomCode?: string;
  /** URL to encode in QR code (for joining) */
  joinUrl?: string;
  /** Whether to show the QR code placeholder */
  showQR?: boolean;
  /** Custom subtitle text */
  subtitle?: string;
  /** Callback when start/host button is clicked */
  onStart?: () => void;
  /** Additional CSS class */
  className?: string;
}

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
export function SplashScreen({
  roomCode,
  joinUrl,
  showQR = true,
  subtitle = 'A Party Game Experience',
  onStart,
  className,
}: SplashScreenProps) {
  // Debug logging
  console.log('SplashScreen render - joinUrl:', joinUrl, 'roomCode:', roomCode);

  return (
    <div className={clsx(styles.splash, className)}>
      <div className={styles.content}>
        {/* Main Title */}
        <div className={styles.titleContainer}>
          <Typography variant="hero" glow align="center" className={styles.title}>
            SHAKEN
          </Typography>
          <Typography variant="h2" color="secondary" align="center" className={styles.notText}>
            NOT
          </Typography>
          <Typography variant="hero" glow align="center" className={styles.title}>
            STIRRED
          </Typography>
        </div>

        {/* Subtitle */}
        <Typography
          variant="h4"
          color="muted"
          align="center"
          kinetic
          className={styles.subtitle}
        >
          {subtitle}
        </Typography>

        {/* Join Section */}
        <div className={styles.joinSection}>
          {showQR && (
            <div className={styles.qrContainer}>
              {joinUrl ? (
                <div className={styles.qrCode}>
                  <QRCodeSVG
                    value={joinUrl}
                    size={160}
                    bgColor="transparent"
                    fgColor="#CCFF00"
                    level="M"
                  />
                </div>
              ) : (
                <div className={styles.qrPlaceholder}>
                  <span>QR</span>
                </div>
              )}
              <Typography variant="label" color="secondary">
                SCAN TO JOIN
              </Typography>
            </div>
          )}

          {roomCode && (
            <div className={styles.roomCodeSection}>
              <Typography variant="label" color="muted">
                Or Enter Code
              </Typography>
              <div className={styles.roomCode}>
                {roomCode.split('').map((char, i) => (
                  <span key={i} className={styles.roomCodeChar}>
                    {char}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pulsing CTA */}
        <Typography
          variant="body"
          color="accent"
          align="center"
          glow
          className={styles.cta}
        >
          Waiting for players...
        </Typography>
      </div>
    </div>
  );
}

export default SplashScreen;
