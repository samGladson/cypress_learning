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
const locator = require("./locators")

// -- This is a parent command --
 Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://cdn-auth.reds.rxweb-pre.com/secure/Account/Login?ReturnUrl=%2Fsecure%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DRX-AUTH-CL-Pkce01%26redirect_uri%3Dhttps%253A%252F%252Fmipcom.stage.reds.rxweb-pre.com%252Fservices%252Frxauth-pkce%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520offline_access%2520roles%26state%3Dbf8226da9b1e40d4aeaae9bc12443497%26code_challenge%3DvLxfEPiip_kNK_hGiJWgP7XtnY3TNNBANisxPc6loUQ%26code_challenge_method%3DS256%26ui_locales%3Den-GB%26acr_values%3Devent_edition_id%253Aeve-81fd15cd-d7c3-431c-86c4-0a3cb4038ba5%26response_mode%3Dquery')
    cy.wait(10000)
    cy.get(locator.userEmail).clear().type(email)
    .get(locator.userpassword).clear().type(password)
    .get(locator.userSubmit).submit();
    if(cy.get(locator.acceptCookies).contains('Accept')){
        cy.get(locator.acceptCookies).click({force:true})
    }
    cy.get(locator.networkFeed).should('be.visible')
 })

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