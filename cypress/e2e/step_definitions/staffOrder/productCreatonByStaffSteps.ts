/// <reference types="cypress" />
import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import {newProduct} from "../../../pages/staffOrder/productCreationByStaff"

Given('user is at login page', async() => {
    cy.visit(Cypress.env("base_url"));
})

When('check some text which is present on staff dashbord',()=>{
    newProduct.verifyStaffDashboradScreen();
})
Then ('the staff dashbord is verified sucessfully', () => {
    console.log("Text Present is present on staff dashboard");
})

When('staff should be click on product text which is visible in sidebar menu',()=>{
    newProduct.clickOnProductTabPresentInSidebar();
})
Then ('the product tab is open when staff clicked on it to', () => {
    console.log("sidebar Tab is open successfully");
})

When('staff should be click on add new product option from dropdown',()=>{
    newProduct.clickAddNewProductOptionInDropdown();
})
Then ('staff clicked successfully and staff now on create product page', () => {
    console.log("create product page is open");
})

When('staff should be verify by checking some text which is present on create product screen',()=>{
    newProduct.staffVerifiedTheProductCreationPage();
})
Then ('staff verified the product creation page by verification of some text', () => {
    console.log("product creation page verified successfully");
})

When('Staff should add the form details correctly which is required to create new product',()=>{
    newProduct.addFromFieldsToCreateNewProduct();
})
Then ('Staff entered the form details which is required for product creation', () => {
    console.log("product form fields updated successfully");
})

When('Staff should click on submit button which is required to create new product',()=>{
    newProduct.staffClickOnSubmitButton();
})
Then ('Staff clicked succesfully on submit button which is required to create new product', () => {
    console.log("product form fields verifi successfully");
})

