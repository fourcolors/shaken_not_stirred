// src/utils/PixiStage.tsx
import { Application, extend } from "@pixi/react";
import { Container, Graphics, Sprite, Text, TextStyle } from "pixi.js";
import { jsx } from "react/jsx-runtime";
extend({ Container, Graphics, Sprite, Text, TextStyle });
function PixiStage({
  width,
  height,
  backgroundColor = 0,
  antialias = true,
  resizeTo,
  children,
  className,
  style
}) {
  const defaultWidth = typeof window !== "undefined" ? window.innerWidth : 800;
  const defaultHeight = typeof window !== "undefined" ? window.innerHeight : 600;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className,
      style: {
        width: width || "100%",
        height: height || "100%",
        overflow: "hidden",
        ...style
      },
      children: /* @__PURE__ */ jsx(
        Application,
        {
          width: width || defaultWidth,
          height: height || defaultHeight,
          backgroundColor,
          antialias,
          autoDensity: true,
          resolution: typeof window !== "undefined" ? window.devicePixelRatio : 1,
          resizeTo,
          children
        }
      )
    }
  );
}

// src/effects/LiquidBackground.tsx
import { useCallback, useEffect, useState } from "react";
import { useTick } from "@pixi/react";
import { Fragment, jsx as jsx2 } from "react/jsx-runtime";
function LiquidBackground({
  primaryColor = 13434624,
  secondaryColor = 16716016,
  accentColor = 10289407,
  speed = 1,
  blobCount = 5,
  width = 800,
  height = 600
}) {
  const [blobs, setBlobs] = useState([]);
  const [time, setTime] = useState(0);
  useEffect(() => {
    const colors = [primaryColor, secondaryColor, accentColor];
    const initialBlobs = [];
    for (let i = 0; i < blobCount; i++) {
      initialBlobs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 100 + Math.random() * 150,
        color: colors[i % colors.length],
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        phase: Math.random() * Math.PI * 2
      });
    }
    setBlobs(initialBlobs);
  }, [blobCount, width, height, primaryColor, secondaryColor, accentColor]);
  useTick((ticker) => {
    const delta = ticker.deltaTime;
    setTime((t) => t + delta * 0.01 * speed);
    setBlobs(
      (prevBlobs) => prevBlobs.map((blob) => {
        let newX = blob.x + blob.speedX * delta * speed;
        let newY = blob.y + blob.speedY * delta * speed;
        if (newX < -blob.radius) newX = width + blob.radius;
        if (newX > width + blob.radius) newX = -blob.radius;
        if (newY < -blob.radius) newY = height + blob.radius;
        if (newY > height + blob.radius) newY = -blob.radius;
        return {
          ...blob,
          x: newX,
          y: newY
        };
      })
    );
  });
  const drawBlob = useCallback(
    (g, blob, index) => {
      g.clear();
      const morphedRadius = blob.radius * (1 + 0.2 * Math.sin(time * 2 + blob.phase) * Math.cos(time * 1.5 + index));
      const alpha = 0.15;
      g.circle(blob.x, blob.y, morphedRadius * 1.5);
      g.fill({ color: blob.color, alpha: alpha * 0.3 });
      g.circle(blob.x, blob.y, morphedRadius * 1.2);
      g.fill({ color: blob.color, alpha: alpha * 0.5 });
      g.circle(blob.x, blob.y, morphedRadius);
      g.fill({ color: blob.color, alpha });
    },
    [time]
  );
  return /* @__PURE__ */ jsx2(Fragment, { children: blobs.map((blob, index) => /* @__PURE__ */ jsx2(
    "pixiGraphics",
    {
      draw: (g) => drawBlob(g, blob, index),
      blendMode: "add"
    },
    index
  )) });
}

// src/physics/PhysicsWorld.tsx
import {
  createContext,
  useContext,
  useEffect as useEffect2,
  useRef,
  useState as useState2
} from "react";
import { extend as extend2, useTick as useTick2 } from "@pixi/react";
import { Container as Container2 } from "pixi.js";
import Matter from "matter-js";
import { jsx as jsx3 } from "react/jsx-runtime";
extend2({ Container: Container2 });
var PhysicsContext = createContext(null);
var usePhysics = () => {
  const context = useContext(PhysicsContext);
  if (!context) {
    throw new Error("usePhysics must be used within a PhysicsWorld");
  }
  return context;
};
var PhysicsWorld = ({
  width,
  height,
  gravity = { x: 0, y: 1 },
  debug = false,
  children
}) => {
  const engineRef = useRef(null);
  const [contextValue, setContextValue] = useState2(
    null
  );
  useEffect2(() => {
    const engine = Matter.Engine.create({
      gravity
    });
    engineRef.current = engine;
    const wallThickness = 50;
    const walls = [
      // Floor
      Matter.Bodies.rectangle(
        width / 2,
        height + wallThickness / 2,
        width,
        wallThickness,
        { isStatic: true, label: "floor" }
      ),
      // Ceiling
      Matter.Bodies.rectangle(
        width / 2,
        -wallThickness / 2,
        width,
        wallThickness,
        { isStatic: true, label: "ceiling" }
      ),
      // Left wall
      Matter.Bodies.rectangle(
        -wallThickness / 2,
        height / 2,
        wallThickness,
        height,
        { isStatic: true, label: "left-wall" }
      ),
      // Right wall
      Matter.Bodies.rectangle(
        width + wallThickness / 2,
        height / 2,
        wallThickness,
        height,
        { isStatic: true, label: "right-wall" }
      )
    ];
    Matter.World.add(engine.world, walls);
    setContextValue({
      engine,
      world: engine.world,
      width,
      height
    });
    if (debug) {
      console.log("[PhysicsWorld] Engine initialized", {
        width,
        height,
        gravity
      });
    }
    return () => {
      if (engineRef.current) {
        Matter.World.clear(engineRef.current.world, false);
        Matter.Engine.clear(engineRef.current);
        engineRef.current = null;
      }
    };
  }, [width, height, gravity.x, gravity.y, debug]);
  useTick2((ticker) => {
    if (engineRef.current) {
      const timeStep = 1e3 / 60 * ticker.deltaTime;
      Matter.Engine.update(engineRef.current, timeStep);
    }
  });
  if (!contextValue) {
    return null;
  }
  return /* @__PURE__ */ jsx3(PhysicsContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx3("pixiContainer", { children }) });
};

