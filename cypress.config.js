const { defineConfig } = require("cypress");

module.exports = defineConfig({

  "screenshotsFolder":"cypress/reports/mochawesome/assets",
  "viewportWidth":1280,
  "viewportHeight":720,
  "reporter":"cypress-multi-reporters",
  "reporterOptions":{
    "reporterEnabled":"mochawesome",
    "mochawesomeReporterOptions":{
      "reportDir":"cypress/reports/mocha",
      "quiet":true,
      "overwrite":false,
      "html":false,
      "json":true
    }

  },
  e2e: {
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
   // baseUrl : "https://mipcom.stage.reds.rxweb-pre.com/en-gb/portal/my-hub.html"
  },
});
