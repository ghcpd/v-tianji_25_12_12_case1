// CommonJS Playwright config (cjs) for compatibility with package.json type:module
module.exports = {
  testDir: 'e2e',
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  use: {
    headless: true,
    baseURL: 'http://127.0.0.1:5173',
    viewport: { width: 1280, height: 720 },
    actionTimeout: 5000,
    trace: 'on-first-retry',
  },
  webServer: {
    // Build the app and serve a production preview for stable E2E runs
    command: 'npm run build && npm run preview',
    url: 'http://127.0.0.1:5173',
    timeout: 180 * 1000,
    // If a preview/build server is already running (we'll launch it), reuse it.
    reuseExistingServer: true,
  },
}
