describe("Login", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/login/")
    })
    it("Should try to log in with all users", () => {
      cy.fixture("logindata.json").then((loginData) => {
        loginData.users.forEach((user) => {
            const getInputByLabel = (label) => {
                return cy.contains('label', label).invoke('attr', 'for').then((id) => {
                    cy.get('#' + id)
                  })
              }
            getInputByLabel("Email").type(user.username)
            getInputByLabel("Password").type(user.password, { log: false })
            cy.contains ('span[class="v-btn__content"]', ' Log in ').click()
        })
      })
    })
})
  