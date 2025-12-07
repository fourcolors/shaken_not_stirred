/**
 * Game rules and scoring logic for Shaken Not Stirred
 */
export const GameRules = {
    /**
     * Minimum players required to start a game
     */
    MIN_PLAYERS: 2,
    /**
     * Maximum players allowed in a game
     */
    MAX_PLAYERS: 8,
    /**
     * Default number of rounds
     */
    DEFAULT_ROUNDS: 3,
    /**
     * Points awarded for winning a vote
     */
    VOTE_WIN_POINTS: 500,
    /**
     * Points per vote received
     */
    POINTS_PER_VOTE: 100,
    /**
     * Bonus points for unanimous win
     */
    UNANIMOUS_BONUS: 250,
    /**
     * Check if game can start
     */
    canStartGame(state) {
        if (state.players.length < this.MIN_PLAYERS) {
            return {
                canStart: false,
                reason: `Need at least ${this.MIN_PLAYERS} players to start`,
            };
        }
        if (state.players.length > this.MAX_PLAYERS) {
            return {
                canStart: false,
                reason: `Maximum ${this.MAX_PLAYERS} players allowed`,
            };
        }
        return { canStart: true };
    },
    /**
     * Calculate score for a voting round
     */
    calculateRoundScore(playerId, votes, totalVoters) {
        let votesReceived = 0;
        votes.forEach((votedFor) => {
            if (votedFor === playerId) {
                votesReceived++;
            }
        });
        if (votesReceived === 0) {
            return 0;
        }
        let score = votesReceived * this.POINTS_PER_VOTE;
        // Win bonus (more than half the votes)
        if (votesReceived > totalVoters / 2) {
            score += this.VOTE_WIN_POINTS;
        }
        // Unanimous bonus
        if (votesReceived === totalVoters) {
            score += this.UNANIMOUS_BONUS;
        }
        return score;
    },
    /**
     * Determine the winner of a voting matchup
     */
    determineVoteWinner(playerAId, playerBId, votes) {
        let votesA = 0;
        let votesB = 0;
        votes.forEach((votedFor) => {
            if (votedFor === playerAId)
                votesA++;
            if (votedFor === playerBId)
                votesB++;
        });
        if (votesA === votesB) {
            return { winnerId: null, votesA, votesB };
        }
        return {
            winnerId: votesA > votesB ? playerAId : playerBId,
            votesA,
            votesB,
        };
    },
    /**
     * Get players sorted by score (for leaderboard)
     */
    getLeaderboard(players) {
        return [...players].sort((a, b) => b.score - a.score);
    },
    /**
     * Get podium positions (top 3)
     */
    getPodium(players) {
        return this.getLeaderboard(players).slice(0, 3);
    },
    /**
     * Validate room code format
     */
    isValidRoomCode(code) {
        return /^[A-Z]{4}$/.test(code);
    },
    /**
     * Validate player name
     */
    isValidPlayerName(name) {
        if (!name || name.trim().length === 0) {
            return { valid: false, reason: 'Name cannot be empty' };
        }
        if (name.length > 16) {
            return { valid: false, reason: 'Name must be 16 characters or less' };
        }
        if (!/^[a-zA-Z0-9\s]+$/.test(name)) {
            return { valid: false, reason: 'Name can only contain letters, numbers, and spaces' };
        }
        return { valid: true };
    },
};
//# sourceMappingURL=gameRules.js.map