import { defineConfig } from '@playwright/test'

export default defineConfig({
  timeout: 30 * 1000,
  testDir: './tests/e2e',
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5174',
    reuseExistingServer: true,
  },
  use: {
    baseURL: 'http://localhost:5174',
  },
})
