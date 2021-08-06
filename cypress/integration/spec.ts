describe('main application', () => {
  it('loads and should show the add position button', () => {
    cy.visit('/');
    cy.get('.add-position').should('be.visible');
  });
})

