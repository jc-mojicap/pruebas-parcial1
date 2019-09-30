describe('Todoist login', function() {
	it('Visits Todoist and login', function() {
		cy.visit('https://todoist.com/')
		
		cy.contains('Añadir tarea').click()
		cy.get('.item_editor_input').click().type("new task")
		cy.contains('Añadir tarea').click()
	})
})