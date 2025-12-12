import { test, expect } from '@playwright/test'

test('home shows weather overview', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('San Francisco')).toBeVisible()
  await expect(page.getByText('Temperature')).toBeVisible()
  await expect(page.locator('canvas')).toBeVisible()
  await expect(page.getByRole('list')).toBeVisible()
})
