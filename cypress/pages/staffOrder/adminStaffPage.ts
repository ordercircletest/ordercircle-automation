import cypress = require("cypress");
import selectors from "../../support/selectors";
import data from '../../e2e/data/inputs.js'
import { And } from "cypress-cucumber-preprocessor/steps/index";

export class staffAdminPage {
    elements = {
        username:() => cy.get(selectors.adminStaff.username),
        password:() => cy.get(selectors.adminStaff.password),
        textVerify:() => cy.get(selectors.adminStaff.textVerify),
        clickOnstaffTab:() => cy.get(selectors.adminStaff.clickOnstaffTab),
        addNewStaffMenu:() => cy.get(selectors.adminStaff.addNewStaffMenu),
        verifyTextOnAddNewStaffPage:() => cy.get(selectors.adminStaff.verifyTextOnAddNewStaffPage),
        staffMemberName:() => cy.get(selectors.adminStaff.staffMemberName),
        staffMemberTitle:() => cy.get(selectors.adminStaff.staffMemberTitle),
        staffMemberFullName:() => cy.get(selectors.adminStaff.staffMemberFullName),
        staffCommissionRate:() => cy.get(selectors.adminStaff.staffCommissionRate),
        staffMemberNumber:() => cy.get(selectors.adminStaff.staffMemberNumber),
        staffMemberRole:() => cy.get(selectors.adminStaff.staffMemberRole),
        staffMemberEmail:() => cy.get(selectors.adminStaff.staffMemberEmail),
        submitStaff:() => cy.get(selectors.adminStaff.submitStaff),
        switchToAdmin:() => cy.get(selectors.adminStaff.switchToAdmin),
        clickOnLoginPopUp:() => cy.get(selectors.adminStaff.clickOnLoginPopUp),
        clickOnSignOutButtonInPopUp:() => cy.get(selectors.adminStaff.clickOnSignOutButtonInPopUp),
        verifyTheLoginPage:() => cy.get(selectors.adminStaff.verifyTheLoginPage),
        clickOnSignInButton:() => cy.get(selectors.adminStaff.clickOnSignInButton),
        dashboardVerfifcation:() => cy.get(selectors.adminStaff.dashboardVerfifcation),
        staffClickOnCustomerText:() => cy.get(selectors.adminStaff.staffClickOnCustomerText),
        clickOnAddNewCustomer:() => cy.get(selectors.adminStaff.clickOnAddNewCustomer),
        customerPhoneNumber:() => cy.get(selectors.adminStaff.customerPhoneNumber),
        contactPersonEmail:() => cy.get(selectors.adminStaff.contactPersonEmail),
        contactPersonPhoneNumber:() => cy.get(selectors.adminStaff.contactPersonPhoneNumber),
        TaxIDEinAndVat:() => cy.get(selectors.adminStaff.TaxIDEinAndVat),
        TaxRateOverride:() => cy.get(selectors.adminStaff.TaxRateOverride),
        DefaultPaymentTerms:() => cy.get(selectors.adminStaff.DefaultPaymentTerms),
        MinimumOrder:() => cy.get(selectors.adminStaff.MinimumOrder),
        CreditLimit:() => cy.get(selectors.adminStaff.CreditLimit),
        verifyEditCustomerScreen:() => cy.get(selectors.adminStaff.verifyEditCustomerScreen),
        SaveAndEditButtonOfCustomer:() => cy.get(selectors.adminStaff.SaveAndEditButtonOfCustomer),
        clickOnAddShippingAddressButton:() => cy.get(selectors.adminStaff.clickOnAddShippingAddressButton),
        usernameOfShippingForm:() => cy.get(selectors.adminStaff.usernameOfShippingForm),
        shippingAddress:() => cy.get(selectors.adminStaff.shippingAddress),
        shippingAddress2:() => cy.get(selectors.adminStaff.shippingAddress2),
        countryName:() => cy.get(selectors.adminStaff.countryName),
        stateName:() => cy.get(selectors.adminStaff.stateName),
        cityName:() => cy.get(selectors.adminStaff.cityName),
        zipCode:() => cy.get(selectors.adminStaff.zipCode),
        shippingPhoneNumber:() => cy.get(selectors.adminStaff.shippingPhoneNumber),
        saveShippingAddress:() => cy.get(selectors.adminStaff.saveShippingAddress),
        clickAddBillingAddressButton:() => cy.get(selectors.adminStaff.clickAddBillingAddressButton),
        usernameOfBillingForm:() => cy.get(selectors.adminStaff.usernameOfBillingForm),
        billingAddress:() => cy.get(selectors.adminStaff.billingAddress),
        billingAddress2:() => cy.get(selectors.adminStaff.billingAddress2),
        billingCountry:() => cy.get(selectors.adminStaff.billingCountry),
        billingState:() => cy.get(selectors.adminStaff.billingState),
        billingCity:() => cy.get(selectors.adminStaff.billingCity),
        billingZipCode:() => cy.get(selectors.adminStaff.billingZipCode),
        billingPhoneNumber:() => cy.get(selectors.adminStaff.billingPhoneNumber),
        saveBillingAddress:() => cy.get(selectors.adminStaff.saveBillingAddress),
        updateCustomer:() => cy.get(selectors.adminStaff.updateCustomer),


        };

