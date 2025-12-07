// src/atoms/Button/Button.tsx
import { clsx } from "clsx";

// src/atoms/Button/Button.module.css
var Button_default = {};

// src/atoms/Button/Button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  fullWidth = false,
  glow = false,
  disabled,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: clsx(
        Button_default.button,
        Button_default[variant],
        Button_default[size],
        fullWidth && Button_default.fullWidth,
        glow && Button_default.glow,
        isLoading && Button_default.loading,
        className
      ),
      disabled: disabled || isLoading,
      ...props,
      children: [
        isLoading ? /* @__PURE__ */ jsx("span", { className: Button_default.spinner, "aria-hidden": "true" }) : null,
        /* @__PURE__ */ jsx("span", { className: clsx(Button_default.content, isLoading && Button_default.hidden), children })
      ]
    }
  );
}

// src/atoms/Typography/Typography.tsx
import { clsx as clsx2 } from "clsx";

// src/atoms/Typography/Typography.module.css
var Typography_default = {};

// src/atoms/Typography/Typography.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var variantToElement = {
  hero: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  "body-sm": "p",
  caption: "span",
  label: "label"
};
function Typography({
  variant = "body",
  color = "primary",
  glow = false,
  kinetic = false,
  align,
  as,
  className,
  children
}) {
  const Component = as || variantToElement[variant];
  return /* @__PURE__ */ jsx2(
    Component,
    {
      className: clsx2(
        Typography_default.typography,
        Typography_default[variant],
        Typography_default[`color-${color}`],
        glow && Typography_default.glow,
        kinetic && Typography_default.kinetic,
        align && Typography_default[`align-${align}`],
        className
      ),
      children
    }
  );
}

// src/atoms/Input/Input.tsx
import { forwardRef } from "react";
import { clsx as clsx3 } from "clsx";

// src/atoms/Input/Input.module.css
var Input_default = {};

// src/atoms/Input/Input.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Input = forwardRef(
  ({
    size = "md",
    hasError = false,
    panicMode = false,
    glow = true,
    label,
    errorMessage,
    className,
    id,
    ...props
  }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    return /* @__PURE__ */ jsxs2("div", { className: Input_default.wrapper, children: [
      label && /* @__PURE__ */ jsx3("label", { htmlFor: inputId, className: Input_default.label, children: label }),
      /* @__PURE__ */ jsx3(
        "input",
        {
          ref,
          id: inputId,
          className: clsx3(
            Input_default.input,
            Input_default[size],
            hasError && Input_default.error,
            panicMode && Input_default.panic,
            glow && Input_default.glow,
            className
          ),
          ...props
        }
      ),
      errorMessage && /* @__PURE__ */ jsx3("span", { className: Input_default.errorMessage, children: errorMessage })
    ] });
  }
);
Input.displayName = "Input";

// src/atoms/Avatar/Avatar.tsx
import { clsx as clsx4 } from "clsx";

// src/atoms/Avatar/Avatar.module.css
var Avatar_default = {};

// src/atoms/Avatar/Avatar.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var shapeIcons = {
  cube: "\u25A0",
  pyramid: "\u25B2",
  sphere: "\u25CF",
  diamond: "\u25C6"
};
function Avatar({
  name = "",
  shape = "cube",
  color = "#CCFF00",
  size = "md",
  isDrinking = false,
  isVIP = false,
  isDJ = false,
  animated = true,
  className
}) {
  return /* @__PURE__ */ jsxs3(
    "div",
    {
      className: clsx4(
        Avatar_default.avatar,
        Avatar_default[size],
        animated && Avatar_default.animated,
        className
      ),
      children: [
        /* @__PURE__ */ jsx4(
          "div",
          {
            className: Avatar_default.shape,
            style: {
              color,
              textShadow: `0 0 10px ${color}, 0 0 20px ${color}`
            },
            children: shapeIcons[shape]
          }
        ),
        name && /* @__PURE__ */ jsx4("span", { className: Avatar_default.name, children: name }),
        /* @__PURE__ */ jsxs3("div", { className: Avatar_default.badges, children: [
          isVIP && /* @__PURE__ */ jsx4("span", { className: Avatar_default.badge, title: "VIP", children: "\u{1F451}" }),
          isDJ && /* @__PURE__ */ jsx4("span", { className: Avatar_default.badge, title: "DJ", children: "\u{1F3A7}" }),
          isDrinking && /* @__PURE__ */ jsx4("span", { className: Avatar_default.badge, title: "Drinking", children: "\u{1F378}" })
        ] })
      ]
    }
  );
}

// src/molecules/PlayerCard/PlayerCard.tsx
import { clsx as clsx5 } from "clsx";

// src/molecules/PlayerCard/PlayerCard.module.css
var PlayerCard_default = {};

// src/molecules/PlayerCard/PlayerCard.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function PlayerCard({
  name,
  shape = "cube",
  color = "#CCFF00",
  score,
  scoreDelta,
  rank,
  isVIP = false,
  isDJ = false,
  isDrinking = false,
  isActive = false,
  hasSubmitted = false,
  className
}) {
  return /* @__PURE__ */ jsxs4(
    "div",
    {
      className: clsx5(
        PlayerCard_default.card,
        isActive && PlayerCard_default.active,
        hasSubmitted && PlayerCard_default.submitted,
        className
      ),
      style: {
        "--player-color": color
      },
      children: [
        rank !== void 0 && /* @__PURE__ */ jsx5("div", { className: PlayerCard_default.rank, children: /* @__PURE__ */ jsxs4(Typography, { variant: "label", color: "muted", children: [
          "#",
          rank
        ] }) }),
        /* @__PURE__ */ jsx5(
          Avatar,
          {
            name,
            shape,
            color,
            size: "md",
            isVIP,
            isDJ,
            isDrinking,
            animated: !hasSubmitted
          }
        ),
        score !== void 0 && /* @__PURE__ */ jsxs4("div", { className: PlayerCard_default.scoreSection, children: [
          /* @__PURE__ */ jsx5(Typography, { variant: "h4", color: "primary", className: PlayerCard_default.score, children: score.toLocaleString() }),
          scoreDelta !== void 0 && scoreDelta !== 0 && /* @__PURE__ */ jsxs4(
            Typography,
            {
              variant: "caption",
              color: scoreDelta > 0 ? "success" : "error",
              glow: true,
              className: PlayerCard_default.delta,
              children: [
                scoreDelta > 0 ? "+" : "",
                scoreDelta
              ]
            }
          )
        ] }),
        hasSubmitted && /* @__PURE__ */ jsx5("div", { className: PlayerCard_default.submittedBadge, children: /* @__PURE__ */ jsx5(Typography, { variant: "caption", color: "success", children: "\u2713 Locked In" }) })
      ]
    }
  );
}

// src/molecules/Timer/Timer.tsx
import { useEffect, useState } from "react";
import { clsx as clsx6 } from "clsx";

// src/molecules/Timer/Timer.module.css
var Timer_default = {};

