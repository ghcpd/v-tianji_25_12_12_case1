import { test, expect } from '@playwright/test';

test('weather app loads and displays content', async ({ page }) => {
  await page.goto('http://localhost:5174');

  await expect(page.locator('h1')).toContainText('Weather App');

  await expect(page.locator('text=New York, NY')).toBeVisible();

  await expect(page.locator('text=22°C')).toBeVisible();

  await expect(page.locator('text=5-Day Forecast')).toBeVisible();

  await expect(page.locator('text=Temperature Trend')).toBeVisible();
});