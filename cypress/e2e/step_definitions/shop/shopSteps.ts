/// <reference types="cypress" />
import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import {shopOrder} from "../../../pages/shop/shopPage"

Given('user is at login page', async() => {
    cy.visit(Cypress.env("base_url"));
})
//new chnage line 9 to 14
When('customer enters shop email and password', () => {
      cy.login(Cypress.env("shop_username"), Cypress.env("shop_password"));
  })
  Then ('customer is logged in successfully' ,() => {
    console.log("customer is logged in successfully");
  });
When('check some text which is present on Shop Side dashboard',()=>{
    shopOrder.verifyShopDashborad();
})
Then ('shop side dashbord verify sucessfully', () => {
    console.log("Text Present");
})

When('customer click on order tab in shop side',()=>{
    shopOrder.openOrderTab();
})
Then ('order tab dropdown open successfully', () => {
    console.log("Tab is open");
})

When('customer click on add new order button',()=>{
    shopOrder.ClickAddNewOrderDropdownMenu();
})
Then ('add new order page is open successfully', () => {
    console.log("add new order page is open");
})

When('verify that customer is on create order page',()=>{
    shopOrder.verifyCreateOrderScreen();
})
Then ('create order page verifyed successfully', () => {
    console.log("verifyed create order page");
})

When('customer click on chosse products search box',()=>{
    shopOrder.addNewProductFromList();
})
Then ('products list open successfully', () => {
    console.log("products list is open");
})

// When('customer select products to create new order',()=>{
//     shopOrder.SelectedProductsFromList();
// })
// Then ('products are selected successfully', () => {
//     console.log("products selected");
// })

When('customer click on add new billing address',()=>{
    shopOrder.openBillingAddressForm();
})
Then ('billing address form is open successfully', () => {
    console.log("billing form is open successfully");
})

When('customer enter required fileds of billing address form',()=>{
    shopOrder.fillBillingAddressForm();
})
Then ('form fields updated and ready to submit', () => {
    console.log("billing form is updated successfully");
})

When('customer click add new shipping address link',()=>{
    shopOrder.openShippingForm();
})
Then ('shipping new address form is open', () => {
    console.log("shipping form is open successfully");
})

When('customer enter required fileds of shipping address form',()=>{
    shopOrder.fillShippingAddressForm();
})
Then ('shipping form fields updated and ready to submit', () => {
    console.log("shipping form is open successfully");
})

When('customer click on next step button',()=>{
    shopOrder.nextStepButton();
})
Then ('next page is open successfully', () => {
    console.log("next page is open successfully");
})

When('customer enter shipping notes into required field',()=>{
    shopOrder.fillNotesAndShippingMethods();
})
Then ('form fields updated successfully', () => {
    console.log("form fields updated successfully");
})

When('customer checked the check box of terms and conditions',()=>{
    shopOrder.reviewSubmit();
})
Then ('terms and conditions updated successfully', () => {
    console.log("terms and conditions fields updated successfully");
})



// 