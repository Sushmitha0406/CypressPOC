const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cy.viewport(1280, 720)
      // implement node event listeners here
    },
  },
});
