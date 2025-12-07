import { useCallback } from 'react';
import { SFX } from '../sfx';
import { useAudio } from './useAudio';

/**
 * Convenience hook for playing sound effects
 * Returns functions to play specific sound effects
 */
export function useSFX() {
  const { playSFX, isInitialized } = useAudio();

  const playShake = useCallback(() => {
    playSFX(SFX.SHAKE);
  }, [playSFX]);

  const playVote = useCallback(() => {
    playSFX(SFX.VOTE);
  }, [playSFX]);

  const playReveal = useCallback(() => {
    playSFX(SFX.REVEAL);
  }, [playSFX]);

  const playTimerTick = useCallback(() => {
    playSFX(SFX.TIMER_TICK);
  }, [playSFX]);

  const playTimerEnd = useCallback(() => {
    playSFX(SFX.TIMER_END);
  }, [playSFX]);

  const playConfetti = useCallback(() => {
    playSFX(SFX.CONFETTI);
  }, [playSFX]);

  return {
    isInitialized,
    playSFX,
    playShake,
    playVote,
    playReveal,
    playTimerTick,
    playTimerEnd,
    playConfetti,
  };
}
