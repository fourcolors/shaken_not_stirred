import type { Player, GameState } from '../state/gameState';
/**
 * Game rules and scoring logic for Shaken Not Stirred
 */
export declare const GameRules: {
    /**
     * Minimum players required to start a game
     */
    MIN_PLAYERS: number;
    /**
     * Maximum players allowed in a game
     */
    MAX_PLAYERS: number;
    /**
     * Default number of rounds
     */
    DEFAULT_ROUNDS: number;
    /**
     * Points awarded for winning a vote
     */
    VOTE_WIN_POINTS: number;
    /**
     * Points per vote received
     */
    POINTS_PER_VOTE: number;
    /**
     * Bonus points for unanimous win
     */
    UNANIMOUS_BONUS: number;
    /**
     * Check if game can start
     */
    canStartGame(state: GameState): {
        canStart: boolean;
        reason?: string;
    };
    /**
     * Calculate score for a voting round
     */
    calculateRoundScore(playerId: string, votes: Map<string, string>, totalVoters: number): number;
    /**
     * Determine the winner of a voting matchup
     */
    determineVoteWinner(playerAId: string, playerBId: string, votes: Map<string, string>): {
        winnerId: string | null;
        votesA: number;
        votesB: number;
    };
    /**
     * Get players sorted by score (for leaderboard)
     */
    getLeaderboard(players: Player[]): Player[];
    /**
     * Get podium positions (top 3)
     */
    getPodium(players: Player[]): Player[];
    /**
     * Validate room code format
     */
    isValidRoomCode(code: string): boolean;
    /**
     * Validate player name
     */
    isValidPlayerName(name: string): {
        valid: boolean;
        reason?: string;
    };
};
//# sourceMappingURL=gameRules.d.ts.map