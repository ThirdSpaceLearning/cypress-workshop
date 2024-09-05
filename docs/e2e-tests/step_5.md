## Step 5 - Cypress Selector Commands

**Steps:**

1. Add the following to the `commands.ts` file - this is taken directly from the Cypress website.

```ts
Cypress.Commands.add('getBySel', (selector, ...args) => {
    return cy.get(`[data-cy=${selector}]`, ...args);
});
```

1. Add the following to the namespace in `commands.ts`:

```
getBySel(selector: string, options?: any): any;
```

1. Add the following to the `e2e.ts` file:

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

The 2nd and 3rd step allow for the typescript to find and suggest the correct cypress functions.
