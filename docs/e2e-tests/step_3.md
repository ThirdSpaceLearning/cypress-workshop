## Step 3 - Cypress Page Tests (Recipes Page)

**Steps:**

1. Create a new test function
<details>
    <summary>
    Solution
    </summary>

```ts
it('should display the recipes pages data', () => {
    // tests here
});
```

</details>

2. Check that the Filters button exists `data-cy="filters-button"` and contains text `Filters`
3. Create a new test function
<details>
    <summary>
    Solution
    </summary>

```ts
it('should display the recipes pages data', () => {
    // Filters Button
    cy.get('[data-cy="filters-button"]').should('exist');
    cy.get('[data-cy="filters-button"]').should('contain.text', 'Filters');
});
```
</details>

4. Check that the first card of the list contains the expected values. Get the recipe item with `cy.get(...).as('recipe)`
<details>
    <summary>
    Solution
    </summary>

```ts
it('should display the recipes pages data', () => {
    // ...
    
    cy.get('[data-cy="recipe-item"]').eq(0).as('recipe');
});
```
</details>

5. Check the data within the recipe
   1. Title should contain `Classic Margherita`
   2. Preparation time should contain text `20 mins`
   3. Cooking time should contain text `15 mins`
   4. Calories should contain text `300 kcal`
   5. Meal type should include one label with the text `Dinner`
   6. Difficulty contains text `Easy`
       1. Extra: check that the colour is green
   7. Title should contain `href` that redirects to `/recipe/1`

<details>
    <summary>
    Solution
    </summary>

```ts
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
```
</details>
