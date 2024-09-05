## Step 7 - Cypress Tests (Recipes Loading Status)

**Steps:**

1. Check that the loading spinner exists when visiting the page `data-cy="loading-spinner"`
```ts
    it('should show loading spinner', () => {
    // Loading spinner should show
    cy.getBySel('loading-spinner').should('exist');
});
```
2. Wait for the recipes request to be done `cy.wait(...)`
```ts
    it('should show loading spinner', () => {
    // Loading spinner should show
    cy.getBySel('loading-spinner').should('exist');

    // Wait for the recipes load
    cy.wait('@recipes');
});
```
3. Check the loading spinner no longer exists
```ts
    it('should show loading spinner', () => {
    // Loading spinner should show
    cy.getBySel('loading-spinner').should('exist');

    // Wait for the recipes load
    cy.wait('@recipes');

    // Loading spinner should not exist after load
    cy.getBySel('loading-spinner').should('not.exist');
});
```
