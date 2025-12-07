import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { ButtonHTMLAttributes, ReactNode, ElementType, InputHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual style variant */
    variant?: ButtonVariant;
    /** Size of the button */
    size?: ButtonSize;
    /** Show loading spinner and disable interactions */
    isLoading?: boolean;
    /** Expand to full width of container */
    fullWidth?: boolean;
    /** Enable neon glow effect */
    glow?: boolean;
    /** Button content */
    children: ReactNode;
}
/**
 * Primary interactive button component with Acid Lounge styling.
 * Supports multiple variants, sizes, and visual effects.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="lg" glow>
 *   Start Game
 * </Button>
 * ```
 */
declare function Button({ variant, size, isLoading, fullWidth, glow, disabled, className, children, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

type TypographyVariant = 'hero' | 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body-sm' | 'caption' | 'label';
type TypographyColor = 'primary' | 'secondary' | 'muted' | 'accent' | 'success' | 'error' | 'inherit';
interface TypographyProps {
    /** Typography style variant */
    variant?: TypographyVariant;
    /** Text color */
    color?: TypographyColor;
    /** Apply neon glow effect */
    glow?: boolean;
    /** Use kinetic/futuristic font (Orbitron) */
    kinetic?: boolean;
    /** Text alignment */
    align?: 'left' | 'center' | 'right';
    /** Render as different HTML element */
    as?: ElementType;
    /** Additional CSS class */
    className?: string;
    /** Text content */
    children: ReactNode;
}
/**
 * Typography component for consistent text styling with Acid Lounge aesthetic.
 * Supports display fonts, neon glow effects, and kinetic styling.
 *
 * @example
 * ```tsx
 * <Typography variant="hero" glow kinetic>
 *   SHAKEN NOT STIRRED
 * </Typography>
 * ```
 */
declare function Typography({ variant, color, glow, kinetic, align, as, className, children, }: TypographyProps): react_jsx_runtime.JSX.Element;

type InputSize = 'sm' | 'md' | 'lg';
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** Size of the input */
    size?: InputSize;
    /** Show error styling */
    hasError?: boolean;
    /** Show panic mode (red borders, for timer < 10s) */
    panicMode?: boolean;
    /** Enable neon glow on focus */
    glow?: boolean;
    /** Label text above the input */
    label?: string;
    /** Error message below the input */
    errorMessage?: string;
}
/**
 * Text input component with Acid Lounge styling.
 * Supports panic mode for time-sensitive inputs.
 *
 * @example
 * ```tsx
 * <Input
 *   label="Your Answer"
 *   placeholder="Type something clever..."
 *   panicMode={timeRemaining < 10}
 * />
 * ```
 */
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

type AvatarShape = 'cube' | 'pyramid' | 'sphere' | 'diamond';
type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
interface AvatarProps {
    /** Player's display name (optional for preview mode) */
    name?: string;
    /** Avatar shape */
    shape?: AvatarShape;
    /** Primary color (hex string or CSS color) */
    color?: string;
    /** Size of the avatar */
    size?: AvatarSize;
    /** Show drinking indicator */
    isDrinking?: boolean;
    /** Show VIP crown */
    isVIP?: boolean;
    /** Show DJ headphones */
    isDJ?: boolean;
    /** Enable hover animation */
    animated?: boolean;
    /** Additional CSS class */
    className?: string;
}
/**
 * Player avatar component with geometric shapes and Acid Lounge colors.
 * Displays player identity with optional role indicators.
 *
 * @example
 * ```tsx
 * <Avatar
 *   name="Player 1"
 *   shape="cube"
 *   color="#CCFF00"
 *   isVIP
 *   isDrinking
 * />
 * ```
 */
declare function Avatar({ name, shape, color, size, isDrinking, isVIP, isDJ, animated, className, }: AvatarProps): react_jsx_runtime.JSX.Element;

interface PlayerCardProps {
    /** Player's display name */
    name: string;
    /** Avatar shape */
    shape?: AvatarShape;
    /** Avatar color (hex string) */
    color?: string;
    /** Player's current score */
    score?: number;
    /** Score delta from last round (e.g., +500) */
    scoreDelta?: number;
    /** Player rank position */
    rank?: number;
    /** Is this player the VIP/Host */
    isVIP?: boolean;
    /** Is this player the DJ */
    isDJ?: boolean;
    /** Is this player drinking */
    isDrinking?: boolean;
    /** Is this player currently active/selected */
    isActive?: boolean;
    /** Has this player submitted their answer */
    hasSubmitted?: boolean;
    /** Additional CSS class */
    className?: string;
}
/**
 * Player card molecule displaying avatar, name, score, and status.
 * Used in lobby grids and leaderboards.
 *
 * @example
 * ```tsx
 * <PlayerCard
 *   name="Alice"
 *   shape="cube"
 *   color="#CCFF00"
 *   score={1500}
 *   scoreDelta={500}
 *   rank={1}
 *   isVIP
 * />
 * ```
 */
declare function PlayerCard({ name, shape, color, score, scoreDelta, rank, isVIP, isDJ, isDrinking, isActive, hasSubmitted, className, }: PlayerCardProps): react_jsx_runtime.JSX.Element;

interface TimerProps {
    /** Total duration in seconds */
    duration: number;
    /** Current time remaining in seconds (controlled) */
    timeRemaining?: number;
    /** Callback when timer completes */
    onComplete?: () => void;
    /** Callback on each tick (receives remaining seconds) */
    onTick?: (remaining: number) => void;
    /** Whether to auto-start the timer */
    autoStart?: boolean;
    /** Threshold for panic mode (seconds) */
    panicThreshold?: number;
    /** Size variant */
    size?: 'sm' | 'md' | 'lg';
    /** Show as circular progress or bar */
    variant?: 'circular' | 'bar';
    /** Additional CSS class */
    className?: string;
}
/**
 * Countdown timer with visual progress indicator.
 * Supports panic mode when time is running low.
 *
 * @example
 * ```tsx
 * <Timer
 *   duration={60}
 *   panicThreshold={10}
 *   onComplete={() => console.log('Time up!')}
 * />
 * ```
 */
declare function Timer({ duration, timeRemaining: controlledTime, onComplete, onTick, autoStart, panicThreshold, size, variant, className, }: TimerProps): react_jsx_runtime.JSX.Element;

interface SplashScreenProps {
    /** Room code to display (optional) */
    roomCode?: string;
    /** Whether to show the QR code placeholder */
    showQR?: boolean;
    /** Custom subtitle text */
    subtitle?: string;
    /** Callback when start/host button is clicked */
    onStart?: () => void;
    /** Additional CSS class */
    className?: string;
}
/**
 * Host/TV Splash Screen - The Attract Mode.
 * Features animated "Acid Liquid" logo with "Scan QR to Join" CTA.
 *
 * Note: This is the HTML/CSS layer. The liquid background effect
 * should be rendered separately with the PixiStage + LiquidBackground.
 *
 * @example
 * ```tsx
 * <PixiStage width={1920} height={1080}>
 *   <LiquidBackground />
 * </PixiStage>
 * <SplashScreen roomCode="ABCD" showQR />
 * ```
 */
declare function SplashScreen({ roomCode, showQR, subtitle, onStart, className, }: SplashScreenProps): react_jsx_runtime.JSX.Element;

interface LobbyPlayer {
    id: string;
    name: string;
    avatarShape: AvatarShape;
    avatarColor: string;
    isVIP?: boolean;
    isDJ?: boolean;
    isDrinking?: boolean;
}
type LobbyState = 'empty' | 'populating' | 'ready';
interface LobbyProps {
    /** Current lobby state */
    state: LobbyState;
    /** Room code to display */
    roomCode: string;
    /** List of players in lobby */
    players: LobbyPlayer[];
    /** Maximum players allowed */
    maxPlayers?: number;
    /** Whether current user is VIP (can start game) */
    isVIP?: boolean;
    /** Callback when start game is clicked */
    onStartGame?: () => void;
    /** Callback when settings is clicked */
    onSettings?: () => void;
    /** Additional CSS class */
    className?: string;
}
/**
 * Host/TV Lobby screen showing players joining the game.
 * Displays different states: empty, populating, and ready.
 */
declare function Lobby({ state, roomCode, players, maxPlayers, isVIP, onStartGame, onSettings, className, }: LobbyProps): react_jsx_runtime.JSX.Element;

type SpotifyAuthState = 'idle' | 'connecting' | 'success' | 'error';
interface SpotifyAuthProps {
    /** Current authentication state */
    state: SpotifyAuthState;
    /** Connected account name (when authenticated) */
    accountName?: string;
    /** Error message (when in error state) */
    errorMessage?: string;
    /** Callback when connect is clicked */
    onConnect?: () => void;
    /** Callback when skip is clicked */
    onSkip?: () => void;
    /** Callback when disconnect is clicked */
    onDisconnect?: () => void;
    /** Additional CSS class */
    className?: string;
}
/**
 * Spotify authentication screen for DJ mode.
 * Allows host to connect their Spotify account for music integration.
 */
declare function SpotifyAuth({ state, accountName, errorMessage, onConnect, onSkip, onDisconnect, className, }: SpotifyAuthProps): react_jsx_runtime.JSX.Element;

interface GameSettings {
    /** Number of rounds (3-10) */
    rounds: number;
    /** Time limit per answer in seconds */
    timeLimit: number;
    /** Enable drinking mode */
    drinkingMode: boolean;
    /** Enable DJ mode (Spotify integration) */
    djMode: boolean;
    /** Content filter level */
    contentFilter: 'family' | 'adult' | 'spicy';
}
interface SettingsProps {
    /** Current settings */
    settings: GameSettings;
    /** Whether Spotify is connected */
    spotifyConnected?: boolean;
    /** Callback when settings change */
    onSettingsChange?: (settings: GameSettings) => void;
    /** Callback when close is clicked */
    onClose?: () => void;
    /** Callback to manage Spotify */
    onManageSpotify?: () => void;
    /** Whether overlay is open */
    isOpen?: boolean;
    /** Additional CSS class */
    className?: string;
}
/**
 * Settings overlay for game configuration.
 * Allows VIP to adjust game parameters before starting.
 */
declare function Settings({ settings, spotifyConnected, onSettingsChange, onClose, onManageSpotify, isOpen, className, }: SettingsProps): react_jsx_runtime.JSX.Element | null;

type ReconnectState = 'disconnected' | 'reconnecting' | 'failed';
interface ReconnectProps {
    /** Current reconnection state */
    state: ReconnectState;
    /** Number of reconnection attempts */
    attempts?: number;
    /** Maximum reconnection attempts */
    maxAttempts?: number;
    /** Error message for failed state */
    errorMessage?: string;
    /** Callback when retry is clicked */
    onRetry?: () => void;
    /** Callback to start new game */
    onNewGame?: () => void;
    /** Additional CSS class */
    className?: string;
}
/**
 * Reconnection screen with glitch effects.
 * Shown when connection to server is lost.
 */
declare function Reconnect({ state, attempts, maxAttempts, errorMessage, onRetry, onNewGame, className, }: ReconnectProps): react_jsx_runtime.JSX.Element;

type PhoneLandingMode = 'join' | 'rejoin';
interface PhoneLandingProps {
    /** Current mode */
    mode?: PhoneLandingMode;
    /** Pre-filled room code (from URL or QR) */
    initialRoomCode?: string;
    /** Previous player name for rejoin */
    previousName?: string;
    /** Whether currently connecting */
    isConnecting?: boolean;
    /** Error message to display */
    errorMessage?: string;
    /** Callback when join is submitted */
    onJoin?: (roomCode: string) => void;
    /** Callback when rejoin is clicked */
    onRejoin?: () => void;
    /** Callback to switch modes */
    onModeSwitch?: (mode: PhoneLandingMode) => void;
    /** Additional CSS class */
    className?: string;
}
/**
 * Phone landing screen for joining a game.
 * Supports both new join and rejoin flows.
 */
declare function PhoneLanding({ mode, initialRoomCode, previousName, isConnecting, errorMessage, onJoin, onRejoin, onModeSwitch, className, }: PhoneLandingProps): react_jsx_runtime.JSX.Element;

interface AvatarBuilderProps {
    /** Initial player name */
    initialName?: string;
    /** Initial avatar shape */
    initialShape?: AvatarShape;
    /** Initial avatar color */
    initialColor?: string;
    /** Whether player wants drinking mode */
    initialDrinking?: boolean;
    /** Whether currently submitting */
    isSubmitting?: boolean;
    /** Error message */
    errorMessage?: string;
    /** Callback when avatar is confirmed */
    onConfirm?: (data: {
        name: string;
        shape: AvatarShape;
        color: string;
        isDrinking: boolean;
    }) => void;
    /** Additional CSS class */
    className?: string;
}
/**
 * Avatar builder screen for customizing player appearance.
 * Players choose name, shape, color, and drinking preference.
 */
declare function AvatarBuilder({ initialName, initialShape, initialColor, initialDrinking, isSubmitting, errorMessage, onConfirm, className, }: AvatarBuilderProps): react_jsx_runtime.JSX.Element;

interface PhoneLobbyPlayer {
    id: string;
    name: string;
    avatarShape: AvatarShape;
    avatarColor: string;
    isVIP?: boolean;
    isDJ?: boolean;
}
type PhoneLobbyRole = 'player' | 'vip' | 'dj';
interface PhoneLobbyProps {
    /** Current player info */
    currentPlayer: PhoneLobbyPlayer;
    /** All players in lobby */
    players: PhoneLobbyPlayer[];
    /** Room code */
    roomCode: string;
    /** Current player's role */
    role: PhoneLobbyRole;
    /** Whether game is starting */
    isStarting?: boolean;
    /** Callback when VIP starts game */
    onStartGame?: () => void;
    /** Callback when DJ opens playlist */
    onOpenPlaylist?: () => void;
    /** Callback to leave game */
    onLeave?: () => void;
    /** Additional CSS class */
    className?: string;
}
/**
 * Phone lobby screen showing waiting state.
 * Different views for player, VIP, and DJ roles.
 */
declare function PhoneLobby({ currentPlayer, players, roomCode, role, isStarting, onStartGame, onOpenPlaylist, onLeave, className, }: PhoneLobbyProps): react_jsx_runtime.JSX.Element;

interface WritingInputProps {
    /** The prompt to answer */
    prompt: string;
    /** Time remaining in seconds */
    timeRemaining: number;
    /** Total time for this phase */
    totalTime: number;
    /** Maximum character limit */
    maxLength?: number;
    /** Whether already submitted */
    isSubmitted?: boolean;
    /** Panic mode (< 10 seconds) */
    isPanic?: boolean;
    /** Callback when answer is submitted */
    onSubmit?: (answer: string) => void;
    /** Additional CSS class */
    className?: string;
}
/**
 * Phone input screen for writing answers.
 * Players type their answer and submit before time runs out.
 */
declare function WritingInput({ prompt, timeRemaining, totalTime, maxLength, isSubmitted, isPanic, onSubmit, className, }: WritingInputProps): react_jsx_runtime.JSX.Element;

interface VotingPadProps {
    /** The original prompt */
    prompt: string;
    /** Answer A text */
    answerA: string;
    /** Answer B text */
    answerB: string;
    /** Time remaining */
    timeRemaining: number;
    /** Total time */
    totalTime: number;
    /** Already voted */
    hasVoted?: boolean;
    /** Callback when vote is cast */
    onVote?: (choice: 'A' | 'B') => void;
    /** Additional CSS class */
    className?: string;
}
/**
 * Phone voting interface.
 * Players tap left or right to vote for their favorite answer.
 */
declare function VotingPad({ prompt, answerA, answerB, timeRemaining, totalTime, hasVoted, onVote, className, }: VotingPadProps): react_jsx_runtime.JSX.Element;

interface ShakeSubmitProps {
    /** Current shake progress (0-100) */
    progress: number;
    /** Target number of shakes */
    targetShakes: number;
    /** Current shake count */
    currentShakes: number;
    /** Whether shake is complete */
    isComplete?: boolean;
    /** Additional CSS class */
    className?: string;
}
/**
 * Phone shake-to-submit screen.
 * Players physically shake their phone to "mix their cocktail".
 */
declare function ShakeSubmit({ progress, targetShakes, currentShakes, isComplete, className, }: ShakeSubmitProps): react_jsx_runtime.JSX.Element;

type WaitingReason = 'voting' | 'results' | 'next-round' | 'other-players' | 'host';
interface WaitingScreenProps {
    /** Why we're waiting */
    reason: WaitingReason;
    /** Custom message (optional) */
    message?: string;
    /** Current player avatar */
    playerShape?: AvatarShape;
    /** Current player color */
    playerColor?: string;
    /** Additional CSS class */
    className?: string;
}
/**
 * Generic waiting screen for phone.
 * Shows when player needs to wait for game events.
 */
declare function WaitingScreen({ reason, message, playerShape, playerColor, className, }: WaitingScreenProps): react_jsx_runtime.JSX.Element;

interface GameIntroProps {
    /** Current round number */
    roundNumber: number;
    /** Total number of rounds */
    totalRounds: number;
    /** Round theme/category (optional) */
    theme?: string;
    /** Callback when intro animation completes */
    onComplete?: () => void;
    /** Duration of intro in ms */
    duration?: number;
    /** Additional CSS class */
    className?: string;
}
/**
 * Game intro animation shown at the start of each round.
 * Displays round number with dramatic reveal animation.
 */
declare function GameIntro({ roundNumber, totalRounds, theme, onComplete, duration, className, }: GameIntroProps): react_jsx_runtime.JSX.Element;

interface WritingPhasePlayer {
    id: string;
    name: string;
    avatarShape: AvatarShape;
    avatarColor: string;
    hasSubmitted?: boolean;
}
interface WritingPhaseProps {
    /** The prompt for this round */
    prompt: string;
    /** Time remaining in seconds */
    timeRemaining: number;
    /** Total time for this phase */
    totalTime: number;
    /** All players with submission status */
    players: WritingPhasePlayer[];
    /** Whether timer is in panic mode (< 10 seconds) */
    isPanic?: boolean;
    /** Callback when time expires */
    onTimeUp?: () => void;
    /** Additional CSS class */
    className?: string;
}
/**
 * Host display during the writing phase.
 * Shows prompt, timer, and player submission status.
 */
declare function WritingPhase({ prompt, timeRemaining, totalTime, players, isPanic, onTimeUp, className, }: WritingPhaseProps): react_jsx_runtime.JSX.Element;

interface ShakingPhasePlayer {
    id: string;
    name: string;
    avatarShape: AvatarShape;
    avatarColor: string;
    shakeProgress: number;
    hasCompleted: boolean;
}
interface ShakingPhaseProps {
    /** All players with shake progress */
    players: ShakingPhasePlayer[];
    /** Target shake count */
    targetShakes: number;
    /** Time remaining (optional, for timed mode) */
    timeRemaining?: number;
    /** Additional CSS class */
    className?: string;
}
/**
 * Host display during the shaking phase.
 * Shows all players' shake progress as they physically shake their phones.
 */
declare function ShakingPhase({ players, targetShakes, timeRemaining, className, }: ShakingPhaseProps): react_jsx_runtime.JSX.Element;

interface VotingAnswer {
    playerId: string;
    playerName: string;
    avatarShape: AvatarShape;
    avatarColor: string;
    answer: string;
}
interface VotingVersusProps {
    /** The original prompt */
    prompt: string;
    /** Left answer option */
    answerA: VotingAnswer;
    /** Right answer option */
    answerB: VotingAnswer;
    /** Time remaining for voting */
    timeRemaining: number;
    /** Total voting time */
    totalTime: number;
    /** Number of votes for answer A */
    votesA?: number;
    /** Number of votes for answer B */
    votesB?: number;
    /** Whether to show vote counts (during reveal) */
    showVotes?: boolean;
    /** Winner player ID (during reveal) */
    winnerId?: string;
    /** Additional CSS class */
    className?: string;
}
/**
 * Versus voting screen showing two answers side by side.
 * Players vote on their phones, host sees the matchup.
 */
declare function VotingVersus({ prompt, answerA, answerB, timeRemaining, totalTime, votesA, votesB, showVotes, winnerId, className, }: VotingVersusProps): react_jsx_runtime.JSX.Element;

interface RoundSummaryPlayer {
    id: string;
    name: string;
    avatarShape: AvatarShape;
    avatarColor: string;
    score: number;
    roundPoints: number;
    rank: number;
    previousRank?: number;
}
interface RoundSummaryProps {
    /** Current round number */
    roundNumber: number;
    /** Total rounds */
    totalRounds: number;
    /** Sorted players (by score, highest first) */
    players: RoundSummaryPlayer[];
    /** Callback when continue is clicked */
    onContinue?: () => void;
    /** Whether this is the final round */
    isFinalRound?: boolean;
    /** Additional CSS class */
    className?: string;
}
/**
 * Round summary screen showing current standings.
 * Displays leaderboard with score changes after each round.
 */
declare function RoundSummary({ roundNumber, totalRounds, players, onContinue, isFinalRound, className, }: RoundSummaryProps): react_jsx_runtime.JSX.Element;

interface PodiumPlayer {
    id: string;
    name: string;
    avatarShape: AvatarShape;
    avatarColor: string;
    score: number;
    rank: 1 | 2 | 3;
}
interface PodiumProps {
    /** Top 3 players */
    winners: [PodiumPlayer, PodiumPlayer, PodiumPlayer];
    /** Callback when play again is clicked */
    onPlayAgain?: () => void;
    /** Callback when exit is clicked */
    onExit?: () => void;
    /** Additional CSS class */
    className?: string;
}
/**
 * Final podium screen showing top 3 winners with confetti.
 * Displays winners with celebration animations.
 */
declare function Podium({ winners, onPlayAgain, onExit, className, }: PodiumProps): react_jsx_runtime.JSX.Element;

type GamePhase$1 = 'idle' | 'lobby' | 'intro' | 'writing' | 'shaking' | 'voting' | 'reveal' | 'summary' | 'podium';
interface GameFlowPlayer {
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
interface GameFlowRound {
    prompt: string;
}
interface GameFlowProps {
    /** Current game phase */
    phase: GamePhase$1;
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
declare function GameFlow({ phase, roomCode, players, currentRound, totalRounds, timerRemaining, timerDuration, rounds, isHost, onStartGame, onSettings, onPlayAgain, onExit, }: GameFlowProps): react_jsx_runtime.JSX.Element;

type PhoneFlowScreen = 'landing' | 'avatar' | 'lobby' | 'writing' | 'shaking' | 'voting' | 'waiting';
type GamePhase = 'idle' | 'lobby' | 'intro' | 'writing' | 'shaking' | 'voting' | 'reveal' | 'summary' | 'podium';
interface PhoneFlowPlayer {
    id: string;
    name: string;
    avatarShape: AvatarShape;
    avatarColor: string;
    isVIP?: boolean;
    isDJ?: boolean;
    hasSubmitted?: boolean;
}
interface PhoneFlowRound {
    prompt: string;
}
interface PhoneFlowProps {
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
declare function PhoneFlow({ phase, roomCode, players, currentRound, timerRemaining, timerDuration, rounds, playerId, onJoin, onCreatePlayer, onSubmitAnswer, onVote, onLeave, onStartGame, }: PhoneFlowProps): react_jsx_runtime.JSX.Element;

export { Avatar, AvatarBuilder, type AvatarBuilderProps, type AvatarProps, type AvatarShape, type AvatarSize, Button, type ButtonProps, type ButtonSize, type ButtonVariant, GameFlow, type GameFlowPlayer, type GameFlowProps, type GameFlowRound, GameIntro, type GameIntroProps, type GamePhase$1 as GamePhase, type GameSettings, Input, type InputProps, type InputSize, Lobby, type LobbyPlayer, type LobbyProps, type LobbyState, PhoneFlow, type PhoneFlowPlayer, type PhoneFlowProps, type PhoneFlowRound, type PhoneFlowScreen, PhoneLanding, type PhoneLandingMode, type PhoneLandingProps, PhoneLobby, type PhoneLobbyPlayer, type PhoneLobbyProps, type PhoneLobbyRole, PlayerCard, type PlayerCardProps, Podium, type PodiumPlayer, type PodiumProps, Reconnect, type ReconnectProps, type ReconnectState, RoundSummary, type RoundSummaryPlayer, type RoundSummaryProps, Settings, type SettingsProps, ShakeSubmit, type ShakeSubmitProps, ShakingPhase, type ShakingPhasePlayer, type ShakingPhaseProps, SplashScreen, type SplashScreenProps, SpotifyAuth, type SpotifyAuthProps, type SpotifyAuthState, Timer, type TimerProps, Typography, type TypographyColor, type TypographyProps, type TypographyVariant, type VotingAnswer, VotingPad, type VotingPadProps, VotingVersus, type VotingVersusProps, type WaitingReason, WaitingScreen, type WaitingScreenProps, WritingInput, type WritingInputProps, WritingPhase, type WritingPhasePlayer, type WritingPhaseProps };
