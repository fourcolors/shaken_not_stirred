import React, { useState } from 'react';
import { PhoneLanding } from '../../organisms/PhoneLanding';
import { AvatarBuilder } from '../../organisms/AvatarBuilder';
import { PhoneLobby } from '../../organisms/PhoneLobby';
import { WritingInput } from '../../organisms/WritingInput';
import { ShakeSubmit } from '../../organisms/ShakeSubmit';
import { VotingPad } from '../../organisms/VotingPad';
import { WaitingScreen } from '../../organisms/WaitingScreen';
import type { AvatarShape } from '../../atoms/Avatar';

export type PhoneFlowScreen =
  | 'landing'
  | 'avatar'
  | 'lobby'
  | 'writing'
  | 'shaking'
  | 'voting'
  | 'waiting';

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

export interface PhoneFlowPlayer {
  id: string;
  name: string;
  avatarShape: AvatarShape;
  avatarColor: string;
  isVIP?: boolean;
  isDJ?: boolean;
  hasSubmitted?: boolean;
}

export interface PhoneFlowRound {
  prompt: string;
}

export interface PhoneFlowProps {
  /** Current game phase */
  phase: GamePhase;
  /** Room code */
  roomCode?: string;
  /** All players */
  players: PhoneFlowPlayer[];
  /** Current round number */
  currentRound: number;
  /** Time remaining in seconds */
  timerRemaining: number;
  /** Total timer duration in seconds */
  timerDuration: number;
  /** All rounds data */
  rounds: PhoneFlowRound[];
  /** Current player ID (after joining) */
  playerId?: string;
  /** Callbacks */
  onJoin?: (roomCode: string) => void;
  onCreatePlayer?: (data: {
    name: string;
    shape: AvatarShape;
    color: string;
    isDrinking: boolean;
  }) => void;
  onSubmitAnswer?: (answer: string) => void;
  onVote?: (choice: 'A' | 'B') => void;
  onLeave?: () => void;
  onStartGame?: () => void;
}

/**
 * Phone/controller game flow template.
 * Renders the appropriate mobile screen based on game phase.
 * This is a pure presentation component - state is passed via props.
 */
export function PhoneFlow({
  phase,
  roomCode,
  players,
  currentRound,
  timerRemaining,
  timerDuration,
  rounds,
  playerId,
  onJoin,
  onCreatePlayer,
  onSubmitAnswer,
  onVote,
  onLeave,
  onStartGame,
}: PhoneFlowProps) {
  const [screen, setScreen] = useState<PhoneFlowScreen>('landing');
  const [shakeProgress, setShakeProgress] = useState(0);

  // Get current player
  const currentPlayer = players.find((p) => p.id === playerId);

  // Determine player role
  const getRole = () => {
    if (currentPlayer?.isVIP) return 'vip';
    if (currentPlayer?.isDJ) return 'dj';
    return 'player';
  };

  // Get current round data
  const currentRoundData = rounds[currentRound - 1];

  // Handle screen based on game phase and local state
  const getEffectiveScreen = (): PhoneFlowScreen => {
    // Pre-join screens
    if (!playerId) {
      return screen === 'avatar' ? 'avatar' : 'landing';
    }

    // Map game phase to phone screen
    switch (phase) {
      case 'lobby':
        return 'lobby';
      case 'writing':
        return currentPlayer?.hasSubmitted ? 'waiting' : 'writing';
      case 'shaking':
        return shakeProgress >= 100 ? 'waiting' : 'shaking';
      case 'voting':
        return 'voting';
      case 'intro':
      case 'reveal':
      case 'summary':
      case 'podium':
        return 'waiting';
      default:
        return 'waiting';
    }
  };

  const effectiveScreen = getEffectiveScreen();

  // Render based on screen
  switch (effectiveScreen) {
    case 'landing':
      return (
        <PhoneLanding
          mode="join"
          onJoin={(code) => {
            onJoin?.(code);
            setScreen('avatar');
          }}
        />
      );

    case 'avatar':
      return (
        <AvatarBuilder
          onConfirm={(data) => {
            onCreatePlayer?.(data);
          }}
        />
      );

    case 'lobby':
      return (
        <PhoneLobby
          currentPlayer={{
            id: currentPlayer?.id || '',
            name: currentPlayer?.name || '',
            avatarShape: currentPlayer?.avatarShape || 'cube',
            avatarColor: currentPlayer?.avatarColor || '#CCFF00',
            isVIP: currentPlayer?.isVIP,
            isDJ: currentPlayer?.isDJ,
          }}
          players={players.map((p) => ({
            id: p.id,
            name: p.name,
            avatarShape: p.avatarShape,
            avatarColor: p.avatarColor,
            isVIP: p.isVIP,
            isDJ: p.isDJ,
          }))}
          roomCode={roomCode || ''}
          role={getRole()}
          onStartGame={onStartGame}
          onLeave={onLeave}
        />
      );

    case 'writing':
      return (
        <WritingInput
          prompt={currentRoundData?.prompt || 'Loading...'}
          timeRemaining={timerRemaining}
          totalTime={timerDuration}
          isPanic={timerRemaining <= 10}
          onSubmit={onSubmitAnswer}
        />
      );

    case 'shaking':
      return (
        <ShakeSubmit
          progress={shakeProgress}
          targetShakes={50}
          currentShakes={Math.floor(shakeProgress / 2)}
          isComplete={shakeProgress >= 100}
        />
      );

    case 'voting':
      return (
        <VotingPad
          prompt={currentRoundData?.prompt || ''}
          answerA="Answer A placeholder"
          answerB="Answer B placeholder"
          timeRemaining={timerRemaining}
          totalTime={timerDuration}
          onVote={onVote}
        />
      );

    case 'waiting':
      return (
        <WaitingScreen
          reason={
            phase === 'voting'
              ? 'voting'
              : phase === 'reveal'
                ? 'results'
                : phase === 'summary'
                  ? 'next-round'
                  : 'host'
          }
          playerShape={currentPlayer?.avatarShape}
          playerColor={currentPlayer?.avatarColor}
        />
      );

    default:
      return (
        <WaitingScreen
          reason="host"
          playerShape={currentPlayer?.avatarShape}
          playerColor={currentPlayer?.avatarColor}
        />
      );
  }
}

export default PhoneFlow;
