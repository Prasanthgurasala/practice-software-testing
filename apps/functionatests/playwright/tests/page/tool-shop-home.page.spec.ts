import { test, expect } from '@playwright/test';

const BaseURL='https://practicesoftwaretesting.com/'

test.describe('Prospect customer for Toolshop', () => {
  test('Practice Software Testing has title', async ({ page }) => {
    await page.goto(BaseURL);
    await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0');
  });
});

