import cypress = require("cypress");
import selectors from "../../support/selectors";
import data from '../../e2e/data/inputs.js'

export class productCreationByStaffDashborad {
    elements = {
        textVerify:() => cy.get(selectors.addNewProductByStaff.textVerify),
        clickProductTab:() => cy.get(selectors.addNewProductByStaff.clickProductTab),
        selectAddNewProduct:() => cy.get(selectors.addNewProductByStaff.selectAddNewProduct),
        verifyCreateProductPage:() => cy.get(selectors.addNewProductByStaff.verifyCreateProductPage),
        ProductName:() => cy.get(selectors.addNewProductByStaff.ProductName),
        // ProductSKU:() => cy.get(selectors.addNewProductByStaff.ProductSKU),
        productUPC:() => cy.get(selectors.addNewProductByStaff.productUPC),
        productDescription:() => cy.get(selectors.addNewProductByStaff.productDescription),
        unitPerPack:()=> cy.get(selectors.addNewProductByStaff.unitPerPack),
        minimumPurchaseQuantityOfProduct:() => cy.get(selectors.addNewProductByStaff.minimumPurchaseQuantityOfProduct),
        maximumPurchaseQuantityOfProduct:() => cy.get(selectors.addNewProductByStaff.maximumPurchaseQuantityOfProduct),
        productMSRP:() => cy.get(selectors.addNewProductByStaff.productMSRP),
        TrackInventoryOfProduct:() => cy.get(selectors.addNewProductByStaff.TrackInventoryOfProduct),
        inventoryLevelOfProduct:() => cy.get(selectors.addNewProductByStaff.inventoryLevelOfProduct),
        leadTimeDays:() => cy.get(selectors.addNewProductByStaff.leadTimeDays),
        shippingWeight:() => cy.get(selectors.addNewProductByStaff.shippingWeight),
        clickOnSubmitButton:() => cy.get(selectors.addNewProductByStaff.clickOnSubmitButton)

        
        };

        verifyStaffDashboradScreen(){
            cy.viewport(1536, 960)
            this.elements.textVerify().should('have.text', 'Dashboard')
            cy.wait(2000);
        }

        clickOnProductTabPresentInSidebar(){
            cy.viewport(1536, 960)
            this.elements.clickProductTab().contains('Products',{ matchCase: false }).click()
            cy.wait(2000);
        }

        clickAddNewProductOptionInDropdown(){
            cy.viewport(1536, 960)
            this.elements.selectAddNewProduct().contains('Add New Product',{ matchCase: false }).click({force: true})
        }

        staffVerifiedTheProductCreationPage(){
            cy.viewport(1536, 960)
            cy.wait(2000)
            this.elements.verifyCreateProductPage().should('have.text','Basic Information')
        }

        addFromFieldsToCreateNewProduct(){ 
            cy.viewport(1536, 960)
            this.elements.ProductName().should('have.class','form-control').and("be.visible")
            .click().clear()
            .type(data.productName)

            cy.randomProductSku()

            this.elements.productUPC().should('have.class','form-control').and("be.visible")
            .click().clear()
            .type(data.productUpc)
            this.elements.productDescription().should('have.class','form-control').and("be.visible")
            .click().clear()
            .type(data.productDescription)
            this.elements.unitPerPack().should('have.class','form-control').and("be.visible")
            .click().clear()
            .type(data.productUnitPerPack)

            this.elements.minimumPurchaseQuantityOfProduct().should('have.class','form-control')
            .and("be.visible").click().clear()
            .type(data.productMinimunPurchase)

            this.elements.maximumPurchaseQuantityOfProduct().should('have.class','form-control')
            .and("be.visible").click().clear()
            .type(data.productMaximunPurchase)

            this.elements.productMSRP().should('have.class','form-control')
            .and("be.visible").click().clear()
            .type(data.productMsrp)

            this.elements.TrackInventoryOfProduct().click({force: true})

            this.elements.inventoryLevelOfProduct().should('have.class','form-control')
            .and("be.visible").click().clear()
            .type(data.inventoryLevel)
            this.elements.leadTimeDays().should('have.class','form-control')
            .and("be.visible").click().clear()
            .type(data.leadTime)
            this.elements.shippingWeight().should('have.class','form-control')
            .and("be.visible").click().clear()
            .type(data.shippingWeight)
        }

        staffClickOnSubmitButton(){

            this.elements.clickOnSubmitButton().should("be.visible").click({force: true})
        }
        
        
    }

  export const newProduct = new productCreationByStaffDashborad();