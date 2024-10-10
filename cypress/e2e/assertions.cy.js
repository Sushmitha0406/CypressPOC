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
      const getInputByLabel = (label) => {
      return cy
        .contains('label', label)
        .invoke('attr', 'for')
        .then((id) => {
          cy.get('#' + id)
        })
    }
    getInputByLabel('Ref *').type('refsdjhjsfh1')
    getInputByLabel('Container *').type('QUAU0000001')
    getInputByLabel('Line *').type('{downArrow}{enter}').click()
    getInputByLabel('Chassis').type('abcd')
    cy.get('.v-snack__content').find('span').then(function(e){
      const t = e.text()
      // assertion expect
      expect(t).to.contains('Street turn currently active for this container. Please cancel or re-request.')
    })
    }
    else{
      cy.get('div[class="mobile-menu"]').click()
      cy.contains('span[class="ml-4"]', 'Logout').click()
   }
  });
})//end of it block
})//end of describe