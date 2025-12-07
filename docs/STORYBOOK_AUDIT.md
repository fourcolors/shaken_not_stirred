# Storybook QA Audit Report
**Date:** 2025-12-06
**Agent:** STORYBOOK QA
**Status:** ⚠️ BUILD FAILURE + INCOMPLETE COVERAGE

---

## 🚨 Critical Issues

### 1. Build Failure
**Error:** Storybook build fails due to ESM/CommonJS incompatibility in `.storybook/main.ts`

```
ReferenceError: require is not defined in ES module scope, you can use import instead
    at getAbsolutePath (/.storybook/main.ts:5:18)
```

**Location:** `/Users/fourcolors/Projects/1_active/shaken_not_stired/apps/storybook/.storybook/main.ts`

**Issue:** The configuration file uses `require.resolve()` in an ES module context (TypeScript with `"type": "module"`).

**Impact:** Storybook cannot build. All stories are inaccessible in production build mode.

---

## 📊 Story Inventory Analysis

### Total Stories Found: 28

#### Component Distribution:
- **Atoms:** 4 stories
- **Molecules:** 2 stories
- **Organisms:** 16 stories
- **Templates:** 2 stories
- **Pixi Components:** 2 stories
- **Effects:** 2 stories

---

## ✅ Implemented Stories (28 Total)

### Atoms (4/4 expected)
- ✅ `Avatar.stories.tsx`
- ✅ `Button.stories.tsx`
- ✅ `Input.stories.tsx`
- ✅ `Typography.stories.tsx`

### Molecules (2/~4 expected)
- ✅ `PlayerCard.stories.tsx`
- ✅ `Timer.stories.tsx`
- ❌ **Missing:** Prompt Cards
- ❌ **Missing:** Notification Toasts

### Organisms - Host/TV Screens (7 stories)
- ✅ `SplashScreen.stories.tsx` → **Host/Splash**
- ✅ `SpotifyAuth.stories.tsx` → **Host/SpotifyAuth**
- ✅ `Lobby.stories.tsx` → **Host/Lobby** (States A, B, C)
- ✅ `Settings.stories.tsx` → **Host/Settings**
- ✅ `Reconnect.stories.tsx` → **Host/Reconnect**
- ✅ `WaitingScreen.stories.tsx` → (Additional)
- ✅ `GameIntro.stories.tsx` → **Game/Intro**

### Organisms - Phone Screens (4 stories)
- ✅ `PhoneLanding.stories.tsx` → **Phone/Landing** (States A, B)
- ✅ `AvatarBuilder.stories.tsx` → **Phone/AvatarBuilder**
- ✅ `PhoneLobby.stories.tsx` → **Phone/Lobby** (States A, B, C)
- ✅ `WritingInput.stories.tsx` → **Phone/WritingInput**

### Organisms - Game Screens (7 stories)
- ✅ `WritingPhase.stories.tsx` → **Game/WritingPhase**
- ✅ `ShakingPhase.stories.tsx` → **Game/ShakingPhase**
- ✅ `VotingVersus.stories.tsx` → **Game/Voting_Versus**
- ✅ `RoundSummary.stories.tsx` → **Game/RoundSummary**
- ✅ `Podium.stories.tsx` → **Game/Podium**
- ✅ `ShakeSubmit.stories.tsx` → **Phone/ShakeInstruction**
- ✅ `VotingPad.stories.tsx` → **Phone/VotingPad**

### Templates (2 stories)
- ✅ `GameFlow.stories.tsx`
- ✅ `PhoneFlow.stories.tsx`

### Pixi Components (2 stories)
- ✅ `LiquidBackground.stories.tsx` → (Acid Lounge aesthetic)
- ✅ `PhysicsWorld.stories.tsx` → (Matter.js integration)

---

## ❌ Missing Stories from PRD Screen Inventory

### Host/TV Screens (3 missing)
1. ❌ **Game/Tutorial** - 3-step animated guide
2. ❌ **Game/Voting_Reveal** - Liquid fill percentage reveal
3. ❌ **Game/Thriplash_Intro** - "License to Quill" dossier animation
4. ❌ **Game/Thriplash_Reveal** - Sequential 3-answer reveal
5. ❌ **Game/BartenderPhase** - Winner assigns sips

### Phone Screens (2 missing)
1. ❌ **Phone/RoundFeedback** - Win/Lose states with confetti/glitch
2. ❌ **Phone/BartenderUI** - Sip counter interface (Winner/Loser views)

### Molecules (2 missing)
1. ❌ **Prompt Cards** - Display game prompts
2. ❌ **Notification Toasts** - System notifications

---

## 📈 Coverage Summary