// src/physics/PhysicsBody.tsx
import React2, { useEffect as useEffect3, useRef as useRef2, useState as useState3 } from "react";
import { extend as extend3 } from "@pixi/react";
import { Graphics as Graphics2 } from "pixi.js";
import Matter2 from "matter-js";
import { jsx as jsx4 } from "react/jsx-runtime";
extend3({ Graphics: Graphics2 });
var PhysicsBody = ({
  x,
  y,
  width,
  height,
  isStatic = false,
  restitution = 0.8,
  friction = 0.01,
  color = 13434624,
  velocity = { x: 0, y: 0 },
  shape = "rectangle",
  debug = false
}) => {
  const { engine, world } = usePhysics();
  const bodyRef = useRef2(null);
  const [position, setPosition] = useState3({ x, y });
  const [rotation, setRotation] = useState3(0);
  useEffect3(() => {
    let body;
    if (shape === "circle") {
      const radius = Math.min(width, height) / 2;
      body = Matter2.Bodies.circle(x, y, radius, {
        isStatic,
        restitution,
        friction,
        frictionAir: 0.01,
        density: 1e-3
      });
    } else {
      body = Matter2.Bodies.rectangle(x, y, width, height, {
        isStatic,
        restitution,
        friction,
        frictionAir: 0.01,
        density: 1e-3
      });
    }
    Matter2.Body.setVelocity(body, velocity);
    Matter2.World.add(world, body);
    bodyRef.current = body;
    if (debug) {
      console.log("[PhysicsBody] Created body", { x, y, width, height, shape });
    }
    return () => {
      if (bodyRef.current) {
        Matter2.World.remove(world, bodyRef.current);
        bodyRef.current = null;
      }
    };
  }, []);
  useEffect3(() => {
    const updatePosition = () => {
      if (bodyRef.current) {
        setPosition({
          x: bodyRef.current.position.x,
          y: bodyRef.current.position.y
        });
        setRotation(bodyRef.current.angle);
      }
    };
    Matter2.Events.on(engine, "afterUpdate", updatePosition);
    return () => {
      Matter2.Events.off(engine, "afterUpdate", updatePosition);
    };
  }, [engine]);
  const draw = React2.useCallback(
    (g) => {
      g.clear();
      g.beginFill(color);
      if (shape === "circle") {
        const radius = Math.min(width, height) / 2;
        g.drawCircle(0, 0, radius);
      } else {
        g.drawRect(-width / 2, -height / 2, width, height);
      }
      g.endFill();
    },
    [color, width, height, shape]
  );
  return /* @__PURE__ */ jsx4(
    "pixiGraphics",
    {
      draw,
      x: position.x,
      y: position.y,
      rotation
    }
  );
};

// src/physics/AvatarBody.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var AvatarBody = ({
  x,
  y,
  shape,
  size = 50,
  color = 13434624,
  enableBounce = true,
  debug = false
}) => {
  const getRandomVelocity = () => {
    if (!enableBounce) {
      return { x: 0, y: 0 };
    }
    const speed = 2 + Math.random() * 3;
    const angle = Math.random() * Math.PI * 2;
    return {
      x: Math.cos(angle) * speed,
      y: Math.sin(angle) * speed
    };
  };
  const getPhysicsConfig = () => {
    const velocity = getRandomVelocity();
    switch (shape) {
      case "sphere":
        return {
          shape: "circle",
          width: size,
          height: size,
          restitution: 0.9,
          // Very bouncy
          friction: 5e-3,
          velocity
        };
      case "cube":
        return {
          shape: "rectangle",
          width: size,
          height: size,
          restitution: 0.7,
          // Moderately bouncy
          friction: 0.01,
          velocity
        };
      case "pyramid":
        return {
          shape: "rectangle",
          width: size,
          height: size * 0.866,
          // √3/2 for triangle aspect
          restitution: 0.75,
          friction: 0.015,
          velocity
        };
      case "diamond":
        return {
          shape: "rectangle",
          width: size * 0.7,
          height: size * 0.7,
          restitution: 0.85,
          friction: 8e-3,
          velocity
        };
      default:
        return {
          shape: "rectangle",
          width: size,
          height: size,
          restitution: 0.8,
          friction: 0.01,
          velocity
        };
    }
  };
  const physicsConfig = getPhysicsConfig();
  if (debug) {
    console.log("[AvatarBody] Created avatar", {
      shape,
      x,
      y,
      size,
      velocity: physicsConfig.velocity
    });
  }
  return /* @__PURE__ */ jsx5(
    PhysicsBody,
    {
      x,
      y,
      width: physicsConfig.width,
      height: physicsConfig.height,
      shape: physicsConfig.shape,
      restitution: physicsConfig.restitution,
      friction: physicsConfig.friction,
      color,
      velocity: physicsConfig.velocity,
      debug
    }
  );
};
export {
  AvatarBody,
  LiquidBackground,
  PhysicsBody,
  PhysicsWorld,
  PixiStage,
  usePhysics
};
