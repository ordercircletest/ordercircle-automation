import cypress = require("cypress");
import selectors from "../../support/selectors";
import data from '../../e2e/data/inputs.js'
import { And } from "cypress-cucumber-preprocessor/steps/index";

export class staffPage {
    elements = {

        textVerify:() => cy.get(selectors.staff.textVerify),
        clickOnstaffTab:() => cy.get(selectors.staff.clickOnstaffTab),
        addNewStaffMenu:() => cy.get(selectors.staff.addNewStaffMenu),
        verifyTextOnAddNewStaffPage:() => cy.get(selectors.staff.verifyTextOnAddNewStaffPage),
        staffMemberName:() => cy.get(selectors.staff.staffMemberName),
        staffMemberTitle:() => cy.get(selectors.staff.staffMemberTitle),
        staffMemberFullName:() => cy.get(selectors.staff.staffMemberFullName),
        staffCommissionRate:() => cy.get(selectors.staff.staffCommissionRate),
        staffMemberNumber:() => cy.get(selectors.staff.staffMemberNumber),
        staffMemberRole:() => cy.get(selectors.staff.staffMemberRole),
        staffMemberEmail:() => cy.get(selectors.staff.staffMemberEmail),
        submitStaff:() => cy.get(selectors.staff.submitStaff)
        };

        verifyDashborad(){
            cy.viewport(1536, 960)
            this.elements.textVerify().should('have.text', 'Dashboard')
            .and('be.visible') 
            cy.wait(2000);
        }

        clickOnSideBarStaffTab(){
            cy.viewport(1536, 960)
            this.elements.clickOnstaffTab().contains('Staff')
            .and('be.visible').click({force: true})
        }

        AddNewStaff(){
            cy.viewport(1536, 960)
            this.elements.addNewStaffMenu().contains('Add Staff',{ matchCase: false })
            .click({force: true})
        }

        verifyAddNewStaffPage(){
            cy.viewport(1536, 960)
            this.elements.verifyTextOnAddNewStaffPage().should('have.text', 'Add Staff')
            .and('be.visible') 
        }

        fillAddNewStaffFormFileds(){
            cy.viewport(1536, 960)
            cy.randomStaffUsername()

            this.elements.staffMemberTitle().should('have.class','form-control')
            .and('be.visible').click().clear()
            .type(data.staffMemberTitle)

            cy.randomStaffFullname()

            this.elements.staffCommissionRate().should('have.class','form-control')
            .and('be.visible').click().clear()
            .type(data.staffCommissionRate)

            this.elements.staffMemberNumber().should('be.visible').click().clear()
            .type(data.staffMemberNumber)

            this.elements.staffMemberRole().should('be.visible')
            .select(1)

            // this.elements.staffMemberEmail().should('have.class','form-control')
            // .and('be.visible').click().clear()
            // .type(data.staffMemberEmail)
        }
        enterStaffEmailAddress(staffEmailAddress){
            cy.viewport(1536, 960)
            this.elements.staffMemberEmail().should('have.class','form-control')
            .and('be.visible').click().clear()
            .type(staffEmailAddress)
        }

        verifyStaffEmailAddress(staffEmailAddressVerification){
            cy.viewport(1536, 960)
            this.elements.staffMemberEmail().should('have.value',staffEmailAddressVerification)
        }

        clickStaffSubmitButton(){
            cy.viewport(1536, 960)
            this.elements.submitStaff().should('have.class','btn-primary')
            .and('be.visible').click()
        }

  }
  export const staff = new staffPage();