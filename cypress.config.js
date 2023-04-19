const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://react-redux.realworld.io/#",
    defaultCommandTimeout: 30000,
    requestTimeout: 30000
  },
});
