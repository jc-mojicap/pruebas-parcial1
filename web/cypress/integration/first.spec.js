describe('Todoist login', function() {
	it('Visits Todoist and login', function() {
		cy.visit('https://todoist.com/')
		
		cy.contains('Log in').click()
		cy.get('iframe').iframe().find('iframe').iframe().find('input[name="email"]').click().type("jc.mojicap@uniandes.edu.co")
		cy.get('iframe').iframe().find('iframe').iframe().find('input[name="password"]').click().type("Automatizacion2019")
		cy.get('iframe').iframe().find('iframe').iframe().find('input[name="password"]').click().type('{enter}')
		//cy.get('span[id="gear_holder"]').click().should('to.exist')
		cy.contains('Log in')
	})
})