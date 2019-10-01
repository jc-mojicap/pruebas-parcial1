describe('Test of main functionalities', function() {
	beforeEach(function() {
    	cy.visit('https://todoist.com/Users/showLogin?mini=1')
		cy.wait(2000)
      	cy.get('form').find('input[name="email"]').click().type("jc.mojicap@uniandes.edu.co")
      	cy.get('form').find('input[name="password"]').click().type("Automatizacion2019")
      	cy.get('form').contains('Log').click()
		cy.wait(3000)
  	})
    it('Create a Normal Todo', function() {
		cy.get('.agenda_add_task').find('a').click()
		cy.get('.DraftEditor-root').find('br').type(" ", {force: true})
		cy.wait(2000)
		cy.get('span[data-text="true"]')
			.type('My new task', {force: true}).wait(2000)
		cy.screenshot();
		cy.get('button[type="submit"]').click()
		cy.screenshot();
    })

})