import React from 'react';
import { SplashScreen } from '../../organisms/SplashScreen';
import { Lobby } from '../../organisms/Lobby';
import { GameIntro } from '../../organisms/GameIntro';
import { WritingPhase } from '../../organisms/WritingPhase';
import { ShakingPhase } from '../../organisms/ShakingPhase';
import { VotingVersus } from '../../organisms/VotingVersus';
import { RoundSummary } from '../../organisms/RoundSummary';
import { Podium } from '../../organisms/Podium';
import type { AvatarShape } from '../../atoms/Avatar';

export type GamePhase =
  | 'idle'
  | 'lobby'
  | 'intro'
  | 'writing'
  | 'shaking'
  | 'voting'
  | 'reveal'
  | 'summary'
  | 'podium';

export interface GameFlowPlayer {
  id: string;
  name: string;
  avatarShape: AvatarShape;
  avatarColor: string;
  isVIP?: boolean;
  isDJ?: boolean;
  isDrinking?: boolean;
  hasSubmitted?: boolean;
  score: number;
}

export interface GameFlowRound {
  prompt: string;
}

export interface GameFlowProps {
  /** Current game phase */
  phase: GamePhase;
  /** Room code */
  roomCode?: string;
  /** All players */
  players: GameFlowPlayer[];
  /** Current round number (1-indexed) */
  currentRound: number;
  /** Total number of rounds */
  totalRounds: number;
  /** Time remaining in seconds */
  timerRemaining: number;
  /** Total timer duration in seconds */
  timerDuration: number;
  /** All rounds data */
  rounds: GameFlowRound[];
  /** Whether this is the host/TV display */
  isHost?: boolean;
  /** Callbacks for game actions */
  onStartGame?: () => void;
  onSettings?: () => void;
  onPlayAgain?: () => void;
  onExit?: () => void;
}

/**
 * Host/TV game flow template.
 * Renders the appropriate screen based on current game phase.
 * This is a pure presentation component - state is passed via props.
 */
export function GameFlow({
  phase,
  roomCode,
  players,
  currentRound,
  totalRounds,
  timerRemaining,
  timerDuration,
  rounds,
  isHost = true,
  onStartGame,
  onSettings,
  onPlayAgain,
  onExit,
}: GameFlowProps) {
  // Map players to lobby format
  const lobbyPlayers = players.map((p) => ({
    id: p.id,
    name: p.name,
    avatarShape: p.avatarShape,
    avatarColor: p.avatarColor,
    isVIP: p.isVIP,
    isDJ: p.isDJ,
    isDrinking: p.isDrinking,
  }));

  // Determine lobby state
  const getLobbyState = () => {
    if (players.length === 0) return 'empty';
    if (players.length < 3) return 'populating';
    return 'ready';
  };

  // Get current round data
  const currentRoundData = rounds[currentRound - 1];

  // Map players for writing phase
  const writingPlayers = players.map((p) => ({
    id: p.id,
    name: p.name,
    avatarShape: p.avatarShape,
    avatarColor: p.avatarColor,
    hasSubmitted: p.hasSubmitted,
  }));

  // Map players for shaking phase
  const shakingPlayers = players.map((p) => ({
    id: p.id,
    name: p.name,
    avatarShape: p.avatarShape,
    avatarColor: p.avatarColor,
    shakeProgress: 0, // Would come from real-time sync
    hasCompleted: false,
  }));

  // Get top 3 for podium
  const getTop3 = () => {
    const sorted = [...players].sort((a, b) => b.score - a.score);
    return [
      { ...sorted[0], rank: 1 as const },
      { ...sorted[1], rank: 2 as const },
      { ...sorted[2], rank: 3 as const },
    ] as [any, any, any];
  };

  // Get leaderboard for round summary
  const getLeaderboard = () => {
    return [...players]
      .sort((a, b) => b.score - a.score)
      .map((p, i) => ({
        id: p.id,
        name: p.name,
        avatarShape: p.avatarShape,
        avatarColor: p.avatarColor,
        score: p.score,
        roundPoints: 0, // Would be calculated from round results
        rank: i + 1,
      }));
  };

  // Render based on phase
  switch (phase) {
    case 'idle':
      return <SplashScreen onStart={onStartGame} />;

    case 'lobby':
      return (
        <Lobby
          state={getLobbyState()}
          roomCode={roomCode || 'XXXX'}
          players={lobbyPlayers}
          maxPlayers={8}
          isVIP={isHost}
          onStartGame={onStartGame}
          onSettings={onSettings}
        />
      );

    case 'intro':
      return (
        <GameIntro
          roundNumber={currentRound}
          totalRounds={totalRounds}
          theme={currentRoundData?.prompt}
        />
      );

    case 'writing':
      return (
        <WritingPhase
          prompt={currentRoundData?.prompt || 'Loading...'}
          timeRemaining={timerRemaining}
          totalTime={timerDuration}
          players={writingPlayers}
          isPanic={timerRemaining <= 10}
        />
      );

    case 'shaking':
      return (
        <ShakingPhase
          players={shakingPlayers}
          targetShakes={50}
          timeRemaining={timerRemaining}
        />
      );

    case 'voting':
    case 'reveal':
      // Would need matchup data from game logic
      return (
        <VotingVersus
          prompt={currentRoundData?.prompt || ''}
          answerA={{
            playerId: players[0]?.id || '',
            playerName: players[0]?.name || '',
            avatarShape: players[0]?.avatarShape || 'cube',
            avatarColor: players[0]?.avatarColor || '#CCFF00',
            answer: 'Answer A placeholder',
          }}
          answerB={{
            playerId: players[1]?.id || '',
            playerName: players[1]?.name || '',
            avatarShape: players[1]?.avatarShape || 'pyramid',
            avatarColor: players[1]?.avatarColor || '#FF10F0',
            answer: 'Answer B placeholder',
          }}
          timeRemaining={timerRemaining}
          totalTime={timerDuration}
          showVotes={phase === 'reveal'}
          votesA={phase === 'reveal' ? 3 : undefined}
          votesB={phase === 'reveal' ? 2 : undefined}
          winnerId={phase === 'reveal' ? players[0]?.id : undefined}
        />
      );

    case 'summary':
      return (
        <RoundSummary
          roundNumber={currentRound}
          totalRounds={totalRounds}
          players={getLeaderboard()}
          isFinalRound={currentRound >= totalRounds}
        />
      );

    case 'podium':
      return (
        <Podium
          winners={getTop3()}
          onPlayAgain={onPlayAgain}
          onExit={onExit}
        />
      );

    default:
      return <SplashScreen onStart={onStartGame} />;
  }
}

export default GameFlow;
