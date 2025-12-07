/**
 * Test Setup Utilities
 * Common setup and teardown functions for E2E tests
 */

import { Page, BrowserContext } from '@playwright/test';
import { TEST_PLAYERS, TestPlayer } from './test-users';

export const HOST_URL = 'http://localhost:5173';
export const PHONE_URL = 'http://localhost:5174';

/**
 * Setup host TV page
 */
export async function setupHostPage(page: Page): Promise<void> {
  await page.goto(HOST_URL);
  await page.waitForLoadState('networkidle');
}

/**
 * Setup phone controller page
 */
export async function setupPhonePage(page: Page): Promise<void> {
  await page.goto(PHONE_URL);
  await page.waitForLoadState('networkidle');
}

/**
 * Generate room code on host
 */
export async function generateRoomCode(hostPage: Page): Promise<string> {
  // Wait for splash screen to complete
  await hostPage.waitForSelector('[data-testid="room-code"], button:has-text("Generate"), button:has-text("Start")', {
    timeout: 10000,
  });

  // Check if room code already exists
  const existingCode = await hostPage.locator('[data-testid="room-code"]').textContent();
  if (existingCode && existingCode.length > 0) {
    return existingCode.trim();
  }

  // Click generate/start button if needed
  const generateButton = hostPage.locator('button:has-text("Generate"), button:has-text("Start")');
  if (await generateButton.count() > 0) {
    await generateButton.first().click();
  }

  // Wait for room code to appear
  const roomCodeLocator = hostPage.locator('[data-testid="room-code"]');
  await roomCodeLocator.waitFor({ state: 'visible', timeout: 5000 });

  const roomCode = await roomCodeLocator.textContent();
  if (!roomCode) {
    throw new Error('Failed to generate room code');
  }

  return roomCode.trim();
}

/**
 * Join room as player
 */
export async function joinRoom(
  phonePage: Page,
  roomCode: string,
  playerName: string
): Promise<void> {
  await setupPhonePage(phonePage);

  // Enter room code
  const roomCodeInput = phonePage.locator('input[name="roomCode"], input[placeholder*="code" i], input[type="text"]').first();
  await roomCodeInput.waitFor({ state: 'visible', timeout: 5000 });
  await roomCodeInput.fill(roomCode);

  // Enter player name
  const nameInput = phonePage.locator('input[name="name"], input[name="playerName"], input[placeholder*="name" i]').first();
  await nameInput.waitFor({ state: 'visible', timeout: 5000 });
  await nameInput.fill(playerName);

  // Click join button
  const joinButton = phonePage.locator('button:has-text("Join"), button[type="submit"]').first();
  await joinButton.click();

  // Wait for lobby to load
  await phonePage.waitForLoadState('networkidle');
}

/**
 * Setup multi-user test with host and multiple players
 */
export async function setupMultiUserTest(
  hostPage: Page,
  context: BrowserContext,
  playerCount = 3
): Promise<{ roomCode: string; playerPages: Page[] }> {
  // Setup host and generate room code
  await setupHostPage(hostPage);
  const roomCode = await generateRoomCode(hostPage);

  // Create player pages and join
  const playerPages: Page[] = [];

  for (let i = 0; i < playerCount; i++) {
    const player = TEST_PLAYERS[i];
    const playerPage = await context.newPage();

    // Set mobile viewport for phone pages
    await playerPage.setViewportSize({ width: 390, height: 844 });

    await joinRoom(playerPage, roomCode, player.name);
    playerPages.push(playerPage);
  }

  return { roomCode, playerPages };
}

/**
 * Wait for all players to appear in lobby
 */
export async function waitForPlayersInLobby(
  hostPage: Page,
  expectedCount: number,
  timeout = 10000
): Promise<void> {
  await hostPage.waitForFunction(
    (count) => {
      const playerElements = document.querySelectorAll('[data-testid="player-item"], .player-card, .player-list-item');
      return playerElements.length >= count;
    },
    expectedCount,
    { timeout }
  );
}

/**
 * Check if element is visible
 */
export async function isVisible(page: Page, selector: string): Promise<boolean> {
  try {
    const element = page.locator(selector).first();
    return await element.isVisible({ timeout: 1000 });
  } catch {
    return false;
  }
}

/**
 * Take screenshot with timestamp
 */
export async function takeTimestampedScreenshot(
  page: Page,
  name: string
): Promise<void> {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  await page.screenshot({
    path: `e2e/screenshots/${name}-${timestamp}.png`,
    fullPage: true,
  });
}

/**
 * Cleanup test pages
 */
export async function cleanupPages(pages: Page[]): Promise<void> {
  await Promise.all(pages.map(page => page.close()));
}
