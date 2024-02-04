// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
const locator = require("./locators");

// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => {
  cy.visit("https://rahulshettyacademy.com/client");
  cy.get("#userEmail").type("samgladson@mailinator.com");
  cy.get("#userPassword").type("Test@123");
  cy.get("input#login").click();
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
