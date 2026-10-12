import "../support/commands"

declare global {
    namespace Cypress {
      interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
        // dataCy(login): Chainable<Element>
        login(username?: string, password?: string): Chainable<Element>;
        random(): Chainable<Element>;
        randomText(): Chainable<Element>;
        randomStaffUsername():Chainable<Element>
        randomStaffFullname():Chainable<Element>
        randomCname():Chainable<Element>
        randomContactPersonName():Chainable<Element>
        randomProductSku():Chainable<Element>
        customerName():Chainable<Element>
        companyName():Chainable<Element>
        workEmailAddress():Chainable<Element>


        
      }
    }
  }