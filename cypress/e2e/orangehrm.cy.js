describe('login', function() {
      it('successfulllogin', function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.wait(2000)
    cy.contains ('span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]', 'Admin').click()
    // cy.contains('Alice.Duval').should('have.length',1).and('have.text','Alice.Duval')//.parentsUntil('.oxd-table-row').find('[class="oxd-icon-button oxd-table-cell-action-space"]').click()
    // cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div/div[2]').type('Admin').click({force:true})
    //cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div/div[2]').type('{downArrow}{downArrow}{enter}')
    //cy.get('div[class="oxd-select-text-input"]').type('{downArrow}{downArrow}{enter}')
    //cy.contains('div[class="oxd-select-text-input"]','Admin').click()
    cy.wait(2000)
    cy.get('.oxd-table-row').contains('Anthony.Nolan').parent().siblings().last().find('.bi-pencil-fill').click({force:true})
    // cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div[4]/div/div[6]/div/button[2]').click({force:true})
    cy.wait(3000)
    cy.get('.oxd-input-group__label-wrapper').contains('User Role').parent().siblings().click()
    var array=['Admin','ESS']
    cy.get('.oxd-select-option').contains(array[1]).click()
    cy.contains('Save').click()
    cy.wait(3000)
    cy.get('.oxd-table-row').contains('Anthony.Nolan').parent().siblings().contains('Admin')
})//end of it block
})//end of describe