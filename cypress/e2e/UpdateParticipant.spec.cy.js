

const locator = require("../support/locators")

describe("Update Participant Details",()=>{
    let data;
    beforeEach(()=>{
        
        cy.fixture('loginData').then((fdata)=>{
            data=fdata;
        })
        const cyp = Cypress.config().baseUrl;
        cy.log("baseurl : "+cyp)

    })

    it.skip('IFrame Testing',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.get(locator.iframeId).within(($ele)=>{
            const element = $ele.contents().find(locator.iframeBody);
            cy.wrap(element).clear().type("Hola Amigos")
        })

    })

    it('Amazon Search Finding',()=>{
        cy.visit("https://www.amazon.in/",{timeout:10000})
        cy.get("#twotabsearchtextbox").type("{shift}goodies").wait(10000)
        .get("div.s-suggestion.s-suggestion-ellipsis-direction span").each(($val,index,$list)=>{
            cy.log($val.text());
            if($val.text().includes("for kids")){
                cy.log("Came into this loop")
                cy.wrap($val).click({force:true});

            }
        })

    })

    it("Handle opening new tab",()=>{
        cy.visit('https://barconvent-testing.stage.reds.rxweb-pre.com/en-gb/for-visitors/Products.html',{timeout:10000})
        .get('button#onetrust-accept-btn-handler',{timeout:10000}).click();

        cy.contains('Gold product').click().get("button[data-dtm='productDetails_requestQuote']").should('be.visible')
        .get('a[href*=contactForm]').invoke('removeAttr','target').click({force:true})
        .get('p.request-form-title').should('have.text','Request Form',{timeout:10000});
        

       



    })
})  