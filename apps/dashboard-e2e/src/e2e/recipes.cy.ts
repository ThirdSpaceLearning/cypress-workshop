describe('Recipes Page', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/recipes?*', {
            fixture: 'recipes.json',
        });

        cy.visit('/recipes');
    });

    it('should display the page title', () => {
        cy.get('[data-cy="recipes-title"]').should('contain.text', 'Recipes');
    });

    it('should display the recipes pages data', () => {
        // Filters Button
        cy.get('[data-cy="filters-button"]').should('exist');
        cy.get('[data-cy="filters-button"]').should('contain.text', 'Filters');

        // Get the first recipe on the list
        cy.get('[data-cy="recipe-item"]').eq(0).as('recipe');

        // Recipe data
        cy.get('@recipe').within(() => {
            // Title
            cy.get('[data-cy="recipe-title"]').should(
                'contain.text',
                'Classic Margherita Pizza'
            );

            // Preparation time
            cy.get('[data-cy="recipe-preparation-time"]').should(
                'contain.text',
                '20 mins'
            );

            // Cooking time
            cy.get('[data-cy="recipe-cooking-time"]').should(
                'contain.text',
                '15 mins'
            );

            // Calories
            cy.get('[data-cy="recipe-calories"]').should(
                'contain.text',
                '300 kcal'
            );

            // Meal Type
            cy.get('[data-cy="recipe-meal-type"]').should('have.length', 1);

            // Difficulty
            cy.get('[data-cy="recipe-difficulty"]').should('contain', 'Easy');
            cy.get('[data-cy="recipe-difficulty"]').should(
                'have.css',
                'background-color',
                'rgba(34, 197, 94, 0.16)'
            );

            // Title URL
            cy.get('[data-cy="recipe-title"]')
                .should('have.attr', 'href')
                .and('include', '/recipes/1');
        });
    });

    it('should redirect to the recipe', () => {
        cy.intercept('GET', '**/recipes/1?*', {
            fixture: 'recipe.json',
        });

        cy.get('[data-cy="recipe-title"]').eq(0).click();

        cy.url().should('include', '/recipes/1');
    });

    // TODO: add filters tests
});
