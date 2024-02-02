//const { get } = require("cypress/types/lodash")

describe('get the details',()=>{
    const baseUrl = 'http://reqres.in/api/users?page=2';
    let userDetails;
    it("get User details",()=>{
        
        cy.request({method:'GET',url:baseUrl}).then((response)=>{
            userDetails= response.body.data.forEach(element => {
                if(element.id===9){
                    cy.log(element.id);
                    cy.log(element.email);
                    cy.log(element.first_name)
                    cy.log(element.last_name)
                    cy.log(element.avatar)
                }              
            })     
        })

        
    })
})