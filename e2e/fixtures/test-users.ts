/**
 * Test User Fixtures
 * Mock player data for E2E testing
 */

export interface TestPlayer {
  name: string;
  isVIP?: boolean;
  deviceType: 'phone' | 'desktop';
}

export const TEST_PLAYERS: TestPlayer[] = [
  {
    name: 'Alice',
    isVIP: true,
    deviceType: 'phone',
  },
  {
    name: 'Bob',
    deviceType: 'phone',
  },
  {
    name: 'Charlie',
    deviceType: 'phone',
  },
  {
    name: 'Diana',
    deviceType: 'phone',
  },
];

export const TEST_ROOM_CODE = 'TEST123';

export const TEST_COCKTAILS = [
  {
    name: 'Martini',
    ingredients: ['Gin', 'Vermouth', 'Olive'],
  },
  {
    name: 'Margarita',
    ingredients: ['Tequila', 'Triple Sec', 'Lime'],
  },
  {
    name: 'Old Fashioned',
    ingredients: ['Whiskey', 'Bitters', 'Sugar'],
  },
];

export const MOCK_VOTE_OPTIONS = [
  'Option A',
  'Option B',
  'Option C',
  'Option D',
];

/**
 * Generate a random room code for testing
 */
export function generateTestRoomCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

/**
 * Wait for a condition with timeout
 */
export async function waitFor(
  condition: () => boolean | Promise<boolean>,
  timeout = 5000,
  interval = 100
): Promise<void> {
  const startTime = Date.now();

  while (Date.now() - startTime < timeout) {
    if (await condition()) {
      return;
    }
    await new Promise(resolve => setTimeout(resolve, interval));
  }

  throw new Error(`Timeout waiting for condition after ${timeout}ms`);
}
