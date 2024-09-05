## Step 2 - Requests Interception

**Steps:**

1. Intercept the request by using the cypress command `cy.intercept(...)`
    1. `GET` type of request
    2. `**/recipes?*` request to be intercepted
    3. `recipes.json` the fixture to be used

<details>
    <summary>
    Solution
    </summary>

```ts
describe('Recipes Page', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/recipes?*', {
            fixture: 'recipes.json',
        });

        cy.visit('/recipes');
    })

    it('should display the page title', () => {
        cy.get('[data-cy="recipes-title"]').should('contain.text', 'Recipes');
    });
});
```
</details>

2. Add the file `recipes.json`
3. Test that it’s working by changing a property in the `recipes.json`
