// src/AudioManager.ts
import { Howl, Howler } from "howler";

// src/sfx.ts
var SFX = /* @__PURE__ */ ((SFX3) => {
  SFX3["SHAKE"] = "shake";
  SFX3["VOTE"] = "vote";
  SFX3["REVEAL"] = "reveal";
  SFX3["TIMER_TICK"] = "timer-tick";
  SFX3["TIMER_END"] = "timer-end";
  SFX3["CONFETTI"] = "confetti";
  return SFX3;
})(SFX || {});
var Music = /* @__PURE__ */ ((Music3) => {
  Music3["LOBBY"] = "lobby";
  Music3["GAME"] = "game";
  return Music3;
})(Music || {});
var SFX_URLS = {
  ["shake" /* SHAKE */]: "https://cdn.freesound.org/previews/320/320655_5260872-lq.mp3",
  // Shake sound
  ["vote" /* VOTE */]: "https://cdn.freesound.org/previews/147/147359_1838182-lq.mp3",
  // Click/pop
  ["reveal" /* REVEAL */]: "https://cdn.freesound.org/previews/270/270303_5123851-lq.mp3",
  // Swoosh
  ["timer-tick" /* TIMER_TICK */]: "https://cdn.freesound.org/previews/142/142608_2615119-lq.mp3",
  // Tick
  ["timer-end" /* TIMER_END */]: "https://cdn.freesound.org/previews/397/397355_6406328-lq.mp3",
  // Bell/ding
  ["confetti" /* CONFETTI */]: "https://cdn.freesound.org/previews/387/387232_7255534-lq.mp3"
  // Pop/celebration
};
var MUSIC_URLS = {
  ["lobby" /* LOBBY */]: "https://cdn.freesound.org/previews/442/442943_5121236-lq.mp3",
  // Calm background
  ["game" /* GAME */]: "https://cdn.freesound.org/previews/442/442943_5121236-lq.mp3"
  // Upbeat background
};

