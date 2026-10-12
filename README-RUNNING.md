# Getting this project running again

## What was broken
This project was originally zipped/rarred with `node_modules` included. When it was
extracted, the Cypress binaries lost their executable ("+x") permission:

- `node_modules/.bin/cypress`
- `node_modules/cypress/bin/cypress`

That's exactly why you'd see something like:

```
sh: cypress: Permission denied
```

or Cypress just silently refusing to open. `node_modules` was also stripped from this
copy — it was 215MB and, more importantly, may contain binaries built for a different
OS than the one you're running on now (e.g. esbuild). A clean install avoids both
problems in one shot.

## How to get it running

```bash
cd ordercircle-automation
npm install
npx cypress open      # interactive runner
# or
npx cypress run       # headless run (uses the cucumber-preprocessor + specPattern below)
```

If you ever hit "Permission denied" again after unzipping a project on Mac/Linux, this
one-liner fixes it without a full reinstall:

```bash
chmod +x node_modules/.bin/* node_modules/cypress/bin/cypress
```

## One more thing to check
Every recorded run in the original project (screenshots/videos, now removed to keep
this package small) failed at the **same point**: a `before()` hook in
`cypress/e2e/step_definitions/login/loginSteps.ts` that does:

```ts
before(() => {
  cy.visit(Cypress.env("base_url"));
});
```

`base_url` in `cypress.env.json` points to:

```
https://06octtesting.v2.ordercirclestaging.com/
```

Since this hook runs before *every* feature (nonGlobalStepDefinitions is `false`, so
all step files load globally), if that staging URL is down, expired, or needs a VPN,
**every single test fails immediately** with no useful error beyond a blank/failed
page load. Open that URL in a normal browser first — if it doesn't load for you, that's
your real blocker, not Cypress itself. Update `cypress.env.json` with a working URL/
credentials if the staging environment has moved.

## Versions this project expects
- Cypress `^10.11.0`
- `cypress-cucumber-preprocessor` `^4.3.1`
- TypeScript `^4.9.5`
- Node: works best on Node 16/18. If `npm install` complains on a much newer Node
  (e.g. 20/22), try `nvm use 18` first — Cypress 10's toolchain is older and some
  transitive deps (esbuild, etc.) can be picky about very new Node versions.
