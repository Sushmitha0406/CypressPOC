describe('login', function() {
      it('successfulllogin', function() {
    cy.visit('https://qualle-development.web.app/login')
    cy.get("body").then($body => {
      if ($body.find(".v-input__slot > .v-label").length > 0) {   
          //evaluates as true
    cy.get('input[type="text"]').as('login')
    cy.get('@login').type('testuser.test34@gmail.com')
    cy.get('input[name="password"]').type('123456789')
    cy.get('button[type="submit"]').click()
    cy.wait(3000)
    let getText;
    cy.get('div[class="v-tab active v-tab--active bordered"]').then(($value) => {
      getText = $value.text()
  })
    // it("Print Value - Uisng Variables ", function () {
    cy.log("Print Value - Using Variables ====== ", getText)
    // })
    cy.get('.search-input').should("exist")
    cy.get('div[class="mobile-menu"]').click()
    cy.wait(2000)
    cy.contains ('span[class="ml-4"]', 'Request Street Turn').click()
    cy.wait(2000)
    //cy.xpath('/html/body/div[2]/div[3]/div/div/div[2]/div[1]/div/div/div/div[1]/div[1]/div/div/div[1]/div/input').type('ref123')
    //cy.contains ('label[class="v-label theme--light"]', 'Ref *').type('ref12')      
    // cy.get('input[id="input-422"]').type('ref12')

    const getInputByLabel = (label) => {
      return cy
        .contains('label', label)
        .invoke('attr', 'for')
        .then((id) => {
          cy.get('#' + id)
        })
    }
    getInputByLabel('Ref *').type('ref1')
    getInputByLabel('Container *').type('QUAU0000001')
    getInputByLabel('Line *').type('{downArrow}{enter}').click()
    // getInputByLabel('Empty Location *').type('{downArrow}{enter}').click()
    // getInputByLabel('Export Customer Yard *').type('{downArrow}{enter}')
    getInputByLabel('Chassis').type('abcd')
    //cy.get('button[class="elevation-0 width-100 rounded-sm v-btn v-btn--is-elevated v-btn--has-bg theme--dark v-size--default"]').click()
   //cy.wait(10000)
    cy.get('.v-snack__content').find('span').then(function(e){
      cy.log('hello:',e)
      const t = e.text()
      // assertion expect
      expect(t).to.contains('Street turn currently active for this container. Please cancel or re-request.')
cy.log("turns")
    })
    cy.log("turns")
    //cy.contains ('span[class="font-size-14 color-1 ml-4"]', '1 Turn Created!')
      //  cy.get('label:contains("Ref *")').first().type('ref12')
      // cy.scrollTo('bottom')

      // for(let i=1;i<5;i++)
      //     {
            
      //       cy.get('.mt-4 > .v-btn > .v-btn__content').click()
      //     }
  }
    else{
      cy.get('div[class="mobile-menu"]').click()
      cy.contains('span[class="ml-4"]', 'Logout').click()
   }
  });
})//end of it block
})//end of describe