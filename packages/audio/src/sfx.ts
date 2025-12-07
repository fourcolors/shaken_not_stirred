/**
 * Sound effect identifiers for the game
 */
export enum SFX {
  SHAKE = 'shake',
  VOTE = 'vote',
  REVEAL = 'reveal',
  TIMER_TICK = 'timer-tick',
  TIMER_END = 'timer-end',
  CONFETTI = 'confetti',
}

/**
 * Music track identifiers
 */
export enum Music {
  LOBBY = 'lobby',
  GAME = 'game',
}

/**
 * Sound effect definitions with URLs
 * Using placeholder URLs - replace with actual sound files
 */
export const SFX_URLS: Record<SFX, string> = {
  [SFX.SHAKE]: 'https://cdn.freesound.org/previews/320/320655_5260872-lq.mp3', // Shake sound
  [SFX.VOTE]: 'https://cdn.freesound.org/previews/147/147359_1838182-lq.mp3', // Click/pop
  [SFX.REVEAL]: 'https://cdn.freesound.org/previews/270/270303_5123851-lq.mp3', // Swoosh
  [SFX.TIMER_TICK]: 'https://cdn.freesound.org/previews/142/142608_2615119-lq.mp3', // Tick
  [SFX.TIMER_END]: 'https://cdn.freesound.org/previews/397/397355_6406328-lq.mp3', // Bell/ding
  [SFX.CONFETTI]: 'https://cdn.freesound.org/previews/387/387232_7255534-lq.mp3', // Pop/celebration
};

/**
 * Music track definitions with URLs
 * Using placeholder URLs - replace with actual music files
 */
export const MUSIC_URLS: Record<Music, string> = {
  [Music.LOBBY]: 'https://cdn.freesound.org/previews/442/442943_5121236-lq.mp3', // Calm background
  [Music.GAME]: 'https://cdn.freesound.org/previews/442/442943_5121236-lq.mp3', // Upbeat background
};
