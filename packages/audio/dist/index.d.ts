/**
 * Sound effect identifiers for the game
 */
declare enum SFX {
    SHAKE = "shake",
    VOTE = "vote",
    REVEAL = "reveal",
    TIMER_TICK = "timer-tick",
    TIMER_END = "timer-end",
    CONFETTI = "confetti"
}
/**
 * Music track identifiers
 */
declare enum Music {
    LOBBY = "lobby",
    GAME = "game"
}
/**
 * Sound effect definitions with URLs
 * Using placeholder URLs - replace with actual sound files
 */
declare const SFX_URLS: Record<SFX, string>;
/**
 * Music track definitions with URLs
 * Using placeholder URLs - replace with actual music files
 */
declare const MUSIC_URLS: Record<Music, string>;

/**
 * AudioManager singleton for managing game audio
 * Handles sound effects and background music with mobile compatibility
 */
declare class AudioManager {
    private static instance;
    private sfxCache;
    private musicCache;
    private currentMusic;
    private currentMusicTrack;
    private isInitialized;
    private isMuted;
    private sfxVolume;
    private musicVolume;
    private constructor();
    /**
     * Get the AudioManager singleton instance
     */
    static getInstance(): AudioManager;
    /**
     * Initialize audio system
     * Must be called from a user interaction on mobile devices
     */
    init(): Promise<void>;
    /**
     * Preload all sound effects
     */
    private preloadSFX;
    /**
     * Play a sound effect
     */
    playSFX(sfx: SFX): void;
    /**
     * Play background music
     */
    playMusic(track: Music, loop?: boolean): void;
    /**
     * Stop background music
     */
    stopMusic(): void;
    /**
     * Pause background music
     */
    pauseMusic(): void;
    /**
     * Resume background music
     */
    resumeMusic(): void;
    /**
     * Set sound effects volume (0.0 - 1.0)
     */
    setSFXVolume(volume: number): void;
    /**
     * Set music volume (0.0 - 1.0)
     */
    setMusicVolume(volume: number): void;
    /**
     * Mute all audio
     */
    mute(): void;
    /**
     * Unmute all audio
     */
    unmute(): void;
    /**
     * Toggle mute state
     */
    toggleMute(): boolean;
    /**
     * Get current mute state
     */
    getMuted(): boolean;
    /**
     * Get initialization state
     */
    getInitialized(): boolean;
    /**
     * Clean up all audio resources
     */
    destroy(): void;
}
declare const audioManager: AudioManager;

/**
 * React hook for accessing the AudioManager
 * Automatically initializes audio on mount and cleans up on unmount
 */
declare function useAudio(): {
    audioManager: AudioManager;
    isInitialized: boolean;
    isMuted: boolean;
    toggleMute: () => void;
    mute: () => void;
    unmute: () => void;
    playSFX: (sfx: SFX) => void;
    playMusic: (track: Music, loop?: boolean) => void;
    stopMusic: () => void;
    pauseMusic: () => void;
    resumeMusic: () => void;
    setSFXVolume: (volume: number) => void;
    setMusicVolume: (volume: number) => void;
};

/**
 * Convenience hook for playing sound effects
 * Returns functions to play specific sound effects
 */
declare function useSFX(): {
    isInitialized: boolean;
    playSFX: (sfx: SFX) => void;
    playShake: () => void;
    playVote: () => void;
    playReveal: () => void;
    playTimerTick: () => void;
    playTimerEnd: () => void;
    playConfetti: () => void;
};

export { AudioManager, MUSIC_URLS, Music, SFX, SFX_URLS, audioManager, useAudio, useSFX };
