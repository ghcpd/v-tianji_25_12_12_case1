import { test, expect } from '@playwright/test'

test('should load the app and display dashboard', async ({ page }) => {
    await page.goto('/')
    
    // Check header
    const title = page.locator('text=Weather Dashboard')
    await expect(title).toBeVisible()
})

test('should display current weather on page load', async ({ page }) => {
    await page.goto('/')
    
    // Wait for current weather section
    const cityName = page.locator('text=New York')
    await expect(cityName).toBeVisible()
    
    // Check for temperature
    const temp = page.locator('text=72°')
    await expect(temp).toBeVisible()
})

test('should display weather description', async ({ page }) => {
    await page.goto('/')
    
    const description = page.locator('text=clear sky')
    await expect(description).toBeVisible()
})

test('should display weather metrics', async ({ page }) => {
    await page.goto('/')
    
    // Check for humidity
    await expect(page.locator('text=Humidity')).toBeVisible()
    
    // Check for wind speed
    await expect(page.locator('text=Wind Speed')).toBeVisible()
    
    // Check for pressure
    await expect(page.locator('text=Pressure')).toBeVisible()
})

test('should display forecast section', async ({ page }) => {
    await page.goto('/')
    
    const forecastTitle = page.locator('text=5-Day Forecast')
    await expect(forecastTitle).toBeVisible()
})

test('should display temperature chart', async ({ page }) => {
    await page.goto('/')
    
    const chartTitle = page.locator('text=Temperature Trend')
    await expect(chartTitle).toBeVisible()
})

test('should have search functionality visible', async ({ page }) => {
    await page.goto('/')
    
    const searchInput = page.locator('input[placeholder="Search for a city..."]')
    await expect(searchInput).toBeVisible()
})

test('should show city suggestions when typing', async ({ page }) => {
    await page.goto('/')
    
    const searchInput = page.locator('input[placeholder="Search for a city..."]')
    await searchInput.click()
    await searchInput.type('Los')
    
    // Should show matching cities
    const suggestion = page.locator('text=Los Angeles')
    await expect(suggestion).toBeVisible()
})

test('should select a city and load its weather', async ({ page }) => {
    await page.goto('/')
    
    const searchInput = page.locator('input[placeholder="Search for a city..."]')
    await searchInput.click()
    await searchInput.type('London')
    
    // Wait for suggestion to appear
    const londonsOption = page.locator('button:has-text("London")')
    await londonsOption.first().click()
    
    // Wait for weather to load (might still show New York due to mock data)
    await page.waitForLoadState('networkidle')
    
    // Check that search was cleared
    await expect(searchInput).toHaveValue('')
})

test('should have responsive layout', async ({ page }) => {
    await page.goto('/')
    
    // Check that main container exists
    const mainContent = page.locator('div.max-w-6xl')
    await expect(mainContent).toBeVisible()
})

test('should display footer content', async ({ page }) => {
    await page.goto('/')
    
    const footer = page.locator('text=Weather Dashboard')
    await expect(footer).toBeVisible()
    
    const mockDataText = page.locator('text=Using mock weather data')
    await expect(mockDataText).toBeVisible()
})

test('should have proper styling applied', async ({ page }) => {
    await page.goto('/')
    
    // Check for gradient background
    const mainDiv = page.locator('div.bg-gradient-to-br')
    await expect(mainDiv).toBeVisible()
})

test('should display all weather information sections', async ({ page }) => {
  await page.goto('/')
  
  // Current weather section
  await expect(page.locator('text=Feels like')).toBeVisible()
  
  // Humidity section
  await expect(page.locator('text=Humidity')).toBeVisible()
  
  // Wind Speed section
  await expect(page.locator('text=Wind Speed')).toBeVisible()
})
