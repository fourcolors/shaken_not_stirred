// src/useGameState.ts
import { useSnapshot } from "valtio";
import { gameState } from "@shaken/game-logic";
function useGameState() {
  const snap = useSnapshot(gameState);
  return {
    // Room
    roomCode: snap.roomCode,
    isHostConnected: snap.isHostConnected,
    // Players
    players: snap.players,
    vipPlayerId: snap.vipPlayerId,
    djPlayerId: snap.djPlayerId,
    playerCount: snap.players.length,
    // Game State
    phase: snap.phase,
    currentRound: snap.currentRound,
    totalRounds: snap.totalRounds,
    rounds: snap.rounds,
    // Timer
    timerDuration: snap.timerDuration,
    timerRemaining: snap.timerRemaining,
    isTimerRunning: snap.isTimerRunning,
    // Settings
    settings: snap.settings,
    // Computed
    isInLobby: snap.phase === "lobby",
    isPlaying: !["idle", "lobby", "podium"].includes(snap.phase),
    isGameOver: snap.phase === "podium",
    canStart: snap.players.length >= 2,
    // Get specific player
    getPlayer: (id) => snap.players.find((p) => p.id === id),
    getVIP: () => snap.players.find((p) => p.isVIP),
    getDJ: () => snap.players.find((p) => p.isDJ)
  };
}

// src/useTimer.ts
import { useState, useEffect, useCallback, useRef } from "react";
function useTimer(options) {
  const {
    duration,
    autoStart = false,
    onComplete,
    onTick,
    interval = 1e3
  } = options;
  const [timeRemaining, setTimeRemaining] = useState(duration);
  const [isRunning, setIsRunning] = useState(autoStart);
  const [isComplete, setIsComplete] = useState(false);
  const intervalRef = useRef(null);
  const onCompleteRef = useRef(onComplete);
  const onTickRef = useRef(onTick);
  useEffect(() => {
    onCompleteRef.current = onComplete;
    onTickRef.current = onTick;
  }, [onComplete, onTick]);
  useEffect(() => {
    if (!isRunning || isComplete) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        const newTime = Math.max(0, prev - 1);
        onTickRef.current?.(newTime);
        if (newTime === 0) {
          setIsRunning(false);
          setIsComplete(true);
          onCompleteRef.current?.();
        }
        return newTime;
      });
    }, interval);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, isComplete, interval]);
  const start = useCallback(() => {
    if (!isComplete) {
      setIsRunning(true);
    }
  }, [isComplete]);
  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);
  const reset = useCallback(() => {
    setTimeRemaining(duration);
    setIsRunning(false);
    setIsComplete(false);
  }, [duration]);
  const setDuration = useCallback((seconds) => {
    setTimeRemaining(seconds);
    setIsRunning(false);
    setIsComplete(false);
  }, []);
  const progress = timeRemaining / duration * 100;
  return {
    timeRemaining,
    progress,
    isRunning,
    isComplete,
    start,
    pause,
    reset,
    setDuration
  };
}

// src/useShake.ts
import { useState as useState2, useEffect as useEffect2, useCallback as useCallback2, useRef as useRef2 } from "react";
function useShake(options = {}) {
  const {
    threshold = 15,
    timeWindow = 1e3,
    requiredShakes = 3,
    onShake,
    enabled = true
  } = options;
  const [isShaking, setIsShaking] = useState2(false);
  const [shakeCount, setShakeCount] = useState2(0);
  const [hasShaken, setHasShaken] = useState2(false);
  const [isSupported, setIsSupported] = useState2(false);
  const lastUpdate = useRef2(0);
  const lastX = useRef2(0);
  const lastY = useRef2(0);
  const lastZ = useRef2(0);
  const shakeTimestamps = useRef2([]);
  const onShakeRef = useRef2(onShake);
  useEffect2(() => {
    onShakeRef.current = onShake;
  }, [onShake]);
  useEffect2(() => {
    const supported = typeof window !== "undefined" && "DeviceMotionEvent" in window;
    setIsSupported(supported);
  }, []);
  const requestPermission = useCallback2(async () => {
    if (typeof window === "undefined") return false;
    const DeviceMotionEvent = window.DeviceMotionEvent;
    if (typeof DeviceMotionEvent?.requestPermission === "function") {
      try {
        const permission = await DeviceMotionEvent.requestPermission();
        return permission === "granted";
      } catch {
        return false;
      }
    }
    return true;
  }, []);
  const reset = useCallback2(() => {
    setShakeCount(0);
    setHasShaken(false);
    setIsShaking(false);
    shakeTimestamps.current = [];
  }, []);
  useEffect2(() => {
    if (!enabled || hasShaken || !isSupported) return;
    const handleMotion = (event) => {
      const acceleration = event.accelerationIncludingGravity;
      if (!acceleration) return;
      const { x, y, z } = acceleration;
      if (x === null || y === null || z === null) return;
      const currentTime = Date.now();
      const timeDiff = currentTime - lastUpdate.current;
      if (timeDiff > 100) {
        const diffX = x - lastX.current;
        const diffY = y - lastY.current;
        const diffZ = z - lastZ.current;
        const speed = Math.abs(diffX + diffY + diffZ) / timeDiff * 1e4;
        if (speed > threshold) {
          setIsShaking(true);
          shakeTimestamps.current.push(currentTime);
          shakeTimestamps.current = shakeTimestamps.current.filter(
            (t) => currentTime - t < timeWindow
          );
          const count = shakeTimestamps.current.length;
          setShakeCount(count);
          if (count >= requiredShakes) {
            setHasShaken(true);
            onShakeRef.current?.();
          }
          setTimeout(() => setIsShaking(false), 100);
        }
        lastUpdate.current = currentTime;
        lastX.current = x;
        lastY.current = y;
        lastZ.current = z;
      }
    };
    window.addEventListener("devicemotion", handleMotion);
    return () => {
      window.removeEventListener("devicemotion", handleMotion);
    };
  }, [enabled, hasShaken, isSupported, threshold, timeWindow, requiredShakes]);
  return {
    isShaking,
    shakeCount,
    hasShaken,
    isSupported,
    requestPermission,
    reset
  };
}

