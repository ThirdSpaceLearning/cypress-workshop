## Step 4 - Cypress Navigation and URLs

**Steps:**

1. Intercept the `/recipe` request
<details>
    <summary>
    Solution
    </summary>

```ts
it('should redirect to the recipe', () => {
    // Intercept recipe request
    cy.intercept('GET', '**/recipes/1?*', {
        fixture: 'recipe.json',
    });
});
```
</details>

2. Click the title by using `cy.click(...)`
<details>
    <summary>
    Solution
    </summary>

```ts
it('should redirect to the recipe', () => {
    // ...

    // Click the first recipe
    cy.get('[data-cy="recipe-title"]').eq(0).click();
});
```
</details>

3. Check the url by using `cy.url(...)`
<details>
    <summary>
    Solution
    </summary>

```ts
it('should redirect to the recipe', () => {
// Intercept recipe request
    cy.intercept('GET', '**/recipes/1?*', {
        fixture: 'recipe.json'
    });

// Click the first recipe
    cy.get('[data-cy="recipe-title"]').eq(0).click();

// Check the url is now the recipe url
    cy.url().should('include', '/recipes/1');
});
```
</details>
