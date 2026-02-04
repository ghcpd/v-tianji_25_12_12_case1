import { test, expect } from '@playwright/test'

test('loads app and shows forecast', async ({ page }) => {
  await page.goto('http://localhost:5173')
  await expect(page.locator('input[aria-label="Search location"]')).toBeVisible()
  await expect(page.locator('text=5-day Forecast')).toBeVisible()
})
