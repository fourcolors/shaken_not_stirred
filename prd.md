# 📑 MASTER SPECIFICATION: THE VIVA LOUNGE (v1.1 - Storybook Edition)

**Addendum:** This project utilizes **Storybook Driven Development**. All visual components must be built and approved in Storybook before being integrated into the application logic.

## 1. COMPONENT LIBRARY ARCHITECTURE
We are separating the "Visuals" from the "Logic."

*   **Tooling:** Storybook v8 (React + Vite).
*   **Structure:**
    *   **Atoms:** Buttons, Inputs, Avatars, Typography (The "Acid Lounge" primitives).
    *   **Molecules:** Player Cards, Prompt Cards, Timer Bars, Notification Toasts.
    *   **Organisms:** Full Screen Layouts (Lobby, Voting Screen, Podium).
*   **Pixi.js Integration:** Storybook must include a `PixiDecorator` that wraps stories in a `<Stage>` so we can test shaders and particle effects in isolation.

---

## 2. THE SCREEN INVENTORY (Storybook deliverables)

You must create a Story for every single state listed below.

### A. The Platform (Host/TV)
*The "Console" Interface.*

1.  **`Host/Splash`:** The Attract Mode. Animated "Acid Liquid" Logo + "Scan QR to Join" CTA.
2.  **`Host/SpotifyAuth`:** A technical screen showing Spotify Connection Status (Connected/Disconnected/QR for Auth).
3.  **`Host/Lobby`:**
    *   *State A (Empty):* "Waiting for players..." pulsing text.
    *   *State B (Populating):* Grid of Player Avatars bouncing in via physics.
    *   *State C (Ready):* "VIP can start the game" indicator.
4.  **`Host/Settings`:** Overlay menu for Volume, Content Filters, and Streamer Mode (Hide Room Code).
5.  **`Host/Reconnect`:** A "Signal Lost" glitch effect screen if the websocket drops.

### B. The Platform (Controller/Phone)
*The "Remote" Interface.*

1.  **`Phone/Landing`:**
    *   *State A:* Room Code Input + Name Input.
    *   *State B:* "Rejoin" button (if session cookie exists).
2.  **`Phone/AvatarBuilder`:** Carousel to pick Shape (Cube/Pyramid) and Color (Acid Green/Pink). Toggle for "I am Drinking" (Liability Waiver).
3.  **`Phone/Lobby`:**
    *   *State A:* "You're In!" waiting animation.
    *   *State B (VIP):* Includes "Start Game" and "Settings" buttons.
    *   *State C (DJ):* Includes "Music/SFX" tab.

### C. The Game: "Shaken Not Stirred" (Host/TV)
1.  **`Game/Intro`:** "Round 1" kinetic typography animation (Liquid distortion).
2.  **`Game/Tutorial`:** Quick 3-step animated guide ("Write", "Shake", "Vote").
3.  **`Game/WritingPhase`:**
    *   *Visual:* Giant Countdown Timer (Circular progress bar).
    *   *Audio Viz:* Bars reacting to the Spotify track.
4.  **`Game/ShakingPhase`:**
    *   *Visual:* "SHAKE IT!" text vibrating violently. Avatars shaking on screen.
5.  **`Game/Voting_Versus`:**
    *   *Layout:* Split screen. Answer A (Left) vs Answer B (Right).
    *   *Action:* Floating cursors (Audience swarm) hovering over options.
6.  **`Game/Voting_Reveal`:**
    *   *Animation:* Percentages fill up (liquid fill effect). Winner expands, loser shrinks/explodes.
7.  **`Game/RoundSummary`:** Leaderboard list with score deltas (`+500`).
8.  **`Game/Thriplash_Intro`:** "License to Quill" secret dossier folder opening animation.
9.  **`Game/Thriplash_Reveal`:** 3 answers revealing sequentially (1..2..3..).
10. **`Game/Podium`:** Top 3 players on different height pedestals. Confetti particle system.
11. **`Game/BartenderPhase`:**
    *   *Visual:* Winner Avatar in center. "Assigning Sips..." text.
    *   *Action:* Projectile (Shot Glass) spawning from Winner -> hitting Loser.

### D. The Game: "Shaken Not Stirred" (Controller/Phone)
1.  **`Phone/WritingInput`:**
    *   *The Sandwich:* HTML Text Area on top of Pixi liquid background.
    *   *State:* "Panic Mode" (Red borders) when timer < 10s.
2.  **`Phone/ShakeInstruction`:**
    *   *Visual:* Phone icon shaking. "Shake to Submit!" text.
    *   *Feedback:* "Locked In" checkmark animation after successful shake.
3.  **`Phone/VotingPad`:**
    *   *Layout:* Two massive buttons: "Option A" and "Option B".
    *   *State:* "Vote Cast" (Buttons disabled + Haptic pulse).
4.  **`Phone/RoundFeedback`:**
    *   *Win:* "You crushed it!" (Green/Confetti).
    *   *Lose:* "Oof. Drink up." (Red/Glitch).
5.  **`Phone/BartenderUI`:**
    *   *Winner View:* List of players with `[+]` `[-]` sip counters. "Pour" button.
    *   *Loser View:* "Praying..." animation.

---

## 3. UPDATED PHASING STRATEGY

### Phase 1: The Design System (Storybook)
*   **Goal:** Build the "Acid Lounge" UI Library.
*   **Deliverables:**
    *   Set up Storybook in `packages/ui`.
    *   Build all **Atoms** (Typography, Colors, Buttons).
    *   Build all **Molecules** (Avatars, Cards).
    *   *Verification:* Visual sign-off on the "Liquid" aesthetic.

### Phase 2: The Skeleton (Infrastructure)
*   **Goal:** Networking & Auth (Monorepo setup, Yjs, Spotify).

### Phase 3: The Integration (Game Logic)
*   **Goal:** Connect Storybook components to Yjs state.

---

## 4. HIVE MIND INSTRUCTION

**Run this command to spawn the architect:**

```bash
npx claude-flow@alpha hive-mind spawn "Architect and build The Viva Lounge Platform and Shaken Not Stirred Game with a strict Storybook Driven Development workflow using Turborepo Yjs React Pixi Matter and Spotify SDK implementing the full Screen Inventory and Acid Lounge aesthetic" --claude
```

**Instruction:**
> "I have provided the `VIVA_LOUNGE_MASTER_SPEC.md` which includes a complete **Screen Inventory** for Storybook.
>
> **CRITICAL INSTRUCTION:** Your first task is NOT to build the backend. Your first task is to set up **Storybook** and build the 'Acid Lounge' Design System (Atoms & Molecules). We will not write game logic until the screens exist in Storybook."