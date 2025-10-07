import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. */
  reporter: process.env.CI
  ? 'github'
  : [
      ['list'],
      ['html', { open: 'never' }]
    ],
  /* Shared settings for all tests */
  use: {
    /* Base URL for all page.goto() calls */
    baseURL: process.env.BASE_URL || 'https://practicesoftwaretesting.com/',

    /* Collect trace when retrying the failed test. */
    trace: 'on-first-retry',

    /* Default timeout for expect assertions (ms) */
    expect: {
      timeout: 3000,
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  /* Example of running a local dev server before tests (optional) */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
