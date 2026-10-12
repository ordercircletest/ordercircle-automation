import cypress = require("cypress");
import selectors from "../../support/selectors";
import data from '../../e2e/data/inputs.js'

export class ShopSideOrder {
    elements = {
        textVerify:() => cy.get(selectors.shopSide.textVerify),
        clickCreateOrderTab:() => cy.get(selectors.shopSide.clickCreateOrderTab),
        createNewOrder:() => cy.get(selectors.shopSide.createNewOrder),
        verifyCreateOrderPagelabel:() => cy.get(selectors.shopSide.verifyCreateOrderPagelabel),
        clickProductDropdown:() => cy.get(selectors.shopSide.clickProductDropdown),
        selectProductsFromList:() => cy.get(selectors.shopSide.selectProductsFromList),
        clickOnAddNewBillingAdress:() => cy.get(selectors.shopSide.clickOnAddNewBillingAdress),
        nextStepButton:() => cy.get(selectors.shopSide.nextStepButton),
        customerName:() => cy.get(selectors.shopSide.customerName),
        billingAddress:() => cy.get(selectors.shopSide.billingAddress),
        billingAddress2:() => cy.get(selectors.shopSide.billingAdrress2),
        billingCountry:() => cy.get(selectors.shopSide.billingCountry),
        billingState:() => cy.get(selectors.shopSide.billingState),
        billingCity:() => cy.get(selectors.shopSide.billingCity),
        postCode:() => cy.get(selectors.shopSide.postCode),
        customerPhoneNumber:() => cy.get(selectors.shopSide.customerPhoneNumber),
        clickOnShippingAddress:() => cy.get(selectors.shopSide.clickOnShippingAddress),
        shippingCustomerName:() => cy.get(selectors.shopSide.shippingCustomerName),
        shippingAddress:() => cy.get(selectors.shopSide.shippingAddress),
        shippingAddress2:() => cy.get(selectors.shopSide.shippingAddress2),
        shippingCountry:() => cy.get(selectors.shopSide.shippingCountry),
        shippingState:() => cy.get(selectors.shopSide.shippingState),
        shippingCity:() => cy.get(selectors.shopSide.shippingCity),
        shippingPostCode:() => cy.get(selectors.shopSide.shippingPostCode),
        shippingPhoneNumber:() => cy.get(selectors.shopSide.shippingPhoneNumber),
        notesOfShippingMethod:() => cy.get(selectors.shopSide.notesOfShippingMethod),
        purchaseOrder:() => cy.get(selectors.shopSide.purchaseOrder),
        termsAndConditionsCheckBox:() => cy.get(selectors.shopSide.termsAndConditionsCheckBox),
        submitOrderButton:() => cy.get(selectors.shopSide.submitOrderButton),
        orderCompletedPopUpButton:() => cy.get(selectors.shopSide.orderCompletedPopUpButton)
        
        };

        verifyShopDashborad(){
            cy.viewport(1536, 960)
            this.elements.textVerify().should('have.text', 'Shop')
            cy.wait(2000);
        }

        openOrderTab(){
            cy.viewport(1536, 960)
            this.elements.clickCreateOrderTab().contains('Orders').click()
        }

        ClickAddNewOrderDropdownMenu(){
            cy.viewport(1536, 960)
            this.elements.createNewOrder().contains('Add New Order').click({force: true})
        }

        verifyCreateOrderScreen(){
            cy.viewport(1536, 960)
            this.elements.verifyCreateOrderPagelabel().should('have.text', 'Payment Due*')
        }
        addNewProductFromList(){
            cy.viewport(1536, 960)
            this.elements.clickProductDropdown().should('have.class','multiselect__placeholder').click()
           
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

            cy.wait(1000)
            this.elements.nextStepButton().contains("Next Step").click()

        }

        openBillingAddressForm(){
            cy.viewport(1536, 960)
            this.elements.clickOnAddNewBillingAdress().contains("Add a New Billing Address").click({force: true})
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
            this.elements.nextStepButton().contains('Next Step').click({force: true})
            cy.wait(3000);
        }

        fillNotesAndShippingMethods(){
            cy.viewport(1536, 960)
            this.elements.notesOfShippingMethod().click().clear().type(data.notesOfShippingMethod)
            this.elements.purchaseOrder().click().clear().type(data.purchaseOrder)
            // this.elements.notesOfShippingMethod().click().clear().type(data.notesOfShippingMethod)
            // this.elements.purchaseOrder().click().clear().clear().type(data.purchaseOrder)
            this.elements.nextStepButton().contains('Next Step').click({force: true})
            cy.wait(3000);
        }

        reviewSubmit(){
            cy.viewport(1536, 960)
            // the terms checkbox only exists on some brand settings
            cy.get('body').then(($body) => {
                if ($body.find("input[name='terms_and_conditions']").length) {
                    this.elements.termsAndConditionsCheckBox().click({force: true})
                }
            })
            this.elements.submitOrderButton().contains('Submit').click({force: true})
            cy.wait(3000);
            this.elements.orderCompletedPopUpButton().contains('OK').click()
        }

    }

  export const shopOrder = new ShopSideOrder();

  
  
