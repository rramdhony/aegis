// Studio26 QA — Playwright Configuration

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: '.github/qa',
  testMatch: 'qa.spec.js',
  timeout: 30_000,
  retries: 0,

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'on-failure' }],
  ],

  use: {
    baseURL: 'http://localhost:3000',
    screenshot: 'only-on-failure',
    video: 'off',
    trace: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],

  outputDir: 'qa-screenshots',
});
