describe('login', function() {
      it('successfulllogin', function() {
    cy.visit('https://qualle-development.web.app/login')
    
    cy.get('input[type="text"]').as('login')
    cy.get('@login').type('sravanthic30@gmail.com')
    cy.get('input[name="password"]').type('123456789')
    cy.get('button[type="submit"]').click()
    cy.wait(3000)
    let getText;
    cy.get('div[class="v-tab active v-tab--active bordered"]').then(($value) => {
      getText = $value.text()
  })
    // it("Print Value - Uisng Variables ", function () {
    cy.log("Print Value - Using Variables ====== ", getText)
    cy.get('[href="/containers"] > .d-flex').click()

cy.get('.text-truncate'[2]).invoke('text').then(async (text) => {
  cy.log(await text)                      
})
  //  cy.contains('AAAA9876856')
      

})//end of it block
})//end of describe