// src/molecules/Timer/Timer.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function Timer({
  duration,
  timeRemaining: controlledTime,
  onComplete,
  onTick,
  autoStart = true,
  panicThreshold = 10,
  size = "md",
  variant = "circular",
  className
}) {
  const [internalTime, setInternalTime] = useState(duration);
  const [isRunning, setIsRunning] = useState(autoStart);
  const timeRemaining = controlledTime ?? internalTime;
  const progress = timeRemaining / duration * 100;
  const isPanic = timeRemaining <= panicThreshold && timeRemaining > 0;
  useEffect(() => {
    if (!isRunning || controlledTime !== void 0) return;
    const interval = setInterval(() => {
      setInternalTime((prev) => {
        const newTime = Math.max(0, prev - 1);
        onTick?.(newTime);
        if (newTime === 0) {
          setIsRunning(false);
          onComplete?.();
        }
        return newTime;
      });
    }, 1e3);
    return () => clearInterval(interval);
  }, [isRunning, controlledTime, onTick, onComplete]);
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}:${secs.toString().padStart(2, "0")}` : `${secs}`;
  };
  if (variant === "bar") {
    return /* @__PURE__ */ jsxs5("div", { className: clsx6(Timer_default.barContainer, Timer_default[size], className), children: [
      /* @__PURE__ */ jsx6(
        "div",
        {
          className: clsx6(Timer_default.barProgress, isPanic && Timer_default.panic),
          style: { width: `${progress}%` }
        }
      ),
      /* @__PURE__ */ jsx6(
        Typography,
        {
          variant: size === "lg" ? "h3" : size === "sm" ? "label" : "h4",
          color: isPanic ? "error" : "primary",
          glow: isPanic,
          className: Timer_default.barTime,
          children: formatTime(timeRemaining)
        }
      )
    ] });
  }
  const circleSize = size === "lg" ? 200 : size === "sm" ? 80 : 120;
  const strokeWidth = size === "lg" ? 8 : size === "sm" ? 4 : 6;
  const radius = (circleSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress / 100);
  return /* @__PURE__ */ jsxs5(
    "div",
    {
      className: clsx6(Timer_default.circular, Timer_default[size], isPanic && Timer_default.panic, className),
      style: { width: circleSize, height: circleSize },
      children: [
        /* @__PURE__ */ jsxs5("svg", { className: Timer_default.svg, viewBox: `0 0 ${circleSize} ${circleSize}`, children: [
          /* @__PURE__ */ jsx6(
            "circle",
            {
              className: Timer_default.bgCircle,
              cx: circleSize / 2,
              cy: circleSize / 2,
              r: radius,
              strokeWidth
            }
          ),
          /* @__PURE__ */ jsx6(
            "circle",
            {
              className: clsx6(Timer_default.progressCircle, isPanic && Timer_default.panicCircle),
              cx: circleSize / 2,
              cy: circleSize / 2,
              r: radius,
              strokeWidth,
              strokeDasharray: circumference,
              strokeDashoffset,
              transform: `rotate(-90 ${circleSize / 2} ${circleSize / 2})`
            }
          )
        ] }),
        /* @__PURE__ */ jsx6("div", { className: Timer_default.timeDisplay, children: /* @__PURE__ */ jsx6(
          Typography,
          {
            variant: size === "lg" ? "h1" : size === "sm" ? "h4" : "h2",
            color: isPanic ? "error" : "primary",
            glow: isPanic,
            kinetic: true,
            children: formatTime(timeRemaining)
          }
        ) })
      ]
    }
  );
}

// src/organisms/SplashScreen/SplashScreen.tsx
import { clsx as clsx7 } from "clsx";

// src/organisms/SplashScreen/SplashScreen.module.css
var SplashScreen_default = {};

// src/organisms/SplashScreen/SplashScreen.tsx
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
function SplashScreen({
  roomCode,
  showQR = true,
  subtitle = "A Party Game Experience",
  onStart,
  className
}) {
  return /* @__PURE__ */ jsx7("div", { className: clsx7(SplashScreen_default.splash, className), children: /* @__PURE__ */ jsxs6("div", { className: SplashScreen_default.content, children: [
    /* @__PURE__ */ jsxs6("div", { className: SplashScreen_default.titleContainer, children: [
      /* @__PURE__ */ jsx7(Typography, { variant: "hero", glow: true, align: "center", className: SplashScreen_default.title, children: "SHAKEN" }),
      /* @__PURE__ */ jsx7(Typography, { variant: "h2", color: "secondary", align: "center", className: SplashScreen_default.notText, children: "NOT" }),
      /* @__PURE__ */ jsx7(Typography, { variant: "hero", glow: true, align: "center", className: SplashScreen_default.title, children: "STIRRED" })
    ] }),
    /* @__PURE__ */ jsx7(
      Typography,
      {
        variant: "h4",
        color: "muted",
        align: "center",
        kinetic: true,
        className: SplashScreen_default.subtitle,
        children: subtitle
      }
    ),
    /* @__PURE__ */ jsxs6("div", { className: SplashScreen_default.joinSection, children: [
      showQR && /* @__PURE__ */ jsxs6("div", { className: SplashScreen_default.qrContainer, children: [
        /* @__PURE__ */ jsx7("div", { className: SplashScreen_default.qrPlaceholder, children: /* @__PURE__ */ jsx7("span", { children: "QR" }) }),
        /* @__PURE__ */ jsx7(Typography, { variant: "label", color: "secondary", children: "Scan to Join" })
      ] }),
      roomCode && /* @__PURE__ */ jsxs6("div", { className: SplashScreen_default.roomCodeSection, children: [
        /* @__PURE__ */ jsx7(Typography, { variant: "label", color: "muted", children: "Or Enter Code" }),
        /* @__PURE__ */ jsx7("div", { className: SplashScreen_default.roomCode, children: roomCode.split("").map((char, i) => /* @__PURE__ */ jsx7("span", { className: SplashScreen_default.roomCodeChar, children: char }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx7(
      Typography,
      {
        variant: "body",
        color: "accent",
        align: "center",
        glow: true,
        className: SplashScreen_default.cta,
        children: "Waiting for players..."
      }
    )
  ] }) });
}

// src/organisms/Lobby/Lobby.tsx
import { clsx as clsx8 } from "clsx";

// src/organisms/Lobby/Lobby.module.css
var Lobby_default = {};

// src/organisms/Lobby/Lobby.tsx
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
function Lobby({
  state,
  roomCode,
  players,
  maxPlayers = 8,
  isVIP = false,
  onStartGame,
  onSettings,
  className
}) {
  return /* @__PURE__ */ jsxs7("div", { className: clsx8(Lobby_default.lobby, Lobby_default[state], className), children: [
    /* @__PURE__ */ jsxs7("header", { className: Lobby_default.header, children: [
      /* @__PURE__ */ jsx8(Typography, { variant: "h2", glow: true, children: "THE VIVA LOUNGE" }),
      /* @__PURE__ */ jsxs7("div", { className: Lobby_default.roomInfo, children: [
        /* @__PURE__ */ jsx8(Typography, { variant: "label", color: "muted", children: "Room Code" }),
        /* @__PURE__ */ jsx8("div", { className: Lobby_default.roomCode, children: roomCode.split("").map((char, i) => /* @__PURE__ */ jsx8("span", { className: Lobby_default.roomCodeChar, children: char }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs7("main", { className: Lobby_default.main, children: [
      state === "empty" && /* @__PURE__ */ jsxs7("div", { className: Lobby_default.emptyState, children: [
        /* @__PURE__ */ jsx8(Typography, { variant: "h3", color: "muted", className: Lobby_default.pulsingText, children: "Waiting for players..." }),
        /* @__PURE__ */ jsx8(Typography, { variant: "body", color: "muted", children: "Scan the QR code or enter the room code on your phone" })
      ] }),
      (state === "populating" || state === "ready") && /* @__PURE__ */ jsxs7("div", { className: Lobby_default.playerGrid, children: [
        players.map((player, index) => /* @__PURE__ */ jsx8(
          "div",
          {
            className: Lobby_default.playerSlot,
            style: { animationDelay: `${index * 0.1}s` },
            children: /* @__PURE__ */ jsx8(
              PlayerCard,
              {
                name: player.name,
                shape: player.avatarShape,
                color: player.avatarColor,
                isVIP: player.isVIP,
                isDJ: player.isDJ,
                isDrinking: player.isDrinking
              }
            )
          },
          player.id
        )),
        Array.from({ length: maxPlayers - players.length }).map((_, i) => /* @__PURE__ */ jsx8("div", { className: Lobby_default.emptySlot, children: /* @__PURE__ */ jsx8("div", { className: Lobby_default.emptySlotInner, children: /* @__PURE__ */ jsx8(Typography, { variant: "caption", color: "muted", children: "?" }) }) }, `empty-${i}`))
      ] })
    ] }),
    /* @__PURE__ */ jsxs7("footer", { className: Lobby_default.footer, children: [
      /* @__PURE__ */ jsxs7("div", { className: Lobby_default.playerCount, children: [
        /* @__PURE__ */ jsx8(Typography, { variant: "h4", color: "accent", glow: true, children: players.length }),
        /* @__PURE__ */ jsxs7(Typography, { variant: "body", color: "muted", children: [
          "/ ",
          maxPlayers,
          " players"
        ] })
      ] }),
      state === "ready" && isVIP && /* @__PURE__ */ jsxs7("div", { className: Lobby_default.actions, children: [
        /* @__PURE__ */ jsx8(Button, { variant: "ghost", size: "lg", onClick: onSettings, children: "Settings" }),
        /* @__PURE__ */ jsx8(Button, { variant: "primary", size: "lg", glow: true, onClick: onStartGame, children: "Start Game" })
      ] }),
      state === "ready" && !isVIP && /* @__PURE__ */ jsx8(Typography, { variant: "body", color: "secondary", glow: true, className: Lobby_default.waitingVIP, children: "Waiting for VIP to start..." })
    ] })
  ] });
}

// src/organisms/SpotifyAuth/SpotifyAuth.tsx
import { clsx as clsx9 } from "clsx";

// src/organisms/SpotifyAuth/SpotifyAuth.module.css
var SpotifyAuth_default = {};

// src/organisms/SpotifyAuth/SpotifyAuth.tsx
import { Fragment, jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
function SpotifyAuth({
  state,
  accountName,
  errorMessage,
  onConnect,
  onSkip,
  onDisconnect,
  className
}) {
  return /* @__PURE__ */ jsx9("div", { className: clsx9(SpotifyAuth_default.spotifyAuth, SpotifyAuth_default[state], className), children: /* @__PURE__ */ jsxs8("div", { className: SpotifyAuth_default.container, children: [
    /* @__PURE__ */ jsxs8("div", { className: SpotifyAuth_default.logoContainer, children: [
      /* @__PURE__ */ jsx9("div", { className: SpotifyAuth_default.spotifyLogo, children: /* @__PURE__ */ jsx9("svg", { viewBox: "0 0 24 24", className: SpotifyAuth_default.logoIcon, children: /* @__PURE__ */ jsx9(
        "path",
        {
          fill: "currentColor",
          d: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
        }
      ) }) }),
      state === "connecting" && /* @__PURE__ */ jsx9("div", { className: SpotifyAuth_default.pulseRing })
    ] }),
    state === "idle" && /* @__PURE__ */ jsxs8(Fragment, { children: [
      /* @__PURE__ */ jsx9(Typography, { variant: "h2", glow: true, className: SpotifyAuth_default.title, children: "Connect Spotify" }),
      /* @__PURE__ */ jsxs8(Typography, { variant: "body", color: "muted", className: SpotifyAuth_default.description, children: [
        "Enable DJ mode to let players vote on the vibe.",
        /* @__PURE__ */ jsx9("br", {}),
        "Music keeps the party going between rounds!"
      ] }),
      /* @__PURE__ */ jsxs8("div", { className: SpotifyAuth_default.actions, children: [
        /* @__PURE__ */ jsx9(Button, { variant: "primary", size: "lg", glow: true, onClick: onConnect, children: "Connect Account" }),
        /* @__PURE__ */ jsx9(Button, { variant: "ghost", size: "lg", onClick: onSkip, children: "Skip for now" })
      ] })
    ] }),
    state === "connecting" && /* @__PURE__ */ jsxs8(Fragment, { children: [
      /* @__PURE__ */ jsx9(Typography, { variant: "h3", className: SpotifyAuth_default.title, children: "Connecting..." }),
      /* @__PURE__ */ jsx9(Typography, { variant: "body", color: "muted", className: SpotifyAuth_default.description, children: "Complete authentication in the popup window" }),
      /* @__PURE__ */ jsx9("div", { className: SpotifyAuth_default.spinner })
    ] }),
    state === "success" && /* @__PURE__ */ jsxs8(Fragment, { children: [
      /* @__PURE__ */ jsx9(Typography, { variant: "h2", color: "accent", glow: true, className: SpotifyAuth_default.title, children: "Connected!" }),
      /* @__PURE__ */ jsxs8("div", { className: SpotifyAuth_default.accountInfo, children: [
        /* @__PURE__ */ jsx9(Typography, { variant: "label", color: "muted", children: "Logged in as" }),
        /* @__PURE__ */ jsx9(Typography, { variant: "h4", color: "primary", children: accountName })
      ] }),
      /* @__PURE__ */ jsxs8("div", { className: SpotifyAuth_default.actions, children: [
        /* @__PURE__ */ jsx9(Button, { variant: "primary", size: "lg", glow: true, onClick: onSkip, children: "Continue" }),
        /* @__PURE__ */ jsx9(Button, { variant: "ghost", size: "md", onClick: onDisconnect, children: "Disconnect" })
      ] })
    ] }),
    state === "error" && /* @__PURE__ */ jsxs8(Fragment, { children: [
      /* @__PURE__ */ jsx9(Typography, { variant: "h3", color: "error", className: SpotifyAuth_default.title, children: "Connection Failed" }),
      /* @__PURE__ */ jsx9(Typography, { variant: "body", color: "muted", className: SpotifyAuth_default.description, children: errorMessage || "Unable to connect to Spotify. Please try again." }),
      /* @__PURE__ */ jsxs8("div", { className: SpotifyAuth_default.actions, children: [
        /* @__PURE__ */ jsx9(Button, { variant: "primary", size: "lg", onClick: onConnect, children: "Try Again" }),
        /* @__PURE__ */ jsx9(Button, { variant: "ghost", size: "lg", onClick: onSkip, children: "Skip" })
      ] })
    ] })
  ] }) });
}

// src/organisms/Settings/Settings.tsx
import { clsx as clsx10 } from "clsx";

// src/organisms/Settings/Settings.module.css
var Settings_default = {};

// src/organisms/Settings/Settings.tsx
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
function Settings({
  settings,
  spotifyConnected = false,
  onSettingsChange,
  onClose,
  onManageSpotify,
  isOpen = true,
  className
}) {
  const handleChange = (key, value) => {
    onSettingsChange?.({ ...settings, [key]: value });
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxs9("div", { className: clsx10(Settings_default.overlay, className), children: [
    /* @__PURE__ */ jsx10("div", { className: Settings_default.backdrop, onClick: onClose }),
    /* @__PURE__ */ jsxs9("div", { className: Settings_default.panel, children: [
      /* @__PURE__ */ jsxs9("header", { className: Settings_default.header, children: [
        /* @__PURE__ */ jsx10(Typography, { variant: "h3", glow: true, children: "Game Settings" }),
        /* @__PURE__ */ jsx10("button", { className: Settings_default.closeButton, onClick: onClose, "aria-label": "Close", children: "\xD7" })
      ] }),
      /* @__PURE__ */ jsxs9("div", { className: Settings_default.content, children: [
        /* @__PURE__ */ jsxs9("div", { className: Settings_default.setting, children: [
          /* @__PURE__ */ jsxs9("div", { className: Settings_default.settingInfo, children: [
            /* @__PURE__ */ jsx10(Typography, { variant: "label", children: "Rounds" }),
            /* @__PURE__ */ jsx10(Typography, { variant: "caption", color: "muted", children: "How many rounds to play" })
          ] }),
          /* @__PURE__ */ jsxs9("div", { className: Settings_default.stepper, children: [
            /* @__PURE__ */ jsx10(
              "button",
              {
                className: Settings_default.stepperButton,
                onClick: () => handleChange("rounds", Math.max(3, settings.rounds - 1)),
                disabled: settings.rounds <= 3,
                children: "\u2212"
              }
            ),
            /* @__PURE__ */ jsx10(Typography, { variant: "h4", className: Settings_default.stepperValue, children: settings.rounds }),
            /* @__PURE__ */ jsx10(
              "button",
              {
                className: Settings_default.stepperButton,
                onClick: () => handleChange("rounds", Math.min(10, settings.rounds + 1)),
                disabled: settings.rounds >= 10,
                children: "+"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs9("div", { className: Settings_default.setting, children: [
          /* @__PURE__ */ jsxs9("div", { className: Settings_default.settingInfo, children: [
            /* @__PURE__ */ jsx10(Typography, { variant: "label", children: "Time Limit" }),
            /* @__PURE__ */ jsx10(Typography, { variant: "caption", color: "muted", children: "Seconds per answer" })
          ] }),
          /* @__PURE__ */ jsxs9("div", { className: Settings_default.stepper, children: [
            /* @__PURE__ */ jsx10(
              "button",
              {
                className: Settings_default.stepperButton,
                onClick: () => handleChange("timeLimit", Math.max(15, settings.timeLimit - 15)),
                disabled: settings.timeLimit <= 15,
                children: "\u2212"
              }
            ),
            /* @__PURE__ */ jsxs9(Typography, { variant: "h4", className: Settings_default.stepperValue, children: [
              settings.timeLimit,
              "s"
            ] }),
            /* @__PURE__ */ jsx10(
              "button",
              {
                className: Settings_default.stepperButton,
                onClick: () => handleChange("timeLimit", Math.min(120, settings.timeLimit + 15)),
                disabled: settings.timeLimit >= 120,
                children: "+"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs9("div", { className: Settings_default.setting, children: [
          /* @__PURE__ */ jsxs9("div", { className: Settings_default.settingInfo, children: [
            /* @__PURE__ */ jsx10(Typography, { variant: "label", children: "Content Filter" }),
            /* @__PURE__ */ jsx10(Typography, { variant: "caption", color: "muted", children: "Prompt spiciness level" })
          ] }),
          /* @__PURE__ */ jsx10("div", { className: Settings_default.segmentedControl, children: ["family", "adult", "spicy"].map((level) => /* @__PURE__ */ jsxs9(
            "button",
            {
              className: clsx10(
                Settings_default.segment,
                settings.contentFilter === level && Settings_default.segmentActive
              ),
              onClick: () => handleChange("contentFilter", level),
              children: [
                level === "family" && "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}",
                level === "adult" && "\u{1F525}",
                level === "spicy" && "\u{1F336}\uFE0F",
                /* @__PURE__ */ jsx10("span", { className: Settings_default.segmentLabel, children: level })
              ]
            },
            level
          )) })
        ] }),
        /* @__PURE__ */ jsxs9("div", { className: Settings_default.setting, children: [
          /* @__PURE__ */ jsxs9("div", { className: Settings_default.settingInfo, children: [
            /* @__PURE__ */ jsx10(Typography, { variant: "label", children: "Drinking Mode" }),
            /* @__PURE__ */ jsx10(Typography, { variant: "caption", color: "muted", children: "Add drinking challenges" })
          ] }),
          /* @__PURE__ */ jsx10(
            "button",
            {
              className: clsx10(Settings_default.toggle, settings.drinkingMode && Settings_default.toggleActive),
              onClick: () => handleChange("drinkingMode", !settings.drinkingMode),
              role: "switch",
              "aria-checked": settings.drinkingMode,
              children: /* @__PURE__ */ jsx10("span", { className: Settings_default.toggleThumb })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs9("div", { className: Settings_default.setting, children: [
          /* @__PURE__ */ jsxs9("div", { className: Settings_default.settingInfo, children: [
            /* @__PURE__ */ jsx10(Typography, { variant: "label", children: "DJ Mode" }),
            /* @__PURE__ */ jsx10(Typography, { variant: "caption", color: "muted", children: spotifyConnected ? "Spotify connected" : "Connect Spotify for music" })
          ] }),
          spotifyConnected ? /* @__PURE__ */ jsx10(Button, { variant: "ghost", size: "sm", onClick: onManageSpotify, children: "Manage" }) : /* @__PURE__ */ jsx10(Button, { variant: "secondary", size: "sm", onClick: onManageSpotify, children: "Connect" })
        ] })
      ] }),
      /* @__PURE__ */ jsx10("footer", { className: Settings_default.footer, children: /* @__PURE__ */ jsx10(Button, { variant: "primary", size: "lg", fullWidth: true, onClick: onClose, children: "Done" }) })
    ] })
  ] });
}

// src/organisms/Reconnect/Reconnect.tsx
import { clsx as clsx11 } from "clsx";

// src/organisms/Reconnect/Reconnect.module.css
var Reconnect_default = {};

// src/organisms/Reconnect/Reconnect.tsx
import { Fragment as Fragment2, jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
function Reconnect({
  state,
  attempts = 0,
  maxAttempts = 5,
  errorMessage,
  onRetry,
  onNewGame,
  className
}) {
  return /* @__PURE__ */ jsxs10("div", { className: clsx11(Reconnect_default.reconnect, Reconnect_default[state], className), children: [
    /* @__PURE__ */ jsxs10("div", { className: Reconnect_default.glitchBg, children: [
      /* @__PURE__ */ jsx11("div", { className: Reconnect_default.scanlines }),
      /* @__PURE__ */ jsx11("div", { className: Reconnect_default.noise })
    ] }),
    /* @__PURE__ */ jsxs10("div", { className: Reconnect_default.container, children: [
      /* @__PURE__ */ jsx11("div", { className: Reconnect_default.iconContainer, children: /* @__PURE__ */ jsxs10("div", { className: Reconnect_default.icon, children: [
        /* @__PURE__ */ jsxs10("svg", { viewBox: "0 0 24 24", className: Reconnect_default.wifiIcon, children: [
          /* @__PURE__ */ jsx11(
            "path",
            {
              fill: "currentColor",
              d: "M12 21l-1.5-1.5c-2.1-2.1-2.1-5.5 0-7.6l1.5-1.5 1.5 1.5c2.1 2.1 2.1 5.5 0 7.6L12 21zm0-4.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z"
            }
          ),
          /* @__PURE__ */ jsx11(
            "path",
            {
              fill: "currentColor",
              d: "M12 3C7.95 3 4.21 4.34 1.2 6.6l1.5 1.5C5.25 6.05 8.45 5 12 5s6.75 1.05 9.3 3.1l1.5-1.5C19.79 4.34 16.05 3 12 3zm0 4c-2.84 0-5.45.95-7.6 2.55l1.5 1.5C7.75 9.75 9.8 9 12 9s4.25.75 6.1 2.05l1.5-1.5C17.45 7.95 14.84 7 12 7z",
              className: Reconnect_default.signalBars
            }
          )
        ] }),
        state !== "failed" && /* @__PURE__ */ jsx11("div", { className: Reconnect_default.iconGlitch })
      ] }) }),
      state === "disconnected" && /* @__PURE__ */ jsxs10(Fragment2, { children: [
        /* @__PURE__ */ jsx11(Typography, { variant: "h2", className: Reconnect_default.glitchText, children: /* @__PURE__ */ jsx11("span", { className: Reconnect_default.glitchLayer, "data-text": "DISCONNECTED", children: "DISCONNECTED" }) }),
        /* @__PURE__ */ jsx11(Typography, { variant: "body", color: "muted", children: "Connection to server lost" })
      ] }),
      state === "reconnecting" && /* @__PURE__ */ jsxs10(Fragment2, { children: [
        /* @__PURE__ */ jsx11(Typography, { variant: "h2", className: Reconnect_default.glitchText, children: /* @__PURE__ */ jsx11("span", { className: Reconnect_default.glitchLayer, "data-text": "RECONNECTING", children: "RECONNECTING" }) }),
        /* @__PURE__ */ jsxs10("div", { className: Reconnect_default.progressContainer, children: [
          /* @__PURE__ */ jsx11("div", { className: Reconnect_default.progressBar, children: /* @__PURE__ */ jsx11(
            "div",
            {
              className: Reconnect_default.progressFill,
              style: { width: `${attempts / maxAttempts * 100}%` }
            }
          ) }),
          /* @__PURE__ */ jsxs10(Typography, { variant: "caption", color: "muted", children: [
            "Attempt ",
            attempts,
            " of ",
            maxAttempts
          ] })
        ] })
      ] }),
      state === "failed" && /* @__PURE__ */ jsxs10(Fragment2, { children: [
        /* @__PURE__ */ jsx11(Typography, { variant: "h2", color: "error", className: Reconnect_default.glitchText, children: /* @__PURE__ */ jsx11("span", { className: Reconnect_default.glitchLayer, "data-text": "FAILED", children: "CONNECTION FAILED" }) }),
        /* @__PURE__ */ jsx11(Typography, { variant: "body", color: "muted", children: errorMessage || "Unable to reconnect to the game server." }),
        /* @__PURE__ */ jsxs10("div", { className: Reconnect_default.actions, children: [
          /* @__PURE__ */ jsx11(Button, { variant: "primary", size: "lg", onClick: onRetry, children: "Try Again" }),
          /* @__PURE__ */ jsx11(Button, { variant: "ghost", size: "lg", onClick: onNewGame, children: "Start New Game" })
        ] })
      ] })
    ] })
  ] });
}

// src/organisms/PhoneLanding/PhoneLanding.tsx
import { useState as useState2 } from "react";
import { clsx as clsx12 } from "clsx";

// src/organisms/PhoneLanding/PhoneLanding.module.css
var PhoneLanding_default = {};

// src/organisms/PhoneLanding/PhoneLanding.tsx
import { jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";
function PhoneLanding({
  mode = "join",
  initialRoomCode = "",
  previousName,
  isConnecting = false,
  errorMessage,
  onJoin,
  onRejoin,
  onModeSwitch,
  className
}) {
  const [roomCode, setRoomCode] = useState2(initialRoomCode);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (roomCode.length === 4) {
      onJoin?.(roomCode.toUpperCase());
    }
  };
  const handleCodeChange = (value) => {
    const cleaned = value.replace(/[^a-zA-Z]/g, "").toUpperCase().slice(0, 4);
    setRoomCode(cleaned);
  };
  return /* @__PURE__ */ jsxs11("div", { className: clsx12(PhoneLanding_default.landing, className), children: [
    /* @__PURE__ */ jsxs11("div", { className: PhoneLanding_default.logo, children: [
      /* @__PURE__ */ jsx12(Typography, { variant: "h1", glow: true, className: PhoneLanding_default.logoText, children: "\u{1F378}" }),
      /* @__PURE__ */ jsx12(Typography, { variant: "h2", glow: true, children: "SHAKEN" }),
      /* @__PURE__ */ jsx12(Typography, { variant: "body", color: "secondary", children: "Not Stirred" })
    ] }),
    mode === "join" && /* @__PURE__ */ jsxs11("form", { className: PhoneLanding_default.form, onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs11("div", { className: PhoneLanding_default.codeInput, children: [
        /* @__PURE__ */ jsx12(Typography, { variant: "label", color: "muted", children: "Enter Room Code" }),
        /* @__PURE__ */ jsx12("div", { className: PhoneLanding_default.codeBoxes, children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsx12(
          "div",
          {
            className: clsx12(
              PhoneLanding_default.codeBox,
              roomCode[i] && PhoneLanding_default.codeBoxFilled
            ),
            children: roomCode[i] || ""
          },
          i
        )) }),
        /* @__PURE__ */ jsx12(
          "input",
          {
            type: "text",
            value: roomCode,
            onChange: (e) => handleCodeChange(e.target.value),
            className: PhoneLanding_default.hiddenInput,
            autoFocus: true,
            autoComplete: "off",
            autoCapitalize: "characters",
            maxLength: 4,
            disabled: isConnecting
          }
        )
      ] }),
      errorMessage && /* @__PURE__ */ jsx12(Typography, { variant: "caption", color: "error", className: PhoneLanding_default.error, children: errorMessage }),
      /* @__PURE__ */ jsx12(
        Button,
        {
          type: "submit",
          variant: "primary",
          size: "lg",
          fullWidth: true,
          glow: true,
          disabled: roomCode.length !== 4 || isConnecting,
          children: isConnecting ? "Connecting..." : "Join Game"
        }
      )
    ] }),
    mode === "rejoin" && previousName && /* @__PURE__ */ jsxs11("div", { className: PhoneLanding_default.rejoinContainer, children: [
      /* @__PURE__ */ jsxs11("div", { className: PhoneLanding_default.rejoinInfo, children: [
        /* @__PURE__ */ jsx12(Typography, { variant: "body", color: "muted", children: "Welcome back," }),
        /* @__PURE__ */ jsx12(Typography, { variant: "h3", color: "primary", glow: true, children: previousName })
      ] }),
      errorMessage && /* @__PURE__ */ jsx12(Typography, { variant: "caption", color: "error", className: PhoneLanding_default.error, children: errorMessage }),
      /* @__PURE__ */ jsx12(
        Button,
        {
          variant: "primary",
          size: "lg",
          fullWidth: true,
          glow: true,
          onClick: onRejoin,
          disabled: isConnecting,
          children: isConnecting ? "Reconnecting..." : "Rejoin Game"
        }
      ),
      /* @__PURE__ */ jsx12(
        Button,
        {
          variant: "ghost",
          size: "md",
          onClick: () => onModeSwitch?.("join"),
          children: "Join different game"
        }
      )
    ] }),
    mode === "join" && previousName && /* @__PURE__ */ jsx12(
      "button",
      {
        className: PhoneLanding_default.rejoinLink,
        onClick: () => onModeSwitch?.("rejoin"),
        children: /* @__PURE__ */ jsxs11(Typography, { variant: "caption", color: "muted", children: [
          "Rejoin as ",
          /* @__PURE__ */ jsx12("span", { className: PhoneLanding_default.playerName, children: previousName }),
          "?"
        ] })
      }
    )
  ] });
}

// src/organisms/AvatarBuilder/AvatarBuilder.tsx
import { useState as useState3 } from "react";
import { clsx as clsx13 } from "clsx";

// src/organisms/AvatarBuilder/AvatarBuilder.module.css
var AvatarBuilder_default = {};

// src/organisms/AvatarBuilder/AvatarBuilder.tsx
import { jsx as jsx13, jsxs as jsxs12 } from "react/jsx-runtime";
var SHAPES = ["cube", "pyramid", "sphere", "diamond"];
var COLORS = ["#CCFF00", "#FF10F0", "#00FFFF", "#9D00FF", "#FF4D4D", "#FFD700"];
function AvatarBuilder({
  initialName = "",
  initialShape = "cube",
  initialColor = COLORS[0],
  initialDrinking = false,
  isSubmitting = false,
  errorMessage,
  onConfirm,
  className
}) {
  const [name, setName] = useState3(initialName);
  const [shape, setShape] = useState3(initialShape);
  const [color, setColor] = useState3(initialColor);
  const [isDrinking, setIsDrinking] = useState3(initialDrinking);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onConfirm?.({ name: name.trim(), shape, color, isDrinking });
    }
  };
  return /* @__PURE__ */ jsxs12("div", { className: clsx13(AvatarBuilder_default.builder, className), children: [
    /* @__PURE__ */ jsx13(Typography, { variant: "h3", glow: true, className: AvatarBuilder_default.title, children: "Create Your Avatar" }),
    /* @__PURE__ */ jsxs12("div", { className: AvatarBuilder_default.preview, children: [
      /* @__PURE__ */ jsx13(
        Avatar,
        {
          shape,
          color,
          size: "xl",
          className: AvatarBuilder_default.avatarPreview
        }
      ),
      name && /* @__PURE__ */ jsx13(Typography, { variant: "h4", color: "primary", glow: true, children: name })
    ] }),
    /* @__PURE__ */ jsxs12("form", { className: AvatarBuilder_default.form, onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs12("div", { className: AvatarBuilder_default.field, children: [
        /* @__PURE__ */ jsx13(Typography, { variant: "label", color: "muted", children: "Your Name" }),
        /* @__PURE__ */ jsx13(
          Input,
          {
            value: name,
            onChange: (e) => setName(e.target.value),
            placeholder: "Enter your name",
            maxLength: 12,
            autoFocus: true,
            disabled: isSubmitting
          }
        )
      ] }),
      /* @__PURE__ */ jsxs12("div", { className: AvatarBuilder_default.field, children: [
        /* @__PURE__ */ jsx13(Typography, { variant: "label", color: "muted", children: "Choose Shape" }),
        /* @__PURE__ */ jsx13("div", { className: AvatarBuilder_default.shapeGrid, children: SHAPES.map((s) => /* @__PURE__ */ jsx13(
          "button",
          {
            type: "button",
            className: clsx13(AvatarBuilder_default.shapeOption, shape === s && AvatarBuilder_default.shapeSelected),
            onClick: () => setShape(s),
            disabled: isSubmitting,
            children: /* @__PURE__ */ jsx13(Avatar, { shape: s, color, size: "md" })
          },
          s
        )) })
      ] }),
      /* @__PURE__ */ jsxs12("div", { className: AvatarBuilder_default.field, children: [
        /* @__PURE__ */ jsx13(Typography, { variant: "label", color: "muted", children: "Pick Color" }),
        /* @__PURE__ */ jsx13("div", { className: AvatarBuilder_default.colorGrid, children: COLORS.map((c) => /* @__PURE__ */ jsx13(
          "button",
          {
            type: "button",
            className: clsx13(AvatarBuilder_default.colorOption, color === c && AvatarBuilder_default.colorSelected),
            style: { backgroundColor: c },
            onClick: () => setColor(c),
            disabled: isSubmitting,
            "aria-label": `Select color ${c}`
          },
          c
        )) })
      ] }),
      /* @__PURE__ */ jsxs12("div", { className: AvatarBuilder_default.drinkingField, children: [
        /* @__PURE__ */ jsxs12("div", { className: AvatarBuilder_default.drinkingInfo, children: [
          /* @__PURE__ */ jsx13(Typography, { variant: "label", children: "\u{1F37A} Drinking Mode" }),
          /* @__PURE__ */ jsx13(Typography, { variant: "caption", color: "muted", children: "Get drinking challenges during the game" })
        ] }),
        /* @__PURE__ */ jsx13(
          "button",
          {
            type: "button",
            className: clsx13(AvatarBuilder_default.toggle, isDrinking && AvatarBuilder_default.toggleActive),
            onClick: () => setIsDrinking(!isDrinking),
            role: "switch",
            "aria-checked": isDrinking,
            disabled: isSubmitting,
            children: /* @__PURE__ */ jsx13("span", { className: AvatarBuilder_default.toggleThumb })
          }
        )
      ] }),
      errorMessage && /* @__PURE__ */ jsx13(Typography, { variant: "caption", color: "error", className: AvatarBuilder_default.error, children: errorMessage }),
      /* @__PURE__ */ jsx13(
        Button,
        {
          type: "submit",
          variant: "primary",
          size: "lg",
          fullWidth: true,
          glow: true,
          disabled: !name.trim() || isSubmitting,
          children: isSubmitting ? "Joining..." : "Join the Party!"
        }
      )
    ] })
  ] });
}

// src/organisms/PhoneLobby/PhoneLobby.tsx
import { clsx as clsx14 } from "clsx";

// src/organisms/PhoneLobby/PhoneLobby.module.css
var PhoneLobby_default = {};

// src/organisms/PhoneLobby/PhoneLobby.tsx
import { Fragment as Fragment3, jsx as jsx14, jsxs as jsxs13 } from "react/jsx-runtime";
function PhoneLobby({
  currentPlayer,
  players,
  roomCode,
  role,
  isStarting = false,
  onStartGame,
  onOpenPlaylist,
  onLeave,
  className
}) {
  const otherPlayers = players.filter((p) => p.id !== currentPlayer.id);
  const minPlayers = 3;
  const canStart = players.length >= minPlayers;
  return /* @__PURE__ */ jsxs13("div", { className: clsx14(PhoneLobby_default.lobby, PhoneLobby_default[role], className), children: [
    /* @__PURE__ */ jsxs13("header", { className: PhoneLobby_default.header, children: [
      /* @__PURE__ */ jsxs13("div", { className: PhoneLobby_default.roomInfo, children: [
        /* @__PURE__ */ jsx14(Typography, { variant: "caption", color: "muted", children: "Room" }),
        /* @__PURE__ */ jsx14(Typography, { variant: "h4", color: "primary", glow: true, children: roomCode })
      ] }),
      /* @__PURE__ */ jsx14("button", { className: PhoneLobby_default.leaveButton, onClick: onLeave, children: /* @__PURE__ */ jsx14(Typography, { variant: "caption", color: "muted", children: "Leave" }) })
    ] }),
    /* @__PURE__ */ jsxs13("div", { className: PhoneLobby_default.currentPlayer, children: [
      /* @__PURE__ */ jsx14(
        Avatar,
        {
          shape: currentPlayer.avatarShape,
          color: currentPlayer.avatarColor,
          size: "lg",
          isVIP: currentPlayer.isVIP,
          isDJ: currentPlayer.isDJ
        }
      ),
      /* @__PURE__ */ jsxs13("div", { className: PhoneLobby_default.playerInfo, children: [
        /* @__PURE__ */ jsx14(Typography, { variant: "h3", glow: true, children: currentPlayer.name }),
        role === "vip" && /* @__PURE__ */ jsx14(Typography, { variant: "caption", color: "accent", children: "\u{1F451} VIP - You control the game" }),
        role === "dj" && /* @__PURE__ */ jsx14(Typography, { variant: "caption", color: "secondary", children: "\u{1F3B5} DJ - You control the vibes" }),
        role === "player" && /* @__PURE__ */ jsx14(Typography, { variant: "caption", color: "muted", children: "Ready to play" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs13("div", { className: PhoneLobby_default.playersSection, children: [
      /* @__PURE__ */ jsxs13(Typography, { variant: "label", color: "muted", children: [
        otherPlayers.length,
        " other player",
        otherPlayers.length !== 1 ? "s" : "",
        " in lobby"
      ] }),
      /* @__PURE__ */ jsx14("div", { className: PhoneLobby_default.playersList, children: otherPlayers.map((player) => /* @__PURE__ */ jsxs13("div", { className: PhoneLobby_default.playerPill, children: [
        /* @__PURE__ */ jsx14(
          Avatar,
          {
            shape: player.avatarShape,
            color: player.avatarColor,
            size: "sm",
            isVIP: player.isVIP,
            isDJ: player.isDJ
          }
        ),
        /* @__PURE__ */ jsx14(Typography, { variant: "caption", children: player.name })
      ] }, player.id)) })
    ] }),
    /* @__PURE__ */ jsxs13("div", { className: PhoneLobby_default.actions, children: [
      role === "vip" && /* @__PURE__ */ jsxs13(Fragment3, { children: [
        /* @__PURE__ */ jsx14(
          Button,
          {
            variant: "primary",
            size: "lg",
            fullWidth: true,
            glow: true,
            onClick: onStartGame,
            disabled: !canStart || isStarting,
            children: isStarting ? "Starting..." : canStart ? "Start Game" : `Need ${minPlayers - players.length} more`
          }
        ),
        /* @__PURE__ */ jsx14(Typography, { variant: "caption", color: "muted", className: PhoneLobby_default.hint, children: canStart ? "Tap to begin when everyone is ready" : `Waiting for at least ${minPlayers} players` })
      ] }),
      role === "dj" && /* @__PURE__ */ jsxs13(Fragment3, { children: [
        /* @__PURE__ */ jsx14(
          Button,
          {
            variant: "secondary",
            size: "lg",
            fullWidth: true,
            onClick: onOpenPlaylist,
            children: "\u{1F3B5} Manage Playlist"
          }
        ),
        /* @__PURE__ */ jsx14(Typography, { variant: "caption", color: "muted", className: PhoneLobby_default.hint, children: "Queue up songs for between rounds" })
      ] }),
      role === "player" && /* @__PURE__ */ jsxs13("div", { className: PhoneLobby_default.waitingMessage, children: [
        /* @__PURE__ */ jsx14("div", { className: PhoneLobby_default.pulsingDot }),
        /* @__PURE__ */ jsx14(Typography, { variant: "body", color: "muted", children: "Waiting for VIP to start..." })
      ] })
    ] })
  ] });
}

// src/organisms/WritingInput/WritingInput.tsx
import { useState as useState4 } from "react";
import { clsx as clsx15 } from "clsx";

// src/organisms/WritingInput/WritingInput.module.css
var WritingInput_default = {};

// src/organisms/WritingInput/WritingInput.tsx
import { jsx as jsx15, jsxs as jsxs14 } from "react/jsx-runtime";
function WritingInput({
  prompt,
  timeRemaining,
  totalTime,
  maxLength = 100,
  isSubmitted = false,
  isPanic = false,
  onSubmit,
  className
}) {
  const [answer, setAnswer] = useState4("");
  const handleSubmit = () => {
    if (answer.trim()) {
      onSubmit?.(answer.trim());
    }
  };
  const charactersLeft = maxLength - answer.length;
  if (isSubmitted) {
    return /* @__PURE__ */ jsx15("div", { className: clsx15(WritingInput_default.writingInput, WritingInput_default.submitted, className), children: /* @__PURE__ */ jsxs14("div", { className: WritingInput_default.submittedContent, children: [
      /* @__PURE__ */ jsx15("div", { className: WritingInput_default.checkmark, children: "\u2713" }),
      /* @__PURE__ */ jsx15(Typography, { variant: "h3", color: "accent", glow: true, children: "Answer Submitted!" }),
      /* @__PURE__ */ jsx15(Typography, { variant: "body", color: "muted", children: "Waiting for other players..." })
    ] }) });
  }
  return /* @__PURE__ */ jsxs14("div", { className: clsx15(WritingInput_default.writingInput, isPanic && WritingInput_default.panic, className), children: [
    /* @__PURE__ */ jsx15("div", { className: WritingInput_default.timerSection, children: /* @__PURE__ */ jsx15(
      Timer,
      {
        duration: totalTime,
        timeRemaining,
        variant: "circular",
        size: "md",
        panicThreshold: 10
      }
    ) }),
    /* @__PURE__ */ jsxs14("div", { className: WritingInput_default.promptSection, children: [
      /* @__PURE__ */ jsx15(Typography, { variant: "label", color: "muted", children: "The Prompt" }),
      /* @__PURE__ */ jsx15(Typography, { variant: "h4", glow: true, className: WritingInput_default.prompt, children: prompt })
    ] }),
    /* @__PURE__ */ jsxs14("div", { className: WritingInput_default.inputSection, children: [
      /* @__PURE__ */ jsx15(
        "textarea",
        {
          value: answer,
          onChange: (e) => setAnswer(e.target.value.slice(0, maxLength)),
          placeholder: "Type your answer...",
          className: clsx15(WritingInput_default.textarea, isPanic && WritingInput_default.textareaPanic),
          autoFocus: true,
          rows: 4
        }
      ),
      /* @__PURE__ */ jsx15("div", { className: WritingInput_default.charCount, children: /* @__PURE__ */ jsxs14(
        Typography,
        {
          variant: "caption",
          color: charactersLeft < 20 ? "error" : "muted",
          children: [
            charactersLeft,
            " characters left"
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx15(
      Button,
      {
        variant: "primary",
        size: "lg",
        fullWidth: true,
        glow: true,
        onClick: handleSubmit,
        disabled: !answer.trim(),
        children: "Submit Answer"
      }
    )
  ] });
}

// src/organisms/VotingPad/VotingPad.tsx
import { useState as useState5 } from "react";
import { clsx as clsx16 } from "clsx";

// src/organisms/VotingPad/VotingPad.module.css
var VotingPad_default = {};

// src/organisms/VotingPad/VotingPad.tsx
import { jsx as jsx16, jsxs as jsxs15 } from "react/jsx-runtime";
function VotingPad({
  prompt,
  answerA,
  answerB,
  timeRemaining,
  totalTime,
  hasVoted = false,
  onVote,
  className
}) {
  const [selected, setSelected] = useState5(null);
  const handleVote = (choice) => {
    if (!hasVoted && !selected) {
      setSelected(choice);
      onVote?.(choice);
    }
  };
  if (hasVoted || selected) {
    return /* @__PURE__ */ jsx16("div", { className: clsx16(VotingPad_default.votingPad, VotingPad_default.voted, className), children: /* @__PURE__ */ jsxs15("div", { className: VotingPad_default.votedContent, children: [
      /* @__PURE__ */ jsx16(Typography, { variant: "h3", color: "accent", glow: true, children: "Vote Cast! \u{1F5F3}\uFE0F" }),
      /* @__PURE__ */ jsx16(Typography, { variant: "body", color: "muted", children: "Waiting for results..." })
    ] }) });
  }
  return /* @__PURE__ */ jsxs15("div", { className: clsx16(VotingPad_default.votingPad, className), children: [
    /* @__PURE__ */ jsx16("div", { className: VotingPad_default.timerSection, children: /* @__PURE__ */ jsx16(
      Timer,
      {
        duration: totalTime,
        timeRemaining,
        variant: "bar",
        size: "sm"
      }
    ) }),
    /* @__PURE__ */ jsx16("div", { className: VotingPad_default.promptSection, children: /* @__PURE__ */ jsx16(Typography, { variant: "caption", color: "muted", children: prompt }) }),
    /* @__PURE__ */ jsx16(Typography, { variant: "label", color: "muted", className: VotingPad_default.instruction, children: "Tap your favorite answer" }),
    /* @__PURE__ */ jsxs15("div", { className: VotingPad_default.options, children: [
      /* @__PURE__ */ jsxs15(
        "button",
        {
          className: clsx16(VotingPad_default.option, VotingPad_default.optionA),
          onClick: () => handleVote("A"),
          children: [
            /* @__PURE__ */ jsxs15(Typography, { variant: "h4", className: VotingPad_default.answerText, children: [
              '"',
              answerA,
              '"'
            ] }),
            /* @__PURE__ */ jsx16("div", { className: VotingPad_default.tapHint, children: "TAP" })
          ]
        }
      ),
      /* @__PURE__ */ jsx16("div", { className: VotingPad_default.divider, children: /* @__PURE__ */ jsx16(Typography, { variant: "caption", color: "muted", children: "VS" }) }),
      /* @__PURE__ */ jsxs15(
        "button",
        {
          className: clsx16(VotingPad_default.option, VotingPad_default.optionB),
          onClick: () => handleVote("B"),
          children: [
            /* @__PURE__ */ jsxs15(Typography, { variant: "h4", className: VotingPad_default.answerText, children: [
              '"',
              answerB,
              '"'
            ] }),
            /* @__PURE__ */ jsx16("div", { className: VotingPad_default.tapHint, children: "TAP" })
          ]
        }
      )
    ] })
  ] });
}

// src/organisms/ShakeSubmit/ShakeSubmit.tsx
import { clsx as clsx17 } from "clsx";

// src/organisms/ShakeSubmit/ShakeSubmit.module.css
var ShakeSubmit_default = {};

// src/organisms/ShakeSubmit/ShakeSubmit.tsx
import { jsx as jsx17, jsxs as jsxs16 } from "react/jsx-runtime";
function ShakeSubmit({
  progress,
  targetShakes,
  currentShakes,
  isComplete = false,
  className
}) {
  if (isComplete) {
    return /* @__PURE__ */ jsx17("div", { className: clsx17(ShakeSubmit_default.shakeSubmit, ShakeSubmit_default.complete, className), children: /* @__PURE__ */ jsxs16("div", { className: ShakeSubmit_default.completeContent, children: [
      /* @__PURE__ */ jsx17("div", { className: ShakeSubmit_default.cocktailIcon, children: "\u{1F378}" }),
      /* @__PURE__ */ jsx17(Typography, { variant: "h2", color: "accent", glow: true, children: "Mixed!" }),
      /* @__PURE__ */ jsx17(Typography, { variant: "body", color: "muted", children: "Your cocktail is ready" })
    ] }) });
  }
  return /* @__PURE__ */ jsxs16(
    "div",
    {
      className: clsx17(
        ShakeSubmit_default.shakeSubmit,
        progress > 0 && ShakeSubmit_default.shaking,
        className
      ),
      children: [
        /* @__PURE__ */ jsxs16("div", { className: ShakeSubmit_default.glassContainer, children: [
          /* @__PURE__ */ jsxs16("div", { className: ShakeSubmit_default.glass, children: [
            /* @__PURE__ */ jsx17("div", { className: ShakeSubmit_default.liquid, style: { height: `${progress}%` } }),
            /* @__PURE__ */ jsx17("div", { className: ShakeSubmit_default.bubbles, children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx17(
              "div",
              {
                className: ShakeSubmit_default.bubble,
                style: {
                  left: `${20 + i * 15}%`,
                  animationDelay: `${i * 0.2}s`
                }
              },
              i
            )) })
          ] }),
          /* @__PURE__ */ jsx17(Typography, { variant: "h1", className: ShakeSubmit_default.glassEmoji, children: "\u{1F378}" })
        ] }),
        /* @__PURE__ */ jsxs16("div", { className: ShakeSubmit_default.instruction, children: [
          /* @__PURE__ */ jsx17(Typography, { variant: "h2", glow: true, className: ShakeSubmit_default.shakeText, children: "SHAKE IT!" }),
          /* @__PURE__ */ jsx17(Typography, { variant: "body", color: "muted", children: "Shake your phone to mix" })
        ] }),
        /* @__PURE__ */ jsxs16("div", { className: ShakeSubmit_default.progressSection, children: [
          /* @__PURE__ */ jsx17("div", { className: ShakeSubmit_default.progressBar, children: /* @__PURE__ */ jsx17(
            "div",
            {
              className: ShakeSubmit_default.progressFill,
              style: { width: `${progress}%` }
            }
          ) }),
          /* @__PURE__ */ jsxs16("div", { className: ShakeSubmit_default.shakeCount, children: [
            /* @__PURE__ */ jsx17(Typography, { variant: "h3", color: "primary", glow: true, children: currentShakes }),
            /* @__PURE__ */ jsxs16(Typography, { variant: "caption", color: "muted", children: [
              "/ ",
              targetShakes,
              " shakes"
            ] })
          ] })
        ] })
      ]
    }
  );
}

// src/organisms/WaitingScreen/WaitingScreen.tsx
import { clsx as clsx18 } from "clsx";

// src/organisms/WaitingScreen/WaitingScreen.module.css
var WaitingScreen_default = {};

// src/organisms/WaitingScreen/WaitingScreen.tsx
import { jsx as jsx18, jsxs as jsxs17 } from "react/jsx-runtime";
var REASON_MESSAGES = {
  voting: {
    title: "Votes Coming In...",
    subtitle: "The crowd is deciding"
  },
  results: {
    title: "Drumroll Please...",
    subtitle: "Results are being tallied"
  },
  "next-round": {
    title: "Get Ready!",
    subtitle: "Next round starting soon"
  },
  "other-players": {
    title: "Waiting for Others",
    subtitle: "Some players are still answering"
  },
  host: {
    title: "Look at the Screen!",
    subtitle: "Something exciting is happening"
  }
};
function WaitingScreen({
  reason,
  message,
  playerShape = "cube",
  playerColor = "#CCFF00",
  className
}) {
  const { title, subtitle } = REASON_MESSAGES[reason];
  return /* @__PURE__ */ jsxs17("div", { className: clsx18(WaitingScreen_default.waiting, className), children: [
    /* @__PURE__ */ jsxs17("div", { className: WaitingScreen_default.avatarContainer, children: [
      /* @__PURE__ */ jsx18(
        Avatar,
        {
          shape: playerShape,
          color: playerColor,
          size: "xl",
          className: WaitingScreen_default.avatar
        }
      ),
      /* @__PURE__ */ jsx18("div", { className: WaitingScreen_default.pulseRing, style: { borderColor: playerColor } }),
      /* @__PURE__ */ jsx18(
        "div",
        {
          className: WaitingScreen_default.pulseRing2,
          style: { borderColor: playerColor }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs17("div", { className: WaitingScreen_default.content, children: [
      /* @__PURE__ */ jsx18(Typography, { variant: "h3", glow: true, children: title }),
      /* @__PURE__ */ jsx18(Typography, { variant: "body", color: "muted", children: message || subtitle })
    ] }),
    /* @__PURE__ */ jsxs17("div", { className: WaitingScreen_default.loadingDots, children: [
      /* @__PURE__ */ jsx18("span", { className: WaitingScreen_default.dot }),
      /* @__PURE__ */ jsx18("span", { className: WaitingScreen_default.dot }),
      /* @__PURE__ */ jsx18("span", { className: WaitingScreen_default.dot })
    ] })
  ] });
}

// src/organisms/GameIntro/GameIntro.tsx
import { useEffect as useEffect2, useState as useState6 } from "react";
import { clsx as clsx19 } from "clsx";

// src/organisms/GameIntro/GameIntro.module.css
var GameIntro_default = {};

// src/organisms/GameIntro/GameIntro.tsx
import { jsx as jsx19, jsxs as jsxs18 } from "react/jsx-runtime";
function GameIntro({
  roundNumber,
  totalRounds,
  theme,
  onComplete,
  duration = 3e3,
  className
}) {
  const [phase, setPhase] = useState6("entering");
  useEffect2(() => {
    const enterTimer = setTimeout(() => setPhase("showing"), 500);
    const exitTimer = setTimeout(() => setPhase("exiting"), duration - 500);
    const completeTimer = setTimeout(() => onComplete?.(), duration);
    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [duration, onComplete]);
  return /* @__PURE__ */ jsxs18("div", { className: clsx19(GameIntro_default.intro, GameIntro_default[phase], className), children: [
    /* @__PURE__ */ jsx19("div", { className: GameIntro_default.flash }),
    /* @__PURE__ */ jsxs18("div", { className: GameIntro_default.content, children: [
      /* @__PURE__ */ jsx19(Typography, { variant: "label", color: "muted", className: GameIntro_default.label, children: "ROUND" }),
      /* @__PURE__ */ jsxs18("div", { className: GameIntro_default.numberContainer, children: [
        /* @__PURE__ */ jsx19("span", { className: GameIntro_default.number, children: roundNumber }),
        /* @__PURE__ */ jsx19("span", { className: GameIntro_default.numberGhost, children: roundNumber }),
        /* @__PURE__ */ jsx19("span", { className: GameIntro_default.numberGhost2, children: roundNumber })
      ] }),
      /* @__PURE__ */ jsxs18(Typography, { variant: "body", color: "muted", className: GameIntro_default.total, children: [
        "of ",
        totalRounds
      ] }),
      theme && /* @__PURE__ */ jsx19("div", { className: GameIntro_default.theme, children: /* @__PURE__ */ jsx19(Typography, { variant: "h4", color: "secondary", glow: true, children: theme }) })
    ] }),
    /* @__PURE__ */ jsxs18("div", { className: GameIntro_default.lines, children: [
      /* @__PURE__ */ jsx19("div", { className: GameIntro_default.line }),
      /* @__PURE__ */ jsx19("div", { className: GameIntro_default.line }),
      /* @__PURE__ */ jsx19("div", { className: GameIntro_default.line })
    ] })
  ] });
}

// src/organisms/WritingPhase/WritingPhase.tsx
import { clsx as clsx20 } from "clsx";

// src/organisms/WritingPhase/WritingPhase.module.css
var WritingPhase_default = {};

// src/organisms/WritingPhase/WritingPhase.tsx
import { jsx as jsx20, jsxs as jsxs19 } from "react/jsx-runtime";
function WritingPhase({
  prompt,
  timeRemaining,
  totalTime,
  players,
  isPanic = false,
  onTimeUp,
  className
}) {
  const submittedCount = players.filter((p) => p.hasSubmitted).length;
  const progress = (totalTime - timeRemaining) / totalTime;
  return /* @__PURE__ */ jsxs19("div", { className: clsx20(WritingPhase_default.phase, isPanic && WritingPhase_default.panic, className), children: [
    /* @__PURE__ */ jsx20("div", { className: WritingPhase_default.timerSection, children: /* @__PURE__ */ jsx20(
      Timer,
      {
        duration: totalTime,
        timeRemaining,
        variant: "circular",
        size: "lg",
        panicThreshold: 10,
        onComplete: onTimeUp
      }
    ) }),
    /* @__PURE__ */ jsxs19("div", { className: WritingPhase_default.promptSection, children: [
      /* @__PURE__ */ jsx20(Typography, { variant: "label", color: "muted", children: "The Prompt" }),
      /* @__PURE__ */ jsx20(Typography, { variant: "h2", glow: true, className: WritingPhase_default.prompt, children: prompt })
    ] }),
    /* @__PURE__ */ jsxs19("div", { className: WritingPhase_default.playersSection, children: [
      /* @__PURE__ */ jsxs19("div", { className: WritingPhase_default.statusHeader, children: [
        /* @__PURE__ */ jsx20(Typography, { variant: "label", color: "muted", children: "Answers Submitted" }),
        /* @__PURE__ */ jsxs19(Typography, { variant: "h4", color: "accent", glow: true, children: [
          submittedCount,
          " / ",
          players.length
        ] })
      ] }),
      /* @__PURE__ */ jsx20("div", { className: WritingPhase_default.playerGrid, children: players.map((player) => /* @__PURE__ */ jsxs19(
        "div",
        {
          className: clsx20(
            WritingPhase_default.playerStatus,
            player.hasSubmitted && WritingPhase_default.submitted
          ),
          children: [
            /* @__PURE__ */ jsx20(
              PlayerCard,
              {
                name: player.name,
                shape: player.avatarShape,
                color: player.avatarColor
              }
            ),
            /* @__PURE__ */ jsx20("div", { className: WritingPhase_default.statusIndicator, children: player.hasSubmitted ? /* @__PURE__ */ jsx20("span", { className: WritingPhase_default.checkmark, children: "\u2713" }) : /* @__PURE__ */ jsx20("span", { className: WritingPhase_default.writing, children: "..." }) })
          ]
        },
        player.id
      )) })
    ] }),
    /* @__PURE__ */ jsx20("div", { className: WritingPhase_default.progressBar, children: /* @__PURE__ */ jsx20(
      "div",
      {
        className: WritingPhase_default.progressFill,
        style: { width: `${progress * 100}%` }
      }
    ) })
  ] });
}

// src/organisms/ShakingPhase/ShakingPhase.tsx
import { clsx as clsx21 } from "clsx";

// src/organisms/ShakingPhase/ShakingPhase.module.css
var ShakingPhase_default = {};

// src/organisms/ShakingPhase/ShakingPhase.tsx
import { jsx as jsx21, jsxs as jsxs20 } from "react/jsx-runtime";
function ShakingPhase({
  players,
  targetShakes,
  timeRemaining,
  className
}) {
  const completedCount = players.filter((p) => p.hasCompleted).length;
  return /* @__PURE__ */ jsxs20("div", { className: clsx21(ShakingPhase_default.phase, className), children: [
    /* @__PURE__ */ jsxs20("header", { className: ShakingPhase_default.header, children: [
      /* @__PURE__ */ jsx21(Typography, { variant: "h2", glow: true, className: ShakingPhase_default.title, children: "\u{1F378} SHAKE IT!" }),
      timeRemaining !== void 0 && /* @__PURE__ */ jsxs20(Typography, { variant: "h3", color: "accent", children: [
        timeRemaining,
        "s"
      ] })
    ] }),
    /* @__PURE__ */ jsx21("div", { className: ShakingPhase_default.instruction, children: /* @__PURE__ */ jsx21(Typography, { variant: "body", color: "muted", children: "Shake your phone to mix your cocktail!" }) }),
    /* @__PURE__ */ jsx21("div", { className: ShakingPhase_default.playersGrid, children: players.map((player) => /* @__PURE__ */ jsxs20(
      "div",
      {
        className: clsx21(
          ShakingPhase_default.playerCard,
          player.hasCompleted && ShakingPhase_default.completed
        ),
        children: [
          /* @__PURE__ */ jsxs20("div", { className: ShakingPhase_default.avatarContainer, children: [
            /* @__PURE__ */ jsx21(
              Avatar,
              {
                shape: player.avatarShape,
                color: player.avatarColor,
                size: "lg",
                className: clsx21(
                  !player.hasCompleted && player.shakeProgress > 0 && ShakingPhase_default.shaking
                )
              }
            ),
            player.hasCompleted && /* @__PURE__ */ jsx21("div", { className: ShakingPhase_default.completedBadge, children: "\u2713" })
          ] }),
          /* @__PURE__ */ jsx21(Typography, { variant: "label", className: ShakingPhase_default.playerName, children: player.name }),
          /* @__PURE__ */ jsxs20("div", { className: ShakingPhase_default.progressContainer, children: [
            /* @__PURE__ */ jsx21("div", { className: ShakingPhase_default.progressBar, children: /* @__PURE__ */ jsx21(
              "div",
              {
                className: ShakingPhase_default.progressFill,
                style: {
                  width: `${player.shakeProgress}%`,
                  backgroundColor: player.avatarColor
                }
              }
            ) }),
            /* @__PURE__ */ jsxs20(Typography, { variant: "caption", color: "muted", children: [
              Math.round(player.shakeProgress),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsx21(
            "div",
            {
              className: ShakingPhase_default.liquidFill,
              style: {
                height: `${player.shakeProgress}%`,
                backgroundColor: player.avatarColor
              }
            }
          )
        ]
      },
      player.id
    )) }),
    /* @__PURE__ */ jsx21("div", { className: ShakingPhase_default.status, children: /* @__PURE__ */ jsxs20(Typography, { variant: "h4", color: "accent", glow: true, children: [
      completedCount,
      " / ",
      players.length,
      " Ready"
    ] }) })
  ] });
}

// src/organisms/VotingVersus/VotingVersus.tsx
import { clsx as clsx22 } from "clsx";

// src/organisms/VotingVersus/VotingVersus.module.css
var VotingVersus_default = {};

// src/organisms/VotingVersus/VotingVersus.tsx
import { jsx as jsx22, jsxs as jsxs21 } from "react/jsx-runtime";
function VotingVersus({
  prompt,
  answerA,
  answerB,
  timeRemaining,
  totalTime,
  votesA = 0,
  votesB = 0,
  showVotes = false,
  winnerId,
  className
}) {
  const isReveal = showVotes && winnerId;
  return /* @__PURE__ */ jsxs21("div", { className: clsx22(VotingVersus_default.versus, isReveal && VotingVersus_default.reveal, className), children: [
    /* @__PURE__ */ jsxs21("header", { className: VotingVersus_default.header, children: [
      /* @__PURE__ */ jsx22(Typography, { variant: "label", color: "muted", children: "The Prompt" }),
      /* @__PURE__ */ jsx22(Typography, { variant: "h3", glow: true, children: prompt })
    ] }),
    !isReveal && /* @__PURE__ */ jsx22("div", { className: VotingVersus_default.timer, children: /* @__PURE__ */ jsx22(
      Timer,
      {
        duration: totalTime,
        timeRemaining,
        variant: "bar",
        size: "sm"
      }
    ) }),
    /* @__PURE__ */ jsxs21("div", { className: VotingVersus_default.answers, children: [
      /* @__PURE__ */ jsxs21(
        "div",
        {
          className: clsx22(
            VotingVersus_default.answerCard,
            VotingVersus_default.cardA,
            winnerId === answerA.playerId && VotingVersus_default.winner,
            winnerId && winnerId !== answerA.playerId && VotingVersus_default.loser
          ),
          children: [
            /* @__PURE__ */ jsx22("div", { className: VotingVersus_default.answerContent, children: /* @__PURE__ */ jsxs21(Typography, { variant: "h2", className: VotingVersus_default.answerText, children: [
              '"',
              answerA.answer,
              '"'
            ] }) }),
            showVotes && /* @__PURE__ */ jsxs21("div", { className: VotingVersus_default.voteCount, children: [
              /* @__PURE__ */ jsx22(Typography, { variant: "h1", color: "primary", glow: true, children: votesA }),
              /* @__PURE__ */ jsx22(Typography, { variant: "caption", color: "muted", children: "votes" })
            ] }),
            /* @__PURE__ */ jsxs21("div", { className: VotingVersus_default.playerTag, children: [
              /* @__PURE__ */ jsx22(
                Avatar,
                {
                  shape: answerA.avatarShape,
                  color: answerA.avatarColor,
                  size: "sm"
                }
              ),
              /* @__PURE__ */ jsx22(Typography, { variant: "caption", color: "muted", children: isReveal ? answerA.playerName : "???" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx22("div", { className: VotingVersus_default.vsBadge, children: /* @__PURE__ */ jsx22(Typography, { variant: "h3", color: "secondary", glow: true, children: "VS" }) }),
      /* @__PURE__ */ jsxs21(
        "div",
        {
          className: clsx22(
            VotingVersus_default.answerCard,
            VotingVersus_default.cardB,
            winnerId === answerB.playerId && VotingVersus_default.winner,
            winnerId && winnerId !== answerB.playerId && VotingVersus_default.loser
          ),
          children: [
            /* @__PURE__ */ jsx22("div", { className: VotingVersus_default.answerContent, children: /* @__PURE__ */ jsxs21(Typography, { variant: "h2", className: VotingVersus_default.answerText, children: [
              '"',
              answerB.answer,
              '"'
            ] }) }),
            showVotes && /* @__PURE__ */ jsxs21("div", { className: VotingVersus_default.voteCount, children: [
              /* @__PURE__ */ jsx22(Typography, { variant: "h1", color: "secondary", glow: true, children: votesB }),
              /* @__PURE__ */ jsx22(Typography, { variant: "caption", color: "muted", children: "votes" })
            ] }),
            /* @__PURE__ */ jsxs21("div", { className: VotingVersus_default.playerTag, children: [
              /* @__PURE__ */ jsx22(
                Avatar,
                {
                  shape: answerB.avatarShape,
                  color: answerB.avatarColor,
                  size: "sm"
                }
              ),
              /* @__PURE__ */ jsx22(Typography, { variant: "caption", color: "muted", children: isReveal ? answerB.playerName : "???" })
            ] })
          ]
        }
      )
    ] }),
    isReveal && winnerId && /* @__PURE__ */ jsx22("div", { className: VotingVersus_default.winnerAnnouncement, children: /* @__PURE__ */ jsxs21(Typography, { variant: "h4", color: "accent", glow: true, children: [
      "\u{1F3C6} ",
      winnerId === answerA.playerId ? answerA.playerName : answerB.playerName,
      " wins!"
    ] }) })
  ] });
}

// src/organisms/RoundSummary/RoundSummary.tsx
import { clsx as clsx23 } from "clsx";

// src/organisms/RoundSummary/RoundSummary.module.css
var RoundSummary_default = {};

// src/organisms/RoundSummary/RoundSummary.tsx
import { jsx as jsx23, jsxs as jsxs22 } from "react/jsx-runtime";
function RoundSummary({
  roundNumber,
  totalRounds,
  players,
  onContinue,
  isFinalRound = false,
  className
}) {
  return /* @__PURE__ */ jsxs22("div", { className: clsx23(RoundSummary_default.summary, className), children: [
    /* @__PURE__ */ jsxs22("header", { className: RoundSummary_default.header, children: [
      /* @__PURE__ */ jsx23(Typography, { variant: "label", color: "muted", children: isFinalRound ? "Final Results" : `Round ${roundNumber} of ${totalRounds}` }),
      /* @__PURE__ */ jsx23(Typography, { variant: "h2", glow: true, children: isFinalRound ? "\u{1F3C6} Final Standings" : "Leaderboard" })
    ] }),
    /* @__PURE__ */ jsx23("div", { className: RoundSummary_default.leaderboard, children: players.map((player, index) => {
      const rankChange = player.previousRank ? player.previousRank - player.rank : 0;
      return /* @__PURE__ */ jsxs22(
        "div",
        {
          className: clsx23(
            RoundSummary_default.leaderboardRow,
            index === 0 && RoundSummary_default.leader
          ),
          style: { animationDelay: `${index * 0.1}s` },
          children: [
            /* @__PURE__ */ jsxs22("div", { className: RoundSummary_default.rank, children: [
              /* @__PURE__ */ jsx23(
                Typography,
                {
                  variant: "h3",
                  color: index === 0 ? "accent" : "primary",
                  glow: index === 0,
                  children: player.rank
                }
              ),
              rankChange !== 0 && /* @__PURE__ */ jsxs22(
                "span",
                {
                  className: clsx23(
                    RoundSummary_default.rankChange,
                    rankChange > 0 ? RoundSummary_default.rankUp : RoundSummary_default.rankDown
                  ),
                  children: [
                    rankChange > 0 ? "\u2191" : "\u2193",
                    Math.abs(rankChange)
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx23("div", { className: RoundSummary_default.playerInfo, children: /* @__PURE__ */ jsx23(
              PlayerCard,
              {
                name: player.name,
                shape: player.avatarShape,
                color: player.avatarColor,
                score: player.score
              }
            ) }),
            /* @__PURE__ */ jsx23("div", { className: RoundSummary_default.pointsEarned, children: player.roundPoints > 0 && /* @__PURE__ */ jsxs22(Typography, { variant: "label", color: "accent", glow: true, children: [
              "+",
              player.roundPoints
            ] }) }),
            /* @__PURE__ */ jsx23("div", { className: RoundSummary_default.totalScore, children: /* @__PURE__ */ jsx23(Typography, { variant: "h3", color: "primary", glow: true, children: player.score }) })
          ]
        },
        player.id
      );
    }) }),
    !isFinalRound && /* @__PURE__ */ jsx23("footer", { className: RoundSummary_default.footer, children: /* @__PURE__ */ jsxs22(Typography, { variant: "body", color: "muted", children: [
      totalRounds - roundNumber,
      " round",
      totalRounds - roundNumber !== 1 ? "s" : "",
      " remaining"
    ] }) })
  ] });
}

// src/organisms/Podium/Podium.tsx
import { useEffect as useEffect3, useState as useState7 } from "react";
import { clsx as clsx24 } from "clsx";

// src/organisms/Podium/Podium.module.css
var Podium_default = {};

// src/organisms/Podium/Podium.tsx
import { jsx as jsx24, jsxs as jsxs23 } from "react/jsx-runtime";
function Podium({
  winners,
  onPlayAgain,
  onExit,
  className
}) {
  const [showConfetti, setShowConfetti] = useState7(false);
  const [revealed, setRevealed] = useState7([false, false, false]);
  useEffect3(() => {
    const timers = [
      setTimeout(() => setRevealed((r) => [true, r[1], r[2]]), 500),
      // 3rd place
      setTimeout(() => setRevealed((r) => [r[0], true, r[2]]), 1200),
      // 2nd place
      setTimeout(() => setRevealed((r) => [r[0], r[1], true]), 2e3),
      // 1st place
      setTimeout(() => setShowConfetti(true), 2200)
    ];
    return () => timers.forEach(clearTimeout);
  }, []);
  const first = winners.find((w) => w.rank === 1);
  const second = winners.find((w) => w.rank === 2);
  const third = winners.find((w) => w.rank === 3);
  return /* @__PURE__ */ jsxs23("div", { className: clsx24(Podium_default.podium, className), children: [
    showConfetti && /* @__PURE__ */ jsx24("div", { className: Podium_default.confetti, children: Array.from({ length: 50 }).map((_, i) => /* @__PURE__ */ jsx24(
      "div",
      {
        className: Podium_default.confettiPiece,
        style: {
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          backgroundColor: ["#CCFF00", "#FF10F0", "#00FFFF", "#9D00FF", "#FFD700"][Math.floor(Math.random() * 5)]
        }
      },
      i
    )) }),
    /* @__PURE__ */ jsx24("header", { className: Podium_default.header, children: /* @__PURE__ */ jsx24(Typography, { variant: "h1", glow: true, className: Podium_default.title, children: "\u{1F3C6} WINNERS \u{1F3C6}" }) }),
    /* @__PURE__ */ jsxs23("div", { className: Podium_default.podiumStands, children: [
      /* @__PURE__ */ jsxs23("div", { className: clsx24(Podium_default.stand, Podium_default.second, revealed[1] && Podium_default.revealed), children: [
        /* @__PURE__ */ jsxs23("div", { className: Podium_default.playerContainer, children: [
          /* @__PURE__ */ jsx24(
            Avatar,
            {
              shape: second.avatarShape,
              color: second.avatarColor,
              size: "xl",
              className: Podium_default.avatar
            }
          ),
          /* @__PURE__ */ jsx24(Typography, { variant: "h4", glow: true, children: second.name }),
          /* @__PURE__ */ jsxs23(Typography, { variant: "body", color: "muted", children: [
            second.score,
            " pts"
          ] })
        ] }),
        /* @__PURE__ */ jsx24("div", { className: Podium_default.standBase, children: /* @__PURE__ */ jsx24(Typography, { variant: "h2", color: "muted", children: "2" }) })
      ] }),
      /* @__PURE__ */ jsxs23("div", { className: clsx24(Podium_default.stand, Podium_default.first, revealed[2] && Podium_default.revealed), children: [
        /* @__PURE__ */ jsxs23("div", { className: Podium_default.playerContainer, children: [
          /* @__PURE__ */ jsx24("div", { className: Podium_default.crown, children: "\u{1F451}" }),
          /* @__PURE__ */ jsx24(
            Avatar,
            {
              shape: first.avatarShape,
              color: first.avatarColor,
              size: "xl",
              className: Podium_default.avatar
            }
          ),
          /* @__PURE__ */ jsx24(Typography, { variant: "h3", color: "accent", glow: true, children: first.name }),
          /* @__PURE__ */ jsxs23(Typography, { variant: "body", color: "accent", children: [
            first.score,
            " pts"
          ] })
        ] }),
        /* @__PURE__ */ jsx24("div", { className: clsx24(Podium_default.standBase, Podium_default.goldBase), children: /* @__PURE__ */ jsx24(Typography, { variant: "h1", color: "accent", glow: true, children: "1" }) })
      ] }),
      /* @__PURE__ */ jsxs23("div", { className: clsx24(Podium_default.stand, Podium_default.third, revealed[0] && Podium_default.revealed), children: [
        /* @__PURE__ */ jsxs23("div", { className: Podium_default.playerContainer, children: [
          /* @__PURE__ */ jsx24(
            Avatar,
            {
              shape: third.avatarShape,
              color: third.avatarColor,
              size: "xl",
              className: Podium_default.avatar
            }
          ),
          /* @__PURE__ */ jsx24(Typography, { variant: "h4", glow: true, children: third.name }),
          /* @__PURE__ */ jsxs23(Typography, { variant: "body", color: "muted", children: [
            third.score,
            " pts"
          ] })
        ] }),
        /* @__PURE__ */ jsx24("div", { className: Podium_default.standBase, children: /* @__PURE__ */ jsx24(Typography, { variant: "h2", color: "muted", children: "3" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs23("footer", { className: Podium_default.actions, children: [
      /* @__PURE__ */ jsx24(Button, { variant: "primary", size: "lg", glow: true, onClick: onPlayAgain, children: "Play Again" }),
      /* @__PURE__ */ jsx24(Button, { variant: "ghost", size: "lg", onClick: onExit, children: "Exit" })
    ] })
  ] });
}

// src/templates/GameFlow/GameFlow.tsx
import { jsx as jsx25 } from "react/jsx-runtime";
function GameFlow({
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
  onExit
}) {
  const lobbyPlayers = players.map((p) => ({
    id: p.id,
    name: p.name,
    avatarShape: p.avatarShape,
    avatarColor: p.avatarColor,
    isVIP: p.isVIP,
    isDJ: p.isDJ,
    isDrinking: p.isDrinking
  }));
  const getLobbyState = () => {
    if (players.length === 0) return "empty";
    if (players.length < 3) return "populating";
    return "ready";
  };
  const currentRoundData = rounds[currentRound - 1];
  const writingPlayers = players.map((p) => ({
    id: p.id,
    name: p.name,
    avatarShape: p.avatarShape,
    avatarColor: p.avatarColor,
    hasSubmitted: p.hasSubmitted
  }));
  const shakingPlayers = players.map((p) => ({
    id: p.id,
    name: p.name,
    avatarShape: p.avatarShape,
    avatarColor: p.avatarColor,
    shakeProgress: 0,
    // Would come from real-time sync
    hasCompleted: false
  }));
  const getTop3 = () => {
    const sorted = [...players].sort((a, b) => b.score - a.score);
    return [
      { ...sorted[0], rank: 1 },
      { ...sorted[1], rank: 2 },
      { ...sorted[2], rank: 3 }
    ];
  };
  const getLeaderboard = () => {
    return [...players].sort((a, b) => b.score - a.score).map((p, i) => ({
      id: p.id,
      name: p.name,
      avatarShape: p.avatarShape,
      avatarColor: p.avatarColor,
      score: p.score,
      roundPoints: 0,
      // Would be calculated from round results
      rank: i + 1
    }));
  };
  switch (phase) {
    case "idle":
      return /* @__PURE__ */ jsx25(SplashScreen, { onStart: onStartGame });
    case "lobby":
      return /* @__PURE__ */ jsx25(
        Lobby,
        {
          state: getLobbyState(),
          roomCode: roomCode || "XXXX",
          players: lobbyPlayers,
          maxPlayers: 8,
          isVIP: isHost,
          onStartGame,
          onSettings
        }
      );
    case "intro":
      return /* @__PURE__ */ jsx25(
        GameIntro,
        {
          roundNumber: currentRound,
          totalRounds,
          theme: currentRoundData?.prompt
        }
      );
    case "writing":
      return /* @__PURE__ */ jsx25(
        WritingPhase,
        {
          prompt: currentRoundData?.prompt || "Loading...",
          timeRemaining: timerRemaining,
          totalTime: timerDuration,
          players: writingPlayers,
          isPanic: timerRemaining <= 10
        }
      );
    case "shaking":
      return /* @__PURE__ */ jsx25(
        ShakingPhase,
        {
          players: shakingPlayers,
          targetShakes: 50,
          timeRemaining: timerRemaining
        }
      );
    case "voting":
    case "reveal":
      return /* @__PURE__ */ jsx25(
        VotingVersus,
        {
          prompt: currentRoundData?.prompt || "",
          answerA: {
            playerId: players[0]?.id || "",
            playerName: players[0]?.name || "",
            avatarShape: players[0]?.avatarShape || "cube",
            avatarColor: players[0]?.avatarColor || "#CCFF00",
            answer: "Answer A placeholder"
          },
          answerB: {
            playerId: players[1]?.id || "",
            playerName: players[1]?.name || "",
            avatarShape: players[1]?.avatarShape || "pyramid",
            avatarColor: players[1]?.avatarColor || "#FF10F0",
            answer: "Answer B placeholder"
          },
          timeRemaining: timerRemaining,
          totalTime: timerDuration,
          showVotes: phase === "reveal",
          votesA: phase === "reveal" ? 3 : void 0,
          votesB: phase === "reveal" ? 2 : void 0,
          winnerId: phase === "reveal" ? players[0]?.id : void 0
        }
      );
    case "summary":
      return /* @__PURE__ */ jsx25(
        RoundSummary,
        {
          roundNumber: currentRound,
          totalRounds,
          players: getLeaderboard(),
          isFinalRound: currentRound >= totalRounds
        }
      );
    case "podium":
      return /* @__PURE__ */ jsx25(
        Podium,
        {
          winners: getTop3(),
          onPlayAgain,
          onExit
        }
      );
    default:
      return /* @__PURE__ */ jsx25(SplashScreen, { onStart: onStartGame });
  }
}

// src/templates/PhoneFlow/PhoneFlow.tsx
import { useState as useState8 } from "react";
import { jsx as jsx26 } from "react/jsx-runtime";
function PhoneFlow({
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
  onStartGame
}) {
  const [screen, setScreen] = useState8("landing");
  const [shakeProgress, setShakeProgress] = useState8(0);
  const currentPlayer = players.find((p) => p.id === playerId);
  const getRole = () => {
    if (currentPlayer?.isVIP) return "vip";
    if (currentPlayer?.isDJ) return "dj";
    return "player";
  };
  const currentRoundData = rounds[currentRound - 1];
  const getEffectiveScreen = () => {
    if (!playerId) {
      return screen === "avatar" ? "avatar" : "landing";
    }
    switch (phase) {
      case "lobby":
        return "lobby";
      case "writing":
        return currentPlayer?.hasSubmitted ? "waiting" : "writing";
      case "shaking":
        return shakeProgress >= 100 ? "waiting" : "shaking";
      case "voting":
        return "voting";
      case "intro":
      case "reveal":
      case "summary":
      case "podium":
        return "waiting";
      default:
        return "waiting";
    }
  };
  const effectiveScreen = getEffectiveScreen();
  switch (effectiveScreen) {
    case "landing":
      return /* @__PURE__ */ jsx26(
        PhoneLanding,
        {
          mode: "join",
          onJoin: (code) => {
            onJoin?.(code);
            setScreen("avatar");
          }
        }
      );
    case "avatar":
      return /* @__PURE__ */ jsx26(
        AvatarBuilder,
        {
          onConfirm: (data) => {
            onCreatePlayer?.(data);
          }
        }
      );
    case "lobby":
      return /* @__PURE__ */ jsx26(
        PhoneLobby,
        {
          currentPlayer: {
            id: currentPlayer?.id || "",
            name: currentPlayer?.name || "",
            avatarShape: currentPlayer?.avatarShape || "cube",
            avatarColor: currentPlayer?.avatarColor || "#CCFF00",
            isVIP: currentPlayer?.isVIP,
            isDJ: currentPlayer?.isDJ
          },
          players: players.map((p) => ({
            id: p.id,
            name: p.name,
            avatarShape: p.avatarShape,
            avatarColor: p.avatarColor,
            isVIP: p.isVIP,
            isDJ: p.isDJ
          })),
          roomCode: roomCode || "",
          role: getRole(),
          onStartGame,
          onLeave
        }
      );
    case "writing":
      return /* @__PURE__ */ jsx26(
        WritingInput,
        {
          prompt: currentRoundData?.prompt || "Loading...",
          timeRemaining: timerRemaining,
          totalTime: timerDuration,
          isPanic: timerRemaining <= 10,
          onSubmit: onSubmitAnswer
        }
      );
    case "shaking":
      return /* @__PURE__ */ jsx26(
        ShakeSubmit,
        {
          progress: shakeProgress,
          targetShakes: 50,
          currentShakes: Math.floor(shakeProgress / 2),
          isComplete: shakeProgress >= 100
        }
      );
    case "voting":
      return /* @__PURE__ */ jsx26(
        VotingPad,
        {
          prompt: currentRoundData?.prompt || "",
          answerA: "Answer A placeholder",
          answerB: "Answer B placeholder",
          timeRemaining: timerRemaining,
          totalTime: timerDuration,
          onVote
        }
      );
    case "waiting":
      return /* @__PURE__ */ jsx26(
        WaitingScreen,
        {
          reason: phase === "voting" ? "voting" : phase === "reveal" ? "results" : phase === "summary" ? "next-round" : "host",
          playerShape: currentPlayer?.avatarShape,
          playerColor: currentPlayer?.avatarColor
        }
      );
    default:
      return /* @__PURE__ */ jsx26(
        WaitingScreen,
        {
          reason: "host",
          playerShape: currentPlayer?.avatarShape,
          playerColor: currentPlayer?.avatarColor
        }
      );
  }
}
export {
  Avatar,
  AvatarBuilder,
  Button,
  GameFlow,
  GameIntro,
  Input,
  Lobby,
  PhoneFlow,
  PhoneLanding,
  PhoneLobby,
  PlayerCard,
  Podium,
  Reconnect,
  RoundSummary,
  Settings,
  ShakeSubmit,
  ShakingPhase,
  SplashScreen,
  SpotifyAuth,
  Timer,
  Typography,
  VotingPad,
  VotingVersus,
  WaitingScreen,
  WritingInput,
  WritingPhase
};
