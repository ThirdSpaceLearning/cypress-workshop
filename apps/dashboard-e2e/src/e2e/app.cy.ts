describe('Home page', () => {
    beforeEach(() => cy.visit('/'));

    it('should display welcome message', () => {
        cy.get('[data-cy="title"]').should('contain', 'Hi, welcome back!');
    });
});