// src/AudioManager.ts
var AudioManager = class _AudioManager {
  static instance = null;
  sfxCache = /* @__PURE__ */ new Map();
  musicCache = /* @__PURE__ */ new Map();
  currentMusic = null;
  currentMusicTrack = null;
  isInitialized = false;
  isMuted = false;
  sfxVolume = 0.7;
  musicVolume = 0.4;
  constructor() {
    Howler.html5PoolSize = 10;
  }
  /**
   * Get the AudioManager singleton instance
   */
  static getInstance() {
    if (!_AudioManager.instance) {
      _AudioManager.instance = new _AudioManager();
    }
    return _AudioManager.instance;
  }
  /**
   * Initialize audio system
   * Must be called from a user interaction on mobile devices
   */
  async init() {
    if (this.isInitialized) return;
    try {
      const unlock = new Howl({
        src: ["data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAAABmYWN0BAAAAAAAAABkYXRhAAAAAA=="],
        volume: 0
      });
      unlock.play();
      await this.preloadSFX();
      this.isInitialized = true;
    } catch (error) {
      console.error("Failed to initialize audio:", error);
    }
  }
  /**
   * Preload all sound effects
   */
  async preloadSFX() {
    const promises = Object.entries(SFX_URLS).map(([key, url]) => {
      return new Promise((resolve) => {
        const sound = new Howl({
          src: [url],
          html5: true,
          // Use HTML5 Audio for mobile compatibility
          volume: this.sfxVolume,
          preload: true,
          onload: () => resolve(),
          onloaderror: (id, error) => {
            console.warn(`Failed to load SFX ${key}:`, error);
            resolve();
          }
        });
        this.sfxCache.set(key, sound);
      });
    });
    await Promise.all(promises);
  }
  /**
   * Play a sound effect
   */
  playSFX(sfx) {
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
  playMusic(track, loop = true) {
    if (!this.isInitialized || this.isMuted) return;
    if (this.currentMusicTrack === track && this.currentMusic?.playing()) {
      return;
    }
    this.stopMusic();
    let music = this.musicCache.get(track);
    if (!music) {
      music = new Howl({
        src: [MUSIC_URLS[track]],
        html5: true,
        loop,
        volume: this.musicVolume,
        onloaderror: (id, error) => {
          console.warn(`Failed to load music ${track}:`, error);
        }
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
  stopMusic() {
    if (this.currentMusic) {
      this.currentMusic.stop();
      this.currentMusic = null;
      this.currentMusicTrack = null;
    }
  }
  /**
   * Pause background music
   */
  pauseMusic() {
    if (this.currentMusic) {
      this.currentMusic.pause();
    }
  }
  /**
   * Resume background music
   */
  resumeMusic() {
    if (this.currentMusic) {
      this.currentMusic.play();
    }
  }
  /**
   * Set sound effects volume (0.0 - 1.0)
   */
  setSFXVolume(volume) {
    this.sfxVolume = Math.max(0, Math.min(1, volume));
    this.sfxCache.forEach((sound) => {
      sound.volume(this.sfxVolume);
    });
  }
  /**
   * Set music volume (0.0 - 1.0)
   */
  setMusicVolume(volume) {
    this.musicVolume = Math.max(0, Math.min(1, volume));
    if (this.currentMusic) {
      this.currentMusic.volume(this.musicVolume);
    }
  }
  /**
   * Mute all audio
   */
  mute() {
    this.isMuted = true;
    Howler.mute(true);
  }
  /**
   * Unmute all audio
   */
  unmute() {
    this.isMuted = false;
    Howler.mute(false);
  }
  /**
   * Toggle mute state
   */
  toggleMute() {
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
  getMuted() {
    return this.isMuted;
  }
  /**
   * Get initialization state
   */
  getInitialized() {
    return this.isInitialized;
  }
  /**
   * Clean up all audio resources
   */
  destroy() {
    this.stopMusic();
    this.sfxCache.forEach((sound) => sound.unload());
    this.musicCache.forEach((music) => music.unload());
    this.sfxCache.clear();
    this.musicCache.clear();
    this.isInitialized = false;
  }
};
var audioManager = AudioManager.getInstance();

// src/hooks/useAudio.ts
import { useEffect, useState } from "react";
function useAudio() {
  const [isInitialized, setIsInitialized] = useState(audioManager.getInitialized());
  const [isMuted, setIsMuted] = useState(audioManager.getMuted());
  useEffect(() => {
    const initAudio = async () => {
      if (!audioManager.getInitialized()) {
        await audioManager.init();
        setIsInitialized(audioManager.getInitialized());
      }
    };
    initAudio();
    return () => {
      audioManager.stopMusic();
    };
  }, []);
  const toggleMute = () => {
    audioManager.toggleMute();
    setIsMuted(audioManager.getMuted());
  };
  const mute = () => {
    audioManager.mute();
    setIsMuted(true);
  };
  const unmute = () => {
    audioManager.unmute();
    setIsMuted(false);
  };
  return {
    audioManager,
    isInitialized,
    isMuted,
    toggleMute,
    mute,
    unmute,
    playSFX: audioManager.playSFX.bind(audioManager),
    playMusic: audioManager.playMusic.bind(audioManager),
    stopMusic: audioManager.stopMusic.bind(audioManager),
    pauseMusic: audioManager.pauseMusic.bind(audioManager),
    resumeMusic: audioManager.resumeMusic.bind(audioManager),
    setSFXVolume: audioManager.setSFXVolume.bind(audioManager),
    setMusicVolume: audioManager.setMusicVolume.bind(audioManager)
  };
}

// src/hooks/useSFX.ts
import { useCallback } from "react";
function useSFX() {
  const { playSFX, isInitialized } = useAudio();
  const playShake = useCallback(() => {
    playSFX("shake" /* SHAKE */);
  }, [playSFX]);
  const playVote = useCallback(() => {
    playSFX("vote" /* VOTE */);
  }, [playSFX]);
  const playReveal = useCallback(() => {
    playSFX("reveal" /* REVEAL */);
  }, [playSFX]);
  const playTimerTick = useCallback(() => {
    playSFX("timer-tick" /* TIMER_TICK */);
  }, [playSFX]);
  const playTimerEnd = useCallback(() => {
    playSFX("timer-end" /* TIMER_END */);
  }, [playSFX]);
  const playConfetti = useCallback(() => {
    playSFX("confetti" /* CONFETTI */);
  }, [playSFX]);
  return {
    isInitialized,
    playSFX,
    playShake,
    playVote,
    playReveal,
    playTimerTick,
    playTimerEnd,
    playConfetti
  };
}
export {
  AudioManager,
  MUSIC_URLS,
  Music,
  SFX,
  SFX_URLS,
  audioManager,
  useAudio,
  useSFX
};
