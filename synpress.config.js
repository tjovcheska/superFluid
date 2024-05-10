const { defineConfig } = require("cypress");
const synpressPlugins = require("@synthetixio/synpress/plugins");

module.exports = defineConfig({
  userAgent: "synpress",
  retries: { "runMode": 0, "openMode": 0 },
  video: true,
  chromeWebSecurity: true,
  viewportWidth: 1366,
  viewportHeight: 850,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  requestTimeout: 30000,
  e2e: {
    baseUrl: "https://app.superfluid.finance/wrap?upgrade",
    specPattern: "cypress/e2e/specs/**/*spec.{js,jsx,ts,tsx}",
    testIsolation: true,
    reporterOptions: {
      charts: true,
      overwrite: false,
      html: false,
      json: true
    },
    setupNodeEvents(on, config) {
      synpressPlugins(on, config);
    },
    supportFile: "cypress/support/index.js",
  },
});
