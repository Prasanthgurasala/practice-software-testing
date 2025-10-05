import { test, expect } from '@playwright/test';

const BaseURL='https://practicesoftwaretesting.com/'

test.describe('Prospect customer for Toolshop', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto(BaseURL);
  });

  test('Prospect customer buying hand tools', async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL(BaseURL);
  });
});