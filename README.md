# Shaken Not Stirred 🍸

A party game platform featuring "The Viva Lounge" - a real-time multiplayer experience with an Acid Lounge aesthetic.

## Overview

This project uses **Storybook Driven Development** to build a visually stunning party game experience. Players join via phone controllers while the main game displays on a TV/host screen.

## Tech Stack

- React + Vite
- Storybook v8
- Pixi.js (WebGL effects)
- Yjs (Real-time sync)
- Turborepo (Monorepo)

## Getting Started

### Using Podman (Recommended)

This project uses a Docker container for consistent development environments. We use [Podman](https://podman.io/) as the container runtime.

**Build the container:**

```bash
podman build -t shaken-not-stirred .
```

**Run the container:**

```bash
podman run -p 3000:3000 shaken-not-stirred
```

**Development mode (with live reload):**

```bash
podman run -it -p 3000:3000 -v $(pwd):/app -v /app/node_modules shaken-not-stirred
```

> **Note:** The `-v /app/node_modules` creates an anonymous volume that preserves the container's node_modules, preventing conflicts with your host machine.

**Other useful commands:**

```bash
# Run a shell inside the container
podman run -it shaken-not-stirred /bin/sh

# Stop all running containers
podman stop --all

# Remove the image (to rebuild fresh)
podman rmi shaken-not-stirred
```

*See `prd.md` for the full specification.*

## License

MIT
