import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import {customerSignUp} from "../../../pages/customerSignup/customerSignUpPage"

before(() => {
    cy.visit(Cypress.env("base_url"));
  })

When('Customer verify the login screen after visit the site URL',() => {
    customerSignUp.customerVerifyTheLoginScreen();
})

Then ('Customer verified the login screen successfully', () => {
    console.log("customer verified login page successfully");
})

And('Customer click on SignUp link which is available under the signIn button',() => {
    customerSignUp.clickOnSignUpText();
})
Then ('Customer Clicked on SignUp link successfully which is available under the signIn button', () => {
    console.log("SignUp page is open ");
})

When('Customer enter the form details which is required to create new customer',() => {
    customerSignUp.customeraddRequiredFormFields();
})

Then ('Customer entered the form deatils successfully which is required', () => {
    console.log("customer added the required fields");
})

When('Customer Clicked on submit button after form deatils is filled successfully',() => {
    customerSignUp.clickOnSubmitButton();
})

Then ('Customer clicked on submit successfully', () => {
    console.log("Customer clicked on submit successfully");
})

When('the brand owner enter his valid username as {string}',(brandOwnerUsername) => {
    customerSignUp.enterBrandOwnerUsername(brandOwnerUsername);
})

Then ('the brand owner username should be populated correctly as {string}', (VerifybrandOwnerUsername) => {
    customerSignUp.verifyBrandOwnerUsername(VerifybrandOwnerUsername);
    console.log("Brand Owner entered his username successfully");
})

When('the brand owner enter his valid password as {string}',(brandOwnerPassword) => {
    customerSignUp.enterBrandOwnerPassword(brandOwnerPassword);
})

Then ('the brand owner password should be populated correctly as {string}', (VerifybrandOwnerPassword) => {
    customerSignUp.verifybrandOwnerPassword(VerifybrandOwnerPassword);
    console.log("Brand Owner entered his password successfully");
})

When('Brand owner click on SignIn Button to aceess the owner dashboard screen',() => {
    customerSignUp.clickOnSubmitButtonToAccessDashboard();
})
Then ('Brand owner clicked on SignIn Button successfully to aceess the owner dashboard screen', () => {
    console.log("the owner dashboard screen");
})

When('Customer click on customer tab to open the dropdown menu of customer',() => {
    customerSignUp.ClickOnCustomerTab();
})
Then ('Dropdown list is open after click on customers tab', () => {
    console.log("customers tab open successfully");
})
And ('Customer should click on customer list which is available in cusotmer list', () => {
    customerSignUp.clickOnCustomerList();
})

When ('Customer click on pending customer link to access pending customers', () => {
    customerSignUp.clickOnApprovePendingCustomers();
})
Then ('Pending customer list is open', () => {
    console.log("User is on pending customers list");
})
And ('Select random customer and open the details of that customer', () => {
    customerSignUp.selectRandomCustomerFromList();
})
Then ('Click on approve customer button to create customer in customer list', () => {
    customerSignUp.clickOnApproveButton();
})
And ('click on OK button of success popup', () => {
    customerSignUp.clickOnPopupOkButton();
})
