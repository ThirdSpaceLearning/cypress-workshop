## Step 8 - Cypress Tests (Recipes Filters Data)

**Steps:**

1. Click the filters button `cy.click()` - no need to check if it exists as we’ve already done so before
<details>
    <summary>
    Solution
    </summary>

```ts
it('should show the correct filter options', () => {
    // Click the filters button
    cy.getBySel('filters-button').click();
});
```
</details>

2. Check the drawer has opened `.should('be.visible')`
<details>
    <summary>
    Solution
    </summary>

```ts
it('should show the correct filter options', () => {
    // ...

    // The drawer should be open/visible now
    cy.getBySel('filters-drawer').should('be.visible');
});
```
</details>

3. Check for the drawer label, reset button (including the badge) and close button
<details>
    <summary>
    Solution
    </summary>

```ts
it('should show the correct filter options', () => {
    // ...

    // Check for the filter drawer label
    cy.getBySel('filters-label').should('contain.text', 'Filters');

    // Check the reset button
    cy.getBySel('reset-button').should('exist');
    cy.getBySel('reset-button-badge').should('not.be.visible');

    // Check close button
    cy.getBySel('close-button').should('exist');
});
```
</details>

4. Check that we have 3 filter categories `.should('have.length', 3)`
<details>
    <summary>
    Solution
    </summary>

```ts
it('should show the correct filter options', () => {
    // ...

    // Check categories
    cy.getBySel('filters-category').should('have.length', 3);
});
```
</details>

5. Select each category with an alias `.as('category-name')`
<details>
    <summary>
    Solution
    </summary>

```ts
it('should show the correct filter options', () => {
    // ...

    // Check difficulty
    cy.getBySel('filters-category').eq(0).as('difficulty');
    cy.getBySel('filters-category').eq(1).as('mealTypes');
    cy.getBySel('filters-category').eq(2).as('cuisine');
});
```
</details>

6. Check for the correct options for each category through the `.each` command
<details>
    <summary>
    Solution
    </summary>

```ts
it('should show the correct filter options', () => {
    // ...

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
```
</details>
