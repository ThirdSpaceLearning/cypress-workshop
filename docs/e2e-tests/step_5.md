## Step 5 - Cypress Selector Commands

**Steps:**

1. Add the following to the `commands.ts` file - this is taken directly from the Cypress website.

<details>
    <summary>
    Solution
    </summary>

```ts
Cypress.Commands.add('getBySel', (selector, ...args) => {
    return cy.get(`[data-cy=${selector}]`, ...args);
});
```
</details>

2. Add the following to the namespace in `commands.ts`:

<details>
    <summary>
    Solution
    </summary>

```
getBySel(selector: string, options?: any): any;
```

</details>

3. Add the following to the `e2e.ts` file:

<details>
    <summary>
    Solution
    </summary>

```ts
// cypress/support/index.ts
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to select DOM element by data-cy attribute.
             * @example cy.dataCy('greeting')
             */
            getBySel(value: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}
```
</details>

The 2nd and 3rd step allow for the typescript to find and suggest the correct cypress functions.
