const { defineConfig } = require("cypress");

const cucumber = require('cypress-cucumber-preprocessor').default
const browserify = require('@cypress/browserify-preprocessor');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const options = {
        ...browserify.defaultOptions,
        typescript: require.resolve('typescript'),
      };
      on('file:preprocessor', cucumber(options));
      return config;
    },
    specPattern: "cypress/e2e/features/*/*.feature",
    // baseUrl: "https://www.google.com/",
    chromeWebSecurity: false,
    pageLoadTimeout: 180000,
    defaultCommandTimeout: 15000,
  },
});
