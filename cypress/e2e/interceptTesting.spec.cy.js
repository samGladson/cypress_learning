
// describe("Intercept Functionality", () => {
//   it("Login using invalid credentials", () => {
//     cy.visit("https://rahulshettyacademy.com/client");
//     cy.get("#userEmail").type("samgladson1@mailinator.com");
//     cy.get("#userPassword").type("Test@123");
//     cy.intercept(
//       "POST",
//       "https://rahulshettyacademy.com/api/ecom/auth/login",
//       {fixture:'loginResponse.json'}
//     );
//     cy.get("input#login").click().get(".fa-handshake-o").should("be.visible");
//   });

//   it("Show only one product", () => {
//     cy.login("samgladson@mailinator.com","Test@123");
//     cy.intercept("GET","https://rahulshettyacademy.com/api/ecom/product/get-all-products",{fixtures:"products.json"});
//     cy.get('h5 > b').should('have.text','ADIDAS ORIGINAL');

//   });
// });
