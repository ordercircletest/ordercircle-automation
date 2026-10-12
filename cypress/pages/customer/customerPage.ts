import cypress = require("cypress");
import selectors from "../../support/selectors";
import data from '../../e2e/data/inputs.js'

export class customerPage {
    elements = {

        logoutButton:() => cy.get(selectors.customer.logoutButton),
        textVerify:() => cy.get(selectors.customer.textVerify),
        clickCustomerTab:() => cy.get(selectors.customer.clickCustomerTab),
        selectNewCustomer:() => cy.get(selectors.customer.selectNewCustomer),
        verifyDashboard:() => cy.get(selectors.customer.verifyDashboard),
        companyName:() => cy.get(selectors.customer.companyName),
        companyPhoneNumber:() => cy.get(selectors.customer.companyPhoneNumber),
        contactName:() => cy.get(selectors.customer.contactName),
        contactEmail:() => cy.get(selectors.customer.contactEmail),
        contactUsername:() => cy.get(selectors.customer.contactUsername),
        phoneNumber:() => cy.get(selectors.customer.phoneNumber),
        taxId:() => cy.get(selectors.customer.taxId),
        taxRateOverride:() => cy.get(selectors.customer.taxRateOverride),
        defaultPaymentTerms:() => cy.get(selectors.customer.defaultPaymentTerms),
        representative:() => cy.get(selectors.customer.representative),
        priceTier:() => cy.get(selectors.customer.priceTier),
        currency:() => cy.get(selectors.customer.currency),
        minimumOrder:() => cy.get(selectors.customer.minimumOrder),
        saveAndSubmitCustomer:() => cy.get(selectors.customer.saveAndSubmitCustomer),
        verifyEditCustomerScreen:() => cy.get(selectors.customer.verifyEditCustomerScreen),
        clickOnAddShippingAddressButton:() => cy.get(selectors.customer.clickOnAddShippingAddressButton),
        usernameOfShippingForm:() => cy.get(selectors.customer.usernameOfShippingForm),
        shippingAddress:() => cy.get(selectors.customer.shippingAddress),
        shippingAddress2:() => cy.get(selectors.customer.shippingAddress2),
        country:() => cy.get(selectors.customer.country),
        state:() => cy.get(selectors.customer.state),
        city:() => cy.get(selectors.customer.city),
        zipCode:() => cy.get(selectors.customer.zipCode),
        shippingPhoneNumber:() => cy.get(selectors.customer.shippingPhoneNumber),
        saveShippingAddress:() => cy.get(selectors.customer.saveShippingAddress),
        clickAddBillingAddressButton:() => cy.get(selectors.customer.clickAddBillingAddressButton),
        usernameOfBillingForm:() => cy.get(selectors.customer.usernameOfBillingForm),
        billingAddress:() => cy.get(selectors.customer.billingAddress),
        billingAddress2:() => cy.get(selectors.customer.billingAddress2),
        billingCountry:() => cy.get(selectors.customer.billingCountry),
        billingState:() => cy.get(selectors.customer.billingState),
        billingCity:() => cy.get(selectors.customer.billingCity),
        billingZipCode:() => cy.get(selectors.customer.billingZipCode),
        billingPhoneNumber:() => cy.get(selectors.customer.billingPhoneNumber),
        saveBillingAddress:() => cy.get(selectors.customer.saveBillingAddress),
        updateCustomer:() => cy.get(selectors.customer.updateCustomer),
        customersList:() => cy.get(selectors.customer.clickoncustomersList),

        };

        verifyDashborad(){
            cy.viewport(1536, 960)
            this.elements.textVerify().should('have.text', 'Dashboard')
            cy.wait(2000);
        }

        clickOnCustomerTab(){
            cy.viewport(1536, 960)
            this.elements.clickCustomerTab().click()
            cy.wait(2000);
        }

        selectAddCustomer(){
            cy.viewport(1536, 960)
            this.elements.selectNewCustomer().first().click({force: true})
        }

        verifyCustomerDashboard(){
            cy.viewport(1536, 960)
            this.elements.verifyDashboard().should('have.text','Settings')
        }

        companyInformation(){
            // cy.viewport(1536, 960)
            this.elements.companyName().click().type(data.companyName)
            this.elements.companyPhoneNumber().click().clear().type(data.phone)
        }

        contactPersonInformation(){
            // cy.viewport(1536, 960)
            this.elements.contactName().click().clear().type(data.contactName)
            this.elements.contactEmail().click().clear().type(data.contactEmail)
            // this.elements.contactUsername().click().clear().type(data.username)
            cy.random()
            this.elements.phoneNumber().click().clear().type(data.phone)
        }

        taxInfoAndSalesRef(){
            // cy.viewport(1536, 960)
            this.elements.taxId().first().click().clear().type(data.taxId)
            this.elements.taxRateOverride().first().click().clear().type(data.taxOverRide)
            this.elements.defaultPaymentTerms().first().click().clear().type(data.defaultPaymentTerms)
            this.elements.representative().select(0)
        }

        currencyAndPriceTier(){
            this.elements.priceTier().select('MSRP').should('have.text','MSRPWholesale')
            this.elements.currency().select('US Dollar').contains('US Dollar')
        }
        
        orderSetting(){
            this.elements.minimumOrder().click().clear().type(data.minimumOrder)
        }

        clickOnSaveAndSubmitButton(){
            this.elements.saveAndSubmitCustomer().contains('Save & Edit').click()
            cy.wait(5000);
        }

        editCustomerScreen(){
            this.elements.verifyEditCustomerScreen().should('be.visible').click()
        }

        clickAddShippingButton(){
            cy.wait(3000)
            this.elements.clickOnAddShippingAddressButton().click({force:true})
            this.elements.clickOnAddShippingAddressButton().click({force:true})
        }

        addShipingAddress(){
            cy.viewport(1536, 960)
            this.elements.usernameOfShippingForm().click().clear().type(data.username)
            this.elements.shippingAddress().click().clear().type(data.shippingAddress)
            this.elements.shippingAddress2().click().clear().type(data.shippingAddress)
            this.elements.country().select("Pakistan").should("have.value","Pakistan")
            this.elements.state().click().clear().type(data.state)
            this.elements.city().click().clear().type(data.city)
            this.elements.zipCode().click().clear().type(data.postel)
            this.elements.shippingPhoneNumber().click().clear().type(data.phone)
            this.elements.saveShippingAddress().contains('Save').click()
        }

        clickBillingAddressButton(){
            cy.wait(4000)
            this.elements.clickAddBillingAddressButton().click({force:true})
            this.elements.clickAddBillingAddressButton().click({force:true})
        }

        addBillingAddress(){
            cy.viewport(1536, 960)
            this.elements.usernameOfBillingForm().click().clear().type(data.username)
            this.elements.billingAddress().click().clear().type(data.shippingAddress)
            this.elements.billingAddress2().click().clear().type(data.shippingAddress)
            this.elements.billingCountry().select("Pakistan").should("have.value","Pakistan")
            this.elements.billingState().click().clear().type(data.state)
            this.elements.billingCity().click().clear().type(data.city)
            this.elements.billingZipCode().click().clear().type(data.postel)
            this.elements.billingPhoneNumber().click().clear().type(data.phone)
            this.elements.saveBillingAddress().contains('Save').click()
            cy.wait(5000)
            this.elements.updateCustomer().contains('Update').click()
            this.elements.updateCustomer().contains('Update').click()



        }
    clickOnCustomersList(){
        cy.viewport(1536, 960)
        this.elements.customersList().click()
        cy.wait(2000);
  }

}
  export const customer = new customerPage()
