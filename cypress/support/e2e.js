// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// cypress/support/e2e
import './commands'


// Cypress clears cookies/localStorage before every test, but these feature files chain
// scenarios (login -> create -> edit) and expect to stay logged in. Carry the session over.
let savedSession = null;

afterEach(() => {
  cy.window({ log: false }).then((win) => {
    const localStorageItems = {};
    for (let i = 0; i < win.localStorage.length; i++) {
      const key = win.localStorage.key(i);
      localStorageItems[key] = win.localStorage.getItem(key);
    }
    savedSession = { localStorageItems };
  });
});

beforeEach(() => {
  if (!savedSession || !savedSession.localStorageItems['access-token']) return;
  cy.window({ log: false }).then((win) => {
    Object.entries(savedSession.localStorageItems).forEach(([k, v]) => win.localStorage.setItem(k, v));
  });
  // no reload: multi-step screens (e.g. the order wizard) keep their progress in page memory
});

// start every spec file from a clean browser so a login left over from the previous spec can't leak in
before(() => {
  cy.clearLocalStorage();
  cy.clearCookies();
});
