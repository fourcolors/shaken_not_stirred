import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright E2E Test Configuration
 * Tests multiplayer game scenarios across host-tv and controller-phone apps
 */
export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.ts',

  // Timeout configuration
  timeout: 30000,
  expect: {
    timeout: 5000,
  },

  // Test execution settings
  fullyParallel: false, // Sequential for multi-user coordination
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Reporter configuration
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['list'],
    process.env.CI ? ['github'] : ['line'],
  ],

  // Screenshot and video on failure
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  // Projects for different device types
  projects: [
    {
      name: 'chromium-desktop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'mobile-safari',
      use: {
        ...devices['iPhone 13 Pro'],
        viewport: { width: 390, height: 844 },
      },
    },
  ],

  // Start dev servers before tests
  webServer: [
    {
      command: 'pnpm --filter @shaken/host-tv dev',
      url: 'http://localhost:5173',
      reuseExistingServer: !process.env.CI,
      timeout: 120000,
      stdout: 'pipe',
      stderr: 'pipe',
    },
    {
      command: 'pnpm --filter @shaken/controller-phone dev',
      url: 'http://localhost:5174',
      reuseExistingServer: !process.env.CI,
      timeout: 120000,
      stdout: 'pipe',
      stderr: 'pipe',
    },
    {
      command: 'pnpm yjs-server',
      url: 'http://localhost:1234',
      reuseExistingServer: !process.env.CI,
      timeout: 120000,
      stdout: 'pipe',
      stderr: 'pipe',
    },
  ],
});
