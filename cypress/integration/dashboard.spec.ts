describe('adds/removes position', () => {
    describe('in the happy flow', () =>{
        it('adds position to the dashboard', () => {
            cy.visit('/');
            cy.get('.add-position').click();
            cy.get('.symbol-field').click();
            cy.get('.symbol-input').type('GME');
            cy.get('.amount-input').type('1337');
            cy.get('.enter-button').click();
            cy.get('.position').should('be.visible');
        });

        it('deletes position off the dashboard', () => {
            cy.get('.delete-position').click();
            cy.get('.position').should('not.exist');
        });
    });

    describe('in the unhappy flow', () =>{
        it('does add not position to the dashboard if values are not set', () => {
            cy.visit('/');
            cy.get('.add-position').click();
            cy.get('.enter-button').click();
            cy.get('.position').should('not.exist');
        });
    });
});