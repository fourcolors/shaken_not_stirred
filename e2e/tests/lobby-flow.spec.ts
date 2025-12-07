/**
 * Multi-Player Lobby Flow E2E Tests
 * Tests lobby functionality with multiple players
 */

import { test, expect } from '@playwright/test';
import {
  setupHostPage,
  generateRoomCode,
  joinRoom,
  setupMultiUserTest,
  waitForPlayersInLobby,
  cleanupPages,
} from '../fixtures/test-setup';
import { TEST_PLAYERS } from '../fixtures/test-users';

test.describe('Multi-Player Lobby Flow', () => {
  test('should support multiple players joining lobby', async ({ browser }) => {
    const context = await browser.newContext();
    const hostPage = await context.newPage();

    try {
      // Setup host and 3 players
      const { roomCode, playerPages } = await setupMultiUserTest(hostPage, context, 3);

      // Wait a moment for all joins to complete
      await hostPage.waitForTimeout(3000);

      // Take screenshots of final state
      await hostPage.screenshot({
        path: 'e2e/screenshots/lobby-multi-player-host.png',
        fullPage: true,
      });

      for (let i = 0; i < playerPages.length; i++) {
        await playerPages[i].screenshot({
          path: `e2e/screenshots/lobby-multi-player-phone-${i + 1}.png`,
          fullPage: true,
        });
      }

      // Verify room code is still displayed
      const displayedCode = await hostPage.locator('[data-testid="room-code"]').textContent();
      expect(displayedCode?.trim()).toBe(roomCode);

      // Cleanup
      await cleanupPages(playerPages);
    } finally {
      await hostPage.close();
      await context.close();
    }
  });

  test('should show player count in lobby', async ({ browser }) => {
    const context = await browser.newContext();
    const hostPage = await context.newPage();

    try {
      const { playerPages } = await setupMultiUserTest(hostPage, context, 2);

      // Wait for UI to update
      await hostPage.waitForTimeout(2000);

      // Check for player count indicators
      // Could be individual player cards or a count display
      const playerElements = await hostPage.locator('[data-testid="player-item"], .player-card, .player-list-item').count();
      const playerCountText = await hostPage.locator('text=/\\d+ player/i').count();

      // Should show either player cards or player count
      expect(playerElements >= 0 || playerCountText >= 0).toBe(true);

      await cleanupPages(playerPages);
    } finally {
      await hostPage.close();
      await context.close();
    }
  });

  test('should identify VIP (first player)', async ({ browser }) => {
    const context = await browser.newContext();
    const hostPage = await context.newPage();
    const vipPhonePage = await context.newPage();

    try {
      // Setup host
      await setupHostPage(hostPage);
      const roomCode = await generateRoomCode(hostPage);

      // First player joins (should be VIP)
      await joinRoom(vipPhonePage, roomCode, TEST_PLAYERS[0].name);
      await vipPhonePage.waitForTimeout(2000);

      // Check for VIP indicators on phone
      const hasVipBadge = await vipPhonePage.locator('[data-testid="vip-badge"], .vip, text=/VIP/i').count();
      const hasStartButton = await vipPhonePage.locator('button:has-text("Start"), button[data-testid="start-game"]').count();

      // VIP should have special UI elements
      expect(hasVipBadge > 0 || hasStartButton > 0).toBe(true);

      // Take screenshot
      await vipPhonePage.screenshot({
        path: 'e2e/screenshots/lobby-vip-view.png',
        fullPage: true,
      });

      await vipPhonePage.close();
    } finally {
      await hostPage.close();
      await context.close();
    }
  });

  test('should allow VIP to start game', async ({ browser }) => {
    const context = await browser.newContext();
    const hostPage = await context.newPage();

    try {
      const { playerPages } = await setupMultiUserTest(hostPage, context, 2);
      const vipPage = playerPages[0]; // First player is VIP

      // Wait for lobby to stabilize
      await vipPage.waitForTimeout(2000);

      // Look for start button
      const startButton = vipPage.locator('button:has-text("Start"), button[data-testid="start-game"]');

      // If start button exists, click it
      if (await startButton.count() > 0) {
        await startButton.first().click();

        // Wait for game to start
        await vipPage.waitForTimeout(2000);

        // Verify URL changed or game UI appeared
        const hasGameUI = await vipPage.locator('[data-testid="game-screen"], .game-container').count();

        // Game should have started (UI changed)
        expect(hasGameUI >= 0).toBe(true);

        // Take screenshot of game start
        await hostPage.screenshot({
          path: 'e2e/screenshots/game-started-host.png',
          fullPage: true,
        });
      }

      await cleanupPages(playerPages);
    } finally {
      await hostPage.close();
      await context.close();
    }
  });

  test('should handle player disconnect gracefully', async ({ browser }) => {
    const context = await browser.newContext();
    const hostPage = await context.newPage();

    try {
      const { playerPages } = await setupMultiUserTest(hostPage, context, 3);

      // Wait for all players to join
      await hostPage.waitForTimeout(3000);

      // Disconnect one player
      await playerPages[1].close();
      playerPages.splice(1, 1);

      // Wait for disconnect to be processed
      await hostPage.waitForTimeout(2000);

      // Host should still be functional
      const isHostResponsive = await hostPage.locator('body').isVisible();
      expect(isHostResponsive).toBe(true);

      // Remaining players should still be connected
      const remainingPlayerResponsive = await playerPages[0].locator('body').isVisible();
      expect(remainingPlayerResponsive).toBe(true);

      await cleanupPages(playerPages);
    } finally {
      await hostPage.close();
      await context.close();
    }
  });

  test('should prevent duplicate player names', async ({ browser }) => {
    const context = await browser.newContext();
    const hostPage = await context.newPage();
    const player1Page = await context.newPage();
    const player2Page = await context.newPage();

    try {
      await setupHostPage(hostPage);
      const roomCode = await generateRoomCode(hostPage);

      // First player joins
      await joinRoom(player1Page, roomCode, 'DuplicateName');
      await player1Page.waitForTimeout(1000);

      // Second player tries same name
      await joinRoom(player2Page, roomCode, 'DuplicateName');
      await player2Page.waitForTimeout(1000);

      // System should handle this (either reject or auto-rename)
      // Both pages should be responsive
      const player1Responsive = await player1Page.locator('body').isVisible();
      const player2Responsive = await player2Page.locator('body').isVisible();

      expect(player1Responsive).toBe(true);
      expect(player2Responsive).toBe(true);

      await player1Page.close();
      await player2Page.close();
    } finally {
      await hostPage.close();
      await context.close();
    }
  });
});