| Category | Required | Implemented | Missing | Coverage |
|----------|----------|-------------|---------|----------|
| **Host/TV Screens** | 11 | 7 | 4 | 64% |
| **Phone Screens** | 7 | 4 | 3 | 57% |
| **Atoms** | 4 | 4 | 0 | 100% |
| **Molecules** | 4 | 2 | 2 | 50% |
| **Pixi Components** | 2 | 2 | 0 | 100% |
| **TOTAL** | 28 | 19 | 9 | **68%** |

---

## 🔧 Required Actions

### Priority 1: Fix Build System
1. **Update `.storybook/main.ts`** to use ES module imports instead of `require.resolve()`
2. **Verify build** with `pnpm --filter @shaken/storybook build-storybook`
3. **Test dev mode** with `pnpm --filter @shaken/storybook storybook`

### Priority 2: Complete Missing Stories
Create the following 9 missing stories:

#### Game Phase Stories (5)
- [ ] `Game/Tutorial.stories.tsx`
- [ ] `Game/VotingReveal.stories.tsx`
- [ ] `Game/ThriplashIntro.stories.tsx`
- [ ] `Game/ThriplashReveal.stories.tsx`
- [ ] `Game/BartenderPhase.stories.tsx`

#### Phone Stories (2)
- [ ] `Phone/RoundFeedback.stories.tsx`
- [ ] `Phone/BartenderUI.stories.tsx`

#### Molecules (2)
- [ ] `molecules/PromptCard/PromptCard.stories.tsx`
- [ ] `molecules/NotificationToast/NotificationToast.stories.tsx`

---

## 📁 File System Organization

### Current Structure:
```
packages/
├── ui/src/
│   ├── atoms/          (4 stories ✅)
│   ├── molecules/      (2 stories ⚠️)
│   ├── organisms/      (16 stories ⚠️)
│   └── templates/      (2 stories ✅)
└── pixi-components/src/
    ├── effects/        (1 story ✅)
    └── physics/        (1 story ✅)
```

### Missing Component Folders:
- `packages/ui/src/organisms/Tutorial/`
- `packages/ui/src/organisms/VotingReveal/`
- `packages/ui/src/organisms/ThriplashIntro/`
- `packages/ui/src/organisms/ThriplashReveal/`
- `packages/ui/src/organisms/BartenderPhase/`
- `packages/ui/src/organisms/RoundFeedback/`
- `packages/ui/src/organisms/BartenderUI/`
- `packages/ui/src/molecules/PromptCard/`
- `packages/ui/src/molecules/NotificationToast/`

---

## 🎯 Storybook Configuration Status

### Detected Configuration Files:
- ✅ `.storybook/main.ts` (exists but has ESM error)
- ✅ Story glob patterns configured for:
  - `apps/storybook/stories/**/*.stories.*`
  - `packages/ui/src/**/*.stories.*`
  - `packages/pixi-components/src/**/*.stories.*`

### Addons Configured:
- ✅ `@storybook/addon-links`
- ✅ `@storybook/addon-essentials`
- ✅ `@storybook/addon-interactions`

### Framework:
- ✅ `@storybook/react-vite` (Vite integration)
- ✅ TypeScript support with `react-docgen-typescript`

---

## 🚀 Next Steps

1. **Immediate:** Fix the ESM/CommonJS build error in `.storybook/main.ts`
2. **Short-term:** Implement the 9 missing stories per PRD requirements
3. **Quality:** Add state variations to existing stories (e.g., Lobby States A/B/C should be distinct stories)
4. **Testing:** Verify Pixi.js decorator works with all Pixi component stories
5. **Documentation:** Add MDX documentation pages for each organism-level component

---

## 📝 Notes

- **Positive:** Strong foundation with atoms and core organisms implemented
- **Positive:** Pixi.js components have dedicated stories (LiquidBackground, PhysicsWorld)
- **Positive:** Template-level flow stories exist for integration testing
- **Concern:** Build system failure prevents production builds
- **Concern:** 32% of PRD-required stories are missing
- **Concern:** Some organisms might need state-specific stories (e.g., separate stories for Lobby State A/B/C)

---

## 🔍 Build Error Details

**Command Executed:**
```bash
pnpm --filter @shaken/storybook build-storybook
```

**Error Output:**
```
ReferenceError: require is not defined in ES module scope, you can use import instead
    at getAbsolutePath (/.storybook/main.ts:5:18)
```

**Root Cause:** The `getAbsolutePath()` helper function uses `require.resolve()` which is not available in ES modules. This is incompatible with modern TypeScript/Node.js ESM setups.

**Recommended Fix:** Replace with ES module import resolution or use `fileURLToPath` + `import.meta.url`.

---

**End of Audit Report**
