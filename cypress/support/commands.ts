import selectors from "../../cypress/support/selectors";
//new change line 3 to 14
Cypress.Commands.add('login', (username = Cypress.env("username"), password = Cypress.env("password")) => {
    cy.viewport(1536, 960)
    // the page re-renders while shop products load; wait for it to settle so elements aren't detached
    cy.get('[id="username_placeholder"]').should('be.visible');
    cy.wait(4000);

    cy.get('[id="username_placeholder"]').clear().type(username);
    cy.get('[id="password_placeholder"]').clear().type(password);

    cy.get('[id="sign_in_cta"]').click();
})

//Cypress.Commands.add('login', () => { 
   //  cy.viewport(1536, 960)
   //  cy.wait(2000);
   //  cy.get('[id="username_placeholder"]').click().clear().type(Cypress.env("username"));
   //  cy.get('[id="password_placeholder"]').click().clear().type(Cypress.env("password"));
   //  cy.get('[id="sign_in_cta"]').click();
   //new changes
 
 Cypress.Commands.add('random', () => { 
   const randomNumber = () => Cypress._.random(0, 1e3)
   const randomId = randomNumber()
   const name = `customer${randomId}`
   cy.get(selectors.customer.contactUsername).type(name);
})

Cypress.Commands.add('randomText', () => { 
   const randomNumber = () => Cypress._.random(0, 1e3)
   const randomId = randomNumber()
   const name = `product${randomId}`
   cy.get(selectors.product.productSKU, { timeout: 10000 })
   .should('be.visible')
   .type(name)
})

Cypress.Commands.add('randomStaffUsername', () => { 
   const randomNumber = () => Cypress._.random(0, 1e3)
   const randomId = randomNumber()
   const name = `staff${randomId}`
   cy.get(selectors.staff.staffMemberName).type(name)
})

Cypress.Commands.add('randomStaffFullname', () => { 
   const randomNumber = () => Cypress._.random(0, 1e3)
   const randomId = randomNumber()
   const name = `staff${randomId}`
   cy.get(selectors.staff.staffMemberFullName).type(name)
})

Cypress.Commands.add('randomCname', () => { 
   const randomNumber = () => Cypress._.random(0, 1e3)
   const randomId = randomNumber()
   const name = `alex${randomId}`
   cy.get(selectors.adminStaff.customerCompanyName).type(name)
})

Cypress.Commands.add('randomContactPersonName', () => { 
   const randomNumber = () => Cypress._.random(0, 1e3)
   const randomId = randomNumber()
   const name = `alex${randomId}`
   cy.get(selectors.adminStaff.customerContactPersonName).type(name)
})

Cypress.Commands.add('randomProductSku', () => { 
   const randomSku = () => Cypress._.random(0, 1e3)
   const randomId = randomSku()
   const name = `sku${randomId}`
   cy.get(selectors.addNewProductByStaff.ProductSKU).should("have.class", "form-control").type(name)
})

Cypress.Commands.add('customerName', () => { 
   const randomCustomerName = () => Cypress._.random(0, 1e3)
   const randomId = randomCustomerName()
   const name = `test${randomId}`
   cy.get(selectors.customerSignUp.customerName).should("be.visible").type(name)
})

Cypress.Commands.add('companyName', () => { 
   const randomCompanyName = () => Cypress._.random(0, 1e3)
   const randomCompany = randomCompanyName()
   const name = `testCompany${randomCompany}`
   cy.get(selectors.customerSignUp.companyName).should("be.visible").type(name)
})

Cypress.Commands.add('workEmailAddress', () => { 
   const workEmailAddress = () => Cypress._.random(0, 1e3)
   const randomCompany = workEmailAddress()
   const name = `test${randomCompany}@gmail.com`
   cy.get(selectors.customerSignUp.workEmailAddress).should("be.visible").type(name)
})


Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('M.notify is not a function') || err.message.includes('Intercom is not a function')) {
    return false;
  }
  
});