import cypress = require("cypress");
import selectors from "../../support/selectors";
import data from '../../e2e/data/inputs.js'

export class productPage {
    elements = {
        textVerify: () => cy.get(selectors.product.textVerify),
        clickProductTab: () => cy.get(selectors.product.clickProductTab),
        selectAddNewProduct: () => cy.get(selectors.product.selectAddNewProduct),
        verifyCreateProductPage: () => cy.get(selectors.product.verifyCreateProductPage),
        productName: () => cy.get(selectors.product.productName),
        productSKU: () => cy.get(selectors.product.productSKU),
        productUPC: () => cy.get(selectors.product.productUPC),
        ProductCategory: () => cy.get(selectors.product.ProductCategory).select('Uncategorized', { force: true }),
       // productVendor: () => cy.get(selectors.product.productVendor),
       // productPoCost: () => cy.get(selectors.product.productPoCost),
        productDescription: () => cy.get(selectors.product.productDescription),
        productUnits: () => cy.get(selectors.product.productUnits),
        productMinimumPurchaseQuantity: () => cy.get(selectors.product.productMinimumPurchaseQuantity),
        productMaximumPurchaseQuantity: () => cy.get(selectors.product.productMaximumPurchaseQuantity),
        productCustomField: () => cy.get(selectors.product.productCustomField),
        clickproductCollection: () => cy.get(selectors.product.clickproductCollection),
        selectProductCollection: () => cy.get(selectors.product.selectProductCollection),
        useVolumePriceTiers: () => cy.get(selectors.product.useVolumePriceTiers),
        manufacturersSuggestedRetailPrice: () => cy.get(selectors.product.manufacturersSuggestedRetailPrice),
        quantity: () => cy.contains('.form-group.row', 'Quantity: 6-10').find('select'),
        quantityPrice: () => cy.contains('.form-group.row', 'Quantity: 6-10').find('input.form-elements').filter(':visible'),
        quantity2: () => cy.contains('.form-group.row', 'Quantity: 11-15').find('select'),
        quantityPrice2: () => cy.contains('.form-group.row', 'Quantity: 11-15').find('input.form-elements').filter(':visible'),
    

        trackInventory: () => cy.get(selectors.product.trackInventory),
        inventoryLevel: () => cy.get(selectors.product.inventoryLevel),
        leadTime: () => cy.get(selectors.product.leadTime),
        shippingWeight: () => cy.get(selectors.product.shippingWeight),
        productVariants: () => cy.get(selectors.product.productVariants),
        variantOptions: () => cy.get(selectors.product.variantOptions),
        variantsTags: () => cy.get(selectors.product.variantsTags),
        addAnotherVariantOption: () => cy.get(selectors.product.addAnotherVariantOption),
        submitButtonToCreateProduct: () => cy.get(selectors.product.submitButtonToCreateProduct),
        removeVariantOption: () => cy.get(selectors.product.removeVariantOption),
        removeVariantFromPopUp: () => cy.get(selectors.product.removeVariantFromPopUp)
    };

    verifyDashborad() {
        cy.viewport(1536, 960)
        this.elements.textVerify().should('have.text', 'Dashboard')
        cy.wait(2000);
    }

    clickOnProductTab() {
        cy.viewport(1536, 960)
        this.elements.clickProductTab().contains('Products', { matchCase: false }).click()
        cy.wait(2000);
    }

    clickAddNewProduct() {
        cy.viewport(1536, 960)
        this.elements.selectAddNewProduct().contains('Add New Product', { matchCase: false }).click({ force: true })
    }

    productPageVerification() {
        cy.viewport(1536, 960)
        cy.wait(3000)
        this.elements.verifyCreateProductPage().should('have.text', 'Basic Information')
    }

    enterProductInformation() {
        cy.viewport(1536, 960)
        this.elements.productName().click().clear().type(data.productName)
        // this.elements.productSKU().click().clear().type(data.productSku)
        cy.randomText()
        this.elements.productUPC().click().clear().type(data.productUpc)
        this.elements.ProductCategory()
        cy.wait(500)
        cy.get(selectors.product.ProductCategory).select('Uncategorized')
        // this.elements.ProductCategory().select('Parent').contains('Parent',{ matchCase: false })
       // this.elements.productVendor().select('Roth Dalton').contains('Roth Dalton', { matchCase: false })
        //this.elements.productPoCost().click().clear().type(data.productPoCost)
        this.elements.productDescription().click().clear().type(data.productDescription)
        this.elements.productUnits().click().clear().type(data.productUnitPerPack)
        this.elements.productMinimumPurchaseQuantity().click().clear().type(data.productMinimunPurchase)
        this.elements.productMaximumPurchaseQuantity().click().clear().type(data.productMaximunPurchase)
        this.elements.productCustomField().click().clear().type(data.productCustomField)
        this.elements.clickproductCollection().should("be.visible").click()
        this.elements.clickproductCollection().type('a')
        cy.wait(1000)
        this.elements.selectProductCollection().first().should('be.visible').click()

    }

     volumePriceTiers() {
    cy.viewport(1536, 960)
    this.elements.useVolumePriceTiers().should("be.visible").click()
    this.elements.useVolumePriceTiers().first().should("be.visible").click()
    this.elements.useVolumePriceTiers().first().should("be.visible").click()
    this.elements.manufacturersSuggestedRetailPrice().first().click().clear().type(data.manufacturersSuggestedRetailPrice)
    this.elements.quantity().select("Fixed Price Amount").should('have.value', 'fixedAmount')
    cy.wait(1500) // the form re-renders after the discount type changes
    this.elements.quantityPrice().first().click({force: true}).clear({force: true}).type(data.quantityPrice, {force: true})
    this.elements.quantityPrice2().first().click({force: true}).clear({force: true}).type(data.quantityPrice2, {force: true})
    
}

    trackProductInventory() {
        cy.viewport(1536, 960)
        this.elements.trackInventory().click({ force: true })
        this.elements.inventoryLevel().click().clear().type(data.inventoryLevel)
        this.elements.leadTime().click().clear().type(data.leadTime)
        this.elements.shippingWeight().click().clear().type(data.shippingWeight)
    }
    selectProductVarientsCheckBox() {
        cy.viewport(1536, 960)
       
        cy.get(selectors.product.productVariants, { timeout: 10000 })
            .should('exist')
            .scrollIntoView()
            .wait(500)
            .check({ force: true }) 
        cy.get(selectors.product.productVariants)
            .should('be.checked')
    }

    addProductVarients() {
        cy.viewport(1536, 960)
        cy.wait(2000)
        cy.get(selectors.product.productVariants)
            .check({ force: true })
        cy.wait(1000)
        cy.get(selectors.product.variantOptions)
           .should('be.visible')
           .should('be.enabled')
           .click({ multiple: true })
           .clear()
           .type(data.variantsOptions)
        
        this.elements.variantsTags()
            .should('be.visible')
            .click()
            .clear()
            .type(data.variantsAccordingColors)
        
        this.elements.addAnotherVariantOption()
            .contains('Add another option', { matchCase: false })
            .click()
        
        this.elements.removeVariantOption()
            .contains('Remove', { matchCase: false })
            .click()
        
        this.elements.removeVariantFromPopUp()
            .contains('OK', { matchCase: false })
            .click()
    }

    clickSubmitButton() {
        cy.viewport(1536, 960)
        this.elements.submitButtonToCreateProduct().contains('Submit', { matchCase: false }).click()
    }


}

export const product = new productPage();