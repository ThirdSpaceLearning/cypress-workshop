describe('Recipes Page', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/recipes?*', {
            fixture: 'recipes.json',
        }).as('recipes');

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
        // Intercept recipe request
        cy.intercept('GET', '**/recipes/*', {
            fixture: 'recipe.json',
        });

        // Click the first recipe
        cy.get('[data-cy="recipe-title"]').eq(0).click();

        // Check the url is now the recipe url
        cy.url().should('include', '/recipes/1');
    });

    it('should show loading spinner', () => {
        // Loading spinner should show
        cy.getBySel('loading-spinner').should('exist');

        // Wait for the recipes load
        cy.wait('@recipes');

        // Loading spinner should not exist after load
        cy.getBySel('loading-spinner').should('not.exist');
    });

    it('should show the correct filter options', () => {
        // Click the filters button
        cy.getBySel('filters-button').click();

        // The drawer should be open/visible now
        cy.getBySel('filters-drawer').should('be.visible');

        // Check for the filter drawer label
        cy.getBySel('filters-label').should('contain.text', 'Filters');

        // Check the reset button
        cy.getBySel('reset-button').should('exist');
        cy.getBySel('reset-button-badge').should('not.be.visible');

        // Check close button
        cy.getBySel('close-button').should('exist');

        // Check categories
        cy.getBySel('filters-category').should('have.length', 3);

        // Check difficulty
        cy.getBySel('filters-category').eq(0).as('difficulty');
        cy.getBySel('filters-category').eq(1).as('mealTypes');
        cy.getBySel('filters-category').eq(2).as('cuisine');

        // Difficulty options
        const difficultyOptions = ['All', 'Easy', 'Medium'];
        cy.get('@difficulty').within(() => {
            // Check default option
            cy.getBySel('filters-category-option')
                .eq(0)
                .find('[type=radio]')
                .should('be.checked')
                .and('have.attr', 'value', 'All');

            cy.getBySel('filters-category-option').each((el, idx) => {
                // wrap this element so we can
                // use cypress commands on it
                cy.wrap(el).should('contain.text', difficultyOptions[idx]);
            });
        });

        // Meal Types options
        const mealTypesOptions = [
            'All',
            'Appetizer',
            'Beverage',
            'Breakfast',
            'Dessert',
            'Dinner',
            'Lunch',
            'Side Dish',
            'Snacks',
        ];
        cy.get('@mealTypes').within(() => {
            // Check default option
            cy.getBySel('filters-category-option')
                .eq(0)
                .find('[type=radio]')
                .should('be.checked')
                .and('have.attr', 'value', 'All');

            cy.getBySel('filters-category-option').each((el, idx) => {
                // wrap this element so we can
                // use cypress commands on it
                cy.wrap(el).should('contain.text', mealTypesOptions[idx]);
            });
        });

        // Cuisine options
        const cuisineOptions = [
            'All',
            'American',
            'Asian',
            'Brazilian',
            'Cocktail',
            'Greek',
            'Hawaiian',
            'Indian',
            'Italian',
            'Japanese',
            'Korean',
            'Lebanese',
            'Mediterranean',
            'Mexican',
            'Moroccan',
            'Pakistani',
            'Smoothie',
            'Spanish',
            'Thai',
            'Turkish',
            'Vietnamese',
        ];
        cy.get('@cuisine').within(() => {
            // Check default option
            cy.getBySel('filters-category-option')
                .eq(0)
                .find('[type=radio]')
                .should('be.checked')
                .and('have.attr', 'value', 'All');

            cy.getBySel('filters-category-option').each((el, idx) => {
                // wrap this element so we can
                // use cypress commands on it
                cy.wrap(el).should('contain.text', cuisineOptions[idx]);
            });
        });
    });

    it('should show the correct data when using the filters', () => {
        // Click the filters button
        cy.getBySel('filters-button').click();

        // Click the "Easy" difficulty
        cy.getBySel('filters-category').eq(0).as('difficulty');
        cy.get('@difficulty').within(() => {
            cy.getBySel('filters-category-option').eq(1).click();
        });

        // Check reset badge
        cy.getBySel('reset-button-badge').should('be.visible');

        // Click reset button
        cy.getBySel('reset-button').click();

        cy.getBySel('reset-button-badge').should('not.be.visible');
        cy.get('@difficulty').within(() => {
            cy.getBySel('filters-category-option')
                .eq(0)
                .find('[type=radio]')
                .should('be.checked');
        });

        // Re-select the easy option
        cy.get('@difficulty').within(() => {
            cy.getBySel('filters-category-option').eq(1).click();
        });

        // Click the close button
        cy.getBySel('close-button').click();

        // Reset badge should be visible now
        cy.getBySel('filters-button-badge').should('be.visible');

        // Check all recipes have the difficulty label Easy
        cy.getBySel('recipe-difficulty').each((el) => {
            cy.wrap(el).should('contain.text', 'Easy');
        });
    });
});
