import { test, expect } from '@playwright/test'

test('home loads and shows forecast', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('CloudVista')).toBeVisible()
  await expect(page.getByText('Hourly Forecast')).toBeVisible()
  await expect(page.getByText('08:00')).toBeVisible()
})
