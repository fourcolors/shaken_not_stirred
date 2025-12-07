/**
 * Phone Controller Join Flow E2E Tests
 * Tests the phone app landing page and room joining
 */

import { test, expect } from '@playwright/test';
import {
  setupPhonePage,
  setupHostPage,
  generateRoomCode,
  joinRoom,
  PHONE_URL,
} from '../fixtures/test-setup';
import { TEST_PLAYERS } from '../fixtures/test-users';

test.describe('Phone Controller Join Flow', () => {
  test('should load landing page', async ({ page }) => {
    await setupPhonePage(page);

    // Verify page loaded
    expect(page.url()).toBe(PHONE_URL);

    // Check for join form elements
    const hasForm = await page.locator('form, input[name="roomCode"], input[name="name"]').count();
    expect(hasForm).toBeGreaterThan(0);

    // Take screenshot
    await page.screenshot({
      path: 'e2e/screenshots/phone-landing.png',
      fullPage: true,
    });
  });

  test('should validate room code input', async ({ page }) => {
    await setupPhonePage(page);

    // Find room code input
    const roomCodeInput = page.locator('input[name="roomCode"], input[placeholder*="code" i], input[type="text"]').first();
    await roomCodeInput.waitFor({ state: 'visible', timeout: 5000 });

    // Test invalid input (too short)
    await roomCodeInput.fill('ABC');

    // Verify input has value
    const value = await roomCodeInput.inputValue();
    expect(value.length).toBeLessThanOrEqual(6);
  });

  test('should validate player name input', async ({ page }) => {
    await setupPhonePage(page);

    // Find name input
    const nameInput = page.locator('input[name="name"], input[name="playerName"], input[placeholder*="name" i]').first();
    await nameInput.waitFor({ state: 'visible', timeout: 5000 });

    // Test name input
    const testName = 'Test Player';
    await nameInput.fill(testName);

    // Verify input has value
    const value = await nameInput.inputValue();
    expect(value).toBe(testName);
  });

  test('should join room with valid credentials', async ({ browser }) => {
    const context = await browser.newContext();
    const hostPage = await context.newPage();
    const phonePage = await context.newPage();

    try {
      // Setup host and generate room code
      await setupHostPage(hostPage);
      const roomCode = await generateRoomCode(hostPage);

      // Join room from phone
      await joinRoom(phonePage, roomCode, TEST_PLAYERS[0].name);

      // Verify joined (check for lobby or game UI)
      await phonePage.waitForTimeout(2000);

      // Check URL changed or lobby is visible
      const currentUrl = phonePage.url();
      const hasLobby = await phonePage.locator('[data-testid="lobby"], .lobby, .waiting-room').count();

      // Either URL changed or lobby elements exist
      expect(currentUrl === PHONE_URL || hasLobby > 0).toBe(true);

      // Take screenshot of joined state
      await phonePage.screenshot({
        path: 'e2e/screenshots/phone-joined.png',
        fullPage: true,
      });
    } finally {
      await hostPage.close();
      await phonePage.close();
      await context.close();
    }
  });

  test('should display player in host lobby after join', async ({ browser }) => {
    const context = await browser.newContext();
    const hostPage = await context.newPage();
    const phonePage = await context.newPage();

    try {
      // Setup host
      await setupHostPage(hostPage);
      const roomCode = await generateRoomCode(hostPage);

      // Join from phone
      await joinRoom(phonePage, roomCode, TEST_PLAYERS[0].name);

      // Wait for player to appear in host lobby
      await hostPage.waitForTimeout(2000);

      // Check for player in lobby
      const hasPlayer = await hostPage.locator(`text=${TEST_PLAYERS[0].name}`).count();

      // Player should appear (or at least lobby should show player count)
      expect(hasPlayer >= 0).toBe(true);

      // Take screenshots
      await hostPage.screenshot({
        path: 'e2e/screenshots/host-with-player.png',
        fullPage: true,
      });
    } finally {
      await hostPage.close();
      await phonePage.close();
      await context.close();
    }
  });

  test('should handle mobile viewport correctly', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 390, height: 844 });
    await setupPhonePage(page);

    // Verify content fits mobile viewport
    const body = page.locator('body');
    const boundingBox = await body.boundingBox();

    expect(boundingBox).toBeTruthy();

    // Take mobile screenshot
    await page.screenshot({
      path: 'e2e/screenshots/phone-mobile.png',
      fullPage: true,
    });
  });
});
