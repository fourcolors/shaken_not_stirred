# E2E Testing Quick Start

## 🚀 Run Tests Now

```bash
# From project root
pnpm test:e2e:ui    # Opens Playwright UI (recommended)
```

## 📋 What Gets Tested

### 🖥️ Host TV App
- Room code generation
- Lobby display
- Player list updates
- Responsive layout

### 📱 Phone Controller
- Join form
- Room joining
- Player name input
- Mobile viewport

### 👥 Multi-Player
- 3 players join simultaneously
- VIP identification
- Player disconnect handling
- Duplicate name prevention

## ⚡ Quick Commands

```bash
pnpm test:e2e           # Run all tests (headless)
pnpm test:e2e:ui        # Playwright UI (best for dev)
pnpm test:e2e:debug     # Debug mode
pnpm test:e2e:headed    # See browser
```

## 🎯 Test Flow Example

1. **Host generates room code** (`host-landing.spec.ts`)
   - Loads TV app → Generates 6-char code → Displays lobby

2. **Players join** (`phone-join.spec.ts`)
   - Open phone app → Enter code + name → Join lobby

3. **Multi-player lobby** (`lobby-flow.spec.ts`)
   - 3 players join → VIP gets start button → Game starts

## 📁 Key Files

```
e2e/
├── tests/
│   ├── host-landing.spec.ts   # 5 tests
│   ├── phone-join.spec.ts     # 6 tests
│   └── lobby-flow.spec.ts     # 6 tests (multi-user)
├── fixtures/
│   ├── test-users.ts          # Mock players
│   └── test-setup.ts          # Utilities
└── playwright.config.ts       # Configuration
```

## 🐛 Debugging

### Visual Debugging
```bash
pnpm test:e2e:ui    # Opens UI with time-travel debugging
```

### Screenshots
Auto-captured on failure in `e2e/screenshots/`

### Watch Mode
```bash
cd e2e
pnpm exec playwright test --ui
```

## ✅ Before Running

Make sure you have:
- [x] Node.js 22+
- [x] pnpm installed
- [x] Dependencies installed (`pnpm install`)
- [x] Playwright browsers installed (auto-installs on first run)

## 🔧 Troubleshooting

### Port Conflicts
```bash
# Kill existing processes
lsof -ti:5173 | xargs kill  # Host TV
lsof -ti:5174 | xargs kill  # Phone
lsof -ti:1234 | xargs kill  # Yjs server
```

### Slow Tests
- Tests auto-start dev servers (takes ~10s)
- First run downloads browsers
- Use `--ui` mode for faster iteration

### Browser Not Installed
```bash
cd e2e
pnpx playwright install chromium
```

## 📊 Test Results

After running:
```bash
cd e2e
pnpm test:e2e:report  # Opens HTML report
```

## 🎯 Next Steps

1. **Run tests**: `pnpm test:e2e:ui`
2. **Check results**: Green = passing
3. **Add data-testid**: For more stable selectors
4. **Add more tests**: Vote flow, game rounds, etc.

## 💡 Tips

- Use **UI mode** for development (`test:e2e:ui`)
- Use **headed mode** to watch tests (`test:e2e:headed`)
- Use **debug mode** to step through (`test:e2e:debug`)
- Screenshots saved on failure for debugging

## 🚦 Status Indicators

- ✅ **Green**: Test passed
- ❌ **Red**: Test failed (check screenshot)
- ⏭️ **Skipped**: Test skipped
- 🔄 **Retrying**: Flaky test (shouldn't happen)

---

**Ready to test!** Run: `pnpm test:e2e:ui`
