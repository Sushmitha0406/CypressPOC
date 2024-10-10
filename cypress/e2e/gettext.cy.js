let getText
describe("find text of an element in cypress ", () => {
      it("Find Text - using variable ", () => {
          cy.visit("https://qualle-development.web.app/login")
          //cy.get("body").then($body => {
          //   if ($body.find(".v-input__slot > .v-label").length > 0) {   
                //evaluates as true
          cy.get('input[type="text"]').type('sushmitha.thoutam@gmail.com')
          cy.get('input[name="password"]').type('123456789')
          cy.get('button[type="submit"]').click()
          cy.wait(2000)
          cy.get('div[class="v-tab active v-tab--active bordered"]').then(($value) => {
              getText = $value.text()
              cy.log("Print Value - Using Variables ====== ", getText)
                }) 
         })
        })
      
  
  