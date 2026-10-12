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
let inGap = false; // true between the end of one test and the session restore in the next

// Cypress empties localStorage between tests; for that short gap, serve the saved values to the app
// so it doesn't see a missing session and log itself out.
Cypress.on('window:before:load', (win) => {
  const originalGetItem = win.Storage.prototype.getItem;
  win.Storage.prototype.getItem = function (key) {
    const value = originalGetItem.call(this, key);
    if (value === null && inGap && savedSession && this === win.localStorage) {
      const saved = savedSession.localStorageItems[key];
      return saved === undefined ? null : saved;
    }
    return value;
  };
});

afterEach(() => {
  cy.window({ log: false }).then((win) => {
    const localStorageItems = {};
    for (let i = 0; i < win.localStorage.length; i++) {
      const key = win.localStorage.key(i);
      localStorageItems[key] = win.localStorage.getItem(key);
    }
    savedSession = { localStorageItems, url: win.location.href };
    inGap = true;
  });
});

beforeEach(() => {
  if (!savedSession || !savedSession.localStorageItems['access-token']) { inGap = false; return; }
  cy.window({ log: false }).then((win) => {
    Object.entries(savedSession.localStorageItems).forEach(([k, v]) => win.localStorage.setItem(k, v));
    inGap = false;
  });
  // no reload: multi-step screens (e.g. the order wizard) keep their progress in page memory.
});

// start every spec file from a clean browser so a login left over from the previous spec can't leak in
before(() => {
  cy.clearLocalStorage();
  cy.clearCookies();
});
