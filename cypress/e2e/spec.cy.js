describe('App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      fixture: 'ogTricksData'
    })
    cy.visit('http://localhost:3000/?stance=regular&trickName=&obstacle=Flatground&tutorial=')
  })
  it('Should have a header', () => {
    cy.contains('Sick Trick Wish List')
  })
  it('should have some tricks rendered', () => {
    cy.get('.trick-card').should('have.length', 3)
    .get('.trick-card').first().should('have.class', 'trick-card').contains('https://www.youtube.com/watch?v=XGw3YkQmNig')
    .get('.trick-card').last().should('have.class', 'trick-card').contains('https://www.youtube.com/watch?v=9N9swrZU1HA')
  })
  it('should be able to add info to the form', () => {
    cy.get('select[name="stance"]').select('Regular').should('have.value', 'Regular')
    .get('input[type="text"]').first().type('cat flip').should('have.value', 'cat flip')
    .get('select[name="obstacle"]').select('Pool').should('have.value', 'Pool')
    .get('input[type="text"]').last().type('link to cat flip').should('have.value', 'link to cat flip')
  })
  it('should be able to add a new trick to the dom', () => {
    cy.get('select[name="stance"]').select('Regular').should('have.value', 'Regular')
    .get('input[type="text"]').first().type('cat flip').should('have.value', 'cat flip')
    .get('select[name="obstacle"]').select('Pool').should('have.value', 'Pool')
    .get('input[type="text"]').last().type('link to cat flip').should('have.value', 'link to cat flip')
    .get('.send-button').click()
    .intercept('POST', "http://localhost:3001/api/v1/tricks", {
        statusCode: 201,
        body: {
          stance: "Regular",
          name: "cat flip",
          obstacle: "pool",
          tutorial: "link to cat flip"
        }
      })
    .get('.trick-card').last().should('have.class', 'trick-card').contains('link to cat flip')
  })
  it('should be able to delete a trick', () => {
   cy.get('.delete-button').first().click()
    .intercept('DELETE', "http://localhost:3001/api/v1/tricks/1")
    .get('.trick-card').first().should('have.class', 'trick-card').contains('https://www.youtube.com/watch?v=9N9swrZU1HA')
  })
})