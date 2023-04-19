const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://react-redux.realworld.io/#",
    defaultCommandTimeout: 45000,
    requestTimeout: 45000
  },
});
