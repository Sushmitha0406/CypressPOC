
describe('get email', () => {
    it('get random email', () => {
        cy.visit('https://yopmail.com/')
        cy.wrap(Cypress.automation("remote:debugger:protocol", {
                command: "Browser.grantPermissions",
                params: {
                    permissions: ["clipboardReadWrite", "clipboardSanitizedWrite"],
                    // make the permission tighter by allowing the current origin only
                    origin: window.location.origin
                }
            }))
        cy.contains('Random Email generator').click()
        cy.contains('New').click()
        cy.wait(2000)
        cy.get('#geny').invoke('text').then(async (text) => {
                        cy.log(await text)                      
                    })
        
        //cy.get('@textFunction').type('{ctrl+c}')
       // cy.get('#cprnd > .material-icons-outlined').click({force:true})
        cy.contains('Home').click()
        cy.get('.ycptinput').clear()
        cy.window().its('navigator.clipboard')
                .invoke('readText')
                .then(async (text) => {
                    //cy.log(await text)
                    cy.get('.ycptinput').focus().type(await text) 
                })
            })
     it('paste the email', () => {
        cy.visit('https://www.facebook.com/')
        cy.wait(2000)
        // cy.get('#email').type('{ctrl+v}')
        cy.window().its('navigator.clipboard')
                .invoke('readText')
                .then(async (text) => {
                    //cy.log(await text)
                    cy.get('#email').focus().type(await text) 
                })
    })
    // it('enter account info',()=>{
    // cy.visit('https://ebpv3-69501.web.app/login')
    // const getInputByLabel = (label) => {
    //     return cy.contains('label', label).invoke('attr', 'for').then((id) => {
    //         cy.get('#' + id)
    //       })
    //   }
    //     getInputByLabel('Full name *').type('sushmitha').should('have.attr', 'required')
    //     getInputByLabel('Email *').type('{ctrl+v}')
    //     getInputByLabel('Company name *').type('cognine')
    //     getInputByLabel('Work phone *').type('7676878788')
    //     getInputByLabel('Password *').type('123456789')
    //     getInputByLabel('Confirm password *').type('123456789')
    // })
}) 
