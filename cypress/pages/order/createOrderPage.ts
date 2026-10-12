import cypress = require("cypress");
import selectors from "../../support/selectors";
import data from '../../e2e/data/inputs.js'
export class createOrderPage {
    elements = {
        logoutButton:() => cy.get(selectors.order.logoutButton),
        textVerify:() => cy.get(selectors.order.textVerify),
        clickOrderTab:() => cy.get(selectors.order.clickOrderTab),
        createOreder:() => cy.get(selectors.order.createOreder),
        verifyOrderScreen:() => cy.get(selectors.order.verifyOrderScreen),
        addCustomer:() => cy.get(selectors.order.addCustomer),
        selectedCustomer:() => cy.get(selectors.order.selectedCustomer),
        stepButton:() => cy.get(selectors.order.stepButton),
        verifyProductScreen: () => cy.get(selectors.order.verifyProductScreen),
        addProducts:() => cy.get(selectors.order.addProducts),
        selection:() => cy.get(selectors.order.selection),
        verifyBillingAndShippingPage:()=> cy.get(selectors.order.verifyBillingAndShippingPage),
        clickBillingAddressButton:()=> cy.get(selectors.order.clickBillingAddressButton),
        customerName:() => cy.get(selectors.order.customerName),
        billingAddress:() => cy.get(selectors.order.billingAddress),
        billingAddress2:() => cy.get(selectors.order.billingAdrress2),
        billingCountry:() => cy.get(selectors.order.billingCountry),
        billingState:() => cy.get(selectors.order.billingState),
        billingCity:() => cy.get(selectors.order.billingCity),
        postCode:() => cy.get(selectors.order.postCode),
        customerPhoneNumber:() => cy.get(selectors.order.customerPhoneNumber),
        clickOnShippingAddress:() => cy.get(selectors.order.clickOnShippingAddress),
        shippingCustomerName:() => cy.get(selectors.order.shippingCustomerName),
        shippingAddress:() => cy.get(selectors.order.shippingAddress),
        shippingAddress2:() => cy.get(selectors.order.shippingAddress2),
        shippingCountry:() => cy.get(selectors.order.shippingCountry),
        shippingState:() => cy.get(selectors.order.shippingState),
        shippingCity:() => cy.get(selectors.order.shippingCity),
        shippingPostCode:() => cy.get(selectors.order.shippingPostCode),
        shippingPhoneNumber:() => cy.get(selectors.order.shippingPhoneNumber),
        verifyNotesAndShipping:() => cy.get(selectors.order.verifyNotesAndShipping),
        customerNotes:() => cy.get(selectors.order.customerNotes),
        staffNotes:() => cy.get(selectors.order.staffNotes),
        customerPO:() => cy.get(selectors.order.customerPO),
        orderTags:() => cy.get(selectors.order.orderTags),
        termsAndConditionsCheckBox:() => cy.get(selectors.order.termsAndConditionsCheckBox),
        submitOrderButton:() => cy.get(selectors.order.submitOrderButton),
        orderCompletedPopUpButton:() => cy.get(selectors.order.orderCompletedPopUpButton)
        };
        

    verifyDashborad(){
        cy.viewport(1536, 960)
        this.elements.textVerify().should('have.text', 'Dashboard').and('be.visible');
        cy.wait(3000);
    }

    clickOnOrderTab(){
        cy.viewport(1536, 960)
        this.elements.clickOrderTab().click({force: true})
    }

    
    
//     addNewOreder(){
//     cy.viewport(1536, 960)
//     this.elements.createOreder().contains("Add New Order").click({force: true})
//     this.elements.verifyOrderScreen().should('have.text', 'Customer Account');
//     this.elements.addCustomer().click({force: true})
//     this.elements.selectedCustomer().click()
//     this.elements.stepButton().contains("Next Step").click()
//     cy.wait(3000);
// }
addNewOreder(){
    cy.viewport(1536, 960)
    this.elements.createOreder().contains("Add New Order").click({force: true})
    this.elements.verifyOrderScreen().should('have.text', 'Customer Account');
    // vue-multiselect: the text input has 0 width until the dropdown is opened
    this.elements.addCustomer().parents('.multiselect').first().click()
    this.elements.addCustomer().type('Zohn', {force: true})
    cy.wait(1500)
    this.elements.addCustomer().type('{enter}', {force: true})
    this.elements.stepButton().contains("Next Step").click()
    cy.wait(3000);

}

    selectProduct(){
        cy.viewport(1536, 960)
        this.elements.verifyProductScreen().should('have.text', 'Zohn');
        this.elements.addProducts().first().click()
        for (var i = 1; i < 10; i++) {
            this.elements.selection().filter(":visible").first().click()
         }
        this.elements.selection().filter(":visible").first().click()
        this.elements.stepButton().contains("Next Step").click()
        cy.wait(3000);
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
        this.elements.stepButton().contains('Next Step').click({force: true})
        cy.wait(1000);
    }

    verifyNotesAndShippingPage(){
        cy.viewport(1536, 960)
        this.elements.verifyNotesAndShipping().contains("Notes and Shipping Methods",{ matchCase: false })
    }

    addNotesAndShippingMethod(){
        cy.viewport(1536, 960)
        this.elements.customerPO().click().type(data.staffSideCustomerPo)
        this.elements.stepButton().contains('Next Step',{ matchCase: false }).click({force: true})
    }

    reviewSubmit(){
        cy.viewport(1536, 960)
        // this.elements.termsAndConditionsCheckBox().click()
        this.elements.submitOrderButton().contains('Submit',{ matchCase: false }).click({force: true})
        cy.wait(3000);
        this.elements.orderCompletedPopUpButton().contains('OK',{ matchCase: false }).click()
    }
  
}

  export const orderCreation = new createOrderPage();




        