# Weatherly — Weather Application Web UI

This is a frontend-only weather UI demo built with React + Vite. It uses mock data and includes unit (Vitest) and E2E (Playwright) tests.

Commands
- Install dependencies: npm install
- Run dev server: npm run dev
- Run unit tests: npm run test:unit
- Run E2E tests: npm run test:e2e
- Run all tests: npm test

Notes
- Playwright Chromium is installed during the prepare step when running npm install. If E2E tests fail due to missing browsers, run: npx playwright install chromium
