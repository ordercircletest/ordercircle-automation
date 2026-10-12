import cypress = require("cypress");
import data from '../../e2e/data/inputs.js'
import selectors from "../../support/selectors";

 export class customerSignup {
    elements = {
        verifyLoginScreen:() => cy.get(selectors.customerSignUp.verifyScreen),
        clickOnSignUpLink:() => cy.get(selectors.customerSignUp.clickOnSignUpLink),
        customerPhoneNumber:() => cy.get(selectors.customerSignUp.customerPhoneNumber),
        questionAndConcerns:() => cy.get(selectors.customerSignUp.questionAndConcerns),
        clickOnSubmitButton:() => cy.get(selectors.customerSignUp.clickOnSubmitButton),
        enterUserName:() => cy.get(selectors.customerSignUp.enterValidUserName),
        enterValidPassword:() => cy.get(selectors.customerSignUp.enterValidPassword),
        ClickOnSignInButton:() => cy.get(selectors.customerSignUp.ClickOnSignInButton),
        clickonCustomerTab:() => cy.get(selectors.customerSignUp.clickonCustomerTab),
        clickOnCustomerListMenu:() => cy.get(selectors.customerSignUp.clickOnCustomersList),
        pendingCustomersList:() => cy.get(selectors.customerSignUp.pendingCustomersList),
        openCustomerDetails:(p0: { timeout: number; }) => cy.get(selectors.customerSignUp.openCustomerDetails),
        approveButton:() => cy.get(selectors.customerSignUp.approveCusromerButton),
        popupButton:() => cy.get(selectors.customerSignUp.popupButton),
   customersList:() => cy.get(selectors.customer.clickCustomerTab),


        };
        
        customerVerifyTheLoginScreen(){
            cy.viewport(1536, 960)
            this.elements.verifyLoginScreen().contains("Username*",{ matchCase: false }).should("have.class" , "font-weight-bolder")
            .and("be.visible")
            // cy.wait(2000);

        }

        clickOnSignUpText(){
            cy.viewport(1536, 960)
            this.elements.clickOnSignUpLink().contains("Sign Up",{ matchCase: false }).and("be.visible").click()
            cy.wait(2000);
        }

        customeraddRequiredFormFields(){
            cy.viewport(1536, 960)
            cy.customerName()
            cy.companyName()
            cy.workEmailAddress()
            this.elements.customerPhoneNumber().should("have.class" , "form-control").and("be.visible")
            .click().type(data.phone)
            // this.elements.questionAndConcerns().should("have.class" , "form-control")
            // .click().type(data.questionAndConcerns)
        }

        clickOnSubmitButton(){
            cy.viewport(1536, 960) 
            this.elements.clickOnSubmitButton().contains("Submit",{ matchCase: false }).and("be.visible").click()
            cy.wait(2000);
        }
 
        enterBrandOwnerUsername(brandOwnerUsername){
            cy.viewport(1536, 960)
            // after submitting the signup form the app can stay on the form; go back to the login page
            cy.get('body').then(($body) => {
                if (!$body.find('#username_placeholder').length) {
                    cy.visit(Cypress.env("base_url"))
                }
            })
            // the login form re-renders while the shop products load; let it settle first
            this.elements.enterUserName().should("be.visible")
            cy.wait(4000)
            this.elements.enterUserName().clear().type(brandOwnerUsername)
        }

        verifyBrandOwnerUsername(VerifybrandOwnerUsername){
            cy.viewport(1536, 960)
            this.elements.enterUserName().should('have.value',VerifybrandOwnerUsername)

        }

        enterBrandOwnerPassword(brandOwnerPassword){
            cy.viewport(1536, 960)
            this.elements.enterValidPassword().and('be.visible').click().clear()
            .type(brandOwnerPassword)
            //this.elements.enterValidPassword().should("be.visible").click().clear().type(brandOwnerUsername)
        }

        verifybrandOwnerPassword(VerifybrandOwnerPassword){
            cy.viewport(1536, 960)
            this.elements.enterValidPassword().should('have.value',VerifybrandOwnerPassword)
            cy.wait(2000);

        }

        clickOnSubmitButtonToAccessDashboard(){
            cy.viewport(1536, 960)
            this.elements.ClickOnSignInButton().contains("Sign In",{ matchCase: false })
            .and("be.visible").click()
            cy.wait(2000);
        }
        
        ClickOnCustomerTab(){
            cy.viewport(1536, 960)
            // the dashboard re-renders right after login; let it settle before using the sidebar
            cy.get('.menu-icon', { timeout: 30000 }).should('exist')
            cy.wait(4000)
            this.elements.clickonCustomerTab().first().click()
        }
        clickOnCustomerList(){
            cy.viewport(1536, 960)
           
            this.elements.clickOnCustomerListMenu().should("be.visible")
            .click()
            cy.wait(3000);
        }
        clickOnApprovePendingCustomers(){
            cy.viewport(1536, 960)
            this.elements.pendingCustomersList().should("be.visible")
            .click()
        }
       // selectRandomCustomerFromList(){
           // cy.viewport(1536, 960)
           /// this.elements.openCustomerDetails().eq(1)
            //.click()
           // cy.wait(3000);
           selectRandomCustomerFromList(){
    cy.viewport(1536, 960)
    cy.wait(2000) 
    this.elements.openCustomerDetails({ timeout: 10000 })
        .should('exist')
        .should('have.length.at.least', 2) 
        .eq(1)
        .scrollIntoView()
        .should('be.visible')
        .click({ force: true })
    
    cy.wait(3000);
        }

        clickOnApproveButton(){
            cy.viewport(1536, 960)
            this.elements.approveButton().contains("Approve Customer",{ matchCase: false })
            .and("be.visible").click()
            cy.wait(2000);

        }
        
        clickOnPopupOkButton(){
            this.elements.popupButton().contains("OK",{ matchCase: false })
            .and("be.visible").click()
        }
      
  }
  export const customerSignUp = new customerSignup();
