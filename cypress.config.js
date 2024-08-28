const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
      pageLoadTimeout: 120000, // Increase timeout to 120 seconds
   
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/intrigation/example/*.js'
  },
});
