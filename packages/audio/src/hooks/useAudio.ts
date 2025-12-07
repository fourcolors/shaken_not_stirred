import { useEffect, useState } from 'react';
import { audioManager } from '../AudioManager';

/**
 * React hook for accessing the AudioManager
 * Automatically initializes audio on mount and cleans up on unmount
 */
export function useAudio() {
  const [isInitialized, setIsInitialized] = useState(audioManager.getInitialized());
  const [isMuted, setIsMuted] = useState(audioManager.getMuted());

  useEffect(() => {
    // Initialize audio system
    const initAudio = async () => {
      if (!audioManager.getInitialized()) {
        await audioManager.init();
        setIsInitialized(audioManager.getInitialized());
      }
    };

    initAudio();

    // Cleanup is handled by the singleton, but we can stop music on unmount
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
    setMusicVolume: audioManager.setMusicVolume.bind(audioManager),
  };
}
