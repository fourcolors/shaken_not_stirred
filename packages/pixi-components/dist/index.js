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
export {
  LiquidBackground,
  PixiStage
};
