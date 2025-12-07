/**
 * @shaken/audio - Audio management package for Shaken Not Stirred
 *
 * Provides sound effects and music management using Howler.js
 * with mobile compatibility (iOS Safari)
 */

export { AudioManager, audioManager } from './AudioManager';
export { SFX, Music, SFX_URLS, MUSIC_URLS } from './sfx';
export { useAudio } from './hooks/useAudio';
export { useSFX } from './hooks/useSFX';
