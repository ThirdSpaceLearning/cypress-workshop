describe('Recipe Page', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/recipes/1?*', {
            fixture: 'recipe.json',
        });

        cy.visit('/recipes/1');
    });

    it('should display the back button', () => {
        cy.getBySel('back-button').should('exist');
        cy.getBySel('back-button').should('contain.text', 'Back');

        // Back button href
        cy.getBySel('back-button')
            .should('have.attr', 'href')
            .and('include', '/recipes');
    });

    it('should display the recipe data', () => {
        // Tags
        cy.getBySel('recipe-tag').as('recipeTags');

        cy.get('@recipeTags').should('have.length', 2);
        cy.get('@recipeTags').eq(0).should('contain.text', 'Pizza');
        cy.get('@recipeTags').eq(1).should('contain.text', 'Italian');

        // Title
        cy.getBySel('recipe-title').should(
            'contain.text',
            'Classic Margherita Pizza'
        );

        // Rating
        cy.getBySel('recipe-rating').should('exist');

        // Reviews
        cy.getBySel('recipe-reviews').should('contain.text', '(98 reviews)');

        // Created by
        cy.getBySel('recipe-created-by-label').should(
            'contain.text',
            'Created by'
        );
        cy.getBySel('recipe-created-by-avatar').should('exist');
        cy.getBySel('recipe-created-by-label').should(
            'contain.text',
            'John Smith'
        );

        // Calories
        cy.getBySel('recipe-calories-label').should('contain.text', 'Calories');
        cy.getBySel('recipe-calories-value').should('contain.text', '300 kcal');

        // Servings
        cy.getBySel('recipe-servings-label').should('contain.text', 'Servings');
        cy.getBySel('recipe-servings-value').should('contain.text', '4');

        // Preparation time
        cy.getBySel('recipe-preparation-time-label').should(
            'contain.text',
            'Preparation time'
        );
        cy.getBySel('recipe-preparation-time-value').should(
            'contain.text',
            '20 mins'
        );

        // Cooking time
        cy.getBySel('recipe-cooking-time-label').should(
            'contain.text',
            'Cooking time'
        );
        cy.getBySel('recipe-cooking-time-value').should(
            'contain.text',
            '15 mins'
        );

        // Meal type
        cy.getBySel('recipe-meal-type-label').should(
            'contain.text',
            'Meal type'
        );
        cy.getBySel('recipe-meal-type-value').should('contain.text', 'Dinner');

        // Difficulty
        cy.getBySel('recipe-difficulty-label').should(
            'contain.text',
            'Difficulty'
        );
        cy.getBySel('recipe-difficulty-success').should('contain.text', 'Easy');

        // Tabs
        cy.getBySel('ingredients-tab').should('contain.text', 'Ingredients');
        cy.getBySel('instructions-tab').should('contain.text', 'Instructions');
    });
});
