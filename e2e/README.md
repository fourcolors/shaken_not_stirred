# E2E Tests for Shaken Not Stirred

End-to-end testing suite for the multiplayer cocktail party game using Playwright.

## 📁 Structure

```
e2e/
├── tests/               # Test specs
│   ├── host-landing.spec.ts      # Host TV app tests
│   ├── phone-join.spec.ts        # Phone controller join flow
│   └── lobby-flow.spec.ts        # Multi-player lobby scenarios
├── fixtures/            # Test utilities and mock data
│   ├── test-users.ts             # Mock player data
│   └── test-setup.ts             # Common setup functions
├── screenshots/         # Test screenshots (auto-generated)
└── playwright.config.ts # Playwright configuration

```

## 🚀 Quick Start

### Install Dependencies

```bash
# From project root
pnpm install

# Install Playwright browsers
cd e2e && pnpx playwright install --with-deps chromium
```

### Run Tests

```bash
# From project root
pnpm test:e2e              # Run all tests headless
pnpm test:e2e:ui           # Run with Playwright UI
pnpm test:e2e:debug        # Debug mode
pnpm test:e2e:headed       # Run with browser visible

# From e2e directory
pnpm test:e2e
pnpm test:e2e:ui
pnpm test:e2e:debug
pnpm test:e2e:headed
```

## 📋 Test Suites

### 1. Host Landing Tests (`host-landing.spec.ts`)
- ✅ Splash screen loads correctly
- ✅ Room code generation (6-char alphanumeric)
- ✅ Lobby display after room creation
- ✅ Room code persistence on reload
- ✅ Responsive layout (HD, Full HD, 4K)

### 2. Phone Join Tests (`phone-join.spec.ts`)
- ✅ Landing page loads on mobile
- ✅ Room code input validation
- ✅ Player name input validation
- ✅ Successful room joining
- ✅ Player appears in host lobby
- ✅ Mobile viewport handling

### 3. Lobby Flow Tests (`lobby-flow.spec.ts`)
- ✅ Multiple players join lobby (3+ players)
- ✅ Player count display
- ✅ VIP identification (first player)
- ✅ VIP can start game
- ✅ Player disconnect handling
- ✅ Duplicate name prevention

## 🎯 Test Configuration

### Playwright Config (`playwright.config.ts`)

**Projects:**
- `chromium-desktop` - Desktop Chrome (1920x1080)
- `mobile-safari` - iPhone 13 Pro (390x844)

**Web Servers:**
- Host TV: `http://localhost:5173`
- Phone Controller: `http://localhost:5174`
- Yjs WebSocket: `ws://localhost:1234`

**Settings:**
- Timeout: 30s per test
- Retries: 1 on CI, 0 locally
- Screenshots: On failure only
- Video: Retained on failure
- Sequential execution (for multi-user coordination)

## 🧪 Writing Tests

### Test Fixtures

```typescript
import { setupHostPage, generateRoomCode, joinRoom } from '../fixtures/test-setup';
import { TEST_PLAYERS } from '../fixtures/test-users';

test('my test', async ({ page }) => {
  await setupHostPage(page);
  const roomCode = await generateRoomCode(page);
  // ... test logic
});
```

### Multi-User Tests

```typescript
test('multi-player scenario', async ({ browser }) => {
  const context = await browser.newContext();
  const hostPage = await context.newPage();

  const { roomCode, playerPages } = await setupMultiUserTest(hostPage, context, 3);

  // Test with 3 players + host
  // ...

  await cleanupPages(playerPages);
  await hostPage.close();
  await context.close();
});
```

### Using Test Data

```typescript
// Mock players
TEST_PLAYERS[0] // { name: 'Alice', isVIP: true, deviceType: 'phone' }
TEST_PLAYERS[1] // { name: 'Bob', deviceType: 'phone' }

// Generate random room code
const code = generateTestRoomCode(); // e.g., 'ABC123'

// Mock cocktails
TEST_COCKTAILS[0] // { name: 'Martini', ingredients: [...] }
```

## 🔍 Debugging

### Visual Debugging

```bash
pnpm test:e2e:ui    # Opens Playwright UI
pnpm test:e2e:debug # Step-through debugging
```

### Screenshots

Tests automatically capture screenshots on failure. Manual screenshots:

```typescript
await page.screenshot({
  path: 'e2e/screenshots/my-test.png',
  fullPage: true
});
```

### Traces

View traces after test runs:

```bash
cd e2e
pnpx playwright show-trace playwright-report/trace.zip
```

## 📊 Test Reports

After running tests:

```bash
cd e2e
pnpm test:e2e:report  # Opens HTML report
```

## 🎨 Test Selectors

### Recommended Data Test IDs

```html
<!-- Host TV -->
<div data-testid="room-code">ABC123</div>
<div data-testid="player-item">Alice</div>
<button data-testid="start-game">Start</button>

<!-- Phone Controller -->
<input name="roomCode" />
<input name="name" />
<div data-testid="vip-badge">VIP</div>
<div data-testid="lobby">...</div>
```

### Fallback Selectors

Tests use resilient selectors with fallbacks:
- Text content: `text=Join`, `button:has-text("Start")`
- Attributes: `input[name="roomCode"]`
- CSS classes: `.player-card`, `.lobby`
- Data test IDs: `[data-testid="room-code"]` (preferred)

## 🚨 Common Issues

### Port Conflicts

If tests fail to start servers:
```bash
# Kill processes on ports
lsof -ti:5173 | xargs kill
lsof -ti:5174 | xargs kill
lsof -ti:1234 | xargs kill
```

### Timeout Issues

Increase timeout in test:
```typescript
test('slow test', async ({ page }) => {
  test.setTimeout(60000); // 60s
  // ...
});
```

### Flaky Tests

Tests are designed to be reliable. If flaky:
1. Add explicit waits: `await page.waitForTimeout(1000)`
2. Wait for network idle: `await page.waitForLoadState('networkidle')`
3. Use data-testid selectors for stability

## 📚 Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Test Selectors Guide](https://playwright.dev/docs/selectors)
- [Debugging Guide](https://playwright.dev/docs/debug)

## 🎯 Coverage Goals

- **Host App**: 100% critical user flows
- **Phone App**: 100% join and lobby flows
- **Multi-User**: 90% concurrent scenarios
- **Edge Cases**: Disconnect, duplicate names, invalid inputs

## 🤝 Contributing

When adding new tests:

1. **Follow naming conventions**: `feature-name.spec.ts`
2. **Use fixtures**: Import from `test-setup.ts` and `test-users.ts`
3. **Add data-testid**: Update components with test IDs
4. **Document test purpose**: Clear descriptions
5. **Handle cleanup**: Close pages and contexts
6. **Take screenshots**: On important states for visual verification

## 📝 Notes

- Tests run **sequentially** to avoid race conditions in multi-user scenarios
- Each test suite is independent and can run in isolation
- Dev servers auto-start before tests (configured in `playwright.config.ts`)
- Screenshots saved to `e2e/screenshots/` (git-ignored)
- Test reports in `e2e/playwright-report/` (git-ignored)
