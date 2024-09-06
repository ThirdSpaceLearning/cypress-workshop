## Cypress best practices

### Write readable and maintainable tests

1. **Specs**: Use a spec for each app’s page to keep tests organised and easy to find.
2. **Group tests:** Use `describe()` to group tests.
3. **Test Function**: One test function per e2e test.

### Keep tests independent

1. **Avoid interdependencies:** Each test should be run independently of others, so this means no sharing of data between tests.
2. **Reset state between tests:** We can do this by creating a new set of tests and re-visiting the pages, e.g. `cy.visit('/')`

### Use descriptive selectors that reflect UI intent

1. **Avoid complex selectors:** Instead use simple, readable selectors.
2. **Use Data Attribute for selectors:** Instead of relying on CSS classes or IDs, we instead use custom data attributes like `data-cy="submit-button"` or `data-testid="submit-button"`

### Use Cypress commands

1. **Cypress commands**: `cy.get(...)`, `cy.click(...)` , etc.
2. **Custom commands:** Create custom commands for repetitive actions, e.g. intercepting app requests that always happen on page load (user data). `cy.getBySel(...)`

### Use beforeEach for repetitive setups

1. **Setup repetitive states**: Intercept repetitive requests in the `beforeEach()` hook.
2. **Setup isolated states**: If not common to all tests then include it in the specific test.

### Mock network requests

1. **Control the network requests**: Use `cy.intercept` to intercept requests made on the app to Mock the API responses.

### Handle flaky tests

1. These can occur due to network issues, timing problems, etc.
2. **Wait command**: It’s not advised to use `cy.wait()` with a specific await time. Instead wait for requests to load before testing your page. E.g. `cy.wait('@userData')` where `@userData` refers to the intercepted request for user data.

### Run tests regularly

1. **Continuous Integration**: Integrate Cypress tests into your pipeline to catch issues early.

### Test responsiveness (if applicable)

1. **Different viewports**: Use `cy.viewport()` to test the app on different screen sizes. E.g. desktop vs mobile.