        verifyDashborad(){
            cy.viewport(1536, 960)
            this.elements.textVerify().should('have.text', 'Dashboard')
            .and('be.visible') 
            cy.wait(2000);
        }

        clickOnSideBarStaffTab(){
            cy.viewport(1536, 960)
            this.elements.clickOnstaffTab().contains('Staff',{ matchCase: false })
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

        fillAddNewAdminStaffFormFileds(){
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
            .type(data.adminStaffNumber)

            this.elements.staffMemberRole().should('have.class','form-control')
            .select(1)
        }

        enterStaffEmailAddress(staffEmailAddress){
            this.elements.staffMemberEmail().should('have.class','form-control')
            .and('be.visible').click().clear()
            .type(staffEmailAddress)
        }

        verifyStaffEmailAddress(staffEmailAddressVerification){
            this.elements.staffMemberEmail().should('have.value',staffEmailAddressVerification)
        }

        clickSwitchToAdminButton(){
            this.elements.switchToAdmin().should("be.visible").click()
        }

        clickStaffSubmitButton(){
            cy.viewport(1536, 960)
            this.elements.submitStaff().should('have.class','btn-primary')
            .and('be.visible').click()
            cy.wait(4000);
        }

        clickOnLoginPopup(){
            cy.viewport(1536, 960)
            this.elements.clickOnLoginPopUp().should('be.visible').click()
        }

        clickOnSignOutButton(){
            cy.viewport(1536, 960)
            this.elements.clickOnSignOutButtonInPopUp().should('be.visible')
            .and('have.text','Sign Out').click()
            
        }

        verifyLoginPage(){
            cy.viewport(1536, 960)
            this.elements.username().should("be.visible")
            cy.wait(1000);
        }

        enterStaffUsername(staffUsername){
            this.elements.username().and('be.visible').click().clear()
            .type(staffUsername)
        }

        verifyStaffUsername(staffUsernameVerification){
            this.elements.username().should('have.value',staffUsernameVerification)
        }

        enterStaffPassword(staffPassword){
            this.elements.password().and('be.visible').click().clear()
            .type(staffPassword)
        }

        verifyStaffPassword(staffPasswordVerification){
            cy.viewport(1536, 960)
            this.elements.password().should('have.value',staffPasswordVerification)
        }

        clickLoginButton(){
            cy.viewport(1536, 960)
            this.elements.clickOnSignInButton().should("be.visible").click()
            cy.wait(2000)
        }

        verifiedDashborad(){
            cy.viewport(1536, 960)
            this.elements.dashboardVerfifcation().contains('Dashboard',{ matchCase: false })
            .and("be.visible").click()
            cy.wait(1000)
        }

        staffClickOnCustomerToOpenDropdown(){
            cy.viewport(1536, 960)
            this.elements.staffClickOnCustomerText().should("be.visible")
            .click()
        }

        clickOnAddNewCustomer(){
            cy.viewport(1536, 960)
            this.elements.clickOnAddNewCustomer().contains('Add New Customer',{ matchCase: false })
            .click({force: true})

        }

        companyInformationOfCustomer(){
            cy.viewport(1536, 960)
            //custom command is working for company name
            cy.randomCname()
            this.elements.customerPhoneNumber().should("be.visible")
            .click().clear().type(data.companyPhoneNumber)
            cy.randomContactPersonName()
            this.elements.contactPersonPhoneNumber().should("be.visible")
            .click().clear().type(data.contactPersonPhoneNumber)
        }

        staffAddContactEmailOfCustomer(customerContactPersonEmail){
            cy.viewport(1536, 960)
            this.elements.contactPersonEmail().should("be.visible").click().clear()
            .type(customerContactPersonEmail)
        }

        staffVerifyContactEmailOfCustomer(customerContactEmailVerification){
            cy.viewport(1536, 960)
            this.elements.contactPersonEmail()
            .should('have.value',customerContactEmailVerification)

        }

        taxInformationAndSalesRepresentative(){
            cy.viewport(1536, 960)
            this.elements.TaxIDEinAndVat().should("be.visible").and("be.empty").click().clear()
            .type(data.TaxIDEinAndVat)
            this.elements.TaxRateOverride().should("be.visible").and("be.empty").click().clear()
            .type(data.TaxRateOverride)
            this.elements.DefaultPaymentTerms().should("be.visible").and("be.empty").click().clear()
            .type(data.DefaultPaymentTerms)
            this.elements.MinimumOrder().should("be.visible").and("be.empty").click().clear()
            .type(data.MinimumOrder)
            // this.elements.CreditLimit().should("be.visible").and("be.empty").click().clear()
            // .type(data.CreditLimitOfCustomer)

        }

        clickOnSaveAndEditButton(){
            cy.viewport(1536, 960)
            this.elements.SaveAndEditButtonOfCustomer().contains('Save & Edit',{ matchCase: false }).click()
            cy.wait(4000)
        }

        editCustomerScreen(){
            cy.viewport(1536, 960)
            this.elements.verifyEditCustomerScreen().should('be.visible').click()
        }

        clickAddShippingButton(){
            cy.viewport(1536, 960)
            cy.wait(3000)
            this.elements.clickOnAddShippingAddressButton().click({force:true})
            this.elements.clickOnAddShippingAddressButton().click({force:true})
        }

        addShipingAddress(){
            cy.viewport(1536, 960)
            this.elements.usernameOfShippingForm().click().clear().type(data.username)
            this.elements.shippingAddress().click().clear().type(data.shippingAddress)
            this.elements.shippingAddress2().click().clear().type(data.shippingAddress)
            this.elements.countryName().select("Pakistan").should("have.value","Pakistan")
            this.elements.stateName().click().clear().type(data.state)
            this.elements.cityName().click().clear().type(data.city)
            this.elements.zipCode().click().clear().type(data.postel)
            this.elements.shippingPhoneNumber().click().clear().type(data.phone)
            this.elements.saveShippingAddress().contains('Save',{ matchCase: false }).click()
        }

        clickBillingAddressButton(){
            cy.viewport(1536, 960)
            cy.wait(4000)
            this.elements.clickAddBillingAddressButton().click({force:true})
            this.elements.clickAddBillingAddressButton().click({force:true})
        }

        addBillingAddress(){
            this.elements.usernameOfBillingForm().click().clear().type(data.username)
            this.elements.billingAddress().click().clear().type(data.shippingAddress)
            this.elements.billingAddress2().click().clear().type(data.shippingAddress)
            this.elements.billingCountry().select("Pakistan").should("have.value","Pakistan")
            this.elements.billingState().click().clear().type(data.state)
            this.elements.billingCity().click().clear().type(data.city)
            this.elements.billingZipCode().click().clear().type(data.postel)
            this.elements.billingPhoneNumber().click().clear().type(data.phone)
            this.elements.saveBillingAddress().contains('Save',{ matchCase: false }).click()
            cy.wait(5000)
            this.elements.updateCustomer().contains('Update',{ matchCase: false }).click()
            this.elements.updateCustomer().contains('Update',{ matchCase: false }).click()
        
        }
    }
  export const adminStaff = new staffAdminPage();