## Step 1 - Cypress Basic Interactions

**Steps:**

1. Create `recipes.cy.ts`
2. Setup the spec

<details>
    <summary>
    Solution
    </summary>

    describe('Recipes Page', () => {
        beforeEach(() => {
            // add repetable actions here
        })

        it('should display the page title', () => {
           // add tests here 
        });
    });
</details>

3. Use `cy.visit('/recipes')` to navigate to the correct page

<details>
    <summary>
    Solution
    </summary>

    describe('Recipes Page', () => {
        beforeEach(() => {
            cy.visit('/recipes');
        })

        it('should display the page title', () => {
           // add tests here 
        });
    
    });
</details>

4. Select the title using the command `cy.get(...)`
5. Select the title by using the `data-cy` data attribute.
6. Check that the title contains the correct text by using `cy.contains(...)`
<details>
    <summary>
    Solution
    </summary>

    describe('Recipes Page', () => {
        beforeEach(() => {
            cy.visit('/recipes');
        })
    
        it('should display the page title', () => {
            cy.get('[data-cy="recipes-title"]').should('contain.text', 'Recipes');
        });
    });
</details>

