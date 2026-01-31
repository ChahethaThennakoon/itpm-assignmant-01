const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: false, // Run sequentially to avoid site throttling
  reporter: 'html',
  use: {
    baseURL: 'https://www.swifttranslator.com/',
    // Run in headed mode so the frontend is visible during tests
    headless: false,
    // Slow down actions so you can watch test steps
    launchOptions: { slowMo: 100 },
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], devtools: true },
    },
  ],
});