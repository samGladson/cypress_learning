/// <reference types="Cypress" />

const registerUser = JSON.parse(JSON.stringify(require('../fixtures/register.json')));

describe("Do api testing",()=>{
    let data ;
    const baseURI = "https://rahulshettyacademy.com/api/ecom";
    let randomNumber = (Math.floor((Math.random() * 10000000))).toString();
    before(()=>{
        cy.fixture('register').then((fdata)=>{
            data=fdata;
        })
    })

    it.only("User registers using API",()=>{
        data.userEmail = "samman"+randomNumber+"@mailinator.com";
        cy.request({method:'POST',url:baseURI+'/auth/register',body:data,headers:{
            'Accept': 'application/json',
          'Content-Type' :'application/json'
        }}).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.message).to.be.equal("Registered Successfully")
        })
    })

})