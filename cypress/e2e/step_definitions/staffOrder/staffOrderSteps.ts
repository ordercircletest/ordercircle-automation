/// <reference types="cypress" />
import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import {staffOrder} from "../../../pages/staffOrder/staffOrderPage"

Given('user is at login page', async() => {
    cy.visit(Cypress.env("base_url"));
})

When('check some text which is present on dashbord',()=>{
    staffOrder.verifyDashborad();
})
Then ('the dashbord verify sucessfully', () => {
    console.log("Text Present");
})

When('staff click on sidebar staff option',()=>{
    staffOrder.clickStaffTabOnSidebar();
})
Then ('staff tab open successfully', () => {
    console.log("Tab is open successfully");
})

When('staff click on add new order option in sidebar',()=>{
    staffOrder.clickAddNewOrderTabFromStaff();
})
Then ('order page of staff is open successfully', () => {
    console.log("Order page is open");
})

When('staff verify order page by text',()=>{
    staffOrder.verifyStaffOrderPage();
})
Then ('order page of staff verified successfully', () => {
    console.log("Order page verified successfully");
})

When('When staff select customer from customer account dropdown',()=>{
    staffOrder.addCustomerFromList();
})
Then ('Then customer selected from customer list', () => {
    console.log("dropdown open successfully");
})

// When('staff select customer from customer account dropdown',()=>{
//     staffOrder.addCustomerFromList();
// })
// Then ('customer selected from customer list', () => {
//     console.log("customer selected successfully");
// })
// And('customers account dropdown open',()=>{
//     staffOrder.addCustomerFromList();
// })

When('staff select product from product dropdown',()=>{
    staffOrder.addNewProductFromList();
})
Then ('product selected from product list', () => {
    console.log("product selected successfully");
})

When('verify billing and shipping address page',()=>{
    staffOrder.verifyBillingAndShippingPage();
})
Then ('billing and shipping verified successfully', () => {
    console.log("verified successfully");
})

When('staff click on Billing Address button',()=>{
    staffOrder.clickOnBillingAddress();
})
Then ('billing address form open successfully', () => {
    console.log("form open successfully");
})

When('staff enter required fileds of billing address form',()=>{
    staffOrder.fillBillingAddressForm();
})
Then ('form fields updated and ready to submit', () => {
    console.log("billing form is updated successfully");
})

When('staff click add new shipping address link',()=>{
    staffOrder.openShippingForm();
})
Then ('shipping new address form is open', () => {
    console.log("shipping form is open successfully");
})

When('staff enter required fileds of shipping address form',()=>{
    staffOrder.fillShippingAddressForm();
})
Then ('shipping form fields updated and ready to submit', () => {
    console.log("shipping form is open successfully");
})

When('staff click on next step button',()=>{
    staffOrder.nextStepButton();
})
Then ('next page is open successfully', () => {
    console.log("next page is open successfully");
})

When('verify Notes & Shipping Methods page',()=>{
    staffOrder.verifyNotesAndShippingPage();
})
Then ('Notes & Shipping Methods verified successfully', () => {
    console.log("verified successfully");
})

When('staff enter shipping notes into required field',()=>{
    staffOrder.addNotesAndShippingMethod();
})
Then ('form fields updated successfully', () => {
    console.log("verified successfully");
})

When('staff checked the check box of terms and conditions',()=>{
    staffOrder.reviewSubmit();
})
Then ('terms and conditions updated successfully', () => {
    console.log("terms and conditions fields updated successfully");
})
