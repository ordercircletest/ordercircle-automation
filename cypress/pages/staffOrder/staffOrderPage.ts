import cypress = require("cypress");
import selectors from "../../support/selectors";
import data from '../../e2e/data/inputs.js'
import { And } from "cypress-cucumber-preprocessor/steps/index";

export class staffOrderPage {
    elements = {

        textVerify:() => cy.get(selectors.orderFromStaff.textVerify),
        clickSideBarStaffOption:() =>cy.get(selectors.orderFromStaff.clickSideBarStaffOption),
        addNewOrder:() => cy.get(selectors.orderFromStaff.addNewOrder),
        verifyOrderPage:() => cy.get(selectors.orderFromStaff.verifyOrderPage),
        clickCustomerAccountInput:() => cy.get(selectors.orderFromStaff.clickCustomerAccountInput),
        selectCustomerAccounts:() => cy.get(selectors.orderFromStaff.selectCustomerAccounts),
        nextStepButton:() => cy.get(selectors.orderFromStaff.nextStepButton),
        clickProductDropdown:() => cy.get(selectors.orderFromStaff.clickProductDropdown),
        selectProductsFromList:() => cy.get(selectors.orderFromStaff.selectProductsFromList),
        additionalDiscount:() => cy.get(selectors.orderFromStaff.additionalDiscount),
        clickToCloseList:() => cy.get(selectors.orderFromStaff.clickToCloseList),
        discountOption:() => cy.get(selectors.orderFromStaff.discountOption),
        addAddtionalDiscount:()=> cy.get(selectors.orderFromStaff.addAddtionalDiscount),
        discountButton:()=> cy.get(selectors.orderFromStaff.discountButton),
        verifyBillingAndShippingPage:()=> cy.get(selectors.orderFromStaff.verifyBillingAndShippingPage),
        clickBillingAddressButton:()=> cy.get(selectors.orderFromStaff.clickBillingAddressButton),
        customerName:() => cy.get(selectors.orderFromStaff.customerName),
        billingAddress:() => cy.get(selectors.orderFromStaff.billingAddress),
        billingAddress2:() => cy.get(selectors.orderFromStaff.billingAdrress2),
        billingCountry:() => cy.get(selectors.orderFromStaff.billingCountry),
        billingState:() => cy.get(selectors.orderFromStaff.billingState),
        billingCity:() => cy.get(selectors.orderFromStaff.billingCity),
        postCode:() => cy.get(selectors.orderFromStaff.postCode),
        customerPhoneNumber:() => cy.get(selectors.orderFromStaff.customerPhoneNumber),
        clickOnShippingAddress:() => cy.get(selectors.orderFromStaff.clickOnShippingAddress),
        shippingCustomerName:() => cy.get(selectors.orderFromStaff.shippingCustomerName),
        shippingAddress:() => cy.get(selectors.orderFromStaff.shippingAddress),
        shippingAddress2:() => cy.get(selectors.orderFromStaff.shippingAddress2),
        shippingCountry:() => cy.get(selectors.orderFromStaff.shippingCountry),
        shippingState:() => cy.get(selectors.orderFromStaff.shippingState),
        shippingCity:() => cy.get(selectors.orderFromStaff.shippingCity),
        shippingPostCode:() => cy.get(selectors.orderFromStaff.shippingPostCode),
        shippingPhoneNumber:() => cy.get(selectors.orderFromStaff.shippingPhoneNumber),
        verifyNotesAndShipping:() => cy.get(selectors.orderFromStaff.verifyNotesAndShipping),
        customerNotes:() => cy.get(selectors.orderFromStaff.customerNotes),
        staffNotes:() => cy.get(selectors.orderFromStaff.staffNotes),
        customerPO:() => cy.get(selectors.orderFromStaff.customerPO),
        orderTags:() => cy.get(selectors.orderFromStaff.orderTags),
        termsAndConditionsCheckBox:() => cy.get(selectors.orderFromStaff.termsAndConditionsCheckBox),
        submitOrderButton:() => cy.get(selectors.orderFromStaff.submitOrderButton),
        orderCompletedPopUpButton:() => cy.get(selectors.orderFromStaff.orderCompletedPopUpButton)



        };

        verifyDashborad(){
            cy.viewport(1536, 960)
            this.elements.textVerify().should('have.text', 'Dashboard')
            .and('be.visible') 
            cy.wait(2000);
        }

        clickStaffTabOnSidebar(){
            cy.viewport(1536, 960)
            this.elements.clickSideBarStaffOption().contains('Orders',{ matchCase: false })
            .and('be.visible')
            .click({force: true})
        }

            clickAddNewOrderTabFromStaff(){
            cy.viewport(1536, 960)
            this.elements.addNewOrder().contains('Add New Order',{ matchCase: false })
            .and('have.class','menu-text')
            .click({force: true})
            cy.wait(2000);
        }