// src/useYjsSync.ts
import { useEffect as useEffect3, useState as useState3, useCallback as useCallback3 } from "react";
import { useSnapshot as useSnapshot2 } from "valtio";
import {
  gameState as gameState2,
  getYjsDoc,
  createYjsProvider,
  disconnectYjs,
  getSharedTypes
} from "@shaken/game-logic";
function useYjsSync(options) {
  const { serverUrl, roomCode, isHost = false } = options;
  const [isConnected, setIsConnected] = useState3(false);
  const [isSynced, setIsSynced] = useState3(false);
  const [error, setError] = useState3(null);
  const snapshot = useSnapshot2(gameState2);
  const syncToYjs = useCallback3(() => {
    if (!isHost) return;
    const { gameState: yGameState, players: yPlayers } = getSharedTypes();
    yGameState.set("phase", gameState2.phase);
    yGameState.set("currentRound", gameState2.currentRound);
    yGameState.set("totalRounds", gameState2.totalRounds);
    yGameState.set("timerRemaining", gameState2.timerRemaining);
    yGameState.set("roomCode", gameState2.roomCode);
    const doc = getYjsDoc();
    doc.transact(() => {
      while (yPlayers.length > 0) {
        yPlayers.delete(0);
      }
      gameState2.players.forEach((player) => {
        yPlayers.push([player]);
      });
    });
  }, [isHost]);
  const syncFromYjs = useCallback3(() => {
    if (isHost) return;
    const { gameState: yGameState, players: yPlayers } = getSharedTypes();
    const phase = yGameState.get("phase");
    const currentRound = yGameState.get("currentRound");
    const totalRounds = yGameState.get("totalRounds");
    const timerRemaining = yGameState.get("timerRemaining");
    if (phase !== void 0) gameState2.phase = phase;
    if (currentRound !== void 0) gameState2.currentRound = currentRound;
    if (totalRounds !== void 0) gameState2.totalRounds = totalRounds;
    if (timerRemaining !== void 0) gameState2.timerRemaining = timerRemaining;
    const players = yPlayers.toArray();
    gameState2.players = players;
  }, [isHost]);
  const connect = useCallback3(() => {
    try {
      const provider = createYjsProvider({
        serverUrl,
        roomName: roomCode
      });
      provider.on("status", (event) => {
        setIsConnected(event.status === "connected");
        if (event.status === "disconnected") {
          setError(new Error("Disconnected from server"));
        }
      });
      provider.on("sync", (synced) => {
        setIsSynced(synced);
        if (synced && !isHost) {
          syncFromYjs();
        }
      });
      if (!isHost) {
        const { gameState: yGameState, players: yPlayers } = getSharedTypes();
        yGameState.observe(() => {
          syncFromYjs();
        });
        yPlayers.observe(() => {
          syncFromYjs();
        });
      }
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to connect"));
    }
  }, [serverUrl, roomCode, isHost, syncFromYjs]);
  const disconnect = useCallback3(() => {
    disconnectYjs();
    setIsConnected(false);
    setIsSynced(false);
  }, []);
  const reconnect = useCallback3(() => {
    disconnect();
    setTimeout(connect, 100);
  }, [disconnect, connect]);
  useEffect3(() => {
    connect();
    return () => disconnect();
  }, [connect, disconnect]);
  useEffect3(() => {
    if (isHost && isSynced) {
      syncToYjs();
    }
  }, [isHost, isSynced, snapshot, syncToYjs]);
  return {
    isConnected,
    isSynced,
    error,
    disconnect,
    reconnect
  };
}
export {
  useGameState,
  useShake,
  useTimer,
  useYjsSync
};
