import cypress = require("cypress");
import data from '../../e2e/data/inputs.js'
import selectors from "../../support/selectors";

export class loginPage {
    elements = {
        username: () => cy.get('[id="username"]'),
        password: () => cy.get('[id="password"]'),
        submitButton: () => cy.get('[id="kt_login_signin_submit"]'),
        logoutButton: () => cy.get('[class="symbol-label font-size-h5 font-weight-bold btn-dropdown"]'),
        textVerify: () => cy.get('[class="breadcrumb-item text-muted px-3"]'),
        };
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    successfullLogin(){
        cy.login() 
        cy.wait(3000);
        }
        
    verifyDashboard(){
        this.elements.textVerify().should('have.text', 'Dashboard',);
        cy.wait(3000);
    }
    
//parametrize login functionality
    validUsernameWrongPassword(username,password){
        cy.wait(3000);
        this.elements.username().click().clear().type(username);
        this.elements.password().click().clear().type(password);
        this.elements.submitButton().click();
    }

    invalidUsernameValidPassword(){
        cy.wait(3000);
        this.elements.username().click().clear().type(data.wrongUsername);
        this.elements.password().click().clear().type(Cypress.env("password"));
        this.elements.submitButton().click();
    }

    invalidUsernameInvalidPassword(){
        cy.wait(3000);
        this.elements.username().click().clear().type(data.wrongUsername);
        this.elements.password().click().clear().type(data.wrongPassword);
        this.elements.submitButton().click();
    }
    
      
  }
  export const login = new loginPage();