        verifyStaffOrderPage(){
            cy.viewport(1536, 960)
            this.elements.verifyOrderPage().should('have.text','Create Order')
            .and('be.visible')
            cy.wait(2000);
        }

        addCustomerFromList(){
            cy.viewport(1536, 960)
            // vue-multiselect: the text input has 0 width until the dropdown is opened
            this.elements.clickCustomerAccountInput().parents('.multiselect').first().click()
            this.elements.clickCustomerAccountInput().type('Zohn', {force: true})
            cy.wait(1500)
            this.elements.clickCustomerAccountInput().type('{enter}', {force: true})
            this.elements.nextStepButton().contains("Next Step",{ matchCase: false }).and("be.visible").click()
        }

        addNewProductFromList(){
            cy.viewport(1536, 960)
            this.elements.clickProductDropdown().first().click()
           
            // add a couple of products; the app rejects products from different categories with a popup
            for (var i = 0; i < 2; i++) {
                this.elements.selectProductsFromList().filter(':visible').first().click()
                cy.wait(1500)
                cy.get('body').then(($body) => {
                    if ($body.find('.swal2-confirm:visible').length) {
                        cy.get('.swal2-confirm:visible').click()
                    }
                })
            }

            this.elements.clickToCloseList().click()
            cy.wait(1000)
            // the additional-discount link markup changed; only apply the discount when it is present
            cy.get('body').then(($body) => {
                if ($body.find("label[class='col-md-6 col-sm-6 btn-link orderInvoiceLabels'] u").length) {
                this.elements.additionalDiscount().click()
                this.elements.discountOption().select('Fixed Amount').and('be.visible')
                this.elements.addAddtionalDiscount().clear().type(data.addtionalDiscount);
                this.elements.discountButton().contains('Add',{ matchCase: false }).and('be.visible').click()
                }
            })
            this.elements.nextStepButton().contains("Next Step",{ matchCase: false }).and("be.visible").click()
        }

        verifyBillingAndShippingPage(){
            cy.viewport(1536, 960)
            this.elements.verifyBillingAndShippingPage().contains("Billing Address",{ matchCase: false })
            .and("be.visible")
        }
       
        clickOnBillingAddress(){
            cy.viewport(1536, 960)
            this.elements.clickBillingAddressButton().contains("Add a New Billing Address",{ matchCase: false })
            .and("be.visible").click()
        }

        fillBillingAddressForm(){
            cy.viewport(1536, 960)
            this.elements.customerName().click().clear().type(data.username)
            this.elements.billingAddress().click().clear().type(data.customerBillingAddress)
            this.elements.billingAddress2().click().clear().type(data.customerBillingAddress2)
            this.elements.billingCountry().select("Pakistan").should("have.value","Pakistan")
            this.elements.billingState().click().clear().type(data.customerBilingState)
            this.elements.billingCity().click().clear().type(data.customerBillingCity)
            this.elements.postCode().click().clear().type(data.customerPostCode)
            this.elements.customerPhoneNumber().click().clear().type(data.customerBillingPhone)
        }

        openShippingForm(){
            cy.viewport(1536, 960)
            this.elements.clickOnShippingAddress().click({force: true})
        }

        fillShippingAddressForm(){
            cy.viewport(1536, 960)
            this.elements.shippingCustomerName().click().clear().type(data.username)
            this.elements.shippingAddress().click().clear().type(data.customerBillingAddress)
            this.elements.shippingAddress2().click().clear().type(data.customerBillingAddress2)
            this.elements.shippingCountry().select("Pakistan").should("have.value","Pakistan")
            this.elements.shippingState().click().clear().type(data.customerBilingState)
            this.elements.shippingCity().click().clear().type(data.customerBillingCity)
            this.elements.shippingPostCode().click().clear().type(data.customerPostCode)
            this.elements.shippingPhoneNumber().click().clear().type(data.customerBillingPhone)
        }

        nextStepButton(){
            cy.viewport(1536, 960)
            this.elements.nextStepButton().contains('Next Step',{ matchCase: false }).click({force: true})
            cy.wait(1000);
        }

        verifyNotesAndShippingPage(){
            cy.viewport(1536, 960)
            this.elements.verifyNotesAndShipping().contains("Notes & Shipping Methods",{ matchCase: false })
        }

        addNotesAndShippingMethod(){
            cy.viewport(1536, 960)
            this.elements.customerPO().click().type(data.staffSideCustomerPo)
            // this.elements.orderTags().click().type("aaa,{enter}")
            this.elements.nextStepButton().contains('Next Step',{ matchCase: false }).click({force: true})
        }

        reviewSubmit(){
            cy.viewport(1536, 960)
            // this.elements.termsAndConditionsCheckBox().click()
            this.elements.submitOrderButton().contains('Submit',{ matchCase: false }).click({force: true})
            cy.wait(3000);
            this.elements.orderCompletedPopUpButton().contains('OK',{ matchCase: false }).click()
        }

        

        

  }
  export const staffOrder = new staffOrderPage();