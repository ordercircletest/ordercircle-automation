/// <reference types="cypress" />
import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import {customer} from "../../../pages/customer/customerPage"

Given('user is at login page', async() => {
    cy.visit(Cypress.env("base_url"));
})

When('check some text which is present on dashbord',()=>{
    customer.verifyDashborad();
})
Then ('the dashbord verify sucessfully', () => {
    console.log("Text Present");
})

When('user click on customer tab in sidebar',()=>{
    customer.clickOnCustomerTab();
})
Then ('customer tab open successfully', () => {
    console.log("Tab is open");
})

When('user click on add new customer option',()=>{
    customer.selectAddCustomer();
})
Then ('customer component open successfully', () => {
    console.log("Tab is open");
})

When('verify customer page by text is present on customer page',()=>{
    customer.verifyCustomerDashboard();
})
Then ('verify dashborad successfully', () => {
    console.log("Text is present on dashboard");
})

When('enter company information and company phone number',()=>{
    customer.companyInformation();
})
Then ('company information added successfully', () => {
    console.log("company information added successfully");
})

When('enter contact person information',()=>{
    customer.contactPersonInformation();
})
Then ('contact person information added successfully', () => {
    console.log("contact person information added successfully");
})

When('user enter tax info and sales rep',()=>{
    customer.taxInfoAndSalesRef();
})
Then ('tax information added successfully', () => {
    console.log("tax info and sales rep added successfully");
})

When('user select currency and price tier',()=>{
    customer.currencyAndPriceTier();
})
Then ('currency and price tier added', () => {
    console.log("currency and price tier added successfully");
})

When('enter minimum order price in order settings',()=>{
    customer.orderSetting();
})
Then ('price added successfully', () => {
    console.log("order setting price added successfully");
})

When('after completing the form user click on save and edit button',()=>{
    customer.clickOnSaveAndSubmitButton();
})
Then ('customer information saved and customer created successfully', () => {
    console.log("customer information saved successfully");
})

When('verify the edit customer screen by some text which should be present on it',()=>{
    customer.editCustomerScreen();
})
Then ('customer verified that text is present on edit customer screen', () => {
    console.log("user acccess the edit customer screen successfully");
})

When('customer click on add shipping address button to add customer shipping address details',()=>{
    customer.clickAddShippingButton();
})
Then ('customer should be verified shipping address popup is open successfully after click on button', () => {
    console.log("form is open ");
})

When('customer enter shipping address form details when shpping address popup is open',()=>{
    customer.addShipingAddress();
})
Then ('customer entered shipping address form details successfully', () => {
    console.log("username added into popup model form");
})

When('customer click on add billing address button to add customer billing address details',()=>{
    customer.clickBillingAddressButton();
})
Then ('customer should be verified billing address popup is open successfully after click on button', () => {
    console.log("billing address popup open successfull");
})

When('customer enter billing address form details when billing address popup is open',()=>{
    customer.addBillingAddress();
})
Then ('customer entered billing address form details successfully', () => {
    console.log("billing address added successfull");
})

Then('Customer should click on customer list which is available in customer list', () => {
    customer.clickOnCustomersList();
})


// When('user enter the Tax Rate Override if setting is enabled by default',()=>{
//     customer.contactPersonInformation();
// })
// Then ('tax rate override information added successfully', () => {
//     console.log("TRO added successfully");
// })
// When('user enter defualt payment terms according to days',()=>{
//     customer.contactPersonInformation();
// })
// Then ('enter defualt payment information added successfully', () => {
//     console.log("DPT added successfully");
// })
