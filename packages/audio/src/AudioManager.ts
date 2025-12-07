import { Howl, Howler } from 'howler';
import { SFX, Music, SFX_URLS, MUSIC_URLS } from './sfx';

/**
 * AudioManager singleton for managing game audio
 * Handles sound effects and background music with mobile compatibility
 */
export class AudioManager {
  private static instance: AudioManager | null = null;
  private sfxCache: Map<SFX, Howl> = new Map();
  private musicCache: Map<Music, Howl> = new Map();
  private currentMusic: Howl | null = null;
  private currentMusicTrack: Music | null = null;
  private isInitialized = false;
  private isMuted = false;
  private sfxVolume = 0.7;
  private musicVolume = 0.4;

  private constructor() {
    // Configure Howler for mobile compatibility
    // HTML5 audio is required for iOS Safari
    Howler.html5PoolSize = 10;
  }

  /**
   * Get the AudioManager singleton instance
   */
  public static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  /**
   * Initialize audio system
   * Must be called from a user interaction on mobile devices
   */
  public async init(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Unlock audio on mobile by playing a silent sound
      const unlock = new Howl({
        src: ['data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAAABmYWN0BAAAAAAAAABkYXRhAAAAAA=='],
        volume: 0,
      });
      unlock.play();

      // Preload sound effects
      await this.preloadSFX();

      this.isInitialized = true;
    } catch (error) {
      console.error('Failed to initialize audio:', error);
    }
  }

  /**
   * Preload all sound effects
   */
  private async preloadSFX(): Promise<void> {
    const promises = Object.entries(SFX_URLS).map(([key, url]) => {
      return new Promise<void>((resolve) => {
        const sound = new Howl({
          src: [url],
          html5: true, // Use HTML5 Audio for mobile compatibility
          volume: this.sfxVolume,
          preload: true,
          onload: () => resolve(),
          onloaderror: (id, error) => {
            console.warn(`Failed to load SFX ${key}:`, error);
            resolve(); // Continue even if a sound fails to load
          },
        });
        this.sfxCache.set(key as SFX, sound);
      });
    });

    await Promise.all(promises);
  }

  /**
   * Play a sound effect
   */
  public playSFX(sfx: SFX): void {
    if (!this.isInitialized || this.isMuted) return;

    const sound = this.sfxCache.get(sfx);
    if (sound) {
      sound.play();
    } else {
      console.warn(`SFX ${sfx} not found in cache`);
    }
  }

  /**
   * Play background music
   */
  public playMusic(track: Music, loop = true): void {
    if (!this.isInitialized || this.isMuted) return;

    // If the same track is already playing, don't restart it
    if (this.currentMusicTrack === track && this.currentMusic?.playing()) {
      return;
    }

    // Stop current music
    this.stopMusic();

    // Load or get from cache
    let music = this.musicCache.get(track);
    if (!music) {
      music = new Howl({
        src: [MUSIC_URLS[track]],
        html5: true,
        loop,
        volume: this.musicVolume,
        onloaderror: (id, error) => {
          console.warn(`Failed to load music ${track}:`, error);
        },
      });
      this.musicCache.set(track, music);
    }

    this.currentMusic = music;
    this.currentMusicTrack = track;
    music.play();
  }

  /**
   * Stop background music
   */
  public stopMusic(): void {
    if (this.currentMusic) {
      this.currentMusic.stop();
      this.currentMusic = null;
      this.currentMusicTrack = null;
    }
  }

  /**
   * Pause background music
   */
  public pauseMusic(): void {
    if (this.currentMusic) {
      this.currentMusic.pause();
    }
  }

  /**
   * Resume background music
   */
  public resumeMusic(): void {
    if (this.currentMusic) {
      this.currentMusic.play();
    }
  }

  /**
   * Set sound effects volume (0.0 - 1.0)
   */
  public setSFXVolume(volume: number): void {
    this.sfxVolume = Math.max(0, Math.min(1, volume));
    this.sfxCache.forEach((sound) => {
      sound.volume(this.sfxVolume);
    });
  }

  /**
   * Set music volume (0.0 - 1.0)
   */
  public setMusicVolume(volume: number): void {
    this.musicVolume = Math.max(0, Math.min(1, volume));
    if (this.currentMusic) {
      this.currentMusic.volume(this.musicVolume);
    }
  }

  /**
   * Mute all audio
   */
  public mute(): void {
    this.isMuted = true;
    Howler.mute(true);
  }

  /**
   * Unmute all audio
   */
  public unmute(): void {
    this.isMuted = false;
    Howler.mute(false);
  }

  /**
   * Toggle mute state
   */
  public toggleMute(): boolean {
    if (this.isMuted) {
      this.unmute();
    } else {
      this.mute();
    }
    return this.isMuted;
  }

  /**
   * Get current mute state
   */
  public getMuted(): boolean {
    return this.isMuted;
  }

  /**
   * Get initialization state
   */
  public getInitialized(): boolean {
    return this.isInitialized;
  }

  /**
   * Clean up all audio resources
   */
  public destroy(): void {
    this.stopMusic();
    this.sfxCache.forEach((sound) => sound.unload());
    this.musicCache.forEach((music) => music.unload());
    this.sfxCache.clear();
    this.musicCache.clear();
    this.isInitialized = false;
  }
}

// Export singleton instance
export const audioManager = AudioManager.getInstance();